/* New Era Mebel — связь сайта с базой (Supabase): товары, корзина, заказы, кабинет. */
(function () {
  'use strict';
  var URL = 'https://kdadnxcvbrazosyoofcw.supabase.co';
  var KEY = 'sb_publishable_0Qd-ClqLBQ2ScIxdFbxc_A_vQZya5Zc';
  var FALLBACK = [{"id": "nova", "name": "Шкаф-купе «Нова»", "category": "Шкафы-купе", "price": 185000, "sizes": [{"label": "120 см", "price": 149000}, {"label": "140 см", "price": 167000}, {"label": "160 см", "price": 185000}, {"label": "180 см", "price": 199000}, {"label": "200 см", "price": 219000}], "size_label": "Ширина", "default_size": "160 см", "width_cm": 160, "size_text": "160 × 220 × 60 см", "dims": "высота 220 · глубина 60 см", "colors": ["walnut", "white", "graphite"], "images": {"walnut": ["img/nova_walnut.webp", "img/nova_side.webp"], "white": ["img/nova_white.webp"], "graphite": ["img/nova_graphite.webp"]}, "image": "img/nova_walnut.webp", "has_mirror": true, "badge": "Хит", "in_stock": true, "lead": "Двухдверный шкаф-купе с зеркалом. Бесшумные роликовые механизмы, алюминиевый профиль, внутри — штанга и полки.", "description": "«Нова» — вместительный шкаф-купе для спальни или прихожей. Двери двигаются плавно и тихо, зеркало визуально расширяет комнату. Внутри: две секции, штанга для одежды на всю ширину отсека и регулируемые полки. Корпус из ЛДСП 16 мм с кромкой ПВХ.", "sort": 10, "active": true}, {"id": "loft", "name": "Шкаф-купе «Лофт» 3-дверный", "category": "Шкафы-купе", "price": 265000, "sizes": [{"label": "200 см", "price": 239000}, {"label": "240 см", "price": 265000}, {"label": "270 см", "price": 289000}], "size_label": "Ширина", "default_size": "240 см", "width_cm": 240, "size_text": "240 × 240 × 60 см", "dims": "высота 240 · глубина 60 см", "colors": ["oak", "white"], "images": {}, "image": "img/loft.webp", "has_mirror": false, "badge": "Новинка", "in_stock": false, "lead": "Трёхдверный шкаф-купе с зеркалом по центру — вмещает гардероб всей семьи.", "description": "«Лофт» — большой шкаф-купе в светлом дубе. Центральная дверь с зеркалом, боковые — с тонкой чёрной вставкой. Внутри: три секции, две штанги, полки и место под чемоданы сверху.", "sort": 20, "active": true}, {"id": "classic", "name": "Шкаф «Классик» 4-дверный", "category": "Распашные шкафы", "price": 149000, "sizes": [{"label": "120 см", "price": 119000}, {"label": "160 см", "price": 149000}, {"label": "200 см", "price": 179000}], "size_label": "Ширина", "default_size": "160 см", "width_cm": 160, "size_text": "160 × 210 × 56 см", "dims": "высота 210 · глубина 56 см", "colors": ["white", "beige"], "images": {}, "image": "img/classic.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Распашной шкаф на четыре двери с двумя ящиками внизу.", "description": "«Классик» — простой и надёжный распашной шкаф. Двери на петлях с доводчиками, длинные ручки, два вместительных ящика для белья внизу.", "sort": 30, "active": true}, {"id": "skandi", "name": "Шкаф «Сканди» 2-дверный", "category": "Распашные шкафы", "price": 89000, "sizes": [{"label": "90 см", "price": 89000}, {"label": "120 см", "price": 109000}], "size_label": "Ширина", "default_size": "90 см", "width_cm": 90, "size_text": "90 × 200 × 52 см", "dims": "высота 200 · глубина 52 см", "colors": ["beige", "sage", "white"], "images": {}, "image": "img/skandi.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Компактный шкаф на деревянных ножках — для спальни или детской.", "description": "«Сканди» — небольшой шкаф с латунными кнопками-ручками и ящиком внизу. Ножки поднимают его над полом, так проще убирать.", "sort": 40, "active": true}, {"id": "port", "name": "Прихожая «Порт»", "category": "Прихожие", "price": 128000, "sizes": [], "size_label": "Размер", "default_size": null, "width_cm": 180, "size_text": "180 × 200 × 40 см", "dims": "ширина 180 · высота 200 · глубина 40 см", "colors": ["walnut", "oak"], "images": {}, "image": "img/port.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Прихожая: шкаф, вешалка с крючками, зеркало и банкетка для обуви.", "description": "«Порт» собирает всё, что нужно у входа: высокий шкаф для верхней одежды, панель с крючками и полкой, зеркало и банкетку с ящиками под обувь.", "sort": 50, "active": true}, {"id": "liniya", "name": "Комод «Линия»", "category": "Комоды и тумбы", "price": 64000, "sizes": [{"label": "80 см", "price": 64000}, {"label": "100 см", "price": 76000}], "size_label": "Ширина", "default_size": "80 см", "width_cm": 80, "size_text": "80 × 90 × 45 см", "dims": "высота 90 · глубина 45 см", "colors": ["graphite", "white", "oak"], "images": {}, "image": "img/liniya.webp", "has_mirror": false, "badge": "Новинка", "in_stock": true, "lead": "Комод на четыре ящика с латунными ручками.", "description": "«Линия» — комод на металлических ножках. Ящики на шариковых направляющих выдвигаются полностью и закрываются мягко.", "sort": 60, "active": true}, {"id": "grid", "name": "Стеллаж «Грид»", "category": "Стеллажи", "price": 58000, "sizes": [{"label": "80 см", "price": 42000}, {"label": "120 см", "price": 58000}, {"label": "160 см", "price": 74000}], "size_label": "Ширина", "default_size": "120 см", "width_cm": 120, "size_text": "120 × 180 × 35 см", "dims": "высота 180 · глубина 35 см", "colors": ["oak", "white"], "images": {}, "image": "img/grid.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Открытый стеллаж-решётка с закрытыми ящиками.", "description": "«Грид» — стеллаж для книг, коробок и декора. Можно поставить к стене или использовать как перегородку в комнате.", "sort": 70, "active": true}, {"id": "flat", "name": "ТВ-тумба «Флэт»", "category": "ТВ-тумбы", "price": 72000, "sizes": [{"label": "140 см", "price": 62000}, {"label": "180 см", "price": 72000}], "size_label": "Ширина", "default_size": "180 см", "width_cm": 180, "size_text": "180 × 57 × 40 см", "dims": "высота 57 · глубина 40 см", "colors": ["walnut", "white"], "images": {}, "image": "img/flat.webp", "has_mirror": false, "badge": "", "in_stock": false, "lead": "ТВ-тумба на ножках с открытой нишей по центру.", "description": "«Флэт» — низкая тумба под телевизор. Два закрытых отсека по бокам и ниша для приставки или колонки.", "sort": 80, "active": true}, {"id": "son", "name": "Кровать «Сон»", "category": "Кровати", "price": 139000, "sizes": [{"label": "140 × 200", "price": 125000}, {"label": "160 × 200", "price": 139000}, {"label": "180 × 200", "price": 155000}], "size_label": "Спальное место", "default_size": "160 × 200", "width_cm": 172, "size_text": "172 × 101 × 212 см", "dims": "основание с ламелями, матрас в комплект не входит", "colors": ["walnut", "oak", "white"], "images": {}, "image": "img/son.webp", "has_mirror": false, "badge": "", "in_stock": false, "lead": "Кровать с изголовьем из ЛДСП — без мягкой обивки, легко ухаживать.", "description": "«Сон» — кровать с высоким изголовьем и широкой рамой. Под основанием можно хранить вещи.", "sort": 90, "active": true}, {"id": "student", "name": "Стол письменный «Студент»", "category": "Столы", "price": 54000, "sizes": [{"label": "100 см", "price": 48000}, {"label": "120 см", "price": 54000}], "size_label": "Ширина", "default_size": "120 см", "width_cm": 120, "size_text": "120 × 75 × 60 см", "dims": "высота 75 · глубина 60 см", "colors": ["white", "oak"], "images": {}, "image": "img/student.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Письменный стол с тумбой на три ящика.", "description": "«Студент» — рабочий стол для дома и учёбы. Ящики справа, место для ног слева.", "sort": 100, "active": true}, {"id": "mini", "name": "Тумба прикроватная «Мини»", "category": "Комоды и тумбы", "price": 24000, "sizes": [], "size_label": "Размер", "default_size": null, "width_cm": 45, "size_text": "45 × 50 × 40 см", "dims": "ширина 45 · высота 50 · глубина 40 см", "colors": ["sage", "white", "oak"], "images": {}, "image": "img/mini.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Прикроватная тумба с ящиком и открытой полкой.", "description": "«Мини» — тумба на деревянных ножках. В ящике — мелочи, на полке — книги.", "sort": 110, "active": true}, {"id": "nova-g", "name": "Шкаф-купе «Нова» графит", "category": "Шкафы-купе", "price": 199000, "sizes": [{"label": "120 см", "price": 149000}, {"label": "140 см", "price": 167000}, {"label": "160 см", "price": 185000}, {"label": "180 см", "price": 199000}, {"label": "200 см", "price": 219000}], "size_label": "Ширина", "default_size": "180 см", "width_cm": 180, "size_text": "180 × 220 × 60 см", "dims": "высота 220 · глубина 60 см", "colors": ["graphite", "walnut", "white"], "images": {"walnut": ["img/nova_walnut.webp", "img/nova_side.webp"], "white": ["img/nova_white.webp"], "graphite": ["img/nova_graphite.webp"]}, "image": "img/nova_graphite.webp", "has_mirror": true, "badge": "", "in_stock": true, "lead": "Двухдверный шкаф-купе с зеркалом. Бесшумные роликовые механизмы, алюминиевый профиль, внутри — штанга и полки.", "description": "«Нова» — вместительный шкаф-купе для спальни или прихожей. Двери двигаются плавно и тихо, зеркало визуально расширяет комнату. Внутри: две секции, штанга для одежды на всю ширину отсека и регулируемые полки. Корпус из ЛДСП 16 мм с кромкой ПВХ.", "sort": 120, "active": true}];

  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { if (v === null || v === undefined) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var subs = [];
  var emitT = 0;
  function emit() {
    if (emitT) return;
    emitT = setTimeout(function () { emitT = 0; subs.slice().forEach(function (f) { try { f(); } catch (e) { console.error(e); } }); }, 0);
  }
  function on(f) { subs.push(f); return function () { subs = subs.filter(function (x) { return x !== f; }); }; }

  var SW = {
    walnut: { name: 'Орех', hex: '#5A3F2E' }, white: { name: 'Белый', hex: '#F1EEE9' }, graphite: { name: 'Графит', hex: '#3B3B3D' },
    oak: { name: 'Дуб', hex: '#C9A57B' }, beige: { name: 'Кашемир', hex: '#D8CDBC' }, sage: { name: 'Шалфей', hex: '#9AA38E' }
  };
  var CATS = ['Шкафы-купе', 'Распашные шкафы', 'Прихожие', 'Комоды и тумбы', 'Стеллажи', 'ТВ-тумбы', 'Кровати', 'Столы'];
  var CAT_SLUG = { 'Шкафы-купе': 'kupe', 'Распашные шкафы': 'raspashnye', 'Прихожие': 'prihozhie', 'Комоды и тумбы': 'komody', 'Стеллажи': 'stellazhi', 'ТВ-тумбы': 'tv', 'Кровати': 'krovati', 'Столы': 'stoly' };
  var MIRRORS = [{ id: 'one', label: '1 зеркало' }, { id: 'two', label: '2 зеркала' }, { id: 'none', label: 'Без зеркал' }];
  var ORDER_FLOW = [
    { id: 'new', label: 'Новый' }, { id: 'accepted', label: 'Принят' }, { id: 'production', label: 'Изготовление' },
    { id: 'delivery', label: 'Доставка и сборка' }, { id: 'done', label: 'Готово' }
  ];
  var MEASURE_FLOW = [
    { id: 'new', label: 'Новая заявка' }, { id: 'scheduled', label: 'Замер назначен' }, { id: 'measured', label: 'Замер сделан' },
    { id: 'project', label: 'Проект отправлен' }, { id: 'contract', label: 'Договор' }
  ];

  function fmt(n) { n = Math.round(Number(n) || 0); return n.toLocaleString('ru-RU').replace(/ | /g, ' ') + ' ₸'; }
  function plural(n, a, b, c) { var x = n % 10, y = n % 100; return x === 1 && y !== 11 ? a : x >= 2 && x <= 4 && (y < 12 || y > 14) ? b : c; }
  function digits(s) { return String(s || '').replace(/\D/g, ''); }
  function normPhone(s) {
    var d = digits(s);
    if (d.length === 11 && (d[0] === '7' || d[0] === '8')) return '+7' + d.slice(1);
    if (d.length === 10) return '+7' + d;
    return null;
  }
  function prettyPhone(s) {
    var p = normPhone(s); if (!p) return s || '';
    return '+7 ' + p.slice(2, 5) + ' ' + p.slice(5, 8) + ' ' + p.slice(8, 10) + ' ' + p.slice(10, 12);
  }
  function waLink(phone, text) { var p = normPhone(phone); return p ? 'https://wa.me/' + p.slice(1) + (text ? '?text=' + encodeURIComponent(text) : '') : ''; }
  function telLink(phone) { var p = normPhone(phone); return p ? 'tel:' + p : ''; }

  // ---------- HTTP ----------
  function api(path, opts) {
    opts = opts || {};
    var go = function (token) {
      var h = { apikey: KEY };
      if (opts.body !== undefined && !opts.raw) h['Content-Type'] = 'application/json';
      if (token) h.Authorization = 'Bearer ' + token;
      var extra = opts.headers || {};
      for (var k in extra) h[k] = extra[k];
      return fetch(URL + path, {
        method: opts.method || 'GET', headers: h,
        body: opts.body === undefined ? undefined : (opts.raw ? opts.body : JSON.stringify(opts.body))
      }).catch(function () { var e = new Error('Нет связи с сервером. Проверьте интернет и попробуйте ещё раз.'); e.status = 0; throw e; })
        .then(function (r) {
          return r.text().then(function (t) {
            var data = null; try { data = t ? JSON.parse(t) : null; } catch (e) { data = t; }
            if (!r.ok) {
              var msg = (data && (data.message || data.msg || data.error_description || data.error)) || ('Ошибка ' + r.status);
              if (/JWT|token/i.test(msg) && r.status === 401) msg = 'Войдите заново';
              var err = new Error(msg); err.status = r.status; err.data = data; throw err;
            }
            return data;
          });
        });
    };
    if (opts.auth) return auth.token().then(function (t) { if (!t) { var e = new Error('Войдите в кабинет'); e.status = 401; throw e; } return go(t); });
    return go(null);
  }
  function rpc(name, args) { return api('/rest/v1/rpc/' + name, { method: 'POST', body: args || {} }); }

  // ---------- Данные сайта ----------
  var S = { products: null, settings: null, reviews: null, fresh: false, error: null };
  var cached = LS.get('nem-cache-v1', null);
  if (cached && cached.products) { S.products = cached.products; S.settings = cached.settings; }
  var loadP = null;
  function load(force) {
    if (loadP && !force) return loadP;
    loadP = Promise.all([
      api('/rest/v1/products?select=*&active=eq.true&order=sort.asc,name.asc'),
      api('/rest/v1/site_settings?select=*&id=eq.1')
    ]).then(function (r) {
      S.products = r[0] || []; S.settings = (r[1] && r[1][0]) || null; S.fresh = true; S.error = null;
      LS.set('nem-cache-v1', { products: S.products, settings: S.settings, at: Date.now() });
      emit();
    }).catch(function (e) {
      S.error = e;
      if (!S.products) S.products = FALLBACK;
      emit();
      loadP = null;
    });
    setTimeout(function () { if (!S.products) { S.products = FALLBACK; emit(); } }, 7000);
    return loadP;
  }
  function product(id) { var l = S.products || []; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function settings() {
    var st = S.settings || {};
    return {
      phone: st.phone || '', whatsapp: st.whatsapp || st.phone || '', address: st.address || '', hours: st.hours || '',
      gis_url: st.gis_url || '', instagram: st.instagram || '', warranty: st.warranty || '', order_days: st.order_days || '',
      kitchen: st.kitchen || { facade: { ldsp: 120000, film: 160000, enamel: 220000 }, top: { ldsp: 0, stone: 45000 }, extra: { tall_pct: 12, led: 25000 } },
      mirror: st.mirror || { one: 0, two: 18000, none: -6000 }
    };
  }
  function defSize(p) { return p.default_size || (p.sizes && p.sizes[0] && p.sizes[0].label) || null; }
  function unitPrice(p, size, mirror) {
    var s = null, sz = p.sizes || [];
    for (var i = 0; i < sz.length; i++) if (sz[i].label === size) s = sz[i];
    var u = s ? s.price : p.price;
    if (p.has_mirror) u += Number(settings().mirror[mirror || 'one']) || 0;
    return Math.max(0, u);
  }
  function imagesFor(p, color) {
    var im = p.images || {};
    var list = (color && im[color] && im[color].length ? im[color] : null) || (im.all && im.all.length ? im.all : null);
    if (!list) { list = []; if (p.image) list.push(p.image); }
    if (!list.length) list = ['img/nova_walnut.webp'];
    return list;
  }
  function minPrice(p) { return Math.min.apply(null, [p.price].concat((p.sizes || []).map(function (z) { return z.price; }))); }
  function priceFrom(p) { return ((p.sizes || []).length > 1 ? 'от ' : '') + fmt(minPrice(p)); }
  function widthText(p) {
    var nums = (p.sizes || []).map(function (z) { var m = String(z.label || '').match(/^\s*(\d{2,3})/); return m ? Number(m[1]) : null; }).filter(function (x) { return x; });
    if (nums.length > 1) { var a = Math.min.apply(null, nums), b = Math.max.apply(null, nums); if (a !== b) return 'ширина ' + a + '–' + b + ' см'; }
    var w = nums[0] || p.width_cm; return w ? 'ширина ' + w + ' см' : '';
  }
  function splitName(name) { var m = String(name || '').match(/^(.*?)\s*(«.*)$/); return m ? [m[1], m[2]] : [name, '']; }
  function loadReviews() {
    return api('/rest/v1/reviews?select=name,what,rating,text,created_at&approved=eq.true&order=created_at.desc&limit=12')
      .then(function (r) { S.reviews = r || []; emit(); }).catch(function () { S.reviews = S.reviews || []; emit(); });
  }

  // ---------- Корзина и избранное ----------
  function cartItems() { return LS.get('nem-cart', []); }
  function keyOf(it) { return [it.id, it.size || '', it.color || '', it.mirror || ''].join('|'); }
  var cart = {
    items: cartItems,
    key: keyOf,
    add: function (it) {
      var a = cartItems(), k = keyOf(it), f = null;
      for (var i = 0; i < a.length; i++) if (keyOf(a[i]) === k) f = a[i];
      if (f) f.qty = Math.min(9, (f.qty || 1) + (it.qty || 1));
      else a.push({ id: it.id, size: it.size || null, color: it.color || null, mirror: it.mirror || null, qty: Math.max(1, Math.min(9, it.qty || 1)) });
      LS.set('nem-cart', a); emit();
    },
    setQty: function (k, q) {
      var a = cartItems().map(function (x) { if (keyOf(x) === k) x.qty = Math.max(1, Math.min(9, q)); return x; });
      LS.set('nem-cart', a); emit();
    },
    remove: function (k) { LS.set('nem-cart', cartItems().filter(function (x) { return keyOf(x) !== k; })); emit(); },
    clear: function () { LS.set('nem-cart', []); emit(); },
    count: function () { return cartItems().reduce(function (s, x) { return s + (x.qty || 1); }, 0); },
    has: function (id) { return cartItems().some(function (x) { return x.id === id; }); },
    lines: function () {
      var out = [];
      cartItems().forEach(function (x) {
        var p = product(x.id); if (!p) return;
        var u = unitPrice(p, x.size, x.mirror);
        var meta = [];
        if (x.size) meta.push(x.size);
        if (x.color && SW[x.color]) meta.push(SW[x.color].name.toLowerCase());
        if (p.has_mirror) { var m = MIRRORS.filter(function (z) { return z.id === (x.mirror || 'one'); })[0]; if (m) meta.push(m.label.toLowerCase()); }
        out.push({ key: keyOf(x), id: x.id, p: p, name: p.name, img: imagesFor(p, x.color)[0], meta: meta.join(' · '), qty: x.qty || 1, unit: u, sum: u * (x.qty || 1), size: x.size, color: x.color, mirror: x.mirror });
      });
      return out;
    },
    total: function () { return cart.lines().reduce(function (s, l) { return s + l.sum; }, 0); }
  };
  var fav = {
    list: function () { return LS.get('nem-fav', []); },
    has: function (id) { return fav.list().indexOf(id) >= 0; },
    toggle: function (id) { var l = fav.list(); var i = l.indexOf(id); if (i >= 0) l.splice(i, 1); else l.push(id); LS.set('nem-fav', l); emit(); }
  };
  window.addEventListener('storage', function (e) { if (e.key && /^nem-(cart|fav)/.test(e.key)) emit(); });

  // ---------- Заказы клиента ----------
  var me = {
    get: function () { return LS.get('nem-me', {}); },
    set: function (p) { var m = me.get(); for (var k in p) if (p[k]) m[k] = p[k]; LS.set('nem-me', m); }
  };
  function rememberOrder(id, phone) {
    var l = LS.get('nem-orders', []).filter(function (x) { return x.id !== id; });
    l.unshift({ id: id, phone: phone, at: Date.now() }); LS.set('nem-orders', l.slice(0, 10));
  }
  function placeOrder(o) {
    var items = (o.items || cartItems()).map(function (x) { return { id: x.id, size: x.size, color: x.color, mirror: x.mirror, qty: x.qty || 1 }; });
    return rpc('place_order', {
      p_kind: o.kind || 'cart', p_name: o.name || '', p_phone: o.phone || '', p_address: o.address || '',
      p_payment: o.payment || '', p_comment: o.comment || '', p_items: items
    }).then(function (r) {
      me.set({ name: o.name, phone: o.phone, address: o.address });
      rememberOrder(r.id, normPhone(o.phone));
      return r;
    });
  }
  function bookMeasure(o) {
    return rpc('book_measurement', {
      p_name: o.name || '', p_phone: o.phone || '', p_address: o.address || '', p_kind: o.kind || 'kitchen',
      p_date: o.date || null, p_time: o.time || '', p_calc: o.calc || null, p_comment: o.comment || ''
    }).then(function (r) { me.set({ name: o.name, phone: o.phone, address: o.address }); return r; });
  }
  function orderStatus(id, phone) { return rpc('order_status', { p_id: Number(digits(id)) || 0, p_phone: phone || '' }); }
  function submitReview(o) { return rpc('submit_review', { p_name: o.name || '', p_what: o.what || '', p_rating: o.rating || 5, p_text: o.text || '' }); }

  // ---------- Вход для брата ----------
  var auth = {
    s: LS.get('nem-session', null),
    pending: null,
    save: function (d) {
      auth.s = d && d.access_token ? {
        access_token: d.access_token, refresh_token: d.refresh_token,
        expires_at: d.expires_at || (Math.floor(Date.now() / 1000) + (d.expires_in || 3600)),
        user: d.user ? { id: d.user.id, email: d.user.email } : (auth.s && auth.s.user)
      } : null;
      LS.set('nem-session', auth.s); emit();
    },
    signedIn: function () { return !!auth.s; },
    email: function () { return auth.s && auth.s.user ? auth.s.user.email : ''; },
    signIn: function (email, password) {
      return api('/auth/v1/token?grant_type=password', { method: 'POST', body: { email: String(email || '').trim(), password: password || '' } })
        .then(function (d) { auth.save(d); return d; })
        .catch(function (e) { if (e.status === 400) e.message = 'Неверный e-mail или пароль'; throw e; });
    },
    token: function () {
      var s = auth.s;
      if (!s) return Promise.resolve(null);
      if (s.expires_at - 90 > Date.now() / 1000) return Promise.resolve(s.access_token);
      if (auth.pending) return auth.pending;
      auth.pending = api('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: s.refresh_token } })
        .then(function (d) { auth.save(d); auth.pending = null; return d.access_token; })
        .catch(function (e) { auth.pending = null; if (e.status && e.status < 500) auth.save(null); return null; });
      return auth.pending;
    },
    signOut: function () {
      var t = auth.s && auth.s.access_token;
      if (t) fetch(URL + '/auth/v1/logout', { method: 'POST', headers: { apikey: KEY, Authorization: 'Bearer ' + t } }).catch(function () {});
      auth.save(null);
    },
    setup: function (o) {
      return fetch(URL + '/functions/v1/admin-auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
        .catch(function () { throw new Error('Нет связи с сервером'); })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || !j.ok) throw new Error(j.error || 'Не получилось'); return j; }); });
    }
  };

  var admin = {
    me: function () { return api('/rest/v1/admins?select=name,user_id', { auth: true }).then(function (r) { return r && r[0] ? r[0] : null; }); },
    setName: function (uid, name) { return api('/rest/v1/admins?user_id=eq.' + uid, { method: 'PATCH', auth: true, body: { name: name } }); },
    list: function (table, q) { return api('/rest/v1/' + table + '?' + (q || 'select=*&order=created_at.desc&limit=500'), { auth: true }); },
    update: function (table, id, patch) {
      return api('/rest/v1/' + table + '?id=eq.' + encodeURIComponent(id), { method: 'PATCH', auth: true, body: patch, headers: { Prefer: 'return=representation' } })
        .then(function (r) { return r && r[0]; });
    },
    insert: function (table, row) { return api('/rest/v1/' + table, { method: 'POST', auth: true, body: row, headers: { Prefer: 'return=representation' } }).then(function (r) { return r && r[0]; }); },
    remove: function (table, id) { return api('/rest/v1/' + table + '?id=eq.' + encodeURIComponent(id), { method: 'DELETE', auth: true }); },
    saveSettings: function (patch) { return api('/rest/v1/site_settings?id=eq.1', { method: 'PATCH', auth: true, body: patch, headers: { Prefer: 'return=representation' } }).then(function (r) { S.settings = r && r[0] || S.settings; LS.set('nem-cache-v1', null); emit(); return S.settings; }); },
    upload: function (blob, path) {
      return auth.token().then(function (t) {
        if (!t) throw new Error('Войдите в кабинет');
        return fetch(URL + '/storage/v1/object/products/' + path, {
          method: 'POST', headers: { apikey: KEY, Authorization: 'Bearer ' + t, 'Content-Type': blob.type || 'image/jpeg', 'x-upsert': 'true', 'cache-control': 'max-age=31536000' }, body: blob
        }).catch(function () { throw new Error('Нет связи с сервером'); }).then(function (r) {
          if (!r.ok) return r.text().then(function (x) { throw new Error('Фото не загрузилось: ' + x.slice(0, 120)); });
          return URL + '/storage/v1/object/public/products/' + path;
        });
      });
    },
    removeFile: function (url) {
      var pre = URL + '/storage/v1/object/public/products/';
      if (String(url).indexOf(pre) !== 0) return Promise.resolve();
      return api('/storage/v1/object/products/' + String(url).slice(pre.length), { method: 'DELETE', auth: true }).catch(function () {});
    }
  };

  function resizeImage(file, max) {
    max = max || 1400;
    return new Promise(function (res, rej) {
      var url = (window.URL || window.webkitURL).createObjectURL(file);
      var im = new Image();
      im.onload = function () {
        var sc = Math.min(1, max / Math.max(im.naturalWidth, im.naturalHeight));
        var w = Math.round(im.naturalWidth * sc), h = Math.round(im.naturalHeight * sc);
        var c = document.createElement('canvas'); c.width = w; c.height = h;
        c.getContext('2d').drawImage(im, 0, 0, w, h);
        (window.URL || window.webkitURL).revokeObjectURL(url);
        var done = function (b) { if (b) res(b); else rej(new Error('Не удалось обработать фото')); };
        c.toBlob(function (b) {
          if (b && b.type === 'image/webp') return done(b);
          c.toBlob(done, 'image/jpeg', 0.86);
        }, 'image/webp', 0.86);
      };
      im.onerror = function () { rej(new Error('Это не похоже на фото')); };
      im.src = url;
    });
  }

  function translit(s) {
    var m = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya', ә: 'a', ғ: 'g', қ: 'k', ң: 'n', ө: 'o', ұ: 'u', ү: 'u', һ: 'h', і: 'i' };
    return String(s || '').toLowerCase().split('').map(function (c) { return m[c] !== undefined ? m[c] : c; }).join('')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 36) || 'tovar';
  }

  function beep() {
    try {
      var A = window.AudioContext || window.webkitAudioContext; if (!A) return;
      var ctx = beep.ctx || (beep.ctx = new A());
      [0, 0.18].forEach(function (d, i) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = i ? 1046 : 784;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + d);
        g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + d + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d + 0.3);
        o.connect(g); g.connect(ctx.destination); o.start(ctx.currentTime + d); o.stop(ctx.currentTime + d + 0.32);
      });
    } catch (e) {}
  }

  window.NEM_PUSH_KEY = 'BPXUqHpA1H9r7r2vE_ZrxZrPvdteP7z8JeoXMxKS4NxgAl98zxzgQ40Yocvx5usOOdSTrsqGqWkVnWvmU4pBb-g';
  function testPush() {
    return auth.token().then(function (t) {
      if (!t) throw new Error('Войдите в кабинет');
      return fetch(URL + '/functions/v1/notify', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + t }, body: JSON.stringify({ test: true }) })
        .then(function (r) { return r.json().catch(function () { return {}; }); });
    });
  }
  window.NEM = {
    URL: URL, KEY: KEY, SW: SW, CATS: CATS, CAT_SLUG: CAT_SLUG, MIRRORS: MIRRORS, ORDER_FLOW: ORDER_FLOW, MEASURE_FLOW: MEASURE_FLOW,
    state: S, on: on, emit: emit, load: load, product: product, settings: settings, defSize: defSize, unitPrice: unitPrice,
    imagesFor: imagesFor, splitName: splitName, minPrice: minPrice, priceFrom: priceFrom, widthText: widthText, loadReviews: loadReviews,
    cart: cart, fav: fav, me: me, orders: function () { return LS.get('nem-orders', []); },
    placeOrder: placeOrder, bookMeasure: bookMeasure, orderStatus: orderStatus, submitReview: submitReview,
    auth: auth, admin: admin, api: api, testPush: testPush, rpc: rpc, resizeImage: resizeImage, translit: translit, beep: beep,
    fmt: fmt, plural: plural, digits: digits, normPhone: normPhone, prettyPhone: prettyPhone, waLink: waLink, telLink: telLink, LS: LS
  };
})();
