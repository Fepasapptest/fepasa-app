if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>n(e,c),t={module:{uri:c},exports:o,require:d};i[c]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CTvC-PG6.js",revision:null},{url:"assets/index-CUcrAHke.css",revision:null},{url:"index.html",revision:"dc6c399cf001811d8a03742f3f14d085"},{url:"registerSW.js",revision:"9fe38a406e982436d73d3d534941ee81"},{url:"favicon.svg",revision:"5b390dc722716a6fb6d174dbafab68ca"},{url:"apple-touch-icon.png",revision:"fe5238a5e5f5a8dba039879a5ed1ac12"},{url:"pwa-192x192.png",revision:"e5834768cb68c64ae4734a87edee45ae"},{url:"pwa-512x512.png",revision:"1df6e708b1c929084cadb64cdc0cbc91"},{url:"manifest.webmanifest",revision:"416ccd4a7e87bd2592bd1778801eff7a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
