#!/usr/bin/env python3
"""
条例のtitleとfullTextの不一致を修正するスクリプト v2

問題: fullText内のタイトルがtitleフィールドと一致していない
解決: titleが一致しないfullTextのみを削除（条例エントリ自体は保持）
"""
import re

def extract_fulltext_title(fulltext):
    """fullText内のjorei-headerからタイトルを抽出"""
    match = re.search(r'<div class="jorei-header">○([^<]+)<br>', fulltext)
    if match:
        return match.group(1).strip()
    return None

def normalize_title(title):
    """タイトルを正規化"""
    t = title.replace('三郷市', '').replace(' ', '').replace('　', '')
    return t

def main():
    # ordinance-data.jsを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # fullTextを持つエントリを見つけて、不一致のものだけfullTextを削除

    # パターン: fullText: `...` を探す
    # より正確に、各条例エントリを個別に処理

    removed_count = 0
    kept_count = 0

    # fullText: `...` のパターンを見つける
    def process_fulltext(match):
        nonlocal removed_count, kept_count

        fulltext_declaration = match.group(0)
        fulltext_content = match.group(1)

        # このfullTextの前にあるtitleを探す
        # matchの開始位置から逆方向にtitleを探す
        start_pos = match.start()

        # この位置より前の部分からtitleを探す
        preceding_text = content[:start_pos]

        # 最後のtitle: '...' を探す
        title_matches = list(re.finditer(r"title: '([^']+)'", preceding_text))
        if not title_matches:
            kept_count += 1
            return fulltext_declaration

        title_match = title_matches[-1]
        title = title_match.group(1)

        # 最後のid: XXを探す
        id_matches = list(re.finditer(r"id: (\d+)", preceding_text))
        id_num = id_matches[-1].group(1) if id_matches else "?"

        # fullText内のタイトルを取得
        fulltext_title = extract_fulltext_title(fulltext_content)

        if not fulltext_title:
            # タイトルが取得できない場合は保持
            kept_count += 1
            return fulltext_declaration

        # 規則・規程・要綱などは条例ではないので削除
        non_jorei_keywords = ['規則', '規程', '要綱', '細則', '要領']
        is_non_jorei = any(k in fulltext_title for k in non_jorei_keywords)

        # タイトル比較
        title_norm = normalize_title(title)
        fulltext_title_norm = normalize_title(fulltext_title)
        is_mismatch = title_norm != fulltext_title_norm

        if is_non_jorei or is_mismatch:
            removed_count += 1
            print(f"削除: ID {id_num} 「{title}」 ← fullText: 「{fulltext_title}」")
            # fullText: `...` 部分を削除（カンマと改行も含めて）
            return ""
        else:
            kept_count += 1
            return fulltext_declaration

    # fullText: `...` のパターン（複数行対応）
    # バッククォート内にバッククォートは含まれないと仮定
    new_content = re.sub(
        r',?\s*\n\s*fullText: `([^`]+)`',
        process_fulltext,
        content,
        flags=re.DOTALL
    )

    # ファイルに書き出し
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"\n===== 結果 =====")
    print(f"削除したfullText: {removed_count}件")
    print(f"保持したfullText: {kept_count}件")

    # 条例数を確認
    entry_count = len(re.findall(r'\{ id: \d+,', new_content))
    print(f"条例エントリ数: {entry_count}件")

if __name__ == '__main__':
    main()
