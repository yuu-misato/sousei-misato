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
    { id: 23, title: '三郷市議会議員政治倫理条例', category: '議会', keywords: ['政治倫理', '議員', '倫理'], summary: '議員の政治倫理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00001214.html',
        fullText: `<div class="jorei-header">○三郷市議会議員政治倫理条例<br>令和7年3月21日 条例第13号</div>
<div class="jorei-article"><span class="article-title">（目的）</span><br>第1条 この条例は、議員が保持すべき政治倫理の規準を定め、議員の資質向上及び誠実な職務の遂行に資することにより、市民から信頼される公正で開かれた民主的な市政の発展に寄与することを目的とする。</div>
<div class="jorei-article"><span class="article-title">（議員の責務）</span><br>第2条 議員は、市民の代表として高い政治倫理を保持することに努めなければならない。<br>2 議員は、市民から疑念を持たれた場合には、自らこれを解明し、責任を明らかにしなければならない。</div>
<div class="jorei-article"><span class="article-title">（政治倫理規準）</span><br>第3条 議員は、次に掲げる事項を遵守しなければならない。<br>（1）三郷市議会の名誉を重んじ、良識と責任感をもって議員の品位を損なう行為を慎むこと。<br>（2）市の職員等の権限を不正に行使するよう働きかけないこと。<br>（3）市の職員等が公正かつ適正に職務を執行することを妨げないこと。<br>（4）市の事務事業に関する契約又は人事に関し、不当に影響力を行使しないこと。<br>（5）市の職員等に対し、特定の者に有利又は不利な取扱いをするよう働きかけないこと。<br>（6）その地位を利用して不当に金品を授受しないこと。<br>（7）政治資金規正法（昭和23年法律第194号）に定めるものを除くほか、寄附の受領についてこれを強要し、又は受けないこと。<br>（8）ハラスメント行為その他人権を侵害する行為をしないこと。<br>（9）公人としての自覚及び責任をもって情報の発信に努め、他者の名誉を毀損し、又は人格を損傷する行為をしないこと。</div>
<div class="jorei-article"><span class="article-title">（審査の請求）</span><br>第4条 市民は、議員に第3条に規定する政治倫理規準に違反する疑いがあると認めるときは、これを証する書類を添え、三郷市議会議員の定数の8分の1以上の連署をもって、議長に対し審査を請求することができる。</div>
<div class="jorei-article"><span class="article-title">（審査会）</span><br>第5条 前条の規定による審査の請求があったときは、議会に三郷市議会議員政治倫理審査会（以下「審査会」という。）を設置する。<br>2 審査会は、審査の請求の適否及び政治倫理規準に違反する事実の有無について審査を行う。</div>
<div class="jorei-article"><span class="article-title">（宣誓）</span><br>第12条 議員は、政治倫理を保持することを宣誓しなければならない。</div>
<div class="jorei-supplementary">附則<br>この条例は、令和7年4月1日から施行する。</div>` },
    { id: 24, title: '三郷市議会政務活動費の交付に関する条例', category: '議会', keywords: ['政務活動費', '議員', '交付'], summary: '政務活動費の交付に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000639.html',
        fullText: `<div class="jorei-header">○三郷市議会政務活動費の交付に関する条例<br>平成13年3月23日 条例第3号</div>
<div class="jorei-article"><span class="article-title">（趣旨）</span><br>第1条 この条例は、地方自治法（昭和22年法律第67号）第100条第14項から第16項までの規定に基づき、三郷市議会の議員の調査研究その他の活動に資するため必要な経費の一部として、会派又は議員に対し交付する政務活動費に関し、必要な事項を定めるものとする。</div>
<div class="jorei-article"><span class="article-title">（交付対象）</span><br>第2条 政務活動費は、三郷市議会における会派（所属議員が1人の場合を含む。以下同じ。）又は議員（いずれの会派にも属さない議員に限る。以下同じ。）に対し交付する。</div>
<div class="jorei-article"><span class="article-title">（交付の方法）</span><br>第3条 政務活動費の交付は、前期（4月から8月まで）及び後期（9月から翌年3月まで）に区分し、それぞれ4月30日及び9月30日までに行う。</div>
<div class="jorei-article"><span class="article-title">（会派に対する政務活動費の額）</span><br>第4条 会派に対して交付する政務活動費の額は、各月の1日における当該会派に所属する議員の数に月額3万円以内で当該会派の代表者が申し出る額を乗じて得た額の総額とする。</div>
<div class="jorei-article"><span class="article-title">（議員に対する政務活動費の額）</span><br>第4条の2 議員に対して交付する政務活動費の額は、各月につき月額3万円から議員に係る会派に対する政務活動費の月額を控除した額の総額とする。</div>
<div class="jorei-article"><span class="article-title">（政務活動費を充てることができる経費の範囲）</span><br>第5条 政務活動費は、次に掲げる経費に充てることができる。<br>（1）研究研修費（会派又は議員が行う市政に関する調査研究及び調査委託並びに研修会の開催又は他の団体が開催する研修会に参加するために要する経費）<br>（2）調査旅費（会派又は議員が行う市政及び他の自治体に関する調査並びに研修会への参加のために要する旅費）<br>（3）資料作成費（会派又は議員が行う議会活動に必要な資料の作成に要する経費）<br>（4）資料購入費（会派又は議員が行う議会活動に必要な図書、資料等の購入に要する経費）<br>（5）広報費（会派又は議員が行う議会活動及び市政について市民に報告するために要する経費）<br>（6）広聴費（会派又は議員が行う市民からの市政に関する要望又は意見を吸収するために要する経費）<br>（7）事務費（会派又は議員が行う議会活動のために必要な事務に要する経費）</div>
<div class="jorei-article"><span class="article-title">（収支報告書の提出）</span><br>第7条 会派の代表者又は議員は、政務活動費に係る収入及び支出の収支報告書を議長に提出しなければならない。<br>2 収支報告書には、領収書の写し等を添付しなければならない。</div>
<div class="jorei-article"><span class="article-title">（政務活動費の返還）</span><br>第8条 会派又は議員は、交付を受けた政務活動費の総額から、当該会計年度において実際に支出した額を控除して残余がある場合は、その残余の額を返還しなければならない。</div>
<div class="jorei-supplementary">附則<br>この条例は、平成13年4月1日から施行する。</div>` },
    { id: 25, title: '三郷市議会議員の請負の状況の公表に関する条例', category: '議会', keywords: ['請負', '公表', '透明性'], summary: '議員の請負状況の公表に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00001227.html',
        fullText: `<div class="jorei-header">○三郷市議会議員の請負の状況の公表に関する条例<br>令和7年6月17日 条例第21号</div>
<div class="jorei-article"><span class="article-title">（目的）</span><br>第1条 この条例は、議員が市に対する請負の状況を公表することにより、請負の状況の透明性を確保し、もって議会の運営の公正及び事務の執行の適正を図ることを目的とする。</div>
<div class="jorei-article"><span class="article-title">（報告）</span><br>第2条 議員は、毎年6月1日から同月30日までの間に、前会計年度において、次の各号のいずれかに該当する場合は、議長に対し、当該各号に掲げる事項を報告しなければならない。<br>（1）市に対する請負をした者（法人その他の団体にあっては、その役員（業務を執行する社員、取締役、執行役又はこれらに準ずる者をいう。以下同じ。）を含む。）であるとき　役務の内容、契約締結の日、契約金額及び支払を受けた額の総額<br>（2）市に対する請負をする法人の役員又は支配人であるとき　法人の名称及び主たる事務所の所在地、役務の内容、契約締結の日、契約金額並びに当該法人が支払を受けた額の総額<br>2 前項の報告をした議員は、当該報告の内容に訂正の必要が生じたときは、速やかに、議長に届け出なければならない。</div>
<div class="jorei-article"><span class="article-title">（報告の一覧の作成及び公表）</span><br>第3条 議長は、前条の報告の内容の一覧を作成し、公表しなければならない。</div>
<div class="jorei-article"><span class="article-title">（報告等の保存及び閲覧等）</span><br>第4条 議長は、第2条の報告を5年間保存しなければならない。<br>2 何人も、議長に対し、前項の規定により保存されている報告の閲覧又は写しの交付を請求することができる。</div>
<div class="jorei-article"><span class="article-title">（委任）</span><br>第5条 この条例の施行に関し必要な事項は、議長が定める。</div>
<div class="jorei-supplementary">附則<br>1 この条例は、公布の日から施行する。<br>2 この条例の規定は、令和7年4月1日に始まる会計年度以後の会計年度に係る請負について適用する。</div>` },
    { id: 26, title: '三郷市議会事務局設置条例', category: '議会', keywords: ['事務局', '議会', '組織'], summary: '議会事務局の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000024.html',
        fullText: `<div class="jorei-header">○三郷市議会事務局設置条例<br>昭和35年6月29日 条例第3号</div>
<div class="jorei-article">地方自治法（昭和22年法律第67号）第138条第2項の規定に基づき、三郷市議会に事務局を置く。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 27, title: '三郷市議会の個人情報の保護に関する条例', category: '議会', keywords: ['個人情報', '保護', 'プライバシー'], summary: '議会における個人情報保護に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00001184.html',
        fullText: `<div class="jorei-header">○三郷市議会の個人情報の保護に関する条例<br>令和4年12月13日 条例第31号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例は、三郷市議会 (以下「議会」という。) における個人情報の適正な取扱いに関し必要な事項を定めるとともに、議会が保有する個人情報の開示、訂正及び利用停止を求める個人の権利を明らかにすることにより、議会の事務の適正かつ円滑な運営を図りつつ、個人の権利利益を保護することを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この条例において「個人情報」とは、生存する個人に関する情報であって、 次の各号 のいずれかに該当するものをいう。</p>

<p class="jorei-article">(議会の責務) 第3条 議会は、その保有する個人情報の適正な取扱いが確保されるよう必要な措置を講ずるものとする。</p>

<p class="jorei-article">(個人情報の保有の制限等) 第4条 議会は、個人情報を保有するに当たっては、法令 (条例を含む。 第12条第2項第2号 及び 第3号 並びに 第4章 において同じ。) の規定によりその権限に属する事務を遂行するため必要な場合に限り、かつ、その利用の目的をできる限り特定しなければならない。</p>

<p class="jorei-article">(利用目的の明示) 第5条 議会は、本人から直接書面 (電磁的記録を含む。) に記録された当該本人の個人情報を取得するときは、次に掲げる場合を除き、あらかじめ、本人に対し、その利用目的を明示しなければならない。</p>

<p class="jorei-article">(不適正な利用の禁止) 第6条 議会は、違法又は不当な行為を助長し、又は誘発するおそれがある方法により個人情報を利用してはならない。</p>

<p class="jorei-article">(適正な取得) 第7条 議会は、偽りその他不正の手段により個人情報を取得してはならない。</p>

<p class="jorei-article">(正確性の確保) 第8条 議会は、利用目的の達成に必要な範囲内で、保有個人情報が過去又は現在の事実と合致するよう努めなければならない。</p>

<p class="jorei-article">(安全管理措置) 第9条 議長は、保有個人情報の漏えい、滅失又は毀損の防止その他の保有個人情報の安全管理のために必要かつ適切な措置を講じなければならない。</p>

<p class="jorei-article">(従事者の義務) 第10条 個人情報の取扱いに従事する職員若しくは職員であった者、 前条第2項 の業務に従事している者若しくは従事していた者又は議会において個人情報の取扱いに従事している派遣労働者 (労働者派遣事業の適正な運営の確保及び派遣労働者の保護等に関する法律 (昭和60年法律第88号) 第2条第2号に規定する派遣労働者をいう。以下この条及び 第53条 において同じ。) 若しくは従事していた派遣労働者は、その業務に関して知り得た個人情報の内容をみだりに他人に知らせ、又は不当な目的に利用してはならない。</p>

<p class="jorei-article">(漏えい等の通知) 第11条 議長は、保有個人情報の漏えい、滅失、毀損その他の保有個人情報の安全の確保に係る事態であって個人の権利利益を害するおそれが大きいものとしてその定めるものが生じたときは、本人に対し、その定めるところにより、当該事態が生じた旨を通知しなければならない。 ただし、 次の各号 のいずれかに該当するときは、この限りでない。</p>

<p class="jorei-article">(利用及び提供の制限) 第12条 議会は、法令に基づく場合を除き、利用目的以外の目的のために保有個人情報を自ら利用し、又は提供してはならない。</p>

<p class="jorei-article">(保有個人情報の提供を受ける者に対する措置要求) 第13条 議長は、利用目的のために又は 前条第2項第3号 若しくは 第4号 の規定に基づき、保有個人情報を提供する場合において、必要があると認めるときは、保有個人情報の提供を受ける者に対し、提供に係る個人情報について、その利用の目的若しくは方法の制限その他必要な制限を付し、又はその漏えいの防止その他の個人情報の適切な管理のために必要な措置を講ずることを求めるものとする。</p>

<p class="jorei-article">(個人関連情報の提供を受ける者に対する措置要求) 第14条 議長は、第三者に個人関連情報を提供する場合 (当該第三者が当該個人関連情報を個人情報として取得することが想定される場合に限る。) において、必要があると認めるときは、当該第三者に対し、提供に係る個人関連情報について、その利用の目的若しくは方法の制限その他必要な制限を付し、又はその漏えいの防止その他の個人関連情報の適切な管理のために必要な措置を講ずることを求めるものとする。</p>

<p class="jorei-article">(仮名加工情報の取扱いに係る義務) 第15条 議会は、法令に基づく場合を除くほか、仮名加工情報 (個人情報であるものを除く。以下この条及び 第49条 において同じ。) を第三者 (当該仮名加工情報の取扱いの委託を受けた者を除く。) に提供してはならない。</p>

<p class="jorei-article">(匿名加工情報の取扱いに係る義務) 第16条 議会は、匿名加工情報を取り扱うに当たっては、法令に基づく場合を除き、当該匿名加工情報の作成に用いられた個人情報に係る本人を識別するために、当該個人情報から削除された記述等若しくは個人識別符号若しくは法第43条第1項の規定により行われた加工の方法に関する情報を取得し、又は当該匿名加工情報を他の情報と照合してはならない。</p>

<p class="jorei-article">(個人情報ファイル簿の作成及び公表) 第17条 議長は、その定めるところにより、議会が保有している個人情報ファイルについて、それぞれ次に掲げる事項その他議長が定める事項を記載した帳簿 ( 第3項 において「個人情報ファイル簿」という。) を作成し、公表しなければならない。</p>

<p class="jorei-article">(開示請求権) 第18条 何人も、この条例の定めるところにより、議長に対し、自己を本人とする保有個人情報の開示を請求することができる。</p>

<p class="jorei-article">(開示請求の手続) 第19条 開示請求は、次に掲げる事項を記載した書面 ( 第3項 において「開示請求書」という。) を議長に提出してしなければならない。</p>

<p class="jorei-article">(保有個人情報の開示義務) 第20条 議長は、開示請求があったときは、開示請求に係る保有個人情報に 次の各号 に掲げる情報 (以下「不開示情報」という。) のいずれかが含まれている場合を除き、開示請求者に対し、当該保有個人情報を開示しなければならない。</p>

<p class="jorei-article">(部分開示) 第21条 議長は、開示請求に係る保有個人情報に不開示情報が含まれている場合において、不開示情報に該当する部分を容易に区分して除くことができるときは、開示請求者に対し、当該部分を除いた部分につき開示しなければならない。</p>

<p class="jorei-article">(裁量的開示) 第22条 議長は、開示請求に係る保有個人情報に不開示情報が含まれている場合であっても、個人の権利利益を保護するため特に必要があると認めるときは、開示請求者に対し、当該保有個人情報を開示することができる。</p>

<p class="jorei-article">(保有個人情報の存否に関する情報) 第23条 開示請求に対し、当該開示請求に係る保有個人情報が存在しているか否かを答えるだけで、不開示情報を開示することとなるときは、議長は、当該保有個人情報の存否を明らかにしないで、当該開示請求を拒否することができる。</p>

<p class="jorei-article">(開示請求に対する措置) 第24条 議長は、開示請求に係る保有個人情報の全部又は一部を開示するときは、その旨の決定をし、開示請求者に対し、その旨、開示する保有個人情報の利用目的及び開示の実施に関し議長が定める事項を書面により通知しなければならない。 ただし、 第5条第2号 又は 第3号 に該当する場合における当該利用目的については、この限りでない。</p>

<p class="jorei-article">(開示決定等の期限) 第25条 開示決定等は、開示請求があった日から30日以内にしなければならない。 ただし、 第19条第3項 の規定により補正を求めた場合にあっては、当該補正に要した日数は、当該期間に算入しない。</p>

<p class="jorei-article">(開示決定等の期限の特例) 第26条 開示請求に係る保有個人情報が著しく大量であるため、開示請求があった日から60日以内にその全てについて開示決定等をすることにより事務の遂行に著しい支障が生ずるおそれがある場合には、 前条 の規定にかかわらず、議長は、開示請求に係る保有個人情報のうちの相当の部分につき当該期間内に開示決定等をし、残りの保有個人情報については相当の期間内に開示決定等をすれば足りる。 この場合において、議長は、 同条第1項 に規定する期間内に、開示請求者に対し、次に掲げる事項を書面により通知しなければならない。</p>

<p class="jorei-article">(第三者に対する意見書提出の機会の付与等) 第27条 開示請求に係る保有個人情報に国、独立行政法人等、地方公共団体、地方独立行政法人及び開示請求者以外の者 (以下この条、 第45条第2項第3号 及び 第46条 において「第三者」という。) に関する情報が含まれているときは、議長は、開示決定等をするに当たって、当該情報に係る第三者に対し、議長が定めるところにより、当該第三者に関する情報の内容その他議長が定める事項を通知して、意見書を提出する機会を与えることができる。</p>

<p class="jorei-article">(開示の実施) 第28条 保有個人情報の開示は、当該保有個人情報が、文書又は図画に記録されているときは閲覧又は写しの交付により、電磁的記録に記録されているときはその種別、情報化の進展状況等を勘案して議長が定める方法により行う。 ただし、閲覧の方法による保有個人情報の開示にあっては、議長は、当該保有個人情報が記録されている文書又は図画の保存に支障を生ずるおそれがあると認めるとき、その他正当な理由があるときは、その写しにより、これを行うことができる。</p>

<p class="jorei-article">(他の法令による開示の実施との調整) 第29条 議長は、他の法令の規定により、開示請求者に対し開示請求に係る保有個人情報が 前条第1項本文 に規定する方法と同一の方法で開示することとされている場合 (開示の期間が定められている場合にあっては、当該期間内に限る。) には、 同項本文 の規定にかかわらず、当該保有個人情報については、当該同一の方法による開示を行わない。 ただし、当該他の法令の規定に一定の場合には開示をしない旨の定めがあるときは、この限りでない。</p>

<p class="jorei-article">(開示請求の手数料) 第30条 この条例の規定に基づく自己情報の開示請求に係る手数料は、無料とする。</p>

</div>` },

    // ===== 第3編 執行機関 =====
    { id: 28, title: '三郷市行政組織条例', category: '執行機関', keywords: ['行政組織', '部', '課', '組織'], summary: '市の行政組織を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000027.html',
        fullText: `<div class="jorei-header">○三郷市行政組織条例<br>昭和58年3月23日 条例第3号</div>
<div class="jorei-article"><span class="article-title">（設置）</span><br>第1条 地方自治法（昭和22年法律第67号）第158条第1項の規定に基づき、市長の権限に属する事務を分掌させるため、次の部及び課を置く。<br>企画政策部、総務部、危機管理防災課、財務部、市民生活部、地域振興部、いきいき健康部、福祉部、こども未来部、建設部、まちづくり推進部</div>
<div class="jorei-article"><span class="article-title">（事務分掌）</span><br>第2条 前条に規定する各部及び課の事務分掌は、次のとおりとする。<br><br><strong>企画政策部</strong><br>（1）政策の総合企画・調整・調査研究に関する事項<br>（2）行政組織・事務管理・行政改革に関する事項<br>（3）情報化に関する事項<br>（4）秘書に関する事項<br>（5）広報・広聴に関する事項<br><br><strong>総務部</strong><br>（1）議会・一般行政に関する事項<br>（2）条例・規則に関する事項<br>（3）職員人事・給与・研修・福利厚生に関する事項<br>（4）契約・工事検査に関する事項<br><br><strong>危機管理防災課</strong><br>防災及び危機管理に関する事項<br><br><strong>財務部</strong><br>（1）財政に関する事項<br>（2）市有財産に関する事項<br>（3）市税徴収に関する事項<br><br><strong>市民生活部</strong><br>（1）戸籍・住民基本台帳に関する事項<br>（2）交通安全・防犯に関する事項<br>（3）環境保全・清掃に関する事項<br><br><strong>地域振興部</strong><br>（1）自治振興・文化振興に関する事項<br>（2）商業・工業・観光に関する事項<br>（3）農業に関する事項<br>（4）スポーツ振興に関する事項<br><br><strong>いきいき健康部</strong><br>（1）健康推進・地域医療に関する事項<br>（2）国民健康保険・高齢者医療・国民年金に関する事項<br>（3）高齢者福祉・介護保険に関する事項<br><br><strong>福祉部</strong><br>社会福祉（児童福祉及び高齢者福祉を除く。）に関する事項<br><br><strong>こども未来部</strong><br>児童福祉・母子保健に関する事項<br><br><strong>建設部</strong><br>道路・河川・治水・下水道に関する事項<br><br><strong>まちづくり推進部</strong><br>都市計画・住宅政策・建築・公園・土地区画整理に関する事項</div>
<div class="jorei-article"><span class="article-title">（委任）</span><br>第3条 この条例の施行に関し必要な事項は、規則で定める。</div>
<div class="jorei-supplementary">附則<br>この条例は、昭和58年4月1日から施行する。</div>` },
    { id: 29, title: '三郷市役所出張所設置条例', category: '執行機関', keywords: ['出張所', '窓口', 'サービス'], summary: '市役所出張所の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000030.html',
        fullText: `<div class="jorei-header">○三郷市役所出張所設置条例<br>昭和49年9月28日 条例第42号</div>
<div class="jorei-article"><span class="article-title">（設置）</span><br>第1条 地方自治法（昭和22年法律第67号）第155条の規定により、市長の権限に属する事務を分掌させるため、出張所を設置する。</div>
<div class="jorei-article"><span class="article-title">（名称、位置及び所管区域）</span><br>第2条 出張所の名称、位置及び所管区域は、次のとおりとする。<br><br>名称：三郷市立希望の郷交流センター出張所<br>位置：三郷市彦成三丁目7番19号<br>所管区域：市内全域</div>
<div class="jorei-article"><span class="article-title">（委任）</span><br>第3条 この条例の施行に関し必要な事項は、規則で定める。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。<br><br>附則（令和4年3月17日条例第7号）<br>この条例は、規則で定める日から施行する。（令和5年2月13日施行）</div>` },
    { id: 30, title: '三郷市行政改革推進委員会条例', category: '執行機関', keywords: ['行政改革', '推進', '効率化'], summary: '行政改革推進委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000035.html' },
    { id: 31, title: '三郷市まちづくり委員会条例', category: '執行機関', keywords: ['まちづくり', '委員会', '市民参加'], summary: 'まちづくり委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000041.html' },
    { id: 32, title: '三郷市情報公開条例', category: '執行機関', keywords: ['情報公開', '公文書', '透明性', '市民の知る権利'], summary: '市の情報公開に関する条例。市民の知る権利を保障。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000050.html' },
    { id: 33, title: '三郷市個人情報の保護に関する法律施行条例', category: '執行機関', keywords: ['個人情報', '保護', 'プライバシー'], summary: '個人情報保護法の施行に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000053.html',
        fullText: `<div class="jorei-header">○三郷市公文例規程<br>平成12年3月10日 訓令第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この訓令は、公文書に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(公文書の定義) 第2条 この訓令において「公文書」とは、 次の各号 に掲げるもののほか、職員がその職務権限に基づいて作成する文書及び図面をいう。</p>

<p>(用字、用語及び文体) 第3条 公用文に用いる漢字、仮名遣い及び送り仮名については、それぞれ常用漢字表 (平成22年内閣告示第2号) 、現代仮名遣い (昭和61年内閣告示第1号) 及び送り仮名の付け方 (昭和48年内閣告示第2号) によるものとする。</p>

<p class="jorei-article">(左横書きの原則) 第4条 公文書の書き方は、左横書きとする。 ただし、次に掲げるものについて作成する公文書については、この限りでない。</p>

<p class="jorei-article">(形式) 第5条 公文書の形式については、おおむね別記の基準による。</p>

</div>` },
    { id: 34, title: '三郷市情報公開・個人情報保護審査会条例', category: '執行機関', keywords: ['審査会', '情報公開', '個人情報'], summary: '情報公開・個人情報保護に関する審査会の設置条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000055.html' },
    { id: 35, title: '三郷市行政手続条例', category: '執行機関', keywords: ['行政手続', '処分', '申請', '不利益処分'], summary: '行政手続の透明性・公正性を確保する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000059.html',
        fullText: `<div class="jorei-header">○三郷市規則等の左横書きに改める規則<br>昭和47年4月27日 規則第2号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規則 は、本市規則等の左横書き実施に伴い、現に効力を有する縦書きの規則、規程等 (以下「規則等」という。) を左横書きに改めるために必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(措置) 第2条 既存の規則等は、すべて左横書きに改める。 この場合において、左横書きに伴う字句の改正その他の措置については、すべて 三郷市条例を左横書きに改める条例 (昭和47年条例第27号) の例による。</p>

</div>` },
    { id: 36, title: '三郷市行政手続等における情報通信の技術の利用に関する条例', category: '執行機関', keywords: ['電子申請', 'オンライン', 'デジタル化'], summary: '行政手続のオンライン化に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000062.html',
        fullText: `<div class="jorei-header">○三郷市公印規程<br>昭和39年9月25日 訓令第2号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 三郷市の公印について必要な事項は、別に定めるもののほか、この規程の定めるところによる。</p>

<p class="jorei-article">(公印の名称等) 第2条 公印の名称、ひな形、寸法、印材、個数、用途及び保管者は、 別表 のとおりとする。</p>

<p class="jorei-article">(公印の保管) 第3条 公印は、常に堅固な容器に納め、勤務時間外、週休日及び休日にあっては、封印し、又は施錠しておかなければならない。</p>

<p class="jorei-article">(公印台帳) 第4条 総務部総務課長は、三郷市公印台帳 ( 様式第1号 ) を作成し、新調、改刻、廃止又は廃棄の都度必要な事項を登載しなければならない。</p>

<p>(公印の新調、改刻及び廃止) 第5条 公印の新調、改刻及び廃止は、総務部長が行う。</p>

<p class="jorei-article">(廃止した公印の保管) 第6条 公印を廃止 (改刻による廃止を含む。) したときは、保管者は、不要となった旧公印を総務部長に引き継がなければならない。</p>

<p class="jorei-article">(公示) 第7条 公印を新調し、若しくは改刻したとき、又は公印の使用を廃止したときは、印影を付けてその旨を公示しなければならない。</p>

<p class="jorei-article">(自動式押印機器等の使用) 第8条 迅速かつ継続的に同一の公印を押印する必要がある文書がある場合は、公印の押印に代えて、その公印と同一の印影を押印できる自動式押印機器 (以下「押印機器」という。) により押印し、又は電子計算組織等に記録した当該公印の印影を打ち出したもの (以下「電子公印」という。) を使用することができる。</p>

<p class="jorei-article">(印影の印刷) 第9条 公印の印影又はその縮小したものを印刷しようとするときは、総務部長に合議しなければならない。</p>

<p class="jorei-article">(公印の取扱い) 第10条 保管者は、必要があると認めたときは、公印の使用その他公印に関する事務をその指定する所属職員 (以下「公印取扱者」という。) に行わせることができる。</p>

<p class="jorei-article">(公印の使用) 第11条 公印を使用しようとする者は、文書に原議その他の証拠書類を添えて保管者又は公印取扱者に提示し、その承認を受けなければならない。</p>

</div>` },
    { id: 37, title: '三郷市行政不服審査法関係手数料徴収条例', category: '執行機関', keywords: ['行政不服審査', '手数料', '不服申立て'], summary: '行政不服審査に関する手数料の条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000064.html',
        fullText: `<div class="jorei-header">○三郷市情報公開条例施行規則<br>平成11年10月13日 規則第43号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、 三郷市情報公開条例 (平成11年条例第15号。以下「条例」という。) の施行に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(請求の手続) 第2条 条例第6条第1項第3号 に規定する規則で定める事項は、次に掲げるものとする。</p>

<p class="jorei-article">(通知事項等) 第3条 条例第11条第1項 に規定する規則で定める事項は、次に掲げるものとする。</p>

<p class="jorei-article">(請求却下の通知) 第3条の2 条例第11条第3項 の規定による却下は、三郷市情報公開請求却下通知書 ( 様式第7号の2 ) により行うものとする。</p>

<p class="jorei-article">(移送の通知) 第4条 条例第14条第1項 の規定による通知は、三郷市情報公開請求事案移送通知書 ( 様式第7号 ) により行うものとする。</p>

<p class="jorei-article">(意見書提出の通知) 第5条 条例第15条第1項 及び 第2項 に規定する規則で定める事項は、次に掲げるものとする。</p>

<p class="jorei-article">(公開の方法) 第6条 条例第16条第1項 に規定する規則で定める方法は、閲覧、写しの交付、視聴、紙への出力その他情報の保有の形態等によって実施機関が定める方法とする。</p>

<p class="jorei-article">(公開を受ける際の留意事項) 第7条 条例第16条第1項 の規定により市政情報の公開を受ける者は、当該市政情報を丁重に取り扱い、これを改ざんし、汚損し、又は破損することがないようにしなければならない。</p>

<p class="jorei-article">(手数料の減免) 第7条の2 条例第18条第2項第3号 に規定する規則で定める請求は、次に掲げるとおりとする。</p>

<p class="jorei-article">(審査請求に係る諮問) 第8条 条例第20条第1項 の規定による諮問は、三郷市情報公開決定等審査請求諮問書 ( 様式第12号 ) により行うものとする。</p>

<p class="jorei-article">(諮問の通知) 第9条 条例第20条第3項 の規定による通知は、三郷市情報公開審査請求諮問通知書 ( 様式第13号 ) により行うものとする。</p>

<p class="jorei-article">(市出資法人) 第10条 条例第26条 に規定する市が出資等している法人であって、市長が定めるものは、次に掲げるものとする。</p>

</div>` },
    { id: 38, title: '三郷市行政不服審査会条例', category: '執行機関', keywords: ['行政不服審査', '審査会', '救済'], summary: '行政不服審査会の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000065.html' },
    { id: 39, title: '三郷市個人番号の利用及び特定個人情報の提供に関する条例', category: '執行機関', keywords: ['マイナンバー', '個人番号', '番号制度'], summary: 'マイナンバーの利用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000067.html' },
    { id: 40, title: '三郷市選挙管理委員会規程', category: '執行機関', keywords: ['選挙', '選挙管理', '投票'], summary: '選挙管理委員会に関する規程。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000071.html',
        fullText: `<div class="jorei-header">○三郷市選挙管理委員会規程<br>昭和31年10月1日 選管訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(委員長の選挙) 第1条 委員長は、三郷市選挙管理委員会 (以下「委員会」という。) において、委員の中から投票によりこれを選挙する。</p>

<p class="jorei-article">(公職選挙法の準用) 第2条 前条 の規定により行う選挙については、公職選挙法 (昭和25年法律第100号) 第46条 (投票の記載事項及び投 函 かん ) 、 第48条 (代理投票) 、 第68条 (無効投票) 第1項並びに 第95条 (衆議院比例代表選出議員又は参議院比例代表選出議員の選挙以外の選挙における当選人) 第1項本文及び第2項の規定を準用する。 その投票の効力に関し異議があるときは、委員会がこれを決定する。</p>

<p class="jorei-article">(当選人の告示) 第3条 当選人が当選を承諾したときは、委員会は、直ちにその住所及び氏名を告示しなければならない。</p>

<p class="jorei-article">(委員長が欠けた場合の選挙) 第4条 委員長が欠けたときは、その日から10日以内に速やかにその選挙を行わなければならない。</p>

<p class="jorei-article">(委員長の任期) 第5条 委員長の任期は、委員の任期による。</p>

<p class="jorei-article">(委員長及び委員等の退職) 第6条 委員長が退職しようとするときは、その理由を添えて退職願を委員長の職務を代理する委員に提出しなければならない。</p>

<p class="jorei-article">(委員長及び委員の退職等の場合の告示) 第7条 委員長又は委員が退職したとき及び委員の欠員を補充したときは、委員会は、直ちにその旨を告示しなければならない。</p>

<p class="jorei-article">(委員長の担任する事務) 第8条 委員長は、おおむね次に掲げる事務を担任する。</p>

<p class="jorei-article">(専決処分) 第9条 委員会の権限に属する軽易な事項でその議決により特に指定したものは、委員長においてこれを専決処分することができる。</p>

<p class="jorei-article">(委員会の招集) 第10条 委員長が委員会を招集しようとするときは、その旨を告示するとともに委員に通知しなければならない。</p>

<p>(委員会の日時、場所等の告示) 第11条 前条第1項 の規定による告示及び通知には、委員会招集の日時、場所及び付議すべき事件を記載しなければならない。</p>

<p class="jorei-article">(出席不能の場合の届出) 第12条 委員は、委員会に出席することができないときは、その理由を示して速やかに委員長に届け出なければならない。</p>

<p class="jorei-article">(会議録の調製) 第13条 委員長は、書記をして会議録を調製し、会議の次第を記載させなければならない。</p>

<p class="jorei-article">(委員会の議事等) 第14条 法令及びこの規程に定めるもののほか、委員会の開閉、議案の審査、議決等委員会の会議の運営については、 三郷市議会会議規則 (昭和47年議会規則第1号) の例による。</p>

<p class="jorei-article">(事務局の設置及び組織) 第15条 委員会の事務を処理するため、委員会に事務局を置く。</p>

<p class="jorei-article">(職の設置) 第16条 事務局に事務局長を、係に係長を置く。</p>

<p class="jorei-article">(職務) 第17条 事務局長は、委員長の命を受け、事務局の事務を掌理し、その事務を処理するため、職員を指揮監督する。</p>

<p class="jorei-article">(専決) 第18条 事務局長及び次長は、次に掲げる事項について専決することができる。 ただし、当該専決の範囲は、事務局長及び次長の職務の級に応じ 三郷市事務専決規程 (平成3年訓令第2号) の例による。</p>

<p class="jorei-article">(公印) 第19条 委員会、委員長及び委員長職務代理者の公印は、次のとおりとする。</p>

<p class="jorei-article">(雑則) 第20条 この規程に定めるもののほか、事務の処理及び服務等については、市長の事務部局の例による。</p>

</div>` },
    { id: 41, title: '三郷市議会議員又は三郷市長の選挙における選挙運動用自動車の使用等の公営に関する条例', category: '執行機関', keywords: ['選挙', '公営', '選挙運動'], summary: '選挙運動の公費負担に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000077.html' },
    { id: 42, title: '三郷市選挙公報発行条例', category: '執行機関', keywords: ['選挙公報', '選挙', '情報提供'], summary: '選挙公報の発行に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000081.html' },
    { id: 43, title: '三郷市監査委員条例', category: '執行機関', keywords: ['監査', '監査委員', 'チェック機能'], summary: '監査委員に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000086.html',
        fullText: `<div class="jorei-header">○勤務条件に関する措置の要求に関する規則<br>昭和49年10月28日 公平委規則第2号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、地方公務員法 (昭和25年法律第261号。以下「法」という。) 第48条の規定に基づき、職員の勤務条件に関する措置の要求及び審査、判定の手続並びに審査、判定の結果とるべき措置について必要な事項を定めるものとする。</p>

<p class="jorei-article">(勤務条件に関する措置の要求) 第2条 職員が法第46条の規定により勤務条件に関する措置の要求 (以下「措置の要求」という。) をしようとするときは、書面でしなければならない。</p>

<p class="jorei-article">(措置の要求の調査等) 第3条 措置要求書が提出されたときは、公平委員会は、その記載事項及び添付資料並びに要求すべき措置等について調査しなければならない。 この場合において、適当と認めるときは、公平委員会は、関係当事者に対し要求すべき措置について交渉を行うようすすめるものとする。</p>

<p class="jorei-article">(審査) 第4条 公平委員会は、事案の審査のため必要があると認めるときは、措置の要求を行う職員 (以下「要求者」という。) その他事案に関係がある者を喚問してその陳述を求め、これらの者に対して書類又はその写しの提出を求め、その他事実調査を行うものとする。</p>

<p class="jorei-article">(要求の取下) 第5条 要求者は、公平委員会が事案について判定を行うまでの間は、いつでも措置の要求の全部又は一部を取り下げることができる。</p>

<p class="jorei-article">(審査の打切) 第6条 公平委員会は、要求者の死亡、所在不明等により事案の審査を継続することができなくなったと認める場合又は関係当事者における交渉による事案の解決、要求の事由の消滅等により事案の審査を継続する必要がなくなったと認める場合においては、事案の審査を打ち切ることができる。</p>

<p class="jorei-article">(判定) 第7条 公平委員会は、審査を終了したときは、速やかに判定を行い、書面に作成して要求者に送達するものとする。</p>

<p class="jorei-article">(勧告) 第8条 公平委員会は、判定の結果、必要があると認める場合においては、当局に対して書面で必要な勧告をしなければならない。 この場合において、その書面の写しを同時に要求者に送達するものとする。</p>

<p class="jorei-article">(雑則) 第9条 この規則 に定めるもののほか、措置の要求の審査の手続等について必要な事項は、公平委員会が定める。</p>

</div>` },
    { id: 44, title: '三郷市公平委員会設置条例', category: '執行機関', keywords: ['公平委員会', '職員', '救済'], summary: '公平委員会の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000090.html',
        fullText: `<div class="jorei-header">○固定資産評価審査委員会公印規程<br>平成2年12月19日 固資評委訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規程 は、固定資産評価審査委員会 (以下「委員会」という。) の公印に関し、必要な事項を定めるものとする。</p>

<p>(名称、ひな形等) 第2条 公印の名称、ひな形、寸法、印材及び用途は、 別表 のとおりとする。</p>

<p class="jorei-article">(保管) 第3条 公印は、委員会の事務職員のうち委員長が指定した者が保管する。</p>

<p class="jorei-article">(その他) 第4条 その他公印の使用等について必要な事項は、 三郷市公印規程 (昭和39年訓令第2号) の例による。</p>

</div>` },
    { id: 45, title: '三郷市人事行政の運営等の状況の公表に関する条例', category: '執行機関', keywords: ['人事行政', '公表', '透明性'], summary: '人事行政の状況公表に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000098.html',
        fullText: `<div class="jorei-header">○三郷市人事異動及び人事記録に関する規程<br>昭和44年6月5日 訓令第3号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規程は、職員の人事異動及び人事記録に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(人事異動の種類) 第2条 人事異動の種類は、 別表 異動の種類欄に掲げるとおりとする。</p>

<p class="jorei-article">(人事異動通知書) 第3条 任命権者 (任命権者の委任を受けた者を含む。以下同じ。) は、職員について人事異動 (以下「異動」という。) を行う場合においては、別に定める人事異動通知書 (以下「通知書」という。) を作成しなければならない。</p>

<p class="jorei-article">第4条 任命権者は、異動を発令したときは、別に定める人事台帳に、通知書記入の例によって異動事項を記録しなければならない。</p>

</div>` },
    { id: 46, title: '固定資産評価審査委員会条例', category: '執行機関', keywords: ['固定資産', '評価', '審査'], summary: '固定資産評価審査委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000101.html',
        fullText: `<div class="jorei-header">○三郷市職員の定年等に関する条例<br>昭和59年3月21日 条例第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この条例は、地方公務員法 (昭和25年法律第261号。以下「法」という。) 第22条の4第1項及び第2項、第22条の5第1項、第28条の2、第28条の5、第28条の6第1項から第3項まで並びに第28条の7の規定に基づき、職員の定年等に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(定年による退職) 第2条 職員は、定年に達したときは、定年に達した日以後における最初の3月31日 (以下「定年退職日」という。) に退職する。</p>

<p class="jorei-article">(定年) 第3条 職員の定年は、年齢65年とする。</p>

<p class="jorei-article">(定年による退職の特例) 第4条 任命権者は、定年に達した職員が 第2条 の規定により退職すべきこととなる場合において、次に掲げる事由があると認めるときは、 同条 の規定にかかわらず、当該職員に係る定年退職日の翌日から起算して1年を超えない範囲内で期限を定め、当該職員を当該定年退職日において従事している職務に従事させるため、引き続き勤務させることができる。 ただし、 第9条第1項 から 第4項 までの規定により異動期間 ( 第9条第1項 に規定する異動期間をいう。以下この項及び 次項 において同じ。) ( 第9条第1項 又は 第2項 の規定により延長された異動期間を含む。) を延長した職員であって、定年退職日において管理監督職 ( 第6条 に規定する職をいう。以下この条及び 第3章 において同じ。) を占めている職員については、 第9条第1項 又は 第2項 の規定により当該異動期間を延長した場合に限るものとし、当該期限は、当該職員が占めている管理監督職に係る異動期間の末日の翌日から起算して3年を超えることができない。</p>

<p class="jorei-article">(定年に関する施策の調査等) 第5条 市長は、職員の定年に関する事務の適正な運営を確保するため、職員の定年に関する制度の実施に関する施策を調査研究し、その権限に属する事務について適切な方策を講ずるものとする。</p>

<p class="jorei-article">(管理監督職勤務上限年齢制の対象となる管理監督職) 第6条 法第28条の2第1項に規定する条例で定める職は、 職員の給与に関する条例 (昭和31年条例第23号) 第7条の3第1項 及び 三郷市企業職員の給与の種類及び基準に関する条例 (昭和42年条例第10号) 第4条 に規定する管理職手当を支給される職員の職とする。</p>

<p class="jorei-article">(管理監督職勤務上限年齢) 第7条 法第28条の2第1項に規定する管理監督職勤務上限年齢は、年齢60年とする。</p>

<p class="jorei-article">(他の職への降任等を行うに当たって遵守すべき基準) 第8条 任命権者は、法第28条の2第4項に規定する他の職への降任等 (以下この章において「他の職への降任等」という。) を行うに当たっては、法第13条、第15条、第23条の3、第27条第1項及び第56条に定めるもののほか、次に掲げる基準を遵守しなければならない。</p>

<p class="jorei-article">(管理監督職勤務上限年齢による降任等及び管理監督職への任用の制限の特例) 第9条 任命権者は、他の職への降任等をすべき管理監督職を占める職員について、次に掲げる事由があると認めるときは、当該職員が占める管理監督職に係る異動期間 (当該管理監督職に係る管理監督職勤務上限年齢に達した日の翌日から同日以後における最初の4月1日までの間をいう。以下この章において同じ。) の末日の翌日から起算して1年を超えない期間内 (当該期間内に定年退職日がある職員にあっては、当該異動期間の末日の翌日から定年退職日までの期間内。 第3項 において同じ。) で当該異動期間を延長し、引き続き当該管理監督職を占める職員に、当該管理監督職を占めたまま勤務をさせることができる。</p>

<p class="jorei-article">(異動期間の延長等に係る職員の同意) 第10条 任命権者は、 前条第1項 から 第4項 までの規定により異動期間を延長する場合及び 同条第3項 の規定により他の管理監督職に降任等をする場合には、あらかじめ職員の同意を得なければならない。</p>

<p class="jorei-article">(異動期間の延長事由が消滅した場合の措置) 第11条 任命権者は、 第9条 の規定により異動期間を延長した場合において、当該異動期間の末日の到来前に当該異動期間の延長の事由が消滅したときは、他の職への降任等をするものとする。</p>

<p class="jorei-article">(定年前再任用短時間勤務職員の任用) 第12条 任命権者は、年齢60年に達した日以後に退職 (臨時的に任用される職員その他の法律により任期を定めて任用される職員及び非常勤職員が退職する場合を除く。) をした者 (以下この条及び 次条 において「年齢60年以上退職者」という。) を、従前の勤務実績その他の規則で定める情報に基づく選考により、短時間勤務の職 (当該職を占める職員の1週間当たりの通常の勤務時間が、常時勤務を要する職でその職務が当該短時間勤務の職と同種の職を占める職員の1週間当たりの通常の勤務時間に比し短い時間である職をいう。以下この条及び 次条 において同じ。) に採用することができる。 ただし、年齢60年以上退職者がその者を採用しようとする短時間勤務の職に係る定年退職日相当日 (短時間勤務の職を占める職員が、常時勤務を要する職でその職務が当該短時間勤務の職と同種の職を占めているものとした場合における定年退職日をいう。) を経過した者であるときは、この限りでない。</p>

<p class="jorei-article">第13条 任命権者は、 前条本文 の規定によるほか、市が加入する地方自治法 (昭和22年法律第67号) 第284条第1項の一部事務組合又は広域連合の年齢60年以上退職者を、従前の勤務実績その他の規則で定める情報に基づく選考により、短時間勤務の職に採用することができる。</p>

<p class="jorei-article">(雑則) 第14条 この条例の実施に関し必要な事項は、規則で定める。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、平成14年4月1日から施行する。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、令和5年4月1日から施行する。 ただし、附則第12条の規定は、公布の日から施行する。</p>

<p class="jorei-article">(三郷市職員の再任用に関する条例の廃止) 第2条 三郷市職員の再任用に関する条例 (平成13年条例第12号) は、廃止する。</p>

<p class="jorei-article">(三郷市職員の定年等に関する条例の一部改正に伴う勤務延長に関する経過措置) 第3条 任命権者は、施行日 (この条例の施行の日をいう。以下同じ。) 前に第1条の規定による改正前の三郷市職員の定年等に関する条例 (以下「旧定年条例」という。) 第4条第1項又は第2項の規定により勤務することとされ、かつ、旧定年条例勤務延長期限 (同条第1項の期限又は同条第2項の規定により延長された期限をいう。以下この項において同じ。) が施行日以後に到来する職員 (以下この項において「旧定年条例勤務延長職員」という。) について、旧定年条例勤務延長期限又はこの項の規定により延長された期限が到来する場合において、第1条の規定による改正後の三郷市職員の定年等に関する条例 (以下「新定年条例」という。) 第4条第1項各号に掲げる事由があると認めるときは、これらの期限の翌日から起算して1年を超えない範囲内で期限を延長することができる。 ただし、当該期限は、当該旧定年条例勤務延長職員に係る旧定年条例第2条に規定する定年退職日の翌日から起算して3年を超えることができない。</p>

<p class="jorei-article">(三郷市職員の定年等に関する条例の一部改正に伴う定年退職者等の再任用に関する経過措置) 第4条 任命権者は、次に掲げる者のうち、年齢65年に達する日以後における最初の3月31日 (以下この条から附則第7条までにおいて「特定年齢到達年度の末日」という。) までの間にある者であって、当該者を採用しようとする常時勤務を要する職に係る旧定年条例定年 (旧定年条例第3条に規定する定年をいう。以下同じ。) (施行日以後に新たに設置された職及び施行日以後に組織の変更等により名称が変更された職にあっては、当該職が施行日の前日に設置されていたものとした場合における旧定年条例定年に準じた当該職に係る年齢。次条第1項において同じ。) に達している者を、従前の勤務実績その他の規則で定める情報に基づく選考により、1年を超えない範囲内で任期を定め、当該常時勤務を要する職に採用することができる。</p>

<p class="jorei-article">第5条 任命権者は、前条第1項の規定によるほか、組合 (市が加入する地方自治法 (昭和22年法律第67号) 第284条第1項の一部事務組合又は広域連合をいう。次項及び附則第7条において同じ。) における前条第1項各号に掲げる者のうち、特定年齢到達年度の末日までの間にある者であって、当該者を採用しようとする常時勤務を要する職に係る旧定年条例定年に達している者を、従前の勤務実績その他の規則で定める情報に基づく選考により、1年を超えない範囲内で任期を定め、当該常時勤務を要する職に採用することができる。</p>

<p class="jorei-article">第6条 任命権者は、新地方公務員法第22条の4第4項の規定にかかわらず、附則第4条第1項各号に掲げる者のうち、特定年齢到達年度の末日までの間にある者であって、当該者を採用しようとする短時間勤務の職 (新定年条例第12条に規定する短時間勤務の職をいう。以下同じ。) に係る旧定年条例定年相当年齢 (短時間勤務の職を占める職員が、常時勤務を要する職でその職務が当該短時間勤務の職と同種の職を占めているものとした場合における旧定年条例定年 (施行日以後に新たに設置された短時間勤務の職及び施行日以後に組織の変更等により名称が変更された短時間勤務の職にあっては、当該職が施行日の前日に設置されていたものとした場合において、当該職を占める職員が、常時勤務を要する職でその職務が当該職と同種の職を占めているものとしたときにおける旧定年条例定年に準じた当該職に係る年齢) をいう。次条第1項において同じ。) に達している者を、従前の勤務実績その他の規則で定める情報に基づく選考により、1年を超えない範囲内で任期を定め、当該短時間勤務の職に採用することができる。</p>

<p class="jorei-article">第7条 任命権者は、前条第1項の規定によるほか、新地方公務員法第22条の5第3項において準用する新地方公務員法第22条の4第4項の規定にかかわらず、組合における附則第4条第1項各号に掲げる者のうち、特定年齢到達年度の末日までの間にある者であって、当該者を採用しようとする短時間勤務の職に係る旧定年条例定年相当年齢に達している者を、従前の勤務実績その他の規則で定める情報に基づく選考により、1年を超えない範囲内で任期を定め、当該短時間勤務の職に採用することができる。</p>

<p class="jorei-article">(令和3年改正法附則第8条第3項の条例で定める職及び年齢) 第8条 令和3年改正法附則第8条第3項の条例で定める職は、次に掲げる職とする。</p>

<p class="jorei-article">(令和3年改正法附則第8条第4項の規定により読み替えて適用する新地方公務員法第22条の4第4項の条例で定める職及び年齢) 第9条 令和3年改正法附則第4条から第7条までの規定が適用される場合における令和3年改正法附則第8条第4項の規定により読み替えて適用する新地方公務員法第22条の4第4項の条例で定める職は、次に掲げる職とする。</p>

<p class="jorei-article">(令和3年改正法附則第8条第5項の条例で定める職並びに条例で定める者及び職員) 第10条 令和3年改正法附則第8条第5項の条例で定める職は、次に掲げる職のうち、当該職が基準日 (附則第4条から第7条までの規定が適用される間における各年の4月1日 (施行日を除く。) をいう。以下この条において同じ。) の前日に設置されていたものとした場合において、基準日における新定年条例定年が基準日の前日における新定年条例定年を超える職とする。</p>

<p class="jorei-article">(三郷市職員の定年等に関する条例の一部改正に伴う定年前再任用短時間勤務職員に関する経過措置) 第11条 任命権者は、基準日 (令和7年4月1日、令和9年4月1日、令和11年4月1日及び令和13年4月1日をいう。以下この条において同じ。) から基準日の翌年の3月31日までの間、基準日における新定年条例定年相当年齢が基準日の前日における新定年条例定年相当年齢を超える短時間勤務の職 (基準日における新定年条例定年相当年齢が新定年条例第3条に規定する定年である短時間勤務の職に限る。) 及びこれに相当する基準日以後に設置された短時間勤務の職その他の規則で定める短時間勤務の職 (以下この条において「新定年条例原則定年相当年齢引上げ短時間勤務職」という。) に、基準日の前日までに新定年条例第12条に規定する年齢60年以上退職者となった者 (基準日前から新定年条例第4条第1項又は第2項の規定により勤務した後基準日以後に退職をした者を含む。) のうち基準日の前日において同日における当該新定年条例原則定年相当年齢引上げ短時間勤務職に係る新定年条例定年相当年齢に達している者 (当該規則で定める短時間勤務の職にあっては、規則で定める者) を、新定年条例第12条又は第13条第1項の規定により採用することができず、新定年条例原則定年相当年齢引上げ短時間勤務職に、新定年条例第12条又は第13条第1項の規定により採用された職員 (「定年前再任用短時間勤務職員」という。以下この条、附則第14条、第16条、第17条及び第18条において同じ。) のうち基準日の前日において同日における当該新定年条例原則定年相当年齢引上げ短時間勤務職に係る新定年条例定年相当年齢に達している定年前再任用短時間勤務職員 (当該規則で定める短時間勤務の職にあっては、規則で定める定年前再任用短時間勤務職員) を、昇任し、降任し、又は転任することができない。</p>

<p class="jorei-article">(令和3年改正法附則第2条第3項に規定する条例で定める年齢) 第12条 令和3年改正法附則第2条第3項に規定する条例で定める年齢は、年齢60年とする。</p>

</div>` },
    { id: 47, title: '三郷市附属機関に関する条例', category: '執行機関', keywords: ['附属機関', '審議会', '委員会'], summary: '市の附属機関に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000104.html',
        fullText: `<div class="jorei-header">○職員の懲戒の手続及び効果に関する条例<br>昭和31年10月30日 条例第15号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例は、地方公務員法 (昭和25年法律第261号。以下「法」という。) 第29条第2項及び第4項の規定に基づき、職員の懲戒の手続及び効果に関し規定することを目的とする。</p>

<p class="jorei-article">(地方公共団体又は国の事務等と密接な関連を有する業務を行う法人) 第2条 法第29条第2項に規定する条例で定める法人は、次に掲げる法人とする。</p>

<p class="jorei-article">(懲戒の手続) 第3条 戒告、減給、停職又は懲戒処分としての免職の処分は、その旨を記載した書面を当該職員に交付して行わなければならない。</p>

<p class="jorei-article">(減給の効果) 第4条 減給は、1日以上6月以下の期間、その発令の日に受ける給料 (法第22条の2第1項第1号に掲げる職員については、報酬の額 ( 三郷市会計年度任用職員の報酬等に関する条例 (令和元年条例第9号) 第2条第3項 、 第4項 若しくは 第5項 又は 第3条 の報酬の基本額に限る。) ) の10分の1以下を減ずるものとする。 この場合において、その減ずる額が現に受ける給料の10分の1に相当する額を超えるときは、当該額を減ずるものとする。</p>

<p class="jorei-article">(停職の効果) 第5条 停職の期間は、1日以上6月以下とする。</p>

<p class="jorei-article">(委任) 第6条 この条例の実施に関し必要な事項は、規則で定める。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、令和5年4月1日から施行する。</p>

</div>` },

    // ===== 第4編 人事 =====
    { id: 48, title: '三郷市副市長の定数を定める条例', category: '人事', keywords: ['副市長', '定数', '特別職'], summary: '副市長の定数を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000106.html',
        fullText: `<div class="jorei-header">○三郷市副市長の定数を定める条例<br>昭和31年10月1日 条例第1号</div>
<div class="jorei-article">地方自治法（昭和22年法律第67号）第161条第2項の規定により、副市長の定数は1人とする。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 49, title: '三郷市職員定数条例', category: '人事', keywords: ['職員', '定数', '組織'], summary: '職員の定数を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000107.html',
        fullText: `<div class="jorei-header">○三郷市職員定数条例<br>昭和47年4月27日 条例第21号</div>
<div class="jorei-article"><span class="article-title">（職員の定数）</span><br>第1条 地方自治法（昭和22年法律第67号）第172条第3項の規定に基づく三郷市の職員の定数は、次のとおりとする。<br>（1）市長の事務部局の職員 710人<br>（2）議会の事務局の職員 7人<br>（3）選挙管理委員会の事務局の職員 市長の事務部局の職員が兼ねるものとする。<br>（4）監査委員の事務局の職員 市長の事務部局の職員が兼ねるものとする。<br>（5）農業委員会の事務局の職員 市長の事務部局の職員が兼ねるものとする。<br>（6）教育委員会の事務局及びその所管に属する学校その他の教育機関の職員 258人<br>（7）消防長及び消防職員 202人</div>
<div class="jorei-article"><span class="article-title">（定数の適用除外）</span><br>第2条 次に掲げる職員は、前条の職員の定数の外に置くことができる。<br>（1）臨時の職に関する職員及び非常勤の職員<br>（2）地方公務員法（昭和25年法律第261号）第22条の3第4項に規定する臨時的任用職員</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 50, title: '一般職の任期付職員の採用等に関する条例', category: '人事', keywords: ['任期付', '採用', '職員'], summary: '任期付職員の採用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000110.html',
        fullText: `<div class="jorei-header">○職員の勤務時間、休日及び休暇に関する条例<br>平成7年3月20日 条例第3号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この条例は、地方公務員法 (昭和25年法律第261号) 第24条第5項の規定に基づき、職員の勤務時間、休日及び休暇に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(1週間の勤務時間) 第2条 職員の勤務時間は、休憩時間を除き、4週間を超えない期間につき1週間当たり38時間45分とする。</p>

<p class="jorei-article">(週休日及び勤務時間の割振り) 第3条 日曜日及び土曜日は、週休日 (勤務時間を割り振らない日をいう。以下同じ。) とする。 ただし、任命権者は、育児短時間勤務職員等については、必要に応じ、当該育児短時間勤務等の内容に従いこれらの日に加えて月曜日から金曜日までの5日間において週休日を設けるものとし、定年前再任用短時間勤務職員及び任期付短時間勤務職員については、日曜日及び土曜日に加えて月曜日から金曜日までの5日間において週休日を設けることができる。</p>

<p class="jorei-article">第4条 任命権者は、公務の運営上の事情により特別の形態によって勤務する必要のある職員については、 前条 の規定にかかわらず、週休日及び勤務時間の割振りを別に定めることができる。</p>

<p class="jorei-article">(週休日の振替等) 第5条 任命権者は、職員に 第3条第1項 又は 前条 の規定により週休日とされた日において特に勤務することを命ずる必要がある場合には、規則の定めるところにより、 第3条第2項 又は 前条 の規定により勤務時間が割り振られた日 (以下この条において「勤務日」という。) のうち規則で定める期間内にある勤務日を週休日に変更して当該勤務日に割り振られた勤務時間を当該勤務することを命ずる必要がある日に割り振り、又は当該期間内にある勤務日の勤務時間のうち4時間を当該勤務日に割り振ることをやめて当該4時間の勤務時間を当該勤務することを命ずる必要がある日に割り振ることができる。</p>

<p class="jorei-article">(休憩時間) 第6条 任命権者は、1日の勤務時間が、6時間を超える場合においては少なくとも45分、8時間を超える場合においては少なくとも1時間の休憩時間を、それぞれ勤務時間の途中に置かなければならない。</p>

<p class="jorei-article">(正規の勤務時間以外の時間における勤務) 第8条 任命権者は、公務のため臨時又は緊急の必要がある場合には、 第2条 から 第5条 までに規定する勤務時間 (以下「正規の勤務時間」という。) 以外の時間において職員に勤務をすることを命ずることができる。 ただし、当該職員が育児短時間勤務職員等である場合にあっては、公務の運営に著しい支障が生ずると認められる場合として規則で定める場合に限り、正規の勤務時間以外の時間において勤務をすることを命ずることができる。</p>

<p class="jorei-article">(育児又は介護を行う職員の早出遅出勤務) 第8条の2 任命権者は、次に掲げる職員が、規則で定めるところにより、その子 (民法 (明治29年法律第89号) 第817条の2第1項の規定により職員が当該職員との間における同項に規定する特別養子縁組の成立について家庭裁判所に請求した者 (当該請求に係る家事審判事件が裁判所に係属している場合に限る。) であって、当該職員が現に監護するもの、児童福祉法 (昭和22年法律第164号) 第27条第1項第3号の規定により同法第6条の4第2号に規定する養子縁組里親である職員に委託されている児童その他これらに準ずる者として規則で定める者を含む。 第15条第1項 及び 第18条の2第1項第3号 を除き、以下同じ。) を養育するために請求した場合には、公務の運営に支障がある場合を除き、規則で定めるところにより、当該職員に当該請求に係る早出遅出勤務 (始業及び終業の時刻を、職員が育児又は介護を行うためのものとしてあらかじめ定められた特定の時刻とする勤務時間の割振りによる勤務をいう。 第3項 において同じ。) をさせるものとする。</p>

<p class="jorei-article">(育児又は介護を行う職員の深夜勤務及び時間外勤務の制限) 第8条の2の2 任命権者は、小学校就学の始期に達するまでの子のある職員 (職員の配偶者で当該子の親であるものが、深夜 (午後10時から翌日の午前5時までの間をいう。以下この項において同じ。) において常態として当該子を養育することができるものとして規則で定める者に該当する場合における当該職員を除く。) が、規則で定めるところにより、当該子を養育するために請求した場合には、公務の正常な運営を妨げる場合を除き、深夜における勤務をさせてはならない。</p>

<p class="jorei-article">(時間外勤務代休時間) 第8条の3 任命権者は、 職員の給与に関する条例 (昭和31年条例第23号) 第12条第4項 の規定により時間外勤務手当を支給すべき職員に対して、規則の定めるところにより、当該時間外勤務手当の一部の支給に代わる措置の対象となるべき時間 (以下「時間外勤務代休時間」という。) として、規則で定める期間内にある勤務日等 ( 第3条第2項 、 第4条 又は 第5条 の規定により勤務時間が割り振られた日をいう。 第10条第1項 において同じ。) ( 第10条第1項 に規定する休日及び代休日を除く。) に割り振られた勤務時間の全部又は一部を指定することができる。</p>

<p class="jorei-article">(休日) 第9条 職員は、国民の祝日に関する法律 (昭和23年法律第178号) に規定する休日 (以下「祝日法による休日」という。) には、特に勤務することを命ぜられる者を除き、正規の勤務時間においても勤務することを要しない。 12月29日から翌年の1月3日までの日 (祝日法による休日を除く。以下「年末年始の休日」という。) についても、同様とする。</p>

<p class="jorei-article">(休日の代休日) 第10条 任命権者は、職員に祝日法による休日又は年末年始の休日 (以下この項において「休日」と総称する。) である勤務日等に割り振られた勤務時間の全部 ( 次項 において「休日の全勤務時間」という。) について特に勤務することを命じた場合には、規則の定めるところにより、当該休日前に、当該休日に代わる日 ( 次項 において「代休日」という。) として、当該休日後の勤務日等 ( 第8条の3第1項 の規定により時間外勤務代休時間が指定された勤務日等及び休日を除く。) を指定することができる。</p>

<p class="jorei-article">(休暇の種類) 第11条 職員の休暇は、年次有給休暇、病気休暇、特別休暇、介護休暇、介護時間及び組合休暇とする。</p>

<p class="jorei-article">(年次有給休暇) 第12条 年次有給休暇は、1の年度ごとにおける休暇とし、その日数は、1の年度において、 次の各号 に掲げる職員の区分に応じて、 当該各号 に掲げる日数とする。</p>

<p class="jorei-article">(病気休暇) 第13条 病気休暇は、職員が負傷又は疾病のため療養する必要があり、その勤務しないことがやむを得ないと認められる場合における休暇とする。</p>

<p class="jorei-article">(特別休暇) 第14条 特別休暇は、特別の事由により職員が勤務しないことが相当である場合における休暇とする。</p>

<p class="jorei-article">(介護休暇) 第15条 介護休暇は、職員が要介護者 (配偶者 (届出をしないが事実上婚姻関係と同様の事情にある者を含む。以下この項において同じ。) 、父母、子、配偶者の父母その他規則で定める者 ( 第18条の3第1項 において「配偶者等」という。) で負傷、疾病又は老齢により規則で定める期間にわたり日常生活を営むのに支障があるものをいう。以下同じ。) の介護をするため、任命権者が規則の定めるところにより、職員の申出に基づき、要介護者の各々が当該介護を必要とする1の継続する状態ごとに、3回を超えず、かつ、通算して6月を超えない範囲内で指定する期間 (以下「指定期間」という。) 内において勤務しないことが相当であると認められる場合における休暇とする。</p>

<p class="jorei-article">(介護時間) 第15条の2 介護時間は、職員が要介護者の介護をするため、要介護者の各々が当該介護を必要とする1の継続する状態ごとに、連続する3年の期間 (当該要介護者に係る指定期間と重複する期間を除く。) 内において1日の勤務時間の一部につき勤務しないことが相当であると認められる場合における休暇とする。</p>

<p class="jorei-article">(組合休暇) 第16条 組合休暇は、職員が任命権者の承認を得て登録された職員団体の業務又は活動に従事する期間における休暇とする。</p>

<p>(病気休暇、特別休暇、介護休暇、介護時間及び組合休暇の承認) 第17条 病気休暇、特別休暇 (規則で定めるものを除く。) 、介護休暇、介護時間及び組合休暇については、規則の定めるところにより、任命権者の承認を受けなければならない。</p>

<p class="jorei-article">(委任) 第18条 第12条 から 前条 までに規定するもののほか、休暇に関する手続その他の休暇に関し必要な事項は、規則で定める。</p>

<p>(妊娠、出産等についての申出をした職員等に対する意向確認等) 第18条の2 任命権者は、 職員の育児休業等に関する条例 (平成4年条例第3号) 第21条第1項 の措置を講ずるに当たっては、 同条 の規定による申出をした職員 (以下この項において「申出職員」という。) に対して、次に掲げる措置を講じなければならない。</p>

<p class="jorei-article">(配偶者等が介護を必要とする状況に至った職員に対する意向確認等) 第18条の3 任命権者は、職員が配偶者等が当該職員の介護を必要とする状況に至ったことを申し出たときは、当該職員に対して、仕事と介護との両立に資する制度又は措置 (以下この条及び 次条 において「介護両立支援制度等」という。) その他の事項を知らせるとともに、介護両立支援制度等の請求等に係る当該職員の意向を確認するための面談その他の措置を講じなければならない。</p>

<p class="jorei-article">(勤務環境の整備に関する措置) 第18条の4 任命権者は、介護両立支援制度等の請求等が円滑に行われるようにするため、次に掲げる措置を講じなければならない。</p>

<p>(非常勤職員の勤務時間、休日及び休暇) 第19条 非常勤職員 (定年前再任用短時間勤務職員及び任期付短時間勤務職員を除く。) の勤務時間、休日及び休暇については、 第2条 から 前条 までの規定にかかわらず、その職務の性質等を考慮して、規則の定める基準に従い、任命権者が定める。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、平成7年4月1日から施行する。</p>

<p class="jorei-article">(経過措置) 第2条 この条例の施行の際現に改正前の職員の勤務時間、休日及び休暇に関する条例 (以下「旧条例」という。) 第2条第2項本文の規定に基づき月曜日から金曜日までの5日間において1日につき8時間の勤務時間が割り振られている職員について同条第3項の規定に基づき定められている勤務を要しない日又は勤務時間の割振りは、それぞれ 職員の勤務時間、休日及び休暇に関する条例 (以下「新条例」という。) 第5条 の規定に基づき任命権者が定めた週休日又は勤務時間の割振りとみなす。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、平成14年4月1日から施行する。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、平成14年4月1日から施行する。</p>

<p class="jorei-article">(経過措置) 第2条 新条例第15条の規定は、改正前の職員の勤務時間、休日及び休暇に関する条例 (以下「旧条例」という。) 第17条の規定により介護休暇の承認を受けた職員で施行の日において当該承認に係る介護を必要とする1の継続する状態についての介護休暇の初日から起算して3月を経過しているもの (当該介護休暇の初日から起算して6月を経過する日までの間にある職員に限る。) についても適用する。 この場合において、新条例第15条第2項中「連続する6月の期間内」とあるのは「平成14年4月1日から、当該状態についての介護休暇の初日から起算して6月を経過する日までの間」とする。</p>

</div>` },
    { id: 51, title: '職員の分限に関する手続及び効果に関する条例', category: '人事', keywords: ['分限', '処分', '職員'], summary: '職員の分限処分に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000113.html',
        fullText: `<div class="jorei-header">○職員の育児休業等に関する条例<br>平成4年3月21日 条例第3号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この条例は、地方公務員の育児休業等に関する法律 (平成3年法律第110号。以下「育児休業法」という。) 第2条第1項、第3条第2項、第5条第2項、第7条、第8条、第10条第1項及び第2項、第14条 (同法第17条において準用する場合を含む。) 、第17条並びに第19条第1項から第3項まで及び第5項の規定に基づき、並びに同法を実施するため、職員の育児休業等に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(育児休業をすることができない職員) 第2条 育児休業法第2条第1項の条例で定める職員は、次に掲げる職員とする。</p>

<p class="jorei-article">(育児休業法第2条第1項の条例で定める者) 第2条の2 育児休業法第2条第1項の条例で定める者は、児童福祉法 (昭和22年法律第164号) 第6条の4第1号に規定する養育里親である職員 (児童の親その他の同法第27条第4項に規定する者の意に反するため、同項の規定により、同法第6条の4第2号に規定する養子縁組里親として当該児童を委託することができない職員に限る。) に同法第27条第1項第3号の規定により委託されている当該児童とする。</p>

<p class="jorei-article">(育児休業法第2条第1項の条例で定める日) 第2条の3 育児休業法第2条第1項の条例で定める日は、 次の各号 に掲げる場合の区分に応じ、 当該各号 に定める日とする。</p>

<p class="jorei-article">(育児休業法第2条第1項の条例で定める場合) 第2条の4 育児休業法第2条第1項の条例で定める場合は、1歳6か月から2歳に達するまでの子を養育する非常勤職員が、 次の各号 に掲げる場合のいずれにも該当する場合 (当該子についてこの条の規定に該当して育児休業をしている場合であって 次条第7号 に掲げる事情に該当するときは 第2号 及び 第3号 に掲げる場合に該当する場合、規則で定める特別の事情がある場合にあっては 同号 に掲げる場合に該当する場合) とする。</p>

<p class="jorei-article">(育児休業法第2条第1項ただし書の条例で定める特別の事情) 第3条 育児休業法第2条第1項ただし書の条例で定める特別の事情は、次に掲げる事情とする。</p>

<p class="jorei-article">(育児休業法第2条第1項第1号の人事院規則で定める期間を基準として条例で定める期間) 第3条の2 育児休業法第2条第1項第1号の人事院規則で定める期間を基準として条例で定める期間は、57日間とする。</p>

<p class="jorei-article">(育児休業の期間の再度の延長ができる特別の事情) 第4条 育児休業法第3条第2項の条例で定める特別の事情は、配偶者が負傷又は疾病により入院したこと、配偶者と別居したこと、育児休業に係る子について保育所等における保育の利用を希望し、申込みを行っているが、当面その実施が行われないことその他の育児休業の期間の延長の請求時に予測することができなかった事実が生じたことにより当該育児休業に係る子について育児休業の期間の再度の延長をしなければその養育に著しい支障が生じることとなったこととする。</p>

<p class="jorei-article">(育児休業の承認の取消事由) 第5条 育児休業法第5条第2項の条例で定める事由は、育児休業をしている職員について当該育児休業に係る子以外の子に係る育児休業を承認しようとするときとする。</p>

<p class="jorei-article">(育児休業に伴う任期付採用に係る任期の更新) 第6条 任命権者は、育児休業法第6条第3項の規定により任期を更新する場合には、あらかじめ職員の同意を得なければならない。</p>

<p class="jorei-article">(育児休業をしている職員の期末手当等の支給) 第7条 職員の給与に関する条例 (昭和31年条例第23号。以下「給与条例」という。) 第17条第1項 に規定するそれぞれの基準日に育児休業をしている職員のうち、基準日以前6月以内の期間において勤務した期間 (規則で定めるこれに相当する期間を含む。) がある職員には、当該基準日に係る期末手当を支給する。</p>

<p class="jorei-article">(職務復帰後における給与等の取扱い) 第8条 育児休業をした職員 (地方公務員法 (昭和25年法律第261号) 第22条の2第1項に規定する会計年度任用職員を除く。) が職務に復帰した場合において、部内の他の職員との均衡上必要があると認められるときは、その育児休業の期間を100分の100以下の換算率により換算して得た期間を引き続き勤務したものとみなして、その職務に復帰した日及びその日後における最初の職員の昇給を行う日として規則で定める日又はそのいずれかの日に、昇給の場合に準じてその者の号給を調整することができる。</p>

<p class="jorei-article">(育児短時間勤務をすることができない職員) 第9条 育児休業法第10条第1項の条例で定める職員は、次に掲げる職員とする。</p>

<p class="jorei-article">(育児短時間勤務の終了の日の翌日から起算して1年を経過しない場合に育児短時間勤務をすることができる特別の事情) 第10条 育児休業法第10条第1項ただし書の条例で定める特別の事情は、次に掲げる事情とする。</p>

<p class="jorei-article">(育児休業法第10条第1項第5号の条例で定める勤務の形態) 第11条 育児休業法第10条第1項第5号の条例で定める勤務の形態は、 職員の勤務時間、休日及び休暇に関する条例 (平成7年条例第3号。以下「勤務時間条例」という。) 第4条第1項 の規定の適用を受ける職員の次に掲げる勤務の形態 (勤務日が引き続き規則で定める日数を超えないものに限る。) とする。</p>

<p class="jorei-article">(育児短時間勤務の承認又は期間の延長の請求手続) 第12条 育児短時間勤務の承認又は期間の延長の請求は、育児短時間勤務承認請求書により、育児短時間勤務を始めようとする日又はその期間の末日の翌日の1月前までに行うものとする。</p>

<p class="jorei-article">(育児短時間勤務の承認の取消事由) 第13条 育児休業法第12条において準用する同法第5条第2項の条例で定める事由は、次に掲げる事由とする。</p>

<p class="jorei-article">(育児休業法第17条の条例で定めるやむを得ない事情) 第14条 育児休業法第17条の条例で定めるやむを得ない事情は、過員を生ずることとする。</p>

<p class="jorei-article">(育児短時間勤務の例による短時間勤務に係る職員への通知) 第15条 任命権者は、育児休業法第17条の規定による短時間勤務をさせる場合又は当該短時間勤務が終了した場合には、職員に対し、書面によりその旨を通知しなければならない。</p>

<p class="jorei-article">(育児短時間勤務職員等についての給与条例の特例) 第16条 育児短時間勤務の承認を受けた職員 (育児休業法第17条の規定による短時間勤務をすることとなった職員を含む。以下「育児短時間勤務職員等」という。) についての 給与条例 の規定の適用については、 次の表 の左欄に掲げる 給与条例 の規定中 同表 の中欄に掲げる字句は、それぞれ 同表 の右欄に掲げる字句とする。</p>

<p class="jorei-article">(育児短時間勤務職員等についての任期付職員条例の特例) 第16条の2 育児短時間勤務職員等についての 任期付職員条例 の規定の適用については、 次の表 の左欄に掲げる 任期付職員条例 の規定中 同表 の中欄に掲げる字句は、それぞれ 同表 の右欄に掲げる字句とする。</p>

<p class="jorei-article">(部分休業をすることができない職員) 第17条 育児休業法第19条第1項の条例で定める職員は、次に掲げる職員とする。</p>

<p class="jorei-article">(第1号部分休業の承認) 第18条 育児休業法第19条第2項第1号に掲げる範囲内で請求する同条第1項に規定する部分休業 (以下「第1号部分休業」という。) の承認は、30分を単位として行うものとする。</p>

<p class="jorei-article">(第2号部分休業の承認) 第18条の2 育児休業法第19条第2項第2号に掲げる範囲内で請求する同条第1項に規定する部分休業 (以下「第2号部分休業」という。) の承認は、1時間を単位として行うものとする。 ただし、 次の各号 に掲げる場合にあっては、それぞれ 当該各号 に定める時間数の 第2号 部分休業を承認することができる。</p>

<p class="jorei-article">(育児休業法第19条第2項の条例で定める1年の期間) 第18条の3 育児休業法第19条第2項の条例で定める1年の期間は、毎年4月1日から翌年3月31日までとする。</p>

<p class="jorei-article">(育児休業法第19条第2項第2号の人事院規則で定める時間を基準として条例で定める時間) 第18条の4 育児休業法第19条第2項第2号の人事院規則で定める時間を基準として条例で定める時間は、 次の各号 に掲げる職員の区分に応じ、 当該各号 に定める時間とする。</p>

<p class="jorei-article">(育児休業法第19条第3項の条例で定める特別の事情) 第18条の5 育児休業法第19条第3項の条例で定める特別の事情は、配偶者が負傷又は疾病により入院したこと、配偶者と別居したことその他の同条第2項の規定による申出時に予測することができなかった事実が生じたことにより同条第3項の規定による変更 (以下「第3項変更」という。) をしなければ同項の職員の小学校就学の始期に達するまでの子の養育に著しい支障が生じると任命権者が認める事情とする。</p>

<p class="jorei-article">(部分休業をしている職員の給与の取扱い) 第19条 職員が育児休業法第19条第1項に規定する部分休業の承認を受けて勤務しない場合には、 給与条例第11条 の規定にかかわらず、その勤務しない1時間につき、 同条例第15条 に規定する勤務1時間当たりの給与額を減額して給与を支給する。</p>

<p class="jorei-article">(部分休業の承認の取消事由) 第20条 育児休業法第19条第6項において準用する育児休業法第5条第2項の条例で定める事由は、職員が 第3項 変更をしたときとする。</p>

<p class="jorei-article">(妊娠又は出産等についての申出があった場合における措置等) 第21条 任命権者は、職員が当該任命権者に対し、当該職員又はその配偶者が妊娠し、又は出産したことその他これに準ずる事実を申し出たときは、当該職員に対して、育児休業に関する制度その他の事項を知らせるとともに、育児休業の承認の請求に係る当該職員の意向を確認するための面談その他の措置を講じなければならない。</p>

</div>` },
    { id: 52, title: '三郷市職員の定年等に関する条例', category: '人事', keywords: ['定年', '退職', '職員'], summary: '職員の定年に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000115.html',
        fullText: `<div class="jorei-header">○三郷市職員記章及び着用規程<br>昭和44年11月11日 規程第5号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規程は、本市の常勤の職員 (以下「職員」という。) に対する職員記章 (以下「記章」という。) 及び記章の着用に関し必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(記章の貸与) 第2条 記章 ( 様式第1号 ) は、職員となったとき1個を貸与する。</p>

<p class="jorei-article">(記章着用の義務) 第3条 被貸与者は、執務中貸与を受けた記章を着用しなければならない。</p>

<p class="jorei-article">(譲与の禁止) 第4条 貸与を受けた記章は、これを貸与し、又は譲与することができない。</p>

<p class="jorei-article">(再貸与及び損害賠償) 第5条 被貸与者は、貸与を受けた記章を過失又はその他の事由により紛失し、又はき損したときは、市長の承認を得て再貸与を受けることができる。</p>

<p class="jorei-article">(記章の返納) 第6条 職員が退職したときは、直ちに記章を返納しなければならない。</p>

<p class="jorei-article">(記録) 第7条 総務部人事課長は、記章貸与台帳 ( 様式第2号 ) を作成し、貸与状況を記録し、保管しなければならない。</p>

</div>` },
    { id: 53, title: '公益的法人等への職員の派遣等に関する条例', category: '人事', keywords: ['派遣', '公益法人', '職員'], summary: '公益法人等への職員派遣に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000120.html',
        fullText: `<div class="jorei-header">○三郷市職員自主研修グループ助成要綱<br>平成元年3月17日 告示第34号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱 は、 三郷市職員研修規程 (昭和56年訓令第12号) 第7条 の規定に基づき、職員の自主研修グループ (以下「研修グループ」という。) に対する助成に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(助成の対象) 第2条 助成の対象となる研修グループは、おおむね5人以上の職員をもって構成し、次に掲げる事項について研修活動を行うものとする。</p>

<p class="jorei-article">(助成の対象経費) 第3条 助成の対象となる経費は、次のとおりとする。</p>

<p class="jorei-article">(助成金の交付額) 第4条 助成金の交付額は、年間50,000円を限度とする。</p>

<p class="jorei-article">(助成の申請) 第5条 助成を受けようとする研修グループの代表者は、自主研修グループ助成金交付申請書 ( 様式第1号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(助成の決定及び通知) 第6条 市長は、助成を決定したときは、自主研修グループ助成金交付決定通知書 ( 様式第2号 ) により当該申請者に通知するものとする。</p>

<p class="jorei-article">(活動期間) 第7条 研修グループの活動は、当該年度の期間内とし、日々の活動は勤務時間外に行うものとする。</p>

<p class="jorei-article">(研修成果の報告) 第8条 助成を受けた研修グループの代表者は、当該年度末までに自主研修グループ成果報告書 ( 様式第3号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(自主研修グループ成果の公表) 第9条 市長は、 前条 の規定により報告があったときは、研修の成果を職員に公表するものとする。</p>

<p class="jorei-article">(助成金の返還) 第10条 市長は、研修グループが 次の各号 のいずれかに該当するときは、既に交付した助成金の全部又は一部を返還させることができる。</p>

<p class="jorei-article">(その他) 第11条 この要綱 に定めるもののほか、 この要綱 の実施に関し必要な事項は、別に定める。</p>

</div>` },
    { id: 54, title: '職員の懲戒の手続及び効果に関する条例', category: '人事', keywords: ['懲戒', '処分', '職員'], summary: '職員の懲戒処分に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000124.html',
        fullText: `<div class="jorei-header">○三郷市職員公務災害等見舞金支給条例<br>昭和49年6月22日 条例第24号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例は、職員の公務上の災害 (負傷、疾病、障害又は死亡をいう。以下同じ。) 又は通勤による災害に対する三郷市職員公務災害等見舞金 (以下「見舞金」という。) の支給に関して必要な事項を定め、もって職員及びその遺族の生活の安定と福祉の向上に寄与することを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この条例において「職員」とは、次に掲げる者をいう。</p>

<p class="jorei-article">(見舞金の種類) 第3条 見舞金の種類は、次に掲げるとおりとする。</p>

<p class="jorei-article">(死亡見舞金) 第4条 死亡見舞金は、職員が公務上死亡し、又は通勤により死亡した場合に、当該職員の遺族に支給する。</p>

<p class="jorei-article">(障害見舞金) 第5条 障害見舞金は、職員が公務上負傷し、若しくは疾病にかかり、又は通勤により負傷し、若しくは疾病にかかり、治ったとき、補償法第29条第2項に規定する程度の障害が存する場合において、当該職員に対して支給する。</p>

<p class="jorei-article">(療養見舞金) 第6条 療養見舞金は、職員が公務上負傷し、若しくは疾病にかかり、又は通勤により負傷し、若しくは疾病にかかり、病院、診療所又は柔道整復師等 (以下「療養機関等」という。) において療養を受けた場合に、当該職員に対して支給する。</p>

<p class="jorei-article">(認定) 第7条 死亡、負傷若しくは疾病が公務上又は通勤によるものであるかどうかの認定及び障害の程度の認定は、補償法、労災保険法、 補償条例 、消防団員補償条例又は 学校医等補償条例 の各相当規定により行われる認定に基づいて行うものとする。 ただし、市長が特に認めた場合は、この限りでない。</p>

<p class="jorei-article">(見舞金の支給) 第8条 見舞金の支給は、 前条 の規定により認定した場合には、支給を受けるべき職員又はその遺族の請求を待たずに行うものとする。</p>

<p class="jorei-article">(見舞金の調整) 第9条 見舞金は、これを併給しない。</p>

<p class="jorei-article">(見舞金の制限) 第10条 見舞金の支給制限については、補償法第30条及び第39条の規定を準用する。</p>

<p class="jorei-article">(他の条例との調整) 第11条 三郷市消防賞じゅつ金及び殉職者特別賞じゅつ金条例 (昭和61年条例第4号。以下「賞じゅつ金条例」という。) 第4条 の規定に該当する場合及び 同条例第2条 に該当し授与されることとなる殉職者賞じゅつ金の額が 第4条第2項 に規定する死亡見舞金の額以上の場合又は授与されることとなる障害者賞じゅつ金の額が、その授与されることとなった障害の等級に対応する 別表第1 中の障害の等級 (以下「対応障害等級」という。) に規定する障害見舞金の額以上の場合にあっては、 第4条第1項 、 第5条第1項 及び 第6条第1項 の規定にかかわらず、見舞金は、支給することはできない。</p>

<p class="jorei-article">(委任) 第12条 この条例に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 55, title: '職員の服務の宣誓に関する条例', category: '人事', keywords: ['服務', '宣誓', '職員'], summary: '職員の服務宣誓に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000126.html',
        fullText: `<div class="jorei-header">○職員の服務の宣誓に関する条例<br>昭和31年10月30日 条例第9号</div>
<div class="jorei-article"><span class="article-title">（目的）</span><br>第1条 この条例は、地方公務員法（昭和25年法律第261号）第31条の規定に基づき、職員の服務の宣誓について定めることを目的とする。</div>
<div class="jorei-article"><span class="article-title">（職員の服務の宣誓）</span><br>第2条 新たに職員となった者は、任命権者又は任命権者の定める上級の公務員の面前において、別記様式による宣誓書に署名してからでなければ、その職務を行ってはならない。</div>
<div class="jorei-article"><span class="article-title">（委任）</span><br>第3条 この条例に定めるもののほか、職員の服務の宣誓に関し必要な事項は、任命権者が定める。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 56, title: '職務に専念する義務の特例に関する条例', category: '人事', keywords: ['職務専念義務', '特例', '職員'], summary: '職務専念義務の特例に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000127.html',
        fullText: `<div class="jorei-header">○職務に専念する義務の特例に関する条例<br>昭和31年10月30日 条例第10号</div>
<div class="jorei-article"><span class="article-title">（目的）</span><br>第1条 この条例は、地方公務員法（昭和25年法律第261号）第35条の規定に基づき、職員が職務に専念する義務の特例について定めることを目的とする。</div>
<div class="jorei-article"><span class="article-title">（職務に専念する義務の免除）</span><br>第2条 職員は、次の各号のいずれかに該当する場合においては、あらかじめ任命権者の承認を得て、その職務に専念する義務を免除されることができる。<br>（1）研修を受ける場合<br>（2）厚生に関する計画の実施に参加する場合<br>（3）前2号に掲げる場合を除くほか、市長が定める場合</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 57, title: '職員の勤務時間、休日及び休暇に関する条例', category: '人事', keywords: ['勤務時間', '休日', '休暇', '働き方'], summary: '職員の勤務条件に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000130.html',
        fullText: `<div class="jorei-header">○三郷市職員被服等貸与規程<br>平成11年2月18日 訓令第2号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規程は、職員の業務の安全と業務能率の向上を図るため、被服等の貸与に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(職員の範囲) 第2条 この規程において「職員」とは、市長、議会、選挙管理委員会、監査委員、農業委員会及び教育委員会の事務部局に勤務する職員をいう。</p>

<p>(貸与品の種類、期間等) 第3条 貸与する被服等の被貸与者、貸与品、数量及び貸与期間は、 別表 に定めるところによる。 ただし、特別の事情があるときは、被服等の種類若しくは数量を減少し、又は貸与期間を延長することができる。</p>

<p class="jorei-article">(着用期間) 第4条 貸与品のうち着用区分のあるものの着用期間は、次に掲げるところによる。 ただし、気候その他の状況により、この期間を伸縮することができる。</p>

<p class="jorei-article">(着用等の義務) 第5条 被貸与者は、執務中又は作業中貸与を受けた被服等を着用し、常に適切な注意をもって使用し、又は保管しなければならない。</p>

<p class="jorei-article">(再貸与及び損害賠償) 第6条 被貸与者は、貸与を受けた被服等を滅失したとき又はその被服等がき損により使用に耐えなくなったときは、市長の承認を得て再貸与を受けることができる。</p>

<p class="jorei-article">(被貸与者の異動等による貸与品の取扱い) 第7条 被貸与者が異動等によってその貸与品の着用の必要がなくなったときは、その貸与品が貸与期間満了前のものに限り、直ちに返納しなければならない。 ただし、天災地変その他不可抗力によって貸与品を返納することができないときは、この限りでない。</p>

<p class="jorei-article">(貸与品の無償交付) 第8条 貸与品の貸与期間が満了したときは、その貸与品を被貸与者に無償交付する。</p>

<p class="jorei-article">(貸与品の記録) 第9条 所属長は、被服貸与台帳 ( 別記様式 ) を作成し、貸与品について貸与状況を記録し保管しなければならない。</p>

<p class="jorei-article">(雑則) 第10条 この規程に定めるもののほか、必要な事項は、市長が定める。</p>

</div>` },
    { id: 58, title: '職員の育児休業等に関する条例', category: '人事', keywords: ['育児休業', '育休', 'ワークライフバランス'], summary: '職員の育児休業に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000136.html' },
    { id: 59, title: '議会の議員その他非常勤の職員の公務災害補償等に関する条例', category: '人事', keywords: ['公務災害', '補償', '非常勤'], summary: '非常勤職員の公務災害補償に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000150.html',
        fullText: `<div class="jorei-header">○技能労務職員の給与の種類及び基準に関する条例<br>昭和48年3月24日 条例第6号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例は、地方公営企業等の労働関係に関する法律 (昭和27年法律第289号) 附則第5項において準用する地方公営企業法 (昭和27年法律第292号) 第38条第4項の規定に基づき、地方公務員法 (昭和25年法律第261号) 第57条に規定する単純な労務に雇用される一般職に属する職員 (以下「技能労務職員」という。) の給与の種類及び基準に関する事項を定めることを目的とする。</p>

<p class="jorei-article">(適用職員の範囲) 第2条 この条例において「技能労務職員」とは、一般職に属する職員で 次の各号 のいずれかに掲げる者の行う労務を行うもののうち、技術者、監督者及び行政事務を担当する者以外の者をいう。</p>

<p class="jorei-article">(給与の種類及び基準) 第3条 技能労務職員の給与は、給料、扶養手当、地域手当、住居手当、通勤手当、特殊勤務手当、時間外勤務手当、休日勤務手当、夜間勤務手当、期末手当及び勤勉手当とする。</p>

<p class="jorei-article">(給与の減額) 第4条 技能労務職員が勤務しないときは、その勤務しないことにつき任命権者の承認があった場合 (労働組合の業務又は活動に従事するため組合休暇として許可を受けた場合を除く。) を除くほか、その勤務しない1時間につき、勤務1時間当たりの給与額を減額して給与を支給する。</p>

<p class="jorei-article">(非常勤職員の給与) 第5条 非常勤の技能労務職員 (地方公務員法第28条の5第1項の規定により採用された職員を除く。) については、他の技能労務職員の給与との権衡を考慮し、予算の範囲内で給与を支給する。</p>

<p class="jorei-article">(会計年度任用職員についての適用除外) 第6条 第3条第1項 の扶養手当、住居手当、特殊勤務手当及び夜間勤務手当は、技能労務職員で地方公務員法第22条の2第1項の規定により採用された職員には適用しない。</p>

<p class="jorei-article">(定年前再任用短時間勤務職員についての適用除外) 第7条 第3条第1項 の扶養手当は、技能労務職員で地方公務員法第22条の4第1項又は第22条の5第1項の規定により採用された職員には適用しない。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、平成14年4月1日から施行する。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、令和5年4月1日から施行する。</p>

<p class="jorei-article">(技能労務職員の給与の種類及び基準に関する条例の一部改正に伴う経過措置) 第23条 技能労務職員の給与の種類及び基準に関する条例第3条第1項の扶養手当は暫定再任用職員には適用しない。</p>

<p class="jorei-article">(施行期日等) 第1条 この条例は、次の各号に掲げる区分に応じ、当該各号に定める日から施行する。</p>

</div>` },
    { id: 60, title: '三郷市職員公務災害等見舞金支給条例', category: '人事', keywords: ['公務災害', '見舞金', '職員'], summary: '職員の公務災害見舞金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000156.html',
        fullText: `<div class="jorei-header">○通勤手当の支給に関する規則<br>昭和39年3月28日 規則第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 職員の給与に関する条例 (昭和31年条例第23号。以下「条例」という。) 第9条の4 の規定による通勤手当の支給については、別に定める場合を除き、この規則に定めるところによる。</p>

<p class="jorei-article">(用語の定義等) 第2条 この規則において、 次の各号 に掲げる用語の定義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(届出) 第3条 職員は新たに 条例第9条の4第1項 の職員たる要件を具備するに至った場合には、別に定めるところにより、その通勤の実情を速やかに任命権者に届け出なければならない。 同項 の職員が 次の各号 のいずれかに該当する場合についても同様とする。</p>

<p class="jorei-article">(確認及び決定) 第3条の2 任命権者は、職員から 前条 の規定による届出があったときは、その届出に係る事実を通勤用定期乗車券 (これに準ずるものを含む。以下「定期券」という。) の提示又は 第9条の4第1号 若しくは 第2号 の職員たる要件を具備していることを証明する書類の提出を求める等の方法により確認し、その者が 条例第9条の4第1項 の職員たる要件を具備するときは、その者に支給すべき通勤手当の額を決定し、又は改定しなければならない。</p>

<p class="jorei-article">(支給範囲の特例) 第4条 条例第9条の4第1項各号 に規定する「通勤することが著しく困難である職員」は、地方公務員災害補償法施行規則 (昭和42年自治省令第27号) 別表第3に定める程度の障害のため歩行することが著しく困難な職員で、交通機関等を利用し、又は自動車等を使用しなければ通勤することが著しく困難であると任命権者が認めるものとする。</p>

<p class="jorei-article">(普通交通機関等に係る通勤手当の額の算出の基準) 第5条 普通交通機関等 ( 条例第9条の4第3項 に規定する新幹線鉄道等 (以下「新幹線鉄道等」という。) 以外の交通機関等をいう。以下同じ。) に係る通勤手当の額は、運賃、時間、距離等の事情に照らし、最も経済的かつ合理的と認められる通常の通勤の経路及び方法により算出するものとする。</p>

<p class="jorei-article">第6条 条例第9条の4第2項第1号 に規定する運賃等相当額 ( 第6条の3第2号 において「運賃等相当額」という。) は、 次の各号 に掲げる普通交通機関等の区分に応じ、 当該各号 に定める額 (その額に1円未満の端数があるときは、その端数を切り捨てた額) とする。</p>

<p class="jorei-article">(定年前再任用短時間勤務職員等に係る通勤手当の減額) 第6条の2 条例第9条の4第2項第2号 ( 職員の育児休業等に関する条例 (平成4年条例第3号) 第16条 又は 一般職の任期付職員の採用等に関する条例 (平成29年条例第15号) 第10条第4項 の規定により読み替えて適用する場合を含む。 次項 において同じ。) の規則で定める職員は、1月当たりの平均通勤所要回数が21回に満たない職員とし、 同号 の規則で定める割合は、21回から当該職員の1月当たりの平均通勤所要回数を減じて得た回数を21で除して得た率 (小数点以下2位未満は、四捨五入とする。) とする。</p>

<p class="jorei-article">(併用者の区分及び支給額) 第6条の3 条例第9条の4第2項第3号 に規定する 同条第1項第3号 に掲げる職員の区分及びこれに対応する 同条第2項第3号 に規定する通勤手当の額は、 次の各号 に掲げるとおりとする。</p>

<p class="jorei-article">(交通の用具) 第7条 条例第9条の4第1項第2号 に規定する交通の用具は、自動車その他の原動機付の交通用具及び自転車とする。 ただし、市の所有に属するものを除く。</p>

<p class="jorei-article">(通勤の実情に変更を生ずる職員) 第8条 条例第9条の4第3項 の規則で定める職員は、通勤の実情に変更を生ずる職員で、新幹線鉄道等を利用しないで通勤するものとした場合における通勤距離が60キロメートル以上若しくは通勤時間が90分以上であるもの (新幹線鉄道等の利用により通勤事情の改善が認められるものに限る。) 又は交通事情等に照らして通勤が困難であると市長が認めるものとする。</p>

<p class="jorei-article">(異動等の直前の住居に相当する住居) 第8条の2 条例第9条の4第3項 の規則で定める住居は、公署を異にする異動又は在勤する公署の移転の日以後に転居する場合における次に掲げる住居とする。</p>

<p class="jorei-article">(新幹線鉄道等の利用に係る特別料金等に係る通勤手当の額の算出の基準) 第9条 新幹線鉄道等の利用に係る特別料金等に係る通勤手当の額は、運賃等、時間、距離等の事情に照らし最も経済的かつ合理的と認められる新幹線鉄道等を利用する場合における通勤の経路及び方法により算出するものとする。</p>

<p class="jorei-article">(給料表の適用の直前の住居に相当する住居) 第9条の2 条例第9条の4第4項 の規則で定める住居は、給料表の適用を受ける職員となった日以後に転居する場合における次に掲げる住居とする。</p>

<p class="jorei-article">(権衡職員等の範囲) 第9条の3 条例第9条の4第4項 の任用の事情等を考慮して規則で定める職員は、新たに給料表の適用を受ける職員となった者のうち、当該適用の直前の住居と所在する地域を異にする公署に在勤することとなった者で、新幹線鉄道等を利用しないで通勤するものとした場合における通勤距離が60キロメートル以上若しくは通勤時間が90分以上であるもの (新幹線鉄道等の利用により通勤事情の改善が認められるものに限る。) 又は交通事情等に照らして通勤が困難であると市長が認めるものとする。</p>

<p class="jorei-article">第9条の4 条例第9条の4第4項 のその他前項の規定による通勤手当を支給される職員との権衡上必要があると認められるものとして規則で定める職員は、次に掲げる職員 (新幹線鉄道等の利用により通勤事情の改善が認められるものに限る。) とする。</p>

<p class="jorei-article">(支給日等) 第9条の5 通勤手当は、支給単位期間 ( 第3項 に規定する通勤手当に係るものを除く。) 又は 同項 に定める期間 (以下この条、 第10条の2第2項第2号 及び 第11条 において「支給単位期間等」という。) に係る最初の月の 職員の給与の支給に関する規則 (昭和50年規則第8号) 第2条 に規定する給料の支給日 (以下この条において「支給日」という。) に支給する。 ただし、支給日までに 第3条 の規定による届出に係る事実が確認できない等のため、支給日に支給することができないときは、支給日後に支給することができる。</p>

<p class="jorei-article">(支給の始期及び終期) 第10条 通勤手当の支給は、職員に新たに 条例第9条の4第1項 の職員たる要件が具備されるに至った場合においては、その日の属する月の翌月 (その日が月の初日であるときは、その日の属する月) から開始し、通勤手当を支給されている職員が離職し、又は死亡した場合においてはそれぞれその者が離職し、又は死亡した日、通勤手当を支給されている職員が 同項 の職員たる要件を欠くに至った場合においてはその事実の生じた日の属する月 (これらの日が月の初日であるときは、その日の属する月の前月) をもって終わる。 ただし、通勤手当の支給の開始については、 第3条 の規定による届出が、これに係る事実の生じた日から15日を経過した後にされたときは、その届出を受理した日の属する月の翌月 (その日が月の初日であるときは、その日の属する月) から行うものとする。</p>

<p class="jorei-article">(返納の事由及び額等) 第10条の2 条例第9条の4第7項 の規則で定める事由は、通勤手当 (1月の支給単位期間に係るものを除く。) を支給される職員について生じた 次の各号 のいずれかに掲げる事由とする。</p>

<p class="jorei-article">(支給単位期間) 第10条の3 条例第9条の4第8項 に規定する規則で定める期間は、 次の各号 に掲げる普通交通機関等又は新幹線鉄道等の区分に応じ、 当該各号 に定める期間とする。</p>

<p class="jorei-article">第10条の4 支給単位期間は、 第10条第1項 の規定により通勤手当の支給が開始される月又は 同条第2項 の規定により通勤手当の額が改定される月から開始する。</p>

<p class="jorei-article">(支給しない場合) 第11条 条例第9条の4第1項 の職員が出張、休暇、欠勤その他の事由により、支給単位期間等に係る最初の月の初日から末日までの期間の全日数にわたって通勤しないこととなるときは、当該支給単位期間等に係る通勤手当は支給しない。</p>

<p class="jorei-article">(事後の確認) 第12条 任命権者は、現に通勤手当の支給を受けている職員について、その者が 条例第9条の4第1項 の職員たる要件を具備するかどうか及び通勤手当の額が適正であるかどうかを当該職員に定期券等の提示を求め、又は通勤の実情を実地に調査する等の方法により、随時、確認するものとする。</p>

<p class="jorei-article">(雑則) 第13条 この規則に定めるもののほか、通勤手当に関し必要な事項は、市長が別に定める。</p>

<p class="jorei-article">(施行期日) 第1条 この規則は、令和5年4月1日から施行する。</p>

<p class="jorei-article">(初任給調整手当に関する規則等の廃止) 第2条 次に掲げる規則は、廃止する。</p>

<p class="jorei-article">(雑則) 第12条 附則第3条から前条までに規定するもののほか、この規則の施行に関し必要な経過措置は、市長が定める。</p>

</div>` },
    { id: 61, title: '職員団体の登録に関する条例', category: '人事', keywords: ['職員団体', '労働組合', '登録'], summary: '職員団体の登録に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000167.html',
        fullText: `<div class="jorei-header">○財政事情の作成及び公表に関する条例<br>昭和39年12月24日 条例第25号</div>
<div class="jorei-body">
<p class="jorei-article">第1条 地方自治法 (昭和22年法律第67号) 第243条の3第1項の規定により市長の作成する財政に関する所要事項を説明する文書 (以下これを「財政事情」という。) の作成及び公表に関しては、 この条例 の定めるところによる。</p>

<p class="jorei-article">第2条 財政事情の公表は、毎年7月1日及び12月1日にこれを行うものとする。</p>

<p class="jorei-article">第3条 前条第1項 の規定により7月1日に公表する財政事情においては、前年10月1日から3月31日までの期間における次に掲げる事項を記載するものとする。</p>

<p class="jorei-article">第4条 この条例 に定めるもののほか、財政事情の作成及び公表に関し必要な事項は、市長がこれを定める。</p>

</div>` },

    // ===== 第5編 給与 =====
    { id: 62, title: '議会の議員の議員報酬及び費用弁償等に関する条例', category: '給与', keywords: ['議員報酬', '報酬', '議会', '給与', '議員'], summary: '議員の報酬に関する条例。議長月額49万円、副議長月額45万円、議員月額43万円。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000138.html',
        fullText: `<div class="jorei-header">○議会の議員の議員報酬及び費用弁償等に関する条例<br>昭和44年3月31日 条例第3号</div>
<div class="jorei-body">
<p class="jorei-article"><span class="article-num">（目的）</span><br>
<span class="article-num">第1条</span>　この条例は、地方自治法（昭和22年法律第67号）第203条の規定に基づき、議会の議長、副議長、常任委員長、議会運営委員長及び議員（以下「議長等」という。）の議員報酬及び費用弁償等に関する事項を定めることを目的とする。</p>

<p class="jorei-article"><span class="article-num">（議員報酬）</span><br>
<span class="article-num">第2条</span>　議長等の議員報酬は、次のとおりとする。<br>
（1）議長　月額　<strong>490,000円</strong><br>
（2）副議長　月額　<strong>450,000円</strong><br>
（3）常任委員長及び議会運営委員長　月額　430,000円<br>
（4）議員　月額　<strong>430,000円</strong></p>

<p class="jorei-article"><span class="article-num">第3条</span>　議長及び副議長には選挙されたその日から、常任委員長、議会運営委員長及び議員には職に就いたその日からそれぞれ議員報酬を支給する。<br>
２　議長等がその職を離れたときはその日まで、死亡したときはその日の属する月まで議員報酬を支給する。<br>
３　前2項の規定により議員報酬を支給する場合であって、月の初日から支給するとき以外のとき、又は月の末日まで支給するとき以外のときは、その議員報酬の額はその月の現日数を基礎として日割によって計算する。</p>

<p class="jorei-article"><span class="article-num">第4条</span>　議員報酬の支給日は、毎月その末日（その日が日曜日、土曜日又は国民の祝日に関する法律に規定する休日に当たるときは、その日前において、その日に最も近い日曜日、土曜日又は休日でない日）とする。ただし、12月については、市長が別に定める日とする。</p>

<p class="jorei-article"><span class="article-num">（期末手当）</span><br>
<span class="article-num">第5条</span>　議長等で、6月1日及び12月1日（以下これらの日を「基準日」という。）に在職する者に、期末手当を支給する。<br>
２　期末手当の額は、それぞれの基準日現在において議長等が受けるべき議員報酬の月額及びその月額に100分の20を乗じて得た額の合計額に、6月に支給する場合においては100分の225、12月に支給する場合においては100分の225を乗じて得た額とする。</p>

<p class="jorei-article"><span class="article-num">（費用弁償）</span><br>
<span class="article-num">第6条</span>　議長等が招集に応じ、若しくは委員会に出席するため旅行したとき、又は公務のため旅行したときは、費用弁償として旅費を支給する。<br>
２　旅費の額は、別表第1及び別表第2のとおりとする。</p>
</div>` },
    { id: 63, title: '特別職の職員で非常勤のものの報酬及び費用弁償に関する条例', category: '給与', keywords: ['報酬', '非常勤', '特別職'], summary: '非常勤特別職の報酬に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000172.html',
        fullText: `<div class="jorei-header">○三郷市税条例施行規則<br>昭和54年7月23日 規則第17号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市税条例 (昭和32年条例第4号。以下「条例」という。) 第6条 の規定に基づき、 条例 の施行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(随時に賦課する市税の納期限) 第2条 条例第7条 の規定によって賦課徴収する市税の納期限は、次に掲げるところによる。 ただし、市長がこれによりがたいと認めるときは、この納期限によらないことができる。</p>

<p class="jorei-article">(災害等による期限の延長) 第3条 条例第18条の2第1項 に規定する災害その他やむを得ない理由は、次に掲げるものをいう。</p>

<p class="jorei-article">(納税証明書の枚数の計算) 第4条 条例第18条の4第3項 に規定する納税証明書の枚数の計算については、1税目・1年度の証明事項をもって納税証明書1枚と計算する。</p>

<p class="jorei-article">(固定資産課税台帳の閲覧の回数の計算) 第5条 条例第73条の2第2項 の規定により規則で定める閲覧の回数の計算は、一納税義務者につき、年度ごとに1回とする。</p>

<p class="jorei-article">(固定資産課税台帳に記載されている事項の証明書の枚数の計算) 第6条 条例第73条の3第2項 の規定により規則で定める証明書の枚数の計算については、次に定めるところによる。</p>

<p class="jorei-article">(市民税の減免) 第7条 条例第51条第1項第2号 及び 第5号 の規定によって減免する市民税 (地方税法 (昭和25年法律第226号。以下「法」という。) 第328条の規定により課する所得割を除く。) は、次に定めるところによる。</p>

<p class="jorei-article">(固定資産税及び都市計画税の減免) 第8条 条例第71条第1項第2号 又は 第3号 の規定により減免する固定資産税は、次に定めるところによる。</p>

<p class="jorei-article">(税額控除対象となる寄附金の要件) 第9条 条例第34条の7第1項第1号ウ に規定する規則で定める寄附金は、 次の各号 のいずれかに該当する法人又は団体のうち、市長が指定したものに対して行う寄附金をいう。</p>

<p class="jorei-article">(指定の手続) 第10条 前条 の指定を受けようとする法人又は団体は、寄附金税額控除法人等指定申請書に次に掲げる書類を添付して、当該指定を受けようとする年の前年の11月1日からその年の10月31日までの間に市長に提出しなければならない。 ただし、市長が必要がないと認めるときは、当該書類の一部について添付を省略することができる。</p>

<p class="jorei-article">(指定の効力) 第11条 第9条 の指定は、当該指定の日の属する年の1月1日にさかのぼってその効力を生ずる。</p>

<p class="jorei-article">(指定法人に係る変更等の届出) 第12条 第9条 の指定をされた法人又は団体 (以下「指定法人」という。) は、次のいずれかに該当するときは、速やかにその事実を証する書類を添付して、その旨を市長に届け出なければならない。</p>

<p class="jorei-article">(指定法人に係る報告等) 第13条 指定法人は、毎事業年度終了後4月以内に、寄附金税額控除指定法人等報告書に当該事業年度の事業報告書等を添付して市長に提出しなければならない。</p>

<p class="jorei-article">(指定の失効及び取消し) 第14条 第9条 の指定は、指定法人が募集する寄附金が財務大臣指定等寄附金に該当しなくなったとき、又は 次項 の規定により取り消されたときは、その効力を失う。</p>

<p class="jorei-article">(様式) 第15条 条例 施行のために必要な 様式 の名称は、 別表 に掲げるところによる。</p>

</div>` },
    { id: 64, title: '三郷市会計年度任用職員の報酬等に関する条例', category: '給与', keywords: ['会計年度任用職員', '報酬', '非正規'], summary: '会計年度任用職員の報酬に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000174.html',
        fullText: `<div class="jorei-header">○三郷市固定資産税等過誤納返還金支払要綱<br>平成6年3月28日 告示第26号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱は、固定資産税、都市計画税及び国民健康保険税 (資産割に係る部分に限る。) の過誤納金のうち、地方税法 (昭和25年法律第226号。以下「法」という。) の規定により還付できないもの (以下「還付不能金」という。) について、過誤納返還金 (以下「返還金」という。) を支払うことにより、納税者の被った不利益を補填し、もって税負担の公平の確保と市政に対する信頼を確保することを目的とする。</p>

<p class="jorei-article">(支払対象者) 第2条 返還金の支払を受けることができる者 (以下「支払対象者」という。) は、還付不能金のあることを市長が確認した納税者とする。 ただし、当該納税者が死亡している場合は、その相続人 (相続人が複数あるときは、相続人の代表者) とする。</p>

<p class="jorei-article">(返還金の対象年度等) 第3条 返還金の対象となる年度は、支払を決定する日の属する年度に保存されている固定資産税・都市計画税課税台帳及び国民健康保険税課税台帳 (以下「課税台帳」という。) のうち最も古い年度分までを限度とする。 ただし、納税者又はその相続人が所有する納税通知書、課税明細書、領収書、その他の課税及び納税に関する資料 (以下「資料等」という。) により、当該物件に係る納付の事実が確認でき、かつ、還付不能金が算定できる場合は、課税台帳が保存されていない年度においても返還金支払の対象とすることができる。</p>

<p class="jorei-article">(返還金の額等) 第3条の2 返還金は、還付不能金に相当する額 (以下「還付不能金相当額」という。) 及びその利息に相当する額 (以下「還付加算金相当額」という。) の合計額とする。</p>

<p class="jorei-article">(返還金の支払) 第4条 市長は、返還金の支払を決定したときは、三郷市固定資産税・都市計画税及び国民健康保険税過誤納返還金決定通知書 ( 様式第1号 及び 様式第2号 ) により支払対象者に通知するものとする。</p>

<p class="jorei-article">(返還金の返還) 第5条 市長は、誤りその他不正な手段により返還金の支払を受けた者があるときは、その者から当該返還金の全部又は一部を返還させることができる。</p>

<p class="jorei-article">(その他) 第6条 この要綱の施行に関し必要な事項は、別に定める。</p>

</div>` },
    { id: 65, title: '証人等の実費弁償に関する条例', category: '給与', keywords: ['証人', '実費弁償', '費用'], summary: '証人等の実費弁償に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000176.html',
        fullText: `<div class="jorei-header">○三郷市国民健康保険税条例<br>昭和32年6月1日 条例第6号</div>
<div class="jorei-body">
<p class="jorei-article">(納税義務者) 第1条 国民健康保険税は、国民健康保険の被保険者である世帯主に対し課する。</p>

<p class="jorei-article">(課税額) 第2条 前条 の者に対して課する国民健康保険税の課税額は、世帯主及びその世帯に属する国民健康保険の被保険者につき算定した次に掲げる額の合算額とする。</p>

<p class="jorei-article">(国民健康保険の被保険者に係る基礎課税額の所得割額) 第3条 前条第2項 の所得割額は、賦課期日の属する年の前年の所得に係る地方税法 (昭和25年法律第226号。以下「法」という。) 第314条の2第1項に規定する総所得金額及び山林所得金額の合計額から同条第2項の規定による控除をした後の総所得金額及び山林所得金額の合計額 (以下「基礎控除後の総所得金額等」という。) に100分の7.2を乗じて算定する。</p>

<p class="jorei-article">(国民健康保険の被保険者に係る基礎課税額の被保険者均等割額) 第5条 第2条第2項 の被保険者均等割額は、被保険者1人について32,800円とする。</p>

<p class="jorei-article">(国民健康保険の被保険者に係る後期高齢者支援金等課税額の所得割額) 第5条の3 第2条第3項 の所得割額は、基礎控除後の総所得金額等に100分の2.5を乗じて算定する。</p>

<p class="jorei-article">(国民健康保険の被保険者に係る後期高齢者支援金等課税額の被保険者均等割額) 第5条の4 第2条第3項 の被保険者均等割額は、被保険者1人について11,600円とする。</p>

<p class="jorei-article">(介護納付金課税被保険者に係る所得割額) 第6条 第2条第4項 の所得割額は、介護納付金課税被保険者に係る基礎控除後の総所得金額等に100分の2.2を乗じて算定する。</p>

<p class="jorei-article">(介護納付金課税被保険者に係る被保険者均等割額) 第7条 第2条第4項 の被保険者均等割額は、介護納付金課税被保険者1人について13,700円とする。</p>

<p class="jorei-article">(賦課期日) 第8条 国民健康保険税の賦課期日は、4月1日とする。</p>

<p class="jorei-article">(徴収の方法) 第9条 国民健康保険税は、 第12条 、 第16条 及び 第17条 の規定によって特別徴収の方法による場合を除くほか、普通徴収の方法によって徴収する。</p>

<p class="jorei-article">(納期及び端数処理) 第10条 普通徴収によって徴収する国民健康保険税の納期は、次のとおりとする。</p>

<p>(納税義務の発生、消滅等に伴う賦課) 第11条 国民健康保険税の賦課期日後に納税義務が発生した者には、その発生した日の属する月から、月割をもって算定した 第2条第1項 の額 ( 第19条 の規定による減額が行われた場合には、その減額後の国民健康保険税の額とする。以下本条において同じ。) を課する。</p>

<p class="jorei-article">(特別徴収) 第12条 当該年度の初日において、国民健康保険税の納税義務者が老齢等年金給付 (地方税法施行令 (昭和25年政令第245号) 第56条の89の2第1項及び第2項に規定する老齢等年金給付をいう。以下同じ。) の支払を受けている年齢65歳以上の国民健康保険の被保険者である世帯主 (災害その他の特別の事情があることにより、特別徴収の方法によって国民健康保険税を徴収することが著しく困難であると認められるものその他同条に規定するものを除く。以下「特別徴収対象被保険者」という。) である場合においては、当該世帯主に対して課する国民健康保険税を特別徴収の方法によって徴収する。</p>

<p class="jorei-article">(特別徴収義務者の指定等) 第13条 前条 の規定による特別徴収に係る国民健康保険税の特別徴収義務者は、当該特別徴収対象被保険者に係る老齢等年金給付の支払をする者 (以下「年金保険者」という。) とする。</p>

<p class="jorei-article">(特別徴収税額の納入の義務等) 第14条 年金保険者は、支払回数割保険税額を徴収した日の属する月の翌月の10日までに、その徴収した支払回数割保険税額を納入しなければならない。</p>

<p class="jorei-article">(被保険者資格喪失等の場合の通知等) 第15条 年金保険者が市長から法第718条の5第1項の規定による通知を受けた場合においては、当該通知を受けた日以降、支払回数割保険税額を徴収して納入する義務を負わない。 この場合において、年金保険者は、直ちに当該通知に係る特別徴収対象被保険者に係る国民健康保険税徴収の実績その他必要な事項を当該通知をした市長に通知しなければならない。</p>

<p class="jorei-article">(既に特別徴収対象被保険者であった者に係る仮徴収) 第16条 当該年度の初日の属する年の前年の10月1日からその翌年の3月31日までの間における特別徴収対象年金給付の支払の際、支払回数割保険税額を徴収されていた特別徴収対象被保険者について、当該支払回数割保険税額の徴収に係る特別徴収対象年金給付が当該年度の初日からその日の属する年の9月30日までの間において支払われる場合においては、その支払に係る国民健康保険税額として、地方税法施行規則 (昭和29年総理府令第23号) 第24条の36に規定する額を、特別徴収の方法によって徴収する。</p>

<p class="jorei-article">(新たに特別徴収対象被保険者となった者に係る仮徴収) 第17条 次の各号 に掲げる者について、それぞれ 当該各号 に定める期間において特別徴収対象年金給付が支払われる場合においては、その支払に係る国民健康保険税額として、法第718条の8第2項に規定する支払回数割保険税額の見込額 (当該額によることが適当でないと認められる特別な事情がある場合においては、所得の状況その他の事情を勘案して市長が定める額とする。) を、特別徴収の方法によって徴収するものとする。</p>

<p class="jorei-article">(普通徴収税額への繰入) 第18条 特別徴収対象被保険者が特別徴収対象年金給付の支払を受けなくなったこと等により国民健康保険税を特別徴収の方法によって徴収されないこととなった場合においては、特別徴収の方法によって徴収されないこととなった額に相当する国民健康保険税額を、その特別徴収の方法によって徴収されないこととなった日以後において到来する 第10条第1項 の納期がある場合においてはそれぞれの納期において、その日以後に到来する 同項 の納期がない場合においては直ちに、普通徴収の方法によって徴収するものとする。</p>

<p class="jorei-article">(国民健康保険税の減額) 第19条 次の各号 のいずれかに掲げる国民健康保険税の納税義務者に対して課する国民健康保険税の額は、 第2条第2項本文 の基礎課税額からアに掲げる額を減額して得た額 (当該減額して得た額が65万円を超える場合には、65万円) 、 同条第3項本文 の後期高齢者支援金等課税額からイに掲げる額を減額して得た額 (当該減額して得た額が24万円を超える場合には、24万円) 及び 同条第4項本文 の介護納付金課税額からウに掲げる額を減額して得た額 (当該減額して得た額が17万円を超える場合には、17万円) の合算額とする。</p>

<p class="jorei-article">(特例対象被保険者等に係る国民健康保険税の課税の特例) 第19条の2 国民健康保険税の納税義務者である世帯主又はその世帯に属する国民健康保険の被保険者若しくは特定同一世帯所属者が特例対象被保険者等 (法第703条の5の2第2項に規定する特例対象被保険者等をいう。 第20条の2第1項 において同じ。) である場合における 第3条 及び 前条第1項 の規定の適用については、 第3条第1項 中「規定する総所得金額」とあるのは「規定する総所得金額 (第19条の2に規定する特例対象被保険者等の総所得金額に給与所得が含まれている場合においては、当該給与所得については、所得税法第28条第2項の規定によって計算した金額の100分の30に相当する金額によるものとする。次項において同じ。) 」と、「同条第2項」とあるのは「法第314条の2第2項」と、 前条第1項第1号 中「総所得金額及び」とあるのは「総所得金額 (次条に規定する特例対象被保険者等の総所得金額に給与所得が含まれている場合においては、当該給与所得については、所得税法第28条第2項の規定によって計算した金額の100分の30に相当する金額によるものとする。次号において同じ。) 及び」とする。</p>

<p class="jorei-article">(国民健康保険税に関する申告) 第20条 国民健康保険税の納税義務者は、4月15日まで (国民健康保険税の賦課期日後に納税義務が発生した者は、当該納税義務が発生した日から15日以内) に、当該納税義務者及びその世帯に属する被保険者の所得その他市長が必要と認める事項を記載した申告書を市長に提出しなければならない。 ただし、当該納税義務者及びその世帯に属する被保険者の前年中の所得につき法第317条の2第1項の申告書が市長に提出されている場合又は当該納税義務者及びその世帯に属する被保険者が同項ただし書に規定する者 (法第317条の2第1項ただし書の条例で定める者を除く。) である場合においては、この限りでない。</p>

<p class="jorei-article">(特例対象被保険者等に係る申告) 第20条の2 国民健康保険税の納税義務者である世帯主又はその世帯に属する国民健康保険の被保険者若しくは特定同一世帯所属者が特例対象被保険者等である場合には、当該納税義務者は、離職理由その他の事項で市長が必要と認める事項を記載した申告書を市長に提出しなければならない。</p>

<p class="jorei-article">(出産被保険者に係る届出) 第20条の3 国民健康保険税の納税義務者は、出産被保険者が世帯に属する場合には、次に掲げる事項を記載した届書を市長に提出しなければならない。</p>

<p class="jorei-article">(国民健康保険税の納税通知書) 第21条 国民健康保険税の納税通知書の様式は、市長が別に規則で定める。</p>

<p class="jorei-article">(国民健康保険税の減免) 第22条 市長は、 次の各号 のいずれかに該当する者のうち市長において必要があると認める者に対し、国民健康保険税を減免する。</p>

<p class="jorei-article">(三郷市行政手続条例の適用除外) 第23条 三郷市行政手続条例 (平成10年条例第1号) 第3条 又は 第4条 に定めるもののほか、この条例又はこの条例に基づく規則の規定による処分その他公権力の行使に当たる行為については、 三郷市行政手続条例第2章 及び 第3章 の規定は、適用しない。</p>

<p class="jorei-article">(雑則) 第24条 この条例に定めるもののほか、国民健康保険税の賦課徴収については、 三郷市税条例 (昭和32年条例第4号) の定めるところによる。</p>

</div>` },
    { id: 66, title: '三郷市特別職報酬等審議会条例', category: '給与', keywords: ['特別職', '報酬', '審議会'], summary: '特別職報酬審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000177.html',
        fullText: `<div class="jorei-header">○三郷市国民健康保険税条例施行規則<br>平成12年3月31日 規則第57号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市国民健康保険税条例 (昭和32年条例第6号。以下「条例」という。) の施行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(国民健康保険税に係る文書様式) 第2条 条例 の規定により定めるべき納税通知書及び申告書等の様式は、次に定めるところによる。</p>

<p class="jorei-article">(雑則) 第3条 この規則に定めるもののほか、国民健康保険税に関し必要な事項は 三郷市税条例施行規則 (昭和54年規則第17号) の例による。</p>

</div>` },
    { id: 67, title: '市長及び副市長の給与等に関する条例', category: '給与', keywords: ['市長', '副市長', '給与'], summary: '市長・副市長の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000178.html' },
    { id: 68, title: '三郷市教育委員会教育長の給与等に関する条例', category: '給与', keywords: ['教育長', '給与', '教育委員会'], summary: '教育長の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000181.html',
        fullText: `<div class="jorei-header">○三郷市行政財産の使用料に関する条例<br>平成9年12月18日 条例第20号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 地方自治法 (昭和22年法律第67号) 第238条の4第7項の規定に基づき、行政財産の使用を許可した場合における使用料については、法令その他別に定めがある場合を除くほか、 この条例 の定めるところによる。</p>

<p class="jorei-article">(使用料の額) 第2条 使用料の額は、 別表 により算出して得た額とする。 ただし、その額が、100円未満となる場合は100円とし、100円を超える場合は10円未満の端数を切り捨てる。</p>

<p class="jorei-article">(使用料の納付) 第3条 使用の許可を受けた者は、使用前にその使用料を納付しなければならない。 ただし、市長が特別の理由があると認めるときは、この限りでない。</p>

<p class="jorei-article">(使用料の減免) 第4条 市長は、 次の各号 のいずれかに該当するときは、使用料を減額し、又は免除することができる。</p>

<p class="jorei-article">(使用料の還付) 第5条 既納の使用料は、還付しない。 ただし、 次の各号 のいずれかに該当するときは、その使用料の全部又は一部を還付することができる。</p>

<p class="jorei-article">(委任) 第6条 この条例 に定めるもののほか、 この条例 の施行に関し必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 69, title: '職員の給与に関する条例', category: '給与', keywords: ['給与', '職員', '給料'], summary: '職員の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000182.html',
        fullText: `<div class="jorei-header">○三郷市手数料徴収条例<br>平成12年3月18日 条例第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 地方自治法 (昭和22年法律第67号) 第227条の規定に基づき特定の者のためにする事務について徴収する手数料は、他の条例に定めがあるもののほか、この条例の定めるところによる。</p>

<p class="jorei-article">(手数料の種類及び金額) 第2条 手数料の種類及び金額は、次のとおりとする。</p>

<p class="jorei-article">(手数料の徴収時期) 第3条 手数料は、申請又は証明、閲覧若しくは交付の際に徴収する。</p>

<p class="jorei-article">(手数料の減免) 第4条 市長は、生活保護法 (昭和25年法律第144号) による保護を受ける者又は中国残留邦人等の円滑な帰国の促進並びに永住帰国した中国残留邦人等及び特定配偶者の自立の支援に関する法律 (平成6年法律第30号) による支援給付を受ける者から手数料の減免申請があったときは、手数料を減額し、又は免除することができる。</p>

<p class="jorei-article">(郵送料の徴収) 第5条 戸籍の謄本、抄本、証明書その他の書類について、その者の求めにより郵送する場合は、その手数料のほか、郵送料を徴収する。 ただし、郵送料に相当する額の切手が納付されたときは、この限りでない。</p>

<p class="jorei-article">(委任) 第6条 この条例の施行について必要な事項は、規則で定める。</p>

<p class="jorei-article">(過料) 第7条 詐欺その他不正の行為により、 第2条 の手数料の徴収を免れた者は、その徴収を免れた金額の5倍に相当する金額 (当該5倍に相当する金額が5万円を超えないときは、5万円とする。) 以下の過料に処する。</p>

</div>` },
    { id: 70, title: '技能労務職員の給与の種類及び基準に関する条例', category: '給与', keywords: ['技能労務', '給与', '職員'], summary: '技能労務職員の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000190.html',
        fullText: `<div class="jorei-header">○三郷市建設工事請負等制限付一般競争入札試行要綱<br>平成7年5月31日 告示第89号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱は、市が発注する建設工事の請負、建設資材・物品納入、設計・調査・測量業務及び維持管理業務の委託 (以下「建設工事等」という。) の契約について、地方自治法施行令 (昭和22年政令第16号。以下「令」という。) 第167条の5及び第167条の5の2の規定に基づき、必要な資格を定めて行う一般競争入札 (以下「制限付一般競争入札」という。) を試行することに関し、 三郷市契約規則 (昭和40年規則第6号。以下「規則」という。) に定めるもののほか、必要な事項を定めるものとする。</p>

<p class="jorei-article">(対象工事等) 第2条 制限付一般競争入札の対象とする建設工事等 (以下「対象工事等」という。) は、原則として予定価格が1億5,000万円を超える建設工事等及び市長が三郷市建設工事請負等業者選定委員会の意見を聞き入札に付すべきであると認めた建設工事等とする。</p>

<p class="jorei-article">(参加資格) 第3条 制限付一般競争入札に参加する者に必要な資格 (以下「参加資格」という。) は、次に掲げるとおりとする。</p>

<p class="jorei-article">(入札の公告) 第4条 制限付一般競争入札の公告は、 規則第2条 の規定に定めるところにより、市役所掲示場に掲示して行うとともに、総務部契約課においてその写しを掲示するものとする。</p>

<p class="jorei-article">(入札参加申込み) 第5条 制限付一般競争入札に参加しようとする者は、三郷市制限付一般競争入札参加申込書 ( 別記様式 ) を所定の期日までに提出し、入札参加の申込みをしなければならない。</p>

<p class="jorei-article">(入札参加資格要件の審査) 第6条 市長は、 前条 の規定により入札参加の申込みがあったときは、参加資格について審査した結果、適当と認めたときは受理するものとする。</p>

<p class="jorei-article">(設計図書の閲覧等) 第7条 対象工事等の図面、設計書及び仕様書 (以下「設計図書」という。) については、閲覧又は貸出しを行うものとする。</p>

<p class="jorei-article">(入札保証金) 第8条 入札保証金の納付及び減免については、 規則第4条 及び 第7条 の規定に基づくものとする。</p>

<p class="jorei-article">(予定価格) 第9条 予定価格の決定は副市長が行う。 ただし、副市長が特別に認めた場合は副市長が指名する者がこれを行うことができる。</p>

<p class="jorei-article">(入札) 第10条 入札参加者は、 規則 、三郷市建設工事請負契約約款、設計図書及び現場等を熟知のうえ総価により入札しなければならない。 この場合において、入札書に記載する金額は、消費税及び地方消費税に係る課税事業者であるか免税事業者であるかを問わず、見積もった契約希望金額の110分の100に相当する金額とするものとする。</p>

<p class="jorei-article">(入札不調の場合の措置) 第11条 対象工事等に係る入札が不調となった場合は、令第167条の2第1項第8号の規定による随意契約によるものとする。</p>

<p class="jorei-article">(入札の辞退) 第12条 入札参加者は、入札参加申込後であっても、入札を辞退することができるものとする。</p>

<p class="jorei-article">(入札の無効) 第13条 次の各号 のいずれかに該当する入札は、無効とするものとする。</p>

<p class="jorei-article">(契約金額) 第14条 契約金額は、入札書に記載された金額に当該金額の100分の10に相当する金額を加算した額 (当該金額に1円未満の端数があるときは、その端数金額を切り捨てた金額) とするものとする。</p>

<p class="jorei-article">(異議の申立て) 第15条 入札参加者は、入札後は、 規則 、三郷市建設工事請負契約約款、設計図書、現場及びこの要綱等についての不明を理由として異議を申し立てることができない。</p>

<p class="jorei-article">(その他) 第16条 この要綱の施行に関し必要な事項は、別に定める。</p>

<p class="jorei-article">(施行期日) 第1条 この告示は、平成25年4月3日から施行し、平成25年4月1日から適用する。</p>

</div>` },
    { id: 71, title: '職員の特殊勤務手当に関する条例', category: '給与', keywords: ['特殊勤務', '手当', '職員'], summary: '特殊勤務手当に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000198.html',
        fullText: `<div class="jorei-header">○三郷市減債基金条例<br>平成元年12月15日 条例第22号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 市債の償還に必要な財源を確保し、もって将来にわたる市財政の健全な運営に資するため、三郷市減債基金 (以下「基金」という。) を設置する。</p>

<p class="jorei-article">(積立て) 第2条 基金として積み立てる額は、一般会計歳入歳出予算で定める額とする。</p>

<p class="jorei-article">(管理) 第3条 基金に属する現金は、金融機関への預金その他最も確実かつ有利な方法により保管しなければならない。</p>

<p class="jorei-article">(運用益金の処理) 第4条 基金の運用から生じる収益は、一般会計歳入歳出予算に計上して、この基金に繰り入れるものとする。</p>

<p class="jorei-article">(繰替運用) 第5条 市長は、財政上必要があると認めるときは、確実な繰戻しの方法、期間及び利率を定めて基金に属する現金を歳計現金に繰り替えて運用することができる。</p>

<p class="jorei-article">(処分) 第6条 基金は、 次の各号 のいずれかに該当する場合に限り、一般会計歳入歳出予算の定めるところにより、その全部又は一部を処分することができる。</p>

<p class="jorei-article">(委任) 第7条 この条例 に定めるもののほか、基金の管理に関し必要な事項は、市長が定める。</p>

</div>` },
    { id: 72, title: '職員等の旅費に関する条例', category: '給与', keywords: ['旅費', '出張', '職員'], summary: '職員の旅費に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000206.html' },

    // ===== 第6編 財務 =====
    { id: 73, title: '議会の議決に付すべき契約及び財産の取得又は処分に関する条例', category: '財務', keywords: ['契約', '財産', '議会議決'], summary: '議会議決が必要な契約等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000208.html',
        fullText: `<div class="jorei-header">○議会の議決に付すべき契約及び財産の取得又は処分に関する条例<br>昭和39年3月31日 条例第17号</div>
<div class="jorei-article"><span class="article-title">（趣旨）</span><br>第1条 この条例は、地方自治法（昭和22年法律第67号）第96条第1項第5号及び第8号の規定に基づき、議会の議決に付すべき契約及び財産の取得又は処分について定めるものとする。</div>
<div class="jorei-article"><span class="article-title">（契約）</span><br>第2条 議会の議決に付さなければならない契約は、予定価格1億5,000万円以上の工事又は製造の請負とする。</div>
<div class="jorei-article"><span class="article-title">（財産の取得又は処分）</span><br>第3条 議会の議決に付さなければならない財産の取得又は処分は、予定価格2,000万円以上の不動産若しくは動産の買入れ若しくは売払い（土地については、1件5,000平方メートル以上のものに係るものに限る。）とする。</div>
<div class="jorei-supplementary">附則<br>この条例は、公布の日から施行する。</div>` },
    { id: 74, title: '三郷市補助金等交付規則', category: '財務', keywords: ['補助金', '交付', '助成'], summary: '補助金の交付に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000210.html',
        fullText: `<div class="jorei-header">○三郷市みどりの基金条例<br>平成4年3月21日 条例第8号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 緑化の推進と緑の保全に要する経費の財源に充てるため、三郷市みどりの基金 (以下「基金」という。) を設置する。</p>

<p class="jorei-article">(積立て) 第2条 基金は、一般会計歳入歳出予算により措置した金額及び 前条 の設置目的に基づく寄附金を積み立てるものとする。</p>

<p class="jorei-article">(管理) 第3条 基金に属する現金は、金融機関への預金その他最も確実かつ有利な方法により保管しなければならない。</p>

<p class="jorei-article">(運用益金の処理) 第4条 基金の運用から生ずる収益は、一般会計歳入歳出予算に計上して、緑化の推進、緑の保全に要する経費の財源に充て、又は基金に繰り入れるものとする。</p>

<p class="jorei-article">(繰替運用) 第5条 市長は、財政上必要があると認めるときは、確実な繰戻しの方法、期間及び利率を定めて基金に属する現金を歳計現金に繰り替えて運用することができる。</p>

<p class="jorei-article">(処分) 第6条 基金は、緑化の推進、緑の保全に要する経費の財源に充てる場合に限り、一般会計歳入歳出予算の定めるところにより、その全部又は一部を処分することができる。</p>

<p class="jorei-article">(委任) 第7条 この条例 に定めるもののほか、基金の管理に関し必要な事項は、市長が定める。</p>

</div>` },
    { id: 75, title: '財政事情の作成及び公表に関する条例', category: '財務', keywords: ['財政', '公表', '透明性'], summary: '財政状況の公表に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000211.html',
        fullText: `<div class="jorei-header">○三郷市教育委員会公告式規則<br>昭和31年10月8日 教委規則第2号</div>
<div class="jorei-body">
<p class="jorei-article">第1条 この規則 は、地方教育行政の組織及び運営に関する法律 (昭和31年法律第162号) 第15条第2項の規定に基づき、教育委員会規則その他三郷市教育委員会 (以下「教育委員会」という。) の定める規程で公表を要するもの (以下「規則等」という。) の公告式を定めるものとする。</p>

<p class="jorei-article">第2条 規則等は、会議において議決した日から起算して7日以内に公布するものとする。</p>

<p class="jorei-article">第3条 規則等は、当該規則等に施行期日を定めるもののほか、公布の日から起算して10日を経過した日から施行する。</p>

<p class="jorei-article">第4条 第2条第3項 の規定は、規則等を除き、教育委員会の所掌事務に関する事項で公表を要するものの公告に準用する。</p>

</div>` },
    { id: 76, title: '三郷市税条例', category: '財務', keywords: ['市税', '住民税', '固定資産税', '税金'], summary: '市税に関する総合的な条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000214.html',
        fullText: `<div class="jorei-header">○三郷市教育委員会請願処理規則<br>平成10年3月27日 教委規則第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、三郷市教育委員会 (以下「委員会」という。) が受理する請願、陳情等 (以下「請願」という。) の処理に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(請願の提出) 第2条 請願は、請願書によりすべて教育長を通じて行わなければならない。</p>

<p class="jorei-article">(請願の処理) 第3条 教育長は、請願を受理したときは、これを委員会の会議 (以下「会議」という。) に付さなければならない。</p>

<p class="jorei-article">(発言) 第4条 請願者が会議で発言を許されたときは、教育長の許可する時間内において事情を述べることができる。</p>

<p class="jorei-article">(通知) 第5条 教育長は、請願者から求めがあった場合は、審議の結果を、請願者に通知しなければならない。</p>

</div>` },
    { id: 77, title: '三郷市都市計画税条例', category: '財務', keywords: ['都市計画税', '税金', '都市計画'], summary: '都市計画税に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000215.html',
        fullText: `<div class="jorei-header">○三郷市教育委員会事務局組織規則<br>昭和61年12月23日 教委規則第3号</div>
<div class="jorei-body">
<p class="jorei-article">(部の設置等) 第1条 地方教育行政の組織及び運営に関する法律 (昭和31年法律第162号。以下「法」という。) 第17条第2項及び地方教育行政の組織及び運営に関する法律施行令 (昭和31年政令第221号) 第6条の規定に基づき、三郷市教育委員会事務局 (以下「事務局」という。) の内部組織を次のとおり定める。</p>

<p class="jorei-article">(公民館等の所属) 第2条 三郷市立公民館設置及び管理条例 (昭和52年条例第2号) 等に定める施設等の種類及び所属は、 別表 のとおりとする。</p>

<p class="jorei-article">(事務分掌) 第3条 第1条第1項 に規定する組織の事務分掌は、次のとおりとする。</p>

<p class="jorei-article">(職の設置及び職務) 第4条 事務局に置く職員の職及び職務については、別に定めるもののほか、 三郷市事務分掌規則 (平成3年規則第3号) の例による。</p>

<p class="jorei-article">(教育長職務代理者の事務の委任) 第5条 法第13条第2項の規定により、教育長に事故があるとき又は欠けたときに教育長の職務を代理する委員は、自ら事務局を指揮監督して事務執行を行うことが困難である場合には、その職務を学校教育部長に委任することができる。</p>

<p>(主任指導主事、指導主事及び社会教育主事) 第6条 事務局に主任指導主事、指導主事、社会教育主事及び専門指導員を置く。</p>

<p class="jorei-article">(主管課の設置及び事務) 第7条 学校教育部の主管課は教育総務課とし、生涯学習部の主管課は生涯学習課とする。</p>

</div>` },
    { id: 78, title: '三郷市国民健康保険税条例', category: '財務', keywords: ['国保', '国民健康保険', '保険税'], summary: '国民健康保険税に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000216.html' },
    { id: 79, title: '三郷市財政調整基金条例', category: '財務', keywords: ['財政調整', '基金', '積立'], summary: '財政調整基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000217.html',
        fullText: `<div class="jorei-header">○三郷市教育委員会事務専決規程<br>昭和61年12月23日 教委訓令第3号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規程は、三郷市教育委員会教育長に対する事務委任規則 (昭和31年教委規則第4号) 第4条第2項の規定に基づき、教育長の権限に属する事務のうち、専決することのできる事項を定め、その範囲を明らかにするとともに、教育行政事務の合理的かつ能率的な運営を図ることを目的とする。</p>

<p class="jorei-article">(用語の意義) 第2条 この規程において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(専決事項) 第3条 部長、副部長、課長、室長、課長補佐、施設長及び係長の専決することのできる事項 (以下「専決事項」という。) は、 別表第1 及び 別表第2 のとおりとする。</p>

<p class="jorei-article">(専決の制限) 第4条 専決権者は、この規程において定める専決事項であっても、 次の各号 のいずれかに該当すると認めるときは、上司の決裁を受けなければならない。</p>

<p class="jorei-article">(類推による専決) 第5条 専決権者は、この規程において専決事項として定められていない事項であっても、事案の内容により、専決することが適当であると認められるものは、この規程に準じ専決することができる。</p>

<p class="jorei-article">(専決の報告) 第6条 専決権者は、必要があると認めるときは、専決した事項を上司に報告しなければならない。</p>

<p class="jorei-article">(代決) 第7条 教育長が不在のときは、主務部長がその事務を代決する。</p>

<p class="jorei-article">(代決の制限) 第8条 前条 の場合であっても、あらかじめ上司からその処理について特に指示を受けたもの又は緊急やむを得ない事項以外の事項については、代決することができない。</p>

<p class="jorei-article">(代決の報告) 第9条 代決権者は、当該代決した事項について、その要旨を速やかに専決権者に報告しなければならない。 ただし、あらかじめ報告を要しない旨の指示を受けた場合は、この限りでない。</p>

<p class="jorei-article">(専決の表示) 第10条 専決書類については、専決表示を次のとおり行うものとする。 ただし、施設長については、当該施設長の職務の級に対応する表中上段の職の下段に決裁印を押し、当該決裁印を押した左欄に専決印を押すものとする。</p>

<p class="jorei-article">(雑則) 第11条 この規程に定めるもののほか、事務の処理及び服務等については、市長の事務部局の例による。</p>

</div>` },
    { id: 80, title: '三郷市減債基金条例', category: '財務', keywords: ['減債', '基金', '借金返済'], summary: '減債基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000218.html',
        fullText: `<div class="jorei-header">○三郷市教育委員会広報編集委員会規程<br>昭和61年3月15日 教委訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 三郷市教育委員会 (以下「教育委員会」という。) の広報業務の効率的な運営を図るため、三郷市教育委員会広報編集委員会 (以下「委員会」という。) を置く。</p>

<p class="jorei-article">(職務) 第2条 委員会は、次に掲げる業務を行う。</p>

<p class="jorei-article">(組織) 第3条 委員会は、委員長及び委員をもって組織する。</p>

<p class="jorei-article">(委員長の職務) 第4条 委員長は、委員会を招集し、その会議の議長となり、委員会を代表する。</p>

<p class="jorei-article">(任期) 第5条 委員の任期は2年とし、再任を妨げない。 ただし、委員が課を異にして異動した場合は、その資格を失うものとする。</p>

<p class="jorei-article">(庶務) 第6条 委員会の庶務は、教育委員会事務局学校教育部教育総務課において処理する。</p>

<p class="jorei-article">(委任) 第7条 この規程 に定めるもののほか、必要な事項は、委員会が定める。</p>

</div>` },
    { id: 81, title: '三郷市公共施設整備基金条例', category: '財務', keywords: ['公共施設', '基金', '整備'], summary: '公共施設整備基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000219.html',
        fullText: `<div class="jorei-header">○三郷市教育委員会文書取扱規程<br>昭和62年12月15日 教委訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規程は、別に定めるもののほか、三郷市教育委員会における文書の取扱いについて必要な事項を定めるものとする。</p>

<p class="jorei-article">(文書処理の原則) 第2条 文書は、すべて正確かつ迅速に取り扱うとともに、その処理経過を明らかにし、事務能率の向上に役立つように処理しなければならない。</p>

<p class="jorei-article">(課長の責務) 第3条 課長は、常にその課における文書事務が円滑かつ適正に処理されるように、事務処理の促進を図らなければならない。</p>

<p class="jorei-article">(文書取扱主任) 第4条 課長の文書事務を補佐するため、各課に文書取扱主任を置く。</p>

<p class="jorei-article">(文書の種別) 第5条 文書の種別は、次に掲げるとおりとする。</p>

<p class="jorei-article">(文書記号等) 第6条 一般文書には、文書記号 (三教及び 別表第1 に掲げる記号を組み合わせるものをいう。) 及び文書番号 (文書収受発送簿の番号をいう。) を付する。 ただし、表彰状、感謝状その他文書記号及び文書番号を付する必要がないと認める文書並びに特に軽易な文書については、この限りでない。</p>

<p class="jorei-article">(教育総務課における文書の処理及び配布) 第7条 学校教育部教育総務課 (以下「教育総務課」という。) に到達した文書は、教育総務課が主務課に配布するものとする。</p>

<p class="jorei-article">(文書の収受) 第8条 収受する文書は、 別表第2 に定める収受印を押印するものとする。</p>

<p class="jorei-article">(起案) 第9条 起案するときは、起案用紙 ( 様式第1号 ) を用いるものとする。</p>

<p class="jorei-article">(公印の押印) 第10条 発送する文書には、 三郷市教育委員会公印規程 (昭和52年教委訓令第12号) の定めるところにより、公印を押印しなければならない。 ただし、文書の性質又は内容により省略することができる。</p>

<p class="jorei-article">(その他) 第11条 その他文書の取扱いについて必要な事項は、 三郷市文書取扱規程 (令和3年訓令第4号) の例による。</p>

</div>` },
    { id: 82, title: '三郷市地域福祉基金条例', category: '財務', keywords: ['地域福祉', '基金', '福祉'], summary: '地域福祉基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000220.html',
        fullText: `<div class="jorei-header">○三郷市教育委員会公印規程<br>昭和52年6月25日 教委訓令第12号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 三郷市教育委員会 (以下「教育委員会」という。) の公印については、別に定めるものを除くほか、この規程の定めるところによる。</p>

<p class="jorei-article">(公印の定義) 第2条 この規程において「公印」とは、教育委員会名、教育機関名又は職名をもって発する公文書に使用する教育委員会印、教育機関印及び職印をいう。</p>

<p class="jorei-article">(公印の名称等) 第3条 公印の名称、ひな形、寸法、印材、個数、用途及び公印保管者 (以下「保管者」という。) は、 別表第1 から 別表第3 までのとおりとする。</p>

<p class="jorei-article">(公印の取扱い) 第4条 公印は、常に堅固な容器に納め、錠を施す等の方法により、保管者がその保管及び使用の責に任じなければならない。</p>

<p class="jorei-article">(公印の使用) 第5条 公印を使用しようとする者は、原議その他の証拠書類を添えて、保管者又は取扱者に申し出なければならない。</p>

<p class="jorei-article">(印影の印刷) 第6条 教育委員会が必要があると認めたものについては、公印の印影又はその縮小したものを印刷することができる。</p>

<p class="jorei-article">(電子計算組織等に記録した印影の使用) 第6条の2 電子計算組織等を利用して事務を行うときは、当該電子計算組織等に記録した公印の印影又はその縮小したもの (以下「電子公印」という。) を出力することにより、公印の押印に代えることができる。</p>

<p class="jorei-article">(公印の事故届) 第7条 保管者は、公印に関し、盗難その他の事故が生じたときは、その名称及び事由を記載した公印事故届 ( 様式第1号 ) を速やかに学校教育部長を経て、教育長に提出しなければならない。</p>

<p class="jorei-article">(新調又は改廃) 第8条 保管者は、公印を新調し、又は改刻する必要があると認めるときは、公印新調 (改刻) 願 ( 様式第2号 ) を学校教育部長を経て教育長に提出しなければならない。</p>

<p>(旧公印の引継ぎ、保存及び処分) 第9条 保管者は、不要となった公印を学校教育部長に引き継がなければならない。</p>

<p class="jorei-article">(台帳の整備) 第10条 学校教育部長は、公印台帳 ( 様式第4号 ) を作成し、公印の名称、印影、用途、保管者等を登載しておかなければならない。</p>

<p class="jorei-article">(その他) 第11条 この規程に定めるもののほか、公印に関して必要な事項は、 三郷市公印規程 (昭和39年訓令第2号) の例による。</p>

</div>` },
    { id: 83, title: '三郷市国民健康保険財政調整基金条例', category: '財務', keywords: ['国保', '基金', '財政'], summary: '国民健康保険財政調整基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000221.html' },
    { id: 84, title: '三郷市介護保険給付費支払基金条例', category: '財務', keywords: ['介護保険', '基金', '給付'], summary: '介護保険給付費支払基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000224.html' },
    { id: 85, title: '三郷市みどりの基金条例', category: '財務', keywords: ['みどり', '基金', '緑化', '環境'], summary: 'みどりの基金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000228.html' },
    { id: 86, title: '財産の交換、譲与、無償貸付等に関する条例', category: '財務', keywords: ['財産', '交換', '貸付'], summary: '財産の交換等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000229.html' },
    { id: 87, title: '三郷市長期継続契約を締結することができる契約を定める条例', category: '財務', keywords: ['長期継続契約', '契約', '調達'], summary: '長期継続契約に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000230.html',
        fullText: `<div class="jorei-header">○三郷市立小・中学校管理規則<br>昭和32年11月5日 教委規則第6号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、地方教育行政の組織及び運営に関する法律 (昭和31年法律第162号) 第33条の規定に基づき、三郷市立小学校及び中学校 (以下「学校」という。) の管理運営の基本的事項について定めることを目的とする。</p>

<p class="jorei-article">(学年及び学期) 第2条 学校の学年は、4月1日に始まり、翌年3月31日に終わる。</p>

<p class="jorei-article">(休業日等) 第3条 学校における休業日は、次のとおりとする。</p>

<p class="jorei-article">(教育課程の編成及び届出) 第4条 学校は、学習指導要領の基準及び埼玉県小・中学校教育課程編成要領により、教育課程を定めなければならない。</p>

<p class="jorei-article">第4条の2 校長は、特別の教育課程を編成する場合においては、次に掲げるものを5月末日までに教育委員会に届け出るものとする。 ただし、通級による指導に係る特別の教育課程は、通級による指導実施要綱に基づき教育委員会に届け出るものとする。</p>

<p class="jorei-article">(学校行事) 第5条 学校は、教育活動の一環として行う、対外競技及び修学旅行、夏季施設等の校外における行事については、埼玉県公立小・中学校が行う校外における行事の実施基準の改訂について (平成14年4月1日教指第3号) の準用により企画し、行うものとする。</p>

<p class="jorei-article">(学校以外の施設の利用) 第6条 学校が教育上必要と認めて、その学校の施設以外の施設を利用する場合においては、校長は、施設の名称、所在地、利用の目的、期間、利用者その他必要と認める事項について、あらかじめ教育委員会に届け出なければならない。 ただし、教育委員会があらかじめ指示するものについては、この限りでない。</p>

<p class="jorei-article">(原級留置) 第7条 校長は、児童生徒の平素の成績を評価して、その学年の課程の修了又は卒業を認めることができないと判定したときは、当該児童生徒を原学年に留め置くことができる。</p>

<p class="jorei-article">(感染症による出席停止) 第7条の2 校長は、児童生徒が感染症にかかり、又はそのおそれのあるときは、その保護者に対して、当該児童生徒の出席停止を命ずることができる。</p>

<p class="jorei-article">(性行不良による出席停止) 第7条の3 校長は、性行不良であって他の児童生徒の教育に妨げがあると認める児童生徒があるときは、教育委員会に出席停止に関する意見具申を行わなければならない。</p>

<p class="jorei-article">(出席簿) 第8条 児童生徒の出席簿の様式は、教育委員会が別に定める。</p>

<p class="jorei-article">(卒業証書) 第9条 卒業証書は、 別記様式 による。</p>

<p class="jorei-article">(事故報告) 第10条 児童生徒の傷害、死亡又は集団的疾病その他児童生徒に係る事故の発生があったときは、校長は速やかに教育委員会に連絡し、なお、文書をもって詳細を報告しなければならない。</p>

<p class="jorei-article">(教材の選定) 第11条 学校は、文部科学大臣の検定を経た教科用図書又は文部科学省が著作の名義を有する教科用図書 (以下「教科書」という。) 以外の教材については、教育内容の充実を図るのに有効適切と認めるものを選定しなければならない。 この場合、保護者の経済的負担についても、考慮を払わなければならない。</p>

<p class="jorei-article">(承認) 第12条 学校が教科書の発行されていない教科の主たる教材として、児童生徒に使用させる教科用図書 (以下「準教科書」という。) については、校長は、あらかじめ教育委員会の承認を得なければならない。</p>

<p class="jorei-article">(届出) 第13条 学校が教育活動の一環として計画的、継続的に、学年又は学級若しくは特定の集団の児童生徒の全員に対し、使用させる教材で次に掲げるものについては、校長は、あらかじめ教育委員会に届け出なければならない。</p>

<p class="jorei-article">(主幹教諭) 第14条 学校に、主幹教諭を置く。 ただし、特別の事情のあるときは、これを置かないことができる。</p>

<p class="jorei-article">(司書教諭) 第14条の2 学校に、司書教諭を置く。 ただし、学級の数が11以下の学校にあっては、当分の間、これを置かないことができる。</p>

<p class="jorei-article">(栄養教諭等) 第14条の3 学校に、栄養教諭、栄養主査、栄養主任、栄養技師、主任専門員及び専門員を置くことができる。</p>

<p class="jorei-article">(事務主幹等) 第14条の4 学校に、事務主幹、事務主査、事務主任、事務主事、主任専門員及び専門員を置くことができる。</p>

<p>(学校医、学校歯科医及び学校薬剤師) 第14条の5 学校に、学校医、学校歯科医及び学校薬剤師を置く。</p>

<p class="jorei-article">(校務の分掌) 第15条 学校においては、調和のとれた学校運営が行われるためにふさわしい校務分掌の仕組みを整えるものとする。</p>

<p class="jorei-article">(教務主任等) 第15条の2 学校に、教務主任、学年主任、生徒指導主任及び保健主事を置き、並びに分校を設ける学校に分校主任を置く。 ただし、教務主任、学年主任、生徒指導主任及び保健主事の担当する校務を整理する主幹教諭を置くときその他特別の事情のあるときは、教務主任、学年主任、生徒指導主任又は保健主事を置かないことができる。</p>

<p class="jorei-article">(進路指導主事) 第15条の3 中学校に、進路指導主事を置く。 ただし、進路指導主事の担当する校務を整理する主幹教諭を置くときその他特別の事情のあるときは、進路指導主事を置かないことができる。</p>

<p class="jorei-article">(その他の主任等) 第15条の4 学校においては、この規則に規定するもののほか、必要に応じ、校務を分担する主任等を置くことができる。</p>

<p class="jorei-article">(主任等の任期等) 第15条の5 校長は、 第15条の2 及び 第15条の3 に規定する主任等に当該学校の教諭 (保健主事にあっては教諭又は養護教諭) をもって充て、その職務を担当させ、教育委員会に報告しなければならない。</p>

<p class="jorei-article">(学校の指定) 第16条 学校教育法施行令 (昭和28年政令第340号) 第5条第2項 (同令第6条で準用する場合を含む。) に基づく学校の指定については、教育委員会が別に定める規則による。</p>

<p>(学級編制、学級担任等) 第17条 校長は、学級編制について、県教育委員会に届け出るために必要な資料を教育委員会に提出しなければならない。</p>

<p class="jorei-article">(2部授業の実施) 第18条 学校が、2部授業を実施する場合は、校長は、あらかじめ、その実施方法等について教育委員会に届け出なければならない。</p>

<p class="jorei-article">(職員会議) 第19条 学校に、校長の職務の円滑な執行を補助するため、職員会議を置く。</p>

</div>` },

    // ===== 第7編 教育 =====
    { id: 88, title: '三郷市教育に関する事務の職務権限の特例に関する条例', category: '教育・文化', keywords: ['教育', '職務権限', '特例'], summary: '教育事務の職務権限の特例に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000236.html',
        fullText: `<div class="jorei-header">○三郷市立学校施設の使用に関する規則<br>昭和45年12月26日 教委規則第3号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 三郷市教育委員会 (以下「教育委員会」という。) の所管に係る三郷市立学校の校地、校舎及びその附属設備 (以下「学校施設」という。) の社会教育その他公共のための使用に関しては、法令に別段の定めあるものを除くほか、 この規則 の定めるところによる。</p>

<p class="jorei-article">(使用許可の範囲) 第2条 学校施設は、 次の各号 のいずれかに該当する場合は、学校長がその使用を許可することができる。</p>

<p class="jorei-article">(使用許可の申請) 第3条 学校施設を使用しようとする者 (以下「申請者」という。) は、使用しようとする日の7日前までに、 別記様式 の三郷市立学校施設使用許可申請書 (以下「申請書」という。) に必要な事項を記載し、学校長に提出し、許可を受けなければならない。</p>

<p class="jorei-article">(申請書の許可及び報告) 第4条 学校長は、 前条 の申請書に基づき、その許否を決定し、申請者に交付するものとする。</p>

<p class="jorei-article">(使用の条件) 第5条 使用の許可を得た申請者 (以下「使用者」という。) は、許可書を使用当日当該学校長又は日直職員等 (以下「責任者」という。) に提示し、その指示に従うとともに最善の注意を払い、事故の防止に努めなければならない。</p>

<p class="jorei-article">(使用許可の取消し等) 第6条 学校長は、使用許可を与えた後においても、 次の各号 のいずれかに該当する場合においては、当該許可を取り消し、又はその使用を中止し、若しくは期日を変更することができる。</p>

<p class="jorei-article">(使用の禁止等) 第7条 学校長は、使用者が 第5条各項 に違反し、かつ、学校施設をき損し、又は滅失した事実が後日判明した場合においては、以後の使用を禁止し、その損害の賠償額を請求することができる。</p>

<p class="jorei-article">(利用者の事故等) 第8条 学校施設利用者の使用中の事故については、教育委員会及び学校長は、その責めを負わない。</p>

<p class="jorei-article">(その他) 第9条 この規則 に定めるもののほか、必要な事項は、教育長が定める。</p>

</div>` },
    { id: 89, title: '三郷市就学支援委員会規則', category: '教育・文化', keywords: ['就学', '支援', '教育'], summary: '就学支援委員会に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000245.html' },
    { id: 90, title: '三郷市人権教育推進協議会条例', category: '教育・文化', keywords: ['人権', '教育', '推進'], summary: '人権教育推進協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000246.html' },
    { id: 91, title: '三郷市立学校設置及び管理に関する条例', category: '教育・文化', keywords: ['学校', '設置', '小中学校'], summary: '市立学校の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000248.html',
        fullText: `<div class="jorei-header">○三郷市図書館設置及び管理条例施行規則<br>昭和58年3月23日 教委規則第2号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市図書館設置及び管理条例 (昭和58年条例第12号。以下「条例」という。) の施行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(休館日) 第2条 図書館の休館日は、次のとおりとする。</p>

<p class="jorei-article">(利用時間) 第3条 図書館の利用時間は、午前9時30分から午後7時までとする。 ただし、日曜日、土曜日及び休日は、午前9時30分から午後5時までとする。</p>

<p class="jorei-article">(利用の制限) 第4条 この規則又は館長の指示に従わない者に対しては、館長は図書館の利用又は図書館資料の館外利用を禁止することができる。</p>

<p class="jorei-article">(個人貸出) 第5条 図書館資料の館外利用をすることができる者は、市内に居住し、又は通勤し、若しくは通学する者及び広域的な図書館活動を行うために教育委員会が必要があると認める者とする。 ただし、館長が特別の理由があると認める場合は、この限りでない。</p>

<p class="jorei-article">第6条 図書館資料の館外利用をしようとする者は、住所及び勤務先その他の図書館資料の館外利用について必要と認める事項を証明する書類を提示し、利用申込書 ( 様式第1号 ) を館長に提出して、個人利用券 ( 様式第2号 ) の交付を受けなければならない。</p>

<p class="jorei-article">第7条 同一人が同時に館外利用することのできる図書館資料の数量及び期間は、 次の表 のとおりとする。 ただし、館長が特別の理由があると認める場合は、この限りでない。</p>

<p class="jorei-article">(団体貸出) 第8条 図書館資料の館外利用をすることができるものは、市内の事業所、機関又は団体 (以下「団体等」という。) とする。 ただし、館長が特別の理由があると認める場合は、この限りでない。</p>

<p class="jorei-article">第9条 図書館資料の館外利用をしようとする団体等は、所在、代表者等を証明する書類を提示し、利用申込書を館長に提出して、団体利用券 ( 様式第3号 ) の交付を受けなければならない。</p>

<p class="jorei-article">第10条 団体等が同時に館外利用することのできる図書館資料の数量及び期間は、 次の表 のとおりとする。 ただし、館長が特別の理由があると認める場合は、この限りでない。</p>

<p class="jorei-article">(館外利用の制限) 第11条 館長が館外利用を不適当と認めた図書館資料は、館外利用をすることはできない。 ただし、館長が特別の理由があると認める場合は、この限りでない。</p>

<p class="jorei-article">(損害の弁償) 第12条 利用者は、その責めに帰すべき理由により図書館資料若しくは設備器具等を著しく汚損し、又は破損し、若しくは亡失したときは、現品又は相当の代価をもって弁償しなければならない。</p>

<p class="jorei-article">(事務分掌) 第13条 図書館の事務は、次のとおりとする。</p>

<p class="jorei-article">(職務権限及びその代行) 第14条 館長は、上司の命を受け、図書館の業務を処理し、所属職員を指揮監督する。</p>

<p class="jorei-article">(遵守事項及び館長の指示) 第15条 館長は、図書館の利用者又は入館者の遵守事項を定め、図書館の管理上必要があると認めたときは、当該利用者又は入館者に対し、その都度必要な指示をすることができる。</p>

<p class="jorei-article">(委任) 第16条 この規則に定めるもののほか、必要な事項は、あらかじめ教育長の承認を得て館長が定める。</p>

</div>` },
    { id: 92, title: '三郷市学校運営協議会規則', category: '教育・文化', keywords: ['学校運営', 'コミュニティスクール', '協議会'], summary: '学校運営協議会（コミュニティスクール）に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000254.html' },
    { id: 93, title: '三郷市いじめ問題対策連絡協議会条例', category: '教育・文化', keywords: ['いじめ', '対策', '連絡協議会'], summary: 'いじめ問題対策連絡協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000255.html',
        fullText: `<div class="jorei-header">○三郷市青少年ホーム設置及び管理条例<br>平成9年3月21日 条例第6号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 青少年の福祉の増進及び健全な育成を図るため、三郷市青少年ホーム (以下「ホーム」という。) を設置する。</p>

<p class="jorei-article">(名称及び位置) 第2条 ホームの名称及び位置は、次のとおりとする。</p>

<p class="jorei-article">(業務) 第3条 ホームは、次に掲げる業務を行う。</p>

<p class="jorei-article">(利用者の範囲) 第4条 ホームを利用することができる者は、30歳以下の者 (以下「青少年」という。) とする。 ただし、市長がホームの利用に支障がないと認めたときは、青少年以外の者も利用することができる。</p>

<p class="jorei-article">(職員) 第5条 ホームに、館長その他必要な職員を置く。</p>

<p class="jorei-article">(利用の許可) 第6条 ホームを利用しようとする者は、あらかじめ市長の許可を受けなければならない。 許可に係る事項を変更しようとするときも、同様とする。</p>

<p class="jorei-article">(利用許可の制限等) 第7条 市長は、 前条 の許可に係る利用が 次の各号 のいずれかに該当すると認めるときは、ホームの利用を許可しないことができる。</p>

<p class="jorei-article">(目的外使用等の禁止) 第8条 ホームの利用許可を受けた者 (以下「利用者」という。) は、利用許可を受けた目的以外に使用し、又はその権利を他に譲渡し、若しくは転貸してはならない。</p>

<p class="jorei-article">(遵守事項及び指示) 第9条 市長は、利用者の遵守事項を定め、必要があると認めるときは、利用者に対し、その都度適切な指示をすることができる。</p>

<p class="jorei-article">(利用許可の取消し等) 第10条 市長は、利用者が 次の各号 のいずれかに該当するとき、又はホームの管理上支障があるときは、利用許可を取り消し、又は利用を停止し、若しくは制限することができる。</p>

<p class="jorei-article">(原状回復) 第11条 利用者は、ホームの利用が終わったとき又は 前条第1項 の規定により利用の許可を取り消し、若しくは停止されたときは、直ちに設備等を原状に復さなければならない。</p>

<p class="jorei-article">(損害賠償) 第12条 利用者は、ホームの利用により施設等を損傷し、又は滅失したときは、市長の定める損害額を賠償しなければならない。 ただし、市長が利用者の責めに帰することができないと認めたときは、この限りでない。</p>

<p class="jorei-article">(使用料の納付) 第13条 青少年以外の者で、 別表 に定めるホームの施設の利用許可を受けたものは、 同表 に定める使用料を納付しなければならない。 ただし、市長は、ホームの利用が、 第1条 の設置目的に適すると認めたときは、使用料を免除することができる。</p>

<p class="jorei-article">(使用料の還付等) 第14条 既納の使用料は、還付しない。 ただし、 次の各号 のいずれかに該当するときは、その全部又は一部を還付する。</p>

<p class="jorei-article">(委任) 第15条 この条例 に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 94, title: '三郷市いじめ問題調査委員会条例', category: '教育・文化', keywords: ['いじめ', '調査', '委員会'], summary: 'いじめ問題調査委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000257.html',
        fullText: `<div class="jorei-header">○三郷市青少年問題協議会条例<br>昭和43年3月21日 条例第12号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 地方青少年問題協議会法 (昭和28年法律第83号) 第1条の規定に基づき、三郷市青少年問題協議会 (以下「協議会」という。) を置く。</p>

<p class="jorei-article">(委員) 第2条 協議会の委員の定数は、15人以内とする。</p>

<p class="jorei-article">(会長及び副会長) 第3条 協議会に、会長のほか副会長1人を置く。</p>

<p class="jorei-article">(会議) 第4条 協議会は、会長が招集する。</p>

<p class="jorei-article">(庶務) 第5条 協議会の庶務は、教育委員会事務局生涯学習部青少年課において処理する。</p>

<p class="jorei-article">(市長への委任) 第6条 この条例 に定めるものを除くほか、協議会について必要な事項は、市長が定める。</p>

</div>` },
    { id: 95, title: '三郷市いじめ問題再調査委員会条例', category: '教育・文化', keywords: ['いじめ', '再調査', '委員会'], summary: 'いじめ問題再調査委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000259.html' },
    { id: 96, title: '三郷市入学準備金貸付条例', category: '教育・文化', keywords: ['入学', '準備金', '貸付', '奨学金'], summary: '入学準備金の貸付に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000268.html',
        fullText: `<div class="jorei-header">○三郷市立小・中学校校庭夜間照明設備使用料条例<br>昭和63年6月27日 条例第15号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この条例は、三郷市立小・中学校校庭夜間照明設備 (以下「照明設備」という。) の使用料に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(使用料の前納) 第2条 照明設備の使用許可を受けた者は、 次の表 に定める使用料を前納しなければならない。</p>

<p class="jorei-article">(使用料の免除) 第3条 市長は、市が主催する事業で使用する場合は、使用料を免除する。</p>

<p class="jorei-article">(使用料の還付) 第4条 既納の使用料は、還付しない。 ただし、 次の各号 のいずれかに該当する場合は、その使用料の全部又は一部を還付することができる。</p>

<p class="jorei-article">(委任) 第5条 この条例に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 97, title: '三郷市立学校給食センター設置及び管理条例', category: '教育・文化', keywords: ['給食', 'センター', '学校給食'], summary: '学校給食センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000275.html' },
    { id: 98, title: '三郷市社会教育委員設置条例', category: '教育・文化', keywords: ['社会教育', '委員', '生涯学習'], summary: '社会教育委員の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000280.html',
        fullText: `<div class="jorei-header">○三郷市民生委員推薦会規則<br>昭和55年10月25日 規則第19号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規則 は、民生委員法施行令 (昭和23年政令第226号) 第7条の規定により三郷市民生委員推薦会 (以下「推薦会」という。) に関し必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(組織) 第2条 推薦会は、委員9人以内をもって組織する。</p>

<p class="jorei-article">(委員長の任期) 第3条 推薦会の委員長 (以下「委員長」という。) の任期は、3年とする。</p>

<p class="jorei-article">(招集) 第4条 委員長は、推薦会を招集しようとするときは、あらかじめ文書をもって日時、場所等について委員に通知するものとする。</p>

<p class="jorei-article">(民生委員候補者の決定) 第5条 委員長は、市長から民生委員の欠員の通知を受けたときは、速やかに推薦会を招集し、民生委員候補者を決定しなければならない。</p>

<p class="jorei-article">(会議の非公開等) 第6条 推薦会の会議は、非公開とする。</p>

<p class="jorei-article">(議事録等) 第7条 推薦会は、委員名簿、会議の議事録を常に整備しておかなければならない。</p>

</div>` },
    { id: 99, title: '三郷市立公民館設置及び管理条例', category: '教育・文化', keywords: ['公民館', '設置', '生涯学習'], summary: '公民館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000282.html' },
    { id: 100, title: '三郷市図書館設置及び管理条例', category: '教育・文化', keywords: ['図書館', '読書', '設置', '文化'], summary: '図書館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000284.html' },
    { id: 101, title: '三郷市郷土資料館設置及び管理条例', category: '教育・文化', keywords: ['郷土資料館', '歴史', '文化財'], summary: '郷土資料館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000287.html',
        fullText: `<div class="jorei-header">○三郷市高齢者等配食サービス事業実施要綱<br>平成10年3月31日 告示第64号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、在宅の要援護高齢者及び身体障害者 (以下「要援護高齢者等」という。) に対し、栄養管理された食事の配達を行うとともに、その安否を確認することにより、日常生活の自立の支援を図り、もって要援護高齢者等の福祉の増進に資することを目的とする。</p>

<p class="jorei-article">(実施主体) 第2条 事業の実施主体は、三郷市とする。</p>

<p class="jorei-article">(対象者) 第3条 この要綱 に基づく事業の対象者は、本市に住所を有し、住民基本台帳法 (昭和42年法律第81号) により記録されている者で、 次の各号 のいずれかに該当する者とする。</p>

<p class="jorei-article">(事業内容) 第4条 事業内容は、次のとおりとする。</p>

<p class="jorei-article">(申請) 第5条 配食サービスを利用しようとする者は、三郷市高齢者等配食サービス利用申請書 ( 様式第1号 ) により市長に申請しなければならない。</p>

<p class="jorei-article">(決定及び通知) 第6条 市長は、 前条 の申請があったときは、申請内容を審査し、その可否を決定するとともに、当該結果を三郷市高齢者等配食サービス利用可否決定通知書 ( 様式第2号 ) により当該申請者に通知しなければならない。</p>

<p class="jorei-article">(変更の届出) 第7条 利用者は、 第5条 の申請の内容に変更があったときは、三郷市高齢者等配食サービス利用変更届 ( 様式第3号 ) 又は電話等により市長に届け出なければならない。</p>

<p class="jorei-article">(利用者負担) 第8条 利用者は、配食サービスの利用に係る食材料費及び調理費相当額 (以下「利用料」という。) を負担しなければならない。 この場合において、利用料は、配食サービスを受けるときに、直接業者に支払うものとする。</p>

<p class="jorei-article">(配食サービスの停止) 第9条 市長は、利用者が 次の各号 のいずれかに該当するときは、配食サービスを一時停止し、若しくは中止し、又は利用の決定を取り消すことができる。</p>

<p class="jorei-article">(事業の委託) 第10条 市長は、適切な事業運営が確保できると認めた法人又は団体に事業を委託することができる。</p>

<p class="jorei-article">(その他) 第11条 この要綱 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 102, title: '三郷市青少年ホーム設置及び管理条例', category: '教育・文化', keywords: ['青少年', 'ホーム', '若者支援'], summary: '青少年ホームの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000291.html',
        fullText: `<div class="jorei-header">○三郷市身体障害児に係る補装具の交付等に関する規則<br>平成12年3月31日 規則第55号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 身体障害者手帳の交付を受けた児童に対する補装具の交付若しくは修理又はこれに代わる補装具の購入若しくは修理に要する費用の支給については、児童福祉法 (昭和22年法律第164号。以下「法」という。) 、児童福祉法施行令 (昭和23年政令第74号) 及び児童福祉法施行規則 (昭和23年厚生省令第11号。以下「施行規則」という。) に定めるもののほか、 この規則 の定めるところによる。</p>

<p class="jorei-article">(補装具の交付又は修理の手続) 第2条 施行規則第9条第1項の規定による補装具の交付又は修理の申請をしようとする者 (以下「申請者」という。) は、補装具交付・修理申請書 ( 様式第1号 ) を福祉事務所長に提出しなければならない。</p>

<p class="jorei-article">(給付の決定) 第3条 福祉事務所長は、補装具の交付又は修理の決定をしたときは、速やかに施行規則第4号様式による身体障害児補装具交付・修理券を申請者に交付するものとする。</p>

<p class="jorei-article">(給付申請の却下) 第4条 福祉事務所長は、給付申請を却下するときは、却下決定通知書 ( 様式第3号 ) により申請者に通知するものとする。</p>

<p class="jorei-article">(製作者への通知) 第5条 福祉事務所長は、法第21条の6第3項の規定により、補装具の交付又は修理を補装具の製作又は修理を業とする者 (以下「業者」という。) に委託しようとするときは、三郷市補装具交付 (修理) 委託通知書 ( 様式第4号 ) により通知するものとする。</p>

<p class="jorei-article">(費用の徴収等) 第6条 法第56条第5項の規定により本人又はその扶養義務者 (以下「納入義務者」という。) に支払を命じ、又は法第56条第7項の規定により納入義務者から徴収する費用の額は当該児童の属する世帯の前年分の所得税額等に応じて月額によって決定するものとし、その額は 別表 に定める基準により算定した額とする。</p>

<p class="jorei-article">(費用の請求等) 第7条 補装具の交付又は修理を行った業者が費用を請求しようとするときは、所定の請求書を市長に提出するものとする。</p>

<p>(交付・修理台帳の整備) 第8条 福祉事務所長は、補装具の交付・修理の状況を明確にするため補装具交付・修理台帳を整備しておくものとする。</p>

</div>` },
    { id: 103, title: '三郷市青少年問題協議会条例', category: '教育・文化', keywords: ['青少年', '問題', '協議会'], summary: '青少年問題協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000293.html' },
    { id: 104, title: '三郷市スポーツ推進審議会条例', category: '教育・文化', keywords: ['スポーツ', '推進', '審議会'], summary: 'スポーツ推進審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000297.html' },
    { id: 105, title: '三郷市スポーツ推進委員設置条例', category: '教育・文化', keywords: ['スポーツ', '推進委員', '地域'], summary: 'スポーツ推進委員の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000298.html' },
    { id: 106, title: '三郷市体育館設置及び管理条例', category: '教育・文化', keywords: ['体育館', 'スポーツ施設', '設置'], summary: '体育館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000300.html' },
    { id: 107, title: '三郷市立小・中学校体育施設の開放に関する規則', category: '教育・文化', keywords: ['学校開放', '体育施設', 'スポーツ'], summary: '学校体育施設の開放に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000303.html' },
    { id: 108, title: '三郷市文化財保護条例', category: '教育・文化', keywords: ['文化財', '保護', '歴史', '伝統'], summary: '文化財の保護に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000308.html',
        fullText: `<div class="jorei-header">○三郷市立児童館運営協議会規則<br>昭和52年4月22日 規則第12号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規則は、 三郷市立児童館設置及び管理条例 (昭和52年条例第3号) 第4条第2項 の規定に基づき、三郷市立児童館運営協議会 (以下「協議会」という。) について必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(所掌事項) 第2条 協議会は、 次の各号 に掲げる事項を調査審議する。</p>

<p class="jorei-article">(組織) 第3条 協議会は、委員15人以内で組織する。</p>

<p class="jorei-article">(会長及び副会長) 第4条 協議会に会長及び副会長を置き、委員の互選によりこれを定める。</p>

<p class="jorei-article">(任期) 第5条 委員の任期は、2年とする。 ただし、再任を妨げない。</p>

<p class="jorei-article">(会議) 第6条 協議会は、会長が招集し、会議の議長となる。</p>

<p class="jorei-article">(庶務) 第7条 協議会の庶務は、こども未来部こども政策課において処理する。</p>

<p class="jorei-article">(協議会への委任) 第8条 条例及びこの規則に定めるもののほか、協議会の運営に関し必要な事項は、協議会が別に定める。</p>

</div>` },

    // ===== 第8編 民生 =====
    { id: 109, title: '三郷市福祉事務所設置条例', category: '民生・福祉', keywords: ['福祉事務所', '社会福祉', '生活保護'], summary: '福祉事務所の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000312.html' },
    { id: 110, title: '三郷市社会福祉法人の助成に関する条例', category: '民生・福祉', keywords: ['社会福祉法人', '助成', '福祉'], summary: '社会福祉法人への助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000318.html' },
    { id: 111, title: '三郷市児童発達支援センター設置及び管理条例', category: '民生・福祉', keywords: ['児童発達支援', '障害児', '療育'], summary: '児童発達支援センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000335.html',
        fullText: `<div class="jorei-header">○三郷市高齢者軽度生活援助事業実施要綱<br>平成12年3月31日 告示第100号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、軽易な日常生活の援助を行うことにより、居宅での高齢者の自立した生活の継続を可能にするとともに、要介護状態への進行を防止することを目的とする。</p>

<p class="jorei-article">(実施主体) 第2条 三郷市高齢者軽度生活援助事業 (以下「事業」という。) の実施主体は、三郷市とする。 ただし、事業を社会福祉法人又は適切な事業運営が確保できると市長が認める民間事業者若しくは団体に委託することができる。</p>

<p class="jorei-article">(対象者) 第3条 この事業の対象となる者 (以下「対象者」という。) は、介護保険法 (平成9年法律第123号。以下「法」という。) 第9条第1号に規定する本市の第1号被保険者で、 次の各号 のいずれかに該当する者とする。</p>

<p class="jorei-article">(軽度生活援助サービス内容) 第4条 この事業のサービスを提供する者 (以下「生活援助員」という。) が行うサービス内容は、次に掲げるもののうち市長が必要と認めるものとする。</p>

<p class="jorei-article">(利用時間等) 第5条 この事業を対象者が利用できる日は、次に掲げる日を除いた日とする。</p>

<p class="jorei-article">(申請) 第6条 対象者が、この事業を利用しようとするときは、三郷市高齢者軽度生活援助利用申請書 ( 様式第1号 ) により市長に申請しなければならない。</p>

<p class="jorei-article">(決定及び通知) 第7条 市長は、 前条 の申請があったときは、申請内容を審査し、その可否を決定し、三郷市高齢者軽度生活援助利用可否決定通知書 ( 様式第2号 ) により当該申請者に通知しなければならない。</p>

<p class="jorei-article">(利用者の登録) 第8条 市長は、 前条 の規定により利用決定を受けた者 (以下「利用者」という。) を利用者名簿に登録するものとする。</p>

<p class="jorei-article">(台帳の整備) 第9条 この事業の受託者は、生活援助員が提供した軽度生活援助サービス記録台帳及び利用者の状況等の個別利用台帳を整備しなければならない。</p>

<p class="jorei-article">(変更の届出) 第10条 利用者は、利用状況等に変更が生じたときは、速やかに三郷市高齢者軽度生活援助利用変更届 ( 様式第3号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(利用者負担) 第11条 利用者は、この事業のサービス利用に係る実経費の1割相当額 (以下「利用料」という。) を負担するものとする。 この場合において、利用料は直接この事業の受託者に支払うものとする。</p>

<p class="jorei-article">(利用の取消し) 第12条 市長は、利用者が次のいずれかに該当するときは、この事業の利用の決定を取り消すことができる。</p>

<p class="jorei-article">(生活援助員の守秘義務) 第13条 生活援助員は、利用者の人格を尊重するとともに、その身上及び家庭に関する職務上知り得た秘密を他に漏らしてはならない。</p>

<p class="jorei-article">(雑則) 第14条 この要綱 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 112, title: '三郷市保育所設置及び管理条例', category: '民生・福祉', keywords: ['保育所', '保育', '子育て'], summary: '保育所の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000340.html',
        fullText: `<div class="jorei-header">○三郷市高齢者公衆浴場利用料金補助事業実施要綱<br>平成3年6月5日 告示第69号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、長年社会に貢献した高齢者に対し、市内の公衆浴場を利用する場合、入浴料金の一部を補助することにより、心身の健康保持に寄与し、もって高齢者の福祉増進を図ることを目的とする。</p>

<p class="jorei-article">(用語の定義) 第2条 この要綱 において「公衆浴場」とは、公衆浴場法 (昭和23年法律第139号) 第1条第1項に規定する施設で本市と協定を結んだ浴場をいう。</p>

<p class="jorei-article">(対象者) 第3条 この要綱 により補助を受けることができる者 (以下「対象者」という。) は、本市に居住し、かつ、住民基本台帳法 (昭和42年法律第81号) により記録されている者で、満65歳以上の者をいう。</p>

<p class="jorei-article">(補助の方法及び補助額) 第4条 補助の方法は、対象者に三郷市高齢者公衆浴場入浴券 ( 様式第1号 。以下「入浴券」という。) を交付することにより行う。</p>

<p class="jorei-article">(申請) 第5条 入浴券の交付を受けようとする者は、三郷市高齢者公衆浴場利用申請書 ( 様式第2号 ) により市長に申請しなければならない。</p>

<p class="jorei-article">(入浴券の交付) 第6条 市長は、 前条 の規定により補助の対象者と認めたときは、入浴券を申請月分から1月につき4枚交付するものとする。</p>

<p class="jorei-article">(入浴券の利用) 第7条 入浴券により公衆浴場を利用するときは、利用者は、当該入浴券を公衆浴場に提出するとともに、自己負担額を支払うものとする。</p>

<p class="jorei-article">(入浴券の有効期間) 第8条 入浴券の有効期間は、当該入浴券を交付した日の属する年度の末日までとする。</p>

<p class="jorei-article">(入浴券の譲渡の禁止) 第9条 交付を受けた入浴券は、他人に譲渡してはならない。</p>

<p class="jorei-article">(補助の取消し等) 第10条 市長は、偽りその他不正な手段により入浴券の交付を受けた者があるとき又は入浴券を不正に利用した者があるときは、交付した入浴券を返還させるとともに、既に補助した金額の全部又は一部を返納させることができる。</p>

<p class="jorei-article">(変更届等) 第11条 第6条 の規定により入浴券の交付を受けた者が、 第3条 に規定する対象者の資格を喪失したとき又は 第5条 の申請の内容に変更があったときは、速やかに三郷市高齢者公衆浴場利用変更 (資格喪失) 届 ( 様式第3号 ) により、市長に届出しなければならない。</p>

<p class="jorei-article">(協定) 第12条 市長は、本事業を円滑に運営するため、三郷市高齢者公衆浴場利用料金補助事業実施に関する協定書 ( 様式第4号 ) により 第2条 に規定する公衆浴場の事業者と協定するものとする。</p>

<p class="jorei-article">(その他) 第13条 この要綱 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 113, title: '三郷市地域型保育事業の設備及び運営の基準に関する条例', category: '民生・福祉', keywords: ['地域型保育', '小規模保育', '子育て'], summary: '地域型保育事業の基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000354.html' },
    { id: 114, title: '三郷市放課後児童健全育成事業の設備及び運営の基準に関する条例', category: '民生・福祉', keywords: ['放課後', '児童クラブ', '学童'], summary: '放課後児童クラブの基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000356.html',
        fullText: `<div class="jorei-header">○三郷市身体障害者訪問入浴サービス事業実施要綱<br>平成12年3月31日 告示第105号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、入浴が困難な身体障害者に対し、訪問入浴サービスを行うことにより、身体障害者の福祉の向上と介護者の負担の軽減を図ることを目的とする。</p>

<p class="jorei-article">(対象者) 第2条 訪問入浴サービスの対象となる者は、本市に住所を有する身体障害者手帳の交付を受けた者で、次に掲げるものとする。</p>

<p class="jorei-article">(実施方法) 第3条 訪問入浴サービスは、対象者1人あたり月3回受けることができる。</p>

<p class="jorei-article">(申請) 第4条 訪問入浴サービスを受けようとする者又はその介護者 (以下「申請者」という。) は、三郷市訪問入浴サービス申請書 ( 様式第1号 ) に三郷市訪問入浴サービス承諾書 ( 様式第2号 ) 及び入浴許可診断書 ( 様式第3号 ) を添えて市長に申請しなければならない。</p>

<p class="jorei-article">(決定及び通知) 第5条 前条 の申請があったときは、市長は速やかに訪問入浴サービスに関し必要な事項を審査し、その可否を決定するとともに、当該結果を三郷市訪問入浴サービス利用決定 (申請却下) 通知書 ( 様式第4号 ) により当該申請者に通知するものとする。</p>

<p class="jorei-article">(届出) 第6条 申請者は、訪問入浴サービスの利用決定を受けていた者が次のいずれかに該当したときは、遅滞なく市長に届け出なければならない。</p>

<p class="jorei-article">(台帳の整備) 第7条 市長は、訪問入浴サービス利用台帳を備え、利用者の状況を記録しておくものとする。</p>

<p class="jorei-article">(その他) 第8条 この要綱 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 115, title: '三郷市子ども・子育て会議条例', category: '民生・福祉', keywords: ['子ども', '子育て', '会議'], summary: '子ども・子育て会議に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000360.html',
        fullText: `<div class="jorei-header">○三郷市福祉タクシー利用料金補助事業実施要綱<br>平成3年5月22日 告示第64号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱は、在宅の心身障がい者 (以下「障がい者」という。) がタクシーを利用する場合、その料金の一部を補助することにより、障がい者の外出を容易にし、経済的負担の軽減と障がい者福祉の増進を図ることを目的とする。</p>

<p class="jorei-article">(用語の定義) 第2条 この要綱において「福祉タクシー協定事業者」とは、道路運送法 (昭和26年法律第183号) 第3条第1号ハに規定する一般乗用旅客自動車運送事業で同法第4条の規定による免許を受け、本市と協定を結んだ事業者をいう。</p>

<p class="jorei-article">(対象者) 第3条 この要綱により補助を受けることができる者 (以下「対象者」という。) は本市に居住し、かつ、住民基本台帳法 (昭和42年法律第81号) により記録されている者で 次の各号 のいずれかに該当する者とする。 ただし、 三郷市重度心身障害者自動車燃料費助成事業実施要綱 (平成13年告示第80号) に規定する助成券 (以下「助成券」という。) の交付を受けている者を除く。</p>

<p class="jorei-article">(補助の方法及び補助額) 第4条 補助の方法は、対象者に三郷市福祉タクシー利用券 ( 様式第4号 。以下「利用券」という。) を交付することにより行う。</p>

<p class="jorei-article">(登録の申請) 第5条 利用券の交付を受けようとする者は、三郷市福祉タクシー利用者登録申請書 ( 様式第1号 ) により、市長に申請しなければならない。</p>

<p class="jorei-article">(登録) 第6条 前条第1項 の規定により申請があったときは、その内容を審査し、対象者に該当すると認めた場合は、三郷市福祉タクシー利用者登録簿 ( 様式第5号 。以下「登録簿」という。) に登録するものとする。</p>

<p class="jorei-article">(利用券の交付) 第7条 市長は、 前条 の規定により補助の対象者と認めたときは、利用券を、申請した日の属する月から1月に3枚の割合で、当該年度分の交付枚数は35枚を上限に交付するものとする。</p>

<p class="jorei-article">(助成券からの変更) 第7条の2 第3条 の規定にかかわらず、市長が特別の理由があると認めるときは、助成券を利用券に引き換えることができる。</p>

<p class="jorei-article">(利用券の利用) 第8条 福祉タクシーを利用するときは、利用者は、当該福祉タクシーの乗務員に対し、利用券を提出し、併せて身体障害者手帳、療育手帳又は精神障害者保健福祉手帳を提示しなければならない。</p>

<p class="jorei-article">(利用券の有効期間) 第9条 利用券の有効期間は、当該利用券を交付した日の属する年度の末日までとする。</p>

<p class="jorei-article">(利用券の譲渡の禁止) 第10条 利用券は、これを他人に譲渡し、又は不正に使用してはならない。</p>

<p class="jorei-article">(補助の取消し) 第11条 市長は、偽りその他不正な手段により利用券の交付を受けた者があるとき又は利用券を不正に利用した者があるときは、交付した利用券を返還させるとともに、既に補助した金額の全部又は一部を返納させることができる。</p>

<p class="jorei-article">(届出の義務) 第12条 第7条 の規定により利用券の交付を受けた者が、 第3条 に規定する対象者の資格を喪失したとき又は登録事項に変更があったときは、速やかに三郷市福祉タクシー利用者登録事項内容変更届 ( 様式第2号 ) 及び三郷市福祉タクシー利用者登録事項資格喪失届 ( 様式第3号 ) により、市長に届出しなければならない。</p>

<p class="jorei-article">(協定) 第13条 市長は、本事業を円滑に運営するため、三郷市福祉タクシー利用料金補助事業実施に関する協定書により、福祉タクシー協定事業者と協定するものとする。</p>

<p class="jorei-article">(その他) 第14条 この要綱に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 116, title: '三郷市立児童館設置及び管理条例', category: '民生・福祉', keywords: ['児童館', '子ども', '居場所'], summary: '児童館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000361.html',
        fullText: `<div class="jorei-header">○三郷市障害者自動車運転免許取得費補助要綱<br>昭和58年11月22日 告示第110号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、自動車運転免許 (以下「運転免許」という。) を取得しようとする身体障害者、知的障害者及び精神障害者 (以下「障害者」という。) にその取得に要する費用の一部を補助することにより、障害者の福祉の増進することを目的とする。</p>

<p class="jorei-article">(対象者) 第2条 補助金を受けることができる障害者は、本市に住所を有する者で次に該当する者とする。</p>

<p class="jorei-article">(運転免許の種類) 第3条 この補助の対象となる運転免許の種類は、第1種普通自動車運転免許とし、道路交通法施行規則 (昭和35年総理府令第60号) 第23条に定める表中、運動能力の欄第2号の規定により運転できる自動車の種類、操縦装置又は身体について限定されているものとする。</p>

<p class="jorei-article">(補助率及び補助限度額) 第4条 補助金率は、 前条 に規定する運転免許を取得するために、都道府県公安委員会指定の教習所で要した入学金、教習料、技能検定料及び受験料の経費総額の3分の2以内とし、補助限度額は12万円とする。</p>

<p class="jorei-article">(交付申請) 第5条 規則第4条第1項 の規定により補助金の交付申請をしようとするときは、三郷市障害者運転免許取得費補助金交付申請書 ( 様式第1号 ) により、行うものとする。</p>

<p class="jorei-article">(交付決定通知) 第6条 規則第7条 の規定による交付決定の通知は、三郷市障害者自動車運転免許取得費補助金交付 (決定・却下) 通知書 ( 様式第2号 ) によるものとする。</p>

<p class="jorei-article">(実績報告) 第7条 規則第13条 の規定により実績報告をしようとするときは、三郷市障害者運転免許取得費補助金実績報告書 ( 様式第3号 ) によるものとする。</p>

<p class="jorei-article">(補助金の額の確定) 第8条 規則第14条 の規定による補助金の額の確定通知は、三郷市障害者自動車運転免許取得費補助金交付額確定通知書 ( 様式第4号 ) によるものとする。</p>

<p class="jorei-article">(補助金の請求) 第9条 前条 の規定により補助金の額の確定を通知された者が補助金の交付請求をしようとするときは、三郷市障害者自動車運転免許取得費補助金請求書 ( 様式第5号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(その他) 第10条 この要綱 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 117, title: '三郷市児童遊園設置条例', category: '民生・福祉', keywords: ['児童遊園', '公園', '子ども'], summary: '児童遊園の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000365.html' },
    { id: 118, title: '三郷市児童クラブ設置及び管理条例', category: '民生・福祉', keywords: ['児童クラブ', '学童', '放課後'], summary: '児童クラブの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000369.html',
        fullText: `<div class="jorei-header">○三郷市在宅重度心身障害者手当支給条例<br>昭和54年12月20日 条例第21号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例 は、市内に居住する在宅重度心身障害者 (以下「障害者」という。) に在宅重度心身障害者手当 (以下「手当」という。) を支給することにより、これらの者の経済的、精神的負担の軽減を図ることを目的とする。</p>

<p class="jorei-article">(対象者) 第2条 この条例 において、手当を受給することができる対象者は、 次の各号 のいずれかに該当する障害者とする。</p>

<p class="jorei-article">(受給資格等) 第3条 市内に住所を有し、 前条 に該当する者は、 この条例 の定めるところにより、手当を受けることができる。</p>

<p class="jorei-article">(支給制限) 第4条 前条 の規定にかかわらず、 次の各号 のいずれかに該当する者には手当を支給しない。</p>

<p class="jorei-article">(受給資格の喪失) 第5条 第3条第2項 の認定を受けた者 (以下「受給者」という。) が 次の各号 のいずれかに該当するときは、手当の受給資格を失う。</p>

<p class="jorei-article">(手当の額等) 第6条 手当の額は、障害者1人につき月額5,000円とする。 ただし、65歳以上の者で、新たに 第2条 に該当することとなったものは、月額2,500円とする。</p>

<p class="jorei-article">(支給期間) 第7条 手当の支給は、申請日の属する月の翌月 (これらの日が月の初日であるときは、その日の属する月) から受給資格を失った日の属する月までとする。</p>

<p class="jorei-article">(不正利得の返還) 第8条 市長は、偽りその他不正の手段により手当の支給を受ける者があるときは、受給額に相当する金額をその者から返還させることができる。</p>

<p class="jorei-article">(受診命令) 第9条 市長は、必要があると認めるときは、受給者に対して、障害の程度について判定を受けるよう命ずることができる。</p>

<p class="jorei-article">(委任) 第10条 この条例 に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 119, title: '三郷市こども医療費支給に関する条例', category: '民生・福祉', keywords: ['子ども', '医療費', '助成', '子育て支援'], summary: '子どもの医療費助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000381.html' },
    { id: 120, title: '三郷市ひとり親家庭等の医療費の支給に関する条例', category: '民生・福祉', keywords: ['ひとり親', '医療費', '助成', '母子家庭'], summary: 'ひとり親家庭の医療費助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000383.html' },
    { id: 121, title: '三郷市老人デイサービスセンター設置及び管理条例', category: '民生・福祉', keywords: ['高齢者', 'デイサービス', '介護'], summary: '老人デイサービスセンターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000390.html',
        fullText: `<div class="jorei-header">○三郷市介護保険運営協議会規則<br>平成12年3月31日 規則第50号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市介護保険条例 (平成12年条例第18号。以下「条例」という。) 第7条 の規定に基づき、三郷市介護保険運営協議会 (以下「協議会」という。) に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(会長及び副会長) 第2条 協議会に会長及び副会長を置き、委員の互選によりこれを定める。</p>

<p class="jorei-article">(会議) 第3条 協議会は、会長がこれを招集する。</p>

<p class="jorei-article">(所掌事項の例示) 第4条 条例第4条 に規定する介護保険事業に関する事項は、おおむね次のとおりとする。</p>

<p class="jorei-article">(資料の要求) 第5条 協議会は、必要な資料の提出を市長に求めることができる。</p>

<p class="jorei-article">(市長等の出席) 第6条 協議会は、必要と認めるときは、市長及び関係職員の出席を求め、意見を聞くことができる。</p>

<p class="jorei-article">(会議録の作成) 第7条 会長は、協議会の議事について、次に定める事項を記載した会議録を作成しなければならない。</p>

<p class="jorei-article">(公印) 第8条 会長の公印は、 次の表 のとおりとする。</p>

<p class="jorei-article">(庶務) 第9条 協議会の庶務は、いきいき健康部介護保険課において処理する。</p>

<p class="jorei-article">(委任) 第10条 この規則に定めるもののほか、必要な事項は、協議会が定める。</p>

</div>` },
    { id: 122, title: '三郷市老人福祉センター設置及び管理条例', category: '民生・福祉', keywords: ['高齢者', '福祉センター', '交流'], summary: '老人福祉センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000392.html',
        fullText: `<div class="jorei-header">○三郷市介護認定審査会規則<br>平成12年3月31日 規則第45号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市介護保険条例 (平成12年条例第18号) 第9条 の規定に基づき、三郷市介護認定審査会 (以下「認定審査会」という。) に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(委員の委嘱等) 第2条 認定審査会の委員は、市長が委嘱する。</p>

<p class="jorei-article">(委員の構成) 第3条 委員は、保健・医療・福祉の各分野に関する学識経験 (以下「学識経験」という。) の均衡に配慮した構成とする。</p>

<p class="jorei-article">(会長) 第4条 認定審査会に会長を置き、委員の互選によってこれを定める。</p>

<p class="jorei-article">(合議体) 第5条 合議体の数は、8とする。</p>

<p class="jorei-article">(合議体の座長) 第6条 合議体に座長を置き、当該合議体を構成する委員の互選によってこれを定める。</p>

<p class="jorei-article">(合議体の招集) 第7条 合議体は、会長が招集する。</p>

<p class="jorei-article">(審査判定) 第8条 認定審査会は、認定調査票 (基本調査及び特記事項に限る。) 及び主治医意見書に基づき、要介護認定等に係る介護認定審査会による審査及び判定の基準等に関する省令 (平成11年厚生省令第58号) に定める要支援認定基準及び要介護認定基準により、次に掲げる事項について審査判定を行う。</p>

<p class="jorei-article">(審査判定業務の受託) 第9条 認定審査会は、生活保護法 (昭和25年法律第144号) 第15条の2に規定する介護扶助及び中国残留邦人等の円滑な帰国の促進並びに永住帰国した中国残留邦人等及び特定配偶者の自立の支援に関する法律 (平成6年法律第30号。以下「支援法」という。) 第14条に規定する介護支援給付の決定のための要介護認定に係る審査判定業務を行うことができる。</p>

<p class="jorei-article">(審査判定の受託) 第10条 前条 の規定により認定審査会が審査判定を行うことができる者は、生活保護法第6条第2項に規定する要保護者及び支援法第14条に規定する要支援給付者で、かつ、生活保護法第19条 (支援法第14条第4項でその例によるものとされた場合を含む。) の規定により市長が実施責任を負う40歳以上65歳未満の医療保険未加入の者とする。</p>

<p class="jorei-article">(合議体の議決) 第11条 合議体の議決は、出席委員 (座長を含む。) の過半数をもって決し、可否同数のときは、座長の決するところによる。</p>

<p class="jorei-article">(会議の非公開) 第12条 認定審査会は、原則非公開とする。</p>

<p class="jorei-article">(秘密を守る義務) 第13条 委員は、職務上知り得た秘密を漏らしてはならない。 その職を退いた後もまた同様とする。</p>

<p class="jorei-article">(庶務) 第14条 認定審査会の庶務は、いきいき健康部介護保険課において処理する。</p>

<p class="jorei-article">(公印) 第15条 介護認定審査会長の公印は、 別表 のとおりとする。</p>

<p class="jorei-article">(補則) 第16条 この規則に定めるもののほか、必要な事項は、認定審査会が定める。</p>

</div>` },
    { id: 123, title: '三郷市後期高齢者医療に関する条例', category: '民生・福祉', keywords: ['後期高齢者', '医療', '保険'], summary: '後期高齢者医療に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000400.html',
        fullText: `<div class="jorei-header">○地域の健康づくり推進事業委託要綱<br>平成2年4月2日 告示第50号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱は、市内地域住民を対象に健康づくりを推進する町会その他の自治組織 (以下「町会等」という。) に健康づくり事業 (以下「事業」という。) の委託をし、もって住民の健康の維持及び増進を図ることを目的とする。</p>

<p class="jorei-article">(事業内容) 第2条 事業の内容は、次のとおりとする。</p>

<p class="jorei-article">(健康づくり推進会議の設置) 第3条 町会等は、町会等の実情に応じて事業を推進するため、おおむね5人以上の健康づくり推進委員による健康づくり推進会議を設置するものとする。</p>

<p class="jorei-article">(対象経費) 第4条 事業の委託料の対象経費は、需用費 (食料費を除く。ただし、軽微な茶菓代等は、この限りでない。) 、会場使用料、賃借料及び講師派遣等の謝金に要する経費とする。</p>

<p class="jorei-article">(委託料の算定) 第5条 事業の委託料は、1年度につき30,000円を限度とし、 前条 の対象経費の支出額とする。</p>

<p class="jorei-article">(申込書の提出) 第6条 事業を実施しようとする町会等は、毎年6月末日までに地域の健康づくり推進事業申込書 ( 様式第1号 ) を、市長に提出しなければならない。</p>

<p class="jorei-article">(委託の決定) 第7条 市長は、 前条 による申込内容が 第2条 の事業内容に該当すると認められるもののうちから、予算の範囲内で委託する町会等を選定し、地域の健康づくり推進事業委託書 ( 様式第2号 ) により委託するものとする。</p>

<p class="jorei-article">(請求) 第8条 年度の事業が完了した町会等は、地域の健康づくり推進事業請求書 ( 様式第3号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(健康づくり関係団体等との関係) 第9条 町会等は、事業の実施に当たっては、健康づくり関係団体等の協力を求めて推進に努めなければならない。</p>

<p class="jorei-article">(その他) 第10条 この要綱に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 124, title: '三郷市障害支援区分審査会の委員の定数等を定める条例', category: '民生・福祉', keywords: ['障害', '支援区分', '審査会'], summary: '障害支援区分審査会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000415.html',
        fullText: `<div class="jorei-header">○三郷市公害防止条例施行規則<br>昭和50年11月11日 規則第29号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市公害防止条例 (昭和50年条例第24号。以下「条例」という。) の施行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(規制基準) 第2条 条例第14条第1項 に規定する規則で定める規制基準は、 次の表 に掲げる種類に応じ、 別表 のとおりとする。</p>

<p class="jorei-article">(事故発生報告) 第3条 条例第17条第1項 の規定による報告は、電話等の迅速な方法によりその状況を報告するとともに、速やかに事故発生報告書 ( 様式第1号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(事故復旧の届出) 第4条 条例第17条第2項 の規定による届出は、事故復旧工事完了届出書 ( 様式第2号 ) により行うものとする。</p>

<p class="jorei-article">(公害防止措置完了届出書) 第5条 条例第19条 の規定による届出は、公害防止措置完了届出書 ( 様式第3号 ) により行うものとする。</p>

<p class="jorei-article">(実施の届出) 第6条 条例第20条第1項第6号 の規則で定める事項は、次のとおりとする。</p>

<p class="jorei-article">(協定締結の通知) 第7条 市長は、協定を締結する必要がある者に対し、公害防止協定締結通知書 ( 様式第5号 ) により通知するものとする。</p>

<p class="jorei-article">(協定の締結) 第8条 前条 の規定による通知を受けた者は、速やかに市長と協議のうえ、協定の締結に努めるものとする。</p>

<p class="jorei-article">(身分を示す証明書) 第9条 条例第32条第2項 に規定する身分を示す証明書は、立入検査証 ( 様式第6号 ) とする。</p>

</div>` },
    { id: 125, title: '三郷市障がい者福祉施設みさと設置及び管理条例', category: '民生・福祉', keywords: ['障害者', '福祉施設', '支援'], summary: '障がい者福祉施設みさとの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000419.html' },
    { id: 126, title: '三郷市障がい者等の利用に係る公の施設使用料減免条例', category: '民生・福祉', keywords: ['障害者', '減免', '公共施設'], summary: '障がい者等の施設使用料減免に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000429.html',
        fullText: `<div class="jorei-header">○三郷市印鑑条例施行規則<br>昭和57年3月26日 規則第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市印鑑条例 (昭和57年条例第5号。以下「条例」という。) の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(定義) 第2条 条例第16条第2項 に規定する「当該申請等の権限について委任の旨を証する書面」とは、代理人選任届及び委任状をいう。</p>

<p class="jorei-article">(登録印鑑の制限) 第3条 条例第3条第2項第6号 に規定する印鑑は、次に掲げるものとする。</p>

<p class="jorei-article">(登録申請の確認) 第4条 条例第5条第2項 に規定する「市長が定める期日」とは、照会書発送の日の翌日から起算して30日以内とする。 ただし、その期日が 職員の勤務時間、休日及び休暇に関する条例 (平成7年条例第3号) 第3条第1項 に規定する週休日又は 第9条 に規定する祝日法による休日若しくは年末年始の休日に当たるときは、その翌日とする。</p>

<p class="jorei-article">(印鑑登録証の引替交付) 第5条 条例第9条 の規定に基づき印鑑登録証の引替交付を受けようとする者は、印鑑登録証を持参して、市長に申請しなければならない。</p>

<p class="jorei-article">(印鑑登録原票の再製) 第6条 市長は、印鑑登録原票を再製する必要がある場合は、印鑑登録者に対し印鑑登録原票に登録されている印鑑及び印鑑登録証の提出を求め印鑑登録原票を再製することができる。</p>

<p class="jorei-article">(印鑑登録証の返納) 第7条 市長は、 条例第13条第1項第2号 、 第3号 、 第5号 、 第6号 及び 第7号 の規定により印鑑登録を抹消するとき又は抹消したときは、印鑑登録証を返納させるものとする。</p>

<p class="jorei-article">(証明書の作成) 第8条 条例第14条第1項 の印鑑登録証明書の作成は、電子計算組織を使用し行うものとする。 ただし、電子計算組織により作成することができない場合は、その他の方法により作成するものとする。</p>

<p class="jorei-article">(印鑑登録証明書の交付) 第9条 条例第15条第1項 に規定する印鑑登録証明書の交付の申請があったときは、印鑑登録証及び印鑑登録証明書交付申請書の記載事項と印鑑登録原票の登録事項とを照合した上、当該交付の申請をした者に印鑑登録証明書を交付するものとする。</p>

<p class="jorei-article">(印鑑登録証明の保護) 第10条 印鑑登録者は、登録した印鑑について印鑑登録証明の保護を受けようとするときは、印鑑登録証明保護申請書に、印鑑登録証、登録印鑑及び自己の写真1枚を添えて、自ら市長に申請しなければならない。 この場合における自己の写真1枚の添付は、 条例第5条第3項第1号 の文書の写しの添付に替えることができる。</p>

<p class="jorei-article">(文書の保存年限) 第11条 印鑑の登録及び証明に関する文書の保存年限は、次のとおりとする。</p>

<p class="jorei-article">(申請書等の様式) 第12条 条例 及びこの規則の施行に関し必要な申請書等の様式は、 別表 に定めるところによる。</p>

<p class="jorei-article">(雑則) 第13条 この規則に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 127, title: '三郷市こころつながる手話言語条例', category: '民生・福祉', keywords: ['手話', '言語', '障害者', 'コミュニケーション'], summary: '手話言語に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000437.html',
        fullText: `<div class="jorei-header">○三郷市防災行政用無線局管理規程<br>昭和63年3月24日 訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この訓令は、三郷市防災行政用無線局 (以下「無線局」という。) の適正な管理運用について、電波法 (昭和25年法律第131号。以下「法」という。) 及び関係法令に定めるもののほか必要な事項を定め、もって三郷市地域防災計画に基づく災害対策の迅速かつ的確な通信を確保するとともに、一般行政事務の円滑な運営に資することを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この訓令において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(無線局の回線構成及び配線等) 第3条 無線局の回線構成及び配線等は、 別表 のとおりとする。</p>

<p class="jorei-article">(無線局の職員) 第4条 無線局に総括管理者、通信管理責任者、通信管理者、通信取扱責任者及び通信取扱者を置く。</p>

<p class="jorei-article">(総括管理者) 第5条 総括管理者は、無線局の管理運用の業務を総括し、通信管理責任者を指揮監督する。</p>

<p class="jorei-article">(通信管理責任者) 第6条 通信管理責任者は、総括管理者の命を受け、その無線局の管理運用の業務を所掌するとともに通信管理者及び通信取扱責任者を指揮監督する。</p>

<p class="jorei-article">(通信管理者) 第7条 通信管理者は、通信管理責任者の命を受け、当該部署又は施設に配置した移動局の管理及び監督の業務を所掌する。</p>

<p class="jorei-article">(通信取扱責任者) 第8条 通信取扱責任者は、通信管理責任者の命を受け、無線局の運用状況の把握に努め、通信業務に従事する。</p>

<p class="jorei-article">(通信取扱者) 第9条 通信取扱者は、通信管理者の命を受け、通信業務に従事する。</p>

<p class="jorei-article">(無線従事者の養成等) 第10条 総括管理者は、無線従事者を確保するため、常に無線従事者の養成に努めるものとする。</p>

<p class="jorei-article">(備え付け書類の管理等) 第11条 通信管理責任者は、法及び関係法令に基づく業務書類を管理保管する。</p>

<p class="jorei-article">(無線設備の保守点検) 第12条 無線設備の正常な機能維持を確保するため 次の各号 に掲げる保守点検を行うものとし、当該保守点検の責任者は、 当該各号 に定める者とする。</p>

<p class="jorei-article">(通信訓練) 第13条 総括管理者は、災害の発生に備え、通信機能の確認及び通信運用の習熟を図るために定期的に緊急通信訓練を行わなければならない。</p>

<p class="jorei-article">(研修) 第14条 総括管理者は、無線局の適切な運用と能率的な利用を図るため、通信取扱者に対して、法、関係法令及び無線設備の取扱要領等の研修を行うものとする。</p>

<p class="jorei-article">(事故の場合の措置) 第15条 通信取扱責任者又は通信取扱者は、事故のため通信を行うことができなくなったときは、直ちに必要な措置をとるとともに、速やかにその旨を通信管理責任者及びその属する移動局の通信管理者に報告しなければならない。</p>

<p class="jorei-article">(その他) 第16条 この訓令に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 128, title: '三郷市重度心身障害者医療費支給に関する条例', category: '民生・福祉', keywords: ['重度障害', '医療費', '助成'], summary: '重度心身障害者の医療費助成に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000439.html',
        fullText: `<div class="jorei-header">○三郷市防災センター設置及び管理条例施行規則<br>平成4年12月15日 規則第26号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、 三郷市防災センター設置及び管理条例 (平成4年条例第25号) の施行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(休館日) 第2条 防災センター (以下「センター」という。) の休館日は、次のとおりとする。</p>

<p class="jorei-article">(利用時間) 第3条 防災展示ホール (以下「ホール」という。) を利用することができる時間は、午前10時から午後4時までとする。 ただし、市長が特別の理由があると認める場合は、この限りでない。</p>

<p class="jorei-article">(利用手続) 第4条 ホールを利用しようとする者は、入館記録簿に必要事項を記入するものとする。</p>

<p class="jorei-article">(雑則) 第5条 この規則 に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 129, title: '三郷市在宅重度心身障害者手当支給条例', category: '民生・福祉', keywords: ['在宅', '重度障害', '手当'], summary: '在宅重度心身障害者手当に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000441.html',
        fullText: `<div class="jorei-header">○三郷市自転車等の放置の防止に関する条例施行規則<br>昭和58年6月16日 規則第19号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、 三郷市自転車等の放置の防止に関する条例 (昭和58年条例第21号。以下「条例」という。) の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(放置禁止区域の指定) 第2条 条例第8条第1項 に規定する自転車等放置禁止区域 (以下「放置禁止区域」という。) は、 別表 に定める区域とする。</p>

<p class="jorei-article">(撤去の周知等) 第3条 市長は、 条例第10条第1項 の規定に基づき自転車等を撤去しようとするときは、あらかじめ警告書又は口頭による警告等必要な告知をするものとする。</p>

<p class="jorei-article">(保管自転車台帳の記載) 第4条 市長は、 条例第10条第1項 の規定に基づき撤去した自転車等を自転車保管台帳 ( 様式第2号 ) 又は原動機付自転車保管台帳 ( 様式第2号の2 ) に記載するものとする。</p>

<p class="jorei-article">(身分証明書等の様式) 第5条 条例第11条 に規定する腕章及び身分証明書は、 様式第3号 及び 様式第3号の2 のとおりとする。</p>

<p class="jorei-article">(公示事項等) 第6条 市長が 条例第13条第2項 の規定により公示する事項は、次に掲げるものとする。</p>

<p class="jorei-article">(保管期間) 第7条 市長が 条例第13条第3項 の規定により保管する期間は、撤去の日から起算して60日間とする。</p>

<p class="jorei-article">(自転車の返還手続) 第8条 市長は、保管した自転車等を利用者等に返還するときは、返還を受ける者にその氏名及び住所を証するに足りる書類を提示させる等の方法によってその者がその自転車等の返還を受けるべき利用者等であることを証明させ、かつ、受領書 ( 様式第4号 及び 様式第4号の2 ) と引換えに返還するものとする。</p>

<p class="jorei-article">(雑則) 第9条 この規則 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 130, title: '三郷市国民健康保険条例', category: '民生・福祉', keywords: ['国民健康保険', '国保', '医療保険'], summary: '国民健康保険に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000450.html' },
    { id: 131, title: '三郷市介護保険条例', category: '民生・福祉', keywords: ['介護保険', '介護', '高齢者'], summary: '介護保険に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000456.html',
        fullText: `<div class="jorei-header">○三郷市立コミュニティセンター設置及び管理条例<br>昭和59年3月21日 条例第10号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 市民の行うコミュニティ及びボランティア活動の用に供し、もって心豊かな地域社会の実現に資するため、三郷市立コミュニティセンター (以下「センター」という。) を設置する。</p>

<p class="jorei-article">(名称及び位置) 第2条 センターの名称及び位置は、次のとおりとする。</p>

<p class="jorei-article">(業務) 第3条 センターは、次に掲げる業務を行う。</p>

<p class="jorei-article">(職員) 第4条 センターに所長及びその他の職員を置く。</p>

<p class="jorei-article">(休館日) 第5条 センターの休館日は、12月28日から翌年の1月4日までの日とする。</p>

<p class="jorei-article">(利用時間) 第6条 施設等を利用することができる時間は、 次の各号 に掲げる日に応じ、 当該各号 に定めるところによる。 ただし、市長が特別の理由があると認める場合は、この限りでない。</p>

<p class="jorei-article">(利用期間) 第7条 施設等を引き続いて利用することができる期間は、2日を超えることができない。 ただし、市長が特別な理由があると認めたときは、これを変更することができる。</p>

<p class="jorei-article">(利用の許可) 第8条 施設等を利用しようとする者は、市長の許可を受けなければならない。 許可に係る事項を変更しようとするときも、同様とする。</p>

<p class="jorei-article">(利用の制限等) 第9条 市長は、 次の各号 のいずれかに該当すると認めるときは、施設等の利用を制限することができる。</p>

<p class="jorei-article">(利用権の譲渡等の禁止) 第10条 第8条 の許可を受けた者 (以下「利用者」という。) は、その権利を他人に譲渡し、又は転貸してはならない。</p>

<p class="jorei-article">(利用許可の取消し等) 第11条 市長は、センターの管理上必要があると認めるとき、又は利用者が 次の各号 のいずれかに該当すると認めるときは、当該許可に係る使用条件を変更し、若しくは利用を停止し、又は当該許可を取り消すことができる。</p>

<p class="jorei-article">(利用者の範囲) 第12条 センターの施設等を利用できる者は、次のとおりとする。</p>

<p class="jorei-article">(原状回復) 第13条 利用者は、センターの施設等の利用を終えたときは、直ちにこれを原状に復さなければならない。 第11条第1項 の規定により利用の停止又は許可の取消しを受けたときも同様とする。</p>

<p class="jorei-article">(損害賠償) 第14条 利用者は、自己の責めに帰すべき理由により、その利用中に施設等を損傷し、又は亡失したときは、これを修理し、又はその損害を賠償しなければならない。</p>

<p class="jorei-article">(使用料の納付) 第15条 利用者は、 別表 に定める使用料を納付しなければならない。</p>

<p class="jorei-article">(使用料の免除) 第16条 市長は、 次の各号 のいずれかに該当する場合は、使用料を免除することができる。</p>

<p class="jorei-article">(使用料の還付等) 第17条 既納の使用料は、還付しない。 ただし、 次の各号 のいずれかに該当する場合は、その全部又は一部を還付する。</p>

<p class="jorei-article">(指定管理者による管理) 第18条 市長は、センターの設置の目的を効果的に達成するため、地方自治法 (昭和22年法律第67号) 第244条の2第3項の規定により、法人その他の団体であって市長が指定するもの (以下「指定管理者」という。) に、センターの管理に関する業務のうち次に掲げるものを行わせることができる。</p>

<p class="jorei-article">(指定管理者の指定の手続) 第19条 指定管理者の指定は、規則で定めるところにより、指定を受けようとするものの申請により行う。</p>

<p class="jorei-article">(指定管理者の公表等) 第20条 市長は、指定管理者の指定をしたときは、当該指定管理者の名称及び主たる事務所の所在地並びに指定の期間を告示しなければならない。</p>

<p class="jorei-article">(管理の基準等) 第21条 指定管理者は、次に掲げる基準により、指定管理業務を行わなければならない。</p>

<p class="jorei-article">(指定の取消し等) 第22条 市長は、指定管理者が 次の各号 のいずれかに該当するときは、指定管理者の指定を取り消し、又は期間を定めて指定管理業務の全部若しくは一部の停止を命ずることができる。</p>

<p class="jorei-article">(指定管理者による施設等の現状変更等) 第23条 指定管理者は、施設等の改修、増設その他の市長が別に定める現状変更を行おうとするときは、あらかじめ市長の承認を得なければならない。</p>

<p class="jorei-article">(委任) 第24条 この条例 に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 132, title: '三郷市介護認定審査会規則', category: '民生・福祉', keywords: ['介護認定', '審査会', '要介護'], summary: '介護認定審査会に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000464.html',
        fullText: `<div class="jorei-header">○三郷市斎場条例施行規則<br>昭和53年6月15日 規則第10号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市斎場条例 (昭和53年条例第6号。以下「条例」という。) の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(利用時間及び休場日) 第2条 三郷市斎場 (以下「斎場」という。) の利用時間及び休場日は、次のとおりとする。 ただし、市長が特別の理由があると認めたときは、この限りでない。</p>

<p class="jorei-article">(利用許可の申請) 第3条 条例第5条 の規定に基づき斎場を利用しようとする者は、 次の各号 に掲げる場合の区分に応じ、 当該各号 に掲げる 様式 により市長に申請するものとする。</p>

<p class="jorei-article">(利用許可) 第4条 条例第5条 の許可は、 次の各号 に掲げる場合の区分に応じ、 当該各号 に掲げる許可証を交付して行うものとする。</p>

<p class="jorei-article">(許可証等の提示又は提出) 第5条 斎場を利用しようとする者は、 第3条第2項 に規定する書類及び 前条 の許可証を場長に提示しなければならない。</p>

<p class="jorei-article">(職員) 第6条 条例第4条 に定めるその他の職員として、斎場技能員を置く。</p>

<p class="jorei-article">(服務) 第7条 場長は、上司の命を受けて場務を掌理し、職員を指揮監督する。</p>

<p class="jorei-article">(場長の代理) 第8条 場長に事故があるときは、あらかじめ場長の指定する職員がその職務を代理する。</p>

<p class="jorei-article">(事務分掌) 第9条 斎場の事務は、次のとおりとする。</p>

<p class="jorei-article">(公印) 第10条 斎場の公印は、次のとおりとする。</p>

<p class="jorei-article">(遵守事項) 第11条 利用者は、職員の指示に従うとともに、次に掲げる事項を遵守しなければならない。</p>

<p class="jorei-article">(雑則) 第12条 この規則に定めるもののほか、必要な事項は、市長が定める。</p>

</div>` },
    { id: 133, title: '三郷市指定居宅介護支援等の事業の人員及び運営等に関する基準を定める条例', category: '民生・福祉', keywords: ['居宅介護', 'ケアマネジャー', '介護支援'], summary: '居宅介護支援事業の基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000467.html',
        fullText: `<div class="jorei-header">○三郷市災害見舞金支給条例<br>昭和54年12月20日 条例第22号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例 は、災害により被害を受けた市民又はその遺族に対し、見舞金又は弔慰金 (以下「災害見舞金」という。) を支給することにより、市民の生活の安定及び福祉の増進に寄与することを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この条例 において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(災害見舞金の支給) 第3条 市長は、市民が災害により被害を受けたときは、 別表 に掲げる区分に基づき災害見舞金を支給する。</p>

<p class="jorei-article">(支給の特例) 第4条 市民が災害により死亡した場合、死亡者に遺族がないときは、死亡者の葬祭執行人に葬祭費として、死亡者1人当たり10万円を支給する。</p>

<p class="jorei-article">(支給の制限) 第5条 災害見舞金は、災害を受けた者又はその遺族の故意による場合は、支給しない。</p>

<p class="jorei-article">(支給の調整) 第6条 災害を受けた者が 三郷市職員公務災害等見舞金支給条例 (昭和49年条例第24号) 第4条 又は 第6条 の規定により、死亡見舞金又は療養見舞金の支給を受けることとなる場合は、 この条例 による災害見舞金は、支給しない。</p>

<p class="jorei-article">(支給の手続) 第7条 災害見舞金を受けようとする者は、災害を受けた日から1月以内に規則で定めるところにより、市長に届け出なければならない。 ただし、特別の事由があると認めるときは、この限りでない。</p>

<p class="jorei-article">(権利譲渡の禁止) 第8条 災害見舞金を受ける権利は、これを他に譲り渡し、又は担保に供することができない。</p>

<p class="jorei-article">(委任) 第9条 この条例 に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 134, title: '三郷市指定地域密着型サービスの事業の人員、設備及び運営等に関する基準を定める条例', category: '民生・福祉', keywords: ['地域密着型', '介護サービス', '基準'], summary: '地域密着型サービスの基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000471.html' },
    { id: 135, title: '三郷市地域包括支援センターの包括的支援事業の実施に関する基準を定める条例', category: '民生・福祉', keywords: ['地域包括', '支援センター', '高齢者'], summary: '地域包括支援センターの基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000473.html',
        fullText: `<div class="jorei-header">○三郷市農業委員会事務局規程<br>平成12年3月27日 農委訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(事務局の設置) 第1条 三郷市農業委員会 (以下「委員会」という。) に事務局を置く。</p>

<p class="jorei-article">(事務局の任務) 第2条 事務局は、委員会に関する事務を処理する。</p>

<p class="jorei-article">(職員及び任免) 第3条 事務局に次の職員を置き、委員会がこれを任免する。</p>

<p class="jorei-article">(職員の定数) 第4条 職員の定数は、 三郷市職員定数条例 (昭和38年条例第9号) の定めるところによる。</p>

<p class="jorei-article">(職員の職務) 第5条 事務局長 (以下「局長」という。) は、会長の命を受け、事務局の事務を掌理し、職員を指揮監督する。</p>

<p class="jorei-article">(係) 第6条 事務局に農地係を置く。</p>

<p class="jorei-article">(所掌事務) 第7条 事務局の所掌事務は、次のとおりとする。</p>

<p class="jorei-article">(専決事項) 第8条 次に掲げる事項は、局長及び次長において専決することができる。 ただし、当該専決の範囲は、局長及び次長の職務に応じ、 三郷市事務専決規程 (平成3年訓令第2号) の例による。</p>

<p class="jorei-article">(専決の制限) 第9条 局長及び次長は、専決することができる事項であっても、次のいずれかに該当すると認められるときは、 前条 の規定にかかわらず、専決することができない。</p>

<p class="jorei-article">(公印) 第10条 委員会、会長及び会長職務代理者の公印は、 別表 のとおり定める。</p>

<p class="jorei-article">(雑則) 第11条 この規程に定めるもののほか、事務の処理及び服務等については、市長の事務部局の例による。</p>

</div>` },
    { id: 136, title: '三郷市健康推進協議会条例', category: '民生・福祉', keywords: ['健康', '推進', '協議会'], summary: '健康推進協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000480.html',
        fullText: `<div class="jorei-header">○三郷市農業振興事業費補助金交付要綱<br>昭和58年11月22日 告示第117号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 市は、農業振興に関する必要な施策を一体的に講ずることにより、都市農業の健全な発展と土地の有効利用を図るため、毎年度予算の範囲内において補助金を交付する。</p>

<p class="jorei-article">(補助金対象者等) 第2条 補助対象となる者は、本市に住所を有する農業者若しくは農業団体又は市長が認める農業団体とし、補助の交付対象となる事業の種類等は、 別表 に定めるとおりとする。</p>

<p class="jorei-article">(申請書の様式及び添付書類) 第3条 規則第4条第1項 に規定する申請書の様式は、 様式第1号 のとおりとする。</p>

<p class="jorei-article">(交付決定通知書の様式) 第4条 規則第7条 に規定する交付決定通知書の様式は、 様式第2号 のとおりとする。</p>

<p class="jorei-article">(補助金の請求) 第5条 前条 の規定による通知を受けた者が補助金の交付を請求しようとするときは、 様式第3号 により市長に請求するものとする。</p>

<p class="jorei-article">(事業内容の変更等) 第6条 補助事業者は、補助事業に要する経費又は補助事業の内容の変更の承認を受けようとするときは、三郷市農業振興事業変更承認申請書 ( 様式第4号 ) を市長に提出しなければならない。 ただし、補助金額に変更が生じない場合は、この限りでない。</p>

<p class="jorei-article">(実績報告書の様式及び提出期限) 第7条 規則第13条 に規定する報告書の様式は、 様式第5号 のとおりとする。</p>

<p class="jorei-article">(補助金額の確定通知) 第8条 規則第14条 の規定による農業振興事業費補助金の額の確定通知は、三郷市農業振興事業費補助金確定通知書 ( 様式第6号 ) により行うものとする。</p>

</div>` },
    { id: 137, title: '三郷市健康福祉会館設置及び管理条例', category: '民生・福祉', keywords: ['健康', '福祉会館', '施設'], summary: '健康福祉会館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000483.html',
        fullText: `<div class="jorei-header">○三郷市商工審議会条例<br>昭和48年3月24日 条例第10号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 経済事情の変動に対処する商工業者の経済の安定、向上及び健全な発展に必要な事項を審議するため、地方自治法 (昭和22年法律第67号) 第138条の4第3項の規定に基づき、三郷市商工審議会 (以下「審議会」という。) を置く。</p>

<p class="jorei-article">(所掌事務) 第2条 審議会は、市長の諮問に応じ、商工行政に関する必要な事項を調査し、及び審議する。</p>

<p class="jorei-article">(委員) 第3条 審議会は、委員10人以内で組織する。</p>

<p class="jorei-article">(会長及び会長代理) 第4条 審議会に会長及び会長代理を置き、委員の互選により定める。</p>

<p class="jorei-article">(会議) 第5条 審議会の会議は、会長が招集する。</p>

<p class="jorei-article">(庶務) 第6条 審議会の庶務は、地域振興部商工観光課において処理する。</p>

<p class="jorei-article">(委任) 第7条 この条例に定めるもののほか、審議会の運営に関し必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 138, title: '三郷市動物の愛護及び管理に関する条例', category: '民生・福祉', keywords: ['動物', '愛護', 'ペット'], summary: '動物の愛護・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000497.html',
        fullText: `<div class="jorei-header">○三郷市家内労働者生業資金貸付審査会規則<br>昭和48年12月28日 規則第28号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 生業資金 (以下「資金」という。) の貸付けの適正かつ円滑な運営を図るため、市長の附属機関として三郷市家内労働者生業資金貸付審査会 (以下「審査会」という。) を置く。</p>

<p class="jorei-article">(所掌事項) 第2条 審査会は、市長の諮問に応じ、次の事項を審議して答申する。</p>

<p class="jorei-article">(組織) 第3条 審査会は、委員5人以内で組織する。</p>

<p class="jorei-article">(委員の任期) 第4条 委員の任期は、それぞれの職にある間とする。</p>

<p class="jorei-article">(会長) 第5条 審査会の会長は、副市長とする。</p>

<p class="jorei-article">(招集) 第6条 審査会は、会長が招集する。</p>

<p class="jorei-article">(定足数及び表決数) 第7条 審査会は、委員の半数以上の出席がなければ会議を開くことができない。</p>

<p class="jorei-article">(庶務) 第8条 審査会の庶務は、地域振興部商工観光課において処理する。</p>

<p class="jorei-article">(委任) 第9条 この規則に定めるもののほか、審査会の運営に関し必要な事項は、審査会が定める。</p>

</div>` },
    { id: 139, title: '三郷市廃棄物の処理及び再利用並びに資源物の持ち去り防止に関する条例', category: '民生・福祉', keywords: ['廃棄物', 'ごみ', 'リサイクル', '再利用'], summary: '廃棄物処理・再利用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000501.html',
        fullText: `<div class="jorei-header">○三郷市建設委員会規程<br>平成4年4月14日 訓令第9号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 公共建設事業の適正かつ円滑な推進を図るため、三郷市建設委員会 (以下「委員会」という。) を置く。</p>

<p class="jorei-article">(所掌事項) 第2条 委員会は、市長の諮問に応じ、市が計画している建設事業について調査及び検討するものとする。</p>

<p class="jorei-article">(組織) 第3条 委員会は、次に掲げる職にある者をもって組織する。</p>

<p class="jorei-article">(委員長及び副委員長) 第4条 委員会に、委員長及び副委員長1人を置く。</p>

<p class="jorei-article">(会議) 第5条 委員会は、委員長が必要に応じて招集し、会議の議長となる。</p>

<p class="jorei-article">(庶務) 第6条 委員会の庶務は、財務部市有財産管理課において処理する。</p>

<p class="jorei-article">(委任) 第7条 この規程に定めるもののほか、委員会の運営に関し必要な事項は、委員長が定める。</p>

</div>` },
    { id: 140, title: '三郷市墓地等の経営の許可等に関する条例', category: '民生・福祉', keywords: ['墓地', '霊園', '経営許可'], summary: '墓地の経営許可に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000513.html',
        fullText: `<div class="jorei-header">○三郷市土地区画整理事業補助金交付要綱<br>平成10年2月13日 告示第19号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、土地区画整理法 (昭和29年法律第119号) 第3条第2項の規定に基づき土地区画整理事業 (以下「事業」という。) を施行する土地区画整理組合 (以下「組合」という。) 又は組合を設立しようとする者に対して予算の範囲内において補助金を交付することにより、事業の円滑な推進を図り、もって良好な市街地の形成に資することを目的とする。</p>

<p class="jorei-article">(補助金の種類) 第2条 市長は、 次の各号 に掲げる者の区分に応じ、 当該各号 に定める補助金を交付する。</p>

<p class="jorei-article">(補助対象経費) 第3条 補助金の交付の対象となる経費は、 次の各号 に掲げる補助金の区分に応じ、 当該各号 に定める経費とする。 ただし、市が特に必要があると認めるときは、この限りでない。</p>

<p class="jorei-article">(補助金の限度額) 第4条 一の事業における補助金の限度額は、 次の各号 に掲げる補助金の区分に応じ、 当該各号 に定める基準により算定した額とする。</p>

<p class="jorei-article">(補助金の申請方法) 第5条 一の事業に係る補助金は、事業施行期間中に分割して申請することができる。</p>

<p class="jorei-article">(補助金の交付申請) 第6条 補助金の交付を受けようとする者は、年度毎に次に掲げる申請書各2通を市長に提出しなければならない。</p>

<p class="jorei-article">(補助金の交付決定) 第7条 市長は、 前条 の交付申請を受理したときは、その内容を審査し、交付が適当と認めるときは、補助金の交付を決定し、土地区画整理事業補助金交付決定通知書 ( 様式第3号 ) により申請者に通知するものとする。</p>

<p class="jorei-article">(計画変更等の承認) 第8条 補助事業の計画を変更し、又は補助事業を中止し、若しくは廃止しようとするときは、 前条 の規定により交付決定を受けた組合又は組合を設立しようとする者 (以下「施行者等」という。) が、 この要綱 による補助対象費用を変更しようとする場合には、あらかじめ土地区画整理事業補助金変更承認申請書 ( 様式第4号 ) を市長に提出し、承認を受けなければならない。</p>

<p class="jorei-article">(補助金の請求) 第9条 第7条 の規定により交付決定を受けた又は 前条 の規定により変更承認を受けた施行者等は、土地区画整理事業補助金請求書 ( 様式第5号 ) 2通を市長に提出しなければならない。</p>

<p class="jorei-article">(完了実績の報告) 第10条 補助金の交付を受けた施行者等は、補助事業完了の日から起算して1箇月を経過した日又は補助事業年度の末日のいずれか早い日までに、土地区画整理事業完了実績報告書 ( 様式第6号 ) 2通を市長に提出しなければならない。</p>

<p class="jorei-article">(額の確定通知) 第11条 規則第14条 の額の確定は、土地区画整理事業補助金交付額確定通知書 ( 様式第7号 ) により通知するものとする。</p>

<p class="jorei-article">(補助金の取消し等) 第12条 補助金の交付決定の通知若しくは変更承認又は既に補助金の交付を受けた施行者等が、 次の各号 のいずれかに該当するときは、市長は、決定若しくは承認した補助金の全部若しくは一部を取り消し、又は既に交付した補助金の全部若しくは一部の返還を命ずることができる。</p>

<p class="jorei-article">(その他) 第13条 この要綱 に定めるもののほか、必要な事項は、市長が定める。</p>

</div>` },
    { id: 141, title: '三郷市ペット霊園の設置の許可等に関する条例', category: '民生・福祉', keywords: ['ペット', '霊園', '許可'], summary: 'ペット霊園の設置許可に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000515.html',
        fullText: `<div class="jorei-header">○三郷市生産緑地法施行細則<br>平成4年12月8日 規則第25号</div>
<div class="jorei-body">
<p class="jorei-article">(生産緑地地区内における行為の許可等) 第1条 生産緑地法 (昭和49年法律第68号。以下「法」という。) 第8条第1項の規定により許可を受けようとする者は、生産緑地地区内行為許可申請書 ( 様式第1号 。以下「許可申請書」という。) を市長に提出しなければならない。</p>

<p class="jorei-article">(許可申請書等の添付図書) 第2条 前条 に規定する許可申請書、通知書、着手届出書、応急措置届出書及び協議書には、建築物計画書 ( 様式第6号 ) 、工作物計画書 ( 様式第6号の2 ) 又は宅地の造成、土石の採取その他の土地の形質の変更、水面の埋立て又は干拓計画書 ( 様式第6号の3 ) 及び 別表 に掲げる図面 (以下「添付図書」という。) を添付しなければならない。</p>

<p class="jorei-article">(許可標識の掲示) 第3条 法第8条第1項の規定により市長の許可を受けて行為を行う者は、当該行為の期間中、当該行為をしようとする土地の見やすい場所に、生産緑地地区内行為許可標識 ( 様式第7号 ) を掲げなければならない。</p>

<p class="jorei-article">(身分証明書の様式) 第4条 法第9条第3項及び法第17条第3項に規定する身分を示す証明書の様式は、身分証明書 ( 様式第8号 ) のとおりとする。</p>

<p class="jorei-article">(許可申請書等の提出部数) 第5条 この規則 の規定により市長に提出する許可申請書、通知書、着手届出書、応急措置届出書、協議書及び添付図書の部数は、それぞれ正副各1部とする。</p>

</div>` },
    { id: 142, title: '三郷市公害防止条例', category: '民生・福祉', keywords: ['公害', '環境', '防止'], summary: '公害防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000517.html',
        fullText: `<div class="jorei-header">○三郷市みどりの条例施行規則<br>昭和63年3月16日 規則第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市みどりの条例 (昭和63年条例第9号。以下「条例」という。) の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(指定の基準) 第2条 条例第6条 の規定による規則に定める基準は、次のとおりとする。</p>

<p class="jorei-article">(指定の協議) 第3条 条例第6条 の規定による協議は、保存樹木等の指定に関する協議書 ( 様式第1号 ) により行うものとする。</p>

<p class="jorei-article">(指定の通知) 第4条 条例第6条 の規定による保存樹木等の指定通知は、保存樹木等の指定通知書 ( 様式第2号 ) により行うものとする。</p>

<p class="jorei-article">(標識) 第5条 条例第7条 に規定する標識は、保存樹木等の指定標識 ( 様式第3号 ) のとおりとする。</p>

<p class="jorei-article">(台帳の作成) 第6条 条例第8条 に規定する台帳は、保存樹木等指定台帳 ( 様式第4号 ) のとおりとする。</p>

<p class="jorei-article">(行為の届出) 第7条 条例第11条 に規定する行為の届出は、 次の表 の左欄に掲げる区分に応じ、それぞれ 同表 の右欄に掲げる 様式 の届出書により行うものとする。</p>

<p class="jorei-article">(指定解除の申請) 第8条 条例第12条第3項 に規定する保存樹木等の指定解除の申請は、保存樹木等指定解除申請書 ( 様式第8号 ) により行うものとする。</p>

<p class="jorei-article">(指定解除の通知) 第9条 条例第12条第4項 に規定する保存樹木等の指定解除の通知は、保存樹木等指定解除通知書 ( 様式第9号 ) により行うものとする。</p>

<p class="jorei-article">(緑化指導基準) 第10条 条例第13条 及び 第14条 の規定による規則で定める三郷市緑化指導基準は、 別表 のとおりとする。</p>

<p class="jorei-article">(緑化計画書の提出基準及び様式) 第11条 条例第14条 の規定に基づき、緑化に努めるに当たっては、面積が500平方メートル以上の開発行為又は建築行為 (土地の区画形質の変更を伴わない増築及び改築を除く。) をしようとする者は、緑化計画書 ( 様式第10号 ) を市長に提出しなければならない。 ただし、建築の目的が一戸建専用住宅の場合は、この限りでない。</p>

<p class="jorei-article">(花と緑の運動) 第12条 条例第17条第1項 に規定する花と緑の運動は、おおむね次について行うものとする。</p>

<p class="jorei-article">(緑の広場の設置基準) 第13条 緑の広場の設置基準は、次に掲げるとおりとする。</p>

<p class="jorei-article">(税の減免) 第14条 市長は、緑の広場の用地を無償で借り受けたときは、その用地に係る固定資産税を減免することができる。</p>

<p class="jorei-article">(雑則) 第15条 この規則に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 143, title: '三郷市環境基本条例', category: '民生・福祉', keywords: ['環境', '基本条例', '持続可能'], summary: '環境保全の基本理念を定める条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000519.html',
        fullText: `<div class="jorei-header">○三郷市生垣設置奨励補助金交付要綱<br>昭和63年3月24日 告示第33号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱 は、 三郷市みどりの条例 (昭和63年条例第9号) 第20条 の規定に基づき、生垣設置の奨励補助金の交付に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(交付対象) 第2条 市長は、次に掲げる基準に該当する生垣を新たに設置する者に対し、奨励補助金を交付するものとする。</p>

<p class="jorei-article">(奨励補助金の額) 第3条 奨励補助金の額は、生垣1メートル当たり3,000円とし、同一敷地につき50,000円を限度として交付する。</p>

<p class="jorei-article">(交付の申請) 第4条 規則第4条第1項 の規定による奨励補助金交付の申請は、生垣設置奨励補助金交付申請書 ( 様式第1号 ) により行うものとする。</p>

<p class="jorei-article">(交付決定の通知) 第5条 規則第7条 の規定による奨励補助金交付決定の通知は、生垣設置奨励補助金交付決定通知書 ( 様式第2号 ) により行うものとする。</p>

<p class="jorei-article">(実績報告) 第6条 規則第13条 の規定による実績報告は、生垣設置完了報告書 ( 様式第3号 ) により行うものとする。</p>

<p class="jorei-article">(額の確定通知) 第7条 規則第14条 の規定による奨励補助金の額の確定通知は、生垣設置完了確認通知書 ( 様式第4号 ) により行うものとする。</p>

<p class="jorei-article">(是正措置) 第8条 規則第15条 の規定による是正措置の指示は、生垣設置完了確認通知書 ( 様式第4号 ) により行うものとする。</p>

<p class="jorei-article">(奨励補助金の請求) 第9条 第7条 の規定による完了確認通知を受けた申請者は、市長に生垣設置奨励補助金交付請求書 ( 様式第5号 ) により請求しなければならない。</p>

<p class="jorei-article">(奨励補助金の交付) 第10条 市長は、 前条 の規定による請求があったときは、速やかに奨励補助金を交付するものとする。</p>

<p class="jorei-article">(その他) 第11条 この要綱 に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 144, title: '三郷市あき地の雑草等の除去に関する条例', category: '民生・福祉', keywords: ['空き地', '雑草', '環境美化'], summary: '空き地の雑草除去に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000523.html',
        fullText: `<div class="jorei-header">○三郷市公園運営委員会条例<br>昭和52年12月19日 条例第28号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例 は、三郷市公園運営委員会の設置、組織及び運営に関する必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(設置及び所掌事務) 第2条 市長の諮問に応じ、三郷市運動公園、三郷市都市公園、三郷市児童遊園、三郷市わんぱく運動場及び三郷市ちびっこ広場の円滑な運営並びに緑の保全育成に関し、必要な事項を調査審議するため、三郷市公園運営委員会 (以下「委員会」という。) を置く。</p>

<p class="jorei-article">(組織) 第3条 委員会は、委員10人以内で組織する。</p>

<p class="jorei-article">(任期) 第4条 委員の任期は、当該諮問に係る審議の終了時までとする。</p>

<p class="jorei-article">(委員長及び副委員長) 第5条 委員会に委員長及び副委員長1人を置き、委員が互選する。</p>

<p class="jorei-article">(会議) 第6条 委員会は、委員長が招集する。</p>

<p class="jorei-article">(庶務) 第7条 委員会の庶務は、まちづくり推進部みどり公園課において処理する。</p>

<p class="jorei-article">(委任) 第8条 この条例 に定めるもののほか、委員会に関し必要な事項は、委員会が定める。</p>

</div>` },
    { id: 145, title: '三郷市空き缶等の散乱防止に関する条例', category: '民生・福祉', keywords: ['空き缶', '散乱防止', '美化'], summary: '空き缶等の散乱防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000525.html',
        fullText: `<div class="jorei-header">○三郷市運動公園の設置及び管理に関する条例<br>昭和44年6月30日 条例第21号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この条例は、地方自治法 (昭和22年法律第67号) 第244条の2の規定に基づき、運動公園の設置及び管理に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(設置) 第2条 市民の心身の健全な発達に寄与するため、運動公園を設置する。</p>

<p class="jorei-article">(施設) 第3条 運動公園の施設として、野球場、ソフトボール場、サッカー場、ラグビー場、多目的広場、テニスコートの他規則で定める施設を設ける。</p>

<p class="jorei-article">(管理) 第4条 市長は、常に良好な状態において管理し、その設置目的に応じて最も効率的に、運用しなければならない。</p>

<p class="jorei-article">(利用の範囲) 第5条 運動公園を利用できる者は、三郷市並びに草加市、越谷市、八潮市、吉川市及び松伏町に住所を有し、又は勤務し、若しくは通学する者とする。 ただし、市長が特に認めたときは、この限りでない。</p>

<p class="jorei-article">(行為の制限) 第6条 運動公園内では、次の行為をしてはならない。 ただし、 第6号 については、あらかじめ市長の許可を受けた場合はこの限りでない。</p>

<p class="jorei-article">(有料公園施設) 第7条 運動公園の施設のうち、有料で利用させるもの (以下「有料公園施設」という。) は、 別表第1 に掲げるとおりとする。</p>

<p class="jorei-article">(利用の承認) 第8条 有料公園施設を利用しようとする者 (以下「利用者」という。) は、あらかじめ市長の承認を受けなければならない。</p>

<p class="jorei-article">(利用の不承認) 第9条 市長は、公益上必要があるとき、又は施設保全に支障があると認めるときは、利用を承認しないことができる。</p>

<p class="jorei-article">(利用) 第10条 利用者は、市長が指示した事項に留意し、常に善良な利用者としての注意をもって利用しなければならない。</p>

<p class="jorei-article">(使用料の額) 第11条 利用者は、 別表第2 に掲げる使用料を納付しなければならない。 ただし、利用の目的が公益による場合若しくは特に必要があると認めるときは、使用料を減免することができる。</p>

<p class="jorei-article">(使用料の還付等) 第12条 既納の使用料は、還付しない。 ただし、 次の各号 のいずれかに該当する場合は、その全部又は一部を還付することができる。</p>

<p class="jorei-article">(罰則) 第13条 次の各号 のいずれかに該当する者は、5万円以下の過料に処する。</p>

<p class="jorei-article">(委任) 第14条 この条例に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 146, title: '三郷市ラブホテルの建築規制に関する条例', category: '民生・福祉', keywords: ['ラブホテル', '建築規制', '風営'], summary: 'ラブホテルの建築規制に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000527.html',
        fullText: `<div class="jorei-header">○三郷市わんぱく運動場設置要綱<br>昭和54年11月10日 告示第60号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱 は、児童の健全な育成及び地域住民の交流を図るため、三郷市わんぱく運動場 (以下「わんぱく運動場」という。) の設置について定めるものとする。</p>

<p class="jorei-article">(設置の基準) 第2条 市長は、町会又は自治会 (以下「地域自治団体」という。) によるわんぱく運動場設置に関する申請に基づき、次に掲げる条件に適合すると認めるときは、わんぱく運動場を設置することができる。</p>

<p class="jorei-article">(設備等の設置) 第3条 市長は、わんぱく運動場の設置をするときは、次に掲げる設備等を設置するものとする。</p>

<p class="jorei-article">(申請) 第4条 わんぱく運動場設置の申請は、地域自治団体が 別記様式 により行うものとする。</p>

<p class="jorei-article">(税の減免) 第5条 市長は、土地所有権者がわんぱく運動場の用地を市に無償で利用を提供したときは、その用地に係る固定資産税を減免することができる。</p>

<p class="jorei-article">(協定書の取り交わし) 第6条 市長は、 第4条 の規定による申請に基づき、設置を必要と認めたときは、土地所有権者及び地域自治団体代表者とわんぱく運動場の設置、運営及び維持管理について協議を行い、協定書を取り交わすものとする。</p>

<p class="jorei-article">(補則) 第7条 この要綱 に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 147, title: '三郷市市民パブリック・コメント手続条例', category: '民生・福祉', keywords: ['パブリックコメント', '市民参加', '意見募集'], summary: 'パブリックコメント手続に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000531.html' },
    { id: 148, title: '三郷市男女共同参画社会づくり条例', category: '民生・福祉', keywords: ['男女共同参画', 'ジェンダー', '平等'], summary: '男女共同参画社会づくりに関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000534.html',
        fullText: `<div class="jorei-header">○三郷市公共下水道使用料条例<br>昭和58年2月1日 条例第2号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例は、下水道法 (昭和33年法律第79号。以下「法」という。) 第20条の規定に基づき、公共下水道の使用料 (以下「使用料」という。) の徴収に関し、必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(用語の定義) 第2条 この条例において、 次の各号 に掲げる用語の意義は、それぞれ 当該各号 に定めるところによる。</p>

<p class="jorei-article">(使用料の徴収) 第3条 市は、公共下水道の使用について、使用者から使用料を徴収する。</p>

<p class="jorei-article">(使用料の徴収方法) 第4条 使用料は、納入通知書により毎月又は隔月毎に徴収する。 ただし、市長が必要があると認めたときは、この限りでない。</p>

<p class="jorei-article">(使用料の算定) 第5条 使用料の額は、毎使用月において使用者が排除した汚水の量に応じ、 次の表 に定めるところにより算定する基本料金と超過料金の合計額 (公衆浴場用にあっては、料金の合計額) に消費税法 (昭和63年法律第108号) 第29条の税率及び当該税率に地方税法 (昭和25年法律第226号) 第72条の83の税率を乗じて得た率を合計した率に1を加えた率を乗じて得た額とする。 ただし、その乗じて得た額に1円未満の端数が生じたときは、その端数金額を切り捨てるものとする。</p>

<p class="jorei-article">(特別な場合における料金の算定) 第5条の2 月の途中において、公共下水道の使用を開始し、廃止し、休止し、又は再開したときの使用料は、次に掲げる額とする。 ただし、その額に1円未満の端数が生じたときは、その端数金額を切り捨てるものとする。</p>

<p class="jorei-article">(排除汚水量の算定) 第6条 排除汚水量の算定は、次に定めるところによる。</p>

<p class="jorei-article">(使用開始等の届出) 第7条 使用者が公共下水道の使用を開始し、休止し、若しくは廃止し、又は現に休止しているその使用を再開したときは、当該使用者は、遅滞なくその旨を市長に届け出なければならない。</p>

<p class="jorei-article">(使用者等の変更届出) 第8条 使用者は、 次の各号 のいずれかに該当するときは、遅滞なくその旨を市長に届け出なければならない。 ただし、 第1号 に該当する場合にあっては、新たに使用者となった者が届け出るものとする。</p>

<p class="jorei-article">(使用料の減免) 第9条 市長は、特別の事情があると認めたときは、使用料を減免することができる。</p>

<p class="jorei-article">(罰則) 第10条 次の各号 のいずれかに該当する者は、50,000円以下の過料に処する。</p>

<p class="jorei-article">(委任) 第11条 この条例に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 149, title: '三郷市印鑑条例', category: '民生・福祉', keywords: ['印鑑', '登録', '証明'], summary: '印鑑登録に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000540.html',
        fullText: `<div class="jorei-header">○三郷市建築基準法施行細則<br>昭和63年3月29日 規則第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、建築基準法 (昭和25年法律第201号。以下「法」という。) 、建築基準法施行令 (昭和25年政令第338号。以下「令」という。) 及び建築基準法施行規則 (昭和25年建設省令第40号。以下「規則」という。) の施行について、必要な事項を定めるものとする。</p>

<p class="jorei-article">(標識) 第2条 法第9条第13項の標識の様式は、 様式第1号 のとおりとする。</p>

<p class="jorei-article">(確認申請書に添付する調書) 第3条 次に掲げる建築物又は工作物の確認を申請する場合においては、それぞれ 当該各号 に掲げる調書等を確認申請書に添付しなければならない。</p>

<p class="jorei-article">(建築物の建築に関する確認の特例) 第4条 令第10条第3号ハ又は第4号ハの規定により市長が規則で定める規定は、埼玉県建築基準法施行条例 (昭和35年埼玉県条例第37号) 第8条第2項及び第33条第1項第2号の規定とする。</p>

<p class="jorei-article">(道路位置指定申請) 第5条 法第42条第1項第5号の規定による道路の位置の指定を受けようとする者は、 様式第6号 の申請書に規則第9条に規定する書類のほか、 様式第7号 の道路位置図を添えて、市長に提出しなければならない。</p>

<p class="jorei-article">(私道の変更又は廃止) 第6条 法第42条第1項第5号又は同条第2項の指定を受けた私道を変更又は廃止しようとするときは、 様式第8号 の申請書に 前条 に規定する道路位置図を添えて、市長に提出しなければならない。</p>

<p class="jorei-article">(幅員4メートル未満1.8メートル以上の道の指定) 第7条 法第42条第2項の規定により市長が指定する道は、幅員が4メートル未満1.8メートル以上のものとする。</p>

<p class="jorei-article">(許可申請) 第8条 規則第10条の4第1項の規定により市長が規則で定める図書又は書面は、規則第1条の3第1項の表1に掲げる付近見取図、配置図、各階平面図及び2面以上の立面図とする。</p>

<p class="jorei-article">(敷地と道路との関係の特例に係る認定申請) 第9条 規則第10条の4の2第1項の規定により市長が規則で定める図書又は書面は、規則第1条の3第1項の表1に掲げる付近見取図、配置図、各階平面図及び2面以上の立面図とする。</p>

<p class="jorei-article">(一の敷地とみなすこと等による制限の緩和に係る認定申請等) 第9条の2 規則第10条の16第1項第4号、同条第2項第3号及び第10条の21第1項第3号の規定により市長が規則で定めるものは、認定の申請又は認定の取消しの申請に係る土地の登記事項証明書及び公図の写しとする。</p>

<p class="jorei-article">(建築主等の変更届) 第10条 許可若しくは認定を受けた建築物若しくは工作物又は確認を受けた建築物若しくは工作物の工事完了前に建築主、設置者又は築造主に変更があったときは、建築主、設置者又は築造主は、 様式第9号 の名義変更届に許可通知書、認定通知書又は確認済証を添えて速やかに市長又は建築主事に届け出なければならない。</p>

<p class="jorei-article">(工事取止届等) 第11条 建築主又は築造主は、許可若しくは認定を受けた建築物若しくは工作物又は確認を受けた建築物若しくは工作物の工事を取り止めたときは、 様式第11号 の工事取止届に許可通知書、認定通知書又は確認済証を添えて、市長又は建築主事に速やかに提出しなければならない。</p>

<p class="jorei-article">(国等による計画通知への準用) 第12条 法第18条第2項の規定によりする通知については、 第3条 、 第10条 及び 前条 の規定を準用する。</p>

<p class="jorei-article">(建築計画概要書等の閲覧請求) 第13条 法第93条の2の規定により、規則第11条の4第1項の建築計画概要書、建築基準法令による処分等の概要書及び全体計画概要書 (以下「建築計画概要書等」という。) の閲覧をしようとする者は、建築物を特定し、 様式第13号 の請求書を市長に提出しなければならない。</p>

<p class="jorei-article">(建築計画概要書等及び道路位置指定図面の写しの交付) 第14条 市長は、建築計画概要書等及び道路位置指定図面 (法第42条第1項第5号の規定により指定された道路の位置に係る図面をいう。 第3項 において同じ。) の写しを交付することができる。</p>

<p class="jorei-article">(建築台帳記載事項証明書の交付) 第15条 市長は、規則第6条の3第1項第1号に規定する建築物に係る台帳又は同項第3号に規定する工作物に係る台帳 ( 第3項 において「建築台帳」という。) の記載事項証明書 ( 次項 において「建築台帳記載事項証明書」という。) を交付することができる。</p>

</div>` },
    { id: 150, title: '三郷市防災会議条例', category: '民生・福祉', keywords: ['防災', '会議', '災害対策'], summary: '防災会議に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000544.html',
        fullText: `<div class="jorei-header">○三郷市建築協定に関する公聴会規則<br>昭和48年5月25日 規則第12号</div>
<div class="jorei-body">
<p class="jorei-article">(通則) 第1条 建築基準法 (昭和25年法律第201号。以下「法」という。) 第72条第1項 (第74条第2項において準用する場合を含む。) の規定に基づき市長が行う建築協定に関する公開による聴聞会 (以下「公聴会」という。) に関しては、 この規則 の定めるところによる。</p>

<p class="jorei-article">(開催の公告及び通知) 第2条 市長は、公聴会を開催しようとするときは、開催1週間前までに聴聞の事由、期日及び場所を公告するとともに、当該建築協定をしようとする者 (以下「協定者」という。) 及び法第71条の規定による縦覧期間満了後1週間以内までに市長に文書をもって異議を申し出た者 (以下「異議申出人」という。) に通知しなければならない。</p>

<p class="jorei-article">(議長及び関係職員等の出席) 第3条 公聴会は、市長又は市長の指名した職員が議長となる。 ただし、 次の各号 のいずれかに該当する者は、議長となることができない。</p>

<p class="jorei-article">(口述審問) 第4条 聴聞は公開し、かつ、口述審問により行う。</p>

<p class="jorei-article">(代理人) 第5条 協定者又は異議申出人が公聴会に出席できない場合は、その代理人を出席させることができる。</p>

<p class="jorei-article">(陳述書による聴聞) 第6条 異議申出人又は 前条第1項 の規定による代理人が出席せず、かつ、当該建築協定に関する陳述書をあらかじめ提出してある場合の聴聞は、その陳述書及びその事項に関して調査に当たった関係職員等が作成し、かつ、署名した調書を朗読して行う。</p>

<p class="jorei-article">(欠席者) 第7条 協定者、異議申出人又はこれらの代理人が公聴会に出席できない場合があるときは、その事由を記載した欠席届を公聴会の開催3日前までに市長に届け出なければならない。</p>

<p class="jorei-article">(公聴会の延期) 第8条 市長は、必要があると認めるときは、公聴会の期日を延期することができる。</p>

<p class="jorei-article">(定足数) 第9条 公聴会は、協定者の半数以上の出席がなければ開催することができない。 ただし、 第5条第2項 の規定による委任状の提出があるときは、これを出席数に加算するものとする。</p>

<p class="jorei-article">(証人及び参考人の出席) 第10条 協定者、異議申出人又はこれらの代理人は、聴聞に際して自己に有利な証人又は参考人を出席させ、かつ、有利な証拠又は資料を提出することができる。</p>

<p class="jorei-article">(発言及び発言の停止) 第11条 公聴会に出席した協定者、異議申出人、代理人、関係職員等その他当該建築協定の利害関係人は、口述審問において発言することができる。</p>

<p class="jorei-article">(聴聞の記録) 第12条 議長は、聴聞の出席者指名、次第及び建築協定書の説明意見等内容の要点を速記者又は市の職員に記録させなければならない。</p>

<p class="jorei-article">(会場の秩序保持) 第13条 議長は、会場内を整理するため又はその秩序を保持するために必要があると認めたときは、聴聞関係出席者又は傍聴人の数を制限することができる。</p>

</div>` },
    { id: 151, title: '三郷市災害対策本部条例', category: '民生・福祉', keywords: ['災害', '対策本部', '緊急'], summary: '災害対策本部に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000546.html' },
    { id: 152, title: '三郷市防災センター設置及び管理条例', category: '民生・福祉', keywords: ['防災', 'センター', '施設'], summary: '防災センターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000552.html',
        fullText: `<div class="jorei-header">○三郷市水道事業の設置等に関する条例<br>昭和42年3月20日 条例第9号</div>
<div class="jorei-body">
<p class="jorei-article">(水道事業の設置) 第1条 生活用水その他の浄水を市民に供給するため、水道事業を設置する。</p>

<p class="jorei-article">(経営の基本) 第2条 水道事業は、常に企業の経済性を発揮するとともに、公共の福祉を増進するように運営されなければならない。</p>

<p class="jorei-article">(組織) 第3条 地方公営企業法 (昭和27年法律第292号。以下「法」という。) 第14条の規定に基づき、水道事業の管理者 (以下「管理者」という。) の権限に属する事務を処理させるため水道部を置く。</p>

<p class="jorei-article">第4条 法第7条ただし書及び地方公営企業法施行令 (昭和27年政令第403号) 第8条の2の規定に基づき、水道事業に管理者を置かないものとする。</p>

<p class="jorei-article">(重要な資産の取得及び処分) 第5条 法第33条第2項の規定により予算で定めなければならない水道事業の用に供する資産の取得及び処分は、予定価格 (適正な対価を得てする売払い以外の方法による譲渡にあっては、その適正な見積価額) が2,000万円以上の不動産若しくは動産の買入れ若しくは譲渡 (不動産の信託の場合を除き、土地については、1件5,000平方メートル以上のものに係るものに限る。) 又は不動産の信託の受益権の買入れ若しくは譲渡とする。</p>

<p class="jorei-article">(議会の同意を要する賠償責任の免除) 第6条 法第34条において準用する地方自治法 (昭和22年法律第67号) 第243条の2の8第8項の規定により水道事業の業務に従事する職員の賠償責任の免除について議会の同意を得なければならない場合は、当該賠償責任に係る賠償額が10万円以上である場合とする。</p>

<p class="jorei-article">(議会の議決を要する負担附きの寄附の受領等) 第7条 水道事業の業務に関し、法第40条第2項の規定に基づき条例で定めるものは、負担附きの寄附又は贈与の受領でその金額又はその目的物の価額が700万円以上のもの及び法律上市の義務に属する損害賠償の額の決定で当該決定に係る金額が、200万円以上のものとする。</p>

<p class="jorei-article">(業務状況説明書類の提出) 第8条 管理者は、水道事業に関し、法第40条の2第1項の規定に基づき、毎事業年度4月1日から9月30日までの業務の状況を説明する書類を11月30日までに、10月1日から3月31日までの業務の状況を説明する書類を、5月31日までに市長に提出しなければならない。</p>

</div>` },
    { id: 153, title: '三郷市国民保護対策本部及び三郷市緊急対処事態対策本部に関する条例', category: '民生・福祉', keywords: ['国民保護', '緊急事態', '対策本部'], summary: '国民保護対策本部に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000554.html',
        fullText: `<div class="jorei-header">○三郷市上水道運営委員会規則<br>昭和41年3月24日 規則第6号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規則 は、 三郷市附属機関に関する条例 (昭和35年条例第2号) 第2条 の規定に基づき、三郷市上水道運営委員会 (以下「委員会」という。) について必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(所掌事項) 第2条 委員会は、次に掲げる事項を調査審議する。</p>

<p class="jorei-article">(組織) 第3条 委員会は、委員10人以内で組織する。</p>

<p class="jorei-article">(委員長及び副委員長) 第4条 委員会に、委員長及び副委員長1人を置き、委員の互選によってこれを定める。</p>

<p class="jorei-article">(委員) 第5条 委員の任期は、2年とする。 ただし、再任を妨げない。</p>

<p class="jorei-article">(会議) 第6条 委員会は、委員長が招集する。</p>

<p class="jorei-article">(庶務) 第7条 委員会の庶務は、水道部業務課において処理する。</p>

<p class="jorei-article">(委員会への委任) 第8条 条例及び この規則 に定めるもののほか、委員会の運営に関し必要な事項は、委員会が定める。</p>

</div>` },
    { id: 154, title: '三郷市国民保護協議会条例', category: '民生・福祉', keywords: ['国民保護', '協議会', '安全'], summary: '国民保護協議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000555.html' },
    { id: 155, title: '三郷市新型インフルエンザ等対策本部条例', category: '民生・福祉', keywords: ['新型インフルエンザ', '対策', '感染症'], summary: '新型インフルエンザ等対策本部に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000557.html' },
    { id: 156, title: '三郷市災害派遣手当等の支給に関する条例', category: '民生・福祉', keywords: ['災害派遣', '手当', '支援'], summary: '災害派遣手当の支給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000559.html',
        fullText: `<div class="jorei-header">○三郷市企業職員の給与の種類及び基準に関する条例<br>昭和42年3月20日 条例第10号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例は、地方公営企業法 (昭和27年法律第292号。以下「法」という。) 第38条第4項の規定に基づき、企業職員の給与の種類及び基準を定めることを目的とする。</p>

<p class="jorei-article">(給与の種類) 第2条 企業職員で常時勤務を要するもの、地方公務員法 (昭和25年法律第261号) 第22条の2第1項に規定する会計年度任用職員 ( 第18条 において単に「会計年度任用職員」という。) 及び同法第22条の4第1項又は第22条の5第1項に規定する短時間勤務の職を占める職員 (以下「職員」という。) の給与の種類は、給料及び手当とする。</p>

<p class="jorei-article">(給料表) 第3条 給料については、職員の職務の種類に応じ、必要な種類の給料表を設けるものとする。</p>

<p class="jorei-article">(管理職手当) 第4条 管理職手当は、管理又は監督の地位にある職員の職のうち、その特殊性に基づき管理者が指定するもの (以下「指定管理職員」という。) について支給する。</p>

<p class="jorei-article">(初任給調整手当) 第5条 初任給調整手当は、特殊な専門的知識を必要とし、かつ、採用による欠員補充について特別の事情があると認められる職に新たに採用された職員に対して支給する。</p>

<p class="jorei-article">(扶養手当) 第6条 扶養手当は、扶養親族のある職員に対して支給する。</p>

<p class="jorei-article">(地域手当) 第6条の2 職員に地域手当を支給する。</p>

<p class="jorei-article">(住居手当) 第6条の3 住居手当は、自ら居住するため住宅 (貸間を含む。) を借り受け、管理者の定める額を超える家賃 (使用料を含む。) を支払っている職員で管理者の定めるもの以外の職員に支給する。</p>

<p class="jorei-article">(通勤手当) 第7条 通勤手当は、次に掲げる職員に対して支給する。</p>

<p class="jorei-article">(特殊勤務手当) 第8条 特殊勤務手当は、著しく危険、不快、不健康又は困難な勤務その他著しく特殊な勤務で、給与上特別の考慮を必要とし、かつ、その特殊性を給料で考慮することが適当でないと認められるものに従事する職員に対して支給する。</p>

<p class="jorei-article">(時間外勤務手当) 第9条 時間外勤務手当は、正規の勤務時間外に勤務することを命ぜられた職員に対して、正規の勤務時間を超えて勤務した全時間について支給する。</p>

<p class="jorei-article">(休日勤務手当) 第10条 職員には、正規の勤務日が休日等に当たっても、正規の給与を支給する。</p>

<p class="jorei-article">(夜間勤務手当) 第11条 夜間勤務手当は、正規の勤務時間として午後10時から翌日の午前5時までの間に勤務することを命ぜられた職員に対して、その間に勤務した全時間について支給する。</p>

<p class="jorei-article">(管理職員特別勤務手当) 第12条 指定管理職員が、臨時又は緊急の必要その他の公務の運営の必要により、週休日又は祝日法による休日等若しくは年末年始の休日等 ( 次項 において「週休日等」という。) に勤務をした場合は、当該指定管理職員には、管理職員特別勤務手当を支給する。</p>

<p class="jorei-article">(時間外勤務手当等に関する規定についての適用除外) 第12条の2 第9条 、 第10条第2項 及び 第11条 の規定は、指定管理職員には適用しない。</p>

<p class="jorei-article">(期末手当) 第13条 期末手当は、6月及び12月に職員の在職期間に応じ、かつ、企業の経営状況を考慮して支給する。</p>

<p class="jorei-article">(勤勉手当) 第14条 勤勉手当は、職員の勤務成績に応じ、かつ、企業の経営状況を考慮して支給する。</p>

<p class="jorei-article">(給与の減額) 第15条 職員が勤務しないときは、休日である場合、休暇による場合その他その勤務しないことにつき特に承認のあった場合を除くほか、その勤務しない1時間につき、勤務1時間当たりの給与額を減額して給与を支給する。</p>

<p class="jorei-article">(休職者の給与) 第16条 職員が、休職にされたときは、管理者が定めるところにより給与を支給することができる。</p>

<p class="jorei-article">(育児休業の承認を受けた職員の給与) 第16条の2 地方公務員の育児休業等に関する法律 (平成3年法律第110号) 第2条第1項の承認を受けた職員には、育児休業をしている期間については、給与を支給しない。 ただし、期末手当及び勤勉手当については、この限りでない。</p>

<p class="jorei-article">(非常勤職員の給与) 第17条 企業職員で職員以外のものについては、職員の給与との権衡を考慮し、予算の範囲内で給与を支給する。</p>

<p class="jorei-article">(会計年度任用職員についての適用除外) 第18条 第4条 から 第6条 まで、 第6条の3 、 第8条 、 第11条 及び 第12条 の規定は、会計年度任用職員には適用しない。</p>

<p class="jorei-article">(定年前再任用短時間勤務職員についての適用除外) 第19条 第5条 及び 第6条 の規定は、地方公務員法第22条の4第1項又は第22条の5第1項の規定により採用された職員には適用しない。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、平成14年4月1日から施行する。</p>

<p class="jorei-article">(施行期日等) 第1条 この条例は、公布の日から施行する。 ただし、第2条及び第3条並びに附則第3条の規定は、平成30年4月1日から施行する。</p>

<p class="jorei-article">(施行期日等) 第1条 この条例は、公布の日から施行する。 ただし、次の各号に掲げる規定は、当該各号に定める日から施行する。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、令和5年4月1日から施行する。</p>

<p class="jorei-article">(三郷市企業職員の給与の種類及び基準に関する条例の一部改正に伴う経過措置) 第22条 三郷市企業職員の給与の種類及び基準に関する条例第5条及び第6条の規定は暫定再任用職員には適用しない。</p>

<p class="jorei-article">(施行期日等) 第1条 この条例は、次の各号に掲げる区分に応じ、当該各号に定める日から施行する。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、令和7年10月1日から施行する。</p>

</div>` },
    { id: 157, title: '三郷市自転車等の放置の防止に関する条例', category: '民生・福祉', keywords: ['自転車', '放置', '駐輪'], summary: '自転車等の放置防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000561.html' },
    { id: 158, title: '三郷市防犯のまちづくり推進条例', category: '民生・福祉', keywords: ['防犯', 'まちづくり', '安全'], summary: '防犯のまちづくり推進に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000571.html',
        fullText: `<div class="jorei-header">○三郷市消防本部の組織等に関する規則<br>平成11年3月30日 規則第19号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、消防組織法 (昭和22年法律第226号) 第10条第2項及び第16条第2項の規定に基づき、三郷市消防本部 (以下「消防本部」という。) の組織及び消防吏員の階級等について必要な事項を定めるものとする。</p>

<p class="jorei-article">(組織) 第2条 消防本部に次の課を置く。</p>

<p class="jorei-article">(事務分掌) 第3条 前条 の課に次に掲げる係を置き、事務分掌は次のとおりとする。</p>

<p class="jorei-article">(主管課の事務) 第4条 消防本部の主管課は、消防総務課とする。</p>

<p class="jorei-article">(階級) 第5条 消防吏員の階級は、消防監、消防司令長、消防司令、消防司令補、消防士長、消防副士長及び消防士とする。</p>

<p class="jorei-article">(消防長) 第6条 消防本部に消防長を置く。</p>

<p class="jorei-article">(職制) 第7条 次の表 の左欄に掲げる組織に、それぞれ 同表 の中欄に掲げる職を置き、その職務は、それぞれ 同表 の右欄に掲げるとおりとする。 ただし、理事、次長、参事、副参事、課長補佐、主幹、主査、主任及び主事は、必要に応じて置くことができるものとする。</p>

<p class="jorei-article">(事務分担) 第8条 理事又は次長が2人以上置かれている場合の事務分担は、消防長がこれを定める。</p>

<p class="jorei-article">(職及び階級) 第9条 次の表 の左欄に掲げる職における消防吏員の階級は、 同表 右欄のとおりとする。</p>

<p class="jorei-article">(消防吏員以外の消防職員) 第10条 消防吏員以外の消防職員の職名は、 三郷市職員の職名に関する規則 (昭和59年規則第12号) の例による。</p>

<p class="jorei-article">(階級別定数及び職名別定数) 第11条 消防吏員及び消防吏員以外の消防職員の階級別定数及び職名別定数の配分は、消防長が別に定める。</p>

<p class="jorei-article">(委任) 第12条 この規則に定めるもののほか、必要な事項は、消防長が別に定める。</p>

</div>` },
    { id: 159, title: '三郷市犯罪被害者等支援条例', category: '民生・福祉', keywords: ['犯罪被害者', '支援', '救済'], summary: '犯罪被害者支援に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000572.html',
        fullText: `<div class="jorei-header">○三郷市消防署の組織等に関する規程<br>平成11年3月30日 消本訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規程は、消防組織法 (昭和22年法律第226号) 第10条第2項の規定に基づき、三郷市消防署 (以下「署」という。) の組織等について必要な事項を定めるものとする。</p>

<p class="jorei-article">(組織) 第2条 署に次の課及び係を置く。</p>

<p class="jorei-article">第3条 署に分署を置き、その名称及び位置は、次のとおりとする。</p>

<p class="jorei-article">(事務分掌) 第4条 第2条 及び 前条第2項 に規定する課及び係の事務分掌は、 別表 のとおりとする。</p>

<p class="jorei-article">(相互援助) 第5条 特別又は緊急に事務を処理する必要があるときは、署長は所属職員 (以下「職員」という。) を相互に援助させるものとする。</p>

<p class="jorei-article">(関連事務) 第6条 他の係に関連する事務については、その関係の比較的重い係において主務する。</p>

<p class="jorei-article">(職制) 第7条 次の表 の左欄に掲げる組織に、それぞれ 同表 の中欄に掲げる職を置き、その職務は、それぞれ 同表 の右欄に掲げるとおりとする。 ただし、参事、副署長、副参事、課長補佐、副分署長、主幹、主査、主任及び主事は、必要に応じて置くことができるものとする。</p>

<p class="jorei-article">(事務分担) 第8条 職員の事務分担は、消防長の承認を得て、署長がこれを定める。</p>

<p class="jorei-article">(職及び階級) 第9条 次の表 の左欄に掲げる職における消防吏員の階級は、 同表 右欄のとおりとする。</p>

<p class="jorei-article">(委任) 第10条 この規程に定めるもののほか、必要な事項は、消防長が別に定める。</p>

</div>` },
    { id: 160, title: '三郷市振り込め詐欺等の被害防止に関する条例', category: '民生・福祉', keywords: ['振り込め詐欺', '詐欺', '被害防止'], summary: '振り込め詐欺被害防止に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000577.html',
        fullText: `<div class="jorei-header">○三郷市消防本部公印規則<br>昭和43年12月24日 規則第13号</div>
<div class="jorei-body">
<p class="jorei-article">第1条 三郷市消防本部の公印の作成及び取扱いに関しては、 この規則 の定めるところによる。</p>

<p class="jorei-article">第2条 この規則 において「公印」とは、公文書に用いる印章で 次の各号 に掲げるものをいい、公印の名称、ひな形、寸法、用途及び保管者は 当該各号 に定めるところによる。</p>

<p class="jorei-article">第3条 公印は、保管責任者を定めてこれを保管するものとする。</p>

<p class="jorei-article">第4条 前条 の公印は、それぞれ所管の上席 (級) 指揮者がこれを保管する。</p>

<p class="jorei-article">第5条 公印使用後は、常に堅固な容器に納め、錠を掛けて保管する。</p>

<p class="jorei-article">第6条 公印を整理するために公印台帳 ( 様式第1号 ) を置く。</p>

<p class="jorei-article">第7条 公印を使用するものは、公印使用簿 ( 様式第2号 ) に必要な事項を記入し、これに公印を押印する文書の決裁がある起案文書を添えて保管責任者に提示してその承認を得て、その面前において行わなければならない。 ただし、保管責任者の承認を得たときは、この限りでない。</p>

</div>` },
    { id: 161, title: '三郷市空家等の適切な管理に関する条例', category: '民生・福祉', keywords: ['空き家', '管理', '防犯'], summary: '空き家の適切な管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000578.html',
        fullText: `<div class="jorei-header">○三郷市消防職員の勤務時間に関する規則<br>平成元年1月20日 規則第9号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規則は、 職員の勤務時間、休日及び休暇に関する条例 (平成7年条例第3号。以下「条例」という。) 第4条第2項 の規定に基づき、消防職員 (以下「職員」という。) の勤務時間等に関して必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(勤務区分) 第2条 職員のうち、次に掲げる職員の勤務は、毎日勤務とする。</p>

<p class="jorei-article">(毎日勤務者の勤務時間等) 第3条 毎日勤務者の勤務日、勤務時間及び休憩時間は、 職員の勤務時間、休日及び休暇に関する規則 (平成7年規則第12号) を準用する。</p>

<p class="jorei-article">(隔日勤務者の勤務時間) 第4条 隔日勤務者の勤務時間は、午前8時30分から翌日の午前8時45分までとし、休憩時間及び睡眠時間を除き、4週間を通じ1週間について平均38時間45分とする。</p>

<p class="jorei-article">(隔日勤務者の休憩時間及び休息時間) 第5条 隔日勤務者の休憩時間及び休息時間は、次のとおりとする。</p>

<p class="jorei-article">(隔日勤務者の週休日) 第6条 隔日勤務者の週休日は、4週間について8日となるよう消防長が定める。</p>

<p class="jorei-article">(休日等の勤務) 第7条 隔日勤務者は、 条例第9条 に規定する休日 (以下「休日等」という。) においても、勤務を命ぜられたときは、所定の勤務に服さなければならない。</p>

<p class="jorei-article">(休憩時間中等の出場等) 第8条 隔日勤務者は、休憩時間、睡眠時間等においても、出場又は勤務の命令を受けたときは、直ちにこれに従わなければならない。</p>

<p class="jorei-article">(勤務の原則) 第9条 隔日勤務者は、引継ぎを終了するまで、引き続き勤務しなければならない。</p>

<p class="jorei-article">(勤務時間の特例) 第10条 所属長は、業務上特段の必要と認める場合、臨時に隔日勤務者を毎日勤務に毎日勤務者を隔日勤務に変更することができる。 この場合において、当該変更が長期に及ぶときは、消防長の承認を得なければならない。</p>

<p class="jorei-article">(定年前再任用短時間勤務職員の勤務時間等) 第11条 第2条 から 前条 までの規定にかかわらず、 条例第2条第3項 の定年前再任用短時間勤務職員に係る勤務時間等については、消防長が別に定める。</p>

<p class="jorei-article">(委任) 第12条 この規則に定めるもののほか、勤務について必要な事項は、消防長が定める。</p>

<p class="jorei-article">(施行期日) 第1条 この規則は、令和5年4月1日から施行する。</p>

<p class="jorei-article">(改正後の三郷市消防職員の勤務時間に関する規則における暫定再任用短時間勤務職員に関する経過措置) 第8条 暫定再任用短時間勤務職員は、この規則による改正後の三郷市消防職員の勤務時間に関する規則第11条に規定する定年前再任用短時間勤務職員とみなして、同条の規定を適用する。</p>

<p class="jorei-article">(雑則) 第12条 附則第3条から前条までに規定するもののほか、この規則の施行に関し必要な経過措置は、市長が定める。</p>

</div>` },
    { id: 162, title: '三郷市暴力団排除条例', category: '民生・福祉', keywords: ['暴力団', '排除', '安全'], summary: '暴力団排除に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000580.html',
        fullText: `<div class="jorei-header">○三郷市消防職員被服等の支給及び貸与規則<br>昭和56年5月29日 規則第20号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規則は、消防職員の職務の執行上必要な被服等の支給及び貸与に関し必要な事項を定めることを目的とする。</p>

<p class="jorei-article">(支給品及び貸与品) 第2条 支給する被服等 (以下「支給品」という。) の品目は、 別表第1 のとおりとし、支給品の員数及び使用期間は、消防長が別に定める。</p>

<p class="jorei-article">第3条 貸与する被服等 (以下「貸与品」という。) の品目は、 別表第2 のとおりとし、貸与品の員数及び貸与期間は、消防長が別に定める。</p>

<p class="jorei-article">第4条 勤務の性質により必要がある場合には、消防長は、 前2条 に規定する支給品又は貸与品の品目のほか、その勤務に必要な被服等を支給し、又は貸与することができる。</p>

<p class="jorei-article">第5条 この規則により被服等を支給し、又は貸与された者は、公務時間中及び職務の必要に応じ、支給品又は貸与品を着用しなければならない。 ただし、消防長の許可を得た者は、この限りでない。</p>

<p class="jorei-article">(返納) 第6条 消防職員が失職し、又は退職した場合には、その者 (死亡の場合は、その遺族等) は、使用期間の満了しない支給品及び貸与品を速やかに返納しなければならない。 ただし、特に返納する必要がないと消防長が認めるときは、この限りでない。</p>

<p class="jorei-article">(再交付等) 第7条 使用期間の満了しない支給品又は貸与品を滅失し、又はき損等により使用に堪えなくなった場合には、代品を交付することができる。 ただし、その滅失又はき損等が、故意又は重大な過失による場合には弁償するものとする。</p>

<p class="jorei-article">(委任) 第8条 この規則の施行に関し必要な事項は、消防長が定める。</p>

</div>` },
    { id: 163, title: '三郷市住居表示に関する条例', category: '民生・福祉', keywords: ['住居表示', '住所', '地番'], summary: '住居表示に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000581.html' },
    { id: 164, title: '三郷市文化会館設置及び管理条例', category: '民生・福祉', keywords: ['文化会館', '施設', '文化活動'], summary: '文化会館の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000583.html',
        fullText: `<div class="jorei-header">○三郷市消防職員の立入検査証に関する規則<br>平成5年3月29日 規則第13号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、消防法 (昭和23年法律第186号) 第4条第2項 (同法第16条の3の2第3項、第16条の5第3項及び第34条第2項において準用する場合を含む。) に規定する証票 (以下「立入検査証」という。) に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(立入検査証) 第2条 立入検査証の様式は、立入検査証 ( 様式第1号 ) のとおりとする。</p>

<p class="jorei-article">(取扱い) 第3条 立入検査証の取扱いは慎重にし、他人に貸与し、又は職務執行以外にこれを使用してはならない。</p>

<p class="jorei-article">(交付等) 第4条 立入検査証を交付したときは、立入検査証交付台帳 ( 様式第2号 ) により常に整理しておくものとする。</p>

<p class="jorei-article">(返納) 第5条 立入検査証は、消防職員の身分を失ったときは、直ちに返納しなければならない。</p>

</div>` },
    { id: 165, title: '三郷市立コミュニティセンター設置及び管理条例', category: '民生・福祉', keywords: ['コミュニティセンター', '地域活動', '施設'], summary: 'コミュニティセンターの設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000585.html',
        fullText: `<div class="jorei-header">○三郷市消防職員の特殊勤務手当に関する条例<br>昭和43年12月24日 条例第23号</div>
<div class="jorei-body">
<p class="jorei-article">(目的及び効力) 第1条 この条例は、地方自治法 (昭和22年法律第67号) 第204条第3項、地方公務員法 (昭和25年法律第261号) 第25条及び 職員の給与に関する条例 (昭和31年条例第23号) 第10条第2項 の規定に基づき、消防職員の特殊勤務手当に関する事項を定めることを目的とする。</p>

<p class="jorei-article">(特殊勤務手当の種類及び支給の範囲) 第2条 特殊勤務手当は、 次の各号 に掲げる種類とし、その支給の範囲は、 当該各号 に定めるとおりとする。</p>

<p class="jorei-article">(手当の額) 第3条 前条 に規定する特殊勤務手当の額は、 別表 のとおりとする。</p>

<p class="jorei-article">(委任) 第4条 この条例に定めるもののほか、特殊勤務手当の支給に関し必要な事項は、市長が定める。</p>

</div>` },
    { id: 166, title: '三郷市斎場条例', category: '民生・福祉', keywords: ['斎場', '火葬場', '葬祭'], summary: '斎場に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000599.html' },
    { id: 167, title: '災害弔慰金の支給等に関する条例', category: '民生・福祉', keywords: ['災害', '弔慰金', '支援'], summary: '災害弔慰金の支給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000601.html' },
    { id: 168, title: '三郷市災害見舞金支給条例', category: '民生・福祉', keywords: ['災害', '見舞金', '支援'], summary: '災害見舞金の支給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000603.html',
        fullText: `<div class="jorei-header">○三郷市危険物の規制に関する規則<br>平成12年3月13日 規則第7号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 消防法 (昭和23年法律第186号。以下「法」という。) 、危険物の規制に関する政令 (昭和34年政令第306号。以下「政令」という。) 及び危険物の規制に関する規則 (昭和34年総理府令第55号。以下「府令」という。) の施行について必要な事項は、この規則の定めるところによる。</p>

<p class="jorei-article">(仮貯蔵又は仮取扱いの承認) 第1条の2 消防長は、府令第1条の6の規定による承認申請があった場合は、速やかに調査を行い、火災予防上安全な場所と認めたときは、仮貯蔵・仮取扱い承認書 ( 様式第2号 ) 、火災予防上安全な場所と認められないときは、仮貯蔵・仮取扱い不承認書 ( 様式第3号 ) に申請書の1部を添付して申請者に交付するものとする。 消防長は、府令第1条の6の規定による承認申請があった場合は、速やかに調査を行い、火災予防上安全な場所と認めたときは、仮貯蔵・仮取扱い承認書 ( 様式第2号 ) 、火災予防上安全な場所と認められないときは、仮貯蔵・仮取扱い不承認書 ( 様式第3号 ) に申請書の1部を添付して申請者に交付するものとする。</p>

<p class="jorei-article">(製造所等の設置又は変更の許可の申請等) 第2条 法第11条第1項後段の規定により、製造所、貯蔵所又は取扱所 (以下「製造所等」という。) の位置、構造又は設備の変更の許可を申請しようとする者は、申請の際に、当該製造所等の変更部分に関する変更前の 次項 の許可証及び府令第4条第1項の申請書 (以下この条及び 次条第1項 において「申請書」という。) の副本並びに政令第8条第3項の完成検査済証 (以下「許可書類」という。) を提示しなければならない。</p>

<p class="jorei-article">(軽微な変更工事等) 第2条の2 前条第1項 の変更の許可申請を要しない軽微な変更工事を行おうとする場合は、軽微な変更工事届出書 ( 様式第5号 ) に関係書類を添えて市長に提出しなければならない。</p>

<p>(製造所等休止・再開の届出) 第2条の3 製造所等の設置者、管理者又は占有者は、製造所等の使用をおおむね3箇月以上休止しようとするとき、又は休止届を提出後、再開しようとするときは、危険物製造所等休止・再開届出書 ( 様式第7号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(許可の却下等) 第3条 市長は、法第11条第1項の規定による製造所等の設置又は位置、構造若しくは設備の変更の許可申請が、法第10条第4項の規定に基づき政令で定める技術上の基準 ( 次項 において「技術上の基準」という。) に適合しないと認めたときは、不許可書 ( 様式第8号 ) に副本を添付して申請者に通知する。</p>

<p class="jorei-article">(許可申請の取消申請) 第3条の2 法第11条第1項の規定により製造所等の設置又は変更許可を受けた者が、許可申請の取消しを行おうとする場合は、許可申請取消申請書 ( 様式第11号 ) に当該許可申請書類を添えて市長に提出するものとする。</p>

<p class="jorei-article">(地位の承継の届出の際の許可書類の提示等) 第4条 法第11条第6項後段の規定により、製造所等の譲渡若しくは引渡しを受けた者又は法第11条の4第1項の規定により製造所等において貯蔵し、若しくは取り扱う危険物の種類若しくは数量の変更を届け出ようとする者は、届出の際に、当該製造所等の許可書類を提示しなければならない。</p>

<p>(製造所等設置者の住所、氏名欄変更の届出) 第4条の2 法第11条第1項の規定により許可を受けた製造所等の設置者、管理者又は占有者は、府令第4条の設置の許可の申請書の記載事項で、同条第6項の規定に該当しない設置者の住所又は氏名欄に記載したものを変更したときは、設置者の氏名 (名称) 変更届出書 ( 様式第12号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(仮使用の承認等の通知) 第5条 市長は、府令第5条の2の規定により仮使用の申請を承認したときは、危険物 (製造所・貯蔵所・取扱所) 仮使用承認書 ( 様式第13号 ) により、承認しないときは、仮使用不承認書 ( 様式第14号 ) により申請者に通知する。</p>

<p class="jorei-article">(仮使用の承認の取消し) 第6条 市長は、仮使用の承認を取り消したときは、仮使用承認取消書 ( 様式第15号 ) により申請者に通知する。</p>

<p class="jorei-article">(措置命令等を発した場合における公示の方法) 第6条の2 府令第7条の5の規定により市長が定める公示の方法は、消防防災総合庁舎及び分署の掲示場への掲示並びに三郷市ホームページへの掲載とする。</p>

<p class="jorei-article">(廃止の届出の際の許可書類の提示) 第7条 法第12条の6の規定により、製造所等の用途の廃止を届け出ようとする者は、届出の際に、当該製造所等の許可書類を提示しなければならない。</p>

<p class="jorei-article">(危険物保安監督者の選任及び解任の届出) 第8条 府令第48条の3に定める届出書には、選任を受諾したことを証する危険物保安監督者選任承諾書 ( 様式第17号 ) 及び危険物取扱者免状の写しを添付しなければならない。</p>

<p class="jorei-article">(危険物取扱従事者の届出) 第8条の2 法第13条第1項による危険物保安監督者の選任を要しない製造所等の所有者、管理者又は占有者は、危険物取扱者免状を有する者から危険物取扱従事者を定め、危険物取扱者免状の写しを添えて、危険物取扱従事者届出書 ( 様式第18号 ) を市長に届け出なければならない。</p>

<p class="jorei-article">(地下貯蔵タンク等の在庫の管理及び危険物の漏えい時の措置に関する計画届出書) 第8条の3 危険物の規制に関する規則の一部を改正する省令 (平成15年総務省令第143号) 附則第3項第2号の規定に基づく届出書は、地下貯蔵タンク等の在庫の管理及び危険物の漏えい時の措置に関する計画届出書 ( 様式第19号 ) のとおりとする。</p>

<p class="jorei-article">(予防規程の認可等) 第9条 法第14条の2第1項の規定により、予防規程の認可を受けようとする者は、申請書に当該認可を受けようとする予防規程を2部添えて提出しなければならない。</p>

<p class="jorei-article">(収去証の交付) 第10条 市長は、法第16条の5第1項の規定により職員に危険物を収去させるときは、被収去者に収去証 ( 様式第22号 ) を交付する。</p>

<p class="jorei-article">(製造所等の許可証の再交付の申請等) 第11条 法第11条第1項の規定により製造所等の設置又は位置、構造若しくは設備の変更の許可を受けた者 (法第11条第6項の規定により設置者の地位を承継した者を含む。) が、当該製造所等に係る許可証を亡失し、滅失し、汚損し、又は破損したときは、再交付申請書 ( 様式第23号 ) に理由書を添えて、市長に許可証の再交付を申請することができる。</p>

<p class="jorei-article">(タンク検査済証の再交付の申請) 第12条 前条 の規定は、政令第8条の2第7項に定めるタンク検査済証の再交付について準用する。</p>

<p class="jorei-article">(基準の特例適用申請) 第13条 政令第23条の規定による基準の特例の適用を受けようとする者は、基準の特例適用申請書 ( 様式第24号 ) に必要な図面等を添付して市長に申請するものとする。</p>

<p class="jorei-article">(申請部数) 第14条 本規則に規定する各申請書等は、正副2通提出するものとする。</p>

</div>` },

    // ===== 第9編 産業経済 =====
    { id: 169, title: '三郷市農業委員会の委員及び農地利用最適化推進委員の定数に関する条例', category: '産業経済', keywords: ['農業委員会', '農地', '委員'], summary: '農業委員会の委員定数に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000605.html',
        fullText: `<div class="jorei-header">○三郷市火災調査規程<br>平成12年3月23日 消本訓令第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規程は、消防法 (昭和23年法律第186号。以下「法」という。) 第7章の規定に基づく火災の調査 (以下「調査」という。) の執行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(用語の定義) 第2条 この規程において、 次の各号 に掲げる用語の意義は、それぞれ 当該各号 の定めるところによる。</p>

<p class="jorei-article">(調査の基本) 第3条 調査は、物的証拠を主体とし、関係者等の供述に基づいて検討を加え、科学的な方法による合理的な事実の解明を図らなければならない。</p>

<p class="jorei-article">(調査の区分及び範囲) 第4条 調査の区分は火災原因調査及び火災損害調査とし、その範囲は 次の各号 に掲げるとおりとする。</p>

<p class="jorei-article">(調査責任及び範囲) 第5条 消防本部予防課長 (以下「課長」という。) 又は消防署長 (以下「署長」という。) の調査の範囲は、次のとおりとする。</p>

<p class="jorei-article">(調査員) 第6条 消防本部及び消防署に火災調査員 (以下「調査員」という。) を置く。</p>

<p class="jorei-article">(調査結果の管理) 第7条 課長及び署長は、調査結果の適切な管理に配意するものとする。</p>

<p class="jorei-article">(調査結果の活用等) 第8条 課長及び署長は、調査結果を分析及び検討して、火災の実態を明らかにするとともに消防行政に反映できる資料を整備し、活用ができるように努めなければならない。</p>

<p class="jorei-article">(類似火災への対応) 第9条 課長は、調査結果から製造物の欠陥による類似火災の発生が予測されるなど必要と認めるときは、当該火災に係る資料の収集に努めなければならない。</p>

<p class="jorei-article">(調査協力) 第10条 課長は、署長が行う調査に関する業務 (以下「調査業務」という。) について協力する。 また、課長は署長に対し、調査員の派遣を要請することができる。</p>

<p class="jorei-article">(技術の向上) 第11条 課長及び署長は、調査に関する研究を行うとともに、機材の整備を図り、火災原因究明の技術を向上するよう努めるものとする。</p>

<p class="jorei-article">(調査態勢の確立と実務指導の要請) 第12条 課長及び署長は、調査態勢の万全を期すとともに、調査員に対して調査にかかわる知識及び技術を教養し、調査技術の向上に努めなければならない。</p>

<p class="jorei-article">(鑑識の要請等) 第13条 署長は、調査上特に専門的な技術、知識を必要と認めた場合は、課長に対して鑑識の要請をすることができる。</p>

<p class="jorei-article">(鑑定要請) 第14条 課長は、焼損物件等にかかわる鑑定を必要と認める場合は、鑑定依頼書 ( 様式第2号 ) により、外部の機関へ分析、研究等を依頼することができる。</p>

<p class="jorei-article">(通訳人の要請等) 第15条 課長及び署長は、外国人に関連する火災があった場合には、 三郷市火災調査に係る通訳人に対する通訳料の支払に関する規程 (平成12年消本訓令第9号。以下「通訳人規程」という。) 第7条 に基づき、通訳人 ( 通訳人規程第2条第1項 に定める通訳人をいう。以下同じ。) の派遣要請を行い、適切な調査を実施するものとする。</p>

<p class="jorei-article">(管轄区域外に対する支援) 第16条 消防組織法 (昭和22年法律第226号) 第39条の規定に基づき、三郷市消防本部管轄区域外の消防長から火災調査に関する応援要請があった場合、課長は、消防長の承認を得て職員を派遣することができる。</p>

<p class="jorei-article">(本部の設置) 第17条 消防長は、大規模特異火災の発生に際し、機能的かつ効率的な調査執行の必要があると認めるときは調査本部を設置する。</p>

<p class="jorei-article">(本部の設置場所) 第18条 調査本部は、三郷市消防本部予防課内に設置し、必要に応じ調査本部のもとに現地調査本部を設置することができる。</p>

<p class="jorei-article">(本部の編成) 第19条 調査本部に調査本部長、調査副本部長、調査執行責任者及び本部員を置く。</p>

<p class="jorei-article">(調査本部長) 第20条 調査本部長は、消防長とする。</p>

<p class="jorei-article">(調査副本部長) 第21条 調査副本部長は、消防本部次長 (消防本部次長が不在のときは、消防長が指名する者) の職にある者とする。</p>

<p class="jorei-article">(調査執行責任者) 第22条 調査執行責任者は、課長の職にある者とし、本部員を指揮監督し、本部設置火災の現場保全の徹底を図り、調査を執行する。</p>

<p class="jorei-article">(本部員) 第23条 本部員は、消防本部職員及び消防署職員の中から調査本部長の指名により構成された消防職員で、本部設置火災の調査に従事する。</p>

<p class="jorei-article">(調査本部への支援等) 第24条 火災調査に関係ある課長 (以下「関係課長」という。) は、調査本部長の要請に応じて、支援協力するものとする。</p>

<p class="jorei-article">(指揮本部長からの情報の引継ぎ) 第25条 調査本部長は、 三郷市警防規程 に規定する現場指揮本部長から火災調査に係る所要の情報を引き継ぎ、調査の円滑な遂行を期するものとする。</p>

<p class="jorei-article">(報道機関等に対する発表) 第26条 本部設置火災について報道機関等に発表する場合は、調査本部長と関係課長及び署長と協議し、その内容を調整するものとする。</p>

<p class="jorei-article">(調査本部の解散) 第27条 調査本部長は、調査本部の機能を継続する必要がなくなったと認める場合は、これを解散する。</p>

<p class="jorei-article">(調査員の責務) 第28条 調査員は、調査上必要な知識の修得に努め、調査技術の向上に努めなければならない。</p>

<p class="jorei-article">(立入りの原則) 第29条 調査員の調査現場その他関係ある場所への立入りは、関係者等の立会いを得ることを原則とする。</p>

<p class="jorei-article">(質問) 第30条 調査員は、関係者等に対して調査上必要な事項を質問し、火災状況の把握に努めなければならない。</p>

</div>` },
    { id: 170, title: '三郷市農政審議会条例', category: '産業経済', keywords: ['農政', '審議会', '農業'], summary: '農政審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000610.html',
        fullText: `<div class="jorei-header">○三郷市消防団の設置等に関する条例<br>昭和44年6月30日 条例第24号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 消防組織法 (昭和22年法律第226号。以下「法」という。) 第18条第1項に規定する消防団の設置、名称及び区域については、 この条例 の定めるところによる。</p>

<p>(消防団の設置、名称及び区域) 第2条 法第9条第3号の規定に基づき、次の消防団を設置する。</p>

</div>` },
    { id: 171, title: '三郷市営土地改良事業受益者負担金徴収条例', category: '産業経済', keywords: ['土地改良', '受益者負担', '農業基盤'], summary: '土地改良事業の受益者負担金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000612.html',
        fullText: `<div class="jorei-header">○三郷市消防団員の定員、任免、給与、服務等に関する条例<br>昭和44年6月30日 条例第25号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 非常勤の消防団員 (以下「団員」という。) の定員、任免、給与、服務等については、この条例の定めるところによる。</p>

<p class="jorei-article">(定員) 第2条 団員の定数は、360人とする。</p>

<p class="jorei-article">(任用) 第3条 消防団長 (以下「団長」という。) は、消防団の推薦に基づき市長が、その他の団員は団長が、次に該当する者のうちから市長の承認を得て任用する。</p>

<p class="jorei-article">(退職) 第4条 団員は、退職しようとする場合は、あらかじめ文書をもって任命権者に願い出て、その許可を受けなければならない。</p>

<p class="jorei-article">(欠格条項) 第5条 次の各号 のいずれかに該当する者は、団員となることができない。</p>

<p class="jorei-article">(分限) 第6条 団長は、団員が 次の各号 のいずれかに該当する場合においては、これを降任し、又は免職することができる。</p>

<p class="jorei-article">(懲戒) 第7条 団長は、団員が 次の各号 のいずれかに該当するときは、懲戒処分として、戒告し、停職し、又は免職することができる。</p>

<p class="jorei-article">第8条 分限及び懲戒に関する処分の手続については、規則で定める。</p>

<p class="jorei-article">(服務規律) 第9条 団員は、団長の招集によって出動し、職務に従事するものとする。 ただし、招集を受けない場合であっても、火災その他の災害の発生を知ったときは、あらかじめ指定するところに従い、直ちに出動し、職務に従事しなければならない。</p>

<p class="jorei-article">第10条 団員であって10日以上居住地を離れる場合は、団長にあっては市長に、その他の者にあっては団長に届け出なければならない。 ただし、特別の事情がない限り、団員の半数以上が同時に居住地を離れることはできない。</p>

<p class="jorei-article">第11条 団員は、職務上知り得た秘密を他に漏らしてはならない。</p>

<p class="jorei-article">第12条 団員は、消防団の正常な運営を阻害し、若しくは著しくその活動能率を低下させる等の集団的行動を行ってはならない。</p>

<p class="jorei-article">(報酬) 第13条 団員には、 別表第1 及び 別表第2 に定める報酬を支給する。</p>

<p class="jorei-article">(費用弁償) 第14条 団員に支給する費用弁償については、 特別職の職員で非常勤のものの報酬及び費用弁償に関する条例 (昭和48年条例第2号) の例による。</p>

<p class="jorei-article">(公務災害補償) 第15条 団員が公務により死亡し、負傷し、若しくは疾病にかかり、又は公務により負傷し、若しくは疾病により死亡し、心身に障害がある状態となった場合においては、その団員又はその者の遺族若しくは被扶養者に対し損害を補償する。</p>

<p class="jorei-article">(退職報償金) 第16条 団員が退職した場合においては、その者 (死亡による退職の場合には、その者の遺族) に退職報償金を支給する。</p>

<p class="jorei-article">(罰則の適用等に関する経過措置) 第4条 この条例の施行前にした行為の処罰については、なお従前の例による。</p>

<p class="jorei-article">(人の資格に関する経過措置) 第5条 拘禁刑又は拘留に処せられた者に係る他の条例の規定によりなお従前の例によることとされ、なお効力を有することとされ又は改正前若しくは廃止前の条例の規定の例によることとされる人の資格に関する法令の規定の適用については、無期拘禁刑に処せられた者は無期禁錮に処せられた者と、有期拘禁刑に処せられた者は刑期を同じくする有期禁錮に処せられた者と、拘留に処せられた者は刑期を同じくする旧拘留に処せられた者とみなす。</p>

<p class="jorei-article">(経過措置の規則への委任) 第9条 この編に定めるもののほか、刑法等一部改正法等の施行に伴い必要な経過措置は、規則で定める。</p>

</div>` },
    { id: 172, title: '農業近代化資金利子補給条例', category: '産業経済', keywords: ['農業', '近代化', '融資', '利子補給'], summary: '農業近代化資金の利子補給に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000614.html',
        fullText: `<div class="jorei-header">○三郷市消防団員被服等貸与規則<br>昭和56年3月16日 規則第10号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、三郷市消防団員制服に関する規則 (平成16年規則第56号。以下「規則」という。) に基づき三郷市消防団員に貸与する被服等 (以下「貸与品」という。) の支給について、必要な事項を定めるものとする。</p>

<p class="jorei-article">(貸与品) 第2条 貸与品は、規則別表第1及び別表第2に定めるもののほか、 別表 のとおりとする。</p>

<p class="jorei-article">(貸与品の着用等) 第3条 貸与品は、常に善良な注意をもって着用し、又は保管しなければならない。</p>

<p class="jorei-article">(再貸与及び弁償) 第4条 貸与品を亡失したとき、又はき損により使用に堪えなくなったときは、直ちに消防団長を経て消防長に届け出なければならない。</p>

<p class="jorei-article">(返納) 第5条 退職したときは、貸与品を返納しなければならない。 ただし、消防長が特に返納する必要がないと認めるときは、この限りでない。</p>

<p class="jorei-article">(委任) 第6条 この規則 の施行に関し必要な事項は、消防長が定める。</p>

</div>` },
    { id: 173, title: '三郷市商工審議会条例', category: '産業経済', keywords: ['商工', '審議会', '産業振興'], summary: '商工審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000622.html' },
    { id: 174, title: '三郷市中小企業融資条例', category: '産業経済', keywords: ['中小企業', '融資', '経営支援'], summary: '中小企業融資に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000624.html',
        fullText: `<div class="jorei-header">○彩の国さいたま人づくり広域連合規約<br>平成11年5月14日 自治許第211号</div>
<div class="jorei-body">
<p class="jorei-article">(広域連合の名称) 第1条 この広域連合は、彩の国さいたま人づくり広域連合 (以下「広域連合」という。) という。</p>

<p class="jorei-article">(広域連合を組織する地方公共団体) 第2条 広域連合は、埼玉県及び埼玉県内の全市町村 (以下「構成団体」という。) をもって組織する。</p>

<p class="jorei-article">(広域連合の区域) 第3条 広域連合の区域は、埼玉県の区域とする。</p>

<p class="jorei-article">(広域連合の処理する事務) 第4条 広域連合は、構成団体の職員の人材の開発、交流及び確保に関する事務 (構成団体が自ら行うものを除く。) を処理する。</p>

<p class="jorei-article">(広域連合が作成する広域計画の項目) 第5条 広域連合が作成する広域計画には、次の項目について記載するものとする。</p>

<p class="jorei-article">(広域連合の事務所) 第6条 広域連合の事務所は、さいたま市北区土呂町二丁目24番地1に置く。</p>

<p class="jorei-article">(広域連合の議会の組織) 第7条 広域連合の議会の議員 (以下「広域連合議員」という。) の定数は、16人とする。</p>

<p class="jorei-article">(広域連合議員の選挙の方法) 第8条 広域連合議員は、構成団体の議会において、構成団体の長 (知事を除く。 次条 において同じ。) 及び議員のうちから、 次の各号 に掲げる区分に応じ、 当該各号 に定める人数を、 第1号 にあっては埼玉県議会、 第2号 及び 第4号 にあっては各市議会、 第3号 及び 第5号 にあっては各町村議会において選挙する。</p>

<p class="jorei-article">(広域連合議員の任期) 第9条 広域連合議員の任期は、構成団体の長又は議員としての任期による。</p>

<p class="jorei-article">(広域連合の議会の議長及び副議長) 第10条 広域連合の議会は、広域連合議員のうちから、議長及び副議長1人を選挙する。</p>

<p class="jorei-article">(広域連合の執行機関の組織) 第11条 広域連合に、広域連合長及び副広域連合長2人を置く。</p>

<p class="jorei-article">(広域連合の執行機関の選任の方法) 第12条 広域連合長は、構成団体の長が投票により、これを選挙する。</p>

<p class="jorei-article">(広域連合の執行機関の任期) 第13条 広域連合長及び副広域連合長の任期は、4年とする。 ただし、構成団体の任期の定めのある職を兼ねる者にあっては、当該任期による。</p>

<p class="jorei-article">(補助職員) 第14条 広域連合に、 第11条 に規定するもののほか、会計管理者その他の職員を置く。</p>

<p class="jorei-article">(選挙管理委員会) 第15条 広域連合に、選挙管理委員会を置く。</p>

<p class="jorei-article">(公平委員会) 第16条 広域連合に、公平委員会を置く。</p>

<p class="jorei-article">(監査委員) 第17条 広域連合に、監査委員2人を置く。</p>

<p class="jorei-article">(広域連合の経費の支弁の方法) 第18条 広域連合の経費は、次に掲げる収入をもって充てる。</p>

<p class="jorei-article">(規則への委任) 第19条 この規約 の施行に関し必要な事項は、広域連合長が規則で定める。</p>

</div>` },
    { id: 175, title: '三郷市家内労働者生業資金貸付条例', category: '産業経済', keywords: ['家内労働', '貸付', '資金'], summary: '家内労働者への生業資金貸付に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000637.html',
        fullText: `<div class="jorei-header">○三郷市徘徊高齢者等探索システム利用助成事業実施要綱<br>平成12年11月30日 告示第343号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱 は、認知症等により徘徊癖のある高齢者等 (以下「徘徊高齢者等」という。) の介護者に対して行う三郷市徘徊高齢者等探索システム利用助成事業に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(探索システム) 第2条 この要綱 において、「徘徊高齢者等探索システム (以下「探索システム」という。) 」とは、位置情報探索装置及び端末機等からなるシステムで、徘徊高齢者等が端末機を携帯することにより、徘徊発生時に位置情報センター等が徘徊高齢者等の位置情報を介護者に提供するシステムをいう。</p>

<p class="jorei-article">(事業内容) 第3条 市長は、探索システムの適切な運用が可能と認めて協定を結んだ民間事業者 (以下「協定事業者」という。) と介護者が契約してこのシステムを利用した場合に、利用に係る費用の助成を行う。</p>

<p class="jorei-article">(対象者) 第4条 この事業の対象者は、本市に居住し、かつ、住民基本台帳法 (昭和42年法律第81号) により本市に記録されている者 (以下「居住登録者」という。) で、次の要件のいずれかに該当する徘徊高齢者等の介護者とする。</p>

<p class="jorei-article">(申請) 第5条 探索システム利用助成を受けようとする者 (以下「申請者」という。) は、三郷市徘徊高齢者等探索システム利用助成申請書 ( 様式第1号 ) により市長に申請しなければならない。</p>

<p class="jorei-article">(助成金) 第6条 探索システム利用助成の決定があった者 (以下「利用者」という。) に対する助成の額 (以下「助成額」という。) は、 別表 のとおりとする。</p>

<p class="jorei-article">(利用者の負担額) 第7条 利用者は、協定事業者が定めた額 (消費税を含む。) から助成額を控除した額を当該協定事業者に支払うものとする。</p>

<p class="jorei-article">(協定事業者の変更) 第8条 利用者は、協定事業者を変更しようとするときは、三郷市徘徊高齢者等探索システム利用変更申請書 ( 様式第3号 ) により市長に申請しなければならない。</p>

<p class="jorei-article">(探索システムの利用契約) 第9条 市長は、探索システム利用助成を決定したとき、協定事業者の変更を決定したとき又は探索システム利用助成の決定を取り消したときは、速やかに当該協定事業者に通知するものとする。</p>

<p class="jorei-article">(利用決定の取消し) 第10条 市長は、 次の各号 のいずれかに該当するときは、探索システム利用助成の決定を取り消すものとする。</p>

<p class="jorei-article">(雑則) 第11条 この要綱 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 176, title: '三郷市消費生活センターの組織及び運営等に関する条例', category: '産業経済', keywords: ['消費生活', 'センター', '相談'], summary: '消費生活センターに関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000641.html' },

    // ===== 第10編 建設 =====
    { id: 177, title: '三郷市道路の構造、管理及び占用に関する条例', category: '建設', keywords: ['道路', '管理', '占用'], summary: '道路の構造・管理・占用に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000652.html',
        fullText: `<div class="jorei-header">○三郷市建設工事等の入札及び契約の過程並びに契約の内容に関する事項の公表要綱<br>平成13年3月30日 告示第89号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱は、市が契約を締結した建設工事等の入札及び契約の過程並びに契約の内容に関することを公表するために必要な事項を定めるものとする。</p>

<p class="jorei-article">(公表主体) 第2条 公表主体は、総務部契約課とする。</p>

<p class="jorei-article">(公表の対象) 第3条 公表の対象となるものは、建設工事で予定価格が400万円を超えるもので契約締結したもの及び建設工事の請負、建設資材・物品納入、設計・調査・測量業務及び維持管理業務の委託 (以下「建設工事等」という。) の契約について入札を行ったものとする。 ただし、公共の安全と秩序の維持に密接に関連する契約であって市の行為を秘密にする必要があるものを除く。</p>

<p class="jorei-article">(公表の内容) 第4条 建設工事で予定価格が400万円を超えるもので契約締結したものの公表の内容については、次のとおりとする。</p>

<p class="jorei-article">(公表の時期) 第5条 公表の時期については、契約を締結した後とする。</p>

<p class="jorei-article">(公表の方法) 第6条 公表の方法はインターネットを利用して閲覧に供する方法とする。</p>

<p class="jorei-article">(公表の期間) 第7条 閲覧期間については、公表した日の翌日から起算して3年間が経過する日までとする。</p>

<p class="jorei-article">(変更契約) 第8条 第4条第1項 の契約に契約金額の変更を伴う契約の変更を行った場合は、変更後の契約に係る 同項第9号イ から エ までに掲げる事項及び変更の理由を公表しなければならない。</p>

<p class="jorei-article">(その他) 第9条 この要綱に定めるもののほか、三郷市建設工事等の入札及び契約の過程並びに契約の内容に関する事項の公表に関し必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 178, title: '三郷市道路占用料条例', category: '建設', keywords: ['道路', '占用料', '使用料'], summary: '道路占用料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000657.html' },
    { id: 179, title: '三郷市市道に設置する道路標識の寸法に関する条例', category: '建設', keywords: ['道路標識', '寸法', '基準'], summary: '道路標識の寸法に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000658.html',
        fullText: `<div class="jorei-header">○三郷市こども医療費支給に関する条例<br>平成13年9月21日 条例第15号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この条例は、こどもが必要とする医療を容易に受けられるようにするため、こどもに対する医療費の一部を支給することにより、こどもの保健の向上と福祉の増進を図ることを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この条例において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(支給範囲) 第3条 市長は、受給資格者に対し、対象となるこどもの医療費に係る一部負担金の額 (以下「こども医療費」という。) を支給する。 ただし、受給資格者の責 (所得の未申告等) により過分の自己負担があるときはその額につきこども医療費の対象とせず、そのおそれのある間は当該医療費の支給を保留する。</p>

<p class="jorei-article">(受給資格者の登録) 第4条 こども医療費の支給を受けようとするときは、その保護者が規則の定めるところにより、受給資格者登録申請をしなければならない。</p>

<p class="jorei-article">(支給方法) 第5条 第3条 の規定による支給は、受給資格者からの申請に基づき行うものとする。</p>

<p class="jorei-article">(届出の義務) 第6条 受給資格者は、規則で定める事項について異動があった場合は、速やかに市長に届け出なければならない。</p>

<p class="jorei-article">(支給金の返還) 第7条 市長は、偽りその他不正の行為により支給を受けた者があるとき、他の法令等により医療費の支給を受けた者があるとき、又は一部負担金の変更その他の理由により過払いが生じたときは、その者から当該支給を受けた額の全部又は一部を返還させることができる。</p>

<p class="jorei-article">(権利の譲渡の禁止) 第8条 この条例によるこども医療費の支給を受ける権利は、譲渡し、又は担保に供してはならない。</p>

<p class="jorei-article">(委任) 第9条 この条例の施行に関し必要な事項は、規則で定める。</p>

</div>` },
    { id: 180, title: '三郷市準用河川条例', category: '建設', keywords: ['準用河川', '河川', '管理'], summary: '準用河川に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000660.html',
        fullText: `<div class="jorei-header">○三郷市国民健康保険出産費資金貸付基金条例<br>平成13年12月19日 条例第25号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 国民健康保険法 (昭和33年法律第192号) 第58条第1項の規定による出産育児一時金 (以下「出産育児一時金」という。) の支給を受けることが見込まれる世帯主に対し、出産育児一時金の支給を受けるまでの間、出産育児一時金の支給に係る出産に要する費用を支払うための資金 (以下「資金」という。) を円滑かつ効果的に貸し付けることにより、被保険者の福祉の向上に寄与するため、三郷市国民健康保険出産費資金貸付基金 (以下「基金」という。) を設置する。</p>

<p class="jorei-article">(基金の額) 第2条 基金の額は、500万円とする。</p>

<p class="jorei-article">(貸付対象者) 第3条 資金の貸付けは、次に掲げる要件のいずれかに該当する三郷市国民健康保険被保険者の属する世帯の世帯主に対して行う。 ただし、出産育児一時金の支給を受けることが見込まれる者に限る。</p>

<p class="jorei-article">(貸付金の額) 第4条 資金の貸付額は、出産育児一時金支給見込額の10分の8を限度とする。 ただし、算出した額に1,000円未満の端数があるときは、その端数は貸し付けない。</p>

<p class="jorei-article">(利子) 第5条 貸付金には、利子を付さない。</p>

<p class="jorei-article">(貸付金の申込み) 第6条 資金の貸付けを受けようとする者 (以下「申込者」という。) は、規則で定めるところにより、市長に申し込まなければならない。</p>

<p class="jorei-article">(貸付決定) 第7条 市長は、 前条 の規定による申込みがあったときは、速やかに内容を審査し、貸付けの適否を決定するものとする。</p>

<p class="jorei-article">(貸付方法) 第8条 貸付金の貸付方法は、窓口での現金払い又は口座振替とする。</p>

<p class="jorei-article">(貸付期間等) 第9条 資金の貸付期間は、当該貸付金に係る出産育児一時金が支給される日までの間とする。 ただし、出産の日から4週間以内に出産育児一時金の支給の申請がないときは、市長の指定する日までとする。</p>

<p class="jorei-article">(償還方法等) 第10条 申込者は、 第6条 の規定による申込みと同時に、市長に対し、出産育児一時金支給時に出産育児一時金と貸付金債権を対当額において相殺する旨の停止条件付相殺契約 (以下「相殺契約」という。) の申込みを行うものとする。</p>

<p class="jorei-article">(即時償還) 第11条 市長は、次のいずれかに該当すると認めたときは、 前条 の規定にかかわらず、借受人に対し直ちに貸付金の全額を償還させるものとする。</p>

<p class="jorei-article">(延滞金) 第12条 市長は、借受人が償還すべき期日までに償還すべき金額を支払わないときは、当該期日の翌日から支払の日までの日数に応じ、当該金額に年4.5パーセントの割合を乗じて計算した金額に相当する延滞金を徴収する。</p>

<p class="jorei-article">(過不足金の処理) 第13条 基金に過不足を生じたときは、一般会計歳入歳出予算に計上して処理するものとする。</p>

<p class="jorei-article">(繰替運用) 第14条 市長は、財政上必要があると認めるときは、確実な繰戻しの方法、期間及び利率を定めて基金に属する現金を歳計現金に繰り替えて運用することができる。</p>

<p class="jorei-article">(委任) 第15条 この条例 の施行に関し必要な事項は、規則で定める。</p>

</div>` },
    { id: 181, title: '三郷市都市計画審議会条例', category: '建設', keywords: ['都市計画', '審議会', 'まちづくり'], summary: '都市計画審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000669.html',
        fullText: `<div class="jorei-header">○三郷市情報公開・個人情報保護審査会規則<br>平成14年2月28日 規則第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市情報公開・個人情報保護審査会条例 (平成15年条例第3号) 第10条 の規定に基づき、三郷市情報公開・個人情報保護審査会 (以下「審査会」という。) の組織及び運営に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(会議録の作成) 第2条 審査会は、次の事項を記載した会議録を作成するものとする。</p>

<p class="jorei-article">(庶務) 第3条 審査会の庶務は、総務部総務課において処理する。</p>

<p class="jorei-article">(委任) 第4条 この規則に定めるもののほか、必要な事項は、審査会が定める。</p>

</div>` },
    { id: 182, title: '三郷市開発事業等の手続等に関する条例', category: '建設', keywords: ['開発', '手続', '宅地造成'], summary: '開発事業の手続に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000672.html' },
    { id: 183, title: '三郷市地区計画等の案の作成手続に関する条例', category: '建設', keywords: ['地区計画', 'まちづくり', '都市計画'], summary: '地区計画の作成手続に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000676.html',
        fullText: `<div class="jorei-header">○三郷市高齢者保健福祉計画策定検討懇話会規程<br>平成14年3月14日 告示第84号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 三郷市高齢者保健福祉計画の策定に関し幅広く市民の意見を聴くため、三郷市高齢者保健福祉計画策定検討懇話会 (以下「懇話会」という。) を置く。</p>

<p class="jorei-article">(所掌事項) 第2条 懇話会は、三郷市高齢者保健福祉計画に関する事項について検討協議する。</p>

<p class="jorei-article">(会員) 第3条 会員は、 三郷市介護保険条例第2章 に規定する介護保険運営協議会 (以下「運営協議会」という。) の委員をもって充てる。</p>

<p class="jorei-article">(座長及び座長代理) 第4条 懇話会に座長及び座長代理を置き、それぞれ運営協議会の会長及び副会長をもって充てる。</p>

<p class="jorei-article">(会議) 第5条 懇話会は、必要の都度、市長が招集する。</p>

<p class="jorei-article">(庶務) 第6条 懇話会の庶務は、いきいき健康部長寿いきがい課において処理する。</p>

<p class="jorei-article">(委任) 第7条 この規程に定めるもののほか、必要な事項は、座長が会議に諮って定める。</p>

</div>` },
    { id: 184, title: '三郷市都市計画法に基づく開発許可等の基準に関する条例', category: '建設', keywords: ['開発許可', '都市計画', '基準'], summary: '開発許可の基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000677.html',
        fullText: `<div class="jorei-header">○三郷市文化財保護条例施行規則<br>平成14年1月25日 教委規則第5号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、 三郷市文化財保護条例 (平成13年条例第30号。以下「条例」という。) 第18条 の規定に基づき、 条例 の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(同意書) 第2条 条例第6条第2項 の同意は、市指定文化財指定同意書 ( 様式第1号 ) によるものとする。</p>

<p class="jorei-article">(指定及び解除の通知書) 第3条 条例第8条第1項 の規定による指定の通知については、市指定文化財指定通知書 ( 様式第2号 ) によるものとする。</p>

<p class="jorei-article">(指定書等) 第4条 条例第8条第2項 の規定による指定については、指定書 ( 様式第4号 ) によるものとする。</p>

<p class="jorei-article">(指定書等の再交付) 第5条 指定書又は認定書を亡失し、又は破損したときは、指定書 (認定書) 再交付申請書 ( 様式第6号 ) により教育委員会に再交付の申請をするものとする。</p>

<p class="jorei-article">(届出書) 第6条 条例 に規定する届出書の様式は、 次の各号 に定めるものとする。</p>

<p class="jorei-article">(台帳) 第7条 教育委員会は、 条例第6条 の規定により指定した文化財に関し、三郷市指定文化財台帳を備え付け、必要な事項を記入をしなければならない。</p>

<p class="jorei-article">(現状変更) 第8条 条例第10条第1項 の承認を受ける場合は、市指定文化財現状変更承認申請書 ( 様式第12号 ) によるものとする。</p>

<p class="jorei-article">(公開の承認) 第9条 条例第12条第2項 の承認を受ける場合は、市指定文化財公開・出品承認申請書 ( 様式第13号 ) によるものとする。</p>

<p class="jorei-article">(損失補償) 第10条 条例第12条第4項 の規定による損失補償を受ける場合は、市指定文化財損失補償請求書 ( 様式第14号 ) を提出するものとする。</p>

<p class="jorei-article">(委任) 第11条 この規則 に定めるもののほか、 この規則 の施行に関し必要な事項は、別に定める。</p>

</div>` },
    { id: 185, title: '三郷市景観条例', category: '建設', keywords: ['景観', 'まちなみ', '美しいまち'], summary: '景観保全に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000679.html',
        fullText: `<div class="jorei-header">○三郷市立小・中学校の児童生徒の出席停止の命令の手続に関する規則<br>平成14年1月25日 教委規則第8号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、学校教育法 (昭和22年法律第26号。以下「法」という。) 第35条第3項 (法第49条において準用する場合も含む。) の規定に基づき、出席停止の命令の手続に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(意見具申) 第2条 校長は、法第35条第1項 (法第49条において準用する場合も含む。) の規定により、性行不良であって他の児童生徒の教育に妨げがあると認める児童生徒があるときは、教育委員会に出席停止に関する意見具申を行わなければならない。</p>

<p class="jorei-article">(保護者の意見の聴取) 第3条 教育委員会は、出席停止を命ずる場合には、法第35条第2項 (法第49条において準用する場合も含む。) の規定により、あらかじめ保護者の意見を聴取しなければならない。</p>

<p class="jorei-article">(児童生徒からの意見聴取) 第4条 教育委員会は、出席停止を命じようとするときは、当該児童生徒から意見を聴取する機会を確保するよう配慮するものとする。</p>

<p class="jorei-article">(関係者からの意見聴取) 第5条 教育委員会は、出席停止を命じようとする場合において必要と認めるときは、出席停止に係る児童生徒の行為により被害を受けた児童生徒及びその保護者から事情を聴取することができる。</p>

<p class="jorei-article">(出席停止の期間) 第6条 出席停止の期間は、児童生徒の性行不良の程度及び学校の秩序回復状況を考慮したうえで、可能な限り短い期間としなければならない。</p>

<p class="jorei-article">(保護者への通知) 第7条 教育委員会は、児童生徒に対し出席停止を命ずる場合には、出席停止通知書 ( 様式第2号 ) を該当校児童生徒の保護者に交付しなければならない。</p>

<p class="jorei-article">(出席停止の解除) 第8条 校長は、出席停止の命令を解除することが適当であると認めるときは、出席停止の解除に関する具申書 ( 様式第3号 ) を教育委員会に提出するものとする。</p>

<p class="jorei-article">(委任) 第9条 この規則 に定めるもののほか、出席停止の命令の手続に関し必要な事項は、教育長が定める。</p>

</div>` },
    { id: 186, title: '三郷市生産緑地地区の区域の規模に関する条件を定める条例', category: '建設', keywords: ['生産緑地', '農地', '都市農業'], summary: '生産緑地の規模条件に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000685.html',
        fullText: `<div class="jorei-header">○三郷市火薬類取締法施行細則<br>平成14年5月20日 規則第23号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、知事の権限に属する事務処理の特例に関する条例 (平成11年埼玉県条例第61号) 及び三郷市消防本部消防長に対する事務委任に関する規則 (昭和43年規則第16号) に基づき火薬類取締法 (昭和25年法律第149号。以下「法」という。) 及び火薬類取締法施行規則 (昭和25年通商産業省令第88号。以下「省令」という。) の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(消費許可の申請) 第2条 法第25条第1項の規定による火薬類 (煙火) 消費許可を受けようとする者 ( 次条 において「申請者」という。) は、火薬類 (煙火) 消費許可申請書 ( 様式第1号 ) を消防長に提出しなければならない。</p>

<p class="jorei-article">(消費許可証の交付) 第3条 消防長は、火薬類の消費の許可をしたときは、申請者に対し火薬類消費許可証 ( 様式第2号 ) を交付するものとする。</p>

<p class="jorei-article">(記載事項の変更の届出) 第4条 省令第81条の14の表第11号の規定による火薬類消費許可申請書又は火薬類消費計画書の記載事項の変更の届出をしようとする者は、火薬類消費許可に係る記載事項変更届出書 ( 様式第3号 ) を消防長に提出しなければならない。</p>

<p class="jorei-article">(災害事故の報告) 第5条 製造業者、販売業者、消費者その他火薬類を取り扱う者は、その所有し、又は占有する火薬類について災害事故が発生したときは、直ちに、火薬類災害事故報告書 ( 様式第4号 ) を消防長に提出しなければならない。</p>

<p class="jorei-article">(安定度試験結果報告) 第6条 法第36条第1項の規定による火薬類を輸入した者又はその製造後経済産業省令で定める期間を経過した火薬類を所有する者は、経済産業省令で定める方法により、その火薬類につき安定度試験を実施し、火薬類安定度試験結果報告書 ( 様式第5号 ) を消防長に提出しなければならない。</p>

<p class="jorei-article">(所有権取得届出) 第7条 省令第81条の14の表第15号の規定による相続若しくは遺贈又は法人の合併若しくは分割により火薬類の所有権を所得した者は、火薬類所有権取得届 ( 様式第6号 ) を消防長に提出しなければならない。</p>

<p class="jorei-article">(提出書類の通数) 第8条 消防長に提出する書類の通数は、申請書及び届出書にあっては2通、報告書にあっては1通とする。</p>

</div>` },
    { id: 187, title: '三郷市みどりの条例', category: '建設', keywords: ['みどり', '緑化', '環境'], summary: 'みどりの保全・創出に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000686.html' },
    { id: 188, title: '三郷市屋外広告物条例', category: '建設', keywords: ['屋外広告', '看板', '景観'], summary: '屋外広告物に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000692.html',
        fullText: `<div class="jorei-header">○三郷市談合情報対応要綱<br>平成14年11月25日 告示第312号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱は、市が締結する建設工事の請負等の契約に係る入札の適正を期するため、入札談合等の不正行為に関する情報 (以下「談合情報」という。) への対応について定めるものとする。</p>

<p class="jorei-article">(談合情報の確認等) 第2条 談合情報に係る通報を受けた者は、当該通報者に対して次に掲げる事項その他必要事項を確認し、直ちに、談合情報調書 ( 様式第1号 ) を作成し、当該調書を添付して所属長を経由し、談合情報報告書 ( 様式第2号 ) により総務部契約課長 (以下「課長」という。) に送付するものとする。</p>

<p class="jorei-article">(部長への報告) 第3条 課長は、談合情報について速やかに関係書類を添えて、総務部長に報告するものとする。</p>

<p class="jorei-article">(公正入札調査委員会の設置及び対応策の協議) 第4条 入札談合の防止及び談合情報について対応策を協議するため、三郷市公正入札調査委員会 (以下「委員会」という。) を置く。</p>

<p class="jorei-article">(落札者決定前における事情聴取) 第5条 落札者決定前に談合情報に係る通報があり、委員会が、談合情報に信憑性があると認たときは、課長は、次に掲げる事項その他必要事項について入札参加予定業者 (共同企業体にあっては構成員。以下同じ。) のすべてから個別に事情を聴取し、その内容について事情聴取書 ( 様式第3号 ) を作成するものとする。</p>

<p class="jorei-article">(入札の執行及び中断) 第6条 委員会が、談合情報に信憑性がないと認めたとき又は 前条第1項 の事情聴取をした結果、不正行為の事実が確認されなかったときは、入札参加予定業者のすべてから当該入札について不正行為を行っていない旨の誓約書 ( 様式第4号 ) を提出させるものとする。</p>

<p class="jorei-article">(入札の中止等) 第7条 第5条第1項 又は 前条第2項 の事情聴取の結果、不正行為の事実があったことを入札参加業者が認めたとき又は不正行為に係る証拠書類等を発見するなど不正行為があったことが明らかであると認められるときは、課長は、入札の中止等の措置をとるものとする。</p>

<p class="jorei-article">(落札者決定後又は契約後における事情聴取) 第8条 落札者決定後又は契約後 (仮契約を含む。) に談合情報に係る通報があり、委員会が談合情報に信憑性があると認めたときについては、 第5条第1項 の規定を準用する。</p>

<p class="jorei-article">(落札者決定後又は契約後に通報があった場合の措置) 第9条 前条 の事情聴取をした結果、不正行為の事実が確認されなかったときは、入札参加業者のすべてから当該入札について不正行為を行っていない旨の誓約書 ( 様式第4号 ) を提出させるものとする。</p>

<p class="jorei-article">(市長への報告) 第10条 課長は、談合情報に対する処理結果について、速やかに、談合情報処理書 ( 様式第5号 ) を作成し、指名業者一覧又は参加資格者一覧並びに談合情報調書、事情聴取書、誓約書、入札金額見積内訳書及び入札 (見積) 結果表の写し、不正行為の裏付けとなる資料その他の関係書類を添えて、市長に報告するものとする。</p>

<p class="jorei-article">(公正取引委員会への資料送付) 第11条 市長は、談合情報処理通知書 ( 様式第6号 ) を、その都度公正取引委員会事務総局審査局情報管理室長に送付するものとする。</p>

<p class="jorei-article">(警察への情報提供) 第12条 市長は、事情聴取の結果、談合の事実が認められる場合は、所管の警察署長に情報提供するものとする。</p>

</div>` },
    { id: 189, title: '三郷市都市公園条例', category: '建設', keywords: ['公園', '都市公園', 'みどり'], summary: '都市公園に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000694.html',
        fullText: `<div class="jorei-header">○三郷市情報公開・個人情報保護審査会条例<br>平成15年3月24日 条例第3号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 次に掲げる法律及び条例の規定による諮問に応じて調査審議するため、三郷市情報公開・個人情報保護審査会 (以下「審査会」という。) を置く。</p>

<p class="jorei-article">(定義) 第2条 この条例において「諮問機関」とは、 次の各号 に掲げるものをいう。</p>

<p class="jorei-article">(組織) 第3条 審査会は、委員3人をもって組織する。</p>

<p class="jorei-article">(会長) 第4条 審査会に会長を置き、委員の互選によって定める。</p>

<p class="jorei-article">(調査権限) 第5条 審査会は、必要があると認めるときは、諮問機関に対し、決定等に係る情報等の提示を求めることができる。 この場合において、何人も、審査会に対し、その提示された情報等の公開を求めることができない。</p>

<p class="jorei-article">(意見の陳述) 第6条 審査会は、審査請求人等から申立てがあったときは、当該審査請求人等に口頭で意見を述べる機会を与えることができる。</p>

<p class="jorei-article">(意見書等の提出) 第7条 審査請求人等は、審査会に対し、意見書又は資料を提出することができる。 ただし、審査会が意見書又は資料を提出すべき相当の期間を定めたときは、その期間内にこれを提出しなければならない。</p>

<p class="jorei-article">(会議の非公開等) 第8条 審査会の会議は、非公開とする。</p>

<p class="jorei-article">(守秘義務) 第9条 審査会の委員は、職務上知り得た秘密を漏らしてはならない。 その職を退いた後も、同様とする。</p>

<p class="jorei-article">(委任) 第10条 この条例の施行に関し必要な事項は、市長が定める。</p>

<p class="jorei-article">(罰則) 第11条 第9条 の規定に違反して秘密を漏らした者は、1年以下の拘禁刑又は50万円以下の罰金に処する。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、令和5年4月1日 (以下「施行日」という。) から施行する。</p>

<p class="jorei-article">(施行期日) 第1条 この条例は、令和5年4月1日から施行する。</p>

<p class="jorei-article">(罰則の適用等に関する経過措置) 第4条 この条例の施行前にした行為の処罰については、なお従前の例による。</p>

<p class="jorei-article">(人の資格に関する経過措置) 第5条 拘禁刑又は拘留に処せられた者に係る他の条例の規定によりなお従前の例によることとされ、なお効力を有することとされ又は改正前若しくは廃止前の条例の規定の例によることとされる人の資格に関する法令の規定の適用については、無期拘禁刑に処せられた者は無期禁錮に処せられた者と、有期拘禁刑に処せられた者は刑期を同じくする有期禁錮に処せられた者と、拘留に処せられた者は刑期を同じくする旧拘留に処せられた者とみなす。</p>

<p class="jorei-article">(経過措置の規則への委任) 第9条 この編に定めるもののほか、刑法等一部改正法等の施行に伴い必要な経過措置は、規則で定める。</p>

</div>` },
    { id: 190, title: '三郷市公園運営委員会条例', category: '建設', keywords: ['公園', '運営', '委員会'], summary: '公園運営委員会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000696.html',
        fullText: `<div class="jorei-header">○三郷市都市計画法に基づく開発許可等の基準に関する条例<br>平成15年3月24日 条例第10号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この条例 は、都市計画法 (昭和43年法律第100号。以下「法」という。) 第3章第1節の規定に基づき、開発許可等の基準に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(法第33条第4項の規定による最低敷地面積) 第2条 市街化調整区域において、開発行為を行う場合における、法第33条第4項の規定による予定建築物の最低敷地面積は、300平方メートルとする。 ただし、法第34条第13号に掲げる開発行為その他良好な住居等の環境の形成又は保持のため支障がないと認める場合であって規則で定めるものについては、この限りでない。</p>

<p class="jorei-article">(法第34条第12号の規定により定める開発行為) 第3条 法第34条第12号の規定により、開発区域の周辺における市街化を促進するおそれがないと認められ、かつ、市街化区域内において行うことが困難又は著しく不適当と認められる開発行為として定めるものは、次に掲げるものとする。</p>

<p class="jorei-article">(第3条第1項第1号の区域要件) 第4条 市長は、次に掲げる施設を予定建築物の用途として指定する。</p>

<p class="jorei-article">(既存の集落の指定等) 第5条 市長は、次に掲げる基準に基づき、既存の集落を指定する。</p>

<p class="jorei-article">(令第36条第1項第3号ハの規定により定める建築等) 第6条 令第36条第1項第3号ハの規定により、建築物又は第一種特定工作物の周辺における市街化を促進するおそれがないと認められ、かつ、市街化区域内において行うことが困難又は著しく不適当と認められる建築物の新築、改築若しくは用途の変更又は第一種特定工作物の新設として定めるものは、次に掲げるものとする。</p>

<p class="jorei-article">(地区計画が定められた区域における技術基準) 第7条 市街化調整区域における法第34条第10号に規定する開発行為は、法に定めるもののほか、 次の各号 のいずれにも適合するものとする。</p>

<p class="jorei-article">(第3条第1項第1号で指定する区域における技術基準) 第8条 第3条第1項第1号 で規定する開発行為は、法に定めるもののほか、 次の各号 いずれにも適合するものとする。</p>

<p class="jorei-article">(委任) 第9条 この条例 の施行に関し必要な事項は、規則で別に定める。</p>

</div>` },
    { id: 191, title: '三郷市運動公園の設置及び管理に関する条例', category: '建設', keywords: ['運動公園', 'スポーツ', '施設'], summary: '運動公園の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000698.html',
        fullText: `<div class="jorei-header">○三郷市狂犬病予防法施行細則<br>平成15年3月12日 規則第9号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、狂犬病予防法 (昭和25年法律第247号。以下「法」という。) 、狂犬病予防法施行令 (昭和28年政令第236号) 及び狂犬病予防法施行規則 (昭和25年厚生省令第52号。以下「省令」という。) の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(犬の登録申請書) 第2条 省令第3条の規定による犬の登録申請書は、犬の登録・狂犬病予防注射済票交付申請書 ( 様式第1号 ) によるものとする。</p>

<p class="jorei-article">(抑留犬の公示) 第3条 法第6条第8項の規定による抑留犬の公示は、抑留犬の公示 ( 様式第2号 ) によるものとする。</p>

<p class="jorei-article">(鑑札の再交付申請書) 第4条 省令第6条第1項の規定による鑑札の再交付の申請は、犬の鑑札再交付申請書 ( 様式第3号 ) によるものとする。</p>

<p class="jorei-article">(犬の死亡届) 第5条 省令第8条第1項の規定による犬が死亡したときの届出書は、犬の死亡届 ( 様式第4号 ) によるものとする。</p>

<p class="jorei-article">(犬の登録事項変更届) 第6条 省令第9条の規定による登録事項を変更したときの届出書は、犬の登録事項変更届 ( 様式第5号 ) によるものとする。</p>

<p class="jorei-article">(注射済票の交付申請書) 第7条 省令第12条第2項の規定による注射済票の交付申請は、犬の登録・狂犬病予防注射済票交付申請書 ( 様式第1号 ) によるものとする。</p>

<p class="jorei-article">(注射済票の再交付申請書) 第8条 省令第13条第1項の規定による注射済票の再交付の申請は、狂犬病予防注射済再交付申請書 ( 様式第6号 ) によるものとする。</p>

<p class="jorei-article">(領収書の交付) 第9条 三郷市手数料徴収条例 (平成12年条例第1号) 第2条第36号 から 第39号 までに規定する手数料を徴収した場合において、納付者に対する領収書の交付は、省令第5条に規定する鑑札又は省令第12条第3項に規定する注射済票を交付することをもって、これに代えることができる。</p>

<p class="jorei-article">(手数料の免除) 第10条 三郷市手数料徴収条例第4条第5項 の規定により、身体障害者補助犬法 (平成14年法律第49号) 第2条に規定する身体障害者補助犬に係る次に掲げる事務の手数料は、免除するものとする。</p>

</div>` },
    { id: 192, title: '三郷市公共下水道事業の設置等に関する条例', category: '建設', keywords: ['下水道', '公共下水道', 'インフラ'], summary: '公共下水道事業に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000703.html' },
    { id: 193, title: '三郷市下水道事業審議会条例', category: '建設', keywords: ['下水道', '審議会', 'インフラ'], summary: '下水道事業審議会に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000704.html',
        fullText: `<div class="jorei-header">○三郷市交通需要マネジメント実証実験事業費補助金交付要綱<br>平成15年3月4日 告示第53号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱 は、交通の快適性及び利便性の向上並びに交通による環境負荷の低減を図るとともに、コミュニティ間の交流の促進、市民活動の活性化及びまちづくりの推進に寄与することを目的として、一般旅客自動車運送事業者のうち市の交通需要マネジメント実証実験実施計画に参加する事業者に対し、予算の範囲内において補助金を交付することについて、必要な事項を定めるものとする。</p>

<p class="jorei-article">(定義) 第2条 交通需要マネジメント実証実験実施計画 (以下「実施計画」という。) とは、都市交通円滑化総合対策実施要綱 (平成10年12月4日付警察庁交通局長並びに国土交通省総合政策局長、都市・地域整備局長及び道路局長) の規定により、警察庁及び国土交通省から認定を受けた公共交通のサービス水準の向上を図ることにより、交通渋滞の解消及び自動車に起因する環境負荷の低減を図るための計画をいう。</p>

<p class="jorei-article">(補助対象事業) 第3条 補助の対象となる事業 (以下「補助対象事業」という。) は、実施計画に基づく事業とする。</p>

<p class="jorei-article">(補助対象経費等) 第4条 補助金交付の対象となる経費 (以下「補助対象経費」という。) は、補助対象事業に要する経費のうち、資産の取得にかかる経費を除いたものとする。</p>

<p class="jorei-article">(補助金の額等) 第5条 補助金の額は、補助対象経費に補助率を乗じて得た額の範囲内で市長が定める額とする。 ただし、補助対象経費の実支出額から補助対象事業の実施に伴う事業収入相当額を控除した額に補助率を乗じて得た額が、当該補助対象経費に補助率を乗じて得た額よりも少ない場合には、当該額以内の額とする。</p>

<p class="jorei-article">(事業開始届) 第6条 補助対象事業者は、補助対象事業を開始したときは、速やかに三郷市交通需要マネジメント実証実験事業費補助対象事業開始届 ( 様式第1号 。以下「開始届」という。) を提出するものとする。</p>

<p class="jorei-article">(交付の申請) 第7条 補助対象事業者は、補助金の交付を受けようとするときは、三郷市交通需要マネジメント実証実験事業費補助金交付申請書 ( 様式第2号 ) により行うものとする。</p>

<p class="jorei-article">(交付の決定及び通知) 第8条 前条 の規定による補助金の交付申請があったときは、審査のうえ、交付決定を行うものとする。</p>

<p class="jorei-article">(交付決定変更の申請) 第9条 補助対象事業者は、 前条第1項 の規定に基づき交付決定を受けた事業 (以下「補助事業」という。) の内容を変更するとき (ただし、軽微な場合を除く。) は、三郷市交通需要マネジメント実証実験事業費補助金交付決定変更申請書 ( 様式第4号 ) を提出するものとする。</p>

<p class="jorei-article">(交付決定の変更及び通知) 第10条 前条 の規定による補助金の交付決定変更の申請があったときは、審査のうえ、交付決定の変更を行うものとする。</p>

<p class="jorei-article">(申請の取下げ) 第11条 補助事業者は、交付決定の内容又はこれに付された条件に不服があることにより、補助金の交付申請を取り下げようとするときは、市が指定する期日までに、その旨を記載した書面を市に提出しなければならない。</p>

<p class="jorei-article">(状況報告) 第12条 補助事業者は、市の要求があった場合には、速やかに補助事業の遂行状況について、当該要求にかかる事項を書面で市長に報告しなければならない。</p>

<p class="jorei-article">(実績報告) 第13条 規則第13条 による補助事業の実績報告は、事業の完了した日から20日を経過した日又は翌年度の4月5日のいずれか早い日までに、三郷市交通需要マネジメント実証実験事業費補助金事業完了実績報告書 ( 様式第6号 。以下「実績報告書」という。) により行うものとする。</p>

<p class="jorei-article">(額の確定通知等) 第14条 規則第14条 による補助金の額の確定通知は、実績報告書を審査し、補助事業の成果が補助金の交付決定の内容に適合すると認めた場合、三郷市交通需要マネジメント実証実験事業費補助金確定通知書 ( 様式第7号 ) により通知するものとする。</p>

<p class="jorei-article">(補助金の請求) 第15条 補助事業者は、補助金の支払いを受けようとするときは、三郷市交通需要マネジメント実証実験事業費補助金請求書 ( 様式第8号 ) により行うものとする。</p>

<p class="jorei-article">(補助事業に関する書類の整備等) 第16条 補助事業者は、補助事業に係る書類、収入及び支出を明らかにした帳簿並びに当該収入及び支出についての証拠書類を整備し、これを事業完了の属する年度の翌年度から5年間保存しなければならない。</p>

</div>` },
    { id: 194, title: '三郷市公共下水道の構造等の技術上の基準に関する条例', category: '建設', keywords: ['下水道', '基準', '技術'], summary: '公共下水道の技術基準に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000706.html',
        fullText: `<div class="jorei-header">○三郷市税等口座振替事務取扱要綱<br>平成15年3月24日 告示第80号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、地方自治法施行令 (昭和22年政令第16号) 第155条の規定に基づき、市税等の納付手続を簡素化し、納期内納付及び自主納付の確立を図ることを目的とする。</p>

<p class="jorei-article">(対象税目等) 第2条 口座振替を行う税目等は、次に掲げるものとする。</p>

<p class="jorei-article">(対象者) 第3条 口座振替の方法によることができる者は、市税等の納入義務者で、指定金融機関及び収納代理金融機関 (以下「取扱金融機関」という。) のいずれかと口座振替の方法による納付について約定したものとする。</p>

<p class="jorei-article">(指定預金口座) 第4条 納入義務者が口座振替を指定することができる預金口座 (以下「指定預金口座」という。) は、本人名義の普通預金口座、当座預金口座又は納税準備預金口座とする。 ただし、本人名義以外の指定預金口座であっても当該預金口座の名義人が承諾したときは、納入義務者の指定預金口座とすることができる。</p>

<p class="jorei-article">(申込手続) 第5条 口座振替を希望する納入義務者は、取扱金融機関に三郷市税等口座振替依頼書・自動払込利用申込書 ( 様式第1号 。以下「申込書」という。) を提出しなければならない。</p>

<p class="jorei-article">(口座振替の開始) 第6条 口座振替の開始は、原則として、各納期限の50日前までに取扱金融機関へ提出された申込書については当該納期分から開始し、その後の日に提出された申込書については次に到来する納期分から開始するものとする。</p>

<p class="jorei-article">(振替日) 第7条 口座振替の振替日は、各税目等の納期限とし、納期限が過ぎたものについては取り扱わないものとする。</p>

<p class="jorei-article">(口座振替の取消し) 第8条 市は、口座振替による納付が長期間不能なものについては、口座振替を取り消すことができる。 当該期間については、各税目等により別に定めるものとする。 この場合、当該納入義務者には三郷市税等口座振替取消通知書 ( 様式第2号 ) を通知し、当該取扱金融機関には三郷市税等口座振替取消連絡書 ( 様式第3号 ) を送付するものとする。</p>

<p class="jorei-article">(変更又は廃止の手続き) 第9条 納入義務者が口座振替による納付を変更し、又は廃止するときは、申込書を当該取扱金融機関へ届け出なければならない。</p>

<p class="jorei-article">(継続期間) 第10条 口座振替は、次の事由により取りやめるまで、年度に限らず取扱を継続するものとする。</p>

<p class="jorei-article">(利用者負担) 第11条 利用者の口座振替に係る手数料は、無料とする。</p>

<p>(軽自動車税納税証明書(継続検査用)の送付) 第12条 軽自動車税については、口座振替後に、市から当該納入者に軽自動車税納税証明書 (継続検査用) ( 様式第4号 ) を送付するものとする。</p>

<p class="jorei-article">(口座振替不能分の取扱い) 第13条 市は、口座振替の不能が生じた場合は、口座振替不能通知書兼領収証書 ( 様式第5号 ) を当該納入義務者へ送付するものとする。</p>

<p class="jorei-article">(申込書の送付) 第14条 第5条 及び 第9条 の申込みを受けた取扱金融機関は、記載内容を確認し、申込書に受付年月日及び取扱金融機関の名称を記入のうえ、承認印を押し、速やかに申込書を市に送付しなければならない。</p>

<p class="jorei-article">(口座振替の方法) 第15条 口座振替は、市と市が委託する事業者 (以下「伝送処理委託業者」という。) を介して、取扱金融機関との間においてデータ伝送方式により行うものとする。</p>

<p class="jorei-article">(口座振替請求データの内容の変更) 第16条 伝送処理委託業者及び取扱金融機関は、口座振替請求データの内容を変更してはならない。 ただし、市から三郷市税等口座振替停止依頼書 ( 様式第6号 ) の送付があった場合は、この限りでない。</p>

<p class="jorei-article">(口座振替手数料) 第17条 取扱金融機関は、4月から翌年3月分までの口座振替取扱件数を集計し、翌年4月末までに口座振替手数料を市に請求するものとする。 ただし、ゆうちょ銀行にあっては、毎月15日までに前月分の口座振替取扱件数を集計して市に請求するものとする。</p>

<p class="jorei-article">(その他) 第18条 この要綱 に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 195, title: '三郷市下水道条例', category: '建設', keywords: ['下水道', '使用', '排水'], summary: '下水道の使用等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000708.html',
        fullText: `<div class="jorei-header">○教育委員会事務局職員の時差勤務に関する規則<br>平成15年3月18日 教委規則第1号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、職員の健康管理と時間外勤務の抑制に資するとともに、より一層効率的な行政運営を図るため、教育委員会事務局職員の時差勤務について 教育委員会事務局職員の勤務時間、休日及び休暇に関する規則 (平成2年教委規則第3号) の特例を定めるものとする。</p>

<p class="jorei-article">(対象職員) 第2条 時差勤務の対象とする職員 (以下「対象職員」という。) は、 次の各号 のいずれかに該当する職員以外の職員とする。</p>

<p class="jorei-article">(勤務時間等) 第3条 対象職員の勤務時間及び休憩時間は、 別表 に掲げるとおりとする。</p>

<p class="jorei-article">(その他) 第4条 この規則に定める事項以外の事項に関しては、 職員の時差勤務に関する規則 (平成15年規則第8号) の例による。</p>

</div>` },
    { id: 196, title: '三郷都市計画下水道事業受益者負担に関する条例', category: '建設', keywords: ['下水道', '受益者負担', '負担金'], summary: '下水道事業受益者負担に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000710.html',
        fullText: `<div class="jorei-header">○三郷市鳥獣の保護及び管理並びに狩猟の適正化に関する法律施行細則<br>平成15年3月31日 規則第25号</div>
<div class="jorei-body">
<p class="jorei-article">(鳥獣の捕獲等又は鳥類の卵の採取等の許可の申請) 第1条 鳥獣の保護及び管理並びに狩猟の適正化に関する法律施行規則 (平成14年環境省令第28号。以下「省令」という。) 第7条第1項の規定による鳥獣の捕獲等又は鳥類の卵の採取等 (以下「鳥獣捕獲等」という。) の申請は、三郷市鳥獣の捕獲等又は鳥類の卵の採取等許可申請書 ( 様式第1号 ) により行うものとする。</p>

<p class="jorei-article">(鳥獣捕獲等従事者証の交付の申請) 第2条 省令第7条第7項の規定による申請は、三郷市鳥獣捕獲等従事者証交付申請書 ( 様式第2号 ) により行うものとする。</p>

<p class="jorei-article">(鳥獣飼養登録票の交付及び有効期間更新の申請) 第3条 省令第20条第1項及び鳥獣の保護及び管理並びに狩猟の適正化に関する法律 (平成14年法律第88号) 第19条第5項の規定による申請は、三郷市鳥獣飼養登録票交付 (有効期間更新) 申請書 ( 様式第3号 ) により行うものとする。</p>

<p class="jorei-article">(飼養登録鳥獣の譲受けの届出) 第4条 省令第21条の規定による届出は、三郷市飼養登録鳥獣の譲受届出書 ( 様式第4号 ) により行うものとする。</p>

<p class="jorei-article">(ヤマドリ販売許可の申請) 第5条 省令第24条第1項の規定による申請は、三郷市ヤマドリ等の販売許可申請書 ( 様式第5号 ) により行うものとする。</p>

<p class="jorei-article">(鳥獣捕獲許可証等の再交付の申請) 第6条 省令第7条第10項、第20条第4項及び第24条第4項の規定による申請は、三郷市鳥獣捕獲証明書等再交付申請書 ( 様式第6号 ) により行うものとする。</p>

<p class="jorei-article">(鳥獣捕獲許可証等の交付を受けた者の住所等の変更の届出) 第7条 省令第7条第11項及び第12項、第20条第5項並びに第24条第5項による届出は、三郷市鳥獣捕獲許可証等に係る住所等変更届出書 ( 様式第7号 ) により行うものとする。</p>

<p class="jorei-article">(鳥獣捕獲許可証等の亡失の届出) 第8条 省令第7条第13項及び第14項、第20条第6項並びに第24条第6項の規定による届出は、三郷市鳥獣捕獲許可証等に係る亡失届出書 ( 様式第8号 ) により行うものとする。</p>

<p class="jorei-article">(提出部数) 第9条 この規則 に定める届出書等の提出部数は、正本1通とする。</p>

</div>` },
    { id: 197, title: '三郷市公共下水道使用料条例', category: '建設', keywords: ['下水道', '使用料', '料金'], summary: '公共下水道使用料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000712.html' },
    { id: 198, title: '三郷市地区計画区域内における建築物等の制限に関する条例', category: '建設', keywords: ['地区計画', '建築制限', 'まちづくり'], summary: '地区計画区域内の建築制限に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000722.html',
        fullText: `<div class="jorei-header">○三郷市消防法等施行細則<br>平成15年9月8日 規則第38号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 消防法 (昭和23年法律第186号。以下「法」という。) 及び消防法施行規則 (昭和36年自治省令第6号。以下「規則」という。) の施行に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(措置命令等を発した場合における公示の方法) 第2条 規則第1条に規定する市長が定める方法は、消防防災総合庁舎及び分署の掲示場への掲示並びに三郷市消防本部ホームページへの掲載とする。</p>

<p class="jorei-article">(防火対象物の点検基準) 第3条 規則第4条の2の6第1項第9号に規定する市長が定める基準は、次のとおりとする。</p>

<p class="jorei-article">(防火対象物点検票) 第4条 法第8条の2の2第1項の規定による報告は、規則第4条の2の4第3項に規定する報告書に、防火対象物点検票 ( 別記様式 ) を添付してしなければならない。</p>

<p class="jorei-article">(特例申請書に添付する書類の記載事項) 第5条 規則第4条の2の8第3項第2号の規定により市長が定める事項は、次のとおりとする。</p>

</div>` },
    { id: 199, title: '三郷市建築協定条例', category: '建設', keywords: ['建築協定', 'まちなみ', '住環境'], summary: '建築協定に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000724.html',
        fullText: `<div class="jorei-header">○三郷市立中学校の学校選択に関する規則<br>平成15年8月26日 教委規則第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市立小・中学校の学校指定に関する規則 (平成15年教委規則第3号) 第2条ただし書 に規定する学校選択について、必要な事項を定めるものとする。</p>

<p class="jorei-article">(対象者) 第2条 次の各号 に定める者の保護者は、この規則の定めるところにより入学し、又は転学する三郷市立中学校 (以下「学校」という。) の選択を希望すること (以下「学校選択」という。) ができる。</p>

<p class="jorei-article">(選択範囲) 第3条 前条第1号 に定める者の保護者は、市内のすべての学校から学校選択できることとする。</p>

<p class="jorei-article">(学校選択) 第4条 学校選択は、保護者が教育長の定める希望選択票を指定された期日までに三郷市教育委員会 (以下「教育委員会」という。) に提出することにより行うものとする。</p>

<p class="jorei-article">(学校の指定) 第5条 教育委員会は、 前条 による学校選択がなされた場合は、原則として保護者の選択した学校を就学すべき学校として指定するものとする。</p>

<p class="jorei-article">(抽選の実施) 第6条 教育委員会は、学校選択により就学予定者の全員を受け入れることが困難な学校においては、抽選により入学者を決定することができるものとする。</p>

<p class="jorei-article">(学校情報の提供) 第7条 教育委員会は、保護者の学校選択の参考に資するため、学校情報の提供に努めるものとする。</p>

<p class="jorei-article">(委任) 第8条 この規則に定めるもののほか、学校選択の実施について必要な事項は、教育長が定める。</p>

</div>` },
    { id: 200, title: '三郷市特別工業地区条例', category: '建設', keywords: ['工業地区', '用途地域', '建築'], summary: '特別工業地区に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000727.html',
        fullText: `<div class="jorei-header">○三郷市立小・中学校体育施設の開放に関する使用料条例<br>平成16年3月18日 条例第13号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この条例は、スポーツ基本法 (平成23年法律第78号) 第13条第1項の規定に基づき、三郷市立小・中学校体育施設の開放に関する使用料について必要な事項を定めるものとする。</p>

<p class="jorei-article">(定義) 第2条 この条例において「学校体育施設」とは、屋内運動場又は屋外運動場をいう。</p>

<p class="jorei-article">(使用料の納付) 第3条 学校体育施設又は冷暖房設備の使用許可を受けた者は、 次の表 に定める使用料を納付しなければならない。</p>

<p class="jorei-article">(使用料の減免) 第4条 市長は、 次の各号 のいずれかに該当する場合は、学校体育施設の使用料を減額し、又は免除することができる。</p>

<p class="jorei-article">(使用料の還付) 第5条 既納の使用料は、還付しない。 ただし、 次の各号 のいずれかに該当する場合は、その使用料の全部又は一部を還付することができる。</p>

<p class="jorei-article">(委任) 第6条 この条例に定めるもののほか、必要な事項は、規則で定める。</p>

</div>` },
    { id: 201, title: '三郷市建築基準法の規定に基づく建築物の建築等に係る確認申請手数料等の徴収に関する条例', category: '建設', keywords: ['建築確認', '手数料', '建築基準法'], summary: '建築確認申請手数料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000731.html',
        fullText: `<div class="jorei-header">○三郷市プロジェクトチームの設置基準等に関する規程<br>平成16年3月31日 訓令第10号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この訓令 は、 三郷市事務分掌規則 (平成3年規則第3号) 第4条の2 に規定するプロジェクトチームの設置に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(設置の基準) 第2条 プロジェクトチームは、臨時又は特別な事務のうち、次のいずれかに該当する事務を処理させる場合に設置するものとする。</p>

<p class="jorei-article">(設置の手続き) 第3条 新たにプロジェクトチームを設置しようとするときは、その事務にもっとも密接な関連を有する事務を所掌する部の長は、プロジェクトチーム設置申請書 ( 別記様式 ) を政策会議に提出するものとする。</p>

<p class="jorei-article">(設置規程の制定) 第4条 プロジェクトチームの設置は、訓令により定めるものとする。</p>

<p class="jorei-article">(職及び職務) 第5条 プロジェクトチームに 次の表 の左欄に掲げる職を置くものとし、その職務は、それぞれ 同表 の右欄に掲げるとおりとする。</p>

</div>` },
    { id: 202, title: '三郷市市営住宅設置及び管理条例', category: '建設', keywords: ['市営住宅', '公営住宅', '住宅'], summary: '市営住宅の設置・管理に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000737.html',
        fullText: `<div class="jorei-header">○埼玉県東南部地域公共施設予約案内システムの利用者登録等に関する規則<br>平成16年5月31日 規則第38号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この規則は、三郷市、草加市、越谷市、八潮市、吉川市及び松伏町の地域 (以下「埼玉県東南部地域」という。) の公共施設予約案内システムの利用者登録等に関して必要な事項を定めることにより、施設の利用に係る手続を円滑にし、もって市民の福祉の向上に資することを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この規則において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(利用者登録の対象者) 第3条 次の各号 のいずれにも該当するものは、公共施設予約案内システムの利用者登録をすることができる。</p>

<p class="jorei-article">(利用者登録の申請) 第4条 利用者登録をしようとするもの (以下「登録申請者」という。) は、あらかじめ、次の事項を記載した埼玉県東南部地域公共施設予約案内システム利用者登録 (変更・廃止) 申請書兼口座振替 (自動払込利用申込) 依頼書・口座振替 (自動払込利用) 廃止届出書 ( 様式第1号 ) を市長に提出し、登録を受けなければならない。</p>

<p class="jorei-article">(登録申請者の確認) 第5条 市長は、 前条 の規定による利用者登録の申請があったときは、登録申請者が本人であることを 次の各号 に掲げるいずれかの書類で確認するものとする。</p>

<p class="jorei-article">(利用者の登録) 第6条 市長は、 前条 の規定により本人であることを確認したときは、当該登録申請者に係る 第4条 に掲げる事項の他、次に掲げる事項を電磁的記録に登録するものとする。</p>

<p class="jorei-article">(登録カードの交付) 第7条 市長は、 前条 の規定により登録をした者 (以下「登録者」という。) に対し、埼玉県東南部地域公共施設予約案内システム利用者登録カード (以下「登録カード」という。) ( 様式第2号 ) を交付するものとする。</p>

<p class="jorei-article">(利用者登録の有効期間) 第8条 利用者登録の有効期間は、電磁的記録に登録した日から2年間とする。</p>

<p class="jorei-article">(利用者登録の更新) 第9条 前条 の有効期間の満了後引き続き公共施設予約案内システムを利用しようとする者は、その期間満了の日の2月前からその期間満了の日までに埼玉県東南部地域公共施設予約案内システム利用者登録更新申請書 ( 様式第3号 ) に利用者登録カードを添えて市長に提出し、更新の登録を受けなければならない。</p>

<p class="jorei-article">(暗証番号の管理) 第10条 登録者は、登録カードの暗証番号を他人に漏らしてはならない。</p>

<p class="jorei-article">(登録事項変更等の届出) 第11条 登録者は、 第4条 に規定する申請事項を変更したとき、又は登録を廃止しようとするときは、速やかに埼玉県東南部地域公共施設予約案内システム利用者登録 (変更・廃止) 申請書兼口座振替 (自動払込利用申込) 依頼書・口座振替 (自動払込利用) 廃止届出書に登録カードを添えて市長に提出しなければならない。</p>

<p class="jorei-article">(譲渡等の禁止) 第12条 登録者は、登録カードを他人に譲渡し、又は貸与してはならない。</p>

<p class="jorei-article">(登録カードの再交付) 第13条 登録者は、登録カードを著しくき損し、若しくは汚損し、又は紛失したときは、埼玉県東南部地域公共施設予約案内システム利用者登録カード再発行申請書 ( 様式第4号 ) に登録カードを添えて (紛失した場合は除く。) 市長に提出し、その再交付を受けることができる。</p>

<p class="jorei-article">(利用者登録の抹消) 第14条 市長は、登録者が次のいずれかに該当するときは、その登録を抹消するものとする。</p>

<p class="jorei-article">(口座振替) 第15条 登録者は、公共施設の使用料を口座振替の方法により納入しなければならない。 ただし、市長が特別な理由があると認めた場合は、窓口で直接納付することができる。</p>

<p class="jorei-article">(利用の制限) 第16条 市長は、登録者が使用料を納付しないときは、公共施設予約案内システムの利用を中止することができる。</p>

<p class="jorei-article">(その他の利用規定) 第17条 この規則に定めるもののほか、各公共施設の利用に関しては、当該公共施設の設置及び管理条例施行規則に定めるところによる。</p>

<p class="jorei-article">(雑則) 第18条 その他必要な事項は、市長が別に定める。</p>

</div>` },

    // ===== 第11編 水道 =====
    { id: 203, title: '三郷市水道事業の設置等に関する条例', category: '水道', keywords: ['水道', '事業', '設置'], summary: '水道事業の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000740.html' },
    { id: 204, title: '三郷市企業職員の給与の種類及び基準に関する条例', category: '水道', keywords: ['企業職員', '給与', '水道'], summary: '企業職員の給与に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000749.html',
        fullText: `<div class="jorei-header">○三郷市鷹野文化センター設置及び管理条例施行規則<br>平成16年7月14日 規則第48号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、 三郷市鷹野文化センター設置及び管理条例 (平成7年条例第15号。以下「条例」という。) の施行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(施設の利用) 第2条 使用料を徴収する施設の利用については、抽選によりその利用を許可するものとする。 ただし、市長が認めた場合はこの限りでない。</p>

<p class="jorei-article">(抽選) 第3条 前条第1項 の抽選の申込みは、 次の表 に定める期間内に受け付けするものとする。</p>

<p class="jorei-article">(利用許可の申請) 第4条 条例第7条第1項 の規定に基づき、三郷市鷹野文化センター (以下「文化センター」という。) の利用許可を受けようとする者 (以下「申請者」という。) は、利用 (使用) 許可申請書 ( 様式第1号 。以下「申請書」という。) を市長に提出しなければならない。</p>

<p class="jorei-article">(利用許可書の交付) 第5条 市長は、 前条第1項 の申請を受理し、利用を認めたときは、利用許可・承認書 ( 様式第2号 。以下「許可書」という。) を申請者に交付する。</p>

<p class="jorei-article">(附属設備の使用料) 第6条 条例第10条第2項 に規定する附属設備の使用料は、 別表第1 及び 別表第2 に定めるとおりとする。</p>

<p class="jorei-article">(使用料の納付時期) 第7条 第5条第1項 の規定による利用許可を受けた者は、 条例第10条第1項 に規定する使用料を許可書の交付を受ける際に納付しなければならない。</p>

<p class="jorei-article">(許可書等の提示) 第8条 利用者は、文化センターを利用するときは、 第5条 に規定する許可書又は埼玉県東南部地域公共施設予約案内システム利用者登録カードを文化センターの職員に提示しなければならない。</p>

<p class="jorei-article">(許可事項の変更申請等) 第9条 利用者は、 条例第7条第1項後段 の規定により利用許可に係る事項を変更しようとするときは、 同項前段 の規定により許可を受けた利用日から 次の表 に定める期日までに、利用 (使用) 許可変更申請書 ( 様式第3号 。以下「変更申請書」という。) を市長に提出しなければならない。</p>

<p class="jorei-article">(利用の取消し申請等) 第10条 利用者は、 条例第12条第1項第2号 の規定により利用許可の取消しをしようとするときは、利用日の当日までに、利用 (使用) 許可取消申請書 ( 様式第5号 。以下「取消申請書」という。) を市長に提出しなければならない。</p>

<p class="jorei-article">(使用料の還付等) 第11条 条例第12条第1項ただし書 に規定する使用料の還付は、次に定めるところによる。</p>

<p class="jorei-article">(利用許可の取消し等の通知) 第12条 条例第15条第1項 の規定により、利用を取消し、又は利用を停止し、若しくは制限する場合は、その理由を付して利用 (使用) 許可取消通知書 ( 様式第8号 ) により利用者に通知するものとする。</p>

<p class="jorei-article">(利用等の打合わせ) 第13条 ホールの利用者は、利用日の5日前までに文化センターの職員と利用方法等必要な事項について打ち合わせをするとともに、次の書類を届け出なければならない。</p>

<p class="jorei-article">(利用者の遵守事項) 第14条 利用者は、文化センターの施設等を利用するときは、文化センターの職員の指示に従い、特に次に掲げる事項を守らなければならない。</p>

<p class="jorei-article">(職員の立入り) 第15条 市長は、文化センターの管理上必要があると認めるときは、文化センターの職員を現に利用している施設に立ち入らせることができる。 この場合において、利用者は、立入りを拒むことができない。</p>

<p class="jorei-article">(予約案内システムの利用者登録) 第16条 予約案内システムにおける利用者登録等については、 利用者登録等に関する規則 に定めるところによる。</p>

<p class="jorei-article">(読替規定) 第17条 条例第18条第1項 に規定する指定管理者 (以下「指定管理者」という。) に文化センターの管理に関する業務を行わせる場合における 第4条 、 第5条 、 第9条 、 第10条 及び 第15条 の規定の適用については、これらの規定中「市長」とあるのは「指定管理者」とする。</p>

<p class="jorei-article">(指定管理者の指定の申請) 第18条 条例第19条第1項 の規定による申請は、市長が指定する期限までに三郷市指定管理者指定申請書 ( 様式第9号 ) に次に掲げる書類を添えて、市長に提出することにより行わなければならない。</p>

<p class="jorei-article">(雑則) 第19条 この規則に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 205, title: '三郷市水道事業給水条例', category: '水道', keywords: ['給水', '水道', '使用'], summary: '水道の給水に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000762.html',
        fullText: `<div class="jorei-header">○三郷市消防団員被服等貸与規程<br>平成16年10月21日 消本訓令第4号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規程 は、 三郷市消防団員被服等貸与規則 (昭和56年規則第10号) 第2条第2項 の規定に基づき、消防団員の被服等の貸与に関して、必要な事項を定めるものとする。</p>

<p class="jorei-article">(貸与品の員数及び貸与期間) 第2条 貸与品の員数及び貸与期間は、 別表 のとおりとする。 ただし、消防長は、やむを得ない理由があると認めるときは、員数を増減し、又は貸与期間を伸縮することができる。</p>

</div>` },
    { id: 206, title: '三郷市水道事業の布設工事監督者及び水道技術管理者に関する条例', category: '水道', keywords: ['水道', '監督者', '技術管理'], summary: '水道の布設工事監督者等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000767.html',
        fullText: `<div class="jorei-header">○三郷市人事行政の運営等の状況の公表に関する条例施行規則<br>平成17年3月30日 規則第27号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則 は、 三郷市人事行政の運営等の状況の公表に関する条例 (平成17年条例第1号。以下「条例」という。) の施行について必要な事項を定めるものとする。</p>

<p class="jorei-article">(文書様式) 第2条 条例第5条 の規定により公平委員会が市長に対し報告する 様式 は、次に定めるところによる。</p>

<p class="jorei-article">(閲覧所等) 第3条 条例第7条第2号 の閲覧所は、市政情報コーナーとする。</p>

</div>` },

    // ===== 第12編 消防 =====
    { id: 207, title: '三郷市消防本部及び消防署の設置に関する条例', category: '消防', keywords: ['消防', '消防署', '設置'], summary: '消防本部・消防署の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000769.html' },
    { id: 208, title: '三郷市消防長に対する事務委任に関する規則', category: '消防', keywords: ['消防長', '事務委任', '消防'], summary: '消防長への事務委任に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000775.html',
        fullText: `<div class="jorei-header">○三郷市公有地等有効活用検討委員会規程<br>平成17年1月12日 訓令第2号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 市が所有する土地 (以下「公有地」という。) 等について、有効活用及び適正な処分を図るため、三郷市公有地等有効活用検討委員会 (以下「委員会」という。) を設置する。</p>

<p class="jorei-article">(所掌事項) 第2条 委員会は、市長が指定した公有地等の有効活用及び適正な処分 (以下「有効活用」という。) について検討するものとする。</p>

<p class="jorei-article">(組織) 第3条 委員会は、次に掲げる職にある者をもって組織する。</p>

<p class="jorei-article">(委員長及び副委員長) 第4条 委員会に、委員長及び副委員長1人を置き、委員長は 三郷市副市長事務分担規程 (平成27年訓令第12号) 第2条第1号 に規定する副市長とし、副委員長は、 同条第2号 に規定する副市長とする。</p>

<p class="jorei-article">(会議) 第5条 委員長は、委員会を招集し、会議の議長となる。</p>

<p class="jorei-article">(庶務) 第6条 委員会の庶務は、企画政策部企画政策課において処理する。</p>

<p class="jorei-article">(委任) 第7条 この訓令に定めるもののほか、委員会の運営に関し必要な事項は、委員長が定める。</p>

</div>` },
    { id: 209, title: '三郷市消防長及び消防署長の資格を定める条例', category: '消防', keywords: ['消防長', '消防署長', '資格'], summary: '消防長等の資格に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000776.html' },
    { id: 210, title: '三郷市消防職員の特殊勤務手当に関する条例', category: '消防', keywords: ['消防職員', '特殊勤務', '手当'], summary: '消防職員の特殊勤務手当に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000790.html',
        fullText: `<div class="jorei-header">○三郷市認可外保育施設指導監督規則<br>平成18年3月30日 規則第19号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、児童福祉法 (昭和22年法律第164号。以下「法」という。) 第59条から第59条の2の6までに基づく認可外保育施設に対する指導監督の実施に関し、必要な事項を定めるものとする。</p>

<p class="jorei-article">(定義) 第2条 この規則において「認可外保育施設」とは、法第6条の3第9項から第12項までに規定する業務を目的とする施設又は法第39条第1項若しくは法第39条の2第1項に規定する施設であって、法第34条の15第2項若しくは法第35条第4項の認可又は就学前の子どもに関する教育、保育等の総合的な提供の推進に関する法律 (平成18年法律第77号) 第17条第1項の認可を受けていないものをいう。</p>

<p class="jorei-article">(認可外保育施設の設置届出等) 第3条 新たに法第6条の3第11項に規定する業務を目的とする施設を除く認可外保育施設を設置した者にあっては、認可外保育施設設置届 (施設型) ( 様式第1号 ) を、同項に規定する業務を目的とする認可外保育施設を設置した者にあっては、認可外保育施設設置届 (訪問型) ( 様式第1号の2 ) を市長に提出するものとする。</p>

<p class="jorei-article">(報告徴収) 第4条 市長は、認可外保育施設の設置者又は管理者に対し、原則として年1回以上、法第6条の3第11項に規定する業務を目的とする施設を除く認可外保育施設にあっては、認可外保育施設の運営状況について (施設型) (照会) ( 様式第4号 ) により、同項に規定する業務を目的とする認可外保育施設にあっては、認可外保育施設の運営状況について (訪問型) (照会) ( 様式第4号の2 ) により当該施設の運営状況その他の必要と認める事項の報告を求めるものとする。 ただし、必要と認められる場合は、この 様式 によらないで報告を求めることができるものとする。</p>

<p class="jorei-article">(立入調査) 第5条 市長は、1日に保育する児童の数が6人以上の認可外保育施設に対し、原則として年1回以上、市長が指定する職員 (以下「指定職員」という。) に立入調査を行わせるものとする。</p>

<p class="jorei-article">(改善指導) 第6条 市長は、立入調査の結果、認可外保育施設指導監督基準 (認可外保育施設に対する指導監督の実施について (平成13年3月29日付け雇児発第177号厚生労働省雇用均等・児童家庭局長通知) における別紙。以下「指導監督基準」という。) に照らして改善を求める必要があると認めるときは、認可外保育施設に対し、認可外保育施設の立入調査結果について (通知) ( 様式第7号 ) により改善指導を行うものとする。</p>

<p class="jorei-article">(証明書の交付) 第7条 市長は、指導監督基準を満たしていると認める認可外保育施設に対し、認可外保育施設指導監督基準を満たす旨の証明書 ( 様式第8号 ) を交付するとともに、証明書を交付した事実について、公表するものとする。</p>

<p class="jorei-article">(改善勧告) 第8条 市長は、 第6条 の規定による改善指導を繰り返し行っているにもかかわらず改善されないとき若しくは改善の見通しがたたないとき、又は著しく利用児童の安全性に問題があるときその他児童の福祉のため市長が特に必要と認めるときは、認可外保育施設に対し、改善勧告 ( 様式第9号 ) により通知するものとする。 この場合において、改善指導を経ずに改善勧告を行う場合の取扱基準については、別に定める。</p>

<p class="jorei-article">(周知及び公表) 第9条 市長は、 前条 の規定による改善勧告を行ったにもかかわらず改善が行われないときは、次に掲げる措置を行うことができる。 この場合において、公表を行う場合の取扱基準については、別に定めるものとする。</p>

<p class="jorei-article">(事業停止命令又は施設閉鎖命令) 第10条 市長は、 第8条 の規定による改善勧告を行ったにもかかわらず改善が行われず、かつ、改善の見通しがなく児童福祉に著しく有害であると認められるとき又は改善指導及び改善勧告を行う時間的余裕がなく放置することが児童福祉に著しく有害であると認められるときは、事業停止命令又は施設閉鎖命令に係る弁明の機会の付与について (通知) ( 様式第12号 ) により弁明の機会の通知を行うとともに、三郷市保育審議会の意見を聴き、事業停止命令又は施設閉鎖命令 ( 様式第13号 ) により、事業停止又は施設閉鎖を命ずることができる。 この場合において、事業停止又は施設の閉鎖命令を行う場合の取扱基準については、別に定めるものとする。</p>

<p class="jorei-article">(公表) 第11条 市長は、 前条 の規定による事業停止又は施設閉鎖を命じたときは、公表を行うものとする。</p>

<p class="jorei-article">(情報提供) 第12条 市長は、認可外保育施設についての情報提供を行うものとする。</p>

<p class="jorei-article">(その他) 第13条 この規則に定めるもののほか、必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 211, title: '三郷市消防賞じゅつ金及び殉職者特別賞じゅつ金条例', category: '消防', keywords: ['消防', '賞じゅつ金', '殉職'], summary: '消防賞じゅつ金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000791.html',
        fullText: `<div class="jorei-header">○三郷市指定地域密着型サービス事業所及び指定地域密着型介護予防サービス事業所の指定等に関する規則<br>平成18年3月31日 規則第24号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この規則は、介護保険法 (平成9年法律第123号。以下「法」という。) 及び介護保険法施行規則 (平成11年厚生省令第36号。以下「施行規則」という。) に定めるもののほか、指定地域密着型サービス事業所及び指定地域密着型介護予防サービス事業所の指定等に関し必要な事項を定めるものとする。</p>

<p class="jorei-article">(指定及び更新の申請) 第2条 法第78条の2第1項及び第115条の12第1項による指定の申請は介護保険法施行規則の規定に基づき厚生労働大臣が定める 様式 (令和5年厚生労働省告示第331号。以下「様式告示」という。) 別紙様式第2号 (1) により、法第78条の12及び第115条の21において準用する 第70条の2第2項 による更新の申請は 様式 告示別紙様式第2号 (2) により行うものとする。</p>

<p class="jorei-article">(変更の届出等) 第3条 法第78条の5第1項及び第115条の15第1項の規定による届出は、施行規則第131条の13第1項及び第140条の30第1項に揚げる事項の変更に係るものにあっては 様式 告示別紙様式第2号 (4) により、休止した事業の再開に係るものにあっては 様式 告示別紙様式第2号 (5) により、それぞれ行うものとする。</p>

<p class="jorei-article">(指定の辞退) 第4条 法第78条の8の規定による指定の辞退は、 様式 告示別紙様式第2号 (6) により行うものとする。</p>

<p class="jorei-article">(事業所情報の提供) 第5条 市長は、 前3条 の規定による指定又は届出の受理 (以下この条において「指定等」という。) をしたときには、都道府県、国民健康保険団体連合会その他の機関に対して、当該指定等に係る事業所に関する情報のうち、次に掲げる事項を提供することができる。</p>

<p class="jorei-article">(公示) 第6条 法第78条の12及び第115条の20の規定による公示は、法第78条の12各号及び第115条の20各号の措置に係る事業所に関する次に掲げる事項について行うものとする。</p>

<p class="jorei-article">(その他) 第7条 この規則に定めるもののほか、指定地域密着型サービス事業所及び指定地域密着型介護予防サービス事業所の指定等に関し必要な事項は、市長が別に定める。</p>

</div>` },
    { id: 212, title: '三郷市消防事務に係る手数料徴収条例', category: '消防', keywords: ['消防', '手数料', '許可'], summary: '消防事務の手数料に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000801.html',
        fullText: `<div class="jorei-header">○三郷市障害支援区分審査会の委員の定数等を定める条例<br>平成18年6月19日 条例第20号</div>
<div class="jorei-body">
<p class="jorei-article">(審査会の委員の定数) 第1条 障害者の日常生活及び社会生活を総合的に支援するための法律 (平成17年法律第123号) 第15条の規定に基づき設置する三郷市障害支援区分審査会 (以下「審査会」という。) の委員の定数は、10人とする。</p>

<p class="jorei-article">(委任) 第2条 法令及び この条例 に定めるもののほか、審査会に関し必要な事項は、規則で定める。</p>

</div>` },
    { id: 213, title: '三郷市火災予防条例', category: '消防', keywords: ['火災', '予防', '防火'], summary: '火災予防に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000803.html',
        fullText: `<div class="jorei-header">○三郷市障がい者計画・障がい福祉計画等検討委員会設置規程<br>平成18年5月22日 訓令第11号</div>
<div class="jorei-body">
<p class="jorei-article">(設置) 第1条 障害者基本法 (昭和45年法律第84号) 第11条第3項の規定に基づく障害者計画、障害者の日常生活及び社会生活を総合的に支援するための法律 (平成17年法律第123号) 第88条に基づく障害福祉計画及び児童福祉法 (昭和22年法律第164号) 第33条の20に基づく障害児福祉計画 (以下「計画」という。) を策定し、障がい者施策の総合的及び計画的な推進を図るため、三郷市障がい者計画・障がい福祉計画等検討委員会 (以下「委員会」という。) を置く。</p>

<p class="jorei-article">(所掌事項) 第2条 委員会は、次に掲げる事項について、協議検討する。</p>

<p class="jorei-article">(組織) 第3条 委員会は、次に掲げる者をもって組織する。</p>

<p class="jorei-article">(委員長及び副委員長) 第4条 委員会に、委員長及び副委員長1人を置く。</p>

<p class="jorei-article">(会議等) 第5条 委員長は、会議を招集し、会議の議長となる。</p>

<p class="jorei-article">(部会) 第6条 委員会は、 第2条 の所掌事項に関する専門的事項を調査及び研究するため、三郷市障がい者計画・障がい福祉計画等作業部会 (以下「部会」という。) を置くことができる。</p>

<p class="jorei-article">(任期) 第7条 委員会の委員の任期は、計画の計画期間の満了する日までとする。</p>

<p class="jorei-article">(庶務) 第8条 委員会の庶務は、福祉部障がい福祉課において処理する。</p>

<p class="jorei-article">(その他) 第9条 この規程に定めるもののほか、委員会の運営に関し必要な事項は、委員長が委員会に諮って定める。</p>

</div>` },
    { id: 214, title: '三郷市消防団の設置等に関する条例', category: '消防', keywords: ['消防団', '設置', '消防'], summary: '消防団の設置に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000817.html',
        fullText: `<div class="jorei-header">○三郷市地域活動支援センター事業実施要綱<br>平成18年11月13日 告示第494号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、地域活動支援センターに障がい者及び障がい児 (以下「障がい者等」という。) を通わせ、創作的活動又は生産活動の機会の提供、社会との交流の促進等の便宜を供与する事業を行うことにより、障がい者等の地域生活支援の促進を図ることを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この要綱 において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(設置者及び運営主体) 第3条 地域活動支援センターの設置者及び運営主体は、知事に第二種社会福祉事業の届出を行っている市又は法人格を有する者とする。</p>

<p class="jorei-article">(地域活動支援センター設置等の申請) 第4条 法人格を有する者で、地域活動支援センターの設置を希望する者は、三郷市地域活動支援センター設置承認申請書 ( 様式第1号 ) により市長の承認を受けなければならない。</p>

<p class="jorei-article">(利用者) 第5条 地域活動支援センターを利用することのできる者は、市内に居住する15歳以上の者で、次に掲げるいずれかの者とする。 ただし、感染性疾患等を有し、事業の実施に支障を来すおそれのある者は、除くものとする。</p>

<p class="jorei-article">(利用手続等) 第6条 市内に居住する者が地域活動支援センターを利用するときは、三郷市地域活動支援センター利用申請書 ( 様式第4号 ) により市長に申請しなければならない。</p>

<p class="jorei-article">(利用の中止又は一時停止) 第7条 市長は、地域活動支援センターを利用している者 (以下「利用者」という。) が 次の各号 のいずれかに該当すると認めたときは、その者の利用を中止し、又は一時停止させることができる。</p>

<p class="jorei-article">(利用者の負担) 第8条 地域活動支援センターの利用は、 別表 に定めるⅠ型及びⅢ型の事業については、実費負担すべき費用を除き、無料とする。</p>

<p class="jorei-article">(経費の補助) 第9条 市長は、 第3条 に規定する法人格を有する者が設置及び運営する地域活動支援センターの運営費等に要する経費を補助することができる。</p>

<p class="jorei-article">(その他) 第10条 この要綱 に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 215, title: '三郷市消防団員の定員、任免、給与、服務等に関する条例', category: '消防', keywords: ['消防団員', '定員', '給与'], summary: '消防団員の身分等に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000820.html',
        fullText: `<div class="jorei-header">○三郷市障害者移動支援事業補助金交付要綱<br>平成18年12月26日 告示第542号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱 は、 三郷市障害者移動支援事業実施要綱 (平成18年告示第541号。以下「実施要綱」という。) 第13条 の規定に基づき、移動支援事業を実施する団体に対し補助金を交付することについて、必要な事項を定めるものとする。</p>

<p class="jorei-article">(補助対象経費) 第2条 補助金の交付の対象となる経費は、 実施要綱第4条第2項 の規定による登録決定を受けた団体が、 実施要綱第2条 に規定する移動支援事業 (以下「事業」という。) を実施するために要する経費とする。</p>

<p class="jorei-article">(補助金の額) 第3条 補助金の額は、前項の経費のうち、 実施要綱別表 に掲げる基準単価の額から 実施要綱第12条 に規定する利用料を控除した額とする。</p>

<p class="jorei-article">(交付申請等) 第4条 規則第4条第1項 の申請書の様式は、三郷市障害者移動支援事業補助金交付申請書 ( 様式第1号 ) のとおりとする。</p>

<p class="jorei-article">(交付決定通知) 第5条 規則第7条 の交付決定通知書の様式は、三郷市障害者移動支援事業補助金交付決定通知書 ( 様式第3号 ) のとおりとする。</p>

<p class="jorei-article">(補助金の請求) 第6条 補助金の交付決定を受けた団体 (以下「補助団体」という。) は、三郷市障害者移動支援事業補助金交付請求書 ( 様式第4号 ) を、市長に提出しなければならない。</p>

<p class="jorei-article">(状況報告) 第7条 補助団体は、市長の要求があったときは、補助金の交付決定を受けた事業 (以下「補助金交付事業」という。) の遂行状況について、書面で市長に報告しなければならない。</p>

<p class="jorei-article">(実績報告及び額の確定通知) 第8条 規則第13条 の規定による実績報告及び 規則第14条 の規定による交付すべき補助金の額の確定通知は、これを要しないものとする。</p>

<p class="jorei-article">(補助金の返還) 第9条 市長は、補助団体が 次の各号 のいずれかに該当するときは、交付した補助金の全部又は一部を返還させることができる。</p>

<p class="jorei-article">(書類の保管義務) 第10条 補助団体は、補助金交付事業に係る収入及び支出を明らかにした帳簿を備え、かつ、当該収入及び支出に関する書類を整備保管しておかなければならない。</p>

<p class="jorei-article">(その他) 第11条 この要綱 に定めるもののほか、必要な事項は、別に定める。</p>

</div>` },
    { id: 216, title: '三郷市非常勤消防団員に係る退職報償金の支給に関する条例', category: '消防', keywords: ['消防団員', '退職報償金', '非常勤'], summary: '消防団員の退職報償金に関する条例。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000827.html' },
    { id: 217, title: '三郷市消防委員会規則', category: '消防', keywords: ['消防', '委員会', '審議'], summary: '消防委員会に関する規則。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000829.html',
        fullText: `<div class="jorei-header">○三郷市職員等の公益通報の取扱いに関する規程<br>平成19年3月5日 訓令第7号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この訓令は、公益通報者保護法 (平成16年法律第122号。以下「法」という。) に基づき、職員等からの公益通報の取扱いについて必要な事項を定めるものとする。</p>

<p class="jorei-article">(定義) 第2条 この訓令において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(公益通報窓口の設置) 第3条 公益通報の窓口 (以下「公益通報窓口」という。) を総務部人事課に置くものとする。</p>

<p class="jorei-article">(委員会の設置) 第4条 市長は、公益通報を処理するため、公益通報対応委員会 (以下「委員会」という。) を置く。</p>

<p class="jorei-article">(公益通報者) 第5条 職員等は、公益通報をするときは、公益通報通知書 ( 様式第1号 ) に必要な資料を添えて、公益通報窓口に提出するものとする。</p>

<p class="jorei-article">(通報の送付) 第6条 人事課長は、 前条第1項 の規定により通知を受けたときは、速やかに、委員会に送付するものとする。</p>

<p class="jorei-article">(委員会の職務) 第7条 委員会は、 前条 の規定により送付を受けたときは、その受理又は不受理について決定し、公益通報受理 (不受理) 通知書 ( 様式第2号 ) により公益通報者に通知するものとする。 ただし、不受理の場合については、その理由を付記するものとする。</p>

<p class="jorei-article">(委員会の庶務) 第8条 委員会の庶務は、総務部人事課において処理する。</p>

<p class="jorei-article">(措置等) 第9条 市長は、 第7条第3項 の規定により委員会の報告を受けたときは、当該公益通報に係る通報対象事実の中止、法令等に基づく措置、再発防止のために必要と認められる措置その他是正のために必要な措置をとるものとする。</p>

<p class="jorei-article">(雑則) 第10条 この訓令に規定するもののほか、必要な事項は、別に定める。</p>

</div>` },

    // ===== 第13編 その他 =====
    { id: 218, title: '埼玉県市町村総合事務組合規約', category: 'その他', keywords: ['事務組合', '広域', '連携'], summary: '埼玉県市町村総合事務組合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000831.html',
        fullText: `<div class="jorei-header">○三郷市企業職員の平成１９年度における勤勉手当の特例に関する規程<br>平成19年3月30日 訓令第36号</div>
<div class="jorei-body">
<p class="jorei-article">(再任用職員以外の職員の勤勉手当に関する特例) 第1条 三郷市企業職員の給与に関する規程 (昭和50年訓令第10号) 第43条第5項第1号の規定にかかわらず、平成19年度における再任用職員以外の職員の勤勉手当の額の総額は、同号中「100分の72.5」を「100分の52.5」とする。</p>

<p class="jorei-article">(再任用職員の勤勉手当に関する特例) 第2条 三郷市企業職員の給与に関する規程第43条第5項第2号の規定にかかわらず、平成19年度における再任用職員の勤勉手当の額の総額は、同号中「100分の35」を「100分の25」に、「100分の40」を「100分の30」とする。</p>

</div>` },
    { id: 219, title: '江戸川水防事務組合規約', category: 'その他', keywords: ['水防', '事務組合', '江戸川'], summary: '江戸川水防事務組合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000832.html' },
    { id: 220, title: '東埼玉資源環境組合規約', category: 'その他', keywords: ['資源環境', '事務組合', 'ごみ処理'], summary: '東埼玉資源環境組合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000833.html',
        fullText: `<div class="jorei-header">○三郷市の特殊標章及び身分証明書に関する交付要綱<br>平成19年1月17日 告示第24号</div>
<div class="jorei-body">
<p class="jorei-article">(趣旨) 第1条 この要綱は、武力攻撃事態等における国民の保護のための措置に関する法律 (平成16年法律第112号。以下「国民保護法」という。) 及び「赤十字標章等及び特殊標章等に係る事務の運用に関するガイドライン」 (平成17年8月2日閣副安危第321号内閣官房副長官補 (安全保障・危機管理担当) 付内閣参事官 (事態法制企画担当) 通知) に基づき、武力攻撃事態等における特殊標章等 (国民保護法第158条第1項の特殊標章及び身分証明書をいう。以下同じ。) の交付に関する基準、手続等必要な事項を定めるものとする。</p>

<p class="jorei-article">(定義及び様式) 第2条 この要綱において「特殊標章」とは、 別表 で定める腕章、帽章、旗及び車両章とする。</p>

<p class="jorei-article">(交付の対象者) 第3条 市長は、武力攻撃事態等において、国民保護法第16条の規定に基づき、市長が実施する国民の保護のための措置 (以下「国民保護措置」という。) に係る職務等を行う者として、次に定める区分の者に対し、特殊標章等の交付を行うものとする。</p>

<p class="jorei-article">(交付の手続) 第4条 市長は、 前条第1号 及び 第2号 に掲げる者に対し、特殊標章等の交付をした者に関する台帳 ( 様式第2号 ) に登録し、特殊標章等を作成し交付する。</p>

<p class="jorei-article">(腕章及び帽章の交付) 第5条 市長は、 第3条第1号 又は 第2号 に掲げる者のうち武力攻撃事態等において行うこととされる国民保護措置に係る職務の内容等を勘案し、市長が必要と認めるものに対し、平時において、 第2条第1項 で規定する腕章及び帽章 (以下「腕章等」という。) を交付するものとする。</p>

<p class="jorei-article">(旗及び車両章の交付) 第6条 市長は、 前条 の規定に基づき、腕章等を交付する場合において、必要に応じ、国民保護措置に係る職務、業務又は協力のために使用される場所若しくは車両、船舶、航空機等 (以下「場所等」という。) を識別させるため、場所等ごとに 第2条第1項 で規定する旗又は車両章 (以下「旗等」という。) をあわせて交付するものとする。</p>

<p class="jorei-article">(訓練における使用) 第7条 市長は、平時において、国民保護措置についての訓練を実施する場合に、 第3条各号 に掲げる者に対し、腕章等を貸与することができるものとする。</p>

<p class="jorei-article">(特殊標章の特例交付) 第8条 市長は、人命救助等のために特に緊急を要し、対象者からの申請を待つ時間的余裕がないと認めたときは、当該申請を待たずに特殊標章のみを交付することができるものとする。</p>

<p class="jorei-article">(特殊標章の再交付) 第9条 市長から特殊標章の交付を受けた者は、特殊標章を紛失又は使用に堪えない程度に汚損若しくは破損した場合には、特殊標章再交付申請書 ( 様式第4号 ) により速やかに市長に申請し、特殊標章の再交付を受けるものとする。</p>

<p class="jorei-article">(身分証明書の交付) 第10条 市長は、 第5条第1項 の規定により、腕章等を交付した者に対し、 第2条第2項 で規定する身分証明書 (以下「身分証明書」という。) を交付するものとする。</p>

<p class="jorei-article">(身分証明書の携帯) 第11条 市長から身分証明書の交付を受けた者は、特殊標章を使用する必要があるときは、身分証明書を携帯するものとする。</p>

<p class="jorei-article">(身分証明書の再交付) 第12条 市長から身分証明書の交付を受けた者は、身分証明書を紛失又は使用に堪えない程度に汚損若しくは破損した場合には、身分証明書再交付申請書 ( 様式第5号 ) により速やかに市長に申請し、身分証明書の再交付を受けるものとする。 また、身分証明書の記載事項に異動があった場合も同様とする。</p>

<p class="jorei-article">(有効期間及び更新) 第13条 第10条第1項 の規定により市長が交付する身分証明書の有効期間は、交付された者が身分を失ったときまでとする。</p>

<p class="jorei-article">(保管) 第14条 市長は、申請書及び特殊標章等に番号を付し、厳重に保管するものとする。</p>

<p class="jorei-article">(返納) 第15条 特殊標章等の交付を受けた者は、身分を失ったときその他の事由があったときは、特殊標章等を返納しなければならない。</p>

<p class="jorei-article">(濫用の禁止) 第16条 特殊標章等の交付を受けた者は、特殊標章等を他人に譲り渡し、又は貸与してはならない。</p>

<p class="jorei-article">(周知) 第17条 市長は、特殊標章等を交付する者に対し、当該交付する際その他必要な機会を捉え、特殊標章等の意義、その使用及び管理等について説明を行い、あらかじめ周知を図るものとする。</p>

<p class="jorei-article">(雑則) 第18条 この要綱に定めるもののほか、特殊標章等の 様式 等については、「赤十字標章等及び特殊標章等に係る事務の運用に関するガイドライン」に定めるところによる。</p>

<p class="jorei-article">第19条 特殊標章等の交付及び管理に関する事務は、危機管理防災課が行うものとする。</p>

</div>` },
    { id: 221, title: '彩の国さいたま人づくり広域連合規約', category: 'その他', keywords: ['広域連合', '人材育成', '研修'], summary: '彩の国さいたま人づくり広域連合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000834.html',
        fullText: `<div class="jorei-header">○三郷市地方税法等に基づく証明書交付請求等に係る本人確認事務処理要綱<br>平成19年1月26日 告示第32号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱は、地方税法 (昭和25年法律第226号) 等の規定に基づく税証明等の交付及び閲覧の請求並びに申告をする者が本人であることを確認することにより、虚偽その他不正な手段による請求等を防止し事務の適正な執行を確保するとともに、市民等の個人情報の保護を図ることを目的とする。</p>

<p class="jorei-article">(定義) 第2条 この要綱において、 次の各号 に掲げる用語の意義は、 当該各号 に定めるところによる。</p>

<p class="jorei-article">(対象となる交付請求等の範囲) 第3条 本人確認の対象となる交付請求等は、 別表 に掲げるものとする。</p>

<p class="jorei-article">(本人確認の方法) 第4条 市長は、来庁した請求者等に対し、次に掲げるもの (以下「本人確認書類」という。) の提示を求めて、本人確認を行うものとする。</p>

<p class="jorei-article">(郵送の請求に対する本人確認の方法) 第5条 市長は、郵送により 第3条 の交付請求等が行われる場合は、当該請求者等に対し、本人確認書類の写しの添付を求めて、本人確認を行うものとする。 ただし、市長が別に定める者にあっては、この限りでない。</p>

<p class="jorei-article">(本人確認の記録) 第6条 市長は、 前2条 の規定により本人確認を行ったときは、交付請求等に係る書類の欄外に、本人確認の結果を記録するものとする。</p>

<p class="jorei-article">(他の法令との関係) 第7条 この要綱に規定する事項に関して、他の法令に別段の定めがあるときは、その定めるところによる。</p>

<p class="jorei-article">(その他) 第8条 この要綱の施行に関し必要な事項は、別に定める。</p>

</div>` },
    { id: 222, title: '埼玉県後期高齢者医療広域連合規約', category: 'その他', keywords: ['後期高齢者', '広域連合', '医療'], summary: '埼玉県後期高齢者医療広域連合の規約。', url: 'https://www1.g-reiki.net/misato/reiki_honbun/z600RG00000835.html',
        fullText: `<div class="jorei-header">○三郷市町会長等視察研修会実行委員会補助金交付要綱<br>平成19年1月29日 告示第33号</div>
<div class="jorei-body">
<p class="jorei-article">(目的) 第1条 この要綱 は、三郷市町会長等視察研修会実行委員会 (以下「委員会」という。) に対して予算の範囲内において補助金を交付することにより、自治活動の充実及び地域社会の活性化を図ることを目的とする。</p>

<p class="jorei-article">(補助対象経費) 第2条 補助金の交付対象となる経費は、委員会の運営及び実施事業に要する経費 (以下「補助対象経費」という。) とする。</p>

<p class="jorei-article">(補助金の額) 第3条 補助金の額は、補助対象経費の額を限度とし、予算の範囲内において市長が決定する。</p>

<p class="jorei-article">(交付申請) 第4条 規則第4条第1項 の申請書の様式は、三郷市町会長等視察研修会実行委員会補助金交付申請書 ( 様式第1号 ) のとおりとする。</p>

<p class="jorei-article">(交付決定の通知) 第5条 規則第7条 の交付決定通知書の様式は、三郷市町会長等視察研修会実行委員会補助金交付決定通知書 ( 様式第2号 ) のとおりとする。</p>

<p class="jorei-article">(補助金の請求) 第6条 交付の決定を受けた委員会は、三郷市町会長等視察研修会実行委員会補助金請求書 ( 様式第3号 ) を市長に提出しなければならない。</p>

<p class="jorei-article">(実績報告) 第7条 規則第13条 の報告書の様式は、三郷市町会長等視察研修会実行委員会補助金実績報告書 ( 様式第4号 ) のとおりとする。</p>

<p class="jorei-article">(補助金の額の確定通知) 第8条 規則第14条 の規定による交付すべき補助金の額の確定通知は、三郷市町会長等視察研修会実行委員会補助金確定通知書 ( 様式第5号 ) によるものとする。</p>

<p class="jorei-article">(補助金の返還) 第9条 規則第17条第2項 の規定による補助金の返還命令は、三郷市町会長等視察研修会実行委員会補助金返還命令書 ( 様式第6号 ) によるものとする。</p>

<p class="jorei-article">(その他) 第10条 この要綱 に定めるもののほか、必要な事項は、市長が定める。</p>

</div>` },
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
