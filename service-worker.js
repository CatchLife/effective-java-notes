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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1-Introduction/0.html",
    "revision": "9034e3d6daf6ec88be9977f00df94e06"
  },
  {
    "url": "2-Creating-and-Destroying-Objects/1.html",
    "revision": "8d2747388f1330dc5b04ced6dca79cb2"
  },
  {
    "url": "2-Creating-and-Destroying-Objects/2.html",
    "revision": "825c30d6bf8c8d896fde715f16b2bf23"
  },
  {
    "url": "2-Creating-and-Destroying-Objects/3.html",
    "revision": "f17451eee6c696b2a32996509e34dcc5"
  },
  {
    "url": "2-Creating-and-Destroying-Objects/4.html",
    "revision": "e7f542ec568fcb64974f6f0bd4470cca"
  },
  {
    "url": "2-Creating-and-Destroying-Objects/5.html",
    "revision": "f063b951f54a6dae376f9de14fc72813"
  },
  {
    "url": "2-Creating-and-Destroying-Objects/6.html",
    "revision": "e0e95eb1d46e8bfeda421130fc495268"
  },
  {
    "url": "2-Creating-and-Destroying-Objects/7.html",
    "revision": "e86d045edc68d98292809cf400927852"
  },
  {
    "url": "3-Methods-Common-to-All-Objects/10.html",
    "revision": "2a4af1abd82046e5d7dfc773c3cb6f28"
  },
  {
    "url": "3-Methods-Common-to-All-Objects/8.html",
    "revision": "f1e7fd74e716535062b735a7fc804766"
  },
  {
    "url": "3-Methods-Common-to-All-Objects/9.html",
    "revision": "f8119566baf33bc1292969ff181ed9dd"
  },
  {
    "url": "404.html",
    "revision": "2270141688f340f958d272f785a5e092"
  },
  {
    "url": "assets/css/0.styles.3edd9b05.css",
    "revision": "f90765ee3df4fb4e3e7195a9821db1e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1cfa7db6.js",
    "revision": "73274d9557b68b3bef770d4d8897a24b"
  },
  {
    "url": "assets/js/11.3e328ebe.js",
    "revision": "531f7e051daebae08baee21d90110b4d"
  },
  {
    "url": "assets/js/12.c862c117.js",
    "revision": "f8f614bf4ccf2640c290717ec4e95d42"
  },
  {
    "url": "assets/js/13.6b5b4936.js",
    "revision": "3672d6823230b5071d98484450cd26ef"
  },
  {
    "url": "assets/js/14.e4d73e0e.js",
    "revision": "200a3a63d0100d0f9be921071549d76c"
  },
  {
    "url": "assets/js/15.c3a229a7.js",
    "revision": "6a7834cf7fe75cbc060c62e0e6a60968"
  },
  {
    "url": "assets/js/16.b3f93d66.js",
    "revision": "76facc6e0c8b4ce7e399300b18af2362"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.7f5d1aa4.js",
    "revision": "10177da2ddd2dc34f50f420fcdd37180"
  },
  {
    "url": "assets/js/4.94a2be9a.js",
    "revision": "75da37f665859ea313ceffcfc6da7fa0"
  },
  {
    "url": "assets/js/5.c3677659.js",
    "revision": "cb25d09b6c3f1126914acec181da79e1"
  },
  {
    "url": "assets/js/6.6307c95b.js",
    "revision": "d069610f893d7cf5d99cf4fd070d29cd"
  },
  {
    "url": "assets/js/7.d798b565.js",
    "revision": "164100a71b2fad14ddb0794c38db9dfd"
  },
  {
    "url": "assets/js/8.15c5c2d8.js",
    "revision": "872dca65bb13ff3fdc6cb5510eeb63b5"
  },
  {
    "url": "assets/js/9.1ca2371e.js",
    "revision": "1c5cecfaa38533a1c6c7c9bbcde28d08"
  },
  {
    "url": "assets/js/app.7e89e283.js",
    "revision": "f6efcf350b37d70d4e5cbc05e225cbf9"
  },
  {
    "url": "Contents.html",
    "revision": "2c47bfdb90e353aba807a90027a359ac"
  },
  {
    "url": "index.html",
    "revision": "bbd7168bdaa3e69ac825150b8a391e2f"
  },
  {
    "url": "logo.jpg",
    "revision": "5ea619e415a765784f72c963b52d1043"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
