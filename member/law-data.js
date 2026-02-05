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
        keywords: ['地方自治', '議会', '執行機関', '条例', '規則', '住民', '選挙', '首長', '市長', '町村長', '都道府県', '市町村'],
        summary: '地方公共団体の組織及び運営に関する基本法。議会、執行機関、財務、住民の権利等を規定。',
        egov_url: 'https://laws.e-gov.go.jp/law/322AC0000000067',
        hasFullText: true,
        fullText: `<div class="law-header">○地方自治法<br>昭和二十二年四月十七日法律第六十七号</div>
<div class="law-toc">
<h3>目次</h3>
第一編　総則（第一条―第四条の二）<br>
第二編　普通地方公共団体<br>
　第一章　通則（第五条―第九条の五）<br>
　第二章　住民（第十条―第十三条の二）<br>
　第三章　条例及び規則（第十四条―第十六条）<br>
　第四章　選挙（第十七条―第十九条）<br>
　第五章　直接請求（第七十四条―第八十八条）<br>
　第六章　議会（第八十九条―第百三十八条）<br>
　第七章　執行機関（第百三十八条の二―第二百二条の九）<br>
　第八章　給与その他の給付（第二百三条―第二百七条）<br>
　第九章　財務（第二百八条―第二百四十三条の五）<br>
　第十章　公の施設（第二百四十四条―第二百四十四条の四）<br>
　第十一章　雑則（第二百四十五条―第二百六十三条の三）<br>
第三編　特別地方公共団体（第二百八十四条―第三百二十一条）<br>
第四編　補則（第三百二十二条―第三百二十五条）<br>
附則
</div>
<div class="law-body">
<h4>第一編　総則</h4>

<p class="law-article"><span class="article-num">第一条</span>　この法律は、地方自治の本旨に基いて、地方公共団体の区分並びに地方公共団体の組織及び運営に関する事項の大綱を定め、併せて国と地方公共団体との間の基本的関係を確立することにより、地方公共団体における民主的にして能率的な行政の確保を図るとともに、地方公共団体の健全な発達を保障することを目的とする。</p>

<p class="law-article"><span class="article-num">第一条の二</span>　地方公共団体は、住民の福祉の増進を図ることを基本として、地域における行政を自主的かつ総合的に実施する役割を広く担うものとする。<br>
２　国は、前項の規定の趣旨を達成するため、国においては国際社会における国家としての存立にかかわる事務、全国的に統一して定めることが望ましい国民の諸活動若しくは地方自治に関する基本的な準則に関する事務又は全国的な規模で若しくは全国的な視点に立って行わなければならない施策及び事業の実施その他の国が本来果たすべき役割を重点的に担い、住民に身近な行政はできる限り地方公共団体にゆだねることを基本として、地方公共団体との間で適切に役割を分担するとともに、地方公共団体に関する制度の策定及び施策の実施に当たって、地方公共団体の自主性及び自立性が十分に発揮されるようにしなければならない。</p>

<p class="law-article"><span class="article-num">第一条の三</span>　地方公共団体は、普通地方公共団体及び特別地方公共団体とする。<br>
２　普通地方公共団体は、都道府県及び市町村とする。<br>
３　特別地方公共団体は、特別区、地方公共団体の組合及び財産区とする。</p>

<p class="law-article"><span class="article-num">第二条</span>　地方公共団体は、法人とする。<br>
２　普通地方公共団体は、地域における事務及びその他の事務で法律又はこれに基づく政令により処理することとされるものを処理する。<br>
（中略）<br>
１４　地方公共団体は、その事務を処理するに当たっては、住民の福祉の増進に努めるとともに、最少の経費で最大の効果を挙げるようにしなければならない。<br>
１５　地方公共団体は、常にその組織及び運営の合理化に努めるとともに、他の地方公共団体に協力を求めてその規模の適正化を図らなければならない。<br>
１６　地方公共団体は、法令に違反してその事務を処理してはならない。なお、市町村及び特別区は、当該都道府県の条例に違反してその事務を処理してはならない。<br>
１７　前項の規定に違反して行った地方公共団体の行為は、これを無効とする。</p>

<h4>第二編　普通地方公共団体</h4>
<h5>第二章　住民</h5>

<p class="law-article"><span class="article-num">第十条</span>　市町村の区域内に住所を有する者は、当該市町村及びこれを包括する都道府県の住民とする。<br>
２　住民は、法律の定めるところにより、その属する普通地方公共団体の役務の提供をひとしく受ける権利を有し、その負担を分任する義務を負う。</p>

<p class="law-article"><span class="article-num">第十一条</span>　日本国民たる普通地方公共団体の住民は、この法律の定めるところにより、その属する普通地方公共団体の選挙に参与する権利を有する。</p>

<p class="law-article"><span class="article-num">第十二条</span>　日本国民たる普通地方公共団体の住民は、この法律の定めるところにより、その属する普通地方公共団体の条例（地方税の賦課徴収並びに分担金、使用料及び手数料の徴収に関するものを除く。）の制定又は改廃を請求する権利を有する。<br>
２　日本国民たる普通地方公共団体の住民は、この法律の定めるところにより、その属する普通地方公共団体の事務の監査を請求する権利を有する。</p>

<p class="law-article"><span class="article-num">第十三条</span>　日本国民たる普通地方公共団体の住民は、この法律の定めるところにより、その属する普通地方公共団体の議会の解散を請求する権利を有する。<br>
２　日本国民たる普通地方公共団体の住民は、この法律の定めるところにより、その属する普通地方公共団体の議会の議員、長、副知事若しくは副市町村長、選挙管理委員若しくは監査委員又は公安委員会の委員の解職を請求する権利を有する。</p>

<h5>第三章　条例及び規則</h5>

<p class="law-article"><span class="article-num">第十四条</span>　普通地方公共団体は、法令に違反しない限りにおいて第二条第二項の事務に関し、条例を制定することができる。<br>
２　普通地方公共団体は、義務を課し、又は権利を制限するには、法令に特別の定めがある場合を除くほか、条例によらなければならない。<br>
３　普通地方公共団体は、法令に特別の定めがあるものを除くほか、その条例中に、条例に違反した者に対し、二年以下の懲役若しくは禁錮、百万円以下の罰金、拘留、科料若しくは没収の刑又は五万円以下の過料を科する旨の規定を設けることができる。</p>

<p class="law-article"><span class="article-num">第十五条</span>　普通地方公共団体の長は、法令に違反しない限りにおいて、その権限に属する事務に関し、規則を制定することができる。<br>
２　普通地方公共団体の長は、法令に特別の定めがあるものを除くほか、普通地方公共団体の規則中に、規則に違反した者に対し、五万円以下の過料を科する旨の規定を設けることができる。</p>

<p class="law-article"><span class="article-num">第十六条</span>　普通地方公共団体の議会の議長は、条例の制定又は改廃の議決があったときは、その日から三日以内にこれを当該普通地方公共団体の長に送付しなければならない。<br>
２　普通地方公共団体の長は、前項の規定により条例の送付を受けた場合は、その日から二十日以内にこれを公布しなければならない。ただし、再議その他の措置を講じた場合は、この限りでない。<br>
３　条例は、条例に特別の定があるものを除く外、公布の日から起算して十日を経過した日から、これを施行する。<br>
４　当該普通地方公共団体の長の署名、施行期日の特例その他条例の公布に関し必要な事項は、条例でこれを定めなければならない。<br>
５　前二項の規定は、普通地方公共団体の規則並びにその機関の定める規則及びその他の規程で公表を要するものにこれを準用する。</p>

<h5>第六章　議会</h5>

<p class="law-article"><span class="article-num">第八十九条</span>　普通地方公共団体に議会を置く。</p>

<p class="law-article"><span class="article-num">第九十条</span>　都道府県の議会の議員の定数は、条例で定める。</p>

<p class="law-article"><span class="article-num">第九十一条</span>　市町村の議会の議員の定数は、条例で定める。</p>

<p class="law-article"><span class="article-num">第九十六条</span>　普通地方公共団体の議会は、次に掲げる事件を議決しなければならない。<br>
一　条例を設け又は改廃すること。<br>
二　予算を定めること。<br>
三　決算を認定すること。<br>
四　法律又はこれに基づく政令に規定するものを除くほか、地方税の賦課徴収又は分担金、使用料、加入金若しくは手数料の徴収に関すること。<br>
五　その種類及び金額について政令で定める基準に従い条例で定める契約を締結すること。<br>
六　条例で定める場合を除くほか、財産を交換し、出資の目的とし、若しくは支払手段として使用し、又は適正な対価なくしてこれを譲渡し、若しくは貸し付けること。<br>
（以下略）</p>

<h5>第七章　執行機関</h5>

<p class="law-article"><span class="article-num">第百三十八条の二</span>　普通地方公共団体の執行機関は、当該普通地方公共団体の条例、予算その他の議会の議決に基づく事務及び法令、規則その他の規程に基づく当該普通地方公共団体の事務を、自らの判断と責任において、誠実に管理し及び執行する義務を負う。</p>

<p class="law-article"><span class="article-num">第百三十九条</span>　都道府県に知事を置く。</p>

<p class="law-article"><span class="article-num">第百四十条</span>　都道府県知事の任期は、四年とする。</p>

<p class="law-article"><span class="article-num">第百四十一条</span>　普通地方公共団体の長は、当該普通地方公共団体を統轄し、これを代表する。<br>
２　普通地方公共団体の長は、当該普通地方公共団体の事務を管理し及びこれを執行する。</p>

<p class="law-article"><span class="article-num">第百四十七条</span>　普通地方公共団体の長は、当該普通地方公共団体を統轄し、これを代表する。</p>

<p class="law-article"><span class="article-num">第百四十八条</span>　普通地方公共団体の長は、当該普通地方公共団体の事務を管理し及びこれを執行する。</p>

<p class="law-article"><span class="article-num">第百四十九条</span>　普通地方公共団体の長は、概ね左に掲げる事務を担任する。<br>
一　普通地方公共団体の議会の議決を経べき事件につきその議案を提出すること。<br>
二　予算を調製し、及びこれを執行すること。<br>
三　地方税を賦課徴収し、分担金、使用料、加入金又は手数料を徴収し、及び過料を科すること。<br>
四　決算を普通地方公共団体の議会の認定に付すること。<br>
（以下略）</p>

<h5>第九章　財務</h5>

<p class="law-article"><span class="article-num">第二百八条</span>　普通地方公共団体の会計年度は、毎年四月一日に始まり、翌年三月三十一日に終るものとする。</p>

<p class="law-article"><span class="article-num">第二百十条</span>　一会計年度における一切の収入及び支出は、すべてこれを歳入歳出予算に編入しなければならない。</p>

<p class="law-article"><span class="article-num">第二百十一条</span>　普通地方公共団体の長は、毎会計年度予算を調製し、年度開始前に、議会の議決を経なければならない。この場合において、普通地方公共団体の長は、遅くとも年度開始前、都道府県及び第二百五十二条の十九第一項に規定する指定都市にあっては三十日、その他の市及び町村にあっては二十日までに当該予算を議会に提出するようにしなければならない。<br>
２　普通地方公共団体の長は、予算を議会に提出するときは、政令で定める予算に関する説明書をあわせて提出しなければならない。</p>

<p class="law-article"><span class="article-num">第二百二十三条</span>　普通地方公共団体は、法律の定めるところにより、地方税を賦課徴収することができる。</p>

<p class="law-article"><span class="article-num">第二百二十七条</span>　普通地方公共団体は、当該普通地方公共団体の事務で特定の者のためにするものにつき、手数料を徴収することができる。</p>

<p class="law-article"><span class="article-num">第二百二十八条</span>　分担金、使用料、加入金及び手数料に関する事項については、条例でこれを定めなければならない。</p>

<h5>第十章　公の施設</h5>

<p class="law-article"><span class="article-num">第二百四十四条</span>　普通地方公共団体は、住民の福祉を増進する目的をもってその利用に供するための施設（これを公の施設という。）を設けるものとする。<br>
２　普通地方公共団体（次条第三項に規定する指定管理者を含む。次項において同じ。）は、正当な理由がない限り、住民が公の施設を利用することを拒んではならない。<br>
３　普通地方公共団体は、住民が公の施設を利用することについて、不当な差別的取扱いをしてはならない。</p>

<p class="law-article"><span class="article-num">第二百四十四条の二</span>　普通地方公共団体は、法律又はこれに基づく政令に特別の定めがあるものを除くほか、公の施設の設置及びその管理に関する事項は、条例でこれを定めなければならない。<br>
（中略）<br>
３　普通地方公共団体は、公の施設の設置の目的を効果的に達成するため必要があると認めるときは、条例の定めるところにより、法人その他の団体であって当該普通地方公共団体が指定するもの（以下本条及び第二百四十四条の四において「指定管理者」という。）に、当該公の施設の管理を行わせることができる。</p>

</div>`
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
