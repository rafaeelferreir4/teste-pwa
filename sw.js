var CACHE_NAME = 'static-v1'
self.addEventListener('install', function (event) {
    event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/manifest.json',
            '/image2.jpg'
        ])
    })
    )
})

var CACHE_NAME = 'static-v1'
self.addEventListener('activate', function activator(event) {
    event.waitUntil(caches.keys().then(function (keys) {
        return Promise.all(keys.filter(function (key) {
            return key.indexOf(CACHE_NAME) !== 0;
        }).map(function (key) {
            return caches.delete(key)
        }))
    }))
})
