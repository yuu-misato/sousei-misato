#!/usr/bin/env python3
"""
条例本文を一括取得するスクリプト
"""
import re
import requests
import time
import json

def fetch_ordinance(url):
    """条例URLから本文を取得"""
    try:
        response = requests.get(url, timeout=30)
        response.encoding = 'utf-8'
        html = response.text

        # タイトル抽出
        title_match = re.search(r'<title>([^<]+)</title>', html)
        title = title_match.group(1) if title_match else ''

        # 本文部分を抽出（簡易版）
        # 条文部分を取得
        articles = []

        # 条文を探す
        article_matches = re.findall(r'<div[^>]*class="[^"]*article[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL)
        for match in article_matches:
            # HTMLタグを除去
            text = re.sub(r'<[^>]+>', ' ', match)
            text = re.sub(r'\s+', ' ', text).strip()
            if text:
                articles.append(text)

        # 条文がない場合は本文全体から抽出を試みる
        if not articles:
            # primaryInner内のテキストを取得
            body_match = re.search(r'<div[^>]*id="primaryInner"[^>]*>(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
            if body_match:
                text = re.sub(r'<[^>]+>', '\n', body_match.group(1))
                text = re.sub(r'\n+', '\n', text).strip()
                articles = [text[:5000]]  # 最大5000文字

        return {
            'title': title,
            'articles': articles[:20],  # 最大20条
            'success': True
        }
    except Exception as e:
        return {
            'title': '',
            'articles': [],
            'success': False,
            'error': str(e)
        }

def main():
    # ordinance-data.jsからURLを抽出
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # id, title, urlを抽出
    pattern = r"\{ id: (\d+), title: '([^']+)'.*?url: '([^']+)'"
    matches = re.findall(pattern, content)

    # fullTextがないものだけ処理
    no_fulltext = []
    for id_num, title, url in matches:
        # 該当行にfullTextがあるかチェック
        line_pattern = rf"\{{ id: {id_num},[^}}]+\}}"
        line_match = re.search(line_pattern, content)
        if line_match and 'fullText' not in line_match.group():
            no_fulltext.append({
                'id': int(id_num),
                'title': title,
                'url': url
            })

    print(f"fullTextがない条例: {len(no_fulltext)}件")

    # 最初の10件だけ処理（テスト）
    results = []
    for item in no_fulltext[:10]:
        print(f"取得中: {item['id']} - {item['title']}")
        data = fetch_ordinance(item['url'])
        results.append({
            'id': item['id'],
            'title': item['title'],
            'url': item['url'],
            **data
        })
        time.sleep(0.5)  # サーバー負荷軽減

    # 結果を保存
    with open('/Users/yusakusuzuki/sousei-misato/scripts/ordinance_texts.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n{len(results)}件を取得しました")

if __name__ == '__main__':
    main()
