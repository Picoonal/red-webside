!function(){function e(e){return function(e){if(Array.isArray(e))return i(e)}(e)||t(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function r(e,t){return a(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||o(e,t)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){if(Array.isArray(e))return e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function d(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==h(t)?t:String(t)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}System.register([],(function(i,s){"use strict";return{execute:function(){i({a:function(e){return Ye.get("/commoditys",{params:e})},b:function(e){return Ye.post("/gen-note",e)},c:function(e){return Ye.post("/commodity",e)},d:function(e){return Ye.get("/notes",{params:e})},f:function(e){return Ye.post("/note",e)},g:function(e){return Ye.get("/gen-status",{params:e})},h:function(e){return Ye.put("/note",e)},i:function(e){return Ye.delete("/note",{params:e})},u:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new FormData;return r.append("file",e),Ye.post("/file",r,u({withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}},t))}});var s,c=i("e",{all:s=s||new Map,on:function(e,t){var r=s.get(e);r?r.push(t):s.set(e,[t])},off:function(e,t){var r=s.get(e);r&&(t?r.splice(r.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var r=s.get(e);r&&r.slice().map((function(e){e(t)})),(r=s.get("*"))&&r.slice().map((function(r){r(e,t)}))}});function l(e,t){return function(){return e.apply(t,arguments)}}var p,m=Object.prototype.toString,v=Object.getPrototypeOf,y=(p=Object.create(null),function(e){var t=m.call(e);return p[t]||(p[t]=t.slice(8,-1).toLowerCase())}),b=function(e){return e=e.toLowerCase(),function(t){return y(t)===e}},g=function(e){return function(t){return h(t)===e}},w=Array.isArray,O=g("undefined");var E=b("ArrayBuffer");var S=g("string"),R=g("function"),A=g("number"),j=function(e){return null!==e&&"object"===h(e)},T=function(e){if("object"!==y(e))return!1;var t=v(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},P=b("Date"),C=b("File"),N=b("Blob"),x=b("FileList"),k=b("URLSearchParams");function _(e,t){var r,n,o=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).allOwnKeys,i=void 0!==o&&o;if(null!=e)if("object"!==h(e)&&(e=[e]),w(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{var a,s=i?Object.getOwnPropertyNames(e):Object.keys(e),u=s.length;for(r=0;r<u;r++)a=s[r],t.call(null,e[a],a,e)}}function F(e,t){t=t.toLowerCase();for(var r,n=Object.keys(e),o=n.length;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}var U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,D=function(e){return!O(e)&&e!==U};var B,L=(B="undefined"!=typeof Uint8Array&&v(Uint8Array),function(e){return B&&e instanceof B}),I=b("HTMLFormElement"),q=function(e){var t=Object.prototype.hasOwnProperty;return function(e,r){return t.call(e,r)}}(),M=b("RegExp"),z=function(e,t){var r=Object.getOwnPropertyDescriptors(e),n={};_(r,(function(r,o){var i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},H="abcdefghijklmnopqrstuvwxyz",J="0123456789",W={DIGIT:J,ALPHA:H,ALPHA_DIGIT:H+H.toUpperCase()+J};var K=b("AsyncFunction"),V={isArray:w,isArrayBuffer:E,isBuffer:function(e){return null!==e&&!O(e)&&null!==e.constructor&&!O(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t;return e&&("function"==typeof FormData&&e instanceof FormData||R(e.append)&&("formdata"===(t=y(e))||"object"===t&&R(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&E(e.buffer)},isString:S,isNumber:A,isBoolean:function(e){return!0===e||!1===e},isObject:j,isPlainObject:T,isUndefined:O,isDate:P,isFile:C,isBlob:N,isRegExp:M,isFunction:R,isStream:function(e){return j(e)&&R(e.pipe)},isURLSearchParams:k,isTypedArray:L,isFileList:x,forEach:_,merge:function e(){for(var t=(D(this)&&this||{}).caseless,r={},n=function(n,o){var i=t&&F(r,o)||o;T(r[i])&&T(n)?r[i]=e(r[i],n):T(n)?r[i]=e({},n):w(n)?r[i]=n.slice():r[i]=n},o=0,i=arguments.length;o<i;o++)arguments[o]&&_(arguments[o],n);return r},extend:function(e,t,r){return _(t,(function(t,n){r&&R(t)?e[n]=l(t,r):e[n]=t}),{allOwnKeys:(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r,n){var o,i,a,s={};if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&v(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:y,kindOfTest:b,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;if(w(e))return e;var t=e.length;if(!A(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},forEachEntry:function(e,t){for(var r,n=(e&&e[Symbol.iterator]).call(e);(r=n.next())&&!r.done;){var o=r.value;t.call(e,o[0],o[1])}},matchAll:function(e,t){for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:I,hasOwnProperty:q,hasOwnProp:q,reduceDescriptors:z,freezeMethods:function(e){z(e,(function(t,r){if(R(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;var n=e[r];R(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:function(e,t){var r={},n=function(e){e.forEach((function(e){r[e]=!0}))};return w(e)?n(e):n(String(e).split(t)),r},toCamelCase:function(e){return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:F,global:U,isContextDefined:D,ALPHABET:W,generateString:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W.ALPHA_DIGIT,r="",n=t.length;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&R(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:function(e){var t=new Array(10);return function e(r,n){if(j(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[n]=r;var o=w(r)?[]:{};return _(r,(function(t,r){var i=e(t,n+1);!O(i)&&(o[r]=i)})),t[n]=void 0,o}}return r}(e,0)},isAsyncFn:K,isThenable:function(e){return e&&(j(e)||R(e))&&R(e.then)&&R(e.catch)}};function G(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}V.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var X=G.prototype,$={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){$[e]={value:e}})),Object.defineProperties(G,$),Object.defineProperty(X,"isAxiosError",{value:!0}),G.from=function(e,t,r,n,o,i){var a=Object.create(X);return V.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),G.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};function Q(e){return V.isPlainObject(e)||V.isArray(e)}function Z(e){return V.endsWith(e,"[]")?e.slice(0,-2):e}function Y(e,t,r){return e?e.concat(t).map((function(e,t){return e=Z(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}var ee=V.toFlatObject(V,{},null,(function(e){return/^is[A-Z]/.test(e)}));function te(e,t,r){if(!V.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;var n=(r=V.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!V.isUndefined(t[e])}))).metaTokens,o=r.visitor||c,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!=typeof Blob&&Blob)&&V.isSpecCompliantForm(t);if(!V.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(V.isDate(e))return e.toISOString();if(!s&&V.isBlob(e))throw new G("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(e)||V.isTypedArray(e)?s&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,o){var s=e;if(e&&!o&&"object"===h(e))if(V.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(V.isArray(e)&&function(e){return V.isArray(e)&&!e.some(Q)}(e)||(V.isFileList(e)||V.endsWith(r,"[]"))&&(s=V.toArray(e)))return r=Z(r),s.forEach((function(e,n){!V.isUndefined(e)&&null!==e&&t.append(!0===a?Y([r],n,i):null===a?r:r+"[]",u(e))})),!1;return!!Q(e)||(t.append(Y(o,r,i),u(e)),!1)}var f=[],l=Object.assign(ee,{defaultVisitor:c,convertValue:u,isVisitable:Q});if(!V.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!V.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),V.forEach(r,(function(r,i){!0===(!(V.isUndefined(r)||null===r)&&o.call(t,r,V.isString(i)?i.trim():i,n,l))&&e(r,n?n.concat(i):[i])})),f.pop()}}(e),t}function re(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ne(e,t){this._pairs=[],e&&te(e,this,t)}var oe=ne.prototype;function ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ae(e,t,r){if(!t)return e;var n,o=r&&r.encode||ie,i=r&&r.serialize;if(n=i?i(t,r):V.isURLSearchParams(t)?t.toString():new ne(t,r).toString(o)){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}oe.append=function(e,t){this._pairs.push([e,t])},oe.toString=function(e){var t=e?function(t){return e.call(this,t,re)}:re;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var se,ue=function(){function e(){f(this,e),this.handlers=[]}return d(e,[{key:"use",value:function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){V.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}(),ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ne,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},le="undefined"!=typeof window&&"undefined"!=typeof document,de=(se="undefined"!=typeof navigator&&navigator.product,le&&["ReactNative","NativeScript","NS"].indexOf(se)<0),pe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,he=u(u({},Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:le,hasStandardBrowserEnv:de,hasStandardBrowserWebWorkerEnv:pe},Symbol.toStringTag,{value:"Module"}))),fe);function me(e){function t(e,r,n,o){var i=e[o++],a=Number.isFinite(+i),s=o>=e.length;return i=!i&&V.isArray(n)?n.length:i,s?(V.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a):(n[i]&&V.isObject(n[i])||(n[i]=[]),t(e,r,n[i],o)&&V.isArray(n[i])&&(n[i]=function(e){var t,r,n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i])),!a)}if(V.isFormData(e)&&V.isFunction(e.entries)){var r={};return V.forEachEntry(e,(function(e,n){t(function(e){return V.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),n,r,0)})),r}return null}var ve={transitional:ce,adapter:["xhr","http"],transformRequest:[function(e,t){var r,n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=V.isObject(e);if(i&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return o&&o?JSON.stringify(me(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return te(e,new he.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return he.isNode&&V.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((r=V.isFileList(e))||n.indexOf("multipart/form-data")>-1){var a=this.env&&this.env.FormData;return te(r?{"files[]":e}:e,a&&new a,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e,t,r){if(V.isString(e))try{return(t||JSON.parse)(e),V.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||ve.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&V.isString(e)&&(r&&!this.responseType||n)){var o=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw G.from(i,G.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],(function(e){ve.headers[e]={}}));var ye=ve,be=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ge=Symbol("internals");function we(e){return e&&String(e).trim().toLowerCase()}function Oe(e){return!1===e||null==e?e:V.isArray(e)?e.map(Oe):String(e)}function Ee(e,t,r,n,o){return V.isFunction(n)?n.call(this,t,r):(o&&(t=r),V.isString(t)?V.isString(n)?-1!==t.indexOf(n):V.isRegExp(n)?n.test(t):void 0:void 0)}var Se=function(e,t){function n(e){f(this,n),e&&this.set(e)}return d(n,[{key:"set",value:function(e,t,r){var n=this;function o(e,t,r){var o=we(t);if(!o)throw new Error("header name must be a non-empty string");var i=V.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=Oe(e))}var i,a,s,u,c,f=function(e,t){return V.forEach(e,(function(e,r){return o(e,r,t)}))};return V.isPlainObject(e)||e instanceof this.constructor?f(e,t):V.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?f((c={},(i=e)&&i.split("\n").forEach((function(e){u=e.indexOf(":"),a=e.substring(0,u).trim().toLowerCase(),s=e.substring(u+1).trim(),!a||c[a]&&be[a]||("set-cookie"===a?c[a]?c[a].push(s):c[a]=[s]:c[a]=c[a]?c[a]+", "+s:s)})),c),t):null!=e&&o(t,e,r),this}},{key:"get",value:function(e,t){if(e=we(e)){var r=V.findKey(this,e);if(r){var n=this[r];if(!t)return n;if(!0===t)return function(e){for(var t,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=n.exec(e);)r[t[1]]=t[2];return r}(n);if(V.isFunction(t))return t.call(this,n,r);if(V.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=we(e)){var r=V.findKey(this,e);return!(!r||void 0===this[r]||t&&!Ee(0,this[r],r,t))}return!1}},{key:"delete",value:function(e,t){var r=this,n=!1;function o(e){if(e=we(e)){var o=V.findKey(r,e);!o||t&&!Ee(0,r[o],o,t)||(delete r[o],n=!0)}}return V.isArray(e)?e.forEach(o):o(e),n}},{key:"clear",value:function(e){for(var t=Object.keys(this),r=t.length,n=!1;r--;){var o=t[r];e&&!Ee(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}},{key:"normalize",value:function(e){var t=this,r={};return V.forEach(this,(function(n,o){var i=V.findKey(r,o);if(i)return t[i]=Oe(n),void delete t[o];var a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))}(o):String(o).trim();a!==o&&delete t[o],t[a]=Oe(n),r[a]=!0})),this}},{key:"concat",value:function(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=this.constructor).concat.apply(e,[this].concat(r))}},{key:"toJSON",value:function(e){var t=Object.create(null);return V.forEach(this,(function(r,n){null!=r&&!1!==r&&(t[n]=e&&V.isArray(r)?r.join(", "):r)})),t}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(e){var t=r(e,2);return t[0]+": "+t[1]})).join("\n")}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=new this(e),r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.forEach((function(e){return t.set(e)})),t}},{key:"accessor",value:function(e){var t=(this[ge]=this[ge]={accessors:{}}).accessors,r=this.prototype;function n(e){var n=we(e);t[n]||(!function(e,t){var r=V.toCamelCase(" "+t);["get","set","has"].forEach((function(n){Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return V.isArray(e)?e.forEach(n):n(e),this}}]),n}();Se.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.reduceDescriptors(Se.prototype,(function(e,t){var r=e.value,n=t[0].toUpperCase()+t.slice(1);return{get:function(){return r},set:function(e){this[n]=e}}})),V.freezeMethods(Se);var Re=Se;function Ae(e,t){var r=this||ye,n=t||r,o=Re.from(n.headers),i=n.data;return V.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function je(e){return!(!e||!e.__CANCEL__)}function Te(e,t,r){G.call(this,null==e?"canceled":e,G.ERR_CANCELED,t,r),this.name="CanceledError"}V.inherits(Te,G,{__CANCEL__:!0});var Pe=he.hasStandardBrowserEnv?{write:function(e,t,r,n,o,i){var a=[e+"="+encodeURIComponent(t)];V.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),V.isString(n)&&a.push("path="+n),V.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ce(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Ne=he.hasStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=V.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0};function xe(e,t){var r=0,n=function(e,t){e=e||10;var r,n=new Array(e),o=new Array(e),i=0,a=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=o[a];r||(r=u),n[i]=s,o[i]=u;for(var f=a,l=0;f!==i;)l+=n[f++],f%=e;if((i=(i+1)%e)===a&&(a=(a+1)%e),!(u-r<t)){var d=c&&u-c;return d?Math.round(1e3*l/d):void 0}}}(50,250);return function(o){var i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-r,u=n(s);r=i;var c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&i<=a?(a-i)/u:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}var ke={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(r){return new Promise((function(i,s){var u,c,f,l=r.data,d=Re.from(r.headers).normalize(),p=r.responseType,h=r.withXSRFToken;function m(){r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}if(V.isFormData(l))if(he.hasStandardBrowserEnv||he.hasStandardBrowserWebWorkerEnv)d.setContentType(!1);else if(!1!==(c=d.getContentType())){var v=c?c.split(";").map((function(e){return e.trim()})).filter(Boolean):[],y=a(f=v)||t(f)||o(f)||n(),b=y[0],g=y.slice(1);d.setContentType([b||"multipart/form-data"].concat(e(g)).join("; "))}var w=new XMLHttpRequest;if(r.auth){var O=r.auth.username||"",E=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";d.set("Authorization","Basic "+btoa(O+":"+E))}var S=Ce(r.baseURL,r.url);function R(){if(w){var e=Re.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders());!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new G("Request failed with status code "+r.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}((function(e){i(e),m()}),(function(e){s(e),m()}),{data:p&&"text"!==p&&"json"!==p?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:e,config:r,request:w}),w=null}}if(w.open(r.method.toUpperCase(),ae(S,r.params,r.paramsSerializer),!0),w.timeout=r.timeout,"onloadend"in w?w.onloadend=R:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(R)},w.onabort=function(){w&&(s(new G("Request aborted",G.ECONNABORTED,r,w)),w=null)},w.onerror=function(){s(new G("Network Error",G.ERR_NETWORK,r,w)),w=null},w.ontimeout=function(){var e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded",t=r.transitional||ce;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),s(new G(e,t.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,r,w)),w=null},he.hasStandardBrowserEnv&&(h&&V.isFunction(h)&&(h=h(r)),h||!1!==h&&Ne(S))){var A=r.xsrfHeaderName&&r.xsrfCookieName&&Pe.read(r.xsrfCookieName);A&&d.set(r.xsrfHeaderName,A)}void 0===l&&d.setContentType(null),"setRequestHeader"in w&&V.forEach(d.toJSON(),(function(e,t){w.setRequestHeader(t,e)})),V.isUndefined(r.withCredentials)||(w.withCredentials=!!r.withCredentials),p&&"json"!==p&&(w.responseType=r.responseType),"function"==typeof r.onDownloadProgress&&w.addEventListener("progress",xe(r.onDownloadProgress,!0)),"function"==typeof r.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",xe(r.onUploadProgress)),(r.cancelToken||r.signal)&&(u=function(e){w&&(s(!e||e.type?new Te(null,r,w):e),w.abort(),w=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));var j,T=(j=/^([-+\w]{1,25})(:?\/\/|:)/.exec(S))&&j[1]||"";T&&-1===he.protocols.indexOf(T)?s(new G("Unsupported protocol "+T+":",G.ERR_BAD_REQUEST,r)):w.send(l||null)}))}};V.forEach(ke,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));var _e=function(e){return"- ".concat(e)},Fe=function(e){return V.isFunction(e)||null===e||!1===e},Ue=function(e){for(var t,n,o=(e=V.isArray(e)?e:[e]).length,i={},a=0;a<o;a++){var s=void 0;if(n=t=e[a],!Fe(t)&&void 0===(n=ke[(s=String(t)).toLowerCase()]))throw new G("Unknown adapter '".concat(s,"'"));if(n)break;i[s||"#"+a]=n}if(!n){var u=Object.entries(i).map((function(e){var t=r(e,2),n=t[0],o=t[1];return"adapter ".concat(n," ")+(!1===o?"is not supported by the environment":"is not available in the build")}));throw new G("There is no suitable adapter to dispatch the request "+(o?u.length>1?"since :\n"+u.map(_e).join("\n"):" "+_e(u[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function De(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Te(null,e)}function Be(e){return De(e),e.headers=Re.from(e.headers),e.data=Ae.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ue(e.adapter||ye.adapter)(e).then((function(t){return De(e),t.data=Ae.call(e,e.transformResponse,t),t.headers=Re.from(t.headers),t}),(function(t){return je(t)||(De(e),t&&t.response&&(t.response.data=Ae.call(e,e.transformResponse,t.response),t.response.headers=Re.from(t.response.headers))),Promise.reject(t)}))}var Le=function(e){return e instanceof Re?e.toJSON():e};function Ie(e,t){t=t||{};var r={};function n(e,t,r){return V.isPlainObject(e)&&V.isPlainObject(t)?V.merge.call({caseless:r},e,t):V.isPlainObject(t)?V.merge({},t):V.isArray(t)?t.slice():t}function o(e,t,r){return V.isUndefined(t)?V.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function i(e,t){if(!V.isUndefined(t))return n(void 0,t)}function a(e,t){return V.isUndefined(t)?V.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:function(e,t){return o(Le(e),Le(t),!0)}};return V.forEach(Object.keys(Object.assign({},e,t)),(function(n){var i=u[n]||o,a=i(e[n],t[n],n);V.isUndefined(a)&&i!==s||(r[n]=a)})),r}var qe="1.6.2",Me={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Me[e]=function(r){return h(r)===e||"a"+(t<1?"n ":" ")+e}}));var ze={};Me.transitional=function(e,t,r){function n(e,t){return"[Axios v1.6.2] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,o,i){if(!1===e)throw new G(n(o," has been removed"+(t?" in "+t:"")),G.ERR_DEPRECATED);return t&&!ze[o]&&(ze[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var He={assertOptions:function(e,t,r){if("object"!==h(e))throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],u=void 0===s||a(s,i,e);if(!0!==u)throw new G("option "+i+" must be "+u,G.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}},validators:Me},Je=He.validators,We=function(){function e(t){f(this,e),this.defaults=t,this.interceptors={request:new ue,response:new ue}}return d(e,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var r=t=Ie(this.defaults,t),n=r.transitional,o=r.paramsSerializer,i=r.headers;void 0!==n&&He.assertOptions(n,{silentJSONParsing:Je.transitional(Je.boolean),forcedJSONParsing:Je.transitional(Je.boolean),clarifyTimeoutError:Je.transitional(Je.boolean)},!1),null!=o&&(V.isFunction(o)?t.paramsSerializer={serialize:o}:He.assertOptions(o,{encode:Je.function,serialize:Je.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();var a=i&&V.merge(i.common,i[t.method]);i&&V.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete i[e]})),t.headers=Re.concat(a,i);var s=[],u=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(u=u&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));var c,f=[];this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)}));var l,d=0;if(!u){var p=[Be.bind(this),void 0];for(p.unshift.apply(p,s),p.push.apply(p,f),l=p.length,c=Promise.resolve(t);d<l;)c=c.then(p[d++],p[d++]);return c}l=s.length;var h=t;for(d=0;d<l;){var m=s[d++],v=s[d++];try{h=m(h)}catch(y){v.call(this,y);break}}try{c=Be.call(this,h)}catch(y){return Promise.reject(y)}for(d=0,l=f.length;d<l;)c=c.then(f[d++],f[d++]);return c}},{key:"getUri",value:function(e){return ae(Ce((e=Ie(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}]),e}();V.forEach(["delete","get","head","options"],(function(e){We.prototype[e]=function(t,r){return this.request(Ie(r||{},{method:e,url:t,data:(r||{}).data}))}})),V.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Ie(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}We.prototype[e]=t(),We.prototype[e+"Form"]=t(!0)}));var Ke=We,Ve=function(){function e(t){if(f(this,e),"function"!=typeof t)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var n=this;this.promise.then((function(e){if(n._listeners){for(var t=n._listeners.length;t-- >0;)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},t((function(e,t,o){n.reason||(n.reason=new Te(e,t,o),r(n.reason))}))}return d(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}();var Ge={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ge).forEach((function(e){var t=r(e,2),n=t[0],o=t[1];Ge[o]=n}));var Xe=Ge;var $e=function e(t){var r=new Ke(t),n=l(Ke.prototype.request,r);return V.extend(n,Ke.prototype,r,{allOwnKeys:!0}),V.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Ie(t,r))},n}(ye);$e.Axios=Ke,$e.CanceledError=Te,$e.CancelToken=Ve,$e.isCancel=je,$e.VERSION=qe,$e.toFormData=te,$e.AxiosError=G,$e.Cancel=$e.CanceledError,$e.all=function(e){return Promise.all(e)},$e.spread=function(e){return function(t){return e.apply(null,t)}},$e.isAxiosError=function(e){return V.isObject(e)&&!0===e.isAxiosError},$e.mergeConfig=Ie,$e.AxiosHeaders=Re,$e.formToJSON=function(e){return me(V.isHTMLForm(e)?new FormData(e):e)},$e.getAdapter=Ue,$e.HttpStatusCode=Xe,$e.default=$e;var Qe={500:"error.500",400:"error.{{message}}"},Ze=$e.create({baseURL:"https://res-server-red-server-cbcvjfupzv.us-east-1.fcapp.run",headers:{"Content-Type":"application/json"},withCredentials:!0});Ze.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),Ze.interceptors.response.use((function(e){return e.data}),(function(e){return console.error("响应拦截器 - 收到错误响应:",e),c.emit("fullScreenLoading:hide"),c.emit("message:error",Qe[e.response.status].replace("{{message}}",e.response.data)),Promise.reject(e)}));var Ye=Ze;new TextDecoder,function(){var e=new TextDecoder,t="data:image/png;base64,"}()}}}))}();
