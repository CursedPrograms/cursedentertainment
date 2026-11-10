/* site.js - the shared header, footer, catalog cards and VHS touches for every new-style page.
 * A page says where the site root is with <body data-root="../../"> and which tab it is with data-page.
 * The things on the pages live in site/catalog.js. */
(function () {
  "use strict";

  var body = document.body;
  var ROOT = body.getAttribute("data-root") || "";
  var PAGE = body.getAttribute("data-page") || "";
  var CAT = window.CATALOG || {};

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function href(u) { return /^(https?:)?\/\//.test(u) ? u : ROOT + u; }

  function link(url, cls, text) {
    var a = el("a", cls, text);
    a.href = href(url);
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  /* ---------- header ---------- */
  var MENU = [
    ["home", "Home", "pages/home.html"],
    ["games", "Games", "pages/games/games.html"],
    ["tools", "Tools", "pages/tools/tools.html"],
    ["music", "Music", "pages/music/soundtracks/soundtracks.html"],
    ["stories", "Stories", "pages/stories/stories.html"],
    ["", "Arcade Phantasm", "https://arcade-phantasm.netlify.app/"],
    ["", "itch.io", "https://cursed-entertainment.itch.io/"],
    ["", "GJ Portfolio", "https://cursedentertainment.indie.af/"],
    ["", "CEChat", "https://ce-chat.netlify.app/"],
    ["", "Directory", "https://cursed-entertainment.github.io/cursed-directory/"]
  ];

  function buildHeader() {
    var slot = document.getElementById("site-header");
    if (!slot) return;
    var bar = el("div", "bar");
    var logo = link("pages/home.html", "brand");
    var img = el("img");
    img.src = ROOT + "images/logos/cursed-logo.png";
    img.alt = "Cursed Entertainment";
    img.width = 277; img.height = 149;
    logo.appendChild(img);
    bar.appendChild(logo);

    var nav = el("nav", "menu");
    nav.setAttribute("aria-label", "Main menu");
    var ul = el("ul");
    MENU.forEach(function (m) {
      var li = el("li");
      var a = el("a", null, m[1]);
      a.href = href(m[2]);
      if (m[0] && m[0] === PAGE) { a.className = "on"; a.setAttribute("aria-current", "page"); }
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    bar.appendChild(nav);
    slot.appendChild(bar);
  }

  /* ---------- footer ---------- */
  var SOCIAL = [
    ["Facebook", "facebook", "https://www.facebook.com/CursedEntertainment/"],
    ["Instagram", "instagram", "https://www.instagram.com/cursed.entertainment/"],
    ["YouTube", "youtube", "https://www.youtube.com/channel/UCmTHNMTp-i1TY-jxMqSjBpw"],
    ["TikTok", "tiktok", "https://www.tiktok.com/@cursedentertainment"],
    ["Behance", "behance", "https://www.behance.net/cursedentertainment"],
    ["GitHub", "github", "https://github.com/CursedPrograms"],
    ["itch.io", "itch", "https://cursed-entertainment.itch.io/"],
    ["GameJolt", "gamejolt", "https://gamejolt.com/@CursedEntertainment"],
    ["SoundCloud", "soundcloud", "https://soundcloud.com/cursedentertainment"]
  ];

  function buildFooter() {
    var slot = document.getElementById("site-footer");
    if (!slot) return;
    var icons = el("div", "socials");
    SOCIAL.forEach(function (s) {
      var a = link(s[2], "social");
      a.title = s[0];
      var i = el("img");
      i.src = ROOT + "iframes/social-media-icons/icons/" + s[1] + "-icon.png";
      i.alt = s[0];
      i.width = 48; i.height = 48;
      a.appendChild(i);
      icons.appendChild(a);
    });
    slot.appendChild(icons);
    var jp = link("https://cursed-entertainment.itch.io/", "jp", "呪われた エンターテイメント");
    slot.appendChild(jp);
    slot.appendChild(el("p", "copy", "© Cursed Entertainment " + new Date().getFullYear() + " · It's Damn Fun"));
  }

  /* ---------- catalog cards ---------- */
  var BUTTONS = [["play", "Play"], ["download", "Download"], ["github", "GitHub"], ["page", "Visit"]];

  function poster(title) {
    var p = el("div", "poster");
    p.appendChild(el("span", "poster-title", title));
    p.appendChild(el("span", "poster-osd", "PLAY ▶"));
    return p;
  }

  function buttons(links) {
    var row = el("div", "btns");
    BUTTONS.forEach(function (b) {
      if (links && links[b[0]]) row.appendChild(link(links[b[0]], "btn btn-" + b[0], b[1]));
    });
    return row;
  }

  function card(it) {
    var c = el("article", "card" + (it.soon ? " soon" : "") + (it.cover ? " cover" : ""));
    var media = el("div", "media" + (it.contain ? " contain" : ""));
    var main = it.links && (it.links.play || it.links.page || it.links.github);
    if (it.image) {
      var img = el("img");
      img.src = href(it.image);
      img.alt = it.title;
      img.loading = "lazy";
      img.onerror = function () { media.replaceChild(poster(it.title), img); };
      media.appendChild(img);
    } else {
      media.appendChild(poster(it.title));
    }
    media.appendChild(el("span", "track"));
    if (it.soon) media.appendChild(el("span", "stamp", "Coming soon"));
    if (main) {
      var m = link(main, "media-link");
      m.setAttribute("aria-label", it.title);
      m.appendChild(media);
      c.appendChild(m);
    } else {
      c.appendChild(media);
    }
    var b = el("div", "card-body");
    if (it.tag) b.appendChild(el("span", "tag", it.tag));
    b.appendChild(el("h3", null, it.title));
    if (it.text) b.appendChild(el("p", null, it.text));
    if (!it.cover) b.appendChild(buttons(it.links));
    c.appendChild(b);
    return c;
  }

  function itch(it) {
    var c = el("article", "itch");
    var f = el("iframe");
    f.src = "https://itch.io/embed/" + it.itch +
      "?border_width=0&bg_color=007ab7&fg_color=ffffff&link_color=f088e9&border_color=ffffff";
    f.width = 552; f.height = 167;
    f.title = it.title + " on itch.io";
    f.loading = "lazy";
    f.setAttribute("frameborder", "0");
    var fallback = link(it.url, null, it.title + " by Cursed");
    f.appendChild(fallback);
    c.appendChild(f);
    if (it.links) c.appendChild(buttons(it.links));
    return c;
  }

  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function buildCatalog() {
    var slot = document.getElementById("catalog");
    if (!slot) return;
    var sections = CAT[slot.getAttribute("data-list")] || [];
    var jump = document.getElementById("jump");
    sections.forEach(function (s) {
      var id = slug(s.section) || "section";
      var sec = el("section", "shelf");
      sec.id = id;
      var head = el("div", "shelf-head");
      head.appendChild(el("h2", "flicker", s.section));
      if (s.blurb) head.appendChild(el("p", null, s.blurb));
      if (s.more) head.appendChild(link(s.more.url, "btn btn-more", s.more.label + " →"));
      sec.appendChild(head);
      var cards = s.items.filter(function (i) { return !i.itch; });
      var itches = s.items.filter(function (i) { return i.itch; });
      if (cards.length) {
        var g = el("div", "grid" + (cards[0].cover ? " covers" : ""));
        cards.forEach(function (i) { g.appendChild(card(i)); });
        sec.appendChild(g);
      }
      if (itches.length) {
        var ig = el("div", "itch-grid");
        itches.forEach(function (i) { ig.appendChild(itch(i)); });
        sec.appendChild(ig);
      }
      slot.appendChild(sec);
      if (jump) {
        var a = el("a", "chip", s.section);
        a.href = "#" + id;
        jump.appendChild(a);
      }
    });
  }

  /* home: everything flagged featured, from every list */
  function buildFeatured() {
    var slot = document.getElementById("featured");
    if (!slot) return;
    ["games", "tools", "stories"].forEach(function (k) {
      (CAT[k] || []).forEach(function (s) {
        s.items.forEach(function (i) { if (i.featured && !i.itch) slot.appendChild(card(i)); });
      });
    });
  }

  /* ---------- tape shelf: YouTube thumbnails that become players on click ---------- */
  function buildTapes(id, list) {
    var slot = document.getElementById(id);
    if (!slot || !list) return;
    list.forEach(function (v, n) {
      var t = el("button", "tape");
      t.type = "button";
      t.setAttribute("aria-label", "Play video " + (n + 1));
      var img = el("img");
      img.src = "https://img.youtube.com/vi/" + v + "/hqdefault.jpg";
      img.alt = "";
      img.loading = "lazy";
      t.appendChild(img);
      t.appendChild(el("span", "tape-label", "TAPE " + (n + 1 < 10 ? "0" : "") + (n + 1) + " ▶"));
      t.addEventListener("click", function () {
        var f = el("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + v + "?autoplay=1";
        f.title = "Video";
        f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        f.setAttribute("allowfullscreen", "");
        var wrap = el("div", "tape playing");
        wrap.appendChild(f);
        t.parentNode.replaceChild(wrap, t);
      });
      slot.appendChild(t);
    });
  }

  /* ---------- VHS clock in the hero ---------- */
  function vhsClock() {
    var c = document.getElementById("vhs-clock");
    if (!c) return;
    var M = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var d = new Date();
      var h = d.getHours(), ap = h < 12 ? "AM" : "PM";
      h = h % 12 || 12;
      c.textContent = ap + " " + h + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
        "  " + M[d.getMonth()] + ". " + pad(d.getDate()) + " 1987";
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Ko-fi button (home page only: data-kofi on body) ---------- */
  function kofi() {
    if (!body.hasAttribute("data-kofi")) return;
    var s = document.createElement("script");
    s.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    s.onload = function () {
      if (!window.kofiWidgetOverlay) return;
      window.kofiWidgetOverlay.draw("cursedentertainment", {
        "type": "floating-chat",
        "floating-chat.donateButton.text": "Support me",
        "floating-chat.donateButton.background-color": "#f088e9",
        "floating-chat.donateButton.text-color": "#001725"
      });
    };
    document.body.appendChild(s);
  }

  buildHeader();
  buildCatalog();
  buildFeatured();
  buildTapes("videos", CAT.videos);
  buildTapes("fan-videos", CAT.fanVideos);
  buildFooter();
  vhsClock();
  kofi();
})();
