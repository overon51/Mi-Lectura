const CACHE_NAME = 'mi-lectoes"v2';
const ASSETS = [
  './',
  './index.html'
];

// Instalar el Service Worker y guardar en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Interceptar peticiones para cargar desde caché (más rápido)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
