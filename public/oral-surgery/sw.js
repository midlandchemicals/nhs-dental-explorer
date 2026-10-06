/* Offline cache for the revision app. Bump VERSION whenever any file changes. */
const VERSION = 'os-revision-v1';
const FILES = [
  './', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png',
  'content/d0-foundations.js', 'content/d1-dentoalveolar.js', 'content/d2-trauma.js', 'content/d3-pain.js',
  'content/d4-sedation.js', 'content/d5-soft-tissue.js', 'content/d6-hard-tissue.js', 'content/d7-implants.js',
  'content/d8-critical.js', 'content/d9-cips.js', 'content/guidelines.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) {
    // Fonts: try network, fall back to cache, never block the app
    e.respondWith(
      caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copy));
        return res;
      }).catch(() => hit))
    );
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request)));
});
