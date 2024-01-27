var Qx=Object.defineProperty;var eS=(t,e,n)=>e in t?Qx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var me=(t,e,n)=>(eS(t,typeof e!="symbol"?e+"":e,n),n),tS=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var _e=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var pe=(t,e,n)=>(tS(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tn(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const rt={},Rr=[],It=()=>{},ul=()=>!1,Zs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kf=t=>t.startsWith("onUpdate:"),st=Object.assign,Hf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nS=Object.prototype.hasOwnProperty,it=(t,e)=>nS.call(t,e),Te=Array.isArray,Pr=t=>to(t)==="[object Map]",Js=t=>to(t)==="[object Set]",ep=t=>to(t)==="[object Date]",iS=t=>to(t)==="[object RegExp]",Ue=t=>typeof t=="function",ze=t=>typeof t=="string",$n=t=>typeof t=="symbol",lt=t=>t!==null&&typeof t=="object",Vf=t=>(lt(t)||Ue(t))&&Ue(t.then)&&Ue(t.catch),o_=Object.prototype.toString,to=t=>o_.call(t),sS=t=>to(t).slice(8,-1),a_=t=>to(t)==="[object Object]",zf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Is=Tn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rS=Tn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),nh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oS=/-(\w)/g,bt=nh(t=>t.replace(oS,(e,n)=>n?n.toUpperCase():"")),aS=/\B([A-Z])/g,Mn=nh(t=>t.replace(aS,"-$1").toLowerCase()),Qs=nh(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=nh(t=>t?`on${Qs(t)}`:""),qn=(t,e)=>!Object.is(t,e),Ir=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Uo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Sl=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let tp;const l_=()=>tp||(tp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),lS="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",cS=Tn(lS);function oa(t){if(Te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ze(i)?c_(i):oa(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ze(t)||lt(t))return t}const hS=/;(?![^(]*\))/g,uS=/:([^]+)/,fS=/\/\*[^]*?\*\//g;function c_(t){const e={};return t.replace(fS,"").split(hS).forEach(n=>{if(n){const i=n.split(uS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ei(t){let e="";if(ze(t))e=t;else if(Te(t))for(let n=0;n<t.length;n++){const i=ei(t[n]);i&&(e+=i+" ")}else if(lt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function dS(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=ei(e)),n&&(t.style=oa(n)),t}const pS="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",mS="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",gS="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",_S="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",vS=Tn(pS),yS=Tn(mS),xS=Tn(gS),SS=Tn(_S),MS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ES=Tn(MS);function h_(t){return!!t||t===""}function bS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ai(t[i],e[i]);return n}function Ai(t,e){if(t===e)return!0;let n=ep(t),i=ep(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=$n(t),i=$n(e),n||i)return t===e;if(n=Te(t),i=Te(e),n||i)return n&&i?bS(t,e):!1;if(n=lt(t),i=lt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ai(t[o],e[o]))return!1}}return String(t)===String(e)}function ih(t,e){return t.findIndex(n=>Ai(n,e))}const TS=t=>ze(t)?t:t==null?"":Te(t)||lt(t)&&(t.toString===o_||!Ue(t.toString))?JSON.stringify(t,u_,2):String(t),u_=(t,e)=>e&&e.__v_isRef?u_(t,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Fh(i,r)+" =>"]=s,n),{})}:Js(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fh(n))}:$n(e)?Fh(e):lt(e)&&!Te(e)&&!a_(e)?String(e):e,Fh=(t,e="")=>{var n;return $n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class Gf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=yn;try{return yn=this,e()}finally{yn=n}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function wS(t){return new Gf(t)}function f_(t,e=yn){e&&e.active&&e.effects.push(t)}function d_(){return yn}function AS(t){yn&&yn.cleanups.push(t)}let Ds;class Vr{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,f_(this,s)}get dirty(){if(this._dirtyLevel===1){er();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(CS(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),tr()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ts,n=Ds;try{return ts=!0,Ds=this,this._runnings++,np(this),this.fn()}finally{ip(this),this._runnings--,Ds=n,ts=e}}stop(){var e;this.active&&(np(this),ip(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function CS(t){return t.value}function np(t){t._trackId++,t._depsLength=0}function ip(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)p_(t.deps[e],t);t.deps.length=t._depsLength}}function p_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function RS(t,e){t.effect instanceof Vr&&(t=t.effect.fn);const n=new Vr(t,It,()=>{n.dirty&&n.run()});e&&(st(n,e),e.scope&&f_(n,e.scope)),(!e||!e.lazy)&&n.run();const i=n.run.bind(n);return i.effect=n,i}function PS(t){t.effect.stop()}let ts=!0,Uu=0;const m_=[];function er(){m_.push(ts),ts=!1}function tr(){const t=m_.pop();ts=t===void 0?!0:t}function Wf(){Uu++}function Xf(){for(Uu--;!Uu&&Ou.length;)Ou.shift()()}function g_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&p_(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ou=[];function __(t,e,n){Wf();for(const i of t.keys())if(i._dirtyLevel<e&&t.get(i)===i._trackId){const s=i._dirtyLevel;i._dirtyLevel=e,s===0&&(i._shouldSchedule=!0,i.trigger())}v_(t),Xf()}function v_(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,Ou.push(e.scheduler))}const y_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ml=new WeakMap,Ns=Symbol(""),Fu=Symbol("");function mn(t,e,n){if(ts&&Ds){let i=Ml.get(t);i||Ml.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=y_(()=>i.delete(n))),g_(Ds,s)}}function Ti(t,e,n,i,s,r){const o=Ml.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Te(t)){const l=Number(i);o.forEach((c,h)=>{(h==="length"||!$n(h)&&h>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Te(t)?zf(n)&&a.push(o.get("length")):(a.push(o.get(Ns)),Pr(t)&&a.push(o.get(Fu)));break;case"delete":Te(t)||(a.push(o.get(Ns)),Pr(t)&&a.push(o.get(Fu)));break;case"set":Pr(t)&&a.push(o.get(Ns));break}Wf();for(const l of a)l&&__(l,2);Xf()}function LS(t,e){var n;return(n=Ml.get(t))==null?void 0:n.get(e)}const IS=Tn("__proto__,__v_isRef,__isVue"),x_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n)),sp=DS();function DS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=et(this);for(let r=0,o=this.length;r<o;r++)mn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(et)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){er(),Wf();const i=et(this)[e].apply(this,n);return Xf(),tr(),i}}),t}function NS(t){const e=et(this);return mn(e,"has",t),e.hasOwnProperty(t)}class S_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?A_:w_:r?T_:b_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Te(e);if(!s){if(o&&it(sp,n))return Reflect.get(sp,n,i);if(n==="hasOwnProperty")return NS}const a=Reflect.get(e,n,i);return($n(n)?x_.has(n):IS(n))||(s||mn(e,"get",n),r)?a:zt(a)?o&&zf(n)?a:a.value:lt(a)?s?qf(a):aa(a):a}}class M_ extends S_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._shallow){const l=Gs(r);if(!Oo(i)&&!Gs(i)&&(r=et(r),i=et(i)),!Te(e)&&zt(r)&&!zt(i))return l?!1:(r.value=i,!0)}const o=Te(e)&&zf(n)?Number(n)<e.length:it(e,n),a=Reflect.set(e,n,i,s);return e===et(s)&&(o?qn(i,r)&&Ti(e,"set",n,i):Ti(e,"add",n,i)),a}deleteProperty(e,n){const i=it(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ti(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!$n(n)||!x_.has(n))&&mn(e,"has",n),i}ownKeys(e){return mn(e,"iterate",Te(e)?"length":Ns),Reflect.ownKeys(e)}}class E_ extends S_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const US=new M_,OS=new E_,FS=new M_(!0),BS=new E_(!0),jf=t=>t,sh=t=>Reflect.getPrototypeOf(t);function ba(t,e,n=!1,i=!1){t=t.__v_raw;const s=et(t),r=et(e);n||(qn(e,r)&&mn(s,"get",e),mn(s,"get",r));const{has:o}=sh(s),a=i?jf:n?Zf:Fo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ta(t,e=!1){const n=this.__v_raw,i=et(n),s=et(t);return e||(qn(t,s)&&mn(i,"has",t),mn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function wa(t,e=!1){return t=t.__v_raw,!e&&mn(et(t),"iterate",Ns),Reflect.get(t,"size",t)}function rp(t){t=et(t);const e=et(this);return sh(e).has.call(e,t)||(e.add(t),Ti(e,"add",t,t)),this}function op(t,e){e=et(e);const n=et(this),{has:i,get:s}=sh(n);let r=i.call(n,t);r||(t=et(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?qn(e,o)&&Ti(n,"set",t,e):Ti(n,"add",t,e),this}function ap(t){const e=et(this),{has:n,get:i}=sh(e);let s=n.call(e,t);s||(t=et(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Ti(e,"delete",t,void 0),r}function lp(){const t=et(this),e=t.size!==0,n=t.clear();return e&&Ti(t,"clear",void 0,void 0),n}function Aa(t,e){return function(i,s){const r=this,o=r.__v_raw,a=et(o),l=e?jf:t?Zf:Fo;return!t&&mn(a,"iterate",Ns),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Ca(t,e,n){return function(...i){const s=this.__v_raw,r=et(s),o=Pr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),h=n?jf:e?Zf:Fo;return!e&&mn(r,"iterate",l?Fu:Ns),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function Di(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kS(){const t={get(r){return ba(this,r)},get size(){return wa(this)},has:Ta,add:rp,set:op,delete:ap,clear:lp,forEach:Aa(!1,!1)},e={get(r){return ba(this,r,!1,!0)},get size(){return wa(this)},has:Ta,add:rp,set:op,delete:ap,clear:lp,forEach:Aa(!1,!0)},n={get(r){return ba(this,r,!0)},get size(){return wa(this,!0)},has(r){return Ta.call(this,r,!0)},add:Di("add"),set:Di("set"),delete:Di("delete"),clear:Di("clear"),forEach:Aa(!0,!1)},i={get(r){return ba(this,r,!0,!0)},get size(){return wa(this,!0)},has(r){return Ta.call(this,r,!0)},add:Di("add"),set:Di("set"),delete:Di("delete"),clear:Di("clear"),forEach:Aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ca(r,!1,!1),n[r]=Ca(r,!0,!1),e[r]=Ca(r,!1,!0),i[r]=Ca(r,!0,!0)}),[t,n,e,i]}const[HS,VS,zS,GS]=kS();function rh(t,e){const n=e?t?GS:zS:t?VS:HS;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(it(n,s)&&s in i?n:i,s,r)}const WS={get:rh(!1,!1)},XS={get:rh(!1,!0)},jS={get:rh(!0,!1)},$S={get:rh(!0,!0)},b_=new WeakMap,T_=new WeakMap,w_=new WeakMap,A_=new WeakMap;function qS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function YS(t){return t.__v_skip||!Object.isExtensible(t)?0:qS(sS(t))}function aa(t){return Gs(t)?t:oh(t,!1,US,WS,b_)}function $f(t){return oh(t,!1,FS,XS,T_)}function qf(t){return oh(t,!0,OS,jS,w_)}function KS(t){return oh(t,!0,BS,$S,A_)}function oh(t,e,n,i,s){if(!lt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=YS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Us(t){return Gs(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function Oo(t){return!!(t&&t.__v_isShallow)}function Yf(t){return Us(t)||Gs(t)}function et(t){const e=t&&t.__v_raw;return e?et(e):t}function Kf(t){return xl(t,"__v_skip",!0),t}const Fo=t=>lt(t)?aa(t):t,Zf=t=>lt(t)?qf(t):t;class C_{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Vr(()=>e(this._value),()=>Dr(this,1),()=>this.dep&&v_(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=et(this);return(!e._cacheable||e.effect.dirty)&&qn(e._value,e._value=e.effect.run())&&Dr(e,2),Jf(e),e.effect._dirtyLevel>=1&&Dr(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ZS(t,e,n=!1){let i,s;const r=Ue(t);return r?(i=t,s=It):(i=t.get,s=t.set),new C_(i,s,r||!s,n)}function Jf(t){ts&&Ds&&(t=et(t),g_(Ds,t.dep||(t.dep=y_(()=>t.dep=void 0,t instanceof C_?t:void 0))))}function Dr(t,e=2,n){t=et(t);const i=t.dep;i&&__(i,e)}function zt(t){return!!(t&&t.__v_isRef===!0)}function Nr(t){return P_(t,!1)}function R_(t){return P_(t,!0)}function P_(t,e){return zt(t)?t:new JS(t,e)}class JS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:et(e),this._value=n?e:Fo(e)}get value(){return Jf(this),this._value}set value(e){const n=this.__v_isShallow||Oo(e)||Gs(e);e=n?e:et(e),qn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Fo(e),Dr(this,2))}}function QS(t){Dr(t,2)}function En(t){return zt(t)?t.value:t}function eM(t){return Ue(t)?t():En(t)}const tM={get:(t,e,n)=>En(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return zt(s)&&!zt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Qf(t){return Us(t)?t:new Proxy(t,tM)}class nM{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=e(()=>Jf(this),()=>Dr(this));this._get=n,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function L_(t){return new nM(t)}function iM(t){const e=Te(t)?new Array(t.length):{};for(const n in t)e[n]=I_(t,n);return e}class sM{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return LS(et(this._object),this._key)}}class rM{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function oM(t,e,n){return zt(t)?t:Ue(t)?new rM(t):lt(t)&&arguments.length>1?I_(t,e,n):Nr(t)}function I_(t,e,n){const i=t[e];return zt(i)?i:new sM(t,e,n)}const aM={GET:"get",HAS:"has",ITERATE:"iterate"},lM={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cM(t,e){}const hM={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uM={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function wi(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){nr(r,e,n)}return s}function bn(t,e,n,i){if(Ue(t)){const r=wi(t,e,n,i);return r&&Vf(r)&&r.catch(o=>{nr(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(bn(t[r],e,n,i));return s}function nr(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){wi(l,null,10,[t,o,a]);return}}fM(t,n,s,i)}function fM(t,e,n,i=!0){console.error(t)}let Bo=!1,Bu=!1;const Yt=[];let ti=0;const Ur=[];let Xi=null,Ms=0;const D_=Promise.resolve();let ed=null;function la(t){const e=ed||D_;return t?e.then(this?t.bind(this):t):e}function dM(t){let e=ti+1,n=Yt.length;for(;e<n;){const i=e+n>>>1,s=Yt[i],r=ko(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function ah(t){(!Yt.length||!Yt.includes(t,Bo&&t.allowRecurse?ti+1:ti))&&(t.id==null?Yt.push(t):Yt.splice(dM(t.id),0,t),N_())}function N_(){!Bo&&!Bu&&(Bu=!0,ed=D_.then(U_))}function pM(t){const e=Yt.indexOf(t);e>ti&&Yt.splice(e,1)}function El(t){Te(t)?Ur.push(...t):(!Xi||!Xi.includes(t,t.allowRecurse?Ms+1:Ms))&&Ur.push(t),N_()}function cp(t,e,n=Bo?ti+1:0){for(;n<Yt.length;n++){const i=Yt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Yt.splice(n,1),n--,i()}}}function bl(t){if(Ur.length){const e=[...new Set(Ur)].sort((n,i)=>ko(n)-ko(i));if(Ur.length=0,Xi){Xi.push(...e);return}for(Xi=e,Ms=0;Ms<Xi.length;Ms++)Xi[Ms]();Xi=null,Ms=0}}const ko=t=>t.id==null?1/0:t.id,mM=(t,e)=>{const n=ko(t)-ko(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function U_(t){Bu=!1,Bo=!0,Yt.sort(mM);try{for(ti=0;ti<Yt.length;ti++){const e=Yt[ti];e&&e.active!==!1&&wi(e,null,14)}}finally{ti=0,Yt.length=0,bl(),Bo=!1,ed=null,(Yt.length||Ur.length)&&U_()}}let Mr,Ra=[];function O_(t,e){var n,i;Mr=t,Mr?(Mr.enabled=!0,Ra.forEach(({event:s,args:r})=>Mr.emit(s,...r)),Ra=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{O_(r,e)}),setTimeout(()=>{Mr||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ra=[])},3e3)):Ra=[]}function gM(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||rt;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:f}=i[h]||rt;f&&(s=n.map(d=>ze(d)?d.trim():d)),u&&(s=n.map(Uo))}let a,l=i[a=Lr(e)]||i[a=Lr(bt(e))];!l&&r&&(l=i[a=Lr(Mn(e))]),l&&bn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(c,t,6,s)}}function F_(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ue(t)){const l=c=>{const h=F_(c,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(lt(t)&&i.set(t,null),null):(Te(r)?r.forEach(l=>o[l]=null):st(o,r),lt(t)&&i.set(t,o),o)}function lh(t,e){return!t||!Zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(t,e[0].toLowerCase()+e.slice(1))||it(t,Mn(e))||it(t,e))}let Ct=null,ch=null;function Ho(t){const e=Ct;return Ct=t,ch=t&&t.type.__scopeId||null,e}function td(t){ch=t}function nd(){ch=null}const _M=t=>Zi;function Zi(t,e=Ct,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ju(-1);const r=Ho(e);let o;try{o=t(...s)}finally{Ho(r),i._d&&ju(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function fl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:h,renderCache:u,data:f,setupState:d,ctx:g,inheritAttrs:v}=t;let m,p;const x=Ho(t);try{if(n.shapeFlag&4){const E=s||i,w=E;m=Sn(h.call(w,E,u,r,d,f,g)),p=l}else{const E=e;m=Sn(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),p=e.props?l:yM(l)}}catch(E){Co.length=0,nr(E,t,1),m=nt(Kt)}let _=m;if(p&&v!==!1){const E=Object.keys(p),{shapeFlag:w}=_;E.length&&w&7&&(o&&E.some(kf)&&(p=xM(p,o)),_=ri(_,p))}return n.dirs&&(_=ri(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,Ho(x),m}function vM(t,e=!0){let n;for(let i=0;i<t.length;i++){const s=t[i];if(os(s)){if(s.type!==Kt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const yM=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zs(n))&&((e||(e={}))[n]=t[n]);return e},xM=(t,e)=>{const n={};for(const i in t)(!kf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function SM(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?hp(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!lh(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hp(i,o,c):!0:!!o;return!1}function hp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!lh(n,r))return!0}return!1}function id({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const sd="components",MM="directives";function yo(t,e){return rd(sd,t,!0,e)||t}const B_=Symbol.for("v-ndc");function EM(t){return ze(t)?rd(sd,t,!1)||t:t||B_}function bM(t){return rd(MM,t)}function rd(t,e,n=!0,i=!1){const s=Ct||Lt;if(s){const r=s.type;if(t===sd){const a=Zu(r,!1);if(a&&(a===e||a===bt(e)||a===Qs(bt(e))))return r}const o=up(s[t]||r[t],e)||up(s.appContext[t],e);return!o&&i?r:o}}function up(t,e){return t&&(t[e]||t[bt(e)]||t[Qs(bt(e))])}const k_=t=>t.__isSuspense;let ku=0;const TM={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){if(t==null)AM(e,n,i,s,r,o,a,l,c);else{if(r&&r.deps>0){e.suspense=t.suspense;return}CM(t,e,n,i,s,o,a,l,c)}},hydrate:RM,create:od,normalize:PM},wM=TM;function Vo(t,e){const n=t.props&&t.props[e];Ue(n)&&n()}function AM(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:h}}=l,u=h("div"),f=t.suspense=od(t,s,i,e,u,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,u,null,i,f,r,o),f.deps>0?(Vo(t,"onPending"),Vo(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),Or(f,t.ssFallback)):f.resolve(!1,!0)}function CM(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:h}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:p}=u;if(v)u.pendingBranch=f,Gn(f,v)?(l(v,f,u.hiddenContainer,null,s,u,r,o,a),u.deps<=0?u.resolve():m&&(p||(l(g,d,n,i,s,null,r,o,a),Or(u,d)))):(u.pendingId=ku++,p?(u.isHydrating=!1,u.activeBranch=v):c(v,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=h("div"),m?(l(null,f,u.hiddenContainer,null,s,u,r,o,a),u.deps<=0?u.resolve():(l(g,d,n,i,s,null,r,o,a),Or(u,d))):g&&Gn(f,g)?(l(g,f,n,i,s,u,r,o,a),u.resolve(!0)):(l(null,f,u.hiddenContainer,null,s,u,r,o,a),u.deps<=0&&u.resolve()));else if(g&&Gn(f,g))l(g,f,n,i,s,u,r,o,a),Or(u,f);else if(Vo(e,"onPending"),u.pendingBranch=f,f.shapeFlag&512?u.pendingId=f.component.suspenseId:u.pendingId=ku++,l(null,f,u.hiddenContainer,null,s,u,r,o,a),u.deps<=0)u.resolve();else{const{timeout:x,pendingId:_}=u;x>0?setTimeout(()=>{u.pendingId===_&&u.fallback(d)},x):x===0&&u.fallback(d)}}function od(t,e,n,i,s,r,o,a,l,c,h=!1){const{p:u,m:f,um:d,n:g,o:{parentNode:v,remove:m}}=c;let p;const x=LM(t);x&&e!=null&&e.pendingBranch&&(p=e.pendingId,e.deps++);const _=t.props?Sl(t.props.timeout):void 0,E=r,w={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:ku++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(T=!1,C=!1){const{vnode:L,activeBranch:S,pendingBranch:M,pendingId:N,effects:O,parentComponent:q,container:I}=w;let V=!1;w.isHydrating?w.isHydrating=!1:T||(V=S&&M.transition&&M.transition.mode==="out-in",V&&(S.transition.afterLeave=()=>{N===w.pendingId&&(f(M,I,r===E?g(S):r,0),El(O))}),S&&(v(S.el)!==w.hiddenContainer&&(r=g(S)),d(S,q,w,!0)),V||f(M,I,r,0)),Or(w,M),w.pendingBranch=null,w.isInFallback=!1;let H=w.parent,Y=!1;for(;H;){if(H.pendingBranch){H.effects.push(...O),Y=!0;break}H=H.parent}!Y&&!V&&El(O),w.effects=[],x&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Vo(L,"onResolve")},fallback(T){if(!w.pendingBranch)return;const{vnode:C,activeBranch:L,parentComponent:S,container:M,namespace:N}=w;Vo(C,"onFallback");const O=g(L),q=()=>{w.isInFallback&&(u(null,T,M,O,S,null,N,a,l),Or(w,T))},I=T.transition&&T.transition.mode==="out-in";I&&(L.transition.afterLeave=q),w.isInFallback=!0,d(L,S,null,!0),I||q()},move(T,C,L){w.activeBranch&&f(w.activeBranch,T,C,L),w.container=T},next(){return w.activeBranch&&g(w.activeBranch)},registerDep(T,C){const L=!!w.pendingBranch;L&&w.deps++;const S=T.vnode.el;T.asyncDep.catch(M=>{nr(M,T,0)}).then(M=>{if(T.isUnmounted||w.isUnmounted||w.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:N}=T;Yu(T,M,!1),S&&(N.el=S);const O=!S&&T.subTree.el;C(T,N,v(S||T.subTree.el),S?null:g(T.subTree),w,o,l),O&&m(O),id(T,N.el),L&&--w.deps===0&&w.resolve()})},unmount(T,C){w.isUnmounted=!0,w.activeBranch&&d(w.activeBranch,n,T,C),w.pendingBranch&&d(w.pendingBranch,n,T,C)}};return w}function RM(t,e,n,i,s,r,o,a,l){const c=e.suspense=od(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),h=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),h}function PM(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=fp(i?n.default:n),t.ssFallback=i?fp(n.fallback):nt(Kt)}function fp(t){let e;if(Ue(t)){const n=js&&t._c;n&&(t._d=!1,ls()),t=t(),n&&(t._d=!0,e=un,v0())}return Te(t)&&(t=vM(t)),t=Sn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function H_(t,e){e&&e.pendingBranch?Te(t)?e.effects.push(...t):e.effects.push(t):El(t)}function Or(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,id(i,s))}function LM(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const V_=Symbol.for("v-scx"),z_=()=>ni(V_);function IM(t,e){return ca(t,null,e)}function G_(t,e){return ca(t,null,{flush:"post"})}function W_(t,e){return ca(t,null,{flush:"sync"})}const Pa={};function Fr(t,e,n){return ca(t,e,n)}function ca(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=rt){if(e&&r){const T=e;e=(...C)=>{T(...C),w()}}const l=Lt,c=T=>i===!0?T:Ts(T,i===!1?1:void 0);let h,u=!1,f=!1;if(zt(t)?(h=()=>t.value,u=Oo(t)):Us(t)?(h=()=>c(t),u=!0):Te(t)?(f=!0,u=t.some(T=>Us(T)||Oo(T)),h=()=>t.map(T=>{if(zt(T))return T.value;if(Us(T))return c(T);if(Ue(T))return wi(T,l,2)})):Ue(t)?e?h=()=>wi(t,l,2):h=()=>(d&&d(),bn(t,l,3,[g])):h=It,e&&i){const T=h;h=()=>Ts(T())}let d,g=T=>{d=_.onStop=()=>{wi(T,l,4),d=_.onStop=void 0}},v;if(da)if(g=It,e?n&&bn(e,l,3,[h(),f?[]:void 0,g]):h(),s==="sync"){const T=z_();v=T.__watcherHandles||(T.__watcherHandles=[])}else return It;let m=f?new Array(t.length).fill(Pa):Pa;const p=()=>{if(!(!_.active||!_.dirty))if(e){const T=_.run();(i||u||(f?T.some((C,L)=>qn(C,m[L])):qn(T,m)))&&(d&&d(),bn(e,l,3,[T,m===Pa?void 0:f&&m[0]===Pa?[]:m,g]),m=T)}else _.run()};p.allowRecurse=!!e;let x;s==="sync"?x=p:s==="post"?x=()=>Vt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),x=()=>ah(p));const _=new Vr(h,It,x),E=d_(),w=()=>{_.stop(),E&&Hf(E.effects,_)};return e?n?p():m=_.run():s==="post"?Vt(_.run.bind(_),l&&l.suspense):_.run(),v&&v.push(w),w}function DM(t,e,n){const i=this.proxy,s=ze(t)?t.includes(".")?X_(i,t):()=>i[t]:t.bind(i,i);let r;Ue(e)?r=e:(r=e.handler,n=e);const o=$s(this),a=ca(s,r.bind(i),n);return o(),a}function X_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Ts(t,e,n=0,i){if(!lt(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),zt(t))Ts(t.value,e,n,i);else if(Te(t))for(let s=0;s<t.length;s++)Ts(t[s],e,n,i);else if(Js(t)||Pr(t))t.forEach(s=>{Ts(s,e,n,i)});else if(a_(t))for(const s in t)Ts(t[s],e,n,i);return t}function NM(t,e){if(Ct===null)return t;const n=gh(Ct)||Ct.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=rt]=e[s];r&&(Ue(r)&&(r={mounted:r,updated:r}),r.deep&&Ts(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Jn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(er(),bn(l,n,8,[t.el,a,t,e]),tr())}}const ji=Symbol("_leaveCb"),La=Symbol("_enterCb");function ad(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ua(()=>{t.isMounted=!0}),dh(()=>{t.isUnmounting=!0}),t}const Cn=[Function,Array],ld={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Cn,onEnter:Cn,onAfterEnter:Cn,onEnterCancelled:Cn,onBeforeLeave:Cn,onLeave:Cn,onAfterLeave:Cn,onLeaveCancelled:Cn,onBeforeAppear:Cn,onAppear:Cn,onAfterAppear:Cn,onAppearCancelled:Cn},UM={name:"BaseTransition",props:ld,setup(t,{slots:e}){const n=Ii(),i=ad();let s;return()=>{const r=e.default&&hh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==Kt){o=v;break}}const a=et(t),{mode:l}=a;if(i.isLeaving)return Bh(o);const c=dp(o);if(!c)return Bh(o);const h=zr(c,a,i,n);Ws(c,h);const u=n.subTree,f=u&&dp(u);let d=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,d=!0)}if(f&&f.type!==Kt&&(!Gn(c,f)||d)){const v=zr(f,a,i,n);if(Ws(f,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Bh(o);l==="in-out"&&c.type!==Kt&&(v.delayLeave=(m,p,x)=>{const _=$_(i,f);_[String(f.key)]=f,m[ji]=()=>{p(),m[ji]=void 0,delete h.delayedLeave},h.delayedLeave=x})}return o}}},j_=UM;function $_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function zr(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:p,onAppearCancelled:x}=e,_=String(t.key),E=$_(n,t),w=(L,S)=>{L&&bn(L,i,9,S)},T=(L,S)=>{const M=S[1];w(L,S),Te(L)?L.every(N=>N.length<=1)&&M():L.length<=1&&M()},C={mode:r,persisted:o,beforeEnter(L){let S=a;if(!n.isMounted)if(s)S=v||a;else return;L[ji]&&L[ji](!0);const M=E[_];M&&Gn(t,M)&&M.el[ji]&&M.el[ji](),w(S,[L])},enter(L){let S=l,M=c,N=h;if(!n.isMounted)if(s)S=m||l,M=p||c,N=x||h;else return;let O=!1;const q=L[La]=I=>{O||(O=!0,I?w(N,[L]):w(M,[L]),C.delayedLeave&&C.delayedLeave(),L[La]=void 0)};S?T(S,[L,q]):q()},leave(L,S){const M=String(t.key);if(L[La]&&L[La](!0),n.isUnmounting)return S();w(u,[L]);let N=!1;const O=L[ji]=q=>{N||(N=!0,S(),q?w(g,[L]):w(d,[L]),L[ji]=void 0,E[M]===t&&delete E[M])};E[M]=t,f?T(f,[L,O]):O()},clone(L){return zr(L,e,n,i)}};return C}function Bh(t){if(ha(t))return t=ri(t),t.children=null,t}function dp(t){return ha(t)?t.children?t.children[0]:void 0:t}function Ws(t,e){t.shapeFlag&6&&t.component?Ws(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hh(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Bt?(o.patchFlag&128&&s++,i=i.concat(hh(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?ri(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function no(t,e){return Ue(t)?st({name:t.name},e,{setup:t}):t}const Os=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function OM(t){Ue(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,h=0;const u=()=>(h++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,m)=>{a(g,()=>v(u()),()=>m(g),h+1)});throw g}).then(g=>d!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return no({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Lt;if(c)return()=>kh(c,d);const g=x=>{l=null,nr(x,d,13,!i)};if(o&&d.suspense||da)return f().then(x=>()=>kh(x,d)).catch(x=>(g(x),()=>i?nt(i,{error:x}):null));const v=Nr(!1),m=Nr(),p=Nr(!!s);return s&&setTimeout(()=>{p.value=!1},s),r!=null&&setTimeout(()=>{if(!v.value&&!m.value){const x=new Error(`Async component timed out after ${r}ms.`);g(x),m.value=x}},r),f().then(()=>{v.value=!0,d.parent&&ha(d.parent.vnode)&&(d.parent.effect.dirty=!0,ah(d.parent.update))}).catch(x=>{g(x),m.value=x}),()=>{if(v.value&&c)return kh(c,d);if(m.value&&i)return nt(i,{error:m.value});if(n&&!p.value)return nt(n)}}})}function kh(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=nt(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const ha=t=>t.type.__isKeepAlive,FM={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ii(),i=n.ctx;if(!i.renderer)return()=>{const x=e.default&&e.default();return x&&x.length===1?x[0]:x};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:h,o:{createElement:u}}}=i,f=u("div");i.activate=(x,_,E,w,T)=>{const C=x.component;c(x,_,E,0,a),l(C.vnode,x,_,E,C,a,w,x.slotScopeIds,T),Vt(()=>{C.isDeactivated=!1,C.a&&Ir(C.a);const L=x.props&&x.props.onVnodeMounted;L&&ln(L,C.parent,x)},a)},i.deactivate=x=>{const _=x.component;c(x,f,null,1,a),Vt(()=>{_.da&&Ir(_.da);const E=x.props&&x.props.onVnodeUnmounted;E&&ln(E,_.parent,x),_.isDeactivated=!0},a)};function d(x){Hh(x),h(x,n,a,!0)}function g(x){s.forEach((_,E)=>{const w=Zu(_.type);w&&(!x||!x(w))&&v(E)})}function v(x){const _=s.get(x);!o||!Gn(_,o)?d(_):o&&Hh(o),s.delete(x),r.delete(x)}Fr(()=>[t.include,t.exclude],([x,_])=>{x&&g(E=>xo(x,E)),_&&g(E=>!xo(_,E))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&s.set(m,Vh(n.subTree))};return ua(p),fh(p),dh(()=>{s.forEach(x=>{const{subTree:_,suspense:E}=n,w=Vh(_);if(x.type===w.type&&x.key===w.key){Hh(w);const T=w.component.da;T&&Vt(T,E);return}d(x)})}),()=>{if(m=null,!e.default)return null;const x=e.default(),_=x[0];if(x.length>1)return o=null,x;if(!os(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let E=Vh(_);const w=E.type,T=Zu(Os(E)?E.type.__asyncResolved||{}:w),{include:C,exclude:L,max:S}=t;if(C&&(!T||!xo(C,T))||L&&T&&xo(L,T))return o=E,_;const M=E.key==null?w:E.key,N=s.get(M);return E.el&&(E=ri(E),_.shapeFlag&128&&(_.ssContent=E)),m=M,N?(E.el=N.el,E.component=N.component,E.transition&&Ws(E,E.transition),E.shapeFlag|=512,r.delete(M),r.add(M)):(r.add(M),S&&r.size>parseInt(S,10)&&v(r.values().next().value)),E.shapeFlag|=256,o=E,k_(_.type)?_:E}}},BM=FM;function xo(t,e){return Te(t)?t.some(n=>xo(n,e)):ze(t)?t.split(",").includes(e):iS(t)?t.test(e):!1}function q_(t,e){K_(t,"a",e)}function Y_(t,e){K_(t,"da",e)}function K_(t,e,n=Lt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(uh(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&kM(i,e,n,s),s=s.parent}}function kM(t,e,n,i){const s=uh(e,t,i,!0);ph(()=>{Hf(i[e],s)},n)}function Hh(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Vh(t){return t.shapeFlag&128?t.ssContent:t}function uh(t,e,n=Lt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;er();const a=$s(n),l=bn(e,n,t,o);return a(),tr(),l});return i?s.unshift(r):s.push(r),r}}const Li=t=>(e,n=Lt)=>(!da||t==="sp")&&uh(t,(...i)=>e(...i),n),Z_=Li("bm"),ua=Li("m"),J_=Li("bu"),fh=Li("u"),dh=Li("bum"),ph=Li("um"),Q_=Li("sp"),e0=Li("rtg"),t0=Li("rtc");function n0(t,e=Lt){uh("ec",t,e)}function HM(t,e,n,i){let s;const r=n&&n[i];if(Te(t)||ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(lt(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function VM(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(Te(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function zM(t,e,n={},i,s){if(Ct.isCE||Ct.parent&&Os(Ct.parent)&&Ct.parent.isCE)return e!=="default"&&(n.name=e),nt("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),ls();const o=r&&i0(r(n)),a=fd(Bt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function i0(t){return t.some(e=>os(e)?!(e.type===Kt||e.type===Bt&&!i0(e.children)):!0)?t:null}function GM(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:Lr(i)]=t[i];return n}const Hu=t=>t?b0(t)?gh(t)||t.proxy:Hu(t.parent):null,To=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hu(t.parent),$root:t=>Hu(t.root),$emit:t=>t.emit,$options:t=>cd(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ah(t.update)}),$nextTick:t=>t.n||(t.n=la.bind(t.proxy)),$watch:t=>DM.bind(t)}),zh=(t,e)=>t!==rt&&!t.__isScriptSetup&&it(t,e),Vu={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(zh(i,e))return o[e]=1,i[e];if(s!==rt&&it(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&it(c,e))return o[e]=3,r[e];if(n!==rt&&it(n,e))return o[e]=4,n[e];zu&&(o[e]=0)}}const h=To[e];let u,f;if(h)return e==="$attrs"&&mn(t,"get",e),h(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==rt&&it(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,it(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return zh(s,e)?(s[e]=n,!0):i!==rt&&it(i,e)?(i[e]=n,!0):it(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==rt&&it(t,o)||zh(e,o)||(a=r[0])&&it(a,o)||it(i,o)||it(To,o)||it(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:it(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},WM=st({},Vu,{get(t,e){if(e!==Symbol.unscopables)return Vu.get(t,e,t)},has(t,e){return e[0]!=="_"&&!cS(e)}});function XM(){return null}function jM(){return null}function $M(t){}function qM(t){}function YM(){return null}function KM(){}function ZM(t,e){return null}function JM(){return s0().slots}function QM(){return s0().attrs}function s0(){const t=Ii();return t.setupContext||(t.setupContext=C0(t))}function zo(t){return Te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function eE(t,e){const n=zo(t);for(const i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?Te(s)||Ue(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function tE(t,e){return!t||!e?t||e:Te(t)&&Te(e)?t.concat(e):st({},zo(t),zo(e))}function nE(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function iE(t){const e=Ii();let n=t();return qu(),Vf(n)&&(n=n.catch(i=>{throw $s(e),i})),[n,()=>$s(e)]}let zu=!0;function sE(t){const e=cd(t),n=t.proxy,i=t.ctx;zu=!1,e.beforeCreate&&pp(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:_,unmounted:E,render:w,renderTracked:T,renderTriggered:C,errorCaptured:L,serverPrefetch:S,expose:M,inheritAttrs:N,components:O,directives:q,filters:I}=e;if(c&&rE(c,i,null),o)for(const Y in o){const z=o[Y];Ue(z)&&(i[Y]=z.bind(n))}if(s){const Y=s.call(n,n);lt(Y)&&(t.data=aa(Y))}if(zu=!0,r)for(const Y in r){const z=r[Y],ne=Ue(z)?z.bind(n,n):Ue(z.get)?z.get.bind(n,n):It,ce=!Ue(z)&&Ue(z.set)?z.set.bind(n):It,fe=In({get:ne,set:ce});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ge=>fe.value=ge})}if(a)for(const Y in a)r0(a[Y],i,n,Y);if(l){const Y=Ue(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(z=>{wo(z,Y[z])})}h&&pp(h,t,"c");function H(Y,z){Te(z)?z.forEach(ne=>Y(ne.bind(n))):z&&Y(z.bind(n))}if(H(Z_,u),H(ua,f),H(J_,d),H(fh,g),H(q_,v),H(Y_,m),H(n0,L),H(t0,T),H(e0,C),H(dh,x),H(ph,E),H(Q_,S),Te(M))if(M.length){const Y=t.exposed||(t.exposed={});M.forEach(z=>{Object.defineProperty(Y,z,{get:()=>n[z],set:ne=>n[z]=ne})})}else t.exposed||(t.exposed={});w&&t.render===It&&(t.render=w),N!=null&&(t.inheritAttrs=N),O&&(t.components=O),q&&(t.directives=q)}function rE(t,e,n=It){Te(t)&&(t=Gu(t));for(const i in t){const s=t[i];let r;lt(s)?"default"in s?r=ni(s.from||i,s.default,!0):r=ni(s.from||i):r=ni(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function pp(t,e,n){bn(Te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function r0(t,e,n,i){const s=i.includes(".")?X_(n,i):()=>n[i];if(ze(t)){const r=e[t];Ue(r)&&Fr(s,r)}else if(Ue(t))Fr(s,t.bind(n));else if(lt(t))if(Te(t))t.forEach(r=>r0(r,e,n,i));else{const r=Ue(t.handler)?t.handler.bind(n):e[t.handler];Ue(r)&&Fr(s,r,t)}}function cd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Tl(l,c,o,!0)),Tl(l,e,o)),lt(e)&&r.set(e,l),l}function Tl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Tl(t,r,n,!0),s&&s.forEach(o=>Tl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=oE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const oE={data:mp,props:gp,emits:gp,methods:So,computed:So,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:So,directives:So,watch:lE,provide:mp,inject:aE};function mp(t,e){return e?t?function(){return st(Ue(t)?t.call(this,this):t,Ue(e)?e.call(this,this):e)}:e:t}function aE(t,e){return So(Gu(t),Gu(e))}function Gu(t){if(Te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function So(t,e){return t?st(Object.create(null),t,e):e}function gp(t,e){return t?Te(t)&&Te(e)?[...new Set([...t,...e])]:st(Object.create(null),zo(t),zo(e??{})):e}function lE(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function o0(){return{app:null,config:{isNativeTag:ul,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cE=0;function hE(t,e){return function(i,s=null){Ue(i)||(i=st({},i)),s!=null&&!lt(s)&&(s=null);const r=o0(),o=new WeakSet;let a=!1;const l=r.app={_uid:cE++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:P0,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...h)):Ue(c)&&(o.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,u){if(!a){const f=nt(i,s);return f.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),h&&e?e(f,c):t(f,c,u),a=!0,l._container=c,c.__vue_app__=l,gh(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l},runWithContext(c){Go=l;try{return c()}finally{Go=null}}};return l}}let Go=null;function wo(t,e){if(Lt){let n=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===n&&(n=Lt.provides=Object.create(i)),n[t]=e}}function ni(t,e,n=!1){const i=Lt||Ct;if(i||Go){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Go._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ue(e)?e.call(i&&i.proxy):e}}function uE(){return!!(Lt||Ct||Go)}function fE(t,e,n,i=!1){const s={},r={};xl(r,mh,1),t.propsDefaults=Object.create(null),a0(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:$f(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function dE(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=et(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(lh(t.emitsOptions,f))continue;const d=e[f];if(l)if(it(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=bt(f);s[g]=Wu(l,a,g,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{a0(t,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!it(e,u)&&((h=Mn(u))===u||!it(e,h)))&&(l?n&&(n[u]!==void 0||n[h]!==void 0)&&(s[u]=Wu(l,a,u,void 0,t,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!it(e,u))&&(delete r[u],c=!0)}c&&Ti(t,"set","$attrs")}function a0(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Is(l))continue;const c=e[l];let h;s&&it(s,h=bt(l))?!r||!r.includes(h)?n[h]=c:(a||(a={}))[h]=c:lh(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(n),c=a||rt;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Wu(s,l,u,c[u],t,!it(c,u))}}return o}function Wu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const h=$s(s);i=c[n]=l.call(null,e),h()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Mn(n))&&(i=!0))}return i}function l0(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ue(t)){const h=u=>{l=!0;const[f,d]=l0(u,e,!0);st(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return lt(t)&&i.set(t,Rr),Rr;if(Te(r))for(let h=0;h<r.length;h++){const u=bt(r[h]);_p(u)&&(o[u]=rt)}else if(r)for(const h in r){const u=bt(h);if(_p(u)){const f=r[h],d=o[u]=Te(f)||Ue(f)?{type:f}:st({},f);if(d){const g=xp(Boolean,d.type),v=xp(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||it(d,"default"))&&a.push(u)}}}const c=[o,a];return lt(t)&&i.set(t,c),c}function _p(t){return t[0]!=="$"}function vp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yp(t,e){return vp(t)===vp(e)}function xp(t,e){return Te(e)?e.findIndex(n=>yp(n,t)):Ue(e)&&yp(e,t)?0:-1}const c0=t=>t[0]==="_"||t==="$stable",hd=t=>Te(t)?t.map(Sn):[Sn(t)],pE=(t,e,n)=>{if(e._n)return e;const i=Zi((...s)=>hd(e(...s)),n);return i._c=!1,i},h0=(t,e,n)=>{const i=t._ctx;for(const s in t){if(c0(s))continue;const r=t[s];if(Ue(r))e[s]=pE(s,r,i);else if(r!=null){const o=hd(r);e[s]=()=>o}}},u0=(t,e)=>{const n=hd(e);t.slots.default=()=>n},mE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=et(e),xl(e,"_",n)):h0(e,t.slots={})}else t.slots={},e&&u0(t,e);xl(t.slots,mh,1)},gE=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(st(s,e),!n&&a===1&&delete s._):(r=!e.$stable,h0(e,s)),o=e}else e&&(u0(t,e),o={default:1});if(r)for(const a in s)!c0(a)&&o[a]==null&&delete s[a]};function wl(t,e,n,i,s=!1){if(Te(t)){t.forEach((f,d)=>wl(f,e&&(Te(e)?e[d]:e),n,i,s));return}if(Os(i)&&!s)return;const r=i.shapeFlag&4?gh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,h=a.refs===rt?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(ze(c)?(h[c]=null,it(u,c)&&(u[c]=null)):zt(c)&&(c.value=null)),Ue(l))wi(l,a,12,[o,h]);else{const f=ze(l),d=zt(l),g=t.f;if(f||d){const v=()=>{if(g){const m=f?it(u,l)?u[l]:h[l]:l.value;s?Te(m)&&Hf(m,r):Te(m)?m.includes(r)||m.push(r):f?(h[l]=[r],it(u,l)&&(u[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else f?(h[l]=o,it(u,l)&&(u[l]=o)):d&&(l.value=o,t.k&&(h[t.k]=o))};s||g?v():(v.id=-1,Vt(v,n))}}}let Ni=!1;const _E=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",vE=t=>t.namespaceURI.includes("MathML"),Ia=t=>{if(_E(t))return"svg";if(vE(t))return"mathml"},Da=t=>t.nodeType===8;function yE(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,h=(_,E)=>{if(!E.hasChildNodes()){n(null,_,E),bl(),E._vnode=_;return}Ni=!1,u(E.firstChild,_,null,null,null),bl(),E._vnode=_,Ni&&console.error("Hydration completed but contains mismatches.")},u=(_,E,w,T,C,L=!1)=>{const S=Da(_)&&_.data==="[",M=()=>v(_,E,w,T,C,S),{type:N,ref:O,shapeFlag:q,patchFlag:I}=E;let V=_.nodeType;E.el=_,I===-2&&(L=!1,E.dynamicChildren=null);let H=null;switch(N){case Xs:V!==3?E.children===""?(l(E.el=s(""),o(_),_),H=_):H=M():(_.data!==E.children&&(Ni=!0,_.data=E.children),H=r(_));break;case Kt:x(_)?(H=r(_),p(E.el=_.content.firstChild,_,w)):V!==8||S?H=M():H=r(_);break;case Fs:if(S&&(_=r(_),V=_.nodeType),V===1||V===3){H=_;const Y=!E.children.length;for(let z=0;z<E.staticCount;z++)Y&&(E.children+=H.nodeType===1?H.outerHTML:H.data),z===E.staticCount-1&&(E.anchor=H),H=r(H);return S?r(H):H}else M();break;case Bt:S?H=g(_,E,w,T,C,L):H=M();break;default:if(q&1)(V!==1||E.type.toLowerCase()!==_.tagName.toLowerCase())&&!x(_)?H=M():H=f(_,E,w,T,C,L);else if(q&6){E.slotScopeIds=C;const Y=o(_);if(S?H=m(_):Da(_)&&_.data==="teleport start"?H=m(_,_.data,"teleport end"):H=r(_),e(E,Y,null,w,T,Ia(Y),L),Os(E)){let z;S?(z=nt(Bt),z.anchor=H?H.previousSibling:Y.lastChild):z=_.nodeType===3?ws(""):nt("div"),z.el=_,E.component.subTree=z}}else q&64?V!==8?H=M():H=E.type.hydrate(_,E,w,T,C,L,t,d):q&128&&(H=E.type.hydrate(_,E,w,T,Ia(o(_)),C,L,t,u))}return O!=null&&wl(O,null,T,E),H},f=(_,E,w,T,C,L)=>{L=L||!!E.dynamicChildren;const{type:S,props:M,patchFlag:N,shapeFlag:O,dirs:q,transition:I}=E,V=S==="input"||S==="option";if(V||N!==-1){q&&Jn(E,null,w,"created");let H=!1;if(x(_)){H=m0(T,I)&&w&&w.vnode.props&&w.vnode.props.appear;const z=_.content.firstChild;H&&I.beforeEnter(z),p(z,_,w),E.el=_=z}if(O&16&&!(M&&(M.innerHTML||M.textContent))){let z=d(_.firstChild,E,_,w,T,C,L);for(;z;){Ni=!0;const ne=z;z=z.nextSibling,a(ne)}}else O&8&&_.textContent!==E.children&&(Ni=!0,_.textContent=E.children);if(M)if(V||!L||N&48)for(const z in M)(V&&(z.endsWith("value")||z==="indeterminate")||Zs(z)&&!Is(z)||z[0]===".")&&i(_,z,null,M[z],void 0,void 0,w);else M.onClick&&i(_,"onClick",null,M.onClick,void 0,void 0,w);let Y;(Y=M&&M.onVnodeBeforeMount)&&ln(Y,w,E),q&&Jn(E,null,w,"beforeMount"),((Y=M&&M.onVnodeMounted)||q||H)&&H_(()=>{Y&&ln(Y,w,E),H&&I.enter(_),q&&Jn(E,null,w,"mounted")},T)}return _.nextSibling},d=(_,E,w,T,C,L,S)=>{S=S||!!E.dynamicChildren;const M=E.children,N=M.length;for(let O=0;O<N;O++){const q=S?M[O]:M[O]=Sn(M[O]);if(_)_=u(_,q,T,C,L,S);else{if(q.type===Xs&&!q.children)continue;Ni=!0,n(null,q,w,null,T,C,Ia(w),L)}}return _},g=(_,E,w,T,C,L)=>{const{slotScopeIds:S}=E;S&&(C=C?C.concat(S):S);const M=o(_),N=d(r(_),E,M,w,T,C,L);return N&&Da(N)&&N.data==="]"?r(E.anchor=N):(Ni=!0,l(E.anchor=c("]"),M,N),N)},v=(_,E,w,T,C,L)=>{if(Ni=!0,E.el=null,L){const N=m(_);for(;;){const O=r(_);if(O&&O!==N)a(O);else break}}const S=r(_),M=o(_);return a(_),n(null,E,M,S,w,T,Ia(M),C),S},m=(_,E="[",w="]")=>{let T=0;for(;_;)if(_=r(_),_&&Da(_)&&(_.data===E&&T++,_.data===w)){if(T===0)return r(_);T--}return _},p=(_,E,w)=>{const T=E.parentNode;T&&T.replaceChild(_,E);let C=w;for(;C;)C.vnode.el===E&&(C.vnode.el=C.subTree.el=_),C=C.parent},x=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[h,u]}const Vt=H_;function f0(t){return p0(t)}function d0(t){return p0(t,yE)}function p0(t,e){const n=l_();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=It,insertStaticContent:g}=t,v=(R,P,B,X=null,J=null,ie=null,b=void 0,y=null,D=!!P.dynamicChildren)=>{if(R===P)return;R&&!Gn(R,P)&&(X=G(R),ge(R,J,ie,!0),R=null),P.patchFlag===-2&&(D=!1,P.dynamicChildren=null);const{type:k,ref:$,shapeFlag:K}=P;switch(k){case Xs:m(R,P,B,X);break;case Kt:p(R,P,B,X);break;case Fs:R==null&&x(P,B,X,b);break;case Bt:O(R,P,B,X,J,ie,b,y,D);break;default:K&1?w(R,P,B,X,J,ie,b,y,D):K&6?q(R,P,B,X,J,ie,b,y,D):(K&64||K&128)&&k.process(R,P,B,X,J,ie,b,y,D,he)}$!=null&&J&&wl($,R&&R.ref,ie,P||R,!P)},m=(R,P,B,X)=>{if(R==null)i(P.el=a(P.children),B,X);else{const J=P.el=R.el;P.children!==R.children&&c(J,P.children)}},p=(R,P,B,X)=>{R==null?i(P.el=l(P.children||""),B,X):P.el=R.el},x=(R,P,B,X)=>{[R.el,R.anchor]=g(R.children,P,B,X,R.el,R.anchor)},_=({el:R,anchor:P},B,X)=>{let J;for(;R&&R!==P;)J=f(R),i(R,B,X),R=J;i(P,B,X)},E=({el:R,anchor:P})=>{let B;for(;R&&R!==P;)B=f(R),s(R),R=B;s(P)},w=(R,P,B,X,J,ie,b,y,D)=>{P.type==="svg"?b="svg":P.type==="math"&&(b="mathml"),R==null?T(P,B,X,J,ie,b,y,D):S(R,P,J,ie,b,y,D)},T=(R,P,B,X,J,ie,b,y)=>{let D,k;const{props:$,shapeFlag:K,transition:ae,dirs:se}=R;if(D=R.el=o(R.type,ie,$&&$.is,$),K&8?h(D,R.children):K&16&&L(R.children,D,null,X,J,Gh(R,ie),b,y),se&&Jn(R,null,X,"created"),C(D,R,R.scopeId,b,X),$){for(const xe in $)xe!=="value"&&!Is(xe)&&r(D,xe,null,$[xe],ie,R.children,X,J,be);"value"in $&&r(D,"value",null,$.value,ie),(k=$.onVnodeBeforeMount)&&ln(k,X,R)}se&&Jn(R,null,X,"beforeMount");const de=m0(J,ae);de&&ae.beforeEnter(D),i(D,P,B),((k=$&&$.onVnodeMounted)||de||se)&&Vt(()=>{k&&ln(k,X,R),de&&ae.enter(D),se&&Jn(R,null,X,"mounted")},J)},C=(R,P,B,X,J)=>{if(B&&d(R,B),X)for(let ie=0;ie<X.length;ie++)d(R,X[ie]);if(J){let ie=J.subTree;if(P===ie){const b=J.vnode;C(R,b,b.scopeId,b.slotScopeIds,J.parent)}}},L=(R,P,B,X,J,ie,b,y,D=0)=>{for(let k=D;k<R.length;k++){const $=R[k]=y?$i(R[k]):Sn(R[k]);v(null,$,P,B,X,J,ie,b,y)}},S=(R,P,B,X,J,ie,b)=>{const y=P.el=R.el;let{patchFlag:D,dynamicChildren:k,dirs:$}=P;D|=R.patchFlag&16;const K=R.props||rt,ae=P.props||rt;let se;if(B&&us(B,!1),(se=ae.onVnodeBeforeUpdate)&&ln(se,B,P,R),$&&Jn(P,R,B,"beforeUpdate"),B&&us(B,!0),k?M(R.dynamicChildren,k,y,B,X,Gh(P,J),ie):b||z(R,P,y,null,B,X,Gh(P,J),ie,!1),D>0){if(D&16)N(y,P,K,ae,B,X,J);else if(D&2&&K.class!==ae.class&&r(y,"class",null,ae.class,J),D&4&&r(y,"style",K.style,ae.style,J),D&8){const de=P.dynamicProps;for(let xe=0;xe<de.length;xe++){const Ce=de[xe],oe=K[Ce],We=ae[Ce];(We!==oe||Ce==="value")&&r(y,Ce,oe,We,J,R.children,B,X,be)}}D&1&&R.children!==P.children&&h(y,P.children)}else!b&&k==null&&N(y,P,K,ae,B,X,J);((se=ae.onVnodeUpdated)||$)&&Vt(()=>{se&&ln(se,B,P,R),$&&Jn(P,R,B,"updated")},X)},M=(R,P,B,X,J,ie,b)=>{for(let y=0;y<P.length;y++){const D=R[y],k=P[y],$=D.el&&(D.type===Bt||!Gn(D,k)||D.shapeFlag&70)?u(D.el):B;v(D,k,$,null,X,J,ie,b,!0)}},N=(R,P,B,X,J,ie,b)=>{if(B!==X){if(B!==rt)for(const y in B)!Is(y)&&!(y in X)&&r(R,y,B[y],null,b,P.children,J,ie,be);for(const y in X){if(Is(y))continue;const D=X[y],k=B[y];D!==k&&y!=="value"&&r(R,y,k,D,b,P.children,J,ie,be)}"value"in X&&r(R,"value",B.value,X.value,b)}},O=(R,P,B,X,J,ie,b,y,D)=>{const k=P.el=R?R.el:a(""),$=P.anchor=R?R.anchor:a("");let{patchFlag:K,dynamicChildren:ae,slotScopeIds:se}=P;se&&(y=y?y.concat(se):se),R==null?(i(k,B,X),i($,B,X),L(P.children||[],B,$,J,ie,b,y,D)):K>0&&K&64&&ae&&R.dynamicChildren?(M(R.dynamicChildren,ae,B,J,ie,b,y),(P.key!=null||J&&P===J.subTree)&&ud(R,P,!0)):z(R,P,B,$,J,ie,b,y,D)},q=(R,P,B,X,J,ie,b,y,D)=>{P.slotScopeIds=y,R==null?P.shapeFlag&512?J.ctx.activate(P,B,X,b,D):I(P,B,X,J,ie,b,D):V(R,P,D)},I=(R,P,B,X,J,ie,b)=>{const y=R.component=E0(R,X,J);if(ha(R)&&(y.ctx.renderer=he),T0(y),y.asyncDep){if(J&&J.registerDep(y,H),!R.el){const D=y.subTree=nt(Kt);p(null,D,P,B)}}else H(y,R,P,B,J,ie,b)},V=(R,P,B)=>{const X=P.component=R.component;if(SM(R,P,B))if(X.asyncDep&&!X.asyncResolved){Y(X,P,B);return}else X.next=P,pM(X.update),X.effect.dirty=!0,X.update();else P.el=R.el,X.vnode=P},H=(R,P,B,X,J,ie,b)=>{const y=()=>{if(R.isMounted){let{next:$,bu:K,u:ae,parent:se,vnode:de}=R;{const He=g0(R);if(He){$&&($.el=de.el,Y(R,$,b)),He.asyncDep.then(()=>{R.isUnmounted||y()});return}}let xe=$,Ce;us(R,!1),$?($.el=de.el,Y(R,$,b)):$=de,K&&Ir(K),(Ce=$.props&&$.props.onVnodeBeforeUpdate)&&ln(Ce,se,$,de),us(R,!0);const oe=fl(R),We=R.subTree;R.subTree=oe,v(We,oe,u(We.el),G(We),R,J,ie),$.el=oe.el,xe===null&&id(R,oe.el),ae&&Vt(ae,J),(Ce=$.props&&$.props.onVnodeUpdated)&&Vt(()=>ln(Ce,se,$,de),J)}else{let $;const{el:K,props:ae}=P,{bm:se,m:de,parent:xe}=R,Ce=Os(P);if(us(R,!1),se&&Ir(se),!Ce&&($=ae&&ae.onVnodeBeforeMount)&&ln($,xe,P),us(R,!0),K&&W){const oe=()=>{R.subTree=fl(R),W(K,R.subTree,R,J,null)};Ce?P.type.__asyncLoader().then(()=>!R.isUnmounted&&oe()):oe()}else{const oe=R.subTree=fl(R);v(null,oe,B,X,R,J,ie),P.el=oe.el}if(de&&Vt(de,J),!Ce&&($=ae&&ae.onVnodeMounted)){const oe=P;Vt(()=>ln($,xe,oe),J)}(P.shapeFlag&256||xe&&Os(xe.vnode)&&xe.vnode.shapeFlag&256)&&R.a&&Vt(R.a,J),R.isMounted=!0,P=B=X=null}},D=R.effect=new Vr(y,It,()=>ah(k),R.scope),k=R.update=()=>{D.dirty&&D.run()};k.id=R.uid,us(R,!0),k()},Y=(R,P,B)=>{P.component=R;const X=R.vnode.props;R.vnode=P,R.next=null,dE(R,P.props,X,B),gE(R,P.children,B),er(),cp(R),tr()},z=(R,P,B,X,J,ie,b,y,D=!1)=>{const k=R&&R.children,$=R?R.shapeFlag:0,K=P.children,{patchFlag:ae,shapeFlag:se}=P;if(ae>0){if(ae&128){ce(k,K,B,X,J,ie,b,y,D);return}else if(ae&256){ne(k,K,B,X,J,ie,b,y,D);return}}se&8?($&16&&be(k,J,ie),K!==k&&h(B,K)):$&16?se&16?ce(k,K,B,X,J,ie,b,y,D):be(k,J,ie,!0):($&8&&h(B,""),se&16&&L(K,B,X,J,ie,b,y,D))},ne=(R,P,B,X,J,ie,b,y,D)=>{R=R||Rr,P=P||Rr;const k=R.length,$=P.length,K=Math.min(k,$);let ae;for(ae=0;ae<K;ae++){const se=P[ae]=D?$i(P[ae]):Sn(P[ae]);v(R[ae],se,B,null,J,ie,b,y,D)}k>$?be(R,J,ie,!0,!1,K):L(P,B,X,J,ie,b,y,D,K)},ce=(R,P,B,X,J,ie,b,y,D)=>{let k=0;const $=P.length;let K=R.length-1,ae=$-1;for(;k<=K&&k<=ae;){const se=R[k],de=P[k]=D?$i(P[k]):Sn(P[k]);if(Gn(se,de))v(se,de,B,null,J,ie,b,y,D);else break;k++}for(;k<=K&&k<=ae;){const se=R[K],de=P[ae]=D?$i(P[ae]):Sn(P[ae]);if(Gn(se,de))v(se,de,B,null,J,ie,b,y,D);else break;K--,ae--}if(k>K){if(k<=ae){const se=ae+1,de=se<$?P[se].el:X;for(;k<=ae;)v(null,P[k]=D?$i(P[k]):Sn(P[k]),B,de,J,ie,b,y,D),k++}}else if(k>ae)for(;k<=K;)ge(R[k],J,ie,!0),k++;else{const se=k,de=k,xe=new Map;for(k=de;k<=ae;k++){const Ie=P[k]=D?$i(P[k]):Sn(P[k]);Ie.key!=null&&xe.set(Ie.key,k)}let Ce,oe=0;const We=ae-de+1;let He=!1,Fe=0;const Pe=new Array(We);for(k=0;k<We;k++)Pe[k]=0;for(k=se;k<=K;k++){const Ie=R[k];if(oe>=We){ge(Ie,J,ie,!0);continue}let Xe;if(Ie.key!=null)Xe=xe.get(Ie.key);else for(Ce=de;Ce<=ae;Ce++)if(Pe[Ce-de]===0&&Gn(Ie,P[Ce])){Xe=Ce;break}Xe===void 0?ge(Ie,J,ie,!0):(Pe[Xe-de]=k+1,Xe>=Fe?Fe=Xe:He=!0,v(Ie,P[Xe],B,null,J,ie,b,y,D),oe++)}const Re=He?xE(Pe):Rr;for(Ce=Re.length-1,k=We-1;k>=0;k--){const Ie=de+k,Xe=P[Ie],pt=Ie+1<$?P[Ie+1].el:X;Pe[k]===0?v(null,Xe,B,pt,J,ie,b,y,D):He&&(Ce<0||k!==Re[Ce]?fe(Xe,B,pt,2):Ce--)}}},fe=(R,P,B,X,J=null)=>{const{el:ie,type:b,transition:y,children:D,shapeFlag:k}=R;if(k&6){fe(R.component.subTree,P,B,X);return}if(k&128){R.suspense.move(P,B,X);return}if(k&64){b.move(R,P,B,he);return}if(b===Bt){i(ie,P,B);for(let K=0;K<D.length;K++)fe(D[K],P,B,X);i(R.anchor,P,B);return}if(b===Fs){_(R,P,B);return}if(X!==2&&k&1&&y)if(X===0)y.beforeEnter(ie),i(ie,P,B),Vt(()=>y.enter(ie),J);else{const{leave:K,delayLeave:ae,afterLeave:se}=y,de=()=>i(ie,P,B),xe=()=>{K(ie,()=>{de(),se&&se()})};ae?ae(ie,de,xe):xe()}else i(ie,P,B)},ge=(R,P,B,X=!1,J=!1)=>{const{type:ie,props:b,ref:y,children:D,dynamicChildren:k,shapeFlag:$,patchFlag:K,dirs:ae}=R;if(y!=null&&wl(y,null,B,R,!0),$&256){P.ctx.deactivate(R);return}const se=$&1&&ae,de=!Os(R);let xe;if(de&&(xe=b&&b.onVnodeBeforeUnmount)&&ln(xe,P,R),$&6)Se(R.component,B,X);else{if($&128){R.suspense.unmount(B,X);return}se&&Jn(R,null,P,"beforeUnmount"),$&64?R.type.remove(R,P,B,J,he,X):k&&(ie!==Bt||K>0&&K&64)?be(k,P,B,!1,!0):(ie===Bt&&K&384||!J&&$&16)&&be(D,P,B),X&&te(R)}(de&&(xe=b&&b.onVnodeUnmounted)||se)&&Vt(()=>{xe&&ln(xe,P,R),se&&Jn(R,null,P,"unmounted")},B)},te=R=>{const{type:P,el:B,anchor:X,transition:J}=R;if(P===Bt){ue(B,X);return}if(P===Fs){E(R);return}const ie=()=>{s(B),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(R.shapeFlag&1&&J&&!J.persisted){const{leave:b,delayLeave:y}=J,D=()=>b(B,ie);y?y(R.el,ie,D):D()}else ie()},ue=(R,P)=>{let B;for(;R!==P;)B=f(R),s(R),R=B;s(P)},Se=(R,P,B)=>{const{bum:X,scope:J,update:ie,subTree:b,um:y}=R;X&&Ir(X),J.stop(),ie&&(ie.active=!1,ge(b,R,P,B)),y&&Vt(y,P),Vt(()=>{R.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},be=(R,P,B,X=!1,J=!1,ie=0)=>{for(let b=ie;b<R.length;b++)ge(R[b],P,B,X,J)},G=R=>R.shapeFlag&6?G(R.component.subTree):R.shapeFlag&128?R.suspense.next():f(R.anchor||R.el);let le=!1;const re=(R,P,B)=>{R==null?P._vnode&&ge(P._vnode,null,null,!0):v(P._vnode||null,R,P,null,null,null,B),le||(le=!0,cp(),bl(),le=!1),P._vnode=R},he={p:v,um:ge,m:fe,r:te,mt:I,mc:L,pc:z,pbc:M,n:G,o:t};let Ae,W;return e&&([Ae,W]=e(he)),{render:re,hydrate:Ae,createApp:hE(re,Ae)}}function Gh({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function m0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ud(t,e,n=!1){const i=t.children,s=e.children;if(Te(i)&&Te(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=$i(s[r]),a.el=o.el),n||ud(o,a)),a.type===Xs&&(a.el=o.el)}}function xE(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function g0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:g0(e)}const SE=t=>t.__isTeleport,Ao=t=>t&&(t.disabled||t.disabled===""),Sp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Mp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Xu=(t,e)=>{const n=t&&t.to;return ze(n)?e?e(n):null:n},ME={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:h,pc:u,pbc:f,o:{insert:d,querySelector:g,createText:v,createComment:m}}=c,p=Ao(e.props);let{shapeFlag:x,children:_,dynamicChildren:E}=e;if(t==null){const w=e.el=v(""),T=e.anchor=v("");d(w,n,i),d(T,n,i);const C=e.target=Xu(e.props,g),L=e.targetAnchor=v("");C&&(d(L,C),o==="svg"||Sp(C)?o="svg":(o==="mathml"||Mp(C))&&(o="mathml"));const S=(M,N)=>{x&16&&h(_,M,N,s,r,o,a,l)};p?S(n,T):C&&S(C,L)}else{e.el=t.el;const w=e.anchor=t.anchor,T=e.target=t.target,C=e.targetAnchor=t.targetAnchor,L=Ao(t.props),S=L?n:T,M=L?w:C;if(o==="svg"||Sp(T)?o="svg":(o==="mathml"||Mp(T))&&(o="mathml"),E?(f(t.dynamicChildren,E,S,s,r,o,a),ud(t,e,!0)):l||u(t,e,S,M,s,r,o,a,!1),p)L?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Na(e,n,w,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=Xu(e.props,g);N&&Na(e,N,null,c,0)}else L&&Na(e,T,C,c,1)}_0(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:h,target:u,props:f}=t;if(u&&r(h),o&&r(c),a&16){const d=o||!Ao(f);for(let g=0;g<l.length;g++){const v=l[g];s(v,e,n,d,!!v.dynamicChildren)}}},move:Na,hydrate:EE};function Na(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:h}=t,u=r===2;if(u&&i(o,e,n),(!u||Ao(h))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);u&&i(a,e,n)}function EE(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const h=e.target=Xu(e.props,l);if(h){const u=h._lpa||h.firstChild;if(e.shapeFlag&16)if(Ao(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=u;else{e.anchor=o(t);let f=u;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(u,e,h,n,i,s,r)}_0(e)}return e.anchor&&o(e.anchor)}const bE=ME;function _0(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Bt=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),Co=[];let un=null;function ls(t=!1){Co.push(un=t?null:[])}function v0(){Co.pop(),un=Co[Co.length-1]||null}let js=1;function ju(t){js+=t}function y0(t){return t.dynamicChildren=js>0?un||Rr:null,v0(),js>0&&un&&un.push(t),t}function fa(t,e,n,i,s,r){return y0(ii(t,e,n,i,s,r,!0))}function fd(t,e,n,i,s){return y0(nt(t,e,n,i,s,!0))}function os(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}function TE(t){}const mh="__vInternal",x0=({key:t})=>t??null,dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||zt(t)||Ue(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function ii(t,e=null,n=null,i=0,s=null,r=t===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&x0(e),ref:e&&dl(e),scopeId:ch,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return a?(pd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),js>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const nt=wE;function wE(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===B_)&&(t=Kt),os(t)){const a=ri(t,e,!0);return n&&pd(a,n),js>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag|=-2,a}if(DE(t)&&(t=t.__vccOpts),e){e=S0(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=ei(a)),lt(l)&&(Yf(l)&&!Te(l)&&(l=st({},l)),e.style=oa(l))}const o=ze(t)?1:k_(t)?128:SE(t)?64:lt(t)?4:Ue(t)?2:0;return ii(t,e,n,i,s,o,r,!0)}function S0(t){return t?Yf(t)||mh in t?st({},t):t:null}function ri(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?M0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&x0(a),ref:e&&e.ref?n&&s?Te(s)?s.concat(dl(e)):[s,dl(e)]:dl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ri(t.ssContent),ssFallback:t.ssFallback&&ri(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ws(t=" ",e=0){return nt(Xs,null,t,e)}function dd(t,e){const n=nt(Fs,null,t);return n.staticCount=e,n}function AE(t="",e=!1){return e?(ls(),fd(Kt,null,t)):nt(Kt,null,t)}function Sn(t){return t==null||typeof t=="boolean"?nt(Kt):Te(t)?nt(Bt,null,t.slice()):typeof t=="object"?$i(t):nt(Xs,null,String(t))}function $i(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ri(t)}function pd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Te(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),pd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(mh in e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),i&64?(n=16,e=[ws(e)]):n=8);t.children=e,t.shapeFlag|=n}function M0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ei([e.class,i.class]));else if(s==="style")e.style=oa([e.style,i.style]);else if(Zs(s)){const r=e[s],o=i[s];o&&r!==o&&!(Te(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ln(t,e,n,i=null){bn(t,e,7,[n,i])}const CE=o0();let RE=0;function E0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||CE,r={uid:RE++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:l0(i,s),emitsOptions:F_(i,s),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gM.bind(null,r),t.ce&&t.ce(r),r}let Lt=null;const Ii=()=>Lt||Ct;let Al,$u;{const t=l_(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Al=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),$u=e("__VUE_SSR_SETTERS__",n=>da=n)}const $s=t=>{const e=Lt;return Al(t),t.scope.on(),()=>{t.scope.off(),Al(e)}},qu=()=>{Lt&&Lt.scope.off(),Al(null)};function b0(t){return t.vnode.shapeFlag&4}let da=!1;function T0(t,e=!1){e&&$u(e);const{props:n,children:i}=t.vnode,s=b0(t);fE(t,n,s,e),mE(t,i);const r=s?PE(t,e):void 0;return e&&$u(!1),r}function PE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kf(new Proxy(t.ctx,Vu));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?C0(t):null,r=$s(t);er();const o=wi(i,t,0,[t.props,s]);if(tr(),r(),Vf(o)){if(o.then(qu,qu),e)return o.then(a=>{Yu(t,a,e)}).catch(a=>{nr(a,t,0)});t.asyncDep=o}else Yu(t,o,e)}else A0(t,e)}function Yu(t,e,n){Ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:lt(e)&&(t.setupState=Qf(e)),A0(t,n)}let Cl,Ku;function w0(t){Cl=t,Ku=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,WM))}}const LE=()=>!Cl;function A0(t,e,n){const i=t.type;if(!t.render){if(!e&&Cl&&!i.render){const s=i.template||cd(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=st(st({isCustomElement:r,delimiters:a},o),l);i.render=Cl(s,c)}}t.render=i.render||It,Ku&&Ku(t)}{const s=$s(t);er();try{sE(t)}finally{tr(),s()}}}function IE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mn(t,"get","$attrs"),e[n]}}))}function C0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return IE(t)},slots:t.slots,emit:t.emit,expose:e}}function gh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qf(Kf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in To)return To[n](t)},has(e,n){return n in e||n in To}}))}function Zu(t,e=!0){return Ue(t)?t.displayName||t.name:t.name||e&&t.__name}function DE(t){return Ue(t)&&"__vccOpts"in t}const In=(t,e)=>ZS(t,e,da);function NE(t,e,n=rt){const i=Ii(),s=bt(e),r=Mn(e),o=L_((l,c)=>{let h;return W_(()=>{const u=t[e];qn(h,u)&&(h=u,c())}),{get(){return l(),n.get?n.get(h):h},set(u){const f=i.vnode.props;!(f&&(e in f||s in f||r in f)&&(`onUpdate:${e}`in f||`onUpdate:${s}`in f||`onUpdate:${r}`in f))&&qn(u,h)&&(h=u,c()),i.emit(`update:${e}`,n.set?n.set(u):u)}}}),a=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[a]||{}:o,done:!1}:{done:!0}}}},o}function _h(t,e,n){const i=arguments.length;return i===2?lt(e)&&!Te(e)?os(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&os(n)&&(n=[n]),nt(t,e,n))}function UE(){}function OE(t,e,n,i){const s=n[i];if(s&&R0(s,t))return s;const r=e();return r.memo=t.slice(),n[i]=r}function R0(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(qn(n[i],e[i]))return!1;return js>0&&un&&un.push(t),!0}const P0="3.4.15",FE=It,BE=uM,kE=Mr,HE=O_,VE={createComponentInstance:E0,setupComponent:T0,renderComponentRoot:fl,setCurrentRenderingInstance:Ho,isVNode:os,normalizeVNode:Sn},zE=VE,GE=null,WE=null,XE=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const jE="http://www.w3.org/2000/svg",$E="http://www.w3.org/1998/Math/MathML",qi=typeof document<"u"?document:null,Ep=qi&&qi.createElement("template"),qE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?qi.createElementNS(jE,t):e==="mathml"?qi.createElementNS($E,t):qi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>qi.createTextNode(t),createComment:t=>qi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ep.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=Ep.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ui="transition",co="animation",Gr=Symbol("_vtc"),md=(t,{slots:e})=>_h(j_,I0(t),e);md.displayName="Transition";const L0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},YE=md.props=st({},ld,L0),fs=(t,e=[])=>{Te(t)?t.forEach(n=>n(...e)):t&&t(...e)},bp=t=>t?Te(t)?t.some(e=>e.length>1):t.length>1:!1;function I0(t){const e={};for(const O in t)O in L0||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:h=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=KE(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:x,onEnterCancelled:_,onLeave:E,onLeaveCancelled:w,onBeforeAppear:T=p,onAppear:C=x,onAppearCancelled:L=_}=e,S=(O,q,I)=>{Gi(O,q?h:a),Gi(O,q?c:o),I&&I()},M=(O,q)=>{O._isLeaving=!1,Gi(O,u),Gi(O,d),Gi(O,f),q&&q()},N=O=>(q,I)=>{const V=O?C:x,H=()=>S(q,O,I);fs(V,[q,H]),Tp(()=>{Gi(q,O?l:r),gi(q,O?h:a),bp(V)||wp(q,i,v,H)})};return st(e,{onBeforeEnter(O){fs(p,[O]),gi(O,r),gi(O,o)},onBeforeAppear(O){fs(T,[O]),gi(O,l),gi(O,c)},onEnter:N(!1),onAppear:N(!0),onLeave(O,q){O._isLeaving=!0;const I=()=>M(O,q);gi(O,u),N0(),gi(O,f),Tp(()=>{O._isLeaving&&(Gi(O,u),gi(O,d),bp(E)||wp(O,i,m,I))}),fs(E,[O,I])},onEnterCancelled(O){S(O,!1),fs(_,[O])},onAppearCancelled(O){S(O,!0),fs(L,[O])},onLeaveCancelled(O){M(O),fs(w,[O])}})}function KE(t){if(t==null)return null;if(lt(t))return[Wh(t.enter),Wh(t.leave)];{const e=Wh(t);return[e,e]}}function Wh(t){return Sl(t)}function gi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Gr]||(t[Gr]=new Set)).add(e)}function Gi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Gr];n&&(n.delete(e),n.size||(t[Gr]=void 0))}function Tp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ZE=0;function wp(t,e,n,i){const s=t._endId=++ZE,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=D0(t,e);if(!o)return i();const c=o+"end";let h=0;const u=()=>{t.removeEventListener(c,f),r()},f=d=>{d.target===t&&++h>=l&&u()};setTimeout(()=>{h<l&&u()},a+1),t.addEventListener(c,f)}function D0(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Ui}Delay`),r=i(`${Ui}Duration`),o=Ap(s,r),a=i(`${co}Delay`),l=i(`${co}Duration`),c=Ap(a,l);let h=null,u=0,f=0;e===Ui?o>0&&(h=Ui,u=o,f=r.length):e===co?c>0&&(h=co,u=c,f=l.length):(u=Math.max(o,c),h=u>0?o>c?Ui:co:null,f=h?h===Ui?r.length:l.length:0);const d=h===Ui&&/\b(transform|all)(,|$)/.test(i(`${Ui}Property`).toString());return{type:h,timeout:u,propCount:f,hasTransform:d}}function Ap(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Cp(n)+Cp(t[i])))}function Cp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function N0(){return document.body.offsetHeight}function JE(t,e,n){const i=t[Gr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gd=Symbol("_vod"),U0={beforeMount(t,{value:e},{transition:n}){t[gd]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ho(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ho(t,!0),i.enter(t)):i.leave(t,()=>{ho(t,!1)}):ho(t,e))},beforeUnmount(t,{value:e}){ho(t,e)}};function ho(t,e){t.style.display=e?t[gd]:"none"}function QE(){U0.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const O0=Symbol("");function eb(t){const e=Ii();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Qu(r,s))},i=()=>{const s=t(e.proxy);Ju(e.subTree,s),n(s)};G_(i),ua(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),ph(()=>s.disconnect())})}function Ju(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ju(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Qu(t.el,e);else if(t.type===Bt)t.children.forEach(n=>Ju(n,e));else if(t.type===Fs){let{el:n,anchor:i}=t;for(;n&&(Qu(n,e),n!==i);)n=n.nextSibling}}function Qu(t,e){if(t.nodeType===1){const n=t.style;let i="";for(const s in e)n.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;n[O0]=i}}function tb(t,e,n){const i=t.style,s=i.display,r=ze(n);if(n&&!r){if(e&&!ze(e))for(const o in e)n[o]==null&&ef(i,o,"");for(const o in n)ef(i,o,n[o])}else if(r){if(e!==n){const o=i[O0];o&&(n+=";"+o),i.cssText=n}}else e&&t.removeAttribute("style");gd in t&&(i.display=s)}const Rp=/\s*!important$/;function ef(t,e,n){if(Te(n))n.forEach(i=>ef(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=nb(t,e);Rp.test(n)?t.setProperty(Mn(i),n.replace(Rp,""),"important"):t[i]=n}}const Pp=["Webkit","Moz","ms"],Xh={};function nb(t,e){const n=Xh[e];if(n)return n;let i=bt(e);if(i!=="filter"&&i in t)return Xh[e]=i;i=Qs(i);for(let s=0;s<Pp.length;s++){const r=Pp[s]+i;if(r in t)return Xh[e]=r}return e}const Lp="http://www.w3.org/1999/xlink";function ib(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lp,e.slice(6,e.length)):t.setAttributeNS(Lp,e,n);else{const r=ES(e);n==null||r&&!h_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function sb(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,h=n??"";c!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=h_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mi(t,e,n,i){t.addEventListener(e,n,i)}function rb(t,e,n,i){t.removeEventListener(e,n,i)}const Ip=Symbol("_vei");function ob(t,e,n,i,s=null){const r=t[Ip]||(t[Ip]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=ab(e);if(i){const c=r[e]=hb(i,s);Mi(t,a,c,l)}else o&&(rb(t,a,o,l),r[e]=void 0)}}const Dp=/(?:Once|Passive|Capture)$/;function ab(t){let e;if(Dp.test(t)){e={};let i;for(;i=t.match(Dp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mn(t.slice(2)),e]}let jh=0;const lb=Promise.resolve(),cb=()=>jh||(lb.then(()=>jh=0),jh=Date.now());function hb(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;bn(ub(i,n.value),e,5,[i])};return n.value=t,n.attached=cb(),n}function ub(t,e){if(Te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Np=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fb=(t,e,n,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?JE(t,i,c):e==="style"?tb(t,n,i):Zs(e)?kf(e)||ob(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):db(t,e,i,c))?sb(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ib(t,e,i,c))};function db(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Np(e)&&Ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Np(e)&&ze(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function F0(t,e){const n=no(t);class i extends vh{constructor(r){super(n,r,e)}}return i.def=n,i}/*! #__NO_SIDE_EFFECTS__ */const pb=t=>F0(t,q0),mb=typeof HTMLElement<"u"?HTMLElement:class{};class vh extends mb{constructor(e,n={},i){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),la(()=>{this._connected||(tf(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,s=!1)=>{const{props:r,styles:o}=i;let a;if(r&&!Te(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Sl(this._props[l])),(a||(a=Object.create(null)))[bt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,i=Te(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of i.map(bt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r)}})}_setAttr(e){let n=this.getAttribute(e);const i=bt(e);this._numberProps&&this._numberProps[i]&&(n=Sl(n)),this._setProp(i,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),i&&(n===!0?this.setAttribute(Mn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Mn(e),n+""):n||this.removeAttribute(Mn(e))))}_update(){tf(this._createVNode(),this.shadowRoot)}_createVNode(){const e=nt(this._def,st({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const i=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{i(r,o),Mn(r)!==r&&i(Mn(r),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof vh){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const i=document.createElement("style");i.textContent=n,this.shadowRoot.appendChild(i)})}}function gb(t="$style"){{const e=Ii();if(!e)return rt;const n=e.type.__cssModules;if(!n)return rt;const i=n[t];return i||rt}}const B0=new WeakMap,k0=new WeakMap,Rl=Symbol("_moveCb"),Up=Symbol("_enterCb"),H0={name:"TransitionGroup",props:st({},YE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ii(),i=ad();let s,r;return fh(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Mb(s[0].el,n.vnode.el,o))return;s.forEach(yb),s.forEach(xb);const a=s.filter(Sb);N0(),a.forEach(l=>{const c=l.el,h=c.style;gi(c,o),h.transform=h.webkitTransform=h.transitionDuration="";const u=c[Rl]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",u),c[Rl]=null,Gi(c,o))};c.addEventListener("transitionend",u)})}),()=>{const o=et(t),a=I0(o);let l=o.tag||Bt;s=r,r=e.default?hh(e.default()):[];for(let c=0;c<r.length;c++){const h=r[c];h.key!=null&&Ws(h,zr(h,a,i,n))}if(s)for(let c=0;c<s.length;c++){const h=s[c];Ws(h,zr(h,a,i,n)),B0.set(h,h.el.getBoundingClientRect())}return nt(l,null,r)}}},_b=t=>delete t.mode;H0.props;const vb=H0;function yb(t){const e=t.el;e[Rl]&&e[Rl](),e[Up]&&e[Up]()}function xb(t){k0.set(t,t.el.getBoundingClientRect())}function Sb(t){const e=B0.get(t),n=k0.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function Mb(t,e,n){const i=t.cloneNode(),s=t[Gr];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=D0(i);return r.removeChild(i),o}const as=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Te(e)?n=>Ir(e,n):e};function Eb(t){t.target.composing=!0}function Op(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const On=Symbol("_assign"),Pl={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[On]=as(s);const r=i||s.props&&s.props.type==="number";Mi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Uo(a)),t[On](a)}),n&&Mi(t,"change",()=>{t.value=t.value.trim()}),e||(Mi(t,"compositionstart",Eb),Mi(t,"compositionend",Op),Mi(t,"change",Op))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[On]=as(r),t.composing)return;const o=s||t.type==="number"?Uo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},_d={deep:!0,created(t,e,n){t[On]=as(n),Mi(t,"change",()=>{const i=t._modelValue,s=Wr(t),r=t.checked,o=t[On];if(Te(i)){const a=ih(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Js(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(z0(t,r))})},mounted:Fp,beforeUpdate(t,e,n){t[On]=as(n),Fp(t,e,n)}};function Fp(t,{value:e,oldValue:n},i){t._modelValue=e,Te(e)?t.checked=ih(e,i.props.value)>-1:Js(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Ai(e,z0(t,!0)))}const vd={created(t,{value:e},n){t.checked=Ai(e,n.props.value),t[On]=as(n),Mi(t,"change",()=>{t[On](Wr(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[On]=as(i),e!==n&&(t.checked=Ai(e,i.props.value))}},V0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Js(e);Mi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Uo(Wr(o)):Wr(o));t[On](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,la(()=>{t._assigning=!1})}),t[On]=as(i)},mounted(t,{value:e,oldValue:n,modifiers:{number:i}}){Bp(t,e,n,i)},beforeUpdate(t,e,n){t[On]=as(n)},updated(t,{value:e,oldValue:n,modifiers:{number:i}}){t._assigning||Bp(t,e,n,i)}};function Bp(t,e,n,i){const s=t.multiple,r=Te(e);if(!(s&&!r&&!Js(e))&&!(r&&Ai(e,n))){for(let o=0,a=t.options.length;o<a;o++){const l=t.options[o],c=Wr(l);if(s)if(r){const h=typeof c;h==="string"||h==="number"?l.selected=e.includes(i?Uo(c):c):l.selected=ih(e,c)>-1}else l.selected=e.has(c);else if(Ai(Wr(l),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Wr(t){return"_value"in t?t._value:t.value}function z0(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const G0={created(t,e,n){Ua(t,e,n,null,"created")},mounted(t,e,n){Ua(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){Ua(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){Ua(t,e,n,i,"updated")}};function W0(t,e){switch(t){case"SELECT":return V0;case"TEXTAREA":return Pl;default:switch(e){case"checkbox":return _d;case"radio":return vd;default:return Pl}}}function Ua(t,e,n,i,s){const o=W0(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function bb(){Pl.getSSRProps=({value:t})=>({value:t}),vd.getSSRProps=({value:t},e)=>{if(e.props&&Ai(e.props.value,t))return{checked:!0}},_d.getSSRProps=({value:t},e)=>{if(Te(t)){if(e.props&&ih(t,e.props.value)>-1)return{checked:!0}}else if(Js(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},G0.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=W0(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Tb=["ctrl","shift","alt","meta"],wb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tb.some(n=>t[`${n}Key`]&&!e.includes(n))},Ab=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=wb[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Cb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rb=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=Mn(s.key);if(e.some(o=>o===r||Cb[o]===r))return t(s)})},X0=st({patchProp:fb},qE);let Ro,kp=!1;function j0(){return Ro||(Ro=f0(X0))}function $0(){return Ro=kp?Ro:d0(X0),kp=!0,Ro}const tf=(...t)=>{j0().render(...t)},q0=(...t)=>{$0().hydrate(...t)},Y0=(...t)=>{const e=j0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Z0(i);if(!s)return;const r=e._component;!Ue(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,K0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Pb=(...t)=>{const e=$0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Z0(i);if(s)return n(s,!0,K0(s))},e};function K0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Z0(t){return ze(t)?document.querySelector(t):t}let Hp=!1;const Lb=()=>{Hp||(Hp=!0,bb(),QE())},Ib=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:j_,BaseTransitionPropsValidators:ld,Comment:Kt,DeprecationTypes:XE,EffectScope:Gf,ErrorCodes:hM,ErrorTypeStrings:BE,Fragment:Bt,KeepAlive:BM,ReactiveEffect:Vr,Static:Fs,Suspense:wM,Teleport:bE,Text:Xs,TrackOpTypes:aM,Transition:md,TransitionGroup:vb,TriggerOpTypes:lM,VueElement:vh,assertNumber:cM,callWithAsyncErrorHandling:bn,callWithErrorHandling:wi,camelize:bt,capitalize:Qs,cloneVNode:ri,compatUtils:WE,computed:In,createApp:Y0,createBlock:fd,createCommentVNode:AE,createElementBlock:fa,createElementVNode:ii,createHydrationRenderer:d0,createPropsRestProxy:nE,createRenderer:f0,createSSRApp:Pb,createSlots:VM,createStaticVNode:dd,createTextVNode:ws,createVNode:nt,customRef:L_,defineAsyncComponent:OM,defineComponent:no,defineCustomElement:F0,defineEmits:jM,defineExpose:$M,defineModel:KM,defineOptions:qM,defineProps:XM,defineSSRCustomElement:pb,defineSlots:YM,devtools:kE,effect:RS,effectScope:wS,getCurrentInstance:Ii,getCurrentScope:d_,getTransitionRawChildren:hh,guardReactiveProps:S0,h:_h,handleError:nr,hasInjectionContext:uE,hydrate:q0,initCustomFormatter:UE,initDirectivesForSSR:Lb,inject:ni,isMemoSame:R0,isProxy:Yf,isReactive:Us,isReadonly:Gs,isRef:zt,isRuntimeOnly:LE,isShallow:Oo,isVNode:os,markRaw:Kf,mergeDefaults:eE,mergeModels:tE,mergeProps:M0,nextTick:la,normalizeClass:ei,normalizeProps:dS,normalizeStyle:oa,onActivated:q_,onBeforeMount:Z_,onBeforeUnmount:dh,onBeforeUpdate:J_,onDeactivated:Y_,onErrorCaptured:n0,onMounted:ua,onRenderTracked:t0,onRenderTriggered:e0,onScopeDispose:AS,onServerPrefetch:Q_,onUnmounted:ph,onUpdated:fh,openBlock:ls,popScopeId:nd,provide:wo,proxyRefs:Qf,pushScopeId:td,queuePostFlushCb:El,reactive:aa,readonly:qf,ref:Nr,registerRuntimeCompiler:w0,render:tf,renderList:HM,renderSlot:zM,resolveComponent:yo,resolveDirective:bM,resolveDynamicComponent:EM,resolveFilter:GE,resolveTransitionHooks:zr,setBlockTracking:ju,setDevtoolsHook:HE,setTransitionHooks:Ws,shallowReactive:$f,shallowReadonly:KS,shallowRef:R_,ssrContextKey:V_,ssrUtils:zE,stop:PS,toDisplayString:TS,toHandlerKey:Lr,toHandlers:GM,toRaw:et,toRef:oM,toRefs:iM,toValue:eM,transformVNodeArgs:TE,triggerRef:QS,unref:En,useAttrs:QM,useCssModule:gb,useCssVars:eb,useModel:NE,useSSRContext:z_,useSlots:JM,useTransitionState:ad,vModelCheckbox:_d,vModelDynamic:G0,vModelRadio:vd,vModelSelect:V0,vModelText:Pl,vShow:U0,version:P0,warn:FE,watch:Fr,watchEffect:IM,watchPostEffect:G_,watchSyncEffect:W_,withAsyncContext:iE,withCtx:Zi,withDefaults:ZM,withDirectives:NM,withKeys:Rb,withMemo:OE,withModifiers:Ab,withScopeId:_M},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Wo=Symbol(""),Po=Symbol(""),yd=Symbol(""),Ll=Symbol(""),J0=Symbol(""),qs=Symbol(""),Q0=Symbol(""),ev=Symbol(""),xd=Symbol(""),Sd=Symbol(""),pa=Symbol(""),Md=Symbol(""),tv=Symbol(""),Ed=Symbol(""),bd=Symbol(""),Td=Symbol(""),wd=Symbol(""),Ad=Symbol(""),Cd=Symbol(""),nv=Symbol(""),iv=Symbol(""),yh=Symbol(""),Il=Symbol(""),Rd=Symbol(""),Pd=Symbol(""),Xo=Symbol(""),ma=Symbol(""),Ld=Symbol(""),nf=Symbol(""),Db=Symbol(""),sf=Symbol(""),Dl=Symbol(""),Nb=Symbol(""),Ub=Symbol(""),Id=Symbol(""),Ob=Symbol(""),Fb=Symbol(""),Dd=Symbol(""),sv=Symbol(""),Xr={[Wo]:"Fragment",[Po]:"Teleport",[yd]:"Suspense",[Ll]:"KeepAlive",[J0]:"BaseTransition",[qs]:"openBlock",[Q0]:"createBlock",[ev]:"createElementBlock",[xd]:"createVNode",[Sd]:"createElementVNode",[pa]:"createCommentVNode",[Md]:"createTextVNode",[tv]:"createStaticVNode",[Ed]:"resolveComponent",[bd]:"resolveDynamicComponent",[Td]:"resolveDirective",[wd]:"resolveFilter",[Ad]:"withDirectives",[Cd]:"renderList",[nv]:"renderSlot",[iv]:"createSlots",[yh]:"toDisplayString",[Il]:"mergeProps",[Rd]:"normalizeClass",[Pd]:"normalizeStyle",[Xo]:"normalizeProps",[ma]:"guardReactiveProps",[Ld]:"toHandlers",[nf]:"camelize",[Db]:"capitalize",[sf]:"toHandlerKey",[Dl]:"setBlockTracking",[Nb]:"pushScopeId",[Ub]:"popScopeId",[Id]:"withCtx",[Ob]:"unref",[Fb]:"isRef",[Dd]:"withMemo",[sv]:"isMemoSame"};function Bb(t){Object.getOwnPropertySymbols(t).forEach(e=>{Xr[e]=t[e]})}const wn={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function kb(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:wn}}function jo(t,e,n,i,s,r,o,a=!1,l=!1,c=!1,h=wn){return t&&(a?(t.helper(qs),t.helper(qr(t.inSSR,c))):t.helper($r(t.inSSR,c)),o&&t.helper(Ad)),{type:13,tag:e,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:h}}function ga(t,e=wn){return{type:17,loc:e,elements:t}}function Nn(t,e=wn){return{type:15,loc:e,properties:t}}function Et(t,e){return{type:16,loc:wn,key:ze(t)?$e(t,!0):t,value:e}}function $e(t,e=!1,n=wn,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function jn(t,e=wn){return{type:8,loc:e,children:t}}function Pt(t,e=[],n=wn){return{type:14,loc:n,callee:t,arguments:e}}function jr(t,e=void 0,n=!1,i=!1,s=wn){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:s}}function rf(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:wn}}function Hb(t,e,n=!1){return{type:20,index:t,value:e,isVNode:n,loc:wn}}function Vb(t){return{type:21,body:t,loc:wn}}function $r(t,e){return t||e?xd:Sd}function qr(t,e){return t||e?Q0:ev}function Nd(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n($r(i,t.isComponent)),e(qs),e(qr(i,t.isComponent)))}const Vp=new Uint8Array([123,123]),zp=new Uint8Array([125,125]);function Gp(t){return t>=97&&t<=122||t>=65&&t<=90}function xn(t){return t===32||t===10||t===9||t===12||t===13}function Oi(t){return t===47||t===62||xn(t)}function Nl(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const Wt={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class zb{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Vp,this.delimiterClose=zp,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Vp,this.delimiterClose=zp}getPos(e){let n=1,i=e+1;for(let s=this.newlines.length-1;s>=0;s--){const r=this.newlines[s];if(e>r){n=s+2,i=e-r;break}}return{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Oi(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||xn(e)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Wt.TitleEnd||this.currentSequence===Wt.TextareaEnd&&!this.inSFCRoot?e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===Wt.Cdata[this.sequenceIndex]?++this.sequenceIndex===Wt.Cdata.length&&(this.state=28,this.currentSequence=Wt.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Wt.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){if(e===33)this.state=22,this.sectionStart=this.index+1;else if(e===63)this.state=24,this.sectionStart=this.index+1;else if(Gp(e))if(this.sectionStart=this.index,this.mode===0)this.state=6;else if(this.inSFCRoot)this.state=34;else if(this.inXML)this.state=6;else{const n=e|32;n===116?this.state=30:this.state=n===115?29:6}else e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Oi(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Oi(e)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(Nl("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){xn(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Gp(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||xn(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):xn(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):xn(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Oi(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Oi(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Oi(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Oi(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Oi(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):xn(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):xn(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){xn(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=Wt.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){const n=e|32;n===Wt.ScriptEnd[3]?this.startSpecial(Wt.ScriptEnd,4):n===Wt.StyleEnd[3]?this.startSpecial(Wt.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){const n=e|32;n===Wt.TitleEnd[3]?this.startSpecial(Wt.TitleEnd,4):n===Wt.TextareaEnd[3]?this.startSpecial(Wt.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===Wt.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}}function Wp(t,{compatConfig:e}){const n=e&&e[t];return t==="MODE"?n||3:n}function Bs(t,e){const n=Wp("MODE",e),i=Wp(t,e);return n===3?i===!0:i!==!1}function $o(t,e,n,...i){return Bs(t,e)}function Ud(t){throw t}function rv(t){}function vt(t,e,n,i){const s=`https://vuejs.org/error-reference/#compiler-${t}`,r=new SyntaxError(String(s));return r.code=t,r.loc=e,r}const fn=t=>t.type===4&&t.isStatic;function ov(t){switch(t){case"Teleport":case"teleport":return Po;case"Suspense":case"suspense":return yd;case"KeepAlive":case"keep-alive":return Ll;case"BaseTransition":case"base-transition":return J0}}const Gb=/^\d|[^\$\w]/,Od=t=>!Gb.test(t),Wb=/[A-Za-z_$\xA0-\uFFFF]/,Xb=/[\.\?\w$\xA0-\uFFFF]/,jb=/\s+[.[]\s*|\s*[.[]\s+/g,$b=t=>{t=t.trim().replace(jb,o=>o.trim());let e=0,n=[],i=0,s=0,r=null;for(let o=0;o<t.length;o++){const a=t.charAt(o);switch(e){case 0:if(a==="[")n.push(e),e=1,i++;else if(a==="(")n.push(e),e=2,s++;else if(!(o===0?Wb:Xb).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(e),e=3,r=a):a==="["?i++:a==="]"&&(--i||(e=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(e),e=3,r=a;else if(a==="(")s++;else if(a===")"){if(o===t.length-1)return!1;--s||(e=n.pop())}break;case 3:a===r&&(e=n.pop(),r=null);break}}return!i&&!s},av=$b;function Vn(t,e,n=!1){for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&(n||s.exp)&&(ze(e)?s.name===e:e.test(s.name)))return s}}function xh(t,e,n=!1,i=!1){for(let s=0;s<t.props.length;s++){const r=t.props[s];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&As(r.arg,e))return r}}function As(t,e){return!!(t&&fn(t)&&t.content===e)}function qb(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function $h(t){return t.type===5||t.type===2}function Yb(t){return t.type===7&&t.name==="slot"}function Ul(t){return t.type===1&&t.tagType===3}function Ol(t){return t.type===1&&t.tagType===2}const Kb=new Set([Xo,ma]);function lv(t,e=[]){if(t&&!ze(t)&&t.type===14){const n=t.callee;if(!ze(n)&&Kb.has(n))return lv(t.arguments[0],e.concat(t))}return[t,e]}function Fl(t,e,n){let i,s=t.type===13?t.props:t.arguments[2],r=[],o;if(s&&!ze(s)&&s.type===14){const a=lv(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||ze(s))i=Nn([e]);else if(s.type===14){const a=s.arguments[0];!ze(a)&&a.type===15?Xp(e,a)||a.properties.unshift(e):s.callee===Ld?i=Pt(n.helper(Il),[Nn([e]),s]):s.arguments.unshift(Nn([e])),!i&&(i=s)}else s.type===15?(Xp(e,s)||s.properties.unshift(e),i=s):(i=Pt(n.helper(Il),[Nn([e]),s]),o&&o.callee===ma&&(o=r[r.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function Xp(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function qo(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function Zb(t){return t.type===14&&t.callee===Dd?t.arguments[1].returns:t}const Jb=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,cv={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:ul,isPreTag:ul,isCustomElement:ul,onError:Ud,onWarn:rv,comments:!1,prefixIdentifiers:!1};let ot=cv,Yo=null,ks="",$t=null,tt=null,an="",_i=-1,_s=-1,Bl=0,Yi=!1,of=null;const St=[],Mt=new zb(St,{onerr:li,ontext(t,e){Oa(Ht(t,e),t,e)},ontextentity(t,e,n){Oa(t,e,n)},oninterpolation(t,e){if(Yi)return Oa(Ht(t,e),t,e);let n=t+Mt.delimiterOpen.length,i=e-Mt.delimiterClose.length;for(;xn(ks.charCodeAt(n));)n++;for(;xn(ks.charCodeAt(i-1));)i--;let s=Ht(n,i);s.includes("&")&&(s=ot.decodeEntities(s,!1)),af({type:5,content:ml(s,!1,Rt(n,i)),loc:Rt(t,e)})},onopentagname(t,e){const n=Ht(t,e);$t={type:1,tag:n,ns:ot.getNamespace(n,St[0],ot.ns),tagType:0,props:[],children:[],loc:Rt(t-1,e),codegenNode:void 0}},onopentagend(t){$p(t)},onclosetag(t,e){const n=Ht(t,e);if(!ot.isVoidTag(n)){let i=!1;for(let s=0;s<St.length;s++)if(St[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&li(24,St[0].loc.start.offset);for(let o=0;o<=s;o++){const a=St.shift();pl(a,e,o<s)}break}i||li(23,hv(t,60))}},onselfclosingtag(t){var e;const n=$t.tag;$t.isSelfClosing=!0,$p(t),((e=St[0])==null?void 0:e.tag)===n&&pl(St.shift(),t)},onattribname(t,e){tt={type:6,name:Ht(t,e),nameLoc:Rt(t,e),value:void 0,loc:Rt(t)}},ondirname(t,e){const n=Ht(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!Yi&&i===""&&li(26,t),Yi||i==="")tt={type:6,name:n,nameLoc:Rt(t,e),value:void 0,loc:Rt(t)};else if(tt={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?["prop"]:[],loc:Rt(t)},i==="pre"){Yi=Mt.inVPre=!0,of=$t;const s=$t.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=aT(s[r]))}},ondirarg(t,e){if(t===e)return;const n=Ht(t,e);if(Yi)tt.name+=n,Cs(tt.nameLoc,e);else{const i=n[0]!=="[";tt.arg=ml(i?n:n.slice(1,-1),i,Rt(t,e),i?3:0)}},ondirmodifier(t,e){const n=Ht(t,e);if(Yi)tt.name+="."+n,Cs(tt.nameLoc,e);else if(tt.name==="slot"){const i=tt.arg;i&&(i.content+="."+n,Cs(i.loc,e))}else tt.modifiers.push(n)},onattribdata(t,e){an+=Ht(t,e),_i<0&&(_i=t),_s=e},onattribentity(t,e,n){an+=t,_i<0&&(_i=e),_s=n},onattribnameend(t){const e=tt.loc.start.offset,n=Ht(e,t);tt.type===7&&(tt.rawName=n),$t.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&li(2,e)},onattribend(t,e){if($t&&tt){if(Cs(tt.loc,e),t!==0)if(an.includes("&")&&(an=ot.decodeEntities(an,!0)),tt.type===6)tt.name==="class"&&(an=fv(an).trim()),t===1&&!an&&li(13,e),tt.value={type:2,content:an,loc:t===1?Rt(_i,_s):Rt(_i-1,_s+1)},Mt.inSFCRoot&&$t.tag==="template"&&tt.name==="lang"&&an&&an!=="html"&&Mt.enterRCDATA(Nl("</template"),0);else{let n=0;tt.exp=ml(an,!1,Rt(_i,_s),0,n),tt.name==="for"&&(tt.forParseResult=eT(tt.exp));let i=-1;tt.name==="bind"&&(i=tt.modifiers.indexOf("sync"))>-1&&$o("COMPILER_V_BIND_SYNC",ot,tt.loc,tt.rawName)&&(tt.name="model",tt.modifiers.splice(i,1))}(tt.type!==7||tt.name!=="pre")&&$t.props.push(tt)}an="",_i=_s=-1},oncomment(t,e){ot.comments&&af({type:3,content:Ht(t,e),loc:Rt(t-4,e+3)})},onend(){const t=ks.length;for(let e=0;e<St.length;e++)pl(St[e],t-1),li(24,St[e].loc.start.offset)},oncdata(t,e){St[0].ns!==0?Oa(Ht(t,e),t,e):li(1,t-9)},onprocessinginstruction(t){(St[0]?St[0].ns:ot.ns)===0&&li(21,t-1)}}),jp=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Qb=/^\(|\)$/g;function eT(t){const e=t.loc,n=t.content,i=n.match(Jb);if(!i)return;const[,s,r]=i,o=(u,f,d=!1)=>{const g=e.start.offset+f,v=g+u.length;return ml(u,!1,Rt(g,v),0,d?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(Qb,"").trim();const c=s.indexOf(l),h=l.match(jp);if(h){l=l.replace(jp,"").trim();const u=h[1].trim();let f;if(u&&(f=n.indexOf(u,c+l.length),a.key=o(u,f,!0)),h[2]){const d=h[2].trim();d&&(a.index=o(d,n.indexOf(d,a.key?f+u.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function Ht(t,e){return ks.slice(t,e)}function $p(t){Mt.inSFCRoot&&($t.innerLoc=Rt(t+1,t+1)),af($t);const{tag:e,ns:n}=$t;n===0&&ot.isPreTag(e)&&Bl++,ot.isVoidTag(e)?pl($t,t):(St.unshift($t),(n===1||n===2)&&(Mt.inXML=!0)),$t=null}function Oa(t,e,n){var i;{const o=(i=St[0])==null?void 0:i.tag;o!=="script"&&o!=="style"&&t.includes("&")&&(t=ot.decodeEntities(t,!1))}const s=St[0]||Yo,r=s.children[s.children.length-1];(r==null?void 0:r.type)===2?(r.content+=t,Cs(r.loc,n)):s.children.push({type:2,content:t,loc:Rt(e,n)})}function pl(t,e,n=!1){n?Cs(t.loc,hv(e,60)):Cs(t.loc,e+1),Mt.inSFCRoot&&(t.children.length?t.innerLoc.end=st({},t.children[t.children.length-1].loc.end):t.innerLoc.end=st({},t.innerLoc.start),t.innerLoc.source=Ht(t.innerLoc.start.offset,t.innerLoc.end.offset));const{tag:i,ns:s}=t;Yi||(i==="slot"?t.tagType=2:qp(t)?t.tagType=3:nT(t)&&(t.tagType=1)),Mt.inRCDATA||(t.children=uv(t.children,t.tag)),s===0&&ot.isPreTag(i)&&Bl--,of===t&&(Yi=Mt.inVPre=!1,of=null),Mt.inXML&&(St[0]?St[0].ns:ot.ns)===0&&(Mt.inXML=!1);{const r=t.props;if(!Mt.inSFCRoot&&Bs("COMPILER_NATIVE_TEMPLATE",ot)&&t.tag==="template"&&!qp(t)){const a=St[0]||Yo,l=a.children.indexOf(t);a.children.splice(l,1,...t.children)}const o=r.find(a=>a.type===6&&a.name==="inline-template");o&&$o("COMPILER_INLINE_TEMPLATE",ot,o.loc)&&t.children.length&&(o.value={type:2,content:Ht(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:o.loc})}}function hv(t,e){let n=t;for(;ks.charCodeAt(n)!==e&&n>=0;)n--;return n}const tT=new Set(["if","else","else-if","for","slot"]);function qp({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&tT.has(e[n].name))return!0}return!1}function nT({tag:t,props:e}){var n;if(ot.isCustomElement(t))return!1;if(t==="component"||iT(t.charCodeAt(0))||ov(t)||(n=ot.isBuiltInComponent)!=null&&n.call(ot,t)||ot.isNativeTag&&!ot.isNativeTag(t))return!0;for(let i=0;i<e.length;i++){const s=e[i];if(s.type===6){if(s.name==="is"&&s.value){if(s.value.content.startsWith("vue:"))return!0;if($o("COMPILER_IS_ON_ELEMENT",ot,s.loc))return!0}}else if(s.name==="bind"&&As(s.arg,"is")&&$o("COMPILER_IS_ON_ELEMENT",ot,s.loc))return!0}return!1}function iT(t){return t>64&&t<91}const sT=/\r\n/g;function uv(t,e){var n,i;const s=ot.whitespace!=="preserve";let r=!1;for(let o=0;o<t.length;o++){const a=t[o];if(a.type===2)if(Bl)a.content=a.content.replace(sT,`
`);else if(rT(a.content)){const l=(n=t[o-1])==null?void 0:n.type,c=(i=t[o+1])==null?void 0:i.type;!l||!c||s&&(l===3&&(c===3||c===1)||l===1&&(c===3||c===1&&oT(a.content)))?(r=!0,t[o]=null):a.content=" "}else s&&(a.content=fv(a.content))}if(Bl&&e&&ot.isPreTag(e)){const o=t[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}return r?t.filter(Boolean):t}function rT(t){for(let e=0;e<t.length;e++)if(!xn(t.charCodeAt(e)))return!1;return!0}function oT(t){for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function fv(t){let e="",n=!1;for(let i=0;i<t.length;i++)xn(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function af(t){(St[0]||Yo).children.push(t)}function Rt(t,e){return{start:Mt.getPos(t),end:e==null?e:Mt.getPos(e),source:e==null?e:Ht(t,e)}}function Cs(t,e){t.end=Mt.getPos(e),t.source=Ht(t.start.offset,e)}function aT(t){const e={type:6,name:t.rawName,nameLoc:Rt(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){const n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function ml(t,e=!1,n,i=0,s=0){return $e(t,e,n,i)}function li(t,e,n){ot.onError(vt(t,Rt(e,e)))}function lT(){Mt.reset(),$t=null,tt=null,an="",_i=-1,_s=-1,St.length=0}function cT(t,e){if(lT(),ks=t,ot=st({},cv),e){let s;for(s in e)e[s]!=null&&(ot[s]=e[s])}Mt.mode=ot.parseMode==="html"?1:ot.parseMode==="sfc"?2:0,Mt.inXML=ot.ns===1||ot.ns===2;const n=e==null?void 0:e.delimiters;n&&(Mt.delimiterOpen=Nl(n[0]),Mt.delimiterClose=Nl(n[1]));const i=Yo=kb([],t);return Mt.parse(ks),i.loc=Rt(0,t.length),i.children=uv(i.children),Yo=null,i}function hT(t,e){gl(t,e,dv(t,t.children[0]))}function dv(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!Ol(e)}function gl(t,e,n=!1){const{children:i}=t,s=i.length;let r=0;for(let o=0;o<i.length;o++){const a=i[o];if(a.type===1&&a.tagType===0){const l=n?0:Un(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag="-1",a.codegenNode=e.hoist(a.codegenNode),r++;continue}}else{const c=a.codegenNode;if(c.type===13){const h=_v(c);if((!h||h===512||h===1)&&mv(a,e)>=2){const u=gv(a);u&&(c.props=e.hoist(u))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,gl(a,e),l&&e.scopes.vSlot--}else if(a.type===11)gl(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)gl(a.branches[l],e,a.branches[l].children.length===1)}if(r&&e.transformHoist&&e.transformHoist(i,e,t),r&&r===s&&t.type===1&&t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&Te(t.codegenNode.children)){const o=e.hoist(ga(t.codegenNode.children));e.hmr&&(o.content=`[...${o.content}]`),t.codegenNode.children=o}}function Un(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const s=t.codegenNode;if(s.type!==13||s.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject")return 0;if(_v(s))return n.set(t,0),0;{let a=3;const l=mv(t,e);if(l===0)return n.set(t,0),0;l<a&&(a=l);for(let c=0;c<t.children.length;c++){const h=Un(t.children[c],e);if(h===0)return n.set(t,0),0;h<a&&(a=h)}if(a>1)for(let c=0;c<t.props.length;c++){const h=t.props[c];if(h.type===7&&h.name==="bind"&&h.exp){const u=Un(h.exp,e);if(u===0)return n.set(t,0),0;u<a&&(a=u)}}if(s.isBlock){for(let c=0;c<t.props.length;c++)if(t.props[c].type===7)return n.set(t,0),0;e.removeHelper(qs),e.removeHelper(qr(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper($r(e.inSSR,s.isComponent))}return n.set(t,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Un(t.content,e);case 4:return t.constType;case 8:let o=3;for(let a=0;a<t.children.length;a++){const l=t.children[a];if(ze(l)||$n(l))continue;const c=Un(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const uT=new Set([Rd,Pd,Xo,ma]);function pv(t,e){if(t.type===14&&!ze(t.callee)&&uT.has(t.callee)){const n=t.arguments[0];if(n.type===4)return Un(n,e);if(n.type===14)return pv(n,e)}return 0}function mv(t,e){let n=3;const i=gv(t);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Un(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=Un(a,e):a.type===14?c=pv(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function gv(t){const e=t.codegenNode;if(e.type===13)return e.props}function _v(t){const e=t.patchFlag;return e?parseInt(e,10):void 0}function fT(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=It,isCustomElement:h=It,expressionPlugins:u=[],scopeId:f=null,slotted:d=!0,ssr:g=!1,inSSR:v=!1,ssrCssVars:m="",bindingMetadata:p=rt,inline:x=!1,isTS:_=!1,onError:E=Ud,onWarn:w=rv,compatConfig:T}){const C=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),L={filename:e,selfName:C&&Qs(bt(C[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:h,expressionPlugins:u,scopeId:f,slotted:d,ssr:g,inSSR:v,ssrCssVars:m,bindingMetadata:p,inline:x,isTS:_,onError:E,onWarn:w,compatConfig:T,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new WeakMap,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(S){const M=L.helpers.get(S)||0;return L.helpers.set(S,M+1),S},removeHelper(S){const M=L.helpers.get(S);if(M){const N=M-1;N?L.helpers.set(S,N):L.helpers.delete(S)}},helperString(S){return`_${Xr[L.helper(S)]}`},replaceNode(S){L.parent.children[L.childIndex]=L.currentNode=S},removeNode(S){const M=L.parent.children,N=S?M.indexOf(S):L.currentNode?L.childIndex:-1;!S||S===L.currentNode?(L.currentNode=null,L.onNodeRemoved()):L.childIndex>N&&(L.childIndex--,L.onNodeRemoved()),L.parent.children.splice(N,1)},onNodeRemoved:It,addIdentifiers(S){},removeIdentifiers(S){},hoist(S){ze(S)&&(S=$e(S)),L.hoists.push(S);const M=$e(`_hoisted_${L.hoists.length}`,!1,S.loc,2);return M.hoisted=S,M},cache(S,M=!1){return Hb(L.cached++,S,M)}};return L.filters=new Set,L}function dT(t,e){const n=fT(t,e);Sh(t,n),e.hoistStatic&&hT(t,n),e.ssr||pT(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function pT(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const s=i[0];if(dv(t,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&Nd(r,e),t.codegenNode=r}else t.codegenNode=s}else if(i.length>1){let s=64;t.codegenNode=jo(e,n(Wo),void 0,t.children,s+"",void 0,void 0,!0,void 0,!1)}}function mT(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const s=t.children[n];ze(s)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=i,Sh(s,e))}}function Sh(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&(Te(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(pa);break;case 5:e.ssr||e.helper(yh);break;case 9:for(let r=0;r<t.branches.length;r++)Sh(t.branches[r],e);break;case 10:case 11:case 1:case 0:mT(t,e);break}e.currentNode=t;let s=i.length;for(;s--;)i[s]()}function vv(t,e){const n=ze(t)?i=>i===t:i=>t.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(Yb))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const Mh="/*#__PURE__*/",yv=t=>`${Xr[t]}: _${Xr[t]}`;function Yp(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:h=!1,isTS:u=!1,inSSR:f=!1}){const d={mode:e,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:h,isTS:u,inSSR:f,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${Xr[v]}`},push(v,m=-2,p){d.code+=v},indent(){g(++d.indentLevel)},deindent(v=!1){v?--d.indentLevel:g(--d.indentLevel)},newline(){g(d.indentLevel)}};function g(v){d.push(`
`+"  ".repeat(v),0)}return d}function gT(t,e={}){const n=Yp(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:h}=n,u=Array.from(t.helpers),f=u.length>0,d=!r&&i!=="module",g=!1,v=g?Yp(t,e):n;_T(t,v);const m=h?"ssrRender":"render",x=(h?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${m}(${x}) {`),o(),d&&(s("with (_ctx) {"),o(),f&&(s(`const { ${u.map(yv).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(qh(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(qh(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),qh(t.filters,"filter",n),l()),t.temps>0){s("let ");for(let _=0;_<t.temps;_++)s(`${_>0?", ":""}_temp${_}`)}return(t.components.length||t.directives.length||t.temps)&&(s(`
`,0),l()),h||s("return "),t.codegenNode?Zt(t.codegenNode,n):s("null"),d&&(a(),s("}")),a(),s("}"),{ast:t,code:n.code,preamble:g?v.code:"",map:n.map?n.map.toJSON():void 0}}function _T(t,e){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,h=Array.from(t.helpers);if(h.length>0&&(s(`const _Vue = ${c}
`,-1),t.hoists.length)){const u=[xd,Sd,pa,Md,tv].filter(f=>h.includes(f)).map(yv).join(", ");s(`const { ${u} } = _Vue
`,-1)}vT(t.hoists,e),r(),s("return ")}function qh(t,e,{helper:n,push:i,newline:s,isTS:r}){const o=n(e==="filter"?wd:e==="component"?Ed:Td);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${qo(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&s()}}function vT(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i,helper:s,scopeId:r,mode:o}=e;i();for(let a=0;a<t.length;a++){const l=t[a];l&&(n(`const _hoisted_${a+1} = `),Zt(l,e),i())}e.pure=!1}function Fd(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),_a(t,e,n),n&&e.deindent(),e.push("]")}function _a(t,e,n=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];ze(a)?s(a,-3):Te(a)?Fd(a,e):Zt(a,e),o<t.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function Zt(t,e){if(ze(t)){e.push(t,-3);return}if($n(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:Zt(t.codegenNode,e);break;case 2:yT(t,e);break;case 4:xv(t,e);break;case 5:xT(t,e);break;case 12:Zt(t.codegenNode,e);break;case 8:Sv(t,e);break;case 3:MT(t,e);break;case 13:ET(t,e);break;case 14:TT(t,e);break;case 15:wT(t,e);break;case 17:AT(t,e);break;case 18:CT(t,e);break;case 19:RT(t,e);break;case 20:PT(t,e);break;case 21:_a(t.body,e,!0,!1);break}}function yT(t,e){e.push(JSON.stringify(t.content),-3,t)}function xv(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function xT(t,e){const{push:n,helper:i,pure:s}=e;s&&n(Mh),n(`${i(yh)}(`),Zt(t.content,e),n(")")}function Sv(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];ze(i)?e.push(i,-3):Zt(i,e)}}function ST(t,e){const{push:n}=e;if(t.type===8)n("["),Sv(t,e),n("]");else if(t.isStatic){const i=Od(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function MT(t,e){const{push:n,helper:i,pure:s}=e;s&&n(Mh),n(`${i(pa)}(${JSON.stringify(t.content)})`,-3,t)}function ET(t,e){const{push:n,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:h,isBlock:u,disableTracking:f,isComponent:d}=t;h&&n(i(Ad)+"("),u&&n(`(${i(qs)}(${f?"true":""}), `),s&&n(Mh);const g=u?qr(e.inSSR,d):$r(e.inSSR,d);n(i(g)+"(",-2,t),_a(bT([r,o,a,l,c]),e),n(")"),u&&n(")"),h&&(n(", "),Zt(h,e),n(")"))}function bT(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function TT(t,e){const{push:n,helper:i,pure:s}=e,r=ze(t.callee)?t.callee:i(t.callee);s&&n(Mh),n(r+"(",-2,t),_a(t.arguments,e),n(")")}function wT(t,e){const{push:n,indent:i,deindent:s,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:h}=o[l];ST(c,e),n(": "),Zt(h,e),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function AT(t,e){Fd(t.elements,e)}function CT(t,e){const{push:n,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${Xr[Id]}(`),n("(",-2,t),Te(r)?_a(r,e):r&&Zt(r,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),Te(o)?Fd(o,e):Zt(o,e)):a&&Zt(a,e),(l||a)&&(s(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function RT(t,e){const{test:n,consequent:i,alternate:s,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const u=!Od(n.content);u&&o("("),xv(n,e),u&&o(")")}else o("("),Zt(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),Zt(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const h=s.type===19;h||e.indentLevel++,Zt(s,e),h||e.indentLevel--,r&&l(!0)}function PT(t,e){const{push:n,helper:i,indent:s,deindent:r,newline:o}=e;n(`_cache[${t.index}] || (`),t.isVNode&&(s(),n(`${i(Dl)}(-1),`),o()),n(`_cache[${t.index}] = `),Zt(t.value,e),t.isVNode&&(n(","),o(),n(`${i(Dl)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const LT=vv(/^(if|else|else-if)$/,(t,e,n)=>IT(t,e,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=Zp(s,l,n);else{const c=DT(i.codegenNode);c.alternate=Zp(s,l+i.branches.length-1,n)}}}));function IT(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:t.loc;n.onError(vt(28,e.loc)),e.exp=$e("true",!1,s)}if(e.name==="if"){const s=Kp(t,e),r={type:9,loc:t.loc,branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(t);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(vt(30,t.loc)),n.removeNode();const a=Kp(t,e);o.branches.push(a);const l=i&&i(o,a,!1);Sh(a,n),l&&l(),n.currentNode=null}else n.onError(vt(30,t.loc));break}}}function Kp(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!Vn(t,"for")?t.children:[t],userKey:xh(t,"key"),isTemplateIf:n}}function Zp(t,e,n){return t.condition?rf(t.condition,Jp(t,e,n),Pt(n.helper(pa),['""',"true"])):Jp(t,e,n)}function Jp(t,e,n){const{helper:i}=n,s=Et("key",$e(`${e}`,!1,wn,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return Fl(l,s,n),l}else return jo(n,i(Wo),Nn([s]),r,64+"",void 0,void 0,!0,!1,!1,t.loc);else{const l=o.codegenNode,c=Zb(l);return c.type===13&&Nd(c,n),Fl(c,s,n),l}}function DT(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const NT=vv("for",(t,e,n)=>{const{helper:i,removeHelper:s}=n;return UT(t,e,n,r=>{const o=Pt(i(Cd),[r.source]),a=Ul(t),l=Vn(t,"memo"),c=xh(t,"key"),h=c&&(c.type===6?$e(c.value.content,!0):c.exp),u=c?Et("key",h):null,f=r.source.type===4&&r.source.constType>0,d=f?64:c?128:256;return r.codegenNode=jo(n,i(Wo),void 0,o,d+"",void 0,void 0,!0,!f,!1,t.loc),()=>{let g;const{children:v}=r,m=v.length!==1||v[0].type!==1,p=Ol(t)?t:a&&t.children.length===1&&Ol(t.children[0])?t.children[0]:null;if(p?(g=p.codegenNode,a&&u&&Fl(g,u,n)):m?g=jo(n,i(Wo),u?Nn([u]):void 0,t.children,"64",void 0,void 0,!0,void 0,!1):(g=v[0].codegenNode,a&&u&&Fl(g,u,n),g.isBlock!==!f&&(g.isBlock?(s(qs),s(qr(n.inSSR,g.isComponent))):s($r(n.inSSR,g.isComponent))),g.isBlock=!f,g.isBlock?(i(qs),i(qr(n.inSSR,g.isComponent))):i($r(n.inSSR,g.isComponent))),l){const x=jr(lf(r.parseResult,[$e("_cached")]));x.body=Vb([jn(["const _memo = (",l.exp,")"]),jn(["if (_cached",...h?[" && _cached.key === ",h]:[],` && ${n.helperString(sv)}(_cached, _memo)) return _cached`]),jn(["const _item = ",g]),$e("_item.memo = _memo"),$e("return _item")]),o.arguments.push(x,$e("_cache"),$e(String(n.cached++)))}else o.arguments.push(jr(lf(r.parseResult),g,!0))}})});function UT(t,e,n,i){if(!e.exp){n.onError(vt(31,e.loc));return}const s=e.forParseResult;if(!s){n.onError(vt(32,e.loc));return}Mv(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:h,index:u}=s,f={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:h,objectIndexAlias:u,parseResult:s,children:Ul(t)?t.children:[t]};n.replaceNode(f),a.vFor++;const d=i&&i(f);return()=>{a.vFor--,d&&d()}}function Mv(t,e){t.finalized||(t.finalized=!0)}function lf({value:t,key:e,index:n},i=[]){return OT([t,e,n,...i])}function OT(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||$e("_".repeat(i+1),!1))}const Qp=$e("undefined",!1),FT=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=Vn(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},BT=(t,e,n,i)=>jr(t,n,!1,!0,n.length?n[0].loc:i);function kT(t,e,n=BT){e.helper(Id);const{children:i,loc:s}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=Vn(t,"slot",!0);if(l){const{arg:m,exp:p}=l;m&&!fn(m)&&(a=!0),r.push(Et(m||$e("default",!0),n(p,void 0,i,s)))}let c=!1,h=!1;const u=[],f=new Set;let d=0;for(let m=0;m<i.length;m++){const p=i[m];let x;if(!Ul(p)||!(x=Vn(p,"slot",!0))){p.type!==3&&u.push(p);continue}if(l){e.onError(vt(37,x.loc));break}c=!0;const{children:_,loc:E}=p,{arg:w=$e("default",!0),exp:T,loc:C}=x;let L;fn(w)?L=w?w.content:"default":a=!0;const S=Vn(p,"for"),M=n(T,S,_,E);let N,O;if(N=Vn(p,"if"))a=!0,o.push(rf(N.exp,Fa(w,M,d++),Qp));else if(O=Vn(p,/^else(-if)?$/,!0)){let q=m,I;for(;q--&&(I=i[q],I.type===3););if(I&&Ul(I)&&Vn(I,"if")){i.splice(m,1),m--;let V=o[o.length-1];for(;V.alternate.type===19;)V=V.alternate;V.alternate=O.exp?rf(O.exp,Fa(w,M,d++),Qp):Fa(w,M,d++)}else e.onError(vt(30,O.loc))}else if(S){a=!0;const q=S.forParseResult;q?(Mv(q),o.push(Pt(e.helper(Cd),[q.source,jr(lf(q),Fa(w,M),!0)]))):e.onError(vt(32,S.loc))}else{if(L){if(f.has(L)){e.onError(vt(38,C));continue}f.add(L),L==="default"&&(h=!0)}r.push(Et(w,M))}}if(!l){const m=(p,x)=>{const _=n(p,void 0,x,s);return e.compatConfig&&(_.isNonScopedSlot=!0),Et("default",_)};c?u.length&&u.some(p=>Ev(p))&&(h?e.onError(vt(39,u[0].loc)):r.push(m(void 0,u))):r.push(m(void 0,i))}const g=a?2:_l(t.children)?3:1;let v=Nn(r.concat(Et("_",$e(g+"",!1))),s);return o.length&&(v=Pt(e.helper(iv),[v,ga(o)])),{slots:v,hasDynamicSlots:a}}function Fa(t,e,n){const i=[Et("name",t),Et("fn",e)];return n!=null&&i.push(Et("key",$e(String(n),!0))),Nn(i)}function _l(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||_l(n.children))return!0;break;case 9:if(_l(n.branches))return!0;break;case 10:case 11:if(_l(n.children))return!0;break}}return!1}function Ev(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():Ev(t.content)}const bv=new WeakMap,HT=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:s}=t,r=t.tagType===1;let o=r?VT(t,e):`"${i}"`;const a=lt(o)&&o.callee===bd;let l,c,h,u=0,f,d,g,v=a||o===Po||o===yd||!r&&(i==="svg"||i==="foreignObject");if(s.length>0){const m=Tv(t,e,void 0,r,a);l=m.props,u=m.patchFlag,d=m.dynamicPropNames;const p=m.directives;g=p&&p.length?ga(p.map(x=>GT(x,e))):void 0,m.shouldUseBlock&&(v=!0)}if(t.children.length>0)if(o===Ll&&(v=!0,u|=1024),r&&o!==Po&&o!==Ll){const{slots:p,hasDynamicSlots:x}=kT(t,e);c=p,x&&(u|=1024)}else if(t.children.length===1&&o!==Po){const p=t.children[0],x=p.type,_=x===5||x===8;_&&Un(p,e)===0&&(u|=1),_||x===2?c=p:c=t.children}else c=t.children;u!==0&&(h=String(u),d&&d.length&&(f=WT(d))),t.codegenNode=jo(e,o,l,c,h,f,g,!!v,!1,r,t.loc)};function VT(t,e,n=!1){let{tag:i}=t;const s=cf(i),r=xh(t,"is");if(r)if(s||Bs("COMPILER_IS_ON_ELEMENT",e)){const a=r.type===6?r.value&&$e(r.value.content,!0):r.exp;if(a)return Pt(e.helper(bd),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=ov(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(Ed),e.components.add(i),qo(i,"component"))}function Tv(t,e,n=t.props,i,s,r=!1){const{tag:o,loc:a,children:l}=t;let c=[];const h=[],u=[],f=l.length>0;let d=!1,g=0,v=!1,m=!1,p=!1,x=!1,_=!1,E=!1;const w=[],T=S=>{c.length&&(h.push(Nn(em(c),a)),c=[]),S&&h.push(S)},C=({key:S,value:M})=>{if(fn(S)){const N=S.content,O=Zs(N);if(O&&(!i||s)&&N.toLowerCase()!=="onclick"&&N!=="onUpdate:modelValue"&&!Is(N)&&(x=!0),O&&Is(N)&&(E=!0),O&&M.type===14&&(M=M.arguments[0]),M.type===20||(M.type===4||M.type===8)&&Un(M,e)>0)return;N==="ref"?v=!0:N==="class"?m=!0:N==="style"?p=!0:N!=="key"&&!w.includes(N)&&w.push(N),i&&(N==="class"||N==="style")&&!w.includes(N)&&w.push(N)}else _=!0};for(let S=0;S<n.length;S++){const M=n[S];if(M.type===6){const{loc:N,name:O,nameLoc:q,value:I}=M;let V=!0;if(O==="ref"&&(v=!0,e.scopes.vFor>0&&c.push(Et($e("ref_for",!0),$e("true")))),O==="is"&&(cf(o)||I&&I.content.startsWith("vue:")||Bs("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(Et($e(O,!0,q),$e(I?I.content:"",V,I?I.loc:N)))}else{const{name:N,arg:O,exp:q,loc:I,modifiers:V}=M,H=N==="bind",Y=N==="on";if(N==="slot"){i||e.onError(vt(40,I));continue}if(N==="once"||N==="memo"||N==="is"||H&&As(O,"is")&&(cf(o)||Bs("COMPILER_IS_ON_ELEMENT",e))||Y&&r)continue;if((H&&As(O,"key")||Y&&f&&As(O,"vue:before-update"))&&(d=!0),H&&As(O,"ref")&&e.scopes.vFor>0&&c.push(Et($e("ref_for",!0),$e("true"))),!O&&(H||Y)){if(_=!0,q)if(H){if(T(),Bs("COMPILER_V_BIND_OBJECT_ORDER",e)){h.unshift(q);continue}h.push(q)}else T({type:14,loc:I,callee:e.helper(Ld),arguments:i?[q]:[q,"true"]});else e.onError(vt(H?34:35,I));continue}H&&V.includes("prop")&&(g|=32);const z=e.directiveTransforms[N];if(z){const{props:ne,needRuntime:ce}=z(M,t,e);!r&&ne.forEach(C),Y&&O&&!fn(O)?T(Nn(ne,a)):c.push(...ne),ce&&(u.push(M),$n(ce)&&bv.set(M,ce))}else rS(N)||(u.push(M),f&&(d=!0))}}let L;if(h.length?(T(),h.length>1?L=Pt(e.helper(Il),h,a):L=h[0]):c.length&&(L=Nn(em(c),a)),_?g|=16:(m&&!i&&(g|=2),p&&!i&&(g|=4),w.length&&(g|=8),x&&(g|=32)),!d&&(g===0||g===32)&&(v||E||u.length>0)&&(g|=512),!e.inSSR&&L)switch(L.type){case 15:let S=-1,M=-1,N=!1;for(let I=0;I<L.properties.length;I++){const V=L.properties[I].key;fn(V)?V.content==="class"?S=I:V.content==="style"&&(M=I):V.isHandlerKey||(N=!0)}const O=L.properties[S],q=L.properties[M];N?L=Pt(e.helper(Xo),[L]):(O&&!fn(O.value)&&(O.value=Pt(e.helper(Rd),[O.value])),q&&(p||q.value.type===4&&q.value.content.trim()[0]==="["||q.value.type===17)&&(q.value=Pt(e.helper(Pd),[q.value])));break;case 14:break;default:L=Pt(e.helper(Xo),[Pt(e.helper(ma),[L])]);break}return{props:L,directives:u,patchFlag:g,dynamicPropNames:w,shouldUseBlock:d}}function em(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const s=t[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||Zs(r))&&zT(o,s):(e.set(r,s),n.push(s))}return n}function zT(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=ga([t.value,e.value],t.loc)}function GT(t,e){const n=[],i=bv.get(t);i?n.push(e.helperString(i)):(e.helper(Td),e.directives.add(t.name),n.push(qo(t.name,"directive")));const{loc:s}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=$e("true",!1,s);n.push(Nn(t.modifiers.map(o=>Et(o,r)),s))}return ga(n,t.loc)}function WT(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function cf(t){return t==="component"||t==="Component"}const XT=(t,e)=>{if(Ol(t)){const{children:n,loc:i}=t,{slotName:s,slotProps:r}=jT(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=jr([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Pt(e.helper(nv),o,i)}};function jT(t,e){let n='"default"',i;const s=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];o.type===6?o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=bt(o.name),s.push(o))):o.name==="bind"&&As(o.arg,"name")?o.exp&&(n=o.exp):(o.name==="bind"&&o.arg&&fn(o.arg)&&(o.arg.content=bt(o.arg.content)),s.push(o))}if(s.length>0){const{props:r,directives:o}=Tv(t,e,s,!1,!1);i=r,o.length&&e.onError(vt(36,o[0].loc))}return{slotName:n,slotProps:i}}const $T=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,wv=(t,e,n,i)=>{const{loc:s,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(vt(35,s));let a;if(o.type===4)if(o.isStatic){let u=o.content;u.startsWith("vue:")&&(u=`vnode-${u.slice(4)}`);const f=e.tagType!==0||u.startsWith("vnode")||!/[A-Z]/.test(u)?Lr(bt(u)):`on:${u}`;a=$e(f,!0,o.loc)}else a=jn([`${n.helperString(sf)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(sf)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const u=av(l.content),f=!(u||$T.test(l.content)),d=l.content.includes(";");(f||c&&u)&&(l=jn([`${f?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let h={props:[Et(a,l||$e("() => {}",!1,s))]};return i&&(h=i(h)),c&&(h.props[0].value=n.cache(h.props[0].value)),h.props.forEach(u=>u.key.isHandlerKey=!0),h},qT=(t,e,n)=>{const{modifiers:i,loc:s}=t,r=t.arg;let{exp:o}=t;if(!o&&r.type===4){const a=bt(r.content);o=t.exp=$e(a,!1,r.loc)}return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.includes("camel")&&(r.type===4?r.isStatic?r.content=bt(r.content):r.content=`${n.helperString(nf)}(${r.content})`:(r.children.unshift(`${n.helperString(nf)}(`),r.children.push(")"))),n.inSSR||(i.includes("prop")&&tm(r,"."),i.includes("attr")&&tm(r,"^")),!o||o.type===4&&!o.content.trim()?(n.onError(vt(34,s)),{props:[Et(r,$e("",!0,s))]}):{props:[Et(r,o)]}},tm=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},YT=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if($h(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if($h(l))i||(i=n[r]=jn([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if($h(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Un(o,e)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Pt(e.helper(Md),a)}}}}},nm=new WeakSet,KT=(t,e)=>{if(t.type===1&&Vn(t,"once",!0))return nm.has(t)||e.inVOnce||e.inSSR?void 0:(nm.add(t),e.inVOnce=!0,e.helper(Dl),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0))})},Av=(t,e,n)=>{const{exp:i,arg:s}=t;if(!i)return n.onError(vt(41,t.loc)),Ba();const r=i.loc.source,o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(vt(44,i.loc)),Ba();if(!o.trim()||!av(o)&&!!1)return n.onError(vt(42,i.loc)),Ba();const c=s||$e("modelValue",!0),h=s?fn(s)?`onUpdate:${bt(s.content)}`:jn(['"onUpdate:" + ',s]):"onUpdate:modelValue";let u;const f=n.isTS?"($event: any)":"$event";u=jn([`${f} => ((`,i,") = $event)"]);const d=[Et(c,t.exp),Et(h,u)];if(t.modifiers.length&&e.tagType===1){const g=t.modifiers.map(m=>(Od(m)?m:JSON.stringify(m))+": true").join(", "),v=s?fn(s)?`${s.content}Modifiers`:jn([s,' + "Modifiers"']):"modelModifiers";d.push(Et(v,$e(`{ ${g} }`,!1,t.loc,2)))}return Ba(d)};function Ba(t=[]){return{props:t}}const ZT=/[\w).+\-_$\]]/,JT=(t,e)=>{Bs("COMPILER_FILTERS",e)&&(t.type===5&&kl(t.content,e),t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&kl(n.exp,e)}))};function kl(t,e){if(t.type===4)im(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?im(i,e):i.type===8?kl(t,e):i.type===5&&kl(i.content,e))}}function im(t,e){const n=t.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,h=0,u,f,d,g,v=[];for(d=0;d<n.length;d++)if(f=u,u=n.charCodeAt(d),i)u===39&&f!==92&&(i=!1);else if(s)u===34&&f!==92&&(s=!1);else if(r)u===96&&f!==92&&(r=!1);else if(o)u===47&&f!==92&&(o=!1);else if(u===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!l&&!c)g===void 0?(h=d+1,g=n.slice(0,d).trim()):m();else{switch(u){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(u===47){let p=d-1,x;for(;p>=0&&(x=n.charAt(p),x===" ");p--);(!x||!ZT.test(x))&&(o=!0)}}g===void 0?g=n.slice(0,d).trim():h!==0&&m();function m(){v.push(n.slice(h,d).trim()),h=d+1}if(v.length){for(d=0;d<v.length;d++)g=QT(g,v[d],e);t.content=g}}function QT(t,e,n){n.helper(wd);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${qo(e,"filter")}(${t})`;{const s=e.slice(0,i),r=e.slice(i+1);return n.filters.add(s),`${qo(s,"filter")}(${t}${r!==")"?","+r:r}`}}const sm=new WeakSet,e1=(t,e)=>{if(t.type===1){const n=Vn(t,"memo");return!n||sm.has(t)?void 0:(sm.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&Nd(i,e),t.codegenNode=Pt(e.helper(Dd),[n.exp,jr(void 0,i),"_cache",String(e.cached++)]))})}};function t1(t){return[[KT,LT,e1,NT,JT,XT,HT,FT,YT],{on:wv,bind:qT,model:Av}]}function n1(t,e={}){const n=e.onError||Ud,i=e.mode==="module";e.prefixIdentifiers===!0?n(vt(47)):i&&n(vt(48));const s=!1;e.cacheHandlers&&n(vt(49)),e.scopeId&&!i&&n(vt(50));const r=st({},e,{prefixIdentifiers:s}),o=ze(t)?cT(t,r):t,[a,l]=t1();return dT(o,st({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:st({},l,e.directiveTransforms||{})})),gT(o,r)}const i1=()=>({props:[]});/**
* @vue/compiler-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cv=Symbol(""),Rv=Symbol(""),Pv=Symbol(""),Lv=Symbol(""),hf=Symbol(""),Iv=Symbol(""),Dv=Symbol(""),Nv=Symbol(""),Uv=Symbol(""),Ov=Symbol("");Bb({[Cv]:"vModelRadio",[Rv]:"vModelCheckbox",[Pv]:"vModelText",[Lv]:"vModelSelect",[hf]:"vModelDynamic",[Iv]:"withModifiers",[Dv]:"withKeys",[Nv]:"vShow",[Uv]:"Transition",[Ov]:"TransitionGroup"});let sr;function s1(t,e=!1){return sr||(sr=document.createElement("div")),e?(sr.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,sr.children[0].getAttribute("foo")):(sr.innerHTML=t,sr.textContent)}const r1={parseMode:"html",isVoidTag:SS,isNativeTag:t=>vS(t)||yS(t)||xS(t),isPreTag:t=>t==="pre",decodeEntities:s1,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return Uv;if(t==="TransitionGroup"||t==="transition-group")return Ov},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},o1=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:$e("style",!0,e.loc),exp:a1(e.value.content,e.loc),modifiers:[],loc:e.loc})})},a1=(t,e)=>{const n=c_(t);return $e(JSON.stringify(n),!1,e,3)};function ns(t,e){return vt(t,e)}const l1=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(ns(53,s)),e.children.length&&(n.onError(ns(54,s)),e.children.length=0),{props:[Et($e("innerHTML",!0,s),i||$e("",!0))]}},c1=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(ns(55,s)),e.children.length&&(n.onError(ns(56,s)),e.children.length=0),{props:[Et($e("textContent",!0),i?Un(i,n)>0?i:Pt(n.helperString(yh),[i],s):$e("",!0))]}},h1=(t,e,n)=>{const i=Av(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(ns(58,t.arg.loc));const{tag:s}=e,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=Pv,a=!1;if(s==="input"||r){const l=xh(e,"type");if(l){if(l.type===7)o=hf;else if(l.value)switch(l.value.content){case"radio":o=Cv;break;case"checkbox":o=Rv;break;case"file":a=!0,n.onError(ns(59,t.loc));break}}else qb(e)&&(o=hf)}else s==="select"&&(o=Lv);a||(i.needRuntime=n.helper(o))}else n.onError(ns(57,t.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},u1=Tn("passive,once,capture"),f1=Tn("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),d1=Tn("left,right"),Fv=Tn("onkeyup,onkeydown,onkeypress",!0),p1=(t,e,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&$o("COMPILER_V_ON_NATIVE",n)||u1(l)?o.push(l):d1(l)?fn(t)?Fv(t.content)?s.push(l):r.push(l):(s.push(l),r.push(l)):f1(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},rm=(t,e)=>fn(t)&&t.content.toLowerCase()==="onclick"?$e(e,!0):t.type!==4?jn(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,m1=(t,e,n)=>wv(t,e,n,i=>{const{modifiers:s}=t;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=p1(r,s,n,t.loc);if(l.includes("right")&&(r=rm(r,"onContextmenu")),l.includes("middle")&&(r=rm(r,"onMouseup")),l.length&&(o=Pt(n.helper(Iv),[o,JSON.stringify(l)])),a.length&&(!fn(r)||Fv(r.content))&&(o=Pt(n.helper(Dv),[o,JSON.stringify(a)])),c.length){const h=c.map(Qs).join("");r=fn(r)?$e(`${r.content}${h}`,!0):jn(["(",r,`) + "${h}"`])}return{props:[Et(r,o)]}}),g1=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(ns(61,s)),{props:[],needRuntime:n.helper(Nv)}},_1=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},v1=[o1],y1={cloak:i1,html:l1,text:c1,model:h1,on:m1,show:g1};function x1(t,e={}){return n1(t,st({},r1,e,{nodeTransforms:[_1,...v1,...e.nodeTransforms||[]],directiveTransforms:st({},y1,e.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const om=new WeakMap;function S1(t){let e=om.get(t??rt);return e||(e=Object.create(null),om.set(t??rt,e)),e}function M1(t,e){if(!ze(t))if(t.nodeType)t=t.innerHTML;else return It;const n=t,i=S1(e),s=i[n];if(s)return s;if(t[0]==="#"){const l=document.querySelector(t);t=l?l.innerHTML:""}const r=st({hoistStatic:!0,onError:void 0,onWarn:It},e);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=l=>!!customElements.get(l));const{code:o}=x1(t,r),a=new Function("Vue",o)(Ib);return a._rc=!0,i[n]=a}w0(M1);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Er=typeof window<"u";function E1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const at=Object.assign;function Yh(t,e){const n={};for(const i in e){const s=e[i];n[i]=Yn(s)?s.map(t):t(s)}return n}const Lo=()=>{},Yn=Array.isArray,b1=/\/$/,T1=t=>t.replace(b1,"");function Kh(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=R1(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function w1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function am(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function A1(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Yr(e.matched[i],n.matched[s])&&Bv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!C1(t[n],e[n]))return!1;return!0}function C1(t,e){return Yn(t)?lm(t,e):Yn(e)?lm(e,t):t===e}function lm(t,e){return Yn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function R1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ko;(function(t){t.pop="pop",t.push="push"})(Ko||(Ko={}));var Io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Io||(Io={}));function P1(t){if(!t)if(Er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),T1(t)}const L1=/^[^#]+#/;function I1(t,e){return t.replace(L1,"#")+e}function D1(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Eh=()=>({left:window.pageXOffset,top:window.pageYOffset});function N1(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=D1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cm(t,e){return(history.state?history.state.position-e:-1)+t}const uf=new Map;function U1(t,e){uf.set(t,e)}function O1(t){const e=uf.get(t);return uf.delete(t),e}let F1=()=>location.protocol+"//"+location.host;function kv(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),am(l,"")}return am(n,t)+i+s}function B1(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=kv(t,location),g=n.value,v=e.value;let m=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}m=v?f.position-v.position:0}else i(d);s.forEach(p=>{p(n.value,g,{delta:m,type:Ko.pop,direction:m?m>0?Io.forward:Io.back:Io.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function h(){const{history:f}=window;f.state&&f.replaceState(at({},f.state,{scroll:Eh()}),"")}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function hm(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Eh():null}}function k1(t){const{history:e,location:n}=window,i={value:kv(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=t.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:F1()+t+l;try{e[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[h?"replace":"assign"](f)}}function o(l,c){const h=at({},e.state,hm(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,h,!0),i.value=l}function a(l,c){const h=at({},s.value,e.state,{forward:l,scroll:Eh()});r(h.current,h,!0);const u=at({},hm(i.value,l,null),{position:h.position+1},c);r(l,u,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function H1(t){t=P1(t);const e=k1(t),n=B1(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=at({location:"",base:t,go:i,createHref:I1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function V1(t){return typeof t=="string"||t&&typeof t=="object"}function Hv(t){return typeof t=="string"||typeof t=="symbol"}const Fi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vv=Symbol("");var um;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(um||(um={}));function Kr(t,e){return at(new Error,{type:t,[Vv]:!0},e)}function ci(t,e){return t instanceof Error&&Vv in t&&(e==null||!!(t.type&e))}const fm="[^/]+?",z1={sensitive:!1,strict:!1,start:!0,end:!0},G1=/[.+*?^${}()[\]/\\]/g;function W1(t,e){const n=at({},z1,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const h=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let d=40+(n.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(G1,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=f;r.push({name:g,repeatable:v,optional:m});const x=p||fm;if(x!==fm){d+=10;try{new RegExp(`(${x})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+E.message)}}let _=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;u||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),s+=_,d+=20,m&&(d+=-8),v&&(d+=-20),x===".*"&&(d+=-50)}h.push(d)}i.push(h)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const d=h[f]||"",g=r[f-1];u[g.name]=d&&g.repeatable?d.split("/"):d}return u}function l(c){let h="",u=!1;for(const f of t){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const d of f)if(d.type===0)h+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(Yn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Yn(p)?p.join("/"):p;if(!x)if(m)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);h+=x}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function X1(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function j1(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=X1(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(dm(i))return 1;if(dm(s))return-1}return s.length-i.length}function dm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $1={type:0,value:""},q1=/[a-zA-Z0-9_]/;function Y1(t){if(!t)return[[]];if(t==="/")return[[$1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:q1.test(l)?f():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}function K1(t,e,n){const i=W1(Y1(t.path),n),s=at(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Z1(t,e){const n=[],i=new Map;e=gm({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,u,f){const d=!f,g=J1(h);g.aliasOf=f&&f.record;const v=gm(e,h),m=[g];if("alias"in h){const _=typeof h.alias=="string"?[h.alias]:h.alias;for(const E of _)m.push(at({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let p,x;for(const _ of m){const{path:E}=_;if(u&&E[0]!=="/"){const w=u.record.path,T=w[w.length-1]==="/"?"":"/";_.path=u.record.path+(E&&T+E)}if(p=K1(_,u,v),f?f.alias.push(p):(x=x||p,x!==p&&x.alias.push(p),d&&h.name&&!mm(p)&&o(h.name)),g.children){const w=g.children;for(let T=0;T<w.length;T++)r(w[T],p,f&&f.children[T])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return x?()=>{o(x)}:Lo}function o(h){if(Hv(h)){const u=i.get(h);u&&(i.delete(h),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(h);u>-1&&(n.splice(u,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let u=0;for(;u<n.length&&j1(h,n[u])>=0&&(h.record.path!==n[u].record.path||!zv(h,n[u]));)u++;n.splice(u,0,h),h.record.name&&!mm(h)&&i.set(h.record.name,h)}function c(h,u){let f,d={},g,v;if("name"in h&&h.name){if(f=i.get(h.name),!f)throw Kr(1,{location:h});v=f.record.name,d=at(pm(u.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),h.params&&pm(h.params,f.keys.map(x=>x.name))),g=f.stringify(d)}else if("path"in h)g=h.path,f=n.find(x=>x.re.test(g)),f&&(d=f.parse(g),v=f.record.name);else{if(f=u.name?i.get(u.name):n.find(x=>x.re.test(u.path)),!f)throw Kr(1,{location:h,currentLocation:u});v=f.record.name,d=at({},u.params,h.params),g=f.stringify(d)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:m,meta:ew(m)}}return t.forEach(h=>r(h)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function pm(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function J1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Q1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Q1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function mm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ew(t){return t.reduce((e,n)=>at(e,n.meta),{})}function gm(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function zv(t,e){return e.children.some(n=>n===t||zv(t,n))}const Gv=/#/g,tw=/&/g,nw=/\//g,iw=/=/g,sw=/\?/g,Wv=/\+/g,rw=/%5B/g,ow=/%5D/g,Xv=/%5E/g,aw=/%60/g,jv=/%7B/g,lw=/%7C/g,$v=/%7D/g,cw=/%20/g;function Bd(t){return encodeURI(""+t).replace(lw,"|").replace(rw,"[").replace(ow,"]")}function hw(t){return Bd(t).replace(jv,"{").replace($v,"}").replace(Xv,"^")}function ff(t){return Bd(t).replace(Wv,"%2B").replace(cw,"+").replace(Gv,"%23").replace(tw,"%26").replace(aw,"`").replace(jv,"{").replace($v,"}").replace(Xv,"^")}function uw(t){return ff(t).replace(iw,"%3D")}function fw(t){return Bd(t).replace(Gv,"%23").replace(sw,"%3F")}function dw(t){return t==null?"":fw(t).replace(nw,"%2F")}function Hl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function pw(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Wv," "),o=r.indexOf("="),a=Hl(o<0?r:r.slice(0,o)),l=o<0?null:Hl(r.slice(o+1));if(a in e){let c=e[a];Yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function _m(t){let e="";for(let n in t){const i=t[n];if(n=uw(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yn(i)?i.map(r=>r&&ff(r)):[i&&ff(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function mw(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Yn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const gw=Symbol(""),vm=Symbol(""),kd=Symbol(""),qv=Symbol(""),df=Symbol("");function uo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ki(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(Kr(4,{from:n,to:e})):u instanceof Error?a(u):V1(u)?a(Kr(2,{from:e,to:u})):(r&&i.enterCallbacks[s]===r&&typeof u=="function"&&r.push(u),o())},c=t.call(i&&i.instances[s],e,n,l);let h=Promise.resolve(c);t.length<3&&(h=h.then(l)),h.catch(u=>a(u))})}function Zh(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(_w(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ki(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const h=E1(c)?c.default:c;r.components[o]=h;const f=(h.__vccOpts||h)[e];return f&&Ki(f,n,i,r,o)()}))}}return s}function _w(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ym(t){const e=ni(kd),n=ni(qv),i=In(()=>e.resolve(En(t.to))),s=In(()=>{const{matched:l}=i.value,{length:c}=l,h=l[c-1],u=n.matched;if(!h||!u.length)return-1;const f=u.findIndex(Yr.bind(null,h));if(f>-1)return f;const d=xm(l[c-2]);return c>1&&xm(h)===d&&u[u.length-1].path!==d?u.findIndex(Yr.bind(null,l[c-2])):f}),r=In(()=>s.value>-1&&xw(n.params,i.value.params)),o=In(()=>s.value>-1&&s.value===n.matched.length-1&&Bv(n.params,i.value.params));function a(l={}){return yw(l)?e[En(t.replace)?"replace":"push"](En(t.to)).catch(Lo):Promise.resolve()}return{route:i,href:In(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const vw=no({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ym,setup(t,{slots:e}){const n=aa(ym(t)),{options:i}=ni(kd),s=In(()=>({[Sm(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Sm(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:_h("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),br=vw;function yw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xw(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Yn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function xm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sm=(t,e,n)=>t??e??n,Sw=no({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ni(df),s=In(()=>t.route||i.value),r=ni(vm,0),o=In(()=>{let c=En(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=In(()=>s.value.matched[o.value]);wo(vm,In(()=>o.value+1)),wo(gw,a),wo(df,s);const l=Nr();return Fr(()=>[l.value,a.value,t.name],([c,h,u],[f,d,g])=>{h&&(h.instances[u]=c,d&&d!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=d.leaveGuards),h.updateGuards.size||(h.updateGuards=d.updateGuards))),c&&h&&(!d||!Yr(h,d)||!f)&&(h.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,h=t.name,u=a.value,f=u&&u.components[h];if(!f)return Mm(n.default,{Component:f,route:c});const d=u.props[h],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=_h(f,at({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return Mm(n.default,{Component:m,route:c})||m}}});function Mm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Yv=Sw;function Mw(t){const e=Z1(t.routes,t),n=t.parseQuery||pw,i=t.stringifyQuery||_m,s=t.history,r=uo(),o=uo(),a=uo(),l=R_(Fi);let c=Fi;Er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Yh.bind(null,G=>""+G),u=Yh.bind(null,dw),f=Yh.bind(null,Hl);function d(G,le){let re,he;return Hv(G)?(re=e.getRecordMatcher(G),he=le):he=G,e.addRoute(he,re)}function g(G){const le=e.getRecordMatcher(G);le&&e.removeRoute(le)}function v(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function p(G,le){if(le=at({},le||l.value),typeof G=="string"){const P=Kh(n,G,le.path),B=e.resolve({path:P.path},le),X=s.createHref(P.fullPath);return at(P,B,{params:f(B.params),hash:Hl(P.hash),redirectedFrom:void 0,href:X})}let re;if("path"in G)re=at({},G,{path:Kh(n,G.path,le.path).path});else{const P=at({},G.params);for(const B in P)P[B]==null&&delete P[B];re=at({},G,{params:u(P)}),le.params=u(le.params)}const he=e.resolve(re,le),Ae=G.hash||"";he.params=h(f(he.params));const W=w1(i,at({},G,{hash:hw(Ae),path:he.path})),R=s.createHref(W);return at({fullPath:W,hash:Ae,query:i===_m?mw(G.query):G.query||{}},he,{redirectedFrom:void 0,href:R})}function x(G){return typeof G=="string"?Kh(n,G,l.value.path):at({},G)}function _(G,le){if(c!==G)return Kr(8,{from:le,to:G})}function E(G){return C(G)}function w(G){return E(at(x(G),{replace:!0}))}function T(G){const le=G.matched[G.matched.length-1];if(le&&le.redirect){const{redirect:re}=le;let he=typeof re=="function"?re(G):re;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=x(he):{path:he},he.params={}),at({query:G.query,hash:G.hash,params:"path"in he?{}:G.params},he)}}function C(G,le){const re=c=p(G),he=l.value,Ae=G.state,W=G.force,R=G.replace===!0,P=T(re);if(P)return C(at(x(P),{state:typeof P=="object"?at({},Ae,P.state):Ae,force:W,replace:R}),le||re);const B=re;B.redirectedFrom=le;let X;return!W&&A1(i,he,re)&&(X=Kr(16,{to:B,from:he}),fe(he,he,!0,!1)),(X?Promise.resolve(X):M(B,he)).catch(J=>ci(J)?ci(J,2)?J:ce(J):z(J,B,he)).then(J=>{if(J){if(ci(J,2))return C(at({replace:R},x(J.to),{state:typeof J.to=="object"?at({},Ae,J.to.state):Ae,force:W}),le||B)}else J=O(B,he,!0,R,Ae);return N(B,he,J),J})}function L(G,le){const re=_(G,le);return re?Promise.reject(re):Promise.resolve()}function S(G){const le=ue.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(G):G()}function M(G,le){let re;const[he,Ae,W]=Ew(G,le);re=Zh(he.reverse(),"beforeRouteLeave",G,le);for(const P of he)P.leaveGuards.forEach(B=>{re.push(Ki(B,G,le))});const R=L.bind(null,G,le);return re.push(R),be(re).then(()=>{re=[];for(const P of r.list())re.push(Ki(P,G,le));return re.push(R),be(re)}).then(()=>{re=Zh(Ae,"beforeRouteUpdate",G,le);for(const P of Ae)P.updateGuards.forEach(B=>{re.push(Ki(B,G,le))});return re.push(R),be(re)}).then(()=>{re=[];for(const P of W)if(P.beforeEnter)if(Yn(P.beforeEnter))for(const B of P.beforeEnter)re.push(Ki(B,G,le));else re.push(Ki(P.beforeEnter,G,le));return re.push(R),be(re)}).then(()=>(G.matched.forEach(P=>P.enterCallbacks={}),re=Zh(W,"beforeRouteEnter",G,le),re.push(R),be(re))).then(()=>{re=[];for(const P of o.list())re.push(Ki(P,G,le));return re.push(R),be(re)}).catch(P=>ci(P,8)?P:Promise.reject(P))}function N(G,le,re){a.list().forEach(he=>S(()=>he(G,le,re)))}function O(G,le,re,he,Ae){const W=_(G,le);if(W)return W;const R=le===Fi,P=Er?history.state:{};re&&(he||R?s.replace(G.fullPath,at({scroll:R&&P&&P.scroll},Ae)):s.push(G.fullPath,Ae)),l.value=G,fe(G,le,re,R),ce()}let q;function I(){q||(q=s.listen((G,le,re)=>{if(!Se.listening)return;const he=p(G),Ae=T(he);if(Ae){C(at(Ae,{replace:!0}),he).catch(Lo);return}c=he;const W=l.value;Er&&U1(cm(W.fullPath,re.delta),Eh()),M(he,W).catch(R=>ci(R,12)?R:ci(R,2)?(C(R.to,he).then(P=>{ci(P,20)&&!re.delta&&re.type===Ko.pop&&s.go(-1,!1)}).catch(Lo),Promise.reject()):(re.delta&&s.go(-re.delta,!1),z(R,he,W))).then(R=>{R=R||O(he,W,!1),R&&(re.delta&&!ci(R,8)?s.go(-re.delta,!1):re.type===Ko.pop&&ci(R,20)&&s.go(-1,!1)),N(he,W,R)}).catch(Lo)}))}let V=uo(),H=uo(),Y;function z(G,le,re){ce(G);const he=H.list();return he.length?he.forEach(Ae=>Ae(G,le,re)):console.error(G),Promise.reject(G)}function ne(){return Y&&l.value!==Fi?Promise.resolve():new Promise((G,le)=>{V.add([G,le])})}function ce(G){return Y||(Y=!G,I(),V.list().forEach(([le,re])=>G?re(G):le()),V.reset()),G}function fe(G,le,re,he){const{scrollBehavior:Ae}=t;if(!Er||!Ae)return Promise.resolve();const W=!re&&O1(cm(G.fullPath,0))||(he||!re)&&history.state&&history.state.scroll||null;return la().then(()=>Ae(G,le,W)).then(R=>R&&N1(R)).catch(R=>z(R,G,le))}const ge=G=>s.go(G);let te;const ue=new Set,Se={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:t,push:E,replace:w,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:ne,install(G){const le=this;G.component("RouterLink",br),G.component("RouterView",Yv),G.config.globalProperties.$router=le,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>En(l)}),Er&&!te&&l.value===Fi&&(te=!0,E(s.location).catch(Ae=>{}));const re={};for(const Ae in Fi)Object.defineProperty(re,Ae,{get:()=>l.value[Ae],enumerable:!0});G.provide(kd,le),G.provide(qv,$f(re)),G.provide(df,l);const he=G.unmount;ue.add(G),G.unmount=function(){ue.delete(G),ue.size<1&&(c=Fi,q&&q(),q=null,l.value=Fi,te=!1,Y=!1),he()}}};function be(G){return G.reduce((le,re)=>le.then(()=>S(re)),Promise.resolve())}return Se}function Ew(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Yr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Yr(c,l))||s.push(l))}return[n,i,s]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="160",bw=0,Em=1,Tw=2,ww=0,Kv=1,Aw=2,vi=3,Ci=0,pn=1,Ei=2,is=0,Br=1,pf=2,bm=3,Tm=4,Cw=5,Es=100,Rw=101,Pw=102,wm=103,Am=104,Lw=200,Iw=201,Dw=202,Nw=203,mf=204,gf=205,Uw=206,Ow=207,Fw=208,Bw=209,kw=210,Hw=211,Vw=212,zw=213,Gw=214,Ww=0,Xw=1,jw=2,Vl=3,$w=4,qw=5,Yw=6,Kw=7,bh=0,Zw=1,Jw=2,ss=0,Qw=1,eA=2,tA=3,nA=4,iA=5,sA=6,Zv=300,Zr=301,Jr=302,_f=303,vf=304,Th=306,dt=1e3,Wn=1001,yf=1002,nn=1003,Cm=1004,Jh=1005,Ln=1006,rA=1007,Zo=1008,rs=1009,oA=1010,aA=1011,Vd=1012,Jv=1013,Qi=1014,es=1015,Jo=1016,Qv=1017,ey=1018,Hs=1020,lA=1021,Xn=1023,cA=1024,hA=1025,Vs=1026,Qr=1027,uA=1028,ty=1029,fA=1030,ny=1031,iy=1033,Qh=33776,eu=33777,tu=33778,nu=33779,Rm=35840,Pm=35841,Lm=35842,Im=35843,sy=36196,Dm=37492,Nm=37496,Um=37808,Om=37809,Fm=37810,Bm=37811,km=37812,Hm=37813,Vm=37814,zm=37815,Gm=37816,Wm=37817,Xm=37818,jm=37819,$m=37820,qm=37821,iu=36492,Ym=36494,Km=36495,dA=36283,Zm=36284,Jm=36285,Qm=36286,ry=3e3,zs=3001,pA=3200,mA=3201,wh=0,gA=1,Dn="",gt="srgb",Ri="srgb-linear",io="display-p3",Ah="display-p3-linear",zl="linear",mt="srgb",Gl="rec709",Wl="p3",rr=7680,eg=519,_A=512,vA=513,yA=514,oy=515,xA=516,SA=517,MA=518,EA=519,tg=35044,ng="300 es",xf=1035,bi=2e3,Xl=2001;class ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=Math.PI/180,jl=180/Math.PI;function va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function bA(t,e){return(t%e+e)%e}function ru(t,e,n){return(1-n)*t+n*e}function ig(t){return(t&t-1)===0&&t!==0}function Sf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],x=s[1],_=s[4],E=s[7],w=s[2],T=s[5],C=s[8];return r[0]=o*v+a*x+l*w,r[3]=o*m+a*_+l*T,r[6]=o*p+a*E+l*C,r[1]=c*v+h*x+u*w,r[4]=c*m+h*_+u*T,r[7]=c*p+h*E+u*C,r[2]=f*v+d*x+g*w,r[5]=f*m+d*_+g*T,r[8]=f*p+d*E+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=n*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=d*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ou.makeScale(e,n)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new Je;function ay(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TA(){const t=Qo("canvas");return t.style.display="block",t}const sg={};function Do(t){t in sg||(sg[t]=!0,console.warn(t))}const rg=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),og=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[Ri]:{transfer:zl,primaries:Gl,toReference:t=>t,fromReference:t=>t},[gt]:{transfer:mt,primaries:Gl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ah]:{transfer:zl,primaries:Wl,toReference:t=>t.applyMatrix3(og),fromReference:t=>t.applyMatrix3(rg)},[io]:{transfer:mt,primaries:Wl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(og),fromReference:t=>t.applyMatrix3(rg).convertLinearToSRGB()}},wA=new Set([Ri,Ah]),ct={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!wA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ka[e].toReference,s=ka[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ka[t].primaries},getTransfer:function(t){return t===Dn?zl:ka[t].transfer}};function kr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function au(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let or;class ly{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=Qo("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(kr(n[i]/255)*255):n[i]=kr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AA=0;class cy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=va(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lu(s[o].image)):r.push(lu(s[o]))}else r=lu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ly.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CA=0;class rn extends ir{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Wn,s=Wn,r=Ln,o=Zo,a=Xn,l=rs,c=rn.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=va(),this.name="",this.source=new cy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zs?gt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dt:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dt:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?zs:ry}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zs?gt:Dn}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Zv;rn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,E=(d+1)/2,w=(p+1)/2,T=(h+f)/4,C=(u+v)/4,L=(g+m)/4;return _>E&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=C/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=L/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=L/r),this.set(i,s,r,n),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RA extends ir{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zs?gt:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ys extends RA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hy extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PA extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(a===1){e[n+0]=f,e[n+1]=d,e[n+2]=g,e[n+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,p*x);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const E=a*x;if(l=l*m+f*E,c=c*m+d*E,h=h*m+g*E,u=u*m+v*E,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[n]=a*g+h*u+l*d-c*f,e[n+1]=l*g+h*f+c*u-a*d,e[n+2]=c*g+h*d+a*f-l*u,e[n+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],u=n[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ag.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),u=2*(r*i-o*n);return this.x=n+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new U,ag=new ya;class xa{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Va.subVectors(this.max,po),ar.subVectors(e.a,po),lr.subVectors(e.b,po),cr.subVectors(e.c,po),Bi.subVectors(lr,ar),ki.subVectors(cr,lr),ds.subVectors(ar,cr);let n=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-ds.z,ds.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,ds.z,0,-ds.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-ds.y,ds.x,0];return!hu(n,ar,lr,cr,Va)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,ar,lr,cr,Va))?!1:(za.crossVectors(Bi,ki),n=[za.x,za.y,za.z],hu(n,ar,lr,cr,Va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,Ha=new xa,ar=new U,lr=new U,cr=new U,Bi=new U,ki=new U,ds=new U,po=new U,Va=new U,za=new U,ps=new U;function hu(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ps.fromArray(t,r);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=n.dot(ps),h=i.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const LA=new xa,mo=new U,uu=new U;class Sa{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(mo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(uu)),this.expandByPoint(mo.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new U,fu=new U,Ga=new U,Hi=new U,du=new U,Wa=new U,pu=new U;class zd{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){fu.copy(e).add(n).multiplyScalar(.5),Ga.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(fu);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Ga),a=Hi.dot(this.direction),l=-Hi.dot(Ga),c=Hi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fu).addScaledVector(Ga,f),d}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,s,r){du.subVectors(n,e),Wa.subVectors(i,e),pu.crossVectors(du,Wa);let o=this.direction.dot(pu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(Wa.crossVectors(Hi,Wa));if(l<0)return null;const c=a*this.direction.dot(du.cross(Hi));if(c<0||l+c>o)return null;const h=-a*Hi.dot(pu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,s,r,o,a,l,c,h,u,f,d,g,v,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,u,f,d,g,v,m)}set(e,n,i,s,r,o,a,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=d+g*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;n[0]=f+v*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=d*a-g,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;n[0]=f-v*a,n[4]=-o*u,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*h,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;n[0]=l*h,n[4]=g*c-d,n[8]=f*c+v,n[1]=l*u,n[5]=v*c+f,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;n[0]=l*h,n[4]=v-f*u,n[8]=g*u+d,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=d*u+g,n[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=f*u+v,n[5]=o*h,n[9]=d*u-g,n[2]=g*u-d,n[6]=a*h,n[10]=v*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IA,e,DA)}lookAt(e,n,i){const s=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Vi.crossVectors(i,_n),Vi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Vi.crossVectors(i,_n)),Vi.normalize(),Xa.crossVectors(_n,Vi),s[0]=Vi.x,s[4]=Xa.x,s[8]=_n.x,s[1]=Vi.y,s[5]=Xa.y,s[9]=_n.y,s[2]=Vi.z,s[6]=Xa.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],_=i[7],E=i[11],w=i[15],T=s[0],C=s[4],L=s[8],S=s[12],M=s[1],N=s[5],O=s[9],q=s[13],I=s[2],V=s[6],H=s[10],Y=s[14],z=s[3],ne=s[7],ce=s[11],fe=s[15];return r[0]=o*T+a*M+l*I+c*z,r[4]=o*C+a*N+l*V+c*ne,r[8]=o*L+a*O+l*H+c*ce,r[12]=o*S+a*q+l*Y+c*fe,r[1]=h*T+u*M+f*I+d*z,r[5]=h*C+u*N+f*V+d*ne,r[9]=h*L+u*O+f*H+d*ce,r[13]=h*S+u*q+f*Y+d*fe,r[2]=g*T+v*M+m*I+p*z,r[6]=g*C+v*N+m*V+p*ne,r[10]=g*L+v*O+m*H+p*ce,r[14]=g*S+v*q+m*Y+p*fe,r[3]=x*T+_*M+E*I+w*z,r[7]=x*C+_*N+E*V+w*ne,r[11]=x*L+_*O+E*H+w*ce,r[15]=x*S+_*q+E*Y+w*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+n*l*d-n*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+n*c*u-n*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-n*l*u+n*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=u*m*c-v*f*c+v*l*d-a*m*d-u*l*p+a*f*p,_=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,E=h*v*c-g*u*c+g*a*d-o*v*d-h*a*p+o*u*p,w=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,T=n*x+i*_+s*E+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*C,e[4]=_*C,e[5]=(h*m*r-g*f*r+g*s*d-n*m*d-h*s*p+n*f*p)*C,e[6]=(g*l*r-o*m*r-g*s*c+n*m*c+o*s*p-n*l*p)*C,e[7]=(o*f*r-h*l*r+h*s*c-n*f*c-o*s*d+n*l*d)*C,e[8]=E*C,e[9]=(g*u*r-h*v*r-g*i*d+n*v*d+h*i*p-n*u*p)*C,e[10]=(o*v*r-g*a*r+g*i*c-n*v*c-o*i*p+n*a*p)*C,e[11]=(h*a*r-o*u*r-h*i*c+n*u*c+o*i*d-n*a*d)*C,e[12]=w*C,e[13]=(h*v*s-g*u*s+g*i*f-n*v*f-h*i*m+n*u*m)*C,e[14]=(g*a*s-o*v*s-g*i*l+n*v*l+o*i*m-n*a*m)*C,e[15]=(o*u*s-h*a*s+h*i*l-n*u*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,x=l*c,_=l*h,E=l*u,w=i.x,T=i.y,C=i.z;return s[0]=(1-(v+p))*w,s[1]=(d+E)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(d-E)*T,s[5]=(1-(f+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+_)*C,s[9]=(m-x)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=hr.set(s[0],s[1],s[2]).length();const o=hr.set(s[4],s[5],s[6]).length(),a=hr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const c=1/r,h=1/o,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,n.setFromRotationMatrix(kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=bi){const l=this.elements,c=2*r/(n-e),h=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s);let d,g;if(a===bi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=bi){const l=this.elements,c=1/(n-e),h=1/(i-s),u=1/(o-r),f=(n+e)*c,d=(i+s)*h;let g,v;if(a===bi)g=(o+r)*u,v=-2*u;else if(a===Xl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const hr=new U,kn=new Tt,IA=new U(0,0,0),DA=new U(1,1,1),Vi=new U,Xa=new U,_n=new U,lg=new Tt,cg=new ya;class Ch{constructor(e=0,n=0,i=0,s=Ch.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ch.DEFAULT_ORDER="XYZ";class uy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NA=0;const hg=new U,ur=new ya,fi=new Tt,ja=new U,go=new U,UA=new U,OA=new ya,ug=new U(1,0,0),fg=new U(0,1,0),dg=new U(0,0,1),FA={type:"added"},BA={type:"removed"};class kt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new U,n=new Ch,i=new ya,s=new U(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ur.setFromAxisAngle(e,n),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,n){return ur.setFromAxisAngle(e,n),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,n){return hg.copy(e).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(go,ja,this.up):fi.lookAt(ja,go,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(fi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(BA)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,UA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,OA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}kt.DEFAULT_UP=new U(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new U,di=new U,mu=new U,pi=new U,fr=new U,dr=new U,pg=new U,gu=new U,_u=new U,vu=new U;let $a=!1;class zn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Hn.subVectors(e,n),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Hn.subVectors(s,n),di.subVectors(i,n),mu.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(di),l=Hn.dot(mu),c=di.dot(di),h=di.dot(mu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,s,r,o,a,l){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),this.getInterpolation(e,n,i,s,r,o,a,l)}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static isFrontFacing(e,n,i,s){return Hn.subVectors(i,n),di.subVectors(e,n),Hn.cross(di).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Hn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;fr.subVectors(s,i),dr.subVectors(r,i),gu.subVectors(e,i);const l=fr.dot(gu),c=dr.dot(gu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,s);const h=fr.dot(_u),u=dr.dot(_u);if(h>=0&&u<=h)return n.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(fr,o);vu.subVectors(e,r);const d=fr.dot(vu),g=dr.dot(vu);if(g>=0&&d<=g)return n.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(dr,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return pg.subVectors(r,s),a=(u-h)/(u-h+(d-g)),n.copy(s).addScaledVector(pg,a);const p=1/(m+v+f);return o=v*p,a=f*p,n.copy(i).addScaledVector(fr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=bA(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=yu(o,r,e+1/3),this.g=yu(o,r,e),this.b=yu(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,n=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gt){const i=fy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=au(e.r),this.g=au(e.g),this.b=au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return ct.fromWorkingColorSpace(jt.copy(this),e),Math.round(sn(jt.r*255,0,255))*65536+Math.round(sn(jt.g*255,0,255))*256+Math.round(sn(jt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,s=jt.g,r=jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=gt){ct.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,s=jt.b;return e!==gt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(qa);const i=ru(zi.h,qa.h,n),s=ru(zi.s,qa.s,n),r=ru(zi.l,qa.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Oe;Oe.NAMES=fy;let kA=0;class Kn extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Br,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mf&&(i.blendSrc=this.blendSrc),this.blendDst!==gf&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rh extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,Ya=new Qe;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ya.fromBufferAttribute(this,n),Ya.applyMatrix3(e),this.setXY(n,Ya.x,Ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tg&&(e.usage=this.usage),e}}class dy extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class py extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let HA=0;const Rn=new Tt,xu=new kt,pr=new U,vn=new xa,_o=new xa,Ft=new U;class Fn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ay(e)?py:dy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(vn.min,_o.min),vn.expandByPoint(Ft),Ft.addVectors(vn.max,_o.max),vn.expandByPoint(Ft)):(vn.expandByPoint(_o.min),vn.expandByPoint(_o.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Ft.add(pr)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<a;M++)c[M]=new U,h[M]=new U;const u=new U,f=new U,d=new U,g=new Qe,v=new Qe,m=new Qe,p=new U,x=new U;function _(M,N,O){u.fromArray(s,M*3),f.fromArray(s,N*3),d.fromArray(s,O*3),g.fromArray(o,M*2),v.fromArray(o,N*2),m.fromArray(o,O*2),f.sub(u),d.sub(u),v.sub(g),m.sub(g);const q=1/(v.x*m.y-m.x*v.y);isFinite(q)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(q),x.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(q),c[M].add(p),c[N].add(p),c[O].add(p),h[M].add(x),h[N].add(x),h[O].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let M=0,N=E.length;M<N;++M){const O=E[M],q=O.start,I=O.count;for(let V=q,H=q+I;V<H;V+=3)_(i[V+0],i[V+1],i[V+2])}const w=new U,T=new U,C=new U,L=new U;function S(M){C.fromArray(r,M*3),L.copy(C);const N=c[M];w.copy(N),w.sub(C.multiplyScalar(C.dot(N))).normalize(),T.crossVectors(L,N);const q=T.dot(h[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=q}for(let M=0,N=E.length;M<N;++M){const O=E[M],q=O.start,I=O.count;for(let V=q,H=q+I;V<H;V+=3)S(i[V+0]),S(i[V+1]),S(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new si(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mg=new Tt,ms=new zd,Ka=new Sa,gg=new U,mr=new U,gr=new U,_r=new U,Su=new U,Za=new U,Ja=new Qe,Qa=new Qe,el=new Qe,_g=new U,vg=new U,yg=new U,tl=new U,nl=new U;class dn extends kt{constructor(e=new Fn,n=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Su.fromBufferAttribute(u,e),o?Za.addScaledVector(Su,h):Za.addScaledVector(Su.sub(n),h))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(Ka.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ka,gg)===null||ms.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(r).invert(),ms.copy(e.ray).applyMatrix4(mg),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ms)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,w=_;E<w;E+=3){const T=a.getX(E),C=a.getX(E+1),L=a.getX(E+2);s=il(this,p,e,i,c,h,u,T,C,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);s=il(this,o,e,i,c,h,u,x,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,w=_;E<w;E+=3){const T=E,C=E+1,L=E+2;s=il(this,p,e,i,c,h,u,T,C,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,E=m+2;s=il(this,o,e,i,c,h,u,x,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function VA(t,e,n,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;nl.copy(a),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,mr),t.getVertexPosition(l,gr),t.getVertexPosition(c,_r);const h=VA(t,e,n,i,mr,gr,_r,tl);if(h){s&&(Ja.fromBufferAttribute(s,a),Qa.fromBufferAttribute(s,l),el.fromBufferAttribute(s,c),h.uv=zn.getInterpolation(tl,mr,gr,_r,Ja,Qa,el,new Qe)),r&&(Ja.fromBufferAttribute(r,a),Qa.fromBufferAttribute(r,l),el.fromBufferAttribute(r,c),h.uv1=zn.getInterpolation(tl,mr,gr,_r,Ja,Qa,el,new Qe),h.uv2=h.uv1),o&&(_g.fromBufferAttribute(o,a),vg.fromBufferAttribute(o,l),yg.fromBufferAttribute(o,c),h.normal=zn.getInterpolation(tl,mr,gr,_r,_g,vg,yg,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};zn.getNormal(mr,gr,_r,u.normal),h.face=u}return h}class so extends Fn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(v,m,p,x,_,E,w,T,C,L,S){const M=E/C,N=w/L,O=E/2,q=w/2,I=T/2,V=C+1,H=L+1;let Y=0,z=0;const ne=new U;for(let ce=0;ce<H;ce++){const fe=ce*N-q;for(let ge=0;ge<V;ge++){const te=ge*M-O;ne[v]=te*x,ne[m]=fe*_,ne[p]=I,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=T>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(ge/C),u.push(1-ce/L),Y+=1}}for(let ce=0;ce<L;ce++)for(let fe=0;fe<C;fe++){const ge=f+fe+V*ce,te=f+fe+V*(ce+1),ue=f+(fe+1)+V*(ce+1),Se=f+(fe+1)+V*ce;l.push(ge,te,Se),l.push(te,ue,Se),z+=6}a.addGroup(d,z,S),d+=z,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=eo(t[n]);for(const s in i)e[s]=i[s]}return e}function zA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function my(t){return t.getRenderTarget()===null?t.outputColorSpace:ct.workingColorSpace}const GA={clone:eo,merge:tn};var WA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ks extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WA,this.fragmentShader=XA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=zA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gy extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends gy{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jl*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(su*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vr=-90,yr=1;class jA extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(vr,yr,e,n);s.layers=this.layers,this.add(s);const r=new hn(vr,yr,e,n);r.layers=this.layers,this.add(r);const o=new hn(vr,yr,e,n);o.layers=this.layers,this.add(o);const a=new hn(vr,yr,e,n);a.layers=this.layers,this.add(a);const l=new hn(vr,yr,e,n);l.layers=this.layers,this.add(l);const c=new hn(vr,yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _y extends rn{constructor(e,n,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Zr,super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $A extends Ys{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zs?gt:Dn),this.texture=new _y(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new so(5,5,5),r=new Ks({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:is});r.uniforms.tEquirect.value=n;const o=new dn(s,r),a=n.minFilter;return n.minFilter===Zo&&(n.minFilter=Ln),new jA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const Mu=new U,qA=new U,YA=new Je;class vs{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Mu.subVectors(i,n).cross(qA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Mu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YA.getNormalMatrix(e),s=this.coplanarPoint(Mu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Sa,sl=new U;class Gd{constructor(e=new vs,n=new vs,i=new vs,s=new vs,r=new vs,o=new vs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],_=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,m-d,E-p).normalize(),i[1].setComponents(l+r,f+c,m+d,E+p).normalize(),i[2].setComponents(l+o,f+h,m+g,E+x).normalize(),i[3].setComponents(l-o,f-h,m-g,E-x).normalize(),i[4].setComponents(l-a,f-u,m-v,E-_).normalize(),n===bi)i[5].setComponents(l+a,f+u,m+v,E+_).normalize();else if(n===Xl)i[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(sl.x=s.normal.x>0?e.max.x:e.min.x,sl.y=s.normal.y>0?e.max.y:e.min.y,sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vy(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function KA(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,h){const u=c.array,f=c.usage,d=u.byteLength,g=t.createBuffer();t.bindBuffer(h,g),t.bufferData(h,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=t.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=t.SHORT;else if(u instanceof Uint32Array)v=t.UNSIGNED_INT;else if(u instanceof Int32Array)v=t.INT;else if(u instanceof Int8Array)v=t.BYTE;else if(u instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){const f=h.array,d=h._updateRange,g=h.updateRanges;if(t.bindBuffer(u,c),d.count===-1&&g.length===0&&t.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];n?t.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):t.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(n?t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class ea extends Fn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=n/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*f-o;for(let _=0;_<c;_++){const E=_*u-r;g.push(E,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,E=x+c*(p+1),w=x+1+c*(p+1),T=x+1+c*p;d.push(_,E,T),d.push(E,w,T)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JA=`#ifdef USE_ALPHAHASH
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
#endif`,QA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iC=`#ifdef USE_AOMAP
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
#endif`,sC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rC=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hC=`#ifdef USE_IRIDESCENCE
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
#endif`,uC=`#ifdef USE_BUMPMAP
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
#endif`,fC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_C=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xC=`#define PI 3.141592653589793
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
} // validated`,SC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,MC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AC="gl_FragColor = linearToOutputTexel( gl_FragColor );",CC=`
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
}`,RC=`#ifdef USE_ENVMAP
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
#endif`,PC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LC=`#ifdef USE_ENVMAP
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
#endif`,IC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DC=`#ifdef USE_ENVMAP
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
#endif`,NC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BC=`#ifdef USE_GRADIENTMAP
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
}`,kC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GC=`uniform bool receiveShadow;
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
#endif`,WC=`#ifdef USE_ENVMAP
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
#endif`,XC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$C=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YC=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KC=`struct PhysicalMaterial {
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
}`,ZC=`
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
#endif`,JC=`#if defined( RE_IndirectDiffuse )
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
#endif`,QC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,i2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,s2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a2=`#if defined( USE_POINTS_UV )
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
#endif`,l2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u2=`#ifdef USE_MORPHNORMALS
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
#endif`,f2=`#ifdef USE_MORPHTARGETS
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
#endif`,d2=`#ifdef USE_MORPHTARGETS
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
#endif`,p2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y2=`#ifdef USE_NORMALMAP
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
#endif`,x2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,O2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
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
#endif`,H2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G2=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,X2=`#ifdef USE_TRANSMISSION
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z2=`uniform sampler2D t2D;
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
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,iR=`#if DEPTH_PACKING == 3200
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
}`,sR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,rR=`#define DISTANCE
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
}`,oR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`uniform float scale;
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
}`,cR=`uniform vec3 diffuse;
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
}`,hR=`#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,uR=`uniform vec3 diffuse;
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
}`,fR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,dR=`#define LAMBERT
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
}`,pR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,mR=`#define MATCAP
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
}`,gR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,_R=`#define NORMAL
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
}`,vR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,yR=`#define PHONG
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
}`,xR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,SR=`#define STANDARD
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
}`,MR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,ER=`#define TOON
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
}`,bR=`uniform float size;
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
}`,TR=`uniform vec3 diffuse;
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
}`,wR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,AR=`uniform vec3 color;
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
}`,CR=`uniform float rotation;
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
}`,RR=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:ZA,alphahash_pars_fragment:JA,alphamap_fragment:QA,alphamap_pars_fragment:eC,alphatest_fragment:tC,alphatest_pars_fragment:nC,aomap_fragment:iC,aomap_pars_fragment:sC,batching_pars_vertex:rC,batching_vertex:oC,begin_vertex:aC,beginnormal_vertex:lC,bsdfs:cC,iridescence_fragment:hC,bumpmap_pars_fragment:uC,clipping_planes_fragment:fC,clipping_planes_pars_fragment:dC,clipping_planes_pars_vertex:pC,clipping_planes_vertex:mC,color_fragment:gC,color_pars_fragment:_C,color_pars_vertex:vC,color_vertex:yC,common:xC,cube_uv_reflection_fragment:SC,defaultnormal_vertex:MC,displacementmap_pars_vertex:EC,displacementmap_vertex:bC,emissivemap_fragment:TC,emissivemap_pars_fragment:wC,colorspace_fragment:AC,colorspace_pars_fragment:CC,envmap_fragment:RC,envmap_common_pars_fragment:PC,envmap_pars_fragment:LC,envmap_pars_vertex:IC,envmap_physical_pars_fragment:WC,envmap_vertex:DC,fog_vertex:NC,fog_pars_vertex:UC,fog_fragment:OC,fog_pars_fragment:FC,gradientmap_pars_fragment:BC,lightmap_fragment:kC,lightmap_pars_fragment:HC,lights_lambert_fragment:VC,lights_lambert_pars_fragment:zC,lights_pars_begin:GC,lights_toon_fragment:XC,lights_toon_pars_fragment:jC,lights_phong_fragment:$C,lights_phong_pars_fragment:qC,lights_physical_fragment:YC,lights_physical_pars_fragment:KC,lights_fragment_begin:ZC,lights_fragment_maps:JC,lights_fragment_end:QC,logdepthbuf_fragment:e2,logdepthbuf_pars_fragment:t2,logdepthbuf_pars_vertex:n2,logdepthbuf_vertex:i2,map_fragment:s2,map_pars_fragment:r2,map_particle_fragment:o2,map_particle_pars_fragment:a2,metalnessmap_fragment:l2,metalnessmap_pars_fragment:c2,morphcolor_vertex:h2,morphnormal_vertex:u2,morphtarget_pars_vertex:f2,morphtarget_vertex:d2,normal_fragment_begin:p2,normal_fragment_maps:m2,normal_pars_fragment:g2,normal_pars_vertex:_2,normal_vertex:v2,normalmap_pars_fragment:y2,clearcoat_normal_fragment_begin:x2,clearcoat_normal_fragment_maps:S2,clearcoat_pars_fragment:M2,iridescence_pars_fragment:E2,opaque_fragment:b2,packing:T2,premultiplied_alpha_fragment:w2,project_vertex:A2,dithering_fragment:C2,dithering_pars_fragment:R2,roughnessmap_fragment:P2,roughnessmap_pars_fragment:L2,shadowmap_pars_fragment:I2,shadowmap_pars_vertex:D2,shadowmap_vertex:N2,shadowmask_pars_fragment:U2,skinbase_vertex:O2,skinning_pars_vertex:F2,skinning_vertex:B2,skinnormal_vertex:k2,specularmap_fragment:H2,specularmap_pars_fragment:V2,tonemapping_fragment:z2,tonemapping_pars_fragment:G2,transmission_fragment:W2,transmission_pars_fragment:X2,uv_pars_fragment:j2,uv_pars_vertex:$2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:K2,background_frag:Z2,backgroundCube_vert:J2,backgroundCube_frag:Q2,cube_vert:eR,cube_frag:tR,depth_vert:nR,depth_frag:iR,distanceRGBA_vert:sR,distanceRGBA_frag:rR,equirect_vert:oR,equirect_frag:aR,linedashed_vert:lR,linedashed_frag:cR,meshbasic_vert:hR,meshbasic_frag:uR,meshlambert_vert:fR,meshlambert_frag:dR,meshmatcap_vert:pR,meshmatcap_frag:mR,meshnormal_vert:gR,meshnormal_frag:_R,meshphong_vert:vR,meshphong_frag:yR,meshphysical_vert:xR,meshphysical_frag:SR,meshtoon_vert:MR,meshtoon_frag:ER,points_vert:bR,points_frag:TR,shadow_vert:wR,shadow_frag:AR,sprite_vert:CR,sprite_frag:RR},ye={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Qn={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Qn.physical={uniforms:tn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const rl={r:0,b:0,g:0};function PR(t,e,n,i,s,r,o){const a=new Oe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Th)?(h===void 0&&(h=new dn(new so(1,1,1),new Ks({name:"BackgroundCubeMaterial",uniforms:eo(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ct.getTransfer(_.colorSpace)!==mt,(u!==_||f!==_.version||d!==t.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new dn(new ea(2,2),new Ks({name:"BackgroundMaterial",uniforms:eo(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(rl,my(t)),i.buffers.color.setClear(rl.r,rl.g,rl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function LR(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(I,V,H,Y,z){let ne=!1;if(o){const ce=v(Y,H,V);c!==ce&&(c=ce,d(c.object)),ne=p(I,Y,H,z),ne&&x(I,Y,H,z)}else{const ce=V.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==ce)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=ce,ne=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,L(I,V,H,Y),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function f(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(I){return i.isWebGL2?t.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,V,H){const Y=H.wireframe===!0;let z=a[I.id];z===void 0&&(z={},a[I.id]=z);let ne=z[V.id];ne===void 0&&(ne={},z[V.id]=ne);let ce=ne[Y];return ce===void 0&&(ce=m(f()),ne[Y]=ce),ce}function m(I){const V=[],H=[],Y=[];for(let z=0;z<s;z++)V[z]=0,H[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:H,attributeDivisors:Y,object:I,attributes:{},index:null}}function p(I,V,H,Y){const z=c.attributes,ne=V.attributes;let ce=0;const fe=H.getAttributes();for(const ge in fe)if(fe[ge].location>=0){const ue=z[ge];let Se=ne[ge];if(Se===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),ue===void 0||ue.attribute!==Se||Se&&ue.data!==Se.data)return!0;ce++}return c.attributesNum!==ce||c.index!==Y}function x(I,V,H,Y){const z={},ne=V.attributes;let ce=0;const fe=H.getAttributes();for(const ge in fe)if(fe[ge].location>=0){let ue=ne[ge];ue===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));const Se={};Se.attribute=ue,ue&&ue.data&&(Se.data=ue.data),z[ge]=Se,ce++}c.attributes=z,c.attributesNum=ce,c.index=Y}function _(){const I=c.newAttributes;for(let V=0,H=I.length;V<H;V++)I[V]=0}function E(I){w(I,0)}function w(I,V){const H=c.newAttributes,Y=c.enabledAttributes,z=c.attributeDivisors;H[I]=1,Y[I]===0&&(t.enableVertexAttribArray(I),Y[I]=1),z[I]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),z[I]=V)}function T(){const I=c.newAttributes,V=c.enabledAttributes;for(let H=0,Y=V.length;H<Y;H++)V[H]!==I[H]&&(t.disableVertexAttribArray(H),V[H]=0)}function C(I,V,H,Y,z,ne,ce){ce===!0?t.vertexAttribIPointer(I,V,H,z,ne):t.vertexAttribPointer(I,V,H,Y,z,ne)}function L(I,V,H,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const z=Y.attributes,ne=H.getAttributes(),ce=V.defaultAttributeValues;for(const fe in ne){const ge=ne[fe];if(ge.location>=0){let te=z[fe];if(te===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const ue=te.normalized,Se=te.itemSize,be=n.get(te);if(be===void 0)continue;const G=be.buffer,le=be.type,re=be.bytesPerElement,he=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||te.gpuType===Jv);if(te.isInterleavedBufferAttribute){const Ae=te.data,W=Ae.stride,R=te.offset;if(Ae.isInstancedInterleavedBuffer){for(let P=0;P<ge.locationSize;P++)w(ge.location+P,Ae.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let P=0;P<ge.locationSize;P++)E(ge.location+P);t.bindBuffer(t.ARRAY_BUFFER,G);for(let P=0;P<ge.locationSize;P++)C(ge.location+P,Se/ge.locationSize,le,ue,W*re,(R+Se/ge.locationSize*P)*re,he)}else{if(te.isInstancedBufferAttribute){for(let Ae=0;Ae<ge.locationSize;Ae++)w(ge.location+Ae,te.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<ge.locationSize;Ae++)E(ge.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,G);for(let Ae=0;Ae<ge.locationSize;Ae++)C(ge.location+Ae,Se/ge.locationSize,le,ue,Se*re,Se/ge.locationSize*Ae*re,he)}}else if(ce!==void 0){const ue=ce[fe];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(ge.location,ue);break;case 3:t.vertexAttrib3fv(ge.location,ue);break;case 4:t.vertexAttrib4fv(ge.location,ue);break;default:t.vertexAttrib1fv(ge.location,ue)}}}}T()}function S(){O();for(const I in a){const V=a[I];for(const H in V){const Y=V[H];for(const z in Y)g(Y[z].object),delete Y[z];delete V[H]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;const V=a[I.id];for(const H in V){const Y=V[H];for(const z in Y)g(Y[z].object),delete Y[z];delete V[H]}delete a[I.id]}function N(I){for(const V in a){const H=a[V];if(H[I.id]===void 0)continue;const Y=H[I.id];for(const z in Y)g(Y[z].object),delete Y[z];delete H[I.id]}}function O(){q(),h=!0,c!==l&&(c=l,d(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:q,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:E,disableUnusedAttributes:T}}function IR(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}function a(h,u){t.drawArrays(r,h,u),n.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),n.update(u,r,f)}function c(h,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];n.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function DR(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=o||e.has("OES_texture_float"),w=_&&E,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:T}}function NR(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new vs,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){n=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=t.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:i,_=x*4;let E=p.clippingState||null;l.value=E,E=h(g,f,_,d);for(let w=0;w!==_;++w)E[w]=n[w];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,E=d;_!==v;++_,E+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function UR(t){let e=new WeakMap;function n(o,a){return a===_f?o.mapping=Zr:a===vf&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_f||a===vf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $A(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class OR extends gy{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Tr=4,xg=[.125,.215,.35,.446,.526,.582],bs=20,Eu=new OR,Sg=new Oe;let bu=null,Tu=0,wu=0;const ys=(1+Math.sqrt(5))/2,xr=1/ys,Mg=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ys,xr),new U(0,ys,-xr),new U(xr,0,ys),new U(-xr,0,ys),new U(ys,xr,0),new U(-ys,xr,0)];class Eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){bu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Tu,wu),e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Jo,format:Xn,colorSpace:Ri,depthBuffer:!1},s=bg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FR(r)),this._blurMaterial=BR(r,e,n)}return s}_compileMaterial(e){const n=new dn(this._lodPlanes[0],e);this._renderer.compile(n,Eu)}_sceneToCubeUV(e,n,i,s){const a=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Sg),h.toneMapping=ss,h.autoClear=!1;const d=new Rh({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new dn(new so,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Sg),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;ol(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Zr||e.mapping===Jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Eu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mg[(s-1)%Mg.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):bs;m>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bs}`);const p=[];let x=0;for(let C=0;C<bs;++C){const L=C/v,S=Math.exp(-L*L/2);p.push(S),C===0?x+=S:C<m&&(x+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const E=this._sizeLods[s],w=3*E*(s>_-Tr?s-_+Tr:0),T=4*(this._cubeSize-E);ol(n,w,T,3*E,2*E),l.setRenderTarget(n),l.render(u,Eu)}}function FR(t){const e=[],n=[],i=[];let s=t;const r=t-Tr+1+xg.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Tr?l=xg[o-t+Tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),_=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];x.set(S,v*g*T),_.set(f,m*g*T);const M=[T,T,T,T,T,T];E.set(M,p*g*T)}const w=new Fn;w.setAttribute("position",new si(x,v)),w.setAttribute("uv",new si(_,m)),w.setAttribute("faceIndex",new si(E,p)),e.push(w),s>Tr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bg(t,e,n){const i=new Ys(t,e,n);return i.texture.mapping=Th,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function BR(t,e,n){const i=new Float32Array(bs),s=new U(0,1,0);return new Ks({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Tg(){return new Ks({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function wg(){return new Ks({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function kR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_f||l===vf,h=l===Zr||l===Jr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return n===null&&(n=new Eg(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){n===null&&(n=new Eg(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function VR(t,e,n,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,E=x.length;_<E;_+=3){const w=x[_+0],T=x[_+1],C=x[_+2];f.push(w,T,T,C,C,w)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,E=x.length/3-1;_<E;_+=3){const w=_+0,T=_+1,C=_+2;f.push(w,T,T,C,C,w)}}else return;const m=new(ay(f)?py:dy)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function zR(t,e,n,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){t.drawElements(r,g,a,d*l),n.update(g,r,1)}function u(d,g,v){if(v===0)return;let m,p;if(s)m=t,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,v),n.update(g,r,v)}function f(d,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];n.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function GR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function WR(t,e){return t[0]-e[0]}function XR(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jR(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let I=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),_===!0&&(L=2),E===!0&&(L=3);let S=h.attributes.position.count*L,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const N=new Float32Array(S*M*4*g),O=new hy(N,S,M,g);O.type=es,O.needsUpdate=!0;const q=L*4;for(let V=0;V<g;V++){const H=w[V],Y=T[V],z=C[V],ne=S*M*4*V;for(let ce=0;ce<H.count;ce++){const fe=ce*q;x===!0&&(o.fromBufferAttribute(H,ce),N[ne+fe+0]=o.x,N[ne+fe+1]=o.y,N[ne+fe+2]=o.z,N[ne+fe+3]=0),_===!0&&(o.fromBufferAttribute(Y,ce),N[ne+fe+4]=o.x,N[ne+fe+5]=o.y,N[ne+fe+6]=o.z,N[ne+fe+7]=0),E===!0&&(o.fromBufferAttribute(z,ce),N[ne+fe+8]=o.x,N[ne+fe+9]=o.y,N[ne+fe+10]=o.z,N[ne+fe+11]=z.itemSize===4?o.w:1)}}v={count:g,texture:O,size:new Qe(S,M)},r.set(h,v),h.addEventListener("dispose",I)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];const p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(t,"morphTargetBaseInfluence",p),u.getUniforms().setValue(t,"morphTargetInfluences",f),u.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const d=f===void 0?0:f.length;let g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<d;_++){const E=g[_];E[0]=_,E[1]=f[_]}g.sort(XR);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(WR);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const E=a[_],w=E[0],T=E[1];w!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+_)!==v[w]&&h.setAttribute("morphTarget"+_,v[w]),m&&h.getAttribute("morphNormal"+_)!==m[w]&&h.setAttribute("morphNormal"+_,m[w]),s[_]=T,p+=T):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(t,"morphTargetBaseInfluence",x),u.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function $R(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}class yy extends rn{constructor(e,n,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Vs,h!==Vs&&h!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vs&&(i=Qi),i===void 0&&h===Qr&&(i=Hs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const xy=new rn,Sy=new yy(1,1);Sy.compareFunction=oy;const My=new hy,Ey=new PA,by=new _y,Ag=[],Cg=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Ag[s];if(r===void 0&&(r=new Float32Array(s),Ag[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ph(t,e){let n=Cg[e];n===void 0&&(n=new Int32Array(e),Cg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function KR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function ZR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function JR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Lg.set(i),t.uniformMatrix2fv(this.addr,!1,Lg),Nt(n,i)}}function QR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Pg.set(i),t.uniformMatrix3fv(this.addr,!1,Pg),Nt(n,i)}}function eP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Rg.set(i),t.uniformMatrix4fv(this.addr,!1,Rg),Nt(n,i)}}function tP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function iP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function sP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function rP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function aP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function lP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function cP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);const r=this.type===t.SAMPLER_2D_SHADOW?Sy:xy;n.setTexture2D(e||r,s)}function hP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Ey,s)}function uP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||by,s)}function fP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||My,s)}function dP(t){switch(t){case 5126:return qR;case 35664:return YR;case 35665:return KR;case 35666:return ZR;case 35674:return JR;case 35675:return QR;case 35676:return eP;case 5124:case 35670:return tP;case 35667:case 35671:return nP;case 35668:case 35672:return iP;case 35669:case 35673:return sP;case 5125:return rP;case 36294:return oP;case 36295:return aP;case 36296:return lP;case 35678:case 36198:case 36298:case 36306:case 35682:return cP;case 35679:case 36299:case 36307:return hP;case 35680:case 36300:case 36308:case 36293:return uP;case 36289:case 36303:case 36311:case 36292:return fP}}function pP(t,e){t.uniform1fv(this.addr,e)}function mP(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function gP(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function _P(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function vP(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yP(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xP(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SP(t,e){t.uniform1iv(this.addr,e)}function MP(t,e){t.uniform2iv(this.addr,e)}function EP(t,e){t.uniform3iv(this.addr,e)}function bP(t,e){t.uniform4iv(this.addr,e)}function TP(t,e){t.uniform1uiv(this.addr,e)}function wP(t,e){t.uniform2uiv(this.addr,e)}function AP(t,e){t.uniform3uiv(this.addr,e)}function CP(t,e){t.uniform4uiv(this.addr,e)}function RP(t,e,n){const i=this.cache,s=e.length,r=Ph(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||xy,r[o])}function PP(t,e,n){const i=this.cache,s=e.length,r=Ph(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Ey,r[o])}function LP(t,e,n){const i=this.cache,s=e.length,r=Ph(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||by,r[o])}function IP(t,e,n){const i=this.cache,s=e.length,r=Ph(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||My,r[o])}function DP(t){switch(t){case 5126:return pP;case 35664:return mP;case 35665:return gP;case 35666:return _P;case 35674:return vP;case 35675:return yP;case 35676:return xP;case 5124:case 35670:return SP;case 35667:case 35671:return MP;case 35668:case 35672:return EP;case 35669:case 35673:return bP;case 5125:return TP;case 36294:return wP;case 36295:return AP;case 36296:return CP;case 35678:case 36198:case 36298:case 36306:case 35682:return RP;case 35679:case 36299:case 36307:return PP;case 35680:case 36300:case 36308:case 36293:return LP;case 36289:case 36303:case 36311:case 36292:return IP}}class NP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dP(n.type)}}class UP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DP(n.type)}}class OP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function Ig(t,e){t.seq.push(e),t.map[e.id]=e}function FP(t,e,n){const i=t.name,s=i.length;for(Au.lastIndex=0;;){const r=Au.exec(i),o=Au.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ig(n,c===void 0?new NP(a,t,e):new UP(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new OP(a),Ig(n,u)),n=u}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);FP(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Dg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const BP=37297;let kP=0;function HP(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function VP(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===Wl&&n===Gl?i="LinearDisplayP3ToLinearSRGB":e===Gl&&n===Wl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ri:case Ah:return[i,"LinearTransferOETF"];case gt:case io:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ng(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+HP(t.getShaderSource(e),o)}else return s}function zP(t,e){const n=VP(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function GP(t,e){let n;switch(e){case Qw:n="Linear";break;case eA:n="Reinhard";break;case tA:n="OptimizedCineon";break;case nA:n="ACESFilmic";break;case sA:n="AgX";break;case iA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function WP(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function XP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wr).join(`
`)}function jP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $P(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function wr(t){return t!==""}function Ug(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(t){return t.replace(qP,KP)}const YP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function KP(t,e){let n=je[e];if(n===void 0){const i=YP.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mf(n)}const ZP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(t){return t.replace(ZP,JP)}function JP(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Aw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function eL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Th:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function nL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Zw:e="ENVMAP_BLENDING_MIX";break;case Jw:e="ENVMAP_BLENDING_ADD";break}return e}function iL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sL(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QP(n),c=eL(n),h=tL(n),u=nL(n),f=iL(n),d=n.isWebGL2?"":WP(n),g=XP(n),v=jP(r),m=s.createProgram();let p,x,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wr).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wr).join(`
`),x.length>0&&(x+=`
`)):(p=[Bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),x=[d,Bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?je.tonemapping_pars_fragment:"",n.toneMapping!==ss?GP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,zP("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wr).join(`
`)),o=Mf(o),o=Ug(o,n),o=Og(o,n),a=Mf(a),a=Ug(a,n),a=Og(a,n),o=Fg(o),a=Fg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=_+p+o,w=_+x+a,T=Dg(s,s.VERTEX_SHADER,E),C=Dg(s,s.FRAGMENT_SHADER,w);s.attachShader(m,T),s.attachShader(m,C),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(O){if(t.debug.checkShaderErrors){const q=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),V=s.getShaderInfoLog(C).trim();let H=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,m,T,C);else{const z=Ng(s,T,"vertex"),ne=Ng(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+z+`
`+ne)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(I===""||V==="")&&(Y=!1);Y&&(O.diagnostics={runnable:H,programLog:q,vertexShader:{log:I,prefix:p},fragmentShader:{log:V,prefix:x}})}s.deleteShader(T),s.deleteShader(C),S=new vl(s,m),M=$P(s,m)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,BP)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kP++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}let rL=0;class oL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aL(e),n.set(e,i)),i}}class aL{constructor(e){this.id=rL++,this.code=e,this.usedTimes=0}}function lL(t,e,n,i,s,r,o){const a=new uy,l=new oL,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,M,N,O,q){const I=O.fog,V=q.geometry,H=S.isMeshStandardMaterial?O.environment:null,Y=(S.isMeshStandardMaterial?n:e).get(S.envMap||H),z=Y&&Y.mapping===Th?Y.image.height:null,ne=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,fe=ce!==void 0?ce.length:0;let ge=0;V.morphAttributes.position!==void 0&&(ge=1),V.morphAttributes.normal!==void 0&&(ge=2),V.morphAttributes.color!==void 0&&(ge=3);let te,ue,Se,be;if(ne){const Jt=Qn[ne];te=Jt.vertexShader,ue=Jt.fragmentShader}else te=S.vertexShader,ue=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const G=t.getRenderTarget(),le=q.isInstancedMesh===!0,re=q.isBatchedMesh===!0,he=!!S.map,Ae=!!S.matcap,W=!!Y,R=!!S.aoMap,P=!!S.lightMap,B=!!S.bumpMap,X=!!S.normalMap,J=!!S.displacementMap,ie=!!S.emissiveMap,b=!!S.metalnessMap,y=!!S.roughnessMap,D=S.anisotropy>0,k=S.clearcoat>0,$=S.iridescence>0,K=S.sheen>0,ae=S.transmission>0,se=D&&!!S.anisotropyMap,de=k&&!!S.clearcoatMap,xe=k&&!!S.clearcoatNormalMap,Ce=k&&!!S.clearcoatRoughnessMap,oe=$&&!!S.iridescenceMap,We=$&&!!S.iridescenceThicknessMap,He=K&&!!S.sheenColorMap,Fe=K&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,Re=!!S.specularColorMap,Ie=!!S.specularIntensityMap,Xe=ae&&!!S.transmissionMap,pt=ae&&!!S.thicknessMap,Ye=!!S.gradientMap,ve=!!S.alphaMap,F=S.alphaTest>0,Me=!!S.alphaHash,Ee=!!S.extensions,Be=!!V.attributes.uv1,De=!!V.attributes.uv2,ht=!!V.attributes.uv3;let ut=ss;return S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ut=t.toneMapping),{isWebGL2:h,shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:ue,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:re,instancing:le,instancingColor:le&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:G===null?t.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ri,map:he,matcap:Ae,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:z,aoMap:R,lightMap:P,bumpMap:B,normalMap:X,displacementMap:f&&J,emissiveMap:ie,normalMapObjectSpace:X&&S.normalMapType===gA,normalMapTangentSpace:X&&S.normalMapType===wh,metalnessMap:b,roughnessMap:y,anisotropy:D,anisotropyMap:se,clearcoat:k,clearcoatMap:de,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ce,iridescence:$,iridescenceMap:oe,iridescenceThicknessMap:We,sheen:K,sheenColorMap:He,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Re,specularIntensityMap:Ie,transmission:ae,transmissionMap:Xe,thicknessMap:pt,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===Br,alphaMap:ve,alphaTest:F,alphaHash:Me,combine:S.combine,mapUv:he&&v(S.map.channel),aoMapUv:R&&v(S.aoMap.channel),lightMapUv:P&&v(S.lightMap.channel),bumpMapUv:B&&v(S.bumpMap.channel),normalMapUv:X&&v(S.normalMap.channel),displacementMapUv:J&&v(S.displacementMap.channel),emissiveMapUv:ie&&v(S.emissiveMap.channel),metalnessMapUv:b&&v(S.metalnessMap.channel),roughnessMapUv:y&&v(S.roughnessMap.channel),anisotropyMapUv:se&&v(S.anisotropyMap.channel),clearcoatMapUv:de&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(S.sheenRoughnessMap.channel),specularMapUv:Pe&&v(S.specularMap.channel),specularColorMapUv:Re&&v(S.specularColorMap.channel),specularIntensityMapUv:Ie&&v(S.specularIntensityMap.channel),transmissionMapUv:Xe&&v(S.transmissionMap.channel),thicknessMapUv:pt&&v(S.thicknessMap.channel),alphaMapUv:ve&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(X||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:De,vertexUv3s:ht,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(he||ve),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ut,useLegacyLights:t._useLegacyLights,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ei,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ee&&S.extensions.derivatives===!0,extensionFragDepth:Ee&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)M.push(N),M.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function E(S){const M=g[S.type];let N;if(M){const O=Qn[M];N=GA.clone(O.uniforms)}else N=S.uniforms;return N}function w(S,M){let N;for(let O=0,q=c.length;O<q;O++){const I=c[O];if(I.cacheKey===M){N=I,++N.usedTimes;break}}return N===void 0&&(N=new sL(t,M,S,r),c.push(N)),N}function T(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function cL(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function hL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hg(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,f,d,g,v,m){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},t[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(u,f){n.length>1&&n.sort(u||hL),i.length>1&&i.sort(f||kg),s.length>1&&s.sort(f||kg)}function h(){for(let u=e,f=t.length;u<f;u++){const d=t[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function uL(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Hg,t.set(i,[o])):s>=r.length?(o=new Hg,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Oe};break;case"SpotLight":n={position:new U,direction:new U,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function dL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pL=0;function mL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gL(t,e){const n=new fL,i=dL(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);const r=new U,o=new Tt,a=new Tt;function l(h,u){let f=0,d=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let v=0,m=0,p=0,x=0,_=0,E=0,w=0,T=0,C=0,L=0,S=0;h.sort(mL);const M=u===!0?Math.PI:1;for(let O=0,q=h.length;O<q;O++){const I=h[O],V=I.color,H=I.intensity,Y=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=V.r*H*M,d+=V.g*H*M,g+=V.b*H*M;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(I.sh.coefficients[ne],H);S++}else if(I.isDirectionalLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const ce=I.shadow,fe=i.get(I);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,s.directionalShadow[v]=fe,s.directionalShadowMap[v]=z,s.directionalShadowMatrix[v]=I.shadow.matrix,E++}s.directional[v]=ne,v++}else if(I.isSpotLight){const ne=n.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(V).multiplyScalar(H*M),ne.distance=Y,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,s.spot[p]=ne;const ce=I.shadow;if(I.map&&(s.spotLightMap[C]=I.map,C++,ce.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[p]=ce.matrix,I.castShadow){const fe=i.get(I);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,s.spotShadow[p]=fe,s.spotShadowMap[p]=z,T++}p++}else if(I.isRectAreaLight){const ne=n.get(I);ne.color.copy(V).multiplyScalar(H),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),s.rectArea[x]=ne,x++}else if(I.isPointLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const ce=I.shadow,fe=i.get(I);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,fe.shadowCameraNear=ce.camera.near,fe.shadowCameraFar=ce.camera.far,s.pointShadow[m]=fe,s.pointShadowMap[m]=z,s.pointShadowMatrix[m]=I.shadow.matrix,w++}s.point[m]=ne,m++}else if(I.isHemisphereLight){const ne=n.get(I);ne.skyColor.copy(I.color).multiplyScalar(H*M),ne.groundColor.copy(I.groundColor).multiplyScalar(H*M),s.hemi[_]=ne,_++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==x||N.hemiLength!==_||N.numDirectionalShadows!==E||N.numPointShadows!==w||N.numSpotShadows!==T||N.numSpotMaps!==C||N.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=T+C-L,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=S,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=x,N.hemiLength=_,N.numDirectionalShadows=E,N.numPointShadows=w,N.numSpotShadows=T,N.numSpotMaps=C,N.numLightProbes=S,s.version=pL++)}function c(h,u){let f=0,d=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const E=h[x];if(E.isDirectionalLight){const w=s.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),f++}else if(E.isSpotLight){const w=s.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const w=s.rectArea[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const w=s.point[d];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const w=s.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Vg(t,e){const n=new gL(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _L(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let l;return a===void 0?(l=new Vg(t,e),n.set(r,[l])):o>=a.length?(l=new Vg(t,e),a.push(l)):l=a[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class vL extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yL extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SL=`uniform sampler2D shadow_pass;
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
}`;function ML(t,e,n){let i=new Gd;const s=new Qe,r=new Qe,o=new _t,a=new vL({depthPacking:mA}),l=new yL,c={},h=n.maxTextureSize,u={[Ci]:pn,[pn]:Ci,[Ei]:Ei},f=new Ks({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:xL,fragmentShader:SL}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kv;let p=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(is),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=p!==vi&&this.type===vi,I=p===vi&&this.type!==vi;for(let V=0,H=T.length;V<H;V++){const Y=T[V],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();if(s.multiply(ne),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y)),z.map===null||q===!0||I===!0){const fe=this.type!==vi?{minFilter:nn,magFilter:nn}:{};z.map!==null&&z.map.dispose(),z.map=new Ys(s.x,s.y,fe),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ce=z.getViewportCount();for(let fe=0;fe<ce;fe++){const ge=z.getViewport(fe);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),O.viewport(o),z.updateMatrices(Y,fe),i=z.getFrustum(),E(C,L,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===vi&&x(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,N)};function x(T,C){const L=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ys(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,L,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,L,d,v,null)}function _(T,C,L,S){let M=null;const N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)M=N;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=M.uuid,q=C.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let V=I[q];V===void 0&&(V=M.clone(),I[q]=V,C.addEventListener("dispose",w)),M=V}if(M.visible=C.visible,M.wireframe=C.wireframe,S===vi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=t.properties.get(M);O.light=L}return M}function E(T,C,L,S,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const q=e.update(T),I=T.material;if(Array.isArray(I)){const V=q.groups;for(let H=0,Y=V.length;H<Y;H++){const z=V[H],ne=I[z.materialIndex];if(ne&&ne.visible){const ce=_(T,ne,S,M);T.onBeforeShadow(t,T,C,L,q,ce,z),t.renderBufferDirect(L,null,q,ce,T,z),T.onAfterShadow(t,T,C,L,q,ce,z)}}}else if(I.visible){const V=_(T,I,S,M);T.onBeforeShadow(t,T,C,L,q,V,null),t.renderBufferDirect(L,null,q,V,T,null),T.onAfterShadow(t,T,C,L,q,V,null)}}const O=T.children;for(let q=0,I=O.length;q<I;q++)E(O[q],C,L,S,M)}function w(T){T.target.removeEventListener("dispose",w);for(const L in c){const S=c[L],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function EL(t,e,n){const i=n.isWebGL2;function s(){let F=!1;const Me=new _t;let Ee=null;const Be=new _t(0,0,0,0);return{setMask:function(De){Ee!==De&&!F&&(t.colorMask(De,De,De,De),Ee=De)},setLocked:function(De){F=De},setClear:function(De,ht,ut,Ut,Jt){Jt===!0&&(De*=Ut,ht*=Ut,ut*=Ut),Me.set(De,ht,ut,Ut),Be.equals(Me)===!1&&(t.clearColor(De,ht,ut,Ut),Be.copy(Me))},reset:function(){F=!1,Ee=null,Be.set(-1,0,0,0)}}}function r(){let F=!1,Me=null,Ee=null,Be=null;return{setTest:function(De){De?re(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(De){Me!==De&&!F&&(t.depthMask(De),Me=De)},setFunc:function(De){if(Ee!==De){switch(De){case Ww:t.depthFunc(t.NEVER);break;case Xw:t.depthFunc(t.ALWAYS);break;case jw:t.depthFunc(t.LESS);break;case Vl:t.depthFunc(t.LEQUAL);break;case $w:t.depthFunc(t.EQUAL);break;case qw:t.depthFunc(t.GEQUAL);break;case Yw:t.depthFunc(t.GREATER);break;case Kw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=De}},setLocked:function(De){F=De},setClear:function(De){Be!==De&&(t.clearDepth(De),Be=De)},reset:function(){F=!1,Me=null,Ee=null,Be=null}}}function o(){let F=!1,Me=null,Ee=null,Be=null,De=null,ht=null,ut=null,Ut=null,Jt=null;return{setTest:function(ft){F||(ft?re(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(ft){Me!==ft&&!F&&(t.stencilMask(ft),Me=ft)},setFunc:function(ft,Qt,Zn){(Ee!==ft||Be!==Qt||De!==Zn)&&(t.stencilFunc(ft,Qt,Zn),Ee=ft,Be=Qt,De=Zn)},setOp:function(ft,Qt,Zn){(ht!==ft||ut!==Qt||Ut!==Zn)&&(t.stencilOp(ft,Qt,Zn),ht=ft,ut=Qt,Ut=Zn)},setLocked:function(ft){F=ft},setClear:function(ft){Jt!==ft&&(t.clearStencil(ft),Jt=ft)},reset:function(){F=!1,Me=null,Ee=null,Be=null,De=null,ht=null,ut=null,Ut=null,Jt=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,E=null,w=null,T=null,C=null,L=null,S=new Oe(0,0,0),M=0,N=!1,O=null,q=null,I=null,V=null,H=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ce)[1]),z=ne>=1):ce.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),z=ne>=2);let fe=null,ge={};const te=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Se=new _t().fromArray(te),be=new _t().fromArray(ue);function G(F,Me,Ee,Be){const De=new Uint8Array(4),ht=t.createTexture();t.bindTexture(F,ht),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ut=0;ut<Ee;ut++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(Me,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(Me+ut,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return ht}const le={};le[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(t.DEPTH_TEST),l.setFunc(Vl),ie(!1),b(Em),re(t.CULL_FACE),X(is);function re(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function he(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function Ae(F,Me){return d[F]!==Me?(t.bindFramebuffer(F,Me),d[F]=Me,i&&(F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Me),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Me)),!0):!1}function W(F,Me){let Ee=v,Be=!1;if(F)if(Ee=g.get(Me),Ee===void 0&&(Ee=[],g.set(Me,Ee)),F.isWebGLMultipleRenderTargets){const De=F.texture;if(Ee.length!==De.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let ht=0,ut=De.length;ht<ut;ht++)Ee[ht]=t.COLOR_ATTACHMENT0+ht;Ee.length=De.length,Be=!0}}else Ee[0]!==t.COLOR_ATTACHMENT0&&(Ee[0]=t.COLOR_ATTACHMENT0,Be=!0);else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Be=!0);Be&&(n.isWebGL2?t.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function R(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const P={[Es]:t.FUNC_ADD,[Rw]:t.FUNC_SUBTRACT,[Pw]:t.FUNC_REVERSE_SUBTRACT};if(i)P[wm]=t.MIN,P[Am]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(P[wm]=F.MIN_EXT,P[Am]=F.MAX_EXT)}const B={[Lw]:t.ZERO,[Iw]:t.ONE,[Dw]:t.SRC_COLOR,[mf]:t.SRC_ALPHA,[kw]:t.SRC_ALPHA_SATURATE,[Fw]:t.DST_COLOR,[Uw]:t.DST_ALPHA,[Nw]:t.ONE_MINUS_SRC_COLOR,[gf]:t.ONE_MINUS_SRC_ALPHA,[Bw]:t.ONE_MINUS_DST_COLOR,[Ow]:t.ONE_MINUS_DST_ALPHA,[Hw]:t.CONSTANT_COLOR,[Vw]:t.ONE_MINUS_CONSTANT_COLOR,[zw]:t.CONSTANT_ALPHA,[Gw]:t.ONE_MINUS_CONSTANT_ALPHA};function X(F,Me,Ee,Be,De,ht,ut,Ut,Jt,ft){if(F===is){p===!0&&(he(t.BLEND),p=!1);return}if(p===!1&&(re(t.BLEND),p=!0),F!==Cw){if(F!==x||ft!==N){if((_!==Es||T!==Es)&&(t.blendEquation(t.FUNC_ADD),_=Es,T=Es),ft)switch(F){case Br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pf:t.blendFunc(t.ONE,t.ONE);break;case bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,w=null,C=null,L=null,S.set(0,0,0),M=0,x=F,N=ft}return}De=De||Me,ht=ht||Ee,ut=ut||Be,(Me!==_||De!==T)&&(t.blendEquationSeparate(P[Me],P[De]),_=Me,T=De),(Ee!==E||Be!==w||ht!==C||ut!==L)&&(t.blendFuncSeparate(B[Ee],B[Be],B[ht],B[ut]),E=Ee,w=Be,C=ht,L=ut),(Ut.equals(S)===!1||Jt!==M)&&(t.blendColor(Ut.r,Ut.g,Ut.b,Jt),S.copy(Ut),M=Jt),x=F,N=!1}function J(F,Me){F.side===Ei?he(t.CULL_FACE):re(t.CULL_FACE);let Ee=F.side===pn;Me&&(Ee=!Ee),ie(Ee),F.blending===Br&&F.transparent===!1?X(is):X(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Be=F.stencilWrite;c.setTest(Be),Be&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),D(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){O!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),O=F)}function b(F){F!==bw?(re(t.CULL_FACE),F!==q&&(F===Em?t.cullFace(t.BACK):F===Tw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),q=F}function y(F){F!==I&&(z&&t.lineWidth(F),I=F)}function D(F,Me,Ee){F?(re(t.POLYGON_OFFSET_FILL),(V!==Me||H!==Ee)&&(t.polygonOffset(Me,Ee),V=Me,H=Ee)):he(t.POLYGON_OFFSET_FILL)}function k(F){F?re(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function $(F){F===void 0&&(F=t.TEXTURE0+Y-1),fe!==F&&(t.activeTexture(F),fe=F)}function K(F,Me,Ee){Ee===void 0&&(fe===null?Ee=t.TEXTURE0+Y-1:Ee=fe);let Be=ge[Ee];Be===void 0&&(Be={type:void 0,texture:void 0},ge[Ee]=Be),(Be.type!==F||Be.texture!==Me)&&(fe!==Ee&&(t.activeTexture(Ee),fe=Ee),t.bindTexture(F,Me||le[F]),Be.type=F,Be.texture=Me)}function ae(){const F=ge[fe];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(F){Se.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Se.copy(F))}function Xe(F){be.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),be.copy(F))}function pt(F,Me){let Ee=u.get(Me);Ee===void 0&&(Ee=new WeakMap,u.set(Me,Ee));let Be=Ee.get(F);Be===void 0&&(Be=t.getUniformBlockIndex(Me,F.name),Ee.set(F,Be))}function Ye(F,Me){const Be=u.get(Me).get(F);h.get(Me)!==Be&&(t.uniformBlockBinding(Me,Be,F.__bindingPointIndex),h.set(Me,Be))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},fe=null,ge={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,E=null,w=null,T=null,C=null,L=null,S=new Oe(0,0,0),M=0,N=!1,O=null,q=null,I=null,V=null,H=null,Se.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:re,disable:he,bindFramebuffer:Ae,drawBuffers:W,useProgram:R,setBlending:X,setMaterial:J,setFlipSided:ie,setCullFace:b,setLineWidth:y,setPolygonOffset:D,setScissorTest:k,activeTexture:$,bindTexture:K,unbindTexture:ae,compressedTexImage2D:se,compressedTexImage3D:de,texImage2D:Pe,texImage3D:Re,updateUBOMapping:pt,uniformBlockBinding:Ye,texStorage2D:He,texStorage3D:Fe,texSubImage2D:xe,texSubImage3D:Ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:We,scissor:Ie,viewport:Xe,reset:ve}}function bL(t,e,n,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return d?new OffscreenCanvas(b,y):Qo("canvas")}function v(b,y,D,k){let $=1;if((b.width>k||b.height>k)&&($=k/Math.max(b.width,b.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const K=y?Sf:Math.floor,ae=K($*b.width),se=K($*b.height);u===void 0&&(u=g(ae,se));const de=D?g(ae,se):u;return de.width=ae,de.height=se,de.getContext("2d").drawImage(b,0,0,ae,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ae+"x"+se+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ig(b.width)&&ig(b.height)}function p(b){return a?!1:b.wrapS!==Wn||b.wrapT!==Wn||b.minFilter!==nn&&b.minFilter!==Ln}function x(b,y){return b.generateMipmaps&&y&&b.minFilter!==nn&&b.minFilter!==Ln}function _(b){t.generateMipmap(b)}function E(b,y,D,k,$=!1){if(a===!1)return y;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=y;if(y===t.RED&&(D===t.FLOAT&&(K=t.R32F),D===t.HALF_FLOAT&&(K=t.R16F),D===t.UNSIGNED_BYTE&&(K=t.R8)),y===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(K=t.R8UI),D===t.UNSIGNED_SHORT&&(K=t.R16UI),D===t.UNSIGNED_INT&&(K=t.R32UI),D===t.BYTE&&(K=t.R8I),D===t.SHORT&&(K=t.R16I),D===t.INT&&(K=t.R32I)),y===t.RG&&(D===t.FLOAT&&(K=t.RG32F),D===t.HALF_FLOAT&&(K=t.RG16F),D===t.UNSIGNED_BYTE&&(K=t.RG8)),y===t.RGBA){const ae=$?zl:ct.getTransfer(k);D===t.FLOAT&&(K=t.RGBA32F),D===t.HALF_FLOAT&&(K=t.RGBA16F),D===t.UNSIGNED_BYTE&&(K=ae===mt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(b,y,D){return x(b,D)===!0||b.isFramebufferTexture&&b.minFilter!==nn&&b.minFilter!==Ln?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===nn||b===Cm||b===Jh?t.NEAREST:t.LINEAR}function C(b){const y=b.target;y.removeEventListener("dispose",C),S(y),y.isVideoTexture&&h.delete(y)}function L(b){const y=b.target;y.removeEventListener("dispose",L),N(y)}function S(b){const y=i.get(b);if(y.__webglInit===void 0)return;const D=b.source,k=f.get(D);if(k){const $=k[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(b),Object.keys(k).length===0&&f.delete(D)}i.remove(b)}function M(b){const y=i.get(b);t.deleteTexture(y.__webglTexture);const D=b.source,k=f.get(D);delete k[y.__cacheKey],o.memory.textures--}function N(b){const y=b.texture,D=i.get(b),k=i.get(y);if(k.__webglTexture!==void 0&&(t.deleteTexture(k.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(D.__webglFramebuffer[$]))for(let K=0;K<D.__webglFramebuffer[$].length;K++)t.deleteFramebuffer(D.__webglFramebuffer[$][K]);else t.deleteFramebuffer(D.__webglFramebuffer[$]);D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer[$])}else{if(Array.isArray(D.__webglFramebuffer))for(let $=0;$<D.__webglFramebuffer.length;$++)t.deleteFramebuffer(D.__webglFramebuffer[$]);else t.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&t.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let $=0;$<D.__webglColorRenderbuffer.length;$++)D.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(D.__webglColorRenderbuffer[$]);D.__webglDepthRenderbuffer&&t.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let $=0,K=y.length;$<K;$++){const ae=i.get(y[$]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(y[$])}i.remove(y),i.remove(b)}let O=0;function q(){O=0}function I(){const b=O;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),O+=1,b}function V(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function H(b,y){const D=i.get(b);if(b.isVideoTexture&&J(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const k=b.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(D,b,y);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+y)}function Y(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){Se(D,b,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+y)}function z(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){Se(D,b,y);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+y)}function ne(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){be(D,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+y)}const ce={[dt]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[yf]:t.MIRRORED_REPEAT},fe={[nn]:t.NEAREST,[Cm]:t.NEAREST_MIPMAP_NEAREST,[Jh]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[rA]:t.LINEAR_MIPMAP_NEAREST,[Zo]:t.LINEAR_MIPMAP_LINEAR},ge={[_A]:t.NEVER,[EA]:t.ALWAYS,[vA]:t.LESS,[oy]:t.LEQUAL,[yA]:t.EQUAL,[MA]:t.GEQUAL,[xA]:t.GREATER,[SA]:t.NOTEQUAL};function te(b,y,D){if(D?(t.texParameteri(b,t.TEXTURE_WRAP_S,ce[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ce[y.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ce[y.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,fe[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,fe[y.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==Wn||y.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(y.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==nn&&y.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===nn||y.minFilter!==Jh&&y.minFilter!==Zo||y.type===es&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Jo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ue(b,y){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",C));const k=y.source;let $=f.get(k);$===void 0&&($={},f.set(k,$));const K=V(y);if(K!==b.__cacheKey){$[K]===void 0&&($[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[K].usedTimes++;const ae=$[b.__cacheKey];ae!==void 0&&($[b.__cacheKey].usedTimes--,ae.usedTimes===0&&M(y)),b.__cacheKey=K,b.__webglTexture=$[K].texture}return D}function Se(b,y,D){let k=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=t.TEXTURE_3D);const $=ue(b,y),K=y.source;n.bindTexture(k,b.__webglTexture,t.TEXTURE0+D);const ae=i.get(K);if(K.version!==ae.__version||$===!0){n.activeTexture(t.TEXTURE0+D);const se=ct.getPrimaries(ct.workingColorSpace),de=y.colorSpace===Dn?null:ct.getPrimaries(y.colorSpace),xe=y.colorSpace===Dn||se===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ce=p(y)&&m(y.image)===!1;let oe=v(y.image,Ce,!1,s.maxTextureSize);oe=ie(y,oe);const We=m(oe)||a,He=r.convert(y.format,y.colorSpace);let Fe=r.convert(y.type),Pe=E(y.internalFormat,He,Fe,y.colorSpace,y.isVideoTexture);te(k,y,We);let Re;const Ie=y.mipmaps,Xe=a&&y.isVideoTexture!==!0&&Pe!==sy,pt=ae.__version===void 0||$===!0,Ye=w(y,oe,We);if(y.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?y.type===es?Pe=t.DEPTH_COMPONENT32F:y.type===Qi?Pe=t.DEPTH_COMPONENT24:y.type===Hs?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:y.type===es&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Vs&&Pe===t.DEPTH_COMPONENT&&y.type!==Vd&&y.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Qi,Fe=r.convert(y.type)),y.format===Qr&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,y.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Hs,Fe=r.convert(y.type))),pt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,Pe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,oe.width,oe.height,0,He,Fe,null));else if(y.isDataTexture)if(Ie.length>0&&We){Xe&&pt&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,Ie[0].width,Ie[0].height);for(let ve=0,F=Ie.length;ve<F;ve++)Re=Ie[ve],Xe?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,He,Fe,Re.data):n.texImage2D(t.TEXTURE_2D,ve,Pe,Re.width,Re.height,0,He,Fe,Re.data);y.generateMipmaps=!1}else Xe?(pt&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,He,Fe,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,oe.width,oe.height,0,He,Fe,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,Pe,Ie[0].width,Ie[0].height,oe.depth);for(let ve=0,F=Ie.length;ve<F;ve++)Re=Ie[ve],y.format!==Xn?He!==null?Xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,oe.depth,He,Re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Pe,Re.width,Re.height,oe.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,oe.depth,He,Fe,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Pe,Re.width,Re.height,oe.depth,0,He,Fe,Re.data)}else{Xe&&pt&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,Ie[0].width,Ie[0].height);for(let ve=0,F=Ie.length;ve<F;ve++)Re=Ie[ve],y.format!==Xn?He!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,He,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Pe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,He,Fe,Re.data):n.texImage2D(t.TEXTURE_2D,ve,Pe,Re.width,Re.height,0,He,Fe,Re.data)}else if(y.isDataArrayTexture)Xe?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,Pe,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,He,Fe,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,He,Fe,oe.data);else if(y.isData3DTexture)Xe?(pt&&n.texStorage3D(t.TEXTURE_3D,Ye,Pe,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,He,Fe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,He,Fe,oe.data);else if(y.isFramebufferTexture){if(pt)if(Xe)n.texStorage2D(t.TEXTURE_2D,Ye,Pe,oe.width,oe.height);else{let ve=oe.width,F=oe.height;for(let Me=0;Me<Ye;Me++)n.texImage2D(t.TEXTURE_2D,Me,Pe,ve,F,0,He,Fe,null),ve>>=1,F>>=1}}else if(Ie.length>0&&We){Xe&&pt&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,Ie[0].width,Ie[0].height);for(let ve=0,F=Ie.length;ve<F;ve++)Re=Ie[ve],Xe?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,He,Fe,Re):n.texImage2D(t.TEXTURE_2D,ve,Pe,He,Fe,Re);y.generateMipmaps=!1}else Xe?(pt&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Fe,oe)):n.texImage2D(t.TEXTURE_2D,0,Pe,He,Fe,oe);x(y,We)&&_(k),ae.__version=K.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function be(b,y,D){if(y.image.length!==6)return;const k=ue(b,y),$=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+D);const K=i.get($);if($.version!==K.__version||k===!0){n.activeTexture(t.TEXTURE0+D);const ae=ct.getPrimaries(ct.workingColorSpace),se=y.colorSpace===Dn?null:ct.getPrimaries(y.colorSpace),de=y.colorSpace===Dn||ae===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let ve=0;ve<6;ve++)!xe&&!Ce?oe[ve]=v(y.image[ve],!1,!0,s.maxCubemapSize):oe[ve]=Ce?y.image[ve].image:y.image[ve],oe[ve]=ie(y,oe[ve]);const We=oe[0],He=m(We)||a,Fe=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),Re=E(y.internalFormat,Fe,Pe,y.colorSpace),Ie=a&&y.isVideoTexture!==!0,Xe=K.__version===void 0||k===!0;let pt=w(y,We,He);te(t.TEXTURE_CUBE_MAP,y,He);let Ye;if(xe){Ie&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Re,We.width,We.height);for(let ve=0;ve<6;ve++){Ye=oe[ve].mipmaps;for(let F=0;F<Ye.length;F++){const Me=Ye[F];y.format!==Xn?Fe!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,Me.width,Me.height,Fe,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,Me.width,Me.height,Fe,Pe,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Re,Me.width,Me.height,0,Fe,Pe,Me.data)}}}else{Ye=y.mipmaps,Ie&&Xe&&(Ye.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Re,oe[0].width,oe[0].height));for(let ve=0;ve<6;ve++)if(Ce){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,oe[ve].width,oe[ve].height,Fe,Pe,oe[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,oe[ve].width,oe[ve].height,0,Fe,Pe,oe[ve].data);for(let F=0;F<Ye.length;F++){const Ee=Ye[F].image[ve].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,Ee.width,Ee.height,Fe,Pe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Re,Ee.width,Ee.height,0,Fe,Pe,Ee.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Fe,Pe,oe[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,Fe,Pe,oe[ve]);for(let F=0;F<Ye.length;F++){const Me=Ye[F];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,Fe,Pe,Me.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Re,Fe,Pe,Me.image[ve])}}}x(y,He)&&_(t.TEXTURE_CUBE_MAP),K.__version=$.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function G(b,y,D,k,$,K){const ae=r.convert(D.format,D.colorSpace),se=r.convert(D.type),de=E(D.internalFormat,ae,se,D.colorSpace);if(!i.get(y).__hasExternalTextures){const Ce=Math.max(1,y.width>>K),oe=Math.max(1,y.height>>K);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,K,de,Ce,oe,y.depth,0,ae,se,null):n.texImage2D($,K,de,Ce,oe,0,ae,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),X(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,$,i.get(D).__webglTexture,0,B(y)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,$,i.get(D).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,y,D){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let k=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(D||X(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===es?k=t.DEPTH_COMPONENT32F:$.type===Qi&&(k=t.DEPTH_COMPONENT24));const K=B(y);X(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,k,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,K,k,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,k,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const k=B(y);D&&X(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,k,t.DEPTH24_STENCIL8,y.width,y.height):X(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const k=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<k.length;$++){const K=k[$],ae=r.convert(K.format,K.colorSpace),se=r.convert(K.type),de=E(K.internalFormat,ae,se,K.colorSpace),xe=B(y);D&&X(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,de,y.width,y.height):X(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,de,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,de,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const k=i.get(y.depthTexture).__webglTexture,$=B(y);if(y.depthTexture.format===Vs)X(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0);else if(y.depthTexture.format===Qr)X(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function he(b){const y=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");re(y.__webglFramebuffer,b)}else if(D){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]=t.createRenderbuffer(),le(y.__webglDepthbuffer[k],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),le(y.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(b,y,D){const k=i.get(b);y!==void 0&&G(k.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&he(b)}function W(b){const y=b.texture,D=i.get(b),k=i.get(y);b.addEventListener("dispose",L),b.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=y.version,o.memory.textures++);const $=b.isWebGLCubeRenderTarget===!0,K=b.isWebGLMultipleRenderTargets===!0,ae=m(b)||a;if($){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let de=0;de<y.mipmaps.length;de++)D.__webglFramebuffer[se][de]=t.createFramebuffer()}else D.__webglFramebuffer[se]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)D.__webglFramebuffer[se]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(K)if(s.drawBuffers){const se=b.texture;for(let de=0,xe=se.length;de<xe;de++){const Ce=i.get(se[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&X(b)===!1){const se=K?y:[y];D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const xe=se[de];D.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const Ce=r.convert(xe.format,xe.colorSpace),oe=r.convert(xe.type),We=E(xe.internalFormat,Ce,oe,xe.colorSpace,b.isXRRenderTarget===!0),He=B(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,We,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,D.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),le(D.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),te(t.TEXTURE_CUBE_MAP,y,ae);for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)G(D.__webglFramebuffer[se][de],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else G(D.__webglFramebuffer[se],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);x(y,ae)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(K){const se=b.texture;for(let de=0,xe=se.length;de<xe;de++){const Ce=se[de],oe=i.get(Ce);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),te(t.TEXTURE_2D,Ce,ae),G(D.__webglFramebuffer,b,Ce,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),x(Ce,ae)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,k.__webglTexture),te(se,y,ae),a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)G(D.__webglFramebuffer[de],b,y,t.COLOR_ATTACHMENT0,se,de);else G(D.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,se,0);x(y,ae)&&_(se),n.unbindTexture()}b.depthBuffer&&he(b)}function R(b){const y=m(b)||a,D=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let k=0,$=D.length;k<$;k++){const K=D[k];if(x(K,y)){const ae=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(K).__webglTexture;n.bindTexture(ae,se),_(ae),n.unbindTexture()}}}function P(b){if(a&&b.samples>0&&X(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],D=b.width,k=b.height;let $=t.COLOR_BUFFER_BIT;const K=[],ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let xe=0;xe<y.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){K.push(t.COLOR_ATTACHMENT0+xe),b.depthBuffer&&K.push(ae);const Ce=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ce===!1&&(b.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[xe]),Ce===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ae])),de){const oe=i.get(y[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,D,k,0,0,D,k,$,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<y.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const Ce=i.get(y[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function B(b){return Math.min(s.maxSamples,b.samples)}function X(b){const y=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function J(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function ie(b,y){const D=b.colorSpace,k=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===xf||D!==Ri&&D!==Dn&&(ct.getTransfer(D)===mt?a===!1?e.has("EXT_sRGB")===!0&&k===Xn?(b.format=xf,b.minFilter=Ln,b.generateMipmaps=!1):y=ly.sRGBToLinear(y):(k!==Xn||$!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}this.allocateTextureUnit=I,this.resetTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=ne,this.rebindTextures=Ae,this.setupRenderTarget=W,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=G,this.useMultisampledRTT=X}function TL(t,e,n){const i=n.isWebGL2;function s(r,o=Dn){let a;const l=ct.getTransfer(o);if(r===rs)return t.UNSIGNED_BYTE;if(r===Qv)return t.UNSIGNED_SHORT_4_4_4_4;if(r===ey)return t.UNSIGNED_SHORT_5_5_5_1;if(r===oA)return t.BYTE;if(r===aA)return t.SHORT;if(r===Vd)return t.UNSIGNED_SHORT;if(r===Jv)return t.INT;if(r===Qi)return t.UNSIGNED_INT;if(r===es)return t.FLOAT;if(r===Jo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===lA)return t.ALPHA;if(r===Xn)return t.RGBA;if(r===cA)return t.LUMINANCE;if(r===hA)return t.LUMINANCE_ALPHA;if(r===Vs)return t.DEPTH_COMPONENT;if(r===Qr)return t.DEPTH_STENCIL;if(r===xf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===uA)return t.RED;if(r===ty)return t.RED_INTEGER;if(r===fA)return t.RG;if(r===ny)return t.RG_INTEGER;if(r===iy)return t.RGBA_INTEGER;if(r===Qh||r===eu||r===tu||r===nu)if(l===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rm||r===Pm||r===Lm||r===Im)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Rm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Im)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Dm||r===Nm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Dm)return l===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Um||r===Om||r===Fm||r===Bm||r===km||r===Hm||r===Vm||r===zm||r===Gm||r===Wm||r===Xm||r===jm||r===$m||r===qm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Um)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Om)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===km)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$m)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qm)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===iu||r===Ym||r===Km)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===iu)return l===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ym)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Km)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dA||r===Zm||r===Jm||r===Qm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===iu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class wL extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Mo=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const AL={type:"move"};class Cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AL)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class CL extends ir{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=n.getContextAttributes();let m=null,p=null;const x=[],_=[],E=new Qe;let w=null;const T=new hn;T.layers.enable(1),T.viewport=new _t;const C=new hn;C.layers.enable(2),C.viewport=new _t;const L=[T,C],S=new wL;S.layers.enable(1),S.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=x[te];return ue===void 0&&(ue=new Cu,x[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=x[te];return ue===void 0&&(ue=new Cu,x[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=x[te];return ue===void 0&&(ue=new Cu,x[te]=ue),ue.getHandSpace()};function O(te){const ue=_.indexOf(te.inputSource);if(ue===-1)return;const Se=x[ue];Se!==void 0&&(Se.update(te.inputSource,te.frame,c||o),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",I);for(let te=0;te<x.length;te++){const ue=_[te];ue!==null&&(_[te]=null,x[te].disconnect(ue))}M=null,N=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ys(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,Se=null,be=null;v.depth&&(be=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=v.stencil?Qr:Vs,Se=v.stencil?Hs:Qi);const G={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(s,n),f=u.createProjectionLayer(G),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Ys(f.textureWidth,f.textureHeight,{format:Xn,type:rs,depthTexture:new yy(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const le=e.properties.get(p);le.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(te){for(let ue=0;ue<te.removed.length;ue++){const Se=te.removed[ue],be=_.indexOf(Se);be>=0&&(_[be]=null,x[be].disconnect(Se))}for(let ue=0;ue<te.added.length;ue++){const Se=te.added[ue];let be=_.indexOf(Se);if(be===-1){for(let le=0;le<x.length;le++)if(le>=_.length){_.push(Se),be=le;break}else if(_[le]===null){_[le]=Se,be=le;break}if(be===-1)break}const G=x[be];G&&G.connect(Se)}}const V=new U,H=new U;function Y(te,ue,Se){V.setFromMatrixPosition(ue.matrixWorld),H.setFromMatrixPosition(Se.matrixWorld);const be=V.distanceTo(H),G=ue.projectionMatrix.elements,le=Se.projectionMatrix.elements,re=G[14]/(G[10]-1),he=G[14]/(G[10]+1),Ae=(G[9]+1)/G[5],W=(G[9]-1)/G[5],R=(G[8]-1)/G[0],P=(le[8]+1)/le[0],B=re*R,X=re*P,J=be/(-R+P),ie=J*-R;ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ie),te.translateZ(J),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const b=re+J,y=he+J,D=B-ie,k=X+(be-ie),$=Ae*he/y*b,K=W*he/y*b;te.projectionMatrix.makePerspective(D,k,$,K,b,y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function z(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;S.near=C.near=T.near=te.near,S.far=C.far=T.far=te.far,(M!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,N=S.far);const ue=te.parent,Se=S.cameras;z(S,ue);for(let be=0;be<Se.length;be++)z(Se[be],ue);Se.length===2?Y(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),ne(te,S,ue)};function ne(te,ue,Se){Se===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=jl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)};let ce=null;function fe(te,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){const Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let be=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,be=!0);for(let G=0;G<Se.length;G++){const le=Se[G];let re=null;if(d!==null)re=d.getViewport(le);else{const Ae=u.getViewSubImage(f,le);re=Ae.viewport,G===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let he=L[G];he===void 0&&(he=new hn,he.layers.enable(G),he.viewport=new _t,L[G]=he),he.matrix.fromArray(le.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(le.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(re.x,re.y,re.width,re.height),G===0&&(S.matrix.copy(he.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),be===!0&&S.cameras.push(he)}}for(let Se=0;Se<x.length;Se++){const be=_[Se],G=x[Se];be!==null&&G!==void 0&&G.update(be,ue,c||o)}ce&&ce(te,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const ge=new vy;ge.setAnimationLoop(fe),this.setAnimationLoop=function(te){ce=te},this.dispose=function(){}}}function RL(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,my(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PL(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const E=_.program;i.uniformBlockBinding(x,E)}function c(x,_){let E=s[x.id];E===void 0&&(g(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(x,w);const T=e.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){const _=u();x.__bindingPointIndex=_;const E=t.createBuffer(),w=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=s[x.id],E=x.uniforms,w=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=E.length;T<C;T++){const L=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,M=L.length;S<M;S++){const N=L[S];if(d(N,T,S,w)===!0){const O=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let V=0;V<q.length;V++){const H=q[V],Y=v(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,O+I,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(x,_,E,w){const T=x.value,C=_+"_"+E;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const L=w[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return w[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(x){const _=x.uniforms;let E=0;const w=16;for(let C=0,L=_.length;C<L;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,N=S.length;M<N;M++){const O=S[M],q=Array.isArray(O.value)?O.value:[O.value];for(let I=0,V=q.length;I<V;I++){const H=q[I],Y=v(H),z=E%w;z!==0&&w-z<Y.boundary&&(E+=w-z),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Y.storage}}}const T=E%w;return T>0&&(E+=w-T),x.__size=E,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ty{constructor(e={}){const{canvas:n=TA(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=ss,this.toneMappingExposure=1;const _=this;let E=!1,w=0,T=0,C=null,L=-1,S=null;const M=new _t,N=new _t;let O=null;const q=new Oe(0);let I=0,V=n.width,H=n.height,Y=1,z=null,ne=null;const ce=new _t(0,0,V,H),fe=new _t(0,0,V,H);let ge=!1;const te=new Gd;let ue=!1,Se=!1,be=null;const G=new Tt,le=new Qe,re=new U,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return C===null?Y:1}let W=i;function R(A,j){for(let Q=0;Q<A.length;Q++){const ee=A[Q],Z=n.getContext(ee,j);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hd}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",Me,!1),W===null){const j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),W=R(j,A),W===null)throw R(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let P,B,X,J,ie,b,y,D,k,$,K,ae,se,de,xe,Ce,oe,We,He,Fe,Pe,Re,Ie,Xe;function pt(){P=new HR(W),B=new DR(W,P,e),P.init(B),Re=new TL(W,P,B),X=new EL(W,P,B),J=new GR(W),ie=new cL,b=new bL(W,P,X,ie,B,Re,J),y=new UR(_),D=new kR(_),k=new KA(W,B),Ie=new LR(W,P,k,B),$=new VR(W,k,J,Ie),K=new $R(W,$,k,J),He=new jR(W,B,b),Ce=new NR(ie),ae=new lL(_,y,D,P,B,Ie,Ce),se=new RL(_,ie),de=new uL,xe=new _L(P,B),We=new PR(_,y,D,X,K,f,l),oe=new ML(_,K,B),Xe=new PL(W,J,B,X),Fe=new IR(W,P,J,B),Pe=new zR(W,P,J,B),J.programs=ae.programs,_.capabilities=B,_.extensions=P,_.properties=ie,_.renderLists=de,_.shadowMap=oe,_.state=X,_.info=J}pt();const Ye=new CL(_,W);this.xr=Ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=P.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=P.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(V,H,!1))},this.getSize=function(A){return A.set(V,H)},this.setSize=function(A,j,Q=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,H=j,n.width=Math.floor(A*Y),n.height=Math.floor(j*Y),Q===!0&&(n.style.width=A+"px",n.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(V*Y,H*Y).floor()},this.setDrawingBufferSize=function(A,j,Q){V=A,H=j,Y=Q,n.width=Math.floor(A*Q),n.height=Math.floor(j*Q),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,j,Q,ee){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,j,Q,ee),X.viewport(M.copy(ce).multiplyScalar(Y).floor())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,j,Q,ee){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,j,Q,ee),X.scissor(N.copy(fe).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){X.setScissorTest(ge=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(A=!0,j=!0,Q=!0){let ee=0;if(A){let Z=!1;if(C!==null){const we=C.texture.format;Z=we===iy||we===ny||we===ty}if(Z){const we=C.texture.type,Le=we===rs||we===Qi||we===Vd||we===Hs||we===Qv||we===ey,Ne=We.getClearColor(),ke=We.getClearAlpha(),qe=Ne.r,Ve=Ne.g,Ge=Ne.b;Le?(d[0]=qe,d[1]=Ve,d[2]=Ge,d[3]=ke,W.clearBufferuiv(W.COLOR,0,d)):(g[0]=qe,g[1]=Ve,g[2]=Ge,g[3]=ke,W.clearBufferiv(W.COLOR,0,g))}else ee|=W.COLOR_BUFFER_BIT}j&&(ee|=W.DEPTH_BUFFER_BIT),Q&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),de.dispose(),xe.dispose(),ie.dispose(),y.dispose(),D.dispose(),K.dispose(),Ie.dispose(),Xe.dispose(),ae.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Jt),Ye.removeEventListener("sessionend",ft),be&&(be.dispose(),be=null),Qt.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=J.autoReset,j=oe.enabled,Q=oe.autoUpdate,ee=oe.needsUpdate,Z=oe.type;pt(),J.autoReset=A,oe.enabled=j,oe.autoUpdate=Q,oe.needsUpdate=ee,oe.type=Z}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ee(A){const j=A.target;j.removeEventListener("dispose",Ee),Be(j)}function Be(A){De(A),ie.remove(A)}function De(A){const j=ie.get(A).programs;j!==void 0&&(j.forEach(function(Q){ae.releaseProgram(Q)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,Q,ee,Z,we){j===null&&(j=he);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Yx(A,j,Q,ee,Z);X.setMaterial(ee,Le);let ke=Q.index,qe=1;if(ee.wireframe===!0){if(ke=$.getWireframeAttribute(Q),ke===void 0)return;qe=2}const Ve=Q.drawRange,Ge=Q.attributes.position;let wt=Ve.start*qe,gn=(Ve.start+Ve.count)*qe;we!==null&&(wt=Math.max(wt,we.start*qe),gn=Math.min(gn,(we.start+we.count)*qe)),ke!==null?(wt=Math.max(wt,0),gn=Math.min(gn,ke.count)):Ge!=null&&(wt=Math.max(wt,0),gn=Math.min(gn,Ge.count));const Ot=gn-wt;if(Ot<0||Ot===1/0)return;Ie.setup(Z,ee,Ne,Q,ke);let ai,yt=Fe;if(ke!==null&&(ai=k.get(ke),yt=Pe,yt.setIndex(ai)),Z.isMesh)ee.wireframe===!0?(X.setLineWidth(ee.wireframeLinewidth*Ae()),yt.setMode(W.LINES)):yt.setMode(W.TRIANGLES);else if(Z.isLine){let Ke=ee.linewidth;Ke===void 0&&(Ke=1),X.setLineWidth(Ke*Ae()),Z.isLineSegments?yt.setMode(W.LINES):Z.isLineLoop?yt.setMode(W.LINE_LOOP):yt.setMode(W.LINE_STRIP)}else Z.isPoints?yt.setMode(W.POINTS):Z.isSprite&&yt.setMode(W.TRIANGLES);if(Z.isBatchedMesh)yt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)yt.renderInstances(wt,Ot,Z.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Dh=Math.min(Q.instanceCount,Ke);yt.renderInstances(wt,Ot,Dh)}else yt.render(wt,Ot)};function ht(A,j,Q){A.transparent===!0&&A.side===Ei&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,Ea(A,j,Q),A.side=Ci,A.needsUpdate=!0,Ea(A,j,Q),A.side=Ei):Ea(A,j,Q)}this.compile=function(A,j,Q=null){Q===null&&(Q=A),m=xe.get(Q),m.init(),x.push(m),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(_._useLegacyLights);const ee=new Set;return A.traverse(function(Z){const we=Z.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ne=we[Le];ht(Ne,Q,Z),ee.add(Ne)}else ht(we,Q,Z),ee.add(we)}),x.pop(),m=null,ee},this.compileAsync=function(A,j,Q=null){const ee=this.compile(A,j,Q);return new Promise(Z=>{function we(){if(ee.forEach(function(Le){ie.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){Z(A);return}setTimeout(we,10)}P.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ut=null;function Ut(A){ut&&ut(A)}function Jt(){Qt.stop()}function ft(){Qt.start()}const Qt=new vy;Qt.setAnimationLoop(Ut),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(A){ut=A,Ye.setAnimationLoop(A),A===null?Qt.stop():Qt.start()},Ye.addEventListener("sessionstart",Jt),Ye.addEventListener("sessionend",ft),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(j),j=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,j,C),m=xe.get(A,x.length),m.init(),x.push(m),G.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),te.setFromProjectionMatrix(G),Se=this.localClippingEnabled,ue=Ce.init(this.clippingPlanes,Se),v=de.get(A,p.length),v.init(),p.push(v),Zn(A,j,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(z,ne),this.info.render.frame++,ue===!0&&Ce.beginShadows();const Q=m.state.shadowsArray;if(oe.render(Q,A,j),ue===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(v,A),m.setupLights(_._useLegacyLights),j.isArrayCamera){const ee=j.cameras;for(let Z=0,we=ee.length;Z<we;Z++){const Le=ee[Z];qd(v,A,Le,Le.viewport)}}else qd(v,A,j);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,j),Ie.resetDefaultState(),L=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Zn(A,j,Q,ee){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){ee&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);const Le=K.update(A),Ne=A.material;Ne.visible&&v.push(A,Le,Ne,Q,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Le=K.update(A),Ne=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),re.copy(Le.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(G)),Array.isArray(Ne)){const ke=Le.groups;for(let qe=0,Ve=ke.length;qe<Ve;qe++){const Ge=ke[qe],wt=Ne[Ge.materialIndex];wt&&wt.visible&&v.push(A,Le,wt,Q,re.z,Ge)}}else Ne.visible&&v.push(A,Le,Ne,Q,re.z,null)}}const we=A.children;for(let Le=0,Ne=we.length;Le<Ne;Le++)Zn(we[Le],j,Q,ee)}function qd(A,j,Q,ee){const Z=A.opaque,we=A.transmissive,Le=A.transparent;m.setupLightsView(Q),ue===!0&&Ce.setGlobalState(_.clippingPlanes,Q),we.length>0&&qx(Z,we,j,Q),ee&&X.viewport(M.copy(ee)),Z.length>0&&Ma(Z,j,Q),we.length>0&&Ma(we,j,Q),Le.length>0&&Ma(Le,j,Q),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function qx(A,j,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const we=B.isWebGL2;be===null&&(be=new Ys(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Jo:rs,minFilter:Zo,samples:we?4:0})),_.getDrawingBufferSize(le),we?be.setSize(le.x,le.y):be.setSize(Sf(le.x),Sf(le.y));const Le=_.getRenderTarget();_.setRenderTarget(be),_.getClearColor(q),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Ne=_.toneMapping;_.toneMapping=ss,Ma(A,Q,ee),b.updateMultisampleRenderTarget(be),b.updateRenderTargetMipmap(be);let ke=!1;for(let qe=0,Ve=j.length;qe<Ve;qe++){const Ge=j[qe],wt=Ge.object,gn=Ge.geometry,Ot=Ge.material,ai=Ge.group;if(Ot.side===Ei&&wt.layers.test(ee.layers)){const yt=Ot.side;Ot.side=pn,Ot.needsUpdate=!0,Yd(wt,Q,ee,gn,Ot,ai),Ot.side=yt,Ot.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(be),b.updateRenderTargetMipmap(be)),_.setRenderTarget(Le),_.setClearColor(q,I),_.toneMapping=Ne}function Ma(A,j,Q){const ee=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,we=A.length;Z<we;Z++){const Le=A[Z],Ne=Le.object,ke=Le.geometry,qe=ee===null?Le.material:ee,Ve=Le.group;Ne.layers.test(Q.layers)&&Yd(Ne,j,Q,ke,qe,Ve)}}function Yd(A,j,Q,ee,Z,we){A.onBeforeRender(_,j,Q,ee,Z,we),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(_,j,Q,ee,A,we),Z.transparent===!0&&Z.side===Ei&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,_.renderBufferDirect(Q,j,ee,Z,A,we),Z.side=Ci,Z.needsUpdate=!0,_.renderBufferDirect(Q,j,ee,Z,A,we),Z.side=Ei):_.renderBufferDirect(Q,j,ee,Z,A,we),A.onAfterRender(_,j,Q,ee,Z,we)}function Ea(A,j,Q){j.isScene!==!0&&(j=he);const ee=ie.get(A),Z=m.state.lights,we=m.state.shadowsArray,Le=Z.state.version,Ne=ae.getParameters(A,Z.state,we,j,Q),ke=ae.getProgramCacheKey(Ne);let qe=ee.programs;ee.environment=A.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(A.isMeshStandardMaterial?D:y).get(A.envMap||ee.environment),qe===void 0&&(A.addEventListener("dispose",Ee),qe=new Map,ee.programs=qe);let Ve=qe.get(ke);if(Ve!==void 0){if(ee.currentProgram===Ve&&ee.lightsStateVersion===Le)return Zd(A,Ne),Ve}else Ne.uniforms=ae.getUniforms(A),A.onBuild(Q,Ne,_),A.onBeforeCompile(Ne,_),Ve=ae.acquireProgram(Ne,ke),qe.set(ke,Ve),ee.uniforms=Ne.uniforms;const Ge=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Ce.uniform),Zd(A,Ne),ee.needsLights=Zx(A),ee.lightsStateVersion=Le,ee.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMap.value=Z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotShadowMap.value=Z.state.spotShadowMap,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMap.value=Z.state.pointShadowMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Ve,ee.uniformsList=null,Ve}function Kd(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=vl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Zd(A,j){const Q=ie.get(A);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Yx(A,j,Q,ee,Z){j.isScene!==!0&&(j=he),b.resetTextureUnits();const we=j.fog,Le=ee.isMeshStandardMaterial?j.environment:null,Ne=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ri,ke=(ee.isMeshStandardMaterial?D:y).get(ee.envMap||Le),qe=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ve=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!Q.morphAttributes.position,wt=!!Q.morphAttributes.normal,gn=!!Q.morphAttributes.color;let Ot=ss;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=_.toneMapping);const ai=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=ai!==void 0?ai.length:0,Ke=ie.get(ee),Dh=m.state.lights;if(ue===!0&&(Se===!0||A!==S)){const An=A===S&&ee.id===L;Ce.setState(ee,A,An)}let xt=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Dh.state.version||Ke.outputColorSpace!==Ne||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Ke.envMap!==ke||ee.fog===!0&&Ke.fog!==we||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ce.numPlanes||Ke.numIntersection!==Ce.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==Ve||Ke.morphTargets!==Ge||Ke.morphNormals!==wt||Ke.morphColors!==gn||Ke.toneMapping!==Ot||B.isWebGL2===!0&&Ke.morphTargetsCount!==yt)&&(xt=!0):(xt=!0,Ke.__version=ee.version);let cs=Ke.currentProgram;xt===!0&&(cs=Ea(ee,j,Z));let Jd=!1,lo=!1,Nh=!1;const Gt=cs.getUniforms(),hs=Ke.uniforms;if(X.useProgram(cs.program)&&(Jd=!0,lo=!0,Nh=!0),ee.id!==L&&(L=ee.id,lo=!0),Jd||S!==A){Gt.setValue(W,"projectionMatrix",A.projectionMatrix),Gt.setValue(W,"viewMatrix",A.matrixWorldInverse);const An=Gt.map.cameraPosition;An!==void 0&&An.setValue(W,re.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&Gt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Gt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,lo=!0,Nh=!0)}if(Z.isSkinnedMesh){Gt.setOptional(W,Z,"bindMatrix"),Gt.setOptional(W,Z,"bindMatrixInverse");const An=Z.skeleton;An&&(B.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Gt.setValue(W,"boneTexture",An.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Gt.setOptional(W,Z,"batchingTexture"),Gt.setValue(W,"batchingTexture",Z._matricesTexture,b));const Uh=Q.morphAttributes;if((Uh.position!==void 0||Uh.normal!==void 0||Uh.color!==void 0&&B.isWebGL2===!0)&&He.update(Z,Q,cs),(lo||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Gt.setValue(W,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(hs.envMap.value=ke,hs.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),lo&&(Gt.setValue(W,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&Kx(hs,Nh),we&&ee.fog===!0&&se.refreshFogUniforms(hs,we),se.refreshMaterialUniforms(hs,ee,Y,H,be),vl.upload(W,Kd(Ke),hs,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(vl.upload(W,Kd(Ke),hs,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Gt.setValue(W,"center",Z.center),Gt.setValue(W,"modelViewMatrix",Z.modelViewMatrix),Gt.setValue(W,"normalMatrix",Z.normalMatrix),Gt.setValue(W,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const An=ee.uniformsGroups;for(let Oh=0,Jx=An.length;Oh<Jx;Oh++)if(B.isWebGL2){const Qd=An[Oh];Xe.update(Qd,cs),Xe.bind(Qd,cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cs}function Kx(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Zx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,j,Q){ie.get(A.texture).__webglTexture=j,ie.get(A.depthTexture).__webglTexture=Q;const ee=ie.get(A);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,j){const Q=ie.get(A);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,Q=0){C=A,w=j,T=Q;let ee=!0,Z=null,we=!1,Le=!1;if(A){const ke=ie.get(A);ke.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(W.FRAMEBUFFER,null),ee=!1):ke.__webglFramebuffer===void 0?b.setupRenderTarget(A):ke.__hasExternalTextures&&b.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ve=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[j])?Z=Ve[j][Q]:Z=Ve[j],we=!0):B.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?Z=ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?Z=Ve[Q]:Z=Ve,M.copy(A.viewport),N.copy(A.scissor),O=A.scissorTest}else M.copy(ce).multiplyScalar(Y).floor(),N.copy(fe).multiplyScalar(Y).floor(),O=ge;if(X.bindFramebuffer(W.FRAMEBUFFER,Z)&&B.drawBuffers&&ee&&X.drawBuffers(A,Z),X.viewport(M),X.scissor(N),X.setScissorTest(O),we){const ke=ie.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,Q)}else if(Le){const ke=ie.get(A.texture),qe=j||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,ke.__webglTexture,Q||0,qe)}L=-1},this.readRenderTargetPixels=function(A,j,Q,ee,Z,we,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){X.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const ke=A.texture,qe=ke.format,Ve=ke.type;if(qe!==Xn&&Re.convert(qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===Jo&&(P.has("EXT_color_buffer_half_float")||B.isWebGL2&&P.has("EXT_color_buffer_float"));if(Ve!==rs&&Re.convert(Ve)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===es&&(B.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ee&&Q>=0&&Q<=A.height-Z&&W.readPixels(j,Q,ee,Z,Re.convert(qe),Re.convert(Ve),we)}finally{const ke=C!==null?ie.get(C).__webglFramebuffer:null;X.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(A,j,Q=0){const ee=Math.pow(2,-Q),Z=Math.floor(j.image.width*ee),we=Math.floor(j.image.height*ee);b.setTexture2D(j,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,A.x,A.y,Z,we),X.unbindTexture()},this.copyTextureToTexture=function(A,j,Q,ee=0){const Z=j.image.width,we=j.image.height,Le=Re.convert(Q.format),Ne=Re.convert(Q.type);b.setTexture2D(Q,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ee,A.x,A.y,Z,we,Le,Ne,j.image.data):j.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ee,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,Le,j.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ee,A.x,A.y,Le,Ne,j.image),ee===0&&Q.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(A,j,Q,ee,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=A.max.x-A.min.x+1,Le=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,ke=Re.convert(ee.format),qe=Re.convert(ee.type);let Ve;if(ee.isData3DTexture)b.setTexture3D(ee,0),Ve=W.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)b.setTexture2DArray(ee,0),Ve=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ee.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ee.unpackAlignment);const Ge=W.getParameter(W.UNPACK_ROW_LENGTH),wt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),gn=W.getParameter(W.UNPACK_SKIP_PIXELS),Ot=W.getParameter(W.UNPACK_SKIP_ROWS),ai=W.getParameter(W.UNPACK_SKIP_IMAGES),yt=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,yt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,A.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,A.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?W.texSubImage3D(Ve,Z,j.x,j.y,j.z,we,Le,Ne,ke,qe,yt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ve,Z,j.x,j.y,j.z,we,Le,Ne,ke,yt.data)):W.texSubImage3D(Ve,Z,j.x,j.y,j.z,we,Le,Ne,ke,qe,yt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ge),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,wt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,gn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ot),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ai),Z===0&&ee.generateMipmaps&&W.generateMipmap(Ve),X.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),X.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,X.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===io?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===Ah?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?zs:ry}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zs?gt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class LL extends Ty{}LL.prototype.isWebGL1Renderer=!0;class Xd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=n,this.far=i}clone(){return new Xd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class IL extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class yl extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zg=new U,Gg=new U,Wg=new Tt,Ru=new zd,al=new Sa;class DL extends kt{constructor(e=new Fn,n=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)zg.fromBufferAttribute(n,s-1),Gg.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=zg.distanceTo(Gg);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;Wg.copy(s).invert(),Ru.copy(e.ray).applyMatrix4(Wg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,f=new U,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=p,E=x-1;_<E;_+=d){const w=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,T),Ru.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||n.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,E=x-1;_<E;_+=d){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Ru.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||n.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Xg=new U,jg=new U;class $g extends DL{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Xg.fromBufferAttribute(n,s),jg.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xg.distanceTo(jg);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ar extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qg=new Tt,Ef=new zd,ll=new Sa,cl=new U;class No extends kt{constructor(e=new Fn,n=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;qg.copy(s).invert(),Ef.copy(e.ray).applyMatrix4(qg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);cl.fromBufferAttribute(u,m),Yg(cl,m,l,s,e,n,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++)cl.fromBufferAttribute(u,g),Yg(cl,g,l,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yg(t,e,n,i,s,r,o){const a=Ef.distanceSqToPoint(t);if(a<n){const l=new U;Ef.closestPointToPoint(t,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class yi extends rn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wy extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NL extends wy{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Lh extends Kn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cn extends Kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const $l={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class UL{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Ay=new UL;class oo{constructor(e){this.manager=e!==void 0?e:Ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class OL extends Error{constructor(e,n){super(e),this.response=n}}class Cy extends oo{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$l.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:n,onProgress:i,onError:s});return}mi[e]=[],mi[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=mi[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:E})=>{if(_)p.close();else{v+=E.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let T=0,C=h.length;T<C;T++){const L=h[T];L.onProgress&&L.onProgress(w)}p.enqueue(E),x()}})}}});return new Response(m)}else throw new OL(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{$l.add(e,c);const h=mi[e];delete mi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ry extends oo{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$l.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;const a=Qo("img");function l(){h(),$l.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Py extends oo{constructor(e){super(e)}load(e,n,i,s){const r=new rn,o=new Ry(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class jd extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Pu=new Tt,Kg=new U,Zg=new U;class Ly{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Kg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kg),Zg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zg),n.updateMatrixWorld(),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class FL extends Ly{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=jl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class BL extends jd{constructor(e,n,i=0,s=Math.PI/3,r=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new FL}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jg=new Tt,vo=new U,Lu=new U;class kL extends Ly{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(vo),Lu.copy(i.position),Lu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Lu),i.updateMatrixWorld(),s.makeTranslation(-vo.x,-vo.y,-vo.z),Jg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jg)}}class bf extends jd{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new kL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class HL extends jd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class VL{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,s=e.length;i<s;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);class Qg extends oo{constructor(e){super(e)}load(e,n,i,s){const r=this,o=this.path===""?VL.extractUrlBase(e):this.path,a=new Cy(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{n(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,n){const i=e.split(`
`);let s={};const r=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const h=c.indexOf(" ");let u=h>=0?c.substring(0,h):c;u=u.toLowerCase();let f=h>=0?c.substring(h+1):"";if(f=f.trim(),u==="newmtl")s={name:f},o[f]=s;else if(u==="ka"||u==="kd"||u==="ks"||u==="ke"){const d=f.split(r,3);s[u]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else s[u]=f}const a=new zL(this.resourcePath||n,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class zL{constructor(e="",n={}){this.baseUrl=e,this.options=n,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Ci,this.wrap=this.options.wrap!==void 0?this.options.wrap:dt}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const n={};for(const i in e){const s=e[i],r={};n[i]=r;for(const o in s){let a=!0,l=s[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(r[c]=l)}}return n}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const n in this.materialsInfo)this.materialsArray[e]=this.create(n),this.nameLookup[n]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const n=this,i=this.materialsInfo[e],s={name:e,side:this.side};function r(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(s[a])return;const c=n.getTextureParams(l,s),h=n.loadTexture(r(n.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=n.wrap,h.wrapT=n.wrap,(a==="map"||a==="emissiveMap")&&(h.colorSpace=gt),s[a]=h}for(const a in i){const l=i[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":s.color=new Oe().fromArray(l).convertSRGBToLinear();break;case"ks":s.specular=new Oe().fromArray(l).convertSRGBToLinear();break;case"ke":s.emissive=new Oe().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break}}return this.materials[e]=new Lh(s),this.materials[e]}getTextureParams(e,n){const i={scale:new Qe(1,1),offset:new Qe(0,0)},s=e.split(/\s+/);let r;return r=s.indexOf("-bm"),r>=0&&(n.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),i.url=s.join(" ").trim(),i}loadTexture(e,n,i,s,r){const o=this.manager!==void 0?this.manager:Ay;let a=o.getHandler(e);a===null&&(a=new Py(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,i,s,r);return n!==void 0&&(l.mapping=n),l}}const GL=/^[og]\s*(.+)?/,WL=/^mtllib /,XL=/^usemtl /,jL=/^usemap /,e_=/\s+/,t_=new U,Iu=new U,n_=new U,i_=new U,Pn=new U,hl=new Oe;function $L(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(e,n,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,n,i){const s=this.vertices,r=this.object.geometry.normals;t_.fromArray(s,e),Iu.fromArray(s,n),n_.fromArray(s,i),Pn.subVectors(n_,Iu),i_.subVectors(t_,Iu),Pn.cross(i_),Pn.normalize(),r.push(Pn.x,Pn.y,Pn.z),r.push(Pn.x,Pn.y,Pn.z),r.push(Pn.x,Pn.y,Pn.z)},addColor:function(e,n,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,n,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,i,s,r,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h),d=this.parseVertexIndex(i,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(s!==void 0&&s!==""){const g=this.uvs.length;u=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],n);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=n.length;r<o;r++)this.addUVLine(this.parseUVIndex(n[r],s))}};return t.startObject("",!1),t}class qL extends oo{constructor(e){super(e),this.materials=null}load(e,n,i,s){const r=this,o=new Cy(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const n=new $L;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(e_);switch(u[0]){case"v":n.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(hl.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),n.colors.push(hl.r,hl.g,hl.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":n.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(e_),d=[];for(let v=0,m=f.length;v<m;v++){const p=f[v];if(p.length>0){const x=p.split("/");d.push(x)}}const g=d[0];for(let v=1,m=d.length-1;v<m;v++){const p=d[v],x=d[v+1];n.addFace(g[0],p[0],x[0],g[1],p[1],x[1],g[2],p[2],x[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const d=[];if(c.indexOf("/")===-1)f=u;else for(let g=0,v=u.length;g<v;g++){const m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}n.addLineGeometry(f,d)}else if(h==="p"){const f=c.slice(1).trim().split(" ");n.addPointGeometry(f)}else if((s=GL.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);n.startObject(u)}else if(XL.test(c))n.object.startMaterial(c.substring(7).trim(),n.materialLibraries);else if(WL.test(c))n.materialLibraries.push(c.substring(7).trim());else if(jL.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();n.object.smooth=f!=="0"&&f!=="off"}else n.object.smooth=!0;const u=n.object.currentMaterial();u&&(u.smooth=n.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}n.finalize();const r=new Mo;if(r.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=n.objects.length;a<l;a++){const c=n.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",d=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const v=new Fn;v.setAttribute("position",new qt(h.vertices,3)),h.normals.length>0&&v.setAttribute("normal",new qt(h.normals,3)),h.colors.length>0&&(g=!0,v.setAttribute("color",new qt(h.colors,3))),h.hasUVIndices===!0&&v.setAttribute("uv",new qt(h.uvs,2));const m=[];for(let x=0,_=u.length;x<_;x++){const E=u[x],w=E.name+"_"+E.smooth+"_"+g;let T=n.materials[w];if(this.materials!==null){if(T=this.materials.create(E.name),f&&T&&!(T instanceof yl)){const C=new yl;Kn.prototype.copy.call(C,T),C.color.copy(T.color),T=C}else if(d&&T&&!(T instanceof Ar)){const C=new Ar({size:10,sizeAttenuation:!1});Kn.prototype.copy.call(C,T),C.color.copy(T.color),C.map=T.map,T=C}}T===void 0&&(f?T=new yl:d?T=new Ar({size:1,sizeAttenuation:!1}):T=new Lh,T.name=E.name,T.flatShading=!E.smooth,T.vertexColors=g,n.materials[w]=T),m.push(T)}let p;if(m.length>1){for(let x=0,_=u.length;x<_;x++){const E=u[x];v.addGroup(E.groupStart,E.groupCount,x)}f?p=new $g(v,m):d?p=new No(v,m):p=new dn(v,m)}else f?p=new $g(v,m[0]):d?p=new No(v,m[0]):p=new dn(v,m[0]);p.name=c.name,r.add(p)}else if(n.vertices.length>0){const a=new Ar({size:1,sizeAttenuation:!1}),l=new Fn;l.setAttribute("position",new qt(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(l.setAttribute("color",new qt(n.colors,3)),a.vertexColors=!0);const c=new No(l,a);r.add(c)}return r}}const YL="modulepreload",KL=function(t){return"/"+t},s_={},Sr=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=KL(o),o in s_)return;s_[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":YL,a||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),a)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};class ZL{constructor(){me(this,"list");me(this,"objLoader");this.list={},this.objLoader=new qL}load(e,n,i){if(!e)throw new Error("Please provide a key for the img you are loading");if(!n)throw new Error("Please provide a path for the img you are loading");const s=n.split("/"),r=s.pop()||"";return n=s.join("/"),n+="/",new Promise((o,a)=>{this.objLoader.setPath(n),i&&this.objLoader.setMaterials(i),this.objLoader.load(r,l=>{this.list[e]=l,l.key=e,l.destroy=()=>{delete this.list[l.key]},o(l)},l=>{console.log(l.loaded/l.total*100+"% loaded")},l=>{console.error("An error happened",l),a(l)})})}get(e){if(this.list[e])return this.list[e].clone()}}class JL{constructor(){me(this,"list");me(this,"imgLoader");this.list={},this.imgLoader=new Ry}load(e,n){if(!e)throw new Error("Please provide a key for the img you are loading");if(!n)throw new Error("Please provide a path for the img you are loading");const i=n.split("/"),s=i.pop()||"";return n=i.join("/"),n+="/",new Promise((r,o)=>{this.imgLoader.setPath(n).setCrossOrigin("*").load(s,a=>{this.list[e]=a,a.key=e,a.destroy=()=>{delete this.list[a.key]},r(a)},a=>{console.log(a.loaded/a.total*100+"% loaded")},a=>{console.error("An error happened",a),o(a)})})}get(e){if(this.list[e])return this.list[e]}}const Pi={UPDATE:{type:"update"},CREATE:{type:"create"}};var Lf,QL,ql,Iy;class ao{constructor(){_e(this,Lf);_e(this,ql);me(this,"three");me(this,"body");me(this,"_opacity");me(this,"preloadEntries");me(this,"config");me(this,"key")}set x(e){this.body.position.x=e}get x(){return this.body.position.x}set y(e){this.body.position.y=e}get y(){return this.body.position.y}set z(e){this.body.position.z=e}get z(){return this.body.position.z}async initialize(){await this.preload(),this.createBody(),this.createMaterials(),pe(this,ql,Iy).call(this),this.three.scene.add(this.body)}setScale(e=1,n,i){n==null&&(n=e),i==null&&(i=e),this.body.scale.set(e,n,i)}async preload(){this.preloadEntries&&this.preloadEntries.forEach(async e=>{await this.three[e.manager].load(e.key,e.url,e.material)})}createBody(){this.body=this.three.objManager.get(this.key)}createMaterials(){}set opacity(e){var n;this._opacity=e,(n=this.body)!=null&&n.children[0]&&this.body.children[0].material&&[this.body.children[0].material].flat().forEach(i=>{i.opacity=e})}get opacity(){return this._opacity}}Lf=new WeakSet,QL=function(){if(this.preloadEntries){const e=this.preloadEntries.find(n=>n.type=="model");if(e)this.key=e.key;else throw new Error("model was not found and key cannot be assigned from it")}else throw new Error("key was not assigned and at least one model must be defined in the preload entries")},ql=new WeakSet,Iy=function(){this.x=this.config.x||0,this.y=this.config.y||0,this.z=this.config.z||0};const Dy=()=>{let t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t};var Yl,Ny,Kl,Uy,Zl,Oy,ta,Tf;class e3 extends ao{constructor(n,i){super();_e(this,Yl);_e(this,Kl);_e(this,Zl);_e(this,ta);me(this,"three");me(this,"key");this.three=n,this.key="sigilObj",pe(this,Yl,Ny).call(this),pe(this,ta,Tf).call(this)}set visible(n){this.body.visible=n}get visible(){return this.body.visible}}Yl=new WeakSet,Ny=function(){pe(this,Kl,Uy).call(this),pe(this,Zl,Oy).call(this),pe(this,ta,Tf).call(this)},Kl=new WeakSet,Uy=function(){const n=this.three.texManager.get("grain"),i=this.three.texManager.get("grain_n"),s=this.three.texManager.get("grain_s"),r=this.three.renderer.capabilities.getMaxAnisotropy();n.wrapS=dt,n.wrapT=dt,n.anisotropy=1,i.colorSpace=gt,i.wrapS=dt,i.wrapT=dt,i.anisotropy=r,s.wrapS=dt,s.wrapT=dt;const o=1,a=1,l=.5;n.repeat.set(o*l,a*l),i.repeat.set(o*l,a*l),s.repeat.set(o*l,a*l);const c=new cn({color:16777215,map:n,normalMap:i,specularMap:s,transparent:!0});this.body=this.three.objManager.get(this.key),this.body.position.set(0,.2,-5),this.body.scale.set(.9,.9,.9),this.body.traverse(h=>{h instanceof dn&&(h.material=c)}),this.three.scene.add(this.body)},Zl=new WeakSet,Oy=function(){},ta=new WeakSet,Tf=function(){this.three.emitter.addEventListener(Pi.UPDATE.type,()=>{this.opacity!=0&&Dy()})};var Wi=(t=>(t[t.MAC_OS=1]="MAC_OS",t[t.IOS=2]="IOS",t[t.WINDOWS=3]="WINDOWS",t[t.ANDROID=4]="ANDROID",t[t.LINUX=5]="LINUX",t))(Wi||{});function t3(){const t=window.navigator.userAgent,e=window.navigator.platform,n=["Macintosh","MacIntel","MacPPC","Mac68K"],i=["Win32","Win64","Windows","WinCE"],s=["iPhone","iPad","iPod"];let r=Wi.WINDOWS;return!e&&!t?(console.error("Platform and userAgent not detected, setting platform to windows"),Wi.WINDOWS):(n.indexOf(e)!==-1?r=Wi.MAC_OS:s.indexOf(e)!==-1?r=Wi.IOS:i.indexOf(e)!==-1?r=Wi.WINDOWS:/Android/.test(t)?r=Wi.ANDROID:!r&&/Linux/.test(e)&&(r=Wi.LINUX),r)}class n3 extends BL{constructor(n){var i,s,r;super(n.color,n.intensity,n.distance,n.decay);me(this,"ticks");me(this,"initialTicks");me(this,"polarity");this.position.set(((i=n.position)==null?void 0:i.x)||0,((s=n.position)==null?void 0:s.y)||0,((r=n.position)==null?void 0:r.z)||0),this.ticks=5,this.initialTicks=5,this.polarity=n.polarity||1,this.castShadow=n.castShadow,this.shadow.mapSize.set(512,512),this.shadow.autoUpdate=!1}resetTicks(){this.ticks=this.initialTicks}}var Hr=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Hr.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Hr.Bounce.In(t*2)*.5:Hr.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),Cr=function(){return performance.now()},Fy=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=Cr()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!n;r&&r.update(e,o)===!1&&!n&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),Rs={Linear:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),r=Rs.Utils.Linear;return e<0?r(t[0],t[1],i):e>1?r(t[n],t[n-1],n-i):r(t[s],t[s+1>n?n:s+1],i-s)},Bezier:function(t,e){for(var n=0,i=t.length-1,s=Math.pow,r=Rs.Utils.Bernstein,o=0;o<=i;o++)n+=s(1-e,i-o)*s(e,o)*t[o]*r(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),r=Rs.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(i=n*(1+e))),r(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],i-s)):e<0?t[0]-(r(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(r(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):r(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],i-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=Rs.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,s){var r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}}},$d=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),wf=new Fy,i3=function(){function t(e,n){n===void 0&&(n=wf),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Hr.Linear.None,this._interpolationFunction=Rs.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=$d.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n<0?0:n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=Cr()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,s,r){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,h=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(h){var u=i[o];if(u.length===0)continue;for(var f=[a],d=0,g=u.length;d<g;d+=1){var v=this._handleRelativeValue(a,u[d]);if(isNaN(v)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}h&&(i[o]=f)}if((c==="object"||l)&&a&&!h){n[o]=l?[]:{};var m=a;for(var p in m)n[o][p]=m[p];s[o]=l?[]:{};var u=i[o];if(!this._isDynamic){var x={};for(var p in u)x[p]=u[p];i[o]=u=x}this._setupProperties(m,n[o],u,s[o],r)}else(typeof n[o]>"u"||r)&&(n[o]=a),l||(n[o]*=1),h?s[o]=i[o].slice().reverse():s[o]=n[o]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=Cr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=Cr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=wf),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Hr.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=Rs.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){var i=this,s;if(e===void 0&&(e=Cr()),n===void 0&&(n=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,h=function(){if(i._duration===0||a>c)return 1;var m=Math.trunc(a/l),p=a-m*l,x=Math.min(p/i._duration,1);return x===0&&a===i._duration?1:x},u=h(),f=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var d=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=d);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*d,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,v=this._chainedTweens.length;g<v;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,s){for(var r in i)if(n[r]!==void 0){var o=n[r]||0,a=i[r],l=Array.isArray(e[r]),c=Array.isArray(a),h=!l&&c;h?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),s3="23.1.1",r3=$d.nextId,oi=wf,o3=oi.getAll.bind(oi),a3=oi.removeAll.bind(oi),l3=oi.add.bind(oi),c3=oi.remove.bind(oi),h3=oi.update.bind(oi),Ji={Easing:Hr,Group:Fy,Interpolation:Rs,now:Cr,Sequence:$d,nextId:r3,Tween:i3,VERSION:s3,getAll:o3,removeAll:a3,add:l3,remove:c3,update:h3},Jl,By,Ps,Eo,na,Af,xi,xs,Ql,ky,ec,Hy,tc,Vy,nc,zy,ia,Cf,ic,Gy,sc,Wy,rc,Xy;class Du extends ao{constructor(n){super();_e(this,Jl);_e(this,Ps);_e(this,na);_e(this,xi);_e(this,Ql);_e(this,ec);_e(this,tc);_e(this,nc);_e(this,ia);_e(this,ic);_e(this,sc);_e(this,rc);me(this,"three");me(this,"key");me(this,"lightsArray");me(this,"concertLight1");me(this,"concertLight2");me(this,"concertLight3");me(this,"concertLight4");me(this,"strobeLight1");me(this,"strobeLight2");me(this,"cameraPosition");me(this,"cameraPositions");this.three=n,this.key="concertStage",this.lightsArray=[],this.initialPositionTriggered=!0,this.midPositionTriggered=!1,this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,Jl,By).call(this)}static isLoaded(n){return!!n.objManager.get("concertStage")}static async preload(n){await n.objManager.load("concertStage",`${n.LOCAL_PATH}static/3d/concertStage/concertStage.obj`)}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}set visible(n){this.body.visible=n,this.lightsArray.forEach(i=>i.visible=n)}get visible(){return this.body.visible}setVerticalPosition(n=0){this.body.position.y=n,this.lightsArray.forEach(i=>{i.initialY==null&&(i.initialY=i.position.y),i.position.y=i.initialY+n})}callInitialCameraPosition(){this.cameraPositions[0].triggered=!1,pe(this,ia,Cf).call(this,!0)}}Jl=new WeakSet,By=function(){pe(this,tc,Vy).call(this),pe(this,Ql,ky).call(this),pe(this,nc,zy).call(this)},Ps=new WeakSet,Eo=function(n,i=.005){const s=this.body.position.z;n.target.position.z+=i*n.polarity,n.target.position.z>s+1.5?(n.polarity*=-1,n.target.position.z=s+1.49):n.target.position.z<-1.5+s&&(n.polarity*=-1,n.target.position.z=-1.49+s)},na=new WeakSet,Af=function(n,i=30){this.body.visible&&(this.three.totalFrames%i==0?(n.visible=!0,n.resetTicks()):n.ticks<=0?(n.visible=!1,n.ticks=-1):n.ticks--)},xi=new WeakSet,xs=function(n=16777215,i=0,s=0,r=1,o){let a=30;n==255&&(a=300);const l=new n3({color:n,intensity:a,polarity:r,castShadow:o}),{x:c,y:h,z:u}=this.body.position;return l.position.set(i+c,1,.5+u),l.angle=.5,l.penumbra=.3,l.target.position.set(0+c,-1.5,s+u),this.lightsArray.push(l),this.three.scene.add(l),this.three.scene.add(l.target),l},Ql=new WeakSet,ky=function(){this.concertLight1=pe(this,xi,xs).call(this,16711680,-1.5,.5,1,!0),this.concertLight2=pe(this,xi,xs).call(this,11184640,-.75,.5,-1,!0),this.concertLight3=pe(this,xi,xs).call(this,255,.75,-.5,-1,!0),this.concertLight4=pe(this,xi,xs).call(this,14505216,1,-.5,1,!0),this.strobeLight1=pe(this,xi,xs).call(this,16777215,-1,0,0,!0),this.strobeLight1.angle=2,this.strobeLight2=pe(this,xi,xs).call(this,16777215,1,0,0,!0),this.strobeLight2.angle=2,this.lightsArray.forEach(n=>{n.shadow.needsUpdate=!0})},ec=new WeakSet,Hy=function(){const n=this.three.texManager.get("hardwood"),i=this.three.texManager.get("hardwood_n"),s=this.three.renderer.capabilities.getMaxAnisotropy();n.colorSpace=gt,n.wrapS=dt,n.wrapT=dt,n.anisotropy=1,i.colorSpace=gt,i.wrapS=dt,i.wrapT=dt,i.anisotropy=s;const r=1,o=1,a=4;n.repeat.set(r*a,o*a),i.repeat.set(r*a,o*a);const l=new Lh({color:14342874,transparent:!0,shininess:100}),c=new cn({color:16777215,map:n,reflectivity:1e4,transparent:!0}),h=new cn({color:16777215,transparent:!0});this.body.children[0].material[0]=l,this.body.children[0].material[1]=c;for(let u=2;u<this.body.children[0].material.length;u++)this.body.children[0].material[u]=h;this.body.children[0].material[1].color.r=.65,this.body.children[0].material[1].color.g=.4,this.body.children[0].material[1].color.b=.2},tc=new WeakSet,Vy=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.2,.2,.2),this.body.position.set(6,0,0),this.body.rotation.set(0,-Math.PI/2,0),pe(this,ec,Hy).call(this),this.body.traverse(n=>{n.castShadow=!0,n.receiveShadow=!0}),window.body=this.body,window.camera=this.three.camera,this.body.children[0].material[2].color.r=.1,this.body.children[0].material[2].color.g=.1,this.body.children[0].material[2].color.b=.1,this.body.children[0].material[5].color.r=.05,this.body.children[0].material[5].color.g=.05,this.body.children[0].material[5].color.b=.05,this.three.scene.add(this.body)},nc=new WeakSet,zy=function(){this.three.emitter.addEventListener(Pi.UPDATE.type,()=>{if(this.opacity==0)return;pe(this,Ps,Eo).call(this,this.concertLight1),pe(this,Ps,Eo).call(this,this.concertLight2),pe(this,Ps,Eo).call(this,this.concertLight3),pe(this,Ps,Eo).call(this,this.concertLight4),pe(this,na,Af).call(this,this.strobeLight1,100),pe(this,na,Af).call(this,this.strobeLight2,80),this.three.totalFrames%60==0&&this.lightsArray.forEach(i=>{i.shadow.needsUpdate=!0});const n=window.scrollY*window.devicePixelRatio;n<=10&&pe(this,ia,Cf).call(this),n>10&&n<1500&&pe(this,ic,Gy).call(this),n>1500&&n<3e3&&pe(this,sc,Wy).call(this),n>3e3&&n<4500&&pe(this,rc,Xy).call(this)})},ia=new WeakSet,Cf=function(n){this.isTriggered("initialPosition")&&!n||(this.triggerPosition("initialPosition"),this.three.camera.moveCamera({position:new U(0,0,0),rotation:new U(0,-Math.PI/2,0)},n))},ic=new WeakSet,Gy=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),this.three.camera.moveCamera({position:new U(4,0,2),rotation:new U(0,-Math.PI/2+1,0)}))},sc=new WeakSet,Wy=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),this.three.camera.moveCamera({position:new U(4,0,-2),rotation:new U(0,-1-Math.PI/2,0)}))},rc=new WeakSet,Xy=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),this.three.camera.moveCamera({position:new U(5,2,2),rotation:new U(-Math.PI/4,1.5-Math.PI/2,0)}))};class u3{constructor(){me(this,"list");me(this,"mtlLoader");this.list={},this.mtlLoader=new Qg}load(e,n){if(!e)throw new Error("Please provide a key for the mtl you are loading");if(!n)throw new Error("Please provide a path for the mtl you are loading");const i=n.split("/"),s=i.pop()||"";return n=i.join("/"),n+="/",new Promise((r,o)=>{new Qg().setPath(n).load(s,a=>{this.list[e]=a,a.key=e,a.destroy=()=>{delete this.list[a.key]},r(a)},a=>{console.log(a.loaded/a.total*100+"% loaded")},a=>{console.error("An error happened",a),o(a)})})}get(e){if(!this.list[e]){console.warn(`material .mtl with the key of ${e} not found in cache`);return}return this.list[e]}}var oc,jy,Si,Ss,ac,$y,lc,qy,cc,Yy,If,f3,hc,Ky,Ls,bo,uc,Zy,fc,Jy,dc,Qy,pc,ex;class Nu extends ao{constructor(n){super();_e(this,oc);_e(this,Si);_e(this,ac);_e(this,lc);_e(this,cc);_e(this,If);_e(this,hc);_e(this,Ls);_e(this,uc);_e(this,fc);_e(this,dc);_e(this,pc);me(this,"three");me(this,"key");me(this,"cameraPosition");me(this,"cameraPositions");this.three=n,this.key="shoppingCart",this.initialPositionTriggered=!0,this.midPositionTriggered=!1,this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,oc,jy).call(this)}static isLoaded(n){return[n.objManager.get("shoppingCart"),n.imgManager.get("shoppingCart"),n.imgManager.get("shoppingCart_n"),n.imgManager.get("shoppingCart_t"),n.imgManager.get("shoppingCart_ao"),n.imgManager.get("shoppingCart_r"),n.imgManager.get("shoppingCart_b")].every(i=>!!i)}static async preload(n){await n.objManager.load("shoppingCart",`${n.LOCAL_PATH}static/3d/shoppingCart/shoppingCart.obj`),await n.imgManager.load("shoppingCart",`${n.LOCAL_PATH}static/3d/shoppingCart/shoppingCart.webp`),await n.imgManager.load("shoppingCart_n",`${n.LOCAL_PATH}static/3d/shoppingCart/shoppingCart_n.webp`),await n.imgManager.load("shoppingCart_t",`${n.LOCAL_PATH}static/3d/shoppingCart/shoppingCart_t.webp`),await n.imgManager.load("shoppingCart_ao",`${n.LOCAL_PATH}static/3d/shoppingCart/shoppingCart_ao.webp`),await n.imgManager.load("shoppingCart_r",`${n.LOCAL_PATH}static/3d/shoppingCart/shoppingCart_r.webp`),await n.imgManager.load("shoppingCart_b",`${n.LOCAL_PATH}static/3d/shoppingCart/shoppingCart_b.webp`)}set visible(n){this.body.visible=n}get visible(){return this.body.visible}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}setVerticalPosition(n=0){this.body.position.y=n}}oc=new WeakSet,jy=function(){pe(this,lc,qy).call(this),pe(this,ac,$y).call(this),pe(this,hc,Ky).call(this)},Si=new WeakSet,Ss=function(n,i=1){const s=this.three.imgManager.get(n),r=new yi(s);return pe(this,cc,Yy).call(this,r,i),r},ac=new WeakSet,$y=function(){const n=this.three.renderer.capabilities.getMaxAnisotropy(),i=new NL({map:pe(this,Si,Ss).call(this,"shoppingCart",n),thicknessMap:pe(this,Si,Ss).call(this,"shoppingCart_t"),normalMap:pe(this,Si,Ss).call(this,"shoppingCart_n"),aoMap:pe(this,Si,Ss).call(this,"shoppingCart_ao"),roughnessMap:pe(this,Si,Ss).call(this,"shoppingCart_r"),bumpMap:pe(this,Si,Ss).call(this,"shoppingCart_b"),transparent:!0});this.body.children[0].material=i},lc=new WeakSet,qy=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.04,.04,.04),this.body.position.set(0,-1.3,-5),this.body.rotation.set(0,2,0),console.log(this.body),this.three.scene.add(this.body)},cc=new WeakSet,Yy=function(n,i=1){n.colorSpace=io,n.anisotropy=i},If=new WeakSet,f3=function(n,i=1,s=100){},hc=new WeakSet,Ky=function(){this.three.emitter.addEventListener(Pi.UPDATE.type,()=>{if(this.opacity==0)return;const n=window.scrollY*window.devicePixelRatio;n<=200&&pe(this,uc,Zy).call(this),n>200&&n<1500&&pe(this,fc,Jy).call(this),n>1500&&n<3e3&&pe(this,dc,Qy).call(this),n>3e3&&n<4500&&pe(this,pc,ex).call(this)})},Ls=new WeakSet,bo=function(n){var i;this.opacity<1||((i=this.moveTween)==null||i.stop(),this.moveTween=this.three.addTween({elements:this.three.camera,easing:Ji.Easing.Quadratic.InOut,duration:2e3,position:n.position,rotation:n.rotation}))},uc=new WeakSet,Zy=function(){this.isTriggered("initialPosition")||(this.triggerPosition("initialPosition"),pe(this,Ls,bo).call(this,{position:new U(0,0,0),rotation:new U(0,0,0)}))},fc=new WeakSet,Jy=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),pe(this,Ls,bo).call(this,{position:new U(0,3,2),rotation:new U(-1,0,0)}))},dc=new WeakSet,Qy=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),pe(this,Ls,bo).call(this,{position:new U(-1,0,2),rotation:new U(0,-1,0)}))},pc=new WeakSet,ex=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),pe(this,Ls,bo).call(this,{position:new U(2,0,0),rotation:new U(0,1.5,0)}))};var mc,tx,gc,nx,Df,p3,_c,ix,vc,sx,yc,rx,Nf,m3,Uf,g3,Of,_3;class d3 extends ao{constructor(n){super();_e(this,mc);_e(this,gc);_e(this,Df);_e(this,_c);_e(this,vc);_e(this,yc);_e(this,Nf);_e(this,Uf);_e(this,Of);me(this,"three");me(this,"key");me(this,"cameraPosition");me(this,"cameraPositions");this.three=n,this.key="camera",this.initialPositionTriggered=!0,this.midPositionTriggered=!1,this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,mc,tx).call(this)}set visible(n){this.body.visible=n}get visible(){return this.body.visible}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}setVerticalPosition(n=0){this.body.position.y=n}setParametersForTexture(n,i=1){n.colorSpace=io,n.anisotropy=i}}mc=new WeakSet,tx=function(){pe(this,gc,nx).call(this),pe(this,_c,ix).call(this)},gc=new WeakSet,nx=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.2,.2,.2),this.body.position.set(0,-1,-5),this.body.rotation.set(.3,.4,0);const n=this.three.imgManager.get("camera"),i=this.three.imgManager.get("camera_n"),s=this.three.imgManager.get("camera_s"),r=this.three.imgManager.get("camera_b"),o=new yi(n),a=new yi(i),l=new yi(s),c=new yi(r),h=this.three.renderer.capabilities.getMaxAnisotropy();this.setParametersForTexture(o,h),this.setParametersForTexture(a,1),this.setParametersForTexture(l,1),this.setParametersForTexture(c,1);const u=this.three.imgManager.get("cameraLens"),f=this.three.imgManager.get("cameraLens_s"),d=this.three.imgManager.get("cameraLens_a"),g=this.three.imgManager.get("cameraLens_b"),v=new yi(u),m=new yi(f),p=new yi(d),x=new yi(g);this.setParametersForTexture(v,h),this.setParametersForTexture(m,1),this.setParametersForTexture(p,1),this.setParametersForTexture(x,1);const _=new cn({map:o,normalMap:a,specularMap:l,bumpMap:c,transparent:!0}),E=new cn({map:v,alphaMap:p,specularMap:m,bumpMap:x,transparent:!0});this.body.children[0].material[0]=_,this.body.children[0].material[1]=E,this.three.scene.add(this.body),console.log(this.body)},Df=new WeakSet,p3=function(n,i=1,s=100){},_c=new WeakSet,ix=function(){this.three.emitter.addEventListener(Pi.UPDATE.type,()=>{if(this.opacity==0)return;const n=window.scrollY*window.devicePixelRatio;n<=10&&pe(this,vc,sx).call(this),n>10&&n<1500&&pe(this,yc,rx).call(this)})},vc=new WeakSet,sx=function(){this.isTriggered("initialPosition")||(this.triggerPosition("initialPosition"),this.three.camera.moveCamera({position:new U(0,0,0),rotation:new U(0,0,0)}))},yc=new WeakSet,rx=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),this.three.camera.moveCamera({position:new U(0,0,3.5),rotation:new U(0,-.1,0)}))},Nf=new WeakSet,m3=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),this.three.camera.moveCamera({position:new U(0,0,3.5),rotation:new U(0,-.1,0)}))},Uf=new WeakSet,g3=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),this.three.camera.moveCamera({position:new U(0,5,0),rotation:new U(-1.6,0,0)}))},Of=new WeakSet,_3=function(){this.isTriggered("fourthPosition")||(this.triggerPosition("fourthPosition"),this.three.camera.moveCamera({position:new U(0,5,0),rotation:new U(-1.6,0,2.5)}))};var xc,ox,Sc,ax,Mc,lx,sa,Rf,Ec,cx,ra,Pf,bc,hx,Tc,ux,wc,fx,Ac,dx;class v3 extends ao{constructor(n){super({three:n});_e(this,xc);_e(this,Sc);_e(this,Mc);_e(this,sa);_e(this,Ec);_e(this,ra);_e(this,bc);_e(this,Tc);_e(this,wc);_e(this,Ac);me(this,"three");me(this,"key");me(this,"pointLight");me(this,"cameraPosition");me(this,"cameraPositions");me(this,"moveTween");this.three=n,this.key="logoObj",this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,xc,ox).call(this),pe(this,sa,Rf).call(this)}set visible(n){this.body.visible=n}get visible(){return this.body.visible}callInitialCameraPosition(){this.cameraPositions[0].triggered=!1,console.log("LOGO CALLS FOR POSITION"),pe(this,ra,Pf).call(this,!0)}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}}xc=new WeakSet,ox=function(){pe(this,Sc,ax).call(this),pe(this,Mc,lx).call(this),pe(this,sa,Rf).call(this)},Sc=new WeakSet,ax=function(){const n=this.three.texManager.get("grain"),i=this.three.texManager.get("grain_n"),s=this.three.texManager.get("grain_s"),r=this.three.renderer.capabilities.getMaxAnisotropy();n.wrapS=dt,n.wrapT=dt,n.anisotropy=1,i.colorSpace=gt,i.wrapS=dt,i.wrapT=dt,i.anisotropy=r,s.wrapS=dt,s.wrapT=dt;const o=1,a=1,l=.5;n.repeat.set(o*l,a*l),i.repeat.set(o*l,a*l),s.repeat.set(o*l,a*l);const c=new cn({color:16777215,emissive:1052688,map:n,normalMap:i,specularMap:s,transparent:!0});this.body=this.three.objManager.get(this.key),this.body.scale.set(.18,.18,.32),this.body.position.set(0,.3,-5),this.body.traverse(h=>{h instanceof dn&&(h.material=c)}),this.three.scene.add(this.body)},Mc=new WeakSet,lx=function(){this.pointLight=new bf(268435455,5),this.three.scene.add(this.pointLight),this.pointLight.position.set(0,.5,2)},sa=new WeakSet,Rf=function(){this.three.emitter.addEventListener(Pi.UPDATE.type,()=>{this.opacity!=0&&(scrollY<=10&&pe(this,ra,Pf).call(this),scrollY>10&&scrollY<1500&&pe(this,bc,hx).call(this),scrollY>1500&&scrollY<3e3&&pe(this,Tc,ux).call(this),scrollY>3e3&&scrollY<4500&&pe(this,wc,fx).call(this),scrollY>4500&&scrollY<6e3&&pe(this,Ac,dx).call(this))})},Ec=new WeakSet,cx=function(n,i){var s;this.opacity<1&&!i||((s=this.moveTween)==null||s.stop(),this.moveTween=this.three.addTween({elements:this.three.camera,easing:Ji.Easing.Quadratic.InOut,duration:2e3,position:n.position,rotation:n.rotation}))},ra=new WeakSet,Pf=function(n){this.isTriggered("initialPosition")&&!n||(this.triggerPosition("initialPosition"),pe(this,Ec,cx).call(this,{position:new U(0,0,0),rotation:new U(0,0,0)},n))},bc=new WeakSet,hx=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),this.three.camera.moveCamera({position:new U(0,-1,-3),rotation:new U(.5,0,0)}))},Tc=new WeakSet,ux=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),this.three.camera.moveCamera({position:new U(0,0,-1.5),rotation:new U(0,-.1,0)}))},wc=new WeakSet,fx=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),window.camera=this.three.camera,this.three.camera.moveCamera({position:new U(0,5,-5),rotation:new U(-1.6,0,-5)}))},Ac=new WeakSet,dx=function(){this.isTriggered("fourthPosition")||(this.triggerPosition("fourthPosition"),this.three.camera.moveCamera({position:new U(0,5,0),rotation:new U(-1.6,0,2.5)}))};var Cc,px,Rc,mx,Pc,gx;class r_ extends ao{constructor(n){super();_e(this,Cc);_e(this,Rc);_e(this,Pc);me(this,"three");me(this,"key");this.three=n,this.key="loadingIcon",pe(this,Cc,px).call(this)}static async preload(n){await n.objManager.load("loadingIcon",`${n.LOCAL_PATH}static/3d/loadingIcon/loadingIcon.obj`)}set visible(n){this.body.visible=n}get visible(){return this.body.visible}setVerticalPosition(n=0){this.body.position.y=n}show(){return new Promise((n,i)=>{var s;(s=this.opacityTween)==null||s.stop(),this.body.visible=!0,n()})}hide(){return new Promise((n,i)=>{this.body.visible=!1,n()})}}Cc=new WeakSet,px=function(){pe(this,Rc,mx).call(this),pe(this,Pc,gx).call(this)},Rc=new WeakSet,mx=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.25,.25,.25);const n=new Lh({color:11141120,transparent:!0,emissive:!0});this.body.visible=!1,this.body.children[0].material=n,this.three.scene.add(this.body)},Pc=new WeakSet,gx=function(){this.three.emitter.addEventListener(Pi.UPDATE.type,()=>{this.opacity!=0&&(this.body.rotation.z+=.01)})};var Lc,_x,Ic,vx,Dc,yx,Nc,xx,Uc,Sx,Oc,Mx,Fc,Ex,Ff,x3,Bc,bx;class y3{constructor(e){_e(this,Lc);_e(this,Ic);_e(this,Dc);_e(this,Nc);_e(this,Uc);_e(this,Oc);_e(this,Fc);_e(this,Ff);_e(this,Bc);me(this,"three");me(this,"lampLightLeft");me(this,"lampLightRight");this.three=e,this.initialize()}initialize(){pe(this,Fc,Ex).call(this),pe(this,Oc,Mx).call(this),pe(this,Lc,_x).call(this),pe(this,Ic,vx).call(this),pe(this,Uc,Sx).call(this),pe(this,Nc,xx).call(this),pe(this,Dc,yx).call(this)}}Lc=new WeakSet,_x=function(){const e=new cn({map:this.three.texManager.get("crossStone"),normalMap:this.three.texManager.get("crossStone_n"),transparent:!0}),n=this.three.objManager.get("crossStone");n.scale.set(.06,.06,.06),n.position.set(3,-1,-15),n.children[0].material=e,this.three.scene.add(n)},Ic=new WeakSet,vx=function(){const e=new cn({map:this.three.texManager.get("graveStone"),normalMap:this.three.texManager.get("graveStone_n"),transparent:!0});let n=0;const i=(s,r,o=0)=>{console.log(`graveStone${n%4+1}`);const a=this.three.objManager.get(`graveStone${n%4+1}`);n++,a.scale.set(.6,.6,.6),a.position.set(s,-1.2,r),a.rotation.set(0,o,0),a.children[0].material=e,this.three.scene.add(a)};i(-7,-9),i(-5,-12),i(-3,-10),i(1,-14),i(3,-14),i(5,-5),i(6,-9,Math.PI/2),i(9,-5,Math.PI/2),i(10,-1,Math.PI/2),i(11,3,Math.PI/2),i(9,7,Math.PI/2)},Dc=new WeakSet,yx=function(){this.three.emitter.addEventListener(Pi.UPDATE.type,()=>{this.lampLightLeft&&Math.random()>.7&&(this.lampLightLeft.initialIntesity==null&&(this.lampLightLeft.initialIntesity=this.lampLightLeft.intensity),this.lampLightLeft.intensity=this.lampLightLeft.initialIntesity+Math.random()*5),this.lampLightRight&&Math.random()>.7&&(this.lampLightRight.initialIntesity==null&&(this.lampLightRight.initialIntesity=this.lampLightRight.intensity),this.lampLightRight.intensity=this.lampLightRight.initialIntesity+Math.random()*5)})},Nc=new WeakSet,xx=function(){const e=new cn({map:this.three.texManager.get("lampPost"),normalMap:this.three.texManager.get("lampPost_n"),emissiveMap:this.three.texManager.get("lampPost_e"),specularMap:this.three.texManager.get("lampPost_s"),bumpMap:this.three.texManager.get("lampPost_r"),emissive:16755200});new wy({color:16777215,emissive:16711680});const n=16733440,i=5,s=3,r=this.three.objManager.get("lampPost");this.lampLightRight=new bf(n,i,s,2),this.lampLightRight.castShadow=!0,this.lampLightRight.shadow.mapSize.set(512,512),this.lampLightRight.shadow.autoUpdate=!1,this.lampLightRight.shadow.needsUpdate=!0,r.position.set(2,-1.25,-3),this.lampLightRight.position.set(r.position.x-.7,r.position.y+.5,r.position.z+.4),r.scale.set(.05,.05,.05),console.log(r),r.traverse(a=>{a.material=e,a.castShadow=!0,a.receiveShadow=!0}),this.three.scene.add(r),this.three.scene.add(this.lampLightRight);const o=this.three.objManager.get("lampPost");this.lampLightLeft=new bf(n,i,s,2),this.lampLightLeft.castShadow=!0,this.lampLightLeft.shadow.mapSize.set(512,512),this.lampLightLeft.shadow.autoUpdate=!1,this.lampLightLeft.shadow.needsUpdate=!0,o.position.set(-2,-1.25,-3),o.rotation.set(0,Math.PI,0),this.lampLightLeft.position.set(o.position.x+.7,o.position.y+.5,o.position.z+.4),o.scale.set(.05,.05,.05),o.traverse(a=>{a.material=e,a.castShadow=!0,a.receiveShadow=!0}),this.three.scene.add(o),this.three.scene.add(this.lampLightLeft)},Uc=new WeakSet,Sx=function(){const e=new cn({map:this.three.texManager.get("dryTree"),normalMap:this.three.texManager.get("dryTree_n")}),n=(i,s)=>{const r=this.three.objManager.get("dryTree");r.traverse(o=>{o.material=e,o.castShadow=!0}),r.position.set(i,-1.2,s),r.rotation.set(0,Math.random()*Math.PI*2,0),this.three.scene.add(r)};n(7,-4),n(-6,-5),n(-6,-10),n(6,-5),n(3,-13),n(4,-12),n(12,-9),n(14,-6),n(15,-3),n(13,0),n(10,3),n(13,6),n(13,9)},Oc=new WeakSet,Mx=function(){const e=new cn({map:this.three.texManager.get("bush_1"),transparent:!0}),n=new cn({map:this.three.texManager.get("bush_2"),transparent:!0}),i=new cn({map:this.three.texManager.get("bush_3"),transparent:!0}),s=[e,n,i],r=(o,a)=>{const l=this.three.objManager.get("bush");return l.scale.set(.3,.3,.3),l.position.set(o,-1.2,a),this.three.scene.add(l),l.traverse(c=>{c.material=s[Math.floor(Math.random()*s.length)]}),l};r(-1.5,-10.5),r(-1.25,-13),r(1.15,-10),r(2.35,-4.1),r(10,-5),r(7,-5),r(8,-3),r(3,-1),r(2,2),r(9,2.1),r(10,-1.1),r(8,0),r(9,0),r(3,4),r(5,6),r(1,7),r(8,8),r(10,9),r(12,-5),r(14,-3),r(15,-1),r(13,0),r(12,2),r(12,4),r(-2.4,-3),r(-3.3,-3),r(-6.8,-2.3),r(-4,0),r(-3,1),r(-6.3,2.1),r(-4,3.1),r(-6,4.3),r(-2.5,6.5),r(-1.25,7),r(1.15,7),r(2.35,6.1),r(-7.2,12),r(-5.4,11),r(-3.3,10.5),r(-1.8,10),r(0,9),r(3,10),r(6.3,11),r(4,10),r(10,9)},Fc=new WeakSet,Ex=function(){const e=new ea,n=pe(this,Bc,bx).call(this),i=new dn(e,n);i.receiveShadow=!0,i.scale.set(40,40,1),i.position.set(0,0,0),i.rotation.x=-Math.PI/2,i.position.y=-1.25,this.three.scene.add(i)},Ff=new WeakSet,x3=function(e=0,n=0,i=0,s=0,r=0,o=0){const a=new ea,l=new Rh({color:0}),c=new dn(a,l);c.castShadow=!1,c.receiveShadow=!1;const h=30;return c.scale.set(60,h,1),c.position.set(e,h/2-1.25,i),c.rotation.set(s,r,o),this.three.scene.add(c),c},Bc=new WeakSet,bx=function(){const e=this.three.texManager.get("grain"),n=this.three.texManager.get("grain_n"),i=this.three.texManager.get("grain_s"),s=this.three.renderer.capabilities.getMaxAnisotropy();e.wrapS=dt,e.wrapT=dt,e.anisotropy=s,n.colorSpace=gt,n.wrapS=dt,n.wrapT=dt,n.anisotropy=s,i.wrapS=dt,i.wrapT=dt;const r=5,o=5,a=10;return e.repeat.set(r*a,o*a),n.repeat.set(r*a,o*a),i.repeat.set(r*a,o*a),new cn({color:10459801,reflectivity:0,map:e,normalMap:n})};class S3{constructor(e){me(this,"list");me(this,"textureLoader");me(this,"three");this.list={},this.three=e,this.textureLoader=new Py}load(e,n){if(!e)throw new Error("Please provide a key for the texture you are loading");if(!n)throw new Error("Please provide a path for the texture you are loading");const i=n.split("/"),s=i.pop()||"";return n=i.join("/"),n+="/",new Promise((r,o)=>{this.textureLoader.setPath(n),this.textureLoader.load(s,a=>{this.list[e]=a,a.key=e,a.destroy=()=>{delete this.list[a.key]},r(a)},a=>{console.log(a.loaded/a.total*100+"% loaded")},a=>{console.error("An error happened",a),o(a)})})}get(e){if(!this.list[e])return;const n=this.list[e].clone(),i=this.three.renderer.capabilities.getMaxAnisotropy();return n.colorSpace=io,n.anisotropy=i,n}}class M3 extends hn{constructor(n,i,s,r,o){super(i,s,r,o);me(this,"moveTween");me(this,"three");this.three=n}moveCamera(n){var i;(i=this.moveTween)==null||i.stop(),this.moveTween=this.three.addTween({elements:this.three.camera,easing:Ji.Easing.Quadratic.InOut,duration:2e3,position:n.position,rotation:n.rotation})}}const Ze="../";var E3=(t=>(t.SIGIL="sigil",t.LOGO="logo",t.PHOTO_CAMERA="photoCamera",t.CONCERT_STAGE="concertStage",t.SHOPPING_CART="shoppingCart",t.AMPLIFIER="amplifier",t))(E3||{}),kc,Tx,Hc,wx,Vc,Ax,zc,Cx,Gc,Rx,Bf,T3,Wc,Px,Xc,Lx,jc,Ix,$c,Dx,qc,Nx,Yc,Ux,Kc,Ox,Zc,Fx,Jc,Bx,Qc,kx,eh,Hx,th,Vx;class b3{constructor(){_e(this,kc);_e(this,Hc);_e(this,Vc);_e(this,zc);_e(this,Gc);_e(this,Bf);_e(this,Wc);_e(this,Xc);_e(this,jc);_e(this,$c);_e(this,qc);_e(this,Yc);_e(this,Kc);_e(this,Zc);_e(this,Jc);_e(this,Qc);_e(this,eh);_e(this,th);me(this,"scene");me(this,"camera");me(this,"renderer");me(this,"geometry");me(this,"material");me(this,"sigil");me(this,"concertStage");me(this,"pointLight");me(this,"dirLight");me(this,"mouse");me(this,"objManager");me(this,"imgManager");me(this,"mtlManager");me(this,"particleMaterials");me(this,"emitter");me(this,"particleParameters");me(this,"os");me(this,"object3dArray");me(this,"totalFrames");me(this,"innerWidthConstant");me(this,"yRotationAddFromScroll");me(this,"previousScrollY");me(this,"currentScrollY");me(this,"deltaScrollY");me(this,"amplifier");me(this,"shoppingCart");me(this,"photoCamera");me(this,"loadingIcon");me(this,"LOCAL_PATH");me(this,"texManager");me(this,"preloadFinished");me(this,"fogColor");this.scene=new IL,this.camera=new M3(this,this.cameraFov,this.cameraAspect,.1,1e3),this.totalFrames=0,this.LOCAL_PATH="../",this.innerWidthConstant=1,this.renderer=new Ty({antialias:!0,precision:"lowp",powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ww,this.emitter=new ir,this.os=t3(),this.geometry=new so(1,1,1),this.material=new Rh({color:65280}),this.objManager=new ZL,this.imgManager=new JL,this.mtlManager=new u3,this.texManager=new S3(this),this.fogColor=3355460,this.object3dArray=[],this.particleMaterials=[],this.particleParameters=[[[]]],this.yRotationAddFromScroll=0,this.currentScrollY=0,this.previousScrollY=0,this.deltaScrollY=0,this.totalRotationAdded=0,this.preloadFinished=!1,this.init()}get isPortrait(){return this.setupHeight>this.setupWidth}get devicePixelRatio(){return window.devicePixelRatio>2?2:window.devicePixelRatio}get cameraAspect(){return this.setupWidth/this.setupHeight}get cameraFov(){let e=105/(this.cameraAspect+.5);return e<50&&(e=50),e>125&&(e=125),e}get setupWidth(){return window.innerWidth*this.devicePixelRatio}get setupHeight(){return window.innerHeight*this.devicePixelRatio}async init(){this.preload()}async preload(){await this.objManager.load("bush",`${Ze}static/3d/bush/bush.obj`),await this.texManager.load("bush_1",`${Ze}static/3d/bush/bush_1.webp`),await this.texManager.load("bush_2",`${Ze}static/3d/bush/bush_2.webp`),await this.texManager.load("bush_3",`${Ze}static/3d/bush/bush_3.webp`),await this.objManager.load("crossStone",`${Ze}static/3d/crossStone/crossStone.obj`),await this.texManager.load("crossStone",`${Ze}static/3d/crossStone/crossStone.webp`),await this.texManager.load("crossStone_n",`${Ze}static/3d/crossStone/crossStone_n.webp`),await this.objManager.load("lampPost",`${Ze}static/3d/lampPost/lampPost.obj`),await this.texManager.load("lampPost",`${Ze}static/3d/lampPost/lampPost.webp`),await this.texManager.load("lampPost_n",`${Ze}static/3d/lampPost/lampPost_n.webp`),await this.texManager.load("lampPost_s",`${Ze}static/3d/lampPost/lampPost_s.webp`),await this.texManager.load("lampPost_r",`${Ze}static/3d/lampPost/lampPost_r.webp`),await this.texManager.load("lampPost_e",`${Ze}static/3d/lampPost/lampPost_e.webp`),await this.objManager.load("dryTree",`${Ze}static/3d/dryTree/dryTree.obj`),await this.texManager.load("dryTree",`${Ze}static/3d/dryTree/dryTree.webp`),await this.texManager.load("dryTree_n",`${Ze}static/3d/dryTree/dryTree_n.webp`),await this.objManager.load("graveStone1",`${Ze}static/3d/graveStone/graveStone1.obj`),await this.objManager.load("graveStone2",`${Ze}static/3d/graveStone/graveStone2.obj`),await this.objManager.load("graveStone3",`${Ze}static/3d/graveStone/graveStone3.obj`),await this.objManager.load("graveStone4",`${Ze}static/3d/graveStone/graveStone4.obj`),await this.texManager.load("graveStone",`${Ze}static/3d/graveStone/graveStone.webp`),await this.texManager.load("graveStone_n",`${Ze}static/3d/graveStone/graveStone_n.webp`),await this.texManager.load("grain",`${Ze}static/3d/textures/grain.webp`),await this.texManager.load("grain_n",`${Ze}static/3d/textures/grain_n.webp`),await this.texManager.load("grain_s",`${Ze}static/3d/textures/grain_s.webp`),await this.texManager.load("hardwood",`${Ze}static/3d/textures/hardwood.webp`),await this.texManager.load("hardwood_n",`${Ze}static/3d/textures/hardwood_n.jpg`),await r_.preload(this),this.create()}get allObjectsAreHidden(){return this.object3dArray.every(e=>!e.body.visible)}hide3dObjects(e,n){return new Promise((i,s)=>{let r=!1;if(this.object3dArray.length==0)return i();this.object3dArray.forEach(o=>{var a;if(o==e){console.log("found same item, excluding",e),this.object3dArray.length==1&&i();return}if(n){o.visible=!1,r||(r=!0,i());return}(a=o.opacityTween)==null||a.stop(),o.opacityTween=this.addTween({elements:o,easing:Ji.Easing.Quadratic.Out,duration:300,opacity:0,onComplete:()=>{r||(r=!0,i()),o.visible=!1}})})})}async create(){this.preloadFinished=!0,this.loadingIcon=new r_(this),pe(this,eh,Hx).call(this),pe(this,th,Vx).call(this),pe(this,Kc,Ox).call(this),pe(this,Jc,Bx).call(this),pe(this,Qc,kx).call(this),pe(this,Zc,Fx).call(this),pe(this,qc,Nx).call(this),pe(this,jc,Ix).call(this),pe(this,Wc,Px).call(this),this.emitter.dispatchEvent(Pi.CREATE),this.update()}update(){requestAnimationFrame(()=>{this.update()}),this.renderer.render(this.scene,this.camera),pe(this,Xc,Lx).call(this),this.totalFrames++,Ji.update(),this.emitter.dispatchEvent(Pi.UPDATE)}async setElementVisible(e,n=!0,i=300){!this[e]&&this.preloadFinished&&(this.loadingIcon&&await this.loadingIcon.show(),await this.hide3dObjects(),e=="concertStage"?await pe(this,Vc,Ax).call(this):e=="logo"?await pe(this,Gc,Rx).call(this):e=="photoCamera"?await pe(this,kc,Tx).call(this):e=="shoppingCart"?await pe(this,Hc,wx).call(this):e=="sigil"&&await pe(this,zc,Cx).call(this)),requestAnimationFrame(()=>{if(!this[e]){if(i==1){console.warn(`Request to set visible for ${e} has gone time out`);return}this.preloadFinished&&i--,this.setElementVisible(e,i);return}const s=this[e];if(this.hide3dObjects(s),this.loadingIcon&&this.loadingIcon.hide(),pe(this,Yc,Ux).call(this,s),console.log(s.callInitialCameraPosition),s.callInitialCameraPosition&&s.callInitialCameraPosition(),Dy()&&n){const r=this.setupWidth/this.setupHeight;if(r<.5){const o=.5-r;console.log(o);let a=o*45;console.log("YPOS",a),a>1.4&&(a=1.4);const l=o*5;s.setVerticalPosition?s.setVerticalPosition(a):((s.iniitialY==null||s.initialRotationX==null)&&(s.initialY=s.body.position.x,s.initialRotationX=s.body.rotation.x),s.body.position.y=s.initialY+a,s.body.rotation.x=s.initialRotationX+l)}}})}addTween(e){const{opacity:n,position:i,rotation:s,elements:r,easing:o=Ji.Easing.Linear.None,delay:a=0,duration:l,onStart:c=()=>{},onUpdate:h=()=>{},onComplete:u=()=>{}}=e,f=new Ji.Tween(r).to({opacity:n,position:i,easing:o,rotation:s},l||1e3);return f.easing(o),f.delay(a),f.onStart(c),f.onUpdate(h),f.onComplete(u),f.start(),f}}kc=new WeakSet,Tx=async function(){await this.objManager.load("camera",`${Ze}static/3d/camera/camera.obj`),await this.imgManager.load("camera",`${Ze}static/3d/camera/camera.webp`),await this.imgManager.load("camera_n",`${Ze}static/3d/camera/camera_n.webp`),await this.imgManager.load("camera_s",`${Ze}static/3d/camera/camera_s.png`),await this.imgManager.load("camera_b",`${Ze}static/3d/camera/camera_b.webp`),await this.imgManager.load("cameraLens",`${Ze}static/3d/camera/cameraLens.png`),await this.imgManager.load("cameraLens_a",`${Ze}static/3d/camera/cameraLens_a.png`),await this.imgManager.load("cameraLens_s",`${Ze}static/3d/camera/cameraLens_s.png`),await this.imgManager.load("cameraLens_b",`${Ze}static/3d/camera/cameraLens_b.png`),this.photoCamera=new d3(this),this.photoCamera.opacity=0,this.object3dArray.push(this.photoCamera)},Hc=new WeakSet,wx=async function(){console.time("shopping cart created in"),Nu.isLoaded(this)||await Nu.preload(this),this.shoppingCart=new Nu(this),this.shoppingCart.opacity=0,this.object3dArray.push(this.shoppingCart),console.timeEnd("shopping cart created in")},Vc=new WeakSet,Ax=async function(){Du.isLoaded(this)||await Du.preload(this),this.concertStage=new Du(this),this.concertStage.opacity=0,this.object3dArray.push(this.concertStage)},zc=new WeakSet,Cx=async function(){!!this.objManager.get("sigilObj")||await this.objManager.load("sigilObj",`${Ze}static/3d/ambroz/sigilObj.obj`),this.sigil=new e3(this),this.sigil.opacity=0,this.object3dArray.push(this.sigil)},Gc=new WeakSet,Rx=async function(){!!this.objManager.get("logoObj")||await this.objManager.load("logoObj",`${Ze}static/3d/ambroz/logoObj.obj`),this.logo=new v3(this),this.logo.opacity=0,this.object3dArray.push(this.logo)},Bf=new WeakSet,T3=function(e=3){this.object3dArray.forEach(n=>{if(n.opacity!=null&&n.opacity==0)return;n.initialRotation||(n.initialRotation=new U(n.body.rotation.x,n.body.rotation.y,n.body.rotation.z));const i=this.totalFrames/200,s=Math.sin(i)/10*e,r=Math.sin(i/1.5)/10*e;n.body.rotation.x=s+n.initialRotation.x,n.body.rotation.y=r+n.initialRotation.y})},Wc=new WeakSet,Px=function(){this.scenery=new y3(this)},Xc=new WeakSet,Lx=function(){Math.abs(this.yRotationAddFromScroll)>0&&(this.yRotationAddFromScroll/=1.8);for(let e=0;e<this.scene.children.length;e++){const n=this.scene.children[e];if(n instanceof No){const i=this.totalFrames*(e%2==0?e+1:-(e+1))*5e-6;n.rotation.x=i,n.rotation.y=i}}},jc=new WeakSet,Ix=function(){window.addEventListener("resize",()=>pe(this,$c,Dx).call(this))},$c=new WeakSet,Dx=function(){},qc=new WeakSet,Nx=function(){},Yc=new WeakSet,Ux=function(e){var n;if(e){if((n=e.opacityTween)==null||n.stop(),e.opacity==null)throw new Error("Element had no opacity vaule to work with");e.opacityTween=this.addTween({elements:e,delay:this.allObjectsAreHidden?0:300,easing:Ji.Easing.Quadratic.Out,duration:300,onStart:()=>e.visible=!0,opacity:1})}},Kc=new WeakSet,Ox=function(){this.mouse=new Qe,document.addEventListener("mousemove",e=>{e.preventDefault(),this.mouse.x=e.clientX/this.setupWidth*2-1,this.mouse.y=-(e.clientY/this.setupHeight)*2+1},!1)},Zc=new WeakSet,Fx=async function(){const e=new Fn,n=[];await this.texManager.load("spark","../../static/particles/spark.png"),await this.texManager.load("snowflake","../../static/particles/snowflake.png");const i=this.texManager.get("spark"),s=this.texManager.get("snowflake");for(let r=0;r<5e3;r++){const o=Math.random()*2e3-1e3,a=Math.random()*2e3-1e3,l=Math.random()*2e3-1e3;n.push(o,a,l)}e.setAttribute("position",new qt(n,3)),this.particleParameters=[[[.5,.4,0],s,4],[[.5,.4,.25],i,3.5],[[.5,.5,.35],s,3.2],[[.35,.35,.15],i,3],[[.65,.6,.25],i,2.5]];for(let r=0;r<this.particleParameters.length;r++){const o=this.particleParameters[r][0],a=this.particleParameters[r][1],l=this.particleParameters[r][2];this.particleMaterials[r]=new Ar({size:l,map:a,blending:pf,depthTest:!1,transparent:!0}),this.particleMaterials[r].color.setRGB(o[0],o[1],o[2],gt);const c=new No(e,this.particleMaterials[r]);c.rotation.x=Math.random()*6,c.rotation.y=Math.random()*6,c.rotation.z=Math.random()*6,this.scene.add(c)}},Jc=new WeakSet,Bx=function(){const e=new HL(3342336,1);this.scene.add(e)},Qc=new WeakSet,kx=function(){const e=new Oe(this.fogColor),n=0,i=15;this.scene.fog=new Xd(e,n,i)},eh=new WeakSet,Hx=function(){this.renderer.setClearColor(this.fogColor,1),this.renderer.setSize(this.setupWidth,this.setupHeight);const e=document.getElementById("app");if(e){const n=this.renderer.domElement;n.style.position="fixed",n.style.display="inline-block",n.style.zIndex="-1",n.style.top="0",n.style.left="0",n.style.width="100vw",n.style.height="auto",window.threeDomElement=n,window.three=this,e.appendChild(n)}},th=new WeakSet,Vx=function(){};const w3={beforeMount(){window.three=new b3}},Ih=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};function A3(t,e,n,i,s,r){return ls(),fa("div")}const C3=Ih(w3,[["render",A3]]),R3="/assets/sigil-ambroz-LlSyZkk3.png",zx="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3espotify%20[%23ffffff]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7479.000000)'%20fill='%23ffffff'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M99.915,7327.865%20C96.692,7325.951%2091.375,7325.775%2088.297,7326.709%20C87.803,7326.858%2087.281,7326.58%2087.131,7326.085%20C86.981,7325.591%2087.26,7325.069%2087.754,7324.919%20C91.287,7323.846%2097.159,7324.053%20100.87,7326.256%20C101.314,7326.52%20101.46,7327.094%20101.196,7327.538%20C100.934,7327.982%20100.358,7328.129%2099.915,7327.865%20L99.915,7327.865%20Z%20M99.81,7330.7%20C99.584,7331.067%2099.104,7331.182%2098.737,7330.957%20C96.05,7329.305%2091.952,7328.827%2088.773,7329.792%20C88.36,7329.916%2087.925,7329.684%2087.8,7329.272%20C87.676,7328.86%2087.908,7328.425%2088.32,7328.3%20C91.951,7327.198%2096.466,7327.732%2099.553,7329.629%20C99.92,7329.854%20100.035,7330.334%2099.81,7330.7%20L99.81,7330.7%20Z%20M98.586,7333.423%20C98.406,7333.717%2098.023,7333.81%2097.729,7333.63%20C95.381,7332.195%2092.425,7331.871%2088.944,7332.666%20C88.609,7332.743%2088.274,7332.533%2088.198,7332.197%20C88.121,7331.862%2088.33,7331.528%2088.667,7331.451%20C92.476,7330.58%2095.743,7330.955%2098.379,7332.566%20C98.673,7332.746%2098.766,7333.129%2098.586,7333.423%20L98.586,7333.423%20Z%20M94,7319%20C88.477,7319%2084,7323.477%2084,7329%20C84,7334.523%2088.477,7339%2094,7339%20C99.523,7339%20104,7334.523%20104,7329%20C104,7323.478%2099.523,7319.001%2094,7319.001%20L94,7319%20Z'%20id='spotify-[%23ffffff]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Gx="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='7935ec95c421cee6d86eb22ecd11b7e3'%3e%3cpath%20style='display:%20inline;'%20d='M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379%20c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302%20c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263%20l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Wx="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20169.063%20169.063'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752%20c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z%20M154.063,122.407%20c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752%20c17.455,0,31.656,14.201,31.656,31.655V122.407z'/%3e%3cpath%20d='M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561%20C128.094,60.512,108.552,40.97,84.531,40.97z%20M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561%20c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z'/%3e%3cpath%20d='M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78%20c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78%20C135.661,29.421,132.821,28.251,129.921,28.251z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Xx="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.49614%207.13176C9.18664%206.9549%208.80639%206.95617%208.49807%207.13509C8.18976%207.31401%208%207.64353%208%208V16C8%2016.3565%208.18976%2016.686%208.49807%2016.8649C8.80639%2017.0438%209.18664%2017.0451%209.49614%2016.8682L16.4961%2012.8682C16.8077%2012.6902%2017%2012.3589%2017%2012C17%2011.6411%2016.8077%2011.3098%2016.4961%2011.1318L9.49614%207.13176ZM13.9844%2012L10%2014.2768V9.72318L13.9844%2012Z'%20fill='%23ffffff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2012C0%208.25027%200%206.3754%200.954915%205.06107C1.26331%204.6366%201.6366%204.26331%202.06107%203.95491C3.3754%203%205.25027%203%209%203H15C18.7497%203%2020.6246%203%2021.9389%203.95491C22.3634%204.26331%2022.7367%204.6366%2023.0451%205.06107C24%206.3754%2024%208.25027%2024%2012C24%2015.7497%2024%2017.6246%2023.0451%2018.9389C22.7367%2019.3634%2022.3634%2019.7367%2021.9389%2020.0451C20.6246%2021%2018.7497%2021%2015%2021H9C5.25027%2021%203.3754%2021%202.06107%2020.0451C1.6366%2019.7367%201.26331%2019.3634%200.954915%2018.9389C0%2017.6246%200%2015.7497%200%2012ZM9%205H15C16.9194%205%2018.1983%205.00275%2019.1673%205.10773C20.0989%205.20866%2020.504%205.38448%2020.7634%205.57295C21.018%205.75799%2021.242%205.98196%2021.4271%206.23664C21.6155%206.49605%2021.7913%206.90113%2021.8923%207.83269C21.9973%208.80167%2022%2010.0806%2022%2012C22%2013.9194%2021.9973%2015.1983%2021.8923%2016.1673C21.7913%2017.0989%2021.6155%2017.504%2021.4271%2017.7634C21.242%2018.018%2021.018%2018.242%2020.7634%2018.4271C20.504%2018.6155%2020.0989%2018.7913%2019.1673%2018.8923C18.1983%2018.9973%2016.9194%2019%2015%2019H9C7.08058%2019%205.80167%2018.9973%204.83269%2018.8923C3.90113%2018.7913%203.49605%2018.6155%203.23664%2018.4271C2.98196%2018.242%202.75799%2018.018%202.57295%2017.7634C2.38448%2017.504%202.20866%2017.0989%202.10773%2016.1673C2.00275%2015.1983%202%2013.9194%202%2012C2%2010.0806%202.00275%208.80167%202.10773%207.83269C2.20866%206.90113%202.38448%206.49605%202.57295%206.23664C2.75799%205.98196%202.98196%205.75799%203.23664%205.57295C3.49605%205.38448%203.90113%205.20866%204.83269%205.10773C5.80167%205.00275%207.08058%205%209%205Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",P3=t=>(td("data-v-89b831eb"),t=t(),nd(),t),L3={class:"navbar-section-left"},I3=P3(()=>ii("img",{src:R3,alt:"",height:"110px",class:"sigil-image"},null,-1)),D3={class:"navbar-section-center non-sigil-elements"},N3=dd('<div class="navbar-section-right" data-v-89b831eb><a href="https://open.spotify.com/artist/6qQ9WpaSYq45nO9O4kJrVM" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+zx+'" alt="" class="navbar-icon" data-v-89b831eb></a><a href="https://www.facebook.com/ambrozmkd" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+Gx+'" alt="" class="navbar-icon" data-v-89b831eb></a><a href="https://www.instagram.com/ambroz.mkd/" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+Wx+'" alt="" class="navbar-icon" data-v-89b831eb></a><a href="https://www.youtube.com/@AmbrozMKDband" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+Xx+'" alt="" class="navbar-icon" data-v-89b831eb></a></div>',1),U3={methods:{isRouteActive(t){return this.$route.path==t}}},O3=no({...U3,__name:"NavbarAmbroz",setup(t){return(e,n)=>(ls(),fa("body",null,[ii("nav",null,[ii("div",L3,[nt(En(br),{to:"/",class:ei((e.isRouteActive("/")?"navbar-element__active":"navbar-element__inactive")+" sigil-element")},{default:Zi(()=>[I3]),_:1},8,["class"])]),ii("div",D3,[nt(En(br),{to:"/about",class:ei((e.isRouteActive("/about")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Zi(()=>[ws(" ABOUT ")]),_:1},8,["class"]),nt(En(br),{to:"/discography",class:ei((e.isRouteActive("/discography")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Zi(()=>[ws(" DISCOGRAPHY ")]),_:1},8,["class"]),nt(En(br),{to:"/gallery",class:ei((e.isRouteActive("/gallery")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Zi(()=>[ws(" GALLERY")]),_:1},8,["class"]),nt(En(br),{to:"/store",class:ei((e.isRouteActive("/store")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Zi(()=>[ws(" STORE")]),_:1},8,["class"])]),N3])]))}}),F3=Ih(O3,[["__scopeId","data-v-89b831eb"]]),B3={},k3=dd('<div class="footer-section-top" data-v-7b055fcd><hr data-v-7b055fcd></div><div class="footer-section-center" data-v-7b055fcd><a href="https://open.spotify.com/artist/6qQ9WpaSYq45nO9O4kJrVM" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+zx+'" alt="" class="footer-icon" data-v-7b055fcd></a><a href="https://www.facebook.com/ambrozmkd" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+Gx+'" alt="" class="footer-icon" data-v-7b055fcd></a><a href="https://www.instagram.com/ambroz.mkd/" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+Wx+'" alt="" class="footer-icon" data-v-7b055fcd></a><a href="https://www.youtube.com/@AmbrozMKDband" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+Xx+'" alt="" class="footer-icon" data-v-7b055fcd></a></div><div class="footer-section-bottom" data-v-7b055fcd><p data-v-7b055fcd><small data-v-7b055fcd>Ambroz © 2024. All rights reserved.</small></p></div>',3),H3=[k3];function V3(t,e){return ls(),fa("footer",null,H3)}const z3=Ih(B3,[["render",V3],["__scopeId","data-v-7b055fcd"]]),G3={components:{RouterView:Yv,BackgroundComponent:C3,NavbarAmbroz:F3,FooterAmbroz:z3},mounted(){this.addParallaxToBackground()},methods:{addParallaxToBackground(){document.getElementById("body").onscroll=()=>{const t=document.scrollingElement.scrollTop,e=document.getElementById("backgroundParallax"),n="center",s=t*.5*-.5;e.style.backgroundPosition=`${n} ${s}px`}}}},W3=t=>(td("data-v-880f4501"),t=t(),nd(),t),X3=W3(()=>ii("body",{id:"body"},[ii("div",{id:"backgroundParallax"})],-1));function j3(t,e,n,i,s,r){const o=yo("BackgroundComponent"),a=yo("NavbarAmbroz"),l=yo("RouterView"),c=yo("FooterAmbroz");return ls(),fa(Bt,null,[X3,nt(o),ii("div",null,[nt(a),nt(l),nt(c)])],64)}const $3=Ih(G3,[["render",j3],["__scopeId","data-v-880f4501"]]),jx=Mw({history:H1("/"),routes:[{path:"/",name:"Home",component:()=>Sr(()=>import("./HomepageView-NLvBAvYL.js"),__vite__mapDeps([0,1]))},{path:"/contact",name:"contact",component:()=>Sr(()=>import("./ContactPageView-s9q19xSl.js"),__vite__mapDeps([2,3]))},{path:"/gallery",name:"Gallery",component:()=>Sr(()=>import("./GalleryAmbrozView-BsK_xYg0.js"),__vite__mapDeps([4,5]))},{path:"/about",name:"About",component:()=>Sr(()=>import("./AboutUsView-rOI5yjY7.js"),__vite__mapDeps([6,7]))},{path:"/discography",name:"Discography",component:()=>Sr(()=>import("./DiscographyAmbrozView-QN1R5025.js"),__vite__mapDeps([8,9]))},{path:"/store",name:"Store",component:()=>Sr(()=>import("./StoreAmbrozView-9bG0Rt5t.js"),__vite__mapDeps([10,11]))}]});jx.beforeEach((t,e,n)=>{document.title=`Ambroz · ${t.name}`,n()});console.log("Ambroz Forever!!!"),console.log=()=>{};const $x=Y0($3);$x.use(jx);$x.mount("#app");export{E3 as E,Bt as F,Ih as _,ii as a,nd as b,fa as c,no as d,nt as e,Sr as f,yo as g,fd as h,AE as i,Pi as j,ei as n,ls as o,td as p,HM as r,TS as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomepageView-NLvBAvYL.js","assets/HomepageView-9ouUowI7.css","assets/ContactPageView-s9q19xSl.js","assets/ContactPageView-ouw6h9nx.css","assets/GalleryAmbrozView-BsK_xYg0.js","assets/GalleryAmbrozView-UdPtkgK-.css","assets/AboutUsView-rOI5yjY7.js","assets/AboutUsView-5lxe-Jz8.css","assets/DiscographyAmbrozView-QN1R5025.js","assets/DiscographyAmbrozView-8yAuC0r7.css","assets/StoreAmbrozView-9bG0Rt5t.js","assets/StoreAmbrozView-CdTJUFPz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
