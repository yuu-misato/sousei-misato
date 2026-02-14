# 三郷市条例AIアシスタント API

Cloudflare Workerで動作するGemini APIプロキシ

## セットアップ

1. 依存関係をインストール
```bash
cd api-worker
npm install
```

2. Cloudflareにログイン
```bash
npx wrangler login
```

3. シークレットを設定（GEMINI_API_KEY）
```bash
npx wrangler secret put GEMINI_API_KEY
# プロンプトに従ってAPIキーを入力
```

4. デプロイ
```bash
npm run deploy
```

## 開発

ローカルで実行:
```bash
npm run dev
```

## API仕様

### POST /

リクエストボディ:
```json
{
  "question": "ユーザーの質問",
  "ordinanceContext": "関連する条例データ"
}
```

レスポンス:
```json
{
  "answer": "AIからの回答"
}
```
