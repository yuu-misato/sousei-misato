#!/usr/bin/env python3
"""
不正なfullText（規則・規程・要綱など条例でないもの、またはタイトル不一致）を削除するスクリプト
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

    # fullTextを持つエントリをチェック
    # パターン: fullText: `...` }

    removed_count = 0
    kept_count = 0

    # 各条例エントリを処理
    # { id: XX, title: '...', ... fullText: `...` } のパターン

    def check_and_remove_fulltext(match):
        nonlocal removed_count, kept_count

        full_entry = match.group(0)
        id_num = match.group(1)
        title = match.group(2)

        # fullTextがあるか確認
        fulltext_match = re.search(r'fullText: `([^`]+)`', full_entry, re.DOTALL)
        if not fulltext_match:
            return full_entry  # fullTextがないのでそのまま

        fulltext = fulltext_match.group(1)
        fulltext_title = extract_fulltext_title(fulltext)

        if not fulltext_title:
            # タイトルが取得できない場合はそのまま
            kept_count += 1
            return full_entry

        # 規則・規程・要綱・細則などは条例ではないので削除
        non_jorei_patterns = ['規則', '規程', '要綱', '細則', '要領', '基準']
        is_non_jorei = any(p in fulltext_title for p in non_jorei_patterns)

        # タイトル不一致チェック
        title_norm = normalize_title(title)
        fulltext_title_norm = normalize_title(fulltext_title)
        is_mismatch = title_norm != fulltext_title_norm

        if is_non_jorei or is_mismatch:
            # fullTextを削除
            # fullText: `...` }, を削除
            new_entry = re.sub(r',\s*\n\s*fullText: `[^`]+`', '', full_entry, flags=re.DOTALL)
            removed_count += 1
            print(f"削除: ID {id_num} 「{title}」 (fullTextは「{fulltext_title}」)")
            return new_entry
        else:
            kept_count += 1
            return full_entry

    # 全エントリを処理
    # より広いパターンで全体をマッチさせる
    pattern = r"(\{ id: (\d+), title: '([^']+)'[^}]+?(?:fullText: `[^`]+`)?\s*\})"

    # 別のアプローチ: 行ごとに処理
    lines = content.split('\n')
    new_lines = []
    i = 0
    current_entry = []
    in_entry = False

    while i < len(lines):
        line = lines[i]

        if re.match(r'\s*\{ id: \d+,', line):
            in_entry = True
            current_entry = [line]
        elif in_entry:
            current_entry.append(line)

            # エントリの終了を検出
            if re.search(r'\}\s*,?\s*$', line) and 'fullText:' not in line:
                # エントリ終了
                entry_text = '\n'.join(current_entry)

                # fullTextがあるかチェック
                fulltext_match = re.search(r'fullText: `([^`]+)`', entry_text, re.DOTALL)
                if fulltext_match:
                    fulltext = fulltext_match.group(1)
                    fulltext_title = extract_fulltext_title(fulltext)

                    # titleを取得
                    title_match = re.search(r"title: '([^']+)'", entry_text)
                    id_match = re.search(r"id: (\d+)", entry_text)

                    if title_match and fulltext_title:
                        title = title_match.group(1)
                        id_num = id_match.group(1) if id_match else '?'

                        # チェック
                        non_jorei_patterns = ['規則', '規程', '要綱', '細則', '要領', '基準']
                        is_non_jorei = any(p in fulltext_title for p in non_jorei_patterns)

                        title_norm = normalize_title(title)
                        fulltext_title_norm = normalize_title(fulltext_title)
                        is_mismatch = title_norm != fulltext_title_norm

                        if is_non_jorei or is_mismatch:
                            # fullTextを削除
                            entry_text = re.sub(r',\s*\n\s*fullText: `[^`]+`', '', entry_text, flags=re.DOTALL)
                            removed_count += 1
                            print(f"削除: ID {id_num} 「{title}」 (fullTextは「{fulltext_title}」)")
                        else:
                            kept_count += 1

                new_lines.append(entry_text)
                in_entry = False
                current_entry = []
                i += 1
                continue
            elif re.search(r'fullText: `', line):
                # fullTextの開始、終了まで読む
                while i < len(lines) - 1:
                    i += 1
                    current_entry.append(lines[i])
                    if '` }' in lines[i] or ('`' in lines[i] and '}' in lines[i]):
                        break

                # エントリ完了
                entry_text = '\n'.join(current_entry)

                fulltext_match = re.search(r'fullText: `([^`]+)`', entry_text, re.DOTALL)
                if fulltext_match:
                    fulltext = fulltext_match.group(1)
                    fulltext_title = extract_fulltext_title(fulltext)

                    title_match = re.search(r"title: '([^']+)'", entry_text)
                    id_match = re.search(r"id: (\d+)", entry_text)

                    if title_match and fulltext_title:
                        title = title_match.group(1)
                        id_num = id_match.group(1) if id_match else '?'

                        non_jorei_patterns = ['規則', '規程', '要綱', '細則', '要領', '基準']
                        is_non_jorei = any(p in fulltext_title for p in non_jorei_patterns)

                        title_norm = normalize_title(title)
                        fulltext_title_norm = normalize_title(fulltext_title)
                        is_mismatch = title_norm != fulltext_title_norm

                        if is_non_jorei or is_mismatch:
                            entry_text = re.sub(r',\s*\n\s*fullText: `[^`]+`', '', entry_text, flags=re.DOTALL)
                            removed_count += 1
                            print(f"削除: ID {id_num} 「{title}」 (fullTextは「{fulltext_title}」)")
                        else:
                            kept_count += 1

                new_lines.append(entry_text)
                in_entry = False
                current_entry = []
        else:
            new_lines.append(line)

        i += 1

    # 残りを追加
    if current_entry:
        new_lines.append('\n'.join(current_entry))

    new_content = '\n'.join(new_lines)

    # ファイルに書き出し
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"\n===== 結果 =====")
    print(f"削除: {removed_count}件")
    print(f"保持: {kept_count}件")

if __name__ == '__main__':
    main()
