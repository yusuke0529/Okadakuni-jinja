/* =========================================================
   Data
========================================================= */

const events = [
  {
    id: 1,
    month: "毎月1日",
    title: "月次祭",
    short: "毎月の神恩に感謝する祭り。",
    image: "images/gyouji/tsukiji.JPG",
    body: [
      "新年を迎え、皇室の弥栄と国家の安寧、そして参拝者お一人おひとりの一年の平安を祈願する、一年で最初の神事です。",
      "元日の未明、宮司が本殿にてご神前に新年の初穂を捧げ、静粛のうちに祭典が執り行われます。祭典後は境内にて甘酒の振る舞いがあり、初詣に訪れた多くの方で賑わいます。"
    ]
  },

  {
    id: 2,
    month: "1月1日",
    title: "歳旦祭",
    short: "新年の平安と繁栄を祈る祭り",
    image: "images/gyouji/seitan.JPG",
    body: [
      "立春の前日にあたり、冬の邪気を祓い、福を呼び込むための神事です。祭典後には境内特設舞台より「福は内」の掛け声とともに豆まきが行われます。",
      "年男・年女による豆まきには、当たり付きの福豆も混じっており、小さなお子様連れのご家族にも人気の行事です。"
    ]
  },

  {
    id: 3,
    month: "4月第4日曜日",
    title: "祈年祭",
    short: "五穀豊穣と国家の繁栄を祈る祭り。",
    image: "images/gyouji/sakura.jpg",
    body: [
      "「としごいのまつり」とも呼ばれ、その年の五穀豊穣、ひいては産業全体の発展を祈願する、農耕儀礼に由来する古い神事です。",
      "本殿にて厳かに祭典が執り行われたのち、境内では地元の農家による野菜の直売も行われます。"
    ]
  },

  {
    id: 4,
    month: "7月25日",
    title: "天神祭",
    short: "菅原道真公のご生誕をお祝いするとともに疫病退散を祈念したお祭りの一つです。",
    image: "images/gyouji/tenjin.HEIC",
    body: [
      "参道を彩る桜が見頃を迎える頃に行われる、一年でもっとも華やかなお祭りのひとつです。境内では巫女による舞の奉納が行われます。",
      "夜間はぼんぼりが灯され、夜桜参拝も楽しんでいただけます。期間中は屋台も並び、多くの参拝者で賑わいます。"
    ]
  },

  {
    id: 5,
    month: "10月21日以降の最初の日曜日",
    title: "秋祭",
    short: "豊作に感謝し、地域の平安を祈る祭り。",
    image: "images/gyouji/tenjin.JPG",
    body: [
      "「布団太鼓台祭」といわれ2基の御輿による拝殿廻りが奉納されます。",
      "その後、街中を賑々しく練り歩きます。",
      "お祭りを通じて地域が活力で満たされる伝統は、今も変わらず受け継がれています。"
    ]
  },

  {
    id: 6,
    month: "11月第4日曜日",
    title: "新嘗祭",
    short: "収穫に感謝し、新穀を神に供える祭り。",
    image: "images/gyouji/niiname.JPG",
    body: [
      "境内に大きな笹竹が飾られ、参拝者が思い思いの願いを短冊に込めて結ぶ、夏の風物詩となっている行事です。",
      "日没後には境内の灯りが灯され、涼やかな夜風の中で参拝いただけます。短冊は境内授与所にてお分けしています。"
    ]
  },

  {
    id: 7,
    month: "12月31日",
    title: "越年祭",
    short: "一年の無事に感謝し、新年の平安を祈る祭り。",
    image: "images/gyouji/etunen.PNG",
    body: [
      "岡田国神社にとって一年でもっとも重要なお祭りです。土曜日の宵宮に続き、日曜日には御神輿が氏子区域を練り歩く渡御が行われます。",
      "古式ゆかしい装束をまとった行列、太鼓や笛の奉納演奏など、里を挙げての賑わいとなり、遠方からも多くの方が参拝に訪れます。"
    ]
  }
];


const photos = [
  {
    id: 1,
    season: "",
    title: "社殿",
    image: "images/shaden/社殿.jpeg",
    body: [
      "　岡田国神社の現在の社殿は、昭和58年（1983年）に建立されました。長く地域の人々の信仰を集めてきた当社では、昭和の時代に入り、木津地域における都市開発が進められる中で境内地の一部が日本住宅公団に買収されることとなりました。その際の土地の売却代金をもとに、旧社殿を保存したまま、その南側にあたる山の中腹に新たな社殿が造営されました。こうして、古くからの社殿を残しながら、現在の祭祀を担う新社殿が整えられることとなりました。",
      "　現在の社殿は、境内の高台に西面して建ち、拝殿の奥に本殿が鎮座しています。旧社殿とは異なり、現在の祭祀を行うための社殿として整えられており、年間の祭典をはじめ、各種の祈祷や地域の神事がここを中心に執り行われています。また、社殿の前には南北に氏子詰所が設けられており、神事の際には氏子が集う場として、地域に受け継がれてきた祭祀の形を現在にも伝えています。",
      "　岡田国神社は、古くは「天神社」と称され、木津郷五か村の氏神として祀られてきました。明治11年（1878年）には『延喜式』に記された式内社「岡田国神社」に比定され、現在の社名となりました。現在の社殿は、こうした長い歴史を受け継ぎながら、昭和という新しい時代に地域の人々によって築かれたものです。",
      "　古い社殿をそのまま残し、その隣に新たな社殿を建立した岡田国神社の境内には、過去から現在へと続く信仰の歩みが一つの景観として残されています。現在の社殿は、長い歴史を受け継ぎながら、今日も地域の人々の祈りを受け止める、岡田国神社の新たな祭祀の中心となっています。"
    ],
    relatedImages: [
      "images/shaden/kyuza.jpg",
      "images/shaden/mikoshi.JPG",
      "images/shaden/momiji.jpg",
      "images/shaden/syamusyo.jpg",
      "images/shaden/temizu.jpg",
      "images/shaden/temizuiwa.jpg",
      "images/shaden/temizututu.jpg",
      "images/shaden/yuisyo.jpg",
      "images/shaden/yuisyokokaku.jpg"
    ]
  },

  {
    id: 2,
    season: "",
    title: "旧社殿",
    image: "images/kyushaden/kyushaden2.JPG",
    body: [
      "　岡田国神社は、近世まで「天神社」と称し、木津郷五か村の氏神として祀られてきました。創立については明らかでありませんが、明治11年(1878年)に延喜式内岡田国神社に比定されました。",
      "　西面する境内の社殿配置は、石垣の上に透塀を構えた一段高い所を神域として、木殿・摂社・小社などが建ち並び、その下の広場には、舞台を中心にしてそれを囲むように拝殿・南北の氏子詰所を配しています。現在の諸建物は、拝殿が元和6年(1620年)に建立、両本殿が安永3年（1774年)に再建、南北両氏子詰所が明治40年（1907年)に改築、舞台が同43年(1910年)に改築されたものです。",
      "　本殿は、左右両殿より成り、同一形式の同一規模の一間社春日造の社が並んでいます。このような本殿のあり方は、春日大社の影響を示すもので、奈良県下を中心に見られますが、府下において同時期に同一規模で社殿が建立されているのは希な例となっています。",
      "　拝殿は、切妻造で本瓦葺の桁行五間、梁行二間の大型の建物で、柱太く力強い梁組を見せる、希少な建物です。舞台は、方一間の切妻造で桟瓦葺の質素な建物です。この舞台を挟んで南北に相対する両氏子詰所は、「仮屋」とも呼ばれる、桁行六間、梁行二間の切妻造で桟瓦葺の建物で、舞台を意識して、床面全体に緩やかな傾斜を付けた造りとなっています。",
      "　当神社にみられる、舞台を中心に拝殿・南北氏子詰所が配された構成は、府南部の相楽郡地域に伝わる配置形態ですが、現在この形式を保存している神社は少なく。山城地方の室町時代の惣の社の姿を伝えるものとして重要な遺構となっています。",
      "　このように、貴重な遺構の多い岡田国神社は、昭和６３年３月、社殿が府登録文化財、背面の森を含む境内一帯は、文化財環境保全地区に決定されました。",
      "　また、当神社では、毎年１０月２１日に木津の秋祭り「布団太鼓台祭」が盛大に行われます。",
      "昭和６３年３月 木津川市教育委員会（旧社殿境内案内板より）"
    ],
    relatedImages: [
      "images/kyushaden/kyusyaden.jpg",
      "images/kyushaden/kyusyden3.JPG",
      "images/kyushaden/kyushaden4.JPG",
      "images/kyushaden/IMG_3690.JPG",
      "images/kyushaden/IMG_3669.JPG",
      "images/kyushaden/IMG_3681.JPG"
    ]
  }
];


/* =========================================================
   Render
========================================================= */

/* ---------------- Events ---------------- */

function renderEvents() {
  const grid = document.getElementById("eventsGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = events.map(event => `
    <button
      class="event-card"
      type="button"
      data-goto="event-detail-${event.id}"
    >
      <div class="thumb event-image">
        <img
          src="${event.image}"
          alt="${event.title}"
          loading="lazy"
        >
      </div>

      <div class="body">
        <div class="month">${event.month}</div>

        <h3>${event.title}</h3>

        <p>${event.short}</p>
      </div>
    </button>
  `).join("");
}


/* ---------------- Photos ---------------- */

function renderPhotos() {
  const grid = document.getElementById("photoGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = photos.map(photo => `
    <button
      class="photo-card"
      type="button"
      data-goto="photo-detail-${photo.id}"
    >
      <div class="photo-image">
        <img
          src="${photo.image}"
          alt="${photo.title}"
          loading="lazy"
        >
      </div>

      <div class="caption">
        <div class="season">${photo.season}</div>

        <h3>${photo.title}</h3>
      </div>
    </button>
  `).join("");
}


/* ---------------- Event Detail ---------------- */

function renderEventDetail(id) {
  const event = events.find(item => item.id === id);

  if (!event) {
    return;
  }

  const title = document.getElementById("eventDetailTitle");
  const body = document.getElementById("eventDetailBody");

  if (!title || !body) {
    return;
  }

  title.textContent = event.title;

  body.innerHTML = `
    <div class="detail-hero event-detail-image">
      <img
        src="${event.image}"
        alt="${event.title}"
      >
    </div>

    <h2>${event.title}</h2>

    <div class="detail-meta">
      <span>⚫︎ ${event.month}</span>
    </div>

    ${event.body.map(text => `<p>${text}</p>`).join("")}

    <a
      href="#events"
      data-nav
      class="back-link"
    >
      ← 年中行事一覧に戻る
    </a>
  `;
}


/* ---------------- Photo Detail ---------------- */

function renderPhotoDetail(id) {
  const photo = photos.find(item => item.id === id);

  if (!photo) {
    return;
  }

  const title = document.getElementById("photoDetailTitle");
  const body = document.getElementById("photoDetailBody");

  if (!title || !body) {
    return;
  }

  title.textContent = photo.title;

  const relatedPhotos = photo.relatedImages && photo.relatedImages.length > 0
    ? `
      <div class="related-photos">

        <div class="section-head">

          <h2>
            関連する風景
          </h2>

          <p class="lead">
            この情景に関連する境内の風景をご覧いただけます。
          </p>

        </div>

        <div class="related-photo-grid">

          ${photo.relatedImages.map((image, index) => `
            <div class="related-photo-card">

              <img
                src="${image}"
                alt="${photo.title} 関連写真 ${index + 1}"
                loading="lazy"
              >

            </div>
          `).join("")}

        </div>

      </div>
    `
    : "";

  body.innerHTML = `
    <!-- メイン写真 -->

    <div class="detail-hero photo-detail-image">
      <img
        src="${photo.image}"
        alt="${photo.title}"
      >
    </div>


    <!-- 詳細本文 -->

    <h2>${photo.title}</h2>

    <div class="detail-meta">
      <span>${photo.season}</span>
    </div>

    ${photo.body.map(text => `<p>${text}</p>`).join("")}


    <!-- 関連写真 -->

    ${relatedPhotos}


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


/* =========================================================
   Router
========================================================= */

const viewIds = [
  "home",
  "history",
  "events",
  "event-detail",
  "photos",
  "photo-detail",
  "gifts",
  "prayer",
  "access",
  "contact"
];


function showView(name) {
  viewIds.forEach(viewName => {
    const view = document.getElementById(`view-${viewName}`);

    if (view) {
      view.classList.toggle(
        "active",
        viewName === name
      );
    }
  });


  document.querySelectorAll("[data-nav]").forEach(link => {
    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    const target = href.replace("#", "");

    link.classList.toggle(
      "active",
      target === name
    );
  });


  window.scrollTo({
    top: 0,
    behavior: "instant" in window ? "instant" : "auto"
  });


  const mobileNav = document.getElementById("mobileNav");

  if (mobileNav) {
    mobileNav.classList.remove("open");
  }
}


function route() {
  const hash = (
    location.hash || "#home"
  ).replace("#", "");


  if (hash.startsWith("event-detail-")) {

    const id = parseInt(
      hash.split("-").pop(),
      10
    );

    renderEventDetail(id);
    showView("event-detail");

    return;
  }


  if (hash.startsWith("photo-detail-")) {

    const id = parseInt(
      hash.split("-").pop(),
      10
    );

    renderPhotoDetail(id);
    showView("photo-detail");

    return;
  }


  if (viewIds.includes(hash)) {
    showView(hash);

    return;
  }


  showView("home");
}


/* =========================================================
   Navigation Events
========================================================= */

window.addEventListener(
  "hashchange",
  route
);


document.addEventListener("click", event => {

  const card = event.target.closest("[data-goto]");

  if (!card) {
    return;
  }

  const target = card.getAttribute("data-goto");

  if (!target) {
    return;
  }

  location.hash = `#${target}`;
});


/* ---------------- Hamburger Menu ---------------- */

const hamburgerBtn =
  document.getElementById("hamburgerBtn");

const mobileNav =
  document.getElementById("mobileNav");


if (hamburgerBtn && mobileNav) {

  hamburgerBtn.addEventListener(
    "click",
    () => {
      mobileNav.classList.toggle("open");
    }
  );

}


/* =========================================================
   Contact Form
========================================================= */

const contactForm =
  document.getElementById("contactForm");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const confirmation =
        document.getElementById("contactConfirm");

      if (!confirmation) {
        return;
      }

      confirmation.classList.add("show");

      confirmation.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }
  );

}


/* =========================================================
   Hero Slideshow
========================================================= */

const heroImages =
  document.querySelectorAll(".hero-image");


let heroIndex = 0;


if (heroImages.length > 1) {

  setInterval(() => {

    heroImages[heroIndex].classList.remove("active");

    heroIndex =
      (heroIndex + 1) % heroImages.length;

    heroImages[heroIndex].classList.add("active");

  }, 5000);

}


/* =========================================================
   Quick Links Animation
========================================================= */

const quickLinks =
  document.querySelectorAll(".qlink");


if (
  quickLinks.length > 0 &&
  "IntersectionObserver" in window
) {

  const quickLinkObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry, index) => {

          if (!entry.isIntersecting) {
            return;
          }

          setTimeout(() => {

            entry.target.classList.add(
              "is-visible"
            );

          }, index * 120);

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.15
      }
    );


  quickLinks.forEach(link => {
    quickLinkObserver.observe(link);
  });

} else {

  quickLinks.forEach(link => {
    link.classList.add("is-visible");
  });

}


/* =========================================================
   Related Photos Lightbox
========================================================= */

const relatedLightbox =
  document.getElementById(
    "related-lightbox"
  );

const relatedLightboxImage =
  document.getElementById(
    "related-lightbox-image"
  );

const relatedLightboxClose =
  document.getElementById(
    "related-lightbox-close"
  );


/* ---------------- Open Lightbox ---------------- */

document.addEventListener(
  "click",
  event => {

    const image =
      event.target.closest(
        ".related-photo-card img"
      );

    if (!image) {
      return;
    }

    if (
      !relatedLightbox ||
      !relatedLightboxImage
    ) {
      return;
    }

    relatedLightboxImage.src =
      image.src;

    relatedLightboxImage.alt =
      image.alt || "";

    relatedLightbox.classList.add(
      "active"
    );

    document.body.style.overflow =
      "hidden";

  }
);


/* ---------------- Close Button ---------------- */

if (
  relatedLightboxClose &&
  relatedLightbox
) {

  relatedLightboxClose.addEventListener(
    "click",
    () => {

      relatedLightbox.classList.remove(
        "active"
      );

      document.body.style.overflow = "";

    }
  );

}


/* ---------------- Background Click ---------------- */

if (relatedLightbox) {

  relatedLightbox.addEventListener(
    "click",
    event => {

      if (
        event.target !==
        relatedLightbox
      ) {
        return;
      }

      relatedLightbox.classList.remove(
        "active"
      );

      document.body.style.overflow = "";

    }
  );

}


/* ---------------- ESC Key ---------------- */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !== "Escape" ||
      !relatedLightbox
    ) {
      return;
    }

    relatedLightbox.classList.remove(
      "active"
    );

    document.body.style.overflow = "";

  }
);


/* ---------------- Header on scroll ---------------- */

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
}, { passive: true });


/* =========================================================
   Init
========================================================= */

function renderHomeNews() {
  const list = document.getElementById("homeNews");
  if (!list) return;
  list.innerHTML = events.slice(1, 6).map(e => `
    <li><a href="#event-detail-${e.id}">
      <span class="d">${e.month}</span><span class="t">祭典</span>
      <span class="n"><b>${e.title}</b>${e.short}</span>
    </a></li>`).join("");
}

renderEvents();
renderHomeNews();

renderPhotos();

route();