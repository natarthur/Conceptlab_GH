const CACHE_NAME="conceptlab-ghana-v1-1-reengineered-v2";
const CORE=[
  "./","./index.html","./manifest.json","./service-worker.js","./css/style.css",
  "./js/data.js","./js/engine.js","./js/simulations.js","./js/games.js","./js/assessment.js","./js/app.js"
];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(caches.match(e.request).then(cached=>{
    const network=fetch(e.request).then(r=>{
      if(r.ok && new URL(e.request.url).origin===location.origin){
        const copy=r.clone(); caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));
      }
      return r;
    }).catch(()=>cached);
    return cached||network;
  }));
});