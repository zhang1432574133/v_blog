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
    "revision": "bb225112639e9deabc839a79250e36fd"
  },
  {
    "url": "assets/css/6.styles.7545d023.css",
    "revision": "984873d44ca33e9f6cf4338041887ccf"
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
    "url": "assets/js/0.4cbaae75.js",
    "revision": "ad82b705de1ef2f2e14acbc31dbbec94"
  },
  {
    "url": "assets/js/1.fcd619b4.js",
    "revision": "13c46d3d6dc48db1118418ef58d0bfc1"
  },
  {
    "url": "assets/js/2.1b82c980.js",
    "revision": "dc2fba803e375ae9235268957adcb3f6"
  },
  {
    "url": "assets/js/3.a25d05af.js",
    "revision": "455b2d5ae734d7a14cf328ff164afdf0"
  },
  {
    "url": "assets/js/4.48b16b93.js",
    "revision": "a35a3b1cc3257679db5ff0e59767c146"
  },
  {
    "url": "assets/js/5.0e6a1218.js",
    "revision": "4055e2a8d789fb50756bee59c56ca4c8"
  },
  {
    "url": "assets/js/app.1b911b5b.js",
    "revision": "a8c89c67da61c7d9d80016c903a7119c"
  },
  {
    "url": "index.html",
    "revision": "c40124e15a40dfb1176d0e2cbefed46b"
  },
  {
    "url": "standard/1.html",
    "revision": "fb3d747d95803bf0cb04d753fa8b881d"
  },
  {
    "url": "standard/index.html",
    "revision": "5cc21217df5bb4e85766f4b6a0ecc356"
  },
  {
    "url": "study/1.html",
    "revision": "0b9ef640eed6b7df9a1c3de9961959aa"
  },
  {
    "url": "study/index.html",
    "revision": "79073ea6d8846116a2da217e42459b4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
