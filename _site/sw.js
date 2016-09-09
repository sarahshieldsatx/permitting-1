importScripts( '/HOST/cache-polyfill.js' );

var filesToCache = [
  // root
  '/HOST/',
  '/HOST/index.html',
  // css
  '/HOST/assets/css/main.css',
  '/HOST/assets/css/normalize.css',
  '/HOST/assets/css/syntax.css',
  // images
  '/HOST/assets/img/octocat.png',
  // pages
  '/HOST/example_page/','/HOST/jekyll/update/2013/11/20/welcome-to-jekyll.html',
  // posts
  '/HOST/jekyll/update/2013/11/20/welcome-to-jekyll.html',
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
