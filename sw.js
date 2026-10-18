const CACHE = "stampquest-v16";
const SHELL = [
  "./",
  "index.html",
  "offline.html",
  "manifest.json",
  "vendor/bundle.css",
  "vendor/leaflet.js",
  "vendor/leaflet.markercluster.js",
  "vendor/supabase-js.js",
  "vendor/confetti.min.js",
  "vendor/gsap.min.js",
  "vendor/Flip.min.js",
  "vendor/typed.min.js",
  "vendor/lenis.min.js",
  "i18n-strings.js",
  "app.js",
  "karnataka.geojson",
  "karnataka-buf25.geojson",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "favicon.ico",
  "fonts/fraunces-latin.woff2",
  "fonts/fraunces-latinext.woff2",
  "fonts/dmsans-latin.woff2",
  "fonts/dmsans-latinext.woff2",
  "fonts/dmsans-rupee.woff2",
  "fonts/dmmono-latin-500.woff2",
  "fonts/dmmono-latinext-500.woff2",
  "fonts/notosans-kannada-subset.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
/* let the page force-activate a waiting worker from the update prompt */
self.addEventListener("message", e => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
function cacheable(res){
  return res && res.status === 200 && res.type === "basic";
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // ignore cross-origin (tiles, CDN)
  const isNav = req.mode === "navigate";
  const path = url.pathname;
  const isDoc = isNav || path.endsWith("/index.html") || path.endsWith("/manifest.json");
  if (isDoc){
    // network-first for documents: fresh HTML on every load
    e.respondWith(
      fetch(req).then(res => {
        if (cacheable(res)){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() =>
        caches.match(req)
          .then(r => r || caches.match("index.html"))
          .then(r => r || caches.match("offline.html"))
      )
    );
    return;
  }
  // cache-first for all other same-origin assets
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(res => {
      if (cacheable(res)){
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
