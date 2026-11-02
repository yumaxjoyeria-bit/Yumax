/* Yumax Joyería — Service Worker
 * Guarda la app en el celular para que abra sin internet.
 * Estrategia: muestra la versión guardada al instante y, si hay internet,
 * descarga la versión nueva en segundo plano (se ve en la siguiente apertura).
 * Los DATOS del negocio no pasan por aquí: viven en el almacenamiento local del equipo.
 */
const CACHE = 'yumax-app-v2';
const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './src/app.js',
  './src/index.css',
  './src/assets/yumax-logo.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      if (cached) {
        event.waitUntil(network);
        return cached;
      }
      const res = await network;
      if (res) return res;
      if (req.mode === 'navigate') return cache.match('./index.html');
      return new Response('Sin conexión', { status: 503 });
    })
  );
});
