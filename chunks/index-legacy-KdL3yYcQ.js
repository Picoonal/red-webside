!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function o(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(r){n(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function n(r,e,o){var n;return n=function(r,e){if("object"!=t(r)||!r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var n=o.call(r,e||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"),(e="symbol"==t(n)?n:String(n))in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var o,n,a,i,c=[],l=!0,u=!1;try{if(a=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(o=a.call(e)).done)&&(c.push(o.value),c.length!==r);l=!0);}catch(t){u=!0,n=t}finally{try{if(!l&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(u)throw n}}return c}}(t,r)||i(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}System.register(["./comp-libs-legacy-WBwXE9B0.js","./index.es-legacy-bmNMY5oB.js","./vue-vendor-legacy-Al3aG0Qu.js","./api-libs-legacy-RU4bIrO-.js","./locale-vendor-legacy-yTM7mGHv.js","./comp-vendor-legacy-Yl0XjNO2.js"],(function(e,n){"use strict";var i,c,l,u,d,s,f,g,v,p,m,b,h,y,w,x,k,S,j,O,z,_,A,I,E,N,C,L,T,M,D,P,F,V,H,J,q,W,B,K,R,Y,$,G,Q,U,X,Z,tt,rt,et,ot,nt,at,it;return{setters:[function(t){i=t._,c=t.a,l=t.L},function(t){u=t.t,d=t.i,s=t.n,f=t.a,g=t.b,v=t.c,p=t.d,m=t.w,b=t.u,h=t.e,y=t.r,w=t.f},function(t){x=t.r,k=t.w,S=t.c,j=t.Q,O=t.g,z=t.o,_=t.a4,A=t.y,I=t.a5,E=t.d,N=t.f,C=t.h,L=t.l,T=t._,M=t.p,D=t.u,P=t.B,F=t.F,V=t.N,H=t.x,J=t.M,q=t.a6,W=t.a7,B=t.a8,K=t.a9,R=t.i,Y=t.aa,$=t.e,G=t.ab,Q=t.q,U=t.T,X=t.a1},null,function(t){Z=t.u,tt=t.l,rt=t.a},function(t){et=t.D,ot=t.f,nt=t.A,at=t.M,it=t.N}],execute:function(){var n=document.createElement("style");function ct(t){var r,e=g(t);return null!=(r=null==e?void 0:e.$el)?r:e}n.textContent='.arco-notification-list{margin:0;padding-left:0;position:fixed;z-index:1003}.arco-notification-list-top-left{left:2rem;top:2rem}.arco-notification-list-top-right{right:2rem;top:2rem}.arco-notification-list-top-right .arco-notification{margin-left:auto}.arco-notification-list-bottom-left{bottom:2rem;left:2rem}.arco-notification-list-bottom-right{bottom:2rem;right:2rem}.arco-notification-list-bottom-right .arco-notification{margin-left:auto}.arco-notification{background-color:var(--color-bg-popup);border:.1rem solid var(--color-neutral-3);border-radius:var(--border-radius-medium);box-shadow:0 .4rem 1.2rem rgba(0,0,0,.15);box-sizing:border-box;display:flex;opacity:1;overflow:hidden;padding:2rem;position:relative;transition:opacity .2s linear;width:34rem}.arco-notification:not(:last-child){margin-bottom:2rem}.arco-notification-icon{align-items:center;display:flex;font-size:2.4rem}.arco-notification-info{background-color:var(--color-bg-popup);border-color:var(--color-neutral-3)}.arco-notification-info .arco-notification-icon{color:rgb(var(--primary-6))}.arco-notification-success{background-color:var(--color-bg-popup);border-color:var(--color-neutral-3)}.arco-notification-success .arco-notification-icon{color:rgb(var(--success-6))}.arco-notification-warning{background-color:var(--color-bg-popup);border-color:var(--color-neutral-3)}.arco-notification-warning .arco-notification-icon{color:rgb(var(--warning-6))}.arco-notification-error{background-color:var(--color-bg-popup);border-color:var(--color-neutral-3)}.arco-notification-error .arco-notification-icon{color:rgb(var(--danger-6))}.arco-notification-left{padding-right:1.6rem}.arco-notification-right{flex:1;word-break:break-word}.arco-notification-title{color:var(--color-text-1);font-size:1.6rem;font-weight:500}.arco-notification-title+.arco-notification-content{margin-top:.4rem}.arco-notification-content{color:var(--color-text-1);font-size:1.4rem}.arco-notification-error .arco-notification-content,.arco-notification-error .arco-notification-title,.arco-notification-info .arco-notification-content,.arco-notification-info .arco-notification-title,.arco-notification-success .arco-notification-content,.arco-notification-success .arco-notification-title,.arco-notification-warning .arco-notification-content,.arco-notification-warning .arco-notification-title{color:var(--color-text-1)}.arco-notification-footer{margin-top:1.6rem;text-align:right}.arco-notification-close-btn{color:var(--color-text-1);cursor:pointer;font-size:1.2rem;position:absolute;right:1.2rem;top:1.2rem}.arco-notification-close-btn>svg{position:relative}.arco-notification .arco-icon-hover.arco-notification-icon-hover:before{height:2rem;width:2rem}.slide-left-notification-appear-from,.slide-left-notification-enter-from{transform:translate(-100%)}.slide-left-notification-appear-to,.slide-left-notification-enter-to{transform:translate(0)}.slide-left-notification-appear-active,.slide-left-notification-enter-active{transition:transform .4s cubic-bezier(.3,1.3,.3,1)}.slide-left-notification-leave-from{opacity:1}.slide-left-notification-leave-to{height:0;margin-bottom:0;margin-top:0;opacity:0;padding-bottom:0;padding-top:0}.slide-left-notification-leave-active{transition:all .3s cubic-bezier(.34,.69,.1,1)}.slide-right-notification-appear-from,.slide-right-notification-enter-from{transform:translate(100%)}.slide-right-notification-appear-to,.slide-right-notification-enter-to{transform:translate(0)}.slide-right-notification-appear-active,.slide-right-notification-enter-active{transition:transform .4s cubic-bezier(.3,1.3,.3,1)}.slide-right-notification-leave-from{opacity:1}.slide-right-notification-leave-to{height:0;margin-bottom:0;margin-top:0;opacity:0;padding-bottom:0;padding-top:0}.slide-right-notification-leave-active{transition:all .3s cubic-bezier(.34,.69,.1,1)}.arco-avatar{align-items:center;background-color:var(--color-fill-4);box-sizing:border-box;color:var(--color-white);display:inline-flex;font-size:2rem;height:4rem;position:relative;vertical-align:middle;white-space:nowrap;width:4rem}.arco-avatar-circle,.arco-avatar-circle .arco-avatar-image{border-radius:var(--border-radius-circle)}.arco-avatar-circle .arco-avatar-image{overflow:hidden}.arco-avatar-square,.arco-avatar-square .arco-avatar-image{border-radius:var(--border-radius-medium)}.arco-avatar-square .arco-avatar-image{overflow:hidden}.arco-avatar-text{font-weight:500;left:50%;line-height:1;position:absolute;transform:translate(-50%);transform-origin:0 center}.arco-avatar-image{display:inline-block;height:100%;width:100%}.arco-avatar-image-icon{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.arco-avatar-image img,.arco-avatar-image picture{height:100%;width:100%}.arco-avatar-trigger-icon-button{background-color:var(--color-neutral-2);border-radius:var(--border-radius-circle);bottom:-.4rem;color:var(--color-fill-4);font-size:1.2rem;height:2rem;line-height:2rem;position:absolute;right:-.4rem;text-align:center;transition:background-color .1s linear;width:2rem;z-index:1}.arco-avatar-trigger-icon-mask{align-items:center;background-color:rgba(29,33,41,.6);border-radius:var(--border-radius-medium);color:var(--color-white);display:flex;font-size:1.6rem;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:0;transition:all .1s linear;width:100%;z-index:0}.arco-avatar-circle .arco-avatar-trigger-icon-mask{border-radius:var(--border-radius-circle)}.arco-avatar-with-trigger-icon{cursor:pointer}.arco-avatar-with-trigger-icon:hover .arco-avatar-trigger-icon-mask{opacity:1;z-index:2}.arco-avatar-with-trigger-icon:hover .arco-avatar-trigger-icon-button{background-color:var(--color-neutral-3)}.arco-avatar-group{display:inline-block;line-height:0}.arco-avatar-group-max-count-avatar{color:var(--color-white);cursor:default;font-size:2rem}.arco-avatar-group .arco-avatar{border:.2rem solid var(--color-bg-2)}.arco-avatar-group .arco-avatar:not(:first-child){margin-left:-1rem}.arco-avatar-group-popover .arco-avatar:not(:first-child){margin-left:.4rem}.arco-dropdown{background-color:var(--color-bg-popup);border:.1rem solid var(--color-fill-3);border-radius:var(--border-radius-medium);box-shadow:0 .4rem 1rem rgba(0,0,0,.1);box-sizing:border-box;padding:.4rem 0}.arco-dropdown-list{list-style:none;margin-bottom:0;margin-top:0;padding-left:0}.arco-dropdown-list-wrapper{max-height:20rem;overflow-y:auto}.arco-dropdown-option{align-items:center;background-color:transparent;box-sizing:border-box;color:var(--color-text-1);cursor:pointer;display:flex;font-size:1.4rem;line-height:3.6rem;padding:0 1.2rem;position:relative;text-align:left;width:100%;z-index:1}.arco-dropdown-option-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.arco-dropdown-option-has-suffix{justify-content:space-between}.arco-dropdown-option-active,.arco-dropdown-option:not(.arco-dropdown-option-disabled):hover{background-color:var(--color-fill-2);color:var(--color-text-1);transition:all .1s linear}.arco-dropdown-option-disabled{background-color:transparent;color:var(--color-text-4);cursor:not-allowed}.arco-dropdown-option-icon{display:inline-flex;margin-right:.8rem}.arco-dropdown-option-suffix{margin-left:1.2rem}.arco-dropdown-group:first-child .arco-dropdown-group-title{margin-top:.8rem}.arco-dropdown-group-title{box-sizing:border-box;color:var(--color-text-3);cursor:default;font-size:1.2rem;line-height:2rem;margin-top:.8rem;overflow:hidden;padding:0 1.2rem;text-overflow:ellipsis;white-space:nowrap;width:100%}.arco-dropdown-submenu{margin-top:-.4rem}.arco-dropdown.arco-dropdown-has-footer{padding-bottom:0}.arco-dropdown-footer{border-top:.1rem solid var(--color-fill-3)}header[data-v-bd12ab8d]{background:inherit;height:7.2rem;justify-content:space-between;opacity:1}header[data-v-bd12ab8d],header .logo[data-v-bd12ab8d]{align-items:center;display:flex}header .logo[data-v-bd12ab8d]{background-color:var(--primary-bg-color);height:100%;justify-content:center;width:20.9rem}header .utils-wrap[data-v-bd12ab8d]{align-items:center;display:flex;padding:2rem}header .utils-wrap .func-wrap[data-v-bd12ab8d]{align-items:center;display:flex;margin-right:2rem}header .utils-wrap .func-wrap .func-btn[data-v-bd12ab8d]{background-color:var(--primary-bg-color);border-radius:50%;color:var(--primary-icon-color);height:3rem;margin-left:1rem;padding:.5rem;width:3rem}header .utils-wrap .user-info-wrap[data-v-bd12ab8d]{align-items:center;display:flex}header .utils-wrap .user-info-wrap .user-info[data-v-bd12ab8d]{align-items:flex-end;display:flex;flex-direction:column;margin-right:1rem}header .utils-wrap .user-info-wrap .user-info span[data-v-bd12ab8d]{margin:.15em}header .utils-wrap .user-info-wrap .user-info .name[data-v-bd12ab8d]{font-weight:700}header .utils-wrap .user-info-wrap .user-info .email[data-v-bd12ab8d]{color:var(--grey-2)}aside[data-v-03552f94]{padding:var(--primary-big-gap);width:20.9rem}aside .nav-item[data-v-03552f94]{align-items:center;border-radius:var(--circular-bead);display:flex;font-size:1.6rem;height:4.8rem;margin-bottom:1rem;padding:0 2.5rem}aside .nav-item.router-link-exact-active[data-v-03552f94]{background-color:var(--primary-bg-color);color:var(--aside-active-color)}aside .nav-item .nav-icon[data-v-03552f94]{height:2.4rem;width:2.4rem}@media not all and (min-width:640px){aside[data-v-03552f94]{display:flex;justify-content:space-evenly;padding-bottom:1rem;padding-top:1rem;width:auto}aside .nav-item[data-v-03552f94]{aspect-ratio:1/1;justify-content:center;margin:0;padding-left:1rem;padding-right:1rem}aside .nav-item .nav-icon[data-v-03552f94]{margin-right:0}aside .nav-item span[data-v-03552f94]{display:none}}.layout[data-v-b37b0427]{background-color:var(--page-bg);color:var(--black);display:flex;flex-direction:column;height:100vh;max-height:100vh;overflow:hidden;width:100%}.layout .header-bar[data-v-b37b0427]{flex-shrink:0}.layout .content-wrap[data-v-b37b0427]{display:flex;flex:1;height:100%;overflow:hidden}.layout .content-wrap .aside-bar[data-v-b37b0427]{flex-shrink:0}.layout .page-wrap[data-v-b37b0427]{background-color:var(--grey-1);flex:1;height:100%;overflow-y:auto;padding:var(--primary-big-gap)}.layout .page-wrap .page-content[data-v-b37b0427]{background-color:var(--page-bg);border-radius:var(--section-radius);height:100%;overflow-x:auto;position:relative;width:100%}.layout .page-wrap .page-content[data-v-b37b0427] .layout-title{background-color:inherit;padding:var(--page-space);position:relative;z-index:1}.layout .page-wrap .page-content[data-v-b37b0427] .layout-title span{color:var(--layout-title-color);display:flex;flex-direction:column;font-size:1.6rem;font-weight:700;line-height:2.4rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.layout .page-wrap .page-content[data-v-b37b0427] .layout-title span:after{background:var(--primary-color-2);border-radius:var(--circular-bead);content:"";display:block;height:.5rem;width:100%}@media not all and (min-width:640px){.layout .content-wrap[data-v-b37b0427]{flex-direction:column}}\n',document.head.appendChild(n);var lt=d?window:void 0;function ut(){for(var t,e,n,i,c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];if("string"==typeof l[0]||Array.isArray(l[0])?(e=l[0],n=l[1],i=l[2],t=lt):(t=l[0],e=l[1],n=l[2],i=l[3]),!t)return s;Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]);var d=[],p=function(){d.forEach((function(t){return t()})),d.length=0},m=k((function(){return[ct(t),g(i)]}),(function(t){var i=a(t,2),c=i[0],l=i[1];if(p(),c){var u=f(l)?o({},l):l;d.push.apply(d,r(e.flatMap((function(t){return n.map((function(r){return function(t,r,e,o){return t.addEventListener(r,e,o),function(){return t.removeEventListener(r,e,o)}}(c,t,r,u)}))}))))}}),{immediate:!0,flush:"post"}),b=function(){m(),p()};return v(b),b}function dt(t){var r=function(){var t=x(!1);return O()&&z((function(){t.value=!0})),t}();return S((function(){return r.value,Boolean(t())}))}function st(t){var r,e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).window,o=void 0===e?lt:e,n=dt((function(){return o&&"matchMedia"in o&&"function"==typeof o.matchMedia})),a=x(!1),i=function(t){a.value=t.matches},c=function(){r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},l=j((function(){n.value&&(c(),"addEventListener"in(r=o.matchMedia(g(t)))?r.addEventListener("change",i):r.addListener(i),a.value=r.matches)}));return v((function(){l(),c(),r=void 0})),a}var ft="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},gt="__vueuse_ssr_handlers__",vt=pt();function pt(){return gt in ft||(ft[gt]=ft[gt]||{}),ft[gt]}function mt(t,r){return vt[t]||r}var bt={boolean:{read:function(t){return"true"===t},write:function(t){return String(t)}},object:{read:function(t){return JSON.parse(t)},write:function(t){return JSON.stringify(t)}},number:{read:function(t){return Number.parseFloat(t)},write:function(t){return String(t)}},any:{read:function(t){return t},write:function(t){return String(t)}},string:{read:function(t){return t},write:function(t){return String(t)}},map:{read:function(t){return new Map(JSON.parse(t))},write:function(t){return JSON.stringify(Array.from(t.entries()))}},set:{read:function(t){return new Set(JSON.parse(t))},write:function(t){return JSON.stringify(Array.from(t))}},date:{read:function(t){return new Date(t)},write:function(t){return t.toISOString()}}},ht="vueuse-storage";function yt(r,e,n){var a,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=i.flush,l=void 0===c?"pre":c,d=i.deep,s=void 0===d||d,f=i.listenToStorageChanges,v=void 0===f||f,p=i.writeDefaults,b=void 0===p||p,h=i.mergeDefaults,y=void 0!==h&&h,w=i.shallow,k=i.window,S=void 0===k?lt:k,j=i.eventFilter,O=i.onError,z=void 0===O?function(t){console.error(t)}:O,I=i.initOnMounted,E=(w?_:x)("function"==typeof e?e():e);if(!n)try{n=mt("getDefaultStorage",(function(){var t;return null==(t=lt)?void 0:t.localStorage}))()}catch(V){z(V)}if(!n)return E;var N=g(e),C=function(r){return null==r?"any":r instanceof Set?"set":r instanceof Map?"map":r instanceof Date?"date":"boolean"==typeof r?"boolean":"string"==typeof r?"string":"object"===t(r)?"object":Number.isNaN(r)?"any":"number"}(N),L=null!=(a=i.serializer)?a:bt[C],T=m(E,(function(){return function(t){try{if(null==t)n.removeItem(r);else{var e=L.write(t),o=n.getItem(r);o!==e&&(n.setItem(r,e),S&&S.dispatchEvent(new CustomEvent(ht,{detail:{key:r,oldValue:o,newValue:e,storageArea:n}})))}}catch(V){z(V)}}(E.value)}),{flush:l,deep:s,eventFilter:j}),M=T.pause,D=T.resume;return S&&v&&u((function(){ut(S,"storage",F),ut(S,ht,P),I&&F()})),I||F(),E;function P(t){F(t.detail)}function F(t){if(!t||t.storageArea===n)if(t&&null==t.key)E.value=N;else if(!t||t.key===r){M();try{(null==t?void 0:t.newValue)!==L.write(E.value)&&(E.value=function(t){var e=t?t.newValue:n.getItem(r);if(null==e)return b&&null!=N&&n.setItem(r,L.write(N)),N;if(!t&&y){var a=L.read(e);return"function"==typeof y?y(a,N):"object"!==C||Array.isArray(a)?a:o(o({},N),a)}return"string"!=typeof e?e:L.read(e)}(t))}catch(V){z(V)}finally{t?A(D):D()}}}}function wt(t){return st("(prefers-color-scheme: dark)",t)}function xt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.valueDark,e=void 0===r?"dark":r,n=t.valueLight,a=void 0===n?"":n,i=t.window,c=void 0===i?lt:i,l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.selector,e=void 0===r?"html":r,n=t.attribute,a=void 0===n?"class":n,i=t.initialValue,c=void 0===i?"auto":i,l=t.window,d=void 0===l?lt:l,s=t.storage,f=t.storageKey,g=void 0===f?"vueuse-color-scheme":f,v=t.listenToStorageChanges,m=void 0===v||v,b=t.storageRef,h=t.emitAuto,y=t.disableTransition,w=void 0===y||y,x=o({auto:"",light:"light",dark:"dark"},t.modes||{}),j=wt({window:d}),O=S((function(){return j.value?"dark":"light"})),z=b||(null==g?p(c):yt(g,c,s,{window:d,listenToStorageChanges:m})),_=S((function(){return"auto"===z.value?O.value:z.value})),A=mt("updateHTMLAttrs",(function(t,r,e){var o="string"==typeof t?null==d?void 0:d.document.querySelector(t):ct(t);if(o){var n;if(w&&((n=d.document.createElement("style")).appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),d.document.head.appendChild(n)),"class"===r){var a=e.split(/\s/g);Object.values(x).flatMap((function(t){return(t||"").split(/\s/g)})).filter(Boolean).forEach((function(t){a.includes(t)?o.classList.add(t):o.classList.remove(t)}))}else o.setAttribute(r,e);w&&(d.getComputedStyle(n).opacity,document.head.removeChild(n))}}));function I(t){var r;A(e,a,null!=(r=x[t])?r:t)}function E(r){t.onChanged?t.onChanged(r,I):I(r)}k(_,E,{flush:"post",immediate:!0}),u((function(){return E(_.value)}));var N=S({get:function(){return h?z.value:_.value},set:function(t){z.value=t}});try{return Object.assign(N,{store:z,system:O,state:_})}catch(C){return N}}(o(o({},t),{},{onChanged:function(r,e){var o;t.onChanged?null==(o=t.onChanged)||o.call(t,"dark"===r,e,r):e(r)},modes:{dark:e,light:a}})),d=S((function(){return l.system?l.system.value:wt({window:c}).value?"dark":"light"}));return S({get:function(){return"dark"===l.value},set:function(t){var r=t?"dark":"light";d.value===r?l.value="auto":l.value=r}})}var kt=I("userInfo",{state:function(){return{name:"Daojiang",email:"daojiang2ciyuan@gmail.com"}},getters:{},actions:{}}),St=function(t){return q("data-v-bd12ab8d"),t=t(),W(),t},jt=St((function(){return L("div",{class:"logo"},"logo",-1)})),Ot={class:"utils-wrap"},zt={class:"func-wrap"},_t={class:"func-btn change-language-btn"},At={class:"user-info-wrap"},It={class:"user-info"},Et={class:"name"},Nt={class:"email"},Ct=St((function(){return L("img",{alt:"avatar",src:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"},null,-1)})),Lt=c(E({__name:"LayoutHeader",setup:function(t){var r=Z().t,e=kt(),o=xt(),n=b(o);function a(){console.log("logout")}return function(t,c){var l=et,u=ot,d=nt;return N(),C("header",null,[jt,L("div",Ot,[L("div",zt,[L("div",{class:"func-btn toggle-dark-btn",onClick:c[0]||(c[0]=function(){return T(n)()})},[T(o)?(N(),M(T(i),{key:0,name:"sun"})):(N(),M(T(i),{key:1,name:"moon"}))]),D(u,null,{content:P((function(){return[(N(!0),C(F,null,V(T(tt),(function(t){return N(),M(l,{onClick:function(r){return e=t.language,void rt(e);var e}},{default:P((function(){return[H(J(t.label),1)]})),_:2},1032,["onClick"])})),256))]})),default:P((function(){return[L("div",_t,[D(T(i),{name:"language"})])]})),_:1})]),L("div",At,[L("div",It,[L("span",Et,J(T(e).name),1),L("span",Nt,J(T(e).email),1)]),D(u,{class:"user-avatar"},{content:P((function(){return[D(l,{onClick:a},{default:P((function(){return[H(J(T(r)("layout.header.logout")),1)]})),_:1})]})),default:P((function(){return[D(d,null,{default:P((function(){return[Ct]})),_:1})]})),_:1})])])])}}}),[["__scopeId","data-v-bd12ab8d"]]),Tt=c(E({__name:"LayoutAside",setup:function(t){var r=Z().t,e=B(),o=S((function(){return e.getRoutes()})),n=S((function(){var t=new Set;return o.value.filter((function(r){return!(!r.name||t.has(r.name))&&(t.add(r.name),!0)}))}));return function(t,e){return N(),C("aside",null,[(N(!0),C(F,null,V(n.value,(function(t){return N(),M(T(K),{key:t.path,class:"nav-item",to:{name:t.name}},{default:P((function(){return[D(T(i),{name:t.meta.icon,class:"nav-icon mr-4"},null,8,["name"]),L("span",null,J(T(r)(t.meta.label)),1)]})),_:2},1032,["to"])})),128))])}}}),[["__scopeId","data-v-03552f94"]]),Mt={class:"layout"},Dt={class:"content-wrap"},Pt={class:"page-wrap"},Ft={class:"page-content"},Vt=E({__name:"index",setup:function(t){var r;h({cacheTime:6e5,loadingDelay:0,loadingKeep:100,pollingWhenHidden:!0,pollingWhenOffline:!0,manual:!0});var e=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).window,r=void 0===t?lt:t,e=null==r?void 0:r.navigator,o=dt((function(){return e&&"language"in e})),n=x(null==e?void 0:e.language);return ut(r,"languagechange",(function(){e&&(n.value=e.language)})),{isSupported:o,language:n}}(),o=e.language;rt((null===(r=o.value)||void 0===r?void 0:r.split("-")[0])||"");var n=R("emitter"),a=Z().t,i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.window,e=void 0===r?lt:r,o=t.initialWidth,n=void 0===o?Number.POSITIVE_INFINITY:o,a=t.initialHeight,i=void 0===a?Number.POSITIVE_INFINITY:a,c=t.listenOrientation,l=void 0===c||c,d=t.includeScrollbar,s=void 0===d||d,f=x(n),g=x(i),v=function(){e&&(s?(f.value=e.innerWidth,g.value=e.innerHeight):(f.value=e.document.documentElement.clientWidth,g.value=e.document.documentElement.clientHeight))};if(v(),u(v),ut("resize",v,{passive:!0}),l){var p=st("(orientation: portrait)");k(p,(function(){return v()}))}return{width:f,height:g}}(),c=i.width,d=y(c),s=document.documentElement,f=S((function(){return Math.max(d.value/1920*10,7)})),g=x(!1);null==n||n.on("fullScreenLoading:show",(function(){g.value=!0})),null==n||n.on("fullScreenLoading:hide",w((function(){g.value=!1}),500)),null==n||n.on("message:error",(function(t){at.error(a(t))})),null==n||n.on("message:noteGenerateSuccess",(function(t){it.success(a("generateNoteSuccess",{name:t.name}))}));var v=k(d,(function(){s.style.fontSize="".concat(f.value,"px")}));return Y((function(){s.style.fontSize="".concat(f.value,"px"),window.postMessage("hideFirstLoading")})),$((function(){v(),null==n||n.all.clear()})),function(t,r){return N(),C(F,null,[L("section",Mt,[D(Lt,{class:"header-bar"}),L("section",Dt,[D(Tt,{class:"aside-bar"}),L("main",Pt,[L("div",Ft,[(N(),M(G,null,{fallback:P((function(){return[D(T(l))]})),default:P((function(){return[D(T(X))]})),_:1}))])])])]),(N(),M(U,{to:"body"},[g.value?(N(),M(T(l),{key:0,"blur-bg":!0})):Q("",!0)]))],64)}}});e("default",c(Vt,[["__scopeId","data-v-b37b0427"]]))}}}))}();
