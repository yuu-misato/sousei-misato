// 三郷市例規集 - 全条例データ
// 内容現在 令和7年10月3日
// https://www1.g-reiki.net/misato/

const allOrdinanceData = [
    // ===== 第1編 総規 =====
    { id: 1, title: '三郷市役所の位置を定める条例', category: '総規・基本', keywords: ['市役所', '位置', '庁舎'], summary: '三郷市役所の位置を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000001.html',
        fullText: `<div class="jorei-header">○三郷市役所の位置を定める条例<br>昭和33年5月3日 条例第8号</div>
<div class="jorei-article">三郷市役所の位置を次のとおり定める。<br><br>埼玉県三郷市花和田648番地1</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。<br><br>附則（昭和47年4月27日条例第23号）<br>この条例は、昭和47年5月3日から施行する。<br><br>附則（昭和58年6月16日条例第17号）<br>1　この条例は、昭和58年7月4日から施行する。</div>` },
    { id: 2, title: '町を市とする処分', category: '総規・基本', keywords: ['市制施行', '三郷市'], summary: '三郷町を三郷市とする処分。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000002.html',
        fullText: `<div class="jorei-header">○町を市とする処分<br>昭和47年4月12日 自治省告示第101号</div>
<div class="jorei-article">地方自治法（昭和22年法律第67号）第8条第3項の規定により、埼玉県北葛飾郡三郷町を三郷市とする旨、埼玉県知事から届出があった。<br><br>右の処分は、昭和47年5月3日からその効力を生ずるものとする。</div>` },
    { id: 3, title: '三郷市の休日を定める条例', category: '総規・基本', keywords: ['休日', '祝日', '閉庁'], summary: '市の休日を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000005.html',
        fullText: `<div class="jorei-header">○三郷市の休日を定める条例<br>平成元年12月15日 条例第24号</div>
<div class="jorei-article"><span class="article-title">（市の休日）</span><br>第1条 次に掲げる日は、市の休日とし、市の機関の執務は、原則として行わないものとする。<br>（1）日曜日及び土曜日<br>（2）国民の祝日に関する法律（昭和23年法律第178号）に規定する休日<br>（3）12月29日から翌年の1月3日までの日（前号に掲げる日を除く。）<br>2 前項の規定は、市の休日に市の機関がその所掌事務を遂行することを妨げるものではない。</div>
<div class="jorei-article"><span class="article-title">（期限の特例）</span><br>第2条 市の行政庁に対する申請、届出その他の行為の期限で条例又は規則で規定する期間（時をもって定める期間を除く。）をもって定めるものが市の休日に当たるときは、市の休日の翌日をもってその期限とみなす。ただし、条例又は規則に別段の定めがある場合は、この限りでない。</div>
<div class="jorei-supplementary">附則<br>（施行期日）<br>1 この条例は、平成2年4月1日から施行する。<br><br>附則（平成4年12月15日条例第22号）<br>（施行期日）<br>1 この条例は、平成5年4月1日から施行する。</div>` },
    { id: 4, title: '三郷市民憲章', category: '総規・基本', keywords: ['市民憲章', '理念', '宣言'], summary: '三郷市民の行動規範となる憲章。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000006.html',
        fullText: `<div class="jorei-header">○三郷市民憲章<br>昭和47年5月3日</div>
<div class="jorei-preamble">水とみどりの美しい自然につつまれたわたくしたちのまち三郷は、新しい時代のいぶきをうけて、近代都市をめざして躍進をつづけております。<br>わたくしたちは、このまちを明るく健康で、住みよいまちとするために、全市民の願いをこめて、この市民憲章を定めます。</div>
<div class="jorei-article">1　環境をととのえ、川や道路をきれいにし、花とみどりを愛して、美しいまちをつくりましょう。</div>
<div class="jorei-article">1　老人やこどもをいたわり、おたがいに人格を尊重し、しあわせな家庭、豊かな都市をつくりましょう。</div>
<div class="jorei-article">1　教養を高め文化の向上をはかり、若い力を伸ばして明るい社会をつくりましょう。</div>
<div class="jorei-article">1　スポーツを愛し、自然に親しみ、健康で住みよい郷土をつくりましょう。</div>
<div class="jorei-article">1　すべてのきまりを守り、交通災害や暴力のない平和な三郷をつくりましょう。</div>` },
    { id: 5, title: '三郷市章', category: '総規・基本', keywords: ['市章', 'シンボル', 'マーク'], summary: '三郷市の市章を定める。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000007.html',
        fullText: `<div class="jorei-header">○三郷市章<br>昭和60年1月1日 告示第1号</div>
<div class="jorei-article">三郷市章の図法<br><br>三郷市章の図法は、次のとおりとする。<br><br>（図省略）</div>` },
    { id: 6, title: '三郷市旗', category: '総規・基本', keywords: ['市旗', 'シンボル', '旗'], summary: '三郷市の市旗を定める。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000008.html',
        fullText: `<div class="jorei-header">○三郷市旗<br>昭和60年1月1日 告示第2号</div>
<div class="jorei-article">旗の地色は白とし、市章部分は、赤染め抜きとする。</div>
<div class="jorei-article">三郷市旗の図法<br><br>三郷市旗の図法は、次のとおりとする。<br><br>（図省略）</div>` },
    { id: 7, title: '三郷市民の歌', category: '総規・基本', keywords: ['市歌', '歌', '音楽'], summary: '三郷市民の歌を定める。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000009.html',
        fullText: `<div class="jorei-header">○三郷市民の歌<br>昭和60年1月1日 告示第3号</div>
<div class="jorei-article">作詞　狛　森<br>作曲　狛林　正一<br><br>（楽譜・歌詞は三郷市例規集をご参照ください）</div>` },
    { id: 8, title: '市の木、市の花', category: '総規・基本', keywords: ['市の木', '市の花', 'シンボル'], summary: '市の木と市の花を定める。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000626.html',
        fullText: `<div class="jorei-header">○市の木、市の花<br>昭和49年5月3日 告示第55号</div>
<div class="jorei-article">花や緑につつまれた生活環境をつくるとともに緑化思想の高揚を図るため、市の木、市の花を次のとおり制定する。<br><br>市の木「シイノキ」<br>市の花「サツキ」</div>` },
    { id: 9, title: '市の鳥', category: '総規・基本', keywords: ['市の鳥', 'シンボル', '鳥'], summary: '市の鳥を定める。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000757.html',
        fullText: `<div class="jorei-header">○市の鳥<br>平成17年1月1日 告示第1号</div>
<div class="jorei-article">緑を生かし、自然と共生した環境づくりを進めるとともに、地球環境を大切にする心を養うため、その象徴として「市の鳥」を次のとおり制定する。<br><br>市の鳥「カイツブリ」</div>` },
    { id: 10, title: '三郷市交通安全都市宣言', category: '総規・基本', keywords: ['交通安全', '宣言', '都市'], summary: '交通安全都市宣言。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000010.html',
        fullText: `<div class="jorei-header">○三郷市交通安全都市宣言<br>昭和52年8月19日</div>
<div class="jorei-article">自動車は、近代文明が生んだ利器として人々に多大の便益をもたらし、快適な生活を楽しませるものであるが、これを使用する人々の心構えと道路などの施設環境如何によっては、人々の生命を脅かし、生活を破壊する恐るべき凶器となりうるものであり、幾多の悲劇が繰り返しひき起こされているのが現状である。<br><br>三郷市は首都20キロ圏内に位置し、埼玉県東南部における人口急増都市として発展してきたが、近年、自動車交通量の激増、国道6号及び同4号に囲まれているための通過交通の増加等によりひき起こされる各種の交通事故は、市民の生命を脅かし、市民生活に危機をもたらすなど、極めて事態が容易でないことを憂慮しなければならない。<br><br>かかる事情から当市は、本年5月、埼玉県下における交通事故防止最重点地域に指定されるに至ったが、将来、常磐自動車道・首都高速6号線の完成によって、通過交通量の緩和が予測される一方、公共開発に伴う車両交通の増加も考えられ、交通安全対策は、最も緊要な行政課題となるに至った。<br><br>東和・彦成・早稲田の3か村合併後8年にして村から町へ、更に8年にして市へと飛躍を遂げた三郷市の十数年間はまさに激動の時期であったが、本年は市制施行5年目に当たり、交通安全対策についても更に一層の進展を期すべきときである。<br><br>よって我々は、本市におけるこれら交通事故の絶滅を期するため、市における交通安全組織を結集し、市内道路網の整備と交通安全施設の完備を促進し、同時に交通安全思想の徹底浸透を図り、全市民と共に安全で明るく住みよい都市建設を目指すため、ここにわれらが郷土三郷市を「交通安全都市」とすることを宣言する。</div>` },
    { id: 11, title: '三郷市非核平和都市宣言', category: '総規・基本', keywords: ['非核', '平和', '宣言'], summary: '非核平和都市宣言。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000011.html',
        fullText: `<div class="jorei-header">○三郷市非核平和都市宣言<br>昭和63年3月14日</div>
<div class="jorei-article">平和を愛する心は、私たち人類の共通の願いです。<br><br>しかし、今なお、世界には核兵器の脅威をはじめ、悲惨な争いがあとをたたず、このことは人類を滅亡に導きかねません。<br><br>私たちは、ただ一つの被爆国の国民として、非核三原則の堅持を願い、すべての国のあらゆる核兵器がすみやかに廃絶され、人類永遠の平和が確立されることを強く切望するものです。<br><br>三郷市民は、世界の恒久平和実現のため、平和を願う心を結集し市民一人ひとりが平和のために努力することを誓い、ここに非核平和都市を宣言します。</div>` },
    { id: 12, title: '三郷市スポーツ健康都市宣言', category: '総規・基本', keywords: ['スポーツ', '健康', '宣言'], summary: 'スポーツ健康都市宣言。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000012.html',
        fullText: `<div class="jorei-header">○三郷市スポーツ健康都市宣言<br>平成2年7月14日</div>
<div class="jorei-preamble">わたくしたち三郷市民は、スポーツを愛し、スポーツに親しみ、健康で住みよい郷土をつくるため、ここにスポーツ健康都市を宣言します。</div>
<div class="jorei-article">1　スポーツをとおし、健全な心と体をつくりましょう。</div>
<div class="jorei-article">1　スポーツをとおし、仲間をつくり、友情の輪をひろめましょう。</div>
<div class="jorei-article">1　スポーツをとおし、豊かな明るいまちづくりをすすめましょう。</div>` },
    { id: 13, title: '日本一の読書のまち宣言', category: '総規・基本', keywords: ['読書', '日本一', '宣言', '図書館'], summary: '日本一の読書のまち宣言。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00001008.html',
        fullText: `<div class="jorei-header">○日本一の読書のまち宣言<br>平成25年3月18日</div>
<div class="jorei-preamble">読書は、先人の想い、人類の英知を伝えるとともに、みずみずしい感性や旺盛な好奇心を育み、より深く豊かに生きるための力となって、生涯にわたり大きな財産となります。<br><br>三郷市は、「日本一の「読書のまち三郷」づくり」をかかげ、子どもたちに「読書の楽しさ、知る喜び」を伝えるため、家庭・地域・学校・図書館が一体となり、おはなし会やブックトーク、朝読や家読（うちどく）、子どもが感想などを伝えあう読書郵便、市が独自に編集した『言葉の力』、子ども司書の養成、読書フェスティバルなどにより、読書活動を推進してきました。<br><br>市制施行40周年の節目では、「全国家読（うちどく）サミット」において、三郷市を全国に向け発信しました。<br><br>私たちは、読書活動をとおして人と人との絆を結び、誰もが、いつでも読書に親しみ、心豊かに暮らすことができる、文化のかおり高いまちを創ることを願い、</div>
<div class="jorei-article">1　乳幼児期から読書の世界に触れる機会を大切にします。</div>
<div class="jorei-article">1　「家読（うちどく）ゆうびんコンクール」をはじめとし、家読（うちどく）をすすめます。</div>
<div class="jorei-article">1　三郷の歴史・民話など、郷土を深く知る機会を大切にします。</div>
<div class="jorei-article">1　図書館などを活用し、読書に親しむ機会を大切にします。</div>
<div class="jorei-article">1　人と本をつなぐネットワークづくりをすすめます。</div>
<div class="jorei-article" style="font-weight:bold;text-align:center;margin-top:1.5rem;">ここに三郷市は「日本一の読書のまち」を宣言します。</div>` },
    { id: 14, title: '三郷市自治基本条例', category: '総規・基本', keywords: ['自治', '基本条例', '市民参加', '協働'], summary: '自治の基本理念、市民参加、協働のまちづくりの基本を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000897.html',
        fullText: `<div class="jorei-header">○三郷市自治基本条例<br>平成21年6月12日 条例第16号</div>
<div class="jorei-toc">目次<br>前文<br>第1章 総則(第1条―第3条)<br>第2章 市民等<br>　第1節 市民等の権利(第4条―第7条)<br>　第2節 市民等の責務(第8条)<br>第3章 議会(第9条―第11条)<br>第4章 市長等(第12条―第14条)<br>第5章 市政運営(第15条―第28条)<br>第6章 参加と協働<br>　第1節 情報の共有(第29条―第32条)<br>　第2節 参加(第33条―第41条)<br>　第3節 協働(第42条・第43条)<br>第7章 コミュニティ(第44条―第46条)<br>第8章 市民投票(第47条―第50条)<br>第9章 国、埼玉県、他の地方自治体等との連携(第51条―第53条)<br>第10章 条例の位置付け及び見直し等(第54条―第56条)<br>附則</div>
<div class="jorei-preamble">私たちには夢があります。市民一人ひとりの知恵をいかして、すべての人が幸せにいきいきと暮らせるまち、愛着と誇りと希望の持てるまちを実現することです。<br>そのためには、市民の信託と参加に基づく市政、市民をはじめ、多様なまちづくりの主体による協働が必要です。<br>私たちは、ここに三郷市の自治のあり方を明らかにする市民共有の最高規範として、この条例を定めます。</div>
<div class="jorei-chapter">第1章 総則</div>
<div class="jorei-article"><span class="article-title">（目的）</span><br>第1条 この条例は、三郷市の自治の基本理念を明らかにするとともに、市民等の権利及び責務、議会及び執行機関の責務並びに市政運営及び参加と協働の基本的な事項を定めることにより、地方自治の確立を図り、もって豊かな地域社会を実現することを目的とする。</div>
<div class="jorei-article"><span class="article-title">（用語の定義）</span><br>第2条 この条例において、次の各号に掲げる用語の意義は、それぞれ当該各号に定めるところによる。<br>(1) 市民 市内に住所を有する個人をいう。<br>(2) 市民等 市民及び市内において働き、学び、若しくは活動する個人又は団体をいう。<br>(3) 執行機関 市長、教育委員会、選挙管理委員会、公平委員会、農業委員会、固定資産評価審査委員会及び監査委員をいう。<br>(4) 参加 政策の立案、実施又は評価の過程に主体的に関わることをいう。<br>(5) 協働 市民等及び執行機関が、それぞれの役割及び責任の下、互いに尊重し、対等な立場で補完又は協力して公益的な活動を行うことをいう。<br>(6) まちづくり 地域社会の維持及び向上に役立つ活動をいう。</div>
<div class="jorei-article"><span class="article-title">（自治の基本理念）</span><br>第3条 三郷市の自治の基本理念は、次に掲げるものとする。<br>(1) 市民等、議会及び執行機関は、互いに協力して、一人ひとりの人権が尊重され、だれもが安心していきいきと暮らせる豊かな地域社会を築くことをめざす。<br>(2) 市民は、主権者として自治の一部を議会及び市長に信託する。<br>(3) 議会は、市政の意思決定機関として市民の信託に応える。<br>(4) 執行機関は、市民の信託に応え、公正かつ適切に市政を運営する。<br>(5) 市民等及び執行機関は、自治の推進に必要な情報を相互に共有するとともに、参加と協働のまちづくりを進める。</div>
<div class="jorei-chapter">第2章 市民等</div>
<div class="jorei-section">第1節 市民等の権利</div>
<div class="jorei-article"><span class="article-title">（行政サービスを受ける権利）</span><br>第4条 市民等は、法令、条例、規則等の定めるところにより、行政サービスを受けることができる。</div>
<div class="jorei-article"><span class="article-title">（情報を知る権利）</span><br>第5条 市民等は、市政に関する情報を知ることができる。</div>
<div class="jorei-article"><span class="article-title">（参加する権利）</span><br>第6条 市民は、市政に参加することができる。<br>2 市民等(市民を除く。)は、市民に準じ、市政に参加することができる。</div>
<div class="jorei-article"><span class="article-title">（まちづくりの自由）</span><br>第7条 市民等は、自由にまちづくりを行うことができる。</div>
<div class="jorei-section">第2節 市民等の責務</div>
<div class="jorei-article"><span class="article-title">（市民等の責務）</span><br>第8条 選挙権又は市民投票権を有する市民は、当該権利を行使するよう努めるものとする。<br>2 市民等は、法令等の定めるところにより、行政サービスに要する費用を税、使用料、手数料等により負担するものとする。<br>3 市民等は、自らがまちづくりの主体であることを認識するとともに、参加と協働のまちづくりにあたっては、互いの意見及び行動を尊重するものとする。<br>4 市民等は、地域社会との調和、環境への配慮その他の社会的責務を認識し、その責務を果たすよう努めるものとする。</div>
<div class="jorei-chapter">第3章 議会</div>
<div class="jorei-article"><span class="article-title">（議会の役割及び権限）</span><br>第9条 議会は、市民から選ばれた議員で構成される市政の意思決定機関として市民の信託に応えるものとする。<br>2 議会は、市政運営の監視及び政策立案の機能を有し、市民の視点に立った権限の行使に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（議会の運営）</span><br>第10条 議会は、市民等の意見を十分反映し、市民等に分かりやすく、市民等から信頼される、開かれた議会の実現に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（議員の責務）</span><br>第11条 議員は、自らの責任を自覚し、自己研鑽、多様な市民等の意見の把握及び議会活動に関する情報の提供に努め、常に市民等の福祉の向上を行動の指針として、その職務を誠実に行うものとする。</div>
<div class="jorei-chapter">第4章 市長等</div>
<div class="jorei-article"><span class="article-title">（市長の責務）</span><br>第12条 市長は、市民の信託を受けて市民を代表する公職についたことを強く認識し、公正かつ誠実に市政を運営するものとする。<br>2 市長は、市政の運営にあたっては、自らの考えを市民等に明らかにするとともに、多様な市民等の意見を十分に把握するものとする。<br>3 市長は、市職員に対して、この条例の遵守を求めるとともに、市職員が自治の実現のために必要な能力を向上させ、政策形成を行えるよう、適切に環境を整備するものとする。</div>
<div class="jorei-article"><span class="article-title">（市長を除く執行機関の責務）</span><br>第13条 市長を除く執行機関は、設置の目的に応じた責務を負い、この条例を遵守し、互いに協力して市政を運営するものとする。</div>
<div class="jorei-article"><span class="article-title">（市職員の責務）</span><br>第14条 市職員は、市民等の視点に立って、全体の奉仕者として公正かつ誠実に職務を遂行するとともに、まちづくりにおいて市民等が連携を図れるよう努めるものとする。<br>2 市職員は、常に、職務の遂行に必要な知識の習得及び能力の向上に取り組むものとする。</div>
<div class="jorei-chapter">第5章 市政運営</div>
<div class="jorei-article"><span class="article-title">（市政運営の基本方針）</span><br>第15条 執行機関は、市民等の福祉の向上のため、市民等の視点に立ち、合意形成を図りながら公正かつ効率的に市政を運営するものとする。<br>2 執行機関は、計画、財政、評価等の制度を相互に連携させ、総合的かつ計画的に市政を運営するものとする。</div>
<div class="jorei-article"><span class="article-title">（総合計画）</span><br>第16条 市長は、議会の議決を経て、市政運営の指針となる基本構想を定めるとともに、基本構想、基本計画及び実施計画で構成される総合計画に基づき、総合的かつ計画的に市政を運営するものとする。<br>2 市長は、総合計画の策定にあたっては、行政評価の結果を反映させるものとする。</div>
<div class="jorei-article"><span class="article-title">（行政改革）</span><br>第17条 執行機関は、行政改革に関する計画を策定し、常に市政運営の質の向上を図るものとする。</div>
<div class="jorei-article"><span class="article-title">（行政評価）</span><br>第18条 執行機関は、総合計画に基づく政策の成果を明らかにし、効率的かつ効果的に市政を運営するため、行政評価を実施し、当該行政評価に関する情報を市民等及び議会に分かりやすく公表するものとする。<br>2 執行機関は、行政評価にあたっては、市民等が参加できるよう努めるものとする。<br>3 執行機関は、行政評価を常に最もふさわしい手法で行えるよう検討し、その改善に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（政策法務）</span><br>第19条 執行機関は、政策法務能力の向上に努め、法令等の解釈及び運用を適正に行うとともに、必要な条例、規則等の制定及び改廃を適切に行うものとする。</div>
<div class="jorei-article"><span class="article-title">（行政手続）</span><br>第20条 執行機関は、市民等の権利及び利益の保護を図るため、処分、行政指導及び届出に関する手続に関し、市政運営における公正性の確保及び透明性の向上を図るものとする。</div>
<div class="jorei-article"><span class="article-title">（説明責任）</span><br>第21条 執行機関は、政策過程において、政策の内容、効果、必要性、妥当性等について、市民等及び議会に分かりやすく説明するものとする。</div>
<div class="jorei-article"><span class="article-title">（応答責任）</span><br>第22条 執行機関は、市民等からの市政に関する意見等を十分に検討し、公正かつ適切に対応し、市政に活用するものとする。</div>
<div class="jorei-article"><span class="article-title">（法令遵守及び公益通報）</span><br>第23条 執行機関は、市職員の職務に係る法令等の遵守及び倫理の徹底を図り、公正な職務の遂行を確保するものとする。<br>2 市職員は、市政運営に違法又は不当な事実があった場合には、これを放置し、又は隠してはならず、事態を是正するため、公益通報等の適切な行動をとるものとする。</div>
<div class="jorei-article"><span class="article-title">（組織及び人事）</span><br>第24条 市長は、社会情勢の変化又は複数の分野にまたがる課題に柔軟に対応するため、効率的かつ効果的な内部組織の編成に常に努めるものとする。<br>2 市長は、政策形成にあたり創造性を発揮できるよう、優秀な人材の確保、職員研修の充実、評価重視の人事等に取り組むものとする。</div>
<div class="jorei-article"><span class="article-title">（危機管理）</span><br>第25条 執行機関は、地震、火災、水害その他の不測の事態から、市民等の身体、生命及び財産を守るため、緊急時の対応計画を策定するとともに、これを担う体制を整備するものとする。<br>2 執行機関は、災害等の復旧に関する計画を策定するとともに、これを担う体制を整備するものとする。</div>
<div class="jorei-article"><span class="article-title">（財政運営）</span><br>第26条 市長は、計画的に市政を運営するため、必要な財源を確保するとともに、最少の経費で最大の効果をあげるよう、健全な財政運営及び合理的な予算執行に努めるものとする。<br>2 市長は、予算の編成及び執行にあたっては、総合計画及びその評価を踏まえて行うものとする。<br>3 市長は、財政状況、予算の内容及び編成過程、予算執行並びに決算について、市民等及び議会への分かりやすい情報提供に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（財産管理）</span><br>第27条 市長は、市有財産の保有状況を明らかにし、財産の適正な管理及び効率的な活用に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（監査）</span><br>第28条 監査委員は、合理的かつ能率的な市政運営の確保のため、事務事業の適法性、妥当性、経済性等の評価を踏まえて監査を行うものとする。</div>
<div class="jorei-chapter">第6章 参加と協働</div>
<div class="jorei-section">第1節 情報の共有</div>
<div class="jorei-article"><span class="article-title">（情報の共有）</span><br>第29条 議会及び執行機関は、参加と協働のまちづくりを推進するため、市政に関する情報が市民等との共有財産であることを認識し、適切な情報の提供及び情報公開を推進するものとする。<br>2 市民等、議会及び執行機関は、まちづくりに関する情報を互いに共有するよう努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（情報の提供）</span><br>第30条 議会及び執行機関は、広聴及び広報の充実を図ることにより、市民等が必要とする情報を把握するとともに、当該情報を積極的かつ効果的に提供するよう努めるものとする。<br>2 議会及び執行機関は、情報の提供にあたっては、広報、ホームページ等を積極的に活用し、市政情報を分かりやすく、かつ、入手しやすい複数の方法で市民等に提供するものとする。</div>
<div class="jorei-article"><span class="article-title">（情報公開）</span><br>第31条 議会及び執行機関は、保有する情報について公開請求を受けたときは、正当な理由がない限り、適切かつ迅速に公開するものとする。</div>
<div class="jorei-article"><span class="article-title">（個人情報保護）</span><br>第32条 議会及び執行機関は、個人の権利及び利益の保護並びに適切な市政運営に資するため、保有する個人情報を適切に取り扱うものとする。</div>
<div class="jorei-section">第2節 参加</div>
<div class="jorei-article"><span class="article-title">（参加する権利の保障）</span><br>第33条 執行機関は、政策過程において、市政運営の効率性の確保に配慮しつつ、市民等の参加する権利を保障するとともに、そのための制度の充実に努めるものとする。<br>2 市民等の市政への参加は、政策過程の質の向上を目的とするものであり、市政を運営するにあたり、執行機関が負うべき責任及び義務を軽減するものと解してはならない。</div>
<div class="jorei-article"><span class="article-title">（参加の対象）</span><br>第34条 執行機関は、次に掲げる政策を定める場合は、参加の機会を保障するものとする。<br>(1) 基本構想、基本計画又は個別分野における政策の基本的事項を定める計画<br>(2) 市民等に義務を課し、又は権利を制限する条例<br>(3) 市民生活に大きな影響を及ぼす政策又は制度<br>2 前項各号に掲げるもののうち、次に掲げるものは、参加の対象外とすることができる。<br>(1) 内容の軽微なもの<br>(2) 緊急を要するもの<br>(3) 法令によって定められるもの<br>(4) 税及び納付すべき金銭に関するもの</div>
<div class="jorei-article"><span class="article-title">（参加の方法）</span><br>第35条 執行機関は、市民等の参加の機会を保障するため、公聴会、説明会、懇話会等の開催、審議会等の公募委員募集、提案書の提出等目的に応じた適切な方法を用いるものとする。<br>2 執行機関は、前項に規定するほか、多様な市民等の参加の方法を積極的に検討し、継続して改善に努めるものとする。<br>3 市民等及び執行機関は、市民等の参加にあたり、互いの意見を十分に尊重しながら、合意形成に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（会議の公開）</span><br>第36条 執行機関は、法令等で定めのあるものを除き、会議及びその会議録を公開しなければならない。ただし、当該会議に諮り、全部又は一部を非公開とすることができる。この場合において、執行機関は、非公開とする理由を公表するものとする。</div>
<div class="jorei-article"><span class="article-title">（参加における配慮）</span><br>第37条 執行機関は、市民等が参加できるよう、会議の時間、場所その他開催方法等に配慮するものとする。</div>
<div class="jorei-article"><span class="article-title">（政策過程の透明化）</span><br>第38条 執行機関は、市民等の参加を促進するため、参加の場において、政策の内容、効果、必要性、妥当性等について、積極的かつ効果的な情報提供を行い、政策過程の透明化を図るものとする。</div>
<div class="jorei-article"><span class="article-title">（意見の取扱）</span><br>第39条 執行機関は、市民等から示された意見及び意見に対する考え方を適切な時期及び方法で公表するものとする。<br>2 執行機関は、市民等から示された意見を踏まえ、合意点を見極め、市政へ適切に反映させるよう努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（パブリック・コメント手続）</span><br>第40条 執行機関は、市政の重要な政策の決定にあたり、事前にその案を公表し、市民等が意見を述べる機会を設け、当該意見に対する考え方を公表するものとする。</div>
<div class="jorei-article"><span class="article-title">（学習・調査研究の支援）</span><br>第41条 執行機関は、市民等が参加し、十分な効果をあげられるよう、市民等が市政や地域社会の課題について学習し、及び調査研究するための支援に努めるものとする。</div>
<div class="jorei-section">第3節 協働</div>
<div class="jorei-article"><span class="article-title">（協働の基本原則）</span><br>第42条 市民等及び執行機関は、地域課題の解決に向けて協働することができる。<br>2 協働にあたっては、互いに十分な協議を行い、協働の意義、目的及び役割分担について合意を図るものとする。</div>
<div class="jorei-article"><span class="article-title">（協働推進の基盤整備）</span><br>第43条 執行機関は、市民等が協働の意義及び目的を共有し、共に活動できるよう支援するため、協働を推進する総合的な政策を行うものとする。<br>2 執行機関は、市民等による協働を支援するため、活動の機会、場所の提供、人材の育成、情報の収集及び提供等を行うものとする。<br>3 執行機関は、市民等からの協働についての提案等、多様な協働の試みが展開されるよう、相談体制の充実等に努めるものとする。</div>
<div class="jorei-chapter">第7章 コミュニティ</div>
<div class="jorei-article"><span class="article-title">（コミュニティの尊重）</span><br>第44条 市民等は、暮らしやすい地域社会を築くために、自主的かつ自立した地域の基盤となる町会、自治会その他の地縁的な団体及び目的を共有する組織又は集団（以下「コミュニティ」という。）を形成することができる。<br>2 市民等及び執行機関は、地域の共通課題について共に考え、当該課題の解決にあたるためのコミュニティの役割を認識し、コミュニティの活動を守り育てるよう努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（コミュニティの連携）</span><br>第45条 各コミュニティは、地域の様々な課題及び互いの活動が深く関連していることを認識し、連携を図るよう努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（コミュニティ活動の支援）</span><br>第46条 執行機関は、コミュニティ活動を支援するため、活動の拠点となる施設整備、情報提供、人材育成、コミュニティ相互の連携促進等に必要な政策を推進するものとする。この場合において、執行機関は、コミュニティの自主性及び自立性を尊重するものとする。</div>
<div class="jorei-chapter">第8章 市民投票</div>
<div class="jorei-article"><span class="article-title">（市民投票制度の設置）</span><br>第47条 市長は、市民又は執行機関の発議に基づき、市政に関わる重要事項について、直接、市民の意思を確認するため、市民投票を実施することができる。</div>
<div class="jorei-article"><span class="article-title">（市民投票に関する情報提供）</span><br>第48条 市長は、市民投票の実施にあたり、市民が適切な判断ができるよう、あらかじめ十分な情報提供を行うものとする。</div>
<div class="jorei-article"><span class="article-title">（結果の尊重）</span><br>第49条 議会及び執行機関は、市民投票の結果を尊重するものとする。</div>
<div class="jorei-article"><span class="article-title">（委任）</span><br>第50条 市民投票の実施に関し、必要な事項は、別に条例で定める。</div>
<div class="jorei-chapter">第9章 国、埼玉県、他の地方自治体等との連携</div>
<div class="jorei-article"><span class="article-title">（国及び埼玉県との関係）</span><br>第51条 基礎自治体としての三郷市は、市民等にもっとも身近な政府として、国及び埼玉県に対して対等な立場に立ち、協力及び役割分担を行うものとする。</div>
<div class="jorei-article"><span class="article-title">（他の地方自治体との関係）</span><br>第52条 三郷市は、共通するまちづくりの課題を解決するため、他の地方自治体と相互に交流し、連携を図り、協力するよう努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（国際的な関係）</span><br>第53条 三郷市は、環境問題等の国際的な課題が地域社会における課題と深く関わっていることを認識し、国際的な連携協力を促進し、国際社会の一員として当該課題の解決のため必要な取組みを行うものとする。</div>
<div class="jorei-chapter">第10章 条例の位置付け及び見直し等</div>
<div class="jorei-article"><span class="article-title">（条例の位置付け）</span><br>第54条 個別の条例、規則、計画等の制定若しくは策定又は解釈においては、この条例の趣旨を最大限尊重するものとする。<br>2 市民等、議会、執行機関及び市職員は、この条例を尊重し、及び遵守するものとする。<br>3 この条例の施行前に既に施行されている条例、規則等は、この条例との整合を図るため、適宜見直しを行うものとする。</div>
<div class="jorei-article"><span class="article-title">（条例の検証及び見直し）</span><br>第55条 市長は、この条例の施行状況を検証し、必要に応じて見直しを行うものとする。</div>
<div class="jorei-article"><span class="article-title">（条例の基本理念の普及）</span><br>第56条 市長は、市民等がこの条例の内容を深く理解し、積極的に市民等の権利を行使できるよう、普及及び啓発を継続して行うものとする。</div>
<div class="jorei-supplementary">附則<br>この条例は、平成21年10月1日から施行する。</div>` },
    { id: 15, title: '三郷市公告式条例', category: '総規・基本', keywords: ['公告', '告示', '公布'], summary: '条例等の公布方法を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000013.html',
        fullText: `<div class="jorei-header">○三郷市公告式条例<br>昭和31年9月30日 条例第1号</div>
<div class="jorei-article"><span class="article-title">（趣旨）</span><br>第1条 地方自治法（昭和22年法律第67号）第16条の規定に基づく公告式は、この条例の定めるところによる。</div>
<div class="jorei-article"><span class="article-title">（条例の公布）</span><br>第2条 条例を、公布するときは、公布の旨の前文及び年月日を記入してその末尾に市長が署名しなければならない。<br>2 条例の公布は、三郷市役所の掲示場に掲示してこれを行う。</div>
<div class="jorei-article"><span class="article-title">（規則に関する準用）</span><br>第3条 前条の規定は、規則にこれを準用する。</div>
<div class="jorei-article"><span class="article-title">（規程の公表）</span><br>第4条 規則を除くほか、市長の定める規程を公表しようとするときは、公表の旨の前文、年月日及び市長名を記入し、市長印を押さなければならない。<br>2 第2条第2項の規定は、前項の規程に準用する。</div>
<div class="jorei-article"><span class="article-title">（その他の規則及び規程の公表）</span><br>第5条 第2条の規定は、議会の会議規則、傍聴規則その他教育委員会を除く市の機関の定める規則で公表を要するものにこれを準用する。この場合において、同条第1項中「市長」とあるのは、「当該機関又は当該機関を代表する者」と読み替えるものとする。<br>2 前条の規定は、教育委員会を除く市の機関の定める規程で公表を要するものにこれを準用する。この場合において、同条第1項中「市長名」とあるのは「当該機関名又は当該機関を代表する者の名」と、「市長印」とあるのは「当該機関印又は当該機関を代表する者の印」と読み替えるものとする。</div>
<div class="jorei-article"><span class="article-title">（施行期日の特例）</span><br>第6条 規則又は市の機関の定める規則若しくは規程は、それぞれ当該規則又は規程をもって特に施行期日を定めることができる。</div>
<div class="jorei-supplementary">附則<br>この条例は、昭和31年9月30日から施行する。<br><br>附則（昭和39年12月24日条例第26号）<br>この条例は、公布の日から施行する。</div>` },
    { id: 16, title: '三郷市表彰条例', category: '総規・基本', keywords: ['表彰', '功績', '栄誉'], summary: '市の表彰に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000014.html',
        fullText: `<div class="jorei-header">○三郷市表彰条例<br>昭和44年6月30日 条例第26号</div>
<div class="jorei-article"><span class="article-title">（目的）</span><br>第1条 この条例は、市の発展に寄与し、又は広く市民の模範となるべき功績のあった個人及び団体の表彰に関し、必要な事項を定めることを目的とする。</div>
<div class="jorei-article"><span class="article-title">（表彰の基準）</span><br>第2条 表彰は、次に該当する個人又は団体について行う。<br>（1）市議会議員として10年以上在職し、特に功労があった者<br>（2）選挙によって就任した各種委員又は任命及び選任について議会の同意を得て就任した各種委員として10年以上在職し、特に功労があった者<br>（3）前号に掲げるもののほか、特別職の職員で非常勤のものの報酬及び費用弁償に関する条例（昭和48年条例第2号）別表第1から別表第3までに掲げる各種委員等として10年以上在職し、特に功労があった者<br>（4）消防団員として15年以上在職し、特に功労があった者<br>（5）副市長として10年以上在職し、特に功労があった者<br>（6）教育長として10年以上在職し、特に功労があった者<br>（7）市の職員として25年以上在職し、特に功労があった者<br>（8）市の公益又は発展に貢献し、特に功労があった者<br>（9）市の公益のため、50万円以上の金品を寄附した者<br>（10）善行が特に優れ他の模範となる者<br>（11）その他特に表彰に値すると認められる者</div>
<div class="jorei-article"><span class="article-title">（表彰の方法）</span><br>第3条 表彰は、市長が行う。<br>2 表彰は、表彰状に副賞を添えるものとする。</div>
<div class="jorei-article"><span class="article-title">（在職年数の計算）</span><br>第4条 第2条の在職年数は、月をもって計算し、中断した場合であっても前後の年数を通算する。</div>
<div class="jorei-article"><span class="article-title">（表彰の時期）</span><br>第5条 表彰は、毎年1月1日に行う。ただし、特に必要がある場合は、臨時に行うことができる。</div>
<div class="jorei-article"><span class="article-title">（追賞）</span><br>第6条 この条例により表彰される者が表彰前に死亡したときは、追賞し、表彰及び副賞は、その遺族に授与する。</div>
<div class="jorei-article"><span class="article-title">（表彰者名簿）</span><br>第7条 市長は、この条例により表彰したときは、表彰を受けた者の氏名その他必要事項を表彰者名簿に登録し、永久保存するものとする。</div>
<div class="jorei-article"><span class="article-title">（規則への委任）</span><br>第8条 この条例の施行について必要な事項は、規則で定める。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。<br><br>附則（平成18年9月27日条例第25号）<br>この条例は、公布の日から施行する。<br><br>附則（平成18年12月14日条例第35号）<br>この条例は、平成19年4月1日から施行する。<br><br>附則（平成29年3月27日条例第2号）<br>この条例は、平成29年4月1日から施行する。</div>` },

    // ===== 第2編 議会 =====
    { id: 17, title: '三郷市議会基本条例', category: '議会', keywords: ['議会', '基本条例', '議員', '民主主義'], summary: '議会運営の基本理念と議員の責務を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000965.html',
        fullText: `<div class="jorei-header">○三郷市議会基本条例<br>平成24年9月27日 条例第24号</div>
<div class="jorei-toc">目次<br>前文<br>第1章 総則(第1条―第4条)<br>第2章 市民と議会との関係(第5条―第8条)<br>第3章 議会と市長等との関係(第9条―第11条)<br>第4章 議会の機能の充実(第12条―第17条)<br>第5章 その他(第18条)<br>附則</div>
<div class="jorei-preamble">地方分権が進む中で、地方公共団体の自己決定・自己責任の範囲が一層拡大しており、市民から選ばれた代表で構成される意思決定機関としての議会は、これまで以上に責任ある活動が求められている。<br>また、議会は、市長その他の執行機関（以下「市長等」という。）と対等な関係を構築し、議会自体の活性化を図る必要があり、議員は、地域の課題のみならず、様々な市政の課題を的確に把握し、市民全体の福祉の向上を目指して行動しなければならない。さらに、議員は自らの能力を高め、その能力を十分に発揮し、市政発展に向けた取組を積極的に推進することが求められている。<br>三郷市議会は、このような時代の要請に応えるべく、三郷市自治基本条例（平成21年条例第16号）第3章に規定された「議会の役割」等を忠実に履行し、信頼される議会を目指すための基本理念として、この条例を制定する。</div>
<div class="jorei-chapter">第1章 総則</div>
<div class="jorei-article"><span class="article-title">（目的）</span><br>第1条 この条例は、議会及び議員の活動の活性化と充実のために必要な議会運営の基本事項を定めることにより、市民の負託に的確に応え、公正で民主的な市政の発展と市民福祉の向上に寄与することを目的とする。</div>
<div class="jorei-article"><span class="article-title">（議会の活動原則）</span><br>第2条 議会は、市民を代表する公選の議員をもって構成される市政の意思決定機関として、市民の多様な意見を的確に把握して市政に反映させるとともに、議会運営における透明性を確保し、公平、公正かつ民主的な議会の活動に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（議会運営の基本）</span><br>第3条 議会は、市の基本的な政策決定、市長等の事務執行の監視及び評価、政策立案並びに提言を行う機能が十分発揮できるよう、円滑かつ効率的な運営を図るとともに、市政の課題、議案等の審議の充実に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（議員の活動原則）</span><br>第4条 議員は、次に掲げる原則に従って活動するものとする。<br>(1) 高い倫理性を保持し、公正かつ清廉を基本姿勢とすること。<br>(2) 市民全体の福祉の向上を目指すこと。<br>(3) 不断の研さんに努め、自己の資質を高めること。<br>(4) 議会が合議制の機関であることを十分に認識し、議員相互の自由な討議を重んずること。<br>2 議員は、議会活動を行うため、政策を中心とした同一の理念を共有する議員で会派を結成することができる。</div>
<div class="jorei-chapter">第2章 市民と議会との関係</div>
<div class="jorei-article"><span class="article-title">（会議の公開）</span><br>第5条 議会は、公開する本会議等の傍聴を広く市民に促すものとする。</div>
<div class="jorei-article"><span class="article-title">（資料の公開）</span><br>第6条 議会は、本会議等において使用した資料を、他の条例に特別の定めがある場合を除き、市民が閲覧できるようにするものとする。</div>
<div class="jorei-article"><span class="article-title">（議案に対する賛否の公表）</span><br>第7条 議会は、議案に対する賛否の表明を、市民に公表するものとする。</div>
<div class="jorei-article"><span class="article-title">（情報交換）</span><br>第8条 議会は、議会の活動を市民に伝えるとともに、市民と議員とが意見及び情報を交換し、知り得た情報を、議会の活動に反映させるものとする。</div>
<div class="jorei-chapter">第3章 議会と市長等との関係</div>
<div class="jorei-article"><span class="article-title">（市長等との関係の基本原則）</span><br>第9条 議会は、市民の意思を代表する合議制の機関として、市長等との緊張関係を保ち、積極的な政策提言等を通じて市政発展に取り組むものとする。</div>
<div class="jorei-article"><span class="article-title">（事務執行の監視及び評価）</span><br>第10条 議会は、市長等の有する権限を尊重しつつ、その権限に属する事務が公正に、かつ、効率的に執行されているか監視するとともに、その事務の効果及び成果について評価し、必要があると認めるときは、適切な措置を講ずるよう促すものとする。</div>
<div class="jorei-article"><span class="article-title">（議会及び議員による資料要求）</span><br>第11条 議会及び議員は、本会議等における討議に資するため、市長等に対し、その執行する事務に関する資料の提供を求めることができる。</div>
<div class="jorei-chapter">第4章 議会の機能の充実</div>
<div class="jorei-article"><span class="article-title">（議員相互の討議）</span><br>第12条 議員は、本会議等において、議員相互の討議を積極的に行うものとする。</div>
<div class="jorei-article"><span class="article-title">（政務活動費の執行）</span><br>第13条 会派及び議員は、政務活動費の執行に当たっては、関係法令を遵守し、有効に活用するものとする。<br>2 会派及び議員は、政務活動費の使途を明らかにし、市民に対し説明責任を負うものとする。</div>
<div class="jorei-article"><span class="article-title">（議員研修の充実）</span><br>第14条 議会は、議員が政策の立案及び提言をするために必要な能力の向上を図るため、議員に対する研修を充実させるものとする。</div>
<div class="jorei-article"><span class="article-title">（議会事務局の体制整備）</span><br>第15条 議会は、議会が円滑に運営され、かつ、議員による政策の立案及び提言に関する活動が活発に行われるようにするため、議会事務局の体制整備と充実に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（議会広報の充実）</span><br>第16条 議会は、議案の審議状況や議会活動を議会広報紙で公表するなど、市民に対する情報の提供に努めるものとする。<br>2 議会は、情報技術の発達を踏まえた多様な広報手段を活用することにより、多くの市民が議会と市政に関心を持つよう広報活動の充実に努めるものとする。</div>
<div class="jorei-article"><span class="article-title">（議会図書室の充実）</span><br>第17条 議会は、議員が行う市政の調査研究や政策の立案及び提言に資するため、議会図書室の適正な管理・運営及び充実に努めるものとする。</div>
<div class="jorei-chapter">第5章 その他</div>
<div class="jorei-article"><span class="article-title">（検証）</span><br>第18条 議会は、この条例の施行後、社会情勢の変化等を勘案して、この条例の目的が達成されているかどうかについて検証を行い、必要があると認めるときは、所要の措置を講ずるものとする。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 18, title: '三郷市議会の議員の定数を定める条例', category: '議会', keywords: ['議員定数', '定数', '議会'], summary: '議会議員の定数を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000017.html',
        fullText: `<div class="jorei-header">○三郷市議会の議員の定数を定める条例<br>平成12年3月24日 条例第32号</div>
<div class="jorei-article">地方自治法（昭和22年法律第67号）第91条第1項の規定に基づき、三郷市議会の議員の定数は、24人とする。</div>
<div class="jorei-supplementary">附則<br>（施行期日等）<br>1 この条例は、平成15年1月1日から施行し、この条例の施行の日以後初めてその期日を告示される一般選挙から適用する。<br>（三郷市議会の議員の定数を減少する条例の廃止）<br>2 三郷市議会の議員の定数を減少する条例（昭和52年条例第12号）は、廃止する。<br>（経過措置）<br>3 前項の規定による廃止前の三郷市議会の議員の定数を減少する条例に基づく議会の議員の定数については、附則第1項の一般選挙までの間は、なお従前の例による。<br><br>附則（平成16年12月20日条例第29号）<br>この条例は、この条例の公布の日以後初めてその期日を告示される一般選挙から施行する。<br><br>附則（平成23年6月20日条例第9号）<br>この条例は、この条例の公布の日以後初めてその期日を告示される一般選挙から施行する。</div>` },
    { id: 19, title: '三郷市議会定例会条例', category: '議会', keywords: ['定例会', '議会', '会議'], summary: '議会定例会の回数等を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000018.html',
        fullText: `<div class="jorei-header">○三郷市議会定例会条例<br>昭和31年9月30日 条例第2号</div>
<div class="jorei-article">地方自治法（昭和22年法律第67号）第102条第2項の規定による三郷市議会の定例会の回数は、毎年4回とする。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 20, title: '三郷市議会委員会条例', category: '議会', keywords: ['委員会', '常任委員会', '議会'], summary: '議会の委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000020.html',
        fullText: `<div class="jorei-header">○三郷市議会委員会条例<br>平成3年8月12日 条例第20号</div>
<div class="jorei-article"><span class="article-title">（常任委員会の設置）</span><br>第1条 議会に常任委員会を置く。</div>
<div class="jorei-article"><span class="article-title">（常任委員の所属、常任委員会の名称、委員定数及びその所管）</span><br>第2条 議員は、少なくとも一の常任委員となるものとする。<br>2 常任委員会の名称、委員の定数及び所管は、次のとおりとする。<br>（1）総務常任委員会　6人<br>　一般会計の歳入に関する事項、企画政策部、総務部、危機管理防災課、財務部、会計課、議会事務局、監査委員、選挙管理委員会、公平委員会、固定資産評価審査委員会、農業委員会及び消防本部の所管に関する事項並びに他の常任委員会の所管に属しない事項<br>（2）健康福祉常任委員会　6人<br>　いきいき健康部、福祉部及びこども未来部の所管に関する事項<br>（3）文教経済常任委員会　6人<br>　教育委員会、市民生活部及び地域振興部の所管に関する事項<br>（4）建設水道常任委員会　6人<br>　建設部、まちづくり推進部及び水道部の所管に関する事項</div>
<div class="jorei-article"><span class="article-title">（常任委員の任期）</span><br>第3条 常任委員の任期は、2年とする。ただし、後任者が選任されるまで在任する。</div>
<div class="jorei-article"><span class="article-title">（議会運営委員会の設置）</span><br>第4条 議会に議会運営委員会を置く。<br>2 議会運営委員会の委員の定数は、10人以内とする。</div>
<div class="jorei-article"><span class="article-title">（特別委員会の設置等）</span><br>第6条 特別委員会は、必要がある場合において議会の議決で置く。</div>
<div class="jorei-article"><span class="article-title">（委員の選任）</span><br>第7条 常任委員、議会運営委員及び特別委員の選任は、議長の指名による。</div>
<div class="jorei-article"><span class="article-title">（委員長及び副委員長）</span><br>第8条 常任委員会、議会運営委員会及び特別委員会に委員長及び副委員長1人を置く。<br>2 委員長及び副委員長は、委員会において互選する。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。<br>（以下、多数の附則省略）</div>` },
    { id: 21, title: '三郷市議会会議規則', category: '議会', keywords: ['会議規則', '議事', '議会運営'], summary: '議会の会議運営に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000021.html',
        fullText: `<div class="jorei-header">○三郷市議会会議規則<br>昭和47年6月29日 議会規則第1号</div>
<div class="jorei-toc">目次<br>第1章 会議（第1条―第89条）<br>第2章 委員会（第90条―第138条）<br>第3章 請願（第139条―第145条）<br>第4章 辞職及び資格の決定（第146条―第150条）<br>第5章 規律（第151条―第159条）<br>第6章 懲罰（第160条―第165条）<br>第7章 議員の派遣（第166条）<br>第8章 補則（第167条）<br>附則</div>
<div class="jorei-chapter">第1章 会議</div>
<div class="jorei-section">第1節 総則</div>
<div class="jorei-article"><span class="article-title">（参集）</span><br>第1条 議員は、招集の当日開議定刻前に議場に参集し、その旨を議長に通告しなければならない。</div>
<div class="jorei-article"><span class="article-title">（会期）</span><br>第5条 会期は、毎会期の初めに議会の議決で定める。</div>
<div class="jorei-article"><span class="article-title">（会議時間）</span><br>第9条 会議時間は、午前10時から午後5時までとする。</div>
<div class="jorei-article"><span class="article-title">（一般質問）</span><br>第62条 議員は、市の一般事務について、議長の許可を得て質問することができる。</div>
<div class="jorei-chapter">第3章 請願</div>
<div class="jorei-article"><span class="article-title">（請願書の記載事項等）</span><br>第139条 請願書には、邦文を用いて、請願の趣旨、提出年月日及び請願者の住所を記載し、請願者が署名又は記名押印をしなければならない。</div>
<div class="jorei-supplementary">附則<br>1 この規則は、昭和47年7月1日から施行する。<br>（以下、多数の附則省略）</div>` },
    { id: 22, title: '三郷市議会傍聴規則', category: '議会', keywords: ['傍聴', '公開', '市民参加'], summary: '議会傍聴に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000022.html',
        fullText: `<div class="jorei-header">○三郷市議会傍聴規則<br>平成5年6月1日 議会規則第1号</div>
<div class="jorei-article"><span class="article-title">（趣旨）</span><br>第1条 この規則は、地方自治法第130条第3項の規定に基づき、三郷市議会の会議の傍聴に関し必要な事項を定めるものとする。</div>
<div class="jorei-article"><span class="article-title">（傍聴席の区分）</span><br>第2条 傍聴席は、一般席及び報道関係者席に分ける。</div>
<div class="jorei-article"><span class="article-title">（傍聴の手続）</span><br>第3条 会議を傍聴しようとする者は、議会事務局に申し出て、所定の場所で自己の住所及び氏名を傍聴人受付簿に記入しなければならない。</div>
<div class="jorei-article"><span class="article-title">（傍聴人の定員）</span><br>第5条 傍聴人の定員は、60人とする。</div>
<div class="jorei-article"><span class="article-title">（傍聴人の責務）</span><br>第8条 傍聴人は、傍聴席へ入場し退場するまで、次の事項を守らなければならない。<br>（1）議場における言論に対して、拍手その他の方法により公然と可否を表明しないこと。<br>（2）騒ぎ立てるなど、議場への迷惑となるような行為をしないこと。<br>（3）みだりに立ち上がるなど、威圧的な行為をしないこと。<br>（4）他の傍聴人の妨げとなる行為をしないこと。<br>（5）電子機器類（補聴器を除く。）を携帯して入場する場合は、その電源を切ること。<br>（6）飲食又は喫煙をしないこと。<br>（7）前各号に定めるもののほか、議場の秩序を乱し、又は会議の妨害となるような行為をしないこと。</div>
<div class="jorei-supplementary">附則<br>この規則は、公布の日から施行する。</div>` },
    { id: 23, title: '三郷市議会議員政治倫理条例', category: '議会', keywords: ['政治倫理', '議員', '倫理'], summary: '議員の政治倫理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00001214.html' },
    { id: 24, title: '三郷市議会政務活動費の交付に関する条例', category: '議会', keywords: ['政務活動費', '議員', '交付'], summary: '政務活動費の交付に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000639.html' },
    { id: 25, title: '三郷市議会議員の請負の状況の公表に関する条例', category: '議会', keywords: ['請負', '公表', '透明性'], summary: '議員の請負状況の公表に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00001227.html' },
    { id: 26, title: '三郷市議会事務局設置条例', category: '議会', keywords: ['事務局', '議会', '組織'], summary: '議会事務局の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000024.html' },
    { id: 27, title: '三郷市議会の個人情報の保護に関する条例', category: '議会', keywords: ['個人情報', '保護', 'プライバシー'], summary: '議会における個人情報保護に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00001184.html' },

    // ===== 第3編 執行機関 =====
    { id: 28, title: '三郷市行政組織条例', category: '執行機関', keywords: ['行政組織', '部', '課', '組織'], summary: '市の行政組織を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000027.html' },
    { id: 29, title: '三郷市役所出張所設置条例', category: '執行機関', keywords: ['出張所', '窓口', 'サービス'], summary: '市役所出張所の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000031.html' },
    { id: 30, title: '三郷市行政改革推進委員会条例', category: '執行機関', keywords: ['行政改革', '推進', '効率化'], summary: '行政改革推進委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000035.html' },
    { id: 31, title: '三郷市まちづくり委員会条例', category: '執行機関', keywords: ['まちづくり', '委員会', '市民参加'], summary: 'まちづくり委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000041.html' },
    { id: 32, title: '三郷市情報公開条例', category: '執行機関', keywords: ['情報公開', '公文書', '透明性', '市民の知る権利'], summary: '市の情報公開に関する条例。市民の知る権利を保障。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000050.html' },
    { id: 33, title: '三郷市個人情報の保護に関する法律施行条例', category: '執行機関', keywords: ['個人情報', '保護', 'プライバシー'], summary: '個人情報保護法の施行に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000053.html' },
    { id: 34, title: '三郷市情報公開・個人情報保護審査会条例', category: '執行機関', keywords: ['審査会', '情報公開', '個人情報'], summary: '情報公開・個人情報保護に関する審査会の設置条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000055.html' },
    { id: 35, title: '三郷市行政手続条例', category: '執行機関', keywords: ['行政手続', '処分', '申請', '不利益処分'], summary: '行政手続の透明性・公正性を確保する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000059.html' },
    { id: 36, title: '三郷市行政手続等における情報通信の技術の利用に関する条例', category: '執行機関', keywords: ['電子申請', 'オンライン', 'デジタル化'], summary: '行政手続のオンライン化に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000062.html' },
    { id: 37, title: '三郷市行政不服審査法関係手数料徴収条例', category: '執行機関', keywords: ['行政不服審査', '手数料', '不服申立て'], summary: '行政不服審査に関する手数料の条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000064.html' },
    { id: 38, title: '三郷市行政不服審査会条例', category: '執行機関', keywords: ['行政不服審査', '審査会', '救済'], summary: '行政不服審査会の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000065.html' },
    { id: 39, title: '三郷市個人番号の利用及び特定個人情報の提供に関する条例', category: '執行機関', keywords: ['マイナンバー', '個人番号', '番号制度'], summary: 'マイナンバーの利用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000067.html' },
    { id: 40, title: '三郷市選挙管理委員会規程', category: '執行機関', keywords: ['選挙', '選挙管理', '投票'], summary: '選挙管理委員会に関する規程。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000071.html' },
    { id: 41, title: '三郷市議会議員又は三郷市長の選挙における選挙運動用自動車の使用等の公営に関する条例', category: '執行機関', keywords: ['選挙', '公営', '選挙運動'], summary: '選挙運動の公費負担に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000077.html' },
    { id: 42, title: '三郷市選挙公報発行条例', category: '執行機関', keywords: ['選挙公報', '選挙', '情報提供'], summary: '選挙公報の発行に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000081.html' },
    { id: 43, title: '三郷市監査委員条例', category: '執行機関', keywords: ['監査', '監査委員', 'チェック機能'], summary: '監査委員に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000086.html' },
    { id: 44, title: '三郷市公平委員会設置条例', category: '執行機関', keywords: ['公平委員会', '職員', '救済'], summary: '公平委員会の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000090.html' },
    { id: 45, title: '三郷市人事行政の運営等の状況の公表に関する条例', category: '執行機関', keywords: ['人事行政', '公表', '透明性'], summary: '人事行政の状況公表に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000098.html' },
    { id: 46, title: '固定資産評価審査委員会条例', category: '執行機関', keywords: ['固定資産', '評価', '審査'], summary: '固定資産評価審査委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000101.html' },
    { id: 47, title: '三郷市附属機関に関する条例', category: '執行機関', keywords: ['附属機関', '審議会', '委員会'], summary: '市の附属機関に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000104.html' },

    // ===== 第4編 人事 =====
    { id: 48, title: '三郷市副市長の定数を定める条例', category: '人事', keywords: ['副市長', '定数', '特別職'], summary: '副市長の定数を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000106.html' },
    { id: 49, title: '三郷市職員定数条例', category: '人事', keywords: ['職員', '定数', '組織'], summary: '職員の定数を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000107.html' },
    { id: 50, title: '一般職の任期付職員の採用等に関する条例', category: '人事', keywords: ['任期付', '採用', '職員'], summary: '任期付職員の採用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000110.html' },
    { id: 51, title: '職員の分限に関する手続及び効果に関する条例', category: '人事', keywords: ['分限', '処分', '職員'], summary: '職員の分限処分に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000113.html' },
    { id: 52, title: '三郷市職員の定年等に関する条例', category: '人事', keywords: ['定年', '退職', '職員'], summary: '職員の定年に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000115.html' },
    { id: 53, title: '公益的法人等への職員の派遣等に関する条例', category: '人事', keywords: ['派遣', '公益法人', '職員'], summary: '公益法人等への職員派遣に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000120.html' },
    { id: 54, title: '職員の懲戒の手続及び効果に関する条例', category: '人事', keywords: ['懲戒', '処分', '職員'], summary: '職員の懲戒処分に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000124.html' },
    { id: 55, title: '職員の服務の宣誓に関する条例', category: '人事', keywords: ['服務', '宣誓', '職員'], summary: '職員の服務宣誓に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000126.html' },
    { id: 56, title: '職務に専念する義務の特例に関する条例', category: '人事', keywords: ['職務専念義務', '特例', '職員'], summary: '職務専念義務の特例に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000127.html' },
    { id: 57, title: '職員の勤務時間、休日及び休暇に関する条例', category: '人事', keywords: ['勤務時間', '休日', '休暇', '働き方'], summary: '職員の勤務条件に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000130.html' },
    { id: 58, title: '職員の育児休業等に関する条例', category: '人事', keywords: ['育児休業', '育休', 'ワークライフバランス'], summary: '職員の育児休業に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000136.html' },
    { id: 59, title: '議会の議員その他非常勤の職員の公務災害補償等に関する条例', category: '人事', keywords: ['公務災害', '補償', '非常勤'], summary: '非常勤職員の公務災害補償に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000150.html' },
    { id: 60, title: '三郷市職員公務災害等見舞金支給条例', category: '人事', keywords: ['公務災害', '見舞金', '職員'], summary: '職員の公務災害見舞金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000156.html' },
    { id: 61, title: '職員団体の登録に関する条例', category: '人事', keywords: ['職員団体', '労働組合', '登録'], summary: '職員団体の登録に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000167.html' },

    // ===== 第5編 給与 =====
    { id: 62, title: '議会の議員の議員報酬及び費用弁償等に関する条例', category: '給与', keywords: ['議員報酬', '報酬', '議会'], summary: '議員の報酬に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000171.html' },
    { id: 63, title: '特別職の職員で非常勤のものの報酬及び費用弁償に関する条例', category: '給与', keywords: ['報酬', '非常勤', '特別職'], summary: '非常勤特別職の報酬に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000172.html' },
    { id: 64, title: '三郷市会計年度任用職員の報酬等に関する条例', category: '給与', keywords: ['会計年度任用職員', '報酬', '非正規'], summary: '会計年度任用職員の報酬に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000174.html' },
    { id: 65, title: '証人等の実費弁償に関する条例', category: '給与', keywords: ['証人', '実費弁償', '費用'], summary: '証人等の実費弁償に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000176.html' },
    { id: 66, title: '三郷市特別職報酬等審議会条例', category: '給与', keywords: ['特別職', '報酬', '審議会'], summary: '特別職報酬審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000177.html' },
    { id: 67, title: '市長及び副市長の給与等に関する条例', category: '給与', keywords: ['市長', '副市長', '給与'], summary: '市長・副市長の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000178.html' },
    { id: 68, title: '三郷市教育委員会教育長の給与等に関する条例', category: '給与', keywords: ['教育長', '給与', '教育委員会'], summary: '教育長の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000181.html' },
    { id: 69, title: '職員の給与に関する条例', category: '給与', keywords: ['給与', '職員', '給料'], summary: '職員の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000182.html' },
    { id: 70, title: '技能労務職員の給与の種類及び基準に関する条例', category: '給与', keywords: ['技能労務', '給与', '職員'], summary: '技能労務職員の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000190.html' },
    { id: 71, title: '職員の特殊勤務手当に関する条例', category: '給与', keywords: ['特殊勤務', '手当', '職員'], summary: '特殊勤務手当に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000198.html' },
    { id: 72, title: '職員等の旅費に関する条例', category: '給与', keywords: ['旅費', '出張', '職員'], summary: '職員の旅費に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000206.html' },

    // ===== 第6編 財務 =====
    { id: 73, title: '議会の議決に付すべき契約及び財産の取得又は処分に関する条例', category: '財務', keywords: ['契約', '財産', '議会議決'], summary: '議会議決が必要な契約等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000208.html' },
    { id: 74, title: '三郷市補助金等交付規則', category: '財務', keywords: ['補助金', '交付', '助成'], summary: '補助金の交付に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000210.html' },
    { id: 75, title: '財政事情の作成及び公表に関する条例', category: '財務', keywords: ['財政', '公表', '透明性'], summary: '財政状況の公表に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000211.html' },
    { id: 76, title: '三郷市税条例', category: '財務', keywords: ['市税', '住民税', '固定資産税', '税金'], summary: '市税に関する総合的な条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000214.html' },
    { id: 77, title: '三郷市都市計画税条例', category: '財務', keywords: ['都市計画税', '税金', '都市計画'], summary: '都市計画税に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000215.html' },
    { id: 78, title: '三郷市国民健康保険税条例', category: '財務', keywords: ['国保', '国民健康保険', '保険税'], summary: '国民健康保険税に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000216.html' },
    { id: 79, title: '三郷市財政調整基金条例', category: '財務', keywords: ['財政調整', '基金', '積立'], summary: '財政調整基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000217.html' },
    { id: 80, title: '三郷市減債基金条例', category: '財務', keywords: ['減債', '基金', '借金返済'], summary: '減債基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000218.html' },
    { id: 81, title: '三郷市公共施設整備基金条例', category: '財務', keywords: ['公共施設', '基金', '整備'], summary: '公共施設整備基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000219.html' },
    { id: 82, title: '三郷市地域福祉基金条例', category: '財務', keywords: ['地域福祉', '基金', '福祉'], summary: '地域福祉基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000220.html' },
    { id: 83, title: '三郷市国民健康保険財政調整基金条例', category: '財務', keywords: ['国保', '基金', '財政'], summary: '国民健康保険財政調整基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000221.html' },
    { id: 84, title: '三郷市介護保険給付費支払基金条例', category: '財務', keywords: ['介護保険', '基金', '給付'], summary: '介護保険給付費支払基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000224.html' },
    { id: 85, title: '三郷市みどりの基金条例', category: '財務', keywords: ['みどり', '基金', '緑化', '環境'], summary: 'みどりの基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000228.html' },
    { id: 86, title: '財産の交換、譲与、無償貸付等に関する条例', category: '財務', keywords: ['財産', '交換', '貸付'], summary: '財産の交換等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000229.html' },
    { id: 87, title: '三郷市長期継続契約を締結することができる契約を定める条例', category: '財務', keywords: ['長期継続契約', '契約', '調達'], summary: '長期継続契約に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000230.html' },

    // ===== 第7編 教育 =====
    { id: 88, title: '三郷市教育に関する事務の職務権限の特例に関する条例', category: '教育・文化', keywords: ['教育', '職務権限', '特例'], summary: '教育事務の職務権限の特例に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000236.html' },
    { id: 89, title: '三郷市就学支援委員会規則', category: '教育・文化', keywords: ['就学', '支援', '教育'], summary: '就学支援委員会に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000245.html' },
    { id: 90, title: '三郷市人権教育推進協議会条例', category: '教育・文化', keywords: ['人権', '教育', '推進'], summary: '人権教育推進協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000246.html' },
    { id: 91, title: '三郷市立学校設置及び管理に関する条例', category: '教育・文化', keywords: ['学校', '設置', '小中学校'], summary: '市立学校の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000248.html' },
    { id: 92, title: '三郷市学校運営協議会規則', category: '教育・文化', keywords: ['学校運営', 'コミュニティスクール', '協議会'], summary: '学校運営協議会（コミュニティスクール）に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000254.html' },
    { id: 93, title: '三郷市いじめ問題対策連絡協議会条例', category: '教育・文化', keywords: ['いじめ', '対策', '連絡協議会'], summary: 'いじめ問題対策連絡協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000255.html' },
    { id: 94, title: '三郷市いじめ問題調査委員会条例', category: '教育・文化', keywords: ['いじめ', '調査', '委員会'], summary: 'いじめ問題調査委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000257.html' },
    { id: 95, title: '三郷市いじめ問題再調査委員会条例', category: '教育・文化', keywords: ['いじめ', '再調査', '委員会'], summary: 'いじめ問題再調査委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000259.html' },
    { id: 96, title: '三郷市入学準備金貸付条例', category: '教育・文化', keywords: ['入学', '準備金', '貸付', '奨学金'], summary: '入学準備金の貸付に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000268.html' },
    { id: 97, title: '三郷市立学校給食センター設置及び管理条例', category: '教育・文化', keywords: ['給食', 'センター', '学校給食'], summary: '学校給食センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000275.html' },
    { id: 98, title: '三郷市社会教育委員設置条例', category: '教育・文化', keywords: ['社会教育', '委員', '生涯学習'], summary: '社会教育委員の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000280.html' },
    { id: 99, title: '三郷市立公民館設置及び管理条例', category: '教育・文化', keywords: ['公民館', '設置', '生涯学習'], summary: '公民館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000282.html' },
    { id: 100, title: '三郷市図書館設置及び管理条例', category: '教育・文化', keywords: ['図書館', '読書', '設置', '文化'], summary: '図書館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000284.html' },
    { id: 101, title: '三郷市郷土資料館設置及び管理条例', category: '教育・文化', keywords: ['郷土資料館', '歴史', '文化財'], summary: '郷土資料館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000287.html' },
    { id: 102, title: '三郷市青少年ホーム設置及び管理条例', category: '教育・文化', keywords: ['青少年', 'ホーム', '若者支援'], summary: '青少年ホームの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000291.html' },
    { id: 103, title: '三郷市青少年問題協議会条例', category: '教育・文化', keywords: ['青少年', '問題', '協議会'], summary: '青少年問題協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000293.html' },
    { id: 104, title: '三郷市スポーツ推進審議会条例', category: '教育・文化', keywords: ['スポーツ', '推進', '審議会'], summary: 'スポーツ推進審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000297.html' },
    { id: 105, title: '三郷市スポーツ推進委員設置条例', category: '教育・文化', keywords: ['スポーツ', '推進委員', '地域'], summary: 'スポーツ推進委員の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000298.html' },
    { id: 106, title: '三郷市体育館設置及び管理条例', category: '教育・文化', keywords: ['体育館', 'スポーツ施設', '設置'], summary: '体育館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000300.html' },
    { id: 107, title: '三郷市立小・中学校体育施設の開放に関する規則', category: '教育・文化', keywords: ['学校開放', '体育施設', 'スポーツ'], summary: '学校体育施設の開放に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000303.html' },
    { id: 108, title: '三郷市文化財保護条例', category: '教育・文化', keywords: ['文化財', '保護', '歴史', '伝統'], summary: '文化財の保護に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000308.html' },

    // ===== 第8編 民生 =====
    { id: 109, title: '三郷市福祉事務所設置条例', category: '民生・福祉', keywords: ['福祉事務所', '社会福祉', '生活保護'], summary: '福祉事務所の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000312.html' },
    { id: 110, title: '三郷市社会福祉法人の助成に関する条例', category: '民生・福祉', keywords: ['社会福祉法人', '助成', '福祉'], summary: '社会福祉法人への助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000318.html' },
    { id: 111, title: '三郷市児童発達支援センター設置及び管理条例', category: '民生・福祉', keywords: ['児童発達支援', '障害児', '療育'], summary: '児童発達支援センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000335.html' },
    { id: 112, title: '三郷市保育所設置及び管理条例', category: '民生・福祉', keywords: ['保育所', '保育', '子育て'], summary: '保育所の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000340.html' },
    { id: 113, title: '三郷市地域型保育事業の設備及び運営の基準に関する条例', category: '民生・福祉', keywords: ['地域型保育', '小規模保育', '子育て'], summary: '地域型保育事業の基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000354.html' },
    { id: 114, title: '三郷市放課後児童健全育成事業の設備及び運営の基準に関する条例', category: '民生・福祉', keywords: ['放課後', '児童クラブ', '学童'], summary: '放課後児童クラブの基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000356.html' },
    { id: 115, title: '三郷市子ども・子育て会議条例', category: '民生・福祉', keywords: ['子ども', '子育て', '会議'], summary: '子ども・子育て会議に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000360.html' },
    { id: 116, title: '三郷市立児童館設置及び管理条例', category: '民生・福祉', keywords: ['児童館', '子ども', '居場所'], summary: '児童館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000361.html' },
    { id: 117, title: '三郷市児童遊園設置条例', category: '民生・福祉', keywords: ['児童遊園', '公園', '子ども'], summary: '児童遊園の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000365.html' },
    { id: 118, title: '三郷市児童クラブ設置及び管理条例', category: '民生・福祉', keywords: ['児童クラブ', '学童', '放課後'], summary: '児童クラブの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000369.html' },
    { id: 119, title: '三郷市こども医療費支給に関する条例', category: '民生・福祉', keywords: ['子ども', '医療費', '助成', '子育て支援'], summary: '子どもの医療費助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000381.html' },
    { id: 120, title: '三郷市ひとり親家庭等の医療費の支給に関する条例', category: '民生・福祉', keywords: ['ひとり親', '医療費', '助成', '母子家庭'], summary: 'ひとり親家庭の医療費助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000383.html' },
    { id: 121, title: '三郷市老人デイサービスセンター設置及び管理条例', category: '民生・福祉', keywords: ['高齢者', 'デイサービス', '介護'], summary: '老人デイサービスセンターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000390.html' },
    { id: 122, title: '三郷市老人福祉センター設置及び管理条例', category: '民生・福祉', keywords: ['高齢者', '福祉センター', '交流'], summary: '老人福祉センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000392.html' },
    { id: 123, title: '三郷市後期高齢者医療に関する条例', category: '民生・福祉', keywords: ['後期高齢者', '医療', '保険'], summary: '後期高齢者医療に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000400.html' },
    { id: 124, title: '三郷市障害支援区分審査会の委員の定数等を定める条例', category: '民生・福祉', keywords: ['障害', '支援区分', '審査会'], summary: '障害支援区分審査会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000415.html' },
    { id: 125, title: '三郷市障がい者福祉施設みさと設置及び管理条例', category: '民生・福祉', keywords: ['障害者', '福祉施設', '支援'], summary: '障がい者福祉施設みさとの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000419.html' },
    { id: 126, title: '三郷市障がい者等の利用に係る公の施設使用料減免条例', category: '民生・福祉', keywords: ['障害者', '減免', '公共施設'], summary: '障がい者等の施設使用料減免に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000429.html' },
    { id: 127, title: '三郷市こころつながる手話言語条例', category: '民生・福祉', keywords: ['手話', '言語', '障害者', 'コミュニケーション'], summary: '手話言語に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000437.html' },
    { id: 128, title: '三郷市重度心身障害者医療費支給に関する条例', category: '民生・福祉', keywords: ['重度障害', '医療費', '助成'], summary: '重度心身障害者の医療費助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000439.html' },
    { id: 129, title: '三郷市在宅重度心身障害者手当支給条例', category: '民生・福祉', keywords: ['在宅', '重度障害', '手当'], summary: '在宅重度心身障害者手当に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000441.html' },
    { id: 130, title: '三郷市国民健康保険条例', category: '民生・福祉', keywords: ['国民健康保険', '国保', '医療保険'], summary: '国民健康保険に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000450.html' },
    { id: 131, title: '三郷市介護保険条例', category: '民生・福祉', keywords: ['介護保険', '介護', '高齢者'], summary: '介護保険に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000456.html' },
    { id: 132, title: '三郷市介護認定審査会規則', category: '民生・福祉', keywords: ['介護認定', '審査会', '要介護'], summary: '介護認定審査会に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000464.html' },
    { id: 133, title: '三郷市指定居宅介護支援等の事業の人員及び運営等に関する基準を定める条例', category: '民生・福祉', keywords: ['居宅介護', 'ケアマネジャー', '介護支援'], summary: '居宅介護支援事業の基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000467.html' },
    { id: 134, title: '三郷市指定地域密着型サービスの事業の人員、設備及び運営等に関する基準を定める条例', category: '民生・福祉', keywords: ['地域密着型', '介護サービス', '基準'], summary: '地域密着型サービスの基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000471.html' },
    { id: 135, title: '三郷市地域包括支援センターの包括的支援事業の実施に関する基準を定める条例', category: '民生・福祉', keywords: ['地域包括', '支援センター', '高齢者'], summary: '地域包括支援センターの基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000473.html' },
    { id: 136, title: '三郷市健康推進協議会条例', category: '民生・福祉', keywords: ['健康', '推進', '協議会'], summary: '健康推進協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000480.html' },
    { id: 137, title: '三郷市健康福祉会館設置及び管理条例', category: '民生・福祉', keywords: ['健康', '福祉会館', '施設'], summary: '健康福祉会館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000483.html' },
    { id: 138, title: '三郷市動物の愛護及び管理に関する条例', category: '民生・福祉', keywords: ['動物', '愛護', 'ペット'], summary: '動物の愛護・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000497.html' },
    { id: 139, title: '三郷市廃棄物の処理及び再利用並びに資源物の持ち去り防止に関する条例', category: '民生・福祉', keywords: ['廃棄物', 'ごみ', 'リサイクル', '再利用'], summary: '廃棄物処理・再利用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000501.html' },
    { id: 140, title: '三郷市墓地等の経営の許可等に関する条例', category: '民生・福祉', keywords: ['墓地', '霊園', '経営許可'], summary: '墓地の経営許可に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000513.html' },
    { id: 141, title: '三郷市ペット霊園の設置の許可等に関する条例', category: '民生・福祉', keywords: ['ペット', '霊園', '許可'], summary: 'ペット霊園の設置許可に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000515.html' },
    { id: 142, title: '三郷市公害防止条例', category: '民生・福祉', keywords: ['公害', '環境', '防止'], summary: '公害防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000517.html' },
    { id: 143, title: '三郷市環境基本条例', category: '民生・福祉', keywords: ['環境', '基本条例', '持続可能'], summary: '環境保全の基本理念を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000519.html' },
    { id: 144, title: '三郷市あき地の雑草等の除去に関する条例', category: '民生・福祉', keywords: ['空き地', '雑草', '環境美化'], summary: '空き地の雑草除去に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000523.html' },
    { id: 145, title: '三郷市空き缶等の散乱防止に関する条例', category: '民生・福祉', keywords: ['空き缶', '散乱防止', '美化'], summary: '空き缶等の散乱防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000525.html' },
    { id: 146, title: '三郷市ラブホテルの建築規制に関する条例', category: '民生・福祉', keywords: ['ラブホテル', '建築規制', '風営'], summary: 'ラブホテルの建築規制に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000527.html' },
    { id: 147, title: '三郷市市民パブリック・コメント手続条例', category: '民生・福祉', keywords: ['パブリックコメント', '市民参加', '意見募集'], summary: 'パブリックコメント手続に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000531.html' },
    { id: 148, title: '三郷市男女共同参画社会づくり条例', category: '民生・福祉', keywords: ['男女共同参画', 'ジェンダー', '平等'], summary: '男女共同参画社会づくりに関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000534.html' },
    { id: 149, title: '三郷市印鑑条例', category: '民生・福祉', keywords: ['印鑑', '登録', '証明'], summary: '印鑑登録に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000540.html' },
    { id: 150, title: '三郷市防災会議条例', category: '民生・福祉', keywords: ['防災', '会議', '災害対策'], summary: '防災会議に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000544.html' },
    { id: 151, title: '三郷市災害対策本部条例', category: '民生・福祉', keywords: ['災害', '対策本部', '緊急'], summary: '災害対策本部に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000546.html' },
    { id: 152, title: '三郷市防災センター設置及び管理条例', category: '民生・福祉', keywords: ['防災', 'センター', '施設'], summary: '防災センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000552.html' },
    { id: 153, title: '三郷市国民保護対策本部及び三郷市緊急対処事態対策本部に関する条例', category: '民生・福祉', keywords: ['国民保護', '緊急事態', '対策本部'], summary: '国民保護対策本部に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000554.html' },
    { id: 154, title: '三郷市国民保護協議会条例', category: '民生・福祉', keywords: ['国民保護', '協議会', '安全'], summary: '国民保護協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000555.html' },
    { id: 155, title: '三郷市新型インフルエンザ等対策本部条例', category: '民生・福祉', keywords: ['新型インフルエンザ', '対策', '感染症'], summary: '新型インフルエンザ等対策本部に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000557.html' },
    { id: 156, title: '三郷市災害派遣手当等の支給に関する条例', category: '民生・福祉', keywords: ['災害派遣', '手当', '支援'], summary: '災害派遣手当の支給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000559.html' },
    { id: 157, title: '三郷市自転車等の放置の防止に関する条例', category: '民生・福祉', keywords: ['自転車', '放置', '駐輪'], summary: '自転車等の放置防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000561.html' },
    { id: 158, title: '三郷市防犯のまちづくり推進条例', category: '民生・福祉', keywords: ['防犯', 'まちづくり', '安全'], summary: '防犯のまちづくり推進に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000571.html' },
    { id: 159, title: '三郷市犯罪被害者等支援条例', category: '民生・福祉', keywords: ['犯罪被害者', '支援', '救済'], summary: '犯罪被害者支援に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000572.html' },
    { id: 160, title: '三郷市振り込め詐欺等の被害防止に関する条例', category: '民生・福祉', keywords: ['振り込め詐欺', '詐欺', '被害防止'], summary: '振り込め詐欺被害防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000577.html' },
    { id: 161, title: '三郷市空家等の適切な管理に関する条例', category: '民生・福祉', keywords: ['空き家', '管理', '防犯'], summary: '空き家の適切な管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000578.html' },
    { id: 162, title: '三郷市暴力団排除条例', category: '民生・福祉', keywords: ['暴力団', '排除', '安全'], summary: '暴力団排除に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000580.html' },
    { id: 163, title: '三郷市住居表示に関する条例', category: '民生・福祉', keywords: ['住居表示', '住所', '地番'], summary: '住居表示に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000581.html' },
    { id: 164, title: '三郷市文化会館設置及び管理条例', category: '民生・福祉', keywords: ['文化会館', '施設', '文化活動'], summary: '文化会館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000583.html' },
    { id: 165, title: '三郷市立コミュニティセンター設置及び管理条例', category: '民生・福祉', keywords: ['コミュニティセンター', '地域活動', '施設'], summary: 'コミュニティセンターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000585.html' },
    { id: 166, title: '三郷市斎場条例', category: '民生・福祉', keywords: ['斎場', '火葬場', '葬祭'], summary: '斎場に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000599.html' },
    { id: 167, title: '災害弔慰金の支給等に関する条例', category: '民生・福祉', keywords: ['災害', '弔慰金', '支援'], summary: '災害弔慰金の支給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000601.html' },
    { id: 168, title: '三郷市災害見舞金支給条例', category: '民生・福祉', keywords: ['災害', '見舞金', '支援'], summary: '災害見舞金の支給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000603.html' },

    // ===== 第9編 産業経済 =====
    { id: 169, title: '三郷市農業委員会の委員及び農地利用最適化推進委員の定数に関する条例', category: '産業経済', keywords: ['農業委員会', '農地', '委員'], summary: '農業委員会の委員定数に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000605.html' },
    { id: 170, title: '三郷市農政審議会条例', category: '産業経済', keywords: ['農政', '審議会', '農業'], summary: '農政審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000610.html' },
    { id: 171, title: '三郷市営土地改良事業受益者負担金徴収条例', category: '産業経済', keywords: ['土地改良', '受益者負担', '農業基盤'], summary: '土地改良事業の受益者負担金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000612.html' },
    { id: 172, title: '農業近代化資金利子補給条例', category: '産業経済', keywords: ['農業', '近代化', '融資', '利子補給'], summary: '農業近代化資金の利子補給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000614.html' },
    { id: 173, title: '三郷市商工審議会条例', category: '産業経済', keywords: ['商工', '審議会', '産業振興'], summary: '商工審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000622.html' },
    { id: 174, title: '三郷市中小企業融資条例', category: '産業経済', keywords: ['中小企業', '融資', '経営支援'], summary: '中小企業融資に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000624.html' },
    { id: 175, title: '三郷市家内労働者生業資金貸付条例', category: '産業経済', keywords: ['家内労働', '貸付', '資金'], summary: '家内労働者への生業資金貸付に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000637.html' },
    { id: 176, title: '三郷市消費生活センターの組織及び運営等に関する条例', category: '産業経済', keywords: ['消費生活', 'センター', '相談'], summary: '消費生活センターに関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000641.html' },

    // ===== 第10編 建設 =====
    { id: 177, title: '三郷市道路の構造、管理及び占用に関する条例', category: '建設', keywords: ['道路', '管理', '占用'], summary: '道路の構造・管理・占用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000652.html' },
    { id: 178, title: '三郷市道路占用料条例', category: '建設', keywords: ['道路', '占用料', '使用料'], summary: '道路占用料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000657.html' },
    { id: 179, title: '三郷市市道に設置する道路標識の寸法に関する条例', category: '建設', keywords: ['道路標識', '寸法', '基準'], summary: '道路標識の寸法に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000658.html' },
    { id: 180, title: '三郷市準用河川条例', category: '建設', keywords: ['準用河川', '河川', '管理'], summary: '準用河川に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000660.html' },
    { id: 181, title: '三郷市都市計画審議会条例', category: '建設', keywords: ['都市計画', '審議会', 'まちづくり'], summary: '都市計画審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000669.html' },
    { id: 182, title: '三郷市開発事業等の手続等に関する条例', category: '建設', keywords: ['開発', '手続', '宅地造成'], summary: '開発事業の手続に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000672.html' },
    { id: 183, title: '三郷市地区計画等の案の作成手続に関する条例', category: '建設', keywords: ['地区計画', 'まちづくり', '都市計画'], summary: '地区計画の作成手続に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000676.html' },
    { id: 184, title: '三郷市都市計画法に基づく開発許可等の基準に関する条例', category: '建設', keywords: ['開発許可', '都市計画', '基準'], summary: '開発許可の基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000677.html' },
    { id: 185, title: '三郷市景観条例', category: '建設', keywords: ['景観', 'まちなみ', '美しいまち'], summary: '景観保全に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000679.html' },
    { id: 186, title: '三郷市生産緑地地区の区域の規模に関する条件を定める条例', category: '建設', keywords: ['生産緑地', '農地', '都市農業'], summary: '生産緑地の規模条件に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000685.html' },
    { id: 187, title: '三郷市みどりの条例', category: '建設', keywords: ['みどり', '緑化', '環境'], summary: 'みどりの保全・創出に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000686.html' },
    { id: 188, title: '三郷市屋外広告物条例', category: '建設', keywords: ['屋外広告', '看板', '景観'], summary: '屋外広告物に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000692.html' },
    { id: 189, title: '三郷市都市公園条例', category: '建設', keywords: ['公園', '都市公園', 'みどり'], summary: '都市公園に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000694.html' },
    { id: 190, title: '三郷市公園運営委員会条例', category: '建設', keywords: ['公園', '運営', '委員会'], summary: '公園運営委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000696.html' },
    { id: 191, title: '三郷市運動公園の設置及び管理に関する条例', category: '建設', keywords: ['運動公園', 'スポーツ', '施設'], summary: '運動公園の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000698.html' },
    { id: 192, title: '三郷市公共下水道事業の設置等に関する条例', category: '建設', keywords: ['下水道', '公共下水道', 'インフラ'], summary: '公共下水道事業に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000703.html' },
    { id: 193, title: '三郷市下水道事業審議会条例', category: '建設', keywords: ['下水道', '審議会', 'インフラ'], summary: '下水道事業審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000704.html' },
    { id: 194, title: '三郷市公共下水道の構造等の技術上の基準に関する条例', category: '建設', keywords: ['下水道', '基準', '技術'], summary: '公共下水道の技術基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000706.html' },
    { id: 195, title: '三郷市下水道条例', category: '建設', keywords: ['下水道', '使用', '排水'], summary: '下水道の使用等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000708.html' },
    { id: 196, title: '三郷都市計画下水道事業受益者負担に関する条例', category: '建設', keywords: ['下水道', '受益者負担', '負担金'], summary: '下水道事業受益者負担に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000710.html' },
    { id: 197, title: '三郷市公共下水道使用料条例', category: '建設', keywords: ['下水道', '使用料', '料金'], summary: '公共下水道使用料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000712.html' },
    { id: 198, title: '三郷市地区計画区域内における建築物等の制限に関する条例', category: '建設', keywords: ['地区計画', '建築制限', 'まちづくり'], summary: '地区計画区域内の建築制限に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000722.html' },
    { id: 199, title: '三郷市建築協定条例', category: '建設', keywords: ['建築協定', 'まちなみ', '住環境'], summary: '建築協定に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000724.html' },
    { id: 200, title: '三郷市特別工業地区条例', category: '建設', keywords: ['工業地区', '用途地域', '建築'], summary: '特別工業地区に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000727.html' },
    { id: 201, title: '三郷市建築基準法の規定に基づく建築物の建築等に係る確認申請手数料等の徴収に関する条例', category: '建設', keywords: ['建築確認', '手数料', '建築基準法'], summary: '建築確認申請手数料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000731.html' },
    { id: 202, title: '三郷市市営住宅設置及び管理条例', category: '建設', keywords: ['市営住宅', '公営住宅', '住宅'], summary: '市営住宅の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000737.html' },

    // ===== 第11編 水道 =====
    { id: 203, title: '三郷市水道事業の設置等に関する条例', category: '水道', keywords: ['水道', '事業', '設置'], summary: '水道事業の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000740.html' },
    { id: 204, title: '三郷市企業職員の給与の種類及び基準に関する条例', category: '水道', keywords: ['企業職員', '給与', '水道'], summary: '企業職員の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000749.html' },
    { id: 205, title: '三郷市水道事業給水条例', category: '水道', keywords: ['給水', '水道', '使用'], summary: '水道の給水に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000762.html' },
    { id: 206, title: '三郷市水道事業の布設工事監督者及び水道技術管理者に関する条例', category: '水道', keywords: ['水道', '監督者', '技術管理'], summary: '水道の布設工事監督者等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000767.html' },

    // ===== 第12編 消防 =====
    { id: 207, title: '三郷市消防本部及び消防署の設置に関する条例', category: '消防', keywords: ['消防', '消防署', '設置'], summary: '消防本部・消防署の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000769.html' },
    { id: 208, title: '三郷市消防長に対する事務委任に関する規則', category: '消防', keywords: ['消防長', '事務委任', '消防'], summary: '消防長への事務委任に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000775.html' },
    { id: 209, title: '三郷市消防長及び消防署長の資格を定める条例', category: '消防', keywords: ['消防長', '消防署長', '資格'], summary: '消防長等の資格に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000776.html' },
    { id: 210, title: '三郷市消防職員の特殊勤務手当に関する条例', category: '消防', keywords: ['消防職員', '特殊勤務', '手当'], summary: '消防職員の特殊勤務手当に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000790.html' },
    { id: 211, title: '三郷市消防賞じゅつ金及び殉職者特別賞じゅつ金条例', category: '消防', keywords: ['消防', '賞じゅつ金', '殉職'], summary: '消防賞じゅつ金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000791.html' },
    { id: 212, title: '三郷市消防事務に係る手数料徴収条例', category: '消防', keywords: ['消防', '手数料', '許可'], summary: '消防事務の手数料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000801.html' },
    { id: 213, title: '三郷市火災予防条例', category: '消防', keywords: ['火災', '予防', '防火'], summary: '火災予防に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000803.html' },
    { id: 214, title: '三郷市消防団の設置等に関する条例', category: '消防', keywords: ['消防団', '設置', '消防'], summary: '消防団の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000817.html' },
    { id: 215, title: '三郷市消防団員の定員、任免、給与、服務等に関する条例', category: '消防', keywords: ['消防団員', '定員', '給与'], summary: '消防団員の身分等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000820.html' },
    { id: 216, title: '三郷市非常勤消防団員に係る退職報償金の支給に関する条例', category: '消防', keywords: ['消防団員', '退職報償金', '非常勤'], summary: '消防団員の退職報償金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000827.html' },
    { id: 217, title: '三郷市消防委員会規則', category: '消防', keywords: ['消防', '委員会', '審議'], summary: '消防委員会に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000829.html' },

    // ===== 第13編 その他 =====
    { id: 218, title: '埼玉県市町村総合事務組合規約', category: 'その他', keywords: ['事務組合', '広域', '連携'], summary: '埼玉県市町村総合事務組合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000831.html' },
    { id: 219, title: '江戸川水防事務組合規約', category: 'その他', keywords: ['水防', '事務組合', '江戸川'], summary: '江戸川水防事務組合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000832.html' },
    { id: 220, title: '東埼玉資源環境組合規約', category: 'その他', keywords: ['資源環境', '事務組合', 'ごみ処理'], summary: '東埼玉資源環境組合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000833.html' },
    { id: 221, title: '彩の国さいたま人づくり広域連合規約', category: 'その他', keywords: ['広域連合', '人材育成', '研修'], summary: '彩の国さいたま人づくり広域連合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000834.html' },
    { id: 222, title: '埼玉県後期高齢者医療広域連合規約', category: 'その他', keywords: ['後期高齢者', '広域連合', '医療'], summary: '埼玉県後期高齢者医療広域連合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000835.html' },
    { id: 223, title: '三郷市土地開発公社定款', category: 'その他', keywords: ['土地開発公社', '公社', '土地'], summary: '三郷市土地開発公社の定款。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000836.html' }
];

// カテゴリリスト
const ordinanceCategories = [
    'all',
    '総規・基本',
    '議会',
    '執行機関',
    '人事',
    '給与',
    '財務',
    '教育・文化',
    '民生・福祉',
    '産業経済',
    '建設',
    '水道',
    '消防',
    'その他'
];
