
// Ciclo de vida del SW
// se instala el SW
// se activa el SW

self.addEventListener('install', event => {

    // Descargar assets
    // Creamos un cache

    //console.log(event);
    console.log('SW: Instalando SW!');

    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas')
            self.skipWaiting();
            resolve();
        }, 100);

    });

    event.waitUntil(instalacion);

});

// Cuando el SW se activa, toma el control de la aplicacion
self.addEventListener('activate', event => {

    // Borrar cache viejo
    console.log('SW2: Activo y listo para controlar la app');

});

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // Aplicar las estrategias del cache
    // console.log('SW:', event.request.url);

    // if (event.request.url.includes('https://reqres.in/')) {
    //     const resp = new Response(`{ ok: false,, mensaje: 'hola mundo' }`);

    //     event.respondWith(resp);
    // }
});

// SYNC: Cuando recuperamos la conexion a internet
self.addEventListener('sync', event => {
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);

});

// PUSH: Manejar las push notifications
self.addEventListener('push', event => {
    console.log('Notificacion recibida');
});



