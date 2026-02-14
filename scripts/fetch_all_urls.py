#!/usr/bin/env python3
"""
三郷市例規集の全カテゴリページをスキャンして条例URLを取得
"""
import re
import requests
import json
import time

def fetch_all_ordinances():
    """全カテゴリページから条例リストを取得"""
    base_url = "https://www1.g-reiki.net/misato/"
    
    # まず体系目次からカテゴリページを取得
    try:
        response = requests.get(base_url + "reiki_taikei/taikei_default.html", timeout=30)
        response.encoding = 'utf-8'
        html = response.text
        
        # カテゴリページへのリンクを抽出
        category_pages = []
        for match in re.finditer(r'href="(r_taikei_\d+\.html)"', html):
            page = match.group(1)
            if page not in category_pages:
                category_pages.append(page)
        
        print(f"カテゴリページ: {len(category_pages)}件")
        
        # 各カテゴリページをスキャン
        all_ordinances = []
        
        for cat_page in category_pages:
            url = base_url + "reiki_taikei/" + cat_page
            print(f"スキャン中: {cat_page}...", end=" ")
            
            try:
                resp = requests.get(url, timeout=30)
                resp.encoding = 'utf-8'
                cat_html = resp.text
                
                # reiki_honbun/XXX.html へのリンクを抽出
                count = 0
                for match in re.finditer(r'<a[^>]+href="\.\./(reiki_honbun/[^"]+\.html)"[^>]*>([^<]+)</a>', cat_html):
                    ord_url = base_url + match.group(1)
                    title = match.group(2).strip()
                    
                    # 重複チェック
                    if not any(o['url'] == ord_url for o in all_ordinances):
                        all_ordinances.append({
                            'url': ord_url,
                            'title': title
                        })
                        count += 1
                
                print(f"{count}件追加")
                time.sleep(0.2)
                
            except Exception as e:
                print(f"エラー: {e}")
        
        return all_ordinances
        
    except Exception as e:
        print(f"エラー: {e}")
        return []

def main():
    print("三郷市例規集から全条例URLを取得中...")
    
    ordinances = fetch_all_ordinances()
    
    print(f"\n合計: {len(ordinances)}件の条例URLを取得")
    
    # 保存
    with open('/Users/yusakusuzuki/sousei-misato/scripts/reiki_urls.json', 'w', encoding='utf-8') as f:
        json.dump(ordinances, f, ensure_ascii=False, indent=2)
    
    print(f"reiki_urls.json に保存しました")
    
    # 最初の10件を表示
    print("\n最初の10件:")
    for o in ordinances[:10]:
        print(f"  {o['title'][:40]}")
        print(f"    → {o['url']}")

if __name__ == '__main__':
    main()
