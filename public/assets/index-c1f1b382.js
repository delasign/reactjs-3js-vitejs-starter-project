(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function X0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tg={exports:{}},lu={},wg={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),$0=Symbol.for("react.portal"),j0=Symbol.for("react.fragment"),Y0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),Z0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),J0=Symbol.for("react.suspense"),ey=Symbol.for("react.memo"),ty=Symbol.for("react.lazy"),Th=Symbol.iterator;function ny(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var Ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cg=Object.assign,bg={};function Qo(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Ag}Qo.prototype.isReactComponent={};Qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rg(){}Rg.prototype=Qo.prototype;function cd(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Ag}var fd=cd.prototype=new Rg;fd.constructor=cd;Cg(fd,Qo.prototype);fd.isPureReactComponent=!0;var wh=Array.isArray,Pg=Object.prototype.hasOwnProperty,dd={current:null},Lg={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Pg.call(e,i)&&!Lg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:t,key:o,ref:s,props:r,_owner:dd.current}}function iy(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function ry(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ah=/\/+/g;function zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ry(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case la:case $0:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+zu(s,0):i,wh(r)?(n="",t!=null&&(n=t.replace(Ah,"$&/")+"/"),ul(r,e,n,"",function(u){return u})):r!=null&&(hd(r)&&(r=iy(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Ah,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",wh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+zu(o,a);s+=ul(o,e,n,l,r)}else if(l=ny(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+zu(o,a++),s+=ul(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function xa(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(o){return e.call(n,o,r++)}),i}function oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},cl={transition:null},sy={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:dd};Ve.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Qo;Ve.Fragment=j0;Ve.Profiler=q0;Ve.PureComponent=cd;Ve.StrictMode=Y0;Ve.Suspense=J0;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Cg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=dd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Pg.call(e,l)&&!Lg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:la,type:t.type,key:r,ref:o,props:i,_owner:s}};Ve.createContext=function(t){return t={$$typeof:Z0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K0,_context:t},t.Consumer=t};Ve.createElement=Dg;Ve.createFactory=function(t){var e=Dg.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:Q0,render:t}};Ve.isValidElement=hd;Ve.lazy=function(t){return{$$typeof:ty,_payload:{_status:-1,_result:t},_init:oy}};Ve.memo=function(t,e){return{$$typeof:ey,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};Ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ve.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ve.useContext=function(t){return Qt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ve.useId=function(){return Qt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Qt.current.useRef(t)};Ve.useState=function(t){return Qt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Qt.current.useTransition()};Ve.version="18.2.0";wg.exports=Ve;var Ir=wg.exports;const Bs=X0(Ir);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=Ir,ly=Symbol.for("react.element"),uy=Symbol.for("react.fragment"),cy=Object.prototype.hasOwnProperty,fy=ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dy={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)cy.call(e,i)&&!dy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ly,type:t,key:o,ref:s,props:r,_owner:fy.current}}lu.Fragment=uy;lu.jsx=Ug;lu.jsxs=Ug;Tg.exports=lu;var pd=Tg.exports,jc={},Ng={exports:{}},Sn={},Ig={exports:{}},Og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var F=N.length;N.push(z);e:for(;0<F;){var R=F-1>>>1,I=N[R];if(0<r(I,z))N[R]=z,N[F]=I,F=R;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var z=N[0],F=N.pop();if(F!==z){N[0]=F;e:for(var R=0,I=N.length,le=I>>>1;R<le;){var ae=2*(R+1)-1,ce=N[ae],ge=ae+1,we=N[ge];if(0>r(ce,F))ge<I&&0>r(we,ce)?(N[R]=we,N[ge]=F,R=ge):(N[R]=ce,N[ae]=F,R=ae);else if(ge<I&&0>r(we,F))N[R]=we,N[ge]=F,R=ge;else break e}}return z}function r(N,z){var F=N.sortIndex-z.sortIndex;return F!==0?F:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,y=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=N)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function x(N){if(v=!1,g(N),!y)if(n(l)!==null)y=!0,K(M);else{var z=n(u);z!==null&&$(x,z.startTime-N)}}function M(N,z){y=!1,v&&(v=!1,c(D),D=-1),m=!0;var F=h;try{for(g(z),d=n(l);d!==null&&(!(d.expirationTime>z)||N&&!j());){var R=d.callback;if(typeof R=="function"){d.callback=null,h=d.priorityLevel;var I=R(d.expirationTime<=z);z=t.unstable_now(),typeof I=="function"?d.callback=I:d===n(l)&&i(l),g(z)}else i(l);d=n(l)}if(d!==null)var le=!0;else{var ae=n(u);ae!==null&&$(x,ae.startTime-z),le=!1}return le}finally{d=null,h=F,m=!1}}var C=!1,w=null,D=-1,E=5,A=-1;function j(){return!(t.unstable_now()-A<E)}function Z(){if(w!==null){var N=t.unstable_now();A=N;var z=!0;try{z=w(!0,N)}finally{z?Q():(C=!1,w=null)}}else C=!1}var Q;if(typeof _=="function")Q=function(){_(Z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,X=L.port2;L.port1.onmessage=Z,Q=function(){X.postMessage(null)}}else Q=function(){p(Z,0)};function K(N){w=N,C||(C=!0,Q())}function $(N,z){D=p(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,K(M))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var F=h;h=z;try{return N()}finally{h=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=h;h=N;try{return z()}finally{h=F}},t.unstable_scheduleCallback=function(N,z,F){var R=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?R+F:R):F=R,N){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=F+I,N={id:f++,callback:z,priorityLevel:N,startTime:F,expirationTime:I,sortIndex:-1},F>R?(N.sortIndex=F,e(u,N),n(l)===null&&N===n(u)&&(v?(c(D),D=-1):v=!0,$(x,F-R))):(N.sortIndex=I,e(l,N),y||m||(y=!0,K(M))),N},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(N){var z=h;return function(){var F=h;h=z;try{return N.apply(this,arguments)}finally{h=F}}}})(Og);Ig.exports=Og;var hy=Ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=Ir,xn=hy;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kg=new Set,Hs={};function Vr(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(Hs[t]=e,t=0;t<e.length;t++)kg.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=Object.prototype.hasOwnProperty,py=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},bh={};function my(t){return Yc.call(bh,t)?!0:Yc.call(Ch,t)?!1:py.test(t)?bh[t]=!0:(Ch[t]=!0,!1)}function gy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _y(t,e,n,i){if(e===null||typeof e>"u"||gy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);kt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);kt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);kt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_y(e,n,r,i)&&(n=null),i||r===null?my(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),ho=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Kc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Hg=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Bu;function xs(t){if(Bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+t}var Hu=!1;function Vu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function vy(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function Qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case po:return"Fragment";case ho:return"Portal";case qc:return"Profiler";case vd:return"StrictMode";case Kc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bg:return(t.displayName||"Context")+".Consumer";case zg:return(t._context.displayName||"Context")+".Provider";case yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xd:return e=t.displayName||null,e!==null?e:Qc(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return Qc(t(e))}catch{}}return null}function yy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xy(t){var e=Vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=xy(t))}function Gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Vg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wg(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function ef(t,e){Wg(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function bo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Ss(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Xg(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $g(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$g(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,jg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sy=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){Sy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function Yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Yg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ey=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(Ey[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,Ro=null,Po=null;function Nh(t){if(t=fa(t)){if(typeof lf!="function")throw Error(J(280));var e=t.stateNode;e&&(e=hu(e),lf(t.stateNode,t.type,e))}}function Kg(t){Ro?Po?Po.push(t):Po=[t]:Ro=t}function Zg(){if(Ro){var t=Ro,e=Po;if(Po=Ro=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function Qg(t,e){return t(e)}function Jg(){}var Gu=!1;function e_(t,e,n){if(Gu)return t(e,n);Gu=!0;try{return Qg(t,e,n)}finally{Gu=!1,(Ro!==null||Po!==null)&&(Jg(),Zg())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var i=hu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var uf=!1;if(Mi)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){uf=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{uf=!1}function My(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var bs=!1,bl=null,Rl=!1,cf=null,Ty={onError:function(t){bs=!0,bl=t}};function wy(t,e,n,i,r,o,s,a,l){bs=!1,bl=null,My.apply(Ty,arguments)}function Ay(t,e,n,i,r,o,s,a,l){if(wy.apply(this,arguments),bs){if(bs){var u=bl;bs=!1,bl=null}else throw Error(J(198));Rl||(Rl=!0,cf=u)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(Gr(t)!==t)throw Error(J(188))}function Cy(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Ih(r),t;if(o===i)return Ih(r),e;o=o.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function n_(t){return t=Cy(t),t!==null?i_(t):null}function i_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i_(t);if(e!==null)return e;t=t.sibling}return null}var r_=xn.unstable_scheduleCallback,Oh=xn.unstable_cancelCallback,by=xn.unstable_shouldYield,Ry=xn.unstable_requestPaint,gt=xn.unstable_now,Py=xn.unstable_getCurrentPriorityLevel,Ed=xn.unstable_ImmediatePriority,o_=xn.unstable_UserBlockingPriority,Pl=xn.unstable_NormalPriority,Ly=xn.unstable_LowPriority,s_=xn.unstable_IdlePriority,uu=null,ri=null;function Dy(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:Iy,Uy=Math.log,Ny=Math.LN2;function Iy(t){return t>>>=0,t===0?32:31-(Uy(t)/Ny|0)|0}var Ta=64,wa=4194304;function Es(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Es(a):(o&=s,o!==0&&(i=Es(o)))}else s=n&~r,s!==0?i=Es(s):o!==0&&(i=Es(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Oy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Oy(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a_(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function Wu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function ky(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function l_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u_,Td,c_,f_,d_,df=!1,Aa=[],Wi=null,Xi=null,$i=null,Ws=new Map,Xs=new Map,ki=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function as(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function By(t,e,n,i,r){switch(e){case"focusin":return Wi=as(Wi,t,e,n,i,r),!0;case"dragenter":return Xi=as(Xi,t,e,n,i,r),!0;case"mouseover":return $i=as($i,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ws.set(o,as(Ws.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Xs.set(o,as(Xs.get(o)||null,t,e,n,i,r)),!0}return!1}function h_(t){var e=Mr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);af=i,n.target.dispatchEvent(i),af=null}else return e=fa(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){fl(t)&&n.delete(e)}function Hy(){df=!1,Wi!==null&&fl(Wi)&&(Wi=null),Xi!==null&&fl(Xi)&&(Xi=null),$i!==null&&fl($i)&&($i=null),Ws.forEach(kh),Xs.forEach(kh)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,Hy)))}function $s(t){function e(r){return ls(r,t)}if(0<Aa.length){ls(Aa[0],t);for(var n=1;n<Aa.length;n++){var i=Aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&ls(Wi,t),Xi!==null&&ls(Xi,t),$i!==null&&ls($i,t),Ws.forEach(e),Xs.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)h_(n),n.blockedOn===null&&ki.shift()}var Lo=bi.ReactCurrentBatchConfig,Dl=!0;function Vy(t,e,n,i){var r=qe,o=Lo.transition;Lo.transition=null;try{qe=1,wd(t,e,n,i)}finally{qe=r,Lo.transition=o}}function Gy(t,e,n,i){var r=qe,o=Lo.transition;Lo.transition=null;try{qe=4,wd(t,e,n,i)}finally{qe=r,Lo.transition=o}}function wd(t,e,n,i){if(Dl){var r=hf(t,e,n,i);if(r===null)ec(t,e,i,Ul,n),Fh(t,i);else if(By(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<zy.indexOf(t)){for(;r!==null;){var o=fa(r);if(o!==null&&u_(o),o=hf(t,e,n,i),o===null&&ec(t,e,i,Ul,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else ec(t,e,i,null,n)}}var Ul=null;function hf(t,e,n,i){if(Ul=null,t=Sd(i),t=Mr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function p_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Py()){case Ed:return 1;case o_:return 4;case Pl:case Ly:return 16;case s_:return 536870912;default:return 16}default:return 16}}var Bi=null,Ad=null,dl=null;function m_(){if(dl)return dl;var t,e=Ad,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function zh(){return!1}function En(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ca:zh,this.isPropagationStopped=zh,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=En(Jo),ca=ft({},Jo,{view:0,detail:0}),Wy=En(ca),Xu,$u,us,cu=ft({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Xu=t.screenX-us.screenX,$u=t.screenY-us.screenY):$u=Xu=0,us=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:$u}}),Bh=En(cu),Xy=ft({},cu,{dataTransfer:0}),$y=En(Xy),jy=ft({},ca,{relatedTarget:0}),ju=En(jy),Yy=ft({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),qy=En(Yy),Ky=ft({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zy=En(Ky),Qy=ft({},Jo,{data:0}),Hh=En(Qy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tx[t])?!!e[t]:!1}function bd(){return nx}var ix=ft({},ca,{key:function(t){if(t.key){var e=Jy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=En(ix),ox=ft({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=En(ox),sx=ft({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),ax=En(sx),lx=ft({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=En(lx),cx=ft({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=En(cx),dx=[9,13,27,32],Rd=Mi&&"CompositionEvent"in window,Rs=null;Mi&&"documentMode"in document&&(Rs=document.documentMode);var hx=Mi&&"TextEvent"in window&&!Rs,g_=Mi&&(!Rd||Rs&&8<Rs&&11>=Rs),Gh=String.fromCharCode(32),Wh=!1;function __(t,e){switch(t){case"keyup":return dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mo=!1;function px(t,e){switch(t){case"compositionend":return v_(e);case"keypress":return e.which!==32?null:(Wh=!0,Gh);case"textInput":return t=e.data,t===Gh&&Wh?null:t;default:return null}}function mx(t,e){if(mo)return t==="compositionend"||!Rd&&__(t,e)?(t=m_(),dl=Ad=Bi=null,mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g_&&e.locale!=="ko"?null:e.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gx[t.type]:e==="textarea"}function y_(t,e,n,i){Kg(i),e=Nl(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ps=null,js=null;function _x(t){P_(t,0)}function fu(t){var e=vo(t);if(Gg(e))return t}function vx(t,e){if(t==="change")return e}var x_=!1;if(Mi){var Yu;if(Mi){var qu="oninput"in document;if(!qu){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),qu=typeof $h.oninput=="function"}Yu=qu}else Yu=!1;x_=Yu&&(!document.documentMode||9<document.documentMode)}function jh(){Ps&&(Ps.detachEvent("onpropertychange",S_),js=Ps=null)}function S_(t){if(t.propertyName==="value"&&fu(js)){var e=[];y_(e,js,t,Sd(t)),e_(_x,e)}}function yx(t,e,n){t==="focusin"?(jh(),Ps=e,js=n,Ps.attachEvent("onpropertychange",S_)):t==="focusout"&&jh()}function xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(js)}function Sx(t,e){if(t==="click")return fu(e)}function Ex(t,e){if(t==="input"||t==="change")return fu(e)}function Mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Mx;function Ys(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function E_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M_(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tx(t){var e=M_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E_(n.ownerDocument.documentElement,n)){if(i!==null&&Pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=qh(n,o);var s=qh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wx=Mi&&"documentMode"in document&&11>=document.documentMode,go=null,pf=null,Ls=null,mf=!1;function Kh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||go==null||go!==Cl(i)||(i=go,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ls&&Ys(Ls,i)||(Ls=i,i=Nl(pf,"onSelect"),0<i.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=go)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _o={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Ku={},T_={};Mi&&(T_=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function du(t){if(Ku[t])return Ku[t];if(!_o[t])return t;var e=_o[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T_)return Ku[t]=e[n];return t}var w_=du("animationend"),A_=du("animationiteration"),C_=du("animationstart"),b_=du("transitionend"),R_=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){R_.set(t,e),Vr(e,[t])}for(var Zu=0;Zu<Zh.length;Zu++){var Qu=Zh[Zu],Ax=Qu.toLowerCase(),Cx=Qu[0].toUpperCase()+Qu.slice(1);sr(Ax,"on"+Cx)}sr(w_,"onAnimationEnd");sr(A_,"onAnimationIteration");sr(C_,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(b_,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function Qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ay(i,e,void 0,t),t.currentTarget=null}function P_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Qh(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Qh(r,a,u),o=l}}}if(Rl)throw t=cf,Rl=!1,cf=null,t}function rt(t,e){var n=e[xf];n===void 0&&(n=e[xf]=new Set);var i=t+"__bubble";n.has(i)||(L_(e,t,2,!1),n.add(i))}function Ju(t,e,n){var i=0;e&&(i|=4),L_(n,t,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function qs(t){if(!t[Ra]){t[Ra]=!0,kg.forEach(function(n){n!=="selectionchange"&&(bx.has(n)||Ju(n,!1,t),Ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Ju("selectionchange",!1,e))}}function L_(t,e,n,i){switch(p_(e)){case 1:var r=Vy;break;case 4:r=Gy;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ec(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Mr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}e_(function(){var u=o,f=Sd(n),d=[];e:{var h=R_.get(t);if(h!==void 0){var m=Cd,y=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":m=rx;break;case"focusin":y="focus",m=ju;break;case"focusout":y="blur",m=ju;break;case"beforeblur":case"afterblur":m=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ax;break;case w_:case A_:case C_:m=qy;break;case b_:m=ux;break;case"scroll":m=Wy;break;case"wheel":m=fx;break;case"copy":case"cut":case"paste":m=Zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vh}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,g;_!==null;){g=_;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,c!==null&&(x=Gs(_,c),x!=null&&v.push(Ks(_,x,g)))),p)break;_=_.return}0<v.length&&(h=new m(h,y,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==af&&(y=n.relatedTarget||n.fromElement)&&(Mr(y)||y[Ti]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Mr(y):null,y!==null&&(p=Gr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=Bh,x="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Vh,x="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?h:vo(m),g=y==null?h:vo(y),h=new v(x,_+"leave",m,n,f),h.target=p,h.relatedTarget=g,x=null,Mr(f)===u&&(v=new v(c,_+"enter",y,n,f),v.target=g,v.relatedTarget=p,x=v),p=x,m&&y)t:{for(v=m,c=y,_=0,g=v;g;g=$r(g))_++;for(g=0,x=c;x;x=$r(x))g++;for(;0<_-g;)v=$r(v),_--;for(;0<g-_;)c=$r(c),g--;for(;_--;){if(v===c||c!==null&&v===c.alternate)break t;v=$r(v),c=$r(c)}v=null}else v=null;m!==null&&Jh(d,h,m,v,!1),y!==null&&p!==null&&Jh(d,p,y,v,!0)}}e:{if(h=u?vo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var M=vx;else if(Xh(h))if(x_)M=Ex;else{M=xx;var C=yx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=Sx);if(M&&(M=M(t,u))){y_(d,M,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&tf(h,"number",h.value)}switch(C=u?vo(u):window,t){case"focusin":(Xh(C)||C.contentEditable==="true")&&(go=C,pf=u,Ls=null);break;case"focusout":Ls=pf=go=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Kh(d,n,f);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Kh(d,n,f)}var w;if(Rd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else mo?__(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(g_&&n.locale!=="ko"&&(mo||D!=="onCompositionStart"?D==="onCompositionEnd"&&mo&&(w=m_()):(Bi=f,Ad="value"in Bi?Bi.value:Bi.textContent,mo=!0)),C=Nl(u,D),0<C.length&&(D=new Hh(D,t,null,n,f),d.push({event:D,listeners:C}),w?D.data=w:(w=v_(n),w!==null&&(D.data=w)))),(w=hx?px(t,n):mx(t,n))&&(u=Nl(u,"onBeforeInput"),0<u.length&&(f=new Hh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=w))}P_(d,e)})}function Ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Gs(t,n),o!=null&&i.unshift(Ks(t,o,r)),o=Gs(t,e),o!=null&&i.push(Ks(t,o,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Gs(n,o),l!=null&&s.unshift(Ks(n,l,a))):r||(l=Gs(n,o),l!=null&&s.push(Ks(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Rx=/\r\n?/g,Px=/\u0000|\uFFFD/g;function ep(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(Px,"")}function Pa(t,e,n){if(e=ep(e),ep(t)!==e&&n)throw Error(J(425))}function Il(){}var gf=null,_f=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(t){return tp.resolve(null).then(t).catch(Ux)}:yf;function Ux(t){setTimeout(function(){throw t})}function tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$s(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$s(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),ii="__reactFiber$"+es,Zs="__reactProps$"+es,Ti="__reactContainer$"+es,xf="__reactEvents$"+es,Nx="__reactListeners$"+es,Ix="__reactHandles$"+es;function Mr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=np(t);t!==null;){if(n=t[ii])return n;t=np(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[ii]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function hu(t){return t[Zs]||null}var Sf=[],yo=-1;function ar(t){return{current:t}}function at(t){0>yo||(t.current=Sf[yo],Sf[yo]=null,yo--)}function nt(t,e){yo++,Sf[yo]=t.current,t.current=e}var nr={},Xt=ar(nr),sn=ar(!1),Or=nr;function Fo(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Ol(){at(sn),at(Xt)}function ip(t,e,n){if(Xt.current!==nr)throw Error(J(168));nt(Xt,e),nt(sn,n)}function D_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,yy(t)||"Unknown",r));return ft({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Or=Xt.current,nt(Xt,t),nt(sn,sn.current),!0}function rp(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=D_(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,at(sn),at(Xt),nt(Xt,t)):at(sn),nt(sn,n)}var gi=null,pu=!1,nc=!1;function U_(t){gi===null?gi=[t]:gi.push(t)}function Ox(t){pu=!0,U_(t)}function lr(){if(!nc&&gi!==null){nc=!0;var t=0,e=qe;try{var n=gi;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,pu=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),r_(Ed,lr),r}finally{qe=e,nc=!1}}return null}var xo=[],So=0,kl=null,zl=0,wn=[],An=0,Fr=null,vi=1,yi="";function _r(t,e){xo[So++]=zl,xo[So++]=kl,kl=t,zl=e}function N_(t,e,n){wn[An++]=vi,wn[An++]=yi,wn[An++]=Fr,Fr=t;var i=vi;t=yi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var o=32-Xn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,vi=1<<32-Xn(e)+r|n<<r|i,yi=o+t}else vi=1<<o|n<<r|i,yi=t}function Ld(t){t.return!==null&&(_r(t,1),N_(t,1,0))}function Dd(t){for(;t===kl;)kl=xo[--So],xo[So]=null,zl=xo[--So],xo[So]=null;for(;t===Fr;)Fr=wn[--An],wn[An]=null,yi=wn[--An],wn[An]=null,vi=wn[--An],wn[An]=null}var _n=null,gn=null,lt=!1,Hn=null;function I_(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function op(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:vi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mf(t){if(lt){var e=gn;if(e){var n=e;if(!op(t,e)){if(Ef(t))throw Error(J(418));e=ji(n.nextSibling);var i=_n;e&&op(t,e)?I_(i,n):(t.flags=t.flags&-4097|2,lt=!1,_n=t)}}else{if(Ef(t))throw Error(J(418));t.flags=t.flags&-4097|2,lt=!1,_n=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function La(t){if(t!==_n)return!1;if(!lt)return sp(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=gn)){if(Ef(t))throw O_(),Error(J(418));for(;e;)I_(t,e),e=ji(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?ji(t.stateNode.nextSibling):null;return!0}function O_(){for(var t=gn;t;)t=ji(t.nextSibling)}function ko(){gn=_n=null,lt=!1}function Ud(t){Hn===null?Hn=[t]:Hn.push(t)}var Fx=bi.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bl=ar(null),Hl=null,Eo=null,Nd=null;function Id(){Nd=Eo=Hl=null}function Od(t){var e=Bl.current;at(Bl),t._currentValue=e}function Tf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Do(t,e){Hl=t,Nd=Eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},Eo===null){if(Hl===null)throw Error(J(308));Eo=t,Hl.dependencies={lanes:0,firstContext:t}}else Eo=Eo.next=t;return e}var Tr=null;function Fd(t){Tr===null?Tr=[t]:Tr.push(t)}function F_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Fd(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Fd(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}function ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,i){var r=t.updateQueue;Fi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,f=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=ft({},d,h);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);zr|=s,t.lanes=s,t.memoizedState=d}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var z_=new Fg.Component().refs;function wf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ki(t),o=Ei(i,r);o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,r),e!==null&&($n(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ki(t),o=Ei(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,r),e!==null&&($n(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Ki(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&($n(e,t,i,n),pl(e,t,i))}};function up(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,i)||!Ys(r,o):!0}function B_(t,e,n){var i=!1,r=nr,o=e.contextType;return typeof o=="object"&&o!==null?o=Dn(o):(r=an(e)?Or:Xt.current,i=e.contextTypes,o=(i=i!=null)?Fo(t,r):nr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function cp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Af(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=z_,kd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Dn(o):(o=an(e)?Or:Xt.current,r.context=Fo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(wf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mu.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===z_&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fp(t){var e=t._init;return e(t._payload)}function H_(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Zi(c,_),c.index=0,c.sibling=null,c}function o(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,x){return _===null||_.tag!==6?(_=uc(g,c.mode,x),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,x){var M=g.type;return M===po?f(c,_,g.props.children,x,g.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oi&&fp(M)===_.type)?(x=r(_,g.props),x.ref=cs(c,_,g),x.return=c,x):(x=xl(g.type,g.key,g.props,null,c.mode,x),x.ref=cs(c,_,g),x.return=c,x)}function u(c,_,g,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=cc(g,c.mode,x),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,x,M){return _===null||_.tag!==7?(_=br(g,c.mode,x,M),_.return=c,_):(_=r(_,g),_.return=c,_)}function d(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=uc(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:return g=xl(_.type,_.key,_.props,null,c.mode,g),g.ref=cs(c,null,_),g.return=c,g;case ho:return _=cc(_,c.mode,g),_.return=c,_;case Oi:var x=_._init;return d(c,x(_._payload),g)}if(Ss(_)||os(_))return _=br(_,c.mode,g,null),_.return=c,_;Da(c,_)}return null}function h(c,_,g,x){var M=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:a(c,_,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:return g.key===M?l(c,_,g,x):null;case ho:return g.key===M?u(c,_,g,x):null;case Oi:return M=g._init,h(c,_,M(g._payload),x)}if(Ss(g)||os(g))return M!==null?null:f(c,_,g,x,null);Da(c,g)}return null}function m(c,_,g,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(g)||null,a(_,c,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return c=c.get(x.key===null?g:x.key)||null,l(_,c,x,M);case ho:return c=c.get(x.key===null?g:x.key)||null,u(_,c,x,M);case Oi:var C=x._init;return m(c,_,g,C(x._payload),M)}if(Ss(x)||os(x))return c=c.get(g)||null,f(_,c,x,M,null);Da(_,x)}return null}function y(c,_,g,x){for(var M=null,C=null,w=_,D=_=0,E=null;w!==null&&D<g.length;D++){w.index>D?(E=w,w=null):E=w.sibling;var A=h(c,w,g[D],x);if(A===null){w===null&&(w=E);break}t&&w&&A.alternate===null&&e(c,w),_=o(A,_,D),C===null?M=A:C.sibling=A,C=A,w=E}if(D===g.length)return n(c,w),lt&&_r(c,D),M;if(w===null){for(;D<g.length;D++)w=d(c,g[D],x),w!==null&&(_=o(w,_,D),C===null?M=w:C.sibling=w,C=w);return lt&&_r(c,D),M}for(w=i(c,w);D<g.length;D++)E=m(w,c,D,g[D],x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?D:E.key),_=o(E,_,D),C===null?M=E:C.sibling=E,C=E);return t&&w.forEach(function(j){return e(c,j)}),lt&&_r(c,D),M}function v(c,_,g,x){var M=os(g);if(typeof M!="function")throw Error(J(150));if(g=M.call(g),g==null)throw Error(J(151));for(var C=M=null,w=_,D=_=0,E=null,A=g.next();w!==null&&!A.done;D++,A=g.next()){w.index>D?(E=w,w=null):E=w.sibling;var j=h(c,w,A.value,x);if(j===null){w===null&&(w=E);break}t&&w&&j.alternate===null&&e(c,w),_=o(j,_,D),C===null?M=j:C.sibling=j,C=j,w=E}if(A.done)return n(c,w),lt&&_r(c,D),M;if(w===null){for(;!A.done;D++,A=g.next())A=d(c,A.value,x),A!==null&&(_=o(A,_,D),C===null?M=A:C.sibling=A,C=A);return lt&&_r(c,D),M}for(w=i(c,w);!A.done;D++,A=g.next())A=m(w,c,D,A.value,x),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?D:A.key),_=o(A,_,D),C===null?M=A:C.sibling=A,C=A);return t&&w.forEach(function(Z){return e(c,Z)}),lt&&_r(c,D),M}function p(c,_,g,x){if(typeof g=="object"&&g!==null&&g.type===po&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:e:{for(var M=g.key,C=_;C!==null;){if(C.key===M){if(M=g.type,M===po){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oi&&fp(M)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=cs(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===po?(_=br(g.props.children,c.mode,x,g.key),_.return=c,c=_):(x=xl(g.type,g.key,g.props,null,c.mode,x),x.ref=cs(c,_,g),x.return=c,c=x)}return s(c);case ho:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=cc(g,c.mode,x),_.return=c,c=_}return s(c);case Oi:return C=g._init,p(c,_,C(g._payload),x)}if(Ss(g))return y(c,_,g,x);if(os(g))return v(c,_,g,x);Da(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=uc(g,c.mode,x),_.return=c,c=_),s(c)):n(c,_)}return p}var zo=H_(!0),V_=H_(!1),da={},oi=ar(da),Qs=ar(da),Js=ar(da);function wr(t){if(t===da)throw Error(J(174));return t}function zd(t,e){switch(nt(Js,e),nt(Qs,t),nt(oi,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}at(oi),nt(oi,e)}function Bo(){at(oi),at(Qs),at(Js)}function G_(t){wr(Js.current);var e=wr(oi.current),n=rf(e,t.type);e!==n&&(nt(Qs,t),nt(oi,n))}function Bd(t){Qs.current===t&&(at(oi),at(Qs))}var ut=ar(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ic=[];function Hd(){for(var t=0;t<ic.length;t++)ic[t]._workInProgressVersionPrimary=null;ic.length=0}var ml=bi.ReactCurrentDispatcher,rc=bi.ReactCurrentBatchConfig,kr=0,ct=null,Et=null,Rt=null,Wl=!1,Ds=!1,ea=0,kx=0;function Bt(){throw Error(J(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Gd(t,e,n,i,r,o){if(kr=o,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Vx:Gx,t=n(i,r),Ds){o=0;do{if(Ds=!1,ea=0,25<=o)throw Error(J(301));o+=1,Rt=Et=null,e.updateQueue=null,ml.current=Wx,t=n(i,r)}while(Ds)}if(ml.current=Xl,e=Et!==null&&Et.next!==null,kr=0,Rt=Et=ct=null,Wl=!1,e)throw Error(J(300));return t}function Wd(){var t=ea!==0;return ea=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Un(){if(Et===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,Et=t;else{if(t===null)throw Error(J(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ta(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=Un(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((kr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,ct.lanes|=f,zr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Yn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ct.lanes|=o,zr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sc(t){var e=Un(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Yn(o,e.memoizedState)||(rn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function W_(){}function X_(t,e){var n=ct,i=Un(),r=e(),o=!Yn(i.memoizedState,r);if(o&&(i.memoizedState=r,rn=!0),i=i.queue,Xd(Y_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,na(9,j_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(J(349));kr&30||$_(n,e,r)}return r}function $_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function j_(t,e,n,i){e.value=n,e.getSnapshot=i,q_(e)&&K_(t)}function Y_(t,e,n){return n(function(){q_(e)&&K_(t)})}function q_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function K_(t){var e=wi(t,1);e!==null&&$n(e,t,1,-1)}function dp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=Hx.bind(null,ct,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Z_(){return Un().memoizedState}function gl(t,e,n,i){var r=ei();ct.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function gu(t,e,n,i){var r=Un();i=i===void 0?null:i;var o=void 0;if(Et!==null){var s=Et.memoizedState;if(o=s.destroy,i!==null&&Vd(i,s.deps)){r.memoizedState=na(e,n,o,i);return}}ct.flags|=t,r.memoizedState=na(1|e,n,o,i)}function hp(t,e){return gl(8390656,8,t,e)}function Xd(t,e){return gu(2048,8,t,e)}function Q_(t,e){return gu(4,2,t,e)}function J_(t,e){return gu(4,4,t,e)}function ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tv(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,ev.bind(null,e,t),n)}function $d(){}function nv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function iv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rv(t,e,n){return kr&21?(Yn(n,e)||(n=a_(),ct.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function zx(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=rc.transition;rc.transition={};try{t(!1),e()}finally{qe=n,rc.transition=i}}function ov(){return Un().memoizedState}function Bx(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},sv(t))av(e,n);else if(n=F_(t,e,n,i),n!==null){var r=Zt();$n(n,t,i,r),lv(n,e,i)}}function Hx(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(sv(t))av(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,s)){var l=e.interleaved;l===null?(r.next=r,Fd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=F_(t,e,r,i),n!==null&&(r=Zt(),$n(n,t,i,r),lv(n,e,i))}}function sv(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function av(t,e){Ds=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}var Xl={readContext:Dn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Vx={readContext:Dn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:hp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Bx.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:dp,useDebugValue:$d,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=dp(!1),e=t[0];return t=zx.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=ei();if(lt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Lt===null)throw Error(J(349));kr&30||$_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,hp(Y_.bind(null,i,o,t),[t]),i.flags|=2048,na(9,j_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ei(),e=Lt.identifierPrefix;if(lt){var n=yi,i=vi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gx={readContext:Dn,useCallback:nv,useContext:Dn,useEffect:Xd,useImperativeHandle:tv,useInsertionEffect:Q_,useLayoutEffect:J_,useMemo:iv,useReducer:oc,useRef:Z_,useState:function(){return oc(ta)},useDebugValue:$d,useDeferredValue:function(t){var e=Un();return rv(e,Et.memoizedState,t)},useTransition:function(){var t=oc(ta)[0],e=Un().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:X_,useId:ov,unstable_isNewReconciler:!1},Wx={readContext:Dn,useCallback:nv,useContext:Dn,useEffect:Xd,useImperativeHandle:tv,useInsertionEffect:Q_,useLayoutEffect:J_,useMemo:iv,useReducer:sc,useRef:Z_,useState:function(){return sc(ta)},useDebugValue:$d,useDeferredValue:function(t){var e=Un();return Et===null?e.memoizedState=t:rv(e,Et.memoizedState,t)},useTransition:function(){var t=sc(ta)[0],e=Un().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:X_,useId:ov,unstable_isNewReconciler:!1};function Ho(t,e){try{var n="",i=e;do n+=vy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xx=typeof WeakMap=="function"?WeakMap:Map;function uv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,Ff=i),Cf(t,e)},n}function cv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Cf(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function pp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function mp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var $x=bi.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?V_(e,null,n,i):zo(e,t.child,n,i)}function _p(t,e,n,i,r){n=n.render;var o=e.ref;return Do(e,r),i=Gd(t,e,n,i,o,r),n=Wd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(lt&&n&&Ld(e),e.flags|=1,qt(t,e,i,r),e.child)}function vp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,fv(t,e,o,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(s,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=Zi(o,i),t.ref=e.ref,t.return=e,e.child=t}function fv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ys(o,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return bf(t,e,n,i,r)}function dv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(To,mn),mn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(To,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,nt(To,mn),mn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,nt(To,mn),mn|=i;return qt(t,e,r,n),e.child}function hv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bf(t,e,n,i,r){var o=an(n)?Or:Xt.current;return o=Fo(e,o),Do(e,r),n=Gd(t,e,n,i,o,r),i=Wd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(lt&&i&&Ld(e),e.flags|=1,qt(t,e,n,r),e.child)}function yp(t,e,n,i,r){if(an(n)){var o=!0;Fl(e)}else o=!1;if(Do(e,r),e.stateNode===null)_l(t,e),B_(e,n,i),Af(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=an(n)?Or:Xt.current,u=Fo(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&cp(e,s,i,u),Fi=!1;var h=e.memoizedState;s.state=h,Vl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||sn.current||Fi?(typeof f=="function"&&(wf(e,n,f,i),l=e.memoizedState),(a=Fi||up(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,k_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=an(n)?Or:Xt.current,l=Fo(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&cp(e,s,i,l),Fi=!1,h=e.memoizedState,s.state=h,Vl(e,i,s,r);var y=e.memoizedState;a!==d||h!==y||sn.current||Fi?(typeof m=="function"&&(wf(e,n,m,i),y=e.memoizedState),(u=Fi||up(e,n,u,i,h,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Rf(t,e,n,i,o,r)}function Rf(t,e,n,i,r,o){hv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&rp(e,n,!1),Ai(t,e,o);i=e.stateNode,$x.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=zo(e,t.child,null,o),e.child=zo(e,null,a,o)):qt(t,e,a,o),e.memoizedState=i.state,r&&rp(e,n,!0),e.child}function pv(t){var e=t.stateNode;e.pendingContext?ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ip(t,e.context,!1),zd(t,e.containerInfo)}function xp(t,e,n,i,r){return ko(),Ud(r),e.flags|=256,qt(t,e,n,i),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function mv(t,e,n){var i=e.pendingProps,r=ut.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return Mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=yu(s,i,0,null),t=br(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Lf(n),e.memoizedState=Pf,t):jd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jx(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Zi(a,o):(o=br(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Lf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Pf,i}return o=t.child,t=o.sibling,i=Zi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jd(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,i){return i!==null&&Ud(i),zo(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=ac(Error(J(422))),Ua(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=yu({mode:"visible",children:i.children},r,0,null),o=br(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&zo(e,t.child,null,s),e.child.memoizedState=Lf(s),e.memoizedState=Pf,o);if(!(e.mode&1))return Ua(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(J(419)),i=ac(o,i,void 0),Ua(t,e,s,i)}if(a=(s&t.childLanes)!==0,rn||a){if(i=Lt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,wi(t,r),$n(i,t,r,-1))}return Jd(),i=ac(Error(J(421))),Ua(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,gn=ji(r.nextSibling),_n=e,lt=!0,Hn=null,t!==null&&(wn[An++]=vi,wn[An++]=yi,wn[An++]=Fr,vi=t.id,yi=t.overflow,Fr=e),e=jd(e,i.children),e.flags|=4096,e)}function Sp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Tf(t.return,e,n)}function lc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function gv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(qt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,n,e);else if(t.tag===19)Sp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),lc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}lc(e,!0,n,null,o);break;case"together":lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yx(t,e,n){switch(e.tag){case 3:pv(e),ko();break;case 5:G_(e);break;case 1:an(e.type)&&Fl(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?mv(t,e,n):(nt(ut,ut.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return gv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,dv(t,e,n)}return Ai(t,e,n)}var _v,Df,vv,yv;_v=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};vv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(oi.current);var o=null;switch(n){case"input":r=Jc(t,r),i=Jc(t,i),o=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),o=[];break;case"textarea":r=nf(t,r),i=nf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}of(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qx(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return an(e.type)&&Ol(),Ht(e),null;case 3:return i=e.stateNode,Bo(),at(sn),at(Xt),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Bf(Hn),Hn=null))),Df(t,e),Ht(e),null;case 5:Bd(e);var r=wr(Js.current);if(n=e.type,t!==null&&e.stateNode!=null)vv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Ht(e),null}if(t=wr(oi.current),La(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ii]=e,i[Zs]=o,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Ms.length;r++)rt(Ms[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Ph(i,o),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},rt("invalid",i);break;case"textarea":Dh(i,o),rt("invalid",i)}of(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):Hs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&rt("scroll",i)}switch(n){case"input":Ea(i),Lh(i,o,!0);break;case"textarea":Ea(i),Uh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$g(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ii]=e,t[Zs]=i,_v(t,e,!1,!1),e.stateNode=t;e:{switch(s=sf(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ms.length;r++)rt(Ms[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Ph(t,i),r=Jc(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Dh(t,i),r=nf(t,i),rt("invalid",t);break;default:r=i}of(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?qg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vs(t,l):typeof l=="number"&&Vs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&rt("scroll",t):l!=null&&_d(t,o,l,s))}switch(n){case"input":Ea(t),Lh(t,i,!1);break;case"textarea":Ea(t),Uh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?bo(t,!!i.multiple,o,!1):i.defaultValue!=null&&bo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=wr(Js.current),wr(oi.current),La(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(o=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Ht(e),null;case 13:if(at(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&gn!==null&&e.mode&1&&!(e.flags&128))O_(),ko(),e.flags|=98560,o=!1;else if(o=La(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(J(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(J(317));o[ii]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),o=!1}else Hn!==null&&(Bf(Hn),Hn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Jd())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Bo(),Df(t,e),t===null&&qs(e.stateNode.containerInfo),Ht(e),null;case 10:return Od(e.type._context),Ht(e),null;case 17:return an(e.type)&&Ol(),Ht(e),null;case 19:if(at(ut),o=e.memoizedState,o===null)return Ht(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)fs(o,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Gl(t),s!==null){for(e.flags|=128,fs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}o.tail!==null&&gt()>Vo&&(e.flags|=128,i=!0,fs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!lt)return Ht(e),null}else 2*gt()-o.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,i=!0,fs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=gt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function Kx(t,e){switch(Dd(e),e.tag){case 1:return an(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bo(),at(sn),at(Xt),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return Bo(),null;case 10:return Od(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Na=!1,Wt=!1,Zx=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Uf(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Ep=!1;function Qx(t,e){if(gf=Dl,t=M_(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++f===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},Dl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,p=y.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:zn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(x){pt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return y=Ep,Ep=!1,y}function Us(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Uf(e,n,o)}r=r.next}while(r!==i)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xv(t){var e=t.alternate;e!==null&&(t.alternate=null,xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Zs],delete e[xf],delete e[Nx],delete e[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sv(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}var Ut=null,Bn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:Wt||Mo(n,e);case 6:var i=Ut,r=Bn;Ut=null,Ri(t,e,n),Ut=i,Bn=r,Ut!==null&&(Bn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Bn?(t=Ut,n=n.stateNode,t.nodeType===8?tc(t.parentNode,n):t.nodeType===1&&tc(t,n),$s(t)):tc(Ut,n.stateNode));break;case 4:i=Ut,r=Bn,Ut=n.stateNode.containerInfo,Bn=!0,Ri(t,e,n),Ut=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Uf(n,e,s),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Wt&&(Mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ri(t,e,n),Wt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zx),e.forEach(function(i){var r=aS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Bn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Bn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Ut===null)throw Error(J(160));Ev(o,s,r),Ut=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mv(e,t),e=e.sibling}function Mv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Qn(t),i&4){try{Us(3,t,t.return),_u(3,t)}catch(v){pt(t,t.return,v)}try{Us(5,t,t.return)}catch(v){pt(t,t.return,v)}}break;case 1:In(e,t),Qn(t),i&512&&n!==null&&Mo(n,n.return);break;case 5:if(In(e,t),Qn(t),i&512&&n!==null&&Mo(n,n.return),t.flags&32){var r=t.stateNode;try{Vs(r,"")}catch(v){pt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Wg(r,o),sf(a,s);var u=sf(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?qg(r,d):f==="dangerouslySetInnerHTML"?jg(r,d):f==="children"?Vs(r,d):_d(r,f,d,u)}switch(a){case"input":ef(r,o);break;case"textarea":Xg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?bo(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?bo(r,!!o.multiple,o.defaultValue,!0):bo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Zs]=o}catch(v){pt(t,t.return,v)}}break;case 6:if(In(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(v){pt(t,t.return,v)}}break;case 3:if(In(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(e.containerInfo)}catch(v){pt(t,t.return,v)}break;case 4:In(e,t),Qn(t);break;case 13:In(e,t),Qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=gt())),i&4&&Tp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||f,In(e,t),Wt=u):In(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:Us(4,h,h.return);break;case 1:Mo(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){pt(i,n,v)}}break;case 5:Mo(h,h.return);break;case 22:if(h.memoizedState!==null){Ap(d);continue}}m!==null?(m.return=h,pe=m):Ap(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yg("display",s))}catch(v){pt(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){pt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(e,t),Qn(t),i&4&&Tp(t);break;case 21:break;default:In(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sv(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vs(r,""),i.flags&=-33);var o=Mp(t);Of(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Mp(t);If(t,a,s);break;default:throw Error(J(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jx(t,e,n){pe=t,Tv(t)}function Tv(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Na;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Na;var u=Wt;if(Na=s,(Wt=l)&&!u)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?Cp(r):l!==null?(l.return=s,pe=l):Cp(r);for(;o!==null;)pe=o,Tv(o),o=o.sibling;pe=r,Na=a,Wt=u}wp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,pe=o):wp(t)}}function wp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||_u(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&lp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&$s(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Wt||e.flags&512&&Nf(e)}catch(h){pt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ap(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Cp(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var o=e.return;try{Nf(e)}catch(l){pt(e,o,l)}break;case 5:var s=e.return;try{Nf(e)}catch(l){pt(e,s,l)}}}catch(l){pt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var eS=Math.ceil,$l=bi.ReactCurrentDispatcher,Yd=bi.ReactCurrentOwner,Ln=bi.ReactCurrentBatchConfig,We=0,Lt=null,St=null,Ot=0,mn=0,To=ar(0),Mt=0,ia=null,zr=0,vu=0,qd=0,Ns=null,tn=null,Kd=0,Vo=1/0,pi=null,jl=!1,Ff=null,qi=null,Ia=!1,Hi=null,Yl=0,Is=0,kf=null,vl=-1,yl=0;function Zt(){return We&6?gt():vl!==-1?vl:vl=gt()}function Ki(t){return t.mode&1?We&2&&Ot!==0?Ot&-Ot:Fx.transition!==null?(yl===0&&(yl=a_()),yl):(t=qe,t!==0||(t=window.event,t=t===void 0?16:p_(t.type)),t):1}function $n(t,e,n,i){if(50<Is)throw Is=0,kf=null,Error(J(185));ua(t,n,i),(!(We&2)||t!==Lt)&&(t===Lt&&(!(We&2)&&(vu|=n),Mt===4&&zi(t,Ot)),ln(t,i),n===1&&We===0&&!(e.mode&1)&&(Vo=gt()+500,pu&&lr()))}function ln(t,e){var n=t.callbackNode;Fy(t,e);var i=Ll(t,t===Lt?Ot:0);if(i===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?Ox(bp.bind(null,t)):U_(bp.bind(null,t)),Dx(function(){!(We&6)&&lr()}),n=null;else{switch(l_(i)){case 1:n=Ed;break;case 4:n=o_;break;case 16:n=Pl;break;case 536870912:n=s_;break;default:n=Pl}n=Dv(n,wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wv(t,e){if(vl=-1,yl=0,We&6)throw Error(J(327));var n=t.callbackNode;if(Uo()&&t.callbackNode!==n)return null;var i=Ll(t,t===Lt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ql(t,i);else{e=i;var r=We;We|=2;var o=Cv();(Lt!==t||Ot!==e)&&(pi=null,Vo=gt()+500,Cr(t,e));do try{iS();break}catch(a){Av(t,a)}while(1);Id(),$l.current=o,We=r,St!==null?e=0:(Lt=null,Ot=0,e=Mt)}if(e!==0){if(e===2&&(r=ff(t),r!==0&&(i=r,e=zf(t,r))),e===1)throw n=ia,Cr(t,0),zi(t,i),ln(t,gt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!tS(r)&&(e=ql(t,i),e===2&&(o=ff(t),o!==0&&(i=o,e=zf(t,o))),e===1))throw n=ia,Cr(t,0),zi(t,i),ln(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:vr(t,tn,pi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=Kd+500-gt(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yf(vr.bind(null,t,tn,pi),e);break}vr(t,tn,pi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Xn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eS(i/1960))-i,10<i){t.timeoutHandle=yf(vr.bind(null,t,tn,pi),i);break}vr(t,tn,pi);break;case 5:vr(t,tn,pi);break;default:throw Error(J(329))}}}return ln(t,gt()),t.callbackNode===n?wv.bind(null,t):null}function zf(t,e){var n=Ns;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=tn,tn=n,e!==null&&Bf(e)),t}function Bf(t){tn===null?tn=t:tn.push.apply(tn,t)}function tS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Yn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~qd,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(We&6)throw Error(J(327));Uo();var e=Ll(t,0);if(!(e&1))return ln(t,gt()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=ff(t);i!==0&&(e=i,n=zf(t,i))}if(n===1)throw n=ia,Cr(t,0),zi(t,e),ln(t,gt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,tn,pi),ln(t,gt()),null}function Zd(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Vo=gt()+500,pu&&lr())}}function Br(t){Hi!==null&&Hi.tag===0&&!(We&6)&&Uo();var e=We;We|=1;var n=Ln.transition,i=qe;try{if(Ln.transition=null,qe=1,t)return t()}finally{qe=i,Ln.transition=n,We=e,!(We&6)&&lr()}}function Qd(){mn=To.current,at(To)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:Bo(),at(sn),at(Xt),Hd();break;case 5:Bd(i);break;case 4:Bo();break;case 13:at(ut);break;case 19:at(ut);break;case 10:Od(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(Lt=t,St=t=Zi(t.current,null),Ot=mn=e,Mt=0,ia=null,qd=vu=zr=0,tn=Ns=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Tr=null}return t}function Av(t,e){do{var n=St;try{if(Id(),ml.current=Xl,Wl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wl=!1}if(kr=0,Rt=Et=ct=null,Ds=!1,ea=0,Yd.current=null,n===null||n.return===null){Mt=1,ia=e,St=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=mp(s);if(m!==null){m.flags&=-257,gp(m,s,a,o,e),m.mode&1&&pp(o,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){pp(o,u,e),Jd();break e}l=Error(J(426))}}else if(lt&&a.mode&1){var p=mp(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),gp(p,s,a,o,e),Ud(Ho(l,a));break e}}o=l=Ho(l,a),Mt!==4&&(Mt=2),Ns===null?Ns=[o]:Ns.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=uv(o,l,e);ap(o,c);break e;case 1:a=l;var _=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qi===null||!qi.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=cv(o,a,e);ap(o,x);break e}}o=o.return}while(o!==null)}Rv(n)}catch(M){e=M,St===n&&n!==null&&(St=n=n.return);continue}break}while(1)}function Cv(){var t=$l.current;return $l.current=Xl,t===null?Xl:t}function Jd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Lt===null||!(zr&268435455)&&!(vu&268435455)||zi(Lt,Ot)}function ql(t,e){var n=We;We|=2;var i=Cv();(Lt!==t||Ot!==e)&&(pi=null,Cr(t,e));do try{nS();break}catch(r){Av(t,r)}while(1);if(Id(),We=n,$l.current=i,St!==null)throw Error(J(261));return Lt=null,Ot=0,Mt}function nS(){for(;St!==null;)bv(St)}function iS(){for(;St!==null&&!by();)bv(St)}function bv(t){var e=Lv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Rv(t):St=e,Yd.current=null}function Rv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=qx(n,e,mn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function vr(t,e,n){var i=qe,r=Ln.transition;try{Ln.transition=null,qe=1,rS(t,e,n,i)}finally{Ln.transition=r,qe=i}return null}function rS(t,e,n,i){do Uo();while(Hi!==null);if(We&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ky(t,o),t===Lt&&(St=Lt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,Dv(Pl,function(){return Uo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ln.transition,Ln.transition=null;var s=qe;qe=1;var a=We;We|=4,Yd.current=null,Qx(t,n),Mv(n,t),Tx(_f),Dl=!!gf,_f=gf=null,t.current=n,Jx(n),Ry(),We=a,qe=s,Ln.transition=o}else t.current=n;if(Ia&&(Ia=!1,Hi=t,Yl=r),o=t.pendingLanes,o===0&&(qi=null),Dy(n.stateNode),ln(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=Ff,Ff=null,t;return Yl&1&&t.tag!==0&&Uo(),o=t.pendingLanes,o&1?t===kf?Is++:(Is=0,kf=t):Is=0,lr(),null}function Uo(){if(Hi!==null){var t=l_(Yl),e=Ln.transition,n=qe;try{if(Ln.transition=null,qe=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Yl=0,We&6)throw Error(J(331));var r=We;for(We|=4,pe=t.current;pe!==null;){var o=pe,s=o.child;if(pe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:Us(8,f,o)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,m=f.return;if(xv(f),f===u){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}pe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,pe=s;else e:for(;pe!==null;){if(o=pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Us(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,pe=c;break e}pe=o.return}}var _=t.current;for(pe=_;pe!==null;){s=pe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,pe=g;else e:for(s=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_u(9,a)}}catch(M){pt(a,a.return,M)}if(a===s){pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,pe=x;break e}pe=a.return}}if(We=r,lr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(uu,t)}catch{}i=!0}return i}finally{qe=n,Ln.transition=e}}return!1}function Rp(t,e,n){e=Ho(n,e),e=uv(t,e,1),t=Yi(t,e,1),e=Zt(),t!==null&&(ua(t,1,e),ln(t,e))}function pt(t,e,n){if(t.tag===3)Rp(t,t,n);else for(;e!==null;){if(e.tag===3){Rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Ho(n,t),t=cv(e,t,1),e=Yi(e,t,1),t=Zt(),e!==null&&(ua(e,1,t),ln(e,t));break}}e=e.return}}function oS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ot&n)===n&&(Mt===4||Mt===3&&(Ot&130023424)===Ot&&500>gt()-Kd?Cr(t,0):qd|=n),ln(t,e)}function Pv(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=Zt();t=wi(t,e),t!==null&&(ua(t,e,n),ln(t,n))}function sS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pv(t,n)}function aS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Pv(t,n)}var Lv;Lv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Yx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,lt&&e.flags&1048576&&N_(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Fo(e,Xt.current);Do(e,n),r=Gd(null,e,i,t,r,n);var o=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(o=!0,Fl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kd(e),r.updater=mu,e.stateNode=r,r._reactInternals=e,Af(e,i,t,n),e=Rf(null,e,i,!0,o,n)):(e.tag=0,lt&&o&&Ld(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uS(i),t=zn(i,t),r){case 0:e=bf(null,e,i,t,n);break e;case 1:e=yp(null,e,i,t,n);break e;case 11:e=_p(null,e,i,t,n);break e;case 14:e=vp(null,e,i,zn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),yp(t,e,i,r,n);case 3:e:{if(pv(e),t===null)throw Error(J(387));i=e.pendingProps,o=e.memoizedState,r=o.element,k_(t,e),Vl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ho(Error(J(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Ho(Error(J(424)),e),e=xp(t,e,i,n,r);break e}else for(gn=ji(e.stateNode.containerInfo.firstChild),_n=e,lt=!0,Hn=null,n=V_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),i===r){e=Ai(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return G_(e),t===null&&Mf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,vf(i,r)?s=null:o!==null&&vf(i,o)&&(e.flags|=32),hv(t,e),qt(t,e,s,n),e.child;case 6:return t===null&&Mf(e),null;case 13:return mv(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zo(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),_p(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,nt(Bl,i._currentValue),i._currentValue=s,o!==null)if(Yn(o.value,s)){if(o.children===r.children&&!sn.current){e=Ai(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Tf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(J(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Tf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Do(e,n),r=Dn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),vp(t,e,i,r,n);case 15:return fv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),_l(t,e),e.tag=1,an(i)?(t=!0,Fl(e)):t=!1,Do(e,n),B_(e,i,r),Af(e,i,r,n),Rf(null,e,i,!0,t,n);case 19:return gv(t,e,n);case 22:return dv(t,e,n)}throw Error(J(156,e.tag))};function Dv(t,e){return r_(t,e)}function lS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new lS(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uS(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===xd)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")eh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case po:return br(n.children,r,o,e);case vd:s=8,r|=8;break;case qc:return t=Pn(12,n,e,r|2),t.elementType=qc,t.lanes=o,t;case Kc:return t=Pn(13,n,e,r),t.elementType=Kc,t.lanes=o,t;case Zc:return t=Pn(19,n,e,r),t.elementType=Zc,t.lanes=o,t;case Hg:return yu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zg:s=10;break e;case Bg:s=9;break e;case yd:s=11;break e;case xd:s=14;break e;case Oi:s=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Pn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function br(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function yu(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Hg,t.lanes=n,t.stateNode={isHidden:!1},t}function uc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function cc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wu(0),this.expirationTimes=Wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,o,s,a,l){return t=new cS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Pn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(o),t}function fS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return nr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(an(n))return D_(t,n,e)}return e}function Nv(t,e,n,i,r,o,s,a,l){return t=th(n,i,!0,t,r,o,s,a,l),t.context=Uv(null),n=t.current,i=Zt(),r=Ki(n),o=Ei(i,r),o.callback=e??null,Yi(n,o,r),t.current.lanes=r,ua(t,r,i),ln(t,i),t}function xu(t,e,n,i){var r=e.current,o=Zt(),s=Ki(r);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,s),t!==null&&($n(t,r,s,o),pl(t,r,s)),s}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Pp(t,e),(t=t.alternate)&&Pp(t,e)}function dS(){return null}var Iv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}Su.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));xu(t,e,null,null)};Su.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){xu(null,t,null,null)}),e[Ti]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=f_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&h_(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function hS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Kl(s);o.call(u)}}var s=Nv(e,i,t,0,null,!1,!1,"",Lp);return t._reactRootContainer=s,t[Ti]=s.current,qs(t.nodeType===8?t.parentNode:t),Br(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Kl(l);a.call(u)}}var l=th(t,0,!1,null,null,!1,!1,"",Lp);return t._reactRootContainer=l,t[Ti]=l.current,qs(t.nodeType===8?t.parentNode:t),Br(function(){xu(e,l,n,i)}),l}function Mu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Kl(s);a.call(l)}}xu(e,s,t,r)}else s=hS(n,e,t,r,i);return Kl(s)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Es(e.pendingLanes);n!==0&&(Md(e,n|1),ln(e,gt()),!(We&6)&&(Vo=gt()+500,lr()))}break;case 13:Br(function(){var i=wi(t,1);if(i!==null){var r=Zt();$n(i,t,1,r)}}),nh(t,1)}};Td=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=Zt();$n(e,t,134217728,n)}nh(t,134217728)}};c_=function(t){if(t.tag===13){var e=Ki(t),n=wi(t,e);if(n!==null){var i=Zt();$n(n,t,e,i)}nh(t,e)}};f_=function(){return qe};d_=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hu(i);if(!r)throw Error(J(90));Gg(i),ef(i,r)}}}break;case"textarea":Xg(t,n);break;case"select":e=n.value,e!=null&&bo(t,!!n.multiple,e,!1)}};Qg=Zd;Jg=Br;var pS={usingClientEntryPoint:!1,Events:[fa,vo,hu,Kg,Zg,Zd]},ds={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mS={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n_(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||dS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{uu=Oa.inject(mS),ri=Oa}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(J(200));return fS(t,e,null,n)};Sn.createRoot=function(t,e){if(!rh(t))throw Error(J(299));var n=!1,i="",r=Iv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,qs(t.nodeType===8?t.parentNode:t),new ih(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=n_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Br(t)};Sn.hydrate=function(t,e,n){if(!Eu(e))throw Error(J(200));return Mu(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Iv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,r,!1,o,s),t[Ti]=e.current,qs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Su(e)};Sn.render=function(t,e,n){if(!Eu(e))throw Error(J(200));return Mu(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(J(40));return t._reactRootContainer?(Br(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};Sn.unstable_batchedUpdates=Zd;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Eu(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Mu(t,e,n,!1,i)};Sn.version="18.2.0-next-9e3b772b8-20220608";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),Ng.exports=Sn;var gS=Ng.exports,Dp=gS;jc.createRoot=Dp.createRoot,jc.hydrateRoot=Dp.hydrateRoot;var on=function(){return on=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},on.apply(this,arguments)};function Zl(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var ot="-ms-",Os="-moz-",je="-webkit-",Fv="comm",Tu="rule",oh="decl",_S="@import",kv="@keyframes",vS="@layer",yS=Math.abs,sh=String.fromCharCode,Hf=Object.assign;function xS(t,e){return Pt(t,0)^45?(((e<<2^Pt(t,0))<<2^Pt(t,1))<<2^Pt(t,2))<<2^Pt(t,3):0}function zv(t){return t.trim()}function mi(t,e){return(t=e.exec(t))?t[0]:t}function Oe(t,e,n){return t.replace(e,n)}function Sl(t,e){return t.indexOf(e)}function Pt(t,e){return t.charCodeAt(e)|0}function Go(t,e,n){return t.slice(e,n)}function ti(t){return t.length}function Bv(t){return t.length}function Ts(t,e){return e.push(t),t}function SS(t,e){return t.map(e).join("")}function Up(t,e){return t.filter(function(n){return!mi(n,e)})}var wu=1,Wo=1,Hv=0,Nn=0,xt=0,ts="";function Au(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:wu,column:Wo,length:s,return:"",siblings:a}}function Ii(t,e){return Hf(Au("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function jr(t){for(;t.root;)t=Ii(t.root,{children:[t]});Ts(t,t.siblings)}function ES(){return xt}function MS(){return xt=Nn>0?Pt(ts,--Nn):0,Wo--,xt===10&&(Wo=1,wu--),xt}function jn(){return xt=Nn<Hv?Pt(ts,Nn++):0,Wo++,xt===10&&(Wo=1,wu++),xt}function Rr(){return Pt(ts,Nn)}function El(){return Nn}function Cu(t,e){return Go(ts,t,e)}function Vf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function TS(t){return wu=Wo=1,Hv=ti(ts=t),Nn=0,[]}function wS(t){return ts="",t}function fc(t){return zv(Cu(Nn-1,Gf(t===91?t+2:t===40?t+1:t)))}function AS(t){for(;(xt=Rr())&&xt<33;)jn();return Vf(t)>2||Vf(xt)>3?"":" "}function CS(t,e){for(;--e&&jn()&&!(xt<48||xt>102||xt>57&&xt<65||xt>70&&xt<97););return Cu(t,El()+(e<6&&Rr()==32&&jn()==32))}function Gf(t){for(;jn();)switch(xt){case t:return Nn;case 34:case 39:t!==34&&t!==39&&Gf(xt);break;case 40:t===41&&Gf(t);break;case 92:jn();break}return Nn}function bS(t,e){for(;jn()&&t+xt!==47+10;)if(t+xt===42+42&&Rr()===47)break;return"/*"+Cu(e,Nn-1)+"*"+sh(t===47?t:jn())}function RS(t){for(;!Vf(Rr());)jn();return Cu(t,Nn)}function PS(t){return wS(Ml("",null,null,null,[""],t=TS(t),0,[0],t))}function Ml(t,e,n,i,r,o,s,a,l){for(var u=0,f=0,d=s,h=0,m=0,y=0,v=1,p=1,c=1,_=0,g="",x=r,M=o,C=i,w=g;p;)switch(y=_,_=jn()){case 40:if(y!=108&&Pt(w,d-1)==58){Sl(w+=Oe(fc(_),"&","&\f"),"&\f")!=-1&&(c=-1);break}case 34:case 39:case 91:w+=fc(_);break;case 9:case 10:case 13:case 32:w+=AS(y);break;case 92:w+=CS(El()-1,7);continue;case 47:switch(Rr()){case 42:case 47:Ts(LS(bS(jn(),El()),e,n,l),l);break;default:w+="/"}break;case 123*v:a[u++]=ti(w)*c;case 125*v:case 59:case 0:switch(_){case 0:case 125:p=0;case 59+f:c==-1&&(w=Oe(w,/\f/g,"")),m>0&&ti(w)-d&&Ts(m>32?Ip(w+";",i,n,d-1,l):Ip(Oe(w," ","")+";",i,n,d-2,l),l);break;case 59:w+=";";default:if(Ts(C=Np(w,e,n,u,f,r,a,g,x=[],M=[],d,o),o),_===123)if(f===0)Ml(w,e,C,C,x,o,d,a,M);else switch(h===99&&Pt(w,3)===110?100:h){case 100:case 108:case 109:case 115:Ml(t,C,C,i&&Ts(Np(t,C,C,0,0,r,a,g,r,x=[],d,M),M),r,M,d,a,i?x:M);break;default:Ml(w,C,C,C,[""],M,0,a,M)}}u=f=m=0,v=c=1,g=w="",d=s;break;case 58:d=1+ti(w),m=y;default:if(v<1){if(_==123)--v;else if(_==125&&v++==0&&MS()==125)continue}switch(w+=sh(_),_*v){case 38:c=f>0?1:(w+="\f",-1);break;case 44:a[u++]=(ti(w)-1)*c,c=1;break;case 64:Rr()===45&&(w+=fc(jn())),h=Rr(),f=d=ti(g=w+=RS(El())),_++;break;case 45:y===45&&ti(w)==2&&(v=0)}}return o}function Np(t,e,n,i,r,o,s,a,l,u,f,d){for(var h=r-1,m=r===0?o:[""],y=Bv(m),v=0,p=0,c=0;v<i;++v)for(var _=0,g=Go(t,h+1,h=yS(p=s[v])),x=t;_<y;++_)(x=zv(p>0?m[_]+" "+g:Oe(g,/&\f/g,m[_])))&&(l[c++]=x);return Au(t,e,n,r===0?Tu:a,l,u,f,d)}function LS(t,e,n,i){return Au(t,e,n,Fv,sh(ES()),Go(t,2,-2),0,i)}function Ip(t,e,n,i,r){return Au(t,e,n,oh,Go(t,0,i),Go(t,i+1,-1),i,r)}function Vv(t,e,n){switch(xS(t,e)){case 5103:return je+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+t+t;case 4789:return Os+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return je+t+Os+t+ot+t+t;case 5936:switch(Pt(t,e+11)){case 114:return je+t+ot+Oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return je+t+ot+Oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return je+t+ot+Oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return je+t+ot+t+t;case 6165:return je+t+ot+"flex-"+t+t;case 5187:return je+t+Oe(t,/(\w+).+(:[^]+)/,je+"box-$1$2"+ot+"flex-$1$2")+t;case 5443:return je+t+ot+"flex-item-"+Oe(t,/flex-|-self/g,"")+(mi(t,/flex-|baseline/)?"":ot+"grid-row-"+Oe(t,/flex-|-self/g,""))+t;case 4675:return je+t+ot+"flex-line-pack"+Oe(t,/align-content|flex-|-self/g,"")+t;case 5548:return je+t+ot+Oe(t,"shrink","negative")+t;case 5292:return je+t+ot+Oe(t,"basis","preferred-size")+t;case 6060:return je+"box-"+Oe(t,"-grow","")+je+t+ot+Oe(t,"grow","positive")+t;case 4554:return je+Oe(t,/([^-])(transform)/g,"$1"+je+"$2")+t;case 6187:return Oe(Oe(Oe(t,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),t,"")+t;case 5495:case 3959:return Oe(t,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return Oe(Oe(t,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+t+t;case 4200:if(!mi(t,/flex-|baseline/))return ot+"grid-column-align"+Go(t,e)+t;break;case 2592:case 3360:return ot+Oe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,mi(i.props,/grid-\w+-end/)})?~Sl(t+(n=n[e].value),"span")?t:ot+Oe(t,"-start","")+t+ot+"grid-row-span:"+(~Sl(n,"span")?mi(n,/\d+/):+mi(n,/\d+/)-+mi(t,/\d+/))+";":ot+Oe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return mi(i.props,/grid-\w+-start/)})?t:ot+Oe(Oe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Oe(t,/(.+)-inline(.+)/,je+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ti(t)-1-e>6)switch(Pt(t,e+1)){case 109:if(Pt(t,e+4)!==45)break;case 102:return Oe(t,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+Os+(Pt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Sl(t,"stretch")?Vv(Oe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Oe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,u){return ot+r+":"+o+u+(s?ot+r+"-span:"+(a?l:+l-+o)+u:"")+t});case 4949:if(Pt(t,e+6)===121)return Oe(t,":",":"+je)+t;break;case 6444:switch(Pt(t,Pt(t,14)===45?18:11)){case 120:return Oe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(Pt(t,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+ot+"$2box$3")+t;case 100:return Oe(t,":",":"+ot)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(t,"scroll-","scroll-snap-")+t}return t}function Ql(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function DS(t,e,n,i){switch(t.type){case vS:if(t.children.length)break;case _S:case oh:return t.return=t.return||t.value;case Fv:return"";case kv:return t.return=t.value+"{"+Ql(t.children,i)+"}";case Tu:if(!ti(t.value=t.props.join(",")))return""}return ti(n=Ql(t.children,i))?t.return=t.value+"{"+n+"}":""}function US(t){var e=Bv(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function NS(t){return function(e){e.root||(e=e.return)&&t(e)}}function IS(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case oh:t.return=Vv(t.value,t.length,n);return;case kv:return Ql([Ii(t,{value:Oe(t.value,"@","@"+je)})],i);case Tu:if(t.length)return SS(n=t.props,function(r){switch(mi(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jr(Ii(t,{props:[Oe(r,/:(read-\w+)/,":"+Os+"$1")]})),jr(Ii(t,{props:[r]})),Hf(t,{props:Up(n,i)});break;case"::placeholder":jr(Ii(t,{props:[Oe(r,/:(plac\w+)/,":"+je+"input-$1")]})),jr(Ii(t,{props:[Oe(r,/:(plac\w+)/,":"+Os+"$1")]})),jr(Ii(t,{props:[Oe(r,/:(plac\w+)/,ot+"input-$1")]})),jr(Ii(t,{props:[r]})),Hf(t,{props:Up(n,i)});break}return""})}}var OS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ah=typeof window<"u"&&"HTMLElement"in window,FS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),bu=Object.freeze([]),$o=Object.freeze({});function kS(t,e,n){return n===void 0&&(n=$o),t.theme!==n.theme&&t.theme||e||n.theme}var Gv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,BS=/(^-|-$)/g;function Op(t){return t.replace(zS,"-").replace(BS,"")}var HS=/(a)(d)/gi,Fp=function(t){return String.fromCharCode(t+(t>25?39:97))};function Wf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Fp(e%52)+n;return(Fp(e%52)+n).replace(HS,"$1-$2")}var dc,wo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Wv=function(t){return wo(5381,t)};function VS(t){return Wf(Wv(t)>>>0)}function GS(t){return t.displayName||t.name||"Component"}function hc(t){return typeof t=="string"&&!0}var Xv=typeof Symbol=="function"&&Symbol.for,$v=Xv?Symbol.for("react.memo"):60115,WS=Xv?Symbol.for("react.forward_ref"):60112,XS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$S={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jS=((dc={})[WS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dc[$v]=jv,dc);function kp(t){return("type"in(e=t)&&e.type.$$typeof)===$v?jv:"$$typeof"in t?jS[t.$$typeof]:XS;var e}var YS=Object.defineProperty,qS=Object.getOwnPropertyNames,zp=Object.getOwnPropertySymbols,KS=Object.getOwnPropertyDescriptor,ZS=Object.getPrototypeOf,Bp=Object.prototype;function Yv(t,e,n){if(typeof e!="string"){if(Bp){var i=ZS(e);i&&i!==Bp&&Yv(t,i,n)}var r=qS(e);zp&&(r=r.concat(zp(e)));for(var o=kp(t),s=kp(e),a=0;a<r.length;++a){var l=r[a];if(!(l in $S||n&&n[l]||s&&l in s||o&&l in o)){var u=KS(e,l);try{YS(t,l,u)}catch{}}}}return t}function jo(t){return typeof t=="function"}function lh(t){return typeof t=="object"&&"styledComponentId"in t}function Ar(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Hp(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function ra(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Xf(t,e,n){if(n===void 0&&(n=!1),!n&&!ra(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Xf(t[i],e[i]);else if(ra(e))for(var i in e)t[i]=Xf(t[i],e[i]);return t}function uh(t,e){Object.defineProperty(t,"toString",{value:e})}function ha(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var QS=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;e>=o;)if((o<<=1)<0)throw ha(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},t}(),Tl=new Map,Jl=new Map,wl=1,Fa=function(t){if(Tl.has(t))return Tl.get(t);for(;Jl.has(wl);)wl++;var e=wl++;return Tl.set(t,e),Jl.set(e,t),e},JS=function(t,e){wl=e+1,Tl.set(t,e),Jl.set(e,t)},eE="style[".concat(Xo,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),tE=new RegExp("^".concat(Xo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nE=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},iE=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(tE);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(JS(f,u),nE(t,f,l[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}};function rE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qv=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Xo,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(Xo,"active"),i.setAttribute("data-styled-version","6.1.1");var s=rE();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},oE=function(){function t(e){this.element=qv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw ha(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),sE=function(){function t(e){this.element=qv(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),aE=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Vp=ah,lE={isServer:!ah,useCSSOMInjection:!FS},Kv=function(){function t(e,n,i){e===void 0&&(e=$o),n===void 0&&(n={});var r=this;this.options=on(on({},lE),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&ah&&Vp&&(Vp=!1,function(o){for(var s=document.querySelectorAll(eE),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Xo)!=="active"&&(iE(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),uh(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var h=function(c){return Jl.get(c)}(d);if(h===void 0)return"continue";var m=o.names.get(h),y=s.getGroup(d);if(m===void 0||y.length===0)return"continue";var v="".concat(Xo,".g").concat(d,'[id="').concat(h,'"]'),p="";m!==void 0&&m.forEach(function(c){c.length>0&&(p+="".concat(c,","))}),l+="".concat(y).concat(v,'{content:"').concat(p,'"}').concat(`/*!sc*/
`)},f=0;f<a;f++)u(f);return l}(r)})}return t.registerId=function(e){return Fa(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(on(on({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new aE(r):i?new oE(r):new sE(r)}(this.options),new QS(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Fa(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Fa(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Fa(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),uE=/&/g,cE=/^\s*\/\/.*$/gm;function Zv(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Zv(n.children,e)),n})}function fE(t){var e,n,i,r=t===void 0?$o:t,o=r.options,s=o===void 0?$o:o,a=r.plugins,l=a===void 0?bu:a,u=function(h,m,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):h},f=l.slice();f.push(function(h){h.type===Tu&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(uE,n).replace(i,u))}),s.prefix&&f.push(IS),f.push(DS);var d=function(h,m,y,v){m===void 0&&(m=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,n=m,i=new RegExp("\\".concat(n,"\\b"),"g");var p=h.replace(cE,""),c=PS(y||m?"".concat(y," ").concat(m," { ").concat(p," }"):p);s.namespace&&(c=Zv(c,s.namespace));var _=[];return Ql(c,US(f.concat(NS(function(g){return _.push(g)})))),_};return d.hash=l.length?l.reduce(function(h,m){return m.name||ha(15),wo(h,m.name)},5381).toString():"",d}var dE=new Kv,$f=fE(),Qv=Bs.createContext({shouldForwardProp:void 0,styleSheet:dE,stylis:$f});Qv.Consumer;Bs.createContext(void 0);function Gp(){return Ir.useContext(Qv)}var hE=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=$f);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,uh(this,function(){throw ha(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=$f),this.name+e.hash},t}(),pE=function(t){return t>="A"&&t<="Z"};function Wp(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;pE(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var Jv=function(t){return t==null||t===!1||t===""},e0=function(t){var e,n,i=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!Jv(o)&&(Array.isArray(o)&&o.isCss||jo(o)?i.push("".concat(Wp(r),":"),o,";"):ra(o)?i.push.apply(i,Zl(Zl(["".concat(r," {")],e0(o),!1),["}"],!1)):i.push("".concat(Wp(r),": ").concat((e=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in OS||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Pr(t,e,n,i){if(Jv(t))return[];if(lh(t))return[".".concat(t.styledComponentId)];if(jo(t)){if(!jo(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return Pr(r,e,n,i)}var o;return t instanceof hE?n?(t.inject(n,i),[t.getName(i)]):[t]:ra(t)?e0(t):Array.isArray(t)?Array.prototype.concat.apply(bu,t.map(function(s){return Pr(s,e,n,i)})):[t.toString()]}function mE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(jo(n)&&!lh(n))return!1}return!0}var gE=Wv("6.1.1"),_E=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&mE(e),this.componentId=n,this.baseHash=wo(gE,n),this.baseStyle=i,Kv.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Ar(r,this.staticRulesId);else{var o=Hp(Pr(this.rules,e,n,i)),s=Wf(wo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=Ar(r,s),this.staticRulesId=s}else{for(var l=wo(this.baseHash,i.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var h=Hp(Pr(d,e,n,i));l=wo(l,h+f),u+=h}}if(u){var m=Wf(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,i(u,".".concat(m),void 0,this.componentId)),r=Ar(r,m)}}return r},t}(),t0=Bs.createContext(void 0);t0.Consumer;var pc={};function vE(t,e,n){var i=lh(t),r=t,o=!hc(t),s=e.attrs,a=s===void 0?bu:s,l=e.componentId,u=l===void 0?function(x,M){var C=typeof x!="string"?"sc":Op(x);pc[C]=(pc[C]||0)+1;var w="".concat(C,"-").concat(VS("6.1.1"+C+pc[C]));return M?"".concat(M,"-").concat(w):w}(e.displayName,e.parentComponentId):l,f=e.displayName,d=f===void 0?function(x){return hc(x)?"styled.".concat(x):"Styled(".concat(GS(x),")")}(t):f,h=e.displayName&&e.componentId?"".concat(Op(e.displayName),"-").concat(e.componentId):e.componentId||u,m=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(i&&r.shouldForwardProp){var v=r.shouldForwardProp;if(e.shouldForwardProp){var p=e.shouldForwardProp;y=function(x,M){return v(x,M)&&p(x,M)}}else y=v}var c=new _E(n,h,i?r.componentStyle:void 0);function _(x,M){return function(C,w,D){var E=C.attrs,A=C.componentStyle,j=C.defaultProps,Z=C.foldedComponentIds,Q=C.styledComponentId,L=C.target,X=Bs.useContext(t0),K=Gp(),$=C.shouldForwardProp||K.shouldForwardProp,N=function(ae,ce,ge){for(var we,ye=on(on({},ce),{className:void 0,theme:ge}),Re=0;Re<ae.length;Re+=1){var Qe=jo(we=ae[Re])?we(ye):we;for(var Te in Qe)ye[Te]=Te==="className"?Ar(ye[Te],Qe[Te]):Te==="style"?on(on({},ye[Te]),Qe[Te]):Qe[Te]}return ce.className&&(ye.className=Ar(ye.className,ce.className)),ye}(E,w,kS(w,X,j)||$o),z=N.as||L,F={};for(var R in N)N[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?F.as=N.forwardedAs:$&&!$(R,z)||(F[R]=N[R]));var I=function(ae,ce){var ge=Gp(),we=ae.generateAndInjectStyles(ce,ge.styleSheet,ge.stylis);return we}(A,N),le=Ar(Z,Q);return I&&(le+=" "+I),N.className&&(le+=" "+N.className),F[hc(z)&&!Gv.has(z)?"class":"className"]=le,F.ref=D,Ir.createElement(z,F)}(g,x,M)}_.displayName=d;var g=Bs.forwardRef(_);return g.attrs=m,g.componentStyle=c,g.displayName=d,g.shouldForwardProp=y,g.foldedComponentIds=i?Ar(r.foldedComponentIds,r.styledComponentId):"",g.styledComponentId=h,g.target=i?r.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=i?function(M){for(var C=[],w=1;w<arguments.length;w++)C[w-1]=arguments[w];for(var D=0,E=C;D<E.length;D++)Xf(M,E[D],!0);return M}({},r.defaultProps,x):x}}),uh(g,function(){return".".concat(g.styledComponentId)}),o&&Yv(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Xp(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var $p=function(t){return Object.assign(t,{isCss:!0})};function yE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(jo(t)||ra(t)){var i=t;return $p(Pr(Xp(bu,Zl([i],e,!0))))}var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Pr(r):$p(Pr(Xp(r,e)))}function jf(t,e,n){if(n===void 0&&(n=$o),!e)throw ha(1,e);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,yE.apply(void 0,Zl([r],o,!1)))};return i.attrs=function(r){return jf(t,e,on(on({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return jf(t,e,on(on({},n),r))},i}var n0=function(t){return jf(vE,t)},i0=n0;Gv.forEach(function(t){i0[t]=n0(t)});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="158",xE=0,jp=1,SE=2,r0=1,EE=2,hi=3,ir=0,un=1,_i=2,Qi=0,No=1,Yp=2,qp=3,Kp=4,ME=5,Sr=100,TE=101,wE=102,Zp=103,Qp=104,AE=200,CE=201,bE=202,RE=203,Yf=204,qf=205,PE=206,LE=207,DE=208,UE=209,NE=210,IE=211,OE=212,FE=213,kE=214,zE=0,BE=1,HE=2,eu=3,VE=4,GE=5,WE=6,XE=7,o0=0,$E=1,jE=2,Ji=0,YE=1,qE=2,KE=3,ZE=4,QE=5,s0=300,Yo=301,qo=302,Kf=303,Zf=304,Ru=306,Qf=1e3,Gn=1001,Jf=1002,Kt=1003,Jp=1004,mc=1005,Cn=1006,JE=1007,oa=1008,er=1009,eM=1010,tM=1011,fh=1012,a0=1013,Vi=1014,Gi=1015,sa=1016,l0=1017,u0=1018,Lr=1020,nM=1021,Wn=1023,iM=1024,rM=1025,Dr=1026,Ko=1027,oM=1028,c0=1029,sM=1030,f0=1031,d0=1033,gc=33776,_c=33777,vc=33778,yc=33779,em=35840,tm=35841,nm=35842,im=35843,aM=36196,rm=37492,om=37496,sm=37808,am=37809,lm=37810,um=37811,cm=37812,fm=37813,dm=37814,hm=37815,pm=37816,mm=37817,gm=37818,_m=37819,vm=37820,ym=37821,xc=36492,xm=36494,Sm=36495,lM=36283,Em=36284,Mm=36285,Tm=36286,h0=3e3,Ur=3001,uM=3200,cM=3201,fM=0,dM=1,Rn="",Nt="srgb",Ci="srgb-linear",dh="display-p3",Pu="display-p3-linear",tu="linear",st="srgb",nu="rec709",iu="p3",Yr=7680,wm=519,hM=512,pM=513,mM=514,gM=515,_M=516,vM=517,yM=518,xM=519,Am=35044,Cm="300 es",ed=1035,xi=2e3,ru=2001;class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,td=180/Math.PI;function pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function SM(t,e){return(t%e+e)%e}function Ec(t,e,n){return(1-n)*t+n*e}function bm(t){return(t&t-1)===0&&t!==0}function nd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,o,s,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],y=i[8],v=r[0],p=r[3],c=r[6],_=r[1],g=r[4],x=r[7],M=r[2],C=r[5],w=r[8];return o[0]=s*v+a*_+l*M,o[3]=s*p+a*g+l*C,o[6]=s*c+a*x+l*w,o[1]=u*v+f*_+d*M,o[4]=u*p+f*g+d*C,o[7]=u*c+f*x+d*w,o[2]=h*v+m*_+y*M,o[5]=h*p+m*g+y*C,o[8]=h*c+m*x+y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*s-a*u,h=a*l-f*o,m=u*o-s*l,y=n*d+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=d*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*s)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new Be;function p0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ou(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function EM(){const t=ou("canvas");return t.style.display="block",t}const Rm={};function Fs(t){t in Rm||(Rm[t]=!0,console.warn(t))}const Pm=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lm=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[Ci]:{transfer:tu,primaries:nu,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:st,primaries:nu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pu]:{transfer:tu,primaries:iu,toReference:t=>t.applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(Pm)},[dh]:{transfer:st,primaries:iu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(Pm).convertLinearToSRGB()}},MM=new Set([Ci,Pu]),Ze={enabled:!0,_workingColorSpace:Ci,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!MM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ka[e].toReference,r=ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ka[t].primaries},getTransfer:function(t){return t===Rn?tu:ka[t].transfer}};function Io(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class m0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=ou("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ou("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Io(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Io(n[i]/255)*255):n[i]=Io(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TM=0;class g0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(wc(r[s].image)):o.push(wc(r[s]))}else o=wc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?m0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wM=0;class vn extends ns{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Gn,r=Gn,o=Cn,s=oa,a=Wn,l=er,u=vn.DEFAULT_ANISOTROPY,f=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=pa(),this.name="",this.source=new g0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Ur?Nt:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qf:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qf:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Ur:h0}set encoding(e){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Nt:Rn}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=s0;vn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],y=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(y+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(m+1)/2,M=(c+1)/2,C=(f+h)/4,w=(d+v)/4,D=(y+p)/4;return g>x&&g>M?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=C/i,o=w/i):x>M?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=C/r,o=D/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=w/o,r=D/o),this.set(i,r,o,n),this}let _=Math.sqrt((p-y)*(p-y)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-y)/_,this.y=(d-v)/_,this.z=(h-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends ns{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Nt:Rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new g0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends AM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _0 extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class CM extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],y=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=v;return}if(d!==v||l!==h||u!==m||f!==y){let p=1-a;const c=l*h+u*m+f*y+d*v,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const M=Math.sqrt(g),C=Math.atan2(M,c*_);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const x=a*_;if(l=l*p+h*x,u=u*p+m*x,f=f*p+y*x,d=d*p+v*x,p===1-a){const M=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=M,u*=M,f*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s],h=o[s+1],m=o[s+2],y=o[s+3];return e[n]=a*y+f*d+l*m-u*h,e[n+1]=l*y+f*h+u*d-a*m,e[n+2]=u*y+f*m+a*h-l*d,e[n+3]=f*y-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=h*f*d+u*m*y,this._y=u*m*d-h*f*y,this._z=u*f*y+h*m*d,this._w=u*f*d-h*m*y;break;case"YXZ":this._x=h*f*d+u*m*y,this._y=u*m*d-h*f*y,this._z=u*f*y-h*m*d,this._w=u*f*d+h*m*y;break;case"ZXY":this._x=h*f*d-u*m*y,this._y=u*m*d+h*f*y,this._z=u*f*y+h*m*d,this._w=u*f*d-h*m*y;break;case"ZYX":this._x=h*f*d-u*m*y,this._y=u*m*d+h*f*y,this._z=u*f*y-h*m*d,this._w=u*f*d+h*m*y;break;case"YZX":this._x=h*f*d+u*m*y,this._y=u*m*d+h*f*y,this._z=u*f*y-h*m*d,this._w=u*f*d-h*m*y;break;case"XZY":this._x=h*f*d-u*m*y,this._y=u*m*d-h*f*y,this._z=u*f*y+h*m*d,this._w=u*f*d+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),f=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*f,this.y=i+l*f+a*u-o*d,this.z=r+l*d+o*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new V,Dm=new ma;class ga{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,On):On.fromBufferAttribute(o,s),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ba.subVectors(this.max,ps),Kr.subVectors(e.a,ps),Zr.subVectors(e.b,ps),Qr.subVectors(e.c,ps),Pi.subVectors(Zr,Kr),Li.subVectors(Qr,Zr),hr.subVectors(Kr,Qr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-hr.z,hr.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,hr.z,0,-hr.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-hr.y,hr.x,0];return!Cc(n,Kr,Zr,Qr,Ba)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Kr,Zr,Qr,Ba))?!1:(Ha.crossVectors(Pi,Li),n=[Ha.x,Ha.y,Ha.z],Cc(n,Kr,Zr,Qr,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new V,new V,new V,new V,new V,new V,new V,new V],On=new V,za=new ga,Kr=new V,Zr=new V,Qr=new V,Pi=new V,Li=new V,hr=new V,ps=new V,Ba=new V,Ha=new V,pr=new V;function Cc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){pr.fromArray(t,o);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),f=i.dot(pr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const bM=new ga,ms=new V,bc=new V;class hh{constructor(e=new V,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const n=ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(bc)),this.expandByPoint(ms.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new V,Rc=new V,Va=new V,Di=new V,Pc=new V,Ga=new V,Lc=new V;class RM{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rc.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Rc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Va),a=Di.dot(this.direction),l=-Di.dot(Va),u=Di.lengthSq(),f=Math.abs(1-s*s);let d,h,m,y;if(f>0)if(d=s*l-a,h=s*a-l,y=o*f,d>=0)if(h>=-y)if(h<=y){const v=1/f;d*=v,h*=v,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-y?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=y?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Rc).addScaledVector(Va,h),m}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(o=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(o=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,o){Pc.subVectors(n,e),Ga.subVectors(i,e),Lc.crossVectors(Pc,Ga);let s=this.direction.dot(Lc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Di,Ga));if(l<0)return null;const u=a*this.direction.dot(Pc.cross(Di));if(u<0||l+u>s)return null;const f=-a*Di.dot(Lc);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,o,s,a,l,u,f,d,h,m,y,v,p){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,d,h,m,y,v,p)}set(e,n,i,r,o,s,a,l,u,f,d,h,m,y,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=y,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),o=1/Jr.setFromMatrixColumn(e,1).length(),s=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*f,m=s*d,y=a*f,v=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+y*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=y+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,y=u*f,v=u*d;n[0]=h+v*a,n[4]=y*a-m,n[8]=s*u,n[1]=s*d,n[5]=s*f,n[9]=-a,n[2]=m*a-y,n[6]=v+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,y=u*f,v=u*d;n[0]=h-v*a,n[4]=-s*d,n[8]=y+m*a,n[1]=m+y*a,n[5]=s*f,n[9]=v-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*f,m=s*d,y=a*f,v=a*d;n[0]=l*f,n[4]=y*u-m,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=m*u-y,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,y=a*l,v=a*u;n[0]=l*f,n[4]=v-h*d,n[8]=y*d+m,n[1]=d,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+y,n[10]=h-v*d}else if(e.order==="XZY"){const h=s*l,m=s*u,y=a*l,v=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+v,n[5]=s*f,n[9]=m*d-y,n[2]=y*d-m,n[6]=a*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,LM)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ui.crossVectors(i,hn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ui.crossVectors(i,hn)),Ui.normalize(),Wa.crossVectors(hn,Ui),r[0]=Ui.x,r[4]=Wa.x,r[8]=hn.x,r[1]=Ui.y,r[5]=Wa.y,r[9]=hn.y,r[2]=Ui.z,r[6]=Wa.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],y=i[2],v=i[6],p=i[10],c=i[14],_=i[3],g=i[7],x=i[11],M=i[15],C=r[0],w=r[4],D=r[8],E=r[12],A=r[1],j=r[5],Z=r[9],Q=r[13],L=r[2],X=r[6],K=r[10],$=r[14],N=r[3],z=r[7],F=r[11],R=r[15];return o[0]=s*C+a*A+l*L+u*N,o[4]=s*w+a*j+l*X+u*z,o[8]=s*D+a*Z+l*K+u*F,o[12]=s*E+a*Q+l*$+u*R,o[1]=f*C+d*A+h*L+m*N,o[5]=f*w+d*j+h*X+m*z,o[9]=f*D+d*Z+h*K+m*F,o[13]=f*E+d*Q+h*$+m*R,o[2]=y*C+v*A+p*L+c*N,o[6]=y*w+v*j+p*X+c*z,o[10]=y*D+v*Z+p*K+c*F,o[14]=y*E+v*Q+p*$+c*R,o[3]=_*C+g*A+x*L+M*N,o[7]=_*w+g*j+x*X+M*z,o[11]=_*D+g*Z+x*K+M*F,o[15]=_*E+g*Q+x*$+M*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],y=e[3],v=e[7],p=e[11],c=e[15];return y*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*m-i*l*m)+v*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*f-o*l*f)+p*(+n*u*d-n*a*m-o*s*d+i*s*m+o*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*s*d-i*s*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],y=e[12],v=e[13],p=e[14],c=e[15],_=d*p*u-v*h*u+v*l*m-a*p*m-d*l*c+a*h*c,g=y*h*u-f*p*u-y*l*m+s*p*m+f*l*c-s*h*c,x=f*v*u-y*d*u+y*a*m-s*v*m-f*a*c+s*d*c,M=y*d*l-f*v*l-y*a*h+s*v*h+f*a*p-s*d*p,C=n*_+i*g+r*x+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(v*h*o-d*p*o-v*r*m+i*p*m+d*r*c-i*h*c)*w,e[2]=(a*p*o-v*l*o+v*r*u-i*p*u-a*r*c+i*l*c)*w,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*p*o-y*h*o+y*r*m-n*p*m-f*r*c+n*h*c)*w,e[6]=(y*l*o-s*p*o-y*r*u+n*p*u+s*r*c-n*l*c)*w,e[7]=(s*h*o-f*l*o+f*r*u-n*h*u-s*r*m+n*l*m)*w,e[8]=x*w,e[9]=(y*d*o-f*v*o-y*i*m+n*v*m+f*i*c-n*d*c)*w,e[10]=(s*v*o-y*a*o+y*i*u-n*v*u-s*i*c+n*a*c)*w,e[11]=(f*a*o-s*d*o-f*i*u+n*d*u+s*i*m-n*a*m)*w,e[12]=M*w,e[13]=(f*v*r-y*d*r+y*i*h-n*v*h-f*i*p+n*d*p)*w,e[14]=(y*a*r-s*v*r-y*i*l+n*v*l+s*i*p-n*a*p)*w,e[15]=(s*d*r-f*a*r+f*i*l-n*d*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,d=a+a,h=o*u,m=o*f,y=o*d,v=s*f,p=s*d,c=a*d,_=l*u,g=l*f,x=l*d,M=i.x,C=i.y,w=i.z;return r[0]=(1-(v+c))*M,r[1]=(m+x)*M,r[2]=(y-g)*M,r[3]=0,r[4]=(m-x)*C,r[5]=(1-(h+c))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(y+g)*w,r[9]=(p-_)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Jr.set(r[0],r[1],r[2]).length();const s=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/o,f=1/s,d=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=xi){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(a===xi)m=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===ru)m=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=xi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(s-o),h=(n+e)*u,m=(i+r)*f;let y,v;if(a===xi)y=(s+o)*d,v=-2*d;else if(a===ru)y=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new V,Fn=new Ft,PM=new V(0,0,0),LM=new V(1,1,1),Ui=new V,Wa=new V,hn=new V,Um=new Ft,Nm=new ma;class Lu{constructor(e=0,n=0,i=0,r=Lu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lu.DEFAULT_ORDER="XYZ";class v0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const Im=new V,eo=new ma,ci=new Ft,Xa=new V,gs=new V,UM=new V,NM=new ma,Om=new V(1,0,0),Fm=new V(0,1,0),km=new V(0,0,1),IM={type:"added"},OM={type:"removed"};class yn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new V,n=new Lu,i=new ma,r=new V(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Be}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new v0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xa.copy(e):Xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(gs,Xa,this.up):ci.lookAt(Xa,gs,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),eo.setFromRotationMatrix(ci),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(OM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,UM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,NM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new V(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new V,fi=new V,Dc=new V,di=new V,to=new V,no=new V,zm=new V,Uc=new V,Nc=new V,Ic=new V;let $a=!1;class Vn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){kn.subVectors(r,n),fi.subVectors(i,n),Dc.subVectors(e,n);const s=kn.dot(kn),a=kn.dot(fi),l=kn.dot(Dc),u=fi.dot(fi),f=fi.dot(Dc),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,m=(u*l-a*f)*h,y=(s*f-a*l)*h;return o.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,n,i,r,o,s,a,l){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,di),l.setScalar(0),l.addScaledVector(o,di.x),l.addScaledVector(s,di.y),l.addScaledVector(a,di.z),l}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),fi.subVectors(e,n),kn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;to.subVectors(r,i),no.subVectors(o,i),Uc.subVectors(e,i);const l=to.dot(Uc),u=no.dot(Uc);if(l<=0&&u<=0)return n.copy(i);Nc.subVectors(e,r);const f=to.dot(Nc),d=no.dot(Nc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(to,s);Ic.subVectors(e,o);const m=to.dot(Ic),y=no.dot(Ic);if(y>=0&&m<=y)return n.copy(o);const v=m*u-l*y;if(v<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(no,a);const p=f*y-m*d;if(p<=0&&d-f>=0&&m-y>=0)return zm.subVectors(o,r),a=(d-f)/(d-f+(m-y)),n.copy(r).addScaledVector(zm,a);const c=1/(p+v+h);return s=v*c,a=h*c,n.copy(i).addScaledVector(to,s).addScaledVector(no,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Ye=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=SM(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Oc(s,o,e+1/3),this.g=Oc(s,o,e),this.b=Oc(s,o,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=y0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}copyLinearToSRGB(e){return this.r=Tc(e.r),this.g=Tc(e.g),this.b=Tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ze.fromWorkingColorSpace(Gt.copy(this),e),Math.round(nn(Gt.r*255,0,255))*65536+Math.round(nn(Gt.g*255,0,255))*256+Math.round(nn(Gt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,o=Gt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Nt){Ze.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(ja);const i=Ec(Ni.h,ja.h,n),r=Ec(Ni.s,ja.s,n),o=Ec(Ni.l,ja.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gt=new Ye;Ye.NAMES=y0;let FM=0;class Du extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=No,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=eu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class x0 extends Du{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new V,Ya=new et;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Am,this.updateRange={offset:0,count:-1},this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ya.fromBufferAttribute(this,n),Ya.applyMatrix3(e),this.setXY(n,Ya.x,Ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),o=en(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class S0 extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class E0 extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nr extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kM=0;const Tn=new Ft,Fc=new yn,io=new V,pn=new ga,_s=new ga,bt=new V;class Wr extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?E0:S0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Nr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(pn.min,_s.min),pn.expandByPoint(bt),bt.addVectors(pn.max,_s.max),pn.expandByPoint(bt)):(pn.expandByPoint(_s.min),pn.expandByPoint(_s.max))}pn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)bt.fromBufferAttribute(a,u),l&&(io.fromBufferAttribute(e,u),bt.add(io)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let A=0;A<a;A++)u[A]=new V,f[A]=new V;const d=new V,h=new V,m=new V,y=new et,v=new et,p=new et,c=new V,_=new V;function g(A,j,Z){d.fromArray(r,A*3),h.fromArray(r,j*3),m.fromArray(r,Z*3),y.fromArray(s,A*2),v.fromArray(s,j*2),p.fromArray(s,Z*2),h.sub(d),m.sub(d),v.sub(y),p.sub(y);const Q=1/(v.x*p.y-p.x*v.y);isFinite(Q)&&(c.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(Q),_.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(Q),u[A].add(c),u[j].add(c),u[Z].add(c),f[A].add(_),f[j].add(_),f[Z].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,j=x.length;A<j;++A){const Z=x[A],Q=Z.start,L=Z.count;for(let X=Q,K=Q+L;X<K;X+=3)g(i[X+0],i[X+1],i[X+2])}const M=new V,C=new V,w=new V,D=new V;function E(A){w.fromArray(o,A*3),D.copy(w);const j=u[A];M.copy(j),M.sub(w.multiplyScalar(w.dot(j))).normalize(),C.crossVectors(D,j);const Q=C.dot(f[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=Q}for(let A=0,j=x.length;A<j;++A){const Z=x[A],Q=Z.start,L=Z.count;for(let X=Q,K=Q+L;X<K;X+=3)E(i[X+0]),E(i[X+1]),E(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new V,o=new V,s=new V,a=new V,l=new V,u=new V,f=new V,d=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,p),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,y=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)h[y++]=u[m++]}return new si(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],d=o[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new Ft,mr=new RM,qa=new hh,Hm=new V,ro=new V,oo=new V,so=new V,kc=new V,Ka=new V,Za=new et,Qa=new et,Ja=new et,Vm=new V,Gm=new V,Wm=new V,el=new V,tl=new V;class Si extends yn{constructor(e=new Wr,n=new x0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ka.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],d=o[l];f!==0&&(kc.fromBufferAttribute(d,e),s?Ka.addScaledVector(kc,f):Ka.addScaledVector(kc.sub(n),f))}n.add(Ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(o),mr.copy(e.ray).recast(e.near),!(qa.containsPoint(mr.origin)===!1&&(mr.intersectSphere(qa,Hm)===null||mr.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Bm.copy(o).invert(),mr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let y=0,v=h.length;y<v;y++){const p=h[y],c=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=_,M=g;x<M;x+=3){const C=a.getX(x),w=a.getX(x+1),D=a.getX(x+2);r=nl(this,c,e,i,u,f,d,C,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=y,c=v;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),x=a.getX(p+2);r=nl(this,s,e,i,u,f,d,_,g,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,v=h.length;y<v;y++){const p=h[y],c=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=_,M=g;x<M;x+=3){const C=x,w=x+1,D=x+2;r=nl(this,c,e,i,u,f,d,C,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=y,c=v;p<c;p+=3){const _=p,g=p+1,x=p+2;r=nl(this,s,e,i,u,f,d,_,g,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function zM(t,e,n,i,r,o,s,a){let l;if(e.side===un?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===ir,a),l===null)return null;tl.copy(a),tl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(tl);return u<n.near||u>n.far?null:{distance:u,point:tl.clone(),object:t}}function nl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,ro),t.getVertexPosition(l,oo),t.getVertexPosition(u,so);const f=zM(t,e,n,i,ro,oo,so,el);if(f){r&&(Za.fromBufferAttribute(r,a),Qa.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,u),f.uv=Vn.getInterpolation(el,ro,oo,so,Za,Qa,Ja,new et)),o&&(Za.fromBufferAttribute(o,a),Qa.fromBufferAttribute(o,l),Ja.fromBufferAttribute(o,u),f.uv1=Vn.getInterpolation(el,ro,oo,so,Za,Qa,Ja,new et),f.uv2=f.uv1),s&&(Vm.fromBufferAttribute(s,a),Gm.fromBufferAttribute(s,l),Wm.fromBufferAttribute(s,u),f.normal=Vn.getInterpolation(el,ro,oo,so,Vm,Gm,Wm,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new V,materialIndex:0};Vn.getNormal(ro,oo,so,d.normal),f.face=d}return f}class _a extends Wr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],d=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Nr(u,3)),this.setAttribute("normal",new Nr(f,3)),this.setAttribute("uv",new Nr(d,2));function y(v,p,c,_,g,x,M,C,w,D,E){const A=x/w,j=M/D,Z=x/2,Q=M/2,L=C/2,X=w+1,K=D+1;let $=0,N=0;const z=new V;for(let F=0;F<K;F++){const R=F*j-Q;for(let I=0;I<X;I++){const le=I*A-Z;z[v]=le*_,z[p]=R*g,z[c]=L,u.push(z.x,z.y,z.z),z[v]=0,z[p]=0,z[c]=C>0?1:-1,f.push(z.x,z.y,z.z),d.push(I/w),d.push(1-F/D),$+=1}}for(let F=0;F<D;F++)for(let R=0;R<w;R++){const I=h+R+X*F,le=h+R+X*(F+1),ae=h+(R+1)+X*(F+1),ce=h+(R+1)+X*F;l.push(I,le,ce),l.push(le,ae,ce),N+=6}a.addGroup(m,N,E),m+=N,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Zo(t[n]);for(const r in i)e[r]=i[r]}return e}function BM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function M0(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const HM={clone:Zo,merge:Yt};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Du{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class T0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends T0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ao=-90,lo=1;class WM extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ao,lo,e,n);r.layers=this.layers,this.add(r);const o=new bn(ao,lo,e,n);o.layers=this.layers,this.add(o);const s=new bn(ao,lo,e,n);s.layers=this.layers,this.add(s);const a=new bn(ao,lo,e,n);a.layers=this.layers,this.add(a);const l=new bn(ao,lo,e,n);l.layers=this.layers,this.add(l);const u=new bn(ao,lo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class w0 extends vn{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Yo,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XM extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ur?Nt:Rn),this.texture=new w0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _a(5,5,5),o=new rr({name:"CubemapFromEquirect",uniforms:Zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Qi});o.uniforms.tEquirect.value=n;const s=new Si(r,o),a=n.minFilter;return n.minFilter===oa&&(n.minFilter=Cn),new WM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const zc=new V,$M=new V,jM=new Be;class yr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zc.subVectors(i,n).cross($M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jM.getNormalMatrix(e),r=this.coplanarPoint(zc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new hh,il=new V;class A0{constructor(e=new yr,n=new yr,i=new yr,r=new yr,o=new yr,s=new yr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],y=r[9],v=r[10],p=r[11],c=r[12],_=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-o,h-u,p-m,x-c).normalize(),i[1].setComponents(l+o,h+u,p+m,x+c).normalize(),i[2].setComponents(l+s,h+f,p+y,x+_).normalize(),i[3].setComponents(l-s,h-f,p-y,x-_).normalize(),i[4].setComponents(l-a,h-d,p-v,x-g).normalize(),n===xi)i[5].setComponents(l+a,h+d,p+v,x+g).normalize();else if(n===ru)i[5].setComponents(a,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function YM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,f,d){const h=f.array,m=f.updateRange;t.bindBuffer(d,u),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,f)):d.version<u.version&&(o(d.buffer,u,f),d.version=u.version)}return{get:s,remove:a,update:l}}class Uu extends Wr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],y=[],v=[],p=[];for(let c=0;c<f;c++){const _=c*h-s;for(let g=0;g<u;g++){const x=g*d-o;y.push(x,-_,0),v.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,x=_+u*(c+1),M=_+1+u*(c+1),C=_+1+u*c;m.push(g,x,C),m.push(x,M,C)}this.setIndex(m),this.setAttribute("position",new Nr(y,3)),this.setAttribute("normal",new Nr(v,3)),this.setAttribute("uv",new Nr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,g1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,w1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,$1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_T=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ET=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,NT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ew=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_w=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ew=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:qM,alphahash_pars_fragment:KM,alphamap_fragment:ZM,alphamap_pars_fragment:QM,alphatest_fragment:JM,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,begin_vertex:i1,beginnormal_vertex:r1,bsdfs:o1,iridescence_fragment:s1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:c1,clipping_planes_vertex:f1,color_fragment:d1,color_pars_fragment:h1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:v1,displacementmap_pars_vertex:y1,displacementmap_vertex:x1,emissivemap_fragment:S1,emissivemap_pars_fragment:E1,colorspace_fragment:M1,colorspace_pars_fragment:T1,envmap_fragment:w1,envmap_common_pars_fragment:A1,envmap_pars_fragment:C1,envmap_pars_vertex:b1,envmap_physical_pars_fragment:B1,envmap_vertex:R1,fog_vertex:P1,fog_pars_vertex:L1,fog_fragment:D1,fog_pars_fragment:U1,gradientmap_pars_fragment:N1,lightmap_fragment:I1,lightmap_pars_fragment:O1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:k1,lights_pars_begin:z1,lights_toon_fragment:H1,lights_toon_pars_fragment:V1,lights_phong_fragment:G1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:$1,lights_fragment_begin:j1,lights_fragment_maps:Y1,lights_fragment_end:q1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:eT,map_pars_fragment:tT,map_particle_fragment:nT,map_particle_pars_fragment:iT,metalnessmap_fragment:rT,metalnessmap_pars_fragment:oT,morphcolor_vertex:sT,morphnormal_vertex:aT,morphtarget_pars_vertex:lT,morphtarget_vertex:uT,normal_fragment_begin:cT,normal_fragment_maps:fT,normal_pars_fragment:dT,normal_pars_vertex:hT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:_T,clearcoat_pars_fragment:vT,iridescence_pars_fragment:yT,opaque_fragment:xT,packing:ST,premultiplied_alpha_fragment:ET,project_vertex:MT,dithering_fragment:TT,dithering_pars_fragment:wT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:CT,shadowmap_pars_fragment:bT,shadowmap_pars_vertex:RT,shadowmap_vertex:PT,shadowmask_pars_fragment:LT,skinbase_vertex:DT,skinning_pars_vertex:UT,skinning_vertex:NT,skinnormal_vertex:IT,specularmap_fragment:OT,specularmap_pars_fragment:FT,tonemapping_fragment:kT,tonemapping_pars_fragment:zT,transmission_fragment:BT,transmission_pars_fragment:HT,uv_pars_fragment:VT,uv_pars_vertex:GT,uv_vertex:WT,worldpos_vertex:XT,background_vert:$T,background_frag:jT,backgroundCube_vert:YT,backgroundCube_frag:qT,cube_vert:KT,cube_frag:ZT,depth_vert:QT,depth_frag:JT,distanceRGBA_vert:ew,distanceRGBA_frag:tw,equirect_vert:nw,equirect_frag:iw,linedashed_vert:rw,linedashed_frag:ow,meshbasic_vert:sw,meshbasic_frag:aw,meshlambert_vert:lw,meshlambert_frag:uw,meshmatcap_vert:cw,meshmatcap_frag:fw,meshnormal_vert:dw,meshnormal_frag:hw,meshphong_vert:pw,meshphong_frag:mw,meshphysical_vert:gw,meshphysical_frag:_w,meshtoon_vert:vw,meshtoon_frag:yw,points_vert:xw,points_frag:Sw,shadow_vert:Ew,shadow_frag:Mw,sprite_vert:Tw,sprite_frag:ww},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ni={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};ni.physical={uniforms:Yt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const rl={r:0,b:0,g:0};function Aw(t,e,n,i,r,o,s){const a=new Ye(0);let l=o===!0?0:1,u,f,d=null,h=0,m=null;function y(p,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ru)?(f===void 0&&(f=new Si(new _a(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Zo(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=Ze.getTransfer(g.colorSpace)!==st,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Si(new Uu(2,2),new rr({name:"BackgroundMaterial",uniforms:Zo(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(g.colorSpace)!==st,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(rl,M0(t)),i.buffers.color.setClear(rl.r,rl.g,rl.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:y}}function Cw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,f=!1;function d(L,X,K,$,N){let z=!1;if(s){const F=v($,K,X);u!==F&&(u=F,m(u.object)),z=c(L,$,K,N),z&&_(L,$,K,N)}else{const F=X.wireframe===!0;(u.geometry!==$.id||u.program!==K.id||u.wireframe!==F)&&(u.geometry=$.id,u.program=K.id,u.wireframe=F,z=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,D(L,X,K,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):o.bindVertexArrayOES(L)}function y(L){return i.isWebGL2?t.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function v(L,X,K){const $=K.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let z=N[X.id];z===void 0&&(z={},N[X.id]=z);let F=z[$];return F===void 0&&(F=p(h()),z[$]=F),F}function p(L){const X=[],K=[],$=[];for(let N=0;N<r;N++)X[N]=0,K[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:$,object:L,attributes:{},index:null}}function c(L,X,K,$){const N=u.attributes,z=X.attributes;let F=0;const R=K.getAttributes();for(const I in R)if(R[I].location>=0){const ae=N[I];let ce=z[I];if(ce===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),ae===void 0||ae.attribute!==ce||ce&&ae.data!==ce.data)return!0;F++}return u.attributesNum!==F||u.index!==$}function _(L,X,K,$){const N={},z=X.attributes;let F=0;const R=K.getAttributes();for(const I in R)if(R[I].location>=0){let ae=z[I];ae===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));const ce={};ce.attribute=ae,ae&&ae.data&&(ce.data=ae.data),N[I]=ce,F++}u.attributes=N,u.attributesNum=F,u.index=$}function g(){const L=u.newAttributes;for(let X=0,K=L.length;X<K;X++)L[X]=0}function x(L){M(L,0)}function M(L,X){const K=u.newAttributes,$=u.enabledAttributes,N=u.attributeDivisors;K[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),N[L]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),N[L]=X)}function C(){const L=u.newAttributes,X=u.enabledAttributes;for(let K=0,$=X.length;K<$;K++)X[K]!==L[K]&&(t.disableVertexAttribArray(K),X[K]=0)}function w(L,X,K,$,N,z,F){F===!0?t.vertexAttribIPointer(L,X,K,N,z):t.vertexAttribPointer(L,X,K,$,N,z)}function D(L,X,K,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=$.attributes,z=K.getAttributes(),F=X.defaultAttributeValues;for(const R in z){const I=z[R];if(I.location>=0){let le=N[R];if(le===void 0&&(R==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),R==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),le!==void 0){const ae=le.normalized,ce=le.itemSize,ge=n.get(le);if(ge===void 0)continue;const we=ge.buffer,ye=ge.type,Re=ge.bytesPerElement,Qe=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||le.gpuType===a0);if(le.isInterleavedBufferAttribute){const Te=le.data,k=Te.stride,cn=le.offset;if(Te.isInstancedInterleavedBuffer){for(let xe=0;xe<I.locationSize;xe++)M(I.location+xe,Te.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let xe=0;xe<I.locationSize;xe++)x(I.location+xe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let xe=0;xe<I.locationSize;xe++)w(I.location+xe,ce/I.locationSize,ye,ae,k*Re,(cn+ce/I.locationSize*xe)*Re,Qe)}else{if(le.isInstancedBufferAttribute){for(let Te=0;Te<I.locationSize;Te++)M(I.location+Te,le.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Te=0;Te<I.locationSize;Te++)x(I.location+Te);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Te=0;Te<I.locationSize;Te++)w(I.location+Te,ce/I.locationSize,ye,ae,ce*Re,ce/I.locationSize*Te*Re,Qe)}}else if(F!==void 0){const ae=F[R];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(I.location,ae);break;case 3:t.vertexAttrib3fv(I.location,ae);break;case 4:t.vertexAttrib4fv(I.location,ae);break;default:t.vertexAttrib1fv(I.location,ae)}}}}C()}function E(){Z();for(const L in a){const X=a[L];for(const K in X){const $=X[K];for(const N in $)y($[N].object),delete $[N];delete X[K]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const X=a[L.id];for(const K in X){const $=X[K];for(const N in $)y($[N].object),delete $[N];delete X[K]}delete a[L.id]}function j(L){for(const X in a){const K=a[X];if(K[L.id]===void 0)continue;const $=K[L.id];for(const N in $)y($[N].object),delete $[N];delete K[L.id]}}function Z(){Q(),f=!0,u!==l&&(u=l,m(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:j,initAttributes:g,enableAttribute:x,disableUnusedAttributes:C}}function bw(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,f){t.drawArrays(o,u,f),n.update(f,o,1)}function l(u,f,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,u,f,d),n.update(f,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function Rw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=s||e.has("OES_texture_float"),M=g&&x,C=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:C}}function Pw(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new yr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const y=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||y===null||y.length===0||o&&!p)o?f(null):u();else{const _=o?0:i,g=_*4;let x=c.clippingState||null;l.value=x,x=f(y,h,g,m);for(let M=0;M!==g;++M)x[M]=n[M];c.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,y){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,y!==!0||p===null){const c=m+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,x=m;g!==v;++g,x+=4)s.copy(d[g]).applyMatrix4(_,a),s.normal.toArray(p,x),p[x+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Lw(t){let e=new WeakMap;function n(s,a){return a===Kf?s.mapping=Yo:a===Zf&&(s.mapping=qo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Kf||a===Zf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new XM(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Dw extends T0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=4,Xm=[.125,.215,.35,.446,.526,.582],Er=20,Bc=new Dw,$m=new Ye;let Hc=null,Vc=0,Gc=0;const xr=(1+Math.sqrt(5))/2,uo=1/xr,jm=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,xr,uo),new V(0,xr,-uo),new V(uo,0,xr),new V(-uo,0,xr),new V(xr,uo,0),new V(-xr,uo,0)];class Ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Vc,Gc),e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Yo||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:sa,format:Wn,colorSpace:Ci,depthBuffer:!1},r=qm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uw(o)),this._blurMaterial=Nw(o,e,n)}return r}_compileMaterial(e){const n=new Si(this._lodPlanes[0],e);this._renderer.compile(n,Bc)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor($m),f.toneMapping=Ji,f.autoClear=!1;const m=new x0({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),y=new Si(new _a,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy($m),v=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;ol(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),v&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Yo||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Si(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Bc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=jm[(r-1)%jm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Si(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Er-1),v=o/y,p=isFinite(o)?1+Math.floor(f*v):Er;p>Er&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Er}`);const c=[];let _=0;for(let w=0;w<Er;++w){const D=w/v,E=Math.exp(-D*D/2);c.push(E),w===0?_+=E:w<p&&(_+=2*E)}for(let w=0;w<c.length;w++)c[w]=c[w]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-i;const x=this._sizeLods[r],M=3*x*(r>g-Ao?r-g+Ao:0),C=4*(this._cubeSize-x);ol(n,M,C,3*x,2*x),l.setRenderTarget(n),l.render(d,Bc)}}function Uw(t){const e=[],n=[],i=[];let r=t;const o=t-Ao+1+Xm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Ao?l=Xm[s-t+Ao-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,y=6,v=3,p=2,c=1,_=new Float32Array(v*y*m),g=new Float32Array(p*y*m),x=new Float32Array(c*y*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,D=C>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(E,v*y*C),g.set(h,p*y*C);const A=[C,C,C,C,C,C];x.set(A,c*y*C)}const M=new Wr;M.setAttribute("position",new si(_,v)),M.setAttribute("uv",new si(g,p)),M.setAttribute("faceIndex",new si(x,c)),e.push(M),r>Ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qm(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Nw(t,e,n){const i=new Float32Array(Er),r=new V(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Km(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Zm(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Iw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Kf||l===Zf,f=l===Yo||l===qo;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Ym(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Ym(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Ow(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fw(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const v=h.morphAttributes[y];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const y in m){const v=m[y];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,y=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,x=_.length;g<x;g+=3){const M=_[g+0],C=_[g+1],w=_[g+2];h.push(M,C,C,w,w,M)}}else if(y!==void 0){const _=y.array;v=y.version;for(let g=0,x=_.length/3-1;g<x;g+=3){const M=g+0,C=g+1,w=g+2;h.push(M,C,C,w,w,M)}}else return;const p=new(p0(h)?E0:S0)(h,1);p.version=v;const c=o.get(d);c&&e.remove(c),o.set(d,p)}function f(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function kw(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function f(h,m){t.drawElements(o,m,a,h*l),n.update(m,o,1)}function d(h,m,y){if(y===0)return;let v,p;if(r)v=t,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](o,m,a,h*l,y),n.update(m,o,y)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d}function zw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Bw(t,e){return t[0]-e[0]}function Hw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Vw(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new It,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=y!==void 0?y.length:0;let p=o.get(f);if(p===void 0||p.count!==v){let X=function(){Q.dispose(),o.delete(f),f.removeEventListener("dispose",X)};var m=X;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),M===!0&&(E=3);let A=f.attributes.position.count*E,j=1;A>e.maxTextureSize&&(j=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Z=new Float32Array(A*j*4*v),Q=new _0(Z,A,j,v);Q.type=Gi,Q.needsUpdate=!0;const L=E*4;for(let K=0;K<v;K++){const $=C[K],N=w[K],z=D[K],F=A*j*4*K;for(let R=0;R<$.count;R++){const I=R*L;g===!0&&(s.fromBufferAttribute($,R),Z[F+I+0]=s.x,Z[F+I+1]=s.y,Z[F+I+2]=s.z,Z[F+I+3]=0),x===!0&&(s.fromBufferAttribute(N,R),Z[F+I+4]=s.x,Z[F+I+5]=s.y,Z[F+I+6]=s.z,Z[F+I+7]=0),M===!0&&(s.fromBufferAttribute(z,R),Z[F+I+8]=s.x,Z[F+I+9]=s.y,Z[F+I+10]=s.z,Z[F+I+11]=z.itemSize===4?s.w:1)}}p={count:v,texture:Q,size:new et(A,j)},o.set(f,p),f.addEventListener("dispose",X)}let c=0;for(let g=0;g<h.length;g++)c+=h[g];const _=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==y){v=[];for(let x=0;x<y;x++)v[x]=[x,0];i[f.id]=v}for(let x=0;x<y;x++){const M=v[x];M[0]=x,M[1]=h[x]}v.sort(Hw);for(let x=0;x<8;x++)x<y&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Bw);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const M=a[x],C=M[0],w=M[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&f.getAttribute("morphTarget"+x)!==p[C]&&f.setAttribute("morphTarget"+x,p[C]),c&&f.getAttribute("morphNormal"+x)!==c[C]&&f.setAttribute("morphNormal"+x,c[C]),r[x]=w,_+=w):(p&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),c&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const g=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Gw(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const b0=new vn,R0=new _0,P0=new CM,L0=new w0,Qm=[],Jm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Qm[r];if(o===void 0&&(o=new Float32Array(r),Qm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=Jm[e];n===void 0&&(n=new Int32Array(e),Jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function Yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;ng.set(i),t.uniformMatrix2fv(this.addr,!1,ng),wt(n,i)}}function qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;tg.set(i),t.uniformMatrix3fv(this.addr,!1,tg),wt(n,i)}}function Kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;eg.set(i),t.uniformMatrix4fv(this.addr,!1,eg),wt(n,i)}}function Zw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function tA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||b0,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P0,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||L0,r)}function lA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R0,r)}function uA(t){switch(t){case 5126:return Ww;case 35664:return Xw;case 35665:return $w;case 35666:return jw;case 35674:return Yw;case 35675:return qw;case 35676:return Kw;case 5124:case 35670:return Zw;case 35667:case 35671:return Qw;case 35668:case 35672:return Jw;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return lA}}function cA(t,e){t.uniform1fv(this.addr,e)}function fA(t,e){const n=is(e,this.size,2);t.uniform2fv(this.addr,n)}function dA(t,e){const n=is(e,this.size,3);t.uniform3fv(this.addr,n)}function hA(t,e){const n=is(e,this.size,4);t.uniform4fv(this.addr,n)}function pA(t,e){const n=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mA(t,e){const n=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gA(t,e){const n=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _A(t,e){t.uniform1iv(this.addr,e)}function vA(t,e){t.uniform2iv(this.addr,e)}function yA(t,e){t.uniform3iv(this.addr,e)}function xA(t,e){t.uniform4iv(this.addr,e)}function SA(t,e){t.uniform1uiv(this.addr,e)}function EA(t,e){t.uniform2uiv(this.addr,e)}function MA(t,e){t.uniform3uiv(this.addr,e)}function TA(t,e){t.uniform4uiv(this.addr,e)}function wA(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||b0,o[s])}function AA(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||P0,o[s])}function CA(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||L0,o[s])}function bA(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||R0,o[s])}function RA(t){switch(t){case 5126:return cA;case 35664:return fA;case 35665:return dA;case 35666:return hA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return _A;case 35667:case 35671:return vA;case 35668:case 35672:return yA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return EA;case 36295:return MA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return bA}}class PA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=uA(n.type)}}class LA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=RA(n.type)}}class DA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function ig(t,e){t.seq.push(e),t.map[e.id]=e}function UA(t,e,n){const i=t.name,r=i.length;for(Wc.lastIndex=0;;){const o=Wc.exec(i),s=Wc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){ig(n,u===void 0?new PA(a,t,e):new LA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new DA(a),ig(n,d)),n=d}}}class Al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);UA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function rg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const NA=37297;let IA=0;function OA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function FA(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===iu&&n===nu?i="LinearDisplayP3ToLinearSRGB":e===nu&&n===iu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ci:case Pu:return[i,"LinearTransferOETF"];case Nt:case dh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function og(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+OA(t.getShaderSource(e),s)}else return r}function kA(t,e){const n=FA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function zA(t,e){let n;switch(e){case YE:n="Linear";break;case qE:n="Reinhard";break;case KE:n="OptimizedCineon";break;case ZE:n="ACESFilmic";break;case QE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function BA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function HA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ws(t){return t!==""}function sg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(GA,XA)}const WA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XA(t,e){let n=Ie[e];if(n===void 0){const i=WA.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const $A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lg(t){return t.replace($A,jA)}function jA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ug(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===r0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===EE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function qA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Yo:case qo:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function ZA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case o0:e="ENVMAP_BLENDING_MULTIPLY";break;case $E:e="ENVMAP_BLENDING_MIX";break;case jE:e="ENVMAP_BLENDING_ADD";break}return e}function QA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=YA(n),u=qA(n),f=KA(n),d=ZA(n),h=QA(n),m=n.isWebGL2?"":BA(n),y=HA(o),v=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ws).join(`
`),p.length>0&&(p+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ws).join(`
`),c.length>0&&(c+=`
`)):(p=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),c=[m,ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Ji?zA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,kA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ws).join(`
`)),s=id(s),s=sg(s,n),s=ag(s,n),a=id(a),a=sg(a,n),a=ag(a,n),s=lg(s),a=lg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+p+s,x=_+c+a,M=rg(r,r.VERTEX_SHADER,g),C=rg(r,r.FRAGMENT_SHADER,x);r.attachShader(v,M),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(j){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(v).trim(),Q=r.getShaderInfoLog(M).trim(),L=r.getShaderInfoLog(C).trim();let X=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,M,C);else{const $=og(r,M,"vertex"),N=og(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+$+`
`+N)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Q===""||L==="")&&(K=!1);K&&(j.diagnostics={runnable:X,programLog:Z,vertexShader:{log:Q,prefix:p},fragmentShader:{log:L,prefix:c}})}r.deleteShader(M),r.deleteShader(C),D=new Al(r,v),E=VA(r,v)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,NA)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=C,this}let eC=0;class tC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nC(e),n.set(e,i)),i}}class nC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function iC(t,e,n,i,r,o,s){const a=new v0,l=new tC,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,A,j,Z,Q){const L=Z.fog,X=Q.geometry,K=E.isMeshStandardMaterial?Z.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||K),N=$&&$.mapping===Ru?$.image.height:null,z=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const F=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,R=F!==void 0?F.length:0;let I=0;X.morphAttributes.position!==void 0&&(I=1),X.morphAttributes.normal!==void 0&&(I=2),X.morphAttributes.color!==void 0&&(I=3);let le,ae,ce,ge;if(z){const _t=ni[z];le=_t.vertexShader,ae=_t.fragmentShader}else le=E.vertexShader,ae=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const we=t.getRenderTarget(),ye=Q.isInstancedMesh===!0,Re=!!E.map,Qe=!!E.matcap,Te=!!$,k=!!E.aoMap,cn=!!E.lightMap,xe=!!E.bumpMap,Le=!!E.normalMap,Pe=!!E.displacementMap,dt=!!E.emissiveMap,ke=!!E.metalnessMap,ze=!!E.roughnessMap,Je=E.anisotropy>0,At=E.clearcoat>0,zt=E.iridescence>0,b=E.sheen>0,S=E.transmission>0,B=Je&&!!E.anisotropyMap,ne=At&&!!E.clearcoatMap,ee=At&&!!E.clearcoatNormalMap,ie=At&&!!E.clearcoatRoughnessMap,_e=zt&&!!E.iridescenceMap,se=zt&&!!E.iridescenceThicknessMap,de=b&&!!E.sheenColorMap,Ae=b&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,te=!!E.specularColorMap,Ke=!!E.specularIntensityMap,De=S&&!!E.transmissionMap,Ce=S&&!!E.thicknessMap,Se=!!E.gradientMap,me=!!E.alphaMap,Ge=E.alphaTest>0,P=!!E.alphaHash,fe=!!E.extensions,re=!!X.attributes.uv1,Y=!!X.attributes.uv2,oe=!!X.attributes.uv3;let Ee=Ji;return E.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ee=t.toneMapping),{isWebGL2:f,shaderID:z,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:ae,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:ye,instancingColor:ye&&Q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ci,map:Re,matcap:Qe,envMap:Te,envMapMode:Te&&$.mapping,envMapCubeUVHeight:N,aoMap:k,lightMap:cn,bumpMap:xe,normalMap:Le,displacementMap:h&&Pe,emissiveMap:dt,normalMapObjectSpace:Le&&E.normalMapType===dM,normalMapTangentSpace:Le&&E.normalMapType===fM,metalnessMap:ke,roughnessMap:ze,anisotropy:Je,anisotropyMap:B,clearcoat:At,clearcoatMap:ne,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,iridescence:zt,iridescenceMap:_e,iridescenceThicknessMap:se,sheen:b,sheenColorMap:de,sheenRoughnessMap:Ae,specularMap:Xe,specularColorMap:te,specularIntensityMap:Ke,transmission:S,transmissionMap:De,thicknessMap:Ce,gradientMap:Se,opaque:E.transparent===!1&&E.blending===No,alphaMap:me,alphaTest:Ge,alphaHash:P,combine:E.combine,mapUv:Re&&v(E.map.channel),aoMapUv:k&&v(E.aoMap.channel),lightMapUv:cn&&v(E.lightMap.channel),bumpMapUv:xe&&v(E.bumpMap.channel),normalMapUv:Le&&v(E.normalMap.channel),displacementMapUv:Pe&&v(E.displacementMap.channel),emissiveMapUv:dt&&v(E.emissiveMap.channel),metalnessMapUv:ke&&v(E.metalnessMap.channel),roughnessMapUv:ze&&v(E.roughnessMap.channel),anisotropyMapUv:B&&v(E.anisotropyMap.channel),clearcoatMapUv:ne&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(E.sheenRoughnessMap.channel),specularMapUv:Xe&&v(E.specularMap.channel),specularColorMapUv:te&&v(E.specularColorMap.channel),specularIntensityMapUv:Ke&&v(E.specularIntensityMap.channel),transmissionMapUv:De&&v(E.transmissionMap.channel),thicknessMapUv:Ce&&v(E.thicknessMap.channel),alphaMapUv:me&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Le||Je),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:re,vertexUv2s:Y,vertexUv3s:oe,pointsUvs:Q.isPoints===!0&&!!X.attributes.uv&&(Re||me),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:I,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ee,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Re&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function c(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const j in E.defines)A.push(j),A.push(E.defines[j]);return E.isRawShaderMaterial===!1&&(_(A,E),g(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function _(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function g(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const A=y[E.type];let j;if(A){const Z=ni[A];j=HM.clone(Z.uniforms)}else j=E.uniforms;return j}function M(E,A){let j;for(let Z=0,Q=u.length;Z<Q;Z++){const L=u[Z];if(L.cacheKey===A){j=L,++j.usedTimes;break}}return j===void 0&&(j=new JA(t,A,E,o),u.push(j)),j}function C(E){if(--E.usedTimes===0){const A=u.indexOf(E);u[A]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:x,acquireProgram:M,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:D}}function rC(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function oC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,y,v,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:y,renderOrder:d.renderOrder,z:v,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=y,c.renderOrder=d.renderOrder,c.z=v,c.group=p),e++,c}function a(d,h,m,y,v,p){const c=s(d,h,m,y,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,y,v,p){const c=s(d,h,m,y,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||oC),i.length>1&&i.sort(h||cg),r.length>1&&r.sort(h||cg)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function sC(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new fg,t.set(i,[s])):r>=o.length?(s=new fg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function aC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ye};break;case"SpotLight":n={position:new V,direction:new V,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function lC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uC=0;function cC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fC(t,e){const n=new aC,i=lC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new V);const o=new V,s=new Ft,a=new Ft;function l(f,d){let h=0,m=0,y=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let v=0,p=0,c=0,_=0,g=0,x=0,M=0,C=0,w=0,D=0,E=0;f.sort(cC);const A=d===!0?Math.PI:1;for(let Z=0,Q=f.length;Z<Q;Z++){const L=f[Z],X=L.color,K=L.intensity,$=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=X.r*K*A,m+=X.g*K*A,y+=X.b*K*A;else if(L.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(L.sh.coefficients[z],K);E++}else if(L.isDirectionalLight){const z=n.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const F=L.shadow,R=i.get(L);R.shadowBias=F.bias,R.shadowNormalBias=F.normalBias,R.shadowRadius=F.radius,R.shadowMapSize=F.mapSize,r.directionalShadow[v]=R,r.directionalShadowMap[v]=N,r.directionalShadowMatrix[v]=L.shadow.matrix,x++}r.directional[v]=z,v++}else if(L.isSpotLight){const z=n.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(X).multiplyScalar(K*A),z.distance=$,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,r.spot[c]=z;const F=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,F.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[c]=F.matrix,L.castShadow){const R=i.get(L);R.shadowBias=F.bias,R.shadowNormalBias=F.normalBias,R.shadowRadius=F.radius,R.shadowMapSize=F.mapSize,r.spotShadow[c]=R,r.spotShadowMap[c]=N,C++}c++}else if(L.isRectAreaLight){const z=n.get(L);z.color.copy(X).multiplyScalar(K),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=z,_++}else if(L.isPointLight){const z=n.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*A),z.distance=L.distance,z.decay=L.decay,L.castShadow){const F=L.shadow,R=i.get(L);R.shadowBias=F.bias,R.shadowNormalBias=F.normalBias,R.shadowRadius=F.radius,R.shadowMapSize=F.mapSize,R.shadowCameraNear=F.camera.near,R.shadowCameraFar=F.camera.far,r.pointShadow[p]=R,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=L.shadow.matrix,M++}r.point[p]=z,p++}else if(L.isHemisphereLight){const z=n.get(L);z.skyColor.copy(L.color).multiplyScalar(K*A),z.groundColor.copy(L.groundColor).multiplyScalar(K*A),r.hemi[g]=z,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==v||j.pointLength!==p||j.spotLength!==c||j.rectAreaLength!==_||j.hemiLength!==g||j.numDirectionalShadows!==x||j.numPointShadows!==M||j.numSpotShadows!==C||j.numSpotMaps!==w||j.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=E,j.directionalLength=v,j.pointLength=p,j.spotLength=c,j.rectAreaLength=_,j.hemiLength=g,j.numDirectionalShadows=x,j.numPointShadows=M,j.numSpotShadows=C,j.numSpotMaps=w,j.numLightProbes=E,r.version=uC++)}function u(f,d){let h=0,m=0,y=0,v=0,p=0;const c=d.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const x=f[_];if(x.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(c),h++}else if(x.isSpotLight){const M=r.spot[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),M.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(c),y++}else if(x.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),a.identity(),s.copy(x.matrixWorld),s.premultiply(c),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(c),m++}else if(x.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function dg(t,e){const n=new fC(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function dC(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new dg(t,e),n.set(o,[l])):s>=a.length?(l=new dg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class hC extends Du{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pC extends Du{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _C(t,e,n){let i=new A0;const r=new et,o=new et,s=new It,a=new hC({depthPacking:cM}),l=new pC,u={},f=n.maxTextureSize,d={[ir]:un,[un]:ir,[_i]:_i},h=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:mC,fragmentShader:gC}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new Wr;y.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Si(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r0;let c=this.type;this.render=function(M,C,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const D=t.getRenderTarget(),E=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Qi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Z=c!==hi&&this.type===hi,Q=c===hi&&this.type!==hi;for(let L=0,X=M.length;L<X;L++){const K=M[L],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const N=$.getFrameExtents();if(r.multiply(N),o.copy($.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/N.x),r.x=o.x*N.x,$.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/N.y),r.y=o.y*N.y,$.mapSize.y=o.y)),$.map===null||Z===!0||Q===!0){const F=this.type!==hi?{minFilter:Kt,magFilter:Kt}:{};$.map!==null&&$.map.dispose(),$.map=new Hr(r.x,r.y,F),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const z=$.getViewportCount();for(let F=0;F<z;F++){const R=$.getViewport(F);s.set(o.x*R.x,o.y*R.y,o.x*R.z,o.y*R.w),j.viewport(s),$.updateMatrices(K,F),i=$.getFrustum(),x(C,w,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===hi&&_($,w),$.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(D,E,A)};function _(M,C){const w=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(C,null,w,h,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(C,null,w,m,v,null)}function g(M,C,w,D){let E=null;const A=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)E=A;else if(E=w.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=E.uuid,Z=C.uuid;let Q=u[j];Q===void 0&&(Q={},u[j]=Q);let L=Q[Z];L===void 0&&(L=E.clone(),Q[Z]=L),E=L}if(E.visible=C.visible,E.wireframe=C.wireframe,D===hi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const j=t.properties.get(E);j.light=w}return E}function x(M,C,w,D,E){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===hi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),Q=M.material;if(Array.isArray(Q)){const L=Z.groups;for(let X=0,K=L.length;X<K;X++){const $=L[X],N=Q[$.materialIndex];if(N&&N.visible){const z=g(M,N,D,E);t.renderBufferDirect(w,null,Z,z,M,$)}}}else if(Q.visible){const L=g(M,Q,D,E);t.renderBufferDirect(w,null,Z,L,M,null)}}const j=M.children;for(let Z=0,Q=j.length;Z<Q;Z++)x(j[Z],C,w,D,E)}}function vC(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const fe=new It;let re=null;const Y=new It(0,0,0,0);return{setMask:function(oe){re!==oe&&!P&&(t.colorMask(oe,oe,oe,oe),re=oe)},setLocked:function(oe){P=oe},setClear:function(oe,Ee,$e,_t,Mn){Mn===!0&&(oe*=_t,Ee*=_t,$e*=_t),fe.set(oe,Ee,$e,_t),Y.equals(fe)===!1&&(t.clearColor(oe,Ee,$e,_t),Y.copy(fe))},reset:function(){P=!1,re=null,Y.set(-1,0,0,0)}}}function o(){let P=!1,fe=null,re=null,Y=null;return{setTest:function(oe){oe?Re(t.DEPTH_TEST):Qe(t.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!P&&(t.depthMask(oe),fe=oe)},setFunc:function(oe){if(re!==oe){switch(oe){case zE:t.depthFunc(t.NEVER);break;case BE:t.depthFunc(t.ALWAYS);break;case HE:t.depthFunc(t.LESS);break;case eu:t.depthFunc(t.LEQUAL);break;case VE:t.depthFunc(t.EQUAL);break;case GE:t.depthFunc(t.GEQUAL);break;case WE:t.depthFunc(t.GREATER);break;case XE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=oe}},setLocked:function(oe){P=oe},setClear:function(oe){Y!==oe&&(t.clearDepth(oe),Y=oe)},reset:function(){P=!1,fe=null,re=null,Y=null}}}function s(){let P=!1,fe=null,re=null,Y=null,oe=null,Ee=null,$e=null,_t=null,Mn=null;return{setTest:function(tt){P||(tt?Re(t.STENCIL_TEST):Qe(t.STENCIL_TEST))},setMask:function(tt){fe!==tt&&!P&&(t.stencilMask(tt),fe=tt)},setFunc:function(tt,$t,Zn){(re!==tt||Y!==$t||oe!==Zn)&&(t.stencilFunc(tt,$t,Zn),re=tt,Y=$t,oe=Zn)},setOp:function(tt,$t,Zn){(Ee!==tt||$e!==$t||_t!==Zn)&&(t.stencilOp(tt,$t,Zn),Ee=tt,$e=$t,_t=Zn)},setLocked:function(tt){P=tt},setClear:function(tt){Mn!==tt&&(t.clearStencil(tt),Mn=tt)},reset:function(){P=!1,fe=null,re=null,Y=null,oe=null,Ee=null,$e=null,_t=null,Mn=null}}}const a=new r,l=new o,u=new s,f=new WeakMap,d=new WeakMap;let h={},m={},y=new WeakMap,v=[],p=null,c=!1,_=null,g=null,x=null,M=null,C=null,w=null,D=null,E=new Ye(0,0,0),A=0,j=!1,Z=null,Q=null,L=null,X=null,K=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=z>=2);let R=null,I={};const le=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),ce=new It().fromArray(le),ge=new It().fromArray(ae);function we(P,fe,re,Y){const oe=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(P,Ee),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<re;$e++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(fe+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Ee}const ye={};ye[t.TEXTURE_2D]=we(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=we(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=we(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=we(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(t.DEPTH_TEST),l.setFunc(eu),ke(!1),ze(jp),Re(t.CULL_FACE),Pe(Qi);function Re(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Qe(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Te(P,fe){return m[P]!==fe?(t.bindFramebuffer(P,fe),m[P]=fe,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function k(P,fe){let re=v,Y=!1;if(P)if(re=y.get(fe),re===void 0&&(re=[],y.set(fe,re)),P.isWebGLMultipleRenderTargets){const oe=P.texture;if(re.length!==oe.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,$e=oe.length;Ee<$e;Ee++)re[Ee]=t.COLOR_ATTACHMENT0+Ee;re.length=oe.length,Y=!0}}else re[0]!==t.COLOR_ATTACHMENT0&&(re[0]=t.COLOR_ATTACHMENT0,Y=!0);else re[0]!==t.BACK&&(re[0]=t.BACK,Y=!0);Y&&(n.isWebGL2?t.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function cn(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const xe={[Sr]:t.FUNC_ADD,[TE]:t.FUNC_SUBTRACT,[wE]:t.FUNC_REVERSE_SUBTRACT};if(i)xe[Zp]=t.MIN,xe[Qp]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(xe[Zp]=P.MIN_EXT,xe[Qp]=P.MAX_EXT)}const Le={[AE]:t.ZERO,[CE]:t.ONE,[bE]:t.SRC_COLOR,[Yf]:t.SRC_ALPHA,[NE]:t.SRC_ALPHA_SATURATE,[DE]:t.DST_COLOR,[PE]:t.DST_ALPHA,[RE]:t.ONE_MINUS_SRC_COLOR,[qf]:t.ONE_MINUS_SRC_ALPHA,[UE]:t.ONE_MINUS_DST_COLOR,[LE]:t.ONE_MINUS_DST_ALPHA,[IE]:t.CONSTANT_COLOR,[OE]:t.ONE_MINUS_CONSTANT_COLOR,[FE]:t.CONSTANT_ALPHA,[kE]:t.ONE_MINUS_CONSTANT_ALPHA};function Pe(P,fe,re,Y,oe,Ee,$e,_t,Mn,tt){if(P===Qi){c===!0&&(Qe(t.BLEND),c=!1);return}if(c===!1&&(Re(t.BLEND),c=!0),P!==ME){if(P!==_||tt!==j){if((g!==Sr||C!==Sr)&&(t.blendEquation(t.FUNC_ADD),g=Sr,C=Sr),tt)switch(P){case No:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFunc(t.ONE,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case No:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,M=null,w=null,D=null,E.set(0,0,0),A=0,_=P,j=tt}return}oe=oe||fe,Ee=Ee||re,$e=$e||Y,(fe!==g||oe!==C)&&(t.blendEquationSeparate(xe[fe],xe[oe]),g=fe,C=oe),(re!==x||Y!==M||Ee!==w||$e!==D)&&(t.blendFuncSeparate(Le[re],Le[Y],Le[Ee],Le[$e]),x=re,M=Y,w=Ee,D=$e),(_t.equals(E)===!1||Mn!==A)&&(t.blendColor(_t.r,_t.g,_t.b,Mn),E.copy(_t),A=Mn),_=P,j=!1}function dt(P,fe){P.side===_i?Qe(t.CULL_FACE):Re(t.CULL_FACE);let re=P.side===un;fe&&(re=!re),ke(re),P.blending===No&&P.transparent===!1?Pe(Qi):Pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Y=P.stencilWrite;u.setTest(Y),Y&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),At(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):Qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){Z!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),Z=P)}function ze(P){P!==xE?(Re(t.CULL_FACE),P!==Q&&(P===jp?t.cullFace(t.BACK):P===SE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Qe(t.CULL_FACE),Q=P}function Je(P){P!==L&&(N&&t.lineWidth(P),L=P)}function At(P,fe,re){P?(Re(t.POLYGON_OFFSET_FILL),(X!==fe||K!==re)&&(t.polygonOffset(fe,re),X=fe,K=re)):Qe(t.POLYGON_OFFSET_FILL)}function zt(P){P?Re(t.SCISSOR_TEST):Qe(t.SCISSOR_TEST)}function b(P){P===void 0&&(P=t.TEXTURE0+$-1),R!==P&&(t.activeTexture(P),R=P)}function S(P,fe,re){re===void 0&&(R===null?re=t.TEXTURE0+$-1:re=R);let Y=I[re];Y===void 0&&(Y={type:void 0,texture:void 0},I[re]=Y),(Y.type!==P||Y.texture!==fe)&&(R!==re&&(t.activeTexture(re),R=re),t.bindTexture(P,fe||ye[P]),Y.type=P,Y.texture=fe)}function B(){const P=I[R];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){ce.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function Ce(P){ge.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ge.copy(P))}function Se(P,fe){let re=d.get(fe);re===void 0&&(re=new WeakMap,d.set(fe,re));let Y=re.get(P);Y===void 0&&(Y=t.getUniformBlockIndex(fe,P.name),re.set(P,Y))}function me(P,fe){const Y=d.get(fe).get(P);f.get(fe)!==Y&&(t.uniformBlockBinding(fe,Y,P.__bindingPointIndex),f.set(fe,Y))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},R=null,I={},m={},y=new WeakMap,v=[],p=null,c=!1,_=null,g=null,x=null,M=null,C=null,w=null,D=null,E=new Ye(0,0,0),A=0,j=!1,Z=null,Q=null,L=null,X=null,K=null,ce.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Re,disable:Qe,bindFramebuffer:Te,drawBuffers:k,useProgram:cn,setBlending:Pe,setMaterial:dt,setFlipSided:ke,setCullFace:ze,setLineWidth:Je,setPolygonOffset:At,setScissorTest:zt,activeTexture:b,bindTexture:S,unbindTexture:B,compressedTexImage2D:ne,compressedTexImage3D:ee,texImage2D:te,texImage3D:Ke,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:Ae,texStorage3D:Xe,texSubImage2D:ie,texSubImage3D:_e,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:De,viewport:Ce,reset:Ge}}function yC(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return c?new OffscreenCanvas(b,S):ou("canvas")}function g(b,S,B,ne){let ee=1;if((b.width>ne||b.height>ne)&&(ee=ne/Math.max(b.width,b.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=S?nd:Math.floor,_e=ie(ee*b.width),se=ie(ee*b.height);v===void 0&&(v=_(_e,se));const de=B?_(_e,se):v;return de.width=_e,de.height=se,de.getContext("2d").drawImage(b,0,0,_e,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_e+"x"+se+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return bm(b.width)&&bm(b.height)}function M(b){return a?!1:b.wrapS!==Gn||b.wrapT!==Gn||b.minFilter!==Kt&&b.minFilter!==Cn}function C(b,S){return b.generateMipmaps&&S&&b.minFilter!==Kt&&b.minFilter!==Cn}function w(b){t.generateMipmap(b)}function D(b,S,B,ne,ee=!1){if(a===!1)return S;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=S;if(S===t.RED&&(B===t.FLOAT&&(ie=t.R32F),B===t.HALF_FLOAT&&(ie=t.R16F),B===t.UNSIGNED_BYTE&&(ie=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.R8UI),B===t.UNSIGNED_SHORT&&(ie=t.R16UI),B===t.UNSIGNED_INT&&(ie=t.R32UI),B===t.BYTE&&(ie=t.R8I),B===t.SHORT&&(ie=t.R16I),B===t.INT&&(ie=t.R32I)),S===t.RG&&(B===t.FLOAT&&(ie=t.RG32F),B===t.HALF_FLOAT&&(ie=t.RG16F),B===t.UNSIGNED_BYTE&&(ie=t.RG8)),S===t.RGBA){const _e=ee?tu:Ze.getTransfer(ne);B===t.FLOAT&&(ie=t.RGBA32F),B===t.HALF_FLOAT&&(ie=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ie=_e===st?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(b,S,B){return C(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==Kt&&b.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){return b===Kt||b===Jp||b===mc?t.NEAREST:t.LINEAR}function j(b){const S=b.target;S.removeEventListener("dispose",j),Q(S),S.isVideoTexture&&y.delete(S)}function Z(b){const S=b.target;S.removeEventListener("dispose",Z),X(S)}function Q(b){const S=i.get(b);if(S.__webglInit===void 0)return;const B=b.source,ne=p.get(B);if(ne){const ee=ne[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(b),Object.keys(ne).length===0&&p.delete(B)}i.remove(b)}function L(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const B=b.source,ne=p.get(B);delete ne[S.__cacheKey],s.memory.textures--}function X(b){const S=b.texture,B=i.get(b),ne=i.get(S);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ie=0;ie<B.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(B.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[ee]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ie=S.length;ee<ie;ee++){const _e=i.get(S[ee]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),s.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(b)}let K=0;function $(){K=0}function N(){const b=K;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),K+=1,b}function z(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function F(b,S){const B=i.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(B,b,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function R(b,S){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Re(B,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function I(b,S){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Re(B,b,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function le(b,S){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Qe(B,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const ae={[Qf]:t.REPEAT,[Gn]:t.CLAMP_TO_EDGE,[Jf]:t.MIRRORED_REPEAT},ce={[Kt]:t.NEAREST,[Jp]:t.NEAREST_MIPMAP_NEAREST,[mc]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[JE]:t.LINEAR_MIPMAP_NEAREST,[oa]:t.LINEAR_MIPMAP_LINEAR},ge={[hM]:t.NEVER,[xM]:t.ALWAYS,[pM]:t.LESS,[gM]:t.LEQUAL,[mM]:t.EQUAL,[yM]:t.GEQUAL,[_M]:t.GREATER,[vM]:t.NOTEQUAL};function we(b,S,B){if(B?(t.texParameteri(b,t.TEXTURE_WRAP_S,ae[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ae[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ae[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ce[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ce[S.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Gn||S.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Kt&&S.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Kt||S.minFilter!==mc&&S.minFilter!==oa||S.type===Gi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===sa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ye(b,S){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",j));const ne=S.source;let ee=p.get(ne);ee===void 0&&(ee={},p.set(ne,ee));const ie=z(S);if(ie!==b.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),ee[ie].usedTimes++;const _e=ee[b.__cacheKey];_e!==void 0&&(ee[b.__cacheKey].usedTimes--,_e.usedTimes===0&&L(S)),b.__cacheKey=ie,b.__webglTexture=ee[ie].texture}return B}function Re(b,S,B){let ne=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=t.TEXTURE_3D);const ee=ye(b,S),ie=S.source;n.bindTexture(ne,b.__webglTexture,t.TEXTURE0+B);const _e=i.get(ie);if(ie.version!==_e.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const se=Ze.getPrimaries(Ze.workingColorSpace),de=S.colorSpace===Rn?null:Ze.getPrimaries(S.colorSpace),Ae=S.colorSpace===Rn||se===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Xe=M(S)&&x(S.image)===!1;let te=g(S.image,Xe,!1,f);te=zt(S,te);const Ke=x(te)||a,De=o.convert(S.format,S.colorSpace);let Ce=o.convert(S.type),Se=D(S.internalFormat,De,Ce,S.colorSpace,S.isVideoTexture);we(ne,S,Ke);let me;const Ge=S.mipmaps,P=a&&S.isVideoTexture!==!0,fe=_e.__version===void 0||ee===!0,re=E(S,te,Ke);if(S.isDepthTexture)Se=t.DEPTH_COMPONENT,a?S.type===Gi?Se=t.DEPTH_COMPONENT32F:S.type===Vi?Se=t.DEPTH_COMPONENT24:S.type===Lr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:S.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Dr&&Se===t.DEPTH_COMPONENT&&S.type!==fh&&S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Vi,Ce=o.convert(S.type)),S.format===Ko&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,S.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Lr,Ce=o.convert(S.type))),fe&&(P?n.texStorage2D(t.TEXTURE_2D,1,Se,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,De,Ce,null));else if(S.isDataTexture)if(Ge.length>0&&Ke){P&&fe&&n.texStorage2D(t.TEXTURE_2D,re,Se,Ge[0].width,Ge[0].height);for(let Y=0,oe=Ge.length;Y<oe;Y++)me=Ge[Y],P?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,De,Ce,me.data):n.texImage2D(t.TEXTURE_2D,Y,Se,me.width,me.height,0,De,Ce,me.data);S.generateMipmaps=!1}else P?(fe&&n.texStorage2D(t.TEXTURE_2D,re,Se,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,De,Ce,te.data)):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,De,Ce,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){P&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Se,Ge[0].width,Ge[0].height,te.depth);for(let Y=0,oe=Ge.length;Y<oe;Y++)me=Ge[Y],S.format!==Wn?De!==null?P?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,te.depth,De,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Se,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,te.depth,De,Ce,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Se,me.width,me.height,te.depth,0,De,Ce,me.data)}else{P&&fe&&n.texStorage2D(t.TEXTURE_2D,re,Se,Ge[0].width,Ge[0].height);for(let Y=0,oe=Ge.length;Y<oe;Y++)me=Ge[Y],S.format!==Wn?De!==null?P?n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,De,me.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,De,Ce,me.data):n.texImage2D(t.TEXTURE_2D,Y,Se,me.width,me.height,0,De,Ce,me.data)}else if(S.isDataArrayTexture)P?(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Se,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,De,Ce,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,De,Ce,te.data);else if(S.isData3DTexture)P?(fe&&n.texStorage3D(t.TEXTURE_3D,re,Se,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,De,Ce,te.data)):n.texImage3D(t.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,De,Ce,te.data);else if(S.isFramebufferTexture){if(fe)if(P)n.texStorage2D(t.TEXTURE_2D,re,Se,te.width,te.height);else{let Y=te.width,oe=te.height;for(let Ee=0;Ee<re;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Se,Y,oe,0,De,Ce,null),Y>>=1,oe>>=1}}else if(Ge.length>0&&Ke){P&&fe&&n.texStorage2D(t.TEXTURE_2D,re,Se,Ge[0].width,Ge[0].height);for(let Y=0,oe=Ge.length;Y<oe;Y++)me=Ge[Y],P?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,De,Ce,me):n.texImage2D(t.TEXTURE_2D,Y,Se,De,Ce,me);S.generateMipmaps=!1}else P?(fe&&n.texStorage2D(t.TEXTURE_2D,re,Se,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,De,Ce,te)):n.texImage2D(t.TEXTURE_2D,0,Se,De,Ce,te);C(S,Ke)&&w(ne),_e.__version=ie.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Qe(b,S,B){if(S.image.length!==6)return;const ne=ye(b,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const _e=Ze.getPrimaries(Ze.workingColorSpace),se=S.colorSpace===Rn?null:Ze.getPrimaries(S.colorSpace),de=S.colorSpace===Rn||_e===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,te=[];for(let Y=0;Y<6;Y++)!Ae&&!Xe?te[Y]=g(S.image[Y],!1,!0,u):te[Y]=Xe?S.image[Y].image:S.image[Y],te[Y]=zt(S,te[Y]);const Ke=te[0],De=x(Ke)||a,Ce=o.convert(S.format,S.colorSpace),Se=o.convert(S.type),me=D(S.internalFormat,Ce,Se,S.colorSpace),Ge=a&&S.isVideoTexture!==!0,P=ie.__version===void 0||ne===!0;let fe=E(S,Ke,De);we(t.TEXTURE_CUBE_MAP,S,De);let re;if(Ae){Ge&&P&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,me,Ke.width,Ke.height);for(let Y=0;Y<6;Y++){re=te[Y].mipmaps;for(let oe=0;oe<re.length;oe++){const Ee=re[oe];S.format!==Wn?Ce!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,Ee.width,Ee.height,Ce,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,Ee.width,Ee.height,Ce,Se,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,me,Ee.width,Ee.height,0,Ce,Se,Ee.data)}}}else{re=S.mipmaps,Ge&&P&&(re.length>0&&fe++,n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,me,te[0].width,te[0].height));for(let Y=0;Y<6;Y++)if(Xe){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,te[Y].width,te[Y].height,Ce,Se,te[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,te[Y].width,te[Y].height,0,Ce,Se,te[Y].data);for(let oe=0;oe<re.length;oe++){const $e=re[oe].image[Y].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,$e.width,$e.height,Ce,Se,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,me,$e.width,$e.height,0,Ce,Se,$e.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,Se,te[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,Ce,Se,te[Y]);for(let oe=0;oe<re.length;oe++){const Ee=re[oe];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,Ce,Se,Ee.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,me,Ce,Se,Ee.image[Y])}}}C(S,De)&&w(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Te(b,S,B,ne,ee,ie){const _e=o.convert(B.format,B.colorSpace),se=o.convert(B.type),de=D(B.internalFormat,_e,se,B.colorSpace);if(!i.get(S).__hasExternalTextures){const Xe=Math.max(1,S.width>>ie),te=Math.max(1,S.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,de,Xe,te,S.depth,0,_e,se,null):n.texImage2D(ee,ie,de,Xe,te,0,_e,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Je(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,i.get(B).__webglTexture,0,ze(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,i.get(B).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(b,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||Je(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Gi?ne=t.DEPTH_COMPONENT32F:ee.type===Vi&&(ne=t.DEPTH_COMPONENT24));const ie=ze(S);Je(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const ne=ze(S);B&&Je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):Je(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],_e=o.convert(ie.format,ie.colorSpace),se=o.convert(ie.type),de=D(ie.internalFormat,_e,se,ie.colorSpace),Ae=ze(S);B&&Je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,de,S.width,S.height):Je(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,de,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,de,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function cn(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const ne=i.get(S.depthTexture).__webglTexture,ee=ze(S);if(S.depthTexture.format===Dr)Je(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Ko)Je(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function xe(b){const S=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");cn(S.__webglFramebuffer,b)}else if(B){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=t.createRenderbuffer(),k(S.__webglDepthbuffer[ne],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),k(S.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(b,S,B){const ne=i.get(b);S!==void 0&&Te(ne.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&xe(b)}function Pe(b){const S=b.texture,B=i.get(b),ne=i.get(S);b.addEventListener("dispose",Z),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=S.version,s.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,_e=x(b)||a;if(ee){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let de=0;de<S.mipmaps.length;de++)B.__webglFramebuffer[se][de]=t.createFramebuffer()}else B.__webglFramebuffer[se]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)B.__webglFramebuffer[se]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const se=b.texture;for(let de=0,Ae=se.length;de<Ae;de++){const Xe=i.get(se[de]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Je(b)===!1){const se=ie?S:[S];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const Ae=se[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const Xe=o.convert(Ae.format,Ae.colorSpace),te=o.convert(Ae.type),Ke=D(Ae.internalFormat,Xe,te,Ae.colorSpace,b.isXRRenderTarget===!0),De=ze(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Ke,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),k(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),we(t.TEXTURE_CUBE_MAP,S,_e);for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Te(B.__webglFramebuffer[se][de],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else Te(B.__webglFramebuffer[se],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);C(S,_e)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const se=b.texture;for(let de=0,Ae=se.length;de<Ae;de++){const Xe=se[de],te=i.get(Xe);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),we(t.TEXTURE_2D,Xe,_e),Te(B.__webglFramebuffer,b,Xe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),C(Xe,_e)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,ne.__webglTexture),we(se,S,_e),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Te(B.__webglFramebuffer[de],b,S,t.COLOR_ATTACHMENT0,se,de);else Te(B.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,se,0);C(S,_e)&&w(se),n.unbindTexture()}b.depthBuffer&&xe(b)}function dt(b){const S=x(b)||a,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,ee=B.length;ne<ee;ne++){const ie=B[ne];if(C(ie,S)){const _e=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(ie).__webglTexture;n.bindTexture(_e,se),w(_e),n.unbindTexture()}}}function ke(b){if(a&&b.samples>0&&Je(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,ne=b.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],_e=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){ie.push(t.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&ie.push(_e);const Xe=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Xe===!1&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[Ae]),Xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),de){const te=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,ee,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,se.__webglColorRenderbuffer[Ae]);const Xe=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function ze(b){return Math.min(d,b.samples)}function Je(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(b){const S=s.render.frame;y.get(b)!==S&&(y.set(b,S),b.update())}function zt(b,S){const B=b.colorSpace,ne=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===ed||B!==Ci&&B!==Rn&&(Ze.getTransfer(B)===st?a===!1?e.has("EXT_sRGB")===!0&&ne===Wn?(b.format=ed,b.minFilter=Cn,b.generateMipmaps=!1):S=m0.sRGBToLinear(S):(ne!==Wn||ee!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=N,this.resetTextureUnits=$,this.setTexture2D=F,this.setTexture2DArray=R,this.setTexture3D=I,this.setTextureCube=le,this.rebindTextures=Le,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Je}function xC(t,e,n){const i=n.isWebGL2;function r(o,s=Rn){let a;const l=Ze.getTransfer(s);if(o===er)return t.UNSIGNED_BYTE;if(o===l0)return t.UNSIGNED_SHORT_4_4_4_4;if(o===u0)return t.UNSIGNED_SHORT_5_5_5_1;if(o===eM)return t.BYTE;if(o===tM)return t.SHORT;if(o===fh)return t.UNSIGNED_SHORT;if(o===a0)return t.INT;if(o===Vi)return t.UNSIGNED_INT;if(o===Gi)return t.FLOAT;if(o===sa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===nM)return t.ALPHA;if(o===Wn)return t.RGBA;if(o===iM)return t.LUMINANCE;if(o===rM)return t.LUMINANCE_ALPHA;if(o===Dr)return t.DEPTH_COMPONENT;if(o===Ko)return t.DEPTH_STENCIL;if(o===ed)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===oM)return t.RED;if(o===c0)return t.RED_INTEGER;if(o===sM)return t.RG;if(o===f0)return t.RG_INTEGER;if(o===d0)return t.RGBA_INTEGER;if(o===gc||o===_c||o===vc||o===yc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===_c)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===vc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===em||o===tm||o===nm||o===im)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===em)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===tm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===nm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===im)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===aM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===rm||o===om)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===rm)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===om)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===sm||o===am||o===lm||o===um||o===cm||o===fm||o===dm||o===hm||o===pm||o===mm||o===gm||o===_m||o===vm||o===ym)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===sm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===am)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===lm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===um)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===cm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===fm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===dm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===hm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===pm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===mm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===gm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===_m)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===vm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===ym)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===xc||o===xm||o===Sm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===xc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===xm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Sm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===lM||o===Em||o===Mm||o===Tm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===xc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Em)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Mm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Tm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class SC extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EC={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,y=.005;u.inputState.pinching&&h>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class MC extends vn{constructor(e,n,i,r,o,s,a,l,u,f){if(f=f!==void 0?f:Dr,f!==Dr&&f!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Dr&&(i=Vi),i===void 0&&f===Ko&&(i=Lr),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class TC extends ns{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,y=null;const v=n.getContextAttributes();let p=null,c=null;const _=[],g=[],x=new bn;x.layers.enable(1),x.viewport=new It;const M=new bn;M.layers.enable(2),M.viewport=new It;const C=[x,M],w=new SC;w.layers.enable(1),w.layers.enable(2);let D=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let I=_[R];return I===void 0&&(I=new Xc,_[R]=I),I.getTargetRaySpace()},this.getControllerGrip=function(R){let I=_[R];return I===void 0&&(I=new Xc,_[R]=I),I.getGripSpace()},this.getHand=function(R){let I=_[R];return I===void 0&&(I=new Xc,_[R]=I),I.getHandSpace()};function A(R){const I=g.indexOf(R.inputSource);if(I===-1)return;const le=_[I];le!==void 0&&(le.update(R.inputSource,R.frame,u||s),le.dispatchEvent({type:R.type,data:R.inputSource}))}function j(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Z);for(let R=0;R<_.length;R++){const I=g[R];I!==null&&(g[R]=null,_[R].disconnect(I))}D=null,E=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,c=null,F.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){o=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(R){u=R},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,I),r.updateRenderState({baseLayer:m}),c=new Hr(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let I=null,le=null,ae=null;v.depth&&(ae=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,I=v.stencil?Ko:Dr,le=v.stencil?Lr:Vi);const ce={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),c=new Hr(h.textureWidth,h.textureHeight,{format:Wn,type:er,depthTexture:new MC(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ge=e.properties.get(c);ge.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),F.setContext(r),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(R){for(let I=0;I<R.removed.length;I++){const le=R.removed[I],ae=g.indexOf(le);ae>=0&&(g[ae]=null,_[ae].disconnect(le))}for(let I=0;I<R.added.length;I++){const le=R.added[I];let ae=g.indexOf(le);if(ae===-1){for(let ge=0;ge<_.length;ge++)if(ge>=g.length){g.push(le),ae=ge;break}else if(g[ge]===null){g[ge]=le,ae=ge;break}if(ae===-1)break}const ce=_[ae];ce&&ce.connect(le)}}const Q=new V,L=new V;function X(R,I,le){Q.setFromMatrixPosition(I.matrixWorld),L.setFromMatrixPosition(le.matrixWorld);const ae=Q.distanceTo(L),ce=I.projectionMatrix.elements,ge=le.projectionMatrix.elements,we=ce[14]/(ce[10]-1),ye=ce[14]/(ce[10]+1),Re=(ce[9]+1)/ce[5],Qe=(ce[9]-1)/ce[5],Te=(ce[8]-1)/ce[0],k=(ge[8]+1)/ge[0],cn=we*Te,xe=we*k,Le=ae/(-Te+k),Pe=Le*-Te;I.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Pe),R.translateZ(Le),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const dt=we+Le,ke=ye+Le,ze=cn-Pe,Je=xe+(ae-Pe),At=Re*ye/ke*dt,zt=Qe*ye/ke*dt;R.projectionMatrix.makePerspective(ze,Je,At,zt,dt,ke),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function K(R,I){I===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(I.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;w.near=M.near=x.near=R.near,w.far=M.far=x.far=R.far,(D!==w.near||E!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,E=w.far);const I=R.parent,le=w.cameras;K(w,I);for(let ae=0;ae<le.length;ae++)K(le[ae],I);le.length===2?X(w,x,M):w.projectionMatrix.copy(x.projectionMatrix),$(R,w,I)};function $(R,I,le){le===null?R.matrix.copy(I.matrixWorld):(R.matrix.copy(le.matrixWorld),R.matrix.invert(),R.matrix.multiply(I.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(I.projectionMatrix),R.projectionMatrixInverse.copy(I.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=td*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(R){l=R,h!==null&&(h.fixedFoveation=R),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=R)};let N=null;function z(R,I){if(f=I.getViewerPose(u||s),y=I,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ae=!1;le.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let ce=0;ce<le.length;ce++){const ge=le[ce];let we=null;if(m!==null)we=m.getViewport(ge);else{const Re=d.getViewSubImage(h,ge);we=Re.viewport,ce===0&&(e.setRenderTargetTextures(c,Re.colorTexture,h.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(c))}let ye=C[ce];ye===void 0&&(ye=new bn,ye.layers.enable(ce),ye.viewport=new It,C[ce]=ye),ye.matrix.fromArray(ge.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(ge.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(we.x,we.y,we.width,we.height),ce===0&&(w.matrix.copy(ye.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(ye)}}for(let le=0;le<_.length;le++){const ae=g[le],ce=_[le];ae!==null&&ce!==void 0&&ce.update(ae,I,u||s)}N&&N(R,I),I.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:I}),y=null}const F=new C0;F.setAnimationLoop(z),this.setAnimationLoop=function(R){N=R},this.dispose=function(){}}}function wC(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,M0(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(p,c):c.isMeshToonMaterial?(o(p,c),d(p,c)):c.isMeshPhongMaterial?(o(p,c),f(p,c)):c.isMeshStandardMaterial?(o(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,x)):c.isMeshMatcapMaterial?(o(p,c),y(p,c)):c.isMeshDepthMaterial?o(p,c):c.isMeshDistanceMaterial?(o(p,c),v(p,c)):c.isMeshNormalMaterial?o(p,c):c.isLineBasicMaterial?(s(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===un&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===un&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function s(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===un&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AC(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const x=g.program;i.uniformBlockBinding(_,x)}function u(_,g){let x=r[_.id];x===void 0&&(y(_),x=f(_),r[_.id]=x,_.addEventListener("dispose",p));const M=g.program;i.updateUBOMapping(_,M);const C=e.render.frame;o[_.id]!==C&&(h(_),o[_.id]=C)}function f(_){const g=d();_.__bindingPointIndex=g;const x=t.createBuffer(),M=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],x=_.uniforms,M=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=x.length;C<w;C++){const D=x[C];if(m(D,C,M)===!0){const E=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let Z=0;Z<A.length;Z++){const Q=A[Z],L=v(Q);typeof Q=="number"?(D.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,E+j,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=Q.elements[0],D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=Q.elements[0],D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=Q.elements[0]):(Q.toArray(D.__data,j),j+=L.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,E,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,x){const M=_.value;if(x[g]===void 0){if(typeof M=="number")x[g]=M;else{const C=Array.isArray(M)?M:[M],w=[];for(let D=0;D<C.length;D++)w.push(C[D].clone());x[g]=w}return!0}else if(typeof M=="number"){if(x[g]!==M)return x[g]=M,!0}else{const C=Array.isArray(x[g])?x[g]:[x[g]],w=Array.isArray(M)?M:[M];for(let D=0;D<C.length;D++){const E=C[D];if(E.equals(w[D])===!1)return E.copy(w[D]),!0}}return!1}function y(_){const g=_.uniforms;let x=0;const M=16;let C=0;for(let w=0,D=g.length;w<D;w++){const E=g[w],A={boundary:0,storage:0},j=Array.isArray(E.value)?E.value:[E.value];for(let Z=0,Q=j.length;Z<Q;Z++){const L=j[Z],X=v(L);A.boundary+=X.boundary,A.storage+=X.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,w>0){C=x%M;const Z=M-C;C!==0&&Z-A.boundary<0&&(x+=M-C,E.__offset=x)}x+=A.storage}return C=x%M,C>0&&(x+=M-C),_.__size=x,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const x=s.indexOf(g.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class D0{constructor(e={}){const{canvas:n=EM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),y=new Int32Array(4);let v=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const g=this;let x=!1,M=0,C=0,w=null,D=-1,E=null;const A=new It,j=new It;let Z=null;const Q=new Ye(0);let L=0,X=n.width,K=n.height,$=1,N=null,z=null;const F=new It(0,0,X,K),R=new It(0,0,X,K);let I=!1;const le=new A0;let ae=!1,ce=!1,ge=null;const we=new Ft,ye=new et,Re=new V,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return w===null?$:1}let k=i;function cn(T,U){for(let H=0;H<T.length;H++){const G=T[H],W=n.getContext(G,U);if(W!==null)return W}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ch}`),n.addEventListener("webglcontextlost",Ge,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",fe,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),k=cn(U,T),k===null)throw cn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,Le,Pe,dt,ke,ze,Je,At,zt,b,S,B,ne,ee,ie,_e,se,de,Ae,Xe,te,Ke,De,Ce;function Se(){xe=new Ow(k),Le=new Rw(k,xe,e),xe.init(Le),Ke=new xC(k,xe,Le),Pe=new vC(k,xe,Le),dt=new zw(k),ke=new rC,ze=new yC(k,xe,Pe,ke,Le,Ke,dt),Je=new Lw(g),At=new Iw(g),zt=new YM(k,Le),De=new Cw(k,xe,zt,Le),b=new Fw(k,zt,dt,De),S=new Gw(k,b,zt,dt),Ae=new Vw(k,Le,ze),_e=new Pw(ke),B=new iC(g,Je,At,xe,Le,De,_e),ne=new wC(g,ke),ee=new sC,ie=new dC(xe,Le),de=new Aw(g,Je,At,Pe,S,h,l),se=new _C(g,S,Le),Ce=new AC(k,dt,Le,Pe),Xe=new bw(k,xe,dt,Le),te=new kw(k,xe,dt,Le),dt.programs=B.programs,g.capabilities=Le,g.extensions=xe,g.properties=ke,g.renderLists=ee,g.shadowMap=se,g.state=Pe,g.info=dt}Se();const me=new TC(g,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,U,H=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=U,n.width=Math.floor(T*$),n.height=Math.floor(U*$),H===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*$,K*$).floor()},this.setDrawingBufferSize=function(T,U,H){X=T,K=U,$=H,n.width=Math.floor(T*H),n.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,U,H,G){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,U,H,G),Pe.viewport(A.copy(F).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(R)},this.setScissor=function(T,U,H,G){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,U,H,G),Pe.scissor(j.copy(R).multiplyScalar($).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){Pe.setScissorTest(I=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(T=!0,U=!0,H=!0){let G=0;if(T){let W=!1;if(w!==null){const he=w.texture.format;W=he===d0||he===f0||he===c0}if(W){const he=w.texture.type,ve=he===er||he===Vi||he===fh||he===Lr||he===l0||he===u0,Me=de.getClearColor(),be=de.getClearAlpha(),Fe=Me.r,Ue=Me.g,Ne=Me.b;ve?(m[0]=Fe,m[1]=Ue,m[2]=Ne,m[3]=be,k.clearBufferuiv(k.COLOR,0,m)):(y[0]=Fe,y[1]=Ue,y[2]=Ne,y[3]=be,k.clearBufferiv(k.COLOR,0,y))}else G|=k.COLOR_BUFFER_BIT}U&&(G|=k.DEPTH_BUFFER_BIT),H&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ge,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ee.dispose(),ie.dispose(),ke.dispose(),Je.dispose(),At.dispose(),S.dispose(),De.dispose(),Ce.dispose(),B.dispose(),me.dispose(),me.removeEventListener("sessionstart",Mn),me.removeEventListener("sessionend",tt),ge&&(ge.dispose(),ge=null),$t.stop()};function Ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=dt.autoReset,U=se.enabled,H=se.autoUpdate,G=se.needsUpdate,W=se.type;Se(),dt.autoReset=T,se.enabled=U,se.autoUpdate=H,se.needsUpdate=G,se.type=W}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const U=T.target;U.removeEventListener("dispose",re),Y(U)}function Y(T){oe(T),ke.remove(T)}function oe(T){const U=ke.get(T).programs;U!==void 0&&(U.forEach(function(H){B.releaseProgram(H)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,G,W,he){U===null&&(U=Qe);const ve=W.isMesh&&W.matrixWorld.determinant()<0,Me=H0(T,U,H,G,W);Pe.setMaterial(G,ve);let be=H.index,Fe=1;if(G.wireframe===!0){if(be=b.getWireframeAttribute(H),be===void 0)return;Fe=2}const Ue=H.drawRange,Ne=H.attributes.position;let mt=Ue.start*Fe,fn=(Ue.start+Ue.count)*Fe;he!==null&&(mt=Math.max(mt,he.start*Fe),fn=Math.min(fn,(he.start+he.count)*Fe)),be!==null?(mt=Math.max(mt,0),fn=Math.min(fn,be.count)):Ne!=null&&(mt=Math.max(mt,0),fn=Math.min(fn,Ne.count));const Ct=fn-mt;if(Ct<0||Ct===1/0)return;De.setup(W,G,Me,H,be);let ai,ht=Xe;if(be!==null&&(ai=zt.get(be),ht=te,ht.setIndex(ai)),W.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*Te()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(W.isLine){let He=G.linewidth;He===void 0&&(He=1),Pe.setLineWidth(He*Te()),W.isLineSegments?ht.setMode(k.LINES):W.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else W.isPoints?ht.setMode(k.POINTS):W.isSprite&&ht.setMode(k.TRIANGLES);if(W.isInstancedMesh)ht.renderInstances(mt,Ct,W.count);else if(H.isInstancedBufferGeometry){const He=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Iu=Math.min(H.instanceCount,He);ht.renderInstances(mt,Ct,Iu)}else ht.render(mt,Ct)};function Ee(T,U,H){T.transparent===!0&&T.side===_i&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,ya(T,U,H),T.side=ir,T.needsUpdate=!0,ya(T,U,H),T.side=_i):ya(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),p=ie.get(H),p.init(),_.push(p),H.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==H&&T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(g._useLegacyLights);const G=new Set;return T.traverse(function(W){const he=W.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const Me=he[ve];Ee(Me,H,W),G.add(Me)}else Ee(he,H,W),G.add(he)}),_.pop(),p=null,G},this.compileAsync=function(T,U,H=null){const G=this.compile(T,U,H);return new Promise(W=>{function he(){if(G.forEach(function(ve){ke.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){W(T);return}setTimeout(he,10)}xe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let $e=null;function _t(T){$e&&$e(T)}function Mn(){$t.stop()}function tt(){$t.start()}const $t=new C0;$t.setAnimationLoop(_t),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(T){$e=T,me.setAnimationLoop(T),T===null?$t.stop():$t.start()},me.addEventListener("sessionstart",Mn),me.addEventListener("sessionend",tt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,U,w),p=ie.get(T,_.length),p.init(),_.push(p),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),le.setFromProjectionMatrix(we),ce=this.localClippingEnabled,ae=_e.init(this.clippingPlanes,ce),v=ee.get(T,c.length),v.init(),c.push(v),Zn(T,U,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(N,z),this.info.render.frame++,ae===!0&&_e.beginShadows();const H=p.state.shadowsArray;if(se.render(H,T,U),ae===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(v,T),p.setupLights(g._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let W=0,he=G.length;W<he;W++){const ve=G[W];vh(v,T,ve,ve.viewport)}}else vh(v,T,U);w!==null&&(ze.updateMultisampleRenderTarget(w),ze.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,U),De.resetDefaultState(),D=-1,E=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function Zn(T,U,H,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||le.intersectsSprite(T)){G&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const ve=S.update(T),Me=T.material;Me.visible&&v.push(T,ve,Me,H,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||le.intersectsObject(T))){const ve=S.update(T),Me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Re.copy(ve.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Me)){const be=ve.groups;for(let Fe=0,Ue=be.length;Fe<Ue;Fe++){const Ne=be[Fe],mt=Me[Ne.materialIndex];mt&&mt.visible&&v.push(T,ve,mt,H,Re.z,Ne)}}else Me.visible&&v.push(T,ve,Me,H,Re.z,null)}}const he=T.children;for(let ve=0,Me=he.length;ve<Me;ve++)Zn(he[ve],U,H,G)}function vh(T,U,H,G){const W=T.opaque,he=T.transmissive,ve=T.transparent;p.setupLightsView(H),ae===!0&&_e.setGlobalState(g.clippingPlanes,H),he.length>0&&B0(W,he,U,H),G&&Pe.viewport(A.copy(G)),W.length>0&&va(W,U,H),he.length>0&&va(he,U,H),ve.length>0&&va(ve,U,H),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function B0(T,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const he=Le.isWebGL2;ge===null&&(ge=new Hr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?sa:er,minFilter:oa,samples:he?4:0})),g.getDrawingBufferSize(ye),he?ge.setSize(ye.x,ye.y):ge.setSize(nd(ye.x),nd(ye.y));const ve=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(Q),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=Ji,va(T,H,G),ze.updateMultisampleRenderTarget(ge),ze.updateRenderTargetMipmap(ge);let be=!1;for(let Fe=0,Ue=U.length;Fe<Ue;Fe++){const Ne=U[Fe],mt=Ne.object,fn=Ne.geometry,Ct=Ne.material,ai=Ne.group;if(Ct.side===_i&&mt.layers.test(G.layers)){const ht=Ct.side;Ct.side=un,Ct.needsUpdate=!0,yh(mt,H,G,fn,Ct,ai),Ct.side=ht,Ct.needsUpdate=!0,be=!0}}be===!0&&(ze.updateMultisampleRenderTarget(ge),ze.updateRenderTargetMipmap(ge)),g.setRenderTarget(ve),g.setClearColor(Q,L),g.toneMapping=Me}function va(T,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,he=T.length;W<he;W++){const ve=T[W],Me=ve.object,be=ve.geometry,Fe=G===null?ve.material:G,Ue=ve.group;Me.layers.test(H.layers)&&yh(Me,U,H,be,Fe,Ue)}}function yh(T,U,H,G,W,he){T.onBeforeRender(g,U,H,G,W,he),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(g,U,H,G,T,he),W.transparent===!0&&W.side===_i&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,g.renderBufferDirect(H,U,G,W,T,he),W.side=ir,W.needsUpdate=!0,g.renderBufferDirect(H,U,G,W,T,he),W.side=_i):g.renderBufferDirect(H,U,G,W,T,he),T.onAfterRender(g,U,H,G,W,he)}function ya(T,U,H){U.isScene!==!0&&(U=Qe);const G=ke.get(T),W=p.state.lights,he=p.state.shadowsArray,ve=W.state.version,Me=B.getParameters(T,W.state,he,U,H),be=B.getProgramCacheKey(Me);let Fe=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?At:Je).get(T.envMap||G.environment),Fe===void 0&&(T.addEventListener("dispose",re),Fe=new Map,G.programs=Fe);let Ue=Fe.get(be);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===ve)return Sh(T,Me),Ue}else Me.uniforms=B.getUniforms(T),T.onBuild(H,Me,g),T.onBeforeCompile(Me,g),Ue=B.acquireProgram(Me,be),Fe.set(be,Ue),G.uniforms=Me.uniforms;const Ne=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=_e.uniform),Sh(T,Me),G.needsLights=G0(T),G.lightsStateVersion=ve,G.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function xh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Al.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Sh(T,U){const H=ke.get(T);H.outputColorSpace=U.outputColorSpace,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function H0(T,U,H,G,W){U.isScene!==!0&&(U=Qe),ze.resetTextureUnits();const he=U.fog,ve=G.isMeshStandardMaterial?U.environment:null,Me=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ci,be=(G.isMeshStandardMaterial?At:Je).get(G.envMap||ve),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!H.morphAttributes.position,mt=!!H.morphAttributes.normal,fn=!!H.morphAttributes.color;let Ct=Ji;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ct=g.toneMapping);const ai=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ht=ai!==void 0?ai.length:0,He=ke.get(G),Iu=p.state.lights;if(ae===!0&&(ce===!0||T!==E)){const dn=T===E&&G.id===D;_e.setState(G,T,dn)}let vt=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Iu.state.version||He.outputColorSpace!==Me||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||He.envMap!==be||G.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_e.numPlanes||He.numIntersection!==_e.numIntersection)||He.vertexAlphas!==Fe||He.vertexTangents!==Ue||He.morphTargets!==Ne||He.morphNormals!==mt||He.morphColors!==fn||He.toneMapping!==Ct||Le.isWebGL2===!0&&He.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,He.__version=G.version);let fr=He.currentProgram;vt===!0&&(fr=ya(G,U,W));let Eh=!1,rs=!1,Ou=!1;const jt=fr.getUniforms(),dr=He.uniforms;if(Pe.useProgram(fr.program)&&(Eh=!0,rs=!0,Ou=!0),G.id!==D&&(D=G.id,rs=!0),Eh||E!==T){jt.setValue(k,"projectionMatrix",T.projectionMatrix),jt.setValue(k,"viewMatrix",T.matrixWorldInverse);const dn=jt.map.cameraPosition;dn!==void 0&&dn.setValue(k,Re.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&jt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&jt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,rs=!0,Ou=!0)}if(W.isSkinnedMesh){jt.setOptional(k,W,"bindMatrix"),jt.setOptional(k,W,"bindMatrixInverse");const dn=W.skeleton;dn&&(Le.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),jt.setValue(k,"boneTexture",dn.boneTexture,ze),jt.setValue(k,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fu=H.morphAttributes;if((Fu.position!==void 0||Fu.normal!==void 0||Fu.color!==void 0&&Le.isWebGL2===!0)&&Ae.update(W,H,fr),(rs||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,jt.setValue(k,"receiveShadow",W.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dr.envMap.value=be,dr.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),rs&&(jt.setValue(k,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&V0(dr,Ou),he&&G.fog===!0&&ne.refreshFogUniforms(dr,he),ne.refreshMaterialUniforms(dr,G,$,K,ge),Al.upload(k,xh(He),dr,ze)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Al.upload(k,xh(He),dr,ze),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&jt.setValue(k,"center",W.center),jt.setValue(k,"modelViewMatrix",W.modelViewMatrix),jt.setValue(k,"normalMatrix",W.normalMatrix),jt.setValue(k,"modelMatrix",W.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const dn=G.uniformsGroups;for(let ku=0,W0=dn.length;ku<W0;ku++)if(Le.isWebGL2){const Mh=dn[ku];Ce.update(Mh,fr),Ce.bind(Mh,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function V0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function G0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,H){ke.get(T.texture).__webglTexture=U,ke.get(T.depthTexture).__webglTexture=H;const G=ke.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const H=ke.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){w=T,M=U,C=H;let G=!0,W=null,he=!1,ve=!1;if(T){const be=ke.get(T);be.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(k.FRAMEBUFFER,null),G=!1):be.__webglFramebuffer===void 0?ze.setupRenderTarget(T):be.__hasExternalTextures&&ze.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const Ue=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?W=Ue[U][H]:W=Ue[U],he=!0):Le.isWebGL2&&T.samples>0&&ze.useMultisampledRTT(T)===!1?W=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[H]:W=Ue,A.copy(T.viewport),j.copy(T.scissor),Z=T.scissorTest}else A.copy(F).multiplyScalar($).floor(),j.copy(R).multiplyScalar($).floor(),Z=I;if(Pe.bindFramebuffer(k.FRAMEBUFFER,W)&&Le.drawBuffers&&G&&Pe.drawBuffers(T,W),Pe.viewport(A),Pe.scissor(j),Pe.setScissorTest(Z),he){const be=ke.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,H)}else if(ve){const be=ke.get(T.texture),Fe=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,be.__webglTexture,H||0,Fe)}D=-1},this.readRenderTargetPixels=function(T,U,H,G,W,he,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){Pe.bindFramebuffer(k.FRAMEBUFFER,Me);try{const be=T.texture,Fe=be.format,Ue=be.type;if(Fe!==Wn&&Ke.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ue===sa&&(xe.has("EXT_color_buffer_half_float")||Le.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ue!==er&&Ke.convert(Ue)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Gi&&(Le.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&H>=0&&H<=T.height-W&&k.readPixels(U,H,G,W,Ke.convert(Fe),Ke.convert(Ue),he)}finally{const be=w!==null?ke.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(k.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(T,U,H=0){const G=Math.pow(2,-H),W=Math.floor(U.image.width*G),he=Math.floor(U.image.height*G);ze.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,T.x,T.y,W,he),Pe.unbindTexture()},this.copyTextureToTexture=function(T,U,H,G=0){const W=U.image.width,he=U.image.height,ve=Ke.convert(H.format),Me=Ke.convert(H.type);ze.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,T.x,T.y,W,he,ve,Me,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,G,T.x,T.y,ve,Me,U.image),G===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H,G,W=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,ve=T.max.y-T.min.y+1,Me=T.max.z-T.min.z+1,be=Ke.convert(G.format),Fe=Ke.convert(G.type);let Ue;if(G.isData3DTexture)ze.setTexture3D(G,0),Ue=k.TEXTURE_3D;else if(G.isDataArrayTexture)ze.setTexture2DArray(G,0),Ue=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const Ne=k.getParameter(k.UNPACK_ROW_LENGTH),mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),fn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ct=k.getParameter(k.UNPACK_SKIP_ROWS),ai=k.getParameter(k.UNPACK_SKIP_IMAGES),ht=H.isCompressedTexture?H.mipmaps[0]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(Ue,W,U.x,U.y,U.z,he,ve,Me,be,Fe,ht.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ue,W,U.x,U.y,U.z,he,ve,Me,be,ht.data)):k.texSubImage3D(Ue,W,U.x,U.y,U.z,he,ve,Me,be,Fe,ht),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ne),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,fn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ct),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ai),W===0&&G.generateMipmaps&&k.generateMipmap(Ue),Pe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){M=0,C=0,w=null,Pe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dh?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Pu?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Ur:h0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Nt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CC extends D0{}CC.prototype.isWebGL1Renderer=!0;let bC=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);function RC(t){if(t&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}}function Co(t,e){var n=t.__state.conversionName.toString(),i=Math.round(t.r),r=Math.round(t.g),o=Math.round(t.b),s=t.a,a=Math.round(t.h),l=t.s.toFixed(1),u=t.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var f=t.hex.toString(16);f.length<6;)f="0"+f;return"#"+f}else{if(n==="CSS_RGB")return"rgb("+i+","+r+","+o+")";if(n==="CSS_RGBA")return"rgba("+i+","+r+","+o+","+s+")";if(n==="HEX")return"0x"+t.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+r+","+o+"]";if(n==="RGBA_ARRAY")return"["+i+","+r+","+o+","+s+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+o+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+o+",a:"+s+"}";if(n==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(n==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+s+"}"}return"unknown format"}var hg=Array.prototype.forEach,vs=Array.prototype.slice,q={BREAK:{},extend:function(e){return this.each(vs.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(r){this.isUndefined(n[r])||(e[r]=n[r])}).bind(this))},this),e},defaults:function(e){return this.each(vs.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(r){this.isUndefined(e[r])&&(e[r]=n[r])}).bind(this))},this),e},compose:function(){var e=vs.call(arguments);return function(){for(var n=vs.call(arguments),i=e.length-1;i>=0;i--)n=[e[i].apply(this,n)];return n[0]}},each:function(e,n,i){if(e){if(hg&&e.forEach&&e.forEach===hg)e.forEach(n,i);else if(e.length===e.length+0){var r=void 0,o=void 0;for(r=0,o=e.length;r<o;r++)if(r in e&&n.call(i,e[r],r)===this.BREAK)return}else for(var s in e)if(n.call(i,e[s],s)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,i){var r=void 0;return function(){var o=this,s=arguments;function a(){r=null,i||e.apply(o,s)}var l=i||!r;clearTimeout(r),r=setTimeout(a,n),l&&e.apply(o,s)}},toArray:function(e){return e.toArray?e.toArray():vs.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(t){function e(n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return isNaN(t)}),isArray:Array.isArray||function(t){return t.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},PC=[{litmus:q.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:Co},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:Co},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:Co},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:Co}}},{litmus:q.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:q.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:q.isObject,conversions:{RGBA_OBJ:{read:function(e){return q.isNumber(e.r)&&q.isNumber(e.g)&&q.isNumber(e.b)&&q.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return q.isNumber(e.r)&&q.isNumber(e.g)&&q.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return q.isNumber(e.h)&&q.isNumber(e.s)&&q.isNumber(e.v)&&q.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return q.isNumber(e.h)&&q.isNumber(e.s)&&q.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],ys=void 0,al=void 0,rd=function(){al=!1;var e=arguments.length>1?q.toArray(arguments):arguments[0];return q.each(PC,function(n){if(n.litmus(e))return q.each(n.conversions,function(i,r){if(ys=i.read(e),al===!1&&ys!==!1)return al=ys,ys.conversionName=r,ys.conversion=i,q.BREAK}),q.BREAK}),al},pg=void 0,su={hsv_to_rgb:function(e,n,i){var r=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),s=i*(1-n),a=i*(1-o*n),l=i*(1-(1-o)*n),u=[[i,l,s],[a,i,s],[s,i,l],[s,a,i],[l,s,i],[i,s,a]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,n,i){var r=Math.min(e,n,i),o=Math.max(e,n,i),s=o-r,a=void 0,l=void 0;if(o!==0)l=s/o;else return{h:NaN,s:0,v:0};return e===o?a=(n-i)/s:n===o?a=2+(i-e)/s:a=4+(e-n)/s,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:o/255}},rgb_to_hex:function(e,n,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,n),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,i){return i<<(pg=n*8)|e&~(255<<pg)}},LC=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Kn=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),or=function t(e,n,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(r===void 0){var o=Object.getPrototypeOf(e);return o===null?void 0:t(o,n,i)}else{if("value"in r)return r.value;var s=r.get;return s===void 0?void 0:s.call(i)}},ur=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},cr=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Dt=function(){function t(){if(qn(this,t),this.__state=rd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Kn(t,[{key:"toString",value:function(){return Co(this)}},{key:"toHexString",value:function(){return Co(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),t}();function mh(t,e,n){Object.defineProperty(t,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Dt.recalculateRGB(this,e,n),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Dt.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=r}})}function gh(t,e){Object.defineProperty(t,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Dt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Dt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Dt.recalculateRGB=function(t,e,n){if(t.__state.space==="HEX")t.__state[e]=su.component_from_hex(t.__state.hex,n);else if(t.__state.space==="HSV")q.extend(t.__state,su.hsv_to_rgb(t.__state.h,t.__state.s,t.__state.v));else throw new Error("Corrupted color state")};Dt.recalculateHSV=function(t){var e=su.rgb_to_hsv(t.r,t.g,t.b);q.extend(t.__state,{s:e.s,v:e.v}),q.isNaN(e.h)?q.isUndefined(t.__state.h)&&(t.__state.h=0):t.__state.h=e.h};Dt.COMPONENTS=["r","g","b","h","s","v","hex","a"];mh(Dt.prototype,"r",2);mh(Dt.prototype,"g",1);mh(Dt.prototype,"b",0);gh(Dt.prototype,"h");gh(Dt.prototype,"s");gh(Dt.prototype,"v");Object.defineProperty(Dt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Dt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=su.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Xr=function(){function t(e,n){qn(this,t),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return Kn(t,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),t}(),DC={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},U0={};q.each(DC,function(t,e){q.each(t,function(n){U0[n]=e})});var UC=/(\d+(\.\d+)?)px/;function Jn(t){if(t==="0"||q.isUndefined(t))return 0;var e=t.match(UC);return q.isNull(e)?0:parseFloat(e[1])}var O={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,i){var r=i,o=n;q.isUndefined(o)&&(o=!0),q.isUndefined(r)&&(r=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,i,r){var o=i||{},s=U0[n];if(!s)throw new Error("Event type "+n+" not supported.");var a=document.createEvent(s);switch(s){case"MouseEvents":{var l=o.x||o.clientX||0,u=o.y||o.clientY||0;a.initMouseEvent(n,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var f=a.initKeyboardEvent||a.initKeyEvent;q.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),f(n,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break}default:{a.initEvent(n,o.bubbles||!1,o.cancelable||!0);break}}q.defaults(a,r),e.dispatchEvent(a)},bind:function(e,n,i,r){var o=r||!1;return e.addEventListener?e.addEventListener(n,i,o):e.attachEvent&&e.attachEvent("on"+n,i),O},unbind:function(e,n,i,r){var o=r||!1;return e.removeEventListener?e.removeEventListener(n,i,o):e.detachEvent&&e.detachEvent("on"+n,i),O},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var i=e.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return O},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(n);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return O},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return Jn(n["border-left-width"])+Jn(n["border-right-width"])+Jn(n["padding-left"])+Jn(n["padding-right"])+Jn(n.width)},getHeight:function(e){var n=getComputedStyle(e);return Jn(n["border-top-width"])+Jn(n["border-bottom-width"])+Jn(n["padding-top"])+Jn(n["padding-bottom"])+Jn(n.height)},getOffset:function(e){var n=e,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},N0=function(t){ur(e,t);function e(n,i){qn(this,e);var r=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),o=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function s(){o.setValue(!o.__prev)}return O.bind(r.__checkbox,"change",s,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Kn(e,[{key:"setValue",value:function(i){var r=or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Xr),NC=function(t){ur(e,t);function e(n,i,r){qn(this,e);var o=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r,a=o;if(o.__select=document.createElement("select"),q.isArray(s)){var l={};q.each(s,function(u){l[u]=u}),s=l}return q.each(s,function(u,f){var d=document.createElement("option");d.innerHTML=f,d.setAttribute("value",u),a.__select.appendChild(d)}),o.updateDisplay(),O.bind(o.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),o.domElement.appendChild(o.__select),o}return Kn(e,[{key:"setValue",value:function(i){var r=or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return O.isActive(this.__select)?this:(this.__select.value=this.getValue(),or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Xr),IC=function(t){ur(e,t);function e(n,i){qn(this,e);var r=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),o=r;function s(){o.setValue(o.__input.value)}function a(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),O.bind(r.__input,"keyup",s),O.bind(r.__input,"change",s),O.bind(r.__input,"blur",a),O.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Kn(e,[{key:"updateDisplay",value:function(){return O.isActive(this.__input)||(this.__input.value=this.getValue()),or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Xr);function mg(t){var e=t.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var I0=function(t){ur(e,t);function e(n,i,r){qn(this,e);var o=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r||{};return o.__min=s.min,o.__max=s.max,o.__step=s.step,q.isUndefined(o.__step)?o.initialValue===0?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=mg(o.__impliedStep),o}return Kn(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=mg(i),this}}]),e}(Xr);function OC(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}var au=function(t){ur(e,t);function e(n,i,r){qn(this,e);var o=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,r));o.__truncationSuspended=!1;var s=o,a=void 0;function l(){var y=parseFloat(s.__input.value);q.isNaN(y)||s.setValue(y)}function u(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function f(){u()}function d(y){var v=a-y.clientY;s.setValue(s.getValue()+v*s.__impliedStep),a=y.clientY}function h(){O.unbind(window,"mousemove",d),O.unbind(window,"mouseup",h),u()}function m(y){O.bind(window,"mousemove",d),O.bind(window,"mouseup",h),a=y.clientY}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),O.bind(o.__input,"change",l),O.bind(o.__input,"blur",f),O.bind(o.__input,"mousedown",m),O.bind(o.__input,"keydown",function(y){y.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,u())}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return Kn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():OC(this.getValue(),this.__precision),or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(I0);function gg(t,e,n,i,r){return i+(r-i)*((t-e)/(n-e))}var od=function(t){ur(e,t);function e(n,i,r,o,s){qn(this,e);var a=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,{min:r,max:o,step:s})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),O.bind(a.__background,"mousedown",u),O.bind(a.__background,"touchstart",h),O.addClass(a.__background,"slider"),O.addClass(a.__foreground,"slider-fg");function u(v){document.activeElement.blur(),O.bind(window,"mousemove",f),O.bind(window,"mouseup",d),f(v)}function f(v){v.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(gg(v.clientX,p.left,p.right,l.__min,l.__max)),!1}function d(){O.unbind(window,"mousemove",f),O.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(v){v.touches.length===1&&(O.bind(window,"touchmove",m),O.bind(window,"touchend",y),m(v))}function m(v){var p=v.touches[0].clientX,c=l.__background.getBoundingClientRect();l.setValue(gg(p,c.left,c.right,l.__min,l.__max))}function y(){O.unbind(window,"touchmove",m),O.unbind(window,"touchend",y),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Kn(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(I0),O0=function(t){ur(e,t);function e(n,i,r){qn(this,e);var o=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=o;return o.__button=document.createElement("div"),o.__button.innerHTML=r===void 0?"Fire":r,O.bind(o.__button,"click",function(a){return a.preventDefault(),s.fire(),!1}),O.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return Kn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Xr),sd=function(t){ur(e,t);function e(n,i){qn(this,e);var r=cr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));r.__color=new Dt(r.getValue()),r.__temp=new Dt(0);var o=r;r.domElement=document.createElement("div"),O.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",O.bind(r.__input,"keydown",function(v){v.keyCode===13&&d.call(this)}),O.bind(r.__input,"blur",d),O.bind(r.__selector,"mousedown",function(){O.addClass(this,"drag").bind(window,"mouseup",function(){O.removeClass(o.__selector,"drag")})}),O.bind(r.__selector,"touchstart",function(){O.addClass(this,"drag").bind(window,"touchend",function(){O.removeClass(o.__selector,"drag")})});var s=document.createElement("div");q.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),q.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),q.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),q.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),q.extend(s.style,{width:"100%",height:"100%",background:"none"}),_g(s,"top","rgba(0,0,0,0)","#000"),q.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),kC(r.__hue_field),q.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),O.bind(r.__saturation_field,"mousedown",a),O.bind(r.__saturation_field,"touchstart",a),O.bind(r.__field_knob,"mousedown",a),O.bind(r.__field_knob,"touchstart",a),O.bind(r.__hue_field,"mousedown",l),O.bind(r.__hue_field,"touchstart",l);function a(v){m(v),O.bind(window,"mousemove",m),O.bind(window,"touchmove",m),O.bind(window,"mouseup",u),O.bind(window,"touchend",u)}function l(v){y(v),O.bind(window,"mousemove",y),O.bind(window,"touchmove",y),O.bind(window,"mouseup",f),O.bind(window,"touchend",f)}function u(){O.unbind(window,"mousemove",m),O.unbind(window,"touchmove",m),O.unbind(window,"mouseup",u),O.unbind(window,"touchend",u),h()}function f(){O.unbind(window,"mousemove",y),O.unbind(window,"touchmove",y),O.unbind(window,"mouseup",f),O.unbind(window,"touchend",f),h()}function d(){var v=rd(this.value);v!==!1?(o.__color.__state=v,o.setValue(o.__color.toOriginal())):this.value=o.__color.toString()}function h(){o.__onFinishChange&&o.__onFinishChange.call(o,o.__color.toOriginal())}r.__saturation_field.appendChild(s),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function m(v){v.type.indexOf("touch")===-1&&v.preventDefault();var p=o.__saturation_field.getBoundingClientRect(),c=v.touches&&v.touches[0]||v,_=c.clientX,g=c.clientY,x=(_-p.left)/(p.right-p.left),M=1-(g-p.top)/(p.bottom-p.top);return M>1?M=1:M<0&&(M=0),x>1?x=1:x<0&&(x=0),o.__color.v=M,o.__color.s=x,o.setValue(o.__color.toOriginal()),!1}function y(v){v.type.indexOf("touch")===-1&&v.preventDefault();var p=o.__hue_field.getBoundingClientRect(),c=v.touches&&v.touches[0]||v,_=c.clientY,g=1-(_-p.top)/(p.bottom-p.top);return g>1?g=1:g<0&&(g=0),o.__color.h=g*360,o.setValue(o.__color.toOriginal()),!1}return r}return Kn(e,[{key:"updateDisplay",value:function(){var i=rd(this.getValue());if(i!==!1){var r=!1;q.each(Dt.COMPONENTS,function(a){if(!q.isUndefined(i[a])&&!q.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&q.extend(this.__color.__state,i)}q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var o=this.__color.v<.5||this.__color.s>.5?255:0,s=255-o;q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+o+","+o+","+o+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,_g(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+o+","+o+","+o+")",textShadow:this.__input_textShadow+"rgba("+s+","+s+","+s+",.7)"})}}]),e}(Xr),FC=["-moz-","-o-","-webkit-","-ms-",""];function _g(t,e,n,i){t.style.background="",q.each(FC,function(r){t.style.cssText+="background: "+r+"linear-gradient("+e+", "+n+" 0%, "+i+" 100%); "})}function kC(t){t.style.background="",t.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",t.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var zC={load:function(e,n){var i=n||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,n){var i=n||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var o=i.getElementsByTagName("head")[0];try{o.appendChild(r)}catch{}}},BC=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,HC=function(e,n){var i=e[n];return q.isArray(arguments[2])||q.isObject(arguments[2])?new NC(e,n,arguments[2]):q.isNumber(i)?q.isNumber(arguments[2])&&q.isNumber(arguments[3])?q.isNumber(arguments[4])?new od(e,n,arguments[2],arguments[3],arguments[4]):new od(e,n,arguments[2],arguments[3]):q.isNumber(arguments[4])?new au(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new au(e,n,{min:arguments[2],max:arguments[3]}):q.isString(i)?new IC(e,n):q.isFunction(i)?new O0(e,n,""):q.isBoolean(i)?new N0(e,n):null};function VC(t){setTimeout(t,1e3/60)}var GC=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||VC,WC=function(){function t(){qn(this,t),this.backgroundElement=document.createElement("div"),q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),O.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;O.bind(this.backgroundElement,"click",function(){e.hide()})}return Kn(t,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),q.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function r(){n.domElement.style.display="none",n.backgroundElement.style.display="none",O.unbind(n.domElement,"webkitTransitionEnd",r),O.unbind(n.domElement,"transitionend",r),O.unbind(n.domElement,"oTransitionEnd",r)};O.bind(this.domElement,"webkitTransitionEnd",i),O.bind(this.domElement,"transitionend",i),O.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-O.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-O.getHeight(this.domElement)/2+"px"}}]),t}(),XC=RC(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);zC.inject(XC);var vg="dg",yg=72,xg=20,aa="Default",As=function(){try{return!!window.localStorage}catch{return!1}}(),ks=void 0,Sg=!0,co=void 0,$c=!1,F0=[],it=function t(e){var n=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),O.addClass(this.domElement,vg),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=q.defaults(i,{closeOnTop:!1,autoPlace:!0,width:t.DEFAULT_WIDTH}),i=q.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),q.isUndefined(i.load)?i.load={preset:aa}:i.preset&&(i.load.preset=i.preset),q.isUndefined(i.parent)&&i.hideable&&F0.push(this),i.resizable=q.isUndefined(i.parent)&&i.resizable,i.autoPlace&&q.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=As&&localStorage.getItem(fo(this,"isLocal"))==="true",o=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(h){n.parent?n.getRoot().preset=h:i.load.preset=h,qC(this),n.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,ud(n,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,s&&(s.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?O.addClass(n.__ul,t.CLASS_CLOSED):O.removeClass(n.__ul,t.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=h?t.TEXT_OPEN:t.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(h){As&&(r=h,h?O.bind(window,"unload",o):O.unbind(window,"unload",o),localStorage.setItem(fo(n,"isLocal"),h))}}}),q.isUndefined(i.parent)){if(this.closed=i.closed||!1,O.addClass(this.domElement,t.CLASS_MAIN),O.makeSelectable(this.domElement,!1),As&&r){n.useLocalStorage=!0;var a=localStorage.getItem(fo(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=t.TEXT_CLOSED,O.addClass(this.__closeButton,t.CLASS_CLOSE_BUTTON),i.closeOnTop?(O.addClass(this.__closeButton,t.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(O.addClass(this.__closeButton,t.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),O.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);O.addClass(l,"controller-name"),s=_h(n,l);var u=function(h){return h.preventDefault(),n.closed=!n.closed,!1};O.addClass(this.__ul,t.CLASS_CLOSED),O.addClass(s,"title"),O.bind(s,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(q.isUndefined(i.parent)&&(Sg&&(co=document.createElement("div"),O.addClass(co,vg),O.addClass(co,t.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(co),Sg=!1),co.appendChild(this.domElement),O.addClass(this.domElement,t.CLASS_AUTO_PLACE)),this.parent||ud(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},O.bind(window,"resize",this.__resizeHandler),O.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),O.bind(this.__ul,"transitionend",this.__resizeHandler),O.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&YC(this),o=function(){As&&localStorage.getItem(fo(n,"isLocal"))==="true"&&localStorage.setItem(fo(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=o;function f(){var d=n.getRoot();d.width+=1,q.defer(function(){d.width-=1})}i.parent||f()};it.toggleHide=function(){$c=!$c,q.each(F0,function(t){t.domElement.style.display=$c?"none":""})};it.CLASS_AUTO_PLACE="a";it.CLASS_AUTO_PLACE_CONTAINER="ac";it.CLASS_MAIN="main";it.CLASS_CONTROLLER_ROW="cr";it.CLASS_TOO_TALL="taller-than-window";it.CLASS_CLOSED="closed";it.CLASS_CLOSE_BUTTON="close-button";it.CLASS_CLOSE_TOP="close-top";it.CLASS_CLOSE_BOTTOM="close-bottom";it.CLASS_DRAG="drag";it.DEFAULT_WIDTH=245;it.TEXT_CLOSED="Close Controls";it.TEXT_OPEN="Open Controls";it._keydownHandler=function(t){document.activeElement.type!=="text"&&(t.which===yg||t.keyCode===yg)&&it.toggleHide()};O.bind(window,"keydown",it._keydownHandler,!1);q.extend(it.prototype,{add:function(e,n){return zs(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return zs(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;q.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&co.removeChild(this.domElement);var e=this;q.each(this.__folders,function(n){e.removeFolder(n)}),O.unbind(window,"keydown",it._keydownHandler,!1),Eg(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var i=new it(n);this.__folders[e]=i;var r=_h(this,i.domElement);return O.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Eg(e);var n=this;q.each(e.__folders,function(i){e.removeFolder(i)}),q.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=O.getOffset(e.__ul).top,i=0;q.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=O.getHeight(r))}),window.innerHeight-n-xg<i?(O.addClass(e.domElement,it.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-xg+"px"):(O.removeClass(e.domElement,it.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&q.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:q.debounce(function(){this.onResize()},50),remember:function(){if(q.isUndefined(ks)&&(ks=new WC,ks.domElement.innerHTML=BC),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;q.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&jC(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&ud(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ll(this)),e.folders={},q.each(this.__folders,function(n,i){e.folders[i]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ll(this),ad(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[aa]=ll(this,!0)),this.load.remembered[e]=ll(this),this.preset=e,ld(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){q.each(this.__controllers,function(n){this.getRoot().load.remembered?k0(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),q.each(this.__folders,function(n){n.revert(n)}),e||ad(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&z0(this.__listening)},updateDisplay:function(){q.each(this.__controllers,function(e){e.updateDisplay()}),q.each(this.__folders,function(e){e.updateDisplay()})}});function _h(t,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?t.__ul.insertBefore(i,n):t.__ul.appendChild(i),t.onResize(),i}function Eg(t){O.unbind(window,"resize",t.__resizeHandler),t.saveToLocalStorageIfPossible&&O.unbind(window,"unload",t.saveToLocalStorageIfPossible)}function ad(t,e){var n=t.__preset_select[t.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function $C(t,e,n){if(n.__li=e,n.__gui=t,q.extend(n,{options:function(s){if(arguments.length>1){var a=n.__li.nextElementSibling;return n.remove(),zs(t,n.object,n.property,{before:a,factoryArgs:[q.toArray(arguments)]})}if(q.isArray(s)||q.isObject(s)){var l=n.__li.nextElementSibling;return n.remove(),zs(t,n.object,n.property,{before:l,factoryArgs:[s]})}},name:function(s){return n.__li.firstElementChild.firstElementChild.innerHTML=s,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof od){var i=new au(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(o){var s=n[o],a=i[o];n[o]=i[o]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),s.apply(n,l)}}),O.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof au){var r=function(s){if(q.isNumber(n.__min)&&q.isNumber(n.__max)){var a=n.__li.firstElementChild.firstElementChild.innerHTML,l=n.__gui.__listening.indexOf(n)>-1;n.remove();var u=zs(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return u.name(a),l&&u.listen(),u}return s};n.min=q.compose(r,n.min),n.max=q.compose(r,n.max)}else n instanceof N0?(O.bind(e,"click",function(){O.fakeEvent(n.__checkbox,"click")}),O.bind(n.__checkbox,"click",function(o){o.stopPropagation()})):n instanceof O0?(O.bind(e,"click",function(){O.fakeEvent(n.__button,"click")}),O.bind(e,"mouseover",function(){O.addClass(n.__button,"hover")}),O.bind(e,"mouseout",function(){O.removeClass(n.__button,"hover")})):n instanceof sd&&(O.addClass(e,"color"),n.updateDisplay=q.compose(function(o){return e.style.borderLeftColor=n.__color.toString(),o},n.updateDisplay),n.updateDisplay());n.setValue=q.compose(function(o){return t.getRoot().__preset_select&&n.isModified()&&ad(t.getRoot(),!0),o},n.setValue)}function k0(t,e){var n=t.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=n.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},n.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,n.load&&n.load.remembered){var o=n.load.remembered,s=void 0;if(o[t.preset])s=o[t.preset];else if(o[aa])s=o[aa];else return;if(s[i]&&s[i][e.property]!==void 0){var a=s[i][e.property];e.initialValue=a,e.setValue(a)}}}}function zs(t,e,n,i){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var r=void 0;if(i.color)r=new sd(e,n);else{var o=[e,n].concat(i.factoryArgs);r=HC.apply(t,o)}i.before instanceof Xr&&(i.before=i.before.__li),k0(t,r),O.addClass(r.domElement,"c");var s=document.createElement("span");O.addClass(s,"property-name"),s.innerHTML=r.property;var a=document.createElement("div");a.appendChild(s),a.appendChild(r.domElement);var l=_h(t,a,i.before);return O.addClass(l,it.CLASS_CONTROLLER_ROW),r instanceof sd?O.addClass(l,"color"):O.addClass(l,LC(r.getValue())),$C(t,l,r),t.__controllers.push(r),r}function fo(t,e){return document.location.href+"."+e}function ld(t,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,t.__preset_select.appendChild(i),n&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function Mg(t,e){e.style.display=t.useLocalStorage?"block":"none"}function jC(t){var e=t.__save_row=document.createElement("li");O.addClass(t.domElement,"has-save"),t.__ul.insertBefore(e,t.__ul.firstChild),O.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",O.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",O.addClass(i,"button"),O.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",O.addClass(r,"button"),O.addClass(r,"save-as");var o=document.createElement("span");o.innerHTML="Revert",O.addClass(o,"button"),O.addClass(o,"revert");var s=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?q.each(t.load.remembered,function(d,h){ld(t,h,h===t.preset)}):ld(t,aa,!1),O.bind(s,"change",function(){for(var d=0;d<t.__preset_select.length;d++)t.__preset_select[d].innerHTML=t.__preset_select[d].value;t.preset=this.value}),e.appendChild(s),e.appendChild(n),e.appendChild(i),e.appendChild(r),e.appendChild(o),As){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(fo(t,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Mg(t,a),O.bind(l,"change",function(){t.useLocalStorage=!t.useLocalStorage,Mg(t,a)})}var f=document.getElementById("dg-new-constructor");O.bind(f,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&ks.hide()}),O.bind(n,"click",function(){f.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),ks.show(),f.focus(),f.select()}),O.bind(i,"click",function(){t.save()}),O.bind(r,"click",function(){var d=prompt("Enter a new preset name.");d&&t.saveAs(d)}),O.bind(o,"click",function(){t.revert()})}function YC(t){var e=void 0;t.__resize_handle=document.createElement("div"),q.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(o){return o.preventDefault(),t.width+=e-o.clientX,t.onResize(),e=o.clientX,!1}function i(){O.removeClass(t.__closeButton,it.CLASS_DRAG),O.unbind(window,"mousemove",n),O.unbind(window,"mouseup",i)}function r(o){return o.preventDefault(),e=o.clientX,O.addClass(t.__closeButton,it.CLASS_DRAG),O.bind(window,"mousemove",n),O.bind(window,"mouseup",i),!1}O.bind(t.__resize_handle,"mousedown",r),O.bind(t.__closeButton,"mousedown",r),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function ud(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function ll(t,e){var n={};return q.each(t.__rememberedObjects,function(i,r){var o={},s=t.__rememberedObjectIndecesToControllers[r];q.each(s,function(a,l){o[l]=e?a.initialValue:a.getValue()}),n[r]=o}),n}function qC(t){for(var e=0;e<t.__preset_select.length;e++)t.__preset_select[e].value===t.preset&&(t.__preset_select.selectedIndex=e)}function z0(t){t.length!==0&&GC.call(window,function(){z0(t)}),q.each(t,function(e){e.updateDisplay()})}var KC=it,ZC=`uniform vec3 color;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,QC=`uniform vec3 color;

void main() {
  gl_FragColor = vec4(color, 1.0); 
}`;const JC=i0.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: none;
`,eb=({})=>{const t=Ir.useRef(null);Ir.useEffect(()=>(a(),f(),window.addEventListener("resize",l,!1),()=>{t.current.removeChild(n.domElement),s.destroy(),window.removeEventListener("resize",l,!1)}),[]);const e=new bC,n=new D0,i=new bn,r={hex:"#F2BA59"},o=new rr({vertexShader:ZC,fragmentShader:QC,uniforms:{color:{value:new Ye(r.hex)}}}),s=new KC,a=()=>{e.clear(),i.fov=75,i.aspect=window.innerWidth/window.innerHeight,i.near=.1,i.far=1e3,n.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(n.domElement);const d=new Uu(2,2),h=new Si(d,o);e.add(h),i.position.z=5,n.render(e,i),u()},l=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)},u=()=>{requestAnimationFrame(u),n.clear(),n.render(e,i)},f=()=>{s.addFolder("Color").addColor(r,"hex").onChange(m=>{o.uniforms.color.value=new Ye(m)})};return pd.jsx(JC,{ref:t})};function tb(){return pd.jsx(eb,{})}jc.createRoot(document.getElementById("root")).render(pd.jsx(tb,{}));
