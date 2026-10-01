/* New Era Mebel — связь сайта с базой (Supabase): товары, корзина, заказы, кабинет. */
(function () {
  'use strict';
  var URL = 'https://kdadnxcvbrazosyoofcw.supabase.co';
  var KEY = 'sb_publishable_0Qd-ClqLBQ2ScIxdFbxc_A_vQZya5Zc';
  var FALLBACK = [{"id": "nova", "name": "Шкаф-купе «Нова»", "category": "Шкафы-купе", "price": 185000, "sizes": [{"label": "120 см", "price": 149000}, {"label": "140 см", "price": 167000}, {"label": "160 см", "price": 185000}, {"label": "180 см", "price": 199000}, {"label": "200 см", "price": 219000}], "size_label": "Ширина", "default_size": "160 см", "width_cm": 160, "size_text": "160 × 220 × 60 см", "dims": "высота 220 · глубина 60 см", "colors": ["walnut", "white", "graphite"], "images": {"walnut": ["img/nova_walnut.webp", "img/nova_side.webp"], "white": ["img/nova_white.webp"], "graphite": ["img/nova_graphite.webp"]}, "image": "img/nova_walnut.webp", "has_mirror": true, "badge": "Хит", "in_stock": true, "lead": "Двухдверный шкаф-купе с зеркалом. Бесшумные роликовые механизмы, алюминиевый профиль, внутри — штанга и полки.", "description": "«Нова» — вместительный шкаф-купе для спальни или прихожей. Двери двигаются плавно и тихо, зеркало визуально расширяет комнату. Внутри: две секции, штанга для одежды на всю ширину отсека и регулируемые полки. Корпус из ЛДСП 16 мм с кромкой ПВХ.", "sort": 10, "active": true}, {"id": "loft", "name": "Шкаф-купе «Лофт» 3-дверный", "category": "Шкафы-купе", "price": 265000, "sizes": [{"label": "200 см", "price": 239000}, {"label": "240 см", "price": 265000}, {"label": "270 см", "price": 289000}], "size_label": "Ширина", "default_size": "240 см", "width_cm": 240, "size_text": "240 × 240 × 60 см", "dims": "высота 240 · глубина 60 см", "colors": ["oak", "white"], "images": {}, "image": "img/loft.webp", "has_mirror": false, "badge": "Новинка", "in_stock": false, "lead": "Трёхдверный шкаф-купе с зеркалом по центру — вмещает гардероб всей семьи.", "description": "«Лофт» — большой шкаф-купе в светлом дубе. Центральная дверь с зеркалом, боковые — с тонкой чёрной вставкой. Внутри: три секции, две штанги, полки и место под чемоданы сверху.", "sort": 20, "active": true}, {"id": "classic", "name": "Шкаф «Классик» 4-дверный", "category": "Распашные шкафы", "price": 149000, "sizes": [{"label": "120 см", "price": 119000}, {"label": "160 см", "price": 149000}, {"label": "200 см", "price": 179000}], "size_label": "Ширина", "default_size": "160 см", "width_cm": 160, "size_text": "160 × 210 × 56 см", "dims": "высота 210 · глубина 56 см", "colors": ["white", "beige"], "images": {}, "image": "img/classic.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Распашной шкаф на четыре двери с двумя ящиками внизу.", "description": "«Классик» — простой и надёжный распашной шкаф. Двери на петлях с доводчиками, длинные ручки, два вместительных ящика для белья внизу.", "sort": 30, "active": true}, {"id": "skandi", "name": "Шкаф «Сканди» 2-дверный", "category": "Распашные шкафы", "price": 89000, "sizes": [{"label": "90 см", "price": 89000}, {"label": "120 см", "price": 109000}], "size_label": "Ширина", "default_size": "90 см", "width_cm": 90, "size_text": "90 × 200 × 52 см", "dims": "высота 200 · глубина 52 см", "colors": ["beige", "sage", "white"], "images": {}, "image": "img/skandi.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Компактный шкаф на деревянных ножках — для спальни или детской.", "description": "«Сканди» — небольшой шкаф с латунными кнопками-ручками и ящиком внизу. Ножки поднимают его над полом, так проще убирать.", "sort": 40, "active": true}, {"id": "port", "name": "Прихожая «Порт»", "category": "Прихожие", "price": 128000, "sizes": [], "size_label": "Размер", "default_size": null, "width_cm": 180, "size_text": "180 × 200 × 40 см", "dims": "ширина 180 · высота 200 · глубина 40 см", "colors": ["walnut", "oak"], "images": {}, "image": "img/port.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Прихожая: шкаф, вешалка с крючками, зеркало и банкетка для обуви.", "description": "«Порт» собирает всё, что нужно у входа: высокий шкаф для верхней одежды, панель с крючками и полкой, зеркало и банкетку с ящиками под обувь.", "sort": 50, "active": true}, {"id": "liniya", "name": "Комод «Линия»", "category": "Комоды и тумбы", "price": 64000, "sizes": [{"label": "80 см", "price": 64000}, {"label": "100 см", "price": 76000}], "size_label": "Ширина", "default_size": "80 см", "width_cm": 80, "size_text": "80 × 90 × 45 см", "dims": "высота 90 · глубина 45 см", "colors": ["graphite", "white", "oak"], "images": {}, "image": "img/liniya.webp", "has_mirror": false, "badge": "Новинка", "in_stock": true, "lead": "Комод на четыре ящика с латунными ручками.", "description": "«Линия» — комод на металлических ножках. Ящики на шариковых направляющих выдвигаются полностью и закрываются мягко.", "sort": 60, "active": true}, {"id": "grid", "name": "Стеллаж «Грид»", "category": "Стеллажи", "price": 58000, "sizes": [{"label": "80 см", "price": 42000}, {"label": "120 см", "price": 58000}, {"label": "160 см", "price": 74000}], "size_label": "Ширина", "default_size": "120 см", "width_cm": 120, "size_text": "120 × 180 × 35 см", "dims": "высота 180 · глубина 35 см", "colors": ["oak", "white"], "images": {}, "image": "img/grid.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Открытый стеллаж-решётка с закрытыми ящиками.", "description": "«Грид» — стеллаж для книг, коробок и декора. Можно поставить к стене или использовать как перегородку в комнате.", "sort": 70, "active": true}, {"id": "flat", "name": "ТВ-тумба «Флэт»", "category": "ТВ-тумбы", "price": 72000, "sizes": [{"label": "140 см", "price": 62000}, {"label": "180 см", "price": 72000}], "size_label": "Ширина", "default_size": "180 см", "width_cm": 180, "size_text": "180 × 57 × 40 см", "dims": "высота 57 · глубина 40 см", "colors": ["walnut", "white"], "images": {}, "image": "img/flat.webp", "has_mirror": false, "badge": "", "in_stock": false, "lead": "ТВ-тумба на ножках с открытой нишей по центру.", "description": "«Флэт» — низкая тумба под телевизор. Два закрытых отсека по бокам и ниша для приставки или колонки.", "sort": 80, "active": true}, {"id": "son", "name": "Кровать «Сон»", "category": "Кровати", "price": 139000, "sizes": [{"label": "140 × 200", "price": 125000}, {"label": "160 × 200", "price": 139000}, {"label": "180 × 200", "price": 155000}], "size_label": "Спальное место", "default_size": "160 × 200", "width_cm": 172, "size_text": "172 × 101 × 212 см", "dims": "основание с ламелями, матрас в комплект не входит", "colors": ["walnut", "oak", "white"], "images": {}, "image": "img/son.webp", "has_mirror": false, "badge": "", "in_stock": false, "lead": "Кровать с изголовьем из ЛДСП — без мягкой обивки, легко ухаживать.", "description": "«Сон» — кровать с высоким изголовьем и широкой рамой. Под основанием можно хранить вещи.", "sort": 90, "active": true}, {"id": "student", "name": "Стол письменный «Студент»", "category": "Столы", "price": 54000, "sizes": [{"label": "100 см", "price": 48000}, {"label": "120 см", "price": 54000}], "size_label": "Ширина", "default_size": "120 см", "width_cm": 120, "size_text": "120 × 75 × 60 см", "dims": "высота 75 · глубина 60 см", "colors": ["white", "oak"], "images": {}, "image": "img/student.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Письменный стол с тумбой на три ящика.", "description": "«Студент» — рабочий стол для дома и учёбы. Ящики справа, место для ног слева.", "sort": 100, "active": true}, {"id": "mini", "name": "Тумба прикроватная «Мини»", "category": "Комоды и тумбы", "price": 24000, "sizes": [], "size_label": "Размер", "default_size": null, "width_cm": 45, "size_text": "45 × 50 × 40 см", "dims": "ширина 45 · высота 50 · глубина 40 см", "colors": ["sage", "white", "oak"], "images": {}, "image": "img/mini.webp", "has_mirror": false, "badge": "", "in_stock": true, "lead": "Прикроватная тумба с ящиком и открытой полкой.", "description": "«Мини» — тумба на деревянных ножках. В ящике — мелочи, на полке — книги.", "sort": 110, "active": true}, {"id": "nova-g", "name": "Шкаф-купе «Нова» графит", "category": "Шкафы-купе", "price": 199000, "sizes": [{"label": "120 см", "price": 149000}, {"label": "140 см", "price": 167000}, {"label": "160 см", "price": 185000}, {"label": "180 см", "price": 199000}, {"label": "200 см", "price": 219000}], "size_label": "Ширина", "default_size": "180 см", "width_cm": 180, "size_text": "180 × 220 × 60 см", "dims": "высота 220 · глубина 60 см", "colors": ["graphite", "walnut", "white"], "images": {"walnut": ["img/nova_walnut.webp", "img/nova_side.webp"], "white": ["img/nova_white.webp"], "graphite": ["img/nova_graphite.webp"]}, "image": "img/nova_graphite.webp", "has_mirror": true, "badge": "", "in_stock": true, "lead": "Двухдверный шкаф-купе с зеркалом. Бесшумные роликовые механизмы, алюминиевый профиль, внутри — штанга и полки.", "description": "«Нова» — вместительный шкаф-купе для спальни или прихожей. Двери двигаются плавно и тихо, зеркало визуально расширяет комнату. Внутри: две секции, штанга для одежды на всю ширину отсека и регулируемые полки. Корпус из ЛДСП 16 мм с кромкой ПВХ.", "sort": 120, "active": true}];
  var MAT = {"mats":[{"id":"ldsp","name":"ЛДСП","note":"ламинированная плита, матовая","groups":[{"name":"Однотонные","decors":[{"id":"ldsp-white","name":"Белый","c":"#F1F0EB","sw":"white"},{"id":"ldsp-snow","name":"Белый премиум","c":"#F7F7F5"},{"id":"ldsp-vanilla","name":"Ваниль","c":"#EDE3CC"},{"id":"ldsp-cashmere","name":"Кашемир","c":"#D3C8B8","sw":"beige"},{"id":"ldsp-cappuccino","name":"Капучино","c":"#B9A48D"},{"id":"ldsp-lightgrey","name":"Светло-серый","c":"#CDD0D0"},{"id":"ldsp-pebble","name":"Серый камень","c":"#A3A19B"},{"id":"ldsp-graphite","name":"Графит","c":"#46484B","sw":"graphite"},{"id":"ldsp-anthracite","name":"Антрацит","c":"#35383B"},{"id":"ldsp-black","name":"Чёрный","c":"#232426"},{"id":"ldsp-sage","name":"Шалфей","c":"#9AA38E","sw":"sage"},{"id":"ldsp-olive","name":"Оливковый","c":"#7D7B58"},{"id":"ldsp-mint","name":"Мятный","c":"#B7CEC2"},{"id":"ldsp-indigo","name":"Синий индиго","c":"#33465E"},{"id":"ldsp-terracotta","name":"Терракот","c":"#B0674D"},{"id":"ldsp-powder","name":"Пудровый","c":"#D8B9AE"}]},{"name":"Под дерево","decors":[{"id":"ldsp-oak","name":"Дуб натуральный","c":"#C9A57B","t":"w","sw":"oak"},{"id":"ldsp-sonoma","name":"Дуб сонома","c":"#D2B48B","t":"w"},{"id":"ldsp-sonoma-truffle","name":"Дуб сонома трюфель","c":"#7E6552","t":"w"},{"id":"ldsp-halifax","name":"Дуб галифакс натуральный","c":"#B78A5A","t":"w"},{"id":"ldsp-halifax-tobacco","name":"Дуб галифакс табак","c":"#7A5335","t":"w"},{"id":"ldsp-craft","name":"Дуб крафт золотой","c":"#C29054","t":"w"},{"id":"ldsp-nebraska","name":"Дуб небраска","c":"#B89A76","t":"w"},{"id":"ldsp-bardolino","name":"Дуб бардолино","c":"#B18B66","t":"w"},{"id":"ldsp-votan","name":"Дуб вотан","c":"#887560","t":"w"},{"id":"ldsp-arctic","name":"Дуб белёный","c":"#E3DCCF","t":"w"},{"id":"ldsp-walnut","name":"Орех","c":"#583D2C","t":"w","sw":"walnut"},{"id":"ldsp-walnut-ekko","name":"Орех экко","c":"#805D44","t":"w"},{"id":"ldsp-shimo-light","name":"Ясень шимо светлый","c":"#CBBCA6","t":"w"},{"id":"ldsp-shimo-dark","name":"Ясень шимо тёмный","c":"#5F4F45","t":"w"},{"id":"ldsp-wenge","name":"Венге","c":"#423023","t":"w"},{"id":"ldsp-cherry","name":"Вишня","c":"#95593C","t":"w"},{"id":"ldsp-beech","name":"Бук","c":"#D3AC82","t":"w"}]}]},{"id":"mdf","name":"МДФ в плёнке","note":"ПВХ-плёнка, матовая или софт-тач","groups":[{"name":"Матовые и софт-тач","decors":[{"id":"mdf-white","name":"Белый матовый","c":"#F1F0EC"},{"id":"mdf-ivory","name":"Слоновая кость","c":"#EEE6D2"},{"id":"mdf-cappuccino","name":"Капучино софт","c":"#BCA791"},{"id":"mdf-cashmere","name":"Кашемир софт","c":"#CFC3B2"},{"id":"mdf-grey","name":"Серый софт-тач","c":"#A9ABAA"},{"id":"mdf-graphite","name":"Графит софт-тач","c":"#4A4D50"},{"id":"mdf-black","name":"Чёрный софт-тач","c":"#262729"},{"id":"mdf-sage","name":"Оливка софт","c":"#8D9579"},{"id":"mdf-blue","name":"Синий софт","c":"#3E5068"}]},{"name":"Глянец и дерево","decors":[{"id":"mdf-white-gloss","name":"Белый глянец","c":"#F4F4F2","g":1},{"id":"mdf-beige-gloss","name":"Бежевый глянец","c":"#E2D4BF","g":1},{"id":"mdf-oak-bleached","name":"Дуб белёный","c":"#DED4C6","t":"w"},{"id":"mdf-ash-grey","name":"Ясень серый","c":"#A39D94","t":"w"},{"id":"mdf-concrete","name":"Бетон","c":"#A7A49E","t":"s"}]}]},{"id":"akril","name":"Акрил","note":"зеркальный глянец","groups":[{"name":"Глянец","decors":[{"id":"akril-white","name":"Белый глянец","c":"#F6F6F4","g":1},{"id":"akril-ivory","name":"Ваниль глянец","c":"#F0E6CF","g":1},{"id":"akril-beige","name":"Бежевый глянец","c":"#DCCBB3","g":1},{"id":"akril-cappuccino","name":"Капучино глянец","c":"#C1A78C","g":1},{"id":"akril-silk","name":"Серый шёлк","c":"#BFC1C1","g":1},{"id":"akril-graphite","name":"Графит глянец","c":"#3F4245","g":1},{"id":"akril-black","name":"Чёрный глянец","c":"#1C1D1F","g":1},{"id":"akril-red","name":"Красный глянец","c":"#A3262A","g":1},{"id":"akril-bordo","name":"Бордо глянец","c":"#6B2230","g":1},{"id":"akril-blue","name":"Синий глянец","c":"#22385A","g":1},{"id":"akril-emerald","name":"Изумруд глянец","c":"#1F5A4C","g":1},{"id":"akril-olive","name":"Оливка глянец","c":"#6F6F45","g":1}]}]},{"id":"emal","name":"Эмаль","note":"крашеный МДФ, любой цвет RAL","groups":[{"name":"Популярные цвета","decors":[{"id":"emal-9003","name":"Белый RAL 9003","c":"#F4F4F0"},{"id":"emal-9001","name":"Кремовый RAL 9001","c":"#EDE6D6"},{"id":"emal-1013","name":"Жемчужный RAL 1013","c":"#E3D9C6"},{"id":"emal-7044","name":"Шёлково-серый RAL 7044","c":"#B7B3A8"},{"id":"emal-7035","name":"Светло-серый RAL 7035","c":"#CBD0CC"},{"id":"emal-7016","name":"Антрацит RAL 7016","c":"#383E42"},{"id":"emal-9005","name":"Чёрный RAL 9005","c":"#1D1E20"},{"id":"emal-sage","name":"Шалфей","c":"#A3AC96"},{"id":"emal-olive","name":"Оливковый","c":"#6F7350"},{"id":"emal-mint","name":"Мятный","c":"#B8D2C6"},{"id":"emal-petrol","name":"Морская волна","c":"#2F5961"},{"id":"emal-emerald","name":"Изумрудный","c":"#2D5B4A"},{"id":"emal-5011","name":"Тёмно-синий RAL 5011","c":"#233045"},{"id":"emal-terracotta","name":"Терракотовый","c":"#B36A4E"},{"id":"emal-powder","name":"Пудровый","c":"#D9B8AE"},{"id":"emal-mustard","name":"Горчичный","c":"#C99A3B"}]}]},{"id":"shpon","name":"Шпон","note":"натуральное дерево под лаком","groups":[{"name":"Натуральный шпон","decors":[{"id":"shpon-oak","name":"Дуб натуральный","c":"#BC9466","t":"w"},{"id":"shpon-oak-smoke","name":"Дуб дымчатый","c":"#826951","t":"w"},{"id":"shpon-walnut","name":"Орех американский","c":"#60422E","t":"w"},{"id":"shpon-ash","name":"Ясень белёный","c":"#D1C3AD","t":"w"},{"id":"shpon-teak","name":"Тик","c":"#986E45","t":"w"}]}]}],"tops":[{"id":"ldsp","name":"ЛДСП 38 мм","note":"постформинг, влагостойкая","groups":[{"name":"Декоры","decors":[{"id":"top-carrara","name":"Мрамор каррара","c":"#E6E5E2","t":"s"},{"id":"top-calacatta","name":"Калакатта","c":"#E9E5DD","t":"s"},{"id":"top-concrete","name":"Бетон светлый","c":"#B5B2AA","t":"s"},{"id":"top-concrete-dark","name":"Бетон тёмный","c":"#6D6C69","t":"s"},{"id":"top-galaxy","name":"Галактика чёрная","c":"#1E1F21","t":"s"},{"id":"top-granite","name":"Гранит серый","c":"#8E8E8C","t":"s"},{"id":"top-travertine","name":"Травертин","c":"#D3C2A5","t":"s"},{"id":"top-votan","name":"Дуб вотан","c":"#8B7863","t":"w"},{"id":"top-craft","name":"Дуб крафт","c":"#C29154","t":"w"},{"id":"top-white","name":"Белый","c":"#EEEDE8"},{"id":"top-black","name":"Чёрный матовый","c":"#262729"}]}]},{"id":"kompakt","name":"Компакт-плита","note":"HPL 12 мм, тонкая и прочная","groups":[{"name":"Декоры","decors":[{"id":"kmp-concrete","name":"Бетон","c":"#9D9A94","t":"s"},{"id":"kmp-black","name":"Чёрный","c":"#202123"},{"id":"kmp-marble","name":"Белый мрамор","c":"#E8E7E4","t":"s"},{"id":"kmp-oak","name":"Дуб","c":"#B79570","t":"w"}]}]},{"id":"stone","name":"Искусственный камень","note":"акриловый, без швов","groups":[{"name":"Цвета","decors":[{"id":"stn-white","name":"Белый","c":"#F0EFEA","g":1},{"id":"stn-sand","name":"Бежевый песок","c":"#D3C8B5","t":"s","g":1},{"id":"stn-grey","name":"Серый","c":"#90908D","t":"s","g":1},{"id":"stn-black","name":"Чёрный с крошкой","c":"#232426","t":"s","g":1}]}]},{"id":"kvarc","name":"Кварц","note":"кварцевый агломерат","groups":[{"name":"Цвета","decors":[{"id":"kv-calacatta","name":"Калакатта","c":"#E8E5DE","t":"s","g":1},{"id":"kv-white","name":"Белый чистый","c":"#F4F3EF","g":1},{"id":"kv-concrete","name":"Серый бетон","c":"#8C8A85","t":"s","g":1},{"id":"kv-nero","name":"Неро маркина","c":"#2E2E30","t":"s","g":1}]}]},{"id":"wood","name":"Массив","note":"дуб или бук под маслом","groups":[{"name":"Породы","decors":[{"id":"wd-oak","name":"Дуб под маслом","c":"#B99162","t":"w"},{"id":"wd-beech","name":"Бук","c":"#CFA679","t":"w"}]}]}]};
  var CFG = {"classic":{"w":1120,"h":1400,"gain":1.094,"bbox":[245,315,857,1101]},"flat":{"w":1120,"h":1400,"gain":1.084,"bbox":[103,558,978,907]},"grid":{"w":1120,"h":1400,"gain":1.118,"bbox":[279,291,828,1147]},"liniya":{"w":1120,"h":1400,"gain":1.104,"bbox":[249,476,861,1069]},"loft":{"w":1120,"h":1400,"gain":1.089,"bbox":[206,355,884,1065]},"mini":{"w":1120,"h":1400,"gain":1.104,"bbox":[285,617,832,1017]},"nova-g":{"w":1120,"h":1400,"gain":1.098,"bbox":[250,310,853,1105]},"nova":{"w":1120,"h":1400,"gain":1.098,"bbox":[250,310,853,1105]},"port":{"w":1120,"h":1400,"gain":1.089,"bbox":[232,330,831,1112]},"skandi":{"w":1120,"h":1400,"gain":1.094,"bbox":[326,257,786,1102]},"son":{"w":1120,"h":1400,"gain":1.103,"bbox":[111,433,1022,1018]},"student":{"w":1120,"h":1400,"gain":1.122,"bbox":[136,478,964,1029]},"kitchen":{"w":1600,"h":900,"zones":{"f":{"gain":1.186,"bbox":[421,124,1508,744]},"u":{"gain":1.153,"bbox":[685,165,1003,345]},"t":{"gain":1.027,"bbox":[372,346,1165,798]}}}};
  var DESIGNS_FALLBACK = [{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/32331030/pexels-photo-32331030.png","ratio":1,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/32331031/pexels-photo-32331031.png","ratio":1,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/39829559/pexels-photo-39829559.jpeg","ratio":0.75,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/29673696/pexels-photo-29673696.jpeg","ratio":0.654,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/6970073/pexels-photo-6970073.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/30465909/pexels-photo-30465909.jpeg","ratio":0.708,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/39733041/pexels-photo-39733041.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/7545499/pexels-photo-7545499.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/11701120/pexels-photo-11701120.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/6585745/pexels-photo-6585745.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/7166555/pexels-photo-7166555.jpeg","ratio":0.705,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/5404925/pexels-photo-5404925.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/7045314/pexels-photo-7045314.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/6487951/pexels-photo-6487951.jpeg","ratio":0.693,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/17495860/pexels-photo-17495860.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/7535012/pexels-photo-7535012.jpeg","ratio":0.724,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/7534281/pexels-photo-7534281.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Шкафы-купе","url":"https://images.pexels.com/photos/6933761/pexels-photo-6933761.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/7587809/pexels-photo-7587809.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/38975410/pexels-photo-38975410.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/7166567/pexels-photo-7166567.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/7060824/pexels-photo-7060824.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/30002781/pexels-photo-30002781.jpeg","ratio":1.334,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/7614609/pexels-photo-7614609.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/31759521/pexels-photo-31759521.jpeg","ratio":1.334,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/7045313/pexels-photo-7045313.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/6301178/pexels-photo-6301178.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/7166634/pexels-photo-7166634.jpeg","ratio":0.69,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/6527064/pexels-photo-6527064.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/8135247/pexels-photo-8135247.jpeg","ratio":1.177,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/2708106/pexels-photo-2708106.jpeg","ratio":1.334,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/6489100/pexels-photo-6489100.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/8146321/pexels-photo-8146321.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/38697208/pexels-photo-38697208.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/6903206/pexels-photo-6903206.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/6585610/pexels-photo-6585610.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/6980733/pexels-photo-6980733.jpeg","ratio":0.66,"title":""},{"id":null,"category":"Распашные шкафы","url":"https://images.pexels.com/photos/6980729/pexels-photo-6980729.jpeg","ratio":0.679,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6934176/pexels-photo-6934176.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6933762/pexels-photo-6933762.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/8036583/pexels-photo-8036583.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/24245760/pexels-photo-24245760.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/31152180/pexels-photo-31152180.jpeg","ratio":1,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6312075/pexels-photo-6312075.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/7546316/pexels-photo-7546316.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/7166935/pexels-photo-7166935.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6312074/pexels-photo-6312074.jpeg","ratio":0.694,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6447399/pexels-photo-6447399.jpeg","ratio":1.448,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/7533922/pexels-photo-7533922.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/19878540/pexels-photo-19878540.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6758785/pexels-photo-6758785.jpeg","ratio":1.499,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6487941/pexels-photo-6487941.jpeg","ratio":1.384,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6903247/pexels-photo-6903247.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/7019012/pexels-photo-7019012.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6508346/pexels-photo-6508346.jpeg","ratio":1.544,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6312073/pexels-photo-6312073.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/7005294/pexels-photo-7005294.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Прихожие","url":"https://images.pexels.com/photos/6980728/pexels-photo-6980728.jpeg","ratio":0.704,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/11643074/pexels-photo-11643074.jpeg","ratio":0.665,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/6956842/pexels-photo-6956842.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/34558080/pexels-photo-34558080.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/12715466/pexels-photo-12715466.jpeg","ratio":1.499,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/8135253/pexels-photo-8135253.jpeg","ratio":1.39,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/12277128/pexels-photo-12277128.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg","ratio":1.499,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/18071794/pexels-photo-18071794.jpeg","ratio":1.12,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/33000100/pexels-photo-33000100.jpeg","ratio":1.778,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/271739/pexels-photo-271739.jpeg","ratio":0.665,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/5825577/pexels-photo-5825577.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/30287197/pexels-photo-30287197.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/30355552/pexels-photo-30355552.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/6903254/pexels-photo-6903254.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/12277129/pexels-photo-12277129.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/7195582/pexels-photo-7195582.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/12277013/pexels-photo-12277013.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/17271982/pexels-photo-17271982.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/34673859/pexels-photo-34673859.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Комоды и тумбы","url":"https://images.pexels.com/photos/6480207/pexels-photo-6480207.jpeg","ratio":0.695,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/9572664/pexels-photo-9572664.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/32471851/pexels-photo-32471851.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/17390716/pexels-photo-17390716.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/13437695/pexels-photo-13437695.jpeg","ratio":1.25,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/9169045/pexels-photo-9169045.jpeg","ratio":1.334,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/32178067/pexels-photo-32178067.png","ratio":1,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/6135340/pexels-photo-6135340.jpeg","ratio":1.51,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/4582539/pexels-photo-4582539.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/18713701/pexels-photo-18713701.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/9646749/pexels-photo-9646749.jpeg","ratio":1.25,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/24245782/pexels-photo-24245782.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/6835056/pexels-photo-6835056.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/27533700/pexels-photo-27533700.jpeg","ratio":1.334,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/31825117/pexels-photo-31825117.jpeg","ratio":1.334,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/12329722/pexels-photo-12329722.jpeg","ratio":1.33,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/7167083/pexels-photo-7167083.jpeg","ratio":0.721,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/7587290/pexels-photo-7587290.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/19955736/pexels-photo-19955736.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/5673447/pexels-photo-5673447.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Стеллажи","url":"https://images.pexels.com/photos/9686088/pexels-photo-9686088.jpeg","ratio":1.25,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/28195650/pexels-photo-28195650.jpeg","ratio":1,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/12990601/pexels-photo-12990601.jpeg","ratio":0.563,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/7512034/pexels-photo-7512034.jpeg","ratio":0.667,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/31338029/pexels-photo-31338029.jpeg","ratio":1,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/13722890/pexels-photo-13722890.jpeg","ratio":1,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/36834040/pexels-photo-36834040.jpeg","ratio":1.5,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/28518250/pexels-photo-28518250.jpeg","ratio":1,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6782370/pexels-photo-6782370.jpeg","ratio":0.689,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6527054/pexels-photo-6527054.jpeg","ratio":0.667,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg","ratio":0.667,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6758234/pexels-photo-6758234.jpeg","ratio":0.667,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6580225/pexels-photo-6580225.jpeg","ratio":0.666,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6636320/pexels-photo-6636320.jpeg","ratio":0.718,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/39769976/pexels-photo-39769976.jpeg","ratio":0.75,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6489106/pexels-photo-6489106.jpeg","ratio":0.667,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/37834298/pexels-photo-37834298.jpeg","ratio":0.666,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/39338464/pexels-photo-39338464.jpeg","ratio":0.666,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/7166934/pexels-photo-7166934.jpeg","ratio":0.667,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/6487969/pexels-photo-6487969.jpeg","ratio":0.667,"title":""},{"id":null,"category":"ТВ-тумбы","url":"https://images.pexels.com/photos/14614673/pexels-photo-14614673.jpeg","ratio":0.561,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/14465275/pexels-photo-14465275.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/15456211/pexels-photo-15456211.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/4993094/pexels-photo-4993094.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/5644286/pexels-photo-5644286.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/7005280/pexels-photo-7005280.jpeg","ratio":0.77,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/7765002/pexels-photo-7765002.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg","ratio":0.711,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/30767888/pexels-photo-30767888.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/13043955/pexels-photo-13043955.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/7712453/pexels-photo-7712453.jpeg","ratio":0.555,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/7055750/pexels-photo-7055750.jpeg","ratio":1.498,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/16197244/pexels-photo-16197244.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/6588571/pexels-photo-6588571.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/34754003/pexels-photo-34754003.jpeg","ratio":0.619,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/12913382/pexels-photo-12913382.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg","ratio":1.355,"title":""},{"id":null,"category":"Кровати","url":"https://images.pexels.com/photos/31173588/pexels-photo-31173588.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/10567169/pexels-photo-10567169.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/373904/pexels-photo-373904.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/8004017/pexels-photo-8004017.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/13075330/pexels-photo-13075330.jpeg","ratio":0.563,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/36123565/pexels-photo-36123565.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/31525131/pexels-photo-31525131.jpeg","ratio":1.506,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/20213729/pexels-photo-20213729.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/28461033/pexels-photo-28461033.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/7045861/pexels-photo-7045861.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/4680356/pexels-photo-4680356.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/38688158/pexels-photo-38688158.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/18787885/pexels-photo-18787885.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/7535039/pexels-photo-7535039.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/17947888/pexels-photo-17947888.jpeg","ratio":1.334,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/6670652/pexels-photo-6670652.jpeg","ratio":0.665,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/27164978/pexels-photo-27164978.jpeg","ratio":0.571,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/12700479/pexels-photo-12700479.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/12119318/pexels-photo-12119318.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Столы","url":"https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/7195739/pexels-photo-7195739.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/39017406/pexels-photo-39017406.jpeg","ratio":0.75,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/6908565/pexels-photo-6908565.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/20348123/pexels-photo-20348123.jpeg","ratio":1.308,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/6527057/pexels-photo-6527057.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/6265836/pexels-photo-6265836.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/7005291/pexels-photo-7005291.jpeg","ratio":0.672,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/13722891/pexels-photo-13722891.jpeg","ratio":1.25,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/6523300/pexels-photo-6523300.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/6636316/pexels-photo-6636316.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/6920452/pexels-photo-6920452.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/38311091/pexels-photo-38311091.jpeg","ratio":1.5,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/4800175/pexels-photo-4800175.jpeg","ratio":0.676,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/10117721/pexels-photo-10117721.jpeg","ratio":1.499,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/35021550/pexels-photo-35021550.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/10071390/pexels-photo-10071390.jpeg","ratio":1.25,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/6284230/pexels-photo-6284230.jpeg","ratio":0.667,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/4819708/pexels-photo-4819708.jpeg","ratio":1.462,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/19966809/pexels-photo-19966809.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/38525109/pexels-photo-38525109.jpeg","ratio":0.666,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/13722878/pexels-photo-13722878.jpeg","ratio":1.25,"title":""},{"id":null,"category":"Кухни","url":"https://images.pexels.com/photos/19955716/pexels-photo-19955716.jpeg","ratio":1.5,"title":""}];

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
      gis_url: st.gis_url || '', instagram: st.instagram || '', warranty: st.warranty || '', order_days: st.order_days || '', fast_days: st.fast_days || '',
      kitchen: {
        facade: merge({ ldsp: 120000, film: 160000, enamel: 220000, akril: 200000, shpon: 260000 }, (st.kitchen || {}).facade),
        top: merge({ ldsp: 0, stone: 45000, kompakt: 60000, kvarc: 95000, wood: 55000 }, (st.kitchen || {}).top),
        extra: merge({ tall_pct: 12, led: 25000 }, (st.kitchen || {}).extra)
      },
      mirror: st.mirror || { one: 0, two: 18000, none: -6000 },
      materials: merge({ ldsp: 0, mdf: 15, akril: 30, emal: 40, shpon: 55 }, st.materials)
    };
  }
  function merge(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; if (b) for (k in b) if (b[k] !== null && b[k] !== undefined && b[k] !== '') o[k] = b[k]; return o; }
  function defSize(p) { return p.default_size || (p.sizes && p.sizes[0] && p.sizes[0].label) || null; }
  function unitPrice(p, size, mirror, mat) {
    var s = null, sz = p.sizes || [];
    for (var i = 0; i < sz.length; i++) if (sz[i].label === size) s = sz[i];
    var u = s ? s.price : p.price;
    if (mat) u += Math.round(u * matPct(mat) / 100);
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
  // Готовых запасов нет — каждую модель делаем после заказа. in_stock = «быстрое изготовление».
  function leadDays(p) { var st = settings(); return p && p.in_stock ? (st.fast_days || '3–5 дней') : (st.order_days || '7–14 дней'); }
  function leadText(p) { return 'Изготовим за ' + leadDays(p); }
  function splitName(name) { var m = String(name || '').match(/^(.*?)\s*(«.*)$/); return m ? [m[1], m[2]] : [name, '']; }
  function loadReviews() {
    return api('/rest/v1/reviews?select=name,what,rating,text,created_at&approved=eq.true&order=created_at.desc&limit=12')
      .then(function (r) { S.reviews = r || []; emit(); }).catch(function () { S.reviews = S.reviews || []; emit(); });
  }

  // ---------- Материалы, декоры и перекраска мебели ----------
  var SW_DECOR = { white: 'ldsp-white', beige: 'ldsp-cashmere', graphite: 'ldsp-graphite', sage: 'ldsp-sage', oak: 'ldsp-oak', walnut: 'ldsp-walnut' };
  var DEC = {};
  (MAT.mats || []).concat(MAT.tops || []).forEach(function (m) {
    (m.groups || []).forEach(function (g) { (g.decors || []).forEach(function (d) { d.mat = m.id; DEC[d.id] = d; }); });
  });
  function matById(id) { for (var i = 0; i < MAT.mats.length; i++) if (MAT.mats[i].id === id) return MAT.mats[i]; return null; }
  function topById(id) { for (var i = 0; i < MAT.tops.length; i++) if (MAT.tops[i].id === id) return MAT.tops[i]; return null; }
  function decor(id) { return DEC[id] || null; }
  function matDecors(m) { var o = []; ((m && m.groups) || []).forEach(function (g) { o = o.concat(g.decors); }); return o; }
  function matPct(mat) { var v = Number(settings().materials[mat]); return isFinite(v) ? Math.max(0, Math.min(300, v)) : 0; }
  function texUrl(d) { return 'img/tex/' + d.id + '.webp'; }
  function swatchBg(d) { if (!d) return '#ccc'; var b = d.t ? d.c + ' url(img/tex/sw_' + d.id + '.webp) center / cover' : d.c; return d.g ? 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 48%), ' + b : b; }
  function hasCfg(pid) { return !!CFG[pid]; }
  var imgCache = {};
  function loadImg(src) {
    if (!imgCache[src]) imgCache[src] = new Promise(function (res, rej) {
      var im = new Image(); im.decoding = 'async';
      im.onload = function () { res(im); };
      im.onerror = function () { delete imgCache[src]; rej(new Error('Не загрузилась картинка')); };
      im.src = src;
    });
    return imgCache[src];
  }
  function hexMul(hex, k) {
    var h = String(hex).replace('#', '');
    var c = [0, 2, 4].map(function (i) { return Math.max(0, Math.min(255, Math.round(parseInt(h.slice(i, i + 2), 16) * k))); });
    return 'rgb(' + c.join(',') + ')';
  }
  var scratch = null;
  // Перекраска: основа (нейтральный рендер) × декор, только внутри маски зоны. Глянец — мягкий блик.
  function paint(cv, o) {
    var need = [o.base];
    o.zones.forEach(function (z) { need.push(z.mask); if (z.decor && z.decor.t) need.push(texUrl(z.decor)); });
    return Promise.all(need.map(loadImg)).then(function (ims) {
      if (o.ok && !o.ok()) return null;
      var base = ims[0], W = o.w, H = o.h;
      if (cv.width !== W) cv.width = W;
      if (cv.height !== H) cv.height = H;
      var ctx = cv.getContext('2d');
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(base, 0, 0, W, H);
      if (!scratch) scratch = document.createElement('canvas');
      if (scratch.width !== W) scratch.width = W;
      if (scratch.height !== H) scratch.height = H;
      var t = scratch.getContext('2d');
      var k = 1;
      o.zones.forEach(function (z) {
        if (!z.decor) { k += 1; return; }
        var mask = ims[k++], tex = z.decor.t ? ims[k++] : null, gain = z.gain || 1;
        t.globalCompositeOperation = 'source-over'; t.globalAlpha = 1;
        t.clearRect(0, 0, W, H);
        if (tex) {
          var pat = t.createPattern(tex, 'repeat');
          var sc = (z.decor.t === 's' ? z.stoneScale : z.woodScale) || 0.4;
          if (pat.setTransform && window.DOMMatrix) pat.setTransform(new DOMMatrix().scale(sc));
          t.fillStyle = pat; t.fillRect(0, 0, W, H);
          if (gain > 1.001) { t.globalCompositeOperation = 'lighter'; t.globalAlpha = Math.min(1, gain - 1); t.fillRect(0, 0, W, H); t.globalAlpha = 1; }
        } else {
          t.fillStyle = hexMul(z.decor.c, gain); t.fillRect(0, 0, W, H);
        }
        t.globalCompositeOperation = 'multiply'; t.drawImage(base, 0, 0, W, H);
        if (z.decor.g) {
          var bb = z.bbox || [0, 0, W, H];
          var gr = t.createLinearGradient(bb[0], bb[1], bb[2], bb[3]);
          gr.addColorStop(0, 'rgba(255,255,255,0.10)'); gr.addColorStop(0.3, 'rgba(255,255,255,0)');
          gr.addColorStop(0.42, 'rgba(255,255,255,0.26)'); gr.addColorStop(0.5, 'rgba(255,255,255,0)');
          gr.addColorStop(0.62, 'rgba(255,255,255,0.12)'); gr.addColorStop(0.7, 'rgba(255,255,255,0)');
          t.globalCompositeOperation = 'screen'; t.fillStyle = gr; t.fillRect(0, 0, W, H);
        }
        t.globalCompositeOperation = 'destination-in'; t.drawImage(mask, 0, 0, W, H);
        ctx.drawImage(scratch, 0, 0);
      });
      return cv;
    });
  }
  // готовые параметры для товара
  function productPaint(cv, p, d, ok) {
    var c = CFG[p.id]; if (!c || !d) return Promise.resolve(null);
    var bw = Math.max(80, c.bbox[2] - c.bbox[0]), wm = Math.max(0.45, (Number(p.width_cm) || 120) / 100);
    var pxm = bw / wm;
    return paint(cv, { ok: ok, base: 'cfg/' + p.id + '.webp', w: c.w, h: c.h, zones: [{ mask: 'cfg/' + p.id + '_m.webp', decor: d, gain: c.gain, bbox: c.bbox, woodScale: Math.max(0.18, Math.min(0.7, pxm * 0.55 / 512)), stoneScale: Math.max(0.2, Math.min(0.8, pxm * 0.6 / 512)) }] });
  }
  function kitchenPaint(cv, f, u, top, ok) {
    var c = CFG.kitchen; if (!c) return Promise.resolve(null);
    var z = c.zones, mk = function (id, d) { return { mask: 'cfg/kitchen_' + id + '.webp', decor: d, gain: z[id].gain, bbox: z[id].bbox, woodScale: 0.24, stoneScale: 0.5 }; };
    return paint(cv, { ok: ok, base: 'cfg/kitchen.webp', w: c.w, h: c.h, zones: [mk('f', f), mk('u', u || f), mk('t', top)] });
  }
  function thumbOf(cv, w) {
    try {
      var h = Math.round(cv.height * w / cv.width), c = document.createElement('canvas'); c.width = w; c.height = h;
      c.getContext('2d').drawImage(cv, 0, 0, w, h);
      var u = c.toDataURL('image/webp', 0.8);
      if (u.indexOf('data:image/webp') !== 0) u = c.toDataURL('image/png');
      return u.length < 120000 ? u : null;
    } catch (e) { return null; }
  }

  // ---------- Примеры дизайна (фото из интернета) ----------
  S.designs = null;
  function designSrc(d, w) { return /images\.pexels\.com/.test(d.url) ? d.url + '?auto=compress&cs=tinysrgb&w=' + (w || 600) : d.url; }
  var designsP = null;
  function loadDesigns(force) {
    if (designsP && !force) return designsP;
    if (!S.designs) { var c = LS.get('nem-designs-v1', null); S.designs = c && c.length ? c : DESIGNS_FALLBACK; }
    designsP = api('/rest/v1/designs?select=id,category,url,ratio,title&active=eq.true&order=sort.asc,id.asc')
      .then(function (r) { if (r && r.length) { S.designs = r; LS.set('nem-designs-v1', r); } emit(); })
      .catch(function () { designsP = null; emit(); });
    return designsP;
  }
  function designKind(cat) { return cat === 'Кухни' ? 'kitchen' : (cat === 'Шкафы-купе' || cat === 'Распашные шкафы' || cat === 'Прихожие') ? 'wardrobe' : 'other'; }

  // ---------- Корзина и избранное ----------
  function cartItems() { return LS.get('nem-cart', []); }
  function keyOf(it) { return [it.id, it.size || '', it.color || '', it.mirror || '', it.mat || '', it.decor || ''].join('|'); }
  var cart = {
    items: cartItems,
    key: keyOf,
    add: function (it) {
      var a = cartItems(), k = keyOf(it), f = null;
      for (var i = 0; i < a.length; i++) if (keyOf(a[i]) === k) f = a[i];
      if (f) f.qty = Math.min(9, (f.qty || 1) + (it.qty || 1));
      else a.push({ id: it.id, size: it.size || null, color: it.color || null, mirror: it.mirror || null, mat: it.mat || null, decor: it.decor || null, thumb: it.thumb || null, qty: Math.max(1, Math.min(9, it.qty || 1)) });
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
        var u = unitPrice(p, x.size, x.mirror, x.mat);
        var meta = [], dc = x.decor ? decor(x.decor) : null, mt = x.mat ? matById(x.mat) : null;
        if (x.size) meta.push(x.size);
        if (dc) meta.push((mt ? mt.name + ', ' : '') + dc.name.toLowerCase());
        else if (x.color && SW[x.color]) meta.push(SW[x.color].name.toLowerCase());
        if (p.has_mirror) { var m = MIRRORS.filter(function (z) { return z.id === (x.mirror || 'one'); })[0]; if (m) meta.push(m.label.toLowerCase()); }
        out.push({ key: keyOf(x), id: x.id, p: p, name: p.name, img: x.thumb || imagesFor(p, x.color)[0], meta: meta.join(' · '), qty: x.qty || 1, unit: u, sum: u * (x.qty || 1), size: x.size, color: x.color, mirror: x.mirror, mat: x.mat, decor: x.decor });
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
    var items = (o.items || cartItems()).map(function (x) { var d = x.decor ? decor(x.decor) : null; return { id: x.id, size: x.size, color: x.color, mirror: x.mirror, mat: x.mat || null, decor: d ? d.name : null, qty: x.qty || 1 }; });
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
    MAT: MAT, CFG: CFG, SW_DECOR: SW_DECOR, matById: matById, topById: topById, decor: decor, matDecors: matDecors, matPct: matPct, swatchBg: swatchBg, hasCfg: hasCfg,
    paint: paint, productPaint: productPaint, kitchenPaint: kitchenPaint, thumbOf: thumbOf, loadImg: loadImg,
    designSrc: designSrc, loadDesigns: loadDesigns, designKind: designKind,
    imagesFor: imagesFor, splitName: splitName, minPrice: minPrice, priceFrom: priceFrom, widthText: widthText, leadDays: leadDays, leadText: leadText, loadReviews: loadReviews,
    cart: cart, fav: fav, me: me, orders: function () { return LS.get('nem-orders', []); },
    placeOrder: placeOrder, bookMeasure: bookMeasure, orderStatus: orderStatus, submitReview: submitReview,
    auth: auth, admin: admin, api: api, testPush: testPush, rpc: rpc, resizeImage: resizeImage, translit: translit, beep: beep,
    fmt: fmt, plural: plural, digits: digits, normPhone: normPhone, prettyPhone: prettyPhone, waLink: waLink, telLink: telLink, LS: LS
  };
})();
