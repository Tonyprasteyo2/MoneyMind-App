import{o as Qr,d as Oi}from"./idb-Bn1DMRyg.js";const vh=()=>{};var sa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ah=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,y=o>>2,I=(o&3)<<4|l>>4;let S=(l&15)<<2|f>>6,C=f&63;h||(C=64,a||(S=64)),r.push(t[y],t[I],t[S],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ah(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||I==null)throw new Sh;const S=o<<2|l>>4;if(r.push(S),f!==64){const C=l<<4&240|f>>2;if(r.push(C),I!==64){const N=f<<6&192|I;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rh=function(n){const e=Rc(n);return bc.encodeByteArray(e,!0)},Pr=function(n){return Rh(n).replace(/\./g,"")},Pc=function(n){try{return bc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=()=>bh().__FIREBASE_DEFAULTS__,Ch=()=>{if(typeof process>"u"||typeof sa>"u")return;const n=sa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pc(n[1]);return e&&JSON.parse(e)},Jr=()=>{try{return vh()||Ph()||Ch()||kh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cc=n=>{var e,t;return(t=(e=Jr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Nh=n=>{const e=Cc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},kc=()=>{var n;return(n=Jr())==null?void 0:n.config},Nc=n=>{var e;return(e=Jr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Pr(JSON.stringify(t)),Pr(JSON.stringify(a)),""].join(".")}const Sn={};function Oh(){const n={prod:[],emulator:[]};for(const e of Object.keys(Sn))Sn[e]?n.emulator.push(e):n.prod.push(e);return n}function Mh(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let oa=!1;function Vc(n,e){if(typeof window>"u"||typeof document>"u"||!en(window.location.host)||Sn[n]===e||Sn[n]||oa)return;Sn[n]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",o=Oh().prod.length>0;function a(){const S=document.getElementById(r);S&&S.remove()}function l(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function h(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function f(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{oa=!0,a()},S}function y(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=Mh(r),C=t("text"),N=document.getElementById(C)||document.createElement("span"),M=t("learnmore"),D=document.getElementById(M)||document.createElement("a"),q=t("preprendIcon"),$=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Q=S.element;l(Q),y(D,M);const ue=f();h($,q),Q.append($,N,D,ue),document.body.appendChild(Q)}o?(N.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function xh(){var e;const n=(e=Jr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jh(){const n=_e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $h(){return!xh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oc(){try{return typeof indexedDB=="object"}catch{return!1}}function Mc(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function qh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="FirebaseError";class qe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hh,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?zh(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new qe(i,l,r)}}function zh(n,e){return n.replace(Gh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gh=/\{\$([^}]+)}/g;function Wh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(aa(o)&&aa(a)){if(!bt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function aa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kh(n,e){const t=new Qh(n,e);return t.subscribe.bind(t)}class Qh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Mi),i.error===void 0&&(i.error=Mi),i.complete===void 0&&(i.complete=Mi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n){return n&&n._delegate?n._delegate:n}class Oe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zh(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yh(n){return n===Tt?void 0:n}function Zh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const td={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},nd=F.INFO,rd={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},id=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=rd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ps{constructor(e){this.name=e,this._logLevel=nd,this._logHandler=id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?td[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(od(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function od(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",ca="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new ps("@firebase/app"),ad="@firebase/app-compat",cd="@firebase/analytics-compat",ud="@firebase/analytics",ld="@firebase/app-check-compat",hd="@firebase/app-check",dd="@firebase/auth",fd="@firebase/auth-compat",pd="@firebase/database",gd="@firebase/data-connect",md="@firebase/database-compat",_d="@firebase/functions",yd="@firebase/functions-compat",Ed="@firebase/installations",Td="@firebase/installations-compat",Id="@firebase/messaging",wd="@firebase/messaging-compat",vd="@firebase/performance",Ad="@firebase/performance-compat",Sd="@firebase/remote-config",Rd="@firebase/remote-config-compat",bd="@firebase/storage",Pd="@firebase/storage-compat",Cd="@firebase/firestore",kd="@firebase/ai",Nd="@firebase/firestore-compat",Dd="firebase",Vd="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]",Od={[Ki]:"fire-core",[ad]:"fire-core-compat",[ud]:"fire-analytics",[cd]:"fire-analytics-compat",[hd]:"fire-app-check",[ld]:"fire-app-check-compat",[dd]:"fire-auth",[fd]:"fire-auth-compat",[pd]:"fire-rtdb",[gd]:"fire-data-connect",[md]:"fire-rtdb-compat",[_d]:"fire-fn",[yd]:"fire-fn-compat",[Ed]:"fire-iid",[Td]:"fire-iid-compat",[Id]:"fire-fcm",[wd]:"fire-fcm-compat",[vd]:"fire-perf",[Ad]:"fire-perf-compat",[Sd]:"fire-rc",[Rd]:"fire-rc-compat",[bd]:"fire-gcs",[Pd]:"fire-gcs-compat",[Cd]:"fire-fst",[Nd]:"fire-fst-compat",[kd]:"fire-vertex","fire-js":"fire-js",[Dd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map,Md=new Map,Ji=new Map;function ua(n,e){try{n.container.addComponent(e)}catch(t){Je.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fe(n){const e=n.name;if(Ji.has(e))return Je.debug(`There were multiple attempts to register component ${e}.`),!1;Ji.set(e,n);for(const t of Cr.values())ua(t,n);for(const t of Md.values())ua(t,n);return!0}function tn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function be(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new Mt("app","Firebase",Ld);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=Vd;function Ud(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Qi,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ut.create("bad-app-name",{appName:String(i)});if(t||(t=kc()),!t)throw ut.create("no-options");const o=Cr.get(i);if(o){if(bt(t,o.options)&&bt(r,o.config))return o;throw ut.create("duplicate-app",{appName:i})}const a=new ed(i);for(const h of Ji.values())a.addComponent(h);const l=new xd(t,r,a);return Cr.set(i,l),l}function gs(n=Qi){const e=Cr.get(n);if(!e&&n===Qi&&kc())return Ud();if(!e)throw ut.create("no-app",{appName:n});return e}function De(n,e,t){let r=Od[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Je.warn(a.join(" "));return}Fe(new Oe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="firebase-heartbeat-database",Bd=1,Dn="firebase-heartbeat-store";let Li=null;function Lc(){return Li||(Li=Qr(Fd,Bd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Dn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ut.create("idb-open",{originalErrorMessage:n.message})})),Li}async function jd(n){try{const t=(await Lc()).transaction(Dn),r=await t.objectStore(Dn).get(xc(n));return await t.done,r}catch(e){if(e instanceof qe)Je.warn(e.message);else{const t=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Je.warn(t.message)}}}async function la(n,e){try{const r=(await Lc()).transaction(Dn,"readwrite");await r.objectStore(Dn).put(e,xc(n)),await r.done}catch(t){if(t instanceof qe)Je.warn(t.message);else{const r=ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Je.warn(r.message)}}}function xc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=1024,qd=30;class Hd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ha();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>qd){const a=Wd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Je.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ha(),{heartbeatsToSend:r,unsentEntries:i}=zd(this._heartbeatsCache.heartbeats),o=Pr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Je.warn(t),""}}}function ha(){return new Date().toISOString().substring(0,10)}function zd(n,e=$d){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),da(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),da(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Gd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oc()?Mc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return la(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return la(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function da(n){return Pr(JSON.stringify({version:2,heartbeats:n})).length}function Wd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){Fe(new Oe("platform-logger",e=>new sd(e),"PRIVATE")),Fe(new Oe("heartbeat",e=>new Hd(e),"PRIVATE")),De(Ki,ca,n),De(Ki,ca,"esm2020"),De("fire-js","")}Kd("");function Uc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qd=Uc,Fc=new Mt("auth","Firebase",Uc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new ps("@firebase/auth");function Jd(n,...e){kr.logLevel<=F.WARN&&kr.warn(`Auth (${nn}): ${n}`,...e)}function Er(n,...e){kr.logLevel<=F.ERROR&&kr.error(`Auth (${nn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw _s(n,...e)}function Ve(n,...e){return _s(n,...e)}function ms(n,e,t){const r={...Qd(),[e]:t};return new Mt("auth","Firebase",r).create(e,{appName:n.name})}function At(n){return ms(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Be(n,"argument-error"),ms(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _s(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Fc.create(n,...e)}function O(n,e,...t){if(!n)throw _s(e,...t)}function ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Er(e),new Error(e)}function Xe(n,e){n||ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Yd(){return fa()==="http:"||fa()==="https:"}function fa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yd()||Fh()||"connection"in navigator)?navigator.onLine:!0}function ef(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xe(t>e,"Short delay should be less than long delay!"),this.isMobile=Lh()||Bh()}get(){return Zd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n,e){Xe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rf=new $n(3e4,6e4);function Es(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function rn(n,e,t,r,i={}){return jc(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=jn({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...o};return Uh()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&en(n.emulatorConfig.host)&&(f.credentials="include"),Bc.fetch()(await $c(n,n.config.apiHost,t,l),f)})}async function jc(n,e,t){n._canInitEmulator=!1;const r={...tf,...e};try{const i=new of(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw dr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw dr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw dr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw dr(n,"user-disabled",a);const y=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw ms(n,y,f);Be(n,y)}}catch(i){if(i instanceof qe)throw i;Be(n,"network-request-failed",{message:String(i)})}}async function sf(n,e,t,r,i={}){const o=await rn(n,e,t,r,i);return"mfaPendingCredential"in o&&Be(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function $c(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?ys(n.config,i):`${n.config.apiScheme}://${i}`;return nf.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class of{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),rf.get())})}}function dr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ve(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(n,e){return rn(n,"POST","/v1/accounts:delete",e)}async function Nr(n,e){return rn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cf(n,e=!1){const t=Te(n),r=await t.getIdToken(e),i=Ts(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Rn(xi(i.auth_time)),issuedAtTime:Rn(xi(i.iat)),expirationTime:Rn(xi(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function xi(n){return Number(n)*1e3}function Ts(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pc(t);return i?JSON.parse(i):(Er("Failed to decode base64 JWT payload"),null)}catch(i){return Er("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pa(n){const e=Ts(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qe&&uf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rn(this.lastLoginAt),this.creationTime=Rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(n){var I;const e=n.auth,t=await n.getIdToken(),r=await Vn(n,Nr(e,{idToken:t}));O(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=(I=i.providerUserInfo)!=null&&I.length?qc(i.providerUserInfo):[],a=df(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function hf(n){const e=Te(n);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function df(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qc(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(n,e){const t=await jc(n,{},async()=>{const r=jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await $c(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&en(n.emulatorConfig.host)&&(h.credentials="include"),Bc.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pf(n,e){return rn(n,"POST","/v2/accounts:revokeToken",Es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=pa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await ff(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new qt;return r&&(O(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qt,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ke{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new lf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cf(this,e)}reload(){return hf(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ke({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Dr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await Vn(this,af(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:I,emailVerified:S,isAnonymous:C,providerData:N,stsTokenManager:M}=t;O(I&&M,e,"internal-error");const D=qt.fromJSON(this.name,M);O(typeof I=="string",e,"internal-error"),it(r,e.name),it(i,e.name),O(typeof S=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),it(o,e.name),it(a,e.name),it(l,e.name),it(h,e.name),it(f,e.name),it(y,e.name);const q=new ke({uid:I,auth:e,email:i,emailVerified:S,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:D,createdAt:f,lastLoginAt:y});return N&&Array.isArray(N)&&(q.providerData=N.map($=>({...$}))),h&&(q._redirectEventId=h),q}static async _fromIdTokenResponse(e,t,r=!1){const i=new qt;i.updateFromServerResponse(t);const o=new ke({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];O(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?qc(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new qt;l.updateFromIdToken(r);const h=new ke({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map;function Ge(n){Xe(n instanceof Function,"Expected a class definition");let e=ga.get(n);return e?(Xe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ga.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hc.type="NONE";const ma=Hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e,t){return`firebase:${n}:${e}:${t}`}class Ht{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Tr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Tr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Nr(this.auth,{idToken:e}).catch(()=>{});return t?ke._fromGetAccountInfoResponse(this.auth,t,e):null}return ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ht(Ge(ma),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Ge(ma);const a=Tr(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const y=await f._get(a);if(y){let I;if(typeof y=="string"){const S=await Nr(e,{idToken:y}).catch(()=>{});if(!S)break;I=await ke._fromGetAccountInfoResponse(e,S,y)}else I=ke._fromJSON(e,y);f!==o&&(l=I),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Ht(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Ht(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jc(e))return"Blackberry";if(Xc(e))return"Webos";if(Gc(e))return"Safari";if((e.includes("chrome/")||Wc(e))&&!e.includes("edge/"))return"Chrome";if(Qc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zc(n=_e()){return/firefox\//i.test(n)}function Gc(n=_e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wc(n=_e()){return/crios\//i.test(n)}function Kc(n=_e()){return/iemobile/i.test(n)}function Qc(n=_e()){return/android/i.test(n)}function Jc(n=_e()){return/blackberry/i.test(n)}function Xc(n=_e()){return/webos/i.test(n)}function Is(n=_e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gf(n=_e()){var e;return Is(n)&&!!((e=window.navigator)!=null&&e.standalone)}function mf(){return jh()&&document.documentMode===10}function Yc(n=_e()){return Is(n)||Qc(n)||Xc(n)||Jc(n)||/windows phone/i.test(n)||Kc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,e=[]){let t;switch(n){case"Browser":t=_a(_e());break;case"Worker":t=`${_a(_e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(n,e={}){return rn(n,"GET","/v2/passwordPolicy",Es(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=6;class Tf{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ef,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ya(this),this.idTokenSubscription=new ya(this),this.beforeStateQueue=new _f(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Nr(this,{idToken:e}),r=await ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ef()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(be(this.app))return Promise.reject(At(this));const t=e?Te(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return be(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yf(this),t=new Tf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Jd(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xr(n){return Te(n)}class ya{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kh(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wf(n){ws=n}function vf(n){return ws.loadJS(n)}function Af(){return ws.gapiScript}function Sf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n,e){const t=tn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(bt(o,e??{}))return i;Be(i,"already-initialized")}return t.initialize({options:e})}function bf(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pf(n,e,t){const r=Xr(n);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=eu(e),{host:a,port:l}=Cf(e),h=l===null?"":`:${l}`,f={url:`${o}//${a}${h}/`},y=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(bt(f,r.config.emulator)&&bt(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,en(a)?(Dc(`${o}//${a}${h}`),Vc("Auth",!0)):kf()}function eu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Cf(n){const e=eu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ea(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ea(a)}}}function Ea(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,t){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(n,e){return sf(n,"POST","/v1/accounts:signInWithIdp",Es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="http://localhost";class Pt extends tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=t;if(!r||!i)return null;const a=new Pt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zt(e,t)}buildRequest(){const e={requestUri:Nf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends vs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends qn{constructor(){super("facebook.com")}static credential(e){return Pt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ot.credential(t,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends qn{constructor(){super("github.com")}static credential(e){return Pt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends qn{constructor(){super("twitter.com")}static credential(e,t){return Pt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await ke._fromIdTokenResponse(e,r,i),a=Ta(r);return new Kt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ta(r);return new Kt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ta(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends qe{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Vr(e,t,r,i)}}function nu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Vr._fromErrorAndOperation(n,o,e,r):o})}async function Df(n,e,t=!1){const r=await Vn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Kt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vf(n,e,t=!1){const{auth:r}=n;if(be(r.app))return Promise.reject(At(r));const i="reauthenticate";try{const o=await Vn(n,nu(r,i,e,n),t);O(o.idToken,r,"internal-error");const a=Ts(o.idToken);O(a,r,"internal-error");const{sub:l}=a;return O(n.uid===l,r,"user-mismatch"),Kt._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of(n,e,t=!1){if(be(n.app))return Promise.reject(At(n));const r="signIn",i=await nu(n,r,e),o=await Kt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Mf(n,e,t,r){return Te(n).onIdTokenChanged(e,t,r)}function Lf(n,e,t){return Te(n).beforeAuthStateChanged(e,t)}function sE(n,e,t,r){return Te(n).onAuthStateChanged(e,t,r)}function oE(n){return Te(n).signOut()}const Or="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Or,"1"),this.storage.removeItem(Or),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=1e3,Uf=10;class iu extends ru{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);mf()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Uf):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iu.type="LOCAL";const Ff=iu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends ru{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}su.type="SESSION";const ou=su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Yr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async f=>f(t.origin,o)),h=await Bf(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const f=As("",20);i.port1.start();const y=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const S=I;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(S.data.response);break;default:clearTimeout(y),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function $f(n){Ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function qf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function zf(){return au()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="firebaseLocalStorageDb",Gf=1,Mr="firebaseLocalStorage",uu="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zr(n,e){return n.transaction([Mr],e?"readwrite":"readonly").objectStore(Mr)}function Wf(){const n=indexedDB.deleteDatabase(cu);return new Hn(n).toPromise()}function Zi(){const n=indexedDB.open(cu,Gf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Mr,{keyPath:uu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Mr)?e(r):(r.close(),await Wf(),e(await Zi()))})})}async function Ia(n,e,t){const r=Zr(n,!0).put({[uu]:e,value:t});return new Hn(r).toPromise()}async function Kf(n,e){const t=Zr(n,!1).get(e),r=await new Hn(t).toPromise();return r===void 0?null:r.value}function wa(n,e){const t=Zr(n,!0).delete(e);return new Hn(t).toPromise()}const Qf=800,Jf=3;class lu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Jf)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return au()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yr._getInstance(zf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await qf(),!this.activeServiceWorker)return;this.sender=new jf(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zi();return await Ia(e,Or,"1"),await wa(e,Or),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ia(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Kf(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Zr(i,!1).getAll();return new Hn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lu.type="LOCAL";const Xf=lu;new $n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n,e){return e?Ge(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yf(n){return Of(n.auth,new Ss(n),n.bypassAuthState)}function Zf(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Vf(t,new Ss(n),n.bypassAuthState)}async function ep(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Df(t,new Ss(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yf;case"linkViaPopup":case"linkViaRedirect":return ep;case"reauthViaPopup":case"reauthViaRedirect":return Zf;default:Be(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new $n(2e3,1e4);async function aE(n,e,t){if(be(n.app))return Promise.reject(Ve(n,"operation-not-supported-in-this-environment"));const r=Xr(n);Xd(n,e,vs);const i=hu(r,t);return new It(r,"signInViaPopup",e,i).executeNotNull()}class It extends du{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,It.currentPopupAction&&It.currentPopupAction.cancel(),It.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=As();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,It.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tp.get())};e()}}It.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="pendingRedirect",Ir=new Map;class rp extends du{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ir.get(this.auth._key());if(!e){try{const r=await ip(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ir.set(this.auth._key(),e)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ip(n,e){const t=ap(e),r=op(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function sp(n,e){Ir.set(n._key(),e)}function op(n){return Ge(n._redirectPersistence)}function ap(n){return Tr(np,n.config.apiKey,n.name)}async function cp(n,e,t=!1){if(be(n.app))return Promise.reject(At(n));const r=Xr(n),i=hu(r,e),a=await new rp(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=600*1e3;class lp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fu(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ve(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=up&&this.cachedEventUids.clear(),this.cachedEventUids.has(va(e))}saveEventToCache(e){this.cachedEventUids.add(va(e)),this.lastProcessedEventTime=Date.now()}}function va(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(n,e={}){return rn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pp=/^https?/;async function gp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dp(n);for(const t of e)try{if(mp(t))return}catch{}Be(n,"unauthorized-domain")}function mp(n){const e=Xi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!pp.test(t))return!1;if(fp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new $n(3e4,6e4);function Aa(){const n=Ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yp(n){return new Promise((e,t)=>{var i,o,a;function r(){Aa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Aa(),t(Ve(n,"network-request-failed"))},timeout:_p.get()})}if((o=(i=Ue().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=Ue().gapi)!=null&&a.load)r();else{const l=Sf("iframefcb");return Ue()[l]=()=>{gapi.load?r():t(Ve(n,"network-request-failed"))},vf(`${Af()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw wr=null,e})}let wr=null;function Ep(n){return wr=wr||yp(n),wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new $n(5e3,15e3),Ip="__/auth/iframe",wp="emulator/auth/iframe",vp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sp(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ys(e,wp):`https://${n.config.authDomain}/${Ip}`,r={apiKey:e.apiKey,appName:n.name,v:nn},i=Ap.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${jn(r).slice(1)}`}async function Rp(n){const e=await Ep(n),t=Ue().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Sp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vp,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ve(n,"network-request-failed"),l=Ue().setTimeout(()=>{o(a)},Tp.get());function h(){Ue().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pp=500,Cp=600,kp="_blank",Np="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dp(n,e,t,r=Pp,i=Cp){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...bp,width:r.toString(),height:i.toString(),top:o,left:a},f=_e().toLowerCase();t&&(l=Wc(f)?kp:t),zc(f)&&(e=e||Np,h.scrollbars="yes");const y=Object.entries(h).reduce((S,[C,N])=>`${S}${C}=${N},`,"");if(gf(f)&&l!=="_self")return Vp(e||"",l),new Sa(null);const I=window.open(e||"",l,y);O(I,n,"popup-blocked");try{I.focus()}catch{}return new Sa(I)}function Vp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="__/auth/handler",Mp="emulator/auth/handler",Lp=encodeURIComponent("fac");async function Ra(n,e,t,r,i,o){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:nn,eventId:i};if(e instanceof vs){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Wh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,I]of Object.entries({}))a[y]=I}if(e instanceof qn){const y=e.getScopes().filter(I=>I!=="");y.length>0&&(a.scopes=y.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const y of Object.keys(l))l[y]===void 0&&delete l[y];const h=await n._getAppCheckToken(),f=h?`#${Lp}=${encodeURIComponent(h)}`:"";return`${xp(n)}?${jn(l).slice(1)}${f}`}function xp({config:n}){return n.emulator?ys(n,Mp):`https://${n.authDomain}/${Op}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="webStorageSupport";class Up{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ou,this._completeRedirectFn=cp,this._overrideRedirectResult=sp}async _openPopup(e,t,r,i){var a;Xe((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Ra(e,t,r,Xi(),i);return Dp(e,o,As())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Ra(e,t,r,Xi(),i);return $f(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Xe(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Rp(e),r=new lp(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ui,{type:Ui},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[Ui];o!==void 0&&t(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yc()||Gc()||Is()}}const Fp=Up;var ba="@firebase/auth",Pa="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $p(n){Fe(new Oe("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;O(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zc(n)},f=new If(r,i,o,h);return bf(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Fe(new Oe("auth-internal",e=>{const t=Xr(e.getProvider("auth").getImmediate());return(r=>new Bp(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(ba,Pa,jp(n)),De(ba,Pa,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=300,Hp=Nc("authIdTokenMaxAge")||qp;let Ca=null;const zp=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Hp)return;const i=t==null?void 0:t.token;Ca!==i&&(Ca=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cE(n=gs()){const e=tn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rf(n,{popupRedirectResolver:Fp,persistence:[Xf,Ff,ou]}),r=Nc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=zp(o.toString());Lf(t,a,()=>a(t.currentUser)),Mf(t,l=>a(l))}}const i=Cc("auth");return i&&Pf(t,`http://${i}`),t}function Gp(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}wf({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Ve("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Gp().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$p("Browser");var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function m(){}m.prototype=p.prototype,E.F=p.prototype,E.prototype=new m,E.prototype.constructor=E,E.D=function(T,_,v){for(var g=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)g[Ie-2]=arguments[Ie];return p.prototype[_].apply(T,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,m){m||(m=0);const T=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)T[_]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(_=0;_<16;++_)T[_]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=E.g[0],m=E.g[1],_=E.g[2];let v=E.g[3],g;g=p+(v^m&(_^v))+T[0]+3614090360&4294967295,p=m+(g<<7&4294967295|g>>>25),g=v+(_^p&(m^_))+T[1]+3905402710&4294967295,v=p+(g<<12&4294967295|g>>>20),g=_+(m^v&(p^m))+T[2]+606105819&4294967295,_=v+(g<<17&4294967295|g>>>15),g=m+(p^_&(v^p))+T[3]+3250441966&4294967295,m=_+(g<<22&4294967295|g>>>10),g=p+(v^m&(_^v))+T[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=v+(_^p&(m^_))+T[5]+1200080426&4294967295,v=p+(g<<12&4294967295|g>>>20),g=_+(m^v&(p^m))+T[6]+2821735955&4294967295,_=v+(g<<17&4294967295|g>>>15),g=m+(p^_&(v^p))+T[7]+4249261313&4294967295,m=_+(g<<22&4294967295|g>>>10),g=p+(v^m&(_^v))+T[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=v+(_^p&(m^_))+T[9]+2336552879&4294967295,v=p+(g<<12&4294967295|g>>>20),g=_+(m^v&(p^m))+T[10]+4294925233&4294967295,_=v+(g<<17&4294967295|g>>>15),g=m+(p^_&(v^p))+T[11]+2304563134&4294967295,m=_+(g<<22&4294967295|g>>>10),g=p+(v^m&(_^v))+T[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=v+(_^p&(m^_))+T[13]+4254626195&4294967295,v=p+(g<<12&4294967295|g>>>20),g=_+(m^v&(p^m))+T[14]+2792965006&4294967295,_=v+(g<<17&4294967295|g>>>15),g=m+(p^_&(v^p))+T[15]+1236535329&4294967295,m=_+(g<<22&4294967295|g>>>10),g=p+(_^v&(m^_))+T[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=v+(m^_&(p^m))+T[6]+3225465664&4294967295,v=p+(g<<9&4294967295|g>>>23),g=_+(p^m&(v^p))+T[11]+643717713&4294967295,_=v+(g<<14&4294967295|g>>>18),g=m+(v^p&(_^v))+T[0]+3921069994&4294967295,m=_+(g<<20&4294967295|g>>>12),g=p+(_^v&(m^_))+T[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=v+(m^_&(p^m))+T[10]+38016083&4294967295,v=p+(g<<9&4294967295|g>>>23),g=_+(p^m&(v^p))+T[15]+3634488961&4294967295,_=v+(g<<14&4294967295|g>>>18),g=m+(v^p&(_^v))+T[4]+3889429448&4294967295,m=_+(g<<20&4294967295|g>>>12),g=p+(_^v&(m^_))+T[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=v+(m^_&(p^m))+T[14]+3275163606&4294967295,v=p+(g<<9&4294967295|g>>>23),g=_+(p^m&(v^p))+T[3]+4107603335&4294967295,_=v+(g<<14&4294967295|g>>>18),g=m+(v^p&(_^v))+T[8]+1163531501&4294967295,m=_+(g<<20&4294967295|g>>>12),g=p+(_^v&(m^_))+T[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=v+(m^_&(p^m))+T[2]+4243563512&4294967295,v=p+(g<<9&4294967295|g>>>23),g=_+(p^m&(v^p))+T[7]+1735328473&4294967295,_=v+(g<<14&4294967295|g>>>18),g=m+(v^p&(_^v))+T[12]+2368359562&4294967295,m=_+(g<<20&4294967295|g>>>12),g=p+(m^_^v)+T[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=v+(p^m^_)+T[8]+2272392833&4294967295,v=p+(g<<11&4294967295|g>>>21),g=_+(v^p^m)+T[11]+1839030562&4294967295,_=v+(g<<16&4294967295|g>>>16),g=m+(_^v^p)+T[14]+4259657740&4294967295,m=_+(g<<23&4294967295|g>>>9),g=p+(m^_^v)+T[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=v+(p^m^_)+T[4]+1272893353&4294967295,v=p+(g<<11&4294967295|g>>>21),g=_+(v^p^m)+T[7]+4139469664&4294967295,_=v+(g<<16&4294967295|g>>>16),g=m+(_^v^p)+T[10]+3200236656&4294967295,m=_+(g<<23&4294967295|g>>>9),g=p+(m^_^v)+T[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=v+(p^m^_)+T[0]+3936430074&4294967295,v=p+(g<<11&4294967295|g>>>21),g=_+(v^p^m)+T[3]+3572445317&4294967295,_=v+(g<<16&4294967295|g>>>16),g=m+(_^v^p)+T[6]+76029189&4294967295,m=_+(g<<23&4294967295|g>>>9),g=p+(m^_^v)+T[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=v+(p^m^_)+T[12]+3873151461&4294967295,v=p+(g<<11&4294967295|g>>>21),g=_+(v^p^m)+T[15]+530742520&4294967295,_=v+(g<<16&4294967295|g>>>16),g=m+(_^v^p)+T[2]+3299628645&4294967295,m=_+(g<<23&4294967295|g>>>9),g=p+(_^(m|~v))+T[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=v+(m^(p|~_))+T[7]+1126891415&4294967295,v=p+(g<<10&4294967295|g>>>22),g=_+(p^(v|~m))+T[14]+2878612391&4294967295,_=v+(g<<15&4294967295|g>>>17),g=m+(v^(_|~p))+T[5]+4237533241&4294967295,m=_+(g<<21&4294967295|g>>>11),g=p+(_^(m|~v))+T[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=v+(m^(p|~_))+T[3]+2399980690&4294967295,v=p+(g<<10&4294967295|g>>>22),g=_+(p^(v|~m))+T[10]+4293915773&4294967295,_=v+(g<<15&4294967295|g>>>17),g=m+(v^(_|~p))+T[1]+2240044497&4294967295,m=_+(g<<21&4294967295|g>>>11),g=p+(_^(m|~v))+T[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=v+(m^(p|~_))+T[15]+4264355552&4294967295,v=p+(g<<10&4294967295|g>>>22),g=_+(p^(v|~m))+T[6]+2734768916&4294967295,_=v+(g<<15&4294967295|g>>>17),g=m+(v^(_|~p))+T[13]+1309151649&4294967295,m=_+(g<<21&4294967295|g>>>11),g=p+(_^(m|~v))+T[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=v+(m^(p|~_))+T[11]+3174756917&4294967295,v=p+(g<<10&4294967295|g>>>22),g=_+(p^(v|~m))+T[2]+718787259&4294967295,_=v+(g<<15&4294967295|g>>>17),g=m+(v^(_|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(_+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+_&4294967295,E.g[3]=E.g[3]+v&4294967295}r.prototype.v=function(E,p){p===void 0&&(p=E.length);const m=p-this.blockSize,T=this.C;let _=this.h,v=0;for(;v<p;){if(_==0)for(;v<=m;)i(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<p;)if(T[_++]=E.charCodeAt(v++),_==this.blockSize){i(this,T),_=0;break}}else for(;v<p;)if(T[_++]=E[v++],_==this.blockSize){i(this,T),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var m=E.length-8;m<E.length;++m)E[m]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,m=0;m<4;++m)for(let T=0;T<32;T+=8)E[p++]=this.g[m]>>>T&255;return E};function o(E,p){var m=l;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=p(E)}function a(E,p){this.h=p;const m=[];let T=!0;for(let _=E.length-1;_>=0;_--){const v=E[_]|0;T&&v==p||(m[_]=v,T=!1)}this.g=m}var l={};function h(E){return-128<=E&&E<128?o(E,function(p){return new a([p|0],p<0?-1:0)}):new a([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return D(f(-E));const p=[];let m=1;for(let T=0;E>=m;T++)p[T]=E/m|0,m*=4294967296;return new a(p,0)}function y(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(y(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=f(Math.pow(p,8));let T=I;for(let v=0;v<E.length;v+=8){var _=Math.min(8,E.length-v);const g=parseInt(E.substring(v,v+_),p);_<8?(_=f(Math.pow(p,_)),T=T.j(_).add(f(g))):(T=T.j(m),T=T.add(f(g)))}return T}var I=h(0),S=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();let E=0,p=1;for(let m=0;m<this.g.length;m++){const T=this.i(m);E+=(T>=0?T:4294967296+T)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(M(this))return"-"+D(this).toString(E);const p=f(Math.pow(E,6));var m=this;let T="";for(;;){const _=ue(m,p).g;m=q(m,_.j(p));let v=((m.g.length>0?m.g[0]:m.h)>>>0).toString(E);if(m=_,N(m))return v+T;for(;v.length<6;)v="0"+v;T=v+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=q(this,E),M(E)?-1:N(E)?0:1};function D(E){const p=E.g.length,m=[];for(let T=0;T<p;T++)m[T]=~E.g[T];return new a(m,~E.h).add(S)}n.abs=function(){return M(this)?D(this):this},n.add=function(E){const p=Math.max(this.g.length,E.g.length),m=[];let T=0;for(let _=0;_<=p;_++){let v=T+(this.i(_)&65535)+(E.i(_)&65535),g=(v>>>16)+(this.i(_)>>>16)+(E.i(_)>>>16);T=g>>>16,v&=65535,g&=65535,m[_]=g<<16|v}return new a(m,m[m.length-1]&-2147483648?-1:0)};function q(E,p){return E.add(D(p))}n.j=function(E){if(N(this)||N(E))return I;if(M(this))return M(E)?D(this).j(D(E)):D(D(this).j(E));if(M(E))return D(this.j(D(E)));if(this.l(C)<0&&E.l(C)<0)return f(this.m()*E.m());const p=this.g.length+E.g.length,m=[];for(var T=0;T<2*p;T++)m[T]=0;for(T=0;T<this.g.length;T++)for(let _=0;_<E.g.length;_++){const v=this.i(T)>>>16,g=this.i(T)&65535,Ie=E.i(_)>>>16,pt=E.i(_)&65535;m[2*T+2*_]+=g*pt,$(m,2*T+2*_),m[2*T+2*_+1]+=v*pt,$(m,2*T+2*_+1),m[2*T+2*_+1]+=g*Ie,$(m,2*T+2*_+1),m[2*T+2*_+2]+=v*Ie,$(m,2*T+2*_+2)}for(E=0;E<p;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=p;E<2*p;E++)m[E]=0;return new a(m,0)};function $(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function Q(E,p){this.g=E,this.h=p}function ue(E,p){if(N(p))throw Error("division by zero");if(N(E))return new Q(I,I);if(M(E))return p=ue(D(E),p),new Q(D(p.g),D(p.h));if(M(p))return p=ue(E,D(p)),new Q(D(p.g),p.h);if(E.g.length>30){if(M(E)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var m=S,T=p;T.l(E)<=0;)m=Se(m),T=Se(T);var _=le(m,1),v=le(T,1);for(T=le(T,2),m=le(m,2);!N(T);){var g=v.add(T);g.l(E)<=0&&(_=_.add(m),v=g),T=le(T,1),m=le(m,1)}return p=q(E,_.j(p)),new Q(_,p)}for(_=I;E.l(p)>=0;){for(m=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(m)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),v=f(m),g=v.j(p);M(g)||g.l(E)>0;)m-=T,v=f(m),g=v.j(p);N(v)&&(v=S),_=_.add(v),E=q(E,g)}return new Q(_,E)}n.B=function(E){return ue(this,E).h},n.and=function(E){const p=Math.max(this.g.length,E.g.length),m=[];for(let T=0;T<p;T++)m[T]=this.i(T)&E.i(T);return new a(m,this.h&E.h)},n.or=function(E){const p=Math.max(this.g.length,E.g.length),m=[];for(let T=0;T<p;T++)m[T]=this.i(T)|E.i(T);return new a(m,this.h|E.h)},n.xor=function(E){const p=Math.max(this.g.length,E.g.length),m=[];for(let T=0;T<p;T++)m[T]=this.i(T)^E.i(T);return new a(m,this.h^E.h)};function Se(E){const p=E.g.length+1,m=[];for(let T=0;T<p;T++)m[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(m,E.h)}function le(E,p){const m=p>>5;p%=32;const T=E.g.length-m,_=[];for(let v=0;v<T;v++)_[v]=p>0?E.i(v+m)>>>p|E.i(v+m+1)<<32-p:E.i(v+m);return new a(_,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=y,Rs=a}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pu,An,gu,vr,es,mu,_u,yu;(function(){var n,e=Object.defineProperty;function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof fr=="object"&&fr];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var w=s[d];if(!(w in u))break e;u=u[w]}s=s[s.length-1],d=u[s],c=c(d),c!=d&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var u=[],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&u.push([d,c[d]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function h(s,c,u){return s.call.apply(s.bind,arguments)}function f(s,c,u){return f=h,f.apply(null,arguments)}function y(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function I(s,c){function u(){}u.prototype=c.prototype,s.Z=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(d,w,A){for(var P=Array(arguments.length-2),L=2;L<arguments.length;L++)P[L-2]=arguments[L];return c.prototype[w].apply(d,P)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function C(s){const c=s.length;if(c>0){const u=Array(c);for(let d=0;d<c;d++)u[d]=s[d];return u}return[]}function N(s,c){for(let d=1;d<arguments.length;d++){const w=arguments[d];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=s.length||0;const A=w.length||0;s.length=u+A;for(let P=0;P<A;P++)s[u+P]=w[P]}else s.push(w)}}class M{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(s){a.setTimeout(()=>{throw s},0)}function q(){var s=E;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class ${constructor(){this.h=this.g=null}add(c,u){const d=Q.get();d.set(c,u),this.h?this.h.next=d:this.g=d,this.h=d}}var Q=new M(()=>new ue,s=>s.reset());class ue{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,le=!1,E=new $,p=()=>{const s=Promise.resolve(void 0);Se=()=>{s.then(m)}};function m(){for(var s;s=q();){try{s.h.call(s.g)}catch(u){D(u)}var c=Q;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}le=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return s})();function g(s){return/^[\s\xa0]*$/.test(s)}function Ie(s,c){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}I(Ie,_),Ie.prototype.init=function(s,c){const u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Ie.Z.h.call(this)},Ie.prototype.h=function(){Ie.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var pt="closure_listenable_"+(Math.random()*1e6|0),zl=0;function Gl(s,c,u,d,w){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!d,this.ha=w,this.key=++zl,this.da=this.fa=!1}function Xn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Yn(s,c,u){for(const d in s)c.call(u,s[d],d,s)}function Wl(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function ro(s){const c={};for(const u in s)c[u]=s[u];return c}const io="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function so(s,c){let u,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(u in d)s[u]=d[u];for(let A=0;A<io.length;A++)u=io[A],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function Zn(s){this.src=s,this.g={},this.h=0}Zn.prototype.add=function(s,c,u,d,w){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const P=hi(s,c,d,w);return P>-1?(c=s[P],u||(c.fa=!1)):(c=new Gl(c,this.src,A,!!d,w),c.fa=u,s.push(c)),c};function li(s,c){const u=c.type;if(u in s.g){var d=s.g[u],w=Array.prototype.indexOf.call(d,c,void 0),A;(A=w>=0)&&Array.prototype.splice.call(d,w,1),A&&(Xn(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function hi(s,c,u,d){for(let w=0;w<s.length;++w){const A=s[w];if(!A.da&&A.listener==c&&A.capture==!!u&&A.ha==d)return w}return-1}var di="closure_lm_"+(Math.random()*1e6|0),fi={};function oo(s,c,u,d,w){if(Array.isArray(c)){for(let A=0;A<c.length;A++)oo(s,c[A],u,d,w);return null}return u=uo(u),s&&s[pt]?s.J(c,u,l(d)?!!d.capture:!1,w):Kl(s,c,u,!1,d,w)}function Kl(s,c,u,d,w,A){if(!c)throw Error("Invalid event type");const P=l(w)?!!w.capture:!!w;let L=gi(s);if(L||(s[di]=L=new Zn(s)),u=L.add(c,u,d,P,A),u.proxy)return u;if(d=Ql(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)v||(w=P),w===void 0&&(w=!1),s.addEventListener(c.toString(),d,w);else if(s.attachEvent)s.attachEvent(co(c.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ql(){function s(u){return c.call(s.src,s.listener,u)}const c=Jl;return s}function ao(s,c,u,d,w){if(Array.isArray(c))for(var A=0;A<c.length;A++)ao(s,c[A],u,d,w);else d=l(d)?!!d.capture:!!d,u=uo(u),s&&s[pt]?(s=s.i,A=String(c).toString(),A in s.g&&(c=s.g[A],u=hi(c,u,d,w),u>-1&&(Xn(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete s.g[A],s.h--)))):s&&(s=gi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=hi(c,u,d,w)),(u=s>-1?c[s]:null)&&pi(u))}function pi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[pt])li(c.i,s);else{var u=s.type,d=s.proxy;c.removeEventListener?c.removeEventListener(u,d,s.capture):c.detachEvent?c.detachEvent(co(u),d):c.addListener&&c.removeListener&&c.removeListener(d),(u=gi(c))?(li(u,s),u.h==0&&(u.src=null,c[di]=null)):Xn(s)}}}function co(s){return s in fi?fi[s]:fi[s]="on"+s}function Jl(s,c){if(s.da)s=!0;else{c=new Ie(c,this);const u=s.listener,d=s.ha||s.src;s.fa&&pi(s),s=u.call(d,c)}return s}function gi(s){return s=s[di],s instanceof Zn?s:null}var mi="__closure_events_fn_"+(Math.random()*1e9>>>0);function uo(s){return typeof s=="function"?s:(s[mi]||(s[mi]=function(c){return s.handleEvent(c)}),s[mi])}function he(){T.call(this),this.i=new Zn(this),this.M=this,this.G=null}I(he,T),he.prototype[pt]=!0,he.prototype.removeEventListener=function(s,c,u,d){ao(this,s,c,u,d)};function ye(s,c){var u,d=s.G;if(d)for(u=[];d;d=d.G)u.push(d);if(s=s.M,d=c.type||c,typeof c=="string")c=new _(c,s);else if(c instanceof _)c.target=c.target||s;else{var w=c;c=new _(d,s),so(c,w)}w=!0;let A,P;if(u)for(P=u.length-1;P>=0;P--)A=c.g=u[P],w=er(A,d,!0,c)&&w;if(A=c.g=s,w=er(A,d,!0,c)&&w,w=er(A,d,!1,c)&&w,u)for(P=0;P<u.length;P++)A=c.g=u[P],w=er(A,d,!1,c)&&w}he.prototype.N=function(){if(he.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const u=s.g[c];for(let d=0;d<u.length;d++)Xn(u[d]);delete s.g[c],s.h--}}this.G=null},he.prototype.J=function(s,c,u,d){return this.i.add(String(s),c,!1,u,d)},he.prototype.K=function(s,c,u,d){return this.i.add(String(s),c,!0,u,d)};function er(s,c,u,d){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let A=0;A<c.length;++A){const P=c[A];if(P&&!P.da&&P.capture==u){const L=P.listener,te=P.ha||P.src;P.fa&&li(s.i,P),w=L.call(te,d)!==!1&&w}}return w&&!d.defaultPrevented}function Xl(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function lo(s){s.g=Xl(()=>{s.g=null,s.i&&(s.i=!1,lo(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Yl extends T{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:lo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(s){T.call(this),this.h=s,this.g={}}I(an,T);var ho=[];function fo(s){Yn(s.g,function(c,u){this.g.hasOwnProperty(u)&&pi(c)},s),s.g={}}an.prototype.N=function(){an.Z.N.call(this),fo(this)},an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _i=a.JSON.stringify,Zl=a.JSON.parse,eh=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function po(){}function go(){}var cn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yi(){_.call(this,"d")}I(yi,_);function Ei(){_.call(this,"c")}I(Ei,_);var gt={},mo=null;function tr(){return mo=mo||new he}gt.Ia="serverreachability";function _o(s){_.call(this,gt.Ia,s)}I(_o,_);function un(s){const c=tr();ye(c,new _o(c))}gt.STAT_EVENT="statevent";function yo(s,c){_.call(this,gt.STAT_EVENT,s),this.stat=c}I(yo,_);function Ee(s){const c=tr();ye(c,new yo(c,s))}gt.Ja="timingevent";function Eo(s,c){_.call(this,gt.Ja,s),this.size=c}I(Eo,_);function ln(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function hn(){this.g=!0}hn.prototype.ua=function(){this.g=!1};function th(s,c,u,d,w,A){s.info(function(){if(s.g)if(A){var P="",L=A.split("&");for(let H=0;H<L.length;H++){var te=L[H].split("=");if(te.length>1){const ne=te[0];te=te[1];const Le=ne.split("_");P=Le.length>=2&&Le[1]=="type"?P+(ne+"="+te+"&"):P+(ne+"=redacted&")}}}else P=null;else P=A;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+c+`
`+u+`
`+P})}function nh(s,c,u,d,w,A,P){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+c+`
`+u+`
`+A+" "+P})}function Ut(s,c,u,d){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+ih(s,u)+(d?" "+d:"")})}function rh(s,c){s.info(function(){return"TIMEOUT: "+c})}hn.prototype.info=function(){};function ih(s,c){if(!s.g)return c;if(!c)return null;try{const A=JSON.parse(c);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var u=A[s];if(!(u.length<2)){var d=u[1];if(Array.isArray(d)&&!(d.length<1)){var w=d[0];if(w!="noop"&&w!="stop"&&w!="close")for(let P=1;P<d.length;P++)d[P]=""}}}}return _i(A)}catch{return c}}var nr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},To={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Io;function Ti(){}I(Ti,po),Ti.prototype.g=function(){return new XMLHttpRequest},Io=new Ti;function dn(s){return encodeURIComponent(String(s))}function sh(s){var c=1;s=s.split(":");const u=[];for(;c>0&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function Ye(s,c,u,d){this.j=s,this.i=c,this.l=u,this.S=d||1,this.V=new an(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wo}function wo(){this.i=null,this.g="",this.h=!1}var vo={},Ii={};function wi(s,c,u){s.M=1,s.A=ir(Me(c)),s.u=u,s.R=!0,Ao(s,null)}function Ao(s,c){s.F=Date.now(),rr(s),s.B=Me(s.A);var u=s.B,d=s.S;Array.isArray(d)||(d=[String(d)]),xo(u.i,"t",d),s.C=0,u=s.j.L,s.h=new wo,s.g=ta(s.j,u?c:null,!s.u),s.P>0&&(s.O=new Yl(f(s.Y,s,s.g),s.P)),c=s.V,u=s.g,d=s.ba;var w="readystatechange";Array.isArray(w)||(w&&(ho[0]=w.toString()),w=ho);for(let A=0;A<w.length;A++){const P=oo(u,w[A],d||c.handleEvent,!1,c.h||c);if(!P)break;c.g[P.key]=P}c=s.J?ro(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),un(),th(s.i,s.v,s.B,s.l,s.S,s.u)}Ye.prototype.ba=function(s){s=s.target;const c=this.O;c&&tt(s)==3?c.j():this.Y(s)},Ye.prototype.Y=function(s){try{if(s==this.g)e:{const L=tt(this.g),te=this.g.ya(),H=this.g.ca();if(!(L<3)&&(L!=3||this.g&&(this.h.h||this.g.la()||Ho(this.g)))){this.K||L!=4||te==7||(te==8||H<=0?un(3):un(2)),vi(this);var c=this.g.ca();this.X=c;var u=oh(this);if(this.o=c==200,nh(this.i,this.v,this.B,this.l,this.S,L,c),this.o){if(this.U&&!this.L){t:{if(this.g){var d,w=this.g;if((d=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(d)){var A=d;break t}}A=null}if(s=A)Ut(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ai(this,s);else{this.o=!1,this.m=3,Ee(12),mt(this),fn(this);break e}}if(this.R){s=!0;let ne;for(;!this.K&&this.C<u.length;)if(ne=ah(this,u),ne==Ii){L==4&&(this.m=4,Ee(14),s=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}else if(ne==vo){this.m=4,Ee(15),Ut(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else Ut(this.i,this.l,ne,null),Ai(this,ne);if(So(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),L!=4||u.length!=0||this.h.h||(this.m=1,Ee(16),s=!1),this.o=this.o&&s,!s)Ut(this.i,this.l,u,"[Invalid Chunked Response]"),mt(this),fn(this);else if(u.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Di(P),P.P=!0,Ee(11))}}else Ut(this.i,this.l,u,null),Ai(this,u);L==4&&mt(this),this.o&&!this.K&&(L==4?Xo(this.j,this):(this.o=!1,rr(this)))}else Ih(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Ee(12)):(this.m=0,Ee(13)),mt(this),fn(this)}}}catch{}finally{}};function oh(s){if(!So(s))return s.g.la();const c=Ho(s.g);if(c==="")return"";let u="";const d=c.length,w=tt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return mt(s),fn(s),"";s.h.i=new a.TextDecoder}for(let A=0;A<d;A++)s.h.h=!0,u+=s.h.i.decode(c[A],{stream:!(w&&A==d-1)});return c.length=0,s.h.g+=u,s.C=0,s.h.g}function So(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function ah(s,c){var u=s.C,d=c.indexOf(`
`,u);return d==-1?Ii:(u=Number(c.substring(u,d)),isNaN(u)?vo:(d+=1,d+u>c.length?Ii:(c=c.slice(d,d+u),s.C=d+u,c)))}Ye.prototype.cancel=function(){this.K=!0,mt(this)};function rr(s){s.T=Date.now()+s.H,Ro(s,s.H)}function Ro(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=ln(f(s.aa,s),c)}function vi(s){s.D&&(a.clearTimeout(s.D),s.D=null)}Ye.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(rh(this.i,this.B),this.M!=2&&(un(),Ee(17)),mt(this),this.m=2,fn(this)):Ro(this,this.T-s)};function fn(s){s.j.I==0||s.K||Xo(s.j,s)}function mt(s){vi(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,fo(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function Ai(s,c){try{var u=s.j;if(u.I!=0&&(u.g==s||Si(u.h,s))){if(!s.L&&Si(u.h,s)&&u.I==3){try{var d=u.Ba.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)ur(u),ar(u);else break e;Ni(u),Ee(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=ln(f(u.Va,u),6e3));Co(u.h)<=1&&u.ta&&(u.ta=void 0)}else yt(u,11)}else if((s.L||u.g==s)&&ur(u),!g(c))for(w=u.Ba.g.parse(c),c=0;c<w.length;c++){let H=w[c];const ne=H[0];if(!(ne<=u.K))if(u.K=ne,H=H[1],u.I==2)if(H[0]=="c"){u.M=H[1],u.ba=H[2];const Le=H[3];Le!=null&&(u.ka=Le,u.j.info("VER="+u.ka));const Et=H[4];Et!=null&&(u.za=Et,u.j.info("SVER="+u.za));const nt=H[5];nt!=null&&typeof nt=="number"&&nt>0&&(d=1.5*nt,u.O=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const rt=s.g;if(rt){const hr=rt.g?rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hr){var A=d.h;A.g||hr.indexOf("spdy")==-1&&hr.indexOf("quic")==-1&&hr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ri(A,A.h),A.h=null))}if(d.G){const Vi=rt.g?rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vi&&(d.wa=Vi,G(d.J,d.G,Vi))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),d=u;var P=s;if(d.na=ea(d,d.L?d.ba:null,d.W),P.L){ko(d.h,P);var L=P,te=d.O;te&&(L.H=te),L.D&&(vi(L),rr(L)),d.g=P}else Qo(d);u.i.length>0&&cr(u)}else H[0]!="stop"&&H[0]!="close"||yt(u,7);else u.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?yt(u,7):ki(u):H[0]!="noop"&&u.l&&u.l.qa(H),u.A=0)}}un(4)}catch{}}var ch=class{constructor(s,c){this.g=s,this.map=c}};function bo(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Po(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Co(s){return s.h?1:s.g?s.g.size:0}function Si(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ri(s,c){s.g?s.g.add(c):s.h=c}function ko(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}bo.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function No(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.G);return c}return C(s.i)}var Do=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uh(s,c){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const d=s[u].indexOf("=");let w,A=null;d>=0?(w=s[u].substring(0,d),A=s[u].substring(d+1)):w=s[u],c(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ze(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof Ze?(this.l=s.l,pn(this,s.j),this.o=s.o,this.g=s.g,gn(this,s.u),this.h=s.h,bi(this,Uo(s.i)),this.m=s.m):s&&(c=String(s).match(Do))?(this.l=!1,pn(this,c[1]||"",!0),this.o=mn(c[2]||""),this.g=mn(c[3]||"",!0),gn(this,c[4]),this.h=mn(c[5]||"",!0),bi(this,c[6]||"",!0),this.m=mn(c[7]||"")):(this.l=!1,this.i=new yn(null,this.l))}Ze.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(_n(c,Vo,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(_n(c,Vo,!0),"@"),s.push(dn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(_n(u,u.charAt(0)=="/"?dh:hh,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",_n(u,ph)),s.join("")},Ze.prototype.resolve=function(s){const c=Me(this);let u=!!s.j;u?pn(c,s.j):u=!!s.o,u?c.o=s.o:u=!!s.g,u?c.g=s.g:u=s.u!=null;var d=s.h;if(u)gn(c,s.u);else if(u=!!s.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var w=c.h.lastIndexOf("/");w!=-1&&(d=c.h.slice(0,w+1)+d)}if(w=d,w==".."||w==".")d="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){d=w.lastIndexOf("/",0)==0,w=w.split("/");const A=[];for(let P=0;P<w.length;){const L=w[P++];L=="."?d&&P==w.length&&A.push(""):L==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),d&&P==w.length&&A.push("")):(A.push(L),d=!0)}d=A.join("/")}else d=w}return u?c.h=d:u=s.i.toString()!=="",u?bi(c,Uo(s.i)):u=!!s.m,u&&(c.m=s.m),c};function Me(s){return new Ze(s)}function pn(s,c,u){s.j=u?mn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function gn(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function bi(s,c,u){c instanceof yn?(s.i=c,gh(s.i,s.l)):(u||(c=_n(c,fh)),s.i=new yn(c,s.l))}function G(s,c,u){s.i.set(c,u)}function ir(s){return G(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function mn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function _n(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,lh),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function lh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Vo=/[#\/\?@]/g,hh=/[#\?:]/g,dh=/[#\?]/g,fh=/[#\?@]/g,ph=/#/g;function yn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function _t(s){s.g||(s.g=new Map,s.h=0,s.i&&uh(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=yn.prototype,n.add=function(s,c){_t(this),this.i=null,s=Ft(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function Oo(s,c){_t(s),c=Ft(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Mo(s,c){return _t(s),c=Ft(s,c),s.g.has(c)}n.forEach=function(s,c){_t(this),this.g.forEach(function(u,d){u.forEach(function(w){s.call(c,w,d,this)},this)},this)};function Lo(s,c){_t(s);let u=[];if(typeof c=="string")Mo(s,c)&&(u=u.concat(s.g.get(Ft(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)u=u.concat(s[c]);return u}n.set=function(s,c){return _t(this),this.i=null,s=Ft(this,s),Mo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=Lo(this,s),s.length>0?String(s[0]):c):c};function xo(s,c,u){Oo(s,c),u.length>0&&(s.i=null,s.g.set(Ft(s,c),C(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let d=0;d<c.length;d++){var u=c[d];const w=dn(u);u=Lo(this,u);for(let A=0;A<u.length;A++){let P=w;u[A]!==""&&(P+="="+dn(u[A])),s.push(P)}}return this.i=s.join("&")};function Uo(s){const c=new yn;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function Ft(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function gh(s,c){c&&!s.j&&(_t(s),s.i=null,s.g.forEach(function(u,d){const w=d.toLowerCase();d!=w&&(Oo(this,d),xo(this,w,u))},s)),s.j=c}function mh(s,c){const u=new hn;if(a.Image){const d=new Image;d.onload=y(et,u,"TestLoadImage: loaded",!0,c,d),d.onerror=y(et,u,"TestLoadImage: error",!1,c,d),d.onabort=y(et,u,"TestLoadImage: abort",!1,c,d),d.ontimeout=y(et,u,"TestLoadImage: timeout",!1,c,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else c(!1)}function _h(s,c){const u=new hn,d=new AbortController,w=setTimeout(()=>{d.abort(),et(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(w),A.ok?et(u,"TestPingServer: ok",!0,c):et(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),et(u,"TestPingServer: error",!1,c)})}function et(s,c,u,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(u)}catch{}}function yh(){this.g=new eh}function Pi(s){this.i=s.Sb||null,this.h=s.ab||!1}I(Pi,po),Pi.prototype.g=function(){return new sr(this.i,this.h)};function sr(s,c){he.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(sr,he),n=sr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,Tn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,En(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fo(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fo(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?En(this):Tn(this),this.readyState==3&&Fo(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,En(this))},n.Na=function(s){this.g&&(this.response=s,En(this))},n.ga=function(){this.g&&En(this)};function En(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Tn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function Tn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Bo(s){let c="";return Yn(s,function(u,d){c+=d,c+=":",c+=u,c+=`\r
`}),c}function Ci(s,c,u){e:{for(d in u){var d=!1;break e}d=!0}d||(u=Bo(u),typeof s=="string"?u!=null&&dn(u):G(s,c,u))}function J(s){he.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(J,he);var Eh=/^https?$/i,Th=["POST","PUT"];n=J.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Io.g(),this.g.onreadystatechange=S(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){jo(this,A);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)u.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())u.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),w=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Th,c,void 0)>=0)||d||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of u)this.g.setRequestHeader(A,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){jo(this,A)}};function jo(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,$o(s),or(s)}function $o(s){s.A||(s.A=!0,ye(s,"complete"),ye(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,ye(this,"complete"),ye(this,"abort"),or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),or(this,!0)),J.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?qo(this):this.Xa())},n.Xa=function(){qo(this)};function qo(s){if(s.h&&typeof o<"u"){if(s.v&&tt(s)==4)setTimeout(s.Ca.bind(s),0);else if(ye(s,"readystatechange"),tt(s)==4){s.h=!1;try{const A=s.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var d;if(d=A===0){let P=String(s.D).match(Do)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),d=!Eh.test(P?P.toLowerCase():"")}u=d}if(u)ye(s,"complete"),ye(s,"success");else{s.o=6;try{var w=tt(s)>2?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.ca()+"]",$o(s)}}finally{or(s)}}}}function or(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,c||ye(s,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return tt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Zl(c)}};function Ho(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ih(s){const c={};s=(s.g&&tt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(g(s[d]))continue;var u=sh(s[d]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=c[w]||[];c[w]=A,A.push(u)}Wl(c,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function In(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function zo(s){this.za=0,this.i=[],this.j=new hn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=In("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=In("baseRetryDelayMs",5e3,s),this.Za=In("retryDelaySeedMs",1e4,s),this.Ta=In("forwardChannelMaxRetries",2,s),this.va=In("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new bo(s&&s.concurrentRequestLimit),this.Ba=new yh,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zo.prototype,n.ka=8,n.I=1,n.connect=function(s,c,u,d){Ee(0),this.W=s,this.H=c||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.J=ea(this,null,this.W),cr(this)};function ki(s){if(Go(s),s.I==3){var c=s.V++,u=Me(s.J);if(G(u,"SID",s.M),G(u,"RID",c),G(u,"TYPE","terminate"),wn(s,u),c=new Ye(s,s.j,c),c.M=2,c.A=ir(Me(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=ta(c.j,null),c.g.ea(c.A)),c.F=Date.now(),rr(c)}Zo(s)}function ar(s){s.g&&(Di(s),s.g.cancel(),s.g=null)}function Go(s){ar(s),s.v&&(a.clearTimeout(s.v),s.v=null),ur(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function cr(s){if(!Po(s.h)&&!s.m){s.m=!0;var c=s.Ea;Se||p(),le||(Se(),le=!0),E.add(c,s),s.D=0}}function wh(s,c){return Co(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=ln(f(s.Ea,s,c),Yo(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const w=new Ye(this,this.j,s);let A=this.o;if(this.U&&(A?(A=ro(A),so(A,this.U)):A=this.U),this.u!==null||this.R||(w.J=A,A=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(c+=d,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ko(this,w,c),u=Me(this.J),G(u,"RID",s),G(u,"CVER",22),this.G&&G(u,"X-HTTP-Session-Id",this.G),wn(this,u),A&&(this.R?c="headers="+dn(Bo(A))+"&"+c:this.u&&Ci(u,this.u,A)),Ri(this.h,w),this.Ra&&G(u,"TYPE","init"),this.S?(G(u,"$req",c),G(u,"SID","null"),w.U=!0,wi(w,u,null)):wi(w,u,c),this.I=2}}else this.I==3&&(s?Wo(this,s):this.i.length==0||Po(this.h)||Wo(this))};function Wo(s,c){var u;c?u=c.l:u=s.V++;const d=Me(s.J);G(d,"SID",s.M),G(d,"RID",u),G(d,"AID",s.K),wn(s,d),s.u&&s.o&&Ci(d,s.u,s.o),u=new Ye(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),c&&(s.i=c.G.concat(s.i)),c=Ko(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Ri(s.h,u),wi(u,d,c)}function wn(s,c){s.H&&Yn(s.H,function(u,d){G(c,d,u)}),s.l&&Yn({},function(u,d){G(c,d,u)})}function Ko(s,c,u){u=Math.min(s.i.length,u);const d=s.l?f(s.l.Ka,s.l,s):null;e:{var w=s.i;let L=-1;for(;;){const te=["count="+u];L==-1?u>0?(L=w[0].g,te.push("ofs="+L)):L=0:te.push("ofs="+L);let H=!0;for(let ne=0;ne<u;ne++){var A=w[ne].g;const Le=w[ne].map;if(A-=L,A<0)L=Math.max(0,w[ne].g-100),H=!1;else try{A="req"+A+"_"||"";try{var P=Le instanceof Map?Le:Object.entries(Le);for(const[Et,nt]of P){let rt=nt;l(nt)&&(rt=_i(nt)),te.push(A+Et+"="+encodeURIComponent(rt))}}catch(Et){throw te.push(A+"type="+encodeURIComponent("_badmap")),Et}}catch{d&&d(Le)}}if(H){P=te.join("&");break e}}P=void 0}return s=s.i.splice(0,u),c.G=s,P}function Qo(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;Se||p(),le||(Se(),le=!0),E.add(c,s),s.A=0}}function Ni(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=ln(f(s.Da,s),Yo(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Jo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=ln(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ee(10),ar(this),Jo(this))};function Di(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function Jo(s){s.g=new Ye(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=Me(s.na);G(c,"RID","rpc"),G(c,"SID",s.M),G(c,"AID",s.K),G(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&G(c,"TO",s.ia),G(c,"TYPE","xmlhttp"),wn(s,c),s.u&&s.o&&Ci(c,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=ir(Me(c)),u.u=null,u.R=!0,Ao(u,s)}n.Va=function(){this.C!=null&&(this.C=null,ar(this),Ni(this),Ee(19))};function ur(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function Xo(s,c){var u=null;if(s.g==c){ur(s),Di(s),s.g=null;var d=2}else if(Si(s.h,c))u=c.G,ko(s.h,c),d=1;else return;if(s.I!=0){if(c.o)if(d==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var w=s.D;d=tr(),ye(d,new Eo(d,u)),cr(s)}else Qo(s);else if(w=c.m,w==3||w==0&&c.X>0||!(d==1&&wh(s,c)||d==2&&Ni(s)))switch(u&&u.length>0&&(c=s.h,c.i=c.i.concat(u)),w){case 1:yt(s,5);break;case 4:yt(s,10);break;case 3:yt(s,6);break;default:yt(s,2)}}}function Yo(s,c){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*c}function yt(s,c){if(s.j.info("Error code "+c),c==2){var u=f(s.bb,s),d=s.Ua;const w=!d;d=new Ze(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||pn(d,"https"),ir(d),w?mh(d.toString(),u):_h(d.toString(),u)}else Ee(2);s.I=0,s.l&&s.l.pa(c),Zo(s),Go(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function Zo(s){if(s.I=0,s.ja=[],s.l){const c=No(s.h);(c.length!=0||s.i.length!=0)&&(N(s.ja,c),N(s.ja,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.oa()}}function ea(s,c,u){var d=u instanceof Ze?Me(u):new Ze(u);if(d.g!="")c&&(d.g=c+"."+d.g),gn(d,d.u);else{var w=a.location;d=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const A=new Ze(null);d&&pn(A,d),c&&(A.g=c),w&&gn(A,w),u&&(A.h=u),d=A}return u=s.G,c=s.wa,u&&c&&G(d,u,c),G(d,"VER",s.ka),wn(s,d),d}function ta(s,c,u){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new J(new Pi({ab:u})):new J(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function na(){}n=na.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function lr(){}lr.prototype.g=function(s,c){return new Ae(s,c)};function Ae(s,c){he.call(this),this.g=new zo(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!g(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Bt(this)}I(Ae,he),Ae.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ae.prototype.close=function(){ki(this.g)},Ae.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=_i(s),s=u);c.i.push(new ch(c.Ya++,s)),c.I==3&&cr(c)},Ae.prototype.N=function(){this.g.l=null,delete this.j,ki(this.g),delete this.g,Ae.Z.N.call(this)};function ra(s){yi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}I(ra,yi);function ia(){Ei.call(this),this.status=1}I(ia,Ei);function Bt(s){this.g=s}I(Bt,na),Bt.prototype.ra=function(){ye(this.g,"a")},Bt.prototype.qa=function(s){ye(this.g,new ra(s))},Bt.prototype.pa=function(s){ye(this.g,new ia)},Bt.prototype.oa=function(){ye(this.g,"b")},lr.prototype.createWebChannel=lr.prototype.g,Ae.prototype.send=Ae.prototype.o,Ae.prototype.open=Ae.prototype.m,Ae.prototype.close=Ae.prototype.close,yu=function(){return new lr},_u=function(){return tr()},mu=gt,es={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},nr.NO_ERROR=0,nr.TIMEOUT=8,nr.HTTP_ERROR=6,vr=nr,To.COMPLETE="complete",gu=To,go.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",he.prototype.listen=he.prototype.J,An=go,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,pu=J}).apply(typeof fr<"u"?fr:typeof self<"u"?self:typeof window<"u"?window:{});const Na="@firebase/firestore",Da="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new ps("@firebase/firestore");function jt(){return Ct.logLevel}function k(n,...e){if(Ct.logLevel<=F.DEBUG){const t=e.map(bs);Ct.debug(`Firestore (${sn}): ${n}`,...t)}}function kt(n,...e){if(Ct.logLevel<=F.ERROR){const t=e.map(bs);Ct.error(`Firestore (${sn}): ${n}`,...t)}}function ei(n,...e){if(Ct.logLevel<=F.WARN){const t=e.map(bs);Ct.warn(`Firestore (${sn}): ${n}`,...t)}}function bs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Eu(n,r,t)}function Eu(n,e,t){let r=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw kt(r),new Error(r)}function X(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Eu(e,i,r)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends qe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(fe.UNAUTHENTICATED)))}shutdown(){}}class Kp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qp{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new St;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new St,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new St)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Tu(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new fe(e)}}class Jp{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Xp{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Jp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Va{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Va(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Va(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Zp(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function ts(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return Fi(i)===Fi(o)?j(i,o):Fi(i)?1:-1}return j(n.length,e.length)}const eg=55296,tg=57343;function Fi(n){const e=n.charCodeAt(0);return e>=eg&&e<=tg}function Qt(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="__name__";class xe{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xe?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=xe.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return j(e.length,t.length)}static compareSegments(e,t){const r=xe.isNumericId(e),i=xe.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?xe.extractNumericId(e).compare(xe.extractNumericId(t)):ts(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rs.fromString(e.substring(4,e.length-2))}}class Y extends xe{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Y(t)}static emptyPath(){return new Y([])}}const ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends xe{construct(e,t,r){return new ae(e,t,r)}static isValidIdentifier(e){return ng.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oa}static keyField(){return new ae([Oa])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(Y.fromString(e))}static fromName(e){return new x(Y.fromString(e).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new Y(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ig(n,e,t,r){if(e===!0&&r===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ma(n){if(!x.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Iu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Cs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function ns(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cs(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function zn(n,e){if(!Iu(n))throw new V(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new V(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=-62135596800,xa=1e6;class K{static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*xa);return new K(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<La)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xa}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:K._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zn(e,K._jsonSchema))return new K(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-La;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}K._jsonSchemaVersion="firestore/timestamp/1.0",K._jsonSchema={type:ee("string",K._jsonSchemaVersion),seconds:ee("number"),nanoseconds:ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new K(0,0))}static max(){return new W(new K(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=-1;function sg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new K(t+1,0):new K(t,r));return new lt(i,x.empty(),e)}function og(n){return new lt(n.readTime,n.key,On)}class lt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new lt(W.min(),x.empty(),On)}static max(){return new lt(W.max(),x.empty(),On)}}function ag(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ug{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==cg)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,r)=>{t(e)}))}static reject(e){return new R(((t,r)=>{r(e)}))}static waitFor(e){return new R(((t,r)=>{let i=0,o=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&t()}),(h=>r(h)))})),a=!0,o===i&&t()}))}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next((i=>i?R.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,o)=>{r.push(t.call(this,i,o))})),this.waitFor(r)}static mapArray(e,t){return new R(((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next((y=>{a[f]=y,++l,l===o&&r(a)}),(y=>i(y)))}}))}static doWhile(e,t){return new R(((r,i)=>{const o=()=>{e()===!0?t().next((()=>{o()}),i):r()};o()}))}}function lg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ns.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=-1;function Vs(n){return n==null}function Lr(n){return n===0&&1/n==-1/0}function hg(n){return typeof n=="number"&&Number.isInteger(n)&&!Lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="";function dg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ua(e)),e=fg(n.get(t),e);return Ua(e)}function fg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case wu:t+="";break;default:t+=o}}return t}function Ua(n){return n+wu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function on(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||se.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,se.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pr(this.root,e,this.comparator,!0)}}class pr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class se{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??se.RED,this.left=i??se.EMPTY,this.right=o??se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new se(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return se.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}se.EMPTY=null,se.RED=!0,se.BLACK=!1;se.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ba(this.data.getIterator())}getIteratorFrom(e){return new Ba(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Ba{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new ce(ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qt(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pg("Invalid base64 string: "+o):o}})(e);return new je(t)}static fromUint8Array(e){const t=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(e);return new je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const gg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=gg.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?je.fromBase64String(n):je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="server_timestamp",Su="__type__",Ru="__previous_value__",bu="__local_write_time__";function Os(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Su])==null?void 0:r.stringValue)===Au}function Ms(n){const e=n.mapValue.fields[Ru];return Os(e)?Ms(e):e}function xr(n){const e=Nt(n.mapValue.fields[bu].timestampValue);return new K(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,r,i,o,a,l,h,f,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=y}}const Ur="(default)";class Fr{constructor(e,t){this.projectId=e,this.database=t||Ur}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database===Ur}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="__type__",_g="__max__",gr={mapValue:{}},Cu="__vector__",rs="value";function Dt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Os(n)?4:Eg(n)?9007199254740991:yg(n)?10:11:U(28295,{value:n})}function $e(n,e){if(n===e)return!0;const t=Dt(n);if(t!==Dt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xr(n).isEqual(xr(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Nt(i.timestampValue),l=Nt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return Jt(i.bytesValue).isEqual(Jt(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return oe(i.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return oe(i.integerValue)===oe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=oe(i.doubleValue),l=oe(o.doubleValue);return a===l?Lr(a)===Lr(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Qt(n.arrayValue.values||[],e.arrayValue.values||[],$e);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Fa(a)!==Fa(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!$e(a[h],l[h])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function Mn(n,e){return(n.values||[]).find((t=>$e(t,e)))!==void 0}function Xt(n,e){if(n===e)return 0;const t=Dt(n),r=Dt(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const l=oe(o.integerValue||o.doubleValue),h=oe(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return ja(n.timestampValue,e.timestampValue);case 4:return ja(xr(n),xr(e));case 5:return ts(n.stringValue,e.stringValue);case 6:return(function(o,a){const l=Jt(o),h=Jt(a);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const y=j(l[f],h[f]);if(y!==0)return y}return j(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const l=j(oe(o.latitude),oe(a.latitude));return l!==0?l:j(oe(o.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return $a(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var S,C,N,M;const l=o.fields||{},h=a.fields||{},f=(S=l[rs])==null?void 0:S.arrayValue,y=(C=h[rs])==null?void 0:C.arrayValue,I=j(((N=f==null?void 0:f.values)==null?void 0:N.length)||0,((M=y==null?void 0:y.values)==null?void 0:M.length)||0);return I!==0?I:$a(f,y)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===gr.mapValue&&a===gr.mapValue)return 0;if(o===gr.mapValue)return 1;if(a===gr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},y=Object.keys(f);h.sort(),y.sort();for(let I=0;I<h.length&&I<y.length;++I){const S=ts(h[I],y[I]);if(S!==0)return S;const C=Xt(l[h[I]],f[y[I]]);if(C!==0)return C}return j(h.length,y.length)})(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function ja(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=Nt(n),r=Nt(e),i=j(t.seconds,r.seconds);return i!==0?i:j(t.nanos,r.nanos)}function $a(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Xt(t[i],r[i]);if(o)return o}return j(t.length,r.length)}function Yt(n){return is(n)}function is(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Nt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Jt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return x.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=is(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${is(t.fields[a])}`;return i+"}"})(n.mapValue):U(61005,{value:n})}function Ar(n){switch(Dt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ms(n);return e?16+Ar(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Ar(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return on(r.fields,((o,a)=>{i+=o.length+Ar(a)})),i})(n.mapValue);default:throw U(13486,{value:n})}}function ss(n){return!!n&&"integerValue"in n}function Ls(n){return!!n&&"arrayValue"in n}function Sr(n){return!!n&&"mapValue"in n}function yg(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Pu])==null?void 0:r.stringValue)===Cu}function bn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return on(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=bn(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bn(n.arrayValue.values[t]);return e}return{...n}}function Eg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_g}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Sr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bn(t)}setAll(e){let t=ae.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=bn(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Sr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $e(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Sr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){on(t,((i,o)=>e[i]=o));for(const i of r)delete e[i]}clone(){return new Pe(bn(this.value))}}function ku(n){const e=[];return on(n.fields,((t,r)=>{const i=new ae([t]);if(Sr(r)){const o=ku(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)})),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,W.min(),W.min(),W.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,i){return new Re(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new Re(e,2,t,W.min(),W.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,W.min(),W.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.position=e,this.inclusive=t}}function qa(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=Xt(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ha(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$e(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Tg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{}class ie extends Nu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wg(e,t,r):t==="array-contains"?new Sg(e,r):t==="in"?new Rg(e,r):t==="not-in"?new bg(e,r):t==="array-contains-any"?new Pg(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new vg(e,r):new Ag(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Xt(t,this.value)):t!==null&&Dt(this.value)===Dt(t)&&this.matchesComparison(Xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Nu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ht(e,t)}matches(e){return Du(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Du(n){return n.op==="and"}function Vu(n){return Ig(n)&&Du(n)}function Ig(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function os(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+Yt(n.value);if(Vu(n))return n.filters.map((e=>os(e))).join(",");{const e=n.filters.map((t=>os(t))).join(",");return`${n.op}(${e})`}}function Ou(n,e){return n instanceof ie?(function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&$e(r.value,i.value)})(n,e):n instanceof ht?(function(r,i){return i instanceof ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,l)=>o&&Ou(a,i.filters[l])),!0):!1})(n,e):void U(19439)}function Mu(n){return n instanceof ie?(function(t){return`${t.field.canonicalString()} ${t.op} ${Yt(t.value)}`})(n):n instanceof ht?(function(t){return t.op.toString()+" {"+t.getFilters().map(Mu).join(" ,")+"}"})(n):"Filter"}class wg extends ie{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class vg extends ie{constructor(e,t){super(e,"in",t),this.keys=Lu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ag extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Lu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Lu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>x.fromName(r.referenceValue)))}class Sg extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ls(t)&&Mn(t.arrayValue,this.value)}}class Rg extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mn(this.value.arrayValue,t)}}class bg extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Mn(this.value.arrayValue,t)}}class Pg extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ls(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Mn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function za(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Cg(n,e,t,r,i,o,a)}function xs(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>os(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Yt(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Yt(r))).join(",")),e.Te=t}return e.Te}function Us(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Tg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ou(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ha(n.startAt,e.startAt)&&Ha(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kg(n,e,t,r,i,o,a,l){return new ti(n,e,t,r,i,o,a,l)}function Ng(n){return new ti(n)}function Ga(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dg(n){return n.collectionGroup!==null}function Pn(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ce(ae.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new jr(o,r))})),t.has(ae.keyField().canonicalString())||e.Ie.push(new jr(ae.keyField(),r))}return e.Ie}function Rt(n){const e=z(n);return e.Ee||(e.Ee=Vg(e,Pn(n))),e.Ee}function Vg(n,e){if(n.limitType==="F")return za(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new jr(i.field,o)}));const t=n.endAt?new Br(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Br(n.startAt.position,n.startAt.inclusive):null;return za(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function as(n,e,t){return new ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xu(n,e){return Us(Rt(n),Rt(e))&&n.limitType===e.limitType}function Uu(n){return`${xs(Rt(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Mu(i))).join(", ")}]`),Vs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Yt(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Yt(i))).join(",")),`Target(${r})`})(Rt(n))}; limitType=${n.limitType})`}function Fs(n,e){return e.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,i){for(const o of Pn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,h){const f=qa(a,l,h);return a.inclusive?f<=0:f<0})(r.startAt,Pn(r),i)||r.endAt&&!(function(a,l,h){const f=qa(a,l,h);return a.inclusive?f>=0:f>0})(r.endAt,Pn(r),i))})(n,e)}function Og(n){return(e,t)=>{let r=!1;for(const i of Pn(n)){const o=Mg(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Mg(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):(function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Xt(h,f):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){on(this.inner,((t,r)=>{for(const[i,o]of r)e(i,o)}))}isEmpty(){return vu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new ve(x.comparator);function $r(){return Lg}const Fu=new ve(x.comparator);function mr(...n){let e=Fu;for(const t of n)e=e.insert(t.key,t);return e}function Bu(n){let e=Fu;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function wt(){return Cn()}function ju(){return Cn()}function Cn(){return new Lt((n=>n.toString()),((n,e)=>n.isEqual(e)))}const xg=new ve(x.comparator),Ug=new ce(x.comparator);function pe(...n){let e=Ug;for(const t of n)e=e.add(t);return e}const Fg=new ce(j);function Bg(){return Fg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(e)?"-0":e}}function $u(n){return{integerValue:""+n}}function jg(n,e){return hg(e)?$u(e):Bs(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this._=void 0}}function $g(n,e,t){return n instanceof qr?(function(i,o){const a={fields:{[Su]:{stringValue:Au},[bu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Os(o)&&(o=Ms(o)),o&&(a.fields[Ru]=o),{mapValue:a}})(t,e):n instanceof Ln?Hu(n,e):n instanceof xn?zu(n,e):(function(i,o){const a=qu(i,o),l=Wa(a)+Wa(i.Ae);return ss(a)&&ss(i.Ae)?$u(l):Bs(i.serializer,l)})(n,e)}function qg(n,e,t){return n instanceof Ln?Hu(n,e):n instanceof xn?zu(n,e):t}function qu(n,e){return n instanceof Hr?(function(r){return ss(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class qr extends ni{}class Ln extends ni{constructor(e){super(),this.elements=e}}function Hu(n,e){const t=Gu(e);for(const r of n.elements)t.some((i=>$e(i,r)))||t.push(r);return{arrayValue:{values:t}}}class xn extends ni{constructor(e){super(),this.elements=e}}function zu(n,e){let t=Gu(e);for(const r of n.elements)t=t.filter((i=>!$e(i,r)));return{arrayValue:{values:t}}}class Hr extends ni{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wa(n){return oe(n.integerValue||n.doubleValue)}function Gu(n){return Ls(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Hg(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Ln&&i instanceof Ln||r instanceof xn&&i instanceof xn?Qt(r.elements,i.elements,$e):r instanceof Hr&&i instanceof Hr?$e(r.Ae,i.Ae):r instanceof qr&&i instanceof qr})(n.transform,e.transform)}class zg{constructor(e,t){this.version=e,this.transformResults=t}}class We{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ri{}function Wu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qu(n.key,We.none()):new Wn(n.key,n.data,We.none());{const t=n.data,r=Pe.empty();let i=new ce(ae.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new xt(n.key,r,new Ne(i.toArray()),We.none())}}function Gg(n,e,t){n instanceof Wn?(function(i,o,a){const l=i.value.clone(),h=Qa(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof xt?(function(i,o,a){if(!Rr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Qa(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ku(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function kn(n,e,t,r){return n instanceof Wn?(function(o,a,l,h){if(!Rr(o.precondition,a))return l;const f=o.value.clone(),y=Ja(o.fieldTransforms,h,a);return f.setAll(y),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,r):n instanceof xt?(function(o,a,l,h){if(!Rr(o.precondition,a))return l;const f=Ja(o.fieldTransforms,h,a),y=a.data;return y.setAll(Ku(o)),y.setAll(f),a.convertToFoundDocument(a.version,y).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,e,t,r):(function(o,a,l){return Rr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function Wg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=qu(r.transform,i||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,o))}return t||null}function Ka(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qt(r,i,((o,a)=>Hg(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wn extends ri{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xt extends ri{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ku(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Qa(n,e,t){const r=new Map;X(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,qg(a,l,t[i]))}return r}function Ja(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,$g(o,a,e))}return r}class Qu extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kg extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Gg(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=kn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=kn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ju();return this.mutations.forEach((i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=Wu(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(W.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pe())}isEqual(e){return this.batchId===e.batchId&&Qt(this.mutations,e.mutations,((t,r)=>Ka(t,r)))&&Qt(this.baseMutations,e.baseMutations,((t,r)=>Ka(t,r)))}}class js{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return xg})();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new js(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,B;function Xg(n){switch(n){case b.OK:return U(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function Yg(n){if(n===void 0)return kt("GRPC error has no .code"),b.UNKNOWN;switch(n){case Z.OK:return b.OK;case Z.CANCELLED:return b.CANCELLED;case Z.UNKNOWN:return b.UNKNOWN;case Z.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Z.INTERNAL:return b.INTERNAL;case Z.UNAVAILABLE:return b.UNAVAILABLE;case Z.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Z.NOT_FOUND:return b.NOT_FOUND;case Z.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Z.ABORTED:return b.ABORTED;case Z.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Z.DATA_LOSS:return b.DATA_LOSS;default:return U(39323,{code:n})}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Rs([4294967295,4294967295],0);class Zg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function em(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tm(n,e){return cs(n,e.toTimestamp())}function Gt(n){return X(!!n,49232),W.fromTimestamp((function(t){const r=Nt(t);return new K(r.seconds,r.nanos)})(n))}function Ju(n,e){return us(n,e).canonicalString()}function us(n,e){const t=(function(i){return new Y(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function nm(n){const e=Y.fromString(n);return X(lm(e),10190,{key:e.toString()}),e}function ls(n,e){return Ju(n.databaseId,e.path)}function rm(n){const e=nm(n);return e.length===4?Y.emptyPath():sm(e)}function im(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sm(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xa(n,e,t){return{name:ls(n,e),fields:t.value.mapValue.fields}}function om(n,e){let t;if(e instanceof Wn)t={update:Xa(n,e.key,e.value)};else if(e instanceof Qu)t={delete:ls(n,e.key)};else if(e instanceof xt)t={update:Xa(n,e.key,e.data),updateMask:um(e.fieldMask)};else{if(!(e instanceof Kg))return U(16599,{Vt:e.type});t={verify:ls(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof qr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ln)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw U(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:tm(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U(27497)})(n,e.precondition)),t}function am(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(i,o){let a=i.updateTime?Gt(i.updateTime):Gt(o);return a.isEqual(W.min())&&(a=Gt(o)),new zg(a,i.transformResults||[])})(t,e)))):[]}function cm(n){let e=rm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1,65062);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=(function(I){const S=Xu(I);return S instanceof ht&&Vu(S)?S.getFilters():[S]})(t.where));let a=[];t.orderBy&&(a=(function(I){return I.map((S=>(function(N){return new jr($t(N.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(S)))})(t.orderBy));let l=null;t.limit&&(l=(function(I){let S;return S=typeof I=="object"?I.value:I,Vs(S)?null:S})(t.limit));let h=null;t.startAt&&(h=(function(I){const S=!!I.before,C=I.values||[];return new Br(C,S)})(t.startAt));let f=null;return t.endAt&&(f=(function(I){const S=!I.before,C=I.values||[];return new Br(C,S)})(t.endAt)),kg(e,i,a,o,l,"F",h,f)}function Xu(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=$t(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$t(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$t(t.unaryFilter.field);return ie.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$t(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ie.create($t(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ht.create(t.compositeFilter.filters.map((r=>Xu(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function $t(n){return ae.fromServerFormat(n.fieldPath)}function um(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function lm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.yt=e}}function dm(n){const e=cm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?as(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.Cn=new pm}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(lt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(lt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class pm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ce(Y.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yu=41943040;class we{static withCacheSize(e){return new we(e,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.DEFAULT_COLLECTION_PERCENTILE=10,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,we.DEFAULT=new we(Yu,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),we.DISABLED=new we(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Zt(0)}static cr(){return new Zt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="LruGarbageCollector",gm=1048576;function ec([n,e],[t,r]){const i=j(n,t);return i===0?j(e,r):i}class mm{constructor(e){this.Ir=e,this.buffer=new ce(ec),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ec(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _m{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){k(Za,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gn(t)?k(Za,"Ignoring IndexedDB error during garbage collection: ",t):await ks(t)}await this.Vr(3e5)}))}}class ym{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Ns.ce);const r=new mm(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ya)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ya):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,o,a,l,h,f;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(e,i)))).next((I=>(r=I,l=Date.now(),this.removeTargets(e,r,t)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(e,r)))).next((I=>(f=Date.now(),jt()<=F.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-y}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-y}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I}))))}}function Em(n,e){return new ym(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.changes=new Lt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&kn(r.mutation,i,Ne.empty(),K.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,pe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=pe()){const i=wt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((o=>{let a=mr();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=wt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,pe())))}populateOverlays(e,t,r){const i=[];return r.forEach((o=>{t.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(e,i).next((o=>{o.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let o=$r();const a=Cn(),l=(function(){return Cn()})();return t.forEach(((h,f)=>{const y=r.get(f.key);i.has(f.key)&&(y===void 0||y.mutation instanceof xt)?o=o.insert(f.key,f):y!==void 0?(a.set(f.key,y.mutation.getFieldMask()),kn(y.mutation,f,y.mutation.getFieldMask(),K.now())):a.set(f.key,Ne.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((f,y)=>a.set(f,y))),t.forEach(((f,y)=>l.set(f,new Im(y,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=Cn();let i=new ve(((a,l)=>a-l)),o=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let y=r.get(h)||Ne.empty();y=l.applyToLocalView(f,y),r.set(h,y);const I=(i.get(l.batchId)||pe()).add(h);i=i.insert(l.batchId,I)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,y=h.value,I=ju();y.forEach((S=>{if(!o.has(S)){const C=Wu(t.get(S),r.get(S));C!==null&&I.set(S,C),o=o.add(S)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):R.resolve(wt());let l=On,h=o;return a.next((f=>R.forEach(f,((y,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(y)?R.resolve():this.remoteDocumentCache.getEntry(e,y).next((S=>{h=h.insert(y,S)}))))).next((()=>this.populateOverlays(e,f,o))).next((()=>this.computeViews(e,h,f,pe()))).next((y=>({batchId:l,changes:Bu(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((r=>{let i=mr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=mr();return this.indexManager.getCollectionParents(e,o).next((l=>R.forEach(l,(h=>{const f=(function(I,S){return new ti(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next((y=>{y.forEach(((I,S)=>{a=a.insert(I,S)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i)))).next((a=>{o.forEach(((h,f)=>{const y=f.getKey();a.get(y)===null&&(a=a.insert(y,Re.newInvalidDocument(y)))}));let l=mr();return a.forEach(((h,f)=>{const y=o.get(h);y!==void 0&&kn(y.mutation,f,Ne.empty(),K.now()),Fs(t,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:dm(i.bundledQuery),readTime:Gt(i.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.overlays=new ve(x.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wt();return R.forEach(t,(i=>this.getOverlay(e,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,o)=>{this.St(e,t,o)})),R.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const i=wt(),o=t.length+1,a=new x(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ve(((f,y)=>f-y));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let y=o.get(f.largestBatchId);y===null&&(y=wt(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const l=wt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,y)=>l.set(f,y))),!(l.size()>=i)););return R.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Jg(t,r));let o=this.qr.get(t);o===void 0&&(o=pe(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.Qr=new ce(re.$r),this.Ur=new ce(re.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new re(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new re(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new x(new Y([])),r=new re(t,e),i=new re(t,e+1),o=[];return this.Ur.forEachInRange([r,i],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new x(new Y([])),r=new re(t,e),i=new re(t,e+1);let o=pe();return this.Ur.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new re(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class re{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return x.comparator(e.key,t.key)||j(e.Yr,t.Yr)}static Kr(e,t){return j(e.Yr,t.Yr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ce(re.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qg(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new re(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Ds:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new re(t,0),i=new re(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(a=>{const l=this.Xr(a.Yr);o.push(l)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(j);return t.forEach((i=>{const o=new re(i,0),a=new re(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new re(new x(o),0);let l=new ce(j);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Yr)),!0)}),a),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){X(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(t.mutations,(i=>{const o=new re(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new re(t,0),i=this.Zr.firstAfterOrEqual(r);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.ri=e,this.docs=(function(){return new ve(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=$r();return t.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Re.newInvalidDocument(i))})),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=$r();const a=t.path,l=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:y}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||ag(og(y),r)<=0||(i.has(y.key)||Fs(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,r,i){U(9500)}ii(e,t){return R.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Pm(this)}getSize(e){return R.resolve(this.size)}}class Pm extends Tm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.persistence=e,this.si=new Lt((t=>xs(t)),Us),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new $s,this.targetCount=0,this.ai=Zt.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Zt(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),R.waitFor(o).next((()=>i))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach((a=>{o.push(i.markPotentiallyOrphaned(e,a))})),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ns(0),this.li=!1,this.li=!0,this.hi=new Sm,this.referenceDelegate=e(this),this.Pi=new Cm(this),this.indexManager=new fm,this.remoteDocumentCache=(function(i){return new bm(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new hm(t),this.Ii=new vm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Am,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Rm(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);const i=new km(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(e,t){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class km extends ug{constructor(e){super(),this.currentSequenceNumber=e}}class qs{constructor(e){this.persistence=e,this.Ri=new $s,this.Vi=null}static mi(e){return new qs(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const i=x.fromPath(r);return this.gi(e,i).next((o=>{o||t.removeEntry(i,W.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class zr{constructor(e,t){this.persistence=e,this.pi=new Lt((r=>dg(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Em(this,t)}static mi(e,t){return new zr(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((r,i)=>this.br(e,r,i).next((o=>o?R.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,o.removeEntry(a,W.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ar(e.data.value)),t}br(e,t,r){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=pe(),i=pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Hs(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return $h()?8:lg(_e())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ys(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(e,t,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Nm;return this.Ss(e,t,a).next((l=>{if(o.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>o.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(jt()<=F.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(jt()<=F.DEBUG&&k("QueryEngine","Query:",vn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(jt()<=F.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rt(t))):R.resolve())}ys(e,t){if(Ga(t))return R.resolve(null);let r=Rt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=as(t,null,"F"),r=Rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=pe(...o);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((h=>{const f=this.Ds(t,l);return this.Cs(t,f,a,h.readTime)?this.ys(e,as(t,null,"F")):this.vs(e,f,t,h)}))))})))))}ws(e,t,r,i){return Ga(t)||i.isEqual(W.min())?R.resolve(null):this.ps.getDocuments(e,r).next((o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,i)?R.resolve(null):(jt()<=F.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vn(t)),this.vs(e,a,t,sg(i,On)).next((l=>l)))}))}Ds(e,t){let r=new ce(Og(e));return t.forEach(((i,o)=>{Fs(e,o)&&(r=r.add(o))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,r){return jt()<=F.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",vn(t)),this.ps.getDocumentsMatchingQuery(e,t,lt.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="LocalStore";class Om{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new ve(j),this.xs=new Lt((o=>xs(o)),Us),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wm(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Mm(n,e,t,r){return new Om(n,e,t,r)}async function el(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=pe();for(const f of i){a.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}for(const f of o){l.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}return t.localDocuments.getDocuments(r,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Lm(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,y){const I=f.batch,S=I.keys();let C=R.resolve();return S.forEach((N=>{C=C.next((()=>y.getEntry(h,N))).next((M=>{const D=f.docVersions.get(N);X(D!==null,48541),M.version.compareTo(D)<0&&(I.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),y.addEntry(M)))}))})),C.next((()=>l.mutationQueue.removeMutationBatch(h,I)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=pe();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function xm(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Um(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ds),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}class tc{constructor(){this.activeTargetIds=Bg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fm{constructor(){this.Mo=new tc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new tc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="ConnectivityMonitor";class rc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){k(nc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){k(nc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r=null;function hs(){return _r===null?_r=(function(){return 268435456+Math.round(2147483648*Math.random())})():_r++,"0x"+_r.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="RestConnection",jm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $m{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Ur?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,o){const a=hs(),l=this.zo(e,t.toUriEncodedString());k(Bi,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:f}=new URL(l),y=en(f);return this.Jo(e,l,h,r,y).then((I=>(k(Bi,`Received RPC '${e}' ${a}: `,I),I)),(I=>{throw ei(Bi,`RPC '${e}' ${a} failed with error: `,I,"url: ",l,"request:",r),I}))}Ho(e,t,r,i,o,a){return this.Go(e,t,r,i,o)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+sn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,o)=>e[o]=i)),r&&r.headers.forEach(((i,o)=>e[o]=i))}zo(e,t){const r=jm[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="WebChannelConnection";class Hm extends $m{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=hs();return new Promise(((l,h)=>{const f=new pu;f.setWithCredentials(!0),f.listenOnce(gu.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case vr.NO_ERROR:const I=f.getResponseJson();k(de,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),l(I);break;case vr.TIMEOUT:k(de,`RPC '${e}' ${a} timed out`),h(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case vr.HTTP_ERROR:const S=f.getStatus();if(k(de,`RPC '${e}' ${a} failed with status:`,S,"response text:",f.getResponseText()),S>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const N=C==null?void 0:C.error;if(N&&N.status&&N.message){const M=(function(q){const $=q.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf($)>=0?$:b.UNKNOWN})(N.status);h(new V(M,N.message))}else h(new V(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new V(b.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{k(de,`RPC '${e}' ${a} completed.`)}}));const y=JSON.stringify(i);k(de,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",y,r,15)}))}T_(e,t,r){const i=hs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yu(),l=_u(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const y=o.join("");k(de,`Creating RPC '${e}' stream ${i}: ${y}`,h);const I=a.createWebChannel(y,h);this.I_(I);let S=!1,C=!1;const N=new qm({Yo:D=>{C?k(de,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(S||(k(de,`Opening RPC '${e}' stream ${i} transport.`),I.open(),S=!0),k(de,`RPC '${e}' stream ${i} sending:`,D),I.send(D))},Zo:()=>I.close()}),M=(D,q,$)=>{D.listen(q,(Q=>{try{$(Q)}catch(ue){setTimeout((()=>{throw ue}),0)}}))};return M(I,An.EventType.OPEN,(()=>{C||(k(de,`RPC '${e}' stream ${i} transport opened.`),N.o_())})),M(I,An.EventType.CLOSE,(()=>{C||(C=!0,k(de,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(I))})),M(I,An.EventType.ERROR,(D=>{C||(C=!0,ei(de,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),N.a_(new V(b.UNAVAILABLE,"The operation could not be completed")))})),M(I,An.EventType.MESSAGE,(D=>{var q;if(!C){const $=D.data[0];X(!!$,16349);const Q=$,ue=(Q==null?void 0:Q.error)||((q=Q[0])==null?void 0:q.error);if(ue){k(de,`RPC '${e}' stream ${i} received error:`,ue);const Se=ue.status;let le=(function(m){const T=Z[m];if(T!==void 0)return Yg(T)})(Se),E=ue.message;le===void 0&&(le=b.INTERNAL,E="Unknown error status: "+Se+" with message "+ue.message),C=!0,N.a_(new V(le,E)),I.close()}else k(de,`RPC '${e}' stream ${i} received:`,$),N.u_($)}})),M(l,mu.STAT_EVENT,(D=>{D.stat===es.PROXY?k(de,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===es.NOPROXY&&k(de,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ji(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){return new Zg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="PersistentStream";class zm{constructor(e,t,r,i,o,a,l,h){this.Mi=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new V(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return k(ic,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(k(ic,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gm extends zm{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=am(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=im(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>om(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{}class Km extends Wm{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(e,us(t,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(b.UNKNOWN,o.toString())}))}Ho(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,us(t,r),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(b.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Qm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kt(t),this.aa=!1):k("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="RemoteStore";class Jm{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Jn(this)&&(k(Kn,"Restarting streams for network reachability change."),await(async function(h){const f=z(h);f.Ea.add(4),await Qn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await si(f)})(this))}))})),this.Ra=new Qm(r,i)}}async function si(n){if(Jn(n))for(const e of n.da)await e(!0)}async function Qn(n){for(const e of n.da)await e(!1)}function Jn(n){return z(n).Ea.size===0}async function nl(n,e,t){if(!Gn(e))throw e;n.Ea.add(1),await Qn(n),n.Ra.set("Offline"),t||(t=()=>xm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{k(Kn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await si(n)}))}function rl(n,e){return e().catch((t=>nl(n,t,e)))}async function oi(n){const e=z(n),t=dt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ds;for(;Xm(e);)try{const i=await Um(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Ym(e,i)}catch(i){await nl(e,i)}il(e)&&sl(e)}function Xm(n){return Jn(n)&&n.Ta.length<10}function Ym(n,e){n.Ta.push(e);const t=dt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function il(n){return Jn(n)&&!dt(n).x_()&&n.Ta.length>0}function sl(n){dt(n).start()}async function Zm(n){dt(n).ra()}async function e_(n){const e=dt(n);for(const t of n.Ta)e.ea(t.mutations)}async function t_(n,e,t){const r=n.Ta.shift(),i=js.from(r,e,t);await rl(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await oi(n)}async function n_(n,e){e&&dt(n).X_&&await(async function(r,i){if((function(a){return Xg(a)&&a!==b.ABORTED})(i.code)){const o=r.Ta.shift();dt(r).B_(),await rl(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await oi(r)}})(n,e),il(n)&&sl(n)}async function sc(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),k(Kn,"RemoteStore received new credentials");const r=Jn(t);t.Ea.add(3),await Qn(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await si(t)}async function r_(n,e){const t=z(n);e?(t.Ea.delete(2),await si(t)):e||(t.Ea.add(2),await Qn(t),t.Ra.set("Unknown"))}function dt(n){return n.fa||(n.fa=(function(t,r,i){const o=z(t);return o.sa(),new Gm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Zm.bind(null,n),r_:n_.bind(null,n),ta:e_.bind(null,n),na:t_.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await oi(n)):(await n.fa.stop(),n.Ta.length>0&&(k(Kn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new zs(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(n,e){if(kt("AsyncQueue",`${e}: ${n}`),Gn(n))return new V(b.UNAVAILABLE,`${e}: ${n}`);throw n}class i_{constructor(){this.queries=oc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=z(t),o=i.queries;i.queries=oc(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new V(b.ABORTED,"Firestore shutting down"))}}function oc(){return new Lt((n=>Uu(n)),xu)}function s_(n){n.Ca.forEach((e=>{e.next()}))}var ac,cc;(cc=ac||(ac={})).Ma="default",cc.Cache="cache";const o_="SyncEngine";class a_{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Lt((l=>Uu(l)),xu),this.Iu=new Map,this.Eu=new Set,this.du=new ve(x.comparator),this.Au=new Map,this.Ru=new $s,this.Vu={},this.mu=new Map,this.fu=Zt.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function c_(n,e,t){const r=d_(n);try{const i=await(function(a,l){const h=z(a),f=K.now(),y=l.reduce(((C,N)=>C.add(N.key)),pe());let I,S;return h.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let N=$r(),M=pe();return h.Ns.getEntries(C,y).next((D=>{N=D,N.forEach(((q,$)=>{$.isValidDocument()||(M=M.add(q))}))})).next((()=>h.localDocuments.getOverlayedDocuments(C,N))).next((D=>{I=D;const q=[];for(const $ of l){const Q=Wg($,I.get($.key).overlayedDocument);Q!=null&&q.push(new xt($.key,Q,ku(Q.value.mapValue),We.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,q,l)})).next((D=>{S=D;const q=D.applyToLocalDocumentSet(I,M);return h.documentOverlayCache.saveOverlays(C,D.batchId,q)}))})).then((()=>({batchId:S.batchId,changes:Bu(I)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(a,l,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new ve(j)),f=f.insert(l,h),a.Vu[a.currentUser.toKey()]=f})(r,i.batchId,t),await ai(r,i.changes),await oi(r.remoteStore)}catch(i){const o=ol(i,"Failed to persist write");t.reject(o)}}function uc(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const h=z(a);h.onlineState=l;let f=!1;h.queries.forEach(((y,I)=>{for(const S of I.Sa)S.va(l)&&(f=!0)})),f&&s_(h)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function u_(n,e){const t=z(n),r=e.batch.batchId;try{const i=await Lm(t.localStore,e);cl(t,r,null),al(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ai(t,i)}catch(i){await ks(i)}}async function l_(n,e,t){const r=z(n);try{const i=await(function(a,l){const h=z(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let y;return h.mutationQueue.lookupMutationBatch(f,l).next((I=>(X(I!==null,37113),y=I.keys(),h.mutationQueue.removeMutationBatch(f,I)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,y,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,y))).next((()=>h.localDocuments.getDocuments(f,y)))}))})(r.localStore,e);cl(r,e,t),al(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ai(r,i)}catch(i){await ks(i)}}function al(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function cl(n,e,t){const r=z(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}async function ai(n,e,t){const r=z(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,e,t).then((f=>{var y;if((f||t)&&r.isPrimaryClient){const I=f?!f.fromCache:(y=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:y.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){i.push(f);const I=Hs.As(h.targetId,f);o.push(I)}})))})),await Promise.all(a),r.Pu.H_(i),await(async function(h,f){const y=z(h);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>R.forEach(f,(S=>R.forEach(S.Es,(C=>y.persistence.referenceDelegate.addReference(I,S.targetId,C))).next((()=>R.forEach(S.ds,(C=>y.persistence.referenceDelegate.removeReference(I,S.targetId,C)))))))))}catch(I){if(!Gn(I))throw I;k(Vm,"Failed to update sequence numbers: "+I)}for(const I of f){const S=I.targetId;if(!I.fromCache){const C=y.Ms.get(S),N=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(N);y.Ms=y.Ms.insert(S,M)}}})(r.localStore,o))}async function h_(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){k(o_,"User change. New user:",e.toKey());const r=await el(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new V(b.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ai(t,r.Ls)}}function d_(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=l_.bind(null,e),e}class Gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ii(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Mm(this.persistence,new Dm,e.initialUser,this.serializer)}Cu(e){return new Zu(qs.mi,this.serializer)}Du(e){return new Fm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gr.provider={build:()=>new Gr};class f_ extends Gr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof zr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _m(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new Zu((r=>zr.mi(r,t)),this.serializer)}}class ds{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h_.bind(null,this.syncEngine),await r_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new i_})()}createDatastore(e){const t=ii(e.databaseInfo.databaseId),r=(function(o){return new Hm(o)})(e.databaseInfo);return(function(o,a,l,h){return new Km(o,a,l,h)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,o,a,l){return new Jm(r,i,o,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>uc(this.syncEngine,t,0)),(function(){return rc.v()?new rc:new Bm})())}createSyncEngine(e,t){return(function(i,o,a,l,h,f,y){const I=new a_(i,o,a,l,h,f);return y&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const o=z(i);k(Kn,"RemoteStore shutting down."),o.Ea.add(5),await Qn(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ds.provider={build:()=>new ds};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="FirestoreClient";class p_{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=Ps.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{k(ft,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(k(ft,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ol(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function $i(n,e){n.asyncQueue.verifyOperationInProgress(),k(ft,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await el(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function lc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await g_(n);k(ft,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>sc(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>sc(e.remoteStore,i))),n._onlineComponents=e}async function g_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ft,"Using user provided OfflineComponentProvider");try{await $i(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ei("Error using user provided cache. Falling back to memory cache: "+t),await $i(n,new Gr)}}else k(ft,"Using default OfflineComponentProvider"),await $i(n,new f_(void 0));return n._offlineComponents}async function m_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ft,"Using user provided OnlineComponentProvider"),await lc(n,n._uninitializedComponentsProvider._online)):(k(ft,"Using default OnlineComponentProvider"),await lc(n,new ds))),n._onlineComponents}function __(n){return m_(n).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="firestore.googleapis.com",dc=!0;class fc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ll,this.ssl=dc}else this.host=e.host,this.ssl=e.ssl??dc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gm)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ig("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ul(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Wp;switch(r.type){case"firstParty":return new Xp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=hc.get(t);r&&(k("ComponentProvider","Removing Datastore"),hc.delete(t),r.terminate())})(this),Promise.resolve()}}function y_(n,e,t,r={}){var f;n=ns(n,Gs);const i=en(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&(Dc(`https://${l}`),Vc("Firestore",!0)),o.host!==ll&&o.host!==l&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!bt(h,a)&&(n._setSettings(h),r.mockUserToken)){let y,I;if(typeof r.mockUserToken=="string")y=r.mockUserToken,I=fe.MOCK_USER;else{y=Vh(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new fe(S)}n._authCredentials=new Kp(new Tu(y,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ws(this.firestore,e,this._query)}}class ge{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(zn(t,ge._jsonSchema))return new ge(e,r||null,new x(Y.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:ee("string",ge._jsonSchemaVersion),referencePath:ee("string")};class Un extends Ws{constructor(e,t,r){super(e,t,Ng(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new x(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function lE(n,e,...t){if(n=Te(n),arguments.length===1&&(e=Ps.newId()),rg("doc","path",e),n instanceof Gs){const r=Y.fromString(e,...t);return Ma(r),new ge(n,null,new x(r))}{if(!(n instanceof ge||n instanceof Un))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return Ma(r),new ge(n.firestore,n instanceof Un?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="AsyncQueue";class gc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tl(this,"async_queue_retry"),this._c=()=>{const r=ji();r&&k(pc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new St;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gn(e))throw e;k(pc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,kt("INTERNAL UNHANDLED ERROR: ",mc(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=zs.createAndSchedule(this,e,t,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&U(47125,{Pc:mc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function mc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class hl extends Gs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new gc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gc(e),this._firestoreClient=void 0,await e}}}function hE(n,e){const t=typeof n=="object"?n:gs(),r=typeof n=="string"?n:Ur,i=tn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Nh("firestore");o&&y_(i,...o)}return i}function E_(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||T_(n),n._firestoreClient}function T_(n){var r,i,o;const e=n._freezeSettings(),t=(function(l,h,f,y){return new mg(l,h,f,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,ul(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new p_(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ce(je.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ce(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ce._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zn(e,Ce._jsonSchema))return Ce.fromBase64String(e.bytes)}}Ce._jsonSchemaVersion="firestore/bytes/1.0",Ce._jsonSchema={type:ee("string",Ce._jsonSchemaVersion),bytes:ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ke._jsonSchemaVersion}}static fromJSON(e){if(zn(e,Ke._jsonSchema))return new Ke(e.latitude,e.longitude)}}Ke._jsonSchemaVersion="firestore/geoPoint/1.0",Ke._jsonSchema={type:ee("string",Ke._jsonSchemaVersion),latitude:ee("number"),longitude:ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zn(e,Qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Qe(e.vectorValues);throw new V(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qe._jsonSchemaVersion="firestore/vectorValue/1.0",Qe._jsonSchema={type:ee("string",Qe._jsonSchemaVersion),vectorValues:ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=/^__.*__$/;class w_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wn(e,this.data,t,this.fieldTransforms)}}function fl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:n})}}class Qs{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qs({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Wr(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(fl(this.Ac)&&I_.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class v_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ii(e)}Cc(e,t,r,i=!1){return new Qs({Ac:e,methodName:t,Dc:r,path:ae.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function A_(n){const e=n._freezeSettings(),t=ii(n._databaseId);return new v_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function S_(n,e,t,r,i,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,i);_l("Data must be an object, but it was:",a,r);const l=gl(r,a);let h,f;if(o.merge)h=new Ne(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const y=[];for(const I of o.mergeFields){const S=R_(e,I,t);if(!a.contains(S))throw new V(b.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);P_(y,S)||y.push(S)}h=new Ne(y),f=a.fieldTransforms.filter((I=>h.covers(I.field)))}else h=null,f=a.fieldTransforms;return new w_(new Pe(l),h,f)}function pl(n,e){if(ml(n=Te(n)))return _l("Unsupported field value:",e,n),gl(n,e);if(n instanceof dl)return(function(r,i){if(!fl(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let h=pl(l,i.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=K.fromDate(r);return{timestampValue:cs(i.serializer,o)}}if(r instanceof K){const o=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cs(i.serializer,o)}}if(r instanceof Ke)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ce)return{bytesValue:em(i.serializer,r._byteString)};if(r instanceof ge){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ju(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Qe)return(function(a,l){return{mapValue:{fields:{[Pu]:{stringValue:Cu},[rs]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return Bs(l.serializer,f)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Cs(r)}`)})(n,e)}function gl(n,e){const t={};return vu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):on(n,((r,i)=>{const o=pl(i,e.mc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function ml(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Ke||n instanceof Ce||n instanceof ge||n instanceof dl||n instanceof Qe)}function _l(n,e,t){if(!ml(t)||!Iu(t)){const r=Cs(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function R_(n,e,t){if((e=Te(e))instanceof Ks)return e._internalPath;if(typeof e=="string")return yl(n,e);throw Wr("Field path arguments must be of type string or ",n,!1,void 0,t)}const b_=new RegExp("[~\\*/\\[\\]]");function yl(n,e,t){if(e.search(b_)>=0)throw Wr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ks(...e.split("."))._internalPath}catch{throw Wr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wr(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new V(b.INVALID_ARGUMENT,l+n+h)}function P_(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class C_ extends El{data(){return super.data()}}function Tl(n,e){return typeof e=="string"?yl(n,e):e instanceof Ks?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class yr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wt extends El{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new br(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Tl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Wt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Wt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wt._jsonSchema={type:ee("string",Wt._jsonSchemaVersion),bundleSource:ee("string","DocumentSnapshot"),bundleName:ee("string"),bundle:ee("string")};class br extends Wt{data(e={}){return super.data(e)}}class Nn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new yr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new br(this._firestore,this._userDataWriter,r.key,r,new yr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const h=new br(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new br(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,y=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),y=a.indexOf(l.doc.key)),{type:N_(l.type),doc:h,oldIndex:f,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Nn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ps.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function N_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}Nn._jsonSchemaVersion="firestore/querySnapshot/1.0",Nn._jsonSchema={type:ee("string",Nn._jsonSchemaVersion),bundleSource:ee("string","QuerySnapshot"),bundleName:ee("string"),bundle:ee("string")};function dE(n,e,t){n=ns(n,ge);const r=ns(n.firestore,hl),i=k_(n.converter,e);return D_(r,[S_(A_(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,We.none())])}function D_(n,e){return(function(r,i){const o=new St;return r.asyncQueue.enqueueAndForget((async()=>c_(await __(r),i,o))),o.promise})(E_(n),e)}(function(e,t=!0){(function(i){sn=i})(nn),Fe(new Oe("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new hl(new Qp(r.getProvider("auth-internal")),new Yp(a,r.getProvider("app-check-internal")),(function(f,y){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(f.options.projectId,y)})(a,i),a);return o={useFetchStreams:t,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),De(Na,Da,e),De(Na,Da,"esm2020")})();const Il="@firebase/installations",Js="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=1e4,vl=`w:${Js}`,Al="FIS_v2",V_="https://firebaseinstallations.googleapis.com/v1",O_=3600*1e3,M_="installations",L_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vt=new Mt(M_,L_,x_);function Sl(n){return n instanceof qe&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl({projectId:n}){return`${V_}/projects/${n}/installations`}function bl(n){return{token:n.token,requestStatus:2,expiresIn:F_(n.expiresIn),creationTime:Date.now()}}async function Pl(n,e){const r=(await e.json()).error;return Vt.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cl({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function U_(n,{refreshToken:e}){const t=Cl(n);return t.append("Authorization",B_(e)),t}async function kl(n){const e=await n();return e.status>=500&&e.status<600?n():e}function F_(n){return Number(n.replace("s","000"))}function B_(n){return`${Al} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Rl(n),i=Cl(n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:Al,appId:n.appId,sdkVersion:vl},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await kl(()=>fetch(r,l));if(h.ok){const f=await h.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:bl(f.authToken)}}else throw await Pl("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=/^[cdef][\w-]{21}$/,fs="";function H_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=z_(n);return q_.test(t)?t:fs}catch{return fs}}function z_(n){return $_(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;function Vl(n,e){const t=ci(n);Ol(t,e),G_(t,e)}function Ol(n,e){const t=Dl.get(n);if(t)for(const r of t)r(e)}function G_(n,e){const t=W_();t&&t.postMessage({key:n,fid:e}),K_()}let vt=null;function W_(){return!vt&&"BroadcastChannel"in self&&(vt=new BroadcastChannel("[Firebase] FID Change"),vt.onmessage=n=>{Ol(n.data.key,n.data.fid)}),vt}function K_(){Dl.size===0&&vt&&(vt.close(),vt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="firebase-installations-database",J_=1,Ot="firebase-installations-store";let qi=null;function Xs(){return qi||(qi=Qr(Q_,J_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ot)}}})),qi}async function Kr(n,e){const t=ci(n),i=(await Xs()).transaction(Ot,"readwrite"),o=i.objectStore(Ot),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Vl(n,e.fid),e}async function Ml(n){const e=ci(n),r=(await Xs()).transaction(Ot,"readwrite");await r.objectStore(Ot).delete(e),await r.done}async function ui(n,e){const t=ci(n),i=(await Xs()).transaction(Ot,"readwrite"),o=i.objectStore(Ot),a=await o.get(t),l=e(a);return l===void 0?await o.delete(t):await o.put(l,t),await i.done,l&&(!a||a.fid!==l.fid)&&Vl(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(n){let e;const t=await ui(n.appConfig,r=>{const i=X_(r),o=Y_(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===fs?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function X_(n){const e=n||{fid:H_(),registrationStatus:0};return Ll(e)}function Y_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Z_(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ey(n)}:{installationEntry:e}}async function Z_(n,e){try{const t=await j_(n,e);return Kr(n.appConfig,t)}catch(t){throw Sl(t)&&t.customData.serverCode===409?await Ml(n.appConfig):await Kr(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ey(n){let e=await _c(n.appConfig);for(;e.registrationStatus===1;)await Nl(100),e=await _c(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ys(n);return r||t}return e}function _c(n){return ui(n,e=>{if(!e)throw Vt.create("installation-not-found");return Ll(e)})}function Ll(n){return ty(n)?{fid:n.fid,registrationStatus:0}:n}function ty(n){return n.registrationStatus===1&&n.registrationTime+wl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny({appConfig:n,heartbeatServiceProvider:e},t){const r=ry(n,t),i=U_(n,t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:vl,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await kl(()=>fetch(r,l));if(h.ok){const f=await h.json();return bl(f)}else throw await Pl("Generate Auth Token",h)}function ry(n,{fid:e}){return`${Rl(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n,e=!1){let t;const r=await ui(n.appConfig,o=>{if(!xl(o))throw Vt.create("not-registered");const a=o.authToken;if(!e&&oy(a))return o;if(a.requestStatus===1)return t=iy(n,e),o;{if(!navigator.onLine)throw Vt.create("app-offline");const l=cy(o);return t=sy(n,l),l}});return t?await t:r.authToken}async function iy(n,e){let t=await yc(n.appConfig);for(;t.authToken.requestStatus===1;)await Nl(100),t=await yc(n.appConfig);const r=t.authToken;return r.requestStatus===0?Zs(n,e):r}function yc(n){return ui(n,e=>{if(!xl(e))throw Vt.create("not-registered");const t=e.authToken;return uy(t)?{...e,authToken:{requestStatus:0}}:e})}async function sy(n,e){try{const t=await ny(n,e),r={...e,authToken:t};return await Kr(n.appConfig,r),t}catch(t){if(Sl(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ml(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Kr(n.appConfig,r)}throw t}}function xl(n){return n!==void 0&&n.registrationStatus===2}function oy(n){return n.requestStatus===2&&!ay(n)}function ay(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+O_}function cy(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function uy(n){return n.requestStatus===1&&n.requestTime+wl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ys(e);return r?r.catch(console.error):Zs(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(n,e=!1){const t=n;return await dy(t),(await Zs(t,e)).token}async function dy(n){const{registrationPromise:e}=await Ys(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(n){if(!n||!n.options)throw Hi("App Configuration");if(!n.name)throw Hi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Hi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Hi(n){return Vt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="installations",py="installations-internal",gy=n=>{const e=n.getProvider("app").getImmediate(),t=fy(e),r=tn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},my=n=>{const e=n.getProvider("app").getImmediate(),t=tn(e,Ul).getImmediate();return{getId:()=>ly(t),getToken:i=>hy(t,i)}};function _y(){Fe(new Oe(Ul,gy,"PUBLIC")),Fe(new Oe(py,my,"PRIVATE"))}_y();De(Il,Js);De(Il,Js,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="/firebase-messaging-sw.js",Ey="/firebase-cloud-messaging-push-scope",Fl="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ty="https://fcmregistrations.googleapis.com/v1",Bl="google.c.a.c_id",Iy="google.c.a.c_l",wy="google.c.a.ts",vy="google.c.a.e",Ec=1e4;var Tc;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Tc||(Tc={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Fn;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Fn||(Fn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ay(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="fcm_token_details_db",Sy=5,Ic="fcm_token_object_Store";async function Ry(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(zi))return null;let e=null;return(await Qr(zi,Sy,{upgrade:async(r,i,o,a)=>{if(i<2||!r.objectStoreNames.contains(Ic))return;const l=a.objectStore(Ic),h=await l.index("fcmSenderId").get(n);if(await l.clear(),!!h){if(i===2){const f=h;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:f.createTime??Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:He(f.vapidKey)}}}else if(i===3){const f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:He(f.auth),p256dh:He(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:He(f.vapidKey)}}}else if(i===4){const f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:He(f.auth),p256dh:He(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:He(f.vapidKey)}}}}}})).close(),await Oi(zi),await Oi("fcm_vapid_details_db"),await Oi("undefined"),by(e)?e:null}function by(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="firebase-messaging-database",Cy=1,Bn="firebase-messaging-store";let Gi=null;function jl(){return Gi||(Gi=Qr(Py,Cy,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bn)}}})),Gi}async function ky(n){const e=$l(n),r=await(await jl()).transaction(Bn).objectStore(Bn).get(e);if(r)return r;{const i=await Ry(n.appConfig.senderId);if(i)return await eo(n,i),i}}async function eo(n,e){const t=$l(n),i=(await jl()).transaction(Bn,"readwrite");return await i.objectStore(Bn).put(e,t),await i.done,e}function $l({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},me=new Mt("messaging","Messaging",Ny);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(n,e){const t=await no(n),r=ql(e),i={method:"POST",headers:t,body:JSON.stringify(r)};let o;try{o=await(await fetch(to(n.appConfig),i)).json()}catch(a){throw me.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw me.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw me.create("token-subscribe-no-token");return o.token}async function Vy(n,e){const t=await no(n),r=ql(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${to(n.appConfig)}/${e.token}`,i)).json()}catch(a){throw me.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw me.create("token-update-failed",{errorInfo:a})}if(!o.token)throw me.create("token-update-no-token");return o.token}async function Oy(n,e){const r={method:"DELETE",headers:await no(n)};try{const o=await(await fetch(`${to(n.appConfig)}/${e}`,r)).json();if(o.error){const a=o.error.message;throw me.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw me.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function to({projectId:n}){return`${Ty}/projects/${n}/registrations`}async function no({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function ql({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const i={web:{endpoint:t,auth:e,p256dh:n}};return r!==Fl&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=10080*60*1e3;async function Ly(n){const e=await Uy(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:He(e.getKey("auth")),p256dh:He(e.getKey("p256dh"))},r=await ky(n.firebaseDependencies);if(r){if(Fy(r.subscriptionOptions,t))return Date.now()>=r.createTime+My?xy(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await Oy(n.firebaseDependencies,r.token)}catch(i){console.warn(i)}return wc(n.firebaseDependencies,t)}else return wc(n.firebaseDependencies,t)}async function xy(n,e){try{const t=await Vy(n.firebaseDependencies,e),r={...e,token:t,createTime:Date.now()};return await eo(n.firebaseDependencies,r),t}catch(t){throw t}}async function wc(n,e){const r={token:await Dy(n,e),createTime:Date.now(),subscriptionOptions:e};return await eo(n,r),r.token}async function Uy(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ay(e)})}function Fy(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,o=e.p256dh===n.p256dh;return t&&r&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return By(e,n),jy(e,n),$y(e,n),e}function By(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const i=e.notification.image;i&&(n.notification.image=i);const o=e.notification.icon;o&&(n.notification.icon=o)}function jy(n,e){e.data&&(n.data=e.data)}function $y(n,e){var i,o,a,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;n.fcmOptions={};const t=((o=e.fcmOptions)==null?void 0:o.link)??((a=e.notification)==null?void 0:a.click_action);t&&(n.fcmOptions.link=t);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n){return typeof n=="object"&&!!n&&Bl in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(n){if(!n||!n.options)throw Wi("App Configuration Object");if(!n.name)throw Wi("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Wi(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Wi(n){return me.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Hy(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n){try{n.swRegistration=await navigator.serviceWorker.register(yy,{scope:Ey}),n.swRegistration.update().catch(()=>{}),await Wy(n.swRegistration)}catch(e){throw me.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Wy(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${Ec} ms`)),Ec),i=n.installing||n.waiting;n.active?(clearTimeout(r),e()):i?i.onstatechange=o=>{var a;((a=o.target)==null?void 0:a.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(n,e){if(!e&&!n.swRegistration&&await Gy(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw me.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Fl)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(n,e){if(!navigator)throw me.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw me.create("permission-blocked");return await Qy(n,e==null?void 0:e.vapidKey),await Ky(n,e==null?void 0:e.serviceWorkerRegistration),Ly(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,e,t){const r=Xy(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Bl],message_name:t[Iy],message_time:t[wy],message_device_time:Math.floor(Date.now()/1e3)})}function Xy(n){switch(n){case Fn.NOTIFICATION_CLICKED:return"notification_open";case Fn.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Fn.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(vc(t)):n.onMessageHandler.next(vc(t)));const r=t.data;qy(r)&&r[vy]==="1"&&await Jy(n,t.messageType,r)}const Ac="@firebase/messaging",Sc="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=n=>{const e=new zy(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Yy(e,t)),e},eE=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Hl(e,r)}};function tE(){Fe(new Oe("messaging",Zy,"PUBLIC")),Fe(new Oe("messaging-internal",eE,"PRIVATE")),De(Ac,Sc),De(Ac,Sc,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(){try{await Mc()}catch{return!1}return typeof window<"u"&&Oc()&&qh()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n,e){if(!navigator)throw me.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n=gs()){return nE().then(e=>{if(!e)throw me.create("unsupported-browser")},e=>{throw me.create("indexed-db-unsupported")}),tn(Te(n),"messaging").getImmediate()}async function pE(n,e){return n=Te(n),Hl(n,e)}function gE(n,e){return n=Te(n),rE(n,e)}tE();export{ot as G,hE as a,fE as b,pE as c,sE as d,dE as e,lE as f,cE as g,oE as h,Ud as i,gE as o,De as r,aE as s};
