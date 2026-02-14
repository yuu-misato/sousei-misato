#!/usr/bin/env python3
"""
三郷市例規集の全969件をordinance-data.jsに追加するスクリプト
既存のデータと重複しないようにチェックして追加
"""
import re
import json
import requests
import time

def normalize_title(title):
    """タイトルを正規化"""
    t = title.replace('三郷市', '').replace(' ', '').replace('　', '')
    t = t.replace('○', '')
    return t

def fetch_fulltext(url, title):
    """条例URLから本文テキストを取得"""
    try:
        response = requests.get(url, timeout=30)
        response.encoding = 'utf-8'
        html = response.text

        # 404チェック
        if '404 Error' in html or '<title>404' in html or 'ページが見つかりません' in html:
            return None

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
            return None

        # fullText用のHTML形式に整形
        fulltext = f'<div class="jorei-header">○{title}<br>{date} {num}</div>\n<div class="jorei-body">\n'

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

        return fulltext

    except Exception as e:
        return None

def get_category(title):
    """タイトルから分類を判定"""
    if '条例' in title:
        return 'ordinance'
    elif '規則' in title:
        return 'rule'
    elif '規程' in title:
        return 'regulation'
    elif '要綱' in title:
        return 'guideline'
    else:
        return 'other'

def main():
    # reiki_urls.jsonを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/scripts/reiki_urls.json', 'r', encoding='utf-8') as f:
        all_reiki = json.load(f)

    print(f"三郷市例規集: {len(all_reiki)}件")

    # ordinance-data.jsを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 既存のタイトルを抽出
    existing_titles = set()
    for match in re.finditer(r"title: '([^']+)'", content):
        existing_titles.add(normalize_title(match.group(1)))

    # 現在の最大IDを取得
    max_id = 0
    for match in re.finditer(r"id: (\d+)", content):
        id_num = int(match.group(1))
        if id_num > max_id:
            max_id = id_num

    print(f"既存の条例数: {len(existing_titles)}件")
    print(f"現在の最大ID: {max_id}")

    # 新規追加対象を特定
    to_add = []
    for item in all_reiki:
        title_norm = normalize_title(item['title'])
        if title_norm not in existing_titles:
            to_add.append(item)

    print(f"新規追加対象: {len(to_add)}件")

    if not to_add:
        print("追加する条例はありません")
        return

    # 新規条例を取得して追加
    new_entries = []
    success = 0
    fail = 0

    for i, item in enumerate(to_add):
        print(f"[{i+1}/{len(to_add)}] {item['title'][:40]}...", end=' ')

        fulltext = fetch_fulltext(item['url'], item['title'])

        max_id += 1
        category = get_category(item['title'])

        entry = {
            'id': max_id,
            'title': item['title'],
            'category': category,
            'url': item['url'],
            'fullText': fulltext
        }
        new_entries.append(entry)

        if fulltext:
            success += 1
            print("✓")
        else:
            fail += 1
            print("✗ (本文取得失敗)")

        time.sleep(0.2)  # サーバー負荷軽減

        # 進捗表示
        if (i + 1) % 50 == 0:
            print(f"--- {i+1}/{len(to_add)} 完了 ---")

    print(f"\n===== 結果 =====")
    print(f"追加: {len(new_entries)}件")
    print(f"本文取得成功: {success}件")
    print(f"本文取得失敗: {fail}件")

    # 結果をJSONに保存
    with open('/Users/yusakusuzuki/sousei-misato/scripts/new_entries.json', 'w', encoding='utf-8') as f:
        json.dump(new_entries, f, ensure_ascii=False, indent=2)

    print("new_entries.jsonに保存しました")

    # ordinance-data.jsに追加
    print("\nordinance-data.jsを更新中...")

    # 配列の終了位置を見つける
    # ];の前に新しいエントリを追加
    insert_pos = content.rfind('];')

    if insert_pos == -1:
        print("エラー: 配列の終了位置が見つかりません")
        return

    # 新しいエントリをJavaScript形式で生成
    new_js_entries = []
    for entry in new_entries:
        if entry['fullText']:
            escaped = entry['fullText'].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
            js_entry = f"""    {{ id: {entry['id']}, title: '{entry['title']}', category: '{entry['category']}', url: '{entry['url']}',
        fullText: `{escaped}` }}"""
        else:
            js_entry = f"    {{ id: {entry['id']}, title: '{entry['title']}', category: '{entry['category']}', url: '{entry['url']}' }}"
        new_js_entries.append(js_entry)

    # 最後のエントリの後にカンマを追加
    new_content = content[:insert_pos]
    # 既存の最後のエントリの後にカンマがない場合追加
    if not new_content.rstrip().endswith(','):
        new_content = new_content.rstrip() + ',\n'

    new_content += ',\n'.join(new_js_entries) + '\n];'

    # ファイルに書き出し
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"完了！ 合計 {max_id}件の条例データになりました")

if __name__ == '__main__':
    main()
