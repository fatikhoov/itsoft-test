(()=>{var e,r,n={579:(e,r,n)=>{n.e(387).then(n.bind(n,387)).then((()=>{console.log("Стили успешно загружены")})).catch((e=>{console.log("Ошибока при загрузке стилей",e)}))}},t={};function o(e){var r=t[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var i=t[e]={id:e,exports:{}};try{var a={id:e,module:i,factory:n[e],require:o};o.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}o.m=n,o.c=t,o.i=[],o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,n)=>(o.f[n](e,r),r)),[])),o.u=e=>e+".bundle.js",o.hu=e=>e+"."+o.h()+".hot-update.js",o.miniCssF=e=>e+".styles.css",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"54ec06dc3145b1f67d8a",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="itsoft-test-front-end:",o.l=(n,t,i,a)=>{if(e[n])e[n].push(t);else{var d,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==r+i){d=u;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+i),d.src=n),e[n]=[t];var f=(r,t)=>{d.onerror=d.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),c&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t={},i=o.c,a=[],d=[],c="idle",s=0,l=[];function u(e){c=e;for(var r=[],n=0;n<d.length;n++)r[n]=d[n].call(null,e);return Promise.all(r)}function f(){0==--s&&u("ready").then((function(){if(0===s){var e=l;l=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return u("check").then(o.hmrM).then((function(n){return n?u("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,i){return o.hmrC[i](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):u("ready").then((function(){return t}))},0===s?r():new Promise((function(e){l.push((function(){e(r())}))}));var r}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,d=u("apply"),c=function(e){a||(a=e)},s=[];return t.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)s.push(r[n])}})),Promise.all([i,d]).then((function(){return a?u("fail").then((function(){throw a})):n?v(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):u("idle").then((function(){return s}))}))}function m(){if(n)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){n.forEach((function(n){o.hmrI[e](n,r)}))})),n=void 0,!0}o.hmrD=t,o.i.push((function(l){var v,m,y,g,b=l.module,_=function(r,n){var t=i[n];if(!t)return r;var o=function(o){if(t.hot.active){if(i[o]){var d=i[o].parents;-1===d.indexOf(n)&&d.push(n)}else a=[n],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+n),a=[];return r(o)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&"e"!==l&&Object.defineProperty(o,l,d(l));return o.e=function(e){return function(e){switch(c){case"ready":u("prepare");case"prepare":return s++,e.then(f,f),e;default:return e}}(r.e(e))},o}(l.require,l.id);b.hot=(v=l.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){a=m.parents.slice(),e=y?void 0:v,o(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,r)})),u("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return c;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:t[v]},e=void 0,g),b.parents=a,b.children=[],a=[],l.require=_})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var t=n.length-1;t>-1&&!e;)e=n[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{if("undefined"!=typeof document){var e=(e,r,n,t,o)=>{var i=document.createElement("link");return i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=n=>{if(i.onerror=i.onload=null,"load"===n.type)t();else{var a=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=d,i.parentNode&&i.parentNode.removeChild(i),o(c)}},i.href=r,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},r=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},n={179:0};o.f.miniCss=(t,i)=>{n[t]?i.push(n[t]):0!==n[t]&&{387:1}[t]&&i.push(n[t]=(n=>new Promise(((t,i)=>{var a=o.miniCssF(n),d=o.p+a;if(r(a,d))return t();e(n,d,null,t,i)})))(t).then((()=>{n[t]=0}),(e=>{throw delete n[t],e})))};var t=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<t.length;e++){var r=t[e];r.parentNode&&r.parentNode.removeChild(r)}t.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}});o.hmrC.miniCss=(n,d,c,s,l,u)=>{l.push(a),n.forEach((n=>{var a=o.miniCssF(n),d=o.p+a,c=r(a,d);c&&s.push(new Promise(((r,o)=>{var a=e(n,d,c,(()=>{a.as="style",a.rel="preload",r()}),o);t.push(c),i.push(a)})))}))}}})(),(()=>{var e,r=o.hmrS_jsonp=o.hmrS_jsonp||{179:0};o.f.j=(e,n)=>{var t=o.o(r,e)?r[e]:void 0;if(0!==t)if(t)n.push(t[2]);else{var i=new Promise(((n,o)=>t=r[e]=[n,o]));n.push(t[2]=i);var a=o.p+o.u(e),d=new Error;o.l(a,(n=>{if(o.o(r,e)&&(0!==(t=r[e])&&(r[e]=void 0),t)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,t[1](d)}}),"chunk-"+e,e)}};var n,t,i,a,d={};function c(r,n){return e=n,new Promise(((e,n)=>{d[r]=e;var t=o.p+o.hu(r),i=new Error;o.l(t,(e=>{if(d[r]){d[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+r+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function s(e){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),a=i.id,d=i.chain,s=o.c[a];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:a};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],f=o.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:d.concat([u]),moduleId:a,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[a]?(n[u]||(n[u]=[]),c(n[u],[a])):(delete n[u],r.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,n=void 0;var s={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(o.o(t,p)){var h,v=t[p],m=!1,y=!1,g=!1,b="";switch((h=v?d(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,c(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),c(s[p],h.outdatedDependencies[p]));g&&(c(l,[h.moduleId]),u[p]=f)}t=void 0;for(var _,E=[],w=0;w<l.length;w++){var k=l[w],I=o.c[k];I&&(I.hot._selfAccepted||I.hot._main)&&u[k]!==f&&!I.hot._selfInvalidated&&E.push({module:k,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;i.forEach((function(e){delete r[e]})),i=void 0;for(var n,t=l.slice();t.length>0;){var a=t.pop(),d=o.c[a];if(d){var c={},u=d.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,c);for(o.hmrD[a]=c,d.hot.active=!1,delete o.c[a],delete s[a],w=0;w<d.children.length;w++){var f=o.c[d.children[w]];f&&(e=f.parents.indexOf(a))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(o.o(s,p)&&(d=o.c[p]))for(_=s[p],w=0;w<_.length;w++)n=_[w],(e=d.children.indexOf(n))>=0&&d.children.splice(e,1)},apply:function(r){for(var n in u)o.o(u,n)&&(o.m[n]=u[n]);for(var t=0;t<a.length;t++)a[t](o);for(var i in s)if(o.o(s,i)){var d=o.c[i];if(d){_=s[i];for(var c=[],f=[],p=[],h=0;h<_.length;h++){var v=_[h],m=d.hot._acceptedDependencies[v],y=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==c.indexOf(m))continue;c.push(m),f.push(y),p.push(v)}}for(var g=0;g<c.length;g++)try{c[g].call(null,_)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:i,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<E.length;b++){var w=E[b],k=w.module;try{w.require(k)}catch(n){if("function"==typeof w.errorHandler)try{w.errorHandler(n,{moduleId:k,module:o.c[k]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:n}),e.ignoreErrored||r(n)}}return l}}}self.webpackHotUpdateitsoft_test_front_end=(r,n,i)=>{for(var c in n)o.o(n,c)&&(t[c]=n[c],e&&e.push(c));i&&a.push(i),d[r]&&(d[r](),d[r]=void 0)},o.hmrI.jsonp=function(e,r){t||(t={},a=[],i=[],r.push(s)),o.o(t,e)||(t[e]=o.m[e])},o.hmrC.jsonp=function(e,d,l,u,f,p){f.push(s),n={},i=d,t=l.reduce((function(e,r){return e[r]=!1,e}),{}),a=[],e.forEach((function(e){o.o(r,e)&&void 0!==r[e]?(u.push(c(e,p)),n[e]=!0):n[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,r){n&&o.o(n,e)&&!n[e]&&(r.push(c(e)),n[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))};var l=(e,n)=>{var t,i,[a,d,c]=n,s=0;if(a.some((e=>0!==r[e]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);c&&c(o)}for(e&&e(n);s<a.length;s++)i=a[s],o.o(r,i)&&r[i]&&r[i][0](),r[i]=0},u=self.webpackChunkitsoft_test_front_end=self.webpackChunkitsoft_test_front_end||[];u.forEach(l.bind(null,0)),u.push=l.bind(null,u.push.bind(u))})(),o(579)})();