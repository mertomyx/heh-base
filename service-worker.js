const version = 1.01

// installation du service worker (la première fois)
self.addEventListener('install', event => {
    event.waitUntil(
        console.log('SW installé' + version)
    )
    //on passe l'attente
    return self.skipWaiting()
});

// activation du service-worker (à chaque fois)
self.addEventListener('activate', e => {
    console.log('Activate SW version ' + version)
    // ???
    return self.clients.claim()
})