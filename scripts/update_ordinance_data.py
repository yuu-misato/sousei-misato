#!/usr/bin/env python3
"""
取得した条例本文をordinance-data.jsに追加するスクリプト
"""
import re
import json

def escape_js_string(s):
    """JavaScriptの文字列としてエスケープ"""
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s

def main():
    # 取得した条例データを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/scripts/fulltext_results.json', 'r', encoding='utf-8') as f:
        results = json.load(f)

    # ordinance-data.jsを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    updated_count = 0

    for item in results:
        id_num = item['id']
        fulltext = item.get('fulltext', '')

        if not fulltext:
            continue

        # 該当するエントリを探す
        # パターン: { id: XX, ... }
        pattern = rf"(\{{ id: {id_num}, [^}}]+)(url: '[^']+')\s*\}}"

        match = re.search(pattern, content)
        if not match:
            print(f"id:{id_num} が見つかりません")
            continue

        # fullTextが既にあればスキップ
        if 'fullText' in match.group(0):
            print(f"id:{id_num} は既にfullTextがあります")
            continue

        # エスケープされたfullTextを作成
        escaped_fulltext = escape_js_string(fulltext)

        # 置換
        old_text = match.group(0)
        new_text = f"{match.group(1)}{match.group(2)},\n        fullText: `{escaped_fulltext}` }}"

        content = content.replace(old_text, new_text)
        updated_count += 1
        print(f"✓ id:{id_num} - {item['title'][:30]}...")

    # ファイルに書き出し
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n===== 完了 =====")
    print(f"更新: {updated_count}件")

if __name__ == '__main__':
    main()
