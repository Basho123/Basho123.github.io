var Wv=Object.defineProperty;var Xv=(t,e,n)=>e in t?Wv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fe=(t,e,n)=>(Xv(t,typeof e!="symbol"?e+"":e,n),n),qv=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var dt=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var Ke=(t,e,n)=>(qv(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function En(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const it={},Mr=[],Pt=()=>{},Ja=()=>!1,Ws=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mf=t=>t.startsWith("onUpdate:"),nt=Object.assign,bf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jv=Object.prototype.hasOwnProperty,tt=(t,e)=>jv.call(t,e),Ee=Array.isArray,br=t=>Yr(t)==="[object Map]",Xs=t=>Yr(t)==="[object Set]",kh=t=>Yr(t)==="[object Date]",$v=t=>Yr(t)==="[object RegExp]",Ie=t=>typeof t=="function",ke=t=>typeof t=="string",Xn=t=>typeof t=="symbol",ot=t=>t!==null&&typeof t=="object",Tf=t=>(ot(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),Gm=Object.prototype.toString,Yr=t=>Gm.call(t),Yv=t=>Yr(t).slice(8,-1),Wm=t=>Yr(t)==="[object Object]",Af=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ts=En(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kv=En("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Jl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zv=/-(\w)/g,Et=Jl(t=>t.replace(Zv,(e,n)=>n?n.toUpperCase():"")),Jv=/\B([A-Z])/g,Sn=Jl(t=>t.replace(Jv,"-$1").toLowerCase()),qs=Jl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tr=Jl(t=>t?`on${qs(t)}`:""),qn=(t,e)=>!Object.is(t,e),Ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},al=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ll=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Hh;const Xm=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Qv="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",ex=En(Qv);function jo(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ke(i)?qm(i):jo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ke(t)||ot(t))return t}const tx=/;(?![^(]*\))/g,nx=/:([^]+)/,ix=/\/\*[^]*?\*\//g;function qm(t){const e={};return t.replace(ix,"").split(tx).forEach(n=>{if(n){const i=n.split(nx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zn(t){let e="";if(ke(t))e=t;else if(Ee(t))for(let n=0;n<t.length;n++){const i=Zn(t[n]);i&&(e+=i+" ")}else if(ot(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function sx(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ke(e)&&(t.class=Zn(e)),n&&(t.style=jo(n)),t}const rx="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ox="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ax="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",lx="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",cx=En(rx),ux=En(ox),fx=En(ax),hx=En(lx),dx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",px=En(dx);function jm(t){return!!t||t===""}function mx(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ei(t[i],e[i]);return n}function Ei(t,e){if(t===e)return!0;let n=kh(t),i=kh(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Xn(t),i=Xn(e),n||i)return t===e;if(n=Ee(t),i=Ee(e),n||i)return n&&i?mx(t,e):!1;if(n=ot(t),i=ot(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ei(t[o],e[o]))return!1}}return String(t)===String(e)}function Ql(t,e){return t.findIndex(n=>Ei(n,e))}const gx=t=>ke(t)?t:t==null?"":Ee(t)||ot(t)&&(t.toString===Gm||!Ie(t.toString))?JSON.stringify(t,$m,2):String(t),$m=(t,e)=>e&&e.__v_isRef?$m(t,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Pc(i,r)+" =>"]=s,n),{})}:Xs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pc(n))}:Xn(e)?Pc(e):ot(e)&&!Ee(e)&&!Wm(e)?String(e):e,Pc=(t,e="")=>{var n;return Xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gn;class wf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gn;try{return gn=this,e()}finally{gn=n}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function _x(t){return new wf(t)}function Ym(t,e=gn){e&&e.active&&e.effects.push(t)}function Km(){return gn}function vx(t){gn&&gn.cleanups.push(t)}let As;class Ur{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ym(this,s)}get dirty(){if(this._dirtyLevel===1){js();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(xx(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),$s()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ji,n=As;try{return ji=!0,As=this,this._runnings++,Vh(this),this.fn()}finally{zh(this),this._runnings--,As=n,ji=e}}stop(){var e;this.active&&(Vh(this),zh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function xx(t){return t.value}function Vh(t){t._trackId++,t._depsLength=0}function zh(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Zm(t.deps[e],t);t.deps.length=t._depsLength}}function Zm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function Sx(t,e){t.effect instanceof Ur&&(t=t.effect.fn);const n=new Ur(t,Pt,()=>{n.dirty&&n.run()});e&&(nt(n,e),e.scope&&Ym(n,e.scope)),(!e||!e.lazy)&&n.run();const i=n.run.bind(n);return i.effect=n,i}function yx(t){t.effect.stop()}let ji=!0,Au=0;const Jm=[];function js(){Jm.push(ji),ji=!1}function $s(){const t=Jm.pop();ji=t===void 0?!0:t}function Cf(){Au++}function Rf(){for(Au--;!Au&&wu.length;)wu.shift()()}function Qm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Zm(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wu=[];function eg(t,e,n){Cf();for(const i of t.keys())if(i._dirtyLevel<e&&t.get(i)===i._trackId){const s=i._dirtyLevel;i._dirtyLevel=e,s===0&&(i._shouldSchedule=!0,i.trigger())}tg(t),Rf()}function tg(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,wu.push(e.scheduler))}const ng=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},cl=new WeakMap,ws=Symbol(""),Cu=Symbol("");function hn(t,e,n){if(ji&&As){let i=cl.get(t);i||cl.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=ng(()=>i.delete(n))),Qm(As,s)}}function Si(t,e,n,i,s,r){const o=cl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ee(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Xn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ee(t)?Af(n)&&a.push(o.get("length")):(a.push(o.get(ws)),br(t)&&a.push(o.get(Cu)));break;case"delete":Ee(t)||(a.push(o.get(ws)),br(t)&&a.push(o.get(Cu)));break;case"set":br(t)&&a.push(o.get(ws));break}Cf();for(const l of a)l&&eg(l,2);Rf()}function Ex(t,e){var n;return(n=cl.get(t))==null?void 0:n.get(e)}const Mx=En("__proto__,__v_isRef,__isVue"),ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xn)),Gh=bx();function bx(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ze(this);for(let r=0,o=this.length;r<o;r++)hn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ze)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){js(),Cf();const i=Ze(this)[e].apply(this,n);return Rf(),$s(),i}}),t}function Tx(t){const e=Ze(this);return hn(e,"has",t),e.hasOwnProperty(t)}class sg{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?ug:cg:r?lg:ag).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ee(e);if(!s){if(o&&tt(Gh,n))return Reflect.get(Gh,n,i);if(n==="hasOwnProperty")return Tx}const a=Reflect.get(e,n,i);return(Xn(n)?ig.has(n):Mx(n))||(s||hn(e,"get",n),r)?a:kt(a)?o&&Af(n)?a:a.value:ot(a)?s?If(a):$o(a):a}}class rg extends sg{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._shallow){const l=Os(r);if(!To(i)&&!Os(i)&&(r=Ze(r),i=Ze(i)),!Ee(e)&&kt(r)&&!kt(i))return l?!1:(r.value=i,!0)}const o=Ee(e)&&Af(n)?Number(n)<e.length:tt(e,n),a=Reflect.set(e,n,i,s);return e===Ze(s)&&(o?qn(i,r)&&Si(e,"set",n,i):Si(e,"add",n,i)),a}deleteProperty(e,n){const i=tt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Si(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Xn(n)||!ig.has(n))&&hn(e,"has",n),i}ownKeys(e){return hn(e,"iterate",Ee(e)?"length":ws),Reflect.ownKeys(e)}}class og extends sg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ax=new rg,wx=new og,Cx=new rg(!0),Rx=new og(!0),Pf=t=>t,ec=t=>Reflect.getPrototypeOf(t);function fa(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ze(t),r=Ze(e);n||(qn(e,r)&&hn(s,"get",e),hn(s,"get",r));const{has:o}=ec(s),a=i?Pf:n?Uf:Ao;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function ha(t,e=!1){const n=this.__v_raw,i=Ze(n),s=Ze(t);return e||(qn(t,s)&&hn(i,"has",t),hn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function da(t,e=!1){return t=t.__v_raw,!e&&hn(Ze(t),"iterate",ws),Reflect.get(t,"size",t)}function Wh(t){t=Ze(t);const e=Ze(this);return ec(e).has.call(e,t)||(e.add(t),Si(e,"add",t,t)),this}function Xh(t,e){e=Ze(e);const n=Ze(this),{has:i,get:s}=ec(n);let r=i.call(n,t);r||(t=Ze(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?qn(e,o)&&Si(n,"set",t,e):Si(n,"add",t,e),this}function qh(t){const e=Ze(this),{has:n,get:i}=ec(e);let s=n.call(e,t);s||(t=Ze(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Si(e,"delete",t,void 0),r}function jh(){const t=Ze(this),e=t.size!==0,n=t.clear();return e&&Si(t,"clear",void 0,void 0),n}function pa(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ze(o),l=e?Pf:t?Uf:Ao;return!t&&hn(a,"iterate",ws),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function ma(t,e,n){return function(...i){const s=this.__v_raw,r=Ze(s),o=br(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Pf:e?Uf:Ao;return!e&&hn(r,"iterate",l?Cu:ws),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ai(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Px(){const t={get(r){return fa(this,r)},get size(){return da(this)},has:ha,add:Wh,set:Xh,delete:qh,clear:jh,forEach:pa(!1,!1)},e={get(r){return fa(this,r,!1,!0)},get size(){return da(this)},has:ha,add:Wh,set:Xh,delete:qh,clear:jh,forEach:pa(!1,!0)},n={get(r){return fa(this,r,!0)},get size(){return da(this,!0)},has(r){return ha.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:pa(!0,!1)},i={get(r){return fa(this,r,!0,!0)},get size(){return da(this,!0)},has(r){return ha.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:pa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ma(r,!1,!1),n[r]=ma(r,!0,!1),e[r]=ma(r,!1,!0),i[r]=ma(r,!0,!0)}),[t,n,e,i]}const[Lx,Ix,Dx,Nx]=Px();function tc(t,e){const n=e?t?Nx:Dx:t?Ix:Lx;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(tt(n,s)&&s in i?n:i,s,r)}const Ux={get:tc(!1,!1)},Ox={get:tc(!1,!0)},Fx={get:tc(!0,!1)},Bx={get:tc(!0,!0)},ag=new WeakMap,lg=new WeakMap,cg=new WeakMap,ug=new WeakMap;function kx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hx(t){return t.__v_skip||!Object.isExtensible(t)?0:kx(Yv(t))}function $o(t){return Os(t)?t:nc(t,!1,Ax,Ux,ag)}function Lf(t){return nc(t,!1,Cx,Ox,lg)}function If(t){return nc(t,!0,wx,Fx,cg)}function Vx(t){return nc(t,!0,Rx,Bx,ug)}function nc(t,e,n,i,s){if(!ot(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Hx(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Cs(t){return Os(t)?Cs(t.__v_raw):!!(t&&t.__v_isReactive)}function Os(t){return!!(t&&t.__v_isReadonly)}function To(t){return!!(t&&t.__v_isShallow)}function Df(t){return Cs(t)||Os(t)}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function Nf(t){return al(t,"__v_skip",!0),t}const Ao=t=>ot(t)?$o(t):t,Uf=t=>ot(t)?If(t):t;class fg{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ur(()=>e(this._value),()=>wr(this,1),()=>this.dep&&tg(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ze(this);return(!e._cacheable||e.effect.dirty)&&qn(e._value,e._value=e.effect.run())&&wr(e,2),Of(e),e.effect._dirtyLevel>=1&&wr(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function zx(t,e,n=!1){let i,s;const r=Ie(t);return r?(i=t,s=Pt):(i=t.get,s=t.set),new fg(i,s,r||!s,n)}function Of(t){ji&&As&&(t=Ze(t),Qm(As,t.dep||(t.dep=ng(()=>t.dep=void 0,t instanceof fg?t:void 0))))}function wr(t,e=2,n){t=Ze(t);const i=t.dep;i&&eg(i,e)}function kt(t){return!!(t&&t.__v_isRef===!0)}function Cr(t){return dg(t,!1)}function hg(t){return dg(t,!0)}function dg(t,e){return kt(t)?t:new Gx(t,e)}class Gx{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ze(e),this._value=n?e:Ao(e)}get value(){return Of(this),this._value}set value(e){const n=this.__v_isShallow||To(e)||Os(e);e=n?e:Ze(e),qn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ao(e),wr(this,2))}}function Wx(t){wr(t,2)}function an(t){return kt(t)?t.value:t}function Xx(t){return Ie(t)?t():an(t)}const qx={get:(t,e,n)=>an(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return kt(s)&&!kt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Ff(t){return Cs(t)?t:new Proxy(t,qx)}class jx{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=e(()=>Of(this),()=>wr(this));this._get=n,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function pg(t){return new jx(t)}function $x(t){const e=Ee(t)?new Array(t.length):{};for(const n in t)e[n]=mg(t,n);return e}class Yx{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ex(Ze(this._object),this._key)}}class Kx{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Zx(t,e,n){return kt(t)?t:Ie(t)?new Kx(t):ot(t)&&arguments.length>1?mg(t,e,n):Cr(t)}function mg(t,e,n){const i=t[e];return kt(i)?i:new Yx(t,e,n)}const Jx={GET:"get",HAS:"has",ITERATE:"iterate"},Qx={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eS(t,e){}const tS={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},nS={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function yi(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Ys(r,e,n)}return s}function yn(t,e,n,i){if(Ie(t)){const r=yi(t,e,n,i);return r&&Tf(r)&&r.catch(o=>{Ys(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(yn(t[r],e,n,i));return s}function Ys(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){yi(l,null,10,[t,o,a]);return}}iS(t,n,s,i)}function iS(t,e,n,i=!0){console.error(t)}let wo=!1,Ru=!1;const qt=[];let Jn=0;const Rr=[];let Bi=null,gs=0;const gg=Promise.resolve();let Bf=null;function Yo(t){const e=Bf||gg;return t?e.then(this?t.bind(this):t):e}function sS(t){let e=Jn+1,n=qt.length;for(;e<n;){const i=e+n>>>1,s=qt[i],r=Co(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function ic(t){(!qt.length||!qt.includes(t,wo&&t.allowRecurse?Jn+1:Jn))&&(t.id==null?qt.push(t):qt.splice(sS(t.id),0,t),_g())}function _g(){!wo&&!Ru&&(Ru=!0,Bf=gg.then(vg))}function rS(t){const e=qt.indexOf(t);e>Jn&&qt.splice(e,1)}function ul(t){Ee(t)?Rr.push(...t):(!Bi||!Bi.includes(t,t.allowRecurse?gs+1:gs))&&Rr.push(t),_g()}function $h(t,e,n=wo?Jn+1:0){for(;n<qt.length;n++){const i=qt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;qt.splice(n,1),n--,i()}}}function fl(t){if(Rr.length){const e=[...new Set(Rr)].sort((n,i)=>Co(n)-Co(i));if(Rr.length=0,Bi){Bi.push(...e);return}for(Bi=e,gs=0;gs<Bi.length;gs++)Bi[gs]();Bi=null,gs=0}}const Co=t=>t.id==null?1/0:t.id,oS=(t,e)=>{const n=Co(t)-Co(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vg(t){Ru=!1,wo=!0,qt.sort(oS);try{for(Jn=0;Jn<qt.length;Jn++){const e=qt[Jn];e&&e.active!==!1&&yi(e,null,14)}}finally{Jn=0,qt.length=0,fl(),wo=!1,Bf=null,(qt.length||Rr.length)&&vg()}}let gr,ga=[];function xg(t,e){var n,i;gr=t,gr?(gr.enabled=!0,ga.forEach(({event:s,args:r})=>gr.emit(s,...r)),ga=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{xg(r,e)}),setTimeout(()=>{gr||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ga=[])},3e3)):ga=[]}function aS(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||it;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||it;h&&(s=n.map(d=>ke(d)?d.trim():d)),f&&(s=n.map(bo))}let a,l=i[a=Tr(e)]||i[a=Tr(Et(e))];!l&&r&&(l=i[a=Tr(Sn(e))]),l&&yn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(c,t,6,s)}}function Sg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ie(t)){const l=c=>{const u=Sg(c,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ot(t)&&i.set(t,null),null):(Ee(r)?r.forEach(l=>o[l]=null):nt(o,r),ot(t)&&i.set(t,o),o)}function sc(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(t,e[0].toLowerCase()+e.slice(1))||tt(t,Sn(e))||tt(t,e))}let At=null,rc=null;function Ro(t){const e=At;return At=t,rc=t&&t.type.__scopeId||null,e}function yg(t){rc=t}function Eg(){rc=null}const lS=t=>Wi;function Wi(t,e=At,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Fu(-1);const r=Ro(e);let o;try{o=t(...s)}finally{Ro(r),i._d&&Fu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qa(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=t;let m,p;const S=Ro(t);try{if(n.shapeFlag&4){const M=s||i,A=M;m=vn(u.call(A,M,f,r,d,h,g)),p=l}else{const M=e;m=vn(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),p=e.props?l:uS(l)}}catch(M){_o.length=0,Ys(M,t,1),m=Qe(jt)}let _=m;if(p&&v!==!1){const M=Object.keys(p),{shapeFlag:A}=_;M.length&&A&7&&(o&&M.some(Mf)&&(p=fS(p,o)),_=ti(_,p))}return n.dirs&&(_=ti(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,Ro(S),m}function cS(t,e=!0){let n;for(let i=0;i<t.length;i++){const s=t[i];if(es(s)){if(s.type!==jt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const uS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},fS=(t,e)=>{const n={};for(const i in t)(!Mf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function hS(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Yh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!sc(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yh(i,o,c):!0:!!o;return!1}function Yh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!sc(n,r))return!0}return!1}function kf({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hf="components",dS="directives";function pS(t,e){return Vf(Hf,t,!0,e)||t}const Mg=Symbol.for("v-ndc");function mS(t){return ke(t)?Vf(Hf,t,!1)||t:t||Mg}function gS(t){return Vf(dS,t)}function Vf(t,e,n=!0,i=!1){const s=At||Rt;if(s){const r=s.type;if(t===Hf){const a=zu(r,!1);if(a&&(a===e||a===Et(e)||a===qs(Et(e))))return r}const o=Kh(s[t]||r[t],e)||Kh(s.appContext[t],e);return!o&&i?r:o}}function Kh(t,e){return t&&(t[e]||t[Et(e)]||t[qs(Et(e))])}const bg=t=>t.__isSuspense;let Pu=0;const _S={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){if(t==null)xS(e,n,i,s,r,o,a,l,c);else{if(r&&r.deps>0){e.suspense=t.suspense;return}SS(t,e,n,i,s,o,a,l,c)}},hydrate:yS,create:zf,normalize:ES},vS=_S;function Po(t,e){const n=t.props&&t.props[e];Ie(n)&&n()}function xS(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=zf(t,s,i,e,f,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,r,o),h.deps>0?(Po(t,"onPending"),Po(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),Pr(h,t.ssFallback)):h.resolve(!1,!0)}function SS(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:p}=f;if(v)f.pendingBranch=h,Hn(h,v)?(l(v,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,d,n,i,s,null,r,o,a),Pr(f,d)))):(f.pendingId=Pu++,p?(f.isHydrating=!1,f.activeBranch=v):c(v,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():(l(g,d,n,i,s,null,r,o,a),Pr(f,d))):g&&Hn(h,g)?(l(g,h,n,i,s,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(g&&Hn(h,g))l(g,h,n,i,s,f,r,o,a),Pr(f,h);else if(Po(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Pu++,l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:S,pendingId:_}=f;S>0?setTimeout(()=>{f.pendingId===_&&f.fallback(d)},S):S===0&&f.fallback(d)}}function zf(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:v,remove:m}}=c;let p;const S=MS(t);S&&e!=null&&e.pendingBranch&&(p=e.pendingId,e.deps++);const _=t.props?ll(t.props.timeout):void 0,M=r,A={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:Pu++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,C=!1){const{vnode:L,activeBranch:y,pendingBranch:E,pendingId:N,effects:U,parentComponent:$,container:I}=A;let H=!1;A.isHydrating?A.isHydrating=!1:T||(H=y&&E.transition&&E.transition.mode==="out-in",H&&(y.transition.afterLeave=()=>{N===A.pendingId&&(h(E,I,r===M?g(y):r,0),ul(U))}),y&&(v(y.el)!==A.hiddenContainer&&(r=g(y)),d(y,$,A,!0)),H||h(E,I,r,0)),Pr(A,E),A.pendingBranch=null,A.isInFallback=!1;let k=A.parent,Y=!1;for(;k;){if(k.pendingBranch){k.effects.push(...U),Y=!0;break}k=k.parent}!Y&&!H&&ul(U),A.effects=[],S&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Po(L,"onResolve")},fallback(T){if(!A.pendingBranch)return;const{vnode:C,activeBranch:L,parentComponent:y,container:E,namespace:N}=A;Po(C,"onFallback");const U=g(L),$=()=>{A.isInFallback&&(f(null,T,E,U,y,null,N,a,l),Pr(A,T))},I=T.transition&&T.transition.mode==="out-in";I&&(L.transition.afterLeave=$),A.isInFallback=!0,d(L,y,null,!0),I||$()},move(T,C,L){A.activeBranch&&h(A.activeBranch,T,C,L),A.container=T},next(){return A.activeBranch&&g(A.activeBranch)},registerDep(T,C){const L=!!A.pendingBranch;L&&A.deps++;const y=T.vnode.el;T.asyncDep.catch(E=>{Ys(E,T,0)}).then(E=>{if(T.isUnmounted||A.isUnmounted||A.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:N}=T;Hu(T,E,!1),y&&(N.el=y);const U=!y&&T.subTree.el;C(T,N,v(y||T.subTree.el),y?null:g(T.subTree),A,o,l),U&&m(U),kf(T,N.el),L&&--A.deps===0&&A.resolve()})},unmount(T,C){A.isUnmounted=!0,A.activeBranch&&d(A.activeBranch,n,T,C),A.pendingBranch&&d(A.pendingBranch,n,T,C)}};return A}function yS(t,e,n,i,s,r,o,a,l){const c=e.suspense=zf(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function ES(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Zh(i?n.default:n),t.ssFallback=i?Zh(n.fallback):Qe(jt)}function Zh(t){let e;if(Ie(t)){const n=ks&&t._c;n&&(t._d=!1,is()),t=t(),n&&(t._d=!0,e=ln,i_())}return Ee(t)&&(t=cS(t)),t=vn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Tg(t,e){e&&e.pendingBranch?Ee(t)?e.effects.push(...t):e.effects.push(t):ul(t)}function Pr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,kf(i,s))}function MS(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const Ag=Symbol.for("v-scx"),wg=()=>Qn(Ag);function bS(t,e){return Ko(t,null,e)}function Cg(t,e){return Ko(t,null,{flush:"post"})}function Rg(t,e){return Ko(t,null,{flush:"sync"})}const _a={};function Lr(t,e,n){return Ko(t,e,n)}function Ko(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=it){if(e&&r){const T=e;e=(...C)=>{T(...C),A()}}const l=Rt,c=T=>i===!0?T:xs(T,i===!1?1:void 0);let u,f=!1,h=!1;if(kt(t)?(u=()=>t.value,f=To(t)):Cs(t)?(u=()=>c(t),f=!0):Ee(t)?(h=!0,f=t.some(T=>Cs(T)||To(T)),u=()=>t.map(T=>{if(kt(T))return T.value;if(Cs(T))return c(T);if(Ie(T))return yi(T,l,2)})):Ie(t)?e?u=()=>yi(t,l,2):u=()=>(d&&d(),yn(t,l,3,[g])):u=Pt,e&&i){const T=u;u=()=>xs(T())}let d,g=T=>{d=_.onStop=()=>{yi(T,l,4),d=_.onStop=void 0}},v;if(ea)if(g=Pt,e?n&&yn(e,l,3,[u(),h?[]:void 0,g]):u(),s==="sync"){const T=wg();v=T.__watcherHandles||(T.__watcherHandles=[])}else return Pt;let m=h?new Array(t.length).fill(_a):_a;const p=()=>{if(!(!_.active||!_.dirty))if(e){const T=_.run();(i||f||(h?T.some((C,L)=>qn(C,m[L])):qn(T,m)))&&(d&&d(),yn(e,l,3,[T,m===_a?void 0:h&&m[0]===_a?[]:m,g]),m=T)}else _.run()};p.allowRecurse=!!e;let S;s==="sync"?S=p:s==="post"?S=()=>Bt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),S=()=>ic(p));const _=new Ur(u,Pt,S),M=Km(),A=()=>{_.stop(),M&&bf(M.effects,_)};return e?n?p():m=_.run():s==="post"?Bt(_.run.bind(_),l&&l.suspense):_.run(),v&&v.push(A),A}function TS(t,e,n){const i=this.proxy,s=ke(t)?t.includes(".")?Pg(i,t):()=>i[t]:t.bind(i,i);let r;Ie(e)?r=e:(r=e.handler,n=e);const o=Hs(this),a=Ko(s,r.bind(i),n);return o(),a}function Pg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function xs(t,e,n=0,i){if(!ot(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),kt(t))xs(t.value,e,n,i);else if(Ee(t))for(let s=0;s<t.length;s++)xs(t[s],e,n,i);else if(Xs(t)||br(t))t.forEach(s=>{xs(s,e,n,i)});else if(Wm(t))for(const s in t)xs(t[s],e,n,i);return t}function AS(t,e){if(At===null)return t;const n=hc(At)||At.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=it]=e[s];r&&(Ie(r)&&(r={mounted:r,updated:r}),r.deep&&xs(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Yn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(js(),yn(l,n,8,[t.el,a,t,e]),$s())}}const ki=Symbol("_leaveCb"),va=Symbol("_enterCb");function Gf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jo(()=>{t.isMounted=!0}),cc(()=>{t.isUnmounting=!0}),t}const Tn=[Function,Array],Wf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},wS={name:"BaseTransition",props:Wf,setup(t,{slots:e}){const n=Ti(),i=Gf();let s;return()=>{const r=e.default&&oc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==jt){o=v;break}}const a=Ze(t),{mode:l}=a;if(i.isLeaving)return Lc(o);const c=Jh(o);if(!c)return Lc(o);const u=Or(c,a,i,n);Fs(c,u);const f=n.subTree,h=f&&Jh(f);let d=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,d=!0)}if(h&&h.type!==jt&&(!Hn(c,h)||d)){const v=Or(h,a,i,n);if(Fs(h,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Lc(o);l==="in-out"&&c.type!==jt&&(v.delayLeave=(m,p,S)=>{const _=Ig(i,h);_[String(h.key)]=h,m[ki]=()=>{p(),m[ki]=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Lg=wS;function Ig(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Or(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:p,onAppearCancelled:S}=e,_=String(t.key),M=Ig(n,t),A=(L,y)=>{L&&yn(L,i,9,y)},T=(L,y)=>{const E=y[1];A(L,y),Ee(L)?L.every(N=>N.length<=1)&&E():L.length<=1&&E()},C={mode:r,persisted:o,beforeEnter(L){let y=a;if(!n.isMounted)if(s)y=v||a;else return;L[ki]&&L[ki](!0);const E=M[_];E&&Hn(t,E)&&E.el[ki]&&E.el[ki](),A(y,[L])},enter(L){let y=l,E=c,N=u;if(!n.isMounted)if(s)y=m||l,E=p||c,N=S||u;else return;let U=!1;const $=L[va]=I=>{U||(U=!0,I?A(N,[L]):A(E,[L]),C.delayedLeave&&C.delayedLeave(),L[va]=void 0)};y?T(y,[L,$]):$()},leave(L,y){const E=String(t.key);if(L[va]&&L[va](!0),n.isUnmounting)return y();A(f,[L]);let N=!1;const U=L[ki]=$=>{N||(N=!0,y(),$?A(g,[L]):A(d,[L]),L[ki]=void 0,M[E]===t&&delete M[E])};M[E]=t,h?T(h,[L,U]):U()},clone(L){return Or(L,e,n,i)}};return C}function Lc(t){if(Zo(t))return t=ti(t),t.children=null,t}function Jh(t){return Zo(t)?t.children?t.children[0]:void 0:t}function Fs(t,e){t.shapeFlag&6&&t.component?Fs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function oc(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ot?(o.patchFlag&128&&s++,i=i.concat(oc(o.children,e,a))):(e||o.type!==jt)&&i.push(a!=null?ti(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Ks(t,e){return Ie(t)?nt({name:t.name},e,{setup:t}):t}const Rs=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function CS(t){Ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let d;return l||(d=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,m)=>{a(g,()=>v(f()),()=>m(g),u+1)});throw g}).then(g=>d!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Ks({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=Rt;if(c)return()=>Ic(c,d);const g=S=>{l=null,Ys(S,d,13,!i)};if(o&&d.suspense||ea)return h().then(S=>()=>Ic(S,d)).catch(S=>(g(S),()=>i?Qe(i,{error:S}):null));const v=Cr(!1),m=Cr(),p=Cr(!!s);return s&&setTimeout(()=>{p.value=!1},s),r!=null&&setTimeout(()=>{if(!v.value&&!m.value){const S=new Error(`Async component timed out after ${r}ms.`);g(S),m.value=S}},r),h().then(()=>{v.value=!0,d.parent&&Zo(d.parent.vnode)&&(d.parent.effect.dirty=!0,ic(d.parent.update))}).catch(S=>{g(S),m.value=S}),()=>{if(v.value&&c)return Ic(c,d);if(m.value&&i)return Qe(i,{error:m.value});if(n&&!p.value)return Qe(n)}}})}function Ic(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=Qe(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Zo=t=>t.type.__isKeepAlive,RS={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ti(),i=n.ctx;if(!i.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(S,_,M,A,T)=>{const C=S.component;c(S,_,M,0,a),l(C.vnode,S,_,M,C,a,A,S.slotScopeIds,T),Bt(()=>{C.isDeactivated=!1,C.a&&Ar(C.a);const L=S.props&&S.props.onVnodeMounted;L&&rn(L,C.parent,S)},a)},i.deactivate=S=>{const _=S.component;c(S,h,null,1,a),Bt(()=>{_.da&&Ar(_.da);const M=S.props&&S.props.onVnodeUnmounted;M&&rn(M,_.parent,S),_.isDeactivated=!0},a)};function d(S){Dc(S),u(S,n,a,!0)}function g(S){s.forEach((_,M)=>{const A=zu(_.type);A&&(!S||!S(A))&&v(M)})}function v(S){const _=s.get(S);!o||!Hn(_,o)?d(_):o&&Dc(o),s.delete(S),r.delete(S)}Lr(()=>[t.include,t.exclude],([S,_])=>{S&&g(M=>co(S,M)),_&&g(M=>!co(_,M))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&s.set(m,Nc(n.subTree))};return Jo(p),lc(p),cc(()=>{s.forEach(S=>{const{subTree:_,suspense:M}=n,A=Nc(_);if(S.type===A.type&&S.key===A.key){Dc(A);const T=A.component.da;T&&Bt(T,M);return}d(S)})}),()=>{if(m=null,!e.default)return null;const S=e.default(),_=S[0];if(S.length>1)return o=null,S;if(!es(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let M=Nc(_);const A=M.type,T=zu(Rs(M)?M.type.__asyncResolved||{}:A),{include:C,exclude:L,max:y}=t;if(C&&(!T||!co(C,T))||L&&T&&co(L,T))return o=M,_;const E=M.key==null?A:M.key,N=s.get(E);return M.el&&(M=ti(M),_.shapeFlag&128&&(_.ssContent=M)),m=E,N?(M.el=N.el,M.component=N.component,M.transition&&Fs(M,M.transition),M.shapeFlag|=512,r.delete(E),r.add(E)):(r.add(E),y&&r.size>parseInt(y,10)&&v(r.values().next().value)),M.shapeFlag|=256,o=M,bg(_.type)?_:M}}},PS=RS;function co(t,e){return Ee(t)?t.some(n=>co(n,e)):ke(t)?t.split(",").includes(e):$v(t)?t.test(e):!1}function Dg(t,e){Ug(t,"a",e)}function Ng(t,e){Ug(t,"da",e)}function Ug(t,e,n=Rt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ac(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Zo(s.parent.vnode)&&LS(i,e,n,s),s=s.parent}}function LS(t,e,n,i){const s=ac(e,t,i,!0);uc(()=>{bf(i[e],s)},n)}function Dc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Nc(t){return t.shapeFlag&128?t.ssContent:t}function ac(t,e,n=Rt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;js();const a=Hs(n),l=yn(e,n,t,o);return a(),$s(),l});return i?s.unshift(r):s.push(r),r}}const bi=t=>(e,n=Rt)=>(!ea||t==="sp")&&ac(t,(...i)=>e(...i),n),Og=bi("bm"),Jo=bi("m"),Fg=bi("bu"),lc=bi("u"),cc=bi("bum"),uc=bi("um"),Bg=bi("sp"),kg=bi("rtg"),Hg=bi("rtc");function Vg(t,e=Rt){ac("ec",t,e)}function IS(t,e,n,i){let s;const r=n&&n[i];if(Ee(t)||ke(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ot(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function DS(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(Ee(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function NS(t,e,n={},i,s){if(At.isCE||At.parent&&Rs(At.parent)&&At.parent.isCE)return e!=="default"&&(n.name=e),Qe("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),is();const o=r&&zg(r(n)),a=$f(Ot,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function zg(t){return t.some(e=>es(e)?!(e.type===jt||e.type===Ot&&!zg(e.children)):!0)?t:null}function US(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:Tr(i)]=t[i];return n}const Lu=t=>t?c_(t)?hc(t)||t.proxy:Lu(t.parent):null,po=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lu(t.parent),$root:t=>Lu(t.root),$emit:t=>t.emit,$options:t=>Xf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ic(t.update)}),$nextTick:t=>t.n||(t.n=Yo.bind(t.proxy)),$watch:t=>TS.bind(t)}),Uc=(t,e)=>t!==it&&!t.__isScriptSetup&&tt(t,e),Iu={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Uc(i,e))return o[e]=1,i[e];if(s!==it&&tt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&tt(c,e))return o[e]=3,r[e];if(n!==it&&tt(n,e))return o[e]=4,n[e];Du&&(o[e]=0)}}const u=po[e];let f,h;if(u)return e==="$attrs"&&hn(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==it&&tt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,tt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Uc(s,e)?(s[e]=n,!0):i!==it&&tt(i,e)?(i[e]=n,!0):tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==it&&tt(t,o)||Uc(e,o)||(a=r[0])&&tt(a,o)||tt(i,o)||tt(po,o)||tt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},OS=nt({},Iu,{get(t,e){if(e!==Symbol.unscopables)return Iu.get(t,e,t)},has(t,e){return e[0]!=="_"&&!ex(e)}});function FS(){return null}function BS(){return null}function kS(t){}function HS(t){}function VS(){return null}function zS(){}function GS(t,e){return null}function WS(){return Gg().slots}function XS(){return Gg().attrs}function Gg(){const t=Ti();return t.setupContext||(t.setupContext=d_(t))}function Lo(t){return Ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function qS(t,e){const n=Lo(t);for(const i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?Ee(s)||Ie(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function jS(t,e){return!t||!e?t||e:Ee(t)&&Ee(e)?t.concat(e):nt({},Lo(t),Lo(e))}function $S(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function YS(t){const e=Ti();let n=t();return ku(),Tf(n)&&(n=n.catch(i=>{throw Hs(e),i})),[n,()=>Hs(e)]}let Du=!0;function KS(t){const e=Xf(t),n=t.proxy,i=t.ctx;Du=!1,e.beforeCreate&&Qh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:_,unmounted:M,render:A,renderTracked:T,renderTriggered:C,errorCaptured:L,serverPrefetch:y,expose:E,inheritAttrs:N,components:U,directives:$,filters:I}=e;if(c&&ZS(c,i,null),o)for(const Y in o){const z=o[Y];Ie(z)&&(i[Y]=z.bind(n))}if(s){const Y=s.call(n,n);ot(Y)&&(t.data=$o(Y))}if(Du=!0,r)for(const Y in r){const z=r[Y],ne=Ie(z)?z.bind(n,n):Ie(z.get)?z.get.bind(n,n):Pt,ce=!Ie(z)&&Ie(z.set)?z.set.bind(n):Pt,he=Rn({get:ne,set:ce});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>he.value,set:pe=>he.value=pe})}if(a)for(const Y in a)Wg(a[Y],i,n,Y);if(l){const Y=Ie(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(z=>{mo(z,Y[z])})}u&&Qh(u,t,"c");function k(Y,z){Ee(z)?z.forEach(ne=>Y(ne.bind(n))):z&&Y(z.bind(n))}if(k(Og,f),k(Jo,h),k(Fg,d),k(lc,g),k(Dg,v),k(Ng,m),k(Vg,L),k(Hg,T),k(kg,C),k(cc,S),k(uc,M),k(Bg,y),Ee(E))if(E.length){const Y=t.exposed||(t.exposed={});E.forEach(z=>{Object.defineProperty(Y,z,{get:()=>n[z],set:ne=>n[z]=ne})})}else t.exposed||(t.exposed={});A&&t.render===Pt&&(t.render=A),N!=null&&(t.inheritAttrs=N),U&&(t.components=U),$&&(t.directives=$)}function ZS(t,e,n=Pt){Ee(t)&&(t=Nu(t));for(const i in t){const s=t[i];let r;ot(s)?"default"in s?r=Qn(s.from||i,s.default,!0):r=Qn(s.from||i):r=Qn(s),kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Qh(t,e,n){yn(Ee(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wg(t,e,n,i){const s=i.includes(".")?Pg(n,i):()=>n[i];if(ke(t)){const r=e[t];Ie(r)&&Lr(s,r)}else if(Ie(t))Lr(s,t.bind(n));else if(ot(t))if(Ee(t))t.forEach(r=>Wg(r,e,n,i));else{const r=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(r)&&Lr(s,r,t)}}function Xf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>hl(l,c,o,!0)),hl(l,e,o)),ot(e)&&r.set(e,l),l}function hl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&hl(t,r,n,!0),s&&s.forEach(o=>hl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=JS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const JS={data:ed,props:td,emits:td,methods:uo,computed:uo,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:uo,directives:uo,watch:ey,provide:ed,inject:QS};function ed(t,e){return e?t?function(){return nt(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function QS(t,e){return uo(Nu(t),Nu(e))}function Nu(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Jt(t,e){return t?[...new Set([].concat(t,e))]:e}function uo(t,e){return t?nt(Object.create(null),t,e):e}function td(t,e){return t?Ee(t)&&Ee(e)?[...new Set([...t,...e])]:nt(Object.create(null),Lo(t),Lo(e??{})):e}function ey(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const i in e)n[i]=Jt(t[i],e[i]);return n}function Xg(){return{app:null,config:{isNativeTag:Ja,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ty=0;function ny(t,e){return function(i,s=null){Ie(i)||(i=nt({},i)),s!=null&&!ot(s)&&(s=null);const r=Xg(),o=new WeakSet;let a=!1;const l=r.app={_uid:ty++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:m_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ie(c.install)?(o.add(c),c.install(l,...u)):Ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=Qe(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,hc(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Io=l;try{return c()}finally{Io=null}}};return l}}let Io=null;function mo(t,e){if(Rt){let n=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===n&&(n=Rt.provides=Object.create(i)),n[t]=e}}function Qn(t,e,n=!1){const i=Rt||At;if(i||Io){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Io._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ie(e)?e.call(i&&i.proxy):e}}function iy(){return!!(Rt||At||Io)}function sy(t,e,n,i=!1){const s={},r={};al(r,fc,1),t.propsDefaults=Object.create(null),qg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Lf(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function ry(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ze(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(sc(t.emitsOptions,h))continue;const d=e[h];if(l)if(tt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Et(h);s[g]=Uu(l,a,g,d,t,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{qg(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=Sn(f))===f||!tt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Uu(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!tt(e,f))&&(delete r[f],c=!0)}c&&Si(t,"set","$attrs")}function qg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ts(l))continue;const c=e[l];let u;s&&tt(s,u=Et(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:sc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ze(n),c=a||it;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Uu(s,l,f,c[f],t,!tt(c,f))}}return o}function Uu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Hs(s);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Sn(n))&&(i=!0))}return i}function jg(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ie(t)){const u=f=>{l=!0;const[h,d]=jg(f,e,!0);nt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ot(t)&&i.set(t,Mr),Mr;if(Ee(r))for(let u=0;u<r.length;u++){const f=Et(r[u]);nd(f)&&(o[f]=it)}else if(r)for(const u in r){const f=Et(u);if(nd(f)){const h=r[u],d=o[f]=Ee(h)||Ie(h)?{type:h}:nt({},h);if(d){const g=rd(Boolean,d.type),v=rd(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||tt(d,"default"))&&a.push(f)}}}const c=[o,a];return ot(t)&&i.set(t,c),c}function nd(t){return t[0]!=="$"}function id(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function sd(t,e){return id(t)===id(e)}function rd(t,e){return Ee(e)?e.findIndex(n=>sd(n,t)):Ie(e)&&sd(e,t)?0:-1}const $g=t=>t[0]==="_"||t==="$stable",qf=t=>Ee(t)?t.map(vn):[vn(t)],oy=(t,e,n)=>{if(e._n)return e;const i=Wi((...s)=>qf(e(...s)),n);return i._c=!1,i},Yg=(t,e,n)=>{const i=t._ctx;for(const s in t){if($g(s))continue;const r=t[s];if(Ie(r))e[s]=oy(s,r,i);else if(r!=null){const o=qf(r);e[s]=()=>o}}},Kg=(t,e)=>{const n=qf(e);t.slots.default=()=>n},ay=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ze(e),al(e,"_",n)):Yg(e,t.slots={})}else t.slots={},e&&Kg(t,e);al(t.slots,fc,1)},ly=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=it;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(nt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Yg(e,s)),o=e}else e&&(Kg(t,e),o={default:1});if(r)for(const a in s)!$g(a)&&o[a]==null&&delete s[a]};function dl(t,e,n,i,s=!1){if(Ee(t)){t.forEach((h,d)=>dl(h,e&&(Ee(e)?e[d]:e),n,i,s));return}if(Rs(i)&&!s)return;const r=i.shapeFlag&4?hc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ke(c)?(u[c]=null,tt(f,c)&&(f[c]=null)):kt(c)&&(c.value=null)),Ie(l))yi(l,a,12,[o,u]);else{const h=ke(l),d=kt(l),g=t.f;if(h||d){const v=()=>{if(g){const m=h?tt(f,l)?f[l]:u[l]:l.value;s?Ee(m)&&bf(m,r):Ee(m)?m.includes(r)||m.push(r):h?(u[l]=[r],tt(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,tt(f,l)&&(f[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};s||g?v():(v.id=-1,Bt(v,n))}}}let wi=!1;const cy=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",uy=t=>t.namespaceURI.includes("MathML"),xa=t=>{if(cy(t))return"svg";if(uy(t))return"mathml"},Sa=t=>t.nodeType===8;function fy(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,M)=>{if(!M.hasChildNodes()){n(null,_,M),fl(),M._vnode=_;return}wi=!1,f(M.firstChild,_,null,null,null),fl(),M._vnode=_,wi&&console.error("Hydration completed but contains mismatches.")},f=(_,M,A,T,C,L=!1)=>{const y=Sa(_)&&_.data==="[",E=()=>v(_,M,A,T,C,y),{type:N,ref:U,shapeFlag:$,patchFlag:I}=M;let H=_.nodeType;M.el=_,I===-2&&(L=!1,M.dynamicChildren=null);let k=null;switch(N){case Bs:H!==3?M.children===""?(l(M.el=s(""),o(_),_),k=_):k=E():(_.data!==M.children&&(wi=!0,_.data=M.children),k=r(_));break;case jt:S(_)?(k=r(_),p(M.el=_.content.firstChild,_,A)):H!==8||y?k=E():k=r(_);break;case Ps:if(y&&(_=r(_),H=_.nodeType),H===1||H===3){k=_;const Y=!M.children.length;for(let z=0;z<M.staticCount;z++)Y&&(M.children+=k.nodeType===1?k.outerHTML:k.data),z===M.staticCount-1&&(M.anchor=k),k=r(k);return y?r(k):k}else E();break;case Ot:y?k=g(_,M,A,T,C,L):k=E();break;default:if($&1)(H!==1||M.type.toLowerCase()!==_.tagName.toLowerCase())&&!S(_)?k=E():k=h(_,M,A,T,C,L);else if($&6){M.slotScopeIds=C;const Y=o(_);if(y?k=m(_):Sa(_)&&_.data==="teleport start"?k=m(_,_.data,"teleport end"):k=r(_),e(M,Y,null,A,T,xa(Y),L),Rs(M)){let z;y?(z=Qe(Ot),z.anchor=k?k.previousSibling:Y.lastChild):z=_.nodeType===3?Ss(""):Qe("div"),z.el=_,M.component.subTree=z}}else $&64?H!==8?k=E():k=M.type.hydrate(_,M,A,T,C,L,t,d):$&128&&(k=M.type.hydrate(_,M,A,T,xa(o(_)),C,L,t,f))}return U!=null&&dl(U,null,T,M),k},h=(_,M,A,T,C,L)=>{L=L||!!M.dynamicChildren;const{type:y,props:E,patchFlag:N,shapeFlag:U,dirs:$,transition:I}=M,H=y==="input"||y==="option";if(H||N!==-1){$&&Yn(M,null,A,"created");let k=!1;if(S(_)){k=e_(T,I)&&A&&A.vnode.props&&A.vnode.props.appear;const z=_.content.firstChild;k&&I.beforeEnter(z),p(z,_,A),M.el=_=z}if(U&16&&!(E&&(E.innerHTML||E.textContent))){let z=d(_.firstChild,M,_,A,T,C,L);for(;z;){wi=!0;const ne=z;z=z.nextSibling,a(ne)}}else U&8&&_.textContent!==M.children&&(wi=!0,_.textContent=M.children);if(E)if(H||!L||N&48)for(const z in E)(H&&(z.endsWith("value")||z==="indeterminate")||Ws(z)&&!Ts(z)||z[0]===".")&&i(_,z,null,E[z],void 0,void 0,A);else E.onClick&&i(_,"onClick",null,E.onClick,void 0,void 0,A);let Y;(Y=E&&E.onVnodeBeforeMount)&&rn(Y,A,M),$&&Yn(M,null,A,"beforeMount"),((Y=E&&E.onVnodeMounted)||$||k)&&Tg(()=>{Y&&rn(Y,A,M),k&&I.enter(_),$&&Yn(M,null,A,"mounted")},T)}return _.nextSibling},d=(_,M,A,T,C,L,y)=>{y=y||!!M.dynamicChildren;const E=M.children,N=E.length;for(let U=0;U<N;U++){const $=y?E[U]:E[U]=vn(E[U]);if(_)_=f(_,$,T,C,L,y);else{if($.type===Bs&&!$.children)continue;wi=!0,n(null,$,A,null,T,C,xa(A),L)}}return _},g=(_,M,A,T,C,L)=>{const{slotScopeIds:y}=M;y&&(C=C?C.concat(y):y);const E=o(_),N=d(r(_),M,E,A,T,C,L);return N&&Sa(N)&&N.data==="]"?r(M.anchor=N):(wi=!0,l(M.anchor=c("]"),E,N),N)},v=(_,M,A,T,C,L)=>{if(wi=!0,M.el=null,L){const N=m(_);for(;;){const U=r(_);if(U&&U!==N)a(U);else break}}const y=r(_),E=o(_);return a(_),n(null,M,E,y,A,T,xa(E),C),y},m=(_,M="[",A="]")=>{let T=0;for(;_;)if(_=r(_),_&&Sa(_)&&(_.data===M&&T++,_.data===A)){if(T===0)return r(_);T--}return _},p=(_,M,A)=>{const T=M.parentNode;T&&T.replaceChild(_,M);let C=A;for(;C;)C.vnode.el===M&&(C.vnode.el=C.subTree.el=_),C=C.parent},S=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[u,f]}const Bt=Tg;function Zg(t){return Qg(t)}function Jg(t){return Qg(t,fy)}function Qg(t,e){const n=Xm();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Pt,insertStaticContent:g}=t,v=(R,P,F,X=null,J=null,ie=null,b=void 0,x=null,D=!!P.dynamicChildren)=>{if(R===P)return;R&&!Hn(R,P)&&(X=G(R),pe(R,J,ie,!0),R=null),P.patchFlag===-2&&(D=!1,P.dynamicChildren=null);const{type:B,ref:j,shapeFlag:K}=P;switch(B){case Bs:m(R,P,F,X);break;case jt:p(R,P,F,X);break;case Ps:R==null&&S(P,F,X,b);break;case Ot:U(R,P,F,X,J,ie,b,x,D);break;default:K&1?A(R,P,F,X,J,ie,b,x,D):K&6?$(R,P,F,X,J,ie,b,x,D):(K&64||K&128)&&B.process(R,P,F,X,J,ie,b,x,D,ue)}j!=null&&J&&dl(j,R&&R.ref,ie,P||R,!P)},m=(R,P,F,X)=>{if(R==null)i(P.el=a(P.children),F,X);else{const J=P.el=R.el;P.children!==R.children&&c(J,P.children)}},p=(R,P,F,X)=>{R==null?i(P.el=l(P.children||""),F,X):P.el=R.el},S=(R,P,F,X)=>{[R.el,R.anchor]=g(R.children,P,F,X,R.el,R.anchor)},_=({el:R,anchor:P},F,X)=>{let J;for(;R&&R!==P;)J=h(R),i(R,F,X),R=J;i(P,F,X)},M=({el:R,anchor:P})=>{let F;for(;R&&R!==P;)F=h(R),s(R),R=F;s(P)},A=(R,P,F,X,J,ie,b,x,D)=>{P.type==="svg"?b="svg":P.type==="math"&&(b="mathml"),R==null?T(P,F,X,J,ie,b,x,D):y(R,P,J,ie,b,x,D)},T=(R,P,F,X,J,ie,b,x)=>{let D,B;const{props:j,shapeFlag:K,transition:ae,dirs:se}=R;if(D=R.el=o(R.type,ie,j&&j.is,j),K&8?u(D,R.children):K&16&&L(R.children,D,null,X,J,Oc(R,ie),b,x),se&&Yn(R,null,X,"created"),C(D,R,R.scopeId,b,X),j){for(const _e in j)_e!=="value"&&!Ts(_e)&&r(D,_e,null,j[_e],ie,R.children,X,J,ye);"value"in j&&r(D,"value",null,j.value,ie),(B=j.onVnodeBeforeMount)&&rn(B,X,R)}se&&Yn(R,null,X,"beforeMount");const de=e_(J,ae);de&&ae.beforeEnter(D),i(D,P,F),((B=j&&j.onVnodeMounted)||de||se)&&Bt(()=>{B&&rn(B,X,R),de&&ae.enter(D),se&&Yn(R,null,X,"mounted")},J)},C=(R,P,F,X,J)=>{if(F&&d(R,F),X)for(let ie=0;ie<X.length;ie++)d(R,X[ie]);if(J){let ie=J.subTree;if(P===ie){const b=J.vnode;C(R,b,b.scopeId,b.slotScopeIds,J.parent)}}},L=(R,P,F,X,J,ie,b,x,D=0)=>{for(let B=D;B<R.length;B++){const j=R[B]=x?Hi(R[B]):vn(R[B]);v(null,j,P,F,X,J,ie,b,x)}},y=(R,P,F,X,J,ie,b)=>{const x=P.el=R.el;let{patchFlag:D,dynamicChildren:B,dirs:j}=P;D|=R.patchFlag&16;const K=R.props||it,ae=P.props||it;let se;if(F&&os(F,!1),(se=ae.onVnodeBeforeUpdate)&&rn(se,F,P,R),j&&Yn(P,R,F,"beforeUpdate"),F&&os(F,!0),B?E(R.dynamicChildren,B,x,F,X,Oc(P,J),ie):b||z(R,P,x,null,F,X,Oc(P,J),ie,!1),D>0){if(D&16)N(x,P,K,ae,F,X,J);else if(D&2&&K.class!==ae.class&&r(x,"class",null,ae.class,J),D&4&&r(x,"style",K.style,ae.style,J),D&8){const de=P.dynamicProps;for(let _e=0;_e<de.length;_e++){const Te=de[_e],oe=K[Te],Ve=ae[Te];(Ve!==oe||Te==="value")&&r(x,Te,oe,Ve,J,R.children,F,X,ye)}}D&1&&R.children!==P.children&&u(x,P.children)}else!b&&B==null&&N(x,P,K,ae,F,X,J);((se=ae.onVnodeUpdated)||j)&&Bt(()=>{se&&rn(se,F,P,R),j&&Yn(P,R,F,"updated")},X)},E=(R,P,F,X,J,ie,b)=>{for(let x=0;x<P.length;x++){const D=R[x],B=P[x],j=D.el&&(D.type===Ot||!Hn(D,B)||D.shapeFlag&70)?f(D.el):F;v(D,B,j,null,X,J,ie,b,!0)}},N=(R,P,F,X,J,ie,b)=>{if(F!==X){if(F!==it)for(const x in F)!Ts(x)&&!(x in X)&&r(R,x,F[x],null,b,P.children,J,ie,ye);for(const x in X){if(Ts(x))continue;const D=X[x],B=F[x];D!==B&&x!=="value"&&r(R,x,B,D,b,P.children,J,ie,ye)}"value"in X&&r(R,"value",F.value,X.value,b)}},U=(R,P,F,X,J,ie,b,x,D)=>{const B=P.el=R?R.el:a(""),j=P.anchor=R?R.anchor:a("");let{patchFlag:K,dynamicChildren:ae,slotScopeIds:se}=P;se&&(x=x?x.concat(se):se),R==null?(i(B,F,X),i(j,F,X),L(P.children||[],F,j,J,ie,b,x,D)):K>0&&K&64&&ae&&R.dynamicChildren?(E(R.dynamicChildren,ae,F,J,ie,b,x),(P.key!=null||J&&P===J.subTree)&&jf(R,P,!0)):z(R,P,F,j,J,ie,b,x,D)},$=(R,P,F,X,J,ie,b,x,D)=>{P.slotScopeIds=x,R==null?P.shapeFlag&512?J.ctx.activate(P,F,X,b,D):I(P,F,X,J,ie,b,D):H(R,P,D)},I=(R,P,F,X,J,ie,b)=>{const x=R.component=l_(R,X,J);if(Zo(R)&&(x.ctx.renderer=ue),u_(x),x.asyncDep){if(J&&J.registerDep(x,k),!R.el){const D=x.subTree=Qe(jt);p(null,D,P,F)}}else k(x,R,P,F,J,ie,b)},H=(R,P,F)=>{const X=P.component=R.component;if(hS(R,P,F))if(X.asyncDep&&!X.asyncResolved){Y(X,P,F);return}else X.next=P,rS(X.update),X.effect.dirty=!0,X.update();else P.el=R.el,X.vnode=P},k=(R,P,F,X,J,ie,b)=>{const x=()=>{if(R.isMounted){let{next:j,bu:K,u:ae,parent:se,vnode:de}=R;{const Oe=t_(R);if(Oe){j&&(j.el=de.el,Y(R,j,b)),Oe.asyncDep.then(()=>{R.isUnmounted||x()});return}}let _e=j,Te;os(R,!1),j?(j.el=de.el,Y(R,j,b)):j=de,K&&Ar(K),(Te=j.props&&j.props.onVnodeBeforeUpdate)&&rn(Te,se,j,de),os(R,!0);const oe=Qa(R),Ve=R.subTree;R.subTree=oe,v(Ve,oe,f(Ve.el),G(Ve),R,J,ie),j.el=oe.el,_e===null&&kf(R,oe.el),ae&&Bt(ae,J),(Te=j.props&&j.props.onVnodeUpdated)&&Bt(()=>rn(Te,se,j,de),J)}else{let j;const{el:K,props:ae}=P,{bm:se,m:de,parent:_e}=R,Te=Rs(P);if(os(R,!1),se&&Ar(se),!Te&&(j=ae&&ae.onVnodeBeforeMount)&&rn(j,_e,P),os(R,!0),K&&W){const oe=()=>{R.subTree=Qa(R),W(K,R.subTree,R,J,null)};Te?P.type.__asyncLoader().then(()=>!R.isUnmounted&&oe()):oe()}else{const oe=R.subTree=Qa(R);v(null,oe,F,X,R,J,ie),P.el=oe.el}if(de&&Bt(de,J),!Te&&(j=ae&&ae.onVnodeMounted)){const oe=P;Bt(()=>rn(j,_e,oe),J)}(P.shapeFlag&256||_e&&Rs(_e.vnode)&&_e.vnode.shapeFlag&256)&&R.a&&Bt(R.a,J),R.isMounted=!0,P=F=X=null}},D=R.effect=new Ur(x,Pt,()=>ic(B),R.scope),B=R.update=()=>{D.dirty&&D.run()};B.id=R.uid,os(R,!0),B()},Y=(R,P,F)=>{P.component=R;const X=R.vnode.props;R.vnode=P,R.next=null,ry(R,P.props,X,F),ly(R,P.children,F),js(),$h(R),$s()},z=(R,P,F,X,J,ie,b,x,D=!1)=>{const B=R&&R.children,j=R?R.shapeFlag:0,K=P.children,{patchFlag:ae,shapeFlag:se}=P;if(ae>0){if(ae&128){ce(B,K,F,X,J,ie,b,x,D);return}else if(ae&256){ne(B,K,F,X,J,ie,b,x,D);return}}se&8?(j&16&&ye(B,J,ie),K!==B&&u(F,K)):j&16?se&16?ce(B,K,F,X,J,ie,b,x,D):ye(B,J,ie,!0):(j&8&&u(F,""),se&16&&L(K,F,X,J,ie,b,x,D))},ne=(R,P,F,X,J,ie,b,x,D)=>{R=R||Mr,P=P||Mr;const B=R.length,j=P.length,K=Math.min(B,j);let ae;for(ae=0;ae<K;ae++){const se=P[ae]=D?Hi(P[ae]):vn(P[ae]);v(R[ae],se,F,null,J,ie,b,x,D)}B>j?ye(R,J,ie,!0,!1,K):L(P,F,X,J,ie,b,x,D,K)},ce=(R,P,F,X,J,ie,b,x,D)=>{let B=0;const j=P.length;let K=R.length-1,ae=j-1;for(;B<=K&&B<=ae;){const se=R[B],de=P[B]=D?Hi(P[B]):vn(P[B]);if(Hn(se,de))v(se,de,F,null,J,ie,b,x,D);else break;B++}for(;B<=K&&B<=ae;){const se=R[K],de=P[ae]=D?Hi(P[ae]):vn(P[ae]);if(Hn(se,de))v(se,de,F,null,J,ie,b,x,D);else break;K--,ae--}if(B>K){if(B<=ae){const se=ae+1,de=se<j?P[se].el:X;for(;B<=ae;)v(null,P[B]=D?Hi(P[B]):vn(P[B]),F,de,J,ie,b,x,D),B++}}else if(B>ae)for(;B<=K;)pe(R[B],J,ie,!0),B++;else{const se=B,de=B,_e=new Map;for(B=de;B<=ae;B++){const Re=P[B]=D?Hi(P[B]):vn(P[B]);Re.key!=null&&_e.set(Re.key,B)}let Te,oe=0;const Ve=ae-de+1;let Oe=!1,De=0;const we=new Array(Ve);for(B=0;B<Ve;B++)we[B]=0;for(B=se;B<=K;B++){const Re=R[B];if(oe>=Ve){pe(Re,J,ie,!0);continue}let ze;if(Re.key!=null)ze=_e.get(Re.key);else for(Te=de;Te<=ae;Te++)if(we[Te-de]===0&&Hn(Re,P[Te])){ze=Te;break}ze===void 0?pe(Re,J,ie,!0):(we[ze-de]=B+1,ze>=De?De=ze:Oe=!0,v(Re,P[ze],F,null,J,ie,b,x,D),oe++)}const Ae=Oe?hy(we):Mr;for(Te=Ae.length-1,B=Ve-1;B>=0;B--){const Re=de+B,ze=P[Re],ft=Re+1<j?P[Re+1].el:X;we[B]===0?v(null,ze,F,ft,J,ie,b,x,D):Oe&&(Te<0||B!==Ae[Te]?he(ze,F,ft,2):Te--)}}},he=(R,P,F,X,J=null)=>{const{el:ie,type:b,transition:x,children:D,shapeFlag:B}=R;if(B&6){he(R.component.subTree,P,F,X);return}if(B&128){R.suspense.move(P,F,X);return}if(B&64){b.move(R,P,F,ue);return}if(b===Ot){i(ie,P,F);for(let K=0;K<D.length;K++)he(D[K],P,F,X);i(R.anchor,P,F);return}if(b===Ps){_(R,P,F);return}if(X!==2&&B&1&&x)if(X===0)x.beforeEnter(ie),i(ie,P,F),Bt(()=>x.enter(ie),J);else{const{leave:K,delayLeave:ae,afterLeave:se}=x,de=()=>i(ie,P,F),_e=()=>{K(ie,()=>{de(),se&&se()})};ae?ae(ie,de,_e):_e()}else i(ie,P,F)},pe=(R,P,F,X=!1,J=!1)=>{const{type:ie,props:b,ref:x,children:D,dynamicChildren:B,shapeFlag:j,patchFlag:K,dirs:ae}=R;if(x!=null&&dl(x,null,F,R,!0),j&256){P.ctx.deactivate(R);return}const se=j&1&&ae,de=!Rs(R);let _e;if(de&&(_e=b&&b.onVnodeBeforeUnmount)&&rn(_e,P,R),j&6)ve(R.component,F,X);else{if(j&128){R.suspense.unmount(F,X);return}se&&Yn(R,null,P,"beforeUnmount"),j&64?R.type.remove(R,P,F,J,ue,X):B&&(ie!==Ot||K>0&&K&64)?ye(B,P,F,!1,!0):(ie===Ot&&K&384||!J&&j&16)&&ye(D,P,F),X&&te(R)}(de&&(_e=b&&b.onVnodeUnmounted)||se)&&Bt(()=>{_e&&rn(_e,P,R),se&&Yn(R,null,P,"unmounted")},F)},te=R=>{const{type:P,el:F,anchor:X,transition:J}=R;if(P===Ot){fe(F,X);return}if(P===Ps){M(R);return}const ie=()=>{s(F),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(R.shapeFlag&1&&J&&!J.persisted){const{leave:b,delayLeave:x}=J,D=()=>b(F,ie);x?x(R.el,ie,D):D()}else ie()},fe=(R,P)=>{let F;for(;R!==P;)F=h(R),s(R),R=F;s(P)},ve=(R,P,F)=>{const{bum:X,scope:J,update:ie,subTree:b,um:x}=R;X&&Ar(X),J.stop(),ie&&(ie.active=!1,pe(b,R,P,F)),x&&Bt(x,P),Bt(()=>{R.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ye=(R,P,F,X=!1,J=!1,ie=0)=>{for(let b=ie;b<R.length;b++)pe(R[b],P,F,X,J)},G=R=>R.shapeFlag&6?G(R.component.subTree):R.shapeFlag&128?R.suspense.next():h(R.anchor||R.el);let le=!1;const re=(R,P,F)=>{R==null?P._vnode&&pe(P._vnode,null,null,!0):v(P._vnode||null,R,P,null,null,null,F),le||(le=!0,$h(),fl(),le=!1),P._vnode=R},ue={p:v,um:pe,m:he,r:te,mt:I,mc:L,pc:z,pbc:E,n:G,o:t};let be,W;return e&&([be,W]=e(ue)),{render:re,hydrate:be,createApp:ny(re,be)}}function Oc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function os({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function e_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jf(t,e,n=!1){const i=t.children,s=e.children;if(Ee(i)&&Ee(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Hi(s[r]),a.el=o.el),n||jf(o,a)),a.type===Bs&&(a.el=o.el)}}function hy(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function t_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:t_(e)}const dy=t=>t.__isTeleport,go=t=>t&&(t.disabled||t.disabled===""),od=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ad=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ou=(t,e)=>{const n=t&&t.to;return ke(n)?e?e(n):null:n},py={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:g,createText:v,createComment:m}}=c,p=go(e.props);let{shapeFlag:S,children:_,dynamicChildren:M}=e;if(t==null){const A=e.el=v(""),T=e.anchor=v("");d(A,n,i),d(T,n,i);const C=e.target=Ou(e.props,g),L=e.targetAnchor=v("");C&&(d(L,C),o==="svg"||od(C)?o="svg":(o==="mathml"||ad(C))&&(o="mathml"));const y=(E,N)=>{S&16&&u(_,E,N,s,r,o,a,l)};p?y(n,T):C&&y(C,L)}else{e.el=t.el;const A=e.anchor=t.anchor,T=e.target=t.target,C=e.targetAnchor=t.targetAnchor,L=go(t.props),y=L?n:T,E=L?A:C;if(o==="svg"||od(T)?o="svg":(o==="mathml"||ad(T))&&(o="mathml"),M?(h(t.dynamicChildren,M,y,s,r,o,a),jf(t,e,!0)):l||f(t,e,y,E,s,r,o,a,!1),p)L?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ya(e,n,A,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=Ou(e.props,g);N&&ya(e,N,null,c,0)}else L&&ya(e,T,C,c,1)}n_(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:h}=t;if(f&&r(u),o&&r(c),a&16){const d=o||!go(h);for(let g=0;g<l.length;g++){const v=l[g];s(v,e,n,d,!!v.dynamicChildren)}}},move:ya,hydrate:my};function ya(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),(!f||go(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,n,2);f&&i(a,e,n)}function my(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Ou(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(go(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,i,s,r)}n_(e)}return e.anchor&&o(e.anchor)}const gy=py;function n_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ot=Symbol.for("v-fgt"),Bs=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),_o=[];let ln=null;function is(t=!1){_o.push(ln=t?null:[])}function i_(){_o.pop(),ln=_o[_o.length-1]||null}let ks=1;function Fu(t){ks+=t}function s_(t){return t.dynamicChildren=ks>0?ln||Mr:null,i_(),ks>0&&ln&&ln.push(t),t}function Qo(t,e,n,i,s,r){return s_($i(t,e,n,i,s,r,!0))}function $f(t,e,n,i,s){return s_(Qe(t,e,n,i,s,!0))}function es(t){return t?t.__v_isVNode===!0:!1}function Hn(t,e){return t.type===e.type&&t.key===e.key}function _y(t){}const fc="__vInternal",r_=({key:t})=>t??null,el=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||kt(t)||Ie(t)?{i:At,r:t,k:e,f:!!n}:t:null);function $i(t,e=null,n=null,i=0,s=null,r=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&r_(e),ref:e&&el(e),scopeId:rc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return a?(Kf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),ks>0&&!o&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const Qe=vy;function vy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Mg)&&(t=jt),es(t)){const a=ti(t,e,!0);return n&&Kf(a,n),ks>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag|=-2,a}if(Ty(t)&&(t=t.__vccOpts),e){e=o_(e);let{class:a,style:l}=e;a&&!ke(a)&&(e.class=Zn(a)),ot(l)&&(Df(l)&&!Ee(l)&&(l=nt({},l)),e.style=jo(l))}const o=ke(t)?1:bg(t)?128:dy(t)?64:ot(t)?4:Ie(t)?2:0;return $i(t,e,n,i,s,o,r,!0)}function o_(t){return t?Df(t)||fc in t?nt({},t):t:null}function ti(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?a_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&r_(a),ref:e&&e.ref?n&&s?Ee(s)?s.concat(el(e)):[s,el(e)]:el(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ti(t.ssContent),ssFallback:t.ssFallback&&ti(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ss(t=" ",e=0){return Qe(Bs,null,t,e)}function Yf(t,e){const n=Qe(Ps,null,t);return n.staticCount=e,n}function xy(t="",e=!1){return e?(is(),$f(jt,null,t)):Qe(jt,null,t)}function vn(t){return t==null||typeof t=="boolean"?Qe(jt):Ee(t)?Qe(Ot,null,t.slice()):typeof t=="object"?Hi(t):Qe(Bs,null,String(t))}function Hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ti(t)}function Kf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ee(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Kf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(fc in e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:At},n=32):(e=String(e),i&64?(n=16,e=[Ss(e)]):n=8);t.children=e,t.shapeFlag|=n}function a_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Zn([e.class,i.class]));else if(s==="style")e.style=jo([e.style,i.style]);else if(Ws(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ee(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function rn(t,e,n,i=null){yn(t,e,7,[n,i])}const Sy=Xg();let yy=0;function l_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Sy,r={uid:yy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jg(i,s),emitsOptions:Sg(i,s),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=aS.bind(null,r),t.ce&&t.ce(r),r}let Rt=null;const Ti=()=>Rt||At;let pl,Bu;{const t=Xm(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};pl=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),Bu=e("__VUE_SSR_SETTERS__",n=>ea=n)}const Hs=t=>{const e=Rt;return pl(t),t.scope.on(),()=>{t.scope.off(),pl(e)}},ku=()=>{Rt&&Rt.scope.off(),pl(null)};function c_(t){return t.vnode.shapeFlag&4}let ea=!1;function u_(t,e=!1){e&&Bu(e);const{props:n,children:i}=t.vnode,s=c_(t);sy(t,n,s,e),ay(t,i);const r=s?Ey(t,e):void 0;return e&&Bu(!1),r}function Ey(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Nf(new Proxy(t.ctx,Iu));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?d_(t):null,r=Hs(t);js();const o=yi(i,t,0,[t.props,s]);if($s(),r(),Tf(o)){if(o.then(ku,ku),e)return o.then(a=>{Hu(t,a,e)}).catch(a=>{Ys(a,t,0)});t.asyncDep=o}else Hu(t,o,e)}else h_(t,e)}function Hu(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ot(e)&&(t.setupState=Ff(e)),h_(t,n)}let ml,Vu;function f_(t){ml=t,Vu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,OS))}}const My=()=>!ml;function h_(t,e,n){const i=t.type;if(!t.render){if(!e&&ml&&!i.render){const s=i.template||Xf(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=nt(nt({isCustomElement:r,delimiters:a},o),l);i.render=ml(s,c)}}t.render=i.render||Pt,Vu&&Vu(t)}{const s=Hs(t);js();try{KS(t)}finally{$s(),s()}}}function by(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return hn(t,"get","$attrs"),e[n]}}))}function d_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return by(t)},slots:t.slots,emit:t.emit,expose:e}}function hc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ff(Nf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in po)return po[n](t)},has(e,n){return n in e||n in po}}))}function zu(t,e=!0){return Ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Ty(t){return Ie(t)&&"__vccOpts"in t}const Rn=(t,e)=>zx(t,e,ea);function Ay(t,e,n=it){const i=Ti(),s=Et(e),r=Sn(e),o=pg((l,c)=>{let u;return Rg(()=>{const f=t[e];qn(u,f)&&(u=f,c())}),{get(){return l(),n.get?n.get(u):u},set(f){const h=i.vnode.props;!(h&&(e in h||s in h||r in h)&&(`onUpdate:${e}`in h||`onUpdate:${s}`in h||`onUpdate:${r}`in h))&&qn(f,u)&&(u=f,c()),i.emit(`update:${e}`,n.set?n.set(f):f)}}}),a=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[a]||{}:o,done:!1}:{done:!0}}}},o}function dc(t,e,n){const i=arguments.length;return i===2?ot(e)&&!Ee(e)?es(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&es(n)&&(n=[n]),Qe(t,e,n))}function wy(){}function Cy(t,e,n,i){const s=n[i];if(s&&p_(s,t))return s;const r=e();return r.memo=t.slice(),n[i]=r}function p_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(qn(n[i],e[i]))return!1;return ks>0&&ln&&ln.push(t),!0}const m_="3.4.15",Ry=Pt,Py=nS,Ly=gr,Iy=xg,Dy={createComponentInstance:l_,setupComponent:u_,renderComponentRoot:Qa,setCurrentRenderingInstance:Ro,isVNode:es,normalizeVNode:vn},Ny=Dy,Uy=null,Oy=null,Fy=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const By="http://www.w3.org/2000/svg",ky="http://www.w3.org/1998/Math/MathML",Vi=typeof document<"u"?document:null,ld=Vi&&Vi.createElement("template"),Hy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Vi.createElementNS(By,t):e==="mathml"?Vi.createElementNS(ky,t):Vi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Vi.createTextNode(t),createComment:t=>Vi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ld.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=ld.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ci="transition",Qr="animation",Fr=Symbol("_vtc"),Zf=(t,{slots:e})=>dc(Lg,__(t),e);Zf.displayName="Transition";const g_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vy=Zf.props=nt({},Wf,g_),as=(t,e=[])=>{Ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},cd=t=>t?Ee(t)?t.some(e=>e.length>1):t.length>1:!1;function __(t){const e={};for(const U in t)U in g_||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=zy(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:_,onLeave:M,onLeaveCancelled:A,onBeforeAppear:T=p,onAppear:C=S,onAppearCancelled:L=_}=e,y=(U,$,I)=>{Oi(U,$?u:a),Oi(U,$?c:o),I&&I()},E=(U,$)=>{U._isLeaving=!1,Oi(U,f),Oi(U,d),Oi(U,h),$&&$()},N=U=>($,I)=>{const H=U?C:S,k=()=>y($,U,I);as(H,[$,k]),ud(()=>{Oi($,U?l:r),di($,U?u:a),cd(H)||fd($,i,v,k)})};return nt(e,{onBeforeEnter(U){as(p,[U]),di(U,r),di(U,o)},onBeforeAppear(U){as(T,[U]),di(U,l),di(U,c)},onEnter:N(!1),onAppear:N(!0),onLeave(U,$){U._isLeaving=!0;const I=()=>E(U,$);di(U,f),x_(),di(U,h),ud(()=>{U._isLeaving&&(Oi(U,f),di(U,d),cd(M)||fd(U,i,m,I))}),as(M,[U,I])},onEnterCancelled(U){y(U,!1),as(_,[U])},onAppearCancelled(U){y(U,!0),as(L,[U])},onLeaveCancelled(U){E(U),as(A,[U])}})}function zy(t){if(t==null)return null;if(ot(t))return[Fc(t.enter),Fc(t.leave)];{const e=Fc(t);return[e,e]}}function Fc(t){return ll(t)}function di(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Fr]||(t[Fr]=new Set)).add(e)}function Oi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Fr];n&&(n.delete(e),n.size||(t[Fr]=void 0))}function ud(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Gy=0;function fd(t,e,n,i){const s=t._endId=++Gy,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=v_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=d=>{d.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function v_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Ci}Delay`),r=i(`${Ci}Duration`),o=hd(s,r),a=i(`${Qr}Delay`),l=i(`${Qr}Duration`),c=hd(a,l);let u=null,f=0,h=0;e===Ci?o>0&&(u=Ci,f=o,h=r.length):e===Qr?c>0&&(u=Qr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Ci:Qr:null,h=u?u===Ci?r.length:l.length:0);const d=u===Ci&&/\b(transform|all)(,|$)/.test(i(`${Ci}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function hd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>dd(n)+dd(t[i])))}function dd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function x_(){return document.body.offsetHeight}function Wy(t,e,n){const i=t[Fr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jf=Symbol("_vod"),S_={beforeMount(t,{value:e},{transition:n}){t[Jf]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):eo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),eo(t,!0),i.enter(t)):i.leave(t,()=>{eo(t,!1)}):eo(t,e))},beforeUnmount(t,{value:e}){eo(t,e)}};function eo(t,e){t.style.display=e?t[Jf]:"none"}function Xy(){S_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const y_=Symbol("");function qy(t){const e=Ti();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Wu(r,s))},i=()=>{const s=t(e.proxy);Gu(e.subTree,s),n(s)};Cg(i),Jo(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),uc(()=>s.disconnect())})}function Gu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Gu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Wu(t.el,e);else if(t.type===Ot)t.children.forEach(n=>Gu(n,e));else if(t.type===Ps){let{el:n,anchor:i}=t;for(;n&&(Wu(n,e),n!==i);)n=n.nextSibling}}function Wu(t,e){if(t.nodeType===1){const n=t.style;let i="";for(const s in e)n.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;n[y_]=i}}function jy(t,e,n){const i=t.style,s=i.display,r=ke(n);if(n&&!r){if(e&&!ke(e))for(const o in e)n[o]==null&&Xu(i,o,"");for(const o in n)Xu(i,o,n[o])}else if(r){if(e!==n){const o=i[y_];o&&(n+=";"+o),i.cssText=n}}else e&&t.removeAttribute("style");Jf in t&&(i.display=s)}const pd=/\s*!important$/;function Xu(t,e,n){if(Ee(n))n.forEach(i=>Xu(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=$y(t,e);pd.test(n)?t.setProperty(Sn(i),n.replace(pd,""),"important"):t[i]=n}}const md=["Webkit","Moz","ms"],Bc={};function $y(t,e){const n=Bc[e];if(n)return n;let i=Et(e);if(i!=="filter"&&i in t)return Bc[e]=i;i=qs(i);for(let s=0;s<md.length;s++){const r=md[s]+i;if(r in t)return Bc[e]=r}return e}const gd="http://www.w3.org/1999/xlink";function Yy(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gd,e.slice(6,e.length)):t.setAttributeNS(gd,e,n);else{const r=px(e);n==null||r&&!jm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ky(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _i(t,e,n,i){t.addEventListener(e,n,i)}function Zy(t,e,n,i){t.removeEventListener(e,n,i)}const _d=Symbol("_vei");function Jy(t,e,n,i,s=null){const r=t[_d]||(t[_d]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Qy(e);if(i){const c=r[e]=nE(i,s);_i(t,a,c,l)}else o&&(Zy(t,a,o,l),r[e]=void 0)}}const vd=/(?:Once|Passive|Capture)$/;function Qy(t){let e;if(vd.test(t)){e={};let i;for(;i=t.match(vd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sn(t.slice(2)),e]}let kc=0;const eE=Promise.resolve(),tE=()=>kc||(eE.then(()=>kc=0),kc=Date.now());function nE(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;yn(iE(i,n.value),e,5,[i])};return n.value=t,n.attached=tE(),n}function iE(t,e){if(Ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const xd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sE=(t,e,n,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Wy(t,i,c):e==="style"?jy(t,n,i):Ws(e)?Mf(e)||Jy(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rE(t,e,i,c))?Ky(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Yy(t,e,i,c))};function rE(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&xd(e)&&Ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xd(e)&&ke(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function E_(t,e){const n=Ks(t);class i extends pc{constructor(r){super(n,r,e)}}return i.def=n,i}/*! #__NO_SIDE_EFFECTS__ */const oE=t=>E_(t,D_),aE=typeof HTMLElement<"u"?HTMLElement:class{};class pc extends aE{constructor(e,n={},i){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Yo(()=>{this._connected||(qu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,s=!1)=>{const{props:r,styles:o}=i;let a;if(r&&!Ee(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ll(this._props[l])),(a||(a=Object.create(null)))[Et(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,i=Ee(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of i.map(Et))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r)}})}_setAttr(e){let n=this.getAttribute(e);const i=Et(e);this._numberProps&&this._numberProps[i]&&(n=ll(n)),this._setProp(i,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),i&&(n===!0?this.setAttribute(Sn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Sn(e),n+""):n||this.removeAttribute(Sn(e))))}_update(){qu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Qe(this._def,nt({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const i=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{i(r,o),Sn(r)!==r&&i(Sn(r),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof pc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const i=document.createElement("style");i.textContent=n,this.shadowRoot.appendChild(i)})}}function lE(t="$style"){{const e=Ti();if(!e)return it;const n=e.type.__cssModules;if(!n)return it;const i=n[t];return i||it}}const M_=new WeakMap,b_=new WeakMap,gl=Symbol("_moveCb"),Sd=Symbol("_enterCb"),T_={name:"TransitionGroup",props:nt({},Vy,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ti(),i=Gf();let s,r;return lc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!pE(s[0].el,n.vnode.el,o))return;s.forEach(fE),s.forEach(hE);const a=s.filter(dE);x_(),a.forEach(l=>{const c=l.el,u=c.style;di(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[gl]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c[gl]=null,Oi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Ze(t),a=__(o);let l=o.tag||Ot;s=r,r=e.default?oc(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Fs(u,Or(u,a,i,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Fs(u,Or(u,a,i,n)),M_.set(u,u.el.getBoundingClientRect())}return Qe(l,null,r)}}},cE=t=>delete t.mode;T_.props;const uE=T_;function fE(t){const e=t.el;e[gl]&&e[gl](),e[Sd]&&e[Sd]()}function hE(t){b_.set(t,t.el.getBoundingClientRect())}function dE(t){const e=M_.get(t),n=b_.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function pE(t,e,n){const i=t.cloneNode(),s=t[Fr];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=v_(i);return r.removeChild(i),o}const ts=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ee(e)?n=>Ar(e,n):e};function mE(t){t.target.composing=!0}function yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dn=Symbol("_assign"),_l={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Dn]=ts(s);const r=i||s.props&&s.props.type==="number";_i(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=bo(a)),t[Dn](a)}),n&&_i(t,"change",()=>{t.value=t.value.trim()}),e||(_i(t,"compositionstart",mE),_i(t,"compositionend",yd),_i(t,"change",yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[Dn]=ts(r),t.composing)return;const o=s||t.type==="number"?bo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},Qf={deep:!0,created(t,e,n){t[Dn]=ts(n),_i(t,"change",()=>{const i=t._modelValue,s=Br(t),r=t.checked,o=t[Dn];if(Ee(i)){const a=Ql(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Xs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(w_(t,r))})},mounted:Ed,beforeUpdate(t,e,n){t[Dn]=ts(n),Ed(t,e,n)}};function Ed(t,{value:e,oldValue:n},i){t._modelValue=e,Ee(e)?t.checked=Ql(e,i.props.value)>-1:Xs(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Ei(e,w_(t,!0)))}const eh={created(t,{value:e},n){t.checked=Ei(e,n.props.value),t[Dn]=ts(n),_i(t,"change",()=>{t[Dn](Br(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Dn]=ts(i),e!==n&&(t.checked=Ei(e,i.props.value))}},A_={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Xs(e);_i(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?bo(Br(o)):Br(o));t[Dn](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Yo(()=>{t._assigning=!1})}),t[Dn]=ts(i)},mounted(t,{value:e,oldValue:n,modifiers:{number:i}}){Md(t,e,n,i)},beforeUpdate(t,e,n){t[Dn]=ts(n)},updated(t,{value:e,oldValue:n,modifiers:{number:i}}){t._assigning||Md(t,e,n,i)}};function Md(t,e,n,i){const s=t.multiple,r=Ee(e);if(!(s&&!r&&!Xs(e))&&!(r&&Ei(e,n))){for(let o=0,a=t.options.length;o<a;o++){const l=t.options[o],c=Br(l);if(s)if(r){const u=typeof c;u==="string"||u==="number"?l.selected=e.includes(i?bo(c):c):l.selected=Ql(e,c)>-1}else l.selected=e.has(c);else if(Ei(Br(l),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Br(t){return"_value"in t?t._value:t.value}function w_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const C_={created(t,e,n){Ea(t,e,n,null,"created")},mounted(t,e,n){Ea(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){Ea(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){Ea(t,e,n,i,"updated")}};function R_(t,e){switch(t){case"SELECT":return A_;case"TEXTAREA":return _l;default:switch(e){case"checkbox":return Qf;case"radio":return eh;default:return _l}}}function Ea(t,e,n,i,s){const o=R_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function gE(){_l.getSSRProps=({value:t})=>({value:t}),eh.getSSRProps=({value:t},e)=>{if(e.props&&Ei(e.props.value,t))return{checked:!0}},Qf.getSSRProps=({value:t},e)=>{if(Ee(t)){if(e.props&&Ql(t,e.props.value)>-1)return{checked:!0}}else if(Xs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},C_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=R_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const _E=["ctrl","shift","alt","meta"],vE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_E.some(n=>t[`${n}Key`]&&!e.includes(n))},xE=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=vE[e[o]];if(a&&a(s,e))return}return t(s,...r)})},SE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=Sn(s.key);if(e.some(o=>o===r||SE[o]===r))return t(s)})},P_=nt({patchProp:sE},Hy);let vo,bd=!1;function L_(){return vo||(vo=Zg(P_))}function I_(){return vo=bd?vo:Jg(P_),bd=!0,vo}const qu=(...t)=>{L_().render(...t)},D_=(...t)=>{I_().hydrate(...t)},N_=(...t)=>{const e=L_().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=O_(i);if(!s)return;const r=e._component;!Ie(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,U_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},EE=(...t)=>{const e=I_().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=O_(i);if(s)return n(s,!0,U_(s))},e};function U_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function O_(t){return ke(t)?document.querySelector(t):t}let Td=!1;const ME=()=>{Td||(Td=!0,gE(),Xy())},bE=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Lg,BaseTransitionPropsValidators:Wf,Comment:jt,DeprecationTypes:Fy,EffectScope:wf,ErrorCodes:tS,ErrorTypeStrings:Py,Fragment:Ot,KeepAlive:PS,ReactiveEffect:Ur,Static:Ps,Suspense:vS,Teleport:gy,Text:Bs,TrackOpTypes:Jx,Transition:Zf,TransitionGroup:uE,TriggerOpTypes:Qx,VueElement:pc,assertNumber:eS,callWithAsyncErrorHandling:yn,callWithErrorHandling:yi,camelize:Et,capitalize:qs,cloneVNode:ti,compatUtils:Oy,computed:Rn,createApp:N_,createBlock:$f,createCommentVNode:xy,createElementBlock:Qo,createElementVNode:$i,createHydrationRenderer:Jg,createPropsRestProxy:$S,createRenderer:Zg,createSSRApp:EE,createSlots:DS,createStaticVNode:Yf,createTextVNode:Ss,createVNode:Qe,customRef:pg,defineAsyncComponent:CS,defineComponent:Ks,defineCustomElement:E_,defineEmits:BS,defineExpose:kS,defineModel:zS,defineOptions:HS,defineProps:FS,defineSSRCustomElement:oE,defineSlots:VS,devtools:Ly,effect:Sx,effectScope:_x,getCurrentInstance:Ti,getCurrentScope:Km,getTransitionRawChildren:oc,guardReactiveProps:o_,h:dc,handleError:Ys,hasInjectionContext:iy,hydrate:D_,initCustomFormatter:wy,initDirectivesForSSR:ME,inject:Qn,isMemoSame:p_,isProxy:Df,isReactive:Cs,isReadonly:Os,isRef:kt,isRuntimeOnly:My,isShallow:To,isVNode:es,markRaw:Nf,mergeDefaults:qS,mergeModels:jS,mergeProps:a_,nextTick:Yo,normalizeClass:Zn,normalizeProps:sx,normalizeStyle:jo,onActivated:Dg,onBeforeMount:Og,onBeforeUnmount:cc,onBeforeUpdate:Fg,onDeactivated:Ng,onErrorCaptured:Vg,onMounted:Jo,onRenderTracked:Hg,onRenderTriggered:kg,onScopeDispose:vx,onServerPrefetch:Bg,onUnmounted:uc,onUpdated:lc,openBlock:is,popScopeId:Eg,provide:mo,proxyRefs:Ff,pushScopeId:yg,queuePostFlushCb:ul,reactive:$o,readonly:If,ref:Cr,registerRuntimeCompiler:f_,render:qu,renderList:IS,renderSlot:NS,resolveComponent:pS,resolveDirective:gS,resolveDynamicComponent:mS,resolveFilter:Uy,resolveTransitionHooks:Or,setBlockTracking:Fu,setDevtoolsHook:Iy,setTransitionHooks:Fs,shallowReactive:Lf,shallowReadonly:Vx,shallowRef:hg,ssrContextKey:Ag,ssrUtils:Ny,stop:yx,toDisplayString:gx,toHandlerKey:Tr,toHandlers:US,toRaw:Ze,toRef:Zx,toRefs:$x,toValue:Xx,transformVNodeArgs:_y,triggerRef:Wx,unref:an,useAttrs:XS,useCssModule:lE,useCssVars:qy,useModel:Ay,useSSRContext:wg,useSlots:WS,useTransitionState:Gf,vModelCheckbox:Qf,vModelDynamic:C_,vModelRadio:eh,vModelSelect:A_,vModelText:_l,vShow:S_,version:m_,warn:Ry,watch:Lr,watchEffect:bS,watchPostEffect:Cg,watchSyncEffect:Rg,withAsyncContext:YS,withCtx:Wi,withDefaults:GS,withDirectives:AS,withKeys:yE,withMemo:Cy,withModifiers:xE,withScopeId:lS},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Do=Symbol(""),xo=Symbol(""),th=Symbol(""),vl=Symbol(""),F_=Symbol(""),Vs=Symbol(""),B_=Symbol(""),k_=Symbol(""),nh=Symbol(""),ih=Symbol(""),ta=Symbol(""),sh=Symbol(""),H_=Symbol(""),rh=Symbol(""),oh=Symbol(""),ah=Symbol(""),lh=Symbol(""),ch=Symbol(""),uh=Symbol(""),V_=Symbol(""),z_=Symbol(""),mc=Symbol(""),xl=Symbol(""),fh=Symbol(""),hh=Symbol(""),No=Symbol(""),na=Symbol(""),dh=Symbol(""),ju=Symbol(""),TE=Symbol(""),$u=Symbol(""),Sl=Symbol(""),AE=Symbol(""),wE=Symbol(""),ph=Symbol(""),CE=Symbol(""),RE=Symbol(""),mh=Symbol(""),G_=Symbol(""),kr={[Do]:"Fragment",[xo]:"Teleport",[th]:"Suspense",[vl]:"KeepAlive",[F_]:"BaseTransition",[Vs]:"openBlock",[B_]:"createBlock",[k_]:"createElementBlock",[nh]:"createVNode",[ih]:"createElementVNode",[ta]:"createCommentVNode",[sh]:"createTextVNode",[H_]:"createStaticVNode",[rh]:"resolveComponent",[oh]:"resolveDynamicComponent",[ah]:"resolveDirective",[lh]:"resolveFilter",[ch]:"withDirectives",[uh]:"renderList",[V_]:"renderSlot",[z_]:"createSlots",[mc]:"toDisplayString",[xl]:"mergeProps",[fh]:"normalizeClass",[hh]:"normalizeStyle",[No]:"normalizeProps",[na]:"guardReactiveProps",[dh]:"toHandlers",[ju]:"camelize",[TE]:"capitalize",[$u]:"toHandlerKey",[Sl]:"setBlockTracking",[AE]:"pushScopeId",[wE]:"popScopeId",[ph]:"withCtx",[CE]:"unref",[RE]:"isRef",[mh]:"withMemo",[G_]:"isMemoSame"};function PE(t){Object.getOwnPropertySymbols(t).forEach(e=>{kr[e]=t[e]})}const Mn={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function LE(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:Mn}}function Uo(t,e,n,i,s,r,o,a=!1,l=!1,c=!1,u=Mn){return t&&(a?(t.helper(Vs),t.helper(zr(t.inSSR,c))):t.helper(Vr(t.inSSR,c)),o&&t.helper(ch)),{type:13,tag:e,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function ia(t,e=Mn){return{type:17,loc:e,elements:t}}function Ln(t,e=Mn){return{type:15,loc:e,properties:t}}function yt(t,e){return{type:16,loc:Mn,key:ke(t)?We(t,!0):t,value:e}}function We(t,e=!1,n=Mn,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function Wn(t,e=Mn){return{type:8,loc:e,children:t}}function Ct(t,e=[],n=Mn){return{type:14,loc:n,callee:t,arguments:e}}function Hr(t,e=void 0,n=!1,i=!1,s=Mn){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:s}}function Yu(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:Mn}}function IE(t,e,n=!1){return{type:20,index:t,value:e,isVNode:n,loc:Mn}}function DE(t){return{type:21,body:t,loc:Mn}}function Vr(t,e){return t||e?nh:ih}function zr(t,e){return t||e?B_:k_}function gh(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(Vr(i,t.isComponent)),e(Vs),e(zr(i,t.isComponent)))}const Ad=new Uint8Array([123,123]),wd=new Uint8Array([125,125]);function Cd(t){return t>=97&&t<=122||t>=65&&t<=90}function _n(t){return t===32||t===10||t===9||t===12||t===13}function Ri(t){return t===47||t===62||_n(t)}function yl(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const Vt={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class NE{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Ad,this.delimiterClose=wd,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Ad,this.delimiterClose=wd}getPos(e){let n=1,i=e+1;for(let s=this.newlines.length-1;s>=0;s--){const r=this.newlines[s];if(e>r){n=s+2,i=e-r;break}}return{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Ri(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||_n(e)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Vt.TitleEnd||this.currentSequence===Vt.TextareaEnd&&!this.inSFCRoot?e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===Vt.Cdata[this.sequenceIndex]?++this.sequenceIndex===Vt.Cdata.length&&(this.state=28,this.currentSequence=Vt.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Vt.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){if(e===33)this.state=22,this.sectionStart=this.index+1;else if(e===63)this.state=24,this.sectionStart=this.index+1;else if(Cd(e))if(this.sectionStart=this.index,this.mode===0)this.state=6;else if(this.inSFCRoot)this.state=34;else if(this.inXML)this.state=6;else{const n=e|32;n===116?this.state=30:this.state=n===115?29:6}else e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Ri(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Ri(e)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(yl("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){_n(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Cd(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||_n(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):_n(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):_n(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Ri(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Ri(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Ri(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Ri(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Ri(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):_n(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):_n(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){_n(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=Vt.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){const n=e|32;n===Vt.ScriptEnd[3]?this.startSpecial(Vt.ScriptEnd,4):n===Vt.StyleEnd[3]?this.startSpecial(Vt.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){const n=e|32;n===Vt.TitleEnd[3]?this.startSpecial(Vt.TitleEnd,4):n===Vt.TextareaEnd[3]?this.startSpecial(Vt.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===Vt.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}}function Rd(t,{compatConfig:e}){const n=e&&e[t];return t==="MODE"?n||3:n}function Ls(t,e){const n=Rd("MODE",e),i=Rd(t,e);return n===3?i===!0:i!==!1}function Oo(t,e,n,...i){return Ls(t,e)}function _h(t){throw t}function W_(t){}function mt(t,e,n,i){const s=`https://vuejs.org/error-reference/#compiler-${t}`,r=new SyntaxError(String(s));return r.code=t,r.loc=e,r}const cn=t=>t.type===4&&t.isStatic;function X_(t){switch(t){case"Teleport":case"teleport":return xo;case"Suspense":case"suspense":return th;case"KeepAlive":case"keep-alive":return vl;case"BaseTransition":case"base-transition":return F_}}const UE=/^\d|[^\$\w]/,vh=t=>!UE.test(t),OE=/[A-Za-z_$\xA0-\uFFFF]/,FE=/[\.\?\w$\xA0-\uFFFF]/,BE=/\s+[.[]\s*|\s*[.[]\s+/g,kE=t=>{t=t.trim().replace(BE,o=>o.trim());let e=0,n=[],i=0,s=0,r=null;for(let o=0;o<t.length;o++){const a=t.charAt(o);switch(e){case 0:if(a==="[")n.push(e),e=1,i++;else if(a==="(")n.push(e),e=2,s++;else if(!(o===0?OE:FE).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(e),e=3,r=a):a==="["?i++:a==="]"&&(--i||(e=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(e),e=3,r=a;else if(a==="(")s++;else if(a===")"){if(o===t.length-1)return!1;--s||(e=n.pop())}break;case 3:a===r&&(e=n.pop(),r=null);break}}return!i&&!s},q_=kE;function Bn(t,e,n=!1){for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&(n||s.exp)&&(ke(e)?s.name===e:e.test(s.name)))return s}}function gc(t,e,n=!1,i=!1){for(let s=0;s<t.props.length;s++){const r=t.props[s];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&ys(r.arg,e))return r}}function ys(t,e){return!!(t&&cn(t)&&t.content===e)}function HE(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Hc(t){return t.type===5||t.type===2}function VE(t){return t.type===7&&t.name==="slot"}function El(t){return t.type===1&&t.tagType===3}function Ml(t){return t.type===1&&t.tagType===2}const zE=new Set([No,na]);function j_(t,e=[]){if(t&&!ke(t)&&t.type===14){const n=t.callee;if(!ke(n)&&zE.has(n))return j_(t.arguments[0],e.concat(t))}return[t,e]}function bl(t,e,n){let i,s=t.type===13?t.props:t.arguments[2],r=[],o;if(s&&!ke(s)&&s.type===14){const a=j_(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||ke(s))i=Ln([e]);else if(s.type===14){const a=s.arguments[0];!ke(a)&&a.type===15?Pd(e,a)||a.properties.unshift(e):s.callee===dh?i=Ct(n.helper(xl),[Ln([e]),s]):s.arguments.unshift(Ln([e])),!i&&(i=s)}else s.type===15?(Pd(e,s)||s.properties.unshift(e),i=s):(i=Ct(n.helper(xl),[Ln([e]),s]),o&&o.callee===na&&(o=r[r.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function Pd(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function Fo(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function GE(t){return t.type===14&&t.callee===mh?t.arguments[1].returns:t}const WE=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,$_={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Ja,isPreTag:Ja,isCustomElement:Ja,onError:_h,onWarn:W_,comments:!1,prefixIdentifiers:!1};let st=$_,Bo=null,Is="",Wt=null,Je=null,sn="",pi=-1,hs=-1,Tl=0,zi=!1,Ku=null;const xt=[],St=new NE(xt,{onerr:ri,ontext(t,e){Ma(Ft(t,e),t,e)},ontextentity(t,e,n){Ma(t,e,n)},oninterpolation(t,e){if(zi)return Ma(Ft(t,e),t,e);let n=t+St.delimiterOpen.length,i=e-St.delimiterClose.length;for(;_n(Is.charCodeAt(n));)n++;for(;_n(Is.charCodeAt(i-1));)i--;let s=Ft(n,i);s.includes("&")&&(s=st.decodeEntities(s,!1)),Zu({type:5,content:nl(s,!1,wt(n,i)),loc:wt(t,e)})},onopentagname(t,e){const n=Ft(t,e);Wt={type:1,tag:n,ns:st.getNamespace(n,xt[0],st.ns),tagType:0,props:[],children:[],loc:wt(t-1,e),codegenNode:void 0}},onopentagend(t){Id(t)},onclosetag(t,e){const n=Ft(t,e);if(!st.isVoidTag(n)){let i=!1;for(let s=0;s<xt.length;s++)if(xt[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&ri(24,xt[0].loc.start.offset);for(let o=0;o<=s;o++){const a=xt.shift();tl(a,e,o<s)}break}i||ri(23,Y_(t,60))}},onselfclosingtag(t){var e;const n=Wt.tag;Wt.isSelfClosing=!0,Id(t),((e=xt[0])==null?void 0:e.tag)===n&&tl(xt.shift(),t)},onattribname(t,e){Je={type:6,name:Ft(t,e),nameLoc:wt(t,e),value:void 0,loc:wt(t)}},ondirname(t,e){const n=Ft(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!zi&&i===""&&ri(26,t),zi||i==="")Je={type:6,name:n,nameLoc:wt(t,e),value:void 0,loc:wt(t)};else if(Je={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?["prop"]:[],loc:wt(t)},i==="pre"){zi=St.inVPre=!0,Ku=Wt;const s=Wt.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=QE(s[r]))}},ondirarg(t,e){if(t===e)return;const n=Ft(t,e);if(zi)Je.name+=n,Es(Je.nameLoc,e);else{const i=n[0]!=="[";Je.arg=nl(i?n:n.slice(1,-1),i,wt(t,e),i?3:0)}},ondirmodifier(t,e){const n=Ft(t,e);if(zi)Je.name+="."+n,Es(Je.nameLoc,e);else if(Je.name==="slot"){const i=Je.arg;i&&(i.content+="."+n,Es(i.loc,e))}else Je.modifiers.push(n)},onattribdata(t,e){sn+=Ft(t,e),pi<0&&(pi=t),hs=e},onattribentity(t,e,n){sn+=t,pi<0&&(pi=e),hs=n},onattribnameend(t){const e=Je.loc.start.offset,n=Ft(e,t);Je.type===7&&(Je.rawName=n),Wt.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&ri(2,e)},onattribend(t,e){if(Wt&&Je){if(Es(Je.loc,e),t!==0)if(sn.includes("&")&&(sn=st.decodeEntities(sn,!0)),Je.type===6)Je.name==="class"&&(sn=Z_(sn).trim()),t===1&&!sn&&ri(13,e),Je.value={type:2,content:sn,loc:t===1?wt(pi,hs):wt(pi-1,hs+1)},St.inSFCRoot&&Wt.tag==="template"&&Je.name==="lang"&&sn&&sn!=="html"&&St.enterRCDATA(yl("</template"),0);else{let n=0;Je.exp=nl(sn,!1,wt(pi,hs),0,n),Je.name==="for"&&(Je.forParseResult=qE(Je.exp));let i=-1;Je.name==="bind"&&(i=Je.modifiers.indexOf("sync"))>-1&&Oo("COMPILER_V_BIND_SYNC",st,Je.loc,Je.rawName)&&(Je.name="model",Je.modifiers.splice(i,1))}(Je.type!==7||Je.name!=="pre")&&Wt.props.push(Je)}sn="",pi=hs=-1},oncomment(t,e){st.comments&&Zu({type:3,content:Ft(t,e),loc:wt(t-4,e+3)})},onend(){const t=Is.length;for(let e=0;e<xt.length;e++)tl(xt[e],t-1),ri(24,xt[e].loc.start.offset)},oncdata(t,e){xt[0].ns!==0?Ma(Ft(t,e),t,e):ri(1,t-9)},onprocessinginstruction(t){(xt[0]?xt[0].ns:st.ns)===0&&ri(21,t-1)}}),Ld=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,XE=/^\(|\)$/g;function qE(t){const e=t.loc,n=t.content,i=n.match(WE);if(!i)return;const[,s,r]=i,o=(f,h,d=!1)=>{const g=e.start.offset+h,v=g+f.length;return nl(f,!1,wt(g,v),0,d?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(XE,"").trim();const c=s.indexOf(l),u=l.match(Ld);if(u){l=l.replace(Ld,"").trim();const f=u[1].trim();let h;if(f&&(h=n.indexOf(f,c+l.length),a.key=o(f,h,!0)),u[2]){const d=u[2].trim();d&&(a.index=o(d,n.indexOf(d,a.key?h+f.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function Ft(t,e){return Is.slice(t,e)}function Id(t){St.inSFCRoot&&(Wt.innerLoc=wt(t+1,t+1)),Zu(Wt);const{tag:e,ns:n}=Wt;n===0&&st.isPreTag(e)&&Tl++,st.isVoidTag(e)?tl(Wt,t):(xt.unshift(Wt),(n===1||n===2)&&(St.inXML=!0)),Wt=null}function Ma(t,e,n){var i;{const o=(i=xt[0])==null?void 0:i.tag;o!=="script"&&o!=="style"&&t.includes("&")&&(t=st.decodeEntities(t,!1))}const s=xt[0]||Bo,r=s.children[s.children.length-1];(r==null?void 0:r.type)===2?(r.content+=t,Es(r.loc,n)):s.children.push({type:2,content:t,loc:wt(e,n)})}function tl(t,e,n=!1){n?Es(t.loc,Y_(e,60)):Es(t.loc,e+1),St.inSFCRoot&&(t.children.length?t.innerLoc.end=nt({},t.children[t.children.length-1].loc.end):t.innerLoc.end=nt({},t.innerLoc.start),t.innerLoc.source=Ft(t.innerLoc.start.offset,t.innerLoc.end.offset));const{tag:i,ns:s}=t;zi||(i==="slot"?t.tagType=2:Dd(t)?t.tagType=3:$E(t)&&(t.tagType=1)),St.inRCDATA||(t.children=K_(t.children,t.tag)),s===0&&st.isPreTag(i)&&Tl--,Ku===t&&(zi=St.inVPre=!1,Ku=null),St.inXML&&(xt[0]?xt[0].ns:st.ns)===0&&(St.inXML=!1);{const r=t.props;if(!St.inSFCRoot&&Ls("COMPILER_NATIVE_TEMPLATE",st)&&t.tag==="template"&&!Dd(t)){const a=xt[0]||Bo,l=a.children.indexOf(t);a.children.splice(l,1,...t.children)}const o=r.find(a=>a.type===6&&a.name==="inline-template");o&&Oo("COMPILER_INLINE_TEMPLATE",st,o.loc)&&t.children.length&&(o.value={type:2,content:Ft(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:o.loc})}}function Y_(t,e){let n=t;for(;Is.charCodeAt(n)!==e&&n>=0;)n--;return n}const jE=new Set(["if","else","else-if","for","slot"]);function Dd({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&jE.has(e[n].name))return!0}return!1}function $E({tag:t,props:e}){var n;if(st.isCustomElement(t))return!1;if(t==="component"||YE(t.charCodeAt(0))||X_(t)||(n=st.isBuiltInComponent)!=null&&n.call(st,t)||st.isNativeTag&&!st.isNativeTag(t))return!0;for(let i=0;i<e.length;i++){const s=e[i];if(s.type===6){if(s.name==="is"&&s.value){if(s.value.content.startsWith("vue:"))return!0;if(Oo("COMPILER_IS_ON_ELEMENT",st,s.loc))return!0}}else if(s.name==="bind"&&ys(s.arg,"is")&&Oo("COMPILER_IS_ON_ELEMENT",st,s.loc))return!0}return!1}function YE(t){return t>64&&t<91}const KE=/\r\n/g;function K_(t,e){var n,i;const s=st.whitespace!=="preserve";let r=!1;for(let o=0;o<t.length;o++){const a=t[o];if(a.type===2)if(Tl)a.content=a.content.replace(KE,`
`);else if(ZE(a.content)){const l=(n=t[o-1])==null?void 0:n.type,c=(i=t[o+1])==null?void 0:i.type;!l||!c||s&&(l===3&&(c===3||c===1)||l===1&&(c===3||c===1&&JE(a.content)))?(r=!0,t[o]=null):a.content=" "}else s&&(a.content=Z_(a.content))}if(Tl&&e&&st.isPreTag(e)){const o=t[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}return r?t.filter(Boolean):t}function ZE(t){for(let e=0;e<t.length;e++)if(!_n(t.charCodeAt(e)))return!1;return!0}function JE(t){for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function Z_(t){let e="",n=!1;for(let i=0;i<t.length;i++)_n(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function Zu(t){(xt[0]||Bo).children.push(t)}function wt(t,e){return{start:St.getPos(t),end:e==null?e:St.getPos(e),source:e==null?e:Ft(t,e)}}function Es(t,e){t.end=St.getPos(e),t.source=Ft(t.start.offset,e)}function QE(t){const e={type:6,name:t.rawName,nameLoc:wt(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){const n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function nl(t,e=!1,n,i=0,s=0){return We(t,e,n,i)}function ri(t,e,n){st.onError(mt(t,wt(e,e)))}function eM(){St.reset(),Wt=null,Je=null,sn="",pi=-1,hs=-1,xt.length=0}function tM(t,e){if(eM(),Is=t,st=nt({},$_),e){let s;for(s in e)e[s]!=null&&(st[s]=e[s])}St.mode=st.parseMode==="html"?1:st.parseMode==="sfc"?2:0,St.inXML=st.ns===1||st.ns===2;const n=e==null?void 0:e.delimiters;n&&(St.delimiterOpen=yl(n[0]),St.delimiterClose=yl(n[1]));const i=Bo=LE([],t);return St.parse(Is),i.loc=wt(0,t.length),i.children=K_(i.children),Bo=null,i}function nM(t,e){il(t,e,J_(t,t.children[0]))}function J_(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!Ml(e)}function il(t,e,n=!1){const{children:i}=t,s=i.length;let r=0;for(let o=0;o<i.length;o++){const a=i[o];if(a.type===1&&a.tagType===0){const l=n?0:In(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag="-1",a.codegenNode=e.hoist(a.codegenNode),r++;continue}}else{const c=a.codegenNode;if(c.type===13){const u=n0(c);if((!u||u===512||u===1)&&e0(a,e)>=2){const f=t0(a);f&&(c.props=e.hoist(f))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,il(a,e),l&&e.scopes.vSlot--}else if(a.type===11)il(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)il(a.branches[l],e,a.branches[l].children.length===1)}if(r&&e.transformHoist&&e.transformHoist(i,e,t),r&&r===s&&t.type===1&&t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&Ee(t.codegenNode.children)){const o=e.hoist(ia(t.codegenNode.children));e.hmr&&(o.content=`[...${o.content}]`),t.codegenNode.children=o}}function In(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const s=t.codegenNode;if(s.type!==13||s.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject")return 0;if(n0(s))return n.set(t,0),0;{let a=3;const l=e0(t,e);if(l===0)return n.set(t,0),0;l<a&&(a=l);for(let c=0;c<t.children.length;c++){const u=In(t.children[c],e);if(u===0)return n.set(t,0),0;u<a&&(a=u)}if(a>1)for(let c=0;c<t.props.length;c++){const u=t.props[c];if(u.type===7&&u.name==="bind"&&u.exp){const f=In(u.exp,e);if(f===0)return n.set(t,0),0;f<a&&(a=f)}}if(s.isBlock){for(let c=0;c<t.props.length;c++)if(t.props[c].type===7)return n.set(t,0),0;e.removeHelper(Vs),e.removeHelper(zr(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper(Vr(e.inSSR,s.isComponent))}return n.set(t,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return In(t.content,e);case 4:return t.constType;case 8:let o=3;for(let a=0;a<t.children.length;a++){const l=t.children[a];if(ke(l)||Xn(l))continue;const c=In(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const iM=new Set([fh,hh,No,na]);function Q_(t,e){if(t.type===14&&!ke(t.callee)&&iM.has(t.callee)){const n=t.arguments[0];if(n.type===4)return In(n,e);if(n.type===14)return Q_(n,e)}return 0}function e0(t,e){let n=3;const i=t0(t);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=In(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=In(a,e):a.type===14?c=Q_(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function t0(t){const e=t.codegenNode;if(e.type===13)return e.props}function n0(t){const e=t.patchFlag;return e?parseInt(e,10):void 0}function sM(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=Pt,isCustomElement:u=Pt,expressionPlugins:f=[],scopeId:h=null,slotted:d=!0,ssr:g=!1,inSSR:v=!1,ssrCssVars:m="",bindingMetadata:p=it,inline:S=!1,isTS:_=!1,onError:M=_h,onWarn:A=W_,compatConfig:T}){const C=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),L={filename:e,selfName:C&&qs(Et(C[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:h,slotted:d,ssr:g,inSSR:v,ssrCssVars:m,bindingMetadata:p,inline:S,isTS:_,onError:M,onWarn:A,compatConfig:T,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new WeakMap,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(y){const E=L.helpers.get(y)||0;return L.helpers.set(y,E+1),y},removeHelper(y){const E=L.helpers.get(y);if(E){const N=E-1;N?L.helpers.set(y,N):L.helpers.delete(y)}},helperString(y){return`_${kr[L.helper(y)]}`},replaceNode(y){L.parent.children[L.childIndex]=L.currentNode=y},removeNode(y){const E=L.parent.children,N=y?E.indexOf(y):L.currentNode?L.childIndex:-1;!y||y===L.currentNode?(L.currentNode=null,L.onNodeRemoved()):L.childIndex>N&&(L.childIndex--,L.onNodeRemoved()),L.parent.children.splice(N,1)},onNodeRemoved:Pt,addIdentifiers(y){},removeIdentifiers(y){},hoist(y){ke(y)&&(y=We(y)),L.hoists.push(y);const E=We(`_hoisted_${L.hoists.length}`,!1,y.loc,2);return E.hoisted=y,E},cache(y,E=!1){return IE(L.cached++,y,E)}};return L.filters=new Set,L}function rM(t,e){const n=sM(t,e);_c(t,n),e.hoistStatic&&nM(t,n),e.ssr||oM(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function oM(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const s=i[0];if(J_(t,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&gh(r,e),t.codegenNode=r}else t.codegenNode=s}else if(i.length>1){let s=64;t.codegenNode=Uo(e,n(Do),void 0,t.children,s+"",void 0,void 0,!0,void 0,!1)}}function aM(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const s=t.children[n];ke(s)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=i,_c(s,e))}}function _c(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&(Ee(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(ta);break;case 5:e.ssr||e.helper(mc);break;case 9:for(let r=0;r<t.branches.length;r++)_c(t.branches[r],e);break;case 10:case 11:case 1:case 0:aM(t,e);break}e.currentNode=t;let s=i.length;for(;s--;)i[s]()}function i0(t,e){const n=ke(t)?i=>i===t:i=>t.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(VE))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const vc="/*#__PURE__*/",s0=t=>`${kr[t]}: _${kr[t]}`;function Nd(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:h=!1}){const d={mode:e,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:h,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${kr[v]}`},push(v,m=-2,p){d.code+=v},indent(){g(++d.indentLevel)},deindent(v=!1){v?--d.indentLevel:g(--d.indentLevel)},newline(){g(d.indentLevel)}};function g(v){d.push(`
`+"  ".repeat(v),0)}return d}function lM(t,e={}){const n=Nd(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,f=Array.from(t.helpers),h=f.length>0,d=!r&&i!=="module",g=!1,v=g?Nd(t,e):n;cM(t,v);const m=u?"ssrRender":"render",S=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${m}(${S}) {`),o(),d&&(s("with (_ctx) {"),o(),h&&(s(`const { ${f.map(s0).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(Vc(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(Vc(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),Vc(t.filters,"filter",n),l()),t.temps>0){s("let ");for(let _=0;_<t.temps;_++)s(`${_>0?", ":""}_temp${_}`)}return(t.components.length||t.directives.length||t.temps)&&(s(`
`,0),l()),u||s("return "),t.codegenNode?$t(t.codegenNode,n):s("null"),d&&(a(),s("}")),a(),s("}"),{ast:t,code:n.code,preamble:g?v.code:"",map:n.map?n.map.toJSON():void 0}}function cM(t,e){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(t.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`,-1),t.hoists.length)){const f=[nh,ih,ta,sh,H_].filter(h=>u.includes(h)).map(s0).join(", ");s(`const { ${f} } = _Vue
`,-1)}uM(t.hoists,e),r(),s("return ")}function Vc(t,e,{helper:n,push:i,newline:s,isTS:r}){const o=n(e==="filter"?lh:e==="component"?rh:ah);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${Fo(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&s()}}function uM(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i,helper:s,scopeId:r,mode:o}=e;i();for(let a=0;a<t.length;a++){const l=t[a];l&&(n(`const _hoisted_${a+1} = `),$t(l,e),i())}e.pure=!1}function xh(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),sa(t,e,n),n&&e.deindent(),e.push("]")}function sa(t,e,n=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];ke(a)?s(a,-3):Ee(a)?xh(a,e):$t(a,e),o<t.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function $t(t,e){if(ke(t)){e.push(t,-3);return}if(Xn(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:$t(t.codegenNode,e);break;case 2:fM(t,e);break;case 4:r0(t,e);break;case 5:hM(t,e);break;case 12:$t(t.codegenNode,e);break;case 8:o0(t,e);break;case 3:pM(t,e);break;case 13:mM(t,e);break;case 14:_M(t,e);break;case 15:vM(t,e);break;case 17:xM(t,e);break;case 18:SM(t,e);break;case 19:yM(t,e);break;case 20:EM(t,e);break;case 21:sa(t.body,e,!0,!1);break}}function fM(t,e){e.push(JSON.stringify(t.content),-3,t)}function r0(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function hM(t,e){const{push:n,helper:i,pure:s}=e;s&&n(vc),n(`${i(mc)}(`),$t(t.content,e),n(")")}function o0(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];ke(i)?e.push(i,-3):$t(i,e)}}function dM(t,e){const{push:n}=e;if(t.type===8)n("["),o0(t,e),n("]");else if(t.isStatic){const i=vh(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function pM(t,e){const{push:n,helper:i,pure:s}=e;s&&n(vc),n(`${i(ta)}(${JSON.stringify(t.content)})`,-3,t)}function mM(t,e){const{push:n,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:h,isComponent:d}=t;u&&n(i(ch)+"("),f&&n(`(${i(Vs)}(${h?"true":""}), `),s&&n(vc);const g=f?zr(e.inSSR,d):Vr(e.inSSR,d);n(i(g)+"(",-2,t),sa(gM([r,o,a,l,c]),e),n(")"),f&&n(")"),u&&(n(", "),$t(u,e),n(")"))}function gM(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function _M(t,e){const{push:n,helper:i,pure:s}=e,r=ke(t.callee)?t.callee:i(t.callee);s&&n(vc),n(r+"(",-2,t),sa(t.arguments,e),n(")")}function vM(t,e){const{push:n,indent:i,deindent:s,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];dM(c,e),n(": "),$t(u,e),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function xM(t,e){xh(t.elements,e)}function SM(t,e){const{push:n,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${kr[ph]}(`),n("(",-2,t),Ee(r)?sa(r,e):r&&$t(r,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),Ee(o)?xh(o,e):$t(o,e)):a&&$t(a,e),(l||a)&&(s(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function yM(t,e){const{test:n,consequent:i,alternate:s,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const f=!vh(n.content);f&&o("("),r0(n,e),f&&o(")")}else o("("),$t(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),$t(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=s.type===19;u||e.indentLevel++,$t(s,e),u||e.indentLevel--,r&&l(!0)}function EM(t,e){const{push:n,helper:i,indent:s,deindent:r,newline:o}=e;n(`_cache[${t.index}] || (`),t.isVNode&&(s(),n(`${i(Sl)}(-1),`),o()),n(`_cache[${t.index}] = `),$t(t.value,e),t.isVNode&&(n(","),o(),n(`${i(Sl)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const MM=i0(/^(if|else|else-if)$/,(t,e,n)=>bM(t,e,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=Od(s,l,n);else{const c=TM(i.codegenNode);c.alternate=Od(s,l+i.branches.length-1,n)}}}));function bM(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:t.loc;n.onError(mt(28,e.loc)),e.exp=We("true",!1,s)}if(e.name==="if"){const s=Ud(t,e),r={type:9,loc:t.loc,branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(t);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(mt(30,t.loc)),n.removeNode();const a=Ud(t,e);o.branches.push(a);const l=i&&i(o,a,!1);_c(a,n),l&&l(),n.currentNode=null}else n.onError(mt(30,t.loc));break}}}function Ud(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!Bn(t,"for")?t.children:[t],userKey:gc(t,"key"),isTemplateIf:n}}function Od(t,e,n){return t.condition?Yu(t.condition,Fd(t,e,n),Ct(n.helper(ta),['""',"true"])):Fd(t,e,n)}function Fd(t,e,n){const{helper:i}=n,s=yt("key",We(`${e}`,!1,Mn,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return bl(l,s,n),l}else return Uo(n,i(Do),Ln([s]),r,64+"",void 0,void 0,!0,!1,!1,t.loc);else{const l=o.codegenNode,c=GE(l);return c.type===13&&gh(c,n),bl(c,s,n),l}}function TM(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const AM=i0("for",(t,e,n)=>{const{helper:i,removeHelper:s}=n;return wM(t,e,n,r=>{const o=Ct(i(uh),[r.source]),a=El(t),l=Bn(t,"memo"),c=gc(t,"key"),u=c&&(c.type===6?We(c.value.content,!0):c.exp),f=c?yt("key",u):null,h=r.source.type===4&&r.source.constType>0,d=h?64:c?128:256;return r.codegenNode=Uo(n,i(Do),void 0,o,d+"",void 0,void 0,!0,!h,!1,t.loc),()=>{let g;const{children:v}=r,m=v.length!==1||v[0].type!==1,p=Ml(t)?t:a&&t.children.length===1&&Ml(t.children[0])?t.children[0]:null;if(p?(g=p.codegenNode,a&&f&&bl(g,f,n)):m?g=Uo(n,i(Do),f?Ln([f]):void 0,t.children,"64",void 0,void 0,!0,void 0,!1):(g=v[0].codegenNode,a&&f&&bl(g,f,n),g.isBlock!==!h&&(g.isBlock?(s(Vs),s(zr(n.inSSR,g.isComponent))):s(Vr(n.inSSR,g.isComponent))),g.isBlock=!h,g.isBlock?(i(Vs),i(zr(n.inSSR,g.isComponent))):i(Vr(n.inSSR,g.isComponent))),l){const S=Hr(Ju(r.parseResult,[We("_cached")]));S.body=DE([Wn(["const _memo = (",l.exp,")"]),Wn(["if (_cached",...u?[" && _cached.key === ",u]:[],` && ${n.helperString(G_)}(_cached, _memo)) return _cached`]),Wn(["const _item = ",g]),We("_item.memo = _memo"),We("return _item")]),o.arguments.push(S,We("_cache"),We(String(n.cached++)))}else o.arguments.push(Hr(Ju(r.parseResult),g,!0))}})});function wM(t,e,n,i){if(!e.exp){n.onError(mt(31,e.loc));return}const s=e.forParseResult;if(!s){n.onError(mt(32,e.loc));return}a0(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:f}=s,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:s,children:El(t)?t.children:[t]};n.replaceNode(h),a.vFor++;const d=i&&i(h);return()=>{a.vFor--,d&&d()}}function a0(t,e){t.finalized||(t.finalized=!0)}function Ju({value:t,key:e,index:n},i=[]){return CM([t,e,n,...i])}function CM(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||We("_".repeat(i+1),!1))}const Bd=We("undefined",!1),RM=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=Bn(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},PM=(t,e,n,i)=>Hr(t,n,!1,!0,n.length?n[0].loc:i);function LM(t,e,n=PM){e.helper(ph);const{children:i,loc:s}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=Bn(t,"slot",!0);if(l){const{arg:m,exp:p}=l;m&&!cn(m)&&(a=!0),r.push(yt(m||We("default",!0),n(p,void 0,i,s)))}let c=!1,u=!1;const f=[],h=new Set;let d=0;for(let m=0;m<i.length;m++){const p=i[m];let S;if(!El(p)||!(S=Bn(p,"slot",!0))){p.type!==3&&f.push(p);continue}if(l){e.onError(mt(37,S.loc));break}c=!0;const{children:_,loc:M}=p,{arg:A=We("default",!0),exp:T,loc:C}=S;let L;cn(A)?L=A?A.content:"default":a=!0;const y=Bn(p,"for"),E=n(T,y,_,M);let N,U;if(N=Bn(p,"if"))a=!0,o.push(Yu(N.exp,ba(A,E,d++),Bd));else if(U=Bn(p,/^else(-if)?$/,!0)){let $=m,I;for(;$--&&(I=i[$],I.type===3););if(I&&El(I)&&Bn(I,"if")){i.splice(m,1),m--;let H=o[o.length-1];for(;H.alternate.type===19;)H=H.alternate;H.alternate=U.exp?Yu(U.exp,ba(A,E,d++),Bd):ba(A,E,d++)}else e.onError(mt(30,U.loc))}else if(y){a=!0;const $=y.forParseResult;$?(a0($),o.push(Ct(e.helper(uh),[$.source,Hr(Ju($),ba(A,E),!0)]))):e.onError(mt(32,y.loc))}else{if(L){if(h.has(L)){e.onError(mt(38,C));continue}h.add(L),L==="default"&&(u=!0)}r.push(yt(A,E))}}if(!l){const m=(p,S)=>{const _=n(p,void 0,S,s);return e.compatConfig&&(_.isNonScopedSlot=!0),yt("default",_)};c?f.length&&f.some(p=>l0(p))&&(u?e.onError(mt(39,f[0].loc)):r.push(m(void 0,f))):r.push(m(void 0,i))}const g=a?2:sl(t.children)?3:1;let v=Ln(r.concat(yt("_",We(g+"",!1))),s);return o.length&&(v=Ct(e.helper(z_),[v,ia(o)])),{slots:v,hasDynamicSlots:a}}function ba(t,e,n){const i=[yt("name",t),yt("fn",e)];return n!=null&&i.push(yt("key",We(String(n),!0))),Ln(i)}function sl(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||sl(n.children))return!0;break;case 9:if(sl(n.branches))return!0;break;case 10:case 11:if(sl(n.children))return!0;break}}return!1}function l0(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():l0(t.content)}const c0=new WeakMap,IM=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:s}=t,r=t.tagType===1;let o=r?DM(t,e):`"${i}"`;const a=ot(o)&&o.callee===oh;let l,c,u,f=0,h,d,g,v=a||o===xo||o===th||!r&&(i==="svg"||i==="foreignObject");if(s.length>0){const m=u0(t,e,void 0,r,a);l=m.props,f=m.patchFlag,d=m.dynamicPropNames;const p=m.directives;g=p&&p.length?ia(p.map(S=>UM(S,e))):void 0,m.shouldUseBlock&&(v=!0)}if(t.children.length>0)if(o===vl&&(v=!0,f|=1024),r&&o!==xo&&o!==vl){const{slots:p,hasDynamicSlots:S}=LM(t,e);c=p,S&&(f|=1024)}else if(t.children.length===1&&o!==xo){const p=t.children[0],S=p.type,_=S===5||S===8;_&&In(p,e)===0&&(f|=1),_||S===2?c=p:c=t.children}else c=t.children;f!==0&&(u=String(f),d&&d.length&&(h=OM(d))),t.codegenNode=Uo(e,o,l,c,u,h,g,!!v,!1,r,t.loc)};function DM(t,e,n=!1){let{tag:i}=t;const s=Qu(i),r=gc(t,"is");if(r)if(s||Ls("COMPILER_IS_ON_ELEMENT",e)){const a=r.type===6?r.value&&We(r.value.content,!0):r.exp;if(a)return Ct(e.helper(oh),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=X_(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(rh),e.components.add(i),Fo(i,"component"))}function u0(t,e,n=t.props,i,s,r=!1){const{tag:o,loc:a,children:l}=t;let c=[];const u=[],f=[],h=l.length>0;let d=!1,g=0,v=!1,m=!1,p=!1,S=!1,_=!1,M=!1;const A=[],T=y=>{c.length&&(u.push(Ln(kd(c),a)),c=[]),y&&u.push(y)},C=({key:y,value:E})=>{if(cn(y)){const N=y.content,U=Ws(N);if(U&&(!i||s)&&N.toLowerCase()!=="onclick"&&N!=="onUpdate:modelValue"&&!Ts(N)&&(S=!0),U&&Ts(N)&&(M=!0),U&&E.type===14&&(E=E.arguments[0]),E.type===20||(E.type===4||E.type===8)&&In(E,e)>0)return;N==="ref"?v=!0:N==="class"?m=!0:N==="style"?p=!0:N!=="key"&&!A.includes(N)&&A.push(N),i&&(N==="class"||N==="style")&&!A.includes(N)&&A.push(N)}else _=!0};for(let y=0;y<n.length;y++){const E=n[y];if(E.type===6){const{loc:N,name:U,nameLoc:$,value:I}=E;let H=!0;if(U==="ref"&&(v=!0,e.scopes.vFor>0&&c.push(yt(We("ref_for",!0),We("true")))),U==="is"&&(Qu(o)||I&&I.content.startsWith("vue:")||Ls("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(yt(We(U,!0,$),We(I?I.content:"",H,I?I.loc:N)))}else{const{name:N,arg:U,exp:$,loc:I,modifiers:H}=E,k=N==="bind",Y=N==="on";if(N==="slot"){i||e.onError(mt(40,I));continue}if(N==="once"||N==="memo"||N==="is"||k&&ys(U,"is")&&(Qu(o)||Ls("COMPILER_IS_ON_ELEMENT",e))||Y&&r)continue;if((k&&ys(U,"key")||Y&&h&&ys(U,"vue:before-update"))&&(d=!0),k&&ys(U,"ref")&&e.scopes.vFor>0&&c.push(yt(We("ref_for",!0),We("true"))),!U&&(k||Y)){if(_=!0,$)if(k){if(T(),Ls("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift($);continue}u.push($)}else T({type:14,loc:I,callee:e.helper(dh),arguments:i?[$]:[$,"true"]});else e.onError(mt(k?34:35,I));continue}k&&H.includes("prop")&&(g|=32);const z=e.directiveTransforms[N];if(z){const{props:ne,needRuntime:ce}=z(E,t,e);!r&&ne.forEach(C),Y&&U&&!cn(U)?T(Ln(ne,a)):c.push(...ne),ce&&(f.push(E),Xn(ce)&&c0.set(E,ce))}else Kv(N)||(f.push(E),h&&(d=!0))}}let L;if(u.length?(T(),u.length>1?L=Ct(e.helper(xl),u,a):L=u[0]):c.length&&(L=Ln(kd(c),a)),_?g|=16:(m&&!i&&(g|=2),p&&!i&&(g|=4),A.length&&(g|=8),S&&(g|=32)),!d&&(g===0||g===32)&&(v||M||f.length>0)&&(g|=512),!e.inSSR&&L)switch(L.type){case 15:let y=-1,E=-1,N=!1;for(let I=0;I<L.properties.length;I++){const H=L.properties[I].key;cn(H)?H.content==="class"?y=I:H.content==="style"&&(E=I):H.isHandlerKey||(N=!0)}const U=L.properties[y],$=L.properties[E];N?L=Ct(e.helper(No),[L]):(U&&!cn(U.value)&&(U.value=Ct(e.helper(fh),[U.value])),$&&(p||$.value.type===4&&$.value.content.trim()[0]==="["||$.value.type===17)&&($.value=Ct(e.helper(hh),[$.value])));break;case 14:break;default:L=Ct(e.helper(No),[Ct(e.helper(na),[L])]);break}return{props:L,directives:f,patchFlag:g,dynamicPropNames:A,shouldUseBlock:d}}function kd(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const s=t[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||Ws(r))&&NM(o,s):(e.set(r,s),n.push(s))}return n}function NM(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=ia([t.value,e.value],t.loc)}function UM(t,e){const n=[],i=c0.get(t);i?n.push(e.helperString(i)):(e.helper(ah),e.directives.add(t.name),n.push(Fo(t.name,"directive")));const{loc:s}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=We("true",!1,s);n.push(Ln(t.modifiers.map(o=>yt(o,r)),s))}return ia(n,t.loc)}function OM(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function Qu(t){return t==="component"||t==="Component"}const FM=(t,e)=>{if(Ml(t)){const{children:n,loc:i}=t,{slotName:s,slotProps:r}=BM(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=Hr([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Ct(e.helper(V_),o,i)}};function BM(t,e){let n='"default"',i;const s=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];o.type===6?o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=Et(o.name),s.push(o))):o.name==="bind"&&ys(o.arg,"name")?o.exp&&(n=o.exp):(o.name==="bind"&&o.arg&&cn(o.arg)&&(o.arg.content=Et(o.arg.content)),s.push(o))}if(s.length>0){const{props:r,directives:o}=u0(t,e,s,!1,!1);i=r,o.length&&e.onError(mt(36,o[0].loc))}return{slotName:n,slotProps:i}}const kM=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,f0=(t,e,n,i)=>{const{loc:s,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(mt(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Tr(Et(f)):`on:${f}`;a=We(h,!0,o.loc)}else a=Wn([`${n.helperString($u)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString($u)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const f=q_(l.content),h=!(f||kM.test(l.content)),d=l.content.includes(";");(h||c&&f)&&(l=Wn([`${h?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let u={props:[yt(a,l||We("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},HM=(t,e,n)=>{const{modifiers:i,loc:s}=t,r=t.arg;let{exp:o}=t;if(!o&&r.type===4){const a=Et(r.content);o=t.exp=We(a,!1,r.loc)}return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.includes("camel")&&(r.type===4?r.isStatic?r.content=Et(r.content):r.content=`${n.helperString(ju)}(${r.content})`:(r.children.unshift(`${n.helperString(ju)}(`),r.children.push(")"))),n.inSSR||(i.includes("prop")&&Hd(r,"."),i.includes("attr")&&Hd(r,"^")),!o||o.type===4&&!o.content.trim()?(n.onError(mt(34,s)),{props:[yt(r,We("",!0,s))]}):{props:[yt(r,o)]}},Hd=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},VM=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if(Hc(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(Hc(l))i||(i=n[r]=Wn([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(Hc(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&In(o,e)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Ct(e.helper(sh),a)}}}}},Vd=new WeakSet,zM=(t,e)=>{if(t.type===1&&Bn(t,"once",!0))return Vd.has(t)||e.inVOnce||e.inSSR?void 0:(Vd.add(t),e.inVOnce=!0,e.helper(Sl),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0))})},h0=(t,e,n)=>{const{exp:i,arg:s}=t;if(!i)return n.onError(mt(41,t.loc)),Ta();const r=i.loc.source,o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(mt(44,i.loc)),Ta();if(!o.trim()||!q_(o)&&!!1)return n.onError(mt(42,i.loc)),Ta();const c=s||We("modelValue",!0),u=s?cn(s)?`onUpdate:${Et(s.content)}`:Wn(['"onUpdate:" + ',s]):"onUpdate:modelValue";let f;const h=n.isTS?"($event: any)":"$event";f=Wn([`${h} => ((`,i,") = $event)"]);const d=[yt(c,t.exp),yt(u,f)];if(t.modifiers.length&&e.tagType===1){const g=t.modifiers.map(m=>(vh(m)?m:JSON.stringify(m))+": true").join(", "),v=s?cn(s)?`${s.content}Modifiers`:Wn([s,' + "Modifiers"']):"modelModifiers";d.push(yt(v,We(`{ ${g} }`,!1,t.loc,2)))}return Ta(d)};function Ta(t=[]){return{props:t}}const GM=/[\w).+\-_$\]]/,WM=(t,e)=>{Ls("COMPILER_FILTERS",e)&&(t.type===5&&Al(t.content,e),t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&Al(n.exp,e)}))};function Al(t,e){if(t.type===4)zd(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?zd(i,e):i.type===8?Al(t,e):i.type===5&&Al(i.content,e))}}function zd(t,e){const n=t.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,f,h,d,g,v=[];for(d=0;d<n.length;d++)if(h=f,f=n.charCodeAt(d),i)f===39&&h!==92&&(i=!1);else if(s)f===34&&h!==92&&(s=!1);else if(r)f===96&&h!==92&&(r=!1);else if(o)f===47&&h!==92&&(o=!1);else if(f===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!l&&!c)g===void 0?(u=d+1,g=n.slice(0,d).trim()):m();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let p=d-1,S;for(;p>=0&&(S=n.charAt(p),S===" ");p--);(!S||!GM.test(S))&&(o=!0)}}g===void 0?g=n.slice(0,d).trim():u!==0&&m();function m(){v.push(n.slice(u,d).trim()),u=d+1}if(v.length){for(d=0;d<v.length;d++)g=XM(g,v[d],e);t.content=g}}function XM(t,e,n){n.helper(lh);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${Fo(e,"filter")}(${t})`;{const s=e.slice(0,i),r=e.slice(i+1);return n.filters.add(s),`${Fo(s,"filter")}(${t}${r!==")"?","+r:r}`}}const Gd=new WeakSet,qM=(t,e)=>{if(t.type===1){const n=Bn(t,"memo");return!n||Gd.has(t)?void 0:(Gd.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&gh(i,e),t.codegenNode=Ct(e.helper(mh),[n.exp,Hr(void 0,i),"_cache",String(e.cached++)]))})}};function jM(t){return[[zM,MM,qM,AM,WM,FM,IM,RM,VM],{on:f0,bind:HM,model:h0}]}function $M(t,e={}){const n=e.onError||_h,i=e.mode==="module";e.prefixIdentifiers===!0?n(mt(47)):i&&n(mt(48));const s=!1;e.cacheHandlers&&n(mt(49)),e.scopeId&&!i&&n(mt(50));const r=nt({},e,{prefixIdentifiers:s}),o=ke(t)?tM(t,r):t,[a,l]=jM();return rM(o,nt({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:nt({},l,e.directiveTransforms||{})})),lM(o,r)}const YM=()=>({props:[]});/**
* @vue/compiler-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const d0=Symbol(""),p0=Symbol(""),m0=Symbol(""),g0=Symbol(""),ef=Symbol(""),_0=Symbol(""),v0=Symbol(""),x0=Symbol(""),S0=Symbol(""),y0=Symbol("");PE({[d0]:"vModelRadio",[p0]:"vModelCheckbox",[m0]:"vModelText",[g0]:"vModelSelect",[ef]:"vModelDynamic",[_0]:"withModifiers",[v0]:"withKeys",[x0]:"vShow",[S0]:"Transition",[y0]:"TransitionGroup"});let Js;function KM(t,e=!1){return Js||(Js=document.createElement("div")),e?(Js.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,Js.children[0].getAttribute("foo")):(Js.innerHTML=t,Js.textContent)}const ZM={parseMode:"html",isVoidTag:hx,isNativeTag:t=>cx(t)||ux(t)||fx(t),isPreTag:t=>t==="pre",decodeEntities:KM,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return S0;if(t==="TransitionGroup"||t==="transition-group")return y0},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},JM=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:We("style",!0,e.loc),exp:QM(e.value.content,e.loc),modifiers:[],loc:e.loc})})},QM=(t,e)=>{const n=qm(t);return We(JSON.stringify(n),!1,e,3)};function Yi(t,e){return mt(t,e)}const eb=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Yi(53,s)),e.children.length&&(n.onError(Yi(54,s)),e.children.length=0),{props:[yt(We("innerHTML",!0,s),i||We("",!0))]}},tb=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Yi(55,s)),e.children.length&&(n.onError(Yi(56,s)),e.children.length=0),{props:[yt(We("textContent",!0),i?In(i,n)>0?i:Ct(n.helperString(mc),[i],s):We("",!0))]}},nb=(t,e,n)=>{const i=h0(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(Yi(58,t.arg.loc));const{tag:s}=e,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=m0,a=!1;if(s==="input"||r){const l=gc(e,"type");if(l){if(l.type===7)o=ef;else if(l.value)switch(l.value.content){case"radio":o=d0;break;case"checkbox":o=p0;break;case"file":a=!0,n.onError(Yi(59,t.loc));break}}else HE(e)&&(o=ef)}else s==="select"&&(o=g0);a||(i.needRuntime=n.helper(o))}else n.onError(Yi(57,t.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},ib=En("passive,once,capture"),sb=En("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),rb=En("left,right"),E0=En("onkeyup,onkeydown,onkeypress",!0),ob=(t,e,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&Oo("COMPILER_V_ON_NATIVE",n)||ib(l)?o.push(l):rb(l)?cn(t)?E0(t.content)?s.push(l):r.push(l):(s.push(l),r.push(l)):sb(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},Wd=(t,e)=>cn(t)&&t.content.toLowerCase()==="onclick"?We(e,!0):t.type!==4?Wn(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,ab=(t,e,n)=>f0(t,e,n,i=>{const{modifiers:s}=t;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=ob(r,s,n,t.loc);if(l.includes("right")&&(r=Wd(r,"onContextmenu")),l.includes("middle")&&(r=Wd(r,"onMouseup")),l.length&&(o=Ct(n.helper(_0),[o,JSON.stringify(l)])),a.length&&(!cn(r)||E0(r.content))&&(o=Ct(n.helper(v0),[o,JSON.stringify(a)])),c.length){const u=c.map(qs).join("");r=cn(r)?We(`${r.content}${u}`,!0):Wn(["(",r,`) + "${u}"`])}return{props:[yt(r,o)]}}),lb=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Yi(61,s)),{props:[],needRuntime:n.helper(x0)}},cb=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},ub=[JM],fb={cloak:YM,html:eb,text:tb,model:nb,on:ab,show:lb};function hb(t,e={}){return $M(t,nt({},ZM,e,{nodeTransforms:[cb,...ub,...e.nodeTransforms||[]],directiveTransforms:nt({},fb,e.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Xd=new WeakMap;function db(t){let e=Xd.get(t??it);return e||(e=Object.create(null),Xd.set(t??it,e)),e}function pb(t,e){if(!ke(t))if(t.nodeType)t=t.innerHTML;else return Pt;const n=t,i=db(e),s=i[n];if(s)return s;if(t[0]==="#"){const l=document.querySelector(t);t=l?l.innerHTML:""}const r=nt({hoistStatic:!0,onError:void 0,onWarn:Pt},e);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=l=>!!customElements.get(l));const{code:o}=hb(t,r),a=new Function("Vue",o)(bE);return a._rc=!0,i[n]=a}f_(pb);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const _r=typeof window<"u";function mb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const rt=Object.assign;function zc(t,e){const n={};for(const i in e){const s=e[i];n[i]=jn(s)?s.map(t):t(s)}return n}const So=()=>{},jn=Array.isArray,gb=/\/$/,_b=t=>t.replace(gb,"");function Gc(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=yb(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function vb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xb(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Gr(e.matched[i],n.matched[s])&&M0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function M0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Sb(t[n],e[n]))return!1;return!0}function Sb(t,e){return jn(t)?jd(t,e):jn(e)?jd(e,t):t===e}function jd(t,e){return jn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function yb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var yo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yo||(yo={}));function Eb(t){if(!t)if(_r){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_b(t)}const Mb=/^[^#]+#/;function bb(t,e){return t.replace(Mb,"#")+e}function Tb(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const xc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ab(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Tb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function $d(t,e){return(history.state?history.state.position-e:-1)+t}const tf=new Map;function wb(t,e){tf.set(t,e)}function Cb(t){const e=tf.get(t);return tf.delete(t),e}let Rb=()=>location.protocol+"//"+location.host;function b0(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),qd(l,"")}return qd(n,t)+i+s}function Pb(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=b0(t,location),g=n.value,v=e.value;let m=0;if(h){if(n.value=d,e.value=h,o&&o===g){o=null;return}m=v?h.position-v.position:0}else i(d);s.forEach(p=>{p(n.value,g,{delta:m,type:ko.pop,direction:m?m>0?yo.forward:yo.back:yo.unknown})})};function l(){o=n.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(rt({},h.state,{scroll:xc()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Yd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?xc():null}}function Lb(t){const{history:e,location:n}=window,i={value:b0(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Rb()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(l,c){const u=rt({},e.state,Yd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=rt({},s.value,e.state,{forward:l,scroll:xc()});r(u.current,u,!0);const f=rt({},Yd(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Ib(t){t=Eb(t);const e=Lb(t),n=Pb(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=rt({location:"",base:t,go:i,createHref:bb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Db(t){return typeof t=="string"||t&&typeof t=="object"}function T0(t){return typeof t=="string"||typeof t=="symbol"}const Pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},A0=Symbol("");var Kd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kd||(Kd={}));function Wr(t,e){return rt(new Error,{type:t,[A0]:!0},e)}function oi(t,e){return t instanceof Error&&A0 in t&&(e==null||!!(t.type&e))}const Zd="[^/]+?",Nb={sensitive:!1,strict:!1,start:!0,end:!0},Ub=/[.+*?^${}()[\]/\\]/g;function Ob(t,e){const n=rt({},Nb,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Ub,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=h;r.push({name:g,repeatable:v,optional:m});const S=p||Zd;if(S!==Zd){d+=10;try{new RegExp(`(${S})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+M.message)}}let _=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),s+=_,d+=20,m&&(d+=-8),v&&(d+=-20),S===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(jn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=jn(p)?p.join("/"):p;if(!S)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Fb(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Bb(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Fb(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Jd(i))return 1;if(Jd(s))return-1}return s.length-i.length}function Jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kb={type:0,value:""},Hb=/[a-zA-Z0-9_]/;function Vb(t){if(!t)return[[]];if(t==="/")return[[kb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:Hb.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function zb(t,e,n){const i=Ob(Vb(t.path),n),s=rt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gb(t,e){const n=[],i=new Map;e=tp({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,h){const d=!h,g=Wb(u);g.aliasOf=h&&h.record;const v=tp(e,u),m=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of _)m.push(rt({},g,{components:h?h.record.components:g.components,path:M,aliasOf:h?h.record:g}))}let p,S;for(const _ of m){const{path:M}=_;if(f&&M[0]!=="/"){const A=f.record.path,T=A[A.length-1]==="/"?"":"/";_.path=f.record.path+(M&&T+M)}if(p=zb(_,f,v),h?h.alias.push(p):(S=S||p,S!==p&&S.alias.push(p),d&&u.name&&!ep(p)&&o(u.name)),g.children){const A=g.children;for(let T=0;T<A.length;T++)r(A[T],p,h&&h.children[T])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return S?()=>{o(S)}:So}function o(u){if(T0(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Bb(u,n[f])>=0&&(u.record.path!==n[f].record.path||!w0(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ep(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Wr(1,{location:u});v=h.record.name,d=rt(Qd(f.params,h.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&Qd(u.params,h.keys.map(S=>S.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=n.find(S=>S.re.test(g)),h&&(d=h.parse(g),v=h.record.name);else{if(h=f.name?i.get(f.name):n.find(S=>S.re.test(f.path)),!h)throw Wr(1,{location:u,currentLocation:f});v=h.record.name,d=rt({},f.params,u.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:m,meta:qb(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Wb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function ep(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qb(t){return t.reduce((e,n)=>rt(e,n.meta),{})}function tp(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function w0(t,e){return e.children.some(n=>n===t||w0(t,n))}const C0=/#/g,jb=/&/g,$b=/\//g,Yb=/=/g,Kb=/\?/g,R0=/\+/g,Zb=/%5B/g,Jb=/%5D/g,P0=/%5E/g,Qb=/%60/g,L0=/%7B/g,eT=/%7C/g,I0=/%7D/g,tT=/%20/g;function Sh(t){return encodeURI(""+t).replace(eT,"|").replace(Zb,"[").replace(Jb,"]")}function nT(t){return Sh(t).replace(L0,"{").replace(I0,"}").replace(P0,"^")}function nf(t){return Sh(t).replace(R0,"%2B").replace(tT,"+").replace(C0,"%23").replace(jb,"%26").replace(Qb,"`").replace(L0,"{").replace(I0,"}").replace(P0,"^")}function iT(t){return nf(t).replace(Yb,"%3D")}function sT(t){return Sh(t).replace(C0,"%23").replace(Kb,"%3F")}function rT(t){return t==null?"":sT(t).replace($b,"%2F")}function wl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function oT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(R0," "),o=r.indexOf("="),a=wl(o<0?r:r.slice(0,o)),l=o<0?null:wl(r.slice(o+1));if(a in e){let c=e[a];jn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function np(t){let e="";for(let n in t){const i=t[n];if(n=iT(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(jn(i)?i.map(r=>r&&nf(r)):[i&&nf(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function aT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=jn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const lT=Symbol(""),ip=Symbol(""),yh=Symbol(""),D0=Symbol(""),sf=Symbol("");function to(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gi(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Wr(4,{from:n,to:e})):f instanceof Error?a(f):Db(f)?a(Wr(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Wc(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(cT(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Gi(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=mb(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Gi(h,n,i,r,o)()}))}}return s}function cT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sp(t){const e=Qn(yh),n=Qn(D0),i=Rn(()=>e.resolve(an(t.to))),s=Rn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Gr.bind(null,u));if(h>-1)return h;const d=rp(l[c-2]);return c>1&&rp(u)===d&&f[f.length-1].path!==d?f.findIndex(Gr.bind(null,l[c-2])):h}),r=Rn(()=>s.value>-1&&hT(n.params,i.value.params)),o=Rn(()=>s.value>-1&&s.value===n.matched.length-1&&M0(n.params,i.value.params));function a(l={}){return fT(l)?e[an(t.replace)?"replace":"push"](an(t.to)).catch(So):Promise.resolve()}return{route:i,href:Rn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const uT=Ks({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sp,setup(t,{slots:e}){const n=$o(sp(t)),{options:i}=Qn(yh),s=Rn(()=>({[op(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[op(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:dc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),vr=uT;function fT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hT(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!jn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function rp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const op=(t,e,n)=>t??e??n,dT=Ks({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Qn(sf),s=Rn(()=>t.route||i.value),r=Qn(ip,0),o=Rn(()=>{let c=an(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Rn(()=>s.value.matched[o.value]);mo(ip,Rn(()=>o.value+1)),mo(lT,a),mo(sf,s);const l=Cr();return Lr(()=>[l.value,a.value,t.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Gr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return ap(n.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=dc(h,rt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ap(n.default,{Component:m,route:c})||m}}});function ap(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const N0=dT;function pT(t){const e=Gb(t.routes,t),n=t.parseQuery||oT,i=t.stringifyQuery||np,s=t.history,r=to(),o=to(),a=to(),l=hg(Pi);let c=Pi;_r&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zc.bind(null,G=>""+G),f=zc.bind(null,rT),h=zc.bind(null,wl);function d(G,le){let re,ue;return T0(G)?(re=e.getRecordMatcher(G),ue=le):ue=G,e.addRoute(ue,re)}function g(G){const le=e.getRecordMatcher(G);le&&e.removeRoute(le)}function v(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function p(G,le){if(le=rt({},le||l.value),typeof G=="string"){const P=Gc(n,G,le.path),F=e.resolve({path:P.path},le),X=s.createHref(P.fullPath);return rt(P,F,{params:h(F.params),hash:wl(P.hash),redirectedFrom:void 0,href:X})}let re;if("path"in G)re=rt({},G,{path:Gc(n,G.path,le.path).path});else{const P=rt({},G.params);for(const F in P)P[F]==null&&delete P[F];re=rt({},G,{params:f(P)}),le.params=f(le.params)}const ue=e.resolve(re,le),be=G.hash||"";ue.params=u(h(ue.params));const W=vb(i,rt({},G,{hash:nT(be),path:ue.path})),R=s.createHref(W);return rt({fullPath:W,hash:be,query:i===np?aT(G.query):G.query||{}},ue,{redirectedFrom:void 0,href:R})}function S(G){return typeof G=="string"?Gc(n,G,l.value.path):rt({},G)}function _(G,le){if(c!==G)return Wr(8,{from:le,to:G})}function M(G){return C(G)}function A(G){return M(rt(S(G),{replace:!0}))}function T(G){const le=G.matched[G.matched.length-1];if(le&&le.redirect){const{redirect:re}=le;let ue=typeof re=="function"?re(G):re;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=S(ue):{path:ue},ue.params={}),rt({query:G.query,hash:G.hash,params:"path"in ue?{}:G.params},ue)}}function C(G,le){const re=c=p(G),ue=l.value,be=G.state,W=G.force,R=G.replace===!0,P=T(re);if(P)return C(rt(S(P),{state:typeof P=="object"?rt({},be,P.state):be,force:W,replace:R}),le||re);const F=re;F.redirectedFrom=le;let X;return!W&&xb(i,ue,re)&&(X=Wr(16,{to:F,from:ue}),he(ue,ue,!0,!1)),(X?Promise.resolve(X):E(F,ue)).catch(J=>oi(J)?oi(J,2)?J:ce(J):z(J,F,ue)).then(J=>{if(J){if(oi(J,2))return C(rt({replace:R},S(J.to),{state:typeof J.to=="object"?rt({},be,J.to.state):be,force:W}),le||F)}else J=U(F,ue,!0,R,be);return N(F,ue,J),J})}function L(G,le){const re=_(G,le);return re?Promise.reject(re):Promise.resolve()}function y(G){const le=fe.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(G):G()}function E(G,le){let re;const[ue,be,W]=mT(G,le);re=Wc(ue.reverse(),"beforeRouteLeave",G,le);for(const P of ue)P.leaveGuards.forEach(F=>{re.push(Gi(F,G,le))});const R=L.bind(null,G,le);return re.push(R),ye(re).then(()=>{re=[];for(const P of r.list())re.push(Gi(P,G,le));return re.push(R),ye(re)}).then(()=>{re=Wc(be,"beforeRouteUpdate",G,le);for(const P of be)P.updateGuards.forEach(F=>{re.push(Gi(F,G,le))});return re.push(R),ye(re)}).then(()=>{re=[];for(const P of W)if(P.beforeEnter)if(jn(P.beforeEnter))for(const F of P.beforeEnter)re.push(Gi(F,G,le));else re.push(Gi(P.beforeEnter,G,le));return re.push(R),ye(re)}).then(()=>(G.matched.forEach(P=>P.enterCallbacks={}),re=Wc(W,"beforeRouteEnter",G,le),re.push(R),ye(re))).then(()=>{re=[];for(const P of o.list())re.push(Gi(P,G,le));return re.push(R),ye(re)}).catch(P=>oi(P,8)?P:Promise.reject(P))}function N(G,le,re){a.list().forEach(ue=>y(()=>ue(G,le,re)))}function U(G,le,re,ue,be){const W=_(G,le);if(W)return W;const R=le===Pi,P=_r?history.state:{};re&&(ue||R?s.replace(G.fullPath,rt({scroll:R&&P&&P.scroll},be)):s.push(G.fullPath,be)),l.value=G,he(G,le,re,R),ce()}let $;function I(){$||($=s.listen((G,le,re)=>{if(!ve.listening)return;const ue=p(G),be=T(ue);if(be){C(rt(be,{replace:!0}),ue).catch(So);return}c=ue;const W=l.value;_r&&wb($d(W.fullPath,re.delta),xc()),E(ue,W).catch(R=>oi(R,12)?R:oi(R,2)?(C(R.to,ue).then(P=>{oi(P,20)&&!re.delta&&re.type===ko.pop&&s.go(-1,!1)}).catch(So),Promise.reject()):(re.delta&&s.go(-re.delta,!1),z(R,ue,W))).then(R=>{R=R||U(ue,W,!1),R&&(re.delta&&!oi(R,8)?s.go(-re.delta,!1):re.type===ko.pop&&oi(R,20)&&s.go(-1,!1)),N(ue,W,R)}).catch(So)}))}let H=to(),k=to(),Y;function z(G,le,re){ce(G);const ue=k.list();return ue.length?ue.forEach(be=>be(G,le,re)):console.error(G),Promise.reject(G)}function ne(){return Y&&l.value!==Pi?Promise.resolve():new Promise((G,le)=>{H.add([G,le])})}function ce(G){return Y||(Y=!G,I(),H.list().forEach(([le,re])=>G?re(G):le()),H.reset()),G}function he(G,le,re,ue){const{scrollBehavior:be}=t;if(!_r||!be)return Promise.resolve();const W=!re&&Cb($d(G.fullPath,0))||(ue||!re)&&history.state&&history.state.scroll||null;return Yo().then(()=>be(G,le,W)).then(R=>R&&Ab(R)).catch(R=>z(R,G,le))}const pe=G=>s.go(G);let te;const fe=new Set,ve={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:t,push:M,replace:A,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:ne,install(G){const le=this;G.component("RouterLink",vr),G.component("RouterView",N0),G.config.globalProperties.$router=le,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>an(l)}),_r&&!te&&l.value===Pi&&(te=!0,M(s.location).catch(be=>{}));const re={};for(const be in Pi)Object.defineProperty(re,be,{get:()=>l.value[be],enumerable:!0});G.provide(yh,le),G.provide(D0,Lf(re)),G.provide(sf,l);const ue=G.unmount;fe.add(G),G.unmount=function(){fe.delete(G),fe.size<1&&(c=Pi,$&&$(),$=null,l.value=Pi,te=!1,Y=!1),ue()}}};function ye(G){return G.reduce((le,re)=>le.then(()=>y(re)),Promise.resolve())}return ve}function mT(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Gr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Gr(c,l))||s.push(l))}return[n,i,s]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="160",gT=0,lp=1,_T=2,U0=1,vT=2,mi=3,ns=0,un=1,vi=2,Ki=0,Ir=1,rf=2,cp=3,up=4,xT=5,_s=100,ST=101,yT=102,fp=103,hp=104,ET=200,MT=201,bT=202,TT=203,of=204,af=205,AT=206,wT=207,CT=208,RT=209,PT=210,LT=211,IT=212,DT=213,NT=214,UT=0,OT=1,FT=2,Cl=3,BT=4,kT=5,HT=6,VT=7,Sc=0,zT=1,GT=2,Zi=0,WT=1,XT=2,qT=3,jT=4,$T=5,YT=6,O0=300,Xr=301,qr=302,lf=303,cf=304,yc=306,tn=1e3,Vn=1001,uf=1002,en=1003,dp=1004,Xc=1005,Cn=1006,KT=1007,Ho=1008,Ji=1009,ZT=1010,JT=1011,Mh=1012,F0=1013,Xi=1014,qi=1015,Vo=1016,B0=1017,k0=1018,Ds=1020,QT=1021,zn=1023,e1=1024,t1=1025,Ns=1026,jr=1027,n1=1028,H0=1029,i1=1030,V0=1031,z0=1033,qc=33776,jc=33777,$c=33778,Yc=33779,pp=35840,mp=35841,gp=35842,_p=35843,G0=36196,vp=37492,xp=37496,Sp=37808,yp=37809,Ep=37810,Mp=37811,bp=37812,Tp=37813,Ap=37814,wp=37815,Cp=37816,Rp=37817,Pp=37818,Lp=37819,Ip=37820,Dp=37821,Kc=36492,Np=36494,Up=36495,s1=36283,Op=36284,Fp=36285,Bp=36286,W0=3e3,Us=3001,r1=3200,o1=3201,bh=0,a1=1,Pn="",_t="srgb",Mi="srgb-linear",Th="display-p3",Ec="display-p3-linear",Rl="linear",ht="srgb",Pl="rec709",Ll="p3",Qs=7680,kp=519,l1=512,c1=513,u1=514,X0=515,f1=516,h1=517,d1=518,p1=519,Hp=35044,Vp="300 es",ff=1035,xi=2e3,Il=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,hf=180/Math.PI;function ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function m1(t,e){return(t%e+e)%e}function Jc(t,e,n){return(1-n)*t+n*e}function zp(t){return(t&t-1)===0&&t!==0}function df(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function no(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,s,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],_=s[4],M=s[7],A=s[2],T=s[5],C=s[8];return r[0]=o*v+a*S+l*A,r[3]=o*m+a*_+l*T,r[6]=o*p+a*M+l*C,r[1]=c*v+u*S+f*A,r[4]=c*m+u*_+f*T,r[7]=c*p+u*M+f*C,r[2]=h*v+d*S+g*A,r[5]=h*m+d*_+g*T,r[8]=h*p+d*M+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=n*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=d*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new $e;function q0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function g1(){const t=zo("canvas");return t.style.display="block",t}const Gp={};function Eo(t){t in Gp||(Gp[t]=!0,console.warn(t))}const Wp=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xp=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Mi]:{transfer:Rl,primaries:Pl,toReference:t=>t,fromReference:t=>t},[_t]:{transfer:ht,primaries:Pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ec]:{transfer:Rl,primaries:Ll,toReference:t=>t.applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(Wp)},[Th]:{transfer:ht,primaries:Ll,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(Wp).convertLinearToSRGB()}},_1=new Set([Mi,Ec]),at={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Aa[e].toReference,s=Aa[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Aa[t].primaries},getTransfer:function(t){return t===Pn?Rl:Aa[t].transfer}};function Dr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let er;class j0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=zo("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Dr(n[i]/255)*255):n[i]=Dr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v1=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=ra(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tu(s[o].image)):r.push(tu(s[o]))}else r=tu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?j0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x1=0;class fn extends Zs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Vn,s=Vn,r=Cn,o=Ho,a=zn,l=Ji,c=fn.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=ra(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Us?_t:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tn:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tn:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Us:W0}set encoding(e){Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Us?_t:Pn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=O0;fn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(d+1)/2,A=(p+1)/2,T=(u+h)/4,C=(f+v)/4,L=(g+m)/4;return _>M&&_>A?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=C/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=L/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=L/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S1 extends Zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Us?_t:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends S1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y1 extends fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const A=Math.sqrt(_),T=Math.atan2(A,p*S);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const M=a*S;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+v*M,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*d-c*h,e[n+1]=l*g+u*h+c*f-a*d,e[n+2]=c*g+u*d+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nu=new V,qp=new oa;class aa{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ca.subVectors(this.max,io),tr.subVectors(e.a,io),nr.subVectors(e.b,io),ir.subVectors(e.c,io),Li.subVectors(nr,tr),Ii.subVectors(ir,nr),ls.subVectors(tr,ir);let n=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-ls.z,ls.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,ls.z,0,-ls.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-ls.y,ls.x,0];return!iu(n,tr,nr,ir,Ca)||(n=[1,0,0,0,1,0,0,0,1],!iu(n,tr,nr,ir,Ca))?!1:(Ra.crossVectors(Li,Ii),n=[Ra.x,Ra.y,Ra.z],iu(n,tr,nr,ir,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new V,new V,new V,new V,new V,new V,new V,new V],Un=new V,wa=new aa,tr=new V,nr=new V,ir=new V,Li=new V,Ii=new V,ls=new V,io=new V,Ca=new V,Ra=new V,cs=new V;function iu(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){cs.fromArray(t,r);const a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=n.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const E1=new aa,so=new V,su=new V;class la{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):E1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const n=so.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(so,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(su)),this.expandByPoint(so.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new V,ru=new V,Pa=new V,Di=new V,ou=new V,La=new V,au=new V;class Ah{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){ru.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(ru);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=Di.dot(this.direction),l=-Di.dot(Pa),c=Di.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ru).addScaledVector(Pa,h),d}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,s,r){ou.subVectors(n,e),La.subVectors(i,e),au.crossVectors(ou,La);let o=this.direction.dot(au),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Di,La));if(l<0)return null;const c=a*this.direction.dot(ou.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(au);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,s,r,o,a,l,c,u,f,h,d,g,v,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,d,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;n[0]=h+v*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-d,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+g,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M1,e,b1)}lookAt(e,n,i){const s=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ni.crossVectors(i,pn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ni.crossVectors(i,pn)),Ni.normalize(),Ia.crossVectors(pn,Ni),s[0]=Ni.x,s[4]=Ia.x,s[8]=pn.x,s[1]=Ni.y,s[5]=Ia.y,s[9]=pn.y,s[2]=Ni.z,s[6]=Ia.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],_=i[7],M=i[11],A=i[15],T=s[0],C=s[4],L=s[8],y=s[12],E=s[1],N=s[5],U=s[9],$=s[13],I=s[2],H=s[6],k=s[10],Y=s[14],z=s[3],ne=s[7],ce=s[11],he=s[15];return r[0]=o*T+a*E+l*I+c*z,r[4]=o*C+a*N+l*H+c*ne,r[8]=o*L+a*U+l*k+c*ce,r[12]=o*y+a*$+l*Y+c*he,r[1]=u*T+f*E+h*I+d*z,r[5]=u*C+f*N+h*H+d*ne,r[9]=u*L+f*U+h*k+d*ce,r[13]=u*y+f*$+h*Y+d*he,r[2]=g*T+v*E+m*I+p*z,r[6]=g*C+v*N+m*H+p*ne,r[10]=g*L+v*U+m*k+p*ce,r[14]=g*y+v*$+m*Y+p*he,r[3]=S*T+_*E+M*I+A*z,r[7]=S*C+_*N+M*H+A*ne,r[11]=S*L+_*U+M*k+A*ce,r[15]=S*y+_*$+M*Y+A*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+v*(+n*l*d-n*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+n*c*f-n*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-n*l*f+n*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,_=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,A=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,T=n*S+i*_+s*M+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(v*h*r-f*m*r-v*s*d+i*m*d+f*s*p-i*h*p)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*C,e[4]=_*C,e[5]=(u*m*r-g*h*r+g*s*d-n*m*d-u*s*p+n*h*p)*C,e[6]=(g*l*r-o*m*r-g*s*c+n*m*c+o*s*p-n*l*p)*C,e[7]=(o*h*r-u*l*r+u*s*c-n*h*c-o*s*d+n*l*d)*C,e[8]=M*C,e[9]=(g*f*r-u*v*r-g*i*d+n*v*d+u*i*p-n*f*p)*C,e[10]=(o*v*r-g*a*r+g*i*c-n*v*c-o*i*p+n*a*p)*C,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*d-n*a*d)*C,e[12]=A*C,e[13]=(u*v*s-g*f*s+g*i*h-n*v*h-u*i*m+n*f*m)*C,e[14]=(g*a*s-o*v*s-g*i*l+n*v*l+o*i*m-n*a*m)*C,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,v=o*u,m=o*f,p=a*f,S=l*c,_=l*u,M=l*f,A=i.x,T=i.y,C=i.z;return s[0]=(1-(v+p))*A,s[1]=(d+M)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(h+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+_)*C,s[9]=(m-S)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=sr.set(s[0],s[1],s[2]).length();const o=sr.set(s[4],s[5],s[6]).length(),a=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);const c=1/r,u=1/o,f=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=xi){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let d,g;if(a===xi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Il)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=xi){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),h=(n+e)*c,d=(i+s)*u;let g,v;if(a===xi)g=(o+r)*f,v=-2*f;else if(a===Il)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const sr=new V,On=new Mt,M1=new V(0,0,0),b1=new V(1,1,1),Ni=new V,Ia=new V,pn=new V,jp=new Mt,$p=new oa;class Mc{constructor(e=0,n=0,i=0,s=Mc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mc.DEFAULT_ORDER="XYZ";class K0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T1=0;const Yp=new V,rr=new oa,ci=new Mt,Da=new V,ro=new V,A1=new V,w1=new oa,Kp=new V(1,0,0),Zp=new V(0,1,0),Jp=new V(0,0,1),C1={type:"added"},R1={type:"removed"};class Yt extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new V,n=new Mc,i=new oa,s=new V(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new $e}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rr.setFromAxisAngle(e,n),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,n){return rr.setFromAxisAngle(e,n),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Zp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Zp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Da.copy(e):Da.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ro,Da,this.up):ci.lookAt(Da,ro,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(ci),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(C1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(R1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,A1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,w1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new V(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new V,ui=new V,lu=new V,fi=new V,or=new V,ar=new V,Qp=new V,cu=new V,uu=new V,fu=new V;let Na=!1;class kn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Fn.subVectors(e,n),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Fn.subVectors(s,n),ui.subVectors(i,n),lu.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(ui),l=Fn.dot(lu),c=ui.dot(ui),u=ui.dot(lu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,s,r,o,a,l){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),this.getInterpolation(e,n,i,s,r,o,a,l)}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,n,i,s){return Fn.subVectors(i,n),ui.subVectors(e,n),Fn.cross(ui).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),kn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;or.subVectors(s,i),ar.subVectors(r,i),cu.subVectors(e,i);const l=or.dot(cu),c=ar.dot(cu);if(l<=0&&c<=0)return n.copy(i);uu.subVectors(e,s);const u=or.dot(uu),f=ar.dot(uu);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(or,o);fu.subVectors(e,r);const d=or.dot(fu),g=ar.dot(fu);if(g>=0&&d<=g)return n.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ar,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Qp.subVectors(r,s),a=(f-u)/(f-u+(d-g)),n.copy(s).addScaledVector(Qp,a);const p=1/(m+v+h);return o=v*p,a=h*p,n.copy(i).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=at.workingColorSpace){if(e=m1(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=hu(o,r,e+1/3),this.g=hu(o,r,e),this.b=hu(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,n=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_t){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=eu(e.r),this.g=eu(e.g),this.b=eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return at.fromWorkingColorSpace(Gt.copy(this),e),Math.round(on(Gt.r*255,0,255))*65536+Math.round(on(Gt.g*255,0,255))*256+Math.round(on(Gt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=_t){at.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,s=Gt.b;return e!==_t?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Ua);const i=Jc(Ui.h,Ua.h,n),s=Jc(Ui.s,Ua.s,n),r=Jc(Ui.l,Ua.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=Z0;let P1=0;class ni extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=Ir,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=af,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==of&&(i.blendSrc=this.blendSrc),this.blendDst!==af&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wh extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new V,Oa=new et;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oa.fromBufferAttribute(this,n),Oa.applyMatrix3(e),this.setXY(n,Oa.x,Oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=no(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=no(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=no(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=no(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=no(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class J0 extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Q0 extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let L1=0;const An=new Mt,du=new Yt,lr=new V,mn=new aa,oo=new aa,Ut=new V;class Nn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?Q0:J0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(mn.min,oo.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,oo.max),mn.expandByPoint(Ut)):(mn.expandByPoint(oo.min),mn.expandByPoint(oo.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),Ut.add(lr)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new V,u[E]=new V;const f=new V,h=new V,d=new V,g=new et,v=new et,m=new et,p=new V,S=new V;function _(E,N,U){f.fromArray(s,E*3),h.fromArray(s,N*3),d.fromArray(s,U*3),g.fromArray(o,E*2),v.fromArray(o,N*2),m.fromArray(o,U*2),h.sub(f),d.sub(f),v.sub(g),m.sub(g);const $=1/(v.x*m.y-m.x*v.y);isFinite($)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar($),S.copy(d).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar($),c[E].add(p),c[N].add(p),c[U].add(p),u[E].add(S),u[N].add(S),u[U].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let E=0,N=M.length;E<N;++E){const U=M[E],$=U.start,I=U.count;for(let H=$,k=$+I;H<k;H+=3)_(i[H+0],i[H+1],i[H+2])}const A=new V,T=new V,C=new V,L=new V;function y(E){C.fromArray(r,E*3),L.copy(C);const N=c[E];A.copy(N),A.sub(C.multiplyScalar(C.dot(N))).normalize(),T.crossVectors(L,N);const $=T.dot(u[E])<0?-1:1;l[E*4]=A.x,l[E*4+1]=A.y,l[E*4+2]=A.z,l[E*4+3]=$}for(let E=0,N=M.length;E<N;++E){const U=M[E],$=U.start,I=U.count;for(let H=$,k=$+I;H<k;H+=3)y(i[H+0]),y(i[H+1]),y(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new ei(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Mt,us=new Ah,Fa=new la,tm=new V,cr=new V,ur=new V,fr=new V,pu=new V,Ba=new V,ka=new et,Ha=new et,Va=new et,nm=new V,im=new V,sm=new V,za=new V,Ga=new V;class Gn extends Yt{constructor(e=new Nn,n=new wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(pu.fromBufferAttribute(f,e),o?Ba.addScaledVector(pu,u):Ba.addScaledVector(pu.sub(n),u))}n.add(Ba)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Fa.containsPoint(us.origin)===!1&&(us.intersectSphere(Fa,tm)===null||us.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(r).invert(),us.copy(e.ray).applyMatrix4(em),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,us)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,A=_;M<A;M+=3){const T=a.getX(M),C=a.getX(M+1),L=a.getX(M+2);s=Wa(this,p,e,i,c,u,f,T,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Wa(this,o,e,i,c,u,f,S,_,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,A=_;M<A;M+=3){const T=M,C=M+1,L=M+2;s=Wa(this,p,e,i,c,u,f,T,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,_=m+1,M=m+2;s=Wa(this,o,e,i,c,u,f,S,_,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function I1(t,e,n,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ns,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ga);return c<n.near||c>n.far?null:{distance:c,point:Ga.clone(),object:t}}function Wa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,cr),t.getVertexPosition(l,ur),t.getVertexPosition(c,fr);const u=I1(t,e,n,i,cr,ur,fr,za);if(u){s&&(ka.fromBufferAttribute(s,a),Ha.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,c),u.uv=kn.getInterpolation(za,cr,ur,fr,ka,Ha,Va,new et)),r&&(ka.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,l),Va.fromBufferAttribute(r,c),u.uv1=kn.getInterpolation(za,cr,ur,fr,ka,Ha,Va,new et),u.uv2=u.uv1),o&&(nm.fromBufferAttribute(o,a),im.fromBufferAttribute(o,l),sm.fromBufferAttribute(o,c),u.normal=kn.getInterpolation(za,cr,ur,fr,nm,im,sm,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};kn.getNormal(cr,ur,fr,f.normal),u.face=f}return u}class Kr extends Nn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function g(v,m,p,S,_,M,A,T,C,L,y){const E=M/C,N=A/L,U=M/2,$=A/2,I=T/2,H=C+1,k=L+1;let Y=0,z=0;const ne=new V;for(let ce=0;ce<k;ce++){const he=ce*N-$;for(let pe=0;pe<H;pe++){const te=pe*E-U;ne[v]=te*S,ne[m]=he*_,ne[p]=I,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(pe/C),f.push(1-ce/L),Y+=1}}for(let ce=0;ce<L;ce++)for(let he=0;he<C;he++){const pe=h+he+H*ce,te=h+he+H*(ce+1),fe=h+(he+1)+H*(ce+1),ve=h+(he+1)+H*ce;l.push(pe,te,ve),l.push(te,fe,ve),z+=6}a.addGroup(d,z,y),d+=z,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=$r(t[n]);for(const s in i)e[s]=i[s]}return e}function D1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ev(t){return t.getRenderTarget()===null?t.outputColorSpace:at.workingColorSpace}const N1={clone:$r,merge:Qt};var U1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gs extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U1,this.fragmentShader=O1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=D1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class tv extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends tv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hr=-90,dr=1;class F1 extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(hr,dr,e,n);s.layers=this.layers,this.add(s);const r=new xn(hr,dr,e,n);r.layers=this.layers,this.add(r);const o=new xn(hr,dr,e,n);o.layers=this.layers,this.add(o);const a=new xn(hr,dr,e,n);a.layers=this.layers,this.add(a);const l=new xn(hr,dr,e,n);l.layers=this.layers,this.add(l);const c=new xn(hr,dr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nv extends fn{constructor(e,n,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Xr,super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B1 extends zs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Us?_t:Pn),this.texture=new nv(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kr(5,5,5),r=new Gs({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ki});r.uniforms.tEquirect.value=n;const o=new Gn(s,r),a=n.minFilter;return n.minFilter===Ho&&(n.minFilter=Cn),new F1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const mu=new V,k1=new V,H1=new $e;class ds{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=mu.subVectors(i,n).cross(k1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||H1.getNormalMatrix(e),s=this.coplanarPoint(mu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new la,Xa=new V;class Ch{constructor(e=new ds,n=new ds,i=new ds,s=new ds,r=new ds,o=new ds){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],_=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,m-d,M-p).normalize(),i[1].setComponents(l+r,h+c,m+d,M+p).normalize(),i[2].setComponents(l+o,h+u,m+g,M+S).normalize(),i[3].setComponents(l-o,h-u,m-g,M-S).normalize(),i[4].setComponents(l-a,h-f,m-v,M-_).normalize(),n===xi)i[5].setComponents(l+a,h+f,m+v,M+_).normalize();else if(n===Il)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Xa.x=s.normal.x>0?e.max.x:e.min.x,Xa.y=s.normal.y>0?e.max.y:e.min.y,Xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iv(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function V1(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(t.bindBuffer(f,c),d.count===-1&&g.length===0&&t.bufferSubData(f,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];n?t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,s(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Rh extends Nn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let _=0;_<c;_++){const M=_*f-r;g.push(M,-S,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const _=S+c*p,M=S+c*(p+1),A=S+1+c*(p+1),T=S+1+c*p;d.push(_,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.width,e.height,e.widthSegments,e.heightSegments)}}var z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
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
#endif`,W1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,j1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$1=`#ifdef USE_AOMAP
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
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`#ifdef USE_BATCHING
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
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,J1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tA=`#ifdef USE_IRIDESCENCE
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
#endif`,nA=`#ifdef USE_BUMPMAP
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
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fA=`#define PI 3.141592653589793
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
} // validated`,hA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dA=`vec3 transformedNormal = objectNormal;
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
#endif`,pA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vA="gl_FragColor = linearToOutputTexel( gl_FragColor );",xA=`
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
}`,SA=`#ifdef USE_ENVMAP
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
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EA=`#ifdef USE_ENVMAP
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
#endif`,MA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
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
#endif`,TA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RA=`#ifdef USE_GRADIENTMAP
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
}`,PA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NA=`uniform bool receiveShadow;
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
#endif`,UA=`#ifdef USE_ENVMAP
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
#endif`,OA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HA=`PhysicalMaterial material;
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
#endif`,VA=`struct PhysicalMaterial {
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
}`,zA=`
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
#endif`,GA=`#if defined( RE_IndirectDiffuse )
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
#endif`,WA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$A=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,YA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JA=`#if defined( USE_POINTS_UV )
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
#endif`,QA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nw=`#ifdef USE_MORPHNORMALS
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
#endif`,iw=`#ifdef USE_MORPHTARGETS
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
#endif`,sw=`#ifdef USE_MORPHTARGETS
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
#endif`,rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uw=`#ifdef USE_NORMALMAP
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
#endif`,fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Aw=`float getShadowMask() {
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
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,Rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Ow=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zw=`uniform sampler2D t2D;
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
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`#include <common>
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
}`,$w=`#if DEPTH_PACKING == 3200
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
}`,Yw=`#define DISTANCE
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
}`,Kw=`#define DISTANCE
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
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`uniform float scale;
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
}`,eC=`uniform vec3 diffuse;
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
}`,tC=`#include <common>
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
}`,nC=`uniform vec3 diffuse;
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
}`,iC=`#define LAMBERT
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
}`,sC=`#define LAMBERT
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
}`,rC=`#define MATCAP
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
}`,oC=`#define MATCAP
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
}`,aC=`#define NORMAL
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
}`,lC=`#define NORMAL
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
}`,cC=`#define PHONG
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
}`,uC=`#define PHONG
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
}`,fC=`#define STANDARD
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
}`,hC=`#define STANDARD
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
}`,dC=`#define TOON
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
}`,pC=`#define TOON
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
}`,mC=`uniform float size;
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
}`,gC=`uniform vec3 diffuse;
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
}`,_C=`#include <common>
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
}`,vC=`uniform vec3 color;
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
}`,xC=`uniform float rotation;
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
}`,SC=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:z1,alphahash_pars_fragment:G1,alphamap_fragment:W1,alphamap_pars_fragment:X1,alphatest_fragment:q1,alphatest_pars_fragment:j1,aomap_fragment:$1,aomap_pars_fragment:Y1,batching_pars_vertex:K1,batching_vertex:Z1,begin_vertex:J1,beginnormal_vertex:Q1,bsdfs:eA,iridescence_fragment:tA,bumpmap_pars_fragment:nA,clipping_planes_fragment:iA,clipping_planes_pars_fragment:sA,clipping_planes_pars_vertex:rA,clipping_planes_vertex:oA,color_fragment:aA,color_pars_fragment:lA,color_pars_vertex:cA,color_vertex:uA,common:fA,cube_uv_reflection_fragment:hA,defaultnormal_vertex:dA,displacementmap_pars_vertex:pA,displacementmap_vertex:mA,emissivemap_fragment:gA,emissivemap_pars_fragment:_A,colorspace_fragment:vA,colorspace_pars_fragment:xA,envmap_fragment:SA,envmap_common_pars_fragment:yA,envmap_pars_fragment:EA,envmap_pars_vertex:MA,envmap_physical_pars_fragment:UA,envmap_vertex:bA,fog_vertex:TA,fog_pars_vertex:AA,fog_fragment:wA,fog_pars_fragment:CA,gradientmap_pars_fragment:RA,lightmap_fragment:PA,lightmap_pars_fragment:LA,lights_lambert_fragment:IA,lights_lambert_pars_fragment:DA,lights_pars_begin:NA,lights_toon_fragment:OA,lights_toon_pars_fragment:FA,lights_phong_fragment:BA,lights_phong_pars_fragment:kA,lights_physical_fragment:HA,lights_physical_pars_fragment:VA,lights_fragment_begin:zA,lights_fragment_maps:GA,lights_fragment_end:WA,logdepthbuf_fragment:XA,logdepthbuf_pars_fragment:qA,logdepthbuf_pars_vertex:jA,logdepthbuf_vertex:$A,map_fragment:YA,map_pars_fragment:KA,map_particle_fragment:ZA,map_particle_pars_fragment:JA,metalnessmap_fragment:QA,metalnessmap_pars_fragment:ew,morphcolor_vertex:tw,morphnormal_vertex:nw,morphtarget_pars_vertex:iw,morphtarget_vertex:sw,normal_fragment_begin:rw,normal_fragment_maps:ow,normal_pars_fragment:aw,normal_pars_vertex:lw,normal_vertex:cw,normalmap_pars_fragment:uw,clearcoat_normal_fragment_begin:fw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:dw,iridescence_pars_fragment:pw,opaque_fragment:mw,packing:gw,premultiplied_alpha_fragment:_w,project_vertex:vw,dithering_fragment:xw,dithering_pars_fragment:Sw,roughnessmap_fragment:yw,roughnessmap_pars_fragment:Ew,shadowmap_pars_fragment:Mw,shadowmap_pars_vertex:bw,shadowmap_vertex:Tw,shadowmask_pars_fragment:Aw,skinbase_vertex:ww,skinning_pars_vertex:Cw,skinning_vertex:Rw,skinnormal_vertex:Pw,specularmap_fragment:Lw,specularmap_pars_fragment:Iw,tonemapping_fragment:Dw,tonemapping_pars_fragment:Nw,transmission_fragment:Uw,transmission_pars_fragment:Ow,uv_pars_fragment:Fw,uv_pars_vertex:Bw,uv_vertex:kw,worldpos_vertex:Hw,background_vert:Vw,background_frag:zw,backgroundCube_vert:Gw,backgroundCube_frag:Ww,cube_vert:Xw,cube_frag:qw,depth_vert:jw,depth_frag:$w,distanceRGBA_vert:Yw,distanceRGBA_frag:Kw,equirect_vert:Zw,equirect_frag:Jw,linedashed_vert:Qw,linedashed_frag:eC,meshbasic_vert:tC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:sC,meshmatcap_vert:rC,meshmatcap_frag:oC,meshnormal_vert:aC,meshnormal_frag:lC,meshphong_vert:cC,meshphong_frag:uC,meshphysical_vert:fC,meshphysical_frag:hC,meshtoon_vert:dC,meshtoon_frag:pC,points_vert:mC,points_frag:gC,shadow_vert:_C,shadow_frag:vC,sprite_vert:xC,sprite_frag:SC},ge={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Kn={basic:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Qt([ge.common,ge.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Qt([ge.lights,ge.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Kn.physical={uniforms:Qt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const qa={r:0,b:0,g:0};function yC(t,e,n,i,s,r,o){const a=new Ye(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let S=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),S=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yc)?(u===void 0&&(u=new Gn(new Kr(1,1,1),new Gs({name:"BackgroundCubeMaterial",uniforms:$r(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=at.getTransfer(_.colorSpace)!==ht,(f!==_||h!==_.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Gn(new Rh(2,2),new Gs({name:"BackgroundMaterial",uniforms:$r(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=at.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(qa,ev(t)),i.buffers.color.setClear(qa.r,qa.g,qa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function EC(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(I,H,k,Y,z){let ne=!1;if(o){const ce=v(Y,k,H);c!==ce&&(c=ce,d(c.object)),ne=p(I,Y,k,z),ne&&S(I,Y,k,z)}else{const ce=H.wireframe===!0;(c.geometry!==Y.id||c.program!==k.id||c.wireframe!==ce)&&(c.geometry=Y.id,c.program=k.id,c.wireframe=ce,ne=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,L(I,H,k,Y),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(I){return i.isWebGL2?t.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,H,k){const Y=k.wireframe===!0;let z=a[I.id];z===void 0&&(z={},a[I.id]=z);let ne=z[H.id];ne===void 0&&(ne={},z[H.id]=ne);let ce=ne[Y];return ce===void 0&&(ce=m(h()),ne[Y]=ce),ce}function m(I){const H=[],k=[],Y=[];for(let z=0;z<s;z++)H[z]=0,k[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:Y,object:I,attributes:{},index:null}}function p(I,H,k,Y){const z=c.attributes,ne=H.attributes;let ce=0;const he=k.getAttributes();for(const pe in he)if(he[pe].location>=0){const fe=z[pe];let ve=ne[pe];if(ve===void 0&&(pe==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),pe==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;ce++}return c.attributesNum!==ce||c.index!==Y}function S(I,H,k,Y){const z={},ne=H.attributes;let ce=0;const he=k.getAttributes();for(const pe in he)if(he[pe].location>=0){let fe=ne[pe];fe===void 0&&(pe==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),pe==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),z[pe]=ve,ce++}c.attributes=z,c.attributesNum=ce,c.index=Y}function _(){const I=c.newAttributes;for(let H=0,k=I.length;H<k;H++)I[H]=0}function M(I){A(I,0)}function A(I,H){const k=c.newAttributes,Y=c.enabledAttributes,z=c.attributeDivisors;k[I]=1,Y[I]===0&&(t.enableVertexAttribArray(I),Y[I]=1),z[I]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),z[I]=H)}function T(){const I=c.newAttributes,H=c.enabledAttributes;for(let k=0,Y=H.length;k<Y;k++)H[k]!==I[k]&&(t.disableVertexAttribArray(k),H[k]=0)}function C(I,H,k,Y,z,ne,ce){ce===!0?t.vertexAttribIPointer(I,H,k,z,ne):t.vertexAttribPointer(I,H,k,Y,z,ne)}function L(I,H,k,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const z=Y.attributes,ne=k.getAttributes(),ce=H.defaultAttributeValues;for(const he in ne){const pe=ne[he];if(pe.location>=0){let te=z[he];if(te===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const fe=te.normalized,ve=te.itemSize,ye=n.get(te);if(ye===void 0)continue;const G=ye.buffer,le=ye.type,re=ye.bytesPerElement,ue=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||te.gpuType===F0);if(te.isInterleavedBufferAttribute){const be=te.data,W=be.stride,R=te.offset;if(be.isInstancedInterleavedBuffer){for(let P=0;P<pe.locationSize;P++)A(pe.location+P,be.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let P=0;P<pe.locationSize;P++)M(pe.location+P);t.bindBuffer(t.ARRAY_BUFFER,G);for(let P=0;P<pe.locationSize;P++)C(pe.location+P,ve/pe.locationSize,le,fe,W*re,(R+ve/pe.locationSize*P)*re,ue)}else{if(te.isInstancedBufferAttribute){for(let be=0;be<pe.locationSize;be++)A(pe.location+be,te.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<pe.locationSize;be++)M(pe.location+be);t.bindBuffer(t.ARRAY_BUFFER,G);for(let be=0;be<pe.locationSize;be++)C(pe.location+be,ve/pe.locationSize,le,fe,ve*re,ve/pe.locationSize*be*re,ue)}}else if(ce!==void 0){const fe=ce[he];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(pe.location,fe);break;case 3:t.vertexAttrib3fv(pe.location,fe);break;case 4:t.vertexAttrib4fv(pe.location,fe);break;default:t.vertexAttrib1fv(pe.location,fe)}}}}T()}function y(){U();for(const I in a){const H=a[I];for(const k in H){const Y=H[k];for(const z in Y)g(Y[z].object),delete Y[z];delete H[k]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const k in H){const Y=H[k];for(const z in Y)g(Y[z].object),delete Y[z];delete H[k]}delete a[I.id]}function N(I){for(const H in a){const k=a[H];if(k[I.id]===void 0)continue;const Y=k[I.id];for(const z in Y)g(Y[z].object),delete Y[z];delete k[I.id]}}function U(){$(),u=!0,c!==l&&(c=l,d(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:M,disableUnusedAttributes:T}}function MC(t,e,n,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,f){t.drawArrays(r,u,f),n.update(f,r,1)}function l(u,f,h){if(h===0)return;let d,g;if(s)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,f,h),n.update(f,r,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];n.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function bC(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,M=o||e.has("OES_texture_float"),A=_&&M,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:T}}function TC(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ds,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,_=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,_,d);for(let A=0;A!==_;++A)M[A]=n[A];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=d;_!==v;++_,M+=4)o.copy(f[_]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function AC(t){let e=new WeakMap;function n(o,a){return a===lf?o.mapping=Xr:a===cf&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lf||a===cf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new B1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class wC extends tv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xr=4,rm=[.125,.215,.35,.446,.526,.582],vs=20,gu=new wC,om=new Ye;let _u=null,vu=0,xu=0;const ps=(1+Math.sqrt(5))/2,pr=1/ps,am=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,ps,pr),new V(0,ps,-pr),new V(pr,0,ps),new V(-pr,0,ps),new V(ps,pr,0),new V(-ps,pr,0)];class lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,vu,xu),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Vo,format:zn,colorSpace:Mi,depthBuffer:!1},s=cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CC(r)),this._blurMaterial=RC(r,e,n)}return s}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,gu)}_sceneToCubeUV(e,n,i,s){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(om),u.toneMapping=Zi,u.autoClear=!1;const d=new wh({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Gn(new Kr,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(om),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;ja(s,S*_,p>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Xr||e.mapping===qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=am[(s-1)%am.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gn(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vs-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let S=0;for(let C=0;C<vs;++C){const L=C/v,y=Math.exp(-L*L/2);p.push(y),C===0?S+=y:C<m&&(S+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const M=this._sizeLods[s],A=3*M*(s>_-xr?s-_+xr:0),T=4*(this._cubeSize-M);ja(n,A,T,3*M,2*M),l.setRenderTarget(n),l.render(f,gu)}}function CC(t){const e=[],n=[],i=[];let s=t;const r=t-xr+1+rm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-xr?l=rm[o-t+xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),_=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,L=T>2?0:-1,y=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];S.set(y,v*g*T),_.set(h,m*g*T);const E=[T,T,T,T,T,T];M.set(E,p*g*T)}const A=new Nn;A.setAttribute("position",new ei(S,v)),A.setAttribute("uv",new ei(_,m)),A.setAttribute("faceIndex",new ei(M,p)),e.push(A),s>xr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cm(t,e,n){const i=new zs(t,e,n);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function RC(t,e,n){const i=new Float32Array(vs),s=new V(0,1,0);return new Gs({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function um(){return new Gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function fm(){return new Gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function PC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lf||l===cf,u=l===Xr||l===qr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new lm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){n===null&&(n=new lm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function IC(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let _=0,M=S.length;_<M;_+=3){const A=S[_+0],T=S[_+1],C=S[_+2];h.push(A,T,T,C,C,A)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,M=S.length/3-1;_<M;_+=3){const A=_+0,T=_+1,C=_+2;h.push(A,T,T,C,C,A)}}else return;const m=new(q0(h)?Q0:J0)(h,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function DC(t,e,n,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){t.drawElements(r,g,a,d*l),n.update(g,r,1)}function f(d,g,v){if(v===0)return;let m,p;if(s)m=t,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,v),n.update(g,r,v)}function h(d,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,v);let p=0;for(let S=0;S<v;S++)p+=g[S];n.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function NC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function UC(t,e){return t[0]-e[0]}function OC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function FC(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let I=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),_===!0&&(L=2),M===!0&&(L=3);let y=u.attributes.position.count*L,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const N=new Float32Array(y*E*4*g),U=new Y0(N,y,E,g);U.type=qi,U.needsUpdate=!0;const $=L*4;for(let H=0;H<g;H++){const k=A[H],Y=T[H],z=C[H],ne=y*E*4*H;for(let ce=0;ce<k.count;ce++){const he=ce*$;S===!0&&(o.fromBufferAttribute(k,ce),N[ne+he+0]=o.x,N[ne+he+1]=o.y,N[ne+he+2]=o.z,N[ne+he+3]=0),_===!0&&(o.fromBufferAttribute(Y,ce),N[ne+he+4]=o.x,N[ne+he+5]=o.y,N[ne+he+6]=o.z,N[ne+he+7]=0),M===!0&&(o.fromBufferAttribute(z,ce),N[ne+he+8]=o.x,N[ne+he+9]=o.y,N[ne+he+10]=o.z,N[ne+he+11]=z.itemSize===4?o.w:1)}}v={count:g,texture:U,size:new et(y,E)},r.set(u,v),u.addEventListener("dispose",I)}let m=0;for(let S=0;S<h.length;S++)m+=h[S];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const d=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<d;_++){const M=g[_];M[0]=_,M[1]=h[_]}g.sort(OC);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(UC);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const M=a[_],A=M[0],T=M[1];A!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+_)!==v[A]&&u.setAttribute("morphTarget"+_,v[A]),m&&u.getAttribute("morphNormal"+_)!==m[A]&&u.setAttribute("morphNormal"+_,m[A]),s[_]=T,p+=T):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",S),f.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function BC(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}class sv extends fn{constructor(e,n,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ns,u!==Ns&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ns&&(i=Xi),i===void 0&&u===jr&&(i=Ds),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const rv=new fn,ov=new sv(1,1);ov.compareFunction=X0;const av=new Y0,lv=new y1,cv=new nv,hm=[],dm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function Zr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=hm[s];if(r===void 0&&(r=new Float32Array(s),hm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function GC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;gm.set(i),t.uniformMatrix2fv(this.addr,!1,gm),It(n,i)}}function WC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;mm.set(i),t.uniformMatrix3fv(this.addr,!1,mm),It(n,i)}}function XC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;pm.set(i),t.uniformMatrix4fv(this.addr,!1,pm),It(n,i)}}function qC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function KC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function QC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function e2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);const r=this.type===t.SAMPLER_2D_SHADOW?ov:rv;n.setTexture2D(e||r,s)}function t2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||lv,s)}function n2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||cv,s)}function i2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||av,s)}function s2(t){switch(t){case 5126:return kC;case 35664:return HC;case 35665:return VC;case 35666:return zC;case 35674:return GC;case 35675:return WC;case 35676:return XC;case 5124:case 35670:return qC;case 35667:case 35671:return jC;case 35668:case 35672:return $C;case 35669:case 35673:return YC;case 5125:return KC;case 36294:return ZC;case 36295:return JC;case 36296:return QC;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}function r2(t,e){t.uniform1fv(this.addr,e)}function o2(t,e){const n=Zr(e,this.size,2);t.uniform2fv(this.addr,n)}function a2(t,e){const n=Zr(e,this.size,3);t.uniform3fv(this.addr,n)}function l2(t,e){const n=Zr(e,this.size,4);t.uniform4fv(this.addr,n)}function c2(t,e){const n=Zr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function u2(t,e){const n=Zr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function f2(t,e){const n=Zr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function h2(t,e){t.uniform1iv(this.addr,e)}function d2(t,e){t.uniform2iv(this.addr,e)}function p2(t,e){t.uniform3iv(this.addr,e)}function m2(t,e){t.uniform4iv(this.addr,e)}function g2(t,e){t.uniform1uiv(this.addr,e)}function _2(t,e){t.uniform2uiv(this.addr,e)}function v2(t,e){t.uniform3uiv(this.addr,e)}function x2(t,e){t.uniform4uiv(this.addr,e)}function S2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||rv,r[o])}function y2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||lv,r[o])}function E2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||cv,r[o])}function M2(t,e,n){const i=this.cache,s=e.length,r=bc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||av,r[o])}function b2(t){switch(t){case 5126:return r2;case 35664:return o2;case 35665:return a2;case 35666:return l2;case 35674:return c2;case 35675:return u2;case 35676:return f2;case 5124:case 35670:return h2;case 35667:case 35671:return d2;case 35668:case 35672:return p2;case 35669:case 35673:return m2;case 5125:return g2;case 36294:return _2;case 36295:return v2;case 36296:return x2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return y2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return M2}}class T2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=s2(n.type)}}class A2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=b2(n.type)}}class w2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function C2(t,e,n){const i=t.name,s=i.length;for(Su.lastIndex=0;;){const r=Su.exec(i),o=Su.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_m(n,c===void 0?new T2(a,t,e):new A2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new w2(a),_m(n,f)),n=f}}}class rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);C2(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function vm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const R2=37297;let P2=0;function L2(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function I2(t){const e=at.getPrimaries(at.workingColorSpace),n=at.getPrimaries(t);let i;switch(e===n?i="":e===Ll&&n===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Ll&&(i="LinearSRGBToLinearDisplayP3"),t){case Mi:case Ec:return[i,"LinearTransferOETF"];case _t:case Th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+L2(t.getShaderSource(e),o)}else return s}function D2(t,e){const n=I2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function N2(t,e){let n;switch(e){case WT:n="Linear";break;case XT:n="Reinhard";break;case qT:n="OptimizedCineon";break;case jT:n="ACESFilmic";break;case YT:n="AgX";break;case $T:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function U2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function O2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sr).join(`
`)}function F2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function B2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Sr(t){return t!==""}function Sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(t){return t.replace(k2,V2)}const H2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function V2(t,e){let n=Ge[e];if(n===void 0){const i=H2.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pf(n)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(t){return t.replace(z2,G2)}function G2(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function X2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xr:case qr:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function j2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case zT:e="ENVMAP_BLENDING_MIX";break;case GT:e="ENVMAP_BLENDING_ADD";break}return e}function $2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Y2(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=W2(n),c=X2(n),u=q2(n),f=j2(n),h=$2(n),d=n.isWebGL2?"":U2(n),g=O2(n),v=F2(r),m=s.createProgram();let p,S,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sr).join(`
`),p.length>0&&(p+=`
`),S=[d,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Sr).join(`
`),S.length>0&&(S+=`
`)):(p=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),S=[d,Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Zi?N2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,D2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sr).join(`
`)),o=pf(o),o=Sm(o,n),o=ym(o,n),a=pf(a),a=Sm(a,n),a=ym(a,n),o=Em(o),a=Em(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=_+p+o,A=_+S+a,T=vm(s,s.VERTEX_SHADER,M),C=vm(s,s.FRAGMENT_SHADER,A);s.attachShader(m,T),s.attachShader(m,C),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(U){if(t.debug.checkShaderErrors){const $=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),H=s.getShaderInfoLog(C).trim();let k=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,m,T,C);else{const z=xm(s,T,"vertex"),ne=xm(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+z+`
`+ne)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(I===""||H==="")&&(Y=!1);Y&&(U.diagnostics={runnable:k,programLog:$,vertexShader:{log:I,prefix:p},fragmentShader:{log:H,prefix:S}})}s.deleteShader(T),s.deleteShader(C),y=new rl(s,m),E=B2(s,m)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,R2)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=P2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}let K2=0;class Z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new J2(e),n.set(e,i)),i}}class J2{constructor(e){this.id=K2++,this.code=e,this.usedTimes=0}}function Q2(t,e,n,i,s,r,o){const a=new K0,l=new Z2,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,E,N,U,$){const I=U.fog,H=$.geometry,k=y.isMeshStandardMaterial?U.environment:null,Y=(y.isMeshStandardMaterial?n:e).get(y.envMap||k),z=Y&&Y.mapping===yc?Y.image.height:null,ne=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=ce!==void 0?ce.length:0;let pe=0;H.morphAttributes.position!==void 0&&(pe=1),H.morphAttributes.normal!==void 0&&(pe=2),H.morphAttributes.color!==void 0&&(pe=3);let te,fe,ve,ye;if(ne){const Kt=Kn[ne];te=Kt.vertexShader,fe=Kt.fragmentShader}else te=y.vertexShader,fe=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const G=t.getRenderTarget(),le=$.isInstancedMesh===!0,re=$.isBatchedMesh===!0,ue=!!y.map,be=!!y.matcap,W=!!Y,R=!!y.aoMap,P=!!y.lightMap,F=!!y.bumpMap,X=!!y.normalMap,J=!!y.displacementMap,ie=!!y.emissiveMap,b=!!y.metalnessMap,x=!!y.roughnessMap,D=y.anisotropy>0,B=y.clearcoat>0,j=y.iridescence>0,K=y.sheen>0,ae=y.transmission>0,se=D&&!!y.anisotropyMap,de=B&&!!y.clearcoatMap,_e=B&&!!y.clearcoatNormalMap,Te=B&&!!y.clearcoatRoughnessMap,oe=j&&!!y.iridescenceMap,Ve=j&&!!y.iridescenceThicknessMap,Oe=K&&!!y.sheenColorMap,De=K&&!!y.sheenRoughnessMap,we=!!y.specularMap,Ae=!!y.specularColorMap,Re=!!y.specularIntensityMap,ze=ae&&!!y.transmissionMap,ft=ae&&!!y.thicknessMap,qe=!!y.gradientMap,me=!!y.alphaMap,O=y.alphaTest>0,xe=!!y.alphaHash,Se=!!y.extensions,Ne=!!H.attributes.uv1,Pe=!!H.attributes.uv2,lt=!!H.attributes.uv3;let ct=Zi;return y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ct=t.toneMapping),{isWebGL2:u,shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:fe,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:re,instancing:le,instancingColor:le&&$.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:G===null?t.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Mi,map:ue,matcap:be,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:z,aoMap:R,lightMap:P,bumpMap:F,normalMap:X,displacementMap:h&&J,emissiveMap:ie,normalMapObjectSpace:X&&y.normalMapType===a1,normalMapTangentSpace:X&&y.normalMapType===bh,metalnessMap:b,roughnessMap:x,anisotropy:D,anisotropyMap:se,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:_e,clearcoatRoughnessMap:Te,iridescence:j,iridescenceMap:oe,iridescenceThicknessMap:Ve,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:De,specularMap:we,specularColorMap:Ae,specularIntensityMap:Re,transmission:ae,transmissionMap:ze,thicknessMap:ft,gradientMap:qe,opaque:y.transparent===!1&&y.blending===Ir,alphaMap:me,alphaTest:O,alphaHash:xe,combine:y.combine,mapUv:ue&&v(y.map.channel),aoMapUv:R&&v(y.aoMap.channel),lightMapUv:P&&v(y.lightMap.channel),bumpMapUv:F&&v(y.bumpMap.channel),normalMapUv:X&&v(y.normalMap.channel),displacementMapUv:J&&v(y.displacementMap.channel),emissiveMapUv:ie&&v(y.emissiveMap.channel),metalnessMapUv:b&&v(y.metalnessMap.channel),roughnessMapUv:x&&v(y.roughnessMap.channel),anisotropyMapUv:se&&v(y.anisotropyMap.channel),clearcoatMapUv:de&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(y.sheenRoughnessMap.channel),specularMapUv:we&&v(y.specularMap.channel),specularColorMapUv:Ae&&v(y.specularColorMap.channel),specularIntensityMapUv:Re&&v(y.specularIntensityMap.channel),transmissionMapUv:ze&&v(y.transmissionMap.channel),thicknessMapUv:ft&&v(y.thicknessMap.channel),alphaMapUv:me&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(X||D),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Pe,vertexUv3s:lt,pointsUvs:$.isPoints===!0&&!!H.attributes.uv&&(ue||me),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ct,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ue&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Se&&y.extensions.derivatives===!0,extensionFragDepth:Se&&y.extensions.fragDepth===!0,extensionDrawBuffers:Se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)E.push(N),E.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(S(E,y),_(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function S(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){const E=g[y.type];let N;if(E){const U=Kn[E];N=N1.clone(U.uniforms)}else N=y.uniforms;return N}function A(y,E){let N;for(let U=0,$=c.length;U<$;U++){const I=c[U];if(I.cacheKey===E){N=I,++N.usedTimes;break}}return N===void 0&&(N=new Y2(t,E,y,r),c.push(N)),N}function T(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function eR(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function tR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tm(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||tR),i.length>1&&i.sort(h||bm),s.length>1&&s.sort(h||bm)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function nR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Tm,t.set(i,[o])):s>=r.length?(o=new Tm,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function iR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ye};break;case"SpotLight":n={position:new V,direction:new V,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function sR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rR=0;function oR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aR(t,e){const n=new iR,i=sR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new V);const r=new V,o=new Mt,a=new Mt;function l(u,f){let h=0,d=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let v=0,m=0,p=0,S=0,_=0,M=0,A=0,T=0,C=0,L=0,y=0;u.sort(oR);const E=f===!0?Math.PI:1;for(let U=0,$=u.length;U<$;U++){const I=u[U],H=I.color,k=I.intensity,Y=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*k*E,d+=H.g*k*E,g+=H.b*k*E;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(I.sh.coefficients[ne],k);y++}else if(I.isDirectionalLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.directionalShadow[v]=he,s.directionalShadowMap[v]=z,s.directionalShadowMatrix[v]=I.shadow.matrix,M++}s.directional[v]=ne,v++}else if(I.isSpotLight){const ne=n.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(H).multiplyScalar(k*E),ne.distance=Y,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,s.spot[p]=ne;const ce=I.shadow;if(I.map&&(s.spotLightMap[C]=I.map,C++,ce.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[p]=ce.matrix,I.castShadow){const he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.spotShadow[p]=he,s.spotShadowMap[p]=z,T++}p++}else if(I.isRectAreaLight){const ne=n.get(I);ne.color.copy(H).multiplyScalar(k),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=ne,S++}else if(I.isPointLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*E),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,s.pointShadow[m]=he,s.pointShadowMap[m]=z,s.pointShadowMatrix[m]=I.shadow.matrix,A++}s.point[m]=ne,m++}else if(I.isHemisphereLight){const ne=n.get(I);ne.skyColor.copy(I.color).multiplyScalar(k*E),ne.groundColor.copy(I.groundColor).multiplyScalar(k*E),s.hemi[_]=ne,_++}}S>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==S||N.hemiLength!==_||N.numDirectionalShadows!==M||N.numPointShadows!==A||N.numSpotShadows!==T||N.numSpotMaps!==C||N.numLightProbes!==y)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+C-L,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=y,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=S,N.hemiLength=_,N.numDirectionalShadows=M,N.numPointShadows=A,N.numSpotShadows=T,N.numSpotMaps=C,N.numLightProbes=y,s.version=rR++)}function c(u,f){let h=0,d=0,g=0,v=0,m=0;const p=f.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const M=u[S];if(M.isDirectionalLight){const A=s.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),h++}else if(M.isSpotLight){const A=s.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const A=s.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const A=s.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const A=s.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Am(t,e){const n=new aR(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lR(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let l;return a===void 0?(l=new Am(t,e),n.set(r,[l])):o>=a.length?(l=new Am(t,e),a.push(l)):l=a[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class cR extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uR extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
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
}`;function dR(t,e,n){let i=new Ch;const s=new et,r=new et,o=new pt,a=new cR({depthPacking:o1}),l=new uR,c={},u=n.maxTextureSize,f={[ns]:un,[un]:ns,[vi]:vi},h=new Gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:fR,fragmentShader:hR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let p=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=t.getRenderTarget(),E=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Ki),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const $=p!==mi&&this.type===mi,I=p===mi&&this.type!==mi;for(let H=0,k=T.length;H<k;H++){const Y=T[H],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();if(s.multiply(ne),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y)),z.map===null||$===!0||I===!0){const he=this.type!==mi?{minFilter:en,magFilter:en}:{};z.map!==null&&z.map.dispose(),z.map=new zs(s.x,s.y,he),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ce=z.getViewportCount();for(let he=0;he<ce;he++){const pe=z.getViewport(he);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(o),z.updateMatrices(Y,he),i=z.getFrustum(),M(C,L,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&S(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,E,N)};function S(T,C){const L=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zs(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,L,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,L,d,v,null)}function _(T,C,L,y){let E=null;const N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=E.uuid,$=C.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let H=I[$];H===void 0&&(H=E.clone(),I[$]=H,C.addEventListener("dispose",A)),E=H}if(E.visible=C.visible,E.wireframe=C.wireframe,y===mi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=t.properties.get(E);U.light=L}return E}function M(T,C,L,y,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===mi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const $=e.update(T),I=T.material;if(Array.isArray(I)){const H=$.groups;for(let k=0,Y=H.length;k<Y;k++){const z=H[k],ne=I[z.materialIndex];if(ne&&ne.visible){const ce=_(T,ne,y,E);T.onBeforeShadow(t,T,C,L,$,ce,z),t.renderBufferDirect(L,null,$,ce,T,z),T.onAfterShadow(t,T,C,L,$,ce,z)}}}else if(I.visible){const H=_(T,I,y,E);T.onBeforeShadow(t,T,C,L,$,H,null),t.renderBufferDirect(L,null,$,H,T,null),T.onAfterShadow(t,T,C,L,$,H,null)}}const U=T.children;for(let $=0,I=U.length;$<I;$++)M(U[$],C,L,y,E)}function A(T){T.target.removeEventListener("dispose",A);for(const L in c){const y=c[L],E=T.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function pR(t,e,n){const i=n.isWebGL2;function s(){let O=!1;const xe=new pt;let Se=null;const Ne=new pt(0,0,0,0);return{setMask:function(Pe){Se!==Pe&&!O&&(t.colorMask(Pe,Pe,Pe,Pe),Se=Pe)},setLocked:function(Pe){O=Pe},setClear:function(Pe,lt,ct,Dt,Kt){Kt===!0&&(Pe*=Dt,lt*=Dt,ct*=Dt),xe.set(Pe,lt,ct,Dt),Ne.equals(xe)===!1&&(t.clearColor(Pe,lt,ct,Dt),Ne.copy(xe))},reset:function(){O=!1,Se=null,Ne.set(-1,0,0,0)}}}function r(){let O=!1,xe=null,Se=null,Ne=null;return{setTest:function(Pe){Pe?re(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Pe){xe!==Pe&&!O&&(t.depthMask(Pe),xe=Pe)},setFunc:function(Pe){if(Se!==Pe){switch(Pe){case UT:t.depthFunc(t.NEVER);break;case OT:t.depthFunc(t.ALWAYS);break;case FT:t.depthFunc(t.LESS);break;case Cl:t.depthFunc(t.LEQUAL);break;case BT:t.depthFunc(t.EQUAL);break;case kT:t.depthFunc(t.GEQUAL);break;case HT:t.depthFunc(t.GREATER);break;case VT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){Ne!==Pe&&(t.clearDepth(Pe),Ne=Pe)},reset:function(){O=!1,xe=null,Se=null,Ne=null}}}function o(){let O=!1,xe=null,Se=null,Ne=null,Pe=null,lt=null,ct=null,Dt=null,Kt=null;return{setTest:function(ut){O||(ut?re(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ut){xe!==ut&&!O&&(t.stencilMask(ut),xe=ut)},setFunc:function(ut,Zt,$n){(Se!==ut||Ne!==Zt||Pe!==$n)&&(t.stencilFunc(ut,Zt,$n),Se=ut,Ne=Zt,Pe=$n)},setOp:function(ut,Zt,$n){(lt!==ut||ct!==Zt||Dt!==$n)&&(t.stencilOp(ut,Zt,$n),lt=ut,ct=Zt,Dt=$n)},setLocked:function(ut){O=ut},setClear:function(ut){Kt!==ut&&(t.clearStencil(ut),Kt=ut)},reset:function(){O=!1,xe=null,Se=null,Ne=null,Pe=null,lt=null,ct=null,Dt=null,Kt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,v=[],m=null,p=!1,S=null,_=null,M=null,A=null,T=null,C=null,L=null,y=new Ye(0,0,0),E=0,N=!1,U=null,$=null,I=null,H=null,k=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ce)[1]),z=ne>=1):ce.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),z=ne>=2);let he=null,pe={};const te=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),ve=new pt().fromArray(te),ye=new pt().fromArray(fe);function G(O,xe,Se,Ne){const Pe=new Uint8Array(4),lt=t.createTexture();t.bindTexture(O,lt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<Se;ct++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(xe,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(xe+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return lt}const le={};le[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(t.DEPTH_TEST),l.setFunc(Cl),ie(!1),b(lp),re(t.CULL_FACE),X(Ki);function re(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function ue(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function be(O,xe){return d[O]!==xe?(t.bindFramebuffer(O,xe),d[O]=xe,i&&(O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe)),!0):!1}function W(O,xe){let Se=v,Ne=!1;if(O)if(Se=g.get(xe),Se===void 0&&(Se=[],g.set(xe,Se)),O.isWebGLMultipleRenderTargets){const Pe=O.texture;if(Se.length!==Pe.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let lt=0,ct=Pe.length;lt<ct;lt++)Se[lt]=t.COLOR_ATTACHMENT0+lt;Se.length=Pe.length,Ne=!0}}else Se[0]!==t.COLOR_ATTACHMENT0&&(Se[0]=t.COLOR_ATTACHMENT0,Ne=!0);else Se[0]!==t.BACK&&(Se[0]=t.BACK,Ne=!0);Ne&&(n.isWebGL2?t.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function R(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const P={[_s]:t.FUNC_ADD,[ST]:t.FUNC_SUBTRACT,[yT]:t.FUNC_REVERSE_SUBTRACT};if(i)P[fp]=t.MIN,P[hp]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[fp]=O.MIN_EXT,P[hp]=O.MAX_EXT)}const F={[ET]:t.ZERO,[MT]:t.ONE,[bT]:t.SRC_COLOR,[of]:t.SRC_ALPHA,[PT]:t.SRC_ALPHA_SATURATE,[CT]:t.DST_COLOR,[AT]:t.DST_ALPHA,[TT]:t.ONE_MINUS_SRC_COLOR,[af]:t.ONE_MINUS_SRC_ALPHA,[RT]:t.ONE_MINUS_DST_COLOR,[wT]:t.ONE_MINUS_DST_ALPHA,[LT]:t.CONSTANT_COLOR,[IT]:t.ONE_MINUS_CONSTANT_COLOR,[DT]:t.CONSTANT_ALPHA,[NT]:t.ONE_MINUS_CONSTANT_ALPHA};function X(O,xe,Se,Ne,Pe,lt,ct,Dt,Kt,ut){if(O===Ki){p===!0&&(ue(t.BLEND),p=!1);return}if(p===!1&&(re(t.BLEND),p=!0),O!==xT){if(O!==S||ut!==N){if((_!==_s||T!==_s)&&(t.blendEquation(t.FUNC_ADD),_=_s,T=_s),ut)switch(O){case Ir:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rf:t.blendFunc(t.ONE,t.ONE);break;case cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ir:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case up:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,A=null,C=null,L=null,y.set(0,0,0),E=0,S=O,N=ut}return}Pe=Pe||xe,lt=lt||Se,ct=ct||Ne,(xe!==_||Pe!==T)&&(t.blendEquationSeparate(P[xe],P[Pe]),_=xe,T=Pe),(Se!==M||Ne!==A||lt!==C||ct!==L)&&(t.blendFuncSeparate(F[Se],F[Ne],F[lt],F[ct]),M=Se,A=Ne,C=lt,L=ct),(Dt.equals(y)===!1||Kt!==E)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Kt),y.copy(Dt),E=Kt),S=O,N=!1}function J(O,xe){O.side===vi?ue(t.CULL_FACE):re(t.CULL_FACE);let Se=O.side===un;xe&&(Se=!Se),ie(Se),O.blending===Ir&&O.transparent===!1?X(Ki):X(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ne=O.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),D(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(O){U!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),U=O)}function b(O){O!==gT?(re(t.CULL_FACE),O!==$&&(O===lp?t.cullFace(t.BACK):O===_T?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),$=O}function x(O){O!==I&&(z&&t.lineWidth(O),I=O)}function D(O,xe,Se){O?(re(t.POLYGON_OFFSET_FILL),(H!==xe||k!==Se)&&(t.polygonOffset(xe,Se),H=xe,k=Se)):ue(t.POLYGON_OFFSET_FILL)}function B(O){O?re(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function j(O){O===void 0&&(O=t.TEXTURE0+Y-1),he!==O&&(t.activeTexture(O),he=O)}function K(O,xe,Se){Se===void 0&&(he===null?Se=t.TEXTURE0+Y-1:Se=he);let Ne=pe[Se];Ne===void 0&&(Ne={type:void 0,texture:void 0},pe[Se]=Ne),(Ne.type!==O||Ne.texture!==xe)&&(he!==Se&&(t.activeTexture(Se),he=Se),t.bindTexture(O,xe||le[O]),Ne.type=O,Ne.texture=xe)}function ae(){const O=pe[he];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(O){ve.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),ve.copy(O))}function ze(O){ye.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function ft(O,xe){let Se=f.get(xe);Se===void 0&&(Se=new WeakMap,f.set(xe,Se));let Ne=Se.get(O);Ne===void 0&&(Ne=t.getUniformBlockIndex(xe,O.name),Se.set(O,Ne))}function qe(O,xe){const Ne=f.get(xe).get(O);u.get(xe)!==Ne&&(t.uniformBlockBinding(xe,Ne,O.__bindingPointIndex),u.set(xe,Ne))}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},he=null,pe={},d={},g=new WeakMap,v=[],m=null,p=!1,S=null,_=null,M=null,A=null,T=null,C=null,L=null,y=new Ye(0,0,0),E=0,N=!1,U=null,$=null,I=null,H=null,k=null,ve.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:re,disable:ue,bindFramebuffer:be,drawBuffers:W,useProgram:R,setBlending:X,setMaterial:J,setFlipSided:ie,setCullFace:b,setLineWidth:x,setPolygonOffset:D,setScissorTest:B,activeTexture:j,bindTexture:K,unbindTexture:ae,compressedTexImage2D:se,compressedTexImage3D:de,texImage2D:we,texImage3D:Ae,updateUBOMapping:ft,uniformBlockBinding:qe,texStorage2D:Oe,texStorage3D:De,texSubImage2D:_e,texSubImage3D:Te,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ve,scissor:Re,viewport:ze,reset:me}}function mR(t,e,n,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):zo("canvas")}function v(b,x,D,B){let j=1;if((b.width>B||b.height>B)&&(j=B/Math.max(b.width,b.height)),j<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const K=x?df:Math.floor,ae=K(j*b.width),se=K(j*b.height);f===void 0&&(f=g(ae,se));const de=D?g(ae,se):f;return de.width=ae,de.height=se,de.getContext("2d").drawImage(b,0,0,ae,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ae+"x"+se+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return zp(b.width)&&zp(b.height)}function p(b){return a?!1:b.wrapS!==Vn||b.wrapT!==Vn||b.minFilter!==en&&b.minFilter!==Cn}function S(b,x){return b.generateMipmaps&&x&&b.minFilter!==en&&b.minFilter!==Cn}function _(b){t.generateMipmap(b)}function M(b,x,D,B,j=!1){if(a===!1)return x;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=x;if(x===t.RED&&(D===t.FLOAT&&(K=t.R32F),D===t.HALF_FLOAT&&(K=t.R16F),D===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(K=t.R8UI),D===t.UNSIGNED_SHORT&&(K=t.R16UI),D===t.UNSIGNED_INT&&(K=t.R32UI),D===t.BYTE&&(K=t.R8I),D===t.SHORT&&(K=t.R16I),D===t.INT&&(K=t.R32I)),x===t.RG&&(D===t.FLOAT&&(K=t.RG32F),D===t.HALF_FLOAT&&(K=t.RG16F),D===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RGBA){const ae=j?Rl:at.getTransfer(B);D===t.FLOAT&&(K=t.RGBA32F),D===t.HALF_FLOAT&&(K=t.RGBA16F),D===t.UNSIGNED_BYTE&&(K=ae===ht?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(b,x,D){return S(b,D)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){return b===en||b===dp||b===Xc?t.NEAREST:t.LINEAR}function C(b){const x=b.target;x.removeEventListener("dispose",C),y(x),x.isVideoTexture&&u.delete(x)}function L(b){const x=b.target;x.removeEventListener("dispose",L),N(x)}function y(b){const x=i.get(b);if(x.__webglInit===void 0)return;const D=b.source,B=h.get(D);if(B){const j=B[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(b),Object.keys(B).length===0&&h.delete(D)}i.remove(b)}function E(b){const x=i.get(b);t.deleteTexture(x.__webglTexture);const D=b.source,B=h.get(D);delete B[x.__cacheKey],o.memory.textures--}function N(b){const x=b.texture,D=i.get(b),B=i.get(x);if(B.__webglTexture!==void 0&&(t.deleteTexture(B.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(D.__webglFramebuffer[j]))for(let K=0;K<D.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(D.__webglFramebuffer[j][K]);else t.deleteFramebuffer(D.__webglFramebuffer[j]);D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer[j])}else{if(Array.isArray(D.__webglFramebuffer))for(let j=0;j<D.__webglFramebuffer.length;j++)t.deleteFramebuffer(D.__webglFramebuffer[j]);else t.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&t.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let j=0;j<D.__webglColorRenderbuffer.length;j++)D.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(D.__webglColorRenderbuffer[j]);D.__webglDepthRenderbuffer&&t.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let j=0,K=x.length;j<K;j++){const ae=i.get(x[j]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(x[j])}i.remove(x),i.remove(b)}let U=0;function $(){U=0}function I(){const b=U;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),U+=1,b}function H(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function k(b,x){const D=i.get(b);if(b.isVideoTexture&&J(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const B=b.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(D,b,x);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+x)}function Y(b,x){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ve(D,b,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+x)}function z(b,x){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ve(D,b,x);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+x)}function ne(b,x){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ye(D,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+x)}const ce={[tn]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[uf]:t.MIRRORED_REPEAT},he={[en]:t.NEAREST,[dp]:t.NEAREST_MIPMAP_NEAREST,[Xc]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[KT]:t.LINEAR_MIPMAP_NEAREST,[Ho]:t.LINEAR_MIPMAP_LINEAR},pe={[l1]:t.NEVER,[p1]:t.ALWAYS,[c1]:t.LESS,[X0]:t.LEQUAL,[u1]:t.EQUAL,[d1]:t.GEQUAL,[f1]:t.GREATER,[h1]:t.NOTEQUAL};function te(b,x,D){if(D?(t.texParameteri(b,t.TEXTURE_WRAP_S,ce[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ce[x.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ce[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,he[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,he[x.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==Vn||x.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(x.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==en&&x.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===en||x.minFilter!==Xc&&x.minFilter!==Ho||x.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function fe(b,x){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const B=x.source;let j=h.get(B);j===void 0&&(j={},h.set(B,j));const K=H(x);if(K!==b.__cacheKey){j[K]===void 0&&(j[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),j[K].usedTimes++;const ae=j[b.__cacheKey];ae!==void 0&&(j[b.__cacheKey].usedTimes--,ae.usedTimes===0&&E(x)),b.__cacheKey=K,b.__webglTexture=j[K].texture}return D}function ve(b,x,D){let B=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=t.TEXTURE_3D);const j=fe(b,x),K=x.source;n.bindTexture(B,b.__webglTexture,t.TEXTURE0+D);const ae=i.get(K);if(K.version!==ae.__version||j===!0){n.activeTexture(t.TEXTURE0+D);const se=at.getPrimaries(at.workingColorSpace),de=x.colorSpace===Pn?null:at.getPrimaries(x.colorSpace),_e=x.colorSpace===Pn||se===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Te=p(x)&&m(x.image)===!1;let oe=v(x.image,Te,!1,s.maxTextureSize);oe=ie(x,oe);const Ve=m(oe)||a,Oe=r.convert(x.format,x.colorSpace);let De=r.convert(x.type),we=M(x.internalFormat,Oe,De,x.colorSpace,x.isVideoTexture);te(B,x,Ve);let Ae;const Re=x.mipmaps,ze=a&&x.isVideoTexture!==!0&&we!==G0,ft=ae.__version===void 0||j===!0,qe=A(x,oe,Ve);if(x.isDepthTexture)we=t.DEPTH_COMPONENT,a?x.type===qi?we=t.DEPTH_COMPONENT32F:x.type===Xi?we=t.DEPTH_COMPONENT24:x.type===Ds?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:x.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ns&&we===t.DEPTH_COMPONENT&&x.type!==Mh&&x.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Xi,De=r.convert(x.type)),x.format===jr&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,x.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ds,De=r.convert(x.type))),ft&&(ze?n.texStorage2D(t.TEXTURE_2D,1,we,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,we,oe.width,oe.height,0,Oe,De,null));else if(x.isDataTexture)if(Re.length>0&&Ve){ze&&ft&&n.texStorage2D(t.TEXTURE_2D,qe,we,Re[0].width,Re[0].height);for(let me=0,O=Re.length;me<O;me++)Ae=Re[me],ze?n.texSubImage2D(t.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Oe,De,Ae.data):n.texImage2D(t.TEXTURE_2D,me,we,Ae.width,Ae.height,0,Oe,De,Ae.data);x.generateMipmaps=!1}else ze?(ft&&n.texStorage2D(t.TEXTURE_2D,qe,we,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Oe,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,we,oe.width,oe.height,0,Oe,De,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,we,Re[0].width,Re[0].height,oe.depth);for(let me=0,O=Re.length;me<O;me++)Ae=Re[me],x.format!==zn?Oe!==null?ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,oe.depth,Oe,Ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,we,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,oe.depth,Oe,De,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,we,Ae.width,Ae.height,oe.depth,0,Oe,De,Ae.data)}else{ze&&ft&&n.texStorage2D(t.TEXTURE_2D,qe,we,Re[0].width,Re[0].height);for(let me=0,O=Re.length;me<O;me++)Ae=Re[me],x.format!==zn?Oe!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Oe,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,me,we,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage2D(t.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Oe,De,Ae.data):n.texImage2D(t.TEXTURE_2D,me,we,Ae.width,Ae.height,0,Oe,De,Ae.data)}else if(x.isDataArrayTexture)ze?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,we,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Oe,De,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,Oe,De,oe.data);else if(x.isData3DTexture)ze?(ft&&n.texStorage3D(t.TEXTURE_3D,qe,we,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Oe,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,Oe,De,oe.data);else if(x.isFramebufferTexture){if(ft)if(ze)n.texStorage2D(t.TEXTURE_2D,qe,we,oe.width,oe.height);else{let me=oe.width,O=oe.height;for(let xe=0;xe<qe;xe++)n.texImage2D(t.TEXTURE_2D,xe,we,me,O,0,Oe,De,null),me>>=1,O>>=1}}else if(Re.length>0&&Ve){ze&&ft&&n.texStorage2D(t.TEXTURE_2D,qe,we,Re[0].width,Re[0].height);for(let me=0,O=Re.length;me<O;me++)Ae=Re[me],ze?n.texSubImage2D(t.TEXTURE_2D,me,0,0,Oe,De,Ae):n.texImage2D(t.TEXTURE_2D,me,we,Oe,De,Ae);x.generateMipmaps=!1}else ze?(ft&&n.texStorage2D(t.TEXTURE_2D,qe,we,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Oe,De,oe)):n.texImage2D(t.TEXTURE_2D,0,we,Oe,De,oe);S(x,Ve)&&_(B),ae.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ye(b,x,D){if(x.image.length!==6)return;const B=fe(b,x),j=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+D);const K=i.get(j);if(j.version!==K.__version||B===!0){n.activeTexture(t.TEXTURE0+D);const ae=at.getPrimaries(at.workingColorSpace),se=x.colorSpace===Pn?null:at.getPrimaries(x.colorSpace),de=x.colorSpace===Pn||ae===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const _e=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let me=0;me<6;me++)!_e&&!Te?oe[me]=v(x.image[me],!1,!0,s.maxCubemapSize):oe[me]=Te?x.image[me].image:x.image[me],oe[me]=ie(x,oe[me]);const Ve=oe[0],Oe=m(Ve)||a,De=r.convert(x.format,x.colorSpace),we=r.convert(x.type),Ae=M(x.internalFormat,De,we,x.colorSpace),Re=a&&x.isVideoTexture!==!0,ze=K.__version===void 0||B===!0;let ft=A(x,Ve,Oe);te(t.TEXTURE_CUBE_MAP,x,Oe);let qe;if(_e){Re&&ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,Ae,Ve.width,Ve.height);for(let me=0;me<6;me++){qe=oe[me].mipmaps;for(let O=0;O<qe.length;O++){const xe=qe[O];x.format!==zn?De!==null?Re?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O,0,0,xe.width,xe.height,De,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O,Ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O,0,0,xe.width,xe.height,De,we,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O,Ae,xe.width,xe.height,0,De,we,xe.data)}}}else{qe=x.mipmaps,Re&&ze&&(qe.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,Ae,oe[0].width,oe[0].height));for(let me=0;me<6;me++)if(Te){Re?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,oe[me].width,oe[me].height,De,we,oe[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ae,oe[me].width,oe[me].height,0,De,we,oe[me].data);for(let O=0;O<qe.length;O++){const Se=qe[O].image[me].image;Re?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O+1,0,0,Se.width,Se.height,De,we,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O+1,Ae,Se.width,Se.height,0,De,we,Se.data)}}else{Re?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De,we,oe[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ae,De,we,oe[me]);for(let O=0;O<qe.length;O++){const xe=qe[O];Re?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O+1,0,0,De,we,xe.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,O+1,Ae,De,we,xe.image[me])}}}S(x,Oe)&&_(t.TEXTURE_CUBE_MAP),K.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function G(b,x,D,B,j,K){const ae=r.convert(D.format,D.colorSpace),se=r.convert(D.type),de=M(D.internalFormat,ae,se,D.colorSpace);if(!i.get(x).__hasExternalTextures){const Te=Math.max(1,x.width>>K),oe=Math.max(1,x.height>>K);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,K,de,Te,oe,x.depth,0,ae,se,null):n.texImage2D(j,K,de,Te,oe,0,ae,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),X(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,j,i.get(D).__webglTexture,0,F(x)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,B,j,i.get(D).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,x,D){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let B=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(D||X(x)){const j=x.depthTexture;j&&j.isDepthTexture&&(j.type===qi?B=t.DEPTH_COMPONENT32F:j.type===Xi&&(B=t.DEPTH_COMPONENT24));const K=F(x);X(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,B,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,K,B,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,B,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const B=F(x);D&&X(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,B,t.DEPTH24_STENCIL8,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,B,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let j=0;j<B.length;j++){const K=B[j],ae=r.convert(K.format,K.colorSpace),se=r.convert(K.type),de=M(K.internalFormat,ae,se,K.colorSpace),_e=F(x);D&&X(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,de,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,de,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,de,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const B=i.get(x.depthTexture).__webglTexture,j=F(x);if(x.depthTexture.format===Ns)X(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0);else if(x.depthTexture.format===jr)X(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function ue(b){const x=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");re(x.__webglFramebuffer,b)}else if(D){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=t.createRenderbuffer(),le(x.__webglDepthbuffer[B],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),le(x.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(b,x,D){const B=i.get(b);x!==void 0&&G(B.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&ue(b)}function W(b){const x=b.texture,D=i.get(b),B=i.get(x);b.addEventListener("dispose",L),b.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=t.createTexture()),B.__version=x.version,o.memory.textures++);const j=b.isWebGLCubeRenderTarget===!0,K=b.isWebGLMultipleRenderTargets===!0,ae=m(b)||a;if(j){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let de=0;de<x.mipmaps.length;de++)D.__webglFramebuffer[se][de]=t.createFramebuffer()}else D.__webglFramebuffer[se]=t.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)D.__webglFramebuffer[se]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(K)if(s.drawBuffers){const se=b.texture;for(let de=0,_e=se.length;de<_e;de++){const Te=i.get(se[de]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&X(b)===!1){const se=K?x:[x];D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const _e=se[de];D.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const Te=r.convert(_e.format,_e.colorSpace),oe=r.convert(_e.type),Ve=M(_e.internalFormat,Te,oe,_e.colorSpace,b.isXRRenderTarget===!0),Oe=F(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Ve,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,D.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),le(D.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),te(t.TEXTURE_CUBE_MAP,x,ae);for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)G(D.__webglFramebuffer[se][de],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else G(D.__webglFramebuffer[se],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);S(x,ae)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(K){const se=b.texture;for(let de=0,_e=se.length;de<_e;de++){const Te=se[de],oe=i.get(Te);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),te(t.TEXTURE_2D,Te,ae),G(D.__webglFramebuffer,b,Te,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),S(Te,ae)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,B.__webglTexture),te(se,x,ae),a&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)G(D.__webglFramebuffer[de],b,x,t.COLOR_ATTACHMENT0,se,de);else G(D.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,se,0);S(x,ae)&&_(se),n.unbindTexture()}b.depthBuffer&&ue(b)}function R(b){const x=m(b)||a,D=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let B=0,j=D.length;B<j;B++){const K=D[B];if(S(K,x)){const ae=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(K).__webglTexture;n.bindTexture(ae,se),_(ae),n.unbindTexture()}}}function P(b){if(a&&b.samples>0&&X(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],D=b.width,B=b.height;let j=t.COLOR_BUFFER_BIT;const K=[],ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let _e=0;_e<x.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){K.push(t.COLOR_ATTACHMENT0+_e),b.depthBuffer&&K.push(ae);const Te=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Te===!1&&(b.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[_e]),Te===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ae])),de){const oe=i.get(x[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,D,B,0,0,D,B,j,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<x.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,se.__webglColorRenderbuffer[_e]);const Te=i.get(x[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function F(b){return Math.min(s.maxSamples,b.samples)}function X(b){const x=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function J(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ie(b,x){const D=b.colorSpace,B=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===ff||D!==Mi&&D!==Pn&&(at.getTransfer(D)===ht?a===!1?e.has("EXT_sRGB")===!0&&B===zn?(b.format=ff,b.minFilter=Cn,b.generateMipmaps=!1):x=j0.sRGBToLinear(x):(B!==zn||j!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}this.allocateTextureUnit=I,this.resetTextureUnits=$,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=ne,this.rebindTextures=be,this.setupRenderTarget=W,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=G,this.useMultisampledRTT=X}function gR(t,e,n){const i=n.isWebGL2;function s(r,o=Pn){let a;const l=at.getTransfer(o);if(r===Ji)return t.UNSIGNED_BYTE;if(r===B0)return t.UNSIGNED_SHORT_4_4_4_4;if(r===k0)return t.UNSIGNED_SHORT_5_5_5_1;if(r===ZT)return t.BYTE;if(r===JT)return t.SHORT;if(r===Mh)return t.UNSIGNED_SHORT;if(r===F0)return t.INT;if(r===Xi)return t.UNSIGNED_INT;if(r===qi)return t.FLOAT;if(r===Vo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===QT)return t.ALPHA;if(r===zn)return t.RGBA;if(r===e1)return t.LUMINANCE;if(r===t1)return t.LUMINANCE_ALPHA;if(r===Ns)return t.DEPTH_COMPONENT;if(r===jr)return t.DEPTH_STENCIL;if(r===ff)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===n1)return t.RED;if(r===H0)return t.RED_INTEGER;if(r===i1)return t.RG;if(r===V0)return t.RG_INTEGER;if(r===z0)return t.RGBA_INTEGER;if(r===qc||r===jc||r===$c||r===Yc)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pp||r===mp||r===gp||r===_p)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===pp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_p)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===G0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vp||r===xp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===vp)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sp||r===yp||r===Ep||r===Mp||r===bp||r===Tp||r===Ap||r===wp||r===Cp||r===Rp||r===Pp||r===Lp||r===Ip||r===Dp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Sp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ep)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ap)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ip)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dp)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kc||r===Np||r===Up)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Kc)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Np)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Up)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===s1||r===Op||r===Fp||r===Bp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Kc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Op)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ds?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class _R extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let fo=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const vR={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vR)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class xR extends Zs{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=n.getContextAttributes();let m=null,p=null;const S=[],_=[],M=new et;let A=null;const T=new xn;T.layers.enable(1),T.viewport=new pt;const C=new xn;C.layers.enable(2),C.viewport=new pt;const L=[T,C],y=new _R;y.layers.enable(1),y.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=S[te];return fe===void 0&&(fe=new yu,S[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=S[te];return fe===void 0&&(fe=new yu,S[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=S[te];return fe===void 0&&(fe=new yu,S[te]=fe),fe.getHandSpace()};function U(te){const fe=_.indexOf(te.inputSource);if(fe===-1)return;const ve=S[fe];ve!==void 0&&(ve.update(te.inputSource,te.frame,c||o),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",I);for(let te=0;te<S.length;te++){const fe=_[te];fe!==null&&(_[te]=null,S[te].disconnect(fe))}E=null,N=null,e.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",$),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new zs(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,ve=null,ye=null;v.depth&&(ye=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=v.stencil?jr:Ns,ve=v.stencil?Ds:Xi);const G={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(G),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new zs(h.textureWidth,h.textureHeight,{format:zn,type:Ji,depthTexture:new sv(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const le=e.properties.get(p);le.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(te){for(let fe=0;fe<te.removed.length;fe++){const ve=te.removed[fe],ye=_.indexOf(ve);ye>=0&&(_[ye]=null,S[ye].disconnect(ve))}for(let fe=0;fe<te.added.length;fe++){const ve=te.added[fe];let ye=_.indexOf(ve);if(ye===-1){for(let le=0;le<S.length;le++)if(le>=_.length){_.push(ve),ye=le;break}else if(_[le]===null){_[le]=ve,ye=le;break}if(ye===-1)break}const G=S[ye];G&&G.connect(ve)}}const H=new V,k=new V;function Y(te,fe,ve){H.setFromMatrixPosition(fe.matrixWorld),k.setFromMatrixPosition(ve.matrixWorld);const ye=H.distanceTo(k),G=fe.projectionMatrix.elements,le=ve.projectionMatrix.elements,re=G[14]/(G[10]-1),ue=G[14]/(G[10]+1),be=(G[9]+1)/G[5],W=(G[9]-1)/G[5],R=(G[8]-1)/G[0],P=(le[8]+1)/le[0],F=re*R,X=re*P,J=ye/(-R+P),ie=J*-R;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ie),te.translateZ(J),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const b=re+J,x=ue+J,D=F-ie,B=X+(ye-ie),j=be*ue/x*b,K=W*ue/x*b;te.projectionMatrix.makePerspective(D,B,j,K,b,x),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function z(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;y.near=C.near=T.near=te.near,y.far=C.far=T.far=te.far,(E!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,N=y.far);const fe=te.parent,ve=y.cameras;z(y,fe);for(let ye=0;ye<ve.length;ye++)z(ve[ye],fe);ve.length===2?Y(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),ne(te,y,fe)};function ne(te,fe,ve){ve===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=hf*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)};let ce=null;function he(te,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ye=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let G=0;G<ve.length;G++){const le=ve[G];let re=null;if(d!==null)re=d.getViewport(le);else{const be=f.getViewSubImage(h,le);re=be.viewport,G===0&&(e.setRenderTargetTextures(p,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(p))}let ue=L[G];ue===void 0&&(ue=new xn,ue.layers.enable(G),ue.viewport=new pt,L[G]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(re.x,re.y,re.width,re.height),G===0&&(y.matrix.copy(ue.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(ue)}}for(let ve=0;ve<S.length;ve++){const ye=_[ve],G=S[ve];ye!==null&&G!==void 0&&G.update(ye,fe,c||o)}ce&&ce(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const pe=new iv;pe.setAnimationLoop(he),this.setAnimationLoop=function(te){ce=te},this.dispose=function(){}}}function SR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ev(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yR(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){const M=_.program;i.uniformBlockBinding(S,M)}function c(S,_){let M=s[S.id];M===void 0&&(g(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(S,A);const T=e.render.frame;r[S.id]!==T&&(h(S),r[S.id]=T)}function u(S){const _=f();S.__bindingPointIndex=_;const M=t.createBuffer(),A=S.__size,T=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=s[S.id],M=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=M.length;T<C;T++){const L=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,E=L.length;y<E;y++){const N=L[y];if(d(N,T,y,A)===!0){const U=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let H=0;H<$.length;H++){const k=$[H],Y=v(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,U+I,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,_,M,A){const T=S.value,C=_+"_"+M;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const L=A[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(S){const _=S.uniforms;let M=0;const A=16;for(let C=0,L=_.length;C<L;C++){const y=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,N=y.length;E<N;E++){const U=y[E],$=Array.isArray(U.value)?U.value:[U.value];for(let I=0,H=$.length;I<H;I++){const k=$[I],Y=v(k),z=M%A;z!==0&&A-z<Y.boundary&&(M+=A-z),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Y.storage}}}const T=M%A;return T>0&&(M+=A-T),S.__size=M,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class uv{constructor(e={}){const{canvas:n=g1(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let M=!1,A=0,T=0,C=null,L=-1,y=null;const E=new pt,N=new pt;let U=null;const $=new Ye(0);let I=0,H=n.width,k=n.height,Y=1,z=null,ne=null;const ce=new pt(0,0,H,k),he=new pt(0,0,H,k);let pe=!1;const te=new Ch;let fe=!1,ve=!1,ye=null;const G=new Mt,le=new et,re=new V,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return C===null?Y:1}let W=i;function R(w,q){for(let Q=0;Q<w.length;Q++){const ee=w[Q],Z=n.getContext(ee,q);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eh}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",xe,!1),W===null){const q=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&q.shift(),W=R(q,w),W===null)throw R(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let P,F,X,J,ie,b,x,D,B,j,K,ae,se,de,_e,Te,oe,Ve,Oe,De,we,Ae,Re,ze;function ft(){P=new LC(W),F=new bC(W,P,e),P.init(F),Ae=new gR(W,P,F),X=new pR(W,P,F),J=new NC(W),ie=new eR,b=new mR(W,P,X,ie,F,Ae,J),x=new AC(_),D=new PC(_),B=new V1(W,F),Re=new EC(W,P,B,F),j=new IC(W,B,J,Re),K=new BC(W,j,B,J),Oe=new FC(W,F,b),Te=new TC(ie),ae=new Q2(_,x,D,P,F,Re,Te),se=new SR(_,ie),de=new nR,_e=new lR(P,F),Ve=new yC(_,x,D,X,K,h,l),oe=new dR(_,K,F),ze=new yR(W,J,F,X),De=new MC(W,P,J,F),we=new DC(W,P,J,F),J.programs=ae.programs,_.capabilities=F,_.extensions=P,_.properties=ie,_.renderLists=de,_.shadowMap=oe,_.state=X,_.info=J}ft();const qe=new xR(_,W);this.xr=qe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=P.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=P.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(H,k,!1))},this.getSize=function(w){return w.set(H,k)},this.setSize=function(w,q,Q=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,k=q,n.width=Math.floor(w*Y),n.height=Math.floor(q*Y),Q===!0&&(n.style.width=w+"px",n.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(H*Y,k*Y).floor()},this.setDrawingBufferSize=function(w,q,Q){H=w,k=q,Y=Q,n.width=Math.floor(w*Q),n.height=Math.floor(q*Q),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,q,Q,ee){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,q,Q,ee),X.viewport(E.copy(ce).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,q,Q,ee){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,q,Q,ee),X.scissor(N.copy(he).multiplyScalar(Y).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){X.setScissorTest(pe=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(w=!0,q=!0,Q=!0){let ee=0;if(w){let Z=!1;if(C!==null){const Me=C.texture.format;Z=Me===z0||Me===V0||Me===H0}if(Z){const Me=C.texture.type,Ce=Me===Ji||Me===Xi||Me===Mh||Me===Ds||Me===B0||Me===k0,Le=Ve.getClearColor(),Ue=Ve.getClearAlpha(),Xe=Le.r,Be=Le.g,He=Le.b;Ce?(d[0]=Xe,d[1]=Be,d[2]=He,d[3]=Ue,W.clearBufferuiv(W.COLOR,0,d)):(g[0]=Xe,g[1]=Be,g[2]=He,g[3]=Ue,W.clearBufferiv(W.COLOR,0,g))}else ee|=W.COLOR_BUFFER_BIT}q&&(ee|=W.DEPTH_BUFFER_BIT),Q&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),de.dispose(),_e.dispose(),ie.dispose(),x.dispose(),D.dispose(),K.dispose(),Re.dispose(),ze.dispose(),ae.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Kt),qe.removeEventListener("sessionend",ut),ye&&(ye.dispose(),ye=null),Zt.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=J.autoReset,q=oe.enabled,Q=oe.autoUpdate,ee=oe.needsUpdate,Z=oe.type;ft(),J.autoReset=w,oe.enabled=q,oe.autoUpdate=Q,oe.needsUpdate=ee,oe.type=Z}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Se(w){const q=w.target;q.removeEventListener("dispose",Se),Ne(q)}function Ne(w){Pe(w),ie.remove(w)}function Pe(w){const q=ie.get(w).programs;q!==void 0&&(q.forEach(function(Q){ae.releaseProgram(Q)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,Q,ee,Z,Me){q===null&&(q=ue);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,Le=Hv(w,q,Q,ee,Z);X.setMaterial(ee,Ce);let Ue=Q.index,Xe=1;if(ee.wireframe===!0){if(Ue=j.getWireframeAttribute(Q),Ue===void 0)return;Xe=2}const Be=Q.drawRange,He=Q.attributes.position;let bt=Be.start*Xe,dn=(Be.start+Be.count)*Xe;Me!==null&&(bt=Math.max(bt,Me.start*Xe),dn=Math.min(dn,(Me.start+Me.count)*Xe)),Ue!==null?(bt=Math.max(bt,0),dn=Math.min(dn,Ue.count)):He!=null&&(bt=Math.max(bt,0),dn=Math.min(dn,He.count));const Nt=dn-bt;if(Nt<0||Nt===1/0)return;Re.setup(Z,ee,Le,Q,Ue);let si,gt=De;if(Ue!==null&&(si=B.get(Ue),gt=we,gt.setIndex(si)),Z.isMesh)ee.wireframe===!0?(X.setLineWidth(ee.wireframeLinewidth*be()),gt.setMode(W.LINES)):gt.setMode(W.TRIANGLES);else if(Z.isLine){let je=ee.linewidth;je===void 0&&(je=1),X.setLineWidth(je*be()),Z.isLineSegments?gt.setMode(W.LINES):Z.isLineLoop?gt.setMode(W.LINE_LOOP):gt.setMode(W.LINE_STRIP)}else Z.isPoints?gt.setMode(W.POINTS):Z.isSprite&&gt.setMode(W.TRIANGLES);if(Z.isBatchedMesh)gt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)gt.renderInstances(bt,Nt,Z.count);else if(Q.isInstancedBufferGeometry){const je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ac=Math.min(Q.instanceCount,je);gt.renderInstances(bt,Nt,Ac)}else gt.render(bt,Nt)};function lt(w,q,Q){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,ua(w,q,Q),w.side=ns,w.needsUpdate=!0,ua(w,q,Q),w.side=vi):ua(w,q,Q)}this.compile=function(w,q,Q=null){Q===null&&(Q=w),m=_e.get(Q),m.init(),S.push(m),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),w!==Q&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(_._useLegacyLights);const ee=new Set;return w.traverse(function(Z){const Me=Z.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Le=Me[Ce];lt(Le,Q,Z),ee.add(Le)}else lt(Me,Q,Z),ee.add(Me)}),S.pop(),m=null,ee},this.compileAsync=function(w,q,Q=null){const ee=this.compile(w,q,Q);return new Promise(Z=>{function Me(){if(ee.forEach(function(Ce){ie.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){Z(w);return}setTimeout(Me,10)}P.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ct=null;function Dt(w){ct&&ct(w)}function Kt(){Zt.stop()}function ut(){Zt.start()}const Zt=new iv;Zt.setAnimationLoop(Dt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(w){ct=w,qe.setAnimationLoop(w),w===null?Zt.stop():Zt.start()},qe.addEventListener("sessionstart",Kt),qe.addEventListener("sessionend",ut),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(q),q=qe.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,q,C),m=_e.get(w,S.length),m.init(),S.push(m),G.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(G),ve=this.localClippingEnabled,fe=Te.init(this.clippingPlanes,ve),v=de.get(w,p.length),v.init(),p.push(v),$n(w,q,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(z,ne),this.info.render.frame++,fe===!0&&Te.beginShadows();const Q=m.state.shadowsArray;if(oe.render(Q,w,q),fe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(v,w),m.setupLights(_._useLegacyLights),q.isArrayCamera){const ee=q.cameras;for(let Z=0,Me=ee.length;Z<Me;Z++){const Ce=ee[Z];Dh(v,w,Ce,Ce.viewport)}}else Dh(v,w,q);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(_,w,q),Re.resetDefaultState(),L=-1,y=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function $n(w,q,Q,ee){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){ee&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const Ce=K.update(w),Le=w.material;Le.visible&&v.push(w,Ce,Le,Q,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){const Ce=K.update(w),Le=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),re.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),re.copy(Ce.boundingSphere.center)),re.applyMatrix4(w.matrixWorld).applyMatrix4(G)),Array.isArray(Le)){const Ue=Ce.groups;for(let Xe=0,Be=Ue.length;Xe<Be;Xe++){const He=Ue[Xe],bt=Le[He.materialIndex];bt&&bt.visible&&v.push(w,Ce,bt,Q,re.z,He)}}else Le.visible&&v.push(w,Ce,Le,Q,re.z,null)}}const Me=w.children;for(let Ce=0,Le=Me.length;Ce<Le;Ce++)$n(Me[Ce],q,Q,ee)}function Dh(w,q,Q,ee){const Z=w.opaque,Me=w.transmissive,Ce=w.transparent;m.setupLightsView(Q),fe===!0&&Te.setGlobalState(_.clippingPlanes,Q),Me.length>0&&kv(Z,Me,q,Q),ee&&X.viewport(E.copy(ee)),Z.length>0&&ca(Z,q,Q),Me.length>0&&ca(Me,q,Q),Ce.length>0&&ca(Ce,q,Q),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function kv(w,q,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Me=F.isWebGL2;ye===null&&(ye=new zs(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Vo:Ji,minFilter:Ho,samples:Me?4:0})),_.getDrawingBufferSize(le),Me?ye.setSize(le.x,le.y):ye.setSize(df(le.x),df(le.y));const Ce=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor($),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Le=_.toneMapping;_.toneMapping=Zi,ca(w,Q,ee),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye);let Ue=!1;for(let Xe=0,Be=q.length;Xe<Be;Xe++){const He=q[Xe],bt=He.object,dn=He.geometry,Nt=He.material,si=He.group;if(Nt.side===vi&&bt.layers.test(ee.layers)){const gt=Nt.side;Nt.side=un,Nt.needsUpdate=!0,Nh(bt,Q,ee,dn,Nt,si),Nt.side=gt,Nt.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye)),_.setRenderTarget(Ce),_.setClearColor($,I),_.toneMapping=Le}function ca(w,q,Q){const ee=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Me=w.length;Z<Me;Z++){const Ce=w[Z],Le=Ce.object,Ue=Ce.geometry,Xe=ee===null?Ce.material:ee,Be=Ce.group;Le.layers.test(Q.layers)&&Nh(Le,q,Q,Ue,Xe,Be)}}function Nh(w,q,Q,ee,Z,Me){w.onBeforeRender(_,q,Q,ee,Z,Me),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(_,q,Q,ee,w,Me),Z.transparent===!0&&Z.side===vi&&Z.forceSinglePass===!1?(Z.side=un,Z.needsUpdate=!0,_.renderBufferDirect(Q,q,ee,Z,w,Me),Z.side=ns,Z.needsUpdate=!0,_.renderBufferDirect(Q,q,ee,Z,w,Me),Z.side=vi):_.renderBufferDirect(Q,q,ee,Z,w,Me),w.onAfterRender(_,q,Q,ee,Z,Me)}function ua(w,q,Q){q.isScene!==!0&&(q=ue);const ee=ie.get(w),Z=m.state.lights,Me=m.state.shadowsArray,Ce=Z.state.version,Le=ae.getParameters(w,Z.state,Me,q,Q),Ue=ae.getProgramCacheKey(Le);let Xe=ee.programs;ee.environment=w.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(w.isMeshStandardMaterial?D:x).get(w.envMap||ee.environment),Xe===void 0&&(w.addEventListener("dispose",Se),Xe=new Map,ee.programs=Xe);let Be=Xe.get(Ue);if(Be!==void 0){if(ee.currentProgram===Be&&ee.lightsStateVersion===Ce)return Oh(w,Le),Be}else Le.uniforms=ae.getUniforms(w),w.onBuild(Q,Le,_),w.onBeforeCompile(Le,_),Be=ae.acquireProgram(Le,Ue),Xe.set(Ue,Be),ee.uniforms=Le.uniforms;const He=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Te.uniform),Oh(w,Le),ee.needsLights=zv(w),ee.lightsStateVersion=Ce,ee.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.directionalShadowMap.value=Z.state.directionalShadowMap,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotShadowMap.value=Z.state.spotShadowMap,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMap.value=Z.state.pointShadowMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Be,ee.uniformsList=null,Be}function Uh(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=rl.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Oh(w,q){const Q=ie.get(w);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Hv(w,q,Q,ee,Z){q.isScene!==!0&&(q=ue),b.resetTextureUnits();const Me=q.fog,Ce=ee.isMeshStandardMaterial?q.environment:null,Le=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mi,Ue=(ee.isMeshStandardMaterial?D:x).get(ee.envMap||Ce),Xe=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Be=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!Q.morphAttributes.position,bt=!!Q.morphAttributes.normal,dn=!!Q.morphAttributes.color;let Nt=Zi;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Nt=_.toneMapping);const si=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=si!==void 0?si.length:0,je=ie.get(ee),Ac=m.state.lights;if(fe===!0&&(ve===!0||w!==y)){const bn=w===y&&ee.id===L;Te.setState(ee,w,bn)}let vt=!1;ee.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ac.state.version||je.outputColorSpace!==Le||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||je.envMap!==Ue||ee.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Te.numPlanes||je.numIntersection!==Te.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==Be||je.morphTargets!==He||je.morphNormals!==bt||je.morphColors!==dn||je.toneMapping!==Nt||F.isWebGL2===!0&&je.morphTargetsCount!==gt)&&(vt=!0):(vt=!0,je.__version=ee.version);let ss=je.currentProgram;vt===!0&&(ss=ua(ee,q,Z));let Fh=!1,Jr=!1,wc=!1;const Ht=ss.getUniforms(),rs=je.uniforms;if(X.useProgram(ss.program)&&(Fh=!0,Jr=!0,wc=!0),ee.id!==L&&(L=ee.id,Jr=!0),Fh||y!==w){Ht.setValue(W,"projectionMatrix",w.projectionMatrix),Ht.setValue(W,"viewMatrix",w.matrixWorldInverse);const bn=Ht.map.cameraPosition;bn!==void 0&&bn.setValue(W,re.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&Ht.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ht.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Jr=!0,wc=!0)}if(Z.isSkinnedMesh){Ht.setOptional(W,Z,"bindMatrix"),Ht.setOptional(W,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(F.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(W,"boneTexture",bn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Ht.setOptional(W,Z,"batchingTexture"),Ht.setValue(W,"batchingTexture",Z._matricesTexture,b));const Cc=Q.morphAttributes;if((Cc.position!==void 0||Cc.normal!==void 0||Cc.color!==void 0&&F.isWebGL2===!0)&&Oe.update(Z,Q,ss),(Jr||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,Ht.setValue(W,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(rs.envMap.value=Ue,rs.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Jr&&(Ht.setValue(W,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Vv(rs,wc),Me&&ee.fog===!0&&se.refreshFogUniforms(rs,Me),se.refreshMaterialUniforms(rs,ee,Y,k,ye),rl.upload(W,Uh(je),rs,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(rl.upload(W,Uh(je),rs,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ht.setValue(W,"center",Z.center),Ht.setValue(W,"modelViewMatrix",Z.modelViewMatrix),Ht.setValue(W,"normalMatrix",Z.normalMatrix),Ht.setValue(W,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const bn=ee.uniformsGroups;for(let Rc=0,Gv=bn.length;Rc<Gv;Rc++)if(F.isWebGL2){const Bh=bn[Rc];ze.update(Bh,ss),ze.bind(Bh,ss)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ss}function Vv(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function zv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,q,Q){ie.get(w.texture).__webglTexture=q,ie.get(w.depthTexture).__webglTexture=Q;const ee=ie.get(w);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,q){const Q=ie.get(w);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,Q=0){C=w,A=q,T=Q;let ee=!0,Z=null,Me=!1,Ce=!1;if(w){const Ue=ie.get(w);Ue.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(W.FRAMEBUFFER,null),ee=!1):Ue.__webglFramebuffer===void 0?b.setupRenderTarget(w):Ue.__hasExternalTextures&&b.rebindTextures(w,ie.get(w.texture).__webglTexture,ie.get(w.depthTexture).__webglTexture);const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Be=ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[q])?Z=Be[q][Q]:Z=Be[q],Me=!0):F.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?Z=ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?Z=Be[Q]:Z=Be,E.copy(w.viewport),N.copy(w.scissor),U=w.scissorTest}else E.copy(ce).multiplyScalar(Y).floor(),N.copy(he).multiplyScalar(Y).floor(),U=pe;if(X.bindFramebuffer(W.FRAMEBUFFER,Z)&&F.drawBuffers&&ee&&X.drawBuffers(w,Z),X.viewport(E),X.scissor(N),X.setScissorTest(U),Me){const Ue=ie.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ue.__webglTexture,Q)}else if(Ce){const Ue=ie.get(w.texture),Xe=q||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ue.__webglTexture,Q||0,Xe)}L=-1},this.readRenderTargetPixels=function(w,q,Q,ee,Z,Me,Ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){X.bindFramebuffer(W.FRAMEBUFFER,Le);try{const Ue=w.texture,Xe=Ue.format,Be=Ue.type;if(Xe!==zn&&Ae.convert(Xe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Vo&&(P.has("EXT_color_buffer_half_float")||F.isWebGL2&&P.has("EXT_color_buffer_float"));if(Be!==Ji&&Ae.convert(Be)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===qi&&(F.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ee&&Q>=0&&Q<=w.height-Z&&W.readPixels(q,Q,ee,Z,Ae.convert(Xe),Ae.convert(Be),Me)}finally{const Ue=C!==null?ie.get(C).__webglFramebuffer:null;X.bindFramebuffer(W.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(w,q,Q=0){const ee=Math.pow(2,-Q),Z=Math.floor(q.image.width*ee),Me=Math.floor(q.image.height*ee);b.setTexture2D(q,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,w.x,w.y,Z,Me),X.unbindTexture()},this.copyTextureToTexture=function(w,q,Q,ee=0){const Z=q.image.width,Me=q.image.height,Ce=Ae.convert(Q.format),Le=Ae.convert(Q.type);b.setTexture2D(Q,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Q.unpackAlignment),q.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ee,w.x,w.y,Z,Me,Ce,Le,q.image.data):q.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ee,w.x,w.y,q.mipmaps[0].width,q.mipmaps[0].height,Ce,q.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ee,w.x,w.y,Ce,Le,q.image),ee===0&&Q.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(w,q,Q,ee,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=w.max.x-w.min.x+1,Ce=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,Ue=Ae.convert(ee.format),Xe=Ae.convert(ee.type);let Be;if(ee.isData3DTexture)b.setTexture3D(ee,0),Be=W.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)b.setTexture2DArray(ee,0),Be=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ee.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ee.unpackAlignment);const He=W.getParameter(W.UNPACK_ROW_LENGTH),bt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),dn=W.getParameter(W.UNPACK_SKIP_PIXELS),Nt=W.getParameter(W.UNPACK_SKIP_ROWS),si=W.getParameter(W.UNPACK_SKIP_IMAGES),gt=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,gt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,gt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,w.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,w.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,w.min.z),Q.isDataTexture||Q.isData3DTexture?W.texSubImage3D(Be,Z,q.x,q.y,q.z,Me,Ce,Le,Ue,Xe,gt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Be,Z,q.x,q.y,q.z,Me,Ce,Le,Ue,gt.data)):W.texSubImage3D(Be,Z,q.x,q.y,q.z,Me,Ce,Le,Ue,Xe,gt),W.pixelStorei(W.UNPACK_ROW_LENGTH,He),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,bt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,dn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Nt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,si),Z===0&&ee.generateMipmaps&&W.generateMipmap(Be),X.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),X.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,X.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Th?"display-p3":"srgb",n.unpackColorSpace=at.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Us:W0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Us?_t:Mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ER extends uv{}ER.prototype.isWebGL1Renderer=!0;class MR extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ol extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wm=new V,Cm=new V,Rm=new Mt,Eu=new Ah,$a=new la;class bR extends Yt{constructor(e=new Nn,n=new ol){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)wm.fromBufferAttribute(n,s-1),Cm.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=wm.distanceTo(Cm);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Rm.copy(s).invert(),Eu.copy(e.ray).applyMatrix4(Rm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new V,u=new V,f=new V,h=new V,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let _=p,M=S-1;_<M;_+=d){const A=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(m,A),u.fromBufferAttribute(m,T),Eu.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let _=p,M=S-1;_<M;_+=d){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Eu.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Pm=new V,Lm=new V;class Im extends bR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Pm.fromBufferAttribute(n,s),Lm.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pm.distanceTo(Lm);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yr extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dm=new Mt,mf=new Ah,Ya=new la,Ka=new V;class Mo extends Yt{constructor(e=new Nn,n=new yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;Dm.copy(s).invert(),mf.copy(e.ray).applyMatrix4(Dm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);Ka.fromBufferAttribute(f,m),Nm(Ka,m,l,s,e,n,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)Ka.fromBufferAttribute(f,g),Nm(Ka,g,l,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nm(t,e,n,i,s,r,o){const a=mf.distanceSqToPoint(t);if(a<n){const l=new V;mf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Qi extends fn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fv extends ni{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gf extends ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Dl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class TR{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const AR=new TR;class Tc{constructor(e){this.manager=e!==void 0?e:AR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tc.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class wR extends Error{constructor(e,n){super(e),this.response=n}}class CR extends Tc{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Dl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:n,onProgress:i,onError:s});return}hi[e]=[],hi[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){S();function S(){f.read().then(({done:_,value:M})=>{if(_)p.close();else{v+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let T=0,C=u.length;T<C;T++){const L=u[T];L.onProgress&&L.onProgress(A)}p.enqueue(M),S()}})}}});return new Response(m)}else throw new wR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Dl.add(e,c);const u=hi[e];delete hi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class RR extends Tc{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Dl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;const a=zo("img");function l(){u(),Dl.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class hv extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Mu=new Mt,Um=new V,Om=new V;class PR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),n.position.copy(Um),Om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Om),n.updateMatrixWorld(),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fm=new Mt,ao=new V,bu=new V;class LR extends PR{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(ao),bu.copy(i.position),bu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(bu),i.updateMatrixWorld(),s.makeTranslation(-ao.x,-ao.y,-ao.z),Fm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fm)}}class dv extends hv{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new LR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IR extends hv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);const DR=/^[og]\s*(.+)?/,NR=/^mtllib /,UR=/^usemtl /,OR=/^usemap /,Bm=/\s+/,km=new V,Tu=new V,Hm=new V,Vm=new V,wn=new V,Za=new Ye;function FR(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(e,n,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,n,i){const s=this.vertices,r=this.object.geometry.normals;km.fromArray(s,e),Tu.fromArray(s,n),Hm.fromArray(s,i),wn.subVectors(Hm,Tu),Vm.subVectors(km,Tu),wn.cross(Vm),wn.normalize(),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z)},addColor:function(e,n,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,n,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,i,s,r,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(n,u),d=this.parseVertexIndex(i,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),h=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(s!==void 0&&s!==""){const g=this.uvs.length;f=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],n);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=n.length;r<o;r++)this.addUVLine(this.parseUVIndex(n[r],s))}};return t.startObject("",!1),t}class BR extends Tc{constructor(e){super(e),this.materials=null}load(e,n,i,s){const r=this,o=new CR(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const n=new FR;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(Bm);switch(f[0]){case"v":n.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Za.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),n.colors.push(Za.r,Za.g,Za.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":n.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(Bm),d=[];for(let v=0,m=h.length;v<m;v++){const p=h[v];if(p.length>0){const S=p.split("/");d.push(S)}}const g=d[0];for(let v=1,m=d.length-1;v<m;v++){const p=d[v],S=d[v+1];n.addFace(g[0],p[0],S[0],g[1],p[1],S[1],g[2],p[2],S[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let h=[];const d=[];if(c.indexOf("/")===-1)h=f;else for(let g=0,v=f.length;g<v;g++){const m=f[g].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&d.push(m[1])}n.addLineGeometry(h,d)}else if(u==="p"){const h=c.slice(1).trim().split(" ");n.addPointGeometry(h)}else if((s=DR.exec(c))!==null){const f=(" "+s[0].slice(1).trim()).slice(1);n.startObject(f)}else if(UR.test(c))n.object.startMaterial(c.substring(7).trim(),n.materialLibraries);else if(NR.test(c))n.materialLibraries.push(c.substring(7).trim());else if(OR.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();n.object.smooth=h!=="0"&&h!=="off"}else n.object.smooth=!0;const f=n.object.currentMaterial();f&&(f.smooth=n.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}n.finalize();const r=new fo;if(r.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=n.objects.length;a<l;a++){const c=n.objects[a],u=c.geometry,f=c.materials,h=u.type==="Line",d=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const v=new Nn;v.setAttribute("position",new Xt(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new Xt(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new Xt(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new Xt(u.uvs,2));const m=[];for(let S=0,_=f.length;S<_;S++){const M=f[S],A=M.name+"_"+M.smooth+"_"+g;let T=n.materials[A];if(this.materials!==null){if(T=this.materials.create(M.name),h&&T&&!(T instanceof ol)){const C=new ol;ni.prototype.copy.call(C,T),C.color.copy(T.color),T=C}else if(d&&T&&!(T instanceof yr)){const C=new yr({size:10,sizeAttenuation:!1});ni.prototype.copy.call(C,T),C.color.copy(T.color),C.map=T.map,T=C}}T===void 0&&(h?T=new ol:d?T=new yr({size:1,sizeAttenuation:!1}):T=new fv,T.name=M.name,T.flatShading=!M.smooth,T.vertexColors=g,n.materials[A]=T),m.push(T)}let p;if(m.length>1){for(let S=0,_=f.length;S<_;S++){const M=f[S];v.addGroup(M.groupStart,M.groupCount,S)}h?p=new Im(v,m):d?p=new Mo(v,m):p=new Gn(v,m)}else h?p=new Im(v,m[0]):d?p=new Mo(v,m[0]):p=new Gn(v,m[0]);p.name=c.name,r.add(p)}else if(n.vertices.length>0){const a=new yr({size:1,sizeAttenuation:!1}),l=new Nn;l.setAttribute("position",new Xt(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(l.setAttribute("color",new Xt(n.colors,3)),a.vertexColors=!0);const c=new Mo(l,a);r.add(c)}return r}}const kR="modulepreload",HR=function(t){return"/"+t},zm={},mr=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=HR(o),o in zm)return;zm[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":kR,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};class VR{constructor(){Fe(this,"list");Fe(this,"objLoader");this.list={},this.objLoader=new BR}load(e,n){if(!e)throw new Error("Please provide a key for the img you are loading");if(!n)throw new Error("Please provide a path for the img you are loading");const i=n.split("/"),s=i.pop()||"";return n=i.join("/"),n+="/",new Promise((r,o)=>{this.objLoader.setPath(n).load(s,a=>{this.list[e]=a,a.key=e,a.destroy=()=>{delete this.list[a.key]},r(a)},a=>{console.log(a.loaded/a.total*100+"% loaded")},a=>{console.error("An error happened",a),o(a)})})}get(e){if(!this.list[e]){console.warn(`Img with the key of ${e} not found in cache`);return}return this.list[e]}}class zR{constructor(){Fe(this,"list");Fe(this,"imgLoader");this.list={},this.imgLoader=new RR}load(e,n){if(!e)throw new Error("Please provide a key for the img you are loading");if(!n)throw new Error("Please provide a path for the img you are loading");const i=n.split("/"),s=i.pop()||"";return n=i.join("/"),n+="/",new Promise((r,o)=>{this.imgLoader.setPath(n).setCrossOrigin("*").load(s,a=>{this.list[e]=a,a.key=e,a.destroy=()=>{delete this.list[a.key]},r(a)},a=>{},a=>{console.error("An error happened",a),o(a)})})}get(e){if(!this.list[e]){console.warn(`Img with the key of ${e} not found in cache`);return}return this.list[e]}}const Nl={UPDATE:{type:"update"},CREATE:{type:"create"}};class pv{constructor(){Fe(this,"body");this._opacity=1}set opacity(e){var n;this._opacity=e,(n=this.body)!=null&&n.children[0]&&this.body.children[0].material&&[this.body.children[0].material].flat().forEach(i=>{i.opacity=e})}get opacity(){return this._opacity}}const _f=()=>{let t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t};var Ul,mv,Ol,gv,Fl,_v,Go,vf;class GR extends pv{constructor(n,i){super();dt(this,Ul);dt(this,Ol);dt(this,Fl);dt(this,Go);Fe(this,"three");Fe(this,"key");Fe(this,"pointLight");this.three=n,this.key=i,Ke(this,Ul,mv).call(this),Ke(this,Go,vf).call(this)}set visible(n){this.body.visible=n,this.pointLight.visible=n}get visible(){return this.body.visible}}Ul=new WeakSet,mv=function(){Ke(this,Ol,gv).call(this),Ke(this,Fl,_v).call(this),Ke(this,Go,vf).call(this)},Ol=new WeakSet,gv=function(){const n=this.three.imgManager.get("grain"),i=this.three.imgManager.get("grain_n"),s=this.three.imgManager.get("grain_s"),r=new Qi(n),o=new Qi(i),a=new Qi(s),l=this.three.renderer.capabilities.getMaxAnisotropy();r.colorSpace=_t,r.wrapS=tn,r.wrapT=tn,r.anisotropy=1,o.colorSpace=_t,o.wrapS=tn,o.wrapT=tn,o.anisotropy=l,a.wrapS=tn,a.wrapT=tn;const c=1,u=1,f=.5;r.repeat.set(c*f,u*f),o.repeat.set(c*f,u*f),a.repeat.set(c*f,u*f);const h=new gf({color:16777215,map:r,normalMap:o,specularMap:a,transparent:!0});this.body=this.three.objManager.get(this.key),this.body.traverse(d=>{d instanceof Gn&&(d.material=h)}),this.three.scene.add(this.body)},Fl=new WeakSet,_v=function(){this.pointLight=new dv(268435455,10),this.three.scene.add(this.pointLight),this.pointLight.position.set(0,.5,2)},Go=new WeakSet,vf=function(){this.three.emitter.addEventListener(Nl.UPDATE.type,()=>{_f()||(this.pointLight.position.x=this.three.mouse.x,this.pointLight.position.y=this.three.mouse.y)})};var Fi=(t=>(t[t.MAC_OS=1]="MAC_OS",t[t.IOS=2]="IOS",t[t.WINDOWS=3]="WINDOWS",t[t.ANDROID=4]="ANDROID",t[t.LINUX=5]="LINUX",t))(Fi||{});function WR(){const t=window.navigator.userAgent,e=window.navigator.platform,n=["Macintosh","MacIntel","MacPPC","Mac68K"],i=["Win32","Win64","Windows","WinCE"],s=["iPhone","iPad","iPod"];let r=Fi.WINDOWS;return!e&&!t?(console.error("Platform and userAgent not detected, setting platform to windows"),Fi.WINDOWS):(n.indexOf(e)!==-1?r=Fi.MAC_OS:s.indexOf(e)!==-1?r=Fi.IOS:i.indexOf(e)!==-1?r=Fi.WINDOWS:/Android/.test(t)?r=Fi.ANDROID:!r&&/Linux/.test(e)&&(r=Fi.LINUX),r)}class XR extends dv{constructor(n){super(n.color,n.intensity,n.distance,n.decay);Fe(this,"ticks");Fe(this,"initialTicks");Fe(this,"polarity");this.ticks=5,this.initialTicks=5,this.polarity=n.polarity||1,this.castShadow=!0}resetTicks(){this.ticks=this.initialTicks}}var Bl,vv,bs,ho,Wo,xf,gi,ms,kl,xv,Hl,Sv,Vl,yv,zl,Ev;class qR extends pv{constructor(n,i){super();dt(this,Bl);dt(this,bs);dt(this,Wo);dt(this,gi);dt(this,kl);dt(this,Hl);dt(this,Vl);dt(this,zl);Fe(this,"three");Fe(this,"key");Fe(this,"lightsArray");Fe(this,"concertLight1");Fe(this,"concertLight2");Fe(this,"concertLight3");Fe(this,"concertLight4");Fe(this,"strobeLight1");Fe(this,"strobeLight2");this.three=n,this.key=i,this.lightsArray=[],Ke(this,Bl,vv).call(this)}set visible(n){this.body.visible=n,this.lightsArray.forEach(i=>i.visible=n)}get visible(){return this.body.visible}setVerticalPosition(n=0){this.body.position.y=n,this.lightsArray.forEach(i=>{i.initialY==null&&(i.initialY=i.position.y),i.position.y=i.initialY+n})}}Bl=new WeakSet,vv=function(){Ke(this,Vl,yv).call(this),Ke(this,kl,xv).call(this),Ke(this,zl,Ev).call(this)},bs=new WeakSet,ho=function(n,i=.005){n.position.x+=i*n.polarity,n.position.x>1.5?(n.polarity*=-1,n.position.x=1.49):n.position.x<-1.5&&(n.polarity*=-1,n.position.x=-1.49)},Wo=new WeakSet,xf=function(n,i=30){this.body.visible&&(this.three.totalFrames%i==0?(n.visible=!0,n.resetTicks()):n.ticks<=0?(n.visible=!1,n.ticks=-1):n.ticks--)},gi=new WeakSet,ms=function(n=16777215,i=1,s=1){const r=new XR({color:n,intensity:i,polarity:s});return this.lightsArray.push(r),this.three.scene.add(r),r},kl=new WeakSet,xv=function(){this.concertLight1=Ke(this,gi,ms).call(this,16711680,3,1),this.concertLight2=Ke(this,gi,ms).call(this,255,7,1),this.concertLight3=Ke(this,gi,ms).call(this,16711680,3,-1),this.concertLight4=Ke(this,gi,ms).call(this,255,7,-1),this.strobeLight1=Ke(this,gi,ms).call(this,16777215,10,-1),this.strobeLight2=Ke(this,gi,ms).call(this,16777215,10,-1),this.concertLight1.position.set(-1.5,-.6,1),this.concertLight2.position.set(-.75,-.6,0),this.concertLight3.position.set(.75,-.6,0),this.concertLight4.position.set(1.5,-.6,1),this.strobeLight1.position.set(-.5,-.4,.5),this.strobeLight2.position.set(.5,-.4,.5)},Hl=new WeakSet,Sv=function(){const n=this.three.imgManager.get("grain"),i=this.three.imgManager.get("grain_n"),s=this.three.imgManager.get("grain_s"),r=new Qi(n),o=new Qi(i),a=new Qi(s),l=this.three.renderer.capabilities.getMaxAnisotropy();r.colorSpace=_t,r.wrapS=tn,r.wrapT=tn,r.anisotropy=1,o.colorSpace=_t,o.wrapS=tn,o.wrapT=tn,o.anisotropy=l,a.wrapS=tn,a.wrapT=tn;const c=1,u=1,f=4;r.repeat.set(c*f,u*f),o.repeat.set(c*f,u*f),a.repeat.set(c*f,u*f);const h=new fv({color:14342874,transparent:!0,shininess:100}),d=new gf({color:16777215,map:r,reflectivity:50,specularMap:a,transparent:!0}),g=new gf({color:16777215,transparent:!0});this.body.children[0].material[0]=h,this.body.children[0].material[1]=d;for(let v=2;v<this.body.children[0].material.length;v++)this.body.children[0].material[v]=g;this.body.children[0].material[1].color.r=.65,this.body.children[0].material[1].color.g=.4,this.body.children[0].material[1].color.b=.2},Vl=new WeakSet,yv=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.2,.2,.2),Ke(this,Hl,Sv).call(this),this.body.children[0].material[2].color.r=.1,this.body.children[0].material[2].color.g=.1,this.body.children[0].material[2].color.b=.1,this.body.children[0].material[5].color.r=.05,this.body.children[0].material[5].color.g=.05,this.body.children[0].material[5].color.b=.05,this.three.scene.add(this.body)},zl=new WeakSet,Ev=function(){this.three.emitter.addEventListener(Nl.UPDATE.type,()=>{Ke(this,bs,ho).call(this,this.concertLight1),Ke(this,bs,ho).call(this,this.concertLight2),Ke(this,bs,ho).call(this,this.concertLight3),Ke(this,bs,ho).call(this,this.concertLight4),Ke(this,Wo,xf).call(this,this.strobeLight1,50),Ke(this,Wo,xf).call(this,this.strobeLight2,40)})};var Nr=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Nr.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Nr.Bounce.In(t*2)*.5:Nr.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),Er=function(){return performance.now()},Mv=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=Er()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!n;r&&r.update(e,o)===!1&&!n&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),Ms={Linear:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),r=Ms.Utils.Linear;return e<0?r(t[0],t[1],i):e>1?r(t[n],t[n-1],n-i):r(t[s],t[s+1>n?n:s+1],i-s)},Bezier:function(t,e){for(var n=0,i=t.length-1,s=Math.pow,r=Ms.Utils.Bernstein,o=0;o<=i;o++)n+=s(1-e,i-o)*s(e,o)*t[o]*r(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),r=Ms.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(i=n*(1+e))),r(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],i-s)):e<0?t[0]-(r(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(r(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):r(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],i-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=Ms.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,s){var r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}}},Lh=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),Sf=new Mv,jR=function(){function t(e,n){n===void 0&&(n=Sf),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Nr.Linear.None,this._interpolationFunction=Ms.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Lh.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n<0?0:n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=Er()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,s,r){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var f=i[o];if(f.length===0)continue;for(var h=[a],d=0,g=f.length;d<g;d+=1){var v=this._handleRelativeValue(a,f[d]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(v)}u&&(i[o]=h)}if((c==="object"||l)&&a&&!u){n[o]=l?[]:{};var m=a;for(var p in m)n[o][p]=m[p];s[o]=l?[]:{};var f=i[o];if(!this._isDynamic){var S={};for(var p in f)S[p]=f[p];i[o]=f=S}this._setupProperties(m,n[o],f,s[o],r)}else(typeof n[o]>"u"||r)&&(n[o]=a),l||(n[o]*=1),u?s[o]=i[o].slice().reverse():s[o]=n[o]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=Er()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=Er()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=Sf),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Nr.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=Ms.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){var i=this,s;if(e===void 0&&(e=Er()),n===void 0&&(n=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(i._duration===0||a>c)return 1;var m=Math.trunc(a/l),p=a-m*l,S=Math.min(p/i._duration,1);return S===0&&a===i._duration?1:S},f=u(),h=this._easingFunction(f);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,f),this._duration===0||a>=this._duration)if(this._repeat>0){var d=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=d);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*d,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,v=this._chainedTweens.length;g<v;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,s){for(var r in i)if(n[r]!==void 0){var o=n[r]||0,a=i[r],l=Array.isArray(e[r]),c=Array.isArray(a),u=!l&&c;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),$R="23.1.1",YR=Lh.nextId,ii=Sf,KR=ii.getAll.bind(ii),ZR=ii.removeAll.bind(ii),JR=ii.add.bind(ii),QR=ii.remove.bind(ii),eP=ii.update.bind(ii),lo={Easing:Nr,Group:Mv,Interpolation:Ms,now:Er,Sequence:Lh,nextId:YR,Tween:jR,VERSION:$R,getAll:KR,removeAll:ZR,add:JR,remove:QR,update:eP},Xo,yf,Gl,bv,Wl,Tv,Xl,Av,ql,wv,qo,Ef,jl,Cv,$l,Rv,Yl,Pv,Kl,Lv,Zl,Iv;class tP{constructor(){dt(this,Xo);dt(this,Gl);dt(this,Wl);dt(this,Xl);dt(this,ql);dt(this,qo);dt(this,jl);dt(this,$l);dt(this,Yl);dt(this,Kl);dt(this,Zl);Fe(this,"scene");Fe(this,"camera");Fe(this,"renderer");Fe(this,"geometry");Fe(this,"material");Fe(this,"sigil");Fe(this,"concertStage");Fe(this,"pointLight");Fe(this,"dirLight");Fe(this,"mouse");Fe(this,"objManager");Fe(this,"imgManager");Fe(this,"particleMaterials");Fe(this,"emitter");Fe(this,"particleParameters");Fe(this,"os");Fe(this,"object3dArray");Fe(this,"totalFrames");Fe(this,"innerWidthConstant");Fe(this,"yRotationAddFromScroll");Fe(this,"previousScrollY");Fe(this,"currentScrollY");Fe(this,"deltaScrollY");const e=this.isPortrait?85:55;this.scene=new MR,this.camera=new xn(e,this.setupWidth/this.setupHeight,.1,1e3),this.totalFrames=0,this.innerWidthConstant=1,this.renderer=new uv({antialias:!0,precision:"lowp",powerPreference:"low-power"}),this.emitter=new Zs,this.os=WR(),this.geometry=new Kr(1,1,1),this.material=new wh({color:65280}),this.objManager=new VR,this.imgManager=new zR,this.object3dArray=[],this.particleMaterials=[],this.particleParameters=[[[]]],this.yRotationAddFromScroll=0,this.currentScrollY=0,this.previousScrollY=0,this.deltaScrollY=0,this.totalRotationAdded=0,this.init()}get isPortrait(){return this.setupHeight>this.setupWidth}get devicePixelRatio(){return window.devicePixelRatio>2?2:window.devicePixelRatio}get cameraFov(){return(this.isPortrait?85:55)/this.devicePixelRatio}get setupWidth(){return window.innerWidth*this.devicePixelRatio}get setupHeight(){return window.innerHeight*this.devicePixelRatio}async init(){this.preload()}async preload(){console.log("PRODUCTION MODE ENABLED"),await this.objManager.load("sigilObj","../static/3d/sigilObj.obj"),await this.objManager.load("concertStage","../static/3d/concertStage/concertStage.obj"),await this.imgManager.load("grain","../static/3d/textures/grain.webp"),await this.imgManager.load("grain_n","../static/3d/textures/grain_n.webp"),await this.imgManager.load("grain_s","../static/3d/textures/grain_s.webp"),this.create()}get allObjectsAreHidden(){return this.object3dArray.every(e=>!e.body.visible)}hide3dObjects(e,n){this.object3dArray.forEach(i=>{var s;if(i==e){console.log("found same item, excluding",e);return}if(n){i.visible=!1;return}(s=i.opacityTween)==null||s.stop(),i.opacityTween=new lo.Tween(i).to({opacity:0},300).easing(lo.Easing.Quadratic.Out).onComplete(()=>{i.visible=!1}).start()})}async create(){Ke(this,Kl,Lv).call(this),Ke(this,Zl,Iv).call(this),Ke(this,jl,Cv).call(this),Ke(this,Yl,Pv).call(this),Ke(this,$l,Rv).call(this),Ke(this,ql,wv).call(this),Ke(this,Wl,Tv).call(this),this.emitter.dispatchEvent(Nl.CREATE),this.update()}update(){requestAnimationFrame(()=>{this.update()}),this.renderer.render(this.scene,this.camera),Ke(this,Gl,bv).call(this),this.totalFrames++,lo.update(),Ke(this,Xo,yf).call(this,this.sigil.body,3),Ke(this,Xo,yf).call(this,this.concertStage.body,.5),this.emitter.dispatchEvent(Nl.UPDATE)}setConcertStageVisible(){requestAnimationFrame(()=>{if(!this.concertStage){this.setConcertStageVisible();return}if(this.hide3dObjects(this.concertStage),Ke(this,qo,Ef).call(this,this.concertStage),_f()){const e=this.setupWidth/this.setupHeight;if(e<.5){const n=.5-e;let i=n*30;i>.9&&(i=.9);const s=n*5;console.log(i),this.concertStage.setVerticalPosition(i),this.concertStage.body.rotation.x=s}}})}setSigilVisible(){requestAnimationFrame(()=>{if(!this.sigil){this.setSigilVisible();return}if(this.hide3dObjects(this.sigil),Ke(this,qo,Ef).call(this,this.sigil),_f()){const e=this.setupWidth/this.setupHeight;if(e<.5){const n=.5-e;let i=n*30;i>.9&&(i=.9);const s=n*5;console.log(i),this.sigil.body.position.y=i,this.sigil.body.rotation.x=s}}})}}Xo=new WeakSet,yf=function(e,n){const i=this.totalFrames/200,s=Math.sin(i)/10*n,r=Math.sin(i/1.5)/10*n;e.rotation.x=s,e.rotation.y=r},Gl=new WeakSet,bv=function(){Math.abs(this.yRotationAddFromScroll)>0&&(this.yRotationAddFromScroll/=1.8);for(let e=0;e<this.scene.children.length;e++){const n=this.scene.children[e];if(n instanceof Mo){const i=this.totalFrames*(e%2==0?e+1:-(e+1))*5e-5;n.rotation.x=i,n.rotation.y=i}}},Wl=new WeakSet,Tv=function(){window.addEventListener("resize",()=>Ke(this,Xl,Av).call(this))},Xl=new WeakSet,Av=function(){this.camera.aspect=this.setupWidth/this.setupHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.setupWidth,this.setupHeight)},ql=new WeakSet,wv=function(){this.sigil=new GR(this,"sigilObj"),this.concertStage=new qR(this,"concertStage"),this.sigil.opacity=0,this.concertStage.opacity=0,this.object3dArray.push(this.sigil,this.concertStage),this.hide3dObjects()},qo=new WeakSet,Ef=function(e){var n;if(e){if((n=e.opacityTween)==null||n.stop(),e.opacity==null)throw new Error("Element had no opacity vaule to work with");e.opacity!=1&&(e.opacityTween=new lo.Tween(e).to({opacity:1},300).onStart(()=>{e.visible=!0}).delay(this.allObjectsAreHidden?0:300).easing(lo.Easing.Quadratic.Out).start())}},jl=new WeakSet,Cv=function(){this.mouse=new et,document.addEventListener("mousemove",e=>{e.preventDefault(),this.mouse.x=e.clientX/this.setupWidth*2-1,this.mouse.y=-(e.clientY/this.setupHeight)*2+1},!1)},$l=new WeakSet,Rv=async function(){const e=new Nn,n=[],i=l=>{l.colorSpace=_t},s=await this.imgManager.load("spark","../../static/particles/spark.png"),r=await this.imgManager.load("spark","../../static/particles/snowflake.png"),o=new Qi(s);i(o);const a=new Qi(r);i(a);for(let l=0;l<5e3;l++){const c=Math.random()*2e3-1e3,u=Math.random()*2e3-1e3,f=Math.random()*2e3-1e3;n.push(c,u,f)}e.setAttribute("position",new Xt(n,3)),this.particleParameters=[[[.5,.5,.5],a,4],[[.5,.4,.35],o,3.5],[[.5,.5,.45],a,3.2],[[.35,.35,.25],o,3],[[.65,.6,.55],o,2.5]];for(let l=0;l<this.particleParameters.length;l++){const c=this.particleParameters[l][0],u=this.particleParameters[l][1],f=this.particleParameters[l][2];this.particleMaterials[l]=new yr({size:f,map:u,blending:rf,depthTest:!1,transparent:!0}),this.particleMaterials[l].color.setRGB(c[0],c[1],c[2],_t);const h=new Mo(e,this.particleMaterials[l]);h.rotation.x=Math.random()*6,h.rotation.y=Math.random()*6,h.rotation.z=Math.random()*6,this.scene.add(h)}},Yl=new WeakSet,Pv=function(){const e=new IR(16777215,1);this.scene.add(e)},Kl=new WeakSet,Lv=function(){this.renderer.setClearColor(0,0),this.renderer.setSize(this.setupWidth,this.setupHeight);const e=document.getElementById("app");if(e){const n=this.renderer.domElement;n.style.position="absolute",n.style.display="inline-block",n.style.zIndex="-1",n.style.top="0",n.style.left="0",n.style.width="100vw",n.style.height="auto",window.threeDomElement=n,window.three=this,e.appendChild(n)}},Zl=new WeakSet,Iv=function(){this.camera.position.z=5};const nP={beforeMount(){window.three=new tP},methods:{init(){const e=this.$refs.leftTree,n=this.$refs.rightTree;if(e instanceof HTMLImageElement&&n instanceof HTMLImageElement){const i=e.naturalWidth,s=n.naturalWidth;e.style.transform=`translateX(-${i/2}px) scale(${1.5})`,n.style.transform=`translateX(${s/2}px) scale(${1.5})`,window.addEventListener("scroll",function(){let r=window.scrollY||document.documentElement.scrollTop;if(r*=.25,r>150)return;const o=r-i/2,a=-r+s/2;e.style.transform=`translateX(${o}px) scale(${1.5})`,n.style.transform=`translateX(${a}px) scale(${1.5})`})}}},mounted(){this.init()}},Ih=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};function iP(t,e,n,i,s,r){return is(),Qo("div")}const sP=Ih(nP,[["render",iP],["__scopeId","data-v-2ad238fb"]]),rP="/assets/sigil-ambroz-LlSyZkk3.png",Dv="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3espotify%20[%23ffffff]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7479.000000)'%20fill='%23ffffff'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M99.915,7327.865%20C96.692,7325.951%2091.375,7325.775%2088.297,7326.709%20C87.803,7326.858%2087.281,7326.58%2087.131,7326.085%20C86.981,7325.591%2087.26,7325.069%2087.754,7324.919%20C91.287,7323.846%2097.159,7324.053%20100.87,7326.256%20C101.314,7326.52%20101.46,7327.094%20101.196,7327.538%20C100.934,7327.982%20100.358,7328.129%2099.915,7327.865%20L99.915,7327.865%20Z%20M99.81,7330.7%20C99.584,7331.067%2099.104,7331.182%2098.737,7330.957%20C96.05,7329.305%2091.952,7328.827%2088.773,7329.792%20C88.36,7329.916%2087.925,7329.684%2087.8,7329.272%20C87.676,7328.86%2087.908,7328.425%2088.32,7328.3%20C91.951,7327.198%2096.466,7327.732%2099.553,7329.629%20C99.92,7329.854%20100.035,7330.334%2099.81,7330.7%20L99.81,7330.7%20Z%20M98.586,7333.423%20C98.406,7333.717%2098.023,7333.81%2097.729,7333.63%20C95.381,7332.195%2092.425,7331.871%2088.944,7332.666%20C88.609,7332.743%2088.274,7332.533%2088.198,7332.197%20C88.121,7331.862%2088.33,7331.528%2088.667,7331.451%20C92.476,7330.58%2095.743,7330.955%2098.379,7332.566%20C98.673,7332.746%2098.766,7333.129%2098.586,7333.423%20L98.586,7333.423%20Z%20M94,7319%20C88.477,7319%2084,7323.477%2084,7329%20C84,7334.523%2088.477,7339%2094,7339%20C99.523,7339%20104,7334.523%20104,7329%20C104,7323.478%2099.523,7319.001%2094,7319.001%20L94,7319%20Z'%20id='spotify-[%23ffffff]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Nv="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='7935ec95c421cee6d86eb22ecd11b7e3'%3e%3cpath%20style='display:%20inline;'%20d='M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379%20c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302%20c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263%20l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Uv="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20169.063%20169.063'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752%20c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z%20M154.063,122.407%20c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752%20c17.455,0,31.656,14.201,31.656,31.655V122.407z'/%3e%3cpath%20d='M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561%20C128.094,60.512,108.552,40.97,84.531,40.97z%20M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561%20c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z'/%3e%3cpath%20d='M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78%20c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78%20C135.661,29.421,132.821,28.251,129.921,28.251z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ov="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.49614%207.13176C9.18664%206.9549%208.80639%206.95617%208.49807%207.13509C8.18976%207.31401%208%207.64353%208%208V16C8%2016.3565%208.18976%2016.686%208.49807%2016.8649C8.80639%2017.0438%209.18664%2017.0451%209.49614%2016.8682L16.4961%2012.8682C16.8077%2012.6902%2017%2012.3589%2017%2012C17%2011.6411%2016.8077%2011.3098%2016.4961%2011.1318L9.49614%207.13176ZM13.9844%2012L10%2014.2768V9.72318L13.9844%2012Z'%20fill='%23ffffff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2012C0%208.25027%200%206.3754%200.954915%205.06107C1.26331%204.6366%201.6366%204.26331%202.06107%203.95491C3.3754%203%205.25027%203%209%203H15C18.7497%203%2020.6246%203%2021.9389%203.95491C22.3634%204.26331%2022.7367%204.6366%2023.0451%205.06107C24%206.3754%2024%208.25027%2024%2012C24%2015.7497%2024%2017.6246%2023.0451%2018.9389C22.7367%2019.3634%2022.3634%2019.7367%2021.9389%2020.0451C20.6246%2021%2018.7497%2021%2015%2021H9C5.25027%2021%203.3754%2021%202.06107%2020.0451C1.6366%2019.7367%201.26331%2019.3634%200.954915%2018.9389C0%2017.6246%200%2015.7497%200%2012ZM9%205H15C16.9194%205%2018.1983%205.00275%2019.1673%205.10773C20.0989%205.20866%2020.504%205.38448%2020.7634%205.57295C21.018%205.75799%2021.242%205.98196%2021.4271%206.23664C21.6155%206.49605%2021.7913%206.90113%2021.8923%207.83269C21.9973%208.80167%2022%2010.0806%2022%2012C22%2013.9194%2021.9973%2015.1983%2021.8923%2016.1673C21.7913%2017.0989%2021.6155%2017.504%2021.4271%2017.7634C21.242%2018.018%2021.018%2018.242%2020.7634%2018.4271C20.504%2018.6155%2020.0989%2018.7913%2019.1673%2018.8923C18.1983%2018.9973%2016.9194%2019%2015%2019H9C7.08058%2019%205.80167%2018.9973%204.83269%2018.8923C3.90113%2018.7913%203.49605%2018.6155%203.23664%2018.4271C2.98196%2018.242%202.75799%2018.018%202.57295%2017.7634C2.38448%2017.504%202.20866%2017.0989%202.10773%2016.1673C2.00275%2015.1983%202%2013.9194%202%2012C2%2010.0806%202.00275%208.80167%202.10773%207.83269C2.20866%206.90113%202.38448%206.49605%202.57295%206.23664C2.75799%205.98196%202.98196%205.75799%203.23664%205.57295C3.49605%205.38448%203.90113%205.20866%204.83269%205.10773C5.80167%205.00275%207.08058%205%209%205Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",oP=t=>(yg("data-v-7f62dd1b"),t=t(),Eg(),t),aP={class:"navbar-section-left"},lP=oP(()=>$i("img",{src:rP,alt:"",height:"110px",class:"sigil-image"},null,-1)),cP={class:"navbar-section-center non-sigil-elements"},uP=Yf('<div class="navbar-section-right" data-v-7f62dd1b><a href="https://open.spotify.com/artist/6qQ9WpaSYq45nO9O4kJrVM" target="_blank" class="navbar-element" data-v-7f62dd1b><img src="'+Dv+'" alt="" class="navbar-icon" data-v-7f62dd1b></a><a href="https://www.facebook.com/ambrozmkd" target="_blank" class="navbar-element" data-v-7f62dd1b><img src="'+Nv+'" alt="" class="navbar-icon" data-v-7f62dd1b></a><a href="https://www.instagram.com/ambroz.mkd/" target="_blank" class="navbar-element" data-v-7f62dd1b><img src="'+Uv+'" alt="" class="navbar-icon" data-v-7f62dd1b></a><a href="https://www.youtube.com/@AmbrozMKDband" target="_blank" class="navbar-element" data-v-7f62dd1b><img src="'+Ov+'" alt="" class="navbar-icon" data-v-7f62dd1b></a></div>',1),fP={methods:{isRouteActive(t){return this.$route.path==t}}},hP=Ks({...fP,__name:"NavbarAmbroz",setup(t){return(e,n)=>(is(),Qo("body",null,[$i("nav",null,[$i("div",aP,[Qe(an(vr),{to:"/",class:Zn((e.isRouteActive("/")?"navbar-element__active":"navbar-element__inactive")+" sigil-element")},{default:Wi(()=>[lP]),_:1},8,["class"])]),$i("div",cP,[Qe(an(vr),{to:"/about",class:Zn((e.isRouteActive("/about")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Wi(()=>[Ss(" ABOUT ")]),_:1},8,["class"]),Qe(an(vr),{to:"/discography",class:Zn((e.isRouteActive("/discography")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Wi(()=>[Ss(" DISCOGRAPHY ")]),_:1},8,["class"]),Qe(an(vr),{to:"/gallery",class:Zn((e.isRouteActive("/gallery")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Wi(()=>[Ss(" GALLERY")]),_:1},8,["class"]),Qe(an(vr),{to:"/store",class:Zn((e.isRouteActive("/store")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Wi(()=>[Ss(" STORE")]),_:1},8,["class"])]),uP])]))}}),dP=Ih(hP,[["__scopeId","data-v-7f62dd1b"]]),pP={},mP=Yf('<div class="footer-section-top" data-v-f2c90091><hr data-v-f2c90091></div><div class="footer-section-center" data-v-f2c90091><a href="https://open.spotify.com/artist/6qQ9WpaSYq45nO9O4kJrVM" target="_blank" class="footer-element" data-v-f2c90091><img src="'+Dv+'" alt="" class="footer-icon" data-v-f2c90091></a><a href="https://www.facebook.com/ambrozmkd" target="_blank" class="footer-element" data-v-f2c90091><img src="'+Nv+'" alt="" class="footer-icon" data-v-f2c90091></a><a href="https://www.instagram.com/ambroz.mkd/" target="_blank" class="footer-element" data-v-f2c90091><img src="'+Uv+'" alt="" class="footer-icon" data-v-f2c90091></a><a href="https://www.youtube.com/@AmbrozMKDband" target="_blank" class="footer-element" data-v-f2c90091><img src="'+Ov+'" alt="" class="footer-icon" data-v-f2c90091></a></div><div class="footer-section-bottom" data-v-f2c90091><p data-v-f2c90091><small data-v-f2c90091>Ambroz © 2024. All rights reserved.</small></p></div>',3),gP=[mP];function _P(t,e){return is(),Qo("footer",null,gP)}const vP=Ih(pP,[["render",_P],["__scopeId","data-v-f2c90091"]]),xP=Ks({__name:"App",setup(t){return(e,n)=>(is(),Qo(Ot,null,[Qe(sP),$i("div",null,[Qe(dP),Qe(an(N0)),Qe(vP)])],64))}});console.log("ROUTER BASE URL","/");const Fv=pT({history:Ib("/basho123.github.io/"),routes:[{path:"/",name:"Home",component:()=>mr(()=>import("./HomepageView-EOM69U2W.js"),__vite__mapDeps([0,1]))},{path:"/contact",name:"contact",component:()=>mr(()=>import("./ContactPageView-SIXU4vjT.js"),__vite__mapDeps([2,3]))},{path:"/gallery",name:"Gallery",component:()=>mr(()=>import("./GalleryAmbrozView-gSmBypGH.js"),__vite__mapDeps([4,5]))},{path:"/about",name:"About",component:()=>mr(()=>import("./AboutUsView-NR2YYLe4.js"),__vite__mapDeps([6,7]))},{path:"/discography",name:"Discography",component:()=>mr(()=>import("./DiscographyAmbrozView-O4fxjkHT.js"),__vite__mapDeps([8,9]))},{path:"/store",name:"Store",component:()=>mr(()=>import("./StoreAmbrozView-tsLotyq0.js"),__vite__mapDeps([10,11]))}]});Fv.beforeEach((t,e,n)=>{document.title=`Ambroz · ${t.name}`,n()});console.log("Ambroz Forever!!!"),console.log=()=>{};const Bv=N_(xP);Bv.use(Fv);Bv.mount("#app");export{Nl as E,Ot as F,Ih as _,$i as a,Eg as b,Qo as c,Ks as d,Qe as e,mr as f,pS as g,$f as h,xy as i,Zn as n,is as o,yg as p,IS as r,gx as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomepageView-EOM69U2W.js","assets/HomepageView-jikTsyEg.css","assets/ContactPageView-SIXU4vjT.js","assets/ContactPageView-8zomdNb_.css","assets/GalleryAmbrozView-gSmBypGH.js","assets/GalleryAmbrozView-DmraHUbW.css","assets/AboutUsView-NR2YYLe4.js","assets/AboutUsView-GhKcfZwe.css","assets/DiscographyAmbrozView-O4fxjkHT.js","assets/DiscographyAmbrozView-gz5FMzHl.css","assets/StoreAmbrozView-tsLotyq0.js","assets/StoreAmbrozView-2I0Fpq3k.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
