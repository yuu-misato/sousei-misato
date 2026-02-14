#!/usr/bin/env python3
"""
タイトルでマッチングして正しいURLからfullTextを取得
"""
import re
import requests
import json
import time

def normalize_title(title):
    """タイトルを正規化"""
    t = title.replace('三郷市', '').replace(' ', '').replace('　', '')
    t = t.replace('○', '').replace('の', '').replace('に関する', '')
    return t

def fetch_fulltext(url, expected_title):
    """URLから本文を取得"""
    try:
        response = requests.get(url, timeout=30)
        response.encoding = 'utf-8'
        html = response.text
        
        if '404' in html[:1000] or 'ページが見つかりません' in html:
            return None, "404エラー"
        
        # タイトル抽出
        title_match = re.search(r'<title>([^<]+)</title>', html)
        if not title_match:
            return None, "タイトル取得失敗"
        
        page_title = title_match.group(1).strip()
        page_title = re.sub(r'[\s\|｜].*$', '', page_title)
        
        # 日付と条例番号を抽出
        date_match = re.search(r'<span class="date">([^<]+)</span>', html)
        date = date_match.group(1).strip() if date_match else ''
        
        num_match = re.search(r'<span class="number">([^<]+)</span>', html)
        num = num_match.group(1).strip() if num_match else ''
        
        # 本文抽出
        articles = []
        
        # パターン1: articleクラス
        for match in re.finditer(r'<div[^>]*class="[^"]*article[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL):
            text = re.sub(r'<[^>]+>', ' ', match.group(1))
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 5:
                articles.append(text)
        
        # パターン2: itemクラス
        for match in re.finditer(r'<div[^>]*class="[^"]*item[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL):
            text = re.sub(r'<[^>]+>', ' ', match.group(1))
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 5 and text not in articles:
                articles.append(text)
        
        # パターン3: paragraphクラス
        for match in re.finditer(r'<div[^>]*class="[^"]*paragraph[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL):
            text = re.sub(r'<[^>]+>', ' ', match.group(1))
            text = re.sub(r'\s+', ' ', text).strip()
            if text and len(text) > 5 and text not in articles:
                articles.append(text)
        
        if not articles:
            return None, "本文取得失敗"
        
        # fullText用のHTML形式に整形
        fulltext = f'<div class="jorei-header">○{page_title}<br>{date} {num}</div>\n<div class="jorei-body">\n'
        
        for article in articles[:50]:
            if re.match(r'^[（(]?第?\d+条', article) or re.match(r'^第\d+章', article):
                fulltext += f'<p class="jorei-article">{article}</p>\n\n'
            elif re.match(r'^[（(]?\d+[）)]', article):
                fulltext += f'<p class="jorei-item">{article}</p>\n'
            else:
                fulltext += f'<p>{article}</p>\n'
        
        fulltext += '</div>'
        
        return fulltext, None
        
    except Exception as e:
        return None, f"エラー: {str(e)}"

def main():
    # 正しいURLリストを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/scripts/reiki_urls.json', 'r', encoding='utf-8') as f:
        reiki_urls = json.load(f)
    
    print(f"例規集URL: {len(reiki_urls)}件")
    
    # ordinance-data.jsを読み込み
    with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # fullTextがない条例を抽出
    pattern = r"\{ id: (\d+), title: '([^']+)'[^}]+url: '([^']+)'[^}]*\}"
    
    no_fulltext = []
    for match in re.finditer(pattern, content):
        full_match = match.group(0)
        if 'fullText' not in full_match:
            no_fulltext.append({
                'id': int(match.group(1)),
                'title': match.group(2),
                'old_url': match.group(3)
            })
    
    print(f"fullTextがない条例: {len(no_fulltext)}件")
    
    # タイトルでマッチング
    matched = []
    not_matched = []
    
    for entry in no_fulltext:
        entry_title_norm = normalize_title(entry['title'])
        
        found = False
        for reiki in reiki_urls:
            reiki_title_norm = normalize_title(reiki['title'])
            
            if entry_title_norm == reiki_title_norm:
                matched.append({
                    **entry,
                    'new_url': reiki['url'],
                    'reiki_title': reiki['title']
                })
                found = True
                break
        
        if not found:
            not_matched.append(entry)
    
    print(f"マッチング成功: {len(matched)}件")
    print(f"マッチング失敗: {len(not_matched)}件")
    
    # マッチしたものからfullTextを取得
    success_count = 0
    results = []
    
    print(f"\nfullText取得中...")
    
    for i, entry in enumerate(matched):
        print(f"[{i+1}/{len(matched)}] ID:{entry['id']} {entry['title'][:30]}...", end=' ')
        
        fulltext, error = fetch_fulltext(entry['new_url'], entry['title'])
        
        if fulltext:
            results.append({
                'id': entry['id'],
                'title': entry['title'],
                'new_url': entry['new_url'],
                'fulltext': fulltext
            })
            success_count += 1
            print("✓")
        else:
            print(f"✗ {error}")
        
        time.sleep(0.3)
    
    print(f"\n===== 結果 =====")
    print(f"取得成功: {success_count}件")
    
    # 結果を保存
    with open('/Users/yusakusuzuki/sousei-misato/scripts/matched_fulltext.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"結果を matched_fulltext.json に保存しました")
    
    # ordinance-data.jsを更新
    if results:
        print(f"\nordinance-data.js を更新中...")
        update_count = 0
        
        for item in results:
            id_num = item['id']
            new_url = item['new_url']
            fulltext = item['fulltext']
            
            # エスケープ
            escaped = fulltext.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
            
            # URLを更新してfullTextを追加
            pattern = rf"(\{{ id: {id_num},[^}}]+url: ')[^']+(')"
            
            def update_entry(m):
                return f"{m.group(1)}{new_url}{m.group(2)},\n        fullText: `{escaped}` }}"
            
            new_content = re.sub(pattern, update_entry, content)
            if new_content != content:
                content = new_content
                update_count += 1
        
        # ファイルに書き出し
        with open('/Users/yusakusuzuki/sousei-misato/member/ordinance-data.js', 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"更新完了: {update_count}件")
    
    # マッチしなかったものを表示
    if not_matched:
        print(f"\n=== マッチしなかった条例 ({len(not_matched)}件) ===")
        for entry in not_matched[:20]:
            print(f"  ID:{entry['id']} {entry['title']}")

if __name__ == '__main__':
    main()
