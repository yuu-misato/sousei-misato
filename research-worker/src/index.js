/**
 * 一般質問リサーチAPI - Cloudflare Workers
 * 国会・県議会・市議会の会議録、ニュース、政府資料を横断検索し、AIで分析
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // 検索エンドポイント
      if (path === '/search' && request.method === 'POST') {
        return await handleSearch(request, env);
      }

      // ストリーミングAI分析
      if (path === '/stream-summary') {
        const keyword = url.searchParams.get('keyword');
        return await handleStreamSummary(keyword, env);
      }

      // 国・県・市の見解サマリー
      if (path === '/stream-stance-summary') {
        const keyword = url.searchParams.get('keyword');
        return await handleStreamStance(keyword, env);
      }

      // 質問原稿生成
      if (path === '/stream-draft') {
        const keyword = url.searchParams.get('keyword');
        const report = url.searchParams.get('report') || '';
        return await handleStreamDraft(keyword, report, env);
      }

      // 答弁予測
      if (path === '/stream-answer-prediction') {
        const keyword = url.searchParams.get('keyword');
        const report = url.searchParams.get('report') || '';
        return await handleStreamAnswerPrediction(keyword, report, env);
      }

      // 整合性チェック
      if (path === '/stream-consistency-check') {
        const keyword = url.searchParams.get('keyword');
        return await handleStreamConsistencyCheck(keyword, env);
      }

      // キーワード展開
      if (path === '/expand-keywords' && request.method === 'POST') {
        return await handleExpandKeywords(request, env);
      }

      return new Response(JSON.stringify({ error: 'Not Found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};

// ===========================================
// 検索機能
// ===========================================

async function handleSearch(request, env) {
  const { keyword } = await request.json();
  if (!keyword) {
    return new Response(JSON.stringify({ error: 'キーワードが必要です' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // キーワード展開
  const expandedKeywords = await expandKeywords(keyword, env);
  const searchQuery = expandedKeywords.join(' ');

  // 並列検索
  const [kokkai, saitama, misato, ministry, news, laws, official, nearby, localVoices] = await Promise.all([
    searchKokkai(keyword),
    searchKaigiroku('saitama', searchQuery),
    searchKaigiroku('misato', searchQuery),
    searchMinistries(keyword),
    searchNews(searchQuery),
    searchLaws(keyword),
    searchOfficialSites(keyword),
    searchNearbyCities(searchQuery),
    searchLocalVoices(keyword),
  ]);

  const results = {
    keyword,
    expandedKeywords,
    kokkai,
    saitama,
    misato,
    ministry,
    news,
    laws,
    official,
    nearby,
    localVoices,
  };

  return new Response(JSON.stringify(results), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

// キーワード展開（AIで類義語生成）
async function expandKeywords(keyword, env) {
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) return [keyword];

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `「${keyword}」の類義語・関連語を、議会議事録や政府文書で使われる表現を中心に生成してください。

ルール:
- 元のキーワードは必ず含める
- 3〜5個まで（元キーワード含む）
- 1行に1語、余計な説明なし
- 正式名称と略称の両方があれば両方含める

例: 「少子化対策」→
少子化対策
少子化
子育て支援
出生率
次世代育成`
            }]
          }],
          generationConfig: { maxOutputTokens: 200 },
        }),
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const lines = text.trim().split('\n').map(l => l.trim()).filter(l => l);
    if (!lines.includes(keyword)) lines.unshift(keyword);
    return lines.slice(0, 5);
  } catch (e) {
    return [keyword];
  }
}

async function handleExpandKeywords(request, env) {
  const { keyword } = await request.json();
  const expanded = await expandKeywords(keyword, env);
  return new Response(JSON.stringify({ keywords: expanded }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

// 国会会議録検索
async function searchKokkai(keyword, maxResults = 10) {
  const url = `https://kokkai.ndl.go.jp/api/speech?any=${encodeURIComponent(keyword)}&recordPacking=json&maximumRecords=${maxResults}`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return (data.speechRecord || []).map(rec => ({
      speaker: rec.speaker || '',
      meeting: rec.nameOfMeeting || '',
      date: rec.date || '',
      speech: (rec.speech || '').slice(0, 300) + (rec.speech?.length > 300 ? '…' : ''),
      url: rec.speechURL || '',
    }));
  } catch (e) {
    return [];
  }
}

// 会議録ネット検索（埼玉県・三郷市・近隣市）
const TENANTS = {
  saitama: { tenant_id: 350, name: '埼玉県議会', slug: 'prefsaitama' },
  misato: { tenant_id: 209, name: '三郷市議会', slug: 'misato' },
  yoshikawa: { tenant_id: 213, name: '吉川市議会', slug: 'yoshikawa' },
  yashio: { tenant_id: 212, name: '八潮市議会', slug: 'yashio' },
  koshigaya: { tenant_id: 208, name: '越谷市議会', slug: 'koshigaya' },
};

async function searchKaigiroku(tenantKey, keyword, maxResults = 10) {
  const tenant = TENANTS[tenantKey];
  if (!tenant) return [];

  const API_URL = 'https://ssp.kaigiroku.net/dnp/search/minute_searches/search';
  const headers = {
    'Referer': `https://ssp.kaigiroku.net/tenant/${tenant.slug}/SpMinuteSearch.html`,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const baseData = {
    tenant_id: tenant.tenant_id,
    power_user: 'false',
    keywords: keyword,
    search_type: '1',
    logical_op: 'OR',
    identical: 'false',
  };

  try {
    // Step 1: Get available years
    const allResp = await fetch(`${API_URL}?callback=cb`, {
      method: 'POST',
      headers,
      body: new URLSearchParams({ ...baseData, function: 'all' }),
    });
    const allText = await allResp.text();
    const allData = parseJsonp(allText);

    const viewYears = allData.faset?.view_years || [];
    const years = viewYears
      .filter(y => y.hit_count > 0)
      .map(y => y.view_year)
      .sort((a, b) => b - a);

    if (!years.length) return [];

    const results = [];
    for (const year of years.slice(0, 3)) {
      if (results.length >= maxResults) break;

      const yearResp = await fetch(`${API_URL}?callback=cb`, {
        method: 'POST',
        headers,
        body: new URLSearchParams({ ...baseData, function: 'year', fq_view_year: year }),
      });
      const yearText = await yearResp.text();
      const yearData = parseJsonp(yearText);

      const schedules = yearData.document?.schedules || [];
      const viewUrl = `https://ssp.kaigiroku.net/tenant/${tenant.slug}/SpMinuteView.html`;

      for (const sched of schedules) {
        if (results.length >= maxResults) break;
        const councilId = sched.council_id || '';
        const scheduleId = sched.schedule_id || '';
        const meetingName = (sched.name || '').trim();
        const scheduleName = sched.schedule_name || '';

        for (const minute of (sched.minutes || [])) {
          if (results.length >= maxResults) break;
          const title = (minute.title || '').replace(/<[^>]+>/g, '');
          let snippet = (minute.snippet || '').replace(/<[^>]+>/g, '');
          if (snippet.length > 300) snippet = snippet.slice(0, 300) + '…';

          results.push({
            speaker: title,
            meeting: `${meetingName} ${scheduleName}`,
            date: String(year),
            speech: snippet,
            url: `${viewUrl}?council_id=${councilId}&schedule_id=${scheduleId}`,
            source: tenant.name,
          });
        }
      }
    }
    return results;
  } catch (e) {
    console.error('Kaigiroku error:', e);
    return [];
  }
}

function parseJsonp(text) {
  if (text.startsWith('cb(')) {
    text = text.slice(3);
    if (text.endsWith(')')) text = text.slice(0, -1);
  }
  return JSON.parse(text);
}

async function searchNearbyCities(keyword) {
  const [yoshikawa, yashio, koshigaya] = await Promise.all([
    searchKaigiroku('yoshikawa', keyword, 7),
    searchKaigiroku('yashio', keyword, 7),
    searchKaigiroku('koshigaya', keyword, 7),
  ]);
  return { yoshikawa, yashio, koshigaya };
}

// 政府資料検索（NDLサーチ）
async function searchMinistries(keyword) {
  const url = `https://ndlsearch.ndl.go.jp/api/opensearch?any=${encodeURIComponent(keyword)}&cnt=10`;
  try {
    const resp = await fetch(url);
    const text = await resp.text();
    const results = [];

    // Simple XML parsing
    const itemMatches = text.matchAll(/<item>([\s\S]*?)<\/item>/g);
    for (const match of itemMatches) {
      const item = match[1];
      const title = item.match(/<title>([^<]*)<\/title>/)?.[1] || '';
      const link = item.match(/<link>([^<]*)<\/link>/)?.[1] || '';
      const description = item.match(/<description>([^<]*)<\/description>/)?.[1] || '';
      const author = item.match(/<author>([^<]*)<\/author>/)?.[1] || 'NDLサーチ';

      if (title) {
        results.push({
          title,
          url: link,
          snippet: description.slice(0, 200),
          source: author.slice(0, 20),
        });
      }
      if (results.length >= 10) break;
    }
    return results;
  } catch (e) {
    return [];
  }
}

// ニュース検索（Bing News）
async function searchNews(keyword) {
  const query = encodeURIComponent(keyword);
  const url = `https://www.bing.com/news/search?q=${query}&setlang=ja`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept-Language': 'ja,en;q=0.9',
  };

  try {
    const resp = await fetch(url, { headers });
    const text = await resp.text();
    const results = [];

    // ニュースカードからタイトル・リンク・スニペット抽出
    const titleMatches = text.matchAll(/class="title"[^>]*href="([^"]+)"[^>]*>([^<]+)/g);
    for (const match of titleMatches) {
      results.push({
        title: match[2].trim(),
        url: match[1],
        snippet: '',
        source: 'ニュース',
      });
      if (results.length >= 10) break;
    }
    return results;
  } catch (e) {
    return [];
  }
}

// e-Gov法令検索
async function searchLaws(keyword, maxResults = 10) {
  const url = `https://laws.e-gov.go.jp/api/2/keyword?keyword=${encodeURIComponent(keyword)}&limit=${maxResults}&offset=0`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) return [];
    const data = await resp.json();

    const typeMap = {
      Constitution: '憲法', Act: '法律', CabinetOrder: '政令',
      ImperialOrder: '勅令', MinisterialOrdinance: '省令', Rule: '規則',
    };

    const seen = new Set();
    const results = [];
    for (const item of (data.items || [])) {
      const lawInfo = item.law_info || {};
      const revisionInfo = item.revision_info || {};
      const lawId = lawInfo.law_id || '';
      const lawNum = lawInfo.law_num || revisionInfo.amendment_law_num || '';
      const lawTitle = revisionInfo.law_title || '';
      const lawType = lawInfo.law_type || revisionInfo.law_type || '';

      if (!lawTitle || seen.has(lawTitle)) continue;
      seen.add(lawTitle);

      results.push({
        title: lawTitle,
        law_num: lawNum,
        url: lawId ? `https://laws.e-gov.go.jp/law/${lawId}` : '',
        category: typeMap[lawType] || lawType,
      });
    }
    return results;
  } catch (e) {
    return [];
  }
}

// 公式サイト検索（DuckDuckGo経由）
async function searchOfficialSites(keyword) {
  const [saitama, misato] = await Promise.all([
    searchSiteDDG(keyword, 'pref.saitama.lg.jp', '埼玉県'),
    searchSiteDDG(keyword, 'city.misato.lg.jp', '三郷市'),
  ]);
  return [...misato, ...saitama];
}

async function searchSiteDDG(keyword, site, sourceName, maxResults = 5) {
  const query = encodeURIComponent(`site:${site} ${keyword}`);
  const url = `https://html.duckduckgo.com/html/?q=${query}`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  };

  try {
    const resp = await fetch(url, { headers });
    const text = await resp.text();
    const results = [];

    // 結果抽出
    const matches = text.matchAll(/class="result__title"[^>]*>[\s\S]*?href="([^"]+)"[^>]*>([^<]+)/g);
    for (const match of matches) {
      let href = match[1];
      // DuckDuckGoリダイレクトURLから実URLを抽出
      if (href.includes('uddg=')) {
        const uddg = new URL(href, 'https://duckduckgo.com').searchParams.get('uddg');
        if (uddg) href = decodeURIComponent(uddg);
      }

      results.push({
        title: match[2].trim(),
        url: href,
        snippet: '',
        source: sourceName,
      });
      if (results.length >= maxResults) break;
    }
    return results;
  } catch (e) {
    return [];
  }
}

// 地域の声（三郷ぐらし等）
async function searchLocalVoices(keyword) {
  const url = `https://misato-gurashi.com/?s=${encodeURIComponent(keyword)}`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  };

  try {
    const resp = await fetch(url, { headers });
    const text = await resp.text();
    const results = [];

    // 記事リンク抽出
    const matches = text.matchAll(/href="(https:\/\/misato-gurashi\.com\/\d{10}\.html)"[^>]*>([^<]+)/g);
    for (const match of matches) {
      const href = match[1];
      const title = match[2].trim();
      if (title.length < 10) continue;

      // 日付抽出
      const dateMatch = href.match(/\/(\d{4})(\d{2})(\d{2})\d{2}\.html/);
      const date = dateMatch ? `${dateMatch[1]}.${dateMatch[2]}.${dateMatch[3]}` : '';

      results.push({
        title,
        url: href,
        date,
        snippet: '',
        source: '三郷ぐらし',
      });
      if (results.length >= 8) break;
    }
    return results;
  } catch (e) {
    return [];
  }
}

// ===========================================
// AI分析ストリーミング
// ===========================================

async function handleStreamSummary(keyword, env) {
  if (!keyword) {
    return sseError('キーワードが必要です');
  }

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return sseError('GEMINI_API_KEYが設定されていません');
  }

  // 検索結果を取得
  const searchResults = await fetchSearchResults(keyword);
  const context = buildContext(searchResults);

  if (!context) {
    return sseError('検索結果がありません');
  }

  const prompt = buildSummaryPrompt(keyword, context);
  return streamGeminiResponse(prompt, apiKey);
}

async function handleStreamStance(keyword, env) {
  if (!keyword) return sseError('キーワードが必要です');

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) return sseError('GEMINI_API_KEYが設定されていません');

  const searchResults = await fetchSearchResults(keyword);
  const context = buildContext(searchResults);

  if (!context) return sseError('検索結果がありません');

  const prompt = buildStancePrompt(keyword, context);
  return streamGeminiResponse(prompt, apiKey);
}

async function handleStreamDraft(keyword, report, env) {
  if (!keyword) return sseError('キーワードが必要です');

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) return sseError('GEMINI_API_KEYが設定されていません');

  const searchResults = await fetchSearchResults(keyword);
  const context = buildContext(searchResults);

  const prompt = buildDraftPrompt(keyword, context, report);
  return streamGeminiResponse(prompt, apiKey);
}

async function handleStreamAnswerPrediction(keyword, report, env) {
  if (!keyword) return sseError('キーワードが必要です');

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) return sseError('GEMINI_API_KEYが設定されていません');

  const searchResults = await fetchSearchResults(keyword);
  const context = buildContext(searchResults);

  const prompt = buildAnswerPredictionPrompt(keyword, context, report);
  return streamGeminiResponse(prompt, apiKey);
}

async function handleStreamConsistencyCheck(keyword, env) {
  if (!keyword) return sseError('キーワードが必要です');

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) return sseError('GEMINI_API_KEYが設定されていません');

  // 三郷市議会の過去質問を検索
  const misatoResults = await searchKaigiroku('misato', keyword, 15);
  const misatoContext = misatoResults
    .map(r => `- ${r.date} ${r.meeting} ${r.speaker}: ${r.speech.slice(0, 400)}`)
    .join('\n');

  const prompt = buildConsistencyCheckPrompt(keyword, misatoContext);
  return streamGeminiResponse(prompt, apiKey);
}

async function fetchSearchResults(keyword) {
  const expandedKeywords = [keyword]; // 簡易版
  const searchQuery = expandedKeywords.join(' ');

  const [kokkai, saitama, misato, ministry, news, laws, official, nearby, localVoices] = await Promise.all([
    searchKokkai(keyword),
    searchKaigiroku('saitama', searchQuery),
    searchKaigiroku('misato', searchQuery),
    searchMinistries(keyword),
    searchNews(searchQuery),
    searchLaws(keyword),
    searchOfficialSites(keyword),
    searchNearbyCities(searchQuery),
    searchLocalVoices(keyword),
  ]);

  return { kokkai, saitama, misato, ministry, news, laws, official, nearby, localVoices };
}

function buildContext(results) {
  const sections = [];

  if (results.kokkai?.length) {
    const lines = results.kokkai.slice(0, 7).map(r => `- ${r.date} ${r.meeting} ${r.speaker}: ${r.speech.slice(0, 400)}`);
    sections.push(`【国会会議録（新しい順）】\n${lines.join('\n')}`);
  }

  if (results.saitama?.length) {
    const lines = results.saitama.slice(0, 7).map(r => `- ${r.date} ${r.meeting} ${r.speaker}: ${r.speech.slice(0, 400)}`);
    sections.push(`【埼玉県議会（新しい順）】\n${lines.join('\n')}`);
  }

  if (results.misato?.length) {
    const lines = results.misato.slice(0, 7).map(r => `- ${r.date} ${r.meeting} ${r.speaker}: ${r.speech.slice(0, 400)}`);
    sections.push(`【三郷市議会（新しい順）】\n${lines.join('\n')}`);
  }

  if (results.news?.length) {
    const lines = results.news.slice(0, 5).map(r => `- ${r.title}: ${r.snippet.slice(0, 300)}`);
    sections.push(`【最新ニュース】\n${lines.join('\n')}`);
  }

  if (results.ministry?.length) {
    const lines = results.ministry.slice(0, 5).map(r => `- [${r.source}] ${r.title}: ${r.snippet.slice(0, 300)}`);
    sections.push(`【政府資料】\n${lines.join('\n')}`);
  }

  if (results.laws?.length) {
    const lines = results.laws.slice(0, 7).map(r => `- [${r.category}] ${r.title}（${r.law_num}）`);
    sections.push(`【関連法令（e-Gov法令検索）】\n${lines.join('\n')}`);
  }

  if (results.official?.length) {
    const lines = results.official.slice(0, 7).map(r => `- [${r.source}] ${r.title}: ${r.snippet.slice(0, 300)}`);
    sections.push(`【公式サイト資料（県・市）】\n${lines.join('\n')}`);
  }

  if (results.localVoices?.length) {
    const lines = results.localVoices.slice(0, 8).map(r => {
      const snippet = r.snippet ? `: ${r.snippet.slice(0, 200)}` : '';
      return `- [${r.source}] ${r.date} ${r.title}${snippet}`;
    });
    sections.push(`【地域の声・市民活動】\n${lines.join('\n')}`);
  }

  // 近隣市
  if (results.nearby) {
    const cityNames = { yoshikawa: '吉川市議会', yashio: '八潮市議会', koshigaya: '越谷市議会' };
    for (const [key, name] of Object.entries(cityNames)) {
      const cityResults = results.nearby[key] || [];
      if (cityResults.length) {
        const lines = cityResults.slice(0, 5).map(r => `- ${r.date} ${r.meeting} ${r.speaker}: ${r.speech.slice(0, 400)}`);
        sections.push(`【${name}（新しい順）】\n${lines.join('\n')}`);
      }
    }
  }

  return sections.join('\n\n');
}

function streamGeminiResponse(prompt, apiKey) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { maxOutputTokens: 8000 },
            }),
          }
        );

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // JSON objectsを抽出して処理
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              // Gemini streaming response format
              const parsed = JSON.parse(line.replace(/^data:\s*/, ''));
              const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
              }
            } catch (e) {
              // Partial JSON, try to extract text
              const textMatch = line.match(/"text"\s*:\s*"([^"]*)"/);
              if (textMatch) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: textMatch[1] })}\n\n`));
              }
            }
          }
        }

        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      } catch (error) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: error.message })}\n\n`));
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'X-Accel-Buffering': 'no',
    },
  });
}

function sseError(message) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`));
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });
  return new Response(stream, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/event-stream',
    },
  });
}

// ===========================================
// プロンプトビルダー
// ===========================================

function buildSummaryPrompt(keyword, context) {
  return `あなたは地方議会の議員スタッフとして、一般質問の準備のためのリサーチレポートを作成します。
以下は「${keyword}」をテーマに、国会・県議会・市議会・ニュース・政府資料から収集した最新の検索結果です。

${context}

上記の検索結果を分析し、**最新の情報を最重視**して以下の形式でまとめてください。
日付が新しいものほど重要度が高いです。具体的な数値・事実・発言者名を積極的に引用してください。

【重要な注意事項】
- このレポートは市議会議員の一般質問の原稿作成に使われます。正確性が最重要です。
- 検索結果に含まれる情報のみを記載してください。検索結果にない情報を補完・推測で追加しないでください。
- 法律名・条例名・数値・日付・発言者名は検索結果から正確に引用してください。
- 検索結果から確認できない情報は「（検索結果からは確認できず、別途確認が必要）」と明記してください。
- 該当する検索結果がないセクションは「該当する検索結果なし」と記載してください。

## 国の動向
国会や政府レベルでの最新の議論・政策の方向性。具体的な法案名・審議状況を含めて2-3文で要約。

## 埼玉県の動向
県議会での直近の議論・答弁内容を要約。以下の形式で記載：
- **〇〇議員（YYYY年）**: 「（質問の要旨）」 → **県側回答**: 「（答弁の要旨）」

## 三郷市の状況
市議会での直近の議論・答弁内容を要約。以下の形式で、質問と答弁のペアがわかるように記載してください：
- **〇〇議員（YYYY年）**: 「（質問の要旨）」 → **市側回答**: 「（答弁の要旨）」
検索結果から複数の質問・答弁が確認できる場合はすべて記載してください。

## 社会的背景
ニュースや資料から見える最新の社会課題・背景を2-3文で要約。

## 関連法令・条例
このテーマに関連する主要な法律を列挙（法律名と簡潔な説明）。
- 国の法律（根拠法・関連法）
- 埼玉県の条例（関連するもの）
- 三郷市の条例（関連するもの）
※具体的な条例名がわからない場合は「○○に関する条例（確認が必要）」と記載

## 時系列の経緯
検索結果の日付情報をもとに、このテーマがどのような経緯で議論・決定されてきたかを時系列で整理してください。

## 一般質問のポイント
このテーマで一般質問をする際に押さえるべきポイント・切り口を箇条書き3-5項目で提案。

## 活用可能な補助金・交付金
このテーマの実現に活用できる国・県の補助金・交付金・支援制度を具体的に列挙してください。

## 政策実現可能性スコア

上記の分析を踏まえ、「${keyword}」を三郷市で政策として実現する場合の可能性を定量評価してください。
以下のJSON形式で、必ず \`\`\`json と \`\`\` で囲んで出力してください。

\`\`\`json
{
  "overall_score": 0〜100の整数,
  "dimensions": {
    "national_support": {"score": 0〜100, "label": "国の支援度", "evidence": ["根拠1", "根拠2"]},
    "fiscal_feasibility": {"score": 0〜100, "label": "財政的実現性", "evidence": ["根拠1", "根拠2"]},
    "citizen_needs": {"score": 0〜100, "label": "市民ニーズ", "evidence": ["根拠1", "根拠2"]},
    "precedents": {"score": 0〜100, "label": "先例の有無", "evidence": ["根拠1", "根拠2"]},
    "legal_foundation": {"score": 0〜100, "label": "法的根拠", "evidence": ["根拠1", "根拠2"]}
  },
  "positive_factors": ["プラス要因1", "プラス要因2"],
  "negative_factors": ["マイナス要因1", "マイナス要因2"],
  "subsidies": ["活用可能な補助金・制度名1", "活用可能な補助金・制度名2"],
  "key_stats": ["定量データ1", "定量データ2"],
  "barrier_busters": ["障壁→解決策1", "障壁→解決策2"],
  "recommendations": ["提言1", "提言2", "提言3"]
}
\`\`\`

JSON出力の後に、スコアの根拠と提言について日本語で簡潔に解説してください。`;
}

function buildStancePrompt(keyword, context) {
  return `以下は「${keyword}」に関する国会・埼玉県議会・三郷市議会の会議録と政府資料です。

${context}

上記の検索結果から、国・県・市それぞれの現在の見解・スタンスを**簡潔に**まとめてください。

以下のJSON形式で、必ず \`\`\`json と \`\`\` で囲んで出力してください。JSONのみ出力し、それ以外のテキストは不要です。

\`\`\`json
{
  "national": {
    "stance": "積極推進｜推進｜検討中｜消極的｜未対応",
    "summary": "国の見解を1-2文で。具体的な法律名・予算額・閣議決定などを含める",
    "key_facts": ["重要事実1", "重要事実2"]
  },
  "prefecture": {
    "stance": "積極推進｜推進｜検討中｜消極的｜未対応",
    "summary": "埼玉県の見解を1-2文で。知事答弁や県の施策を含める",
    "key_facts": ["重要事実1", "重要事実2"]
  },
  "city": {
    "stance": "積極推進｜推進｜検討中｜消極的｜未対応",
    "summary": "三郷市の見解を1-2文で。市長・部長答弁を含める",
    "key_facts": ["重要事実1", "重要事実2"]
  }
}
\`\`\`

【ルール】
- stanceは「積極推進」「推進」「検討中」「消極的」「未対応」のいずれか1つを選択
- 検索結果にない情報は含めない。該当する検索結果がない場合はsummaryに「検索結果からは確認できず」と記載
- key_factsは検索結果から確認できる具体的な事実を1-3個`;
}

function buildDraftPrompt(keyword, context, report) {
  return `あなたは地方議会の一般質問原稿の作成を専門とするスピーチライターです。
以下は「${keyword}」に関するAI分析レポートと検索結果です。

【検索結果】
${context}

【AI分析レポート（要約）】
${report.slice(0, 3000)}

上記をもとに、三郷市議会の一般質問（持ち時間60分、答弁含む）の原稿を作成してください。

【原稿の構成ルール】
以下の構成で、議場での発言そのままの口語体で作成してください。

## 1. 導入（3分）
- 議長への挨拶「○番、△△△△です。通告に従いまして一般質問を行います。」
- テーマの社会的背景を簡潔に述べる（検索結果のニュース・国の動向を引用）
- なぜ今このテーマを取り上げるのかの問題意識

## 2. 国・県の動向（5分）
- 国レベルの法整備・予算措置の状況を具体的に引用
- 埼玉県の取り組み・県議会での議論を引用
- 三郷市への影響・関連を明示

## 3. 近隣市・先進事例との比較（5分）
- 検索結果から確認できる他自治体の取り組みを具体的に紹介
- 「○○市では□□年から実施し、△△の成果を上げている」の形式

## 4. 質問事項（各質問5分×3〜5問）
各質問は以下の構成で：
- **背景説明**: なぜこの質問をするのか
- **具体的データの提示**: 検索結果から数値を引用
- **質問本文**: 「そこでお伺いいたします。○○について市の見解をお聞かせください。」

## 5. 要望・まとめ（3分）
- 具体的な要望を述べる
- 「以上で一般質問を終わります」で締める

【重要】
- 検索結果にない情報は使わないでください
- 法律名・数値・日付は正確に引用してください
- 「です・ます」調の丁寧な口語体で
- 実際に議場で読み上げることを想定した自然な文章で`;
}

function buildAnswerPredictionPrompt(keyword, context, draft) {
  const draftSection = draft ? `\n\n【質問原稿】\n${draft.slice(0, 2000)}` : '';
  return `あなたは三郷市の行政側の答弁書を作成する立場のシミュレーターです。
以下は「${keyword}」に関する検索結果です。${draftSection}

【検索結果】
${context}

三郷市の行政側（市長・担当部長）がどのように答弁するかを予測してください。

【予測の根拠】
- 三郷市議会での過去の答弁パターン（検索結果から確認できるもの）
- 埼玉県内の他市の対応状況
- 国の方針・通知への対応姿勢
- 三郷市の財政状況・既存計画

以下の形式で出力してください：

## 想定される答弁パターン

### 質問1: ○○について
**予測される答弁（部長級）:**
「（答弁予測テキスト）」

**答弁のポイント:**
- 積極的/消極的/中立のいずれか
- 使われそうなキーフレーズ
- 根拠: （過去の類似答弁や国の方針から）

**再質問の戦略:**
- この答弁に対する効果的な切り返し案
- 追加で引用すべきデータ・事例

---

### 答弁で使われやすいフレーズ解説
| フレーズ | 本音レベル | 意味 |
|---|---|---|
| 「検討してまいります」 | ★★☆☆☆ | やるとは言っていない。追及が必要 |
| 「研究してまいります」 | ★☆☆☆☆ | ほぼやる気なし。具体的な期限を求めるべき |
| 「取り組んでまいります」 | ★★★★☆ | 前向き。具体的な時期・方法を確認 |

### 全体戦略アドバイス
- 答弁を引き出すための質問の順序・組み立てのアドバイス`;
}

function buildConsistencyCheckPrompt(keyword, pastQuestions) {
  return `あなたは議会質問の整合性チェックの専門家です。
以下は三郷市議会での過去の質問・答弁記録と、今回検討しているテーマ「${keyword}」です。

【過去の質問・答弁記録】
${pastQuestions}

以下の観点でチェックし、結果を報告してください。

## 整合性チェック結果

### ✅ 一貫している点
- 過去の質問・主張と今回のテーマが一貫している部分

### ⚠️ 注意が必要な点
- 過去の発言と矛盾する可能性がある部分
- スタンスの変更が必要な場合、その説明の仕方

### 📋 過去の「検討します」答弁のフォローアップ
過去の答弁で「検討する」「研究する」「努力する」等の回答があったものをリストアップし、その後の進捗を確認すべき事項を提示。

| 時期 | 質問内容 | 答弁 | フォローアップ質問案 |
|---|---|---|---|
| （検索結果から抽出） | | | |

### 💡 今回の質問に活かせる過去の答弁
- 過去に行政側が約束・言及した内容で、今回引用すると効果的なもの

【重要】検索結果にない情報は推測しないでください。`;
}
