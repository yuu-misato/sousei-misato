# Budget API Proxy

予算書AIレビュー用のClaude APIプロキシ（Cloudflare Workers）

## セットアップ

1. 依存関係インストール
```bash
cd budget-api-proxy
npm install
```

2. Anthropic APIキーを設定
```bash
wrangler secret put ANTHROPIC_API_KEY
# APIキーを入力
```

3. デプロイ
```bash
npm run deploy
```

## エンドポイント

- URL: `https://misato-api-proxy.yusaku41.workers.dev/`
- Method: POST
- Body: Claude API形式のJSON

## 使用例

```javascript
fetch('https://misato-api-proxy.yusaku41.workers.dev/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    messages: [{ role: 'user', content: 'Hello' }]
  })
});
```
