!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t,n,o){var r;return r=function(t,n){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,n||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(r)?r:String(r))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}System.register(["./comp-libs-legacy-BRwTieQ8.js","./useRequestList-legacy-qFiXOwkw.js","./index.es-legacy--N9Xt7Q-.js","./vue-vendor-legacy-T_4sCWLE.js","./api-libs-legacy-kVkciZIA.js","./comp-vendor-legacy-v578AL1s.js","./locale-vendor-legacy-UrqvcmFY.js","../assets/index-legacy-HRswG3vC.js"],(function(e,t){"use strict";var o,r,i,l,c,u,a,m,f,d,s,y,p,g,v,b,h,O,j,S,C,P,w,_,x,L,N,q,D,T,k,E,I,B,J,z,F,G;return{setters:[function(e){o=e.F,r=e.L,i=e.C,l=e.P,c=e._,u=e.b,a=e.c,m=e.G,f=e.a},function(e){d=e.u},function(e){s=e.a},function(e){y=e.a9,p=e.d,g=e.w,v=e.e,b=e.X,h=e.i,O=e.r,j=e.h,S=e.l,C=e.M,P=e.$,w=e.u,_=e.J,x=e.K,L=e.F,N=e.N,q=e.B,D=e.f,T=e.p},function(e){k=e.g,E=e.e,I=e.b,B=e.d,J=e.f},function(e){z=e.h,F=e.M},function(e){G=e.u},null],execute:function(){var t=document.createElement("style");function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6e4,o=document.createElement("div");document.body.appendChild(o);var r=y(p((function(){var i=s(k,{pollingInterval:n,pollingWhenHidden:!0,pollingWhenOffline:!0,manual:!0}),l=i.data,c=i.run,u=i.cancel,a=g(l,(function(){var t;"0"==(null===(t=l.value)||void 0===t?void 0:t.code)&&(E.emit("message:noteGenerateSuccess",e),u(),r.unmount(),o.remove())}));return c({id:t}),v((function(){console.log("unmounted polling"),a()})),function(){return b(e.name)}})));r.mount(o)}t.textContent=".commodity-page[data-v-63f800e9]{background-color:inherit}.commodity-page .commodity-list[data-v-63f800e9]{background-color:inherit;margin-left:var(--page-space);margin-right:var(--page-space);margin-top:var(--page-space);overflow:auto}.commodity-page .commodity-list .commodity-item+.commodity-item[data-v-63f800e9]{border-top:.1rem solid var(--grey-2)}.commodity-page .primary-button[data-v-63f800e9]{font-size:1.6rem}.commodity-page .primary-button .svg-icon[data-v-63f800e9]{height:1.5rem;margin-right:.5rem;width:1.5rem}\n",document.head.appendChild(t);var M={class:"commodity-page flex flex-col h-full"},U={class:"layout-title"},W={class:"commodity-list flex-1 z-0"},K=p({__name:"commodity",setup:function(e){var t=G().t,f=h("emitter"),s=O(["commodity.id","commodity.name","commodity.brand"]),y=O(!1),p=O(!1),g=O({}),v=d(I),b=v.list,k=v.loading,E=v.total,K=v.queryParams,R=v.forceUpdate;function X(e){var t=e.searchText,n=e.filterCondition,o=!1;K.query!=t&&(K.query=t,o=!0),K.queryType!=n&&(K.queryType=n,o=!0),o&&(K.current=1)}function $(){y.value=!0}function A(e){console.log("commodityData",e),null==f||f.emit("fullScreenLoading:show"),B(e).then((function(){y.value=!1,null==f||f.emit("fullScreenLoading:hide"),F.success(t("commodity.response.createCommoditySuccess")),R()}))}function Q(e){g.value=e,p.value=!0}function V(e){console.log("noteData",e),null==f||f.emit("fullScreenLoading:show"),J(n(n({},e),{},{commodityBrand:g.value.brand,commodityId:g.value.id})).then((function(e){p.value=!1,null==f||f.emit("fullScreenLoading:hide"),F.info(t("commodity.response.generateNoteInfo")),H(JSON.parse(JSON.stringify(g.value)),e.data.id)}))}return function(e,n){var f=z;return D(),j(L,null,[S("section",M,[S("section",U,[S("span",null,C(P(t)("commodity.title")),1)]),w(P(o),{onChange:X,placeholder:P(t)("commodity.searchPlaceHolder"),filterConditionList:s.value},null,8,["placeholder","filterConditionList"]),S("section",W,[_(w(P(r),{"blur-bg":!0},null,512),[[x,P(k)]]),(D(!0),j(L,null,N(P(b),(function(e){return D(),T(P(i),{key:e.id,"commodity-info":e,onCreateNote:Q},null,8,["commodity-info"])})),128))]),w(P(u),{"current-page":P(K).current,"onUpdate:currentPage":n[0]||(n[0]=function(e){return P(K).current=e}),total:P(E)},{left:q((function(){return[w(P(l),{onClick:$},{default:q((function(){return[w(P(c),{name:"plus"}),S("span",null,C(P(t)("commodity.createCommodityBtn")),1)]})),_:1})]})),_:1},8,["current-page","total"])]),w(f,{visible:y.value,footer:!1,placement:"right",unmountOnClose:"",title:P(t)("commodity.formTitle.createCommodity"),onCancel:n[2]||(n[2]=function(e){return y.value=!1})},{default:q((function(){return[w(P(a),{onSubmit:A,onCancel:n[1]||(n[1]=function(e){return y.value=!1})})]})),_:1},8,["visible","title"]),w(f,{visible:p.value,footer:!1,placement:"right",unmountOnClose:"",title:P(t)("commodity.formTitle.generateNote"),onCancel:n[4]||(n[4]=function(e){return p.value=!1})},{default:q((function(){return[w(P(m),{"commodity-info":g.value,onSubmit:V,onCancel:n[3]||(n[3]=function(e){return p.value=!1})},null,8,["commodity-info"])]})),_:1},8,["visible","title"])],64)}}});e("default",f(K,[["__scopeId","data-v-63f800e9"]]))}}}))}();
