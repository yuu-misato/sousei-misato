/**
 * 三郷市条例AIアシスタント - Cloudflare Worker
 * Gemini API へのプロキシとして機能
 * - 条例・法律の質問応答
 * - 領収書画像の解析（OCR + 仕訳判定）
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
      const { question, ordinanceContext, lawContext, receiptImage, isReceiptAnalysis } = body;

      const apiKey = env.GEMINI_API_KEY;
      if (!apiKey) {
        return new Response(JSON.stringify({ error: 'API key not configured' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // 領収書解析モード
      if (isReceiptAnalysis && receiptImage) {
        return await handleReceiptAnalysis(receiptImage, apiKey, corsHeaders);
      }

      // 通常の質問応答モード
      if (!question) {
        return new Response(JSON.stringify({ error: '質問が必要です' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Gemini APIを呼び出し
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

/**
 * 領収書画像を解析してデータを抽出
 */
async function handleReceiptAnalysis(receiptImage, apiKey, corsHeaders) {
  const receiptPrompt = `この領収書の画像を解析して、以下の情報をJSON形式で抽出してください。

【抽出する情報】
1. date: 日付（YYYY-MM-DD形式。読み取れない場合は今日の日付）
2. amount: 金額（数値のみ。税込金額を優先）
3. description: 摘要（店名や購入内容を簡潔に。例：「○○書店 書籍購入」）
4. category: カテゴリ（以下から最も適切なものを1つ選択）
   - research: 調査研究費（書籍、調査旅費、視察など）
   - training: 研修費（セミナー、研修会、講座など）
   - pr: 広報費（印刷、チラシ、広報誌など）
   - materials: 資料購入費（文房具、資料、消耗品など）
   - other: その他
5. note: 備考（店舗名、電話番号、品目の詳細など参考情報）
6. suggestedAccount: 推奨会計区分
   - seimu: 政務活動費として計上可能（議員の政務活動に直接関連する経費）
   - tsumitate: 会派積立金から支出（飲食費、私的な買い物、政務活動に該当しないもの）

【政務活動費の判定基準】
政務活動費として計上できるもの：
- 調査研究に必要な書籍・資料の購入
- 研修会・セミナーへの参加費
- 広報活動に関する経費
- 市政に関する調査・視察の交通費・宿泊費

政務活動費として計上できないもの：
- 飲食費（会議の茶菓子程度を除く）
- 慶弔費
- 私的な物品購入
- 政党活動・選挙活動に関する経費

【出力形式】
必ず以下のJSON形式で出力してください。説明文は不要です。
{
  "date": "YYYY-MM-DD",
  "amount": 数値,
  "description": "摘要",
  "category": "カテゴリID",
  "note": "備考",
  "suggestedAccount": "seimu または tsumitate"
}`;

  try {
    // Base64画像データからMIMEタイプとデータを分離
    const matches = receiptImage.match(/^data:([^;]+);base64,(.+)$/);
    if (!matches) {
      return new Response(JSON.stringify({
        error: '無効な画像形式です',
        receiptData: null
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const mimeType = matches[1];
    const imageData = matches[2];

    // MIME Type検証
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    if (!allowedTypes.includes(mimeType)) {
      return new Response(JSON.stringify({
        error: `サポートされていない画像形式です: ${mimeType}`,
        receiptData: null
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Gemini Vision APIを呼び出し
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: receiptPrompt },
                {
                  inline_data: {
                    mime_type: mimeType,
                    data: imageData
                  }
                }
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 512,
          },
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini Vision API error:', errorText);
      return new Response(JSON.stringify({
        error: '画像解析に失敗しました',
        receiptData: null
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await geminiResponse.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // JSONを抽出してパース
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Failed to extract JSON from response:', responseText);
      return new Response(JSON.stringify({
        error: 'データの抽出に失敗しました。領収書が読み取れませんでした。',
        receiptData: null
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    let receiptData;
    try {
      receiptData = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.error('JSON parse error:', parseError, 'Raw:', jsonMatch[0]);
      return new Response(JSON.stringify({
        error: 'レスポンス形式が無効です。再度お試しください。',
        receiptData: null
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // データの検証と補正
    if (!receiptData.date || !/^\d{4}-\d{2}-\d{2}$/.test(receiptData.date)) {
      receiptData.date = new Date().toISOString().split('T')[0];
    }
    if (!receiptData.amount || isNaN(receiptData.amount)) {
      receiptData.amount = null;
    }
    if (!['research', 'training', 'pr', 'materials', 'other'].includes(receiptData.category)) {
      receiptData.category = 'other';
    }
    if (!['seimu', 'tsumitate'].includes(receiptData.suggestedAccount)) {
      receiptData.suggestedAccount = 'seimu';
    }

    return new Response(JSON.stringify({ receiptData }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Receipt analysis error:', error);
    return new Response(JSON.stringify({
      error: '領収書の解析中にエラーが発生しました',
      receiptData: null
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
