const CACHE = "les-ages-rouges-v15";
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

  // Always try the network first for HTML so an installed shortcut gets the latest game.
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, { cache: "no-store" });
        if (response && response.ok) {
          const copy = response.clone();
          event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
        }
        return response;
      } catch {
        return await caches.match(request) || await caches.match("./index.html");
      }
    })());
    return;
  }

  // Cache static assets for quicker repeat visits.
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response && response.ok) {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
    }
    return response;
  })());
});
