/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f8009270bd478468fc8c7f5bd053f95c"
  },
  {
    "url": "assets/css/0.styles.878c6a35.css",
    "revision": "2877afa500f0a3872750f453867e12d2"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d00bdc4d.js",
    "revision": "78238e587e680fce2d0a06f9010645e2"
  },
  {
    "url": "assets/js/2.452bd561.js",
    "revision": "7e07d9129f256035da14dceb6c89de00"
  },
  {
    "url": "assets/js/3.f0b78a25.js",
    "revision": "13faca6b06606eb66b91d9d663efea0b"
  },
  {
    "url": "assets/js/4.2205eb9a.js",
    "revision": "9566093ba605f85bcfad77226f8f2811"
  },
  {
    "url": "assets/js/5.0667d97f.js",
    "revision": "f94fd832eda38a96bbb0f93be36b263a"
  },
  {
    "url": "assets/js/6.59ccc7da.js",
    "revision": "55ce6dd57d02efae7fc206b16f729cc4"
  },
  {
    "url": "assets/js/7.57884066.js",
    "revision": "e94b28ff280eec5dacc2674b5bcde9ce"
  },
  {
    "url": "assets/js/app.a1e2592f.js",
    "revision": "b1bfea168b49b25d39d8f133d464b3f7"
  },
  {
    "url": "index.html",
    "revision": "fc0a99e783478d872ab8c1cfb52d5654"
  },
  {
    "url": "standard/1.html",
    "revision": "706cdd2cf40dad38dfc7db6318bb9054"
  },
  {
    "url": "standard/index.html",
    "revision": "dfed5baf0bde41e26663be6453c5de1a"
  },
  {
    "url": "study/1.html",
    "revision": "24a6e5d32be96978a911fc92c724df33"
  },
  {
    "url": "study/2.html",
    "revision": "8b0c10e225923c14233f95d22b029ecd"
  },
  {
    "url": "study/index.html",
    "revision": "2056cb401ca49c0aec4b72531a56a5c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
