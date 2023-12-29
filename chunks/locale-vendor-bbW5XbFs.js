import{d as Pe,U as mt,X as cn,i as un,o as _n,e as fn,r as re,c as le,w as Te,F as Et,g as Se,Y as mn,u as En,Z as gn,y as dn}from"./vue-vendor-RO-sxRw_.js";const Nn="modulepreload",On=function(e){return"/red-webside/"+e},Ve={},We=function(t,n,r){let l=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");l=Promise.all(n.map(a=>{if(a=On(a),a in Ve)return;Ve[a]=!0;const i=a.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const g=s[f];if(g.href===a&&(!i||g.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(a,'"]').concat(c)))return;const E=document.createElement("link");if(E.rel=i?"stylesheet":Nn,i||(E.as="script",E.crossOrigin=""),E.href=a,document.head.appendChild(E),i)return new Promise((f,g)=>{E.addEventListener("load",f),E.addEventListener("error",()=>g(new Error("Unable to preload CSS for ".concat(a))))})}))}return l.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};/*!
  * shared v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const Ie=typeof window<"u",X=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Tn=(e,t,n)=>In({l:e,k:t,s:n}),In=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),k=e=>typeof e=="number"&&isFinite(e),bn=e=>dt(e)==="[object Date]",Ee=e=>dt(e)==="[object RegExp]",de=e=>b(e)&&Object.keys(e).length===0,w=Object.assign;let xe;const he=()=>xe||(xe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ge(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Ln=Object.prototype.hasOwnProperty;function ce(e,t){return Ln.call(e,t)}const v=Array.isArray,S=e=>typeof e=="function",m=e=>typeof e=="string",h=e=>typeof e=="boolean",R=e=>e!==null&&typeof e=="object",Rn=e=>R(e)&&S(e.then)&&S(e.catch),gt=Object.prototype.toString,dt=e=>gt.call(e),b=e=>{if(!R(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},An=e=>e==null?"":v(e)||b(e)&&e.toString===gt?JSON.stringify(e,null,2):String(e);function Dn(e,t=""){return e.reduce((n,r,l)=>l===0?n+r:n+t+r,"")}function ye(e){let t=e;return()=>++t}function pn(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const me=e=>!R(e)||v(e);function oe(e,t){if(me(e)||me(t))throw new Error("Invalid value");for(const n in e)ce(e,n)&&(me(e[n])||me(t[n])?t[n]=e[n]:oe(e[n],t[n]))}/*!
  * message-compiler v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const Cn=/\{([0-9a-zA-Z]+)\}/g;function Pn(e,...t){return t.length===1&&Sn(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(Cn,(n,r)=>t.hasOwnProperty(r)?t[r]:"")}const Sn=e=>e!==null&&typeof e=="object",U={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},hn={[U.EXPECTED_TOKEN]:"Expected token: '{0}'",[U.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[U.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[U.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[U.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[U.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[U.EMPTY_PLACEHOLDER]:"Empty placeholder",[U.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[U.INVALID_LINKED_FORMAT]:"Invalid linked format",[U.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[U.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[U.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[U.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[U.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[U.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Nt(e,t,n={}){const{domain:r,messages:l,args:s}=n,a=Pn((l||hn)[e]||"",...s||[]),i=new SyntaxError(String(a));return i.code=e,t&&(i.location=t),i.domain=r,i}/*!
  * core-base v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function yn(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(he().__INTLIFY_PROD_DEVTOOLS__=!1)}const z=[];z[0]={w:[0],i:[3,0],"[":[4],o:[7]};z[1]={w:[1],".":[2],"[":[4],o:[7]};z[2]={w:[2],i:[3,0],0:[3,0]};z[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};z[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};z[5]={"'":[4,0],o:8,l:[5,0]};z[6]={'"':[4,0],o:8,l:[6,0]};const Fn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function vn(e){return Fn.test(e)}function Mn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function kn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Un(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:vn(t)?Mn(t):"*"+t}function wn(e){const t=[];let n=-1,r=0,l=0,s,a,i,c,_,E,f;const g=[];g[0]=()=>{a===void 0?a=i:a+=i},g[1]=()=>{a!==void 0&&(t.push(a),a=void 0)},g[2]=()=>{g[0](),l++},g[3]=()=>{if(l>0)l--,r=4,g[0]();else{if(l=0,a===void 0||(a=Un(a),a===!1))return!1;g[1]()}};function N(){const I=e[n+1];if(r===5&&I==="'"||r===6&&I==='"')return n++,i="\\"+I,g[0](),!0}for(;r!==null;)if(n++,s=e[n],!(s==="\\"&&N())){if(c=kn(s),f=z[r],_=f[c]||f.l||8,_===8||(r=_[0],_[1]!==void 0&&(E=g[_[1]],E&&(i=s,E()===!1))))return;if(r===7)return t}}const Ye=new Map;function Vn(e,t){return R(e)?e[t]:null}function Wn(e,t){if(!R(e))return null;let n=Ye.get(t);if(n||(n=wn(t),n&&Ye.set(t,n)),!n)return null;const r=n.length;let l=e,s=0;for(;s<r;){const a=l[n[s]];if(a===void 0||S(l))return null;l=a,s++}return l}const xn=e=>e,Gn=e=>"",Yn="text",$n=e=>e.length===0?"":Dn(e),jn=An;function $e(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Hn(e){const t=k(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(k(e.named.count)||k(e.named.n))?k(e.named.count)?e.named.count:k(e.named.n)?e.named.n:t:t}function Bn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Kn(e={}){const t=e.locale,n=Hn(e),r=R(e.pluralRules)&&m(t)&&S(e.pluralRules[t])?e.pluralRules[t]:$e,l=R(e.pluralRules)&&m(t)&&S(e.pluralRules[t])?$e:void 0,s=O=>O[r(n,O.length,l)],a=e.list||[],i=O=>a[O],c=e.named||{};k(e.pluralIndex)&&Bn(n,c);const _=O=>c[O];function E(O){const A=S(e.messages)?e.messages(O):R(e.messages)?e.messages[O]:!1;return A||(e.parent?e.parent.message(O):Gn)}const f=O=>e.modifiers?e.modifiers[O]:xn,g=b(e.processor)&&S(e.processor.normalize)?e.processor.normalize:$n,N=b(e.processor)&&S(e.processor.interpolate)?e.processor.interpolate:jn,I=b(e.processor)&&m(e.processor.type)?e.processor.type:Yn,P={list:i,named:_,plural:s,linked:(O,...A)=>{const[F,T]=A;let C="text",D="";A.length===1?R(F)?(D=F.modifier||D,C=F.type||C):m(F)&&(D=F||D):A.length===2&&(m(F)&&(D=F||D),m(T)&&(C=T||C));const d=E(O)(P),W=C==="vnode"&&v(d)&&D?d[0]:d;return D?f(D)(W,C):W},message:E,type:I,interpolate:N,normalize:g,values:w({},a,c)};return P}let ie=null;function Xn(e){ie=e}function zn(e,t,n){ie&&ie.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Jn=Qn("function:translate");function Qn(e){return t=>ie&&ie.emit(e,t)}const qn={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8},Ot=U.__EXTEND_POINT__,Z=ye(Ot),j={INVALID_ARGUMENT:Ot,INVALID_DATE_ARGUMENT:Z(),INVALID_ISO_DATE_ARGUMENT:Z(),NOT_SUPPORT_NON_STRING_MESSAGE:Z(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Z(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Z(),NOT_SUPPORT_LOCALE_TYPE:Z(),__EXTEND_POINT__:Z()};function H(e){return Nt(e,null,void 0)}function Fe(e,t){return t.locale!=null?je(t.locale):je(e.locale)}let Oe;function je(e){if(m(e))return e;if(S(e)){if(e.resolvedOnce&&Oe!=null)return Oe;if(e.constructor.name==="Function"){const t=e();if(Rn(t))throw H(j.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Oe=t}else throw H(j.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw H(j.NOT_SUPPORT_LOCALE_TYPE)}function Zn(e,t,n){return[...new Set([n,...v(t)?t:R(t)?Object.keys(t):m(t)?[t]:[n]])]}function Tt(e,t,n){const r=m(n)?n:ge,l=e;l.__localeChainCache||(l.__localeChainCache=new Map);let s=l.__localeChainCache.get(r);if(!s){s=[];let a=[n];for(;v(a);)a=He(s,a,t);const i=v(t)||!b(t)?t:t.default?t.default:null;a=m(i)?[i]:i,v(a)&&He(s,a,!1),l.__localeChainCache.set(r,s)}return s}function He(e,t,n){let r=!0;for(let l=0;l<t.length&&h(r);l++){const s=t[l];m(s)&&(r=ea(e,t[l],n))}return r}function ea(e,t,n){let r;const l=t.split("-");do{const s=l.join("-");r=ta(e,s,n),l.splice(-1,1)}while(l.length&&r===!0);return r}function ta(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const l=t.replace(/!/g,"");e.push(l),(v(n)||b(n))&&n[l]&&(r=n[l])}return r}const na="9.8.0",Ne=-1,ge="en-US",Be="",Ke=e=>"".concat(e.charAt(0).toLocaleUpperCase()).concat(e.substr(1));function aa(){return{upper:(e,t)=>t==="text"&&m(e)?e.toUpperCase():t==="vnode"&&R(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&m(e)?e.toLowerCase():t==="vnode"&&R(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&m(e)?Ke(e):t==="vnode"&&R(e)&&"__v_isVNode"in e?Ke(e.children):e}}let ra,It;function la(e){It=e}let bt;function sa(e){bt=e}let Lt=null;const oa=e=>{Lt=e},ca=()=>Lt;let Rt=null;const Xe=e=>{Rt=e},ia=()=>Rt;let ze=0;function ua(e={}){const t=S(e.onWarn)?e.onWarn:pn,n=m(e.version)?e.version:na,r=m(e.locale)||S(e.locale)?e.locale:ge,l=S(r)?ge:r,s=v(e.fallbackLocale)||b(e.fallbackLocale)||m(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l,a=b(e.messages)?e.messages:{[l]:{}},i=b(e.datetimeFormats)?e.datetimeFormats:{[l]:{}},c=b(e.numberFormats)?e.numberFormats:{[l]:{}},_=w({},e.modifiers||{},aa()),E=e.pluralRules||{},f=S(e.missing)?e.missing:null,g=h(e.missingWarn)||Ee(e.missingWarn)?e.missingWarn:!0,N=h(e.fallbackWarn)||Ee(e.fallbackWarn)?e.fallbackWarn:!0,I=!!e.fallbackFormat,L=!!e.unresolving,P=S(e.postTranslation)?e.postTranslation:null,O=b(e.processor)?e.processor:null,A=h(e.warnHtmlMessage)?e.warnHtmlMessage:!0,F=!!e.escapeParameter,T=S(e.messageCompiler)?e.messageCompiler:ra,C=S(e.messageResolver)?e.messageResolver:It||Vn,D=S(e.localeFallbacker)?e.localeFallbacker:bt||Zn,d=R(e.fallbackContext)?e.fallbackContext:void 0,W=e,ne=R(W.__datetimeFormatters)?W.__datetimeFormatters:new Map,ae=R(W.__numberFormatters)?W.__numberFormatters:new Map,J=R(W.__meta)?W.__meta:{};ze++;const Y={version:n,cid:ze,locale:r,fallbackLocale:s,messages:a,modifiers:_,pluralRules:E,missing:f,missingWarn:g,fallbackWarn:N,fallbackFormat:I,unresolving:L,postTranslation:P,processor:O,warnHtmlMessage:A,escapeParameter:F,messageCompiler:T,messageResolver:C,localeFallbacker:D,fallbackContext:d,onWarn:t,__meta:J};return Y.datetimeFormats=i,Y.numberFormats=c,Y.__datetimeFormatters=ne,Y.__numberFormatters=ae,__INTLIFY_PROD_DEVTOOLS__&&zn(Y,n,J),Y}function ve(e,t,n,r,l){const{missing:s,onWarn:a}=e;if(s!==null){const i=s(e,n,t,l);return m(i)?i:t}else return t}function se(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const te=e=>R(e)&&(e.t===0||e.type===0)&&("b"in e||"body"in e),Je=()=>"",x=e=>S(e);function Qe(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:l,messageCompiler:s,fallbackLocale:a,messages:i}=e,[c,_]=be(...t),E=h(_.missingWarn)?_.missingWarn:e.missingWarn,f=h(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn,g=h(_.escapeParameter)?_.escapeParameter:e.escapeParameter,N=!!_.resolvedMessage,I=m(_.default)||h(_.default)?h(_.default)?s?c:()=>c:_.default:n?s?c:()=>c:"",L=n||I!=="",P=Fe(e,_);g&&_a(_);let[O,A,F]=N?[c,P,i[P]||{}]:At(e,c,P,a,f,E),T=O,C=c;if(!N&&!(m(T)||te(T)||x(T))&&L&&(T=I,C=T),!N&&(!(m(T)||te(T)||x(T))||!m(A)))return l?Ne:c;let D=!1;const d=()=>{D=!0},W=x(T)?T:Dt(e,c,A,T,C,d);if(D)return T;const ne=Ea(e,A,F,_),ae=Kn(ne),J=fa(e,W,ae),Y=r?r(J,c):J;if(__INTLIFY_PROD_DEVTOOLS__){const _e={timestamp:Date.now(),key:m(c)?c:x(T)?T.key:"",locale:A||(x(T)?T.locale:""),format:m(T)?T:x(T)?T.source:"",message:Y};_e.meta=w({},e.__meta,ca()||{}),Jn(_e)}return Y}function _a(e){v(e.list)?e.list=e.list.map(t=>m(t)?Ge(t):t):R(e.named)&&Object.keys(e.named).forEach(t=>{m(e.named[t])&&(e.named[t]=Ge(e.named[t]))})}function At(e,t,n,r,l,s){const{messages:a,onWarn:i,messageResolver:c,localeFallbacker:_}=e,E=_(e,r,n);let f={},g,N=null;const I="translate";for(let L=0;L<E.length&&(g=E[L],f=a[g]||{},(N=c(f,t))===null&&(N=f[t]),!(m(N)||te(N)||x(N)));L++){const P=ve(e,t,g,s,I);P!==t&&(N=P)}return[N,g,f]}function Dt(e,t,n,r,l,s){const{messageCompiler:a,warnHtmlMessage:i}=e;if(x(r)){const _=r;return _.locale=_.locale||n,_.key=_.key||t,_}if(a==null){const _=()=>r;return _.locale=n,_.key=t,_}const c=a(r,ma(e,n,l,r,i,s));return c.locale=n,c.key=t,c.source=r,c}function fa(e,t,n){return t(n)}function be(...e){const[t,n,r]=e,l={};if(!m(t)&&!k(t)&&!x(t)&&!te(t))throw H(j.INVALID_ARGUMENT);const s=k(t)?String(t):(x(t),t);return k(n)?l.plural=n:m(n)?l.default=n:b(n)&&!de(n)?l.named=n:v(n)&&(l.list=n),k(r)?l.plural=r:m(r)?l.default=r:b(r)&&w(l,r),[s,l]}function ma(e,t,n,r,l,s){return{locale:t,key:n,warnHtmlMessage:l,onError:a=>{throw s&&s(a),a},onCacheKey:a=>Tn(t,n,a)}}function Ea(e,t,n,r){const{modifiers:l,pluralRules:s,messageResolver:a,fallbackLocale:i,fallbackWarn:c,missingWarn:_,fallbackContext:E}=e,g={locale:t,modifiers:l,pluralRules:s,messages:N=>{let I=a(n,N);if(I==null&&E){const[,,L]=At(E,N,t,i,c,_);I=a(L,N)}if(m(I)||te(I)){let L=!1;const O=Dt(e,N,t,I,N,()=>{L=!0});return L?Je:O}else return x(I)?I:Je}};return e.processor&&(g.processor=e.processor),r.list&&(g.list=r.list),r.named&&(g.named=r.named),k(r.plural)&&(g.pluralIndex=r.plural),g}function qe(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:l,onWarn:s,localeFallbacker:a}=e,{__datetimeFormatters:i}=e,[c,_,E,f]=Le(...t),g=h(E.missingWarn)?E.missingWarn:e.missingWarn;h(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const N=!!E.part,I=Fe(e,E),L=a(e,l,I);if(!m(c)||c==="")return new Intl.DateTimeFormat(I,f).format(_);let P={},O,A=null;const F="datetime format";for(let D=0;D<L.length&&(O=L[D],P=n[O]||{},A=P[c],!b(A));D++)ve(e,c,O,g,F);if(!b(A)||!m(O))return r?Ne:c;let T="".concat(O,"__").concat(c);de(f)||(T="".concat(T,"__").concat(JSON.stringify(f)));let C=i.get(T);return C||(C=new Intl.DateTimeFormat(O,w({},A,f)),i.set(T,C)),N?C.formatToParts(_):C.format(_)}const pt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Le(...e){const[t,n,r,l]=e,s={};let a={},i;if(m(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw H(j.INVALID_ISO_DATE_ARGUMENT);const _=c[3]?c[3].trim().startsWith("T")?"".concat(c[1].trim()).concat(c[3].trim()):"".concat(c[1].trim(),"T").concat(c[3].trim()):c[1].trim();i=new Date(_);try{i.toISOString()}catch(E){throw H(j.INVALID_ISO_DATE_ARGUMENT)}}else if(bn(t)){if(isNaN(t.getTime()))throw H(j.INVALID_DATE_ARGUMENT);i=t}else if(k(t))i=t;else throw H(j.INVALID_ARGUMENT);return m(n)?s.key=n:b(n)&&Object.keys(n).forEach(c=>{pt.includes(c)?a[c]=n[c]:s[c]=n[c]}),m(r)?s.locale=r:b(r)&&(a=r),b(l)&&(a=l),[s.key||"",i,s,a]}function Ze(e,t,n){const r=e;for(const l in n){const s="".concat(t,"__").concat(l);r.__datetimeFormatters.has(s)&&r.__datetimeFormatters.delete(s)}}function et(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:l,onWarn:s,localeFallbacker:a}=e,{__numberFormatters:i}=e,[c,_,E,f]=Re(...t),g=h(E.missingWarn)?E.missingWarn:e.missingWarn;h(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const N=!!E.part,I=Fe(e,E),L=a(e,l,I);if(!m(c)||c==="")return new Intl.NumberFormat(I,f).format(_);let P={},O,A=null;const F="number format";for(let D=0;D<L.length&&(O=L[D],P=n[O]||{},A=P[c],!b(A));D++)ve(e,c,O,g,F);if(!b(A)||!m(O))return r?Ne:c;let T="".concat(O,"__").concat(c);de(f)||(T="".concat(T,"__").concat(JSON.stringify(f)));let C=i.get(T);return C||(C=new Intl.NumberFormat(O,w({},A,f)),i.set(T,C)),N?C.formatToParts(_):C.format(_)}const Ct=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Re(...e){const[t,n,r,l]=e,s={};let a={};if(!k(t))throw H(j.INVALID_ARGUMENT);const i=t;return m(n)?s.key=n:b(n)&&Object.keys(n).forEach(c=>{Ct.includes(c)?a[c]=n[c]:s[c]=n[c]}),m(r)?s.locale=r:b(r)&&(a=r),b(l)&&(a=l),[s.key||"",i,s,a]}function tt(e,t,n){const r=e;for(const l in n){const s="".concat(t,"__").concat(l);r.__numberFormatters.has(s)&&r.__numberFormatters.delete(s)}}yn();/*!
  * vue-i18n v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const ga="9.8.0";function da(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(he().__INTLIFY_PROD_DEVTOOLS__=!1)}const Pt=qn.__EXTEND_POINT__,B=ye(Pt);B(),B(),B(),B(),B(),B(),B(),B();const St=j.__EXTEND_POINT__,V=ye(St),G={UNEXPECTED_RETURN_TYPE:St,INVALID_ARGUMENT:V(),MUST_BE_CALL_SETUP_TOP:V(),NOT_INSTALLED:V(),NOT_AVAILABLE_IN_LEGACY_MODE:V(),REQUIRED_VALUE:V(),INVALID_VALUE:V(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:V(),NOT_INSTALLED_WITH_PROVIDE:V(),UNEXPECTED_ERROR:V(),NOT_COMPATIBLE_LEGACY_VUE_I18N:V(),BRIDGE_SUPPORT_VUE_2_ONLY:V(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:V(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:V(),__EXTEND_POINT__:V()};function $(e,...t){return Nt(e,null,void 0)}const Ae=X("__translateVNode"),De=X("__datetimeParts"),pe=X("__numberParts"),Na=X("__setPluralRules"),Oa=X("__injectWithOption"),Ce=X("__dispose");function ue(e){if(!R(e))return e;for(const t in e)if(ce(e,t))if(!t.includes("."))R(e[t])&&ue(e[t]);else{const n=t.split("."),r=n.length-1;let l=e,s=!1;for(let a=0;a<r;a++){if(n[a]in l||(l[n[a]]={}),!R(l[n[a]])){s=!0;break}l=l[n[a]]}s||(l[n[r]]=e[t],delete e[t]),R(l[n[r]])&&ue(l[n[r]])}return e}function ht(e,t){const{messages:n,__i18n:r,messageResolver:l,flatJson:s}=t,a=b(n)?n:v(r)?{}:{[e]:{}};if(v(r)&&r.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:c,resource:_}=i;c?(a[c]=a[c]||{},oe(_,a[c])):oe(_,a)}else m(i)&&oe(JSON.parse(i),a)}),l==null&&s)for(const i in a)ce(a,i)&&ue(a[i]);return a}function yt(e){return e.type}function Ta(e,t,n){let r=R(t.messages)?t.messages:{};"__i18nGlobal"in n&&(r=ht(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const l=Object.keys(r);l.length&&l.forEach(s=>{e.mergeLocaleMessage(s,r[s])});{if(R(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(a=>{e.mergeDateTimeFormat(a,t.datetimeFormats[a])})}if(R(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(a=>{e.mergeNumberFormat(a,t.numberFormats[a])})}}}function nt(e){return En(gn,null,e,0)}const at="__INTLIFY_META__",rt=()=>[],Ia=()=>!1;let lt=0;function st(e){return(t,n,r,l)=>e(n,r,Se()||void 0,l)}const ba=()=>{const e=Se();let t=null;return e&&(t=yt(e)[at])?{[at]:t}:null};function Ft(e={},t){const{__root:n,__injectWithOption:r}=e,l=n===void 0,s=e.flatJson;let a=h(e.inheritLocale)?e.inheritLocale:!0;const i=re(n&&a?n.locale.value:m(e.locale)?e.locale:ge),c=re(n&&a?n.fallbackLocale.value:m(e.fallbackLocale)||v(e.fallbackLocale)||b(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),_=re(ht(i.value,e)),E=re(b(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),f=re(b(e.numberFormats)?e.numberFormats:{[i.value]:{}});let g=n?n.missingWarn:h(e.missingWarn)||Ee(e.missingWarn)?e.missingWarn:!0,N=n?n.fallbackWarn:h(e.fallbackWarn)||Ee(e.fallbackWarn)?e.fallbackWarn:!0,I=n?n.fallbackRoot:h(e.fallbackRoot)?e.fallbackRoot:!0,L=!!e.fallbackFormat,P=S(e.missing)?e.missing:null,O=S(e.missing)?st(e.missing):null,A=S(e.postTranslation)?e.postTranslation:null,F=n?n.warnHtmlMessage:h(e.warnHtmlMessage)?e.warnHtmlMessage:!0,T=!!e.escapeParameter;const C=n?n.modifiers:b(e.modifiers)?e.modifiers:{};let D=e.pluralRules||n&&n.pluralRules,d;d=(()=>{l&&Xe(null);const o={version:ga,locale:i.value,fallbackLocale:c.value,messages:_.value,modifiers:C,pluralRules:D,missing:O===null?void 0:O,missingWarn:g,fallbackWarn:N,fallbackFormat:L,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:F,escapeParameter:T,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};o.datetimeFormats=E.value,o.numberFormats=f.value,o.__datetimeFormatters=b(d)?d.__datetimeFormatters:void 0,o.__numberFormatters=b(d)?d.__numberFormatters:void 0;const u=ua(o);return l&&Xe(u),u})(),se(d,i.value,c.value);function ne(){return[i.value,c.value,_.value,E.value,f.value]}const ae=le({get:()=>i.value,set:o=>{i.value=o,d.locale=i.value}}),J=le({get:()=>c.value,set:o=>{c.value=o,d.fallbackLocale=c.value,se(d,i.value,o)}}),Y=le(()=>_.value),_e=le(()=>E.value),Ut=le(()=>f.value);function wt(){return S(A)?A:null}function Vt(o){A=o,d.postTranslation=o}function Wt(){return P}function xt(o){o!==null&&(O=st(o)),P=o,d.missing=O}const Q=(o,u,p,y,q,fe)=>{ne();let ee;try{__INTLIFY_PROD_DEVTOOLS__,l||(d.fallbackContext=n?ia():void 0),ee=o(d)}finally{__INTLIFY_PROD_DEVTOOLS__,l||(d.fallbackContext=void 0)}if(p!=="translate exists"&&k(ee)&&ee===Ne||p==="translate exists"&&!ee){const[on,Ba]=u();return n&&I?y(n):q(on)}else{if(fe(ee))return ee;throw $(G.UNEXPECTED_RETURN_TYPE)}};function Ue(...o){return Q(u=>Reflect.apply(Qe,null,[u,...o]),()=>be(...o),"translate",u=>Reflect.apply(u.t,u,[...o]),u=>u,u=>m(u))}function Gt(...o){const[u,p,y]=o;if(y&&!R(y))throw $(G.INVALID_ARGUMENT);return Ue(u,p,w({resolvedMessage:!0},y||{}))}function Yt(...o){return Q(u=>Reflect.apply(qe,null,[u,...o]),()=>Le(...o),"datetime format",u=>Reflect.apply(u.d,u,[...o]),()=>Be,u=>m(u))}function $t(...o){return Q(u=>Reflect.apply(et,null,[u,...o]),()=>Re(...o),"number format",u=>Reflect.apply(u.n,u,[...o]),()=>Be,u=>m(u))}function jt(o){return o.map(u=>m(u)||k(u)||h(u)?nt(String(u)):u)}const Ht={normalize:jt,interpolate:o=>o,type:"vnode"};function Bt(...o){return Q(u=>{let p;const y=u;try{y.processor=Ht,p=Reflect.apply(Qe,null,[y,...o])}finally{y.processor=null}return p},()=>be(...o),"translate",u=>u[Ae](...o),u=>[nt(u)],u=>v(u))}function Kt(...o){return Q(u=>Reflect.apply(et,null,[u,...o]),()=>Re(...o),"number format",u=>u[pe](...o),rt,u=>m(u)||v(u))}function Xt(...o){return Q(u=>Reflect.apply(qe,null,[u,...o]),()=>Le(...o),"datetime format",u=>u[De](...o),rt,u=>m(u)||v(u))}function zt(o){D=o,d.pluralRules=D}function Jt(o,u){return Q(()=>{if(!o)return!1;const p=m(u)?u:i.value,y=we(p),q=d.messageResolver(y,o);return te(q)||x(q)||m(q)},()=>[o],"translate exists",p=>Reflect.apply(p.te,p,[o,u]),Ia,p=>h(p))}function Qt(o){let u=null;const p=Tt(d,c.value,i.value);for(let y=0;y<p.length;y++){const q=_.value[p[y]]||{},fe=d.messageResolver(q,o);if(fe!=null){u=fe;break}}return u}function qt(o){const u=Qt(o);return u!=null?u:n?n.tm(o)||{}:{}}function we(o){return _.value[o]||{}}function Zt(o,u){if(s){const p={[o]:u};for(const y in p)ce(p,y)&&ue(p[y]);u=p[o]}_.value[o]=u,d.messages=_.value}function en(o,u){_.value[o]=_.value[o]||{};const p={[o]:u};for(const y in p)ce(p,y)&&ue(p[y]);u=p[o],oe(u,_.value[o]),d.messages=_.value}function tn(o){return E.value[o]||{}}function nn(o,u){E.value[o]=u,d.datetimeFormats=E.value,Ze(d,o,u)}function an(o,u){E.value[o]=w(E.value[o]||{},u),d.datetimeFormats=E.value,Ze(d,o,u)}function rn(o){return f.value[o]||{}}function ln(o,u){f.value[o]=u,d.numberFormats=f.value,tt(d,o,u)}function sn(o,u){f.value[o]=w(f.value[o]||{},u),d.numberFormats=f.value,tt(d,o,u)}lt++,n&&Ie&&(Te(n.locale,o=>{a&&(i.value=o,d.locale=o,se(d,i.value,c.value))}),Te(n.fallbackLocale,o=>{a&&(c.value=o,d.fallbackLocale=o,se(d,i.value,c.value))}));const M={id:lt,locale:ae,fallbackLocale:J,get inheritLocale(){return a},set inheritLocale(o){a=o,o&&n&&(i.value=n.locale.value,c.value=n.fallbackLocale.value,se(d,i.value,c.value))},get availableLocales(){return Object.keys(_.value).sort()},messages:Y,get modifiers(){return C},get pluralRules(){return D||{}},get isGlobal(){return l},get missingWarn(){return g},set missingWarn(o){g=o,d.missingWarn=g},get fallbackWarn(){return N},set fallbackWarn(o){N=o,d.fallbackWarn=N},get fallbackRoot(){return I},set fallbackRoot(o){I=o},get fallbackFormat(){return L},set fallbackFormat(o){L=o,d.fallbackFormat=L},get warnHtmlMessage(){return F},set warnHtmlMessage(o){F=o,d.warnHtmlMessage=o},get escapeParameter(){return T},set escapeParameter(o){T=o,d.escapeParameter=o},t:Ue,getLocaleMessage:we,setLocaleMessage:Zt,mergeLocaleMessage:en,getPostTranslationHandler:wt,setPostTranslationHandler:Vt,getMissingHandler:Wt,setMissingHandler:xt,[Na]:zt};return M.datetimeFormats=_e,M.numberFormats=Ut,M.rt=Gt,M.te=Jt,M.tm=qt,M.d=Yt,M.n=$t,M.getDateTimeFormat=tn,M.setDateTimeFormat=nn,M.mergeDateTimeFormat=an,M.getNumberFormat=rn,M.setNumberFormat=ln,M.mergeNumberFormat=sn,M[Oa]=r,M[Ae]=Bt,M[De]=Xt,M[pe]=Kt,M}const Me={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function La({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,l)=>[...r,...l.type===Et?l.children:[l]],[]):t.reduce((n,r)=>{const l=e[r];return l&&(n[r]=l()),n},{})}function vt(e){return Et}const Ra=Pe({name:"i18n-t",props:w({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>k(e)||!isNaN(e)}},Me),setup(e,t){const{slots:n,attrs:r}=t,l=e.i18n||ke({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),a={};e.locale&&(a.locale=e.locale),e.plural!==void 0&&(a.plural=m(e.plural)?+e.plural:e.plural);const i=La(t,s),c=l[Ae](e.keypath,i,a),_=w({},r),E=m(e.tag)||R(e.tag)?e.tag:vt();return mt(E,_,c)}}}),ot=Ra;function Aa(e){return v(e)&&!m(e[0])}function Mt(e,t,n,r){const{slots:l,attrs:s}=t;return()=>{const a={part:!0};let i={};e.locale&&(a.locale=e.locale),m(e.format)?a.key=e.format:R(e.format)&&(m(e.format.key)&&(a.key=e.format.key),i=Object.keys(e.format).reduce((g,N)=>n.includes(N)?w({},g,{[N]:e.format[N]}):g,{}));const c=r(e.value,a,i);let _=[a.key];v(c)?_=c.map((g,N)=>{const I=l[g.type],L=I?I({[g.type]:g.value,index:N,parts:c}):[g.value];return Aa(L)&&(L[0].key="".concat(g.type,"-").concat(N)),L}):m(c)&&(_=[c]);const E=w({},s),f=m(e.tag)||R(e.tag)?e.tag:vt();return mt(f,E,_)}}const Da=Pe({name:"i18n-n",props:w({value:{type:Number,required:!0},format:{type:[String,Object]}},Me),setup(e,t){const n=e.i18n||ke({useScope:"parent",__useComponent:!0});return Mt(e,t,Ct,(...r)=>n[pe](...r))}}),ct=Da,pa=Pe({name:"i18n-d",props:w({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Me),setup(e,t){const n=e.i18n||ke({useScope:"parent",__useComponent:!0});return Mt(e,t,pt,(...r)=>n[De](...r))}}),it=pa;function Ca(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function Pa(e){const t=a=>{const{instance:i,modifiers:c,value:_}=a;if(!i||!i.$)throw $(G.UNEXPECTED_ERROR);const E=Ca(e,i.$),f=ut(_);return[Reflect.apply(E.t,E,[..._t(f)]),E]};return{created:(a,i)=>{const[c,_]=t(i);Ie&&e.global===_&&(a.__i18nWatcher=Te(_.locale,()=>{i.instance&&i.instance.$forceUpdate()})),a.__composer=_,a.textContent=c},unmounted:a=>{Ie&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:i})=>{if(a.__composer){const c=a.__composer,_=ut(i);a.textContent=Reflect.apply(c.t,c,[..._t(_)])}},getSSRProps:a=>{const[i]=t(a);return{textContent:i}}}}function ut(e){if(m(e))return{path:e};if(b(e)){if(!("path"in e))throw $(G.REQUIRED_VALUE,"path");return e}else throw $(G.INVALID_VALUE)}function _t(e){const{path:t,locale:n,args:r,choice:l,plural:s}=e,a={},i=r||{};return m(n)&&(a.locale=n),k(l)&&(a.plural=l),k(s)&&(a.plural=s),[t,i,a]}function Sa(e,t,...n){const r=b(n[0])?n[0]:{},l=!!r.useI18nComponentName;(h(r.globalInstall)?r.globalInstall:!0)&&([l?"i18n":ot.name,"I18nT"].forEach(a=>e.component(a,ot)),[ct.name,"I18nN"].forEach(a=>e.component(a,ct)),[it.name,"I18nD"].forEach(a=>e.component(a,it))),e.directive("t",Pa(t))}const ha=X("global-vue-i18n");function ya(e={},t){const n=h(e.globalInjection)?e.globalInjection:!0,r=!0,l=new Map,[s,a]=Fa(e),i=X("");function c(f){return l.get(f)||null}function _(f,g){l.set(f,g)}function E(f){l.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return r},async install(g,...N){if(g.__VUE_I18N_SYMBOL__=i,g.provide(g.__VUE_I18N_SYMBOL__,f),b(N[0])){const P=N[0];f.__composerExtend=P.__composerExtend,f.__vueI18nExtend=P.__vueI18nExtend}let I=null;n&&(I=xa(g,f.global)),Sa(g,f,...N);const L=g.unmount;g.unmount=()=>{I&&I(),f.dispose(),L()}},get global(){return a},dispose(){s.stop()},__instances:l,__getInstance:c,__setInstance:_,__deleteInstance:E};return f}}function ke(e={}){const t=Se();if(t==null)throw $(G.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw $(G.NOT_INSTALLED);const n=va(t),r=ka(n),l=yt(t),s=Ma(e,l);if(s==="global")return Ta(r,e,l),r;if(s==="parent"){let c=Ua(n,t,e.__useComponent);return c==null&&(c=r),c}const a=n;let i=a.__getInstance(t);if(i==null){const c=w({},e);"__i18n"in l&&(c.__i18n=l.__i18n),r&&(c.__root=r),i=Ft(c),a.__composerExtend&&(i[Ce]=a.__composerExtend(i)),Va(a,t,i),a.__setInstance(t,i)}return i}function Fa(e,t,n){const r=cn();{const l=r.run(()=>Ft(e));if(l==null)throw $(G.UNEXPECTED_ERROR);return[r,l]}}function va(e){{const t=un(e.isCE?ha:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw $(e.isCE?G.NOT_INSTALLED_WITH_PROVIDE:G.UNEXPECTED_ERROR);return t}}function Ma(e,t){return de(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function ka(e){return e.mode==="composition"?e.global:e.global.__composer}function Ua(e,t,n=!1){let r=null;const l=t.root;let s=wa(t,n);for(;s!=null;){const a=e;if(e.mode==="composition"&&(r=a.__getInstance(s)),r!=null||l===s)break;s=s.parent}return r}function wa(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function Va(e,t,n){_n(()=>{},t),fn(()=>{const r=n;e.__deleteInstance(t);const l=r[Ce];l&&(l(),delete r[Ce])},t)}const Wa=["locale","fallbackLocale","availableLocales"],ft=["t","rt","d","n","tm","te"];function xa(e,t){const n=Object.create(null);return Wa.forEach(l=>{const s=Object.getOwnPropertyDescriptor(t,l);if(!s)throw $(G.UNEXPECTED_ERROR);const a=mn(s.value)?{get(){return s.value.value},set(i){s.value.value=i}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,l,a)}),e.config.globalProperties.$i18n=n,ft.forEach(l=>{const s=Object.getOwnPropertyDescriptor(t,l);if(!s||!s.value)throw $(G.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,"$".concat(l),s)}),()=>{delete e.config.globalProperties.$i18n,ft.forEach(l=>{delete e.config.globalProperties["$".concat(l)]})}}da();la(Wn);sa(Tt);if(__INTLIFY_PROD_DEVTOOLS__){const e=he();e.__INTLIFY__=!0,Xn(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const kt={zh:()=>We(()=>import("./zh-WRN9ueag.js"),__vite__mapDeps([])),en:()=>We(()=>import("./en-0xle-Fy5.js"),__vite__mapDeps([]))},Xa=[{language:"zh",label:"中文"},{language:"en",label:"English"}],Ga={legacy:!1,locale:"zh",fallbackLocale:"zh"},Ya=Object.keys(kt);let K;function za(e=Ga){return K!=null||(K=ya(e)),$a(e.locale),K}async function $a(e){var t;e&&Ya.includes(e)&&(await ja(e),K.mode==="legacy"?K.global.locale=e:K.global.locale.value=e,(t=document.querySelector("html"))==null||t.setAttribute("lang",e))}async function ja(e){const t=await kt[e]();return K.global.setLocaleMessage(e,t.default),dn()}export{We as _,$a as a,Xa as l,za as s,ke as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}