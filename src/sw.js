import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache todos los assets
precacheAndRoute(self.__WB_MANIFEST);

// Ruta para archivos estáticos
registerRoute(
  ({ request }) => request.destination === 'image' || request.destination === 'video',
  new CacheFirst({
    cacheName: 'static-resources',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
      }),
    ],
  })
);

// Ruta para navegación y API
registerRoute(
  ({ url }) => url.origin === 'https://fepasapptest.github.io',
  new NetworkFirst({
    cacheName: 'dynamic-content',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60, // 24 horas
      }),
    ],
  })
);

// Manejar la instalación del service worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Manejar la activación del service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
}); 