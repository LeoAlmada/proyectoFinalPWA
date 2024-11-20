// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          "index.html",
          "nuevos.html",
          "usados.html",
          "images/icon-192x192.png",
          "images/icon-512x512.png",
          "images/usado3.jpg",
          "images/usado2.webp",
          "images/usado1.png",
          "images/nuevo2.jfif",
          "images/nuevo1.jpg",
          "images/imagen1.png"
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  