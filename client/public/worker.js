var STATIC_CACHE_NAME = "gfg-pwa";
var DYNAMIC_CACHE_NAME = "dynamic-gfg-pwa";

// Add Routes and pages using React Browser Router
var urlsToCache = ["/", "/search", "/aboutus", "/profile"];

// Install a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  // check if request is made by chrome extensions or web page
  // if request is made for web page url must contains http.
  if (!(event.request.url.indexOf("http") === 0)) return; // skip the request. if request is not made with http protocol

  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(event.request).then((fetchRes) => {
          return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(event.request.url, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );

  if (!navigator.onLine) {
       event.waitUntil(
        // eslint-disable-next-line no-restricted-globals
        self.registration.showNotification("Internet", {
          body: "Verifique sua conexão com a internet!",
          icon: "logo.png",
        })
      );
   }
});

// Update a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["gfg-pwa"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
