const CACHE = "stampquest-v1";
const SHELL = [
  "./",
  "index.html",
  "manifest.json",
  "vendor/leaflet.css",
  "vendor/leaflet.js",
  "vendor/leaflet.markercluster.js",
  "vendor/MarkerCluster.css",
  "vendor/MarkerCluster.Default.css",
  "karnataka.geojson",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "favicon.ico"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // cache-first for app shell, network for tiles
  if (url.origin === location.origin){
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    })));
  }
});