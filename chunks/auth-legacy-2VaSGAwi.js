System.register(["./comp-libs-legacy-Tn2Soy_M.js","./api-libs-legacy-MBegjXx6.js","./vue-vendor-legacy-6ZUtezK6.js","../assets/index-legacy-cJNsLuNE.js","./locale-vendor-legacy-cAkxZA8G.js","./comp-vendor-legacy-k98cxoSB.js"],(function(e,t){"use strict";var a,n,r,o,l,i,c,u,f,s,d,m,g,h,p;return{setters:[function(e){a=e.e,n=e.f,r=e.a},null,function(e){o=e.d,l=e.a8,i=e.i,c=e.r,u=e.h,f=e.l,s=e.M,d=e.$,m=e.p,g=e.f},function(e){h=e.u},function(e){p=e.u},null],execute:function(){var t=document.createElement("style");t.textContent=".auth-page[data-v-3af09ff7]{background-color:var(--page-bg)}.auth-page .form-wrap[data-v-3af09ff7]{border-radius:var(--primary-radius);box-shadow:0 0 2rem -1rem var(--primary-color-2)}.auth-page .form-wrap .change-form-btn[data-v-3af09ff7]{align-items:center;background-color:var(--primary-icon-color);border-radius:50%;color:#fff;display:flex;font-weight:700;height:7rem;justify-content:center;letter-spacing:.2em;transform:translate(30%,-30%);width:7rem}\n",document.head.appendChild(t);var v={class:"auth-page w-full h-[100vh] flex flex-col items-center justify-center"},y={class:"form-wrap relative w-[80%] py-16 px-8 pt-12"};e("default",r(o({__name:"auth",setup:function(e){var t=p().t,r=l(),o=h(),b=i("emitter"),w=c(!0);function j(e){null==b||b.emit("fullScreenLoading:show"),o.login(e).then((function(){r.replace({name:"home"}),null==b||b.emit("fullScreenLoading:hide")}))}function x(e){null==b||b.emit("fullScreenLoading:show"),o.register(e).then((function(){r.replace({name:"home"}),null==b||b.emit("fullScreenLoading:hide")}))}return function(e,r){return g(),u("section",v,[f("div",y,[f("div",{class:"change-form-btn absolute right-0 top-0",onClick:r[0]||(r[0]=function(e){return w.value=!w.value})},s(d(t)("auth.".concat(w.value?"register":"login"))),1),w.value?(g(),m(d(a),{key:0,onSubmit:j})):(g(),m(d(n),{key:1,onSubmit:x}))])])}}}),[["__scopeId","data-v-3af09ff7"]]))}}}));