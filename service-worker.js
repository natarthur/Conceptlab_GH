const CACHE_NAME="conceptlab-ghana-v1-1-learning";
const CORE=[
  "./",
  "./index.html",
  "./service-worker.js",
  "./css/style.css",
  "./js/app.js",
  "./js/assessment.js",
  "./js/games.js"
];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  event.respondWith(caches.match(event.request).then(cached=>{
    const network=fetch(event.request).then(response=>{
      if(response.ok && new URL(event.request.url).origin===location.origin){
        const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
      }
      return response;
    }).catch(()=>cached);
    return cached||network;
  }));
});