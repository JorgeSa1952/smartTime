self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("trainer-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
        // adiciona aqui "style.css" e "script.js" se os tiveres separados
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});