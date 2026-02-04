// 主要法律データ（市の条例調査で頻出する法律）
// e-Gov法令検索 https://laws.e-gov.go.jp/
//
// カテゴリ:
// - 地方自治: 地方自治法、地方公務員法など
// - 税・財務: 地方税法、地方財政法など
// - 福祉: 社会福祉法、児童福祉法など
// - 都市計画: 都市計画法、建築基準法など
// - その他: 行政手続法、情報公開法など

const majorLawData = [
    // ===== 地方自治関連 =====
    {
        id: 'L001',
        title: '地方自治法',
        category: '地方自治',
        lawNum: '昭和二十二年法律第六十七号',
        lawId: '322AC0000000067',
        keywords: ['地方自治', '議会', '執行機関', '条例', '規則', '住民', '選挙'],
        summary: '地方公共団体の組織及び運営に関する基本法。議会、執行機関、財務、住民の権利等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/322AC0000000067',
        hasFullText: false  // 条文数が多いためAPI取得
    },
    {
        id: 'L002',
        title: '地方公務員法',
        category: '地方自治',
        lawNum: '昭和二十五年法律第二百六十一号',
        lawId: '325AC0000000261',
        keywords: ['公務員', '任用', '服務', '給与', '懲戒', '分限'],
        summary: '地方公務員の任用、服務、給与、懲戒等の身分取扱いに関する法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/325AC0000000261',
        hasFullText: false
    },
    {
        id: 'L003',
        title: '地方公務員等共済組合法',
        category: '地方自治',
        lawNum: '昭和三十七年法律第百五十二号',
        lawId: '337AC0000000152',
        keywords: ['共済', '年金', '医療', '福祉'],
        summary: '地方公務員の共済制度に関する法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/337AC0000000152',
        hasFullText: false
    },

    // ===== 税・財務関連 =====
    {
        id: 'L010',
        title: '地方税法',
        category: '税・財務',
        lawNum: '昭和二十五年法律第二百二十六号',
        lawId: '325AC0000000226',
        keywords: ['地方税', '住民税', '固定資産税', '都市計画税', '軽自動車税', '国民健康保険税'],
        summary: '地方税の種類、課税要件、税率等を定める法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/325AC0000000226',
        hasFullText: false
    },
    {
        id: 'L011',
        title: '地方財政法',
        category: '税・財務',
        lawNum: '昭和二十三年法律第百九号',
        lawId: '323AC0000000109',
        keywords: ['地方財政', '予算', '決算', '地方債', '財政健全化'],
        summary: '地方財政の運営に関する基本法。地方債の発行、財政の健全化等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/323AC0000000109',
        hasFullText: false
    },
    {
        id: 'L012',
        title: '地方交付税法',
        category: '税・財務',
        lawNum: '昭和二十五年法律第二百十一号',
        lawId: '325AC0000000211',
        keywords: ['地方交付税', '普通交付税', '特別交付税', '基準財政需要額'],
        summary: '地方交付税の算定・交付に関する法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/325AC0000000211',
        hasFullText: false
    },

    // ===== 福祉関連 =====
    {
        id: 'L020',
        title: '社会福祉法',
        category: '福祉',
        lawNum: '昭和二十六年法律第四十五号',
        lawId: '326AC0000000045',
        keywords: ['社会福祉', '福祉事務所', '社会福祉協議会', '地域福祉'],
        summary: '社会福祉事業の基本法。福祉サービスの提供体制、地域福祉の推進を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/326AC0000000045',
        hasFullText: false
    },
    {
        id: 'L021',
        title: '児童福祉法',
        category: '福祉',
        lawNum: '昭和二十二年法律第百六十四号',
        lawId: '322AC0000000164',
        keywords: ['児童福祉', '保育所', '児童相談所', '子育て支援', '児童虐待'],
        summary: '児童の福祉を保障する基本法。保育所、児童相談所等の規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/322AC0000000164',
        hasFullText: false
    },
    {
        id: 'L022',
        title: '介護保険法',
        category: '福祉',
        lawNum: '平成九年法律第百二十三号',
        lawId: '409AC0000000123',
        keywords: ['介護保険', '要介護認定', '介護サービス', '介護保険料', '地域包括支援'],
        summary: '介護保険制度に関する法律。要介護認定、介護サービスの提供を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/409AC0000000123',
        hasFullText: false
    },
    {
        id: 'L023',
        title: '国民健康保険法',
        category: '福祉',
        lawNum: '昭和三十三年法律第百九十二号',
        lawId: '333AC0000000192',
        keywords: ['国民健康保険', '国保', '保険給付', '保険料', '被保険者'],
        summary: '国民健康保険制度に関する法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/333AC0000000192',
        hasFullText: false
    },
    {
        id: 'L024',
        title: '生活保護法',
        category: '福祉',
        lawNum: '昭和二十五年法律第百四十四号',
        lawId: '325AC0000000144',
        keywords: ['生活保護', '保護費', '生活扶助', '医療扶助', '福祉事務所'],
        summary: '生活保護制度に関する法律。生活に困窮する国民の最低生活を保障。',
        egov_url: 'https://laws.e-gov.go.jp/law/325AC0000000144',
        hasFullText: false
    },
    {
        id: 'L025',
        title: '障害者基本法',
        category: '福祉',
        lawNum: '昭和四十五年法律第八十四号',
        lawId: '345AC0000000084',
        keywords: ['障害者', '障害福祉', 'バリアフリー', '差別禁止', '合理的配慮'],
        summary: '障害者施策の基本理念と基本的施策を定める法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/345AC0000000084',
        hasFullText: false
    },

    // ===== 都市計画・建築関連 =====
    {
        id: 'L030',
        title: '都市計画法',
        category: '都市計画',
        lawNum: '昭和四十三年法律第百号',
        lawId: '343AC0000000100',
        keywords: ['都市計画', '用途地域', '開発許可', '市街化区域', '市街化調整区域'],
        summary: '都市計画に関する基本法。用途地域、開発許可制度等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/343AC0000000100',
        hasFullText: false
    },
    {
        id: 'L031',
        title: '建築基準法',
        category: '都市計画',
        lawNum: '昭和二十五年法律第二百一号',
        lawId: '325AC0000000201',
        keywords: ['建築基準', '建築確認', '用途制限', '建蔽率', '容積率'],
        summary: '建築物の敷地、構造、設備及び用途に関する最低基準を定める法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/325AC0000000201',
        hasFullText: false
    },
    {
        id: 'L032',
        title: '道路法',
        category: '都市計画',
        lawNum: '昭和二十七年法律第百八十号',
        lawId: '327AC0000000180',
        keywords: ['道路', '道路管理', '道路占用', '市道', '国道'],
        summary: '道路の管理に関する法律。道路の種類、管理、占用等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/327AC0000000180',
        hasFullText: false
    },

    // ===== 環境関連 =====
    {
        id: 'L040',
        title: '環境基本法',
        category: '環境',
        lawNum: '平成五年法律第九十一号',
        lawId: '405AC0000000091',
        keywords: ['環境', '環境保全', '環境基本計画', '公害'],
        summary: '環境の保全についての基本理念と施策の基本事項を定める法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/405AC0000000091',
        hasFullText: false
    },
    {
        id: 'L041',
        title: '廃棄物の処理及び清掃に関する法律',
        category: '環境',
        lawNum: '昭和四十五年法律第百三十七号',
        lawId: '345AC0000000137',
        keywords: ['廃棄物', 'ごみ', '一般廃棄物', '産業廃棄物', 'リサイクル'],
        summary: '廃棄物の排出抑制、適正処理、生活環境の清潔保持に関する法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/345AC0000000137',
        hasFullText: false
    },

    // ===== 行政手続・情報公開関連 =====
    {
        id: 'L050',
        title: '行政手続法',
        category: '行政手続',
        lawNum: '平成五年法律第八十八号',
        lawId: '405AC0000000088',
        keywords: ['行政手続', '申請', '不利益処分', '行政指導', '届出'],
        summary: '行政運営の公正と透明性を確保するための手続法。申請、処分、行政指導の手続を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/405AC0000000088',
        hasFullText: false
    },
    {
        id: 'L051',
        title: '行政不服審査法',
        category: '行政手続',
        lawNum: '平成二十六年法律第六十八号',
        lawId: '426AC0000000068',
        keywords: ['行政不服審査', '審査請求', '再調査の請求', '不服申立て'],
        summary: '行政庁の処分に対する不服申立ての手続を定める法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/426AC0000000068',
        hasFullText: false
    },
    {
        id: 'L052',
        title: '行政事件訴訟法',
        category: '行政手続',
        lawNum: '昭和三十七年法律第百三十九号',
        lawId: '337AC0000000139',
        keywords: ['行政訴訟', '取消訴訟', '義務付け訴訟', '差止訴訟'],
        summary: '行政事件に関する訴訟手続を定める法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/337AC0000000139',
        hasFullText: false
    },
    {
        id: 'L053',
        title: '行政機関の保有する情報の公開に関する法律',
        category: '行政手続',
        lawNum: '平成十一年法律第四十二号',
        lawId: '411AC0000000042',
        keywords: ['情報公開', '行政文書', '開示請求', '不開示情報'],
        summary: '国の行政機関の情報公開に関する法律。地方公共団体の条例制定の参考。',
        egov_url: 'https://laws.e-gov.go.jp/law/411AC0000000042',
        hasFullText: false
    },
    {
        id: 'L054',
        title: '個人情報の保護に関する法律',
        category: '行政手続',
        lawNum: '平成十五年法律第五十七号',
        lawId: '415AC0000000057',
        keywords: ['個人情報', '個人情報保護', 'プライバシー', '開示請求', '訂正請求'],
        summary: '個人情報の適正な取扱いに関する法律。行政機関、民間事業者の義務を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/415AC0000000057',
        hasFullText: false
    },

    // ===== 選挙関連 =====
    {
        id: 'L060',
        title: '公職選挙法',
        category: '選挙',
        lawNum: '昭和二十五年法律第百号',
        lawId: '325AC0000000100',
        keywords: ['選挙', '投票', '選挙運動', '選挙権', '被選挙権'],
        summary: '国会議員・地方公共団体の議員・長の選挙に関する法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/325AC0000000100',
        hasFullText: false
    },

    // ===== 教育関連 =====
    {
        id: 'L070',
        title: '教育基本法',
        category: '教育',
        lawNum: '平成十八年法律第百二十号',
        lawId: '418AC0000000120',
        keywords: ['教育', '学校教育', '社会教育', '生涯学習'],
        summary: '教育に関する基本法。教育の目的、理念、基本的施策を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/418AC0000000120',
        hasFullText: false
    },
    {
        id: 'L071',
        title: '学校教育法',
        category: '教育',
        lawNum: '昭和二十二年法律第二十六号',
        lawId: '322AC0000000026',
        keywords: ['学校', '小学校', '中学校', '高等学校', '義務教育'],
        summary: '学校教育制度に関する基本法。学校の種類、設置基準等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/322AC0000000026',
        hasFullText: false
    },
    {
        id: 'L072',
        title: '地方教育行政の組織及び運営に関する法律',
        category: '教育',
        lawNum: '昭和三十一年法律第百六十二号',
        lawId: '331AC0000000162',
        keywords: ['教育委員会', '教育長', '学校管理', '教職員'],
        summary: '地方公共団体における教育行政の組織・運営に関する法律。教育委員会の設置等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/331AC0000000162',
        hasFullText: false
    },

    // ===== 消防・防災関連 =====
    {
        id: 'L080',
        title: '消防法',
        category: '消防・防災',
        lawNum: '昭和二十三年法律第百八十六号',
        lawId: '323AC0000000186',
        keywords: ['消防', '火災予防', '消防団', '救急'],
        summary: '火災の予防・警戒・鎮圧、救急業務等に関する法律。',
        egov_url: 'https://laws.e-gov.go.jp/law/323AC0000000186',
        hasFullText: false
    },
    {
        id: 'L081',
        title: '消防組織法',
        category: '消防・防災',
        lawNum: '昭和二十二年法律第二百二十六号',
        lawId: '322AC0000000226',
        keywords: ['消防組織', '消防本部', '消防署', '消防団'],
        summary: '消防機関の組織に関する法律。市町村消防の原則等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/322AC0000000226',
        hasFullText: false
    },
    {
        id: 'L082',
        title: '災害対策基本法',
        category: '消防・防災',
        lawNum: '昭和三十六年法律第二百二十三号',
        lawId: '336AC0000000223',
        keywords: ['災害対策', '防災計画', '避難', '緊急事態'],
        summary: '災害対策の基本法。防災計画の作成、災害応急対策等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/336AC0000000223',
        hasFullText: false
    }
];

// カテゴリ一覧
const lawCategories = [
    { id: 'all', name: 'すべて' },
    { id: '地方自治', name: '地方自治' },
    { id: '税・財務', name: '税・財務' },
    { id: '福祉', name: '福祉' },
    { id: '都市計画', name: '都市計画' },
    { id: '環境', name: '環境' },
    { id: '行政手続', name: '行政手続' },
    { id: '選挙', name: '選挙' },
    { id: '教育', name: '教育' },
    { id: '消防・防災', name: '消防・防災' }
];

// e-Gov法令API関連
const EGOV_API_BASE = 'https://laws.e-gov.go.jp/api/1';

// 法令一覧を検索（e-Gov APIから）
async function searchLawsFromEgov(keyword) {
    try {
        // 法令一覧を取得（キャッシュがあれば使用）
        const lawList = await getLawList();

        // キーワードでフィルタリング
        const results = lawList.filter(law =>
            law.LawName.includes(keyword) ||
            (law.LawNo && law.LawNo.includes(keyword))
        ).slice(0, 50); // 最大50件

        return results.map(law => ({
            title: law.LawName,
            lawNum: law.LawNo,
            lawId: law.LawId,
            egov_url: `https://laws.e-gov.go.jp/law/${law.LawId}`,
            category: 'e-Gov検索結果'
        }));
    } catch (error) {
        console.error('e-Gov API エラー:', error);
        return [];
    }
}

// 法令一覧取得（キャッシュ付き）
let lawListCache = null;
let lawListCacheTime = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24時間

async function getLawList() {
    // キャッシュが有効ならそれを返す
    if (lawListCache && lawListCacheTime && (Date.now() - lawListCacheTime < CACHE_DURATION)) {
        return lawListCache;
    }

    try {
        // 法律のみ取得（政令等は除く）
        const response = await fetch(`${EGOV_API_BASE}/lawlists/2`);
        const text = await response.text();

        // XMLをパース
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');

        const lawInfos = xmlDoc.querySelectorAll('LawNameListInfo');
        const laws = [];

        lawInfos.forEach(info => {
            laws.push({
                LawId: info.querySelector('LawId')?.textContent || '',
                LawName: info.querySelector('LawName')?.textContent || '',
                LawNo: info.querySelector('LawNo')?.textContent || ''
            });
        });

        // キャッシュに保存
        lawListCache = laws;
        lawListCacheTime = Date.now();

        return laws;
    } catch (error) {
        console.error('法令一覧取得エラー:', error);
        return [];
    }
}

// 法令本文を取得
async function getLawContent(lawId) {
    try {
        const response = await fetch(`${EGOV_API_BASE}/lawdata/${lawId}`);
        const text = await response.text();

        // XMLをパースして本文を抽出
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');

        // 法令本文を取得（簡易版）
        const lawBody = xmlDoc.querySelector('LawBody');
        if (lawBody) {
            return formatLawXML(lawBody);
        }
        return null;
    } catch (error) {
        console.error('法令本文取得エラー:', error);
        return null;
    }
}

// XMLを読みやすい形式に変換
function formatLawXML(lawBody) {
    let html = '';

    // 法令名
    const lawTitle = lawBody.querySelector('LawTitle');
    if (lawTitle) {
        html += `<div class="jorei-header">${lawTitle.textContent}</div>`;
    }

    // 条文を抽出（簡易版）
    const articles = lawBody.querySelectorAll('Article');
    articles.forEach(article => {
        const articleNum = article.querySelector('ArticleNum')?.textContent || '';
        const articleCaption = article.querySelector('ArticleCaption')?.textContent || '';
        const paragraphs = article.querySelectorAll('Paragraph');

        let articleHtml = `<div class="jorei-article">`;
        if (articleCaption) {
            articleHtml += `<span class="article-title">（${articleCaption}）</span><br>`;
        }
        articleHtml += `${articleNum} `;

        paragraphs.forEach((para, index) => {
            const sentence = para.querySelector('ParagraphSentence Sentence')?.textContent || '';
            if (index > 0) {
                const paraNum = para.querySelector('ParagraphNum')?.textContent || '';
                articleHtml += `<br>${paraNum} ${sentence}`;
            } else {
                articleHtml += sentence;
            }
        });

        articleHtml += `</div>`;
        html += articleHtml;
    });

    return html;
}
