/**
 * 三郷市条例AIアシスタント - Cloudflare Worker
 * Gemini API へのプロキシとして機能
 */

export default {
  async fetch(request, env, ctx) {
    // CORS対応
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // OPTIONSリクエスト（プリフライト）
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // POSTリクエストのみ許可
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const body = await request.json();
      const { question, ordinanceContext, lawContext } = body;

      if (!question) {
        return new Response(JSON.stringify({ error: '質問が必要です' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Gemini APIを呼び出し
      const apiKey = env.GEMINI_API_KEY;
      if (!apiKey) {
        return new Response(JSON.stringify({ error: 'API key not configured' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const systemPrompt = `あなたは三郷市の条例と国の法律に詳しいアシスタントです。
ユーザーの質問に対して、以下の条例データと法律データを参照しながら、わかりやすく回答してください。

【三郷市の条例データ】
${ordinanceContext || '条例データが提供されていません'}

【関連する国の法律】
${lawContext || '関連する法律データがありません'}

【回答のルール】
- 三郷市の条例と国の法律の両方を適切に参照してください
- 条例は国の法律（地方自治法など）に基づいて制定されているため、その関係性も説明してください
- 該当する条例名・法律名と条文番号を明示してください
- 条例・法律に記載がない場合は「該当する規定が見つかりません」と回答してください
- 法律の専門家ではないことを明記し、重要な判断は専門家への相談を推奨してください`;

      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: systemPrompt + '\n\nユーザーの質問: ' + question }],
              },
            ],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error('Gemini API error:', errorText);
        // デバッグ用にエラー詳細を含める
        let errorDetail = 'AI APIエラーが発生しました';
        try {
          const errorJson = JSON.parse(errorText);
          errorDetail = errorJson.error?.message || errorDetail;
        } catch (e) {
          // JSONパースに失敗した場合はデフォルトメッセージを使用
        }
        return new Response(JSON.stringify({ error: errorDetail }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const data = await geminiResponse.json();
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'AIからの応答を取得できませんでした';

      return new Response(JSON.stringify({ answer }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'サーバーエラーが発生しました' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
