const CACHE_NAME = "playmovies-startup-v1";

const STARTUP_FILES = [
    "./",
    "./welcome.html",
    "./welcome.css",
    "./connection.js",
    "./playmovies-logo.png"
];


// Install and cache PlayMovies startup files
self.addEventListener("install", event => {

    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(STARTUP_FILES);
            })
    );

    self.skipWaiting();
});


// Activate newest version
self.addEventListener("activate", event => {

    event.waitUntil(
        caches.keys().then(cacheNames => {

            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );

        })
    );

    self.clients.claim();
});


// Serve cached PlayMovies files when offline
self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(

        fetch(event.request)

            .then(response => {

                const copy = response.clone();

                caches
                    .open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request, copy);
                    });

                return response;
            })

            .catch(() => {

                return caches
                    .match(event.request)
                    .then(cachedResponse => {

                        if (cachedResponse) {
                            return cachedResponse;
                        }

                        if (
                            event.request.mode === "navigate"
                        ) {
                            return caches.match(
                                "./welcome.html"
                            );
                        }

                    });

            })

    );

});
