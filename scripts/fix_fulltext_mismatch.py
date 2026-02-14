#!/usr/bin/env python3
"""
条例のtitleとfullTextの不一致を修正するスクリプト

問題: fullText内のタイトルがtitleフィールドと一致していない条例が131件ある
解決: fullText内のタイトルを抽出し、正しい条例IDに再割り当てする
"""
import re
import json

def extract_fulltext_title(fulltext):
    """fullText内のjorei-headerからタイトルを抽出"""
    # ○タイトル<br> パターン
    match = re.search(r'<div class="jorei-header">○([^<]+)<br>', fulltext)
    if match:
        return match.group(1).strip()
    return None

def normalize_title(title):
    """タイトルを正規化して比較しやすくする"""
    # 「三郷市」を除去、空白を除去
    t = title.replace('三郷市', '').replace(' ', '').replace('　', '')
    return t

def main():
    # ordinance-data.jsを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 各条例エントリを抽出
    # パターン: { id: XX, title: '...', ... fullText: `...` }

    # まずfullTextを持つエントリを特定
    entries = []

    # fullTextのあるエントリを正規表現で抽出
    pattern = r"\{ id: (\d+), title: '([^']+)'[^}]+?fullText: `([^`]+)`"

    for match in re.finditer(pattern, content, re.DOTALL):
        id_num = int(match.group(1))
        title = match.group(2)
        fulltext = match.group(3)

        fulltext_title = extract_fulltext_title(fulltext)

        entries.append({
            'id': id_num,
            'title': title,
            'fulltext_title': fulltext_title,
            'fulltext': fulltext,
            'match': True
        })

    print(f"fullTextがある条例: {len(entries)}件")

    # 不一致を検出
    mismatches = []
    for entry in entries:
        if entry['fulltext_title']:
            # タイトルを正規化して比較
            title_norm = normalize_title(entry['title'])
            fulltext_title_norm = normalize_title(entry['fulltext_title'])

            if title_norm != fulltext_title_norm:
                entry['match'] = False
                mismatches.append(entry)

    print(f"不一致: {len(mismatches)}件")

    # 不一致リストを表示
    print("\n=== 不一致リスト ===")
    for m in mismatches[:20]:  # 最初の20件
        print(f"ID {m['id']}: 「{m['title']}」 → fullText: 「{m['fulltext_title']}」")

    if len(mismatches) > 20:
        print(f"... 他 {len(mismatches) - 20}件")

    # fullText内タイトルからIDへのマッピングを作成
    # titleフィールドを正として、fullText内タイトルと一致するものを探す

    # 全条例のtitleリストを作成
    all_titles_pattern = r"\{ id: (\d+), title: '([^']+)'"
    all_titles = {}
    for match in re.finditer(all_titles_pattern, content):
        id_num = int(match.group(1))
        title = match.group(2)
        all_titles[id_num] = title

    print(f"\n全条例数: {len(all_titles)}件")

    # fullText内タイトル → 正しいID のマッピングを作成
    fulltext_to_correct_id = {}

    for entry in entries:
        ft_title = entry['fulltext_title']
        if not ft_title:
            continue

        ft_title_norm = normalize_title(ft_title)

        # 全条例から一致するtitleを探す
        for id_num, title in all_titles.items():
            if normalize_title(title) == ft_title_norm:
                fulltext_to_correct_id[entry['id']] = {
                    'original_id': entry['id'],
                    'correct_id': id_num,
                    'fulltext_title': ft_title,
                    'correct_title': title,
                    'fulltext': entry['fulltext']
                }
                break

    print(f"\nマッピング成功: {len(fulltext_to_correct_id)}件")

    # マッピング結果を保存
    mapping_data = {
        'total_with_fulltext': len(entries),
        'mismatches': len(mismatches),
        'mappings': list(fulltext_to_correct_id.values())
    }

    with open('/Users/yusakusuzuki/sousei-misato/scripts/fulltext_mapping.json', 'w', encoding='utf-8') as f:
        json.dump(mapping_data, f, ensure_ascii=False, indent=2)

    print(f"\nマッピングデータを fulltext_mapping.json に保存しました")

    # マッピング結果を表示（修正が必要なもの）
    print("\n=== 修正が必要な対応 ===")
    corrections_needed = [m for m in fulltext_to_correct_id.values() if m['original_id'] != m['correct_id']]
    for c in corrections_needed[:20]:
        print(f"ID {c['original_id']} のfullText → ID {c['correct_id']} ({c['correct_title']}) に移動")

    if len(corrections_needed) > 20:
        print(f"... 他 {len(corrections_needed) - 20}件")

if __name__ == '__main__':
    main()
