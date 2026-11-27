const CACHE = "les-ages-rouges-v6";
const GAME = "./Les-Ages-Rouges-Version-Confluences.html";
const SHELL = [
  "./",
  "./index.html",
  GAME,
  "./manifest.webmanifest",
  "./icons/icon-192.png?v=4",
  "./icons/icon-512.png?v=4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  // Navigation: serve the exact requested page from cache, then refresh it.
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      const network = fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => null);

      if (cached) {
        event.waitUntil(network.then(() => undefined));
        return cached;
      }

      const response = await network;
      return response || await caches.match("./index.html");
    })());
    return;
  }

  // Static resources: cache first to avoid repeated downloads.
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;

    const response = await fetch(request);
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(request, copy));
    }
    return response;
  })());
});
