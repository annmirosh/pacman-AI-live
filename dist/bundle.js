!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!L[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--y&&0===I&&_()}(e,t),n&&n(e,t)};var t,r=!0,a="5b4bdf026125c473af55",c={},o=[],s=[];function i(e){var n=D[e];if(!n)return H;var r=function(r){return n.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(o=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),o=[]),H(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,a(c));return r.e=function(e){return"ready"===u&&p("prepare"),I++,H.e(e).then(n,(function(e){throw n(),e}));function n(){I--,"prepare"===u&&(g[e]||E(e),0===I&&0===y&&_())}},r.t=function(e,n){return 1&n&&(e=r(e)),H.t(e,-2&n)},r}function d(n){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[n]=e[n],p("ready");break;case"ready":k(n);break;case"prepare":case"check":case"dispose":case"apply":(m=m||[]).push(n)}},check:O,apply:x,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:c[n]};return t=void 0,r}var l=[],u="idle";function p(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,h,v,m,y=0,I=0,g={},w={},L={};function b(e){return+e+""===e?+e:e}function O(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,c=H.p+""+a+".hot-update.json";r.open("GET",c,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+c+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return p(j()?"ready":"idle"),null;w={},g={},L=e.c,v=e.h,p("prepare");var n=new Promise((function(e,n){f={resolve:e,reject:n}}));h={};return E(0),"prepare"===u&&0===I&&0===y&&_(),n}));var n}function E(e){L[e]?(w[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+a+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function _(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then((function(){return x(r)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(b(t));e.resolve(n)}}function x(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(r){var s,i,d,l,u;function f(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),c=a.id,o=a.chain;if((l=D[c])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:c};for(var s=0;s<l.parents.length;s++){var i=l.parents[s],d=D[i];if(d){if(d.hot._declinedDependencies[c])return{type:"declined",chain:o.concat([i]),moduleId:c,parentId:i};-1===n.indexOf(i)&&(d.hot._acceptedDependencies[c]?(t[i]||(t[i]=[]),y(t[i],[c])):(delete t[i],n.push(i),r.push({chain:o.concat([i]),id:i})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}j();var I={},g=[],w={},O=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var _;u=b(E),_=h[E]?f(u):{type:"disposed",moduleId:E};var x=!1,k=!1,M=!1,P="";switch(_.chain&&(P="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(x=new Error("Aborted because of self decline: "+_.moduleId+P));break;case"declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+P));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(_),r.ignoreUnaccepted||(x=new Error("Aborted because "+u+" is not accepted"+P));break;case"accepted":r.onAccepted&&r.onAccepted(_),k=!0;break;case"disposed":r.onDisposed&&r.onDisposed(_),M=!0;break;default:throw new Error("Unexception type "+_.type)}if(x)return p("abort"),Promise.reject(x);if(k)for(u in w[u]=h[u],y(g,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(I[u]||(I[u]=[]),y(I[u],_.outdatedDependencies[u]));M&&(y(g,[_.moduleId]),w[u]=O)}var S,A=[];for(i=0;i<g.length;i++)u=g[i],D[u]&&D[u].hot._selfAccepted&&w[u]!==O&&!D[u].hot._selfInvalidated&&A.push({module:u,parents:D[u].parents.slice(),errorHandler:D[u].hot._selfAccepted});p("dispose"),Object.keys(L).forEach((function(e){!1===L[e]&&function(e){delete installedChunks[e]}(e)}));var N,T,U=g.slice();for(;U.length>0;)if(u=U.pop(),l=D[u]){var q={},C=l.hot._disposeHandlers;for(d=0;d<C.length;d++)(s=C[d])(q);for(c[u]=q,l.hot.active=!1,delete D[u],delete I[u],d=0;d<l.children.length;d++){var B=D[l.children[d]];B&&((S=B.parents.indexOf(u))>=0&&B.parents.splice(S,1))}}for(u in I)if(Object.prototype.hasOwnProperty.call(I,u)&&(l=D[u]))for(T=I[u],d=0;d<T.length;d++)N=T[d],(S=l.children.indexOf(N))>=0&&l.children.splice(S,1);p("apply"),void 0!==v&&(a=v,v=void 0);for(u in h=void 0,w)Object.prototype.hasOwnProperty.call(w,u)&&(e[u]=w[u]);var R=null;for(u in I)if(Object.prototype.hasOwnProperty.call(I,u)&&(l=D[u])){T=I[u];var X=[];for(i=0;i<T.length;i++)if(N=T[i],s=l.hot._acceptedDependencies[N]){if(-1!==X.indexOf(s))continue;X.push(s)}for(i=0;i<X.length;i++){s=X[i];try{s(T)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:u,dependencyId:T[i],error:e}),r.ignoreErrored||R||(R=e)}}}for(i=0;i<A.length;i++){var Y=A[i];u=Y.module,o=Y.parents,t=u;try{H(u)}catch(e){if("function"==typeof Y.errorHandler)try{Y.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),r.ignoreErrored||R||(R=n),R||(R=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:u,error:e}),r.ignoreErrored||R||(R=e)}}if(R)return p("fail"),Promise.reject(R);if(m)return n(r).then((function(e){return g.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return p("idle"),new Promise((function(e){e(g)}))}(n=n||{})}function j(){if(m)return h||(h={}),m.forEach(k),m=void 0,!0}function k(n){Object.prototype.hasOwnProperty.call(h,n)||(h[n]=e[n])}var D={};function H(n){if(D[n])return D[n].exports;var t=D[n]={i:n,l:!1,exports:{},hot:d(n),parents:(s=o,o=[],s),children:[]};return e[n].call(t.exports,t,t.exports,i(n)),t.l=!0,t.exports}H.m=e,H.c=D,H.d=function(e,n,t){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(H.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)H.d(t,r,function(n){return e[n]}.bind(null,r));return t},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="",H.h=function(){return a},i(0)(H.s=0)}([function(e,n){const t=document.getElementById("score"),r=document.getElementById("start-button");let a,c,o,s,i,d,l=0;const u=document.querySelector(".grid"),p=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],f=[];function h(){ghosts.forEach(e=>function(e){const n=[-1,1,28,-28];let t=n[Math.floor(Math.random()*n.length)];e.timerId=setInterval((function(){f[e.currentIndex+t].classList.contains("ghost")||f[e.currentIndex+t].classList.contains("wall")?t=n[Math.floor(Math.random()*n.length)]:(f[e.currentIndex].classList.remove(e.className),f[e.currentIndex].classList.remove("ghost","scared-ghost"),e.currentIndex+=t,f[e.currentIndex].classList.add(e.className,"ghost")),e.isScared&&f[e.currentIndex].classList.add("scared-ghost"),e.isScared&&f[e.currentIndex].classList.contains("pac-man")&&(f[e.currentIndex].classList.remove(e.className,"ghost","scared-ghost"),e.currentIndex=e.startIndex,l+=100,f[e.currentIndex].classList.add(e.className,"ghost"))}),e.speed)}(e)),document.addEventListener("keyup",L),c=setInterval(j,100),a=setInterval(x,100)}!function(){for(let e=0;e<p.length;e++){const n=document.createElement("div");u.appendChild(n),f.push(n),0===p[e]?(f[e].classList.add("pac-dot"),f[e].innerHTML="."):1===p[e]?f[e].classList.add("wall"):2===p[e]?f[e].classList.add("ghost-lair"):3===p[e]&&f[e].classList.add("power-pellet")}}(),r.addEventListener("click",h);let v=490;function m(){f[v].classList.remove("pac-man"),f[v].classList.remove("pac-man-right"),f[v].classList.remove("pac-man-left"),f[v].classList.remove("pac-man-down"),f[v].classList.remove("pac-man-up")}function y(){clearInterval(s),clearInterval(i),clearInterval(d),o=setInterval((function(){f[v-1].classList.contains("wall")||f[v-1].classList.contains("ghost-lair")?clearInterval(o):(m(),v-=1,f[v-1]===f[363]&&(v=391),b(),O()),f[v].classList.add("pac-man"),f[v].classList.add("pac-man-left")}),500)}function I(){clearInterval(o),clearInterval(i),clearInterval(d),s=setInterval((function(){f[v+1].classList.contains("wall")||f[v+1].classList.contains("ghost-lair")?clearInterval(s):(m(),v+=1,f[v+1]===f[392]&&(v=364),b(),O()),f[v].classList.add("pac-man"),f[v].classList.add("pac-man-right")}),500)}function g(){clearInterval(s),clearInterval(o),clearInterval(d),i=setInterval((function(){f[v-28].classList.contains("wall")||f[v-28].classList.contains("ghost-lair")?clearInterval(i):(m(),v-=28,f[v].classList.add("pac-man"),f[v].classList.add("pac-man-up"),b(),O())}),500)}function w(){clearInterval(s),clearInterval(i),clearInterval(o),d=setInterval((function(){f[v+28].classList.contains("wall")||f[v+28].classList.contains("ghost-lair")?clearInterval(d):(m(),v+=28,f[v].classList.add("pac-man"),f[v].classList.add("pac-man-down"),b(),O())}),500)}function L(e){switch(e.keyCode){case 37:y();break;case 38:g();break;case 39:I();break;case 40:w()}}function b(){f[v].classList.contains("pac-dot")&&(l++,t.innerHTML=l,f[v].classList.remove("pac-dot"),f[v].innerHTML="")}function O(){f[v].classList.contains("power-pellet")&&(l+=10,ghosts.forEach(e=>e.isScared=!0),setTimeout(E,1e4),f[v].classList.remove("power-pellet"))}function E(){ghosts.forEach(e=>e.isScared=!1)}f[v].classList.add("pac-man"),f[v].classList.add("pac-man-right");class _{constructor(e,n,t){this.className=e,this.startIndex=n,this.speed=t,this.currentIndex=n,this.isScared=!1,this.timerId=NaN}}function x(){f[v].classList.contains("ghost")&&!f[v].classList.contains("scared-ghost")&&(ghosts.forEach(e=>clearInterval(e.timerId)),document.removeEventListener("keyup",L),t.innerHTML="YOU LOSE!",clearInterval(a),clearInterval(c))}function j(){l>274&&(ghosts.forEach(e=>clearInterval(e.timerId)),document.removeEventListener("keyup",L),t.innerHTML="YOU WIN!",clearInterval(a),clearInterval(c))}ghosts=[new _("blinky",348,250),new _("pinky",376,400),new _("inky",351,300),new _("clyde",379,500)],ghosts.forEach(e=>{f[e.currentIndex].classList.add(e.className),f[e.currentIndex].classList.add("ghost")});alanBtn({key:"e8f1b201013ac1798e0046cc3018a3322e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){"go-left"===e.command&&y(),"go-right"===e.command&&I(),"go-down"===e.command&&w(),"go-up"===e.command&&g(),"start-game"===e.command&&h()},rootEl:document.getElementById("alan-btn")})}]);
//# sourceMappingURL=bundle.js.map