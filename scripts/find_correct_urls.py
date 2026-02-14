#!/usr/bin/env python3
"""
三郷市例規集のインデックスページから正しいURLを取得して
条例タイトルと照合するスクリプト
"""
import re
import requests
import json
import time

def fetch_ordinance_index():
    """三郷市例規集の目次ページから条例一覧を取得"""
    base_url = "https://www1.g-reiki.net/misato/"

    try:
        response = requests.get(base_url + "reiki_menu.html", timeout=30)
        response.encoding = 'utf-8'
        html = response.text

        ordinances = []

        for match in re.finditer(r'<a[^>]+href="(reiki_honbun/[^"]+\.html)"[^>]*>([^<]+)</a>', html):
            url = base_url + match.group(1)
            title = match.group(2).strip()
            ordinances.append({
                'url': url,
                'title': title
            })

        print(f"メインページから {len(ordinances)}件のリンクを取得")

        response2 = requests.get(base_url + "reiki_gojyun.html", timeout=30)
        response2.encoding = 'utf-8'
        html2 = response2.text

        for match in re.finditer(r'<a[^>]+href="(reiki_honbun/[^"]+\.html)"[^>]*>([^<]+)</a>', html2):
            url = base_url + match.group(1)
            title = match.group(2).strip()
            if {'url': url, 'title': title} not in ordinances:
                ordinances.append({
                    'url': url,
                    'title': title
                })

        print(f"50音順からも追加して合計 {len(ordinances)}件")

        return ordinances

    except Exception as e:
        print(f"エラー: {e}")
        return []

def normalize_title(title):
    t = title.replace('三郷市', '').replace(' ', '').replace('　', '')
    t = t.replace('○', '')
    return t

def main():
    print("三郷市例規集からインデックスを取得中...")

    index_ordinances = fetch_ordinance_index()

    if not index_ordinances:
        print("インデックスの取得に失敗しました")
        return

    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    current_ordinances = []
    pattern = r"\{ id: (\d+), title: '([^']+)'[^}]+url: '([^']+)'"
    for match in re.finditer(pattern, content):
        current_ordinances.append({
            'id': int(match.group(1)),
            'title': match.group(2),
            'url': match.group(3)
        })

    print(f"ordinance-data.js には {len(current_ordinances)}件の条例があります")

    url_corrections = []

    for curr in current_ordinances:
        curr_title_norm = normalize_title(curr['title'])

        found = False
        for idx in index_ordinances:
            idx_title_norm = normalize_title(idx['title'])

            if curr_title_norm == idx_title_norm:
                if curr['url'] != idx['url']:
                    url_corrections.append({
                        'id': curr['id'],
                        'title': curr['title'],
                        'old_url': curr['url'],
                        'new_url': idx['url']
                    })
                    print(f"修正: ID {curr['id']} 「{curr['title'][:30]}」")
                found = True
                break

    print(f"\n===== 結果 =====")
    print(f"URL修正が必要: {len(url_corrections)}件")

    with open('/Users/yusakusuzuki/sousei-misato/scripts/url_corrections.json', 'w', encoding='utf-8') as f:
        json.dump(url_corrections, f, ensure_ascii=False, indent=2)

    print(f"修正情報を url_corrections.json に保存しました")

if __name__ == '__main__':
    main()
