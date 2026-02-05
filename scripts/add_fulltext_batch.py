#!/usr/bin/env python3
"""
条例本文を一括取得してordinance-data.jsに追加するスクリプト
"""
import re
import requests
import time
import json

def fetch_ordinance_text(url):
    """条例URLから本文テキストを取得し、HTML形式で返す"""
    try:
        response = requests.get(url, timeout=30)
        response.encoding = 'utf-8'
        html = response.text

        # 404チェック
        if '404 Error' in html or '<title>404' in html:
            return None

        # タイトル抽出
        title_match = re.search(r'<title>([^<]+)</title>', html)
        if not title_match:
            return None
        title = title_match.group(1)

        # 日付と条例番号を抽出
        date_match = re.search(r'class="date"[^>]*><span[^>]*>([^<]+)</span>', html)
        date = date_match.group(1) if date_match else ''

        num_match = re.search(r'class="number"[^>]*><span[^>]*>([^<]+)</span>', html)
        num = num_match.group(1) if num_match else ''

        # 条文を抽出
        articles = []

        # 条文パターンを探す
        article_pattern = r'<div[^>]*class="[^"]*article[^"]*"[^>]*>(.*?)</div>'
        for match in re.finditer(article_pattern, html, re.DOTALL):
            text = match.group(1)
            # HTMLタグを除去
            text = re.sub(r'<[^>]+>', ' ', text)
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 10:
                articles.append(text)

        # 条文が少ない場合は別のパターンを試す
        if len(articles) < 3:
            # item クラスを探す（号）
            item_pattern = r'<div[^>]*class="[^"]*item[^"]*"[^>]*>(.*?)</div>'
            for match in re.finditer(item_pattern, html, re.DOTALL):
                text = match.group(1)
                text = re.sub(r'<[^>]+>', ' ', text)
                text = re.sub(r'\s+', ' ', text).strip()
                if text and len(text) > 10 and text not in articles:
                    articles.append(text)

        if not articles:
            return None

        # fullText用のHTML形式に整形
        fulltext = f'<div class="jorei-header">○{title}<br>{date} {num}</div>\n<div class="jorei-body">\n'

        for i, article in enumerate(articles[:30]):  # 最大30条
            # 条番号を検出してフォーマット
            if re.match(r'^[（(]?[\w一-龥]+[）)]?\s*第?\d', article):
                fulltext += f'<p class="jorei-article">{article}</p>\n\n'
            else:
                fulltext += f'<p>{article}</p>\n\n'

        fulltext += '</div>'

        return {
            'title': title,
            'date': date,
            'num': num,
            'fulltext': fulltext,
            'article_count': len(articles)
        }

    except Exception as e:
        print(f"  エラー: {e}")
        return None

def main():
    # ordinance-data.jsを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # fullTextがない条例を抽出
    pattern = r"\{ id: (\d+), title: '([^']+)'[^}]+url: '([^']+)'[^}]*\}"
    matches = list(re.finditer(pattern, content))

    results = []
    processed = 0
    success = 0

    for match in matches:
        full_match = match.group(0)
        id_num = match.group(1)
        title = match.group(2)
        url = match.group(3)

        # 既にfullTextがあればスキップ
        if 'fullText' in full_match:
            continue

        processed += 1
        print(f"[{processed}] id:{id_num} - {title[:30]}...")

        data = fetch_ordinance_text(url)

        if data:
            success += 1
            results.append({
                'id': int(id_num),
                'title': title,
                'url': url,
                **data
            })
            print(f"  ✓ {data['article_count']}条を取得")
        else:
            print(f"  ✗ 取得失敗")

        time.sleep(0.3)  # サーバー負荷軽減

        # 全件処理
        pass

    print(f"\n===== 結果 =====")
    print(f"処理: {processed}件")
    print(f"成功: {success}件")
    print(f"失敗: {processed - success}件")

    # 結果を保存
    with open('/Users/yusakusuzuki/sousei-misato/scripts/fulltext_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n結果を fulltext_results.json に保存しました")

if __name__ == '__main__':
    main()
