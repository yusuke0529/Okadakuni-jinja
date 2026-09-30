/* ---------------- Data ---------------- */
const events = [
  {id:1, month:"毎月1日", title:"月次祭", short:"毎月の神恩に感謝する祭り。", meta:"元日 未明〜午前中", image: "images/gyouji/tsukiji.JPG",
   body:["新年を迎え、皇室の弥栄と国家の安寧、そして参拝者お一人おひとりの一年の平安を祈願する、一年で最初の神事です。","元日の未明、宮司が本殿にてご神前に新年の初穂を捧げ、静粛のうちに祭典が執り行われます。祭典後は境内にて甘酒の振る舞いがあり、初詣に訪れた多くの方で賑わいます。"]},
  {id:2, month:"1月1日", title:"歳旦祭", short:"新年の平安と繁栄を祈る祭り", meta:"2月3日 午後2時〜", image: "images/gyouji/seitan.JPG",
   body:["立春の前日にあたり、冬の邪気を祓い、福を呼び込むための神事です。祭典後には境内特設舞台より「福は内」の掛け声とともに豆まきが行われます。","年男・年女による豆まきには、当たり付きの福豆も混じっており、小さなお子様連れのご家族にも人気の行事です。"]},
  {id:3, month:"4月第4日曜日", title:"祈年祭", short:"五穀豊穣と国家の繁栄を祈る祭り。", meta:"3月第3日曜日", image: "images/gyouji/sakura.jpeg",
   body:["「としごいのまつり」とも呼ばれ、その年の五穀豊穣、ひいては産業全体の発展を祈願する、農耕儀礼に由来する古い神事です。","本殿にて厳かに祭典が執り行われたのち、境内では地元の農家による野菜の直売も行われます。"]},
  {id:4, month:"7月25日", title:"天神祭", short:"菅原道真公のご生誕をお祝いするとともに疫病退散を祈念したお祭りの一つです。", meta:"4月第2日曜 終日", image: "images/gyouji/tenjin.JPG",
   body:["参道を彩る桜が見頃を迎える頃に行われる、一年でもっとも華やかなお祭りのひとつです。境内では巫女による舞の奉納が行われます。","夜間はぼんぼりが灯され、夜桜参拝も楽しんでいただけます。期間中は屋台も並び、多くの参拝者で賑わいます。"]},
  {id:5, month:"10月21日以降の最初の日曜日", title:"秋祭", short:"豊作に感謝し、地域の平安を祈る祭り。", meta:"6月30日 午後4時〜", image: "images/gyouji/tenjin.JPG",
   body:["「布団太鼓台祭」といわれ2基の御輿による拝殿廻りが奉納されます。","その後、街中を賑々しく練り歩きます。","お祭りを通じて地域が活力で満たされる伝統は、今も変わらず受け継がれています。"]},
  {id:6, month:"11月第4日曜日", title:"新嘗祭", short:"収穫に感謝し、新穀を神に供える祭り。", meta:"7月7日 終日", image: "images/gyouji/niiname.JPG",
   body:["境内に大きな笹竹が飾られ、参拝者が思い思いの願いを短冊に込めて結ぶ、夏の風物詩となっている行事です。","日没後には境内の灯りが灯され、涼やかな夜風の中で参拝いただけます。短冊は境内授与所にてお分けしています。"]},
  {id:7, month:"12月31日", title:"越年祭", short:"一年の無事に感謝し、新年の平安を祈る祭り。", meta:"10月第3土曜・日曜", image: "images/gyouji/etunen.PNG",
   body:["岡田国神社にとって一年でもっとも重要なお祭りです。土曜日の宵宮に続き、日曜日には御神輿が氏子区域を練り歩く渡御が行われます。","古式ゆかしい装束をまとった行列、太鼓や笛の奉納演奏など、里を挙げての賑わいとなり、遠方からも多くの方が参拝に訪れます。"]},
];

const photos = [
  {id:1, season:"", title:"社殿", image: "images/shaden/社殿.jpeg",
   body:["　岡田国神社の現在の社殿は、昭和58年（1983年）に建立されました。長く地域の人々の信仰を集めてきた当社では、昭和の時代に入り、木津地域における都市開発が進められる中で境内地の一部が日本住宅公団に買収されることとなりました。その際の土地の売却代金をもとに、旧社殿を保存したまま、その南側にあたる山の中腹に新たな社殿が造営されました。こうして、古くからの社殿を残しながら、現在の祭祀を担う新社殿が整えられることとなりました。","　現在の社殿は、境内の高台に西面して建ち、拝殿の奥に本殿が鎮座しています。旧社殿とは異なり、現在の祭祀を行うための社殿として整えられており、年間の祭典をはじめ、各種の祈祷や地域の神事がここを中心に執り行われています。また、社殿の前には南北に氏子詰所が設けられており、神事の際には氏子が集う場として、地域に受け継がれてきた祭祀の形を現在にも伝えています。","　岡田国神社は、古くは「天神社」と称され、木津郷五か村の氏神として祀られてきました。明治11年（1878年）には『延喜式』に記された式内社「岡田国神社」に比定され、現在の社名となりました。現在の社殿は、こうした長い歴史を受け継ぎながら、昭和という新しい時代に地域の人々によって築かれたものです。","　古い社殿をそのまま残し、その隣に新たな社殿を建立した岡田国神社の境内には、過去から現在へと続く信仰の歩みが一つの景観として残されています。現在の社殿は、長い歴史を受け継ぎながら、今日も地域の人々の祈りを受け止める、岡田国神社の新たな祭祀の中心となっています。"],
   relatedImages: ["images/shaden/kyuza.jpg","images/shaden/mikoshi.JPG","images/shaden/momiji.jpg","images/shaden/syamusyo.jpg","images/shaden/temizu.jpg","images/shaden/temizuiwa.jpg","images/shaden/temizututu.jpg","images/shaden/yuisyo.jpg","images/shaden/yuisyokokaku.jpg"]},
  {id:2, season:"", title:"旧社殿", image: "images/kyushaden/kyushaden2.JPG",
   body:["　岡田国神社は、近世まで「天神社」と称し、木津郷五か村の氏神として祀られてきました。創立については明らかでありませんが、明治11年(1878年)に延喜式内岡田国神社に比定されました。","　西面する境内の社殿配置は、石垣の上に透塀を構えた一段高い所を神域として、木殿・摂社・小社などが建ち並び、その下の広場には、舞台を中心にしてそれを囲むように拝殿・南北の氏子詰所を配しています。現在の諸建物は、拝殿が元和6年(1620年)に建立、両本殿が安永3年（1774年)に再建、南北両氏子詰所が明治40年（1907年)に改築、舞台が同43年(1910年)に改築されたものです。","　本殿は、左右両殿より成り、同一形式の同一規模の一間社春日造の社が並んでいます。このような本殿のあり方は、春日大社の影響を示すもので、奈良県下を中心に見られますが、府下において同時期に同一規模で社殿が建立されているのは希な例となっています。","　拝殿は、切妻造で本瓦葺の桁行五間、梁行二間の大型の建物で、柱太く力強い梁組を見せる、希少な建物です。舞台は、方一間の切妻造で桟瓦葺の質素な建物です。この舞台を挟んで南北に相対する両氏子詰所は、「仮屋」とも呼ばれる、桁行六間、梁行二間の切妻造で桟瓦葺の建物で、舞台を意識して、床面全体に緩やかな傾斜を付けた造りとなっています。","　当神社にみられる、舞台を中心に拝殿・南北氏子詰所が配された構成は、府南部の相楽郡地域に伝わる配置形態ですが、現在この形式を保存している神社は少なく。山城地方の室町時代の惣の社の姿を伝えるものとして重要な遺構となっています。","　このように、貴重な遺構の多い岡田国神社は、昭和６３年３月、社殿が府登録文化財、背面の森を含む境内一帯は、文化財環境保全地区に決定されました。","　また、当神社では、毎年１０月２１日に木津の秋祭り「布団太鼓台祭」が盛大に行われます。","昭和６３年３月 木津川市教育委員会（旧社殿境内案内板より）"],
   relatedImages: ["images/kyushaden/kyusyaden.jpg","images/kyushaden/kyusyden3.JPG","images/kyushaden/kyushaden4.JPG","images/kyushaden/IMG_3690.JPG","images/kyushaden/IMG_3669.JPG","images/kyushaden/IMG_3681.JPG"]},
  // {id:3, season:"BUNKAZAI", title:"文化財", image: "images/IMG_3665.JPG",
  //  body:["岡田国神社は、近世まで「天神社」と称し、木津郷五か村の氏神として祀られてきました。創立については明らかでありませんが、明治十一年(一八七八)に延喜式内岡田国神社に比定されました。","西面する境内の社殿配置は、石垣の上に透塀を構えた一段高い所を神域として、木殿・摂社・小社などが建ち並び、その下の広場には、舞台を中心にしてそれを囲むように拝殿・南北の氏子詰所を配しています。現在の諸建物は、拝殿が元和六年(一六二〇)に建立、両本殿が安永三年（一七七四)に再建、南北両氏子詰所が明治四十年（一九〇七)に改築、舞台が同四十三年(一九一〇)に改築されたものです。","本殿は、左右両殿より成り、同一形式の同一規模の一間社春日造の社が並んでいます。このような本殿のあり方は、春日大社の影響を示すもので、奈良県下を中心に見られますが、府下において同時期に同一規模で社殿が建立されているのは希な例となっています。","拝殿は、切妻造で本瓦葺の桁行五間、梁行二間の大型の建物で、柱太く力強い梁組を見せる、希少な建物です。","舞台は、方一間の切妻造で桟瓦葺の質素な建物です。","この舞台を挟んで南北に相対する両氏子詰所は、「仮屋」とも呼ばれる、桁行六間、梁行二間の切妻造で桟瓦葺の建物で、舞台を意識して、床面全体に緩やかな傾斜を付けた造りとなっています。","当神社にみられる、舞台を中心に拝殿・南北氏子詰所が配された構成は、府南部の相楽郡地域に伝わる配置形態ですが、現在この形式を保存している神社は少なく。山城地方の室町時代の惣の社の姿を伝えるものとして重要な遺構となっています。","このように、貴重な遺構の多い岡田国神社は、昭和６３年３月、社殿が府登録文化財、背面の森を含む境内一帯は、文化財環境保全地区に決定されました。","また、当神社では、毎年１０月２１日に木津の秋祭り「布団太鼓台祭」が盛大に行われます。（旧社殿境内案内板より）","昭和６３年３月 木津川市教育委員会"],
  //  relatedImages: ["images/IMG_3791.jpeg","images/IMG_3665.JPG","images/IMG_3684.JPG"]},
  // {id:4, season:"冬 WINTER", title:"雪化粧の境内", image: "images/IMG_3690.JPG",
  //  body:["雪が降り積もった朝の境内は、一面の静けさに包まれます。屋根に積もった雪と、朱塗りの社殿とのコントラストは、冬ならではの厳かな美しさです。","足跡ひとつない早朝の参道を歩くひとときは、一年でもっとも静謐な時間として、地元の方々にも大切にされています。"],
  //  relatedImages: ["images/IMG_3791.jpeg","images/IMG_3665.JPG","images/IMG_3684.JPG"]},
  // {id:5, season:"初詣 HATSUMODE", title:"除夜から元旦へ", image: "images/紅葉４.jpg",
  //  body:["大晦日の除夜祭から続く夜、境内には初詣に訪れる方々の列ができます。冷たい夜気の中、篝火に照らされた参道はどこか幻想的な雰囲気に包まれます。","年が明けると同時に多くの方が本殿に向かって手を合わせる光景は、岡田国神社の一年の始まりを象徴する情景です。"],
  //  relatedImages: ["images/IMG_3791.jpeg","images/IMG_3665.JPG","images/IMG_3684.JPG"]},
  // {id:6, season:"夜 NIGHT", title:"灯籠まつりの宵", image: "images/IMG_3796.jpeg",
  //  body:["夏の宵、参道に並べられた数百の灯籠に火が灯されると、境内はやわらかな光に包まれます。","風のない夜には灯籠の灯りが水面のように揺らめき、多くの方がその光景を写真に収めようと足を止めます。夜風とともにゆったりとお楽しみいただける、夏の夜の風物詩です。"],
  //  relatedImages: ["images/IMG_3791.jpeg","images/IMG_3665.JPG","images/IMG_3684.JPG"]}
];

/* ---------------- Illustration factory ---------------- */
function scene(kind){
  const torii = `<g transform="translate(150,120)">
      <rect x="-6" y="6" width="10" height="60" fill="#8B3A2E"/>
      <rect x="56" y="6" width="10" height="60" fill="#8B3A2E"/>
      <rect x="-20" y="-8" width="100" height="12" fill="#AE4B3C"/>
      <rect x="-20" y="6" width="100" height="5" fill="#AE4B3C"/>
    </g>`;
  const layers = {
    sakura: `<rect width="400" height="260" fill="#F3E3E6"/>
      <circle cx="330" cy="40" r="26" fill="#F7D3D8"/>
      ${torii}
      <g fill="#EFAAB8" opacity="0.9">
        <circle cx="60" cy="60" r="30"/><circle cx="110" cy="40" r="24"/><circle cx="300" cy="70" r="30"/><circle cx="350" cy="100" r="22"/>
      </g>
      <g fill="#f6c9d2" opacity="0.85">
        <circle cx="90" cy="180" r="3"/><circle cx="160" cy="210" r="3"/><circle cx="230" cy="190" r="3"/><circle cx="300" cy="220" r="3"/><circle cx="40" cy="220" r="3"/>
      </g>`,
    natsu: `<rect width="400" height="260" fill="#DDEAD6"/>
      <circle cx="340" cy="36" r="24" fill="#FBE49A"/>
      ${torii}
      <g fill="#5C6B4C" opacity="0.9">
        <circle cx="50" cy="60" r="34"/><circle cx="100" cy="40" r="28"/><circle cx="320" cy="55" r="34"/><circle cx="360" cy="90" r="24"/>
      </g>
      <rect x="0" y="220" width="400" height="40" fill="#a9bb98"/>`,
    aki: `<rect width="400" height="260" fill="#F1E3CE"/>
      <circle cx="335" cy="40" r="24" fill="#f6d3a1"/>
      ${torii}
      <g fill="#C1622F" opacity="0.9"><circle cx="55" cy="60" r="30"/><circle cx="105" cy="42" r="24"/></g>
      <g fill="#B8933E" opacity="0.9"><circle cx="305" cy="65" r="30"/><circle cx="355" cy="95" r="22"/></g>
      <g fill="#8B3A2E" opacity="0.8"><circle cx="80" cy="95" r="14"/><circle cx="330" cy="120" r="12"/></g>`,
    fuyu: `<rect width="400" height="260" fill="#E8EEF3"/>
      <circle cx="330" cy="42" r="22" fill="#ffffff" opacity="0.8"/>
      ${torii}
      <rect x="0" y="200" width="400" height="60" fill="#ffffff"/>
      <rect x="-20" y="-8" width="100" height="8" fill="#ffffff" opacity="0.85" transform="translate(150,112)"/>
      <g fill="#ffffff" opacity="0.9"><circle cx="40" cy="60" r="3"/><circle cx="90" cy="100" r="3"/><circle cx="140" cy="50" r="3"/><circle cx="260" cy="70" r="3"/><circle cx="320" cy="120" r="3"/><circle cx="370" cy="60" r="3"/></g>`,
    hatsumode: `<rect width="400" height="260" fill="#1F2438"/>
      <g fill="#f4e7c1" opacity="0.9"><circle cx="60" cy="40" r="2"/><circle cx="120" cy="30" r="2"/><circle cx="200" cy="50" r="2"/><circle cx="260" cy="25" r="2"/><circle cx="330" cy="45" r="2"/></g>
      ${torii}
      <g fill="#8B3A2E"><circle cx="60" cy="150" r="8"/><circle cx="90" cy="155" r="8"/><circle cx="250" cy="150" r="8"/><circle cx="280" cy="153" r="8"/><circle cx="320" cy="150" r="8"/></g>
      <rect x="0" y="220" width="400" height="40" fill="#2b2f45"/>`,
    toro: `<rect width="400" height="260" fill="#232742"/>
      ${torii}
      <g fill="#F0B24A">
        <rect x="40" y="150" width="22" height="26" rx="4"/><rect x="90" y="160" width="22" height="26" rx="4"/>
        <rect x="280" y="155" width="22" height="26" rx="4"/><rect x="330" y="150" width="22" height="26" rx="4"/>
      </g>
      <g fill="#f6cf85" opacity="0.5"><circle cx="51" cy="163" r="16"/><circle cx="101" cy="173" r="16"/><circle cx="291" cy="168" r="16"/><circle cx="341" cy="163" r="16"/></g>`,
    newyear: `<rect width="400" height="260" fill="#F3EAD3"/>
      <circle cx="330" cy="45" r="26" fill="#EFC9C0"/>
      ${torii}
      <g fill="#8B3A2E"><rect x="30" y="230" width="10" height="20"/><rect x="360" y="230" width="10" height="20"/></g>`,
    setsubun: `<rect width="400" height="260" fill="#EFE3D6"/>
      ${torii}
      <g fill="#B8933E"><circle cx="80" cy="80" r="6"/><circle cx="120" cy="150" r="6"/><circle cx="250" cy="90" r="6"/><circle cx="300" cy="160" r="6"/><circle cx="180" cy="60" r="6"/></g>`,
    spring: `<rect width="400" height="260" fill="#E9EEDD"/>
      <circle cx="330" cy="40" r="24" fill="#fbe49a"/>
      ${torii}
      <g fill="#8FA579" opacity="0.8"><circle cx="60" cy="70" r="26"/><circle cx="330" cy="70" r="26"/></g>`,
    tanabata: `<rect width="400" height="260" fill="#232742"/>
      ${torii}
      <g fill="#B8933E" opacity="0.9"><circle cx="70" cy="40" r="1.6"/><circle cx="140" cy="30" r="1.6"/><circle cx="220" cy="45" r="1.6"/><circle cx="300" cy="35" r="1.6"/><circle cx="350" cy="55" r="1.6"/></g>
      <g stroke="#EFC9C0" stroke-width="2"><line x1="90" y1="90" x2="90" y2="180"/><line x1="310" y1="90" x2="310" y2="180"/></g>
      <g fill="#EFC9C0"><rect x="84" y="100" width="12" height="16"/><rect x="84" y="130" width="12" height="16"/><rect x="304" y="110" width="12" height="16"/></g>`,
    reitaisai: `<rect width="400" height="260" fill="#F1E3CE"/>
      ${torii}
      <g fill="#8B3A2E"><rect x="130" y="180" width="140" height="34" rx="6"/></g>
      <g fill="#B8933E"><rect x="150" y="164" width="12" height="20"/><rect x="238" y="164" width="12" height="20"/></g>`,
    shichigosan: `<rect width="400" height="260" fill="#F3E3E6"/>
      ${torii}
      <g fill="#AE4B3C"><circle cx="150" cy="200" r="16"/></g>
      <g fill="#B8933E"><circle cx="200" cy="200" r="16"/></g>`,
    joya: `<rect width="400" height="260" fill="#1B1E33"/>
      <circle cx="320" cy="50" r="20" fill="#EFE3C7"/>
      ${torii}
      <g fill="#8B3A2E"><rect x="140" y="200" width="8" height="30"/></g>`
  };
  return `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${layers[kind] || layers.spring}</svg>`;
}

/* ---------------- Render lists ---------------- */
function renderEvents(){

  const grid = document.getElementById('eventsGrid');

  if (!grid) return;

  grid.innerHTML = events.map(ev => `

    <button
      class="event-card"
      type="button"
      data-goto="event-detail-${ev.id}"
    >

      <div class="thumb event-image">

        <img
          src="${ev.image}"
          alt="${ev.title}"
          loading="lazy"
        >

      </div>

      <div class="body">

        <div class="month">${ev.month}</div>

        <h3>${ev.title}</h3>

        <p>${ev.short}</p>

      </div>

    </button>

  `).join('');

}

function renderPhotos(){
  const grid = document.getElementById('photoGrid');
  grid.innerHTML = photos.map(p => `
    <button class="photo-card" data-goto="photo-detail-${p.id}">
      <div class="photo-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="caption">
        <div class="season">${p.season}</div>
        <h3>${p.title}</h3>
      </div>
    </button>
  `).join('');
}

function renderEventDetail(id){
  const ev = events.find(e => e.id === id);
  if(!ev) return;
  document.getElementById('eventDetailTitle').textContent = ev.title;
  document.getElementById('eventDetailBody').innerHTML = `
    <div class="detail-hero event-detail-image">
      <img src="${ev.image}" alt="${ev.title}">
    </div>
    <h2>${ev.title}</h2>
    <div class="detail-meta">
      <span>⚫︎ ${ev.month}</span>
    </div>
    ${ev.body.map(p => `<p>${p}</p>`).join('')}
    <a href="#events" data-nav class="back-link">← 年中行事一覧に戻る</a>
  `;
}

function renderPhotoDetail(id){
  const p = photos.find(x => x.id === id);
  if(!p) return;

  document.getElementById('photoDetailTitle').textContent = p.title;

  document.getElementById('photoDetailBody').innerHTML = `

    <!-- メイン写真 -->
    <div class="detail-hero photo-detail-image">
      <img
        src="${p.image}"
        alt="${p.title}"
      >
    </div>


    <!-- 詳細本文 -->
    <h2>${p.title}</h2>

    <div class="detail-meta">
      <span>${p.season}</span>
    </div>

    ${p.body.map(t => `<p>${t}</p>`).join('')}


    <!-- 関連写真 -->
    ${
      p.relatedImages && p.relatedImages.length > 0
        ? `
          <div class="related-photos">

            <div class="section-head">

              <span class="eyebrow">
                RELATED PHOTOS
              </span>

              <h2>
                関連する風景
              </h2>

              <p class="lead">
                この情景に関連する境内の風景をご覧いただけます。
              </p>

            </div>


            <div class="related-photo-grid">

              ${p.relatedImages.map((image, index) => `
                <div class="related-photo-card">

                  <img
                    src="${image}"
                    alt="${p.title} 関連写真 ${index + 1}"
                    loading="lazy"
                  >

                </div>
              `).join('')}

            </div>

          </div>
        `
        : ''
    }


    <!-- 一覧へ戻る -->
    <a
      href="#photos"
      data-nav
      class="back-link"
    >
      ← 境内風景一覧に戻る
    </a>

  `;
}

/* ---------------- Router ---------------- */
const viewIds = ['home','history','events','event-detail','photos','photo-detail','gifts','prayer','access','contact'];

function showView(name){
  viewIds.forEach(v => {
    const el = document.getElementById('view-' + v);
    if(el) el.classList.toggle('active', v === name);
  });
  document.querySelectorAll('[data-nav]').forEach(a => {
    const target = a.getAttribute('href').replace('#','');
    a.classList.toggle('active', target === name);
  });
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  document.getElementById('mobileNav').classList.remove('open');
}

function route(){
  const hash = (location.hash || '#home').replace('#','');
  if(hash.startsWith('event-detail-')){
    const id = parseInt(hash.split('-').pop(), 10);
    renderEventDetail(id);
    showView('event-detail');
  } else if(hash.startsWith('photo-detail-')){
    const id = parseInt(hash.split('-').pop(), 10);
    renderPhotoDetail(id);
    showView('photo-detail');
  } else if(viewIds.includes(hash)){
    showView(hash);
  } else {
    showView('home');
  }
}

window.addEventListener('hashchange', route);
document.addEventListener('click', (e) => {
  const card = e.target.closest('[data-goto]');
  if(card){
    location.hash = '#' + card.getAttribute('data-goto');
  }
});
document.getElementById('hamburgerBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

/* ---------------- Forms (demo only) ---------------- */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('contactConfirm').classList.add('show');
    document.getElementById('contactConfirm').scrollIntoView({
      behavior:'smooth',
      block:'center'
    });
  });
}

/* ---------------- Init ---------------- */
renderEvents();
renderPhotos();
route();


// =========================
// Hero Slideshow
// =========================

const heroImages = document.querySelectorAll('.hero-image');

let heroIndex = 0;

setInterval(() => {
  heroImages[heroIndex].classList.remove('active');

  heroIndex = (heroIndex + 1) % heroImages.length;

  heroImages[heroIndex].classList.add('active');
}, 5000); 

// =========================
// Quick Links Animation
// =========================

const quickLinks = document.querySelectorAll('.qlink');

const quickLinkObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry, index) => {

      if (entry.isIntersecting) {

        // 少しずつ時間をずらして表示
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 120);

        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.15
  }
);

quickLinks.forEach(link => {
  quickLinkObserver.observe(link);
});


/* =========================
   relatedImages 拡大表示
   ========================= */

const relatedLightbox =
  document.getElementById("related-lightbox");

const relatedLightboxImage =
  document.getElementById("related-lightbox-image");

const relatedLightboxClose =
  document.getElementById("related-lightbox-close");


/* relatedImages の写真をクリック */
document.addEventListener("click", (event) => {

  const image = event.target.closest(".related-photo-card img");

  if (!image) return;

  relatedLightboxImage.src = image.src;
  relatedLightboxImage.alt = image.alt || "";

  relatedLightbox.classList.add("active");

  // 背景のスクロールを止める
  document.body.style.overflow = "hidden";

});


/* ×ボタン */
if (relatedLightboxClose) {

  relatedLightboxClose.addEventListener("click", () => {

    relatedLightbox.classList.remove("active");

    document.body.style.overflow = "";

  });

}


/* 背景をクリック */
relatedLightbox.addEventListener("click", (event) => {

  if (event.target === relatedLightbox) {

    relatedLightbox.classList.remove("active");

    document.body.style.overflow = "";

  }

});


/* ESCキー */
document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    relatedLightbox.classList.remove("active");

    document.body.style.overflow = "";

  }

});