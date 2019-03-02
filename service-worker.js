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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a41e85667b61054d224646b3ab5550c7"
  },
  {
    "url": "assets/css/0.styles.a5b5bc33.css",
    "revision": "3bd50f2889554b1f94d7b510cb280724"
  },
  {
    "url": "assets/img/agile-lean-sigma.117bf0a6.jpg",
    "revision": "117bf0a6a27c7fafc64aa9bccfb479a4"
  },
  {
    "url": "assets/img/lear_mvp1_all.6b1d66b3.png",
    "revision": "6b1d66b346c6338c6ad4f00164692b74"
  },
  {
    "url": "assets/img/registry-wardleymap.372883bb.png",
    "revision": "372883bb2af5523c1a40ee7edcc881ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f7eea532.js",
    "revision": "8efbc23b8e1c3d4a13b0ab14a92a9227"
  },
  {
    "url": "assets/js/11.d1c05ba9.js",
    "revision": "aef19cc2553ea9820803004aa5e79e7f"
  },
  {
    "url": "assets/js/12.8415b99c.js",
    "revision": "c264973ed1a214d477d5e47df149105a"
  },
  {
    "url": "assets/js/13.f5464311.js",
    "revision": "0ca38a743a81de88a75e9623bc4b9b24"
  },
  {
    "url": "assets/js/14.23cd71db.js",
    "revision": "410277510eacead4975a385cc759e502"
  },
  {
    "url": "assets/js/15.75ba5814.js",
    "revision": "233266492856651660c1645af8f34887"
  },
  {
    "url": "assets/js/16.542c383d.js",
    "revision": "ea3fa39481aab743a86fee82e34a5458"
  },
  {
    "url": "assets/js/17.1b0d9bb6.js",
    "revision": "01ca556c100ef3f662d8250338402d10"
  },
  {
    "url": "assets/js/18.598b1e96.js",
    "revision": "e378f7fede77223a87609413963240a8"
  },
  {
    "url": "assets/js/19.33bc5912.js",
    "revision": "34428b234374ceceff09b4d0015fe8c4"
  },
  {
    "url": "assets/js/20.6517e3ef.js",
    "revision": "1b63480a6f68ce8f465d6d91c56a2668"
  },
  {
    "url": "assets/js/21.166e7cc0.js",
    "revision": "9ac0c97f9622772796a7b884899ea90a"
  },
  {
    "url": "assets/js/22.7e4646e8.js",
    "revision": "ae8a0c22958700991b0f47f114c5a8bb"
  },
  {
    "url": "assets/js/23.6418d73c.js",
    "revision": "8915e42635856263de296b9cb095ea1f"
  },
  {
    "url": "assets/js/24.d8292b22.js",
    "revision": "ce97dc41fe04c0531b080a5fcbac0e2b"
  },
  {
    "url": "assets/js/25.91039c50.js",
    "revision": "da968735fb971a93fcec43ab0e9da61b"
  },
  {
    "url": "assets/js/26.128630c4.js",
    "revision": "3263a44f5d80d91a778929f45359ac9e"
  },
  {
    "url": "assets/js/27.a7472175.js",
    "revision": "abf7ca189a5e35fed263e089e7fde01f"
  },
  {
    "url": "assets/js/28.1ebe06c3.js",
    "revision": "3b85946868a3a4a9afdfde4e0fb1460b"
  },
  {
    "url": "assets/js/29.d2960f61.js",
    "revision": "c5060e9a3fb166725f41cb8dfef9ebbb"
  },
  {
    "url": "assets/js/3.eca59ce7.js",
    "revision": "5ea87f0aa413af3a88a79d1050967ea7"
  },
  {
    "url": "assets/js/30.ff8495e5.js",
    "revision": "a5df78704d215906a5d3bfa5c6007a6f"
  },
  {
    "url": "assets/js/31.04c144db.js",
    "revision": "465472e33153c29f9663a15d6a688ebf"
  },
  {
    "url": "assets/js/32.cce39f79.js",
    "revision": "26ed2bde887f41c67b54f8025a9564e9"
  },
  {
    "url": "assets/js/33.df3a416e.js",
    "revision": "ae5fc54bf1961c9528d874451c2c18cc"
  },
  {
    "url": "assets/js/4.9f537b86.js",
    "revision": "df068e446b55ad3cba5fd99b3c70b476"
  },
  {
    "url": "assets/js/5.6226dfe1.js",
    "revision": "e0ab5c036990ebf9d4cc4edde0ef7c18"
  },
  {
    "url": "assets/js/6.33ee7ed3.js",
    "revision": "aa979c00250a0d0ed99218a46812b06f"
  },
  {
    "url": "assets/js/7.ced2aa34.js",
    "revision": "b66ebf9be0c123ffe47858d2c2efeb8d"
  },
  {
    "url": "assets/js/8.3ac1c9f6.js",
    "revision": "9747b5d86b44edb83f014dbbc2f22dfb"
  },
  {
    "url": "assets/js/9.05fbe85a.js",
    "revision": "6b9da7bbec26e7bdb797dfb32fc6bead"
  },
  {
    "url": "assets/js/app.c5fa9d5a.js",
    "revision": "34fe0f214226a14ff7cfc543c311068b"
  },
  {
    "url": "assets/js/vendors~notification.4e9794df.js",
    "revision": "f2813c6a11af5c396c4e1ec0f3197d44"
  },
  {
    "url": "design/index.html",
    "revision": "b5ccd99b0eef13343e67250a77acedcd"
  },
  {
    "url": "design/methodology.html",
    "revision": "44ce545ebea711520458f5cf666b2707"
  },
  {
    "url": "design/mvp-ar/database.html",
    "revision": "37eba8768a8bbd3eac85bfedd5ef1160"
  },
  {
    "url": "design/mvp-ar/index.html",
    "revision": "df77484e312969a0384ce340ac6a295d"
  },
  {
    "url": "faq/index.html",
    "revision": "b8c90ed9bbaa97a65832527b5775e6a1"
  },
  {
    "url": "guide/api-services/deploy.html",
    "revision": "a24bf05b3d3e5c01585a402c901157f5"
  },
  {
    "url": "guide/api-services/directory-structure.html",
    "revision": "c9ff8ccb92e79c90ab27fadececd1d96"
  },
  {
    "url": "guide/api-services/setup.html",
    "revision": "c93c2c2144be1cca7f3c824eeac00cce"
  },
  {
    "url": "guide/database/index.html",
    "revision": "38e2f41b80f7d516a50fccad17fbe18e"
  },
  {
    "url": "guide/documentation.html",
    "revision": "301edea44d1a7219267e682c9dacca5f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3b61087a8098e322f14bfe24206ca9a6"
  },
  {
    "url": "guide/index.html",
    "revision": "863e570da2638ada48c9ad11a2604fdb"
  },
  {
    "url": "guide/standards.html",
    "revision": "dc057a94a6fd22142678943aeaa85a84"
  },
  {
    "url": "guide/testing/annual-report-test-plan.html",
    "revision": "5de518ed6c3fc66006aa3b26ccbd3245"
  },
  {
    "url": "guide/testing/quality-plan.html",
    "revision": "00ad41fec46bd070436b754e003823a5"
  },
  {
    "url": "guide/tools.html",
    "revision": "16aec61f69f21e4ac992736c4cb444c9"
  },
  {
    "url": "guide/web-app/deploy.html",
    "revision": "a5a163d5f6b049f7decce3b4e36939ba"
  },
  {
    "url": "guide/web-app/directory-structure.html",
    "revision": "94c7287b6dfe194d181eb3b7d89294e7"
  },
  {
    "url": "guide/web-app/i18n.html",
    "revision": "c17445d70e6ed8a6a158186483d738cb"
  },
  {
    "url": "guide/web-app/setup.html",
    "revision": "4f598c9ca8986a36d401b0015f8295a0"
  },
  {
    "url": "hero.png",
    "revision": "e23db9931fb14055b765092ce28a4b70"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/Asset 1.png",
    "revision": "bc4ceb61731ac94966fa60b3caf8ab1c"
  },
  {
    "url": "icons/favicon-16x16.1.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "bc4ceb61731ac94966fa60b3caf8ab1c"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "03270dd26c303e34ef76284ae9ba63c2"
  },
  {
    "url": "lear_mvp1_all.png",
    "revision": "6b1d66b346c6338c6ad4f00164692b74"
  },
  {
    "url": "logo.png",
    "revision": "e23db9931fb14055b765092ce28a4b70"
  },
  {
    "url": "other/glossary.html",
    "revision": "640826c2f8876ac722e583467d214573"
  },
  {
    "url": "registry-wardleymap.png",
    "revision": "372883bb2af5523c1a40ee7edcc881ea"
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
