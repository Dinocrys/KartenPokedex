const CACHE='karten-pokedex-v3-18';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(CORE))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);

  // Externe Ressourcen nicht in den App-Cache ziehen.
  if(url.origin!==self.location.origin) return;

  // Für Seitenaufrufe zuerst das Netz verwenden, damit neue Versionen sofort ankommen.
  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',copy)).catch(()=>{});
          return response;
        })
        .catch(async()=>await caches.match('./index.html') || await caches.match('./'))
    );
    return;
  }

  // Statische Dateien schnell ausliefern, im Hintergrund aber aktualisieren.
  event.respondWith((async()=>{
    const cached=await caches.match(req);
    const network=fetch(req).then(response=>{
      if(response && response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(req,copy)).catch(()=>{});
      }
      return response;
    }).catch(()=>null);
    return cached || await network || Response.error();
  })());
});
