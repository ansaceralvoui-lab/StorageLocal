const CACHE_NAME = "todo-list-cache-v1";

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "192x192.png",
                "512x512.png"
            ]);
        })
    );
});
