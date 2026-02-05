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
      const { question, ordinanceContext, lawContext, receiptImage, isReceiptAnalysis, isOrdinanceReview, ordinances, analysisCategories } = body;

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

      // 条例レビューモード
      if (isOrdinanceReview && ordinances) {
        return await handleOrdinanceReview(ordinances, analysisCategories, apiKey, corsHeaders);
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
 * 領収書画像を解析してデータを抽出（2段階処理）
 * Step 1: 画像がレシート/領収書かどうかを判定
 * Step 2: レシートの場合のみOCRを実行
 */
async function handleReceiptAnalysis(receiptImage, apiKey, corsHeaders) {

  // Step 1: レシート認識用プロンプト
  const recognitionPrompt = `この画像を分析して、レシートまたは領収書かどうかを判定してください。

【判定基準】
以下のいずれかに該当する場合は「レシート/領収書」と判定：
- 店舗のレシート（POSレジ出力）
- 手書きまたは印刷の領収書
- 請求書・明細書
- クレジットカード利用明細
- 交通系ICカードの利用履歴
- 振込明細・ATM利用明細

以下の場合は「レシート/領収書ではない」と判定：
- 風景・人物・物品の写真
- スクリーンショット（購入画面以外）
- 書類・契約書
- 名刺
- 判読不能な画像
- ぼやけた画像

【出力形式】
必ず以下のJSON形式のみで出力してください。説明文は一切不要です。
{"isReceipt": true または false, "confidence": 0.0〜1.0, "reason": "判定理由を簡潔に"}`;

  // Step 2: OCR用プロンプト
  const ocrPrompt = `この領収書/レシートの画像から、以下の情報をJSON形式で抽出してください。

【抽出する情報】
1. date: 日付（YYYY-MM-DD形式。読み取れない場合は今日の日付）
2. amount: 金額（数値のみ。税込金額を優先。「合計」「請求金額」を優先）
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
必ず以下のJSON形式のみで出力してください。説明文は一切不要です。
{"date": "YYYY-MM-DD", "amount": 数値, "description": "摘要", "category": "カテゴリID", "note": "備考", "suggestedAccount": "seimu または tsumitate"}`;

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

    // ===== Step 1: レシート認識 =====
    console.log('Step 1: Receipt recognition starting...');
    const recognitionResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: recognitionPrompt },
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
            maxOutputTokens: 256,
          },
        }),
      }
    );

    if (!recognitionResponse.ok) {
      const errorText = await recognitionResponse.text();
      console.error('Recognition API error:', errorText);
      return new Response(JSON.stringify({
        error: '画像の認識に失敗しました。もう一度お試しください。',
        receiptData: null
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const recognitionData = await recognitionResponse.json();
    const recognitionText = recognitionData.candidates?.[0]?.content?.parts?.[0]?.text || '';
    console.log('Recognition response:', recognitionText);

    // 認識結果をパース
    const recognitionMatch = recognitionText.match(/\{[\s\S]*\}/);
    if (!recognitionMatch) {
      console.error('Failed to parse recognition result:', recognitionText);
      return new Response(JSON.stringify({
        error: '画像の認識に失敗しました。画像を確認してください。',
        receiptData: null
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    let recognitionResult;
    try {
      recognitionResult = JSON.parse(recognitionMatch[0]);
    } catch (e) {
      console.error('Recognition JSON parse error:', e);
      return new Response(JSON.stringify({
        error: '画像の認識に失敗しました。',
        receiptData: null
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // レシートでない場合はエラーを返す
    if (!recognitionResult.isReceipt) {
      const reason = recognitionResult.reason || 'レシート/領収書として認識できませんでした';
      return new Response(JSON.stringify({
        error: `この画像はレシート/領収書ではないようです: ${reason}`,
        receiptData: null,
        recognition: recognitionResult
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Step 1 complete: Image is a receipt (confidence:', recognitionResult.confidence, ')');

    // ===== Step 2: OCR処理 =====
    console.log('Step 2: OCR processing starting...');
    const ocrResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: ocrPrompt },
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

    if (!ocrResponse.ok) {
      const errorText = await ocrResponse.text();
      console.error('OCR API error:', errorText);
      return new Response(JSON.stringify({
        error: 'レシートの読み取りに失敗しました。画像が鮮明であることを確認してください。',
        receiptData: null
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const ocrData = await ocrResponse.json();
    const ocrText = ocrData.candidates?.[0]?.content?.parts?.[0]?.text || '';
    console.log('OCR response:', ocrText);

    // JSONを抽出してパース
    const jsonMatch = ocrText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Failed to extract JSON from OCR response:', ocrText);
      return new Response(JSON.stringify({
        error: 'レシートの内容を読み取れませんでした。画像が鮮明であることを確認してください。',
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
        error: 'レシートデータの解析に失敗しました。再度お試しください。',
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

    console.log('Step 2 complete: OCR successful', receiptData);

    return new Response(JSON.stringify({
      receiptData,
      recognition: {
        isReceipt: true,
        confidence: recognitionResult.confidence
      }
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Receipt analysis error:', error);
    return new Response(JSON.stringify({
      error: '領収書の解析中にエラーが発生しました: ' + error.message,
      receiptData: null
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

/**
 * 条例をAIでレビューして問題点を抽出
 */
async function handleOrdinanceReview(ordinances, analysisCategories, apiKey, corsHeaders) {
  const reviewPrompt = `あなたは自治体条例の専門家です。以下の条例を分析し、見直しが必要な箇所を指摘してください。

【分析の観点】
${analysisCategories}

【条例データ】
${ordinances.map(o => `
---
条例名: ${o.title}
カテゴリ: ${o.category}
本文（抜粋）:
${o.text}
---
`).join('\n')}

【出力形式】
問題が見つかった条例についてのみ、以下のJSON配列形式で出力してください。
問題がない場合は空の配列 [] を返してください。

[
  {
    "ordinanceId": 条例ID（数値）,
    "title": "条例名",
    "priority": "high" または "medium" または "low",
    "category": "問題のカテゴリ（金額規定/長期未改正/デジタル化/比較分析など）",
    "issue": "問題点の説明（具体的に）",
    "suggestion": "改善提案",
    "lastRevised": "最終改正年（条例文から読み取れる場合）"
  }
]

【判定基準】
- high: 市民生活に直接影響する可能性がある、または法改正への対応が必要
- medium: 改善すれば市政の質が向上する
- low: 参考情報として検討の価値がある

必ずJSON形式のみで出力してください。説明文は不要です。`;

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: reviewPrompt }],
            },
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Ordinance review API error:', errorText);
      return new Response(JSON.stringify({
        error: '条例分析に失敗しました',
        issues: []
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await geminiResponse.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';

    // JSONを抽出
    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    let issues = [];

    if (jsonMatch) {
      try {
        issues = JSON.parse(jsonMatch[0]);
      } catch (e) {
        console.error('JSON parse error in ordinance review:', e);
        issues = [];
      }
    }

    return new Response(JSON.stringify({ issues }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Ordinance review error:', error);
    return new Response(JSON.stringify({
      error: '条例分析中にエラーが発生しました: ' + error.message,
      issues: []
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
