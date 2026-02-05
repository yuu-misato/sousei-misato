#!/usr/bin/env python3
"""
e-Gov法令APIから主要法律のfullTextを取得してlaw-data.jsに追加するスクリプト
"""
import re
import json
import requests
import time
from xml.etree import ElementTree as ET

# e-Gov法令API
EGOV_API_BASE = 'https://laws.e-gov.go.jp/api/1'

# law-data.jsから法律IDを抽出
def get_law_ids():
    """law-data.jsからlawIdを持つ法律を抽出"""
    with open('/Users/yusakusuzuki/sousei-misato/member/law-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # lawId: 'xxx' のパターンを抽出
    law_ids = re.findall(r"lawId:\s*'([^']+)'", content)
    titles = re.findall(r"title:\s*'([^']+)'", content)

    # hasFullText: trueの法律は除外（地方自治法は既にある）
    has_fulltext = re.findall(r"hasFullText:\s*(true|false)", content)

    laws = []
    for i, (law_id, title) in enumerate(zip(law_ids, titles)):
        if i < len(has_fulltext) and has_fulltext[i] == 'true':
            print(f"スキップ（fullTextあり）: {title}")
            continue
        laws.append({'lawId': law_id, 'title': title})

    return laws

def fetch_law_xml(law_id):
    """e-Gov APIから法令XMLを取得"""
    url = f"{EGOV_API_BASE}/lawdata/{law_id}"
    try:
        response = requests.get(url, timeout=60)
        response.encoding = 'utf-8'
        return response.text
    except Exception as e:
        print(f"  エラー: {e}")
        return None

def parse_law_xml(xml_text):
    """XMLをパースしてHTML形式に変換"""
    try:
        root = ET.fromstring(xml_text)

        # エラーチェック
        code = root.find('.//Code')
        if code is not None and code.text != '0':
            return None

        law_body = root.find('.//LawBody')
        if law_body is None:
            return None

        html_parts = []

        # 法令タイトル
        law_title = law_body.find('LawTitle')
        if law_title is not None and law_title.text:
            html_parts.append(f'<div class="law-header">○{law_title.text}</div>')

        # 法令番号
        law_num = root.find('.//LawNum')
        if law_num is not None and law_num.text:
            html_parts.append(f'<div class="law-num">{law_num.text}</div>')

        # 目次
        toc = law_body.find('.//TOC')
        if toc is not None:
            toc_html = parse_toc(toc)
            if toc_html:
                html_parts.append(f'<div class="law-toc">{toc_html}</div>')

        # 本文
        html_parts.append('<div class="law-body">')

        # 編（Part）を処理
        for part in law_body.findall('.//Part'):
            html_parts.append(parse_part(part))

        # 編がない場合は章から
        if not law_body.findall('.//Part'):
            for chapter in law_body.findall('.//Chapter'):
                html_parts.append(parse_chapter(chapter))

        # 章もない場合は条から
        if not law_body.findall('.//Part') and not law_body.findall('.//Chapter'):
            main_prov = law_body.find('MainProvision')
            if main_prov is not None:
                for article in main_prov.findall('.//Article'):
                    html_parts.append(parse_article(article))

        # 附則
        suppl_prov = law_body.find('SupplProvision')
        if suppl_prov is not None:
            html_parts.append(parse_supplementary(suppl_prov))

        html_parts.append('</div>')

        return '\n'.join(html_parts)

    except Exception as e:
        print(f"  XMLパースエラー: {e}")
        return None

def parse_toc(toc):
    """目次をパース"""
    parts = []
    for child in toc:
        if 'Title' in child.tag:
            text = child.text or ''
            parts.append(f'<p>{text}</p>')
        elif 'Part' in child.tag or 'Chapter' in child.tag or 'Section' in child.tag:
            title = child.find('*Title')
            if title is not None and title.text:
                parts.append(f'<p style="margin-left:1rem;">{title.text}</p>')
    return '\n'.join(parts[:30])  # 目次は30項目まで

def parse_part(part):
    """編をパース"""
    html = []
    title = part.find('PartTitle')
    if title is not None and title.text:
        html.append(f'<h3 class="law-part">{title.text}</h3>')

    for chapter in part.findall('.//Chapter'):
        html.append(parse_chapter(chapter))

    # 章がない場合は直接条を
    if not part.findall('.//Chapter'):
        for article in part.findall('.//Article'):
            html.append(parse_article(article))

    return '\n'.join(html)

def parse_chapter(chapter):
    """章をパース"""
    html = []
    title = chapter.find('ChapterTitle')
    if title is not None and title.text:
        html.append(f'<h4 class="law-chapter">{title.text}</h4>')

    for section in chapter.findall('.//Section'):
        html.append(parse_section(section))

    # 節がない場合は直接条を
    if not chapter.findall('.//Section'):
        for article in chapter.findall('.//Article'):
            html.append(parse_article(article))

    return '\n'.join(html)

def parse_section(section):
    """節をパース"""
    html = []
    title = section.find('SectionTitle')
    if title is not None and title.text:
        html.append(f'<h5 class="law-section">{title.text}</h5>')

    for article in section.findall('.//Article'):
        html.append(parse_article(article))

    return '\n'.join(html)

def parse_article(article):
    """条をパース"""
    html = []

    # 条番号
    article_num = article.find('ArticleNum')
    num_text = article_num.text if article_num is not None and article_num.text else ''

    # 条見出し
    caption = article.find('ArticleCaption')
    caption_text = f'（{caption.text}）' if caption is not None and caption.text else ''

    # 項を処理
    paragraphs = article.findall('Paragraph')
    para_texts = []

    for para in paragraphs:
        para_num = para.find('ParagraphNum')
        para_num_text = para_num.text if para_num is not None and para_num.text else ''

        # 項文
        sentence = para.find('.//ParagraphSentence')
        if sentence is not None:
            sent_text = get_all_text(sentence)
            if para_num_text:
                para_texts.append(f'{para_num_text}　{sent_text}')
            else:
                para_texts.append(sent_text)

        # 号を処理
        for item in para.findall('.//Item'):
            item_text = parse_item(item)
            if item_text:
                para_texts.append(item_text)

    if para_texts:
        article_html = f'<p class="law-article">'
        if caption_text:
            article_html += f'<span class="article-caption">{caption_text}</span><br>'
        article_html += f'<span class="article-num">{num_text}</span>　'
        article_html += '<br>'.join(para_texts)
        article_html += '</p>'
        html.append(article_html)

    return '\n'.join(html)

def parse_item(item):
    """号をパース"""
    item_num = item.find('ItemNum')
    num_text = item_num.text if item_num is not None and item_num.text else ''

    sentence = item.find('.//ItemSentence')
    sent_text = get_all_text(sentence) if sentence is not None else ''

    if sent_text:
        return f'<span class="law-item">{num_text}　{sent_text}</span>'
    return ''

def parse_supplementary(suppl):
    """附則をパース"""
    html = ['<div class="law-supplementary"><h4>附則</h4>']

    for article in suppl.findall('.//Article'):
        html.append(parse_article(article))

    # 附則に条がない場合は直接パラグラフを
    if not suppl.findall('.//Article'):
        for para in suppl.findall('.//Paragraph'):
            sentence = para.find('.//ParagraphSentence')
            if sentence is not None:
                html.append(f'<p>{get_all_text(sentence)}</p>')

    html.append('</div>')
    return '\n'.join(html)

def get_all_text(element):
    """要素内のすべてのテキストを取得"""
    if element is None:
        return ''
    texts = []
    for elem in element.iter():
        if elem.text:
            texts.append(elem.text)
        if elem.tail:
            texts.append(elem.tail)
    return ''.join(texts).strip()

def update_law_data_js(law_id, full_text):
    """law-data.jsの該当法律にfullTextを追加"""
    with open('/Users/yusakusuzuki/sousei-misato/member/law-data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # hasFullText: falseをtrueに変更し、fullTextを追加
    # パターン: lawId: 'xxx', ... hasFullText: false を見つけて更新

    # エスケープ処理
    escaped_text = full_text.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    # 法律エントリを見つけて更新
    pattern = rf"(lawId:\s*'{law_id}'[^}}]*?hasFullText:\s*)false(\s*\}})"
    replacement = rf"\1true,\n        fullText: `{escaped_text}`\2"

    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    if new_content != content:
        with open('/Users/yusakusuzuki/sousei-misato/member/law-data.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    print("=== e-Gov法令API から主要法律のfullTextを取得 ===\n")

    laws = get_law_ids()
    print(f"取得対象: {len(laws)}件\n")

    success = 0
    fail = 0

    for i, law in enumerate(laws):
        print(f"[{i+1}/{len(laws)}] {law['title']}...", end=' ', flush=True)

        # API呼び出し
        xml_text = fetch_law_xml(law['lawId'])
        if not xml_text:
            print("✗ (取得失敗)")
            fail += 1
            continue

        # XMLパース
        full_text = parse_law_xml(xml_text)
        if not full_text:
            print("✗ (パース失敗)")
            fail += 1
            continue

        # law-data.jsを更新
        if update_law_data_js(law['lawId'], full_text):
            print(f"✓ ({len(full_text):,}文字)")
            success += 1
        else:
            print("✗ (更新失敗)")
            fail += 1

        # レート制限対策
        time.sleep(0.5)

    print(f"\n=== 完了 ===")
    print(f"成功: {success}件")
    print(f"失敗: {fail}件")

if __name__ == '__main__':
    main()
