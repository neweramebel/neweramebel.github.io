/* New Era Mebel — уведомления кабинета (без кэширования страниц) */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: 'New Era Mebel', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Новая заявка с сайта', {
    body: d.body || '', icon: 'img/icon-192.png', badge: 'img/icon-96.png',
    tag: d.tag || 'nem', renotify: true, vibrate: [180, 90, 180], data: { url: d.url || 'admin.html' }
  }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = new URL((e.notification.data && e.notification.data.url) || 'admin.html', self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c.url.indexOf('admin') >= 0 && 'focus' in c) return c.focus();
    }
    return self.clients.openWindow(url);
  }));
});
