if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-4d30eff7"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/O98JS-GGG5dXhJc3K_aYM/_buildManifest.js",revision:"4ea82dcda3bb158289563808b3b8da91"},{url:"/_next/static/O98JS-GGG5dXhJc3K_aYM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/150-f2888370d0b56d67.js",revision:"f2888370d0b56d67"},{url:"/_next/static/chunks/1fe56e14-ffb7d7faf54888be.js",revision:"ffb7d7faf54888be"},{url:"/_next/static/chunks/234-f02fffd871f33ab4.js",revision:"f02fffd871f33ab4"},{url:"/_next/static/chunks/26-6c52c1f0d8fc3e35.js",revision:"6c52c1f0d8fc3e35"},{url:"/_next/static/chunks/291.41291949bd5334f9.js",revision:"41291949bd5334f9"},{url:"/_next/static/chunks/415.9e8b2ebfd3981187.js",revision:"9e8b2ebfd3981187"},{url:"/_next/static/chunks/45.f7ced8e3ada945f7.js",revision:"f7ced8e3ada945f7"},{url:"/_next/static/chunks/492.a57c341f0b8a5790.js",revision:"a57c341f0b8a5790"},{url:"/_next/static/chunks/532.a4f31a6f3cde08d9.js",revision:"a4f31a6f3cde08d9"},{url:"/_next/static/chunks/571.accac8005c7df28f.js",revision:"accac8005c7df28f"},{url:"/_next/static/chunks/572.3939a15960222394.js",revision:"3939a15960222394"},{url:"/_next/static/chunks/675.a810a8f58739c21f.js",revision:"a810a8f58739c21f"},{url:"/_next/static/chunks/68-0fa6b5f16bc5c861.js",revision:"0fa6b5f16bc5c861"},{url:"/_next/static/chunks/699.430598a2b602f75b.js",revision:"430598a2b602f75b"},{url:"/_next/static/chunks/714.2fa12af38ae2db7f.js",revision:"2fa12af38ae2db7f"},{url:"/_next/static/chunks/745-c58419e37886908f.js",revision:"c58419e37886908f"},{url:"/_next/static/chunks/782-69094404add07f4a.js",revision:"69094404add07f4a"},{url:"/_next/static/chunks/79-a6c565ab5834b849.js",revision:"a6c565ab5834b849"},{url:"/_next/static/chunks/794-687b755b905d81e4.js",revision:"687b755b905d81e4"},{url:"/_next/static/chunks/8.a44cb7794c6e3efb.js",revision:"a44cb7794c6e3efb"},{url:"/_next/static/chunks/817-bea41a45a1351a74.js",revision:"bea41a45a1351a74"},{url:"/_next/static/chunks/846.5541b7f8deca0716.js",revision:"5541b7f8deca0716"},{url:"/_next/static/chunks/851.49bf5628c74a6aa6.js",revision:"49bf5628c74a6aa6"},{url:"/_next/static/chunks/874.84dd1b8de5a87c28.js",revision:"84dd1b8de5a87c28"},{url:"/_next/static/chunks/912-345f618cb786f704.js",revision:"345f618cb786f704"},{url:"/_next/static/chunks/924-f08e7c3bdd44bf00.js",revision:"f08e7c3bdd44bf00"},{url:"/_next/static/chunks/944.d81670b71595f68a.js",revision:"d81670b71595f68a"},{url:"/_next/static/chunks/949.7daede80c48df30b.js",revision:"7daede80c48df30b"},{url:"/_next/static/chunks/framework-e8b4b5a268edf91e.js",revision:"e8b4b5a268edf91e"},{url:"/_next/static/chunks/main-c56a2cd11dc1f51b.js",revision:"c56a2cd11dc1f51b"},{url:"/_next/static/chunks/pages/_app-fac11b1dad8fdc01.js",revision:"fac11b1dad8fdc01"},{url:"/_next/static/chunks/pages/_error-8a58b5756619aac6.js",revision:"8a58b5756619aac6"},{url:"/_next/static/chunks/pages/about-74a6f96a3f175f57.js",revision:"74a6f96a3f175f57"},{url:"/_next/static/chunks/pages/index-94577c7646b36829.js",revision:"94577c7646b36829"},{url:"/_next/static/chunks/pages/links-cbe65c37f19f0022.js",revision:"cbe65c37f19f0022"},{url:"/_next/static/chunks/pages/messages-967d3867803e9d71.js",revision:"967d3867803e9d71"},{url:"/_next/static/chunks/pages/open-source-e32094ecd2c0965d.js",revision:"e32094ecd2c0965d"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-c53c5ac32d137d44.js",revision:"c53c5ac32d137d44"},{url:"/_next/static/chunks/pages/timeline-3a03040bf0583c19.js",revision:"3a03040bf0583c19"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0569a6aa68e73f7f.js",revision:"0569a6aa68e73f7f"},{url:"/_next/static/css/0048b1d1c4bbdb14.css",revision:"0048b1d1c4bbdb14"},{url:"/_next/static/css/08c8cd8f9c994a93.css",revision:"08c8cd8f9c994a93"},{url:"/_next/static/css/26ade9120616e4f4.css",revision:"26ade9120616e4f4"},{url:"/_next/static/css/4044c88add663d32.css",revision:"4044c88add663d32"},{url:"/_next/static/css/553b8e6f5ddab98e.css",revision:"553b8e6f5ddab98e"},{url:"/_next/static/css/55a14c77feabc259.css",revision:"55a14c77feabc259"},{url:"/_next/static/css/62ba8dbf0d961203.css",revision:"62ba8dbf0d961203"},{url:"/_next/static/css/64258b590023357e.css",revision:"64258b590023357e"},{url:"/_next/static/css/6a1dd365214e78cf.css",revision:"6a1dd365214e78cf"},{url:"/_next/static/css/6d3933834b61c6a2.css",revision:"6d3933834b61c6a2"},{url:"/_next/static/css/8c698776525e9f26.css",revision:"8c698776525e9f26"},{url:"/_next/static/css/9d3cd056a91cf22e.css",revision:"9d3cd056a91cf22e"},{url:"/_next/static/css/9f2131a4f3ae6f6a.css",revision:"9f2131a4f3ae6f6a"},{url:"/_next/static/css/a65d4781432e2230.css",revision:"a65d4781432e2230"},{url:"/_next/static/css/c8e78a3166759c02.css",revision:"c8e78a3166759c02"},{url:"/_next/static/css/da6e02eb1debb495.css",revision:"da6e02eb1debb495"},{url:"/_next/static/css/e7d3ac9eb78fed44.css",revision:"e7d3ac9eb78fed44"},{url:"/_next/static/css/f18e7df7d32c0b39.css",revision:"f18e7df7d32c0b39"},{url:"/_next/static/css/fd298ee908206444.css",revision:"fd298ee908206444"},{url:"/_next/static/media/banner.a0cfa05d.jpg",revision:"a0cfa05d"},{url:"/_next/static/media/logoh64.5e502f64.png",revision:"5e502f64"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/icon-128x128.png",revision:"387cafa7db818f6362ab048b8da4900a"},{url:"/icons/icon-144x144.png",revision:"11e470c1dee7849e3ce807ed4c6a9b21"},{url:"/icons/icon-152x152.png",revision:"e3cc0ee3ae242120c78789e75c384d2a"},{url:"/icons/icon-16x16.png",revision:"d61611e3db8733b6a1953e400984b90e"},{url:"/icons/icon-192x192.png",revision:"2345a4d6b839802d4fd3bbfe009431fc"},{url:"/icons/icon-32x32.png",revision:"6dc11ac9db64f341661506d1cdc1e06e"},{url:"/icons/icon-384x384.png",revision:"52c41caef927cac883696f8d2c2d1e1f"},{url:"/icons/icon-512x512.png",revision:"59da797691bc5e6c00b685403844c80e"},{url:"/icons/icon-72x72.png",revision:"8cbeb212f92002d9dac855c40a87cdc9"},{url:"/icons/icon-96x96.png",revision:"f69a5dde25c9e5653d499cb864a6f6ff"},{url:"/manifest.json",revision:"6ff1563454f3b94cf9483284bce72b8a"},{url:"/score.png",revision:"ab61575eb5e35c84575adb6d82d47ede"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/webicon.ico",revision:"7cffec4fd8037c91676370bf14d3fdec"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));