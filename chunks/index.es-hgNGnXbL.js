import{r as y,w as N,o as ce,y as fe,Y as ee,ac as de,ad as ve,_ as me,t as ge,G as te,ae as he,g as pe,z as we,i as Re,e as G,c as A,Q as X,a4 as K}from"./vue-vendor-RO-sxRw_.js";function qe(e){return de()?(ve(e),!0):!1}function $(e){return typeof e=="function"?e():me(e)}const et=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Te=Object.prototype.toString,tt=e=>Te.call(e)==="[object Object]",z=()=>{};function ne(e,n){function t(...r){return new Promise((u,a)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(u).catch(a)})}return t}const re=e=>e();function be(e,n={}){let t,r,u=z;const a=o=>{clearTimeout(o),u(),u=z};return o=>{const s=$(e),i=$(n.maxWait);return t&&a(t),s<=0||i!==void 0&&i<=0?(r&&(a(r),r=null),Promise.resolve(o())):new Promise((d,f)=>{u=n.rejectOnCancel?f:d,i&&!r&&(r=setTimeout(()=>{t&&a(t),r=null,d(o())},i)),t=setTimeout(()=>{r&&a(r),r=null,d(o())},s)})}}function Ee(e=re){const n=y(!0);function t(){n.value=!1}function r(){n.value=!0}const u=(...a)=>{n.value&&e(...a)};return{isActive:te(n),pause:t,resume:r,eventFilter:u}}function ye(e){return e||pe()}function nt(...e){if(e.length!==1)return ge(...e);const n=e[0];return typeof n=="function"?te(he(()=>({get:n,set:z}))):y(n)}function Ce(e,n=200,t={}){return ne(be(n,t),e)}function rt(e,n=200,t={}){const r=y(e.value),u=Ce(()=>{r.value=e.value},n,t);return N(e,()=>u()),r}function Oe(e,n,t={}){const{eventFilter:r=re,...u}=t;return N(e,ne(r,n),u)}function ot(e,n,t={}){const{eventFilter:r,...u}=t,{eventFilter:a,pause:l,resume:o,isActive:s}=Ee(r);return{stop:Oe(e,n,{...u,eventFilter:a}),pause:l,resume:o,isActive:s}}function ut(e,n=!0,t){const r=ye(t);r?ce(e,r):n?e():fe(e)}function at(e=!1,n={}){const{truthyValue:t=!0,falsyValue:r=!1}=n,u=ee(e),a=y(e);function l(o){if(arguments.length)return a.value=o,a.value;{const s=$(t);return a.value=a.value===s?$(r):s,a.value}}return u?l:[a,l]}const Pe={},oe=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),Ae=()=>Pe,F=e=>e,J=e=>Array.isArray(e),Z=e=>e!==null&&typeof e=="object",k=e=>e instanceof Function,B=e=>e==null,q=typeof window>"u",ue=()=>{var e;return q||B((e=window.document)===null||e===void 0?void 0:e.visibilityState)?!0:window.document.visibilityState==="visible"},xe=()=>{var e,n;return(e=!q&&((n=window.navigator)===null||n===void 0?void 0:n.onLine))!==null&&e!==void 0?e:!0},V=()=>new Promise(()=>{}),S=e=>ee(e)?e.value:e,Le=e=>Z(e)?Object.assign(J(e)?[]:{},e):e,j=new Map,Se=e=>B(e)?void 0:j.get(e),Fe=(e,n,t)=>{const r=j.get(e);r!=null&&r.timer&&clearTimeout(r.timer);const u=setTimeout(()=>j.delete(e),n);j.set(e,{...t,timer:u})};function ae(e,n,t){let r,u,a,l,o,s,i=0,d=!1,f=!1,b=!0;const v=!n&&n!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0,Z(t)&&(d=!!t.leading,f="maxWait"in t,a=f?Math.max(+t.maxWait||0,n):a,b="trailing"in t?!!t.trailing:b);function w(c){const C=r,O=u;return r=u=void 0,i=c,l=e.apply(O,C),l}function m(c,C){return v?(window.cancelAnimationFrame(o),window.requestAnimationFrame(c)):setTimeout(c,C)}function T(c){if(v)return window.cancelAnimationFrame(c);clearTimeout(c)}function g(c){return i=c,o=m(R,n),d?w(c):l}function p(c){const C=c-s,O=c-i,D=n-C;return f?Math.min(D,a-O):D}function h(c){const C=c-s,O=c-i;return s===void 0||C>=n||C<0||f&&O>=a}function R(){const c=Date.now();if(h(c))return E(c);o=m(R,p(c))}function E(c){return o=void 0,b&&r?w(c):(r=u=void 0,l)}function P(){o!==void 0&&T(o),i=0,r=s=u=o=void 0}function x(){return o===void 0?l:E(Date.now())}function I(){return o!==void 0}function L(){const c=Date.now(),C=h(c);for(var O=arguments.length,D=new Array(O),W=0;W<O;W++)D[W]=arguments[W];if(r=D,u=this,s=c,C){if(o===void 0)return g(s);if(f)return o=m(R,n),w(s)}return o===void 0&&(o=m(R,n)),l}return L.cancel=P,L.flush=x,L.pending=I,L}function Ie(e,n,t){let r=!0,u=!0;if(typeof e!="function")throw new TypeError("Expected a function");return Z(t)&&(r="leading"in t?!!t.leading:r,u="trailing"in t?!!t.trailing:u),ae(e,n,{leading:r,trailing:u,maxWait:n})}var De=F((e,n)=>{let{debounceInterval:t,debounceOptions:r,manual:u}=n;const a=y(!1),l=y(),o=A(()=>r),s=A(()=>S(t)),i=y(e.context.runAsync);return u||(a.value=!0),X(d=>{B(s.value)||(l.value=ae(f=>f(),s.value,o.value),e.context.runAsync=function(){for(var f=arguments.length,b=new Array(f),v=0;v<f;v++)b[v]=arguments[v];return new Promise((w,m)=>{a.value?(a.value=!1,i.value(...b).then(w).catch(m)):l.value(()=>{i.value(...b).then(w).catch(m)})})},d(()=>{var f;(f=l.value)===null||f===void 0||f.cancel(),e.context.runAsync=i.value}))}),{onCancel(){var d;(d=l.value)===null||d===void 0||d.cancel()}}}),_e=F((e,n)=>{let{errorRetryCount:t=0,errorRetryInterval:r=0}=n;const u=y(),a=y(0),l=A(()=>S(t)),o=A(()=>S(r));let s=!1;const i=()=>{a.value=0},d=A(()=>{if(o.value)return o.value;const v=1e3,w=1,m=9,T=Math.floor(Math.random()*2**Math.min(a.value,m)+w);return v*T}),f=()=>{let v;const w=l.value===-1,m=a.value<l.value;return(w||m)&&(w||(a.value+=1),v=setTimeout(()=>{s=!0,e.context.refresh()},d.value)),()=>v&&clearTimeout(v)},b=()=>{u.value&&u.value()};return{onBefore(){s||i(),s=!1,b()},onSuccess(){i()},onError(){u.value=f()},onCancel(){i(),b()}}}),Ne=F((e,n)=>{let{ready:t=y(!0),manual:r,defaultParams:u=[]}=n;return N(t,a=>{!r&&a&&e.context.run(...u)},{flush:"sync"}),{onBefore(){if(!(k(t)?t():t.value))return e.loading.value=!1,{isBreak:!0}}}}),Be=F((e,n)=>{let{refreshDeps:t,refreshDepsAction:r,manual:u}=n;if(t===void 0||J(t)&&t.length===0)return{};const a=J(t)?t:[t];return N(a,()=>{r?r():!u&&e.context.refresh()}),{}}),We=F((e,n)=>{let{throttleInterval:t,throttleOptions:r}=n;const u=y(),a=A(()=>S(t)),l=A(()=>r),o=y(e.context.runAsync);return X(s=>{if(B(t))return{};u.value=Ie(i=>i(),a.value,l.value),e.context.runAsync=function(){for(var i=arguments.length,d=new Array(i),f=0;f<i;f++)d[f]=arguments[f];return new Promise((b,v)=>{u.value(()=>{o.value(...d).then(b).catch(v)})})},s(()=>{var i;(i=u.value)===null||i===void 0||i.cancel(),e.context.runAsync=o.value})}),{onCancel(){var s;(s=u.value)===null||s===void 0||s.cancel()}}});const je=(e,n)=>t=>{Object.keys(t).forEach(r=>{e[r].value=t[r]}),n.forEach(r=>r(e))},Me=(e,n)=>()=>{let t=n;for(let r=e.length;r-- >0;)t=e[r](t);return t()},$e=(e,n,t)=>{var r,u;const{initialData:a,onSuccess:l,onError:o,onBefore:s,onAfter:i}=n,d=y((r=t==null?void 0:t.loading)!==null&&r!==void 0?r:!1),f=K((u=t==null?void 0:t.data)!==null&&u!==void 0?u:a),b=K(t==null?void 0:t.error),v=y(t==null?void 0:t.params),w=y([]),m=K("pending"),T={},g=je({status:m,loading:d,data:f,error:b,params:v},[]),p=function(R){for(var E=arguments.length,P=new Array(E>1?E-1:0),x=1;x<E;x++)P[x-1]=arguments[x];if(R==="onQuery"){const I=w.value.map(L=>L.onQuery).filter(Boolean);return{servicePromise:Me(I,P[0])()}}else{const I=w.value.map(L=>{var c;return(c=L[R])===null||c===void 0?void 0:c.call(L,...P)});return Object.assign({},...I)}},h=y(0);return T.runAsync=async function(){for(var R=arguments.length,E=new Array(R),P=0;P<R;P++)E[P]=arguments[P];g({loading:!0,params:E,status:"pending"}),h.value+=1;const x=h.value,{isBreak:I,breakResult:L=V()}=p("onBefore",E);if(I)return g({status:"settled"}),L;s==null||s(E);try{const c=()=>new Promise(D=>D(e(...v.value)));let{servicePromise:C}=p("onQuery",c);C||(C=c());const O=await C;return x!==h.value?V():(g({data:O,loading:!1,error:void 0,status:"settled"}),p("onSuccess",O,E),l==null||l(O,E),x===h.value&&p("onAfter",E,O,void 0),i==null||i(E),O)}catch(c){if(x!==h.value)return V();throw g({loading:!1,error:c,status:"settled"}),p("onError",c,E),o==null||o(c,E),x===h.value&&p("onAfter",E,void 0,c),i==null||i(E),c}},T.run=function(){T.runAsync(...arguments).catch(R=>{o||console.error(R)})},T.cancel=()=>{h.value+=1,g({loading:!1}),p("onCancel")},T.refresh=()=>{T.run(...v.value||[])},T.refreshAsync=()=>T.runAsync(...v.value||[]),T.mutate=R=>{const E=k(R)?R(f.value):R,P=Le(E);g({data:P}),p("onMutate",P)},{status:m,loading:d,data:f,error:b,params:v,plugins:w,context:T}};function Qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const r=Re(oe,{}),u={...Ae(),...r,...n},{manual:a=!1,defaultParams:l=[]}=u,o=$e(e,u);if(o.plugins.value=t.map(s=>s(o,u)),!a){const s=o.params.value||l;o.context.run(...s)}return G(()=>{o.context.cancel()}),{loading:o.loading,data:o.data,error:o.error,params:o.params,cancel:o.context.cancel,refresh:o.context.refresh,refreshAsync:o.context.refreshAsync,mutate:o.context.mutate,run:o.context.run,runAsync:o.context.runAsync}}const M=new Map,Ge=(e,n)=>{M.set(e,n),n.then(t=>(M.delete(e),t)).catch(()=>{M.delete(e)})},Ke=e=>M.get(e),_=new Map,Ve=(e,n)=>{_.has(e)&&_.get(e).forEach(t=>t(n))},Ue=(e,n)=>(_.has(e)?_.get(e).push(n):_.set(e,[n]),()=>{const t=_.get(e).indexOf(n);_.get(e).splice(t,1)});var He=F((e,n)=>{let{cacheKey:t,cacheTime:r=6e5,staleTime:u=0,getCache:a,setCache:l}=n;if(!t)return{};const o=k(t)?t:()=>t,s=y(()=>{});let i;const d=g=>a?a(g):Se(g),f=(g,p,h)=>{l?l(g,h):Fe(g,p,h),Ve(g,h.data)},b=g=>u===-1||g+u>new Date().getTime(),v=(g,p)=>Object.prototype.hasOwnProperty.call(g,p),w=g=>{const p=o(g);return Ue(p,h=>{e.data.value=h})},m=o(),T=d(m);return T&&v(T,"data")&&(e.data.value=T.data,e.params.value=T.params),m&&(s.value=w()),G(()=>{s.value()}),{onBefore(g){const p=o(g),h=d(p);if(!h||!v(h,"data"))return{};if(b(h.time))return e.data.value=h.data,e.loading.value=!1,{isBreak:!0,breakResult:h.data};e.data.value=h.data},onQuery(g){const p=e.params.value,h=o(p);let R=Ke(h);return R&&R!==i?()=>R:(R=g(),i=R,Ge(h,R),()=>R)},onSuccess(g,p){const h=o(p);h&&(s.value(),f(h,r,{data:g,params:p,time:new Date().getTime()}),s.value=w(p))},onMutate(g){const p=o(e.params.value);p&&(s.value(),f(p,r,{data:g,params:e.params.value,time:new Date().getTime()}),s.value=w(e.params.value))}}});function Ye(e){let n,t;class r extends Promise{constructor(a){super(a),this.cancel=()=>{t(),clearTimeout(n)}}}return new r(u=>{t=u,n=setTimeout(t,e)})}function U(){return new Date().getTime()}var ze=F((e,n)=>{let{loadingDelay:t=0,loadingKeep:r=0}=n;const u=y(()=>{}),a=A(()=>S(t)),l=A(()=>S(r));let o=0,s={};const i=()=>{let d;return a.value&&(d=setTimeout(()=>{e.status.value==="pending"&&(e.loading.value=!0)},a.value)),()=>d&&clearTimeout(d)};return{onBefore(){e.loading.value=!a.value,u.value(),u.value=i(),o=U()},onQuery(d){if(!l.value)return()=>d();s=Ye(l.value+a.value);const f=async()=>{try{const v=await d();return U()-o<=a.value&&s.cancel(),Promise.resolve(v)}catch(v){return U()-o<=a.value&&s.cancel(),Promise.reject(v)}},b=Promise.allSettled([f(),s]).then(v=>{const w=v[0];return w.status==="fulfilled"?w.value:Promise.reject(w.reason)});return()=>b},onCancel(){u.value()},onAfter(){u.value()}}}),H;const se=new Set,ie=new Set,le=new Set,Q=(e,n)=>{let t;switch(e){case"FOCUS_LISTENER":t=se;break;case"RECONNECT_LISTENER":t=le;break;case"VISIBLE_LISTENER":t=ie;break}if(!t.has(n))return t.add(n),()=>{t.delete(n)}},Y=e=>{e.forEach(n=>{n()})};!q&&(H=window)!==null&&H!==void 0&&H.addEventListener&&(window.addEventListener("visibilitychange",()=>{ue()&&Y(ie)},!1),window.addEventListener("focus",()=>Y(se),!1),window.addEventListener("online",()=>Y(le),!1));var Je=F((e,n)=>{let{pollingInterval:t,pollingWhenHidden:r=!1,pollingWhenOffline:u=!1,errorRetryCount:a=0}=n;const l=y(),o=y(!1),s=A(()=>S(t)),i=A(()=>S(a)),d=[],f=m=>{m&&d.push(m)},b=()=>(r||ue())&&(u||xe()),v=m=>{if(e.error.value&&i.value!==0)return;let T;if(!B(s.value)&&s.value>=0)if(b())T=setTimeout(m,s.value);else{o.value=!0;return}return()=>T&&clearTimeout(T)},w=()=>{o.value&&b()&&(e.context.refresh(),o.value=!1)};return N(s,()=>{l.value&&(l.value(),l.value=v(()=>e.context.refresh()))}),r||f(Q("VISIBLE_LISTENER",w)),u||f(Q("RECONNECT_LISTENER",w)),G(()=>{d.forEach(m=>m())}),{onBefore(){var m;(m=l.value)===null||m===void 0||m.call(l)},onCancel(){var m;(m=l.value)===null||m===void 0||m.call(l)},onAfter(){l.value=v(()=>e.context.refresh())}}});const Xe=(e,n)=>{let t=!1;return function(){t||(t=!0,e(...arguments),setTimeout(()=>{t=!1},n))}};var Ze=F((e,n)=>{let{refreshOnWindowFocus:t=!1,refocusTimespan:r=5e3}=n;const u=A(()=>S(t)),a=A(()=>S(r)),l=[],o=i=>{i&&l.push(i)},s=()=>{l.forEach(i=>i())};return X(()=>{if(s(),u.value){const i=Xe(e.context.refresh,a.value);o(Q("VISIBLE_LISTENER",i)),o(Q("FOCUS_LISTENER",i))}}),G(()=>{s()}),{}});function st(e,n,t){return Qe(e,n,[...t||[],ze,_e,De,Je,We,Ze,Be,Ne,He])}var it=e=>{we(oe,e)};export{tt as a,$ as b,qe as c,nt as d,it as e,Ce as f,st as g,et as i,z as n,rt as r,ut as t,at as u,ot as w};