#!/usr/bin/env python3
"""
条例本文を各URLから1つずつ取得してordinance-data.jsに追加するスクリプト
タイトルの一致を確認してから追加する
"""
import re
import requests
import time
import json

def normalize_title(title):
    """タイトルを正規化"""
    t = title.replace('三郷市', '').replace(' ', '').replace('　', '')
    t = t.replace('○', '')
    return t

def fetch_ordinance_text(url, expected_title):
    """条例URLから本文テキストを取得し、タイトルが一致する場合のみHTML形式で返す"""
    try:
        response = requests.get(url, timeout=30)
        response.encoding = 'utf-8'
        html = response.text

        # 404チェック
        if '404 Error' in html or '<title>404' in html or 'ページが見つかりません' in html:
            return None, "404エラー"

        # タイトル抽出（ページタイトルから）
        title_match = re.search(r'<title>([^<]+)</title>', html)
        if not title_match:
            return None, "タイトル取得失敗"

        page_title = title_match.group(1).strip()
        # 末尾の「三郷市」を除去
        page_title = re.sub(r'[\s\|｜].*$', '', page_title)

        # タイトル一致確認
        if normalize_title(page_title) != normalize_title(expected_title):
            return None, f"タイトル不一致: 「{page_title}」"

        # 日付と条例番号を抽出
        date_match = re.search(r'class="date"[^>]*>([^<]+)</span>', html)
        date = date_match.group(1).strip() if date_match else ''

        num_match = re.search(r'class="number"[^>]*>([^<]+)</span>', html)
        num = num_match.group(1).strip() if num_match else ''

        # 本文抽出 - 複数のパターンを試す
        articles = []

        # パターン1: articleクラス
        for match in re.finditer(r'<div[^>]*class="[^"]*article[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL):
            text = match.group(1)
            text = re.sub(r'<[^>]+>', ' ', text)
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 5:
                articles.append(text)

        # パターン2: itemクラス
        for match in re.finditer(r'<div[^>]*class="[^"]*item[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL):
            text = match.group(1)
            text = re.sub(r'<[^>]+>', ' ', text)
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 5 and text not in articles:
                articles.append(text)

        # パターン3: paragraphクラス
        for match in re.finditer(r'<div[^>]*class="[^"]*paragraph[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL):
            text = match.group(1)
            text = re.sub(r'<[^>]+>', ' ', text)
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 5 and text not in articles:
                articles.append(text)

        if not articles:
            # パターン4: primaryInner全体から抽出
            body_match = re.search(r'<div[^>]*id="primaryInner"[^>]*>(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
            if body_match:
                text = re.sub(r'<[^>]+>', '\n', body_match.group(1))
                text = re.sub(r'\n+', '\n', text).strip()
                lines = [l.strip() for l in text.split('\n') if l.strip() and len(l.strip()) > 5]
                articles = lines[:50]

        if not articles:
            return None, "本文取得失敗"

        # fullText用のHTML形式に整形
        fulltext = f'<div class="jorei-header">○{page_title}<br>{date} {num}</div>\n<div class="jorei-body">\n'

        for article in articles[:40]:  # 最大40項目
            if re.match(r'^[（(]?第?\d+条', article) or re.match(r'^第\d+章', article):
                fulltext += f'<p class="jorei-article">{article}</p>\n\n'
            elif re.match(r'^[（(]?\d+[）)]', article):
                fulltext += f'<p class="jorei-item">{article}</p>\n'
            elif '附則' in article or '附 則' in article:
                fulltext += f'<p class="jorei-supplementary">{article}</p>\n'
            else:
                fulltext += f'<p>{article}</p>\n'

        fulltext += '</div>'

        return fulltext, None

    except Exception as e:
        return None, f"エラー: {str(e)}"

def main():
    # ordinance-data.jsを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # fullTextがない条例を抽出
    # パターン: { id: XX, title: '...', ... url: '...' }（fullTextなし）
    pattern = r"\{ id: (\d+), title: '([^']+)'[^}]+url: '([^']+)'[^}]*\}"

    entries_to_process = []

    for match in re.finditer(pattern, content):
        full_match = match.group(0)
        if 'fullText' in full_match:
            continue  # 既にfullTextがある

        id_num = match.group(1)
        title = match.group(2)
        url = match.group(3)
        entries_to_process.append({
            'id': int(id_num),
            'title': title,
            'url': url
        })

    print(f"fullTextがない条例: {len(entries_to_process)}件")
    print(f"取得を開始します...")

    success_count = 0
    fail_count = 0
    results = []

    for i, entry in enumerate(entries_to_process):
        print(f"[{i+1}/{len(entries_to_process)}] ID:{entry['id']} {entry['title'][:30]}...", end=' ')

        fulltext, error = fetch_ordinance_text(entry['url'], entry['title'])

        if fulltext:
            results.append({
                'id': entry['id'],
                'title': entry['title'],
                'fulltext': fulltext
            })
            success_count += 1
            print("✓ 成功")
        else:
            fail_count += 1
            print(f"✗ {error}")

        time.sleep(0.3)  # サーバー負荷軽減

    print(f"\n===== 結果 =====")
    print(f"成功: {success_count}件")
    print(f"失敗: {fail_count}件")

    # 結果をJSONに保存
    with open('/Users/yusakusuzuki/sousei-misato/scripts/refetch_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n結果を refetch_results.json に保存しました")

    # ordinance-data.jsを更新
    if results:
        print(f"\nordinance-data.js を更新中...")
        update_count = 0

        for item in results:
            id_num = item['id']
            fulltext = item['fulltext']

            # エスケープ
            escaped = fulltext.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

            # 該当エントリを探して更新
            # url: '...' } の直前にfullTextを挿入
            pattern = rf"(\{{ id: {id_num},[^}}]+url: '[^']+')(\s*\}})"

            def add_fulltext(m):
                return f"{m.group(1)},\n        fullText: `{escaped}` }}"

            new_content = re.sub(pattern, add_fulltext, content)
            if new_content != content:
                content = new_content
                update_count += 1

        # ファイルに書き出し
        with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"更新完了: {update_count}件")

if __name__ == '__main__':
    main()
