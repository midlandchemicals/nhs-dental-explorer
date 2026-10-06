/* Oral Surgery Revision — single-page app. Content lives in content/*.js (window.OS). */
(function () {
  'use strict';

  var OS = window.OS || { domains: [], guidelines: [] };
  var app = document.getElementById('app');

  /* ---------- Storage (per-device, best effort) ---------- */
  var KEY = 'os-revision-v1';
  var S = { reviewed: {}, cards: {}, quiz: {}, last: null, scale: 1 };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      for (var k in parsed) S[k] = parsed[k];
    }
  } catch (e) {}
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  }
  function applyScale() { document.documentElement.style.setProperty('--scale', S.scale || 1); }
  applyScale();

  /* ---------- Indexes ---------- */
  var domains = OS.domains.slice().sort(function (a, b) { return a.order - b.order; });
  var topicIdx = {};
  var allCards = [];
  var allQs = [];
  domains.forEach(function (d) {
    d.topics.forEach(function (t, i) { topicIdx[t.id] = { t: t, d: d, i: i }; });
    (d.cards || []).forEach(function (c, i) {
      allCards.push({ key: d.id + ':' + i, q: c[0], a: c[1], d: d });
    });
    (d.mcqs || []).forEach(function (q, i) {
      allQs.push({ key: d.id + ':' + i, q: q, d: d });
    });
  });
  var totalTopics = Object.keys(topicIdx).length;

  function strip(html) {
    return String(html).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
  }
  var searchDocs = [];
  domains.forEach(function (d) {
    d.topics.forEach(function (t) {
      searchDocs.push({
        t: t, d: d,
        title: t.title,
        body: strip((t.syllabus || []).join(' ') + ' ' + t.notes)
      });
    });
  });

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function domainProgress(d) {
    var n = d.topics.length, done = 0;
    d.topics.forEach(function (t) { if (S.reviewed[t.id]) done++; });
    return { n: n, done: done, pct: n ? Math.round((done / n) * 100) : 0 };
  }
  function overall() {
    var done = 0;
    for (var id in topicIdx) if (S.reviewed[id]) done++;
    return { done: done, n: totalTopics, pct: totalTopics ? Math.round((done / totalTopics) * 100) : 0 };
  }
  function readMins(t) {
    var words = strip(t.notes).split(' ').length;
    return Math.max(1, Math.round(words / 200));
  }

  var ICON = {
    chev: '<svg class="chev" width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true"><path d="M1 1l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    back: '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true"><path d="M10 2L2 10l8 8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.2l2.6 2.6L10 3.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    book: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5c-.8 0-1.5.7-1.5 1.5V5.5zM20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5.7 1.5 1.5V5.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    cards: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="14" height="14" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M7 3.8h11.2c1.5 0 2.8 1.3 2.8 2.8V17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    quiz: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M9.6 9.4a2.5 2.5 0 114 2c-.9.6-1.6 1.1-1.6 2.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17" r="1.1" fill="currentColor"/></svg>',
    search: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M15.5 15.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    chart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 20V11M12 20V5M19 20v-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    guide: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h7l5 5v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h7M9 17h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    flag: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 21V4M5 4h11l-2 4 2 4H5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* ---------- Routing ---------- */
  var scrollMemory = {};
  var current = 'home';

  function route() {
    var h = (location.hash || '').replace(/^#/, '') || 'home';
    return h;
  }
  function go(h) {
    if (('#' + h) === location.hash) render();
    else location.hash = h;
  }

  var session = { cards: null, quiz: null, query: '', resetAsk: false };

  function tabFor(r) {
    if (r.indexOf('cards') === 0) return 'cards';
    if (r.indexOf('quiz') === 0) return 'quiz';
    if (r === 'search') return 'search';
    if (r === 'progress') return 'progress';
    return 'study';
  }

  function shell(opts, body) {
    var back = opts.back
      ? '<button class="nav-back" data-go="' + esc(opts.back[0]) + '">' + ICON.back + '<span>' + esc(opts.back[1]) + '</span></button>'
      : '<span></span>';
    var tab = tabFor(current);
    function t(id, href, label, icon) {
      return '<a class="tab' + (tab === id ? ' on' : '') + '" href="#' + href + '"' + (tab === id ? ' aria-current="page"' : '') + '>' + icon + '<span>' + label + '</span></a>';
    }
    return '<header class="nav" id="nav"><div class="nav-inner">' + back +
      '<div class="nav-title">' + esc(opts.title || '') + '</div><span class="nav-right"></span></div></header>' +
      '<main id="main">' + body + '</main>' +
      '<nav class="tabbar" aria-label="Sections"><div class="tabbar-inner">' +
      t('study', 'home', 'Study', ICON.book) +
      t('cards', 'cards', 'Cards', ICON.cards) +
      t('quiz', 'quiz', 'Quiz', ICON.quiz) +
      t('search', 'search', 'Search', ICON.search) +
      t('progress', 'progress', 'Progress', ICON.chart) +
      '</div></nav>';
  }

  function ring(pct) {
    var r = 36, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
    return '<svg class="ring" viewBox="0 0 84 84" role="img" aria-label="' + pct + '% of topics revised">' +
      '<circle class="trk" cx="42" cy="42" r="' + r + '" fill="none" stroke-width="7"/>' +
      '<circle class="val" cx="42" cy="42" r="' + r + '" fill="none" stroke-width="7" stroke-linecap="round" ' +
      'stroke-dasharray="' + c.toFixed(2) + '" stroke-dashoffset="' + off.toFixed(2) + '" transform="rotate(-90 42 42)"/>' +
      '<text x="42" y="47" text-anchor="middle">' + pct + '%</text></svg>';
  }

  /* ---------- Views ---------- */
  function viewHome() {
    var o = overall();
    var html = '<div class="eyebrow">GDC specialty curriculum · Section D</div>' +
      '<div class="hero"><div><h1 class="large">Oral Surgery Syllabus</h1>' +
      '<p class="lede" style="margin:0">Revision notes, flashcards and questions for all nine clinical domains.</p></div>' +
      ring(o.pct) + '</div>';

    if (S.last && topicIdx[S.last]) {
      var L = topicIdx[S.last];
      html += '<a class="resume" href="#t-' + L.t.id + '"><div class="row-main"><div class="row-sub">Continue reading</div>' +
        '<div class="row-title">' + esc(L.t.title) + '</div></div>' + ICON.chev + '</a>';
    }

    html += '<div class="quick">' +
      '<a class="tile" href="#cards">' + ICON.cards + '<b>Flashcards</b><span>' + allCards.length + ' cards</span></a>' +
      '<a class="tile" href="#quiz">' + ICON.quiz + '<b>Quiz</b><span>' + allQs.length + ' questions</span></a>' +
      '<a class="tile" href="#guides">' + ICON.guide + '<b>Guidelines</b><span>Every cited source</span></a>' +
      '<a class="tile" href="#search">' + ICON.search + '<b>Search</b><span>All notes</span></a>' +
      '</div>';

    html += '<div class="section-label">Domains</div><div class="group">';
    domains.forEach(function (d) {
      var p = domainProgress(d);
      html += '<a class="row" href="#d-' + d.id + '"><span class="badge">' + esc(d.num) + '</span>' +
        '<div class="row-main"><div class="row-title">' + esc(d.title) + '</div>' +
        '<div class="row-sub">' + p.done + ' of ' + p.n + ' topics revised</div>' +
        '<div class="meter"><i style="width:' + p.pct + '%"></i></div></div>' + ICON.chev + '</a>';
    });
    html += '</div>';
    html += '<p class="note">Built from the Oral Surgery SAC clinical syllabus (Sept 2024). The syllabus lists outcomes; the revision notes under each outcome were written to cover them and summarise the guidance it cites. Check drug doses against the current BNF and the source guidelines before clinical use.</p>';
    return shell({ title: 'Oral Surgery' }, html);
  }

  function viewDomain(id) {
    var d = domains.filter(function (x) { return x.id === id; })[0];
    if (!d) return viewHome();
    var p = domainProgress(d);
    var html = '<div class="eyebrow">' + (d.num === '0' ? 'Common to all domains' : 'Domain ' + esc(d.num)) + '</div>' +
      '<h1 class="large">' + esc(d.title) + '</h1>' +
      '<p class="lede">' + esc(d.summary || '') + '</p>' +
      '<div class="btn-row">' +
      ((d.cards || []).length ? '<a class="btn" href="#cards-' + d.id + '">' + ICON.cards + ' ' + d.cards.length + ' flashcards</a>' : '') +
      ((d.mcqs || []).length ? '<a class="btn ghost" href="#quiz-' + d.id + '">' + ICON.quiz + ' ' + d.mcqs.length + ' questions</a>' : '') +
      '</div>' +
      '<div class="section-label">Topics · ' + p.done + '/' + p.n + ' revised</div><div class="group">';
    d.topics.forEach(function (t) {
      var on = !!S.reviewed[t.id];
      html += '<a class="row" href="#t-' + t.id + '"><span class="tick' + (on ? ' on' : '') + '">' + ICON.check + '</span>' +
        '<div class="row-main">' + (t.code ? '<div class="code">' + esc(t.code) + '</div>' : '') +
        '<div class="row-title">' + esc(t.title) + '</div>' +
        '<div class="row-sub">' + readMins(t) + ' min read</div></div>' + ICON.chev + '</a>';
    });
    html += '</div>';
    return shell({ title: d.title, back: ['home', 'Domains'] }, html);
  }

  function viewTopic(id) {
    var T = topicIdx[id];
    if (!T) return viewHome();
    var t = T.t, d = T.d;
    S.last = t.id; save();
    var on = !!S.reviewed[t.id];
    var syl = (t.syllabus || []);
    var html = '<div class="eyebrow">' + (d.num === '0' ? 'Foundations' : 'Domain ' + esc(d.num)) + (t.code ? ' · ' + esc(t.code) : '') + ' · ' + readMins(t) + ' min</div>' +
      '<h1 class="large">' + esc(t.title) + '</h1>';
    if (syl.length) {
      html += '<details class="syl"><summary>' + ICON.flag.replace('width="24" height="24"', 'width="18" height="18"') +
        'What the syllabus asks (' + syl.length + ')' + ICON.chev + '</summary><ul>' +
        syl.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></details>';
    }
    html += '<article class="notes">' + t.notes + '</article>';
    html += '<button class="done-btn' + (on ? ' on' : '') + '" data-act="toggle-done" data-id="' + t.id + '">' +
      (on ? ICON.check + ' Revised' : 'Mark as revised') + '</button>';
    var prev = d.topics[T.i - 1], next = d.topics[T.i + 1];
    html += '<div class="pager">' +
      (prev ? '<a href="#t-' + prev.id + '"><small>‹ Previous</small><span>' + esc(prev.title) + '</span></a>' : '') +
      (next ? '<a class="next" href="#t-' + next.id + '"><small>Next ›</small><span>' + esc(next.title) + '</span></a>' : '') +
      '</div>';
    return shell({ title: t.title, back: ['d-' + d.id, d.num === '0' ? 'Foundations' : 'Domain ' + d.num] }, html);
  }

  /* ----- Flashcards ----- */
  function viewCardsHome() {
    var got = 0, again = 0;
    allCards.forEach(function (c) { if (S.cards[c.key] === 'got') got++; else if (S.cards[c.key] === 'again') again++; });
    var html = '<h1 class="large" style="margin-top:14px">Flashcards</h1>' +
      '<p class="lede">Tap a card to flip it. Swipe right or tap <b>Got it</b> if you knew it, swipe left or tap <b>Again</b> if not. Cards you miss go into the review pile.</p>' +
      '<div class="btn-row"><a class="btn" href="#cards-all">Shuffle all ' + allCards.length + '</a>' +
      (again ? '<a class="btn ghost" href="#cards-missed">Review ' + again + ' missed</a>' : '') + '</div>' +
      '<div class="section-label">By domain</div><div class="group">';
    domains.forEach(function (d) {
      var n = (d.cards || []).length;
      if (!n) return;
      var g = 0;
      d.cards.forEach(function (c, i) { if (S.cards[d.id + ':' + i] === 'got') g++; });
      html += '<a class="row" href="#cards-' + d.id + '"><span class="badge">' + esc(d.num) + '</span><div class="row-main">' +
        '<div class="row-title">' + esc(d.title) + '</div><div class="row-sub">' + g + ' of ' + n + ' known</div>' +
        '<div class="meter"><i style="width:' + Math.round((g / n) * 100) + '%"></i></div></div>' + ICON.chev + '</a>';
    });
    html += '</div>';
    return shell({ title: 'Flashcards' }, html);
  }

  function startCards(which) {
    var deck;
    if (which === 'all') deck = shuffle(allCards);
    else if (which === 'missed') deck = shuffle(allCards.filter(function (c) { return S.cards[c.key] === 'again'; }));
    else deck = shuffle(allCards.filter(function (c) { return c.d.id === which; }));
    session.cards = { which: which, deck: deck, i: 0, flipped: false, got: 0, again: 0 };
  }

  function viewCards(which) {
    if (!session.cards || session.cards.which !== which) startCards(which);
    var s = session.cards;
    var title = which === 'all' ? 'All cards' : which === 'missed' ? 'Missed cards' : (domains.filter(function (d) { return d.id === which; })[0] || {}).title;
    var html;
    if (!s.deck.length) {
      html = '<div class="empty">No cards here yet. Cards you mark <b>Again</b> show up in this pile.</div>';
    } else if (s.i >= s.deck.length) {
      html = '<div class="eyebrow">Deck finished</div><div class="score-big">' + s.got + '/' + s.deck.length + '</div>' +
        '<p class="lede">You knew ' + s.got + ' and marked ' + s.again + ' to review.</p>' +
        '<div class="btn-row"><button class="btn" data-act="cards-restart">Go again</button>' +
        (s.again ? '<a class="btn ghost" href="#cards-missed">Review missed</a>' : '') + '</div>';
    } else {
      var c = s.deck[s.i];
      html = '<div class="fc-top"><span>' + esc(title) + '</span><span>' + (s.i + 1) + ' / ' + s.deck.length + '</span></div>' +
        '<div class="meter" style="margin:0 0 12px"><i style="width:' + Math.round((s.i / s.deck.length) * 100) + '%"></i></div>' +
        '<div class="fc-wrap"><div class="fc' + (s.flipped ? ' flip' : '') + '" id="fc" data-act="flip" role="button" tabindex="0" aria-label="Flip card">' +
        '<div class="fc-face"><span class="k">' + (c.d.num === '0' ? 'Foundations' : 'Domain ' + esc(c.d.num)) + '</span><div class="q">' + c.q + '</div><div class="hint">Tap to reveal</div></div>' +
        '<div class="fc-face back"><span class="k">Answer</span><div class="a">' + c.a + '</div></div>' +
        '</div></div>' +
        '<div class="fc-actions"><button class="btn again" data-act="card-again">Again</button><button class="btn got" data-act="card-got">Got it</button></div>';
    }
    return shell({ title: 'Flashcards', back: ['cards', 'Decks'] }, html);
  }

  function sizeCard() {
    var fc = document.getElementById('fc');
    if (!fc) return;
    var faces = fc.querySelectorAll('.fc-face');
    var h = 300;
    faces.forEach(function (f) {
      f.style.position = 'relative';
      h = Math.max(h, f.scrollHeight);
      f.style.position = '';
    });
    fc.style.minHeight = Math.min(h, window.innerHeight * 0.62) + 'px';
  }

  function cardMark(val) {
    var s = session.cards;
    if (!s || s.i >= s.deck.length) return;
    var c = s.deck[s.i];
    S.cards[c.key] = val; save();
    if (val === 'got') s.got++; else s.again++;
    s.i++; s.flipped = false;
    render();
  }

  /* ----- Quiz ----- */
  function viewQuizHome() {
    var html = '<h1 class="large" style="margin-top:14px">Quiz</h1>' +
      '<p class="lede">Single best answer questions with explanations. Your best score for each set is saved on this device.</p>' +
      '<div class="btn-row"><a class="btn" href="#quiz-mix">Mixed: 20 random questions</a></div>' +
      '<div class="section-label">By domain</div><div class="group">';
    domains.forEach(function (d) {
      var n = (d.mcqs || []).length;
      if (!n) return;
      var best = S.quiz[d.id];
      html += '<a class="row" href="#quiz-' + d.id + '"><span class="badge">' + esc(d.num) + '</span><div class="row-main">' +
        '<div class="row-title">' + esc(d.title) + '</div><div class="row-sub">' + n + ' questions' +
        (best != null ? ' · best ' + best + '%' : '') + '</div></div>' + ICON.chev + '</a>';
    });
    html += '</div>';
    return shell({ title: 'Quiz' }, html);
  }

  function startQuiz(which) {
    var qs = which === 'mix' ? shuffle(allQs).slice(0, 20) : shuffle(allQs.filter(function (q) { return q.d.id === which; }));
    qs = qs.map(function (x) { return { x: x, order: shuffle(x.q.o.map(function (_, i) { return i; })) }; });
    session.quiz = { which: which, qs: qs, i: 0, chosen: null, score: 0 };
  }

  function viewQuiz(which) {
    if (!session.quiz || session.quiz.which !== which) startQuiz(which);
    var s = session.quiz;
    var html;
    if (!s.qs.length) {
      html = '<div class="empty">No questions in this set.</div>';
    } else if (s.i >= s.qs.length) {
      var pct = Math.round((s.score / s.qs.length) * 100);
      html = '<div class="eyebrow">Set complete</div><div class="score-big">' + pct + '%</div>' +
        '<p class="lede">' + s.score + ' of ' + s.qs.length + ' correct.</p>' +
        '<div class="btn-row"><button class="btn" data-act="quiz-restart">New attempt</button><a class="btn ghost" href="#quiz">All sets</a></div>';
    } else {
      var Q = s.qs[s.i], q = Q.x.q;
      html = '<div class="fc-top"><span>' + (which === 'mix' ? 'Mixed set' : 'Domain ' + esc(Q.x.d.num)) + '</span><span>' + (s.i + 1) + ' / ' + s.qs.length + ' · ' + s.score + ' correct</span></div>' +
        '<div class="meter" style="margin:0 0 4px"><i style="width:' + Math.round((s.i / s.qs.length) * 100) + '%"></i></div>' +
        '<div class="qz-q">' + q.q + '</div>';
      Q.order.forEach(function (oi, n) {
        var cls = '';
        if (s.chosen != null) {
          if (oi === q.a) cls = ' right';
          else if (oi === s.chosen) cls = ' wrong';
        }
        html += '<button class="opt' + cls + '" data-act="answer" data-o="' + oi + '"' + (s.chosen != null ? ' disabled' : '') + '>' +
          '<span class="l">' + 'ABCDE'.charAt(n) + '</span><span>' + q.o[oi] + '</span></button>';
      });
      if (s.chosen != null) {
        var ok = s.chosen === q.a;
        html += '<div class="box ' + (ok ? 'dose' : 'flag') + ' exp"><b>' + (ok ? 'Correct' : 'Not quite') + '</b>' + q.e + '</div>' +
          '<div class="btn-row"><button class="btn" data-act="quiz-next">' + (s.i + 1 < s.qs.length ? 'Next question' : 'See score') + '</button></div>';
      }
    }
    return shell({ title: 'Quiz', back: ['quiz', 'Sets'] }, html);
  }

  /* ----- Search ----- */
  function highlight(text, terms) {
    var out = esc(text);
    terms.forEach(function (term) {
      if (!term) return;
      var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }
  function searchResults(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) {
      return '<div class="section-label">Try</div><div class="chips">' +
        ['dry socket', 'MRONJ', 'avulsion', 'carbamazepine', 'Le Fort', 'odontogenic keratocyst', 'midazolam', 'Sjögren', 'adrenaline', 'coronectomy']
          .map(function (s) { return '<button class="chip" data-act="try" data-q="' + esc(s) + '">' + esc(s) + '</button>'; }).join('') + '</div>';
    }
    var terms = q.split(/\s+/).filter(Boolean);
    var hits = [];
    searchDocs.forEach(function (doc) {
      var tl = doc.title.toLowerCase(), bl = doc.body.toLowerCase();
      var score = 0, ok = true;
      terms.forEach(function (term) {
        var inT = tl.indexOf(term) >= 0, inB = bl.indexOf(term) >= 0;
        if (!inT && !inB) ok = false;
        score += (inT ? 10 : 0) + (inB ? 1 : 0);
      });
      if (ok) hits.push({ doc: doc, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    var cardHits = allCards.filter(function (c) {
      var s = strip(c.q + ' ' + c.a).toLowerCase();
      return terms.every(function (t) { return s.indexOf(t) >= 0; });
    }).slice(0, 12);

    if (!hits.length && !cardHits.length) return '<div class="empty">Nothing matches “' + esc(q) + '”. Try a shorter word or a drug or condition name.</div>';
    var html = '';
    if (hits.length) {
      html += '<div class="section-label">Topics · ' + hits.length + '</div><div class="group plain">';
      hits.slice(0, 40).forEach(function (h) {
        var b = h.doc.body, pos = b.toLowerCase().indexOf(terms[0]);
        var start = Math.max(0, pos - 60);
        var snip = (start > 0 ? '…' : '') + b.substr(start, 170) + '…';
        html += '<a class="row" href="#t-' + h.doc.t.id + '"><div class="row-main"><div class="code">' +
          (h.doc.d.num === '0' ? 'Foundations' : 'Domain ' + esc(h.doc.d.num)) + '</div><div class="row-title">' + highlight(h.doc.title, terms) + '</div>' +
          (pos >= 0 ? '<div class="snip">' + highlight(snip, terms) + '</div>' : '') + '</div>' + ICON.chev + '</a>';
      });
      html += '</div>';
    }
    if (cardHits.length) {
      html += '<div class="section-label">Flashcards · ' + cardHits.length + '</div><div class="group plain">';
      cardHits.forEach(function (c) {
        html += '<details class="row" style="display:block"><summary style="list-style:none;cursor:pointer"><div class="row-title">' + highlight(strip(c.q), terms) + '</div><div class="row-sub">Tap for answer</div></summary>' +
          '<div class="snip" style="color:var(--ink);margin-top:8px">' + c.a + '</div></details>';
      });
      html += '</div>';
    }
    return html;
  }
  function viewSearch() {
    var html = '<h1 class="large" style="margin-top:14px">Search</h1>' +
      '<div class="search">' + ICON.search.replace('width="24" height="24"', 'width="18" height="18"') +
      '<input id="q" type="search" placeholder="Condition, drug, guideline…" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="search" value="' + esc(session.query) + '"></div>' +
      '<div id="results">' + searchResults(session.query) + '</div>';
    return shell({ title: 'Search' }, html);
  }

  /* ----- Progress ----- */
  function viewProgress() {
    var o = overall();
    var got = 0, again = 0;
    allCards.forEach(function (c) { if (S.cards[c.key] === 'got') got++; else if (S.cards[c.key] === 'again') again++; });
    var html = '<h1 class="large" style="margin-top:14px">Progress</h1>' +
      '<div class="hero"><div><div class="row-title">' + o.done + ' of ' + o.n + ' topics revised</div>' +
      '<div class="row-sub">Flashcards: ' + got + ' known · ' + again + ' to review · ' + (allCards.length - got - again) + ' unseen</div></div>' + ring(o.pct) + '</div>' +
      '<div class="section-label">Domains</div><div class="group">';
    domains.forEach(function (d) {
      var p = domainProgress(d);
      var best = S.quiz[d.id];
      html += '<a class="row" href="#d-' + d.id + '"><span class="badge">' + esc(d.num) + '</span><div class="row-main">' +
        '<div class="row-title">' + esc(d.title) + '</div><div class="row-sub">' + p.done + '/' + p.n + ' topics' +
        (best != null ? ' · quiz best ' + best + '%' : '') + '</div><div class="meter"><i style="width:' + p.pct + '%"></i></div></div><span class="pct">' + p.pct + '%</span></a>';
    });
    html += '</div>';

    var sc = S.scale || 1;
    html += '<div class="section-label">Text size</div><div class="seg" role="group" aria-label="Text size">' +
      [[0.9, 'Small'], [1, 'Default'], [1.12, 'Large'], [1.25, 'Larger']].map(function (o) {
        return '<button data-act="scale" data-v="' + o[0] + '" class="' + (sc === o[0] ? 'on' : '') + '">' + o[1] + '</button>';
      }).join('') + '</div>';

    html += '<div class="section-label">Install on iPhone</div><div class="group plain"><div class="gl-item"><b>Add to Home Screen</b>' +
      '<p>Open this page in Safari, tap the Share button, then <b>Add to Home Screen</b>. It opens full screen like an app. Progress is stored on this device only.</p></div></div>';

    html += '<div class="section-label">Reset</div>';
    if (session.resetAsk) {
      html += '<div class="confirm"><b>Clear all progress?</b><p style="margin:4px 0 10px">This removes revised topics, flashcard results and quiz scores on this device.</p>' +
        '<div class="btn-row" style="margin:0"><button class="btn danger" data-act="reset-yes">Clear progress</button><button class="btn ghost" data-act="reset-no">Cancel</button></div></div>';
    } else {
      html += '<div class="btn-row" style="margin-top:0"><button class="btn ghost" data-act="reset-ask">Clear progress…</button></div>';
    }
    return shell({ title: 'Progress' }, html);
  }

  /* ----- Guidelines ----- */
  function viewGuides() {
    var html = '<div class="eyebrow">Cited in the syllabus</div><h1 class="large">Guidelines library</h1>' +
      '<p class="lede">Every guideline, classification and standard the syllabus lists, grouped by domain, with the points most often examined.</p>';
    (OS.guidelines || []).forEach(function (g) {
      html += '<div class="section-label">' + esc(g.group) + '</div><div class="group plain">';
      g.items.forEach(function (it) {
        html += '<div class="gl-item"><b>' + esc(it.t) + '</b>' + (it.src ? '<span class="code">' + esc(it.src) + '</span>' : '') +
          (it.k ? '<p>' + it.k + '</p>' : '') + '</div>';
      });
      html += '</div>';
    });
    return shell({ title: 'Guidelines', back: ['home', 'Domains'] }, html);
  }

  /* ---------- Render ---------- */
  function render() {
    var prev = current;
    scrollMemory[prev] = window.scrollY;
    current = route();
    var r = current, html;
    if (r === 'home') html = viewHome();
    else if (r.indexOf('d-') === 0) html = viewDomain(r.slice(2));
    else if (r.indexOf('t-') === 0) html = viewTopic(r.slice(2));
    else if (r === 'cards') html = viewCardsHome();
    else if (r.indexOf('cards-') === 0) html = viewCards(r.slice(6));
    else if (r === 'quiz') html = viewQuizHome();
    else if (r.indexOf('quiz-') === 0) html = viewQuiz(r.slice(5));
    else if (r === 'search') html = viewSearch();
    else if (r === 'progress') html = viewProgress();
    else if (r === 'guides') html = viewGuides();
    else html = viewHome();
    app.innerHTML = html;
    sizeCard();
    if (prev !== current) window.scrollTo(0, scrollMemory[current] || 0);
    onScroll();
    var nt = document.querySelector('.nav-title');
    if (nt) document.title = (nt.textContent && current !== 'home' ? nt.textContent + ' · ' : '') + 'Oral Surgery Revision';
  }
  function renderSoft() {
    var y = window.scrollY;
    if (current === 'progress') app.innerHTML = viewProgress();
    window.scrollTo(0, y);
  }

  function onScroll() {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('hashchange', render);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', sizeCard);

  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-go],[data-act]');
    if (!el) return;
    if (el.hasAttribute('data-go')) { go(el.getAttribute('data-go')); return; }
    var act = el.getAttribute('data-act');
    if (act === 'toggle-done') {
      var id = el.getAttribute('data-id');
      if (S.reviewed[id]) delete S.reviewed[id]; else S.reviewed[id] = Date.now();
      save();
      var on = !!S.reviewed[id];
      el.classList.toggle('on', on);
      el.innerHTML = on ? ICON.check + ' Revised' : 'Mark as revised';
    } else if (act === 'flip') {
      session.cards.flipped = !session.cards.flipped;
      document.getElementById('fc').classList.toggle('flip', session.cards.flipped);
    } else if (act === 'card-got') cardMark('got');
    else if (act === 'card-again') cardMark('again');
    else if (act === 'cards-restart') { startCards(session.cards.which); render(); }
    else if (act === 'answer') {
      var s = session.quiz;
      if (s.chosen != null) return;
      s.chosen = +el.getAttribute('data-o');
      if (s.chosen === s.qs[s.i].x.q.a) s.score++;
      var y = window.scrollY; render(); window.scrollTo(0, y);
    } else if (act === 'quiz-next') {
      var q = session.quiz;
      q.i++; q.chosen = null;
      if (q.i >= q.qs.length) {
        var pct = Math.round((q.score / q.qs.length) * 100);
        if (q.which !== 'mix' && (S.quiz[q.which] == null || pct > S.quiz[q.which])) { S.quiz[q.which] = pct; save(); }
      }
      render(); window.scrollTo(0, 0);
    } else if (act === 'quiz-restart') { startQuiz(session.quiz.which); render(); }
    else if (act === 'try') {
      session.query = el.getAttribute('data-q');
      var inp = document.getElementById('q');
      inp.value = session.query;
      document.getElementById('results').innerHTML = searchResults(session.query);
    } else if (act === 'scale') {
      S.scale = +el.getAttribute('data-v'); save(); applyScale(); renderSoft();
    } else if (act === 'reset-ask') { session.resetAsk = true; renderSoft(); }
    else if (act === 'reset-no') { session.resetAsk = false; renderSoft(); }
    else if (act === 'reset-yes') {
      S.reviewed = {}; S.cards = {}; S.quiz = {}; S.last = null; save();
      session.resetAsk = false; session.cards = null; session.quiz = null; renderSoft();
    }
  });

  app.addEventListener('keydown', function (e) {
    if (e.target.id === 'fc' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.target.click(); }
  });

  var qTimer;
  app.addEventListener('input', function (e) {
    if (e.target.id !== 'q') return;
    session.query = e.target.value;
    clearTimeout(qTimer);
    qTimer = setTimeout(function () {
      var r = document.getElementById('results');
      if (r) r.innerHTML = searchResults(session.query);
    }, 120);
  });

  /* Swipe on flashcards */
  var sx = null, sy = null;
  app.addEventListener('touchstart', function (e) {
    if (!e.target.closest('#fc')) return;
    sx = e.touches[0].clientX; sy = e.touches[0].clientY;
  }, { passive: true });
  app.addEventListener('touchend', function (e) {
    if (sx == null) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    sx = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      e.preventDefault();
      cardMark(dx > 0 ? 'got' : 'again');
    }
  });

  render();

  if ('serviceWorker' in navigator && location.protocol === 'https:' && document.documentElement.hasAttribute('data-pwa')) {
    try { navigator.serviceWorker.register('sw.js').catch(function () {}); } catch (e) {}
  }
})();
