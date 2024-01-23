var Sx=Object.defineProperty;var Mx=(t,e,n)=>e in t?Sx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Me=(t,e,n)=>(Mx(t,typeof e!="symbol"?e+"":e,n),n),Ex=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var Re=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var pe=(t,e,n)=>(Ex(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bn(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const st={},Ir=[],Lt=()=>{},pl=()=>!1,Js=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yh=t=>t.startsWith("onUpdate:"),it=Object.assign,xh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bx=Object.prototype.hasOwnProperty,nt=(t,e)=>bx.call(t,e),be=Array.isArray,Dr=t=>so(t)==="[object Map]",Qs=t=>so(t)==="[object Set]",Fd=t=>so(t)==="[object Date]",Tx=t=>so(t)==="[object RegExp]",Ue=t=>typeof t=="function",He=t=>typeof t=="string",jn=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",Sh=t=>(at(t)||Ue(t))&&Ue(t.then)&&Ue(t.catch),zg=Object.prototype.toString,so=t=>zg.call(t),wx=t=>so(t).slice(8,-1),Gg=t=>so(t)==="[object Object]",Mh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ax=bn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),jc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cx=/-(\w)/g,Mt=jc(t=>t.replace(Cx,(e,n)=>n?n.toUpperCase():"")),Rx=/\B([A-Z])/g,Sn=jc(t=>t.replace(Rx,"-$1").toLowerCase()),er=jc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nr=jc(t=>t?`on${er(t)}`:""),$n=(t,e)=>!Object.is(t,e),Ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},El=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bl=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let Bd;const Wg=()=>Bd||(Bd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Px="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Lx=bn(Px);function la(t){if(be(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=He(i)?Xg(i):la(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(He(t)||at(t))return t}const Ix=/;(?![^(]*\))/g,Dx=/:([^]+)/,Nx=/\/\*[^]*?\*\//g;function Xg(t){const e={};return t.replace(Nx,"").split(Ix).forEach(n=>{if(n){const i=n.split(Dx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Qn(t){let e="";if(He(t))e=t;else if(be(t))for(let n=0;n<t.length;n++){const i=Qn(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ux(t){if(!t)return null;let{class:e,style:n}=t;return e&&!He(e)&&(t.class=Qn(e)),n&&(t.style=la(n)),t}const Ox="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Fx="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Bx="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",kx="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Vx=bn(Ox),Hx=bn(Fx),zx=bn(Bx),Gx=bn(kx),Wx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xx=bn(Wx);function qg(t){return!!t||t===""}function qx(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=wi(t[i],e[i]);return n}function wi(t,e){if(t===e)return!0;let n=Fd(t),i=Fd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=jn(t),i=jn(e),n||i)return t===e;if(n=be(t),i=be(e),n||i)return n&&i?qx(t,e):!1;if(n=at(t),i=at(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!wi(t[o],e[o]))return!1}}return String(t)===String(e)}function $c(t,e){return t.findIndex(n=>wi(n,e))}const jx=t=>He(t)?t:t==null?"":be(t)||at(t)&&(t.toString===zg||!Ue(t.toString))?JSON.stringify(t,jg,2):String(t),jg=(t,e)=>e&&e.__v_isRef?jg(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Au(i,r)+" =>"]=s,n),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Au(n))}:jn(e)?Au(e):at(e)&&!be(e)&&!Gg(e)?String(e):e,Au=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _n;class Eh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_n;try{return _n=this,e()}finally{_n=n}}}on(){_n=this}off(){_n=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $x(t){return new Eh(t)}function $g(t,e=_n){e&&e.active&&e.effects.push(t)}function Yg(){return _n}function Yx(t){_n&&_n.cleanups.push(t)}let Is;class Wr{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,$g(this,s)}get dirty(){if(this._dirtyLevel===1){tr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Kx(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),nr()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=es,n=Is;try{return es=!0,Is=this,this._runnings++,kd(this),this.fn()}finally{Vd(this),this._runnings--,Is=n,es=e}}stop(){var e;this.active&&(kd(this),Vd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Kx(t){return t.value}function kd(t){t._trackId++,t._depsLength=0}function Vd(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Kg(t.deps[e],t);t.deps.length=t._depsLength}}function Kg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function Zx(t,e){t.effect instanceof Wr&&(t=t.effect.fn);const n=new Wr(t,Lt,()=>{n.dirty&&n.run()});e&&(it(n,e),e.scope&&$g(n,e.scope)),(!e||!e.lazy)&&n.run();const i=n.run.bind(n);return i.effect=n,i}function Jx(t){t.effect.stop()}let es=!0,bf=0;const Zg=[];function tr(){Zg.push(es),es=!1}function nr(){const t=Zg.pop();es=t===void 0?!0:t}function bh(){bf++}function Th(){for(bf--;!bf&&Tf.length;)Tf.shift()()}function Jg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Kg(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Tf=[];function Qg(t,e,n){bh();for(const i of t.keys())if(i._dirtyLevel<e&&t.get(i)===i._trackId){const s=i._dirtyLevel;i._dirtyLevel=e,s===0&&(i._shouldSchedule=!0,i.trigger())}e_(t),Th()}function e_(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,Tf.push(e.scheduler))}const t_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Tl=new WeakMap,Ds=Symbol(""),wf=Symbol("");function dn(t,e,n){if(es&&Is){let i=Tl.get(t);i||Tl.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=t_(()=>i.delete(n))),Jg(Is,s)}}function bi(t,e,n,i,s,r){const o=Tl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&be(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!jn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":be(t)?Mh(n)&&a.push(o.get("length")):(a.push(o.get(Ds)),Dr(t)&&a.push(o.get(wf)));break;case"delete":be(t)||(a.push(o.get(Ds)),Dr(t)&&a.push(o.get(wf)));break;case"set":Dr(t)&&a.push(o.get(Ds));break}bh();for(const l of a)l&&Qg(l,2);Th()}function Qx(t,e){var n;return(n=Tl.get(t))==null?void 0:n.get(e)}const eS=bn("__proto__,__v_isRef,__isVue"),n_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),Hd=tS();function tS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Qe(this);for(let r=0,o=this.length;r<o;r++)dn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Qe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tr(),bh();const i=Qe(this)[e].apply(this,n);return Th(),nr(),i}}),t}function nS(t){const e=Qe(this);return dn(e,"has",t),e.hasOwnProperty(t)}class i_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?c_:l_:r?a_:o_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=be(e);if(!s){if(o&&nt(Hd,n))return Reflect.get(Hd,n,i);if(n==="hasOwnProperty")return nS}const a=Reflect.get(e,n,i);return(jn(n)?n_.has(n):eS(n))||(s||dn(e,"get",n),r)?a:zt(a)?o&&Mh(n)?a:a.value:at(a)?s?Ch(a):ca(a):a}}class s_ extends i_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._shallow){const l=zs(r);if(!Bo(i)&&!zs(i)&&(r=Qe(r),i=Qe(i)),!be(e)&&zt(r)&&!zt(i))return l?!1:(r.value=i,!0)}const o=be(e)&&Mh(n)?Number(n)<e.length:nt(e,n),a=Reflect.set(e,n,i,s);return e===Qe(s)&&(o?$n(i,r)&&bi(e,"set",n,i):bi(e,"add",n,i)),a}deleteProperty(e,n){const i=nt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&bi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!jn(n)||!n_.has(n))&&dn(e,"has",n),i}ownKeys(e){return dn(e,"iterate",be(e)?"length":Ds),Reflect.ownKeys(e)}}class r_ extends i_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const iS=new s_,sS=new r_,rS=new s_(!0),oS=new r_(!0),wh=t=>t,Yc=t=>Reflect.getPrototypeOf(t);function Aa(t,e,n=!1,i=!1){t=t.__v_raw;const s=Qe(t),r=Qe(e);n||($n(e,r)&&dn(s,"get",e),dn(s,"get",r));const{has:o}=Yc(s),a=i?wh:n?Lh:ko;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ca(t,e=!1){const n=this.__v_raw,i=Qe(n),s=Qe(t);return e||($n(t,s)&&dn(i,"has",t),dn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ra(t,e=!1){return t=t.__v_raw,!e&&dn(Qe(t),"iterate",Ds),Reflect.get(t,"size",t)}function zd(t){t=Qe(t);const e=Qe(this);return Yc(e).has.call(e,t)||(e.add(t),bi(e,"add",t,t)),this}function Gd(t,e){e=Qe(e);const n=Qe(this),{has:i,get:s}=Yc(n);let r=i.call(n,t);r||(t=Qe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?$n(e,o)&&bi(n,"set",t,e):bi(n,"add",t,e),this}function Wd(t){const e=Qe(this),{has:n,get:i}=Yc(e);let s=n.call(e,t);s||(t=Qe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&bi(e,"delete",t,void 0),r}function Xd(){const t=Qe(this),e=t.size!==0,n=t.clear();return e&&bi(t,"clear",void 0,void 0),n}function Pa(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Qe(o),l=e?wh:t?Lh:ko;return!t&&dn(a,"iterate",Ds),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function La(t,e,n){return function(...i){const s=this.__v_raw,r=Qe(s),o=Dr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?wh:e?Lh:ko;return!e&&dn(r,"iterate",l?wf:Ds),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function aS(){const t={get(r){return Aa(this,r)},get size(){return Ra(this)},has:Ca,add:zd,set:Gd,delete:Wd,clear:Xd,forEach:Pa(!1,!1)},e={get(r){return Aa(this,r,!1,!0)},get size(){return Ra(this)},has:Ca,add:zd,set:Gd,delete:Wd,clear:Xd,forEach:Pa(!1,!0)},n={get(r){return Aa(this,r,!0)},get size(){return Ra(this,!0)},has(r){return Ca.call(this,r,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:Pa(!0,!1)},i={get(r){return Aa(this,r,!0,!0)},get size(){return Ra(this,!0)},has(r){return Ca.call(this,r,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:Pa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=La(r,!1,!1),n[r]=La(r,!0,!1),e[r]=La(r,!1,!0),i[r]=La(r,!0,!0)}),[t,n,e,i]}const[lS,cS,uS,fS]=aS();function Kc(t,e){const n=e?t?fS:uS:t?cS:lS;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(nt(n,s)&&s in i?n:i,s,r)}const hS={get:Kc(!1,!1)},dS={get:Kc(!1,!0)},pS={get:Kc(!0,!1)},mS={get:Kc(!0,!0)},o_=new WeakMap,a_=new WeakMap,l_=new WeakMap,c_=new WeakMap;function gS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _S(t){return t.__v_skip||!Object.isExtensible(t)?0:gS(wx(t))}function ca(t){return zs(t)?t:Zc(t,!1,iS,hS,o_)}function Ah(t){return Zc(t,!1,rS,dS,a_)}function Ch(t){return Zc(t,!0,sS,pS,l_)}function vS(t){return Zc(t,!0,oS,mS,c_)}function Zc(t,e,n,i,s){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=_S(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ns(t){return zs(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function zs(t){return!!(t&&t.__v_isReadonly)}function Bo(t){return!!(t&&t.__v_isShallow)}function Rh(t){return Ns(t)||zs(t)}function Qe(t){const e=t&&t.__v_raw;return e?Qe(e):t}function Ph(t){return El(t,"__v_skip",!0),t}const ko=t=>at(t)?ca(t):t,Lh=t=>at(t)?Ch(t):t;class u_{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wr(()=>e(this._value),()=>Or(this,1),()=>this.dep&&e_(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Qe(this);return(!e._cacheable||e.effect.dirty)&&$n(e._value,e._value=e.effect.run())&&Or(e,2),Ih(e),e.effect._dirtyLevel>=1&&Or(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function yS(t,e,n=!1){let i,s;const r=Ue(t);return r?(i=t,s=Lt):(i=t.get,s=t.set),new u_(i,s,r||!s,n)}function Ih(t){es&&Is&&(t=Qe(t),Jg(Is,t.dep||(t.dep=t_(()=>t.dep=void 0,t instanceof u_?t:void 0))))}function Or(t,e=2,n){t=Qe(t);const i=t.dep;i&&Qg(i,e)}function zt(t){return!!(t&&t.__v_isRef===!0)}function Fr(t){return h_(t,!1)}function f_(t){return h_(t,!0)}function h_(t,e){return zt(t)?t:new xS(t,e)}class xS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Qe(e),this._value=n?e:ko(e)}get value(){return Ih(this),this._value}set value(e){const n=this.__v_isShallow||Bo(e)||zs(e);e=n?e:Qe(e),$n(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ko(e),Or(this,2))}}function SS(t){Or(t,2)}function Mn(t){return zt(t)?t.value:t}function MS(t){return Ue(t)?t():Mn(t)}const ES={get:(t,e,n)=>Mn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return zt(s)&&!zt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Dh(t){return Ns(t)?t:new Proxy(t,ES)}class bS{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=e(()=>Ih(this),()=>Or(this));this._get=n,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function d_(t){return new bS(t)}function TS(t){const e=be(t)?new Array(t.length):{};for(const n in t)e[n]=p_(t,n);return e}class wS{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qx(Qe(this._object),this._key)}}class AS{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function CS(t,e,n){return zt(t)?t:Ue(t)?new AS(t):at(t)&&arguments.length>1?p_(t,e,n):Fr(t)}function p_(t,e,n){const i=t[e];return zt(i)?i:new wS(t,e,n)}const RS={GET:"get",HAS:"has",ITERATE:"iterate"},PS={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function LS(t,e){}const IS={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},DS={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Ti(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){ir(r,e,n)}return s}function En(t,e,n,i){if(Ue(t)){const r=Ti(t,e,n,i);return r&&Sh(r)&&r.catch(o=>{ir(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(En(t[r],e,n,i));return s}function ir(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ti(l,null,10,[t,o,a]);return}}NS(t,n,s,i)}function NS(t,e,n,i=!0){console.error(t)}let Vo=!1,Af=!1;const Yt=[];let ei=0;const Br=[];let Gi=null,xs=0;const m_=Promise.resolve();let Nh=null;function ua(t){const e=Nh||m_;return t?e.then(this?t.bind(this):t):e}function US(t){let e=ei+1,n=Yt.length;for(;e<n;){const i=e+n>>>1,s=Yt[i],r=Ho(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function Jc(t){(!Yt.length||!Yt.includes(t,Vo&&t.allowRecurse?ei+1:ei))&&(t.id==null?Yt.push(t):Yt.splice(US(t.id),0,t),g_())}function g_(){!Vo&&!Af&&(Af=!0,Nh=m_.then(__))}function OS(t){const e=Yt.indexOf(t);e>ei&&Yt.splice(e,1)}function wl(t){be(t)?Br.push(...t):(!Gi||!Gi.includes(t,t.allowRecurse?xs+1:xs))&&Br.push(t),g_()}function qd(t,e,n=Vo?ei+1:0){for(;n<Yt.length;n++){const i=Yt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Yt.splice(n,1),n--,i()}}}function Al(t){if(Br.length){const e=[...new Set(Br)].sort((n,i)=>Ho(n)-Ho(i));if(Br.length=0,Gi){Gi.push(...e);return}for(Gi=e,xs=0;xs<Gi.length;xs++)Gi[xs]();Gi=null,xs=0}}const Ho=t=>t.id==null?1/0:t.id,FS=(t,e)=>{const n=Ho(t)-Ho(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function __(t){Af=!1,Vo=!0,Yt.sort(FS);try{for(ei=0;ei<Yt.length;ei++){const e=Yt[ei];e&&e.active!==!1&&Ti(e,null,14)}}finally{ei=0,Yt.length=0,Al(),Vo=!1,Nh=null,(Yt.length||Br.length)&&__()}}let Er,Ia=[];function v_(t,e){var n,i;Er=t,Er?(Er.enabled=!0,Ia.forEach(({event:s,args:r})=>Er.emit(s,...r)),Ia=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{v_(r,e)}),setTimeout(()=>{Er||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ia=[])},3e3)):Ia=[]}function BS(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||st;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||st;h&&(s=n.map(d=>He(d)?d.trim():d)),f&&(s=n.map(Fo))}let a,l=i[a=Nr(e)]||i[a=Nr(Mt(e))];!l&&r&&(l=i[a=Nr(Sn(e))]),l&&En(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,En(c,t,6,s)}}function y_(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ue(t)){const l=c=>{const u=y_(c,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(at(t)&&i.set(t,null),null):(be(r)?r.forEach(l=>o[l]=null):it(o,r),at(t)&&i.set(t,o),o)}function Qc(t,e){return!t||!Js(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,Sn(e))||nt(t,e))}let At=null,eu=null;function zo(t){const e=At;return At=t,eu=t&&t.type.__scopeId||null,e}function Uh(t){eu=t}function Oh(){eu=null}const kS=t=>Yi;function Yi(t,e=At,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Uf(-1);const r=zo(e);let o;try{o=t(...s)}finally{zo(r),i._d&&Uf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ml(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=t;let m,p;const x=zo(t);try{if(n.shapeFlag&4){const E=s||i,w=E;m=yn(u.call(w,E,f,r,d,h,g)),p=l}else{const E=e;m=yn(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),p=e.props?l:HS(l)}}catch(E){Po.length=0,ir(E,t,1),m=tt(Kt)}let _=m;if(p&&v!==!1){const E=Object.keys(p),{shapeFlag:w}=_;E.length&&w&7&&(o&&E.some(yh)&&(p=zS(p,o)),_=si(_,p))}return n.dirs&&(_=si(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,zo(x),m}function VS(t,e=!0){let n;for(let i=0;i<t.length;i++){const s=t[i];if(rs(s)){if(s.type!==Kt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const HS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Js(n))&&((e||(e={}))[n]=t[n]);return e},zS=(t,e)=>{const n={};for(const i in t)(!yh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function GS(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?jd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Qc(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?jd(i,o,c):!0:!!o;return!1}function jd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Qc(n,r))return!0}return!1}function Fh({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bh="components",WS="directives";function xo(t,e){return kh(Bh,t,!0,e)||t}const x_=Symbol.for("v-ndc");function XS(t){return He(t)?kh(Bh,t,!1)||t:t||x_}function qS(t){return kh(WS,t)}function kh(t,e,n=!0,i=!1){const s=At||Pt;if(s){const r=s.type;if(t===Bh){const a=Vf(r,!1);if(a&&(a===e||a===Mt(e)||a===er(Mt(e))))return r}const o=$d(s[t]||r[t],e)||$d(s.appContext[t],e);return!o&&i?r:o}}function $d(t,e){return t&&(t[e]||t[Mt(e)]||t[er(Mt(e))])}const S_=t=>t.__isSuspense;let Cf=0;const jS={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){if(t==null)YS(e,n,i,s,r,o,a,l,c);else{if(r&&r.deps>0){e.suspense=t.suspense;return}KS(t,e,n,i,s,o,a,l,c)}},hydrate:ZS,create:Vh,normalize:JS},$S=jS;function Go(t,e){const n=t.props&&t.props[e];Ue(n)&&n()}function YS(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Vh(t,s,i,e,f,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,r,o),h.deps>0?(Go(t,"onPending"),Go(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),kr(h,t.ssFallback)):h.resolve(!1,!0)}function KS(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:p}=f;if(v)f.pendingBranch=h,Gn(h,v)?(l(v,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,d,n,i,s,null,r,o,a),kr(f,d)))):(f.pendingId=Cf++,p?(f.isHydrating=!1,f.activeBranch=v):c(v,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():(l(g,d,n,i,s,null,r,o,a),kr(f,d))):g&&Gn(h,g)?(l(g,h,n,i,s,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(g&&Gn(h,g))l(g,h,n,i,s,f,r,o,a),kr(f,h);else if(Go(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Cf++,l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:x,pendingId:_}=f;x>0?setTimeout(()=>{f.pendingId===_&&f.fallback(d)},x):x===0&&f.fallback(d)}}function Vh(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:v,remove:m}}=c;let p;const x=QS(t);x&&e!=null&&e.pendingBranch&&(p=e.pendingId,e.deps++);const _=t.props?bl(t.props.timeout):void 0,E=r,w={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:Cf++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,C=!1){const{vnode:L,activeBranch:S,pendingBranch:M,pendingId:N,effects:O,parentComponent:$,container:I}=w;let H=!1;w.isHydrating?w.isHydrating=!1:T||(H=S&&M.transition&&M.transition.mode==="out-in",H&&(S.transition.afterLeave=()=>{N===w.pendingId&&(h(M,I,r===E?g(S):r,0),wl(O))}),S&&(v(S.el)!==w.hiddenContainer&&(r=g(S)),d(S,$,w,!0)),H||h(M,I,r,0)),kr(w,M),w.pendingBranch=null,w.isInFallback=!1;let V=w.parent,Y=!1;for(;V;){if(V.pendingBranch){V.effects.push(...O),Y=!0;break}V=V.parent}!Y&&!H&&wl(O),w.effects=[],x&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Go(L,"onResolve")},fallback(T){if(!w.pendingBranch)return;const{vnode:C,activeBranch:L,parentComponent:S,container:M,namespace:N}=w;Go(C,"onFallback");const O=g(L),$=()=>{w.isInFallback&&(f(null,T,M,O,S,null,N,a,l),kr(w,T))},I=T.transition&&T.transition.mode==="out-in";I&&(L.transition.afterLeave=$),w.isInFallback=!0,d(L,S,null,!0),I||$()},move(T,C,L){w.activeBranch&&h(w.activeBranch,T,C,L),w.container=T},next(){return w.activeBranch&&g(w.activeBranch)},registerDep(T,C){const L=!!w.pendingBranch;L&&w.deps++;const S=T.vnode.el;T.asyncDep.catch(M=>{ir(M,T,0)}).then(M=>{if(T.isUnmounted||w.isUnmounted||w.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:N}=T;Bf(T,M,!1),S&&(N.el=S);const O=!S&&T.subTree.el;C(T,N,v(S||T.subTree.el),S?null:g(T.subTree),w,o,l),O&&m(O),Fh(T,N.el),L&&--w.deps===0&&w.resolve()})},unmount(T,C){w.isUnmounted=!0,w.activeBranch&&d(w.activeBranch,n,T,C),w.pendingBranch&&d(w.pendingBranch,n,T,C)}};return w}function ZS(t,e,n,i,s,r,o,a,l){const c=e.suspense=Vh(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function JS(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Yd(i?n.default:n),t.ssFallback=i?Yd(n.fallback):tt(Kt)}function Yd(t){let e;if(Ue(t)){const n=Xs&&t._c;n&&(t._d=!1,as()),t=t(),n&&(t._d=!0,e=un,e0())}return be(t)&&(t=VS(t)),t=yn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function M_(t,e){e&&e.pendingBranch?be(t)?e.effects.push(...t):e.effects.push(t):wl(t)}function kr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,Fh(i,s))}function QS(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const E_=Symbol.for("v-scx"),b_=()=>ti(E_);function eM(t,e){return fa(t,null,e)}function T_(t,e){return fa(t,null,{flush:"post"})}function w_(t,e){return fa(t,null,{flush:"sync"})}const Da={};function Vr(t,e,n){return fa(t,e,n)}function fa(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=st){if(e&&r){const T=e;e=(...C)=>{T(...C),w()}}const l=Pt,c=T=>i===!0?T:Es(T,i===!1?1:void 0);let u,f=!1,h=!1;if(zt(t)?(u=()=>t.value,f=Bo(t)):Ns(t)?(u=()=>c(t),f=!0):be(t)?(h=!0,f=t.some(T=>Ns(T)||Bo(T)),u=()=>t.map(T=>{if(zt(T))return T.value;if(Ns(T))return c(T);if(Ue(T))return Ti(T,l,2)})):Ue(t)?e?u=()=>Ti(t,l,2):u=()=>(d&&d(),En(t,l,3,[g])):u=Lt,e&&i){const T=u;u=()=>Es(T())}let d,g=T=>{d=_.onStop=()=>{Ti(T,l,4),d=_.onStop=void 0}},v;if(ma)if(g=Lt,e?n&&En(e,l,3,[u(),h?[]:void 0,g]):u(),s==="sync"){const T=b_();v=T.__watcherHandles||(T.__watcherHandles=[])}else return Lt;let m=h?new Array(t.length).fill(Da):Da;const p=()=>{if(!(!_.active||!_.dirty))if(e){const T=_.run();(i||f||(h?T.some((C,L)=>$n(C,m[L])):$n(T,m)))&&(d&&d(),En(e,l,3,[T,m===Da?void 0:h&&m[0]===Da?[]:m,g]),m=T)}else _.run()};p.allowRecurse=!!e;let x;s==="sync"?x=p:s==="post"?x=()=>Ht(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),x=()=>Jc(p));const _=new Wr(u,Lt,x),E=Yg(),w=()=>{_.stop(),E&&xh(E.effects,_)};return e?n?p():m=_.run():s==="post"?Ht(_.run.bind(_),l&&l.suspense):_.run(),v&&v.push(w),w}function tM(t,e,n){const i=this.proxy,s=He(t)?t.includes(".")?A_(i,t):()=>i[t]:t.bind(i,i);let r;Ue(e)?r=e:(r=e.handler,n=e);const o=qs(this),a=fa(s,r.bind(i),n);return o(),a}function A_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Es(t,e,n=0,i){if(!at(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),zt(t))Es(t.value,e,n,i);else if(be(t))for(let s=0;s<t.length;s++)Es(t[s],e,n,i);else if(Qs(t)||Dr(t))t.forEach(s=>{Es(s,e,n,i)});else if(Gg(t))for(const s in t)Es(t[s],e,n,i);return t}function nM(t,e){if(At===null)return t;const n=au(At)||At.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=st]=e[s];r&&(Ue(r)&&(r={mounted:r,updated:r}),r.deep&&Es(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Zn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(tr(),En(l,n,8,[t.el,a,t,e]),nr())}}const Wi=Symbol("_leaveCb"),Na=Symbol("_enterCb");function Hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return da(()=>{t.isMounted=!0}),su(()=>{t.isUnmounting=!0}),t}const An=[Function,Array],zh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},iM={name:"BaseTransition",props:zh,setup(t,{slots:e}){const n=Pi(),i=Hh();let s;return()=>{const r=e.default&&tu(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==Kt){o=v;break}}const a=Qe(t),{mode:l}=a;if(i.isLeaving)return Cu(o);const c=Kd(o);if(!c)return Cu(o);const u=Xr(c,a,i,n);Gs(c,u);const f=n.subTree,h=f&&Kd(f);let d=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,d=!0)}if(h&&h.type!==Kt&&(!Gn(c,h)||d)){const v=Xr(h,a,i,n);if(Gs(h,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Cu(o);l==="in-out"&&c.type!==Kt&&(v.delayLeave=(m,p,x)=>{const _=R_(i,h);_[String(h.key)]=h,m[Wi]=()=>{p(),m[Wi]=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},C_=iM;function R_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Xr(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:p,onAppearCancelled:x}=e,_=String(t.key),E=R_(n,t),w=(L,S)=>{L&&En(L,i,9,S)},T=(L,S)=>{const M=S[1];w(L,S),be(L)?L.every(N=>N.length<=1)&&M():L.length<=1&&M()},C={mode:r,persisted:o,beforeEnter(L){let S=a;if(!n.isMounted)if(s)S=v||a;else return;L[Wi]&&L[Wi](!0);const M=E[_];M&&Gn(t,M)&&M.el[Wi]&&M.el[Wi](),w(S,[L])},enter(L){let S=l,M=c,N=u;if(!n.isMounted)if(s)S=m||l,M=p||c,N=x||u;else return;let O=!1;const $=L[Na]=I=>{O||(O=!0,I?w(N,[L]):w(M,[L]),C.delayedLeave&&C.delayedLeave(),L[Na]=void 0)};S?T(S,[L,$]):$()},leave(L,S){const M=String(t.key);if(L[Na]&&L[Na](!0),n.isUnmounting)return S();w(f,[L]);let N=!1;const O=L[Wi]=$=>{N||(N=!0,S(),$?w(g,[L]):w(d,[L]),L[Wi]=void 0,E[M]===t&&delete E[M])};E[M]=t,h?T(h,[L,O]):O()},clone(L){return Xr(L,e,n,i)}};return C}function Cu(t){if(ha(t))return t=si(t),t.children=null,t}function Kd(t){return ha(t)?t.children?t.children[0]:void 0:t}function Gs(t,e){t.shapeFlag&6&&t.component?Gs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tu(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===kt?(o.patchFlag&128&&s++,i=i.concat(tu(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?si(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ro(t,e){return Ue(t)?it({name:t.name},e,{setup:t}):t}const Us=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function sM(t){Ue(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let d;return l||(d=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,m)=>{a(g,()=>v(f()),()=>m(g),u+1)});throw g}).then(g=>d!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return ro({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=Pt;if(c)return()=>Ru(c,d);const g=x=>{l=null,ir(x,d,13,!i)};if(o&&d.suspense||ma)return h().then(x=>()=>Ru(x,d)).catch(x=>(g(x),()=>i?tt(i,{error:x}):null));const v=Fr(!1),m=Fr(),p=Fr(!!s);return s&&setTimeout(()=>{p.value=!1},s),r!=null&&setTimeout(()=>{if(!v.value&&!m.value){const x=new Error(`Async component timed out after ${r}ms.`);g(x),m.value=x}},r),h().then(()=>{v.value=!0,d.parent&&ha(d.parent.vnode)&&(d.parent.effect.dirty=!0,Jc(d.parent.update))}).catch(x=>{g(x),m.value=x}),()=>{if(v.value&&c)return Ru(c,d);if(m.value&&i)return tt(i,{error:m.value});if(n&&!p.value)return tt(n)}}})}function Ru(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=tt(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const ha=t=>t.type.__isKeepAlive,rM={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Pi(),i=n.ctx;if(!i.renderer)return()=>{const x=e.default&&e.default();return x&&x.length===1?x[0]:x};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(x,_,E,w,T)=>{const C=x.component;c(x,_,E,0,a),l(C.vnode,x,_,E,C,a,w,x.slotScopeIds,T),Ht(()=>{C.isDeactivated=!1,C.a&&Ur(C.a);const L=x.props&&x.props.onVnodeMounted;L&&ln(L,C.parent,x)},a)},i.deactivate=x=>{const _=x.component;c(x,h,null,1,a),Ht(()=>{_.da&&Ur(_.da);const E=x.props&&x.props.onVnodeUnmounted;E&&ln(E,_.parent,x),_.isDeactivated=!0},a)};function d(x){Pu(x),u(x,n,a,!0)}function g(x){s.forEach((_,E)=>{const w=Vf(_.type);w&&(!x||!x(w))&&v(E)})}function v(x){const _=s.get(x);!o||!Gn(_,o)?d(_):o&&Pu(o),s.delete(x),r.delete(x)}Vr(()=>[t.include,t.exclude],([x,_])=>{x&&g(E=>So(x,E)),_&&g(E=>!So(_,E))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&s.set(m,Lu(n.subTree))};return da(p),iu(p),su(()=>{s.forEach(x=>{const{subTree:_,suspense:E}=n,w=Lu(_);if(x.type===w.type&&x.key===w.key){Pu(w);const T=w.component.da;T&&Ht(T,E);return}d(x)})}),()=>{if(m=null,!e.default)return null;const x=e.default(),_=x[0];if(x.length>1)return o=null,x;if(!rs(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let E=Lu(_);const w=E.type,T=Vf(Us(E)?E.type.__asyncResolved||{}:w),{include:C,exclude:L,max:S}=t;if(C&&(!T||!So(C,T))||L&&T&&So(L,T))return o=E,_;const M=E.key==null?w:E.key,N=s.get(M);return E.el&&(E=si(E),_.shapeFlag&128&&(_.ssContent=E)),m=M,N?(E.el=N.el,E.component=N.component,E.transition&&Gs(E,E.transition),E.shapeFlag|=512,r.delete(M),r.add(M)):(r.add(M),S&&r.size>parseInt(S,10)&&v(r.values().next().value)),E.shapeFlag|=256,o=E,S_(_.type)?_:E}}},oM=rM;function So(t,e){return be(t)?t.some(n=>So(n,e)):He(t)?t.split(",").includes(e):Tx(t)?t.test(e):!1}function P_(t,e){I_(t,"a",e)}function L_(t,e){I_(t,"da",e)}function I_(t,e,n=Pt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(nu(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&aM(i,e,n,s),s=s.parent}}function aM(t,e,n,i){const s=nu(e,t,i,!0);ru(()=>{xh(i[e],s)},n)}function Pu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Lu(t){return t.shapeFlag&128?t.ssContent:t}function nu(t,e,n=Pt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tr();const a=qs(n),l=En(e,n,t,o);return a(),nr(),l});return i?s.unshift(r):s.push(r),r}}const Ri=t=>(e,n=Pt)=>(!ma||t==="sp")&&nu(t,(...i)=>e(...i),n),D_=Ri("bm"),da=Ri("m"),N_=Ri("bu"),iu=Ri("u"),su=Ri("bum"),ru=Ri("um"),U_=Ri("sp"),O_=Ri("rtg"),F_=Ri("rtc");function B_(t,e=Pt){nu("ec",t,e)}function lM(t,e,n,i){let s;const r=n&&n[i];if(be(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(at(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function cM(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(be(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function uM(t,e,n={},i,s){if(At.isCE||At.parent&&Us(At.parent)&&At.parent.isCE)return e!=="default"&&(n.name=e),tt("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),as();const o=r&&k_(r(n)),a=qh(kt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function k_(t){return t.some(e=>rs(e)?!(e.type===Kt||e.type===kt&&!k_(e.children)):!0)?t:null}function fM(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:Nr(i)]=t[i];return n}const Rf=t=>t?o0(t)?au(t)||t.proxy:Rf(t.parent):null,Ao=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rf(t.parent),$root:t=>Rf(t.root),$emit:t=>t.emit,$options:t=>Gh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Jc(t.update)}),$nextTick:t=>t.n||(t.n=ua.bind(t.proxy)),$watch:t=>tM.bind(t)}),Iu=(t,e)=>t!==st&&!t.__isScriptSetup&&nt(t,e),Pf={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Iu(i,e))return o[e]=1,i[e];if(s!==st&&nt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&nt(c,e))return o[e]=3,r[e];if(n!==st&&nt(n,e))return o[e]=4,n[e];Lf&&(o[e]=0)}}const u=Ao[e];let f,h;if(u)return e==="$attrs"&&dn(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==st&&nt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Iu(s,e)?(s[e]=n,!0):i!==st&&nt(i,e)?(i[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==st&&nt(t,o)||Iu(e,o)||(a=r[0])&&nt(a,o)||nt(i,o)||nt(Ao,o)||nt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},hM=it({},Pf,{get(t,e){if(e!==Symbol.unscopables)return Pf.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Lx(e)}});function dM(){return null}function pM(){return null}function mM(t){}function gM(t){}function _M(){return null}function vM(){}function yM(t,e){return null}function xM(){return V_().slots}function SM(){return V_().attrs}function V_(){const t=Pi();return t.setupContext||(t.setupContext=u0(t))}function Wo(t){return be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function MM(t,e){const n=Wo(t);for(const i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?be(s)||Ue(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function EM(t,e){return!t||!e?t||e:be(t)&&be(e)?t.concat(e):it({},Wo(t),Wo(e))}function bM(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function TM(t){const e=Pi();let n=t();return Ff(),Sh(n)&&(n=n.catch(i=>{throw qs(e),i})),[n,()=>qs(e)]}let Lf=!0;function wM(t){const e=Gh(t),n=t.proxy,i=t.ctx;Lf=!1,e.beforeCreate&&Zd(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:_,unmounted:E,render:w,renderTracked:T,renderTriggered:C,errorCaptured:L,serverPrefetch:S,expose:M,inheritAttrs:N,components:O,directives:$,filters:I}=e;if(c&&AM(c,i,null),o)for(const Y in o){const z=o[Y];Ue(z)&&(i[Y]=z.bind(n))}if(s){const Y=s.call(n,n);at(Y)&&(t.data=ca(Y))}if(Lf=!0,r)for(const Y in r){const z=r[Y],ne=Ue(z)?z.bind(n,n):Ue(z.get)?z.get.bind(n,n):Lt,ce=!Ue(z)&&Ue(z.set)?z.set.bind(n):Lt,he=Ln({get:ne,set:ce});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>he.value,set:me=>he.value=me})}if(a)for(const Y in a)H_(a[Y],i,n,Y);if(l){const Y=Ue(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(z=>{Co(z,Y[z])})}u&&Zd(u,t,"c");function V(Y,z){be(z)?z.forEach(ne=>Y(ne.bind(n))):z&&Y(z.bind(n))}if(V(D_,f),V(da,h),V(N_,d),V(iu,g),V(P_,v),V(L_,m),V(B_,L),V(F_,T),V(O_,C),V(su,x),V(ru,E),V(U_,S),be(M))if(M.length){const Y=t.exposed||(t.exposed={});M.forEach(z=>{Object.defineProperty(Y,z,{get:()=>n[z],set:ne=>n[z]=ne})})}else t.exposed||(t.exposed={});w&&t.render===Lt&&(t.render=w),N!=null&&(t.inheritAttrs=N),O&&(t.components=O),$&&(t.directives=$)}function AM(t,e,n=Lt){be(t)&&(t=If(t));for(const i in t){const s=t[i];let r;at(s)?"default"in s?r=ti(s.from||i,s.default,!0):r=ti(s.from||i):r=ti(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zd(t,e,n){En(be(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function H_(t,e,n,i){const s=i.includes(".")?A_(n,i):()=>n[i];if(He(t)){const r=e[t];Ue(r)&&Vr(s,r)}else if(Ue(t))Vr(s,t.bind(n));else if(at(t))if(be(t))t.forEach(r=>H_(r,e,n,i));else{const r=Ue(t.handler)?t.handler.bind(n):e[t.handler];Ue(r)&&Vr(s,r,t)}}function Gh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Cl(l,c,o,!0)),Cl(l,e,o)),at(e)&&r.set(e,l),l}function Cl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Cl(t,r,n,!0),s&&s.forEach(o=>Cl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=CM[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const CM={data:Jd,props:Qd,emits:Qd,methods:Mo,computed:Mo,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Mo,directives:Mo,watch:PM,provide:Jd,inject:RM};function Jd(t,e){return e?t?function(){return it(Ue(t)?t.call(this,this):t,Ue(e)?e.call(this,this):e)}:e:t}function RM(t,e){return Mo(If(t),If(e))}function If(t){if(be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Mo(t,e){return t?it(Object.create(null),t,e):e}function Qd(t,e){return t?be(t)&&be(e)?[...new Set([...t,...e])]:it(Object.create(null),Wo(t),Wo(e??{})):e}function PM(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function z_(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LM=0;function IM(t,e){return function(i,s=null){Ue(i)||(i=it({},i)),s!=null&&!at(s)&&(s=null);const r=z_(),o=new WeakSet;let a=!1;const l=r.app={_uid:LM++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:h0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=tt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,au(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Xo=l;try{return c()}finally{Xo=null}}};return l}}let Xo=null;function Co(t,e){if(Pt){let n=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===n&&(n=Pt.provides=Object.create(i)),n[t]=e}}function ti(t,e,n=!1){const i=Pt||At;if(i||Xo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Xo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ue(e)?e.call(i&&i.proxy):e}}function DM(){return!!(Pt||At||Xo)}function NM(t,e,n,i=!1){const s={},r={};El(r,ou,1),t.propsDefaults=Object.create(null),G_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Ah(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function UM(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Qe(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Qc(t.emitsOptions,h))continue;const d=e[h];if(l)if(nt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Mt(h);s[g]=Df(l,a,g,d,t,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{G_(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=Sn(f))===f||!nt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Df(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!nt(e,f))&&(delete r[f],c=!0)}c&&bi(t,"set","$attrs")}function G_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ls(l))continue;const c=e[l];let u;s&&nt(s,u=Mt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Qc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qe(n),c=a||st;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Df(s,l,f,c[f],t,!nt(c,f))}}return o}function Df(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=qs(s);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Sn(n))&&(i=!0))}return i}function W_(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ue(t)){const u=f=>{l=!0;const[h,d]=W_(f,e,!0);it(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return at(t)&&i.set(t,Ir),Ir;if(be(r))for(let u=0;u<r.length;u++){const f=Mt(r[u]);ep(f)&&(o[f]=st)}else if(r)for(const u in r){const f=Mt(u);if(ep(f)){const h=r[u],d=o[f]=be(h)||Ue(h)?{type:h}:it({},h);if(d){const g=ip(Boolean,d.type),v=ip(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||nt(d,"default"))&&a.push(f)}}}const c=[o,a];return at(t)&&i.set(t,c),c}function ep(t){return t[0]!=="$"}function tp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function np(t,e){return tp(t)===tp(e)}function ip(t,e){return be(e)?e.findIndex(n=>np(n,t)):Ue(e)&&np(e,t)?0:-1}const X_=t=>t[0]==="_"||t==="$stable",Wh=t=>be(t)?t.map(yn):[yn(t)],OM=(t,e,n)=>{if(e._n)return e;const i=Yi((...s)=>Wh(e(...s)),n);return i._c=!1,i},q_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(X_(s))continue;const r=t[s];if(Ue(r))e[s]=OM(s,r,i);else if(r!=null){const o=Wh(r);e[s]=()=>o}}},j_=(t,e)=>{const n=Wh(e);t.slots.default=()=>n},FM=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Qe(e),El(e,"_",n)):q_(e,t.slots={})}else t.slots={},e&&j_(t,e);El(t.slots,ou,1)},BM=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=st;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(it(s,e),!n&&a===1&&delete s._):(r=!e.$stable,q_(e,s)),o=e}else e&&(j_(t,e),o={default:1});if(r)for(const a in s)!X_(a)&&o[a]==null&&delete s[a]};function Rl(t,e,n,i,s=!1){if(be(t)){t.forEach((h,d)=>Rl(h,e&&(be(e)?e[d]:e),n,i,s));return}if(Us(i)&&!s)return;const r=i.shapeFlag&4?au(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(He(c)?(u[c]=null,nt(f,c)&&(f[c]=null)):zt(c)&&(c.value=null)),Ue(l))Ti(l,a,12,[o,u]);else{const h=He(l),d=zt(l),g=t.f;if(h||d){const v=()=>{if(g){const m=h?nt(f,l)?f[l]:u[l]:l.value;s?be(m)&&xh(m,r):be(m)?m.includes(r)||m.push(r):h?(u[l]=[r],nt(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,nt(f,l)&&(f[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};s||g?v():(v.id=-1,Ht(v,n))}}}let Ii=!1;const kM=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",VM=t=>t.namespaceURI.includes("MathML"),Ua=t=>{if(kM(t))return"svg";if(VM(t))return"mathml"},Oa=t=>t.nodeType===8;function HM(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,E)=>{if(!E.hasChildNodes()){n(null,_,E),Al(),E._vnode=_;return}Ii=!1,f(E.firstChild,_,null,null,null),Al(),E._vnode=_,Ii&&console.error("Hydration completed but contains mismatches.")},f=(_,E,w,T,C,L=!1)=>{const S=Oa(_)&&_.data==="[",M=()=>v(_,E,w,T,C,S),{type:N,ref:O,shapeFlag:$,patchFlag:I}=E;let H=_.nodeType;E.el=_,I===-2&&(L=!1,E.dynamicChildren=null);let V=null;switch(N){case Ws:H!==3?E.children===""?(l(E.el=s(""),o(_),_),V=_):V=M():(_.data!==E.children&&(Ii=!0,_.data=E.children),V=r(_));break;case Kt:x(_)?(V=r(_),p(E.el=_.content.firstChild,_,w)):H!==8||S?V=M():V=r(_);break;case Os:if(S&&(_=r(_),H=_.nodeType),H===1||H===3){V=_;const Y=!E.children.length;for(let z=0;z<E.staticCount;z++)Y&&(E.children+=V.nodeType===1?V.outerHTML:V.data),z===E.staticCount-1&&(E.anchor=V),V=r(V);return S?r(V):V}else M();break;case kt:S?V=g(_,E,w,T,C,L):V=M();break;default:if($&1)(H!==1||E.type.toLowerCase()!==_.tagName.toLowerCase())&&!x(_)?V=M():V=h(_,E,w,T,C,L);else if($&6){E.slotScopeIds=C;const Y=o(_);if(S?V=m(_):Oa(_)&&_.data==="teleport start"?V=m(_,_.data,"teleport end"):V=r(_),e(E,Y,null,w,T,Ua(Y),L),Us(E)){let z;S?(z=tt(kt),z.anchor=V?V.previousSibling:Y.lastChild):z=_.nodeType===3?bs(""):tt("div"),z.el=_,E.component.subTree=z}}else $&64?H!==8?V=M():V=E.type.hydrate(_,E,w,T,C,L,t,d):$&128&&(V=E.type.hydrate(_,E,w,T,Ua(o(_)),C,L,t,f))}return O!=null&&Rl(O,null,T,E),V},h=(_,E,w,T,C,L)=>{L=L||!!E.dynamicChildren;const{type:S,props:M,patchFlag:N,shapeFlag:O,dirs:$,transition:I}=E,H=S==="input"||S==="option";if(H||N!==-1){$&&Zn(E,null,w,"created");let V=!1;if(x(_)){V=Z_(T,I)&&w&&w.vnode.props&&w.vnode.props.appear;const z=_.content.firstChild;V&&I.beforeEnter(z),p(z,_,w),E.el=_=z}if(O&16&&!(M&&(M.innerHTML||M.textContent))){let z=d(_.firstChild,E,_,w,T,C,L);for(;z;){Ii=!0;const ne=z;z=z.nextSibling,a(ne)}}else O&8&&_.textContent!==E.children&&(Ii=!0,_.textContent=E.children);if(M)if(H||!L||N&48)for(const z in M)(H&&(z.endsWith("value")||z==="indeterminate")||Js(z)&&!Ls(z)||z[0]===".")&&i(_,z,null,M[z],void 0,void 0,w);else M.onClick&&i(_,"onClick",null,M.onClick,void 0,void 0,w);let Y;(Y=M&&M.onVnodeBeforeMount)&&ln(Y,w,E),$&&Zn(E,null,w,"beforeMount"),((Y=M&&M.onVnodeMounted)||$||V)&&M_(()=>{Y&&ln(Y,w,E),V&&I.enter(_),$&&Zn(E,null,w,"mounted")},T)}return _.nextSibling},d=(_,E,w,T,C,L,S)=>{S=S||!!E.dynamicChildren;const M=E.children,N=M.length;for(let O=0;O<N;O++){const $=S?M[O]:M[O]=yn(M[O]);if(_)_=f(_,$,T,C,L,S);else{if($.type===Ws&&!$.children)continue;Ii=!0,n(null,$,w,null,T,C,Ua(w),L)}}return _},g=(_,E,w,T,C,L)=>{const{slotScopeIds:S}=E;S&&(C=C?C.concat(S):S);const M=o(_),N=d(r(_),E,M,w,T,C,L);return N&&Oa(N)&&N.data==="]"?r(E.anchor=N):(Ii=!0,l(E.anchor=c("]"),M,N),N)},v=(_,E,w,T,C,L)=>{if(Ii=!0,E.el=null,L){const N=m(_);for(;;){const O=r(_);if(O&&O!==N)a(O);else break}}const S=r(_),M=o(_);return a(_),n(null,E,M,S,w,T,Ua(M),C),S},m=(_,E="[",w="]")=>{let T=0;for(;_;)if(_=r(_),_&&Oa(_)&&(_.data===E&&T++,_.data===w)){if(T===0)return r(_);T--}return _},p=(_,E,w)=>{const T=E.parentNode;T&&T.replaceChild(_,E);let C=w;for(;C;)C.vnode.el===E&&(C.vnode.el=C.subTree.el=_),C=C.parent},x=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[u,f]}const Ht=M_;function $_(t){return K_(t)}function Y_(t){return K_(t,HM)}function K_(t,e){const n=Wg();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Lt,insertStaticContent:g}=t,v=(R,P,B,X=null,J=null,ie=null,b=void 0,y=null,D=!!P.dynamicChildren)=>{if(R===P)return;R&&!Gn(R,P)&&(X=G(R),me(R,J,ie,!0),R=null),P.patchFlag===-2&&(D=!1,P.dynamicChildren=null);const{type:k,ref:j,shapeFlag:K}=P;switch(k){case Ws:m(R,P,B,X);break;case Kt:p(R,P,B,X);break;case Os:R==null&&x(P,B,X,b);break;case kt:O(R,P,B,X,J,ie,b,y,D);break;default:K&1?w(R,P,B,X,J,ie,b,y,D):K&6?$(R,P,B,X,J,ie,b,y,D):(K&64||K&128)&&k.process(R,P,B,X,J,ie,b,y,D,ue)}j!=null&&J&&Rl(j,R&&R.ref,ie,P||R,!P)},m=(R,P,B,X)=>{if(R==null)i(P.el=a(P.children),B,X);else{const J=P.el=R.el;P.children!==R.children&&c(J,P.children)}},p=(R,P,B,X)=>{R==null?i(P.el=l(P.children||""),B,X):P.el=R.el},x=(R,P,B,X)=>{[R.el,R.anchor]=g(R.children,P,B,X,R.el,R.anchor)},_=({el:R,anchor:P},B,X)=>{let J;for(;R&&R!==P;)J=h(R),i(R,B,X),R=J;i(P,B,X)},E=({el:R,anchor:P})=>{let B;for(;R&&R!==P;)B=h(R),s(R),R=B;s(P)},w=(R,P,B,X,J,ie,b,y,D)=>{P.type==="svg"?b="svg":P.type==="math"&&(b="mathml"),R==null?T(P,B,X,J,ie,b,y,D):S(R,P,J,ie,b,y,D)},T=(R,P,B,X,J,ie,b,y)=>{let D,k;const{props:j,shapeFlag:K,transition:ae,dirs:se}=R;if(D=R.el=o(R.type,ie,j&&j.is,j),K&8?u(D,R.children):K&16&&L(R.children,D,null,X,J,Du(R,ie),b,y),se&&Zn(R,null,X,"created"),C(D,R,R.scopeId,b,X),j){for(const ve in j)ve!=="value"&&!Ls(ve)&&r(D,ve,null,j[ve],ie,R.children,X,J,Ee);"value"in j&&r(D,"value",null,j.value,ie),(k=j.onVnodeBeforeMount)&&ln(k,X,R)}se&&Zn(R,null,X,"beforeMount");const de=Z_(J,ae);de&&ae.beforeEnter(D),i(D,P,B),((k=j&&j.onVnodeMounted)||de||se)&&Ht(()=>{k&&ln(k,X,R),de&&ae.enter(D),se&&Zn(R,null,X,"mounted")},J)},C=(R,P,B,X,J)=>{if(B&&d(R,B),X)for(let ie=0;ie<X.length;ie++)d(R,X[ie]);if(J){let ie=J.subTree;if(P===ie){const b=J.vnode;C(R,b,b.scopeId,b.slotScopeIds,J.parent)}}},L=(R,P,B,X,J,ie,b,y,D=0)=>{for(let k=D;k<R.length;k++){const j=R[k]=y?Xi(R[k]):yn(R[k]);v(null,j,P,B,X,J,ie,b,y)}},S=(R,P,B,X,J,ie,b)=>{const y=P.el=R.el;let{patchFlag:D,dynamicChildren:k,dirs:j}=P;D|=R.patchFlag&16;const K=R.props||st,ae=P.props||st;let se;if(B&&us(B,!1),(se=ae.onVnodeBeforeUpdate)&&ln(se,B,P,R),j&&Zn(P,R,B,"beforeUpdate"),B&&us(B,!0),k?M(R.dynamicChildren,k,y,B,X,Du(P,J),ie):b||z(R,P,y,null,B,X,Du(P,J),ie,!1),D>0){if(D&16)N(y,P,K,ae,B,X,J);else if(D&2&&K.class!==ae.class&&r(y,"class",null,ae.class,J),D&4&&r(y,"style",K.style,ae.style,J),D&8){const de=P.dynamicProps;for(let ve=0;ve<de.length;ve++){const Ae=de[ve],oe=K[Ae],Ge=ae[Ae];(Ge!==oe||Ae==="value")&&r(y,Ae,oe,Ge,J,R.children,B,X,Ee)}}D&1&&R.children!==P.children&&u(y,P.children)}else!b&&k==null&&N(y,P,K,ae,B,X,J);((se=ae.onVnodeUpdated)||j)&&Ht(()=>{se&&ln(se,B,P,R),j&&Zn(P,R,B,"updated")},X)},M=(R,P,B,X,J,ie,b)=>{for(let y=0;y<P.length;y++){const D=R[y],k=P[y],j=D.el&&(D.type===kt||!Gn(D,k)||D.shapeFlag&70)?f(D.el):B;v(D,k,j,null,X,J,ie,b,!0)}},N=(R,P,B,X,J,ie,b)=>{if(B!==X){if(B!==st)for(const y in B)!Ls(y)&&!(y in X)&&r(R,y,B[y],null,b,P.children,J,ie,Ee);for(const y in X){if(Ls(y))continue;const D=X[y],k=B[y];D!==k&&y!=="value"&&r(R,y,k,D,b,P.children,J,ie,Ee)}"value"in X&&r(R,"value",B.value,X.value,b)}},O=(R,P,B,X,J,ie,b,y,D)=>{const k=P.el=R?R.el:a(""),j=P.anchor=R?R.anchor:a("");let{patchFlag:K,dynamicChildren:ae,slotScopeIds:se}=P;se&&(y=y?y.concat(se):se),R==null?(i(k,B,X),i(j,B,X),L(P.children||[],B,j,J,ie,b,y,D)):K>0&&K&64&&ae&&R.dynamicChildren?(M(R.dynamicChildren,ae,B,J,ie,b,y),(P.key!=null||J&&P===J.subTree)&&Xh(R,P,!0)):z(R,P,B,j,J,ie,b,y,D)},$=(R,P,B,X,J,ie,b,y,D)=>{P.slotScopeIds=y,R==null?P.shapeFlag&512?J.ctx.activate(P,B,X,b,D):I(P,B,X,J,ie,b,D):H(R,P,D)},I=(R,P,B,X,J,ie,b)=>{const y=R.component=r0(R,X,J);if(ha(R)&&(y.ctx.renderer=ue),a0(y),y.asyncDep){if(J&&J.registerDep(y,V),!R.el){const D=y.subTree=tt(Kt);p(null,D,P,B)}}else V(y,R,P,B,J,ie,b)},H=(R,P,B)=>{const X=P.component=R.component;if(GS(R,P,B))if(X.asyncDep&&!X.asyncResolved){Y(X,P,B);return}else X.next=P,OS(X.update),X.effect.dirty=!0,X.update();else P.el=R.el,X.vnode=P},V=(R,P,B,X,J,ie,b)=>{const y=()=>{if(R.isMounted){let{next:j,bu:K,u:ae,parent:se,vnode:de}=R;{const ke=J_(R);if(ke){j&&(j.el=de.el,Y(R,j,b)),ke.asyncDep.then(()=>{R.isUnmounted||y()});return}}let ve=j,Ae;us(R,!1),j?(j.el=de.el,Y(R,j,b)):j=de,K&&Ur(K),(Ae=j.props&&j.props.onVnodeBeforeUpdate)&&ln(Ae,se,j,de),us(R,!0);const oe=ml(R),Ge=R.subTree;R.subTree=oe,v(Ge,oe,f(Ge.el),G(Ge),R,J,ie),j.el=oe.el,ve===null&&Fh(R,oe.el),ae&&Ht(ae,J),(Ae=j.props&&j.props.onVnodeUpdated)&&Ht(()=>ln(Ae,se,j,de),J)}else{let j;const{el:K,props:ae}=P,{bm:se,m:de,parent:ve}=R,Ae=Us(P);if(us(R,!1),se&&Ur(se),!Ae&&(j=ae&&ae.onVnodeBeforeMount)&&ln(j,ve,P),us(R,!0),K&&W){const oe=()=>{R.subTree=ml(R),W(K,R.subTree,R,J,null)};Ae?P.type.__asyncLoader().then(()=>!R.isUnmounted&&oe()):oe()}else{const oe=R.subTree=ml(R);v(null,oe,B,X,R,J,ie),P.el=oe.el}if(de&&Ht(de,J),!Ae&&(j=ae&&ae.onVnodeMounted)){const oe=P;Ht(()=>ln(j,ve,oe),J)}(P.shapeFlag&256||ve&&Us(ve.vnode)&&ve.vnode.shapeFlag&256)&&R.a&&Ht(R.a,J),R.isMounted=!0,P=B=X=null}},D=R.effect=new Wr(y,Lt,()=>Jc(k),R.scope),k=R.update=()=>{D.dirty&&D.run()};k.id=R.uid,us(R,!0),k()},Y=(R,P,B)=>{P.component=R;const X=R.vnode.props;R.vnode=P,R.next=null,UM(R,P.props,X,B),BM(R,P.children,B),tr(),qd(R),nr()},z=(R,P,B,X,J,ie,b,y,D=!1)=>{const k=R&&R.children,j=R?R.shapeFlag:0,K=P.children,{patchFlag:ae,shapeFlag:se}=P;if(ae>0){if(ae&128){ce(k,K,B,X,J,ie,b,y,D);return}else if(ae&256){ne(k,K,B,X,J,ie,b,y,D);return}}se&8?(j&16&&Ee(k,J,ie),K!==k&&u(B,K)):j&16?se&16?ce(k,K,B,X,J,ie,b,y,D):Ee(k,J,ie,!0):(j&8&&u(B,""),se&16&&L(K,B,X,J,ie,b,y,D))},ne=(R,P,B,X,J,ie,b,y,D)=>{R=R||Ir,P=P||Ir;const k=R.length,j=P.length,K=Math.min(k,j);let ae;for(ae=0;ae<K;ae++){const se=P[ae]=D?Xi(P[ae]):yn(P[ae]);v(R[ae],se,B,null,J,ie,b,y,D)}k>j?Ee(R,J,ie,!0,!1,K):L(P,B,X,J,ie,b,y,D,K)},ce=(R,P,B,X,J,ie,b,y,D)=>{let k=0;const j=P.length;let K=R.length-1,ae=j-1;for(;k<=K&&k<=ae;){const se=R[k],de=P[k]=D?Xi(P[k]):yn(P[k]);if(Gn(se,de))v(se,de,B,null,J,ie,b,y,D);else break;k++}for(;k<=K&&k<=ae;){const se=R[K],de=P[ae]=D?Xi(P[ae]):yn(P[ae]);if(Gn(se,de))v(se,de,B,null,J,ie,b,y,D);else break;K--,ae--}if(k>K){if(k<=ae){const se=ae+1,de=se<j?P[se].el:X;for(;k<=ae;)v(null,P[k]=D?Xi(P[k]):yn(P[k]),B,de,J,ie,b,y,D),k++}}else if(k>ae)for(;k<=K;)me(R[k],J,ie,!0),k++;else{const se=k,de=k,ve=new Map;for(k=de;k<=ae;k++){const Ie=P[k]=D?Xi(P[k]):yn(P[k]);Ie.key!=null&&ve.set(Ie.key,k)}let Ae,oe=0;const Ge=ae-de+1;let ke=!1,Oe=0;const Pe=new Array(Ge);for(k=0;k<Ge;k++)Pe[k]=0;for(k=se;k<=K;k++){const Ie=R[k];if(oe>=Ge){me(Ie,J,ie,!0);continue}let We;if(Ie.key!=null)We=ve.get(Ie.key);else for(Ae=de;Ae<=ae;Ae++)if(Pe[Ae-de]===0&&Gn(Ie,P[Ae])){We=Ae;break}We===void 0?me(Ie,J,ie,!0):(Pe[We-de]=k+1,We>=Oe?Oe=We:ke=!0,v(Ie,P[We],B,null,J,ie,b,y,D),oe++)}const Ce=ke?zM(Pe):Ir;for(Ae=Ce.length-1,k=Ge-1;k>=0;k--){const Ie=de+k,We=P[Ie],ht=Ie+1<j?P[Ie+1].el:X;Pe[k]===0?v(null,We,B,ht,J,ie,b,y,D):ke&&(Ae<0||k!==Ce[Ae]?he(We,B,ht,2):Ae--)}}},he=(R,P,B,X,J=null)=>{const{el:ie,type:b,transition:y,children:D,shapeFlag:k}=R;if(k&6){he(R.component.subTree,P,B,X);return}if(k&128){R.suspense.move(P,B,X);return}if(k&64){b.move(R,P,B,ue);return}if(b===kt){i(ie,P,B);for(let K=0;K<D.length;K++)he(D[K],P,B,X);i(R.anchor,P,B);return}if(b===Os){_(R,P,B);return}if(X!==2&&k&1&&y)if(X===0)y.beforeEnter(ie),i(ie,P,B),Ht(()=>y.enter(ie),J);else{const{leave:K,delayLeave:ae,afterLeave:se}=y,de=()=>i(ie,P,B),ve=()=>{K(ie,()=>{de(),se&&se()})};ae?ae(ie,de,ve):ve()}else i(ie,P,B)},me=(R,P,B,X=!1,J=!1)=>{const{type:ie,props:b,ref:y,children:D,dynamicChildren:k,shapeFlag:j,patchFlag:K,dirs:ae}=R;if(y!=null&&Rl(y,null,B,R,!0),j&256){P.ctx.deactivate(R);return}const se=j&1&&ae,de=!Us(R);let ve;if(de&&(ve=b&&b.onVnodeBeforeUnmount)&&ln(ve,P,R),j&6)ye(R.component,B,X);else{if(j&128){R.suspense.unmount(B,X);return}se&&Zn(R,null,P,"beforeUnmount"),j&64?R.type.remove(R,P,B,J,ue,X):k&&(ie!==kt||K>0&&K&64)?Ee(k,P,B,!1,!0):(ie===kt&&K&384||!J&&j&16)&&Ee(D,P,B),X&&te(R)}(de&&(ve=b&&b.onVnodeUnmounted)||se)&&Ht(()=>{ve&&ln(ve,P,R),se&&Zn(R,null,P,"unmounted")},B)},te=R=>{const{type:P,el:B,anchor:X,transition:J}=R;if(P===kt){fe(B,X);return}if(P===Os){E(R);return}const ie=()=>{s(B),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(R.shapeFlag&1&&J&&!J.persisted){const{leave:b,delayLeave:y}=J,D=()=>b(B,ie);y?y(R.el,ie,D):D()}else ie()},fe=(R,P)=>{let B;for(;R!==P;)B=h(R),s(R),R=B;s(P)},ye=(R,P,B)=>{const{bum:X,scope:J,update:ie,subTree:b,um:y}=R;X&&Ur(X),J.stop(),ie&&(ie.active=!1,me(b,R,P,B)),y&&Ht(y,P),Ht(()=>{R.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ee=(R,P,B,X=!1,J=!1,ie=0)=>{for(let b=ie;b<R.length;b++)me(R[b],P,B,X,J)},G=R=>R.shapeFlag&6?G(R.component.subTree):R.shapeFlag&128?R.suspense.next():h(R.anchor||R.el);let le=!1;const re=(R,P,B)=>{R==null?P._vnode&&me(P._vnode,null,null,!0):v(P._vnode||null,R,P,null,null,null,B),le||(le=!0,qd(),Al(),le=!1),P._vnode=R},ue={p:v,um:me,m:he,r:te,mt:I,mc:L,pc:z,pbc:M,n:G,o:t};let we,W;return e&&([we,W]=e(ue)),{render:re,hydrate:we,createApp:IM(re,we)}}function Du({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Z_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xh(t,e,n=!1){const i=t.children,s=e.children;if(be(i)&&be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Xi(s[r]),a.el=o.el),n||Xh(o,a)),a.type===Ws&&(a.el=o.el)}}function zM(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function J_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:J_(e)}const GM=t=>t.__isTeleport,Ro=t=>t&&(t.disabled||t.disabled===""),sp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,rp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Nf=(t,e)=>{const n=t&&t.to;return He(n)?e?e(n):null:n},WM={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:g,createText:v,createComment:m}}=c,p=Ro(e.props);let{shapeFlag:x,children:_,dynamicChildren:E}=e;if(t==null){const w=e.el=v(""),T=e.anchor=v("");d(w,n,i),d(T,n,i);const C=e.target=Nf(e.props,g),L=e.targetAnchor=v("");C&&(d(L,C),o==="svg"||sp(C)?o="svg":(o==="mathml"||rp(C))&&(o="mathml"));const S=(M,N)=>{x&16&&u(_,M,N,s,r,o,a,l)};p?S(n,T):C&&S(C,L)}else{e.el=t.el;const w=e.anchor=t.anchor,T=e.target=t.target,C=e.targetAnchor=t.targetAnchor,L=Ro(t.props),S=L?n:T,M=L?w:C;if(o==="svg"||sp(T)?o="svg":(o==="mathml"||rp(T))&&(o="mathml"),E?(h(t.dynamicChildren,E,S,s,r,o,a),Xh(t,e,!0)):l||f(t,e,S,M,s,r,o,a,!1),p)L?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Fa(e,n,w,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=Nf(e.props,g);N&&Fa(e,N,null,c,0)}else L&&Fa(e,T,C,c,1)}Q_(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:h}=t;if(f&&r(u),o&&r(c),a&16){const d=o||!Ro(h);for(let g=0;g<l.length;g++){const v=l[g];s(v,e,n,d,!!v.dynamicChildren)}}},move:Fa,hydrate:XM};function Fa(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),(!f||Ro(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,n,2);f&&i(a,e,n)}function XM(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Nf(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Ro(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,i,s,r)}Q_(e)}return e.anchor&&o(e.anchor)}const qM=WM;function Q_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const kt=Symbol.for("v-fgt"),Ws=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),Po=[];let un=null;function as(t=!1){Po.push(un=t?null:[])}function e0(){Po.pop(),un=Po[Po.length-1]||null}let Xs=1;function Uf(t){Xs+=t}function t0(t){return t.dynamicChildren=Xs>0?un||Ir:null,e0(),Xs>0&&un&&un.push(t),t}function pa(t,e,n,i,s,r){return t0(ni(t,e,n,i,s,r,!0))}function qh(t,e,n,i,s){return t0(tt(t,e,n,i,s,!0))}function rs(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}function jM(t){}const ou="__vInternal",n0=({key:t})=>t??null,gl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||zt(t)||Ue(t)?{i:At,r:t,k:e,f:!!n}:t:null);function ni(t,e=null,n=null,i=0,s=null,r=t===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&n0(e),ref:e&&gl(e),scopeId:eu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return a?($h(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),Xs>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const tt=$M;function $M(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===x_)&&(t=Kt),rs(t)){const a=si(t,e,!0);return n&&$h(a,n),Xs>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag|=-2,a}if(tE(t)&&(t=t.__vccOpts),e){e=i0(e);let{class:a,style:l}=e;a&&!He(a)&&(e.class=Qn(a)),at(l)&&(Rh(l)&&!be(l)&&(l=it({},l)),e.style=la(l))}const o=He(t)?1:S_(t)?128:GM(t)?64:at(t)?4:Ue(t)?2:0;return ni(t,e,n,i,s,o,r,!0)}function i0(t){return t?Rh(t)||ou in t?it({},t):t:null}function si(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?s0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&n0(a),ref:e&&e.ref?n&&s?be(s)?s.concat(gl(e)):[s,gl(e)]:gl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&si(t.ssContent),ssFallback:t.ssFallback&&si(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function bs(t=" ",e=0){return tt(Ws,null,t,e)}function jh(t,e){const n=tt(Os,null,t);return n.staticCount=e,n}function YM(t="",e=!1){return e?(as(),qh(Kt,null,t)):tt(Kt,null,t)}function yn(t){return t==null||typeof t=="boolean"?tt(Kt):be(t)?tt(kt,null,t.slice()):typeof t=="object"?Xi(t):tt(Ws,null,String(t))}function Xi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:si(t)}function $h(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(be(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$h(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ou in e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:At},n=32):(e=String(e),i&64?(n=16,e=[bs(e)]):n=8);t.children=e,t.shapeFlag|=n}function s0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Qn([e.class,i.class]));else if(s==="style")e.style=la([e.style,i.style]);else if(Js(s)){const r=e[s],o=i[s];o&&r!==o&&!(be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ln(t,e,n,i=null){En(t,e,7,[n,i])}const KM=z_();let ZM=0;function r0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||KM,r={uid:ZM++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:W_(i,s),emitsOptions:y_(i,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=BS.bind(null,r),t.ce&&t.ce(r),r}let Pt=null;const Pi=()=>Pt||At;let Pl,Of;{const t=Wg(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Pl=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),Of=e("__VUE_SSR_SETTERS__",n=>ma=n)}const qs=t=>{const e=Pt;return Pl(t),t.scope.on(),()=>{t.scope.off(),Pl(e)}},Ff=()=>{Pt&&Pt.scope.off(),Pl(null)};function o0(t){return t.vnode.shapeFlag&4}let ma=!1;function a0(t,e=!1){e&&Of(e);const{props:n,children:i}=t.vnode,s=o0(t);NM(t,n,s,e),FM(t,i);const r=s?JM(t,e):void 0;return e&&Of(!1),r}function JM(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ph(new Proxy(t.ctx,Pf));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?u0(t):null,r=qs(t);tr();const o=Ti(i,t,0,[t.props,s]);if(nr(),r(),Sh(o)){if(o.then(Ff,Ff),e)return o.then(a=>{Bf(t,a,e)}).catch(a=>{ir(a,t,0)});t.asyncDep=o}else Bf(t,o,e)}else c0(t,e)}function Bf(t,e,n){Ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Dh(e)),c0(t,n)}let Ll,kf;function l0(t){Ll=t,kf=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,hM))}}const QM=()=>!Ll;function c0(t,e,n){const i=t.type;if(!t.render){if(!e&&Ll&&!i.render){const s=i.template||Gh(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=it(it({isCustomElement:r,delimiters:a},o),l);i.render=Ll(s,c)}}t.render=i.render||Lt,kf&&kf(t)}{const s=qs(t);tr();try{wM(t)}finally{nr(),s()}}}function eE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dn(t,"get","$attrs"),e[n]}}))}function u0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return eE(t)},slots:t.slots,emit:t.emit,expose:e}}function au(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dh(Ph(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ao)return Ao[n](t)},has(e,n){return n in e||n in Ao}}))}function Vf(t,e=!0){return Ue(t)?t.displayName||t.name:t.name||e&&t.__name}function tE(t){return Ue(t)&&"__vccOpts"in t}const Ln=(t,e)=>yS(t,e,ma);function nE(t,e,n=st){const i=Pi(),s=Mt(e),r=Sn(e),o=d_((l,c)=>{let u;return w_(()=>{const f=t[e];$n(u,f)&&(u=f,c())}),{get(){return l(),n.get?n.get(u):u},set(f){const h=i.vnode.props;!(h&&(e in h||s in h||r in h)&&(`onUpdate:${e}`in h||`onUpdate:${s}`in h||`onUpdate:${r}`in h))&&$n(f,u)&&(u=f,c()),i.emit(`update:${e}`,n.set?n.set(f):f)}}}),a=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[a]||{}:o,done:!1}:{done:!0}}}},o}function lu(t,e,n){const i=arguments.length;return i===2?at(e)&&!be(e)?rs(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&rs(n)&&(n=[n]),tt(t,e,n))}function iE(){}function sE(t,e,n,i){const s=n[i];if(s&&f0(s,t))return s;const r=e();return r.memo=t.slice(),n[i]=r}function f0(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if($n(n[i],e[i]))return!1;return Xs>0&&un&&un.push(t),!0}const h0="3.4.15",rE=Lt,oE=DS,aE=Er,lE=v_,cE={createComponentInstance:r0,setupComponent:a0,renderComponentRoot:ml,setCurrentRenderingInstance:zo,isVNode:rs,normalizeVNode:yn},uE=cE,fE=null,hE=null,dE=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pE="http://www.w3.org/2000/svg",mE="http://www.w3.org/1998/Math/MathML",qi=typeof document<"u"?document:null,op=qi&&qi.createElement("template"),gE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?qi.createElementNS(pE,t):e==="mathml"?qi.createElementNS(mE,t):qi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>qi.createTextNode(t),createComment:t=>qi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{op.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=op.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Di="transition",uo="animation",qr=Symbol("_vtc"),Yh=(t,{slots:e})=>lu(C_,p0(t),e);Yh.displayName="Transition";const d0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_E=Yh.props=it({},zh,d0),fs=(t,e=[])=>{be(t)?t.forEach(n=>n(...e)):t&&t(...e)},ap=t=>t?be(t)?t.some(e=>e.length>1):t.length>1:!1;function p0(t){const e={};for(const O in t)O in d0||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=vE(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:x,onEnterCancelled:_,onLeave:E,onLeaveCancelled:w,onBeforeAppear:T=p,onAppear:C=x,onAppearCancelled:L=_}=e,S=(O,$,I)=>{Hi(O,$?u:a),Hi(O,$?c:o),I&&I()},M=(O,$)=>{O._isLeaving=!1,Hi(O,f),Hi(O,d),Hi(O,h),$&&$()},N=O=>($,I)=>{const H=O?C:x,V=()=>S($,O,I);fs(H,[$,V]),lp(()=>{Hi($,O?l:r),gi($,O?u:a),ap(H)||cp($,i,v,V)})};return it(e,{onBeforeEnter(O){fs(p,[O]),gi(O,r),gi(O,o)},onBeforeAppear(O){fs(T,[O]),gi(O,l),gi(O,c)},onEnter:N(!1),onAppear:N(!0),onLeave(O,$){O._isLeaving=!0;const I=()=>M(O,$);gi(O,f),g0(),gi(O,h),lp(()=>{O._isLeaving&&(Hi(O,f),gi(O,d),ap(E)||cp(O,i,m,I))}),fs(E,[O,I])},onEnterCancelled(O){S(O,!1),fs(_,[O])},onAppearCancelled(O){S(O,!0),fs(L,[O])},onLeaveCancelled(O){M(O),fs(w,[O])}})}function vE(t){if(t==null)return null;if(at(t))return[Nu(t.enter),Nu(t.leave)];{const e=Nu(t);return[e,e]}}function Nu(t){return bl(t)}function gi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qr]||(t[qr]=new Set)).add(e)}function Hi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[qr];n&&(n.delete(e),n.size||(t[qr]=void 0))}function lp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yE=0;function cp(t,e,n,i){const s=t._endId=++yE,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=m0(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=d=>{d.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function m0(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Di}Delay`),r=i(`${Di}Duration`),o=up(s,r),a=i(`${uo}Delay`),l=i(`${uo}Duration`),c=up(a,l);let u=null,f=0,h=0;e===Di?o>0&&(u=Di,f=o,h=r.length):e===uo?c>0&&(u=uo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Di:uo:null,h=u?u===Di?r.length:l.length:0);const d=u===Di&&/\b(transform|all)(,|$)/.test(i(`${Di}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function up(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>fp(n)+fp(t[i])))}function fp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function g0(){return document.body.offsetHeight}function xE(t,e,n){const i=t[qr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kh=Symbol("_vod"),_0={beforeMount(t,{value:e},{transition:n}){t[Kh]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):fo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),fo(t,!0),i.enter(t)):i.leave(t,()=>{fo(t,!1)}):fo(t,e))},beforeUnmount(t,{value:e}){fo(t,e)}};function fo(t,e){t.style.display=e?t[Kh]:"none"}function SE(){_0.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const v0=Symbol("");function ME(t){const e=Pi();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>zf(r,s))},i=()=>{const s=t(e.proxy);Hf(e.subTree,s),n(s)};T_(i),da(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),ru(()=>s.disconnect())})}function Hf(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Hf(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)zf(t.el,e);else if(t.type===kt)t.children.forEach(n=>Hf(n,e));else if(t.type===Os){let{el:n,anchor:i}=t;for(;n&&(zf(n,e),n!==i);)n=n.nextSibling}}function zf(t,e){if(t.nodeType===1){const n=t.style;let i="";for(const s in e)n.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;n[v0]=i}}function EE(t,e,n){const i=t.style,s=i.display,r=He(n);if(n&&!r){if(e&&!He(e))for(const o in e)n[o]==null&&Gf(i,o,"");for(const o in n)Gf(i,o,n[o])}else if(r){if(e!==n){const o=i[v0];o&&(n+=";"+o),i.cssText=n}}else e&&t.removeAttribute("style");Kh in t&&(i.display=s)}const hp=/\s*!important$/;function Gf(t,e,n){if(be(n))n.forEach(i=>Gf(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=bE(t,e);hp.test(n)?t.setProperty(Sn(i),n.replace(hp,""),"important"):t[i]=n}}const dp=["Webkit","Moz","ms"],Uu={};function bE(t,e){const n=Uu[e];if(n)return n;let i=Mt(e);if(i!=="filter"&&i in t)return Uu[e]=i;i=er(i);for(let s=0;s<dp.length;s++){const r=dp[s]+i;if(r in t)return Uu[e]=r}return e}const pp="http://www.w3.org/1999/xlink";function TE(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(pp,e.slice(6,e.length)):t.setAttributeNS(pp,e,n);else{const r=Xx(e);n==null||r&&!qg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function wE(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qg(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function xi(t,e,n,i){t.addEventListener(e,n,i)}function AE(t,e,n,i){t.removeEventListener(e,n,i)}const mp=Symbol("_vei");function CE(t,e,n,i,s=null){const r=t[mp]||(t[mp]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=RE(e);if(i){const c=r[e]=IE(i,s);xi(t,a,c,l)}else o&&(AE(t,a,o,l),r[e]=void 0)}}const gp=/(?:Once|Passive|Capture)$/;function RE(t){let e;if(gp.test(t)){e={};let i;for(;i=t.match(gp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sn(t.slice(2)),e]}let Ou=0;const PE=Promise.resolve(),LE=()=>Ou||(PE.then(()=>Ou=0),Ou=Date.now());function IE(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;En(DE(i,n.value),e,5,[i])};return n.value=t,n.attached=LE(),n}function DE(t,e){if(be(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const _p=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,NE=(t,e,n,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?xE(t,i,c):e==="style"?EE(t,n,i):Js(e)?yh(e)||CE(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UE(t,e,i,c))?wE(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),TE(t,e,i,c))};function UE(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&_p(e)&&Ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _p(e)&&He(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function y0(t,e){const n=ro(t);class i extends cu{constructor(r){super(n,r,e)}}return i.def=n,i}/*! #__NO_SIDE_EFFECTS__ */const OE=t=>y0(t,P0),FE=typeof HTMLElement<"u"?HTMLElement:class{};class cu extends FE{constructor(e,n={},i){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ua(()=>{this._connected||(Wf(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,s=!1)=>{const{props:r,styles:o}=i;let a;if(r&&!be(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=bl(this._props[l])),(a||(a=Object.create(null)))[Mt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,i=be(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of i.map(Mt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r)}})}_setAttr(e){let n=this.getAttribute(e);const i=Mt(e);this._numberProps&&this._numberProps[i]&&(n=bl(n)),this._setProp(i,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),i&&(n===!0?this.setAttribute(Sn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Sn(e),n+""):n||this.removeAttribute(Sn(e))))}_update(){Wf(this._createVNode(),this.shadowRoot)}_createVNode(){const e=tt(this._def,it({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const i=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{i(r,o),Sn(r)!==r&&i(Sn(r),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof cu){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const i=document.createElement("style");i.textContent=n,this.shadowRoot.appendChild(i)})}}function BE(t="$style"){{const e=Pi();if(!e)return st;const n=e.type.__cssModules;if(!n)return st;const i=n[t];return i||st}}const x0=new WeakMap,S0=new WeakMap,Il=Symbol("_moveCb"),vp=Symbol("_enterCb"),M0={name:"TransitionGroup",props:it({},_E,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Pi(),i=Hh();let s,r;return iu(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!WE(s[0].el,n.vnode.el,o))return;s.forEach(HE),s.forEach(zE);const a=s.filter(GE);g0(),a.forEach(l=>{const c=l.el,u=c.style;gi(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Il]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c[Il]=null,Hi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Qe(t),a=p0(o);let l=o.tag||kt;s=r,r=e.default?tu(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Gs(u,Xr(u,a,i,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Gs(u,Xr(u,a,i,n)),x0.set(u,u.el.getBoundingClientRect())}return tt(l,null,r)}}},kE=t=>delete t.mode;M0.props;const VE=M0;function HE(t){const e=t.el;e[Il]&&e[Il](),e[vp]&&e[vp]()}function zE(t){S0.set(t,t.el.getBoundingClientRect())}function GE(t){const e=x0.get(t),n=S0.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function WE(t,e,n){const i=t.cloneNode(),s=t[qr];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=m0(i);return r.removeChild(i),o}const os=t=>{const e=t.props["onUpdate:modelValue"]||!1;return be(e)?n=>Ur(e,n):e};function XE(t){t.target.composing=!0}function yp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const On=Symbol("_assign"),Dl={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[On]=os(s);const r=i||s.props&&s.props.type==="number";xi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Fo(a)),t[On](a)}),n&&xi(t,"change",()=>{t.value=t.value.trim()}),e||(xi(t,"compositionstart",XE),xi(t,"compositionend",yp),xi(t,"change",yp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[On]=os(r),t.composing)return;const o=s||t.type==="number"?Fo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},Zh={deep:!0,created(t,e,n){t[On]=os(n),xi(t,"change",()=>{const i=t._modelValue,s=jr(t),r=t.checked,o=t[On];if(be(i)){const a=$c(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Qs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(b0(t,r))})},mounted:xp,beforeUpdate(t,e,n){t[On]=os(n),xp(t,e,n)}};function xp(t,{value:e,oldValue:n},i){t._modelValue=e,be(e)?t.checked=$c(e,i.props.value)>-1:Qs(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=wi(e,b0(t,!0)))}const Jh={created(t,{value:e},n){t.checked=wi(e,n.props.value),t[On]=os(n),xi(t,"change",()=>{t[On](jr(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[On]=os(i),e!==n&&(t.checked=wi(e,i.props.value))}},E0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Qs(e);xi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fo(jr(o)):jr(o));t[On](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,ua(()=>{t._assigning=!1})}),t[On]=os(i)},mounted(t,{value:e,oldValue:n,modifiers:{number:i}}){Sp(t,e,n,i)},beforeUpdate(t,e,n){t[On]=os(n)},updated(t,{value:e,oldValue:n,modifiers:{number:i}}){t._assigning||Sp(t,e,n,i)}};function Sp(t,e,n,i){const s=t.multiple,r=be(e);if(!(s&&!r&&!Qs(e))&&!(r&&wi(e,n))){for(let o=0,a=t.options.length;o<a;o++){const l=t.options[o],c=jr(l);if(s)if(r){const u=typeof c;u==="string"||u==="number"?l.selected=e.includes(i?Fo(c):c):l.selected=$c(e,c)>-1}else l.selected=e.has(c);else if(wi(jr(l),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function jr(t){return"_value"in t?t._value:t.value}function b0(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const T0={created(t,e,n){Ba(t,e,n,null,"created")},mounted(t,e,n){Ba(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){Ba(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){Ba(t,e,n,i,"updated")}};function w0(t,e){switch(t){case"SELECT":return E0;case"TEXTAREA":return Dl;default:switch(e){case"checkbox":return Zh;case"radio":return Jh;default:return Dl}}}function Ba(t,e,n,i,s){const o=w0(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function qE(){Dl.getSSRProps=({value:t})=>({value:t}),Jh.getSSRProps=({value:t},e)=>{if(e.props&&wi(e.props.value,t))return{checked:!0}},Zh.getSSRProps=({value:t},e)=>{if(be(t)){if(e.props&&$c(t,e.props.value)>-1)return{checked:!0}}else if(Qs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},T0.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=w0(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const jE=["ctrl","shift","alt","meta"],$E={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jE.some(n=>t[`${n}Key`]&&!e.includes(n))},YE=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=$E[e[o]];if(a&&a(s,e))return}return t(s,...r)})},KE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ZE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=Sn(s.key);if(e.some(o=>o===r||KE[o]===r))return t(s)})},A0=it({patchProp:NE},gE);let Lo,Mp=!1;function C0(){return Lo||(Lo=$_(A0))}function R0(){return Lo=Mp?Lo:Y_(A0),Mp=!0,Lo}const Wf=(...t)=>{C0().render(...t)},P0=(...t)=>{R0().hydrate(...t)},L0=(...t)=>{const e=C0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=D0(i);if(!s)return;const r=e._component;!Ue(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,I0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},JE=(...t)=>{const e=R0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=D0(i);if(s)return n(s,!0,I0(s))},e};function I0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function D0(t){return He(t)?document.querySelector(t):t}let Ep=!1;const QE=()=>{Ep||(Ep=!0,qE(),SE())},eb=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:C_,BaseTransitionPropsValidators:zh,Comment:Kt,DeprecationTypes:dE,EffectScope:Eh,ErrorCodes:IS,ErrorTypeStrings:oE,Fragment:kt,KeepAlive:oM,ReactiveEffect:Wr,Static:Os,Suspense:$S,Teleport:qM,Text:Ws,TrackOpTypes:RS,Transition:Yh,TransitionGroup:VE,TriggerOpTypes:PS,VueElement:cu,assertNumber:LS,callWithAsyncErrorHandling:En,callWithErrorHandling:Ti,camelize:Mt,capitalize:er,cloneVNode:si,compatUtils:hE,computed:Ln,createApp:L0,createBlock:qh,createCommentVNode:YM,createElementBlock:pa,createElementVNode:ni,createHydrationRenderer:Y_,createPropsRestProxy:bM,createRenderer:$_,createSSRApp:JE,createSlots:cM,createStaticVNode:jh,createTextVNode:bs,createVNode:tt,customRef:d_,defineAsyncComponent:sM,defineComponent:ro,defineCustomElement:y0,defineEmits:pM,defineExpose:mM,defineModel:vM,defineOptions:gM,defineProps:dM,defineSSRCustomElement:OE,defineSlots:_M,devtools:aE,effect:Zx,effectScope:$x,getCurrentInstance:Pi,getCurrentScope:Yg,getTransitionRawChildren:tu,guardReactiveProps:i0,h:lu,handleError:ir,hasInjectionContext:DM,hydrate:P0,initCustomFormatter:iE,initDirectivesForSSR:QE,inject:ti,isMemoSame:f0,isProxy:Rh,isReactive:Ns,isReadonly:zs,isRef:zt,isRuntimeOnly:QM,isShallow:Bo,isVNode:rs,markRaw:Ph,mergeDefaults:MM,mergeModels:EM,mergeProps:s0,nextTick:ua,normalizeClass:Qn,normalizeProps:Ux,normalizeStyle:la,onActivated:P_,onBeforeMount:D_,onBeforeUnmount:su,onBeforeUpdate:N_,onDeactivated:L_,onErrorCaptured:B_,onMounted:da,onRenderTracked:F_,onRenderTriggered:O_,onScopeDispose:Yx,onServerPrefetch:U_,onUnmounted:ru,onUpdated:iu,openBlock:as,popScopeId:Oh,provide:Co,proxyRefs:Dh,pushScopeId:Uh,queuePostFlushCb:wl,reactive:ca,readonly:Ch,ref:Fr,registerRuntimeCompiler:l0,render:Wf,renderList:lM,renderSlot:uM,resolveComponent:xo,resolveDirective:qS,resolveDynamicComponent:XS,resolveFilter:fE,resolveTransitionHooks:Xr,setBlockTracking:Uf,setDevtoolsHook:lE,setTransitionHooks:Gs,shallowReactive:Ah,shallowReadonly:vS,shallowRef:f_,ssrContextKey:E_,ssrUtils:uE,stop:Jx,toDisplayString:jx,toHandlerKey:Nr,toHandlers:fM,toRaw:Qe,toRef:CS,toRefs:TS,toValue:MS,transformVNodeArgs:jM,triggerRef:SS,unref:Mn,useAttrs:SM,useCssModule:BE,useCssVars:ME,useModel:nE,useSSRContext:b_,useSlots:xM,useTransitionState:Hh,vModelCheckbox:Zh,vModelDynamic:T0,vModelRadio:Jh,vModelSelect:E0,vModelText:Dl,vShow:_0,version:h0,warn:rE,watch:Vr,watchEffect:eM,watchPostEffect:T_,watchSyncEffect:w_,withAsyncContext:TM,withCtx:Yi,withDefaults:yM,withDirectives:nM,withKeys:ZE,withMemo:sE,withModifiers:YE,withScopeId:kS},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const qo=Symbol(""),Io=Symbol(""),Qh=Symbol(""),Nl=Symbol(""),N0=Symbol(""),js=Symbol(""),U0=Symbol(""),O0=Symbol(""),ed=Symbol(""),td=Symbol(""),ga=Symbol(""),nd=Symbol(""),F0=Symbol(""),id=Symbol(""),sd=Symbol(""),rd=Symbol(""),od=Symbol(""),ad=Symbol(""),ld=Symbol(""),B0=Symbol(""),k0=Symbol(""),uu=Symbol(""),Ul=Symbol(""),cd=Symbol(""),ud=Symbol(""),jo=Symbol(""),_a=Symbol(""),fd=Symbol(""),Xf=Symbol(""),tb=Symbol(""),qf=Symbol(""),Ol=Symbol(""),nb=Symbol(""),ib=Symbol(""),hd=Symbol(""),sb=Symbol(""),rb=Symbol(""),dd=Symbol(""),V0=Symbol(""),$r={[qo]:"Fragment",[Io]:"Teleport",[Qh]:"Suspense",[Nl]:"KeepAlive",[N0]:"BaseTransition",[js]:"openBlock",[U0]:"createBlock",[O0]:"createElementBlock",[ed]:"createVNode",[td]:"createElementVNode",[ga]:"createCommentVNode",[nd]:"createTextVNode",[F0]:"createStaticVNode",[id]:"resolveComponent",[sd]:"resolveDynamicComponent",[rd]:"resolveDirective",[od]:"resolveFilter",[ad]:"withDirectives",[ld]:"renderList",[B0]:"renderSlot",[k0]:"createSlots",[uu]:"toDisplayString",[Ul]:"mergeProps",[cd]:"normalizeClass",[ud]:"normalizeStyle",[jo]:"normalizeProps",[_a]:"guardReactiveProps",[fd]:"toHandlers",[Xf]:"camelize",[tb]:"capitalize",[qf]:"toHandlerKey",[Ol]:"setBlockTracking",[nb]:"pushScopeId",[ib]:"popScopeId",[hd]:"withCtx",[sb]:"unref",[rb]:"isRef",[dd]:"withMemo",[V0]:"isMemoSame"};function ob(t){Object.getOwnPropertySymbols(t).forEach(e=>{$r[e]=t[e]})}const Tn={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function ab(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:Tn}}function $o(t,e,n,i,s,r,o,a=!1,l=!1,c=!1,u=Tn){return t&&(a?(t.helper(js),t.helper(Zr(t.inSSR,c))):t.helper(Kr(t.inSSR,c)),o&&t.helper(ad)),{type:13,tag:e,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function va(t,e=Tn){return{type:17,loc:e,elements:t}}function Dn(t,e=Tn){return{type:15,loc:e,properties:t}}function St(t,e){return{type:16,loc:Tn,key:He(t)?qe(t,!0):t,value:e}}function qe(t,e=!1,n=Tn,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function qn(t,e=Tn){return{type:8,loc:e,children:t}}function Rt(t,e=[],n=Tn){return{type:14,loc:n,callee:t,arguments:e}}function Yr(t,e=void 0,n=!1,i=!1,s=Tn){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:s}}function jf(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:Tn}}function lb(t,e,n=!1){return{type:20,index:t,value:e,isVNode:n,loc:Tn}}function cb(t){return{type:21,body:t,loc:Tn}}function Kr(t,e){return t||e?ed:td}function Zr(t,e){return t||e?U0:O0}function pd(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(Kr(i,t.isComponent)),e(js),e(Zr(i,t.isComponent)))}const bp=new Uint8Array([123,123]),Tp=new Uint8Array([125,125]);function wp(t){return t>=97&&t<=122||t>=65&&t<=90}function vn(t){return t===32||t===10||t===9||t===12||t===13}function Ni(t){return t===47||t===62||vn(t)}function Fl(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const Wt={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class ub{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=bp,this.delimiterClose=Tp,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=bp,this.delimiterClose=Tp}getPos(e){let n=1,i=e+1;for(let s=this.newlines.length-1;s>=0;s--){const r=this.newlines[s];if(e>r){n=s+2,i=e-r;break}}return{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Ni(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||vn(e)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Wt.TitleEnd||this.currentSequence===Wt.TextareaEnd&&!this.inSFCRoot?e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===Wt.Cdata[this.sequenceIndex]?++this.sequenceIndex===Wt.Cdata.length&&(this.state=28,this.currentSequence=Wt.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Wt.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){if(e===33)this.state=22,this.sectionStart=this.index+1;else if(e===63)this.state=24,this.sectionStart=this.index+1;else if(wp(e))if(this.sectionStart=this.index,this.mode===0)this.state=6;else if(this.inSFCRoot)this.state=34;else if(this.inXML)this.state=6;else{const n=e|32;n===116?this.state=30:this.state=n===115?29:6}else e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Ni(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Ni(e)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(Fl("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){vn(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=wp(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||vn(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):vn(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):vn(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Ni(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Ni(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Ni(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Ni(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Ni(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):vn(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):vn(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){vn(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=Wt.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){const n=e|32;n===Wt.ScriptEnd[3]?this.startSpecial(Wt.ScriptEnd,4):n===Wt.StyleEnd[3]?this.startSpecial(Wt.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){const n=e|32;n===Wt.TitleEnd[3]?this.startSpecial(Wt.TitleEnd,4):n===Wt.TextareaEnd[3]?this.startSpecial(Wt.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===Wt.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}}function Ap(t,{compatConfig:e}){const n=e&&e[t];return t==="MODE"?n||3:n}function Fs(t,e){const n=Ap("MODE",e),i=Ap(t,e);return n===3?i===!0:i!==!1}function Yo(t,e,n,...i){return Fs(t,e)}function md(t){throw t}function H0(t){}function gt(t,e,n,i){const s=`https://vuejs.org/error-reference/#compiler-${t}`,r=new SyntaxError(String(s));return r.code=t,r.loc=e,r}const fn=t=>t.type===4&&t.isStatic;function z0(t){switch(t){case"Teleport":case"teleport":return Io;case"Suspense":case"suspense":return Qh;case"KeepAlive":case"keep-alive":return Nl;case"BaseTransition":case"base-transition":return N0}}const fb=/^\d|[^\$\w]/,gd=t=>!fb.test(t),hb=/[A-Za-z_$\xA0-\uFFFF]/,db=/[\.\?\w$\xA0-\uFFFF]/,pb=/\s+[.[]\s*|\s*[.[]\s+/g,mb=t=>{t=t.trim().replace(pb,o=>o.trim());let e=0,n=[],i=0,s=0,r=null;for(let o=0;o<t.length;o++){const a=t.charAt(o);switch(e){case 0:if(a==="[")n.push(e),e=1,i++;else if(a==="(")n.push(e),e=2,s++;else if(!(o===0?hb:db).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(e),e=3,r=a):a==="["?i++:a==="]"&&(--i||(e=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(e),e=3,r=a;else if(a==="(")s++;else if(a===")"){if(o===t.length-1)return!1;--s||(e=n.pop())}break;case 3:a===r&&(e=n.pop(),r=null);break}}return!i&&!s},G0=mb;function Hn(t,e,n=!1){for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&(n||s.exp)&&(He(e)?s.name===e:e.test(s.name)))return s}}function fu(t,e,n=!1,i=!1){for(let s=0;s<t.props.length;s++){const r=t.props[s];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&Ts(r.arg,e))return r}}function Ts(t,e){return!!(t&&fn(t)&&t.content===e)}function gb(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Fu(t){return t.type===5||t.type===2}function _b(t){return t.type===7&&t.name==="slot"}function Bl(t){return t.type===1&&t.tagType===3}function kl(t){return t.type===1&&t.tagType===2}const vb=new Set([jo,_a]);function W0(t,e=[]){if(t&&!He(t)&&t.type===14){const n=t.callee;if(!He(n)&&vb.has(n))return W0(t.arguments[0],e.concat(t))}return[t,e]}function Vl(t,e,n){let i,s=t.type===13?t.props:t.arguments[2],r=[],o;if(s&&!He(s)&&s.type===14){const a=W0(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||He(s))i=Dn([e]);else if(s.type===14){const a=s.arguments[0];!He(a)&&a.type===15?Cp(e,a)||a.properties.unshift(e):s.callee===fd?i=Rt(n.helper(Ul),[Dn([e]),s]):s.arguments.unshift(Dn([e])),!i&&(i=s)}else s.type===15?(Cp(e,s)||s.properties.unshift(e),i=s):(i=Rt(n.helper(Ul),[Dn([e]),s]),o&&o.callee===_a&&(o=r[r.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function Cp(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function Ko(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function yb(t){return t.type===14&&t.callee===dd?t.arguments[1].returns:t}const xb=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,X0={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:pl,isPreTag:pl,isCustomElement:pl,onError:md,onWarn:H0,comments:!1,prefixIdentifiers:!1};let rt=X0,Zo=null,Bs="",jt=null,et=null,an="",_i=-1,gs=-1,Hl=0,ji=!1,$f=null;const yt=[],xt=new ub(yt,{onerr:li,ontext(t,e){ka(Vt(t,e),t,e)},ontextentity(t,e,n){ka(t,e,n)},oninterpolation(t,e){if(ji)return ka(Vt(t,e),t,e);let n=t+xt.delimiterOpen.length,i=e-xt.delimiterClose.length;for(;vn(Bs.charCodeAt(n));)n++;for(;vn(Bs.charCodeAt(i-1));)i--;let s=Vt(n,i);s.includes("&")&&(s=rt.decodeEntities(s,!1)),Yf({type:5,content:vl(s,!1,Ct(n,i)),loc:Ct(t,e)})},onopentagname(t,e){const n=Vt(t,e);jt={type:1,tag:n,ns:rt.getNamespace(n,yt[0],rt.ns),tagType:0,props:[],children:[],loc:Ct(t-1,e),codegenNode:void 0}},onopentagend(t){Pp(t)},onclosetag(t,e){const n=Vt(t,e);if(!rt.isVoidTag(n)){let i=!1;for(let s=0;s<yt.length;s++)if(yt[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&li(24,yt[0].loc.start.offset);for(let o=0;o<=s;o++){const a=yt.shift();_l(a,e,o<s)}break}i||li(23,q0(t,60))}},onselfclosingtag(t){var e;const n=jt.tag;jt.isSelfClosing=!0,Pp(t),((e=yt[0])==null?void 0:e.tag)===n&&_l(yt.shift(),t)},onattribname(t,e){et={type:6,name:Vt(t,e),nameLoc:Ct(t,e),value:void 0,loc:Ct(t)}},ondirname(t,e){const n=Vt(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!ji&&i===""&&li(26,t),ji||i==="")et={type:6,name:n,nameLoc:Ct(t,e),value:void 0,loc:Ct(t)};else if(et={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?["prop"]:[],loc:Ct(t)},i==="pre"){ji=xt.inVPre=!0,$f=jt;const s=jt.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=Rb(s[r]))}},ondirarg(t,e){if(t===e)return;const n=Vt(t,e);if(ji)et.name+=n,ws(et.nameLoc,e);else{const i=n[0]!=="[";et.arg=vl(i?n:n.slice(1,-1),i,Ct(t,e),i?3:0)}},ondirmodifier(t,e){const n=Vt(t,e);if(ji)et.name+="."+n,ws(et.nameLoc,e);else if(et.name==="slot"){const i=et.arg;i&&(i.content+="."+n,ws(i.loc,e))}else et.modifiers.push(n)},onattribdata(t,e){an+=Vt(t,e),_i<0&&(_i=t),gs=e},onattribentity(t,e,n){an+=t,_i<0&&(_i=e),gs=n},onattribnameend(t){const e=et.loc.start.offset,n=Vt(e,t);et.type===7&&(et.rawName=n),jt.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&li(2,e)},onattribend(t,e){if(jt&&et){if(ws(et.loc,e),t!==0)if(an.includes("&")&&(an=rt.decodeEntities(an,!0)),et.type===6)et.name==="class"&&(an=$0(an).trim()),t===1&&!an&&li(13,e),et.value={type:2,content:an,loc:t===1?Ct(_i,gs):Ct(_i-1,gs+1)},xt.inSFCRoot&&jt.tag==="template"&&et.name==="lang"&&an&&an!=="html"&&xt.enterRCDATA(Fl("</template"),0);else{let n=0;et.exp=vl(an,!1,Ct(_i,gs),0,n),et.name==="for"&&(et.forParseResult=Mb(et.exp));let i=-1;et.name==="bind"&&(i=et.modifiers.indexOf("sync"))>-1&&Yo("COMPILER_V_BIND_SYNC",rt,et.loc,et.rawName)&&(et.name="model",et.modifiers.splice(i,1))}(et.type!==7||et.name!=="pre")&&jt.props.push(et)}an="",_i=gs=-1},oncomment(t,e){rt.comments&&Yf({type:3,content:Vt(t,e),loc:Ct(t-4,e+3)})},onend(){const t=Bs.length;for(let e=0;e<yt.length;e++)_l(yt[e],t-1),li(24,yt[e].loc.start.offset)},oncdata(t,e){yt[0].ns!==0?ka(Vt(t,e),t,e):li(1,t-9)},onprocessinginstruction(t){(yt[0]?yt[0].ns:rt.ns)===0&&li(21,t-1)}}),Rp=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Sb=/^\(|\)$/g;function Mb(t){const e=t.loc,n=t.content,i=n.match(xb);if(!i)return;const[,s,r]=i,o=(f,h,d=!1)=>{const g=e.start.offset+h,v=g+f.length;return vl(f,!1,Ct(g,v),0,d?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(Sb,"").trim();const c=s.indexOf(l),u=l.match(Rp);if(u){l=l.replace(Rp,"").trim();const f=u[1].trim();let h;if(f&&(h=n.indexOf(f,c+l.length),a.key=o(f,h,!0)),u[2]){const d=u[2].trim();d&&(a.index=o(d,n.indexOf(d,a.key?h+f.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function Vt(t,e){return Bs.slice(t,e)}function Pp(t){xt.inSFCRoot&&(jt.innerLoc=Ct(t+1,t+1)),Yf(jt);const{tag:e,ns:n}=jt;n===0&&rt.isPreTag(e)&&Hl++,rt.isVoidTag(e)?_l(jt,t):(yt.unshift(jt),(n===1||n===2)&&(xt.inXML=!0)),jt=null}function ka(t,e,n){var i;{const o=(i=yt[0])==null?void 0:i.tag;o!=="script"&&o!=="style"&&t.includes("&")&&(t=rt.decodeEntities(t,!1))}const s=yt[0]||Zo,r=s.children[s.children.length-1];(r==null?void 0:r.type)===2?(r.content+=t,ws(r.loc,n)):s.children.push({type:2,content:t,loc:Ct(e,n)})}function _l(t,e,n=!1){n?ws(t.loc,q0(e,60)):ws(t.loc,e+1),xt.inSFCRoot&&(t.children.length?t.innerLoc.end=it({},t.children[t.children.length-1].loc.end):t.innerLoc.end=it({},t.innerLoc.start),t.innerLoc.source=Vt(t.innerLoc.start.offset,t.innerLoc.end.offset));const{tag:i,ns:s}=t;ji||(i==="slot"?t.tagType=2:Lp(t)?t.tagType=3:bb(t)&&(t.tagType=1)),xt.inRCDATA||(t.children=j0(t.children,t.tag)),s===0&&rt.isPreTag(i)&&Hl--,$f===t&&(ji=xt.inVPre=!1,$f=null),xt.inXML&&(yt[0]?yt[0].ns:rt.ns)===0&&(xt.inXML=!1);{const r=t.props;if(!xt.inSFCRoot&&Fs("COMPILER_NATIVE_TEMPLATE",rt)&&t.tag==="template"&&!Lp(t)){const a=yt[0]||Zo,l=a.children.indexOf(t);a.children.splice(l,1,...t.children)}const o=r.find(a=>a.type===6&&a.name==="inline-template");o&&Yo("COMPILER_INLINE_TEMPLATE",rt,o.loc)&&t.children.length&&(o.value={type:2,content:Vt(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:o.loc})}}function q0(t,e){let n=t;for(;Bs.charCodeAt(n)!==e&&n>=0;)n--;return n}const Eb=new Set(["if","else","else-if","for","slot"]);function Lp({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&Eb.has(e[n].name))return!0}return!1}function bb({tag:t,props:e}){var n;if(rt.isCustomElement(t))return!1;if(t==="component"||Tb(t.charCodeAt(0))||z0(t)||(n=rt.isBuiltInComponent)!=null&&n.call(rt,t)||rt.isNativeTag&&!rt.isNativeTag(t))return!0;for(let i=0;i<e.length;i++){const s=e[i];if(s.type===6){if(s.name==="is"&&s.value){if(s.value.content.startsWith("vue:"))return!0;if(Yo("COMPILER_IS_ON_ELEMENT",rt,s.loc))return!0}}else if(s.name==="bind"&&Ts(s.arg,"is")&&Yo("COMPILER_IS_ON_ELEMENT",rt,s.loc))return!0}return!1}function Tb(t){return t>64&&t<91}const wb=/\r\n/g;function j0(t,e){var n,i;const s=rt.whitespace!=="preserve";let r=!1;for(let o=0;o<t.length;o++){const a=t[o];if(a.type===2)if(Hl)a.content=a.content.replace(wb,`
`);else if(Ab(a.content)){const l=(n=t[o-1])==null?void 0:n.type,c=(i=t[o+1])==null?void 0:i.type;!l||!c||s&&(l===3&&(c===3||c===1)||l===1&&(c===3||c===1&&Cb(a.content)))?(r=!0,t[o]=null):a.content=" "}else s&&(a.content=$0(a.content))}if(Hl&&e&&rt.isPreTag(e)){const o=t[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}return r?t.filter(Boolean):t}function Ab(t){for(let e=0;e<t.length;e++)if(!vn(t.charCodeAt(e)))return!1;return!0}function Cb(t){for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function $0(t){let e="",n=!1;for(let i=0;i<t.length;i++)vn(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function Yf(t){(yt[0]||Zo).children.push(t)}function Ct(t,e){return{start:xt.getPos(t),end:e==null?e:xt.getPos(e),source:e==null?e:Vt(t,e)}}function ws(t,e){t.end=xt.getPos(e),t.source=Vt(t.start.offset,e)}function Rb(t){const e={type:6,name:t.rawName,nameLoc:Ct(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){const n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function vl(t,e=!1,n,i=0,s=0){return qe(t,e,n,i)}function li(t,e,n){rt.onError(gt(t,Ct(e,e)))}function Pb(){xt.reset(),jt=null,et=null,an="",_i=-1,gs=-1,yt.length=0}function Lb(t,e){if(Pb(),Bs=t,rt=it({},X0),e){let s;for(s in e)e[s]!=null&&(rt[s]=e[s])}xt.mode=rt.parseMode==="html"?1:rt.parseMode==="sfc"?2:0,xt.inXML=rt.ns===1||rt.ns===2;const n=e==null?void 0:e.delimiters;n&&(xt.delimiterOpen=Fl(n[0]),xt.delimiterClose=Fl(n[1]));const i=Zo=ab([],t);return xt.parse(Bs),i.loc=Ct(0,t.length),i.children=j0(i.children),Zo=null,i}function Ib(t,e){yl(t,e,Y0(t,t.children[0]))}function Y0(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!kl(e)}function yl(t,e,n=!1){const{children:i}=t,s=i.length;let r=0;for(let o=0;o<i.length;o++){const a=i[o];if(a.type===1&&a.tagType===0){const l=n?0:Nn(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag="-1",a.codegenNode=e.hoist(a.codegenNode),r++;continue}}else{const c=a.codegenNode;if(c.type===13){const u=Q0(c);if((!u||u===512||u===1)&&Z0(a,e)>=2){const f=J0(a);f&&(c.props=e.hoist(f))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,yl(a,e),l&&e.scopes.vSlot--}else if(a.type===11)yl(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)yl(a.branches[l],e,a.branches[l].children.length===1)}if(r&&e.transformHoist&&e.transformHoist(i,e,t),r&&r===s&&t.type===1&&t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&be(t.codegenNode.children)){const o=e.hoist(va(t.codegenNode.children));e.hmr&&(o.content=`[...${o.content}]`),t.codegenNode.children=o}}function Nn(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const s=t.codegenNode;if(s.type!==13||s.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject")return 0;if(Q0(s))return n.set(t,0),0;{let a=3;const l=Z0(t,e);if(l===0)return n.set(t,0),0;l<a&&(a=l);for(let c=0;c<t.children.length;c++){const u=Nn(t.children[c],e);if(u===0)return n.set(t,0),0;u<a&&(a=u)}if(a>1)for(let c=0;c<t.props.length;c++){const u=t.props[c];if(u.type===7&&u.name==="bind"&&u.exp){const f=Nn(u.exp,e);if(f===0)return n.set(t,0),0;f<a&&(a=f)}}if(s.isBlock){for(let c=0;c<t.props.length;c++)if(t.props[c].type===7)return n.set(t,0),0;e.removeHelper(js),e.removeHelper(Zr(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper(Kr(e.inSSR,s.isComponent))}return n.set(t,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Nn(t.content,e);case 4:return t.constType;case 8:let o=3;for(let a=0;a<t.children.length;a++){const l=t.children[a];if(He(l)||jn(l))continue;const c=Nn(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const Db=new Set([cd,ud,jo,_a]);function K0(t,e){if(t.type===14&&!He(t.callee)&&Db.has(t.callee)){const n=t.arguments[0];if(n.type===4)return Nn(n,e);if(n.type===14)return K0(n,e)}return 0}function Z0(t,e){let n=3;const i=J0(t);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Nn(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=Nn(a,e):a.type===14?c=K0(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function J0(t){const e=t.codegenNode;if(e.type===13)return e.props}function Q0(t){const e=t.patchFlag;return e?parseInt(e,10):void 0}function Nb(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=Lt,isCustomElement:u=Lt,expressionPlugins:f=[],scopeId:h=null,slotted:d=!0,ssr:g=!1,inSSR:v=!1,ssrCssVars:m="",bindingMetadata:p=st,inline:x=!1,isTS:_=!1,onError:E=md,onWarn:w=H0,compatConfig:T}){const C=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),L={filename:e,selfName:C&&er(Mt(C[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:h,slotted:d,ssr:g,inSSR:v,ssrCssVars:m,bindingMetadata:p,inline:x,isTS:_,onError:E,onWarn:w,compatConfig:T,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new WeakMap,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(S){const M=L.helpers.get(S)||0;return L.helpers.set(S,M+1),S},removeHelper(S){const M=L.helpers.get(S);if(M){const N=M-1;N?L.helpers.set(S,N):L.helpers.delete(S)}},helperString(S){return`_${$r[L.helper(S)]}`},replaceNode(S){L.parent.children[L.childIndex]=L.currentNode=S},removeNode(S){const M=L.parent.children,N=S?M.indexOf(S):L.currentNode?L.childIndex:-1;!S||S===L.currentNode?(L.currentNode=null,L.onNodeRemoved()):L.childIndex>N&&(L.childIndex--,L.onNodeRemoved()),L.parent.children.splice(N,1)},onNodeRemoved:Lt,addIdentifiers(S){},removeIdentifiers(S){},hoist(S){He(S)&&(S=qe(S)),L.hoists.push(S);const M=qe(`_hoisted_${L.hoists.length}`,!1,S.loc,2);return M.hoisted=S,M},cache(S,M=!1){return lb(L.cached++,S,M)}};return L.filters=new Set,L}function Ub(t,e){const n=Nb(t,e);hu(t,n),e.hoistStatic&&Ib(t,n),e.ssr||Ob(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function Ob(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const s=i[0];if(Y0(t,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&pd(r,e),t.codegenNode=r}else t.codegenNode=s}else if(i.length>1){let s=64;t.codegenNode=$o(e,n(qo),void 0,t.children,s+"",void 0,void 0,!0,void 0,!1)}}function Fb(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const s=t.children[n];He(s)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=i,hu(s,e))}}function hu(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&(be(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(ga);break;case 5:e.ssr||e.helper(uu);break;case 9:for(let r=0;r<t.branches.length;r++)hu(t.branches[r],e);break;case 10:case 11:case 1:case 0:Fb(t,e);break}e.currentNode=t;let s=i.length;for(;s--;)i[s]()}function ev(t,e){const n=He(t)?i=>i===t:i=>t.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(_b))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const du="/*#__PURE__*/",tv=t=>`${$r[t]}: _${$r[t]}`;function Ip(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:h=!1}){const d={mode:e,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:h,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${$r[v]}`},push(v,m=-2,p){d.code+=v},indent(){g(++d.indentLevel)},deindent(v=!1){v?--d.indentLevel:g(--d.indentLevel)},newline(){g(d.indentLevel)}};function g(v){d.push(`
`+"  ".repeat(v),0)}return d}function Bb(t,e={}){const n=Ip(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,f=Array.from(t.helpers),h=f.length>0,d=!r&&i!=="module",g=!1,v=g?Ip(t,e):n;kb(t,v);const m=u?"ssrRender":"render",x=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${m}(${x}) {`),o(),d&&(s("with (_ctx) {"),o(),h&&(s(`const { ${f.map(tv).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(Bu(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(Bu(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),Bu(t.filters,"filter",n),l()),t.temps>0){s("let ");for(let _=0;_<t.temps;_++)s(`${_>0?", ":""}_temp${_}`)}return(t.components.length||t.directives.length||t.temps)&&(s(`
`,0),l()),u||s("return "),t.codegenNode?Zt(t.codegenNode,n):s("null"),d&&(a(),s("}")),a(),s("}"),{ast:t,code:n.code,preamble:g?v.code:"",map:n.map?n.map.toJSON():void 0}}function kb(t,e){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(t.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`,-1),t.hoists.length)){const f=[ed,td,ga,nd,F0].filter(h=>u.includes(h)).map(tv).join(", ");s(`const { ${f} } = _Vue
`,-1)}Vb(t.hoists,e),r(),s("return ")}function Bu(t,e,{helper:n,push:i,newline:s,isTS:r}){const o=n(e==="filter"?od:e==="component"?id:rd);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${Ko(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&s()}}function Vb(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i,helper:s,scopeId:r,mode:o}=e;i();for(let a=0;a<t.length;a++){const l=t[a];l&&(n(`const _hoisted_${a+1} = `),Zt(l,e),i())}e.pure=!1}function _d(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),ya(t,e,n),n&&e.deindent(),e.push("]")}function ya(t,e,n=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];He(a)?s(a,-3):be(a)?_d(a,e):Zt(a,e),o<t.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function Zt(t,e){if(He(t)){e.push(t,-3);return}if(jn(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:Zt(t.codegenNode,e);break;case 2:Hb(t,e);break;case 4:nv(t,e);break;case 5:zb(t,e);break;case 12:Zt(t.codegenNode,e);break;case 8:iv(t,e);break;case 3:Wb(t,e);break;case 13:Xb(t,e);break;case 14:jb(t,e);break;case 15:$b(t,e);break;case 17:Yb(t,e);break;case 18:Kb(t,e);break;case 19:Zb(t,e);break;case 20:Jb(t,e);break;case 21:ya(t.body,e,!0,!1);break}}function Hb(t,e){e.push(JSON.stringify(t.content),-3,t)}function nv(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function zb(t,e){const{push:n,helper:i,pure:s}=e;s&&n(du),n(`${i(uu)}(`),Zt(t.content,e),n(")")}function iv(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];He(i)?e.push(i,-3):Zt(i,e)}}function Gb(t,e){const{push:n}=e;if(t.type===8)n("["),iv(t,e),n("]");else if(t.isStatic){const i=gd(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function Wb(t,e){const{push:n,helper:i,pure:s}=e;s&&n(du),n(`${i(ga)}(${JSON.stringify(t.content)})`,-3,t)}function Xb(t,e){const{push:n,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:h,isComponent:d}=t;u&&n(i(ad)+"("),f&&n(`(${i(js)}(${h?"true":""}), `),s&&n(du);const g=f?Zr(e.inSSR,d):Kr(e.inSSR,d);n(i(g)+"(",-2,t),ya(qb([r,o,a,l,c]),e),n(")"),f&&n(")"),u&&(n(", "),Zt(u,e),n(")"))}function qb(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function jb(t,e){const{push:n,helper:i,pure:s}=e,r=He(t.callee)?t.callee:i(t.callee);s&&n(du),n(r+"(",-2,t),ya(t.arguments,e),n(")")}function $b(t,e){const{push:n,indent:i,deindent:s,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];Gb(c,e),n(": "),Zt(u,e),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function Yb(t,e){_d(t.elements,e)}function Kb(t,e){const{push:n,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${$r[hd]}(`),n("(",-2,t),be(r)?ya(r,e):r&&Zt(r,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),be(o)?_d(o,e):Zt(o,e)):a&&Zt(a,e),(l||a)&&(s(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function Zb(t,e){const{test:n,consequent:i,alternate:s,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const f=!gd(n.content);f&&o("("),nv(n,e),f&&o(")")}else o("("),Zt(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),Zt(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=s.type===19;u||e.indentLevel++,Zt(s,e),u||e.indentLevel--,r&&l(!0)}function Jb(t,e){const{push:n,helper:i,indent:s,deindent:r,newline:o}=e;n(`_cache[${t.index}] || (`),t.isVNode&&(s(),n(`${i(Ol)}(-1),`),o()),n(`_cache[${t.index}] = `),Zt(t.value,e),t.isVNode&&(n(","),o(),n(`${i(Ol)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const Qb=ev(/^(if|else|else-if)$/,(t,e,n)=>eT(t,e,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=Np(s,l,n);else{const c=tT(i.codegenNode);c.alternate=Np(s,l+i.branches.length-1,n)}}}));function eT(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:t.loc;n.onError(gt(28,e.loc)),e.exp=qe("true",!1,s)}if(e.name==="if"){const s=Dp(t,e),r={type:9,loc:t.loc,branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(t);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(gt(30,t.loc)),n.removeNode();const a=Dp(t,e);o.branches.push(a);const l=i&&i(o,a,!1);hu(a,n),l&&l(),n.currentNode=null}else n.onError(gt(30,t.loc));break}}}function Dp(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!Hn(t,"for")?t.children:[t],userKey:fu(t,"key"),isTemplateIf:n}}function Np(t,e,n){return t.condition?jf(t.condition,Up(t,e,n),Rt(n.helper(ga),['""',"true"])):Up(t,e,n)}function Up(t,e,n){const{helper:i}=n,s=St("key",qe(`${e}`,!1,Tn,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return Vl(l,s,n),l}else return $o(n,i(qo),Dn([s]),r,64+"",void 0,void 0,!0,!1,!1,t.loc);else{const l=o.codegenNode,c=yb(l);return c.type===13&&pd(c,n),Vl(c,s,n),l}}function tT(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const nT=ev("for",(t,e,n)=>{const{helper:i,removeHelper:s}=n;return iT(t,e,n,r=>{const o=Rt(i(ld),[r.source]),a=Bl(t),l=Hn(t,"memo"),c=fu(t,"key"),u=c&&(c.type===6?qe(c.value.content,!0):c.exp),f=c?St("key",u):null,h=r.source.type===4&&r.source.constType>0,d=h?64:c?128:256;return r.codegenNode=$o(n,i(qo),void 0,o,d+"",void 0,void 0,!0,!h,!1,t.loc),()=>{let g;const{children:v}=r,m=v.length!==1||v[0].type!==1,p=kl(t)?t:a&&t.children.length===1&&kl(t.children[0])?t.children[0]:null;if(p?(g=p.codegenNode,a&&f&&Vl(g,f,n)):m?g=$o(n,i(qo),f?Dn([f]):void 0,t.children,"64",void 0,void 0,!0,void 0,!1):(g=v[0].codegenNode,a&&f&&Vl(g,f,n),g.isBlock!==!h&&(g.isBlock?(s(js),s(Zr(n.inSSR,g.isComponent))):s(Kr(n.inSSR,g.isComponent))),g.isBlock=!h,g.isBlock?(i(js),i(Zr(n.inSSR,g.isComponent))):i(Kr(n.inSSR,g.isComponent))),l){const x=Yr(Kf(r.parseResult,[qe("_cached")]));x.body=cb([qn(["const _memo = (",l.exp,")"]),qn(["if (_cached",...u?[" && _cached.key === ",u]:[],` && ${n.helperString(V0)}(_cached, _memo)) return _cached`]),qn(["const _item = ",g]),qe("_item.memo = _memo"),qe("return _item")]),o.arguments.push(x,qe("_cache"),qe(String(n.cached++)))}else o.arguments.push(Yr(Kf(r.parseResult),g,!0))}})});function iT(t,e,n,i){if(!e.exp){n.onError(gt(31,e.loc));return}const s=e.forParseResult;if(!s){n.onError(gt(32,e.loc));return}sv(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:f}=s,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:s,children:Bl(t)?t.children:[t]};n.replaceNode(h),a.vFor++;const d=i&&i(h);return()=>{a.vFor--,d&&d()}}function sv(t,e){t.finalized||(t.finalized=!0)}function Kf({value:t,key:e,index:n},i=[]){return sT([t,e,n,...i])}function sT(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||qe("_".repeat(i+1),!1))}const Op=qe("undefined",!1),rT=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=Hn(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},oT=(t,e,n,i)=>Yr(t,n,!1,!0,n.length?n[0].loc:i);function aT(t,e,n=oT){e.helper(hd);const{children:i,loc:s}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=Hn(t,"slot",!0);if(l){const{arg:m,exp:p}=l;m&&!fn(m)&&(a=!0),r.push(St(m||qe("default",!0),n(p,void 0,i,s)))}let c=!1,u=!1;const f=[],h=new Set;let d=0;for(let m=0;m<i.length;m++){const p=i[m];let x;if(!Bl(p)||!(x=Hn(p,"slot",!0))){p.type!==3&&f.push(p);continue}if(l){e.onError(gt(37,x.loc));break}c=!0;const{children:_,loc:E}=p,{arg:w=qe("default",!0),exp:T,loc:C}=x;let L;fn(w)?L=w?w.content:"default":a=!0;const S=Hn(p,"for"),M=n(T,S,_,E);let N,O;if(N=Hn(p,"if"))a=!0,o.push(jf(N.exp,Va(w,M,d++),Op));else if(O=Hn(p,/^else(-if)?$/,!0)){let $=m,I;for(;$--&&(I=i[$],I.type===3););if(I&&Bl(I)&&Hn(I,"if")){i.splice(m,1),m--;let H=o[o.length-1];for(;H.alternate.type===19;)H=H.alternate;H.alternate=O.exp?jf(O.exp,Va(w,M,d++),Op):Va(w,M,d++)}else e.onError(gt(30,O.loc))}else if(S){a=!0;const $=S.forParseResult;$?(sv($),o.push(Rt(e.helper(ld),[$.source,Yr(Kf($),Va(w,M),!0)]))):e.onError(gt(32,S.loc))}else{if(L){if(h.has(L)){e.onError(gt(38,C));continue}h.add(L),L==="default"&&(u=!0)}r.push(St(w,M))}}if(!l){const m=(p,x)=>{const _=n(p,void 0,x,s);return e.compatConfig&&(_.isNonScopedSlot=!0),St("default",_)};c?f.length&&f.some(p=>rv(p))&&(u?e.onError(gt(39,f[0].loc)):r.push(m(void 0,f))):r.push(m(void 0,i))}const g=a?2:xl(t.children)?3:1;let v=Dn(r.concat(St("_",qe(g+"",!1))),s);return o.length&&(v=Rt(e.helper(k0),[v,va(o)])),{slots:v,hasDynamicSlots:a}}function Va(t,e,n){const i=[St("name",t),St("fn",e)];return n!=null&&i.push(St("key",qe(String(n),!0))),Dn(i)}function xl(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||xl(n.children))return!0;break;case 9:if(xl(n.branches))return!0;break;case 10:case 11:if(xl(n.children))return!0;break}}return!1}function rv(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():rv(t.content)}const ov=new WeakMap,lT=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:s}=t,r=t.tagType===1;let o=r?cT(t,e):`"${i}"`;const a=at(o)&&o.callee===sd;let l,c,u,f=0,h,d,g,v=a||o===Io||o===Qh||!r&&(i==="svg"||i==="foreignObject");if(s.length>0){const m=av(t,e,void 0,r,a);l=m.props,f=m.patchFlag,d=m.dynamicPropNames;const p=m.directives;g=p&&p.length?va(p.map(x=>fT(x,e))):void 0,m.shouldUseBlock&&(v=!0)}if(t.children.length>0)if(o===Nl&&(v=!0,f|=1024),r&&o!==Io&&o!==Nl){const{slots:p,hasDynamicSlots:x}=aT(t,e);c=p,x&&(f|=1024)}else if(t.children.length===1&&o!==Io){const p=t.children[0],x=p.type,_=x===5||x===8;_&&Nn(p,e)===0&&(f|=1),_||x===2?c=p:c=t.children}else c=t.children;f!==0&&(u=String(f),d&&d.length&&(h=hT(d))),t.codegenNode=$o(e,o,l,c,u,h,g,!!v,!1,r,t.loc)};function cT(t,e,n=!1){let{tag:i}=t;const s=Zf(i),r=fu(t,"is");if(r)if(s||Fs("COMPILER_IS_ON_ELEMENT",e)){const a=r.type===6?r.value&&qe(r.value.content,!0):r.exp;if(a)return Rt(e.helper(sd),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=z0(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(id),e.components.add(i),Ko(i,"component"))}function av(t,e,n=t.props,i,s,r=!1){const{tag:o,loc:a,children:l}=t;let c=[];const u=[],f=[],h=l.length>0;let d=!1,g=0,v=!1,m=!1,p=!1,x=!1,_=!1,E=!1;const w=[],T=S=>{c.length&&(u.push(Dn(Fp(c),a)),c=[]),S&&u.push(S)},C=({key:S,value:M})=>{if(fn(S)){const N=S.content,O=Js(N);if(O&&(!i||s)&&N.toLowerCase()!=="onclick"&&N!=="onUpdate:modelValue"&&!Ls(N)&&(x=!0),O&&Ls(N)&&(E=!0),O&&M.type===14&&(M=M.arguments[0]),M.type===20||(M.type===4||M.type===8)&&Nn(M,e)>0)return;N==="ref"?v=!0:N==="class"?m=!0:N==="style"?p=!0:N!=="key"&&!w.includes(N)&&w.push(N),i&&(N==="class"||N==="style")&&!w.includes(N)&&w.push(N)}else _=!0};for(let S=0;S<n.length;S++){const M=n[S];if(M.type===6){const{loc:N,name:O,nameLoc:$,value:I}=M;let H=!0;if(O==="ref"&&(v=!0,e.scopes.vFor>0&&c.push(St(qe("ref_for",!0),qe("true")))),O==="is"&&(Zf(o)||I&&I.content.startsWith("vue:")||Fs("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(St(qe(O,!0,$),qe(I?I.content:"",H,I?I.loc:N)))}else{const{name:N,arg:O,exp:$,loc:I,modifiers:H}=M,V=N==="bind",Y=N==="on";if(N==="slot"){i||e.onError(gt(40,I));continue}if(N==="once"||N==="memo"||N==="is"||V&&Ts(O,"is")&&(Zf(o)||Fs("COMPILER_IS_ON_ELEMENT",e))||Y&&r)continue;if((V&&Ts(O,"key")||Y&&h&&Ts(O,"vue:before-update"))&&(d=!0),V&&Ts(O,"ref")&&e.scopes.vFor>0&&c.push(St(qe("ref_for",!0),qe("true"))),!O&&(V||Y)){if(_=!0,$)if(V){if(T(),Fs("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift($);continue}u.push($)}else T({type:14,loc:I,callee:e.helper(fd),arguments:i?[$]:[$,"true"]});else e.onError(gt(V?34:35,I));continue}V&&H.includes("prop")&&(g|=32);const z=e.directiveTransforms[N];if(z){const{props:ne,needRuntime:ce}=z(M,t,e);!r&&ne.forEach(C),Y&&O&&!fn(O)?T(Dn(ne,a)):c.push(...ne),ce&&(f.push(M),jn(ce)&&ov.set(M,ce))}else Ax(N)||(f.push(M),h&&(d=!0))}}let L;if(u.length?(T(),u.length>1?L=Rt(e.helper(Ul),u,a):L=u[0]):c.length&&(L=Dn(Fp(c),a)),_?g|=16:(m&&!i&&(g|=2),p&&!i&&(g|=4),w.length&&(g|=8),x&&(g|=32)),!d&&(g===0||g===32)&&(v||E||f.length>0)&&(g|=512),!e.inSSR&&L)switch(L.type){case 15:let S=-1,M=-1,N=!1;for(let I=0;I<L.properties.length;I++){const H=L.properties[I].key;fn(H)?H.content==="class"?S=I:H.content==="style"&&(M=I):H.isHandlerKey||(N=!0)}const O=L.properties[S],$=L.properties[M];N?L=Rt(e.helper(jo),[L]):(O&&!fn(O.value)&&(O.value=Rt(e.helper(cd),[O.value])),$&&(p||$.value.type===4&&$.value.content.trim()[0]==="["||$.value.type===17)&&($.value=Rt(e.helper(ud),[$.value])));break;case 14:break;default:L=Rt(e.helper(jo),[Rt(e.helper(_a),[L])]);break}return{props:L,directives:f,patchFlag:g,dynamicPropNames:w,shouldUseBlock:d}}function Fp(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const s=t[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||Js(r))&&uT(o,s):(e.set(r,s),n.push(s))}return n}function uT(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=va([t.value,e.value],t.loc)}function fT(t,e){const n=[],i=ov.get(t);i?n.push(e.helperString(i)):(e.helper(rd),e.directives.add(t.name),n.push(Ko(t.name,"directive")));const{loc:s}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=qe("true",!1,s);n.push(Dn(t.modifiers.map(o=>St(o,r)),s))}return va(n,t.loc)}function hT(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function Zf(t){return t==="component"||t==="Component"}const dT=(t,e)=>{if(kl(t)){const{children:n,loc:i}=t,{slotName:s,slotProps:r}=pT(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=Yr([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Rt(e.helper(B0),o,i)}};function pT(t,e){let n='"default"',i;const s=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];o.type===6?o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=Mt(o.name),s.push(o))):o.name==="bind"&&Ts(o.arg,"name")?o.exp&&(n=o.exp):(o.name==="bind"&&o.arg&&fn(o.arg)&&(o.arg.content=Mt(o.arg.content)),s.push(o))}if(s.length>0){const{props:r,directives:o}=av(t,e,s,!1,!1);i=r,o.length&&e.onError(gt(36,o[0].loc))}return{slotName:n,slotProps:i}}const mT=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,lv=(t,e,n,i)=>{const{loc:s,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(gt(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Nr(Mt(f)):`on:${f}`;a=qe(h,!0,o.loc)}else a=qn([`${n.helperString(qf)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(qf)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const f=G0(l.content),h=!(f||mT.test(l.content)),d=l.content.includes(";");(h||c&&f)&&(l=qn([`${h?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let u={props:[St(a,l||qe("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},gT=(t,e,n)=>{const{modifiers:i,loc:s}=t,r=t.arg;let{exp:o}=t;if(!o&&r.type===4){const a=Mt(r.content);o=t.exp=qe(a,!1,r.loc)}return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.includes("camel")&&(r.type===4?r.isStatic?r.content=Mt(r.content):r.content=`${n.helperString(Xf)}(${r.content})`:(r.children.unshift(`${n.helperString(Xf)}(`),r.children.push(")"))),n.inSSR||(i.includes("prop")&&Bp(r,"."),i.includes("attr")&&Bp(r,"^")),!o||o.type===4&&!o.content.trim()?(n.onError(gt(34,s)),{props:[St(r,qe("",!0,s))]}):{props:[St(r,o)]}},Bp=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},_T=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if(Fu(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(Fu(l))i||(i=n[r]=qn([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(Fu(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Nn(o,e)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Rt(e.helper(nd),a)}}}}},kp=new WeakSet,vT=(t,e)=>{if(t.type===1&&Hn(t,"once",!0))return kp.has(t)||e.inVOnce||e.inSSR?void 0:(kp.add(t),e.inVOnce=!0,e.helper(Ol),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0))})},cv=(t,e,n)=>{const{exp:i,arg:s}=t;if(!i)return n.onError(gt(41,t.loc)),Ha();const r=i.loc.source,o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(gt(44,i.loc)),Ha();if(!o.trim()||!G0(o)&&!!1)return n.onError(gt(42,i.loc)),Ha();const c=s||qe("modelValue",!0),u=s?fn(s)?`onUpdate:${Mt(s.content)}`:qn(['"onUpdate:" + ',s]):"onUpdate:modelValue";let f;const h=n.isTS?"($event: any)":"$event";f=qn([`${h} => ((`,i,") = $event)"]);const d=[St(c,t.exp),St(u,f)];if(t.modifiers.length&&e.tagType===1){const g=t.modifiers.map(m=>(gd(m)?m:JSON.stringify(m))+": true").join(", "),v=s?fn(s)?`${s.content}Modifiers`:qn([s,' + "Modifiers"']):"modelModifiers";d.push(St(v,qe(`{ ${g} }`,!1,t.loc,2)))}return Ha(d)};function Ha(t=[]){return{props:t}}const yT=/[\w).+\-_$\]]/,xT=(t,e)=>{Fs("COMPILER_FILTERS",e)&&(t.type===5&&zl(t.content,e),t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&zl(n.exp,e)}))};function zl(t,e){if(t.type===4)Vp(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?Vp(i,e):i.type===8?zl(t,e):i.type===5&&zl(i.content,e))}}function Vp(t,e){const n=t.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,f,h,d,g,v=[];for(d=0;d<n.length;d++)if(h=f,f=n.charCodeAt(d),i)f===39&&h!==92&&(i=!1);else if(s)f===34&&h!==92&&(s=!1);else if(r)f===96&&h!==92&&(r=!1);else if(o)f===47&&h!==92&&(o=!1);else if(f===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!l&&!c)g===void 0?(u=d+1,g=n.slice(0,d).trim()):m();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let p=d-1,x;for(;p>=0&&(x=n.charAt(p),x===" ");p--);(!x||!yT.test(x))&&(o=!0)}}g===void 0?g=n.slice(0,d).trim():u!==0&&m();function m(){v.push(n.slice(u,d).trim()),u=d+1}if(v.length){for(d=0;d<v.length;d++)g=ST(g,v[d],e);t.content=g}}function ST(t,e,n){n.helper(od);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${Ko(e,"filter")}(${t})`;{const s=e.slice(0,i),r=e.slice(i+1);return n.filters.add(s),`${Ko(s,"filter")}(${t}${r!==")"?","+r:r}`}}const Hp=new WeakSet,MT=(t,e)=>{if(t.type===1){const n=Hn(t,"memo");return!n||Hp.has(t)?void 0:(Hp.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&pd(i,e),t.codegenNode=Rt(e.helper(dd),[n.exp,Yr(void 0,i),"_cache",String(e.cached++)]))})}};function ET(t){return[[vT,Qb,MT,nT,xT,dT,lT,rT,_T],{on:lv,bind:gT,model:cv}]}function bT(t,e={}){const n=e.onError||md,i=e.mode==="module";e.prefixIdentifiers===!0?n(gt(47)):i&&n(gt(48));const s=!1;e.cacheHandlers&&n(gt(49)),e.scopeId&&!i&&n(gt(50));const r=it({},e,{prefixIdentifiers:s}),o=He(t)?Lb(t,r):t,[a,l]=ET();return Ub(o,it({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:it({},l,e.directiveTransforms||{})})),Bb(o,r)}const TT=()=>({props:[]});/**
* @vue/compiler-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const uv=Symbol(""),fv=Symbol(""),hv=Symbol(""),dv=Symbol(""),Jf=Symbol(""),pv=Symbol(""),mv=Symbol(""),gv=Symbol(""),_v=Symbol(""),vv=Symbol("");ob({[uv]:"vModelRadio",[fv]:"vModelCheckbox",[hv]:"vModelText",[dv]:"vModelSelect",[Jf]:"vModelDynamic",[pv]:"withModifiers",[mv]:"withKeys",[gv]:"vShow",[_v]:"Transition",[vv]:"TransitionGroup"});let rr;function wT(t,e=!1){return rr||(rr=document.createElement("div")),e?(rr.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,rr.children[0].getAttribute("foo")):(rr.innerHTML=t,rr.textContent)}const AT={parseMode:"html",isVoidTag:Gx,isNativeTag:t=>Vx(t)||Hx(t)||zx(t),isPreTag:t=>t==="pre",decodeEntities:wT,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return _v;if(t==="TransitionGroup"||t==="transition-group")return vv},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},CT=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:qe("style",!0,e.loc),exp:RT(e.value.content,e.loc),modifiers:[],loc:e.loc})})},RT=(t,e)=>{const n=Xg(t);return qe(JSON.stringify(n),!1,e,3)};function ts(t,e){return gt(t,e)}const PT=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(ts(53,s)),e.children.length&&(n.onError(ts(54,s)),e.children.length=0),{props:[St(qe("innerHTML",!0,s),i||qe("",!0))]}},LT=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(ts(55,s)),e.children.length&&(n.onError(ts(56,s)),e.children.length=0),{props:[St(qe("textContent",!0),i?Nn(i,n)>0?i:Rt(n.helperString(uu),[i],s):qe("",!0))]}},IT=(t,e,n)=>{const i=cv(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(ts(58,t.arg.loc));const{tag:s}=e,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=hv,a=!1;if(s==="input"||r){const l=fu(e,"type");if(l){if(l.type===7)o=Jf;else if(l.value)switch(l.value.content){case"radio":o=uv;break;case"checkbox":o=fv;break;case"file":a=!0,n.onError(ts(59,t.loc));break}}else gb(e)&&(o=Jf)}else s==="select"&&(o=dv);a||(i.needRuntime=n.helper(o))}else n.onError(ts(57,t.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},DT=bn("passive,once,capture"),NT=bn("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),UT=bn("left,right"),yv=bn("onkeyup,onkeydown,onkeypress",!0),OT=(t,e,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&Yo("COMPILER_V_ON_NATIVE",n)||DT(l)?o.push(l):UT(l)?fn(t)?yv(t.content)?s.push(l):r.push(l):(s.push(l),r.push(l)):NT(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},zp=(t,e)=>fn(t)&&t.content.toLowerCase()==="onclick"?qe(e,!0):t.type!==4?qn(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,FT=(t,e,n)=>lv(t,e,n,i=>{const{modifiers:s}=t;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=OT(r,s,n,t.loc);if(l.includes("right")&&(r=zp(r,"onContextmenu")),l.includes("middle")&&(r=zp(r,"onMouseup")),l.length&&(o=Rt(n.helper(pv),[o,JSON.stringify(l)])),a.length&&(!fn(r)||yv(r.content))&&(o=Rt(n.helper(mv),[o,JSON.stringify(a)])),c.length){const u=c.map(er).join("");r=fn(r)?qe(`${r.content}${u}`,!0):qn(["(",r,`) + "${u}"`])}return{props:[St(r,o)]}}),BT=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(ts(61,s)),{props:[],needRuntime:n.helper(gv)}},kT=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},VT=[CT],HT={cloak:TT,html:PT,text:LT,model:IT,on:FT,show:BT};function zT(t,e={}){return bT(t,it({},AT,e,{nodeTransforms:[kT,...VT,...e.nodeTransforms||[]],directiveTransforms:it({},HT,e.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Gp=new WeakMap;function GT(t){let e=Gp.get(t??st);return e||(e=Object.create(null),Gp.set(t??st,e)),e}function WT(t,e){if(!He(t))if(t.nodeType)t=t.innerHTML;else return Lt;const n=t,i=GT(e),s=i[n];if(s)return s;if(t[0]==="#"){const l=document.querySelector(t);t=l?l.innerHTML:""}const r=it({hoistStatic:!0,onError:void 0,onWarn:Lt},e);!r.isCustomElement&&typeof customElements<"u"&&(r.isCustomElement=l=>!!customElements.get(l));const{code:o}=zT(t,r),a=new Function("Vue",o)(eb);return a._rc=!0,i[n]=a}l0(WT);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const br=typeof window<"u";function XT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ot=Object.assign;function ku(t,e){const n={};for(const i in e){const s=e[i];n[i]=Yn(s)?s.map(t):t(s)}return n}const Do=()=>{},Yn=Array.isArray,qT=/\/$/,jT=t=>t.replace(qT,"");function Vu(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=ZT(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function $T(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YT(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Jr(e.matched[i],n.matched[s])&&xv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KT(t[n],e[n]))return!1;return!0}function KT(t,e){return Yn(t)?Xp(t,e):Yn(e)?Xp(e,t):t===e}function Xp(t,e){return Yn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function ZT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Jo;(function(t){t.pop="pop",t.push="push"})(Jo||(Jo={}));var No;(function(t){t.back="back",t.forward="forward",t.unknown=""})(No||(No={}));function JT(t){if(!t)if(br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jT(t)}const QT=/^[^#]+#/;function e1(t,e){return t.replace(QT,"#")+e}function t1(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const pu=()=>({left:window.pageXOffset,top:window.pageYOffset});function n1(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=t1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qp(t,e){return(history.state?history.state.position-e:-1)+t}const Qf=new Map;function i1(t,e){Qf.set(t,e)}function s1(t){const e=Qf.get(t);return Qf.delete(t),e}let r1=()=>location.protocol+"//"+location.host;function Sv(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Wp(l,"")}return Wp(n,t)+i+s}function o1(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=Sv(t,location),g=n.value,v=e.value;let m=0;if(h){if(n.value=d,e.value=h,o&&o===g){o=null;return}m=v?h.position-v.position:0}else i(d);s.forEach(p=>{p(n.value,g,{delta:m,type:Jo.pop,direction:m?m>0?No.forward:No.back:No.unknown})})};function l(){o=n.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:pu()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function jp(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?pu():null}}function a1(t){const{history:e,location:n}=window,i={value:Sv(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:r1()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,jp(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ot({},s.value,e.state,{forward:l,scroll:pu()});r(u.current,u,!0);const f=ot({},jp(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function l1(t){t=JT(t);const e=a1(t),n=o1(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ot({location:"",base:t,go:i,createHref:e1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function c1(t){return typeof t=="string"||t&&typeof t=="object"}function Mv(t){return typeof t=="string"||typeof t=="symbol"}const Ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ev=Symbol("");var $p;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($p||($p={}));function Qr(t,e){return ot(new Error,{type:t,[Ev]:!0},e)}function ci(t,e){return t instanceof Error&&Ev in t&&(e==null||!!(t.type&e))}const Yp="[^/]+?",u1={sensitive:!1,strict:!1,start:!0,end:!0},f1=/[.+*?^${}()[\]/\\]/g;function h1(t,e){const n=ot({},u1,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(f1,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=h;r.push({name:g,repeatable:v,optional:m});const x=p||Yp;if(x!==Yp){d+=10;try{new RegExp(`(${x})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+E.message)}}let _=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),s+=_,d+=20,m&&(d+=-8),v&&(d+=-20),x===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(Yn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Yn(p)?p.join("/"):p;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function d1(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function p1(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=d1(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Kp(i))return 1;if(Kp(s))return-1}return s.length-i.length}function Kp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const m1={type:0,value:""},g1=/[a-zA-Z0-9_]/;function _1(t){if(!t)return[[]];if(t==="/")return[[m1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:g1.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function v1(t,e,n){const i=h1(_1(t.path),n),s=ot(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function y1(t,e){const n=[],i=new Map;e=Qp({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,h){const d=!h,g=x1(u);g.aliasOf=h&&h.record;const v=Qp(e,u),m=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of _)m.push(ot({},g,{components:h?h.record.components:g.components,path:E,aliasOf:h?h.record:g}))}let p,x;for(const _ of m){const{path:E}=_;if(f&&E[0]!=="/"){const w=f.record.path,T=w[w.length-1]==="/"?"":"/";_.path=f.record.path+(E&&T+E)}if(p=v1(_,f,v),h?h.alias.push(p):(x=x||p,x!==p&&x.alias.push(p),d&&u.name&&!Jp(p)&&o(u.name)),g.children){const w=g.children;for(let T=0;T<w.length;T++)r(w[T],p,h&&h.children[T])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return x?()=>{o(x)}:Do}function o(u){if(Mv(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&p1(u,n[f])>=0&&(u.record.path!==n[f].record.path||!bv(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Jp(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Qr(1,{location:u});v=h.record.name,d=ot(Zp(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Zp(u.params,h.keys.map(x=>x.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=n.find(x=>x.re.test(g)),h&&(d=h.parse(g),v=h.record.name);else{if(h=f.name?i.get(f.name):n.find(x=>x.re.test(f.path)),!h)throw Qr(1,{location:u,currentLocation:f});v=h.record.name,d=ot({},f.params,u.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:m,meta:M1(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Zp(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function x1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:S1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function S1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Jp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function M1(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function Qp(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function bv(t,e){return e.children.some(n=>n===t||bv(t,n))}const Tv=/#/g,E1=/&/g,b1=/\//g,T1=/=/g,w1=/\?/g,wv=/\+/g,A1=/%5B/g,C1=/%5D/g,Av=/%5E/g,R1=/%60/g,Cv=/%7B/g,P1=/%7C/g,Rv=/%7D/g,L1=/%20/g;function vd(t){return encodeURI(""+t).replace(P1,"|").replace(A1,"[").replace(C1,"]")}function I1(t){return vd(t).replace(Cv,"{").replace(Rv,"}").replace(Av,"^")}function eh(t){return vd(t).replace(wv,"%2B").replace(L1,"+").replace(Tv,"%23").replace(E1,"%26").replace(R1,"`").replace(Cv,"{").replace(Rv,"}").replace(Av,"^")}function D1(t){return eh(t).replace(T1,"%3D")}function N1(t){return vd(t).replace(Tv,"%23").replace(w1,"%3F")}function U1(t){return t==null?"":N1(t).replace(b1,"%2F")}function Gl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function O1(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(wv," "),o=r.indexOf("="),a=Gl(o<0?r:r.slice(0,o)),l=o<0?null:Gl(r.slice(o+1));if(a in e){let c=e[a];Yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function em(t){let e="";for(let n in t){const i=t[n];if(n=D1(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yn(i)?i.map(r=>r&&eh(r)):[i&&eh(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function F1(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Yn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const B1=Symbol(""),tm=Symbol(""),yd=Symbol(""),Pv=Symbol(""),th=Symbol("");function ho(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $i(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Qr(4,{from:n,to:e})):f instanceof Error?a(f):c1(f)?a(Qr(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Hu(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(k1(a)){const c=(a.__vccOpts||a)[e];c&&s.push($i(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=XT(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&$i(h,n,i,r,o)()}))}}return s}function k1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nm(t){const e=ti(yd),n=ti(Pv),i=Ln(()=>e.resolve(Mn(t.to))),s=Ln(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Jr.bind(null,u));if(h>-1)return h;const d=im(l[c-2]);return c>1&&im(u)===d&&f[f.length-1].path!==d?f.findIndex(Jr.bind(null,l[c-2])):h}),r=Ln(()=>s.value>-1&&z1(n.params,i.value.params)),o=Ln(()=>s.value>-1&&s.value===n.matched.length-1&&xv(n.params,i.value.params));function a(l={}){return H1(l)?e[Mn(t.replace)?"replace":"push"](Mn(t.to)).catch(Do):Promise.resolve()}return{route:i,href:Ln(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const V1=ro({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nm,setup(t,{slots:e}){const n=ca(nm(t)),{options:i}=ti(yd),s=Ln(()=>({[sm(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[sm(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:lu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Tr=V1;function H1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z1(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Yn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function im(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sm=(t,e,n)=>t??e??n,G1=ro({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ti(th),s=Ln(()=>t.route||i.value),r=ti(tm,0),o=Ln(()=>{let c=Mn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ln(()=>s.value.matched[o.value]);Co(tm,Ln(()=>o.value+1)),Co(B1,a),Co(th,s);const l=Fr();return Vr(()=>[l.value,a.value,t.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Jr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return rm(n.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=lu(h,ot({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return rm(n.default,{Component:m,route:c})||m}}});function rm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lv=G1;function W1(t){const e=y1(t.routes,t),n=t.parseQuery||O1,i=t.stringifyQuery||em,s=t.history,r=ho(),o=ho(),a=ho(),l=f_(Ui);let c=Ui;br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ku.bind(null,G=>""+G),f=ku.bind(null,U1),h=ku.bind(null,Gl);function d(G,le){let re,ue;return Mv(G)?(re=e.getRecordMatcher(G),ue=le):ue=G,e.addRoute(ue,re)}function g(G){const le=e.getRecordMatcher(G);le&&e.removeRoute(le)}function v(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function p(G,le){if(le=ot({},le||l.value),typeof G=="string"){const P=Vu(n,G,le.path),B=e.resolve({path:P.path},le),X=s.createHref(P.fullPath);return ot(P,B,{params:h(B.params),hash:Gl(P.hash),redirectedFrom:void 0,href:X})}let re;if("path"in G)re=ot({},G,{path:Vu(n,G.path,le.path).path});else{const P=ot({},G.params);for(const B in P)P[B]==null&&delete P[B];re=ot({},G,{params:f(P)}),le.params=f(le.params)}const ue=e.resolve(re,le),we=G.hash||"";ue.params=u(h(ue.params));const W=$T(i,ot({},G,{hash:I1(we),path:ue.path})),R=s.createHref(W);return ot({fullPath:W,hash:we,query:i===em?F1(G.query):G.query||{}},ue,{redirectedFrom:void 0,href:R})}function x(G){return typeof G=="string"?Vu(n,G,l.value.path):ot({},G)}function _(G,le){if(c!==G)return Qr(8,{from:le,to:G})}function E(G){return C(G)}function w(G){return E(ot(x(G),{replace:!0}))}function T(G){const le=G.matched[G.matched.length-1];if(le&&le.redirect){const{redirect:re}=le;let ue=typeof re=="function"?re(G):re;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=x(ue):{path:ue},ue.params={}),ot({query:G.query,hash:G.hash,params:"path"in ue?{}:G.params},ue)}}function C(G,le){const re=c=p(G),ue=l.value,we=G.state,W=G.force,R=G.replace===!0,P=T(re);if(P)return C(ot(x(P),{state:typeof P=="object"?ot({},we,P.state):we,force:W,replace:R}),le||re);const B=re;B.redirectedFrom=le;let X;return!W&&YT(i,ue,re)&&(X=Qr(16,{to:B,from:ue}),he(ue,ue,!0,!1)),(X?Promise.resolve(X):M(B,ue)).catch(J=>ci(J)?ci(J,2)?J:ce(J):z(J,B,ue)).then(J=>{if(J){if(ci(J,2))return C(ot({replace:R},x(J.to),{state:typeof J.to=="object"?ot({},we,J.to.state):we,force:W}),le||B)}else J=O(B,ue,!0,R,we);return N(B,ue,J),J})}function L(G,le){const re=_(G,le);return re?Promise.reject(re):Promise.resolve()}function S(G){const le=fe.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(G):G()}function M(G,le){let re;const[ue,we,W]=X1(G,le);re=Hu(ue.reverse(),"beforeRouteLeave",G,le);for(const P of ue)P.leaveGuards.forEach(B=>{re.push($i(B,G,le))});const R=L.bind(null,G,le);return re.push(R),Ee(re).then(()=>{re=[];for(const P of r.list())re.push($i(P,G,le));return re.push(R),Ee(re)}).then(()=>{re=Hu(we,"beforeRouteUpdate",G,le);for(const P of we)P.updateGuards.forEach(B=>{re.push($i(B,G,le))});return re.push(R),Ee(re)}).then(()=>{re=[];for(const P of W)if(P.beforeEnter)if(Yn(P.beforeEnter))for(const B of P.beforeEnter)re.push($i(B,G,le));else re.push($i(P.beforeEnter,G,le));return re.push(R),Ee(re)}).then(()=>(G.matched.forEach(P=>P.enterCallbacks={}),re=Hu(W,"beforeRouteEnter",G,le),re.push(R),Ee(re))).then(()=>{re=[];for(const P of o.list())re.push($i(P,G,le));return re.push(R),Ee(re)}).catch(P=>ci(P,8)?P:Promise.reject(P))}function N(G,le,re){a.list().forEach(ue=>S(()=>ue(G,le,re)))}function O(G,le,re,ue,we){const W=_(G,le);if(W)return W;const R=le===Ui,P=br?history.state:{};re&&(ue||R?s.replace(G.fullPath,ot({scroll:R&&P&&P.scroll},we)):s.push(G.fullPath,we)),l.value=G,he(G,le,re,R),ce()}let $;function I(){$||($=s.listen((G,le,re)=>{if(!ye.listening)return;const ue=p(G),we=T(ue);if(we){C(ot(we,{replace:!0}),ue).catch(Do);return}c=ue;const W=l.value;br&&i1(qp(W.fullPath,re.delta),pu()),M(ue,W).catch(R=>ci(R,12)?R:ci(R,2)?(C(R.to,ue).then(P=>{ci(P,20)&&!re.delta&&re.type===Jo.pop&&s.go(-1,!1)}).catch(Do),Promise.reject()):(re.delta&&s.go(-re.delta,!1),z(R,ue,W))).then(R=>{R=R||O(ue,W,!1),R&&(re.delta&&!ci(R,8)?s.go(-re.delta,!1):re.type===Jo.pop&&ci(R,20)&&s.go(-1,!1)),N(ue,W,R)}).catch(Do)}))}let H=ho(),V=ho(),Y;function z(G,le,re){ce(G);const ue=V.list();return ue.length?ue.forEach(we=>we(G,le,re)):console.error(G),Promise.reject(G)}function ne(){return Y&&l.value!==Ui?Promise.resolve():new Promise((G,le)=>{H.add([G,le])})}function ce(G){return Y||(Y=!G,I(),H.list().forEach(([le,re])=>G?re(G):le()),H.reset()),G}function he(G,le,re,ue){const{scrollBehavior:we}=t;if(!br||!we)return Promise.resolve();const W=!re&&s1(qp(G.fullPath,0))||(ue||!re)&&history.state&&history.state.scroll||null;return ua().then(()=>we(G,le,W)).then(R=>R&&n1(R)).catch(R=>z(R,G,le))}const me=G=>s.go(G);let te;const fe=new Set,ye={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:t,push:E,replace:w,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:ne,install(G){const le=this;G.component("RouterLink",Tr),G.component("RouterView",Lv),G.config.globalProperties.$router=le,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Mn(l)}),br&&!te&&l.value===Ui&&(te=!0,E(s.location).catch(we=>{}));const re={};for(const we in Ui)Object.defineProperty(re,we,{get:()=>l.value[we],enumerable:!0});G.provide(yd,le),G.provide(Pv,Ah(re)),G.provide(th,l);const ue=G.unmount;fe.add(G),G.unmount=function(){fe.delete(G),fe.size<1&&(c=Ui,$&&$(),$=null,l.value=Ui,te=!1,Y=!1),ue()}}};function Ee(G){return G.reduce((le,re)=>le.then(()=>S(re)),Promise.resolve())}return ye}function X1(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Jr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Jr(c,l))||s.push(l))}return[n,i,s]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="160",q1=0,om=1,j1=2,Iv=1,$1=2,vi=3,Ai=0,hn=1,Si=2,ns=0,Hr=1,nh=2,am=3,lm=4,Y1=5,Ss=100,K1=101,Z1=102,cm=103,um=104,J1=200,Q1=201,ew=202,tw=203,ih=204,sh=205,nw=206,iw=207,sw=208,rw=209,ow=210,aw=211,lw=212,cw=213,uw=214,fw=0,hw=1,dw=2,Wl=3,pw=4,mw=5,gw=6,_w=7,mu=0,vw=1,yw=2,is=0,xw=1,Sw=2,Mw=3,Ew=4,bw=5,Tw=6,Dv=300,eo=301,to=302,rh=303,oh=304,gu=306,wt=1e3,Wn=1001,ah=1002,sn=1003,fm=1004,zu=1005,Pn=1006,ww=1007,Qo=1008,ss=1009,Aw=1010,Cw=1011,Sd=1012,Nv=1013,Ji=1014,Qi=1015,ea=1016,Uv=1017,Ov=1018,ks=1020,Rw=1021,Xn=1023,Pw=1024,Lw=1025,Vs=1026,no=1027,Iw=1028,Fv=1029,Dw=1030,Bv=1031,kv=1033,Gu=33776,Wu=33777,Xu=33778,qu=33779,hm=35840,dm=35841,pm=35842,mm=35843,Vv=36196,gm=37492,_m=37496,vm=37808,ym=37809,xm=37810,Sm=37811,Mm=37812,Em=37813,bm=37814,Tm=37815,wm=37816,Am=37817,Cm=37818,Rm=37819,Pm=37820,Lm=37821,ju=36492,Im=36494,Dm=36495,Nw=36283,Nm=36284,Um=36285,Om=36286,Hv=3e3,Hs=3001,Uw=3200,Ow=3201,Md=0,Fw=1,In="",pt="srgb",Ci="srgb-linear",_u="display-p3",vu="display-p3-linear",Xl="linear",dt="srgb",ql="rec709",jl="p3",or=7680,Fm=519,Bw=512,kw=513,Vw=514,zv=515,Hw=516,zw=517,Gw=518,Ww=519,Bm=35044,km="300 es",lh=1035,Ei=2e3,$l=2001;class sr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,ch=180/Math.PI;function xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function cn(t,e,n){return Math.max(e,Math.min(n,t))}function Xw(t,e){return(t%e+e)%e}function Yu(t,e,n){return(1-n)*t+n*e}function Vm(t){return(t&t-1)===0&&t!==0}function uh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],x=s[1],_=s[4],E=s[7],w=s[2],T=s[5],C=s[8];return r[0]=o*v+a*x+l*w,r[3]=o*m+a*_+l*T,r[6]=o*p+a*E+l*C,r[1]=c*v+u*x+f*w,r[4]=c*m+u*_+f*T,r[7]=c*p+u*E+f*C,r[2]=h*v+d*x+g*w,r[5]=h*m+d*_+g*T,r[8]=h*p+d*E+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=n*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=d*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ku.makeScale(e,n)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new Ze;function Gv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qw(){const t=ta("canvas");return t.style.display="block",t}const Hm={};function Uo(t){t in Hm||(Hm[t]=!0,console.warn(t))}const zm=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gm=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[Ci]:{transfer:Xl,primaries:ql,toReference:t=>t,fromReference:t=>t},[pt]:{transfer:dt,primaries:ql,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vu]:{transfer:Xl,primaries:jl,toReference:t=>t.applyMatrix3(Gm),fromReference:t=>t.applyMatrix3(zm)},[_u]:{transfer:dt,primaries:jl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gm),fromReference:t=>t.applyMatrix3(zm).convertLinearToSRGB()}},jw=new Set([Ci,vu]),lt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!jw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=za[e].toReference,s=za[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return za[t].primaries},getTransfer:function(t){return t===In?Xl:za[t].transfer}};function zr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ar;class Wv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=ta("canvas")),ar.width=e.width,ar.height=e.height;const i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zr(n[i]/255)*255):n[i]=zr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $w=0;class Xv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=xa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ju(s[o].image)):r.push(Ju(s[o]))}else r=Ju(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Ju(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Wv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yw=0;class rn extends sr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Wn,s=Wn,r=Pn,o=Qo,a=Xn,l=ss,c=rn.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=xa(),this.name="",this.source=new Xv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hs?pt:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wt:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wt:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?Hs:Hv}set encoding(e){Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?pt:In}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Dv;rn.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,n=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,E=(d+1)/2,w=(p+1)/2,T=(u+h)/4,C=(f+v)/4,L=(g+m)/4;return _>E&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=C/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=L/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=L/r),this.set(i,s,r,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kw extends sr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hs?pt:In),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends Kw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qv extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zw extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,p*x);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const E=a*x;if(l=l*m+h*E,c=c*m+d*E,u=u*m+g*E,f=f*m+v*E,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*d-c*h,e[n+1]=l*g+u*h+c*f-a*d,e[n+2]=c*g+u*d+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new U,Wm=new Sa;class Ma{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Wa.subVectors(this.max,mo),lr.subVectors(e.a,mo),cr.subVectors(e.b,mo),ur.subVectors(e.c,mo),Oi.subVectors(cr,lr),Fi.subVectors(ur,cr),hs.subVectors(lr,ur);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-hs.z,hs.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,hs.z,0,-hs.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-hs.y,hs.x,0];return!ef(n,lr,cr,ur,Wa)||(n=[1,0,0,0,1,0,0,0,1],!ef(n,lr,cr,ur,Wa))?!1:(Xa.crossVectors(Oi,Fi),n=[Xa.x,Xa.y,Xa.z],ef(n,lr,cr,ur,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,Ga=new Ma,lr=new U,cr=new U,ur=new U,Oi=new U,Fi=new U,hs=new U,mo=new U,Wa=new U,Xa=new U,ds=new U;function ef(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ds.fromArray(t,r);const a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=n.dot(ds),u=i.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jw=new Ma,go=new U,tf=new U;class Ea{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Jw.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(go,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(tf)),this.expandByPoint(go.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new U,nf=new U,qa=new U,Bi=new U,sf=new U,ja=new U,rf=new U;class Ed{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){nf.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(nf);const r=e.distanceTo(n)*.5,o=-this.direction.dot(qa),a=Bi.dot(this.direction),l=-Bi.dot(qa),c=Bi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(nf).addScaledVector(qa,h),d}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,s,r){sf.subVectors(n,e),ja.subVectors(i,e),rf.crossVectors(sf,ja);let o=this.direction.dot(rf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors(Bi,ja));if(l<0)return null;const c=a*this.direction.dot(sf.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(rf);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,s,r,o,a,l,c,u,f,h,d,g,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,d,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;n[0]=h+v*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-d,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+g,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qw,e,eA)}lookAt(e,n,i){const s=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),ki.crossVectors(i,mn),ki.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),ki.crossVectors(i,mn)),ki.normalize(),$a.crossVectors(mn,ki),s[0]=ki.x,s[4]=$a.x,s[8]=mn.x,s[1]=ki.y,s[5]=$a.y,s[9]=mn.y,s[2]=ki.z,s[6]=$a.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],_=i[7],E=i[11],w=i[15],T=s[0],C=s[4],L=s[8],S=s[12],M=s[1],N=s[5],O=s[9],$=s[13],I=s[2],H=s[6],V=s[10],Y=s[14],z=s[3],ne=s[7],ce=s[11],he=s[15];return r[0]=o*T+a*M+l*I+c*z,r[4]=o*C+a*N+l*H+c*ne,r[8]=o*L+a*O+l*V+c*ce,r[12]=o*S+a*$+l*Y+c*he,r[1]=u*T+f*M+h*I+d*z,r[5]=u*C+f*N+h*H+d*ne,r[9]=u*L+f*O+h*V+d*ce,r[13]=u*S+f*$+h*Y+d*he,r[2]=g*T+v*M+m*I+p*z,r[6]=g*C+v*N+m*H+p*ne,r[10]=g*L+v*O+m*V+p*ce,r[14]=g*S+v*$+m*Y+p*he,r[3]=x*T+_*M+E*I+w*z,r[7]=x*C+_*N+E*H+w*ne,r[11]=x*L+_*O+E*V+w*ce,r[15]=x*S+_*$+E*Y+w*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+v*(+n*l*d-n*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+n*c*f-n*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-n*l*f+n*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,_=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,E=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,w=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,T=n*x+i*_+s*E+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(v*h*r-f*m*r-v*s*d+i*m*d+f*s*p-i*h*p)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*C,e[4]=_*C,e[5]=(u*m*r-g*h*r+g*s*d-n*m*d-u*s*p+n*h*p)*C,e[6]=(g*l*r-o*m*r-g*s*c+n*m*c+o*s*p-n*l*p)*C,e[7]=(o*h*r-u*l*r+u*s*c-n*h*c-o*s*d+n*l*d)*C,e[8]=E*C,e[9]=(g*f*r-u*v*r-g*i*d+n*v*d+u*i*p-n*f*p)*C,e[10]=(o*v*r-g*a*r+g*i*c-n*v*c-o*i*p+n*a*p)*C,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*d-n*a*d)*C,e[12]=w*C,e[13]=(u*v*s-g*f*s+g*i*h-n*v*h-u*i*m+n*f*m)*C,e[14]=(g*a*s-o*v*s-g*i*l+n*v*l+o*i*m-n*a*m)*C,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,v=o*u,m=o*f,p=a*f,x=l*c,_=l*u,E=l*f,w=i.x,T=i.y,C=i.z;return s[0]=(1-(v+p))*w,s[1]=(d+E)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(d-E)*T,s[5]=(1-(h+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+_)*C,s[9]=(m-x)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=fr.set(s[0],s[1],s[2]).length();const o=fr.set(s[4],s[5],s[6]).length(),a=fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const c=1/r,u=1/o,f=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Ei){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let d,g;if(a===Ei)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$l)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),h=(n+e)*c,d=(i+s)*u;let g,v;if(a===Ei)g=(o+r)*f,v=-2*f;else if(a===$l)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fr=new U,kn=new Et,Qw=new U(0,0,0),eA=new U(1,1,1),ki=new U,$a=new U,mn=new U,Xm=new Et,qm=new Sa;class yu{constructor(e=0,n=0,i=0,s=yu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yu.DEFAULT_ORDER="XYZ";class jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tA=0;const jm=new U,hr=new Sa,hi=new Et,Ya=new U,_o=new U,nA=new U,iA=new Sa,$m=new U(1,0,0),Ym=new U(0,1,0),Km=new U(0,0,1),sA={type:"added"},rA={type:"removed"};class Jt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new U,n=new yu,i=new Sa,s=new U(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hr.setFromAxisAngle(e,n),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,n){return hr.setFromAxisAngle(e,n),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,n){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ya.copy(e):Ya.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(_o,Ya,this.up):hi.lookAt(Ya,_o,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(hi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rA)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,nA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,iA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new U(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new U,di=new U,of=new U,pi=new U,dr=new U,pr=new U,Zm=new U,af=new U,lf=new U,cf=new U;let Ka=!1;class zn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Vn.subVectors(e,n),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Vn.subVectors(s,n),di.subVectors(i,n),of.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(of),c=di.dot(di),u=di.dot(of),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,s,r,o,a,l){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),this.getInterpolation(e,n,i,s,r,o,a,l)}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static isFrontFacing(e,n,i,s){return Vn.subVectors(i,n),di.subVectors(e,n),Vn.cross(di).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;dr.subVectors(s,i),pr.subVectors(r,i),af.subVectors(e,i);const l=dr.dot(af),c=pr.dot(af);if(l<=0&&c<=0)return n.copy(i);lf.subVectors(e,s);const u=dr.dot(lf),f=pr.dot(lf);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(dr,o);cf.subVectors(e,r);const d=dr.dot(cf),g=pr.dot(cf);if(g>=0&&d<=g)return n.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(pr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Zm.subVectors(r,s),a=(f-u)/(f-u+(d-g)),n.copy(s).addScaledVector(Zm,a);const p=1/(m+v+h);return o=v*p,a=h*p,n.copy(i).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=lt.workingColorSpace){if(e=Xw(e,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=uf(o,r,e+1/3),this.g=uf(o,r,e),this.b=uf(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,n=pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pt){const i=$v[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Zu(e.r),this.g=Zu(e.g),this.b=Zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return lt.fromWorkingColorSpace(qt.copy(this),e),Math.round(cn(qt.r*255,0,255))*65536+Math.round(cn(qt.g*255,0,255))*256+Math.round(cn(qt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=pt){lt.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,s=qt.b;return e!==pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Za);const i=Yu(Vi.h,Za.h,n),s=Yu(Vi.s,Za.s,n),r=Yu(Vi.l,Za.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new je;je.NAMES=$v;let oA=0;class ri extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=Hr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ih&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bd extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new U,Ja=new Je;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bm&&(e.usage=this.usage),e}}class Yv extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Kv extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aA=0;const Cn=new Et,ff=new Jt,mr=new U,gn=new Ma,vo=new Ma,Ot=new U;class Fn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gv(e)?Kv:Yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(gn.min,vo.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,vo.max),gn.expandByPoint(Ot)):(gn.expandByPoint(vo.min),gn.expandByPoint(vo.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),Ot.add(mr)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new U,u[M]=new U;const f=new U,h=new U,d=new U,g=new Je,v=new Je,m=new Je,p=new U,x=new U;function _(M,N,O){f.fromArray(s,M*3),h.fromArray(s,N*3),d.fromArray(s,O*3),g.fromArray(o,M*2),v.fromArray(o,N*2),m.fromArray(o,O*2),h.sub(f),d.sub(f),v.sub(g),m.sub(g);const $=1/(v.x*m.y-m.x*v.y);isFinite($)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar($),x.copy(d).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar($),c[M].add(p),c[N].add(p),c[O].add(p),u[M].add(x),u[N].add(x),u[O].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let M=0,N=E.length;M<N;++M){const O=E[M],$=O.start,I=O.count;for(let H=$,V=$+I;H<V;H+=3)_(i[H+0],i[H+1],i[H+2])}const w=new U,T=new U,C=new U,L=new U;function S(M){C.fromArray(r,M*3),L.copy(C);const N=c[M];w.copy(N),w.sub(C.multiplyScalar(C.dot(N))).normalize(),T.crossVectors(L,N);const $=T.dot(u[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=$}for(let M=0,N=E.length;M<N;++M){const O=E[M],$=O.start,I=O.count;for(let H=$,V=$+I;H<V;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new ii(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new Et,ps=new Ed,Qa=new Ea,Qm=new U,gr=new U,_r=new U,vr=new U,hf=new U,el=new U,tl=new Je,nl=new Je,il=new Je,eg=new U,tg=new U,ng=new U,sl=new U,rl=new U;class Un extends Jt{constructor(e=new Fn,n=new bd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){el.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(hf.fromBufferAttribute(f,e),o?el.addScaledVector(hf,u):el.addScaledVector(hf.sub(n),u))}n.add(el)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Qa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Qa,Qm)===null||ps.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Jm.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,w=_;E<w;E+=3){const T=a.getX(E),C=a.getX(E+1),L=a.getX(E+2);s=ol(this,p,e,i,c,u,f,T,C,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);s=ol(this,o,e,i,c,u,f,x,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,w=_;E<w;E+=3){const T=E,C=E+1,L=E+2;s=ol(this,p,e,i,c,u,f,T,C,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,E=m+2;s=ol(this,o,e,i,c,u,f,x,_,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function lA(t,e,n,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ai,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function ol(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,gr),t.getVertexPosition(l,_r),t.getVertexPosition(c,vr);const u=lA(t,e,n,i,gr,_r,vr,sl);if(u){s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,c),u.uv=zn.getInterpolation(sl,gr,_r,vr,tl,nl,il,new Je)),r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,c),u.uv1=zn.getInterpolation(sl,gr,_r,vr,tl,nl,il,new Je),u.uv2=u.uv1),o&&(eg.fromBufferAttribute(o,a),tg.fromBufferAttribute(o,l),ng.fromBufferAttribute(o,c),u.normal=zn.getInterpolation(sl,gr,_r,vr,eg,tg,ng,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};zn.getNormal(gr,_r,vr,f.normal),u.face=f}return u}class oo extends Fn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function g(v,m,p,x,_,E,w,T,C,L,S){const M=E/C,N=w/L,O=E/2,$=w/2,I=T/2,H=C+1,V=L+1;let Y=0,z=0;const ne=new U;for(let ce=0;ce<V;ce++){const he=ce*N-$;for(let me=0;me<H;me++){const te=me*M-O;ne[v]=te*x,ne[m]=he*_,ne[p]=I,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(me/C),f.push(1-ce/L),Y+=1}}for(let ce=0;ce<L;ce++)for(let he=0;he<C;he++){const me=h+he+H*ce,te=h+he+H*(ce+1),fe=h+(he+1)+H*(ce+1),ye=h+(he+1)+H*ce;l.push(me,te,ye),l.push(te,fe,ye),z+=6}a.addGroup(d,z,S),d+=z,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=io(t[n]);for(const s in i)e[s]=i[s]}return e}function cA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zv(t){return t.getRenderTarget()===null?t.outputColorSpace:lt.workingColorSpace}const uA={clone:io,merge:nn};var fA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ys extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fA,this.fragmentShader=hA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=cA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jv extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends Jv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ch*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ch*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($u*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=-90,xr=1;class dA extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(yr,xr,e,n);s.layers=this.layers,this.add(s);const r=new xn(yr,xr,e,n);r.layers=this.layers,this.add(r);const o=new xn(yr,xr,e,n);o.layers=this.layers,this.add(o);const a=new xn(yr,xr,e,n);a.layers=this.layers,this.add(a);const l=new xn(yr,xr,e,n);l.layers=this.layers,this.add(l);const c=new xn(yr,xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qv extends rn{constructor(e,n,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:eo,super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pA extends $s{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hs?pt:In),this.texture=new Qv(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oo(5,5,5),r=new Ys({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ns});r.uniforms.tEquirect.value=n;const o=new Un(s,r),a=n.minFilter;return n.minFilter===Qo&&(n.minFilter=Pn),new dA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const df=new U,mA=new U,gA=new Ze;class _s{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=df.subVectors(i,n).cross(mA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(df),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gA.getNormalMatrix(e),s=this.coplanarPoint(df).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Ea,al=new U;class Td{constructor(e=new _s,n=new _s,i=new _s,s=new _s,r=new _s,o=new _s){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],_=s[14],E=s[15];if(i[0].setComponents(l-r,h-c,m-d,E-p).normalize(),i[1].setComponents(l+r,h+c,m+d,E+p).normalize(),i[2].setComponents(l+o,h+u,m+g,E+x).normalize(),i[3].setComponents(l-o,h-u,m-g,E-x).normalize(),i[4].setComponents(l-a,h-f,m-v,E-_).normalize(),n===Ei)i[5].setComponents(l+a,h+f,m+v,E+_).normalize();else if(n===$l)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(al.x=s.normal.x>0?e.max.x:e.min.x,al.y=s.normal.y>0?e.max.y:e.min.y,al.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ey(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function _A(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(t.bindBuffer(f,c),d.count===-1&&g.length===0&&t.bufferSubData(f,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];n?t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,s(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class wd extends Fn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*h-o;for(let _=0;_<c;_++){const E=_*f-r;g.push(E,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,E=x+c*(p+1),w=x+1+c*(p+1),T=x+1+c*p;d.push(_,E,T),d.push(E,w,T)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.width,e.height,e.widthSegments,e.heightSegments)}}var vA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yA=`#ifdef USE_ALPHAHASH
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
#endif`,xA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,EA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bA=`#ifdef USE_AOMAP
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
#endif`,TA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wA=`#ifdef USE_BATCHING
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
#endif`,AA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,CA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LA=`#ifdef USE_IRIDESCENCE
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
#endif`,IA=`#ifdef USE_BUMPMAP
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
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HA=`#define PI 3.141592653589793
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
} // validated`,zA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GA=`vec3 transformedNormal = objectNormal;
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
#endif`,WA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$A="gl_FragColor = linearToOutputTexel( gl_FragColor );",YA=`
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
}`,KA=`#ifdef USE_ENVMAP
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
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JA=`#ifdef USE_ENVMAP
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
#endif`,QA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eC=`#ifdef USE_ENVMAP
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
#endif`,tC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rC=`#ifdef USE_GRADIENTMAP
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
}`,oC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uC=`uniform bool receiveShadow;
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
#endif`,fC=`#ifdef USE_ENVMAP
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
#endif`,hC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gC=`PhysicalMaterial material;
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
#endif`,_C=`struct PhysicalMaterial {
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
}`,vC=`
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
#endif`,yC=`#if defined( RE_IndirectDiffuse )
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
#endif`,xC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CC=`#if defined( USE_POINTS_UV )
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
#endif`,RC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IC=`#ifdef USE_MORPHNORMALS
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
#endif`,DC=`#ifdef USE_MORPHTARGETS
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
#endif`,NC=`#ifdef USE_MORPHTARGETS
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
#endif`,UC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VC=`#ifdef USE_NORMALMAP
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
#endif`,HC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$C=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n2=`float getShadowMask() {
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
}`,i2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s2=`#ifdef USE_SKINNING
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
#endif`,r2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o2=`#ifdef USE_SKINNING
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
#endif`,a2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f2=`#ifdef USE_TRANSMISSION
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
#endif`,h2=`#ifdef USE_TRANSMISSION
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
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v2=`uniform sampler2D t2D;
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
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`#include <common>
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
}`,b2=`#if DEPTH_PACKING == 3200
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
}`,T2=`#define DISTANCE
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
}`,w2=`#define DISTANCE
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
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
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
}`,P2=`uniform vec3 diffuse;
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
}`,L2=`#include <common>
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
}`,I2=`uniform vec3 diffuse;
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
}`,D2=`#define LAMBERT
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
}`,N2=`#define LAMBERT
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
}`,U2=`#define MATCAP
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
}`,O2=`#define MATCAP
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
}`,F2=`#define NORMAL
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
}`,B2=`#define NORMAL
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
}`,k2=`#define PHONG
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
}`,V2=`#define PHONG
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
}`,H2=`#define STANDARD
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
}`,z2=`#define STANDARD
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
}`,G2=`#define TOON
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
}`,W2=`#define TOON
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
}`,X2=`uniform float size;
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
}`,q2=`uniform vec3 diffuse;
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
}`,j2=`#include <common>
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
}`,$2=`uniform vec3 color;
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
}`,Y2=`uniform float rotation;
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
}`,K2=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:vA,alphahash_pars_fragment:yA,alphamap_fragment:xA,alphamap_pars_fragment:SA,alphatest_fragment:MA,alphatest_pars_fragment:EA,aomap_fragment:bA,aomap_pars_fragment:TA,batching_pars_vertex:wA,batching_vertex:AA,begin_vertex:CA,beginnormal_vertex:RA,bsdfs:PA,iridescence_fragment:LA,bumpmap_pars_fragment:IA,clipping_planes_fragment:DA,clipping_planes_pars_fragment:NA,clipping_planes_pars_vertex:UA,clipping_planes_vertex:OA,color_fragment:FA,color_pars_fragment:BA,color_pars_vertex:kA,color_vertex:VA,common:HA,cube_uv_reflection_fragment:zA,defaultnormal_vertex:GA,displacementmap_pars_vertex:WA,displacementmap_vertex:XA,emissivemap_fragment:qA,emissivemap_pars_fragment:jA,colorspace_fragment:$A,colorspace_pars_fragment:YA,envmap_fragment:KA,envmap_common_pars_fragment:ZA,envmap_pars_fragment:JA,envmap_pars_vertex:QA,envmap_physical_pars_fragment:fC,envmap_vertex:eC,fog_vertex:tC,fog_pars_vertex:nC,fog_fragment:iC,fog_pars_fragment:sC,gradientmap_pars_fragment:rC,lightmap_fragment:oC,lightmap_pars_fragment:aC,lights_lambert_fragment:lC,lights_lambert_pars_fragment:cC,lights_pars_begin:uC,lights_toon_fragment:hC,lights_toon_pars_fragment:dC,lights_phong_fragment:pC,lights_phong_pars_fragment:mC,lights_physical_fragment:gC,lights_physical_pars_fragment:_C,lights_fragment_begin:vC,lights_fragment_maps:yC,lights_fragment_end:xC,logdepthbuf_fragment:SC,logdepthbuf_pars_fragment:MC,logdepthbuf_pars_vertex:EC,logdepthbuf_vertex:bC,map_fragment:TC,map_pars_fragment:wC,map_particle_fragment:AC,map_particle_pars_fragment:CC,metalnessmap_fragment:RC,metalnessmap_pars_fragment:PC,morphcolor_vertex:LC,morphnormal_vertex:IC,morphtarget_pars_vertex:DC,morphtarget_vertex:NC,normal_fragment_begin:UC,normal_fragment_maps:OC,normal_pars_fragment:FC,normal_pars_vertex:BC,normal_vertex:kC,normalmap_pars_fragment:VC,clearcoat_normal_fragment_begin:HC,clearcoat_normal_fragment_maps:zC,clearcoat_pars_fragment:GC,iridescence_pars_fragment:WC,opaque_fragment:XC,packing:qC,premultiplied_alpha_fragment:jC,project_vertex:$C,dithering_fragment:YC,dithering_pars_fragment:KC,roughnessmap_fragment:ZC,roughnessmap_pars_fragment:JC,shadowmap_pars_fragment:QC,shadowmap_pars_vertex:e2,shadowmap_vertex:t2,shadowmask_pars_fragment:n2,skinbase_vertex:i2,skinning_pars_vertex:s2,skinning_vertex:r2,skinnormal_vertex:o2,specularmap_fragment:a2,specularmap_pars_fragment:l2,tonemapping_fragment:c2,tonemapping_pars_fragment:u2,transmission_fragment:f2,transmission_pars_fragment:h2,uv_pars_fragment:d2,uv_pars_vertex:p2,uv_vertex:m2,worldpos_vertex:g2,background_vert:_2,background_frag:v2,backgroundCube_vert:y2,backgroundCube_frag:x2,cube_vert:S2,cube_frag:M2,depth_vert:E2,depth_frag:b2,distanceRGBA_vert:T2,distanceRGBA_frag:w2,equirect_vert:A2,equirect_frag:C2,linedashed_vert:R2,linedashed_frag:P2,meshbasic_vert:L2,meshbasic_frag:I2,meshlambert_vert:D2,meshlambert_frag:N2,meshmatcap_vert:U2,meshmatcap_frag:O2,meshnormal_vert:F2,meshnormal_frag:B2,meshphong_vert:k2,meshphong_frag:V2,meshphysical_vert:H2,meshphysical_frag:z2,meshtoon_vert:G2,meshtoon_frag:W2,points_vert:X2,points_frag:q2,shadow_vert:j2,shadow_frag:$2,sprite_vert:Y2,sprite_frag:K2},_e={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:nn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:nn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:nn([_e.points,_e.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:nn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:nn([_e.common,_e.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:nn([_e.sprite,_e.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:nn([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:nn([_e.lights,_e.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ll={r:0,b:0,g:0};function Z2(t,e,n,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===gu)?(u===void 0&&(u=new Un(new oo(1,1,1),new Ys({name:"BackgroundCubeMaterial",uniforms:io(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=lt.getTransfer(_.colorSpace)!==dt,(f!==_||h!==_.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Un(new wd(2,2),new Ys({name:"BackgroundMaterial",uniforms:io(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(ll,Zv(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function J2(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(I,H,V,Y,z){let ne=!1;if(o){const ce=v(Y,V,H);c!==ce&&(c=ce,d(c.object)),ne=p(I,Y,V,z),ne&&x(I,Y,V,z)}else{const ce=H.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==ce)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=ce,ne=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,L(I,H,V,Y),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(I){return i.isWebGL2?t.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,H,V){const Y=V.wireframe===!0;let z=a[I.id];z===void 0&&(z={},a[I.id]=z);let ne=z[H.id];ne===void 0&&(ne={},z[H.id]=ne);let ce=ne[Y];return ce===void 0&&(ce=m(h()),ne[Y]=ce),ce}function m(I){const H=[],V=[],Y=[];for(let z=0;z<s;z++)H[z]=0,V[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:Y,object:I,attributes:{},index:null}}function p(I,H,V,Y){const z=c.attributes,ne=H.attributes;let ce=0;const he=V.getAttributes();for(const me in he)if(he[me].location>=0){const fe=z[me];let ye=ne[me];if(ye===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),fe===void 0||fe.attribute!==ye||ye&&fe.data!==ye.data)return!0;ce++}return c.attributesNum!==ce||c.index!==Y}function x(I,H,V,Y){const z={},ne=H.attributes;let ce=0;const he=V.getAttributes();for(const me in he)if(he[me].location>=0){let fe=ne[me];fe===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor));const ye={};ye.attribute=fe,fe&&fe.data&&(ye.data=fe.data),z[me]=ye,ce++}c.attributes=z,c.attributesNum=ce,c.index=Y}function _(){const I=c.newAttributes;for(let H=0,V=I.length;H<V;H++)I[H]=0}function E(I){w(I,0)}function w(I,H){const V=c.newAttributes,Y=c.enabledAttributes,z=c.attributeDivisors;V[I]=1,Y[I]===0&&(t.enableVertexAttribArray(I),Y[I]=1),z[I]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),z[I]=H)}function T(){const I=c.newAttributes,H=c.enabledAttributes;for(let V=0,Y=H.length;V<Y;V++)H[V]!==I[V]&&(t.disableVertexAttribArray(V),H[V]=0)}function C(I,H,V,Y,z,ne,ce){ce===!0?t.vertexAttribIPointer(I,H,V,z,ne):t.vertexAttribPointer(I,H,V,Y,z,ne)}function L(I,H,V,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const z=Y.attributes,ne=V.getAttributes(),ce=H.defaultAttributeValues;for(const he in ne){const me=ne[he];if(me.location>=0){let te=z[he];if(te===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const fe=te.normalized,ye=te.itemSize,Ee=n.get(te);if(Ee===void 0)continue;const G=Ee.buffer,le=Ee.type,re=Ee.bytesPerElement,ue=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||te.gpuType===Nv);if(te.isInterleavedBufferAttribute){const we=te.data,W=we.stride,R=te.offset;if(we.isInstancedInterleavedBuffer){for(let P=0;P<me.locationSize;P++)w(me.location+P,we.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let P=0;P<me.locationSize;P++)E(me.location+P);t.bindBuffer(t.ARRAY_BUFFER,G);for(let P=0;P<me.locationSize;P++)C(me.location+P,ye/me.locationSize,le,fe,W*re,(R+ye/me.locationSize*P)*re,ue)}else{if(te.isInstancedBufferAttribute){for(let we=0;we<me.locationSize;we++)w(me.location+we,te.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<me.locationSize;we++)E(me.location+we);t.bindBuffer(t.ARRAY_BUFFER,G);for(let we=0;we<me.locationSize;we++)C(me.location+we,ye/me.locationSize,le,fe,ye*re,ye/me.locationSize*we*re,ue)}}else if(ce!==void 0){const fe=ce[he];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(me.location,fe);break;case 3:t.vertexAttrib3fv(me.location,fe);break;case 4:t.vertexAttrib4fv(me.location,fe);break;default:t.vertexAttrib1fv(me.location,fe)}}}}T()}function S(){O();for(const I in a){const H=a[I];for(const V in H){const Y=H[V];for(const z in Y)g(Y[z].object),delete Y[z];delete H[V]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const V in H){const Y=H[V];for(const z in Y)g(Y[z].object),delete Y[z];delete H[V]}delete a[I.id]}function N(I){for(const H in a){const V=a[H];if(V[I.id]===void 0)continue;const Y=V[I.id];for(const z in Y)g(Y[z].object),delete Y[z];delete V[I.id]}}function O(){$(),u=!0,c!==l&&(c=l,d(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:E,disableUnusedAttributes:T}}function Q2(t,e,n,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,f){t.drawArrays(r,u,f),n.update(f,r,1)}function l(u,f,h){if(h===0)return;let d,g;if(s)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,f,h),n.update(f,r,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];n.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function eR(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,E=o||e.has("OES_texture_float"),w=_&&E,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:T}}function tR(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new _s,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,_=x*4;let E=p.clippingState||null;l.value=E,E=u(g,h,_,d);for(let w=0;w!==_;++w)E[w]=n[w];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,E=d;_!==v;++_,E+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nR(t){let e=new WeakMap;function n(o,a){return a===rh?o.mapping=eo:a===oh&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rh||a===oh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pA(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class iR extends Jv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cr=4,ig=[.125,.215,.35,.446,.526,.582],Ms=20,pf=new iR,sg=new je;let mf=null,gf=0,_f=0;const vs=(1+Math.sqrt(5))/2,Sr=1/vs,rg=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,vs,Sr),new U(0,vs,-Sr),new U(Sr,0,vs),new U(-Sr,0,vs),new U(vs,Sr,0),new U(-vs,Sr,0)];class og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,gf,_f),e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ea,format:Xn,colorSpace:Ci,depthBuffer:!1},s=ag(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sR(r)),this._blurMaterial=rR(r,e,n)}return s}_compileMaterial(e){const n=new Un(this._lodPlanes[0],e);this._renderer.compile(n,pf)}_sceneToCubeUV(e,n,i,s){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(sg),u.toneMapping=is,u.autoClear=!1;const d=new bd({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Un(new oo,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(sg),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;cl(s,x*_,p>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===eo||e.mapping===to;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rg[(s-1)%rg.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Un(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ms-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const p=[];let x=0;for(let C=0;C<Ms;++C){const L=C/v,S=Math.exp(-L*L/2);p.push(S),C===0?x+=S:C<m&&(x+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const E=this._sizeLods[s],w=3*E*(s>_-Cr?s-_+Cr:0),T=4*(this._cubeSize-E);cl(n,w,T,3*E,2*E),l.setRenderTarget(n),l.render(f,pf)}}function sR(t){const e=[],n=[],i=[];let s=t;const r=t-Cr+1+ig.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Cr?l=ig[o-t+Cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),_=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];x.set(S,v*g*T),_.set(h,m*g*T);const M=[T,T,T,T,T,T];E.set(M,p*g*T)}const w=new Fn;w.setAttribute("position",new ii(x,v)),w.setAttribute("uv",new ii(_,m)),w.setAttribute("faceIndex",new ii(E,p)),e.push(w),s>Cr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ag(t,e,n){const i=new $s(t,e,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function rR(t,e,n){const i=new Float32Array(Ms),s=new U(0,1,0);return new Ys({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function lg(){return new Ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function cg(){return new Ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Ad(){return`

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
	`}function oR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rh||l===oh,u=l===eo||l===to;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new og(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){n===null&&(n=new og(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function aR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lR(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,E=x.length;_<E;_+=3){const w=x[_+0],T=x[_+1],C=x[_+2];h.push(w,T,T,C,C,w)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,E=x.length/3-1;_<E;_+=3){const w=_+0,T=_+1,C=_+2;h.push(w,T,T,C,C,w)}}else return;const m=new(Gv(h)?Kv:Yv)(h,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cR(t,e,n,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){t.drawElements(r,g,a,d*l),n.update(g,r,1)}function f(d,g,v){if(v===0)return;let m,p;if(s)m=t,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,v),n.update(g,r,v)}function h(d,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];n.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function uR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function fR(t,e){return t[0]-e[0]}function hR(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dR(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let I=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),_===!0&&(L=2),E===!0&&(L=3);let S=u.attributes.position.count*L,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const N=new Float32Array(S*M*4*g),O=new qv(N,S,M,g);O.type=Qi,O.needsUpdate=!0;const $=L*4;for(let H=0;H<g;H++){const V=w[H],Y=T[H],z=C[H],ne=S*M*4*H;for(let ce=0;ce<V.count;ce++){const he=ce*$;x===!0&&(o.fromBufferAttribute(V,ce),N[ne+he+0]=o.x,N[ne+he+1]=o.y,N[ne+he+2]=o.z,N[ne+he+3]=0),_===!0&&(o.fromBufferAttribute(Y,ce),N[ne+he+4]=o.x,N[ne+he+5]=o.y,N[ne+he+6]=o.z,N[ne+he+7]=0),E===!0&&(o.fromBufferAttribute(z,ce),N[ne+he+8]=o.x,N[ne+he+9]=o.y,N[ne+he+10]=o.z,N[ne+he+11]=z.itemSize===4?o.w:1)}}v={count:g,texture:O,size:new Je(S,M)},r.set(u,v),u.addEventListener("dispose",I)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const d=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<d;_++){const E=g[_];E[0]=_,E[1]=h[_]}g.sort(hR);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(fR);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const E=a[_],w=E[0],T=E[1];w!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+_)!==v[w]&&u.setAttribute("morphTarget"+_,v[w]),m&&u.getAttribute("morphNormal"+_)!==m[w]&&u.setAttribute("morphNormal"+_,m[w]),s[_]=T,p+=T):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const x=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function pR(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}class ty extends rn{constructor(e,n,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Vs,u!==Vs&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vs&&(i=Ji),i===void 0&&u===no&&(i=ks),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ny=new rn,iy=new ty(1,1);iy.compareFunction=zv;const sy=new qv,ry=new Zw,oy=new Qv,ug=[],fg=[],hg=new Float32Array(16),dg=new Float32Array(9),pg=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=ug[s];if(r===void 0&&(r=new Float32Array(s),ug[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xu(t,e){let n=fg[e];n===void 0&&(n=new Int32Array(e),fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function _R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function vR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function yR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;pg.set(i),t.uniformMatrix2fv(this.addr,!1,pg),Dt(n,i)}}function xR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;dg.set(i),t.uniformMatrix3fv(this.addr,!1,dg),Dt(n,i)}}function SR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;hg.set(i),t.uniformMatrix4fv(this.addr,!1,hg),Dt(n,i)}}function MR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ER(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function bR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function TR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function wR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function CR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function RR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function PR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);const r=this.type===t.SAMPLER_2D_SHADOW?iy:ny;n.setTexture2D(e||r,s)}function LR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||ry,s)}function IR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||oy,s)}function DR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||sy,s)}function NR(t){switch(t){case 5126:return mR;case 35664:return gR;case 35665:return _R;case 35666:return vR;case 35674:return yR;case 35675:return xR;case 35676:return SR;case 5124:case 35670:return MR;case 35667:case 35671:return ER;case 35668:case 35672:return bR;case 35669:case 35673:return TR;case 5125:return wR;case 36294:return AR;case 36295:return CR;case 36296:return RR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return DR}}function UR(t,e){t.uniform1fv(this.addr,e)}function OR(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function FR(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function BR(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function kR(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VR(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HR(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zR(t,e){t.uniform1iv(this.addr,e)}function GR(t,e){t.uniform2iv(this.addr,e)}function WR(t,e){t.uniform3iv(this.addr,e)}function XR(t,e){t.uniform4iv(this.addr,e)}function qR(t,e){t.uniform1uiv(this.addr,e)}function jR(t,e){t.uniform2uiv(this.addr,e)}function $R(t,e){t.uniform3uiv(this.addr,e)}function YR(t,e){t.uniform4uiv(this.addr,e)}function KR(t,e,n){const i=this.cache,s=e.length,r=xu(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||ny,r[o])}function ZR(t,e,n){const i=this.cache,s=e.length,r=xu(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||ry,r[o])}function JR(t,e,n){const i=this.cache,s=e.length,r=xu(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||oy,r[o])}function QR(t,e,n){const i=this.cache,s=e.length,r=xu(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||sy,r[o])}function eP(t){switch(t){case 5126:return UR;case 35664:return OR;case 35665:return FR;case 35666:return BR;case 35674:return kR;case 35675:return VR;case 35676:return HR;case 5124:case 35670:return zR;case 35667:case 35671:return GR;case 35668:case 35672:return WR;case 35669:case 35673:return XR;case 5125:return qR;case 36294:return jR;case 36295:return $R;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return QR}}class tP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NR(n.type)}}class nP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eP(n.type)}}class iP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function mg(t,e){t.seq.push(e),t.map[e.id]=e}function sP(t,e,n){const i=t.name,s=i.length;for(vf.lastIndex=0;;){const r=vf.exec(i),o=vf.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mg(n,c===void 0?new tP(a,t,e):new nP(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new iP(a),mg(n,f)),n=f}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);sP(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function gg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rP=37297;let oP=0;function aP(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function lP(t){const e=lt.getPrimaries(lt.workingColorSpace),n=lt.getPrimaries(t);let i;switch(e===n?i="":e===jl&&n===ql?i="LinearDisplayP3ToLinearSRGB":e===ql&&n===jl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ci:case vu:return[i,"LinearTransferOETF"];case pt:case _u:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function _g(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+aP(t.getShaderSource(e),o)}else return s}function cP(t,e){const n=lP(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uP(t,e){let n;switch(e){case xw:n="Linear";break;case Sw:n="Reinhard";break;case Mw:n="OptimizedCineon";break;case Ew:n="ACESFilmic";break;case Tw:n="AgX";break;case bw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function fP(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function hP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rr).join(`
`)}function dP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Rr(t){return t!==""}function vg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mP=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(t){return t.replace(mP,_P)}const gP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _P(t,e){let n=Xe[e];if(n===void 0){const i=gP.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(n)}const vP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(t){return t.replace(vP,yP)}function yP(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function SP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function EP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case vw:e="ENVMAP_BLENDING_MIX";break;case yw:e="ENVMAP_BLENDING_ADD";break}return e}function bP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function TP(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=xP(n),c=SP(n),u=MP(n),f=EP(n),h=bP(n),d=n.isWebGL2?"":fP(n),g=hP(n),v=dP(r),m=s.createProgram();let p,x,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Rr).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Rr).join(`
`),x.length>0&&(x+=`
`)):(p=[Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),x=[d,Sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==is?"#define TONE_MAPPING":"",n.toneMapping!==is?Xe.tonemapping_pars_fragment:"",n.toneMapping!==is?uP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,cP("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rr).join(`
`)),o=fh(o),o=vg(o,n),o=yg(o,n),a=fh(a),a=vg(a,n),a=yg(a,n),o=xg(o),a=xg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=_+p+o,w=_+x+a,T=gg(s,s.VERTEX_SHADER,E),C=gg(s,s.FRAGMENT_SHADER,w);s.attachShader(m,T),s.attachShader(m,C),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(O){if(t.debug.checkShaderErrors){const $=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),H=s.getShaderInfoLog(C).trim();let V=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,m,T,C);else{const z=_g(s,T,"vertex"),ne=_g(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+z+`
`+ne)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(I===""||H==="")&&(Y=!1);Y&&(O.diagnostics={runnable:V,programLog:$,vertexShader:{log:I,prefix:p},fragmentShader:{log:H,prefix:x}})}s.deleteShader(T),s.deleteShader(C),S=new Sl(s,m),M=pP(s,m)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,rP)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oP++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}let wP=0;class AP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CP(e),n.set(e,i)),i}}class CP{constructor(e){this.id=wP++,this.code=e,this.usedTimes=0}}function RP(t,e,n,i,s,r,o){const a=new jv,l=new AP,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,M,N,O,$){const I=O.fog,H=$.geometry,V=S.isMeshStandardMaterial?O.environment:null,Y=(S.isMeshStandardMaterial?n:e).get(S.envMap||V),z=Y&&Y.mapping===gu?Y.image.height:null,ne=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=ce!==void 0?ce.length:0;let me=0;H.morphAttributes.position!==void 0&&(me=1),H.morphAttributes.normal!==void 0&&(me=2),H.morphAttributes.color!==void 0&&(me=3);let te,fe,ye,Ee;if(ne){const Qt=Jn[ne];te=Qt.vertexShader,fe=Qt.fragmentShader}else te=S.vertexShader,fe=S.fragmentShader,l.update(S),ye=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const G=t.getRenderTarget(),le=$.isInstancedMesh===!0,re=$.isBatchedMesh===!0,ue=!!S.map,we=!!S.matcap,W=!!Y,R=!!S.aoMap,P=!!S.lightMap,B=!!S.bumpMap,X=!!S.normalMap,J=!!S.displacementMap,ie=!!S.emissiveMap,b=!!S.metalnessMap,y=!!S.roughnessMap,D=S.anisotropy>0,k=S.clearcoat>0,j=S.iridescence>0,K=S.sheen>0,ae=S.transmission>0,se=D&&!!S.anisotropyMap,de=k&&!!S.clearcoatMap,ve=k&&!!S.clearcoatNormalMap,Ae=k&&!!S.clearcoatRoughnessMap,oe=j&&!!S.iridescenceMap,Ge=j&&!!S.iridescenceThicknessMap,ke=K&&!!S.sheenColorMap,Oe=K&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,Ce=!!S.specularColorMap,Ie=!!S.specularIntensityMap,We=ae&&!!S.transmissionMap,ht=ae&&!!S.thicknessMap,Ye=!!S.gradientMap,ge=!!S.alphaMap,F=S.alphaTest>0,xe=!!S.alphaHash,Se=!!S.extensions,Fe=!!H.attributes.uv1,De=!!H.attributes.uv2,ct=!!H.attributes.uv3;let ut=is;return S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ut=t.toneMapping),{isWebGL2:u,shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:fe,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:re,instancing:le,instancingColor:le&&$.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:G===null?t.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ci,map:ue,matcap:we,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:z,aoMap:R,lightMap:P,bumpMap:B,normalMap:X,displacementMap:h&&J,emissiveMap:ie,normalMapObjectSpace:X&&S.normalMapType===Fw,normalMapTangentSpace:X&&S.normalMapType===Md,metalnessMap:b,roughnessMap:y,anisotropy:D,anisotropyMap:se,clearcoat:k,clearcoatMap:de,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ae,iridescence:j,iridescenceMap:oe,iridescenceThicknessMap:Ge,sheen:K,sheenColorMap:ke,sheenRoughnessMap:Oe,specularMap:Pe,specularColorMap:Ce,specularIntensityMap:Ie,transmission:ae,transmissionMap:We,thicknessMap:ht,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===Hr,alphaMap:ge,alphaTest:F,alphaHash:xe,combine:S.combine,mapUv:ue&&v(S.map.channel),aoMapUv:R&&v(S.aoMap.channel),lightMapUv:P&&v(S.lightMap.channel),bumpMapUv:B&&v(S.bumpMap.channel),normalMapUv:X&&v(S.normalMap.channel),displacementMapUv:J&&v(S.displacementMap.channel),emissiveMapUv:ie&&v(S.emissiveMap.channel),metalnessMapUv:b&&v(S.metalnessMap.channel),roughnessMapUv:y&&v(S.roughnessMap.channel),anisotropyMapUv:se&&v(S.anisotropyMap.channel),clearcoatMapUv:de&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(S.sheenRoughnessMap.channel),specularMapUv:Pe&&v(S.specularMap.channel),specularColorMapUv:Ce&&v(S.specularColorMap.channel),specularIntensityMapUv:Ie&&v(S.specularIntensityMap.channel),transmissionMapUv:We&&v(S.transmissionMap.channel),thicknessMapUv:ht&&v(S.thicknessMap.channel),alphaMapUv:ge&&v(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(X||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:De,vertexUv3s:ct,pointsUvs:$.isPoints===!0&&!!H.attributes.uv&&(ue||ge),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ut,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Si,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Se&&S.extensions.derivatives===!0,extensionFragDepth:Se&&S.extensions.fragDepth===!0,extensionDrawBuffers:Se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)M.push(N),M.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function E(S){const M=g[S.type];let N;if(M){const O=Jn[M];N=uA.clone(O.uniforms)}else N=S.uniforms;return N}function w(S,M){let N;for(let O=0,$=c.length;O<$;O++){const I=c[O];if(I.cacheKey===M){N=I,++N.usedTimes;break}}return N===void 0&&(N=new TP(t,M,S,r),c.push(N)),N}function T(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function PP(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function LP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Eg(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||LP),i.length>1&&i.sort(h||Mg),s.length>1&&s.sort(h||Mg)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function IP(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Eg,t.set(i,[o])):s>=r.length?(o=new Eg,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new je};break;case"SpotLight":n={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function NP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UP=0;function OP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FP(t,e){const n=new DP,i=NP(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new U);const r=new U,o=new Et,a=new Et;function l(u,f){let h=0,d=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let v=0,m=0,p=0,x=0,_=0,E=0,w=0,T=0,C=0,L=0,S=0;u.sort(OP);const M=f===!0?Math.PI:1;for(let O=0,$=u.length;O<$;O++){const I=u[O],H=I.color,V=I.intensity,Y=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*V*M,d+=H.g*V*M,g+=H.b*V*M;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(I.sh.coefficients[ne],V);S++}else if(I.isDirectionalLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.directionalShadow[v]=he,s.directionalShadowMap[v]=z,s.directionalShadowMatrix[v]=I.shadow.matrix,E++}s.directional[v]=ne,v++}else if(I.isSpotLight){const ne=n.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(H).multiplyScalar(V*M),ne.distance=Y,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,s.spot[p]=ne;const ce=I.shadow;if(I.map&&(s.spotLightMap[C]=I.map,C++,ce.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[p]=ce.matrix,I.castShadow){const he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.spotShadow[p]=he,s.spotShadowMap[p]=z,T++}p++}else if(I.isRectAreaLight){const ne=n.get(I);ne.color.copy(H).multiplyScalar(V),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),s.rectArea[x]=ne,x++}else if(I.isPointLight){const ne=n.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,s.pointShadow[m]=he,s.pointShadowMap[m]=z,s.pointShadowMatrix[m]=I.shadow.matrix,w++}s.point[m]=ne,m++}else if(I.isHemisphereLight){const ne=n.get(I);ne.skyColor.copy(I.color).multiplyScalar(V*M),ne.groundColor.copy(I.groundColor).multiplyScalar(V*M),s.hemi[_]=ne,_++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==x||N.hemiLength!==_||N.numDirectionalShadows!==E||N.numPointShadows!==w||N.numSpotShadows!==T||N.numSpotMaps!==C||N.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=T+C-L,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=S,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=x,N.hemiLength=_,N.numDirectionalShadows=E,N.numPointShadows=w,N.numSpotShadows=T,N.numSpotMaps=C,N.numLightProbes=S,s.version=UP++)}function c(u,f){let h=0,d=0,g=0,v=0,m=0;const p=f.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const E=u[x];if(E.isDirectionalLight){const w=s.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(E.isSpotLight){const w=s.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const w=s.rectArea[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const w=s.point[d];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const w=s.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function bg(t,e){const n=new FP(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function BP(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let l;return a===void 0?(l=new bg(t,e),n.set(r,[l])):o>=a.length?(l=new bg(t,e),a.push(l)):l=a[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class kP extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VP extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zP=`uniform sampler2D shadow_pass;
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
}`;function GP(t,e,n){let i=new Td;const s=new Je,r=new Je,o=new mt,a=new kP({depthPacking:Ow}),l=new VP,c={},u=n.maxTextureSize,f={[Ai]:hn,[hn]:Ai,[Si]:Si},h=new Ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:HP,fragmentShader:zP}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Un(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let p=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(ns),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const $=p!==vi&&this.type===vi,I=p===vi&&this.type!==vi;for(let H=0,V=T.length;H<V;H++){const Y=T[H],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();if(s.multiply(ne),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y)),z.map===null||$===!0||I===!0){const he=this.type!==vi?{minFilter:sn,magFilter:sn}:{};z.map!==null&&z.map.dispose(),z.map=new $s(s.x,s.y,he),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ce=z.getViewportCount();for(let he=0;he<ce;he++){const me=z.getViewport(he);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),O.viewport(o),z.updateMatrices(Y,he),i=z.getFrustum(),E(C,L,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===vi&&x(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,N)};function x(T,C){const L=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $s(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,L,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,L,d,v,null)}function _(T,C,L,S){let M=null;const N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)M=N;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=M.uuid,$=C.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let H=I[$];H===void 0&&(H=M.clone(),I[$]=H,C.addEventListener("dispose",w)),M=H}if(M.visible=C.visible,M.wireframe=C.wireframe,S===vi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=t.properties.get(M);O.light=L}return M}function E(T,C,L,S,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const $=e.update(T),I=T.material;if(Array.isArray(I)){const H=$.groups;for(let V=0,Y=H.length;V<Y;V++){const z=H[V],ne=I[z.materialIndex];if(ne&&ne.visible){const ce=_(T,ne,S,M);T.onBeforeShadow(t,T,C,L,$,ce,z),t.renderBufferDirect(L,null,$,ce,T,z),T.onAfterShadow(t,T,C,L,$,ce,z)}}}else if(I.visible){const H=_(T,I,S,M);T.onBeforeShadow(t,T,C,L,$,H,null),t.renderBufferDirect(L,null,$,H,T,null),T.onAfterShadow(t,T,C,L,$,H,null)}}const O=T.children;for(let $=0,I=O.length;$<I;$++)E(O[$],C,L,S,M)}function w(T){T.target.removeEventListener("dispose",w);for(const L in c){const S=c[L],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function WP(t,e,n){const i=n.isWebGL2;function s(){let F=!1;const xe=new mt;let Se=null;const Fe=new mt(0,0,0,0);return{setMask:function(De){Se!==De&&!F&&(t.colorMask(De,De,De,De),Se=De)},setLocked:function(De){F=De},setClear:function(De,ct,ut,Nt,Qt){Qt===!0&&(De*=Nt,ct*=Nt,ut*=Nt),xe.set(De,ct,ut,Nt),Fe.equals(xe)===!1&&(t.clearColor(De,ct,ut,Nt),Fe.copy(xe))},reset:function(){F=!1,Se=null,Fe.set(-1,0,0,0)}}}function r(){let F=!1,xe=null,Se=null,Fe=null;return{setTest:function(De){De?re(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(De){xe!==De&&!F&&(t.depthMask(De),xe=De)},setFunc:function(De){if(Se!==De){switch(De){case fw:t.depthFunc(t.NEVER);break;case hw:t.depthFunc(t.ALWAYS);break;case dw:t.depthFunc(t.LESS);break;case Wl:t.depthFunc(t.LEQUAL);break;case pw:t.depthFunc(t.EQUAL);break;case mw:t.depthFunc(t.GEQUAL);break;case gw:t.depthFunc(t.GREATER);break;case _w:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=De}},setLocked:function(De){F=De},setClear:function(De){Fe!==De&&(t.clearDepth(De),Fe=De)},reset:function(){F=!1,xe=null,Se=null,Fe=null}}}function o(){let F=!1,xe=null,Se=null,Fe=null,De=null,ct=null,ut=null,Nt=null,Qt=null;return{setTest:function(ft){F||(ft?re(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ft){xe!==ft&&!F&&(t.stencilMask(ft),xe=ft)},setFunc:function(ft,en,Kn){(Se!==ft||Fe!==en||De!==Kn)&&(t.stencilFunc(ft,en,Kn),Se=ft,Fe=en,De=Kn)},setOp:function(ft,en,Kn){(ct!==ft||ut!==en||Nt!==Kn)&&(t.stencilOp(ft,en,Kn),ct=ft,ut=en,Nt=Kn)},setLocked:function(ft){F=ft},setClear:function(ft){Qt!==ft&&(t.clearStencil(ft),Qt=ft)},reset:function(){F=!1,xe=null,Se=null,Fe=null,De=null,ct=null,ut=null,Nt=null,Qt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,E=null,w=null,T=null,C=null,L=null,S=new je(0,0,0),M=0,N=!1,O=null,$=null,I=null,H=null,V=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ce)[1]),z=ne>=1):ce.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),z=ne>=2);let he=null,me={};const te=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),ye=new mt().fromArray(te),Ee=new mt().fromArray(fe);function G(F,xe,Se,Fe){const De=new Uint8Array(4),ct=t.createTexture();t.bindTexture(F,ct),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ut=0;ut<Se;ut++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(xe,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(xe+ut,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return ct}const le={};le[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(t.DEPTH_TEST),l.setFunc(Wl),ie(!1),b(om),re(t.CULL_FACE),X(ns);function re(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function ue(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function we(F,xe){return d[F]!==xe?(t.bindFramebuffer(F,xe),d[F]=xe,i&&(F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe)),!0):!1}function W(F,xe){let Se=v,Fe=!1;if(F)if(Se=g.get(xe),Se===void 0&&(Se=[],g.set(xe,Se)),F.isWebGLMultipleRenderTargets){const De=F.texture;if(Se.length!==De.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let ct=0,ut=De.length;ct<ut;ct++)Se[ct]=t.COLOR_ATTACHMENT0+ct;Se.length=De.length,Fe=!0}}else Se[0]!==t.COLOR_ATTACHMENT0&&(Se[0]=t.COLOR_ATTACHMENT0,Fe=!0);else Se[0]!==t.BACK&&(Se[0]=t.BACK,Fe=!0);Fe&&(n.isWebGL2?t.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function R(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const P={[Ss]:t.FUNC_ADD,[K1]:t.FUNC_SUBTRACT,[Z1]:t.FUNC_REVERSE_SUBTRACT};if(i)P[cm]=t.MIN,P[um]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(P[cm]=F.MIN_EXT,P[um]=F.MAX_EXT)}const B={[J1]:t.ZERO,[Q1]:t.ONE,[ew]:t.SRC_COLOR,[ih]:t.SRC_ALPHA,[ow]:t.SRC_ALPHA_SATURATE,[sw]:t.DST_COLOR,[nw]:t.DST_ALPHA,[tw]:t.ONE_MINUS_SRC_COLOR,[sh]:t.ONE_MINUS_SRC_ALPHA,[rw]:t.ONE_MINUS_DST_COLOR,[iw]:t.ONE_MINUS_DST_ALPHA,[aw]:t.CONSTANT_COLOR,[lw]:t.ONE_MINUS_CONSTANT_COLOR,[cw]:t.CONSTANT_ALPHA,[uw]:t.ONE_MINUS_CONSTANT_ALPHA};function X(F,xe,Se,Fe,De,ct,ut,Nt,Qt,ft){if(F===ns){p===!0&&(ue(t.BLEND),p=!1);return}if(p===!1&&(re(t.BLEND),p=!0),F!==Y1){if(F!==x||ft!==N){if((_!==Ss||T!==Ss)&&(t.blendEquation(t.FUNC_ADD),_=Ss,T=Ss),ft)switch(F){case Hr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nh:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Hr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,w=null,C=null,L=null,S.set(0,0,0),M=0,x=F,N=ft}return}De=De||xe,ct=ct||Se,ut=ut||Fe,(xe!==_||De!==T)&&(t.blendEquationSeparate(P[xe],P[De]),_=xe,T=De),(Se!==E||Fe!==w||ct!==C||ut!==L)&&(t.blendFuncSeparate(B[Se],B[Fe],B[ct],B[ut]),E=Se,w=Fe,C=ct,L=ut),(Nt.equals(S)===!1||Qt!==M)&&(t.blendColor(Nt.r,Nt.g,Nt.b,Qt),S.copy(Nt),M=Qt),x=F,N=!1}function J(F,xe){F.side===Si?ue(t.CULL_FACE):re(t.CULL_FACE);let Se=F.side===hn;xe&&(Se=!Se),ie(Se),F.blending===Hr&&F.transparent===!1?X(ns):X(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Fe=F.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),D(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){O!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),O=F)}function b(F){F!==q1?(re(t.CULL_FACE),F!==$&&(F===om?t.cullFace(t.BACK):F===j1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),$=F}function y(F){F!==I&&(z&&t.lineWidth(F),I=F)}function D(F,xe,Se){F?(re(t.POLYGON_OFFSET_FILL),(H!==xe||V!==Se)&&(t.polygonOffset(xe,Se),H=xe,V=Se)):ue(t.POLYGON_OFFSET_FILL)}function k(F){F?re(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function j(F){F===void 0&&(F=t.TEXTURE0+Y-1),he!==F&&(t.activeTexture(F),he=F)}function K(F,xe,Se){Se===void 0&&(he===null?Se=t.TEXTURE0+Y-1:Se=he);let Fe=me[Se];Fe===void 0&&(Fe={type:void 0,texture:void 0},me[Se]=Fe),(Fe.type!==F||Fe.texture!==xe)&&(he!==Se&&(t.activeTexture(Se),he=Se),t.bindTexture(F,xe||le[F]),Fe.type=F,Fe.texture=xe)}function ae(){const F=me[he];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(F){ye.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ye.copy(F))}function We(F){Ee.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ee.copy(F))}function ht(F,xe){let Se=f.get(xe);Se===void 0&&(Se=new WeakMap,f.set(xe,Se));let Fe=Se.get(F);Fe===void 0&&(Fe=t.getUniformBlockIndex(xe,F.name),Se.set(F,Fe))}function Ye(F,xe){const Fe=f.get(xe).get(F);u.get(xe)!==Fe&&(t.uniformBlockBinding(xe,Fe,F.__bindingPointIndex),u.set(xe,Fe))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},he=null,me={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,E=null,w=null,T=null,C=null,L=null,S=new je(0,0,0),M=0,N=!1,O=null,$=null,I=null,H=null,V=null,ye.set(0,0,t.canvas.width,t.canvas.height),Ee.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:re,disable:ue,bindFramebuffer:we,drawBuffers:W,useProgram:R,setBlending:X,setMaterial:J,setFlipSided:ie,setCullFace:b,setLineWidth:y,setPolygonOffset:D,setScissorTest:k,activeTexture:j,bindTexture:K,unbindTexture:ae,compressedTexImage2D:se,compressedTexImage3D:de,texImage2D:Pe,texImage3D:Ce,updateUBOMapping:ht,uniformBlockBinding:Ye,texStorage2D:ke,texStorage3D:Oe,texSubImage2D:ve,texSubImage3D:Ae,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ge,scissor:Ie,viewport:We,reset:ge}}function XP(t,e,n,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return d?new OffscreenCanvas(b,y):ta("canvas")}function v(b,y,D,k){let j=1;if((b.width>k||b.height>k)&&(j=k/Math.max(b.width,b.height)),j<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const K=y?uh:Math.floor,ae=K(j*b.width),se=K(j*b.height);f===void 0&&(f=g(ae,se));const de=D?g(ae,se):f;return de.width=ae,de.height=se,de.getContext("2d").drawImage(b,0,0,ae,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ae+"x"+se+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Vm(b.width)&&Vm(b.height)}function p(b){return a?!1:b.wrapS!==Wn||b.wrapT!==Wn||b.minFilter!==sn&&b.minFilter!==Pn}function x(b,y){return b.generateMipmaps&&y&&b.minFilter!==sn&&b.minFilter!==Pn}function _(b){t.generateMipmap(b)}function E(b,y,D,k,j=!1){if(a===!1)return y;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=y;if(y===t.RED&&(D===t.FLOAT&&(K=t.R32F),D===t.HALF_FLOAT&&(K=t.R16F),D===t.UNSIGNED_BYTE&&(K=t.R8)),y===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(K=t.R8UI),D===t.UNSIGNED_SHORT&&(K=t.R16UI),D===t.UNSIGNED_INT&&(K=t.R32UI),D===t.BYTE&&(K=t.R8I),D===t.SHORT&&(K=t.R16I),D===t.INT&&(K=t.R32I)),y===t.RG&&(D===t.FLOAT&&(K=t.RG32F),D===t.HALF_FLOAT&&(K=t.RG16F),D===t.UNSIGNED_BYTE&&(K=t.RG8)),y===t.RGBA){const ae=j?Xl:lt.getTransfer(k);D===t.FLOAT&&(K=t.RGBA32F),D===t.HALF_FLOAT&&(K=t.RGBA16F),D===t.UNSIGNED_BYTE&&(K=ae===dt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(b,y,D){return x(b,D)===!0||b.isFramebufferTexture&&b.minFilter!==sn&&b.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===sn||b===fm||b===zu?t.NEAREST:t.LINEAR}function C(b){const y=b.target;y.removeEventListener("dispose",C),S(y),y.isVideoTexture&&u.delete(y)}function L(b){const y=b.target;y.removeEventListener("dispose",L),N(y)}function S(b){const y=i.get(b);if(y.__webglInit===void 0)return;const D=b.source,k=h.get(D);if(k){const j=k[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(k).length===0&&h.delete(D)}i.remove(b)}function M(b){const y=i.get(b);t.deleteTexture(y.__webglTexture);const D=b.source,k=h.get(D);delete k[y.__cacheKey],o.memory.textures--}function N(b){const y=b.texture,D=i.get(b),k=i.get(y);if(k.__webglTexture!==void 0&&(t.deleteTexture(k.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(D.__webglFramebuffer[j]))for(let K=0;K<D.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(D.__webglFramebuffer[j][K]);else t.deleteFramebuffer(D.__webglFramebuffer[j]);D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer[j])}else{if(Array.isArray(D.__webglFramebuffer))for(let j=0;j<D.__webglFramebuffer.length;j++)t.deleteFramebuffer(D.__webglFramebuffer[j]);else t.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&t.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let j=0;j<D.__webglColorRenderbuffer.length;j++)D.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(D.__webglColorRenderbuffer[j]);D.__webglDepthRenderbuffer&&t.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let j=0,K=y.length;j<K;j++){const ae=i.get(y[j]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(y[j])}i.remove(y),i.remove(b)}let O=0;function $(){O=0}function I(){const b=O;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),O+=1,b}function H(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function V(b,y){const D=i.get(b);if(b.isVideoTexture&&J(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const k=b.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(D,b,y);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+y)}function Y(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ye(D,b,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+y)}function z(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ye(D,b,y);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+y)}function ne(b,y){const D=i.get(b);if(b.version>0&&D.__version!==b.version){Ee(D,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+y)}const ce={[wt]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[ah]:t.MIRRORED_REPEAT},he={[sn]:t.NEAREST,[fm]:t.NEAREST_MIPMAP_NEAREST,[zu]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[ww]:t.LINEAR_MIPMAP_NEAREST,[Qo]:t.LINEAR_MIPMAP_LINEAR},me={[Bw]:t.NEVER,[Ww]:t.ALWAYS,[kw]:t.LESS,[zv]:t.LEQUAL,[Vw]:t.EQUAL,[Gw]:t.GEQUAL,[Hw]:t.GREATER,[zw]:t.NOTEQUAL};function te(b,y,D){if(D?(t.texParameteri(b,t.TEXTURE_WRAP_S,ce[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ce[y.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ce[y.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,he[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,he[y.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==Wn||y.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(y.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==sn&&y.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===sn||y.minFilter!==zu&&y.minFilter!==Qo||y.type===Qi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function fe(b,y){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",C));const k=y.source;let j=h.get(k);j===void 0&&(j={},h.set(k,j));const K=H(y);if(K!==b.__cacheKey){j[K]===void 0&&(j[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),j[K].usedTimes++;const ae=j[b.__cacheKey];ae!==void 0&&(j[b.__cacheKey].usedTimes--,ae.usedTimes===0&&M(y)),b.__cacheKey=K,b.__webglTexture=j[K].texture}return D}function ye(b,y,D){let k=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=t.TEXTURE_3D);const j=fe(b,y),K=y.source;n.bindTexture(k,b.__webglTexture,t.TEXTURE0+D);const ae=i.get(K);if(K.version!==ae.__version||j===!0){n.activeTexture(t.TEXTURE0+D);const se=lt.getPrimaries(lt.workingColorSpace),de=y.colorSpace===In?null:lt.getPrimaries(y.colorSpace),ve=y.colorSpace===In||se===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=p(y)&&m(y.image)===!1;let oe=v(y.image,Ae,!1,s.maxTextureSize);oe=ie(y,oe);const Ge=m(oe)||a,ke=r.convert(y.format,y.colorSpace);let Oe=r.convert(y.type),Pe=E(y.internalFormat,ke,Oe,y.colorSpace,y.isVideoTexture);te(k,y,Ge);let Ce;const Ie=y.mipmaps,We=a&&y.isVideoTexture!==!0&&Pe!==Vv,ht=ae.__version===void 0||j===!0,Ye=w(y,oe,Ge);if(y.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?y.type===Qi?Pe=t.DEPTH_COMPONENT32F:y.type===Ji?Pe=t.DEPTH_COMPONENT24:y.type===ks?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:y.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Vs&&Pe===t.DEPTH_COMPONENT&&y.type!==Sd&&y.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ji,Oe=r.convert(y.type)),y.format===no&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,y.type!==ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ks,Oe=r.convert(y.type))),ht&&(We?n.texStorage2D(t.TEXTURE_2D,1,Pe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ke,Oe,null));else if(y.isDataTexture)if(Ie.length>0&&Ge){We&&ht&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,Ie[0].width,Ie[0].height);for(let ge=0,F=Ie.length;ge<F;ge++)Ce=Ie[ge],We?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ke,Oe,Ce.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,Ce.width,Ce.height,0,ke,Oe,Ce.data);y.generateMipmaps=!1}else We?(ht&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ke,Oe,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ke,Oe,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,Pe,Ie[0].width,Ie[0].height,oe.depth);for(let ge=0,F=Ie.length;ge<F;ge++)Ce=Ie[ge],y.format!==Xn?ke!==null?We?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,oe.depth,ke,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,Ce.width,Ce.height,oe.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,oe.depth,ke,Oe,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,Ce.width,Ce.height,oe.depth,0,ke,Oe,Ce.data)}else{We&&ht&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,Ie[0].width,Ie[0].height);for(let ge=0,F=Ie.length;ge<F;ge++)Ce=Ie[ge],y.format!==Xn?ke!==null?We?n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ke,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Pe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ke,Oe,Ce.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,Ce.width,Ce.height,0,ke,Oe,Ce.data)}else if(y.isDataArrayTexture)We?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,Pe,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ke,Oe,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,ke,Oe,oe.data);else if(y.isData3DTexture)We?(ht&&n.texStorage3D(t.TEXTURE_3D,Ye,Pe,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ke,Oe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,ke,Oe,oe.data);else if(y.isFramebufferTexture){if(ht)if(We)n.texStorage2D(t.TEXTURE_2D,Ye,Pe,oe.width,oe.height);else{let ge=oe.width,F=oe.height;for(let xe=0;xe<Ye;xe++)n.texImage2D(t.TEXTURE_2D,xe,Pe,ge,F,0,ke,Oe,null),ge>>=1,F>>=1}}else if(Ie.length>0&&Ge){We&&ht&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,Ie[0].width,Ie[0].height);for(let ge=0,F=Ie.length;ge<F;ge++)Ce=Ie[ge],We?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ke,Oe,Ce):n.texImage2D(t.TEXTURE_2D,ge,Pe,ke,Oe,Ce);y.generateMipmaps=!1}else We?(ht&&n.texStorage2D(t.TEXTURE_2D,Ye,Pe,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,Oe,oe)):n.texImage2D(t.TEXTURE_2D,0,Pe,ke,Oe,oe);x(y,Ge)&&_(k),ae.__version=K.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ee(b,y,D){if(y.image.length!==6)return;const k=fe(b,y),j=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+D);const K=i.get(j);if(j.version!==K.__version||k===!0){n.activeTexture(t.TEXTURE0+D);const ae=lt.getPrimaries(lt.workingColorSpace),se=y.colorSpace===In?null:lt.getPrimaries(y.colorSpace),de=y.colorSpace===In||ae===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ve=y.isCompressedTexture||y.image[0].isCompressedTexture,Ae=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let ge=0;ge<6;ge++)!ve&&!Ae?oe[ge]=v(y.image[ge],!1,!0,s.maxCubemapSize):oe[ge]=Ae?y.image[ge].image:y.image[ge],oe[ge]=ie(y,oe[ge]);const Ge=oe[0],ke=m(Ge)||a,Oe=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),Ce=E(y.internalFormat,Oe,Pe,y.colorSpace),Ie=a&&y.isVideoTexture!==!0,We=K.__version===void 0||k===!0;let ht=w(y,Ge,ke);te(t.TEXTURE_CUBE_MAP,y,ke);let Ye;if(ve){Ie&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,Ce,Ge.width,Ge.height);for(let ge=0;ge<6;ge++){Ye=oe[ge].mipmaps;for(let F=0;F<Ye.length;F++){const xe=Ye[F];y.format!==Xn?Oe!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F,0,0,xe.width,xe.height,Oe,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F,0,0,xe.width,xe.height,Oe,Pe,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F,Ce,xe.width,xe.height,0,Oe,Pe,xe.data)}}}else{Ye=y.mipmaps,Ie&&We&&(Ye.length>0&&ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,Ce,oe[0].width,oe[0].height));for(let ge=0;ge<6;ge++)if(Ae){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,oe[ge].width,oe[ge].height,Oe,Pe,oe[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,oe[ge].width,oe[ge].height,0,Oe,Pe,oe[ge].data);for(let F=0;F<Ye.length;F++){const Se=Ye[F].image[ge].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F+1,0,0,Se.width,Se.height,Oe,Pe,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F+1,Ce,Se.width,Se.height,0,Oe,Pe,Se.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe,Pe,oe[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,Oe,Pe,oe[ge]);for(let F=0;F<Ye.length;F++){const xe=Ye[F];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F+1,0,0,Oe,Pe,xe.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,F+1,Ce,Oe,Pe,xe.image[ge])}}}x(y,ke)&&_(t.TEXTURE_CUBE_MAP),K.__version=j.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function G(b,y,D,k,j,K){const ae=r.convert(D.format,D.colorSpace),se=r.convert(D.type),de=E(D.internalFormat,ae,se,D.colorSpace);if(!i.get(y).__hasExternalTextures){const Ae=Math.max(1,y.width>>K),oe=Math.max(1,y.height>>K);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,K,de,Ae,oe,y.depth,0,ae,se,null):n.texImage2D(j,K,de,Ae,oe,0,ae,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),X(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,j,i.get(D).__webglTexture,0,B(y)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,j,i.get(D).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,y,D){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let k=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(D||X(y)){const j=y.depthTexture;j&&j.isDepthTexture&&(j.type===Qi?k=t.DEPTH_COMPONENT32F:j.type===Ji&&(k=t.DEPTH_COMPONENT24));const K=B(y);X(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,k,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,K,k,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,k,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const k=B(y);D&&X(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,k,t.DEPTH24_STENCIL8,y.width,y.height):X(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const k=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0;j<k.length;j++){const K=k[j],ae=r.convert(K.format,K.colorSpace),se=r.convert(K.type),de=E(K.internalFormat,ae,se,K.colorSpace),ve=B(y);D&&X(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,de,y.width,y.height):X(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,de,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,de,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const k=i.get(y.depthTexture).__webglTexture,j=B(y);if(y.depthTexture.format===Vs)X(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0);else if(y.depthTexture.format===no)X(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function ue(b){const y=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");re(y.__webglFramebuffer,b)}else if(D){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]=t.createRenderbuffer(),le(y.__webglDepthbuffer[k],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),le(y.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(b,y,D){const k=i.get(b);y!==void 0&&G(k.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&ue(b)}function W(b){const y=b.texture,D=i.get(b),k=i.get(y);b.addEventListener("dispose",L),b.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=y.version,o.memory.textures++);const j=b.isWebGLCubeRenderTarget===!0,K=b.isWebGLMultipleRenderTargets===!0,ae=m(b)||a;if(j){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let de=0;de<y.mipmaps.length;de++)D.__webglFramebuffer[se][de]=t.createFramebuffer()}else D.__webglFramebuffer[se]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)D.__webglFramebuffer[se]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(K)if(s.drawBuffers){const se=b.texture;for(let de=0,ve=se.length;de<ve;de++){const Ae=i.get(se[de]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&X(b)===!1){const se=K?y:[y];D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const ve=se[de];D.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const Ae=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),Ge=E(ve.internalFormat,Ae,oe,ve.colorSpace,b.isXRRenderTarget===!0),ke=B(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,D.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),le(D.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),te(t.TEXTURE_CUBE_MAP,y,ae);for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)G(D.__webglFramebuffer[se][de],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else G(D.__webglFramebuffer[se],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);x(y,ae)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(K){const se=b.texture;for(let de=0,ve=se.length;de<ve;de++){const Ae=se[de],oe=i.get(Ae);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),te(t.TEXTURE_2D,Ae,ae),G(D.__webglFramebuffer,b,Ae,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),x(Ae,ae)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,k.__webglTexture),te(se,y,ae),a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)G(D.__webglFramebuffer[de],b,y,t.COLOR_ATTACHMENT0,se,de);else G(D.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,se,0);x(y,ae)&&_(se),n.unbindTexture()}b.depthBuffer&&ue(b)}function R(b){const y=m(b)||a,D=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let k=0,j=D.length;k<j;k++){const K=D[k];if(x(K,y)){const ae=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(K).__webglTexture;n.bindTexture(ae,se),_(ae),n.unbindTexture()}}}function P(b){if(a&&b.samples>0&&X(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],D=b.width,k=b.height;let j=t.COLOR_BUFFER_BIT;const K=[],ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let ve=0;ve<y.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){K.push(t.COLOR_ATTACHMENT0+ve),b.depthBuffer&&K.push(ae);const Ae=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ae===!1&&(b.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[ve]),Ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ae])),de){const oe=i.get(y[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,D,k,0,0,D,k,j,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<y.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,se.__webglColorRenderbuffer[ve]);const Ae=i.get(y[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function B(b){return Math.min(s.maxSamples,b.samples)}function X(b){const y=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function J(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function ie(b,y){const D=b.colorSpace,k=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===lh||D!==Ci&&D!==In&&(lt.getTransfer(D)===dt?a===!1?e.has("EXT_sRGB")===!0&&k===Xn?(b.format=lh,b.minFilter=Pn,b.generateMipmaps=!1):y=Wv.sRGBToLinear(y):(k!==Xn||j!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}this.allocateTextureUnit=I,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=ne,this.rebindTextures=we,this.setupRenderTarget=W,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=G,this.useMultisampledRTT=X}function qP(t,e,n){const i=n.isWebGL2;function s(r,o=In){let a;const l=lt.getTransfer(o);if(r===ss)return t.UNSIGNED_BYTE;if(r===Uv)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Ov)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Aw)return t.BYTE;if(r===Cw)return t.SHORT;if(r===Sd)return t.UNSIGNED_SHORT;if(r===Nv)return t.INT;if(r===Ji)return t.UNSIGNED_INT;if(r===Qi)return t.FLOAT;if(r===ea)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Rw)return t.ALPHA;if(r===Xn)return t.RGBA;if(r===Pw)return t.LUMINANCE;if(r===Lw)return t.LUMINANCE_ALPHA;if(r===Vs)return t.DEPTH_COMPONENT;if(r===no)return t.DEPTH_STENCIL;if(r===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Iw)return t.RED;if(r===Fv)return t.RED_INTEGER;if(r===Dw)return t.RG;if(r===Bv)return t.RG_INTEGER;if(r===kv)return t.RGBA_INTEGER;if(r===Gu||r===Wu||r===Xu||r===qu)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hm||r===dm||r===pm||r===mm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gm||r===_m)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===gm)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_m)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vm||r===ym||r===xm||r===Sm||r===Mm||r===Em||r===bm||r===Tm||r===wm||r===Am||r===Cm||r===Rm||r===Pm||r===Lm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===vm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ym)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Em)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Am)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ju||r===Im||r===Dm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ju)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Im)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nw||r===Nm||r===Um||r===Om)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ju)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Nm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Um)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Om)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ks?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class jP extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Eo=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const $P={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($P)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Eo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class YP extends sr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=n.getContextAttributes();let m=null,p=null;const x=[],_=[],E=new Je;let w=null;const T=new xn;T.layers.enable(1),T.viewport=new mt;const C=new xn;C.layers.enable(2),C.viewport=new mt;const L=[T,C],S=new jP;S.layers.enable(1),S.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=x[te];return fe===void 0&&(fe=new yf,x[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=x[te];return fe===void 0&&(fe=new yf,x[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=x[te];return fe===void 0&&(fe=new yf,x[te]=fe),fe.getHandSpace()};function O(te){const fe=_.indexOf(te.inputSource);if(fe===-1)return;const ye=x[fe];ye!==void 0&&(ye.update(te.inputSource,te.frame,c||o),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",I);for(let te=0;te<x.length;te++){const fe=_[te];fe!==null&&(_[te]=null,x[te].disconnect(fe))}M=null,N=null,e.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",$),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new $s(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,ye=null,Ee=null;v.depth&&(Ee=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=v.stencil?no:Vs,ye=v.stencil?ks:Ji);const G={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(G),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new $s(h.textureWidth,h.textureHeight,{format:Xn,type:ss,depthTexture:new ty(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const le=e.properties.get(p);le.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(te){for(let fe=0;fe<te.removed.length;fe++){const ye=te.removed[fe],Ee=_.indexOf(ye);Ee>=0&&(_[Ee]=null,x[Ee].disconnect(ye))}for(let fe=0;fe<te.added.length;fe++){const ye=te.added[fe];let Ee=_.indexOf(ye);if(Ee===-1){for(let le=0;le<x.length;le++)if(le>=_.length){_.push(ye),Ee=le;break}else if(_[le]===null){_[le]=ye,Ee=le;break}if(Ee===-1)break}const G=x[Ee];G&&G.connect(ye)}}const H=new U,V=new U;function Y(te,fe,ye){H.setFromMatrixPosition(fe.matrixWorld),V.setFromMatrixPosition(ye.matrixWorld);const Ee=H.distanceTo(V),G=fe.projectionMatrix.elements,le=ye.projectionMatrix.elements,re=G[14]/(G[10]-1),ue=G[14]/(G[10]+1),we=(G[9]+1)/G[5],W=(G[9]-1)/G[5],R=(G[8]-1)/G[0],P=(le[8]+1)/le[0],B=re*R,X=re*P,J=Ee/(-R+P),ie=J*-R;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ie),te.translateZ(J),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const b=re+J,y=ue+J,D=B-ie,k=X+(Ee-ie),j=we*ue/y*b,K=W*ue/y*b;te.projectionMatrix.makePerspective(D,k,j,K,b,y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function z(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;S.near=C.near=T.near=te.near,S.far=C.far=T.far=te.far,(M!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,N=S.far);const fe=te.parent,ye=S.cameras;z(S,fe);for(let Ee=0;Ee<ye.length;Ee++)z(ye[Ee],fe);ye.length===2?Y(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),ne(te,S,fe)};function ne(te,fe,ye){ye===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ch*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)};let ce=null;function he(te,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Ee=!1;ye.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let G=0;G<ye.length;G++){const le=ye[G];let re=null;if(d!==null)re=d.getViewport(le);else{const we=f.getViewSubImage(h,le);re=we.viewport,G===0&&(e.setRenderTargetTextures(p,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let ue=L[G];ue===void 0&&(ue=new xn,ue.layers.enable(G),ue.viewport=new mt,L[G]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(re.x,re.y,re.width,re.height),G===0&&(S.matrix.copy(ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(ue)}}for(let ye=0;ye<x.length;ye++){const Ee=_[ye],G=x[ye];Ee!==null&&G!==void 0&&G.update(Ee,fe,c||o)}ce&&ce(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const me=new ey;me.setAnimationLoop(he),this.setAnimationLoop=function(te){ce=te},this.dispose=function(){}}}function KP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZP(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const E=_.program;i.uniformBlockBinding(x,E)}function c(x,_){let E=s[x.id];E===void 0&&(g(x),E=u(x),s[x.id]=E,x.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(x,w);const T=e.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function u(x){const _=f();x.__bindingPointIndex=_;const E=t.createBuffer(),w=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=s[x.id],E=x.uniforms,w=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=E.length;T<C;T++){const L=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,M=L.length;S<M;S++){const N=L[S];if(d(N,T,S,w)===!0){const O=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let H=0;H<$.length;H++){const V=$[H],Y=v(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,O+I,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(x,_,E,w){const T=x.value,C=_+"_"+E;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const L=w[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return w[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(x){const _=x.uniforms;let E=0;const w=16;for(let C=0,L=_.length;C<L;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,N=S.length;M<N;M++){const O=S[M],$=Array.isArray(O.value)?O.value:[O.value];for(let I=0,H=$.length;I<H;I++){const V=$[I],Y=v(V),z=E%w;z!==0&&w-z<Y.boundary&&(E+=w-z),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Y.storage}}}const T=E%w;return T>0&&(E+=w-T),x.__size=E,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ay{constructor(e={}){const{canvas:n=qw(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=is,this.toneMappingExposure=1;const _=this;let E=!1,w=0,T=0,C=null,L=-1,S=null;const M=new mt,N=new mt;let O=null;const $=new je(0);let I=0,H=n.width,V=n.height,Y=1,z=null,ne=null;const ce=new mt(0,0,H,V),he=new mt(0,0,H,V);let me=!1;const te=new Td;let fe=!1,ye=!1,Ee=null;const G=new Et,le=new Je,re=new U,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return C===null?Y:1}let W=i;function R(A,q){for(let Q=0;Q<A.length;Q++){const ee=A[Q],Z=n.getContext(ee,q);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xd}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",xe,!1),W===null){const q=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&q.shift(),W=R(q,A),W===null)throw R(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let P,B,X,J,ie,b,y,D,k,j,K,ae,se,de,ve,Ae,oe,Ge,ke,Oe,Pe,Ce,Ie,We;function ht(){P=new aR(W),B=new eR(W,P,e),P.init(B),Ce=new qP(W,P,B),X=new WP(W,P,B),J=new uR(W),ie=new PP,b=new XP(W,P,X,ie,B,Ce,J),y=new nR(_),D=new oR(_),k=new _A(W,B),Ie=new J2(W,P,k,B),j=new lR(W,k,J,Ie),K=new pR(W,j,k,J),ke=new dR(W,B,b),Ae=new tR(ie),ae=new RP(_,y,D,P,B,Ie,Ae),se=new KP(_,ie),de=new IP,ve=new BP(P,B),Ge=new Z2(_,y,D,X,K,h,l),oe=new GP(_,K,B),We=new ZP(W,J,B,X),Oe=new Q2(W,P,J,B),Pe=new cR(W,P,J,B),J.programs=ae.programs,_.capabilities=B,_.extensions=P,_.properties=ie,_.renderLists=de,_.shadowMap=oe,_.state=X,_.info=J}ht();const Ye=new YP(_,W);this.xr=Ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=P.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=P.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(H,V,!1))},this.getSize=function(A){return A.set(H,V)},this.setSize=function(A,q,Q=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,V=q,n.width=Math.floor(A*Y),n.height=Math.floor(q*Y),Q===!0&&(n.style.width=A+"px",n.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(H*Y,V*Y).floor()},this.setDrawingBufferSize=function(A,q,Q){H=A,V=q,Y=Q,n.width=Math.floor(A*Q),n.height=Math.floor(q*Q),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,q,Q,ee){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,q,Q,ee),X.viewport(M.copy(ce).multiplyScalar(Y).floor())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,q,Q,ee){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,q,Q,ee),X.scissor(N.copy(he).multiplyScalar(Y).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){X.setScissorTest(me=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(A=!0,q=!0,Q=!0){let ee=0;if(A){let Z=!1;if(C!==null){const Te=C.texture.format;Z=Te===kv||Te===Bv||Te===Fv}if(Z){const Te=C.texture.type,Le=Te===ss||Te===Ji||Te===Sd||Te===ks||Te===Uv||Te===Ov,Ne=Ge.getClearColor(),Be=Ge.getClearAlpha(),$e=Ne.r,Ve=Ne.g,ze=Ne.b;Le?(d[0]=$e,d[1]=Ve,d[2]=ze,d[3]=Be,W.clearBufferuiv(W.COLOR,0,d)):(g[0]=$e,g[1]=Ve,g[2]=ze,g[3]=Be,W.clearBufferiv(W.COLOR,0,g))}else ee|=W.COLOR_BUFFER_BIT}q&&(ee|=W.DEPTH_BUFFER_BIT),Q&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),de.dispose(),ve.dispose(),ie.dispose(),y.dispose(),D.dispose(),K.dispose(),Ie.dispose(),We.dispose(),ae.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Qt),Ye.removeEventListener("sessionend",ft),Ee&&(Ee.dispose(),Ee=null),en.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=J.autoReset,q=oe.enabled,Q=oe.autoUpdate,ee=oe.needsUpdate,Z=oe.type;ht(),J.autoReset=A,oe.enabled=q,oe.autoUpdate=Q,oe.needsUpdate=ee,oe.type=Z}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Se(A){const q=A.target;q.removeEventListener("dispose",Se),Fe(q)}function Fe(A){De(A),ie.remove(A)}function De(A){const q=ie.get(A).programs;q!==void 0&&(q.forEach(function(Q){ae.releaseProgram(Q)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,Q,ee,Z,Te){q===null&&(q=ue);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=_x(A,q,Q,ee,Z);X.setMaterial(ee,Le);let Be=Q.index,$e=1;if(ee.wireframe===!0){if(Be=j.getWireframeAttribute(Q),Be===void 0)return;$e=2}const Ve=Q.drawRange,ze=Q.attributes.position;let bt=Ve.start*$e,pn=(Ve.start+Ve.count)*$e;Te!==null&&(bt=Math.max(bt,Te.start*$e),pn=Math.min(pn,(Te.start+Te.count)*$e)),Be!==null?(bt=Math.max(bt,0),pn=Math.min(pn,Be.count)):ze!=null&&(bt=Math.max(bt,0),pn=Math.min(pn,ze.count));const Ut=pn-bt;if(Ut<0||Ut===1/0)return;Ie.setup(Z,ee,Ne,Q,Be);let ai,_t=Oe;if(Be!==null&&(ai=k.get(Be),_t=Pe,_t.setIndex(ai)),Z.isMesh)ee.wireframe===!0?(X.setLineWidth(ee.wireframeLinewidth*we()),_t.setMode(W.LINES)):_t.setMode(W.TRIANGLES);else if(Z.isLine){let Ke=ee.linewidth;Ke===void 0&&(Ke=1),X.setLineWidth(Ke*we()),Z.isLineSegments?_t.setMode(W.LINES):Z.isLineLoop?_t.setMode(W.LINE_LOOP):_t.setMode(W.LINE_STRIP)}else Z.isPoints?_t.setMode(W.POINTS):Z.isSprite&&_t.setMode(W.TRIANGLES);if(Z.isBatchedMesh)_t.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)_t.renderInstances(bt,Ut,Z.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Eu=Math.min(Q.instanceCount,Ke);_t.renderInstances(bt,Ut,Eu)}else _t.render(bt,Ut)};function ct(A,q,Q){A.transparent===!0&&A.side===Si&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,wa(A,q,Q),A.side=Ai,A.needsUpdate=!0,wa(A,q,Q),A.side=Si):wa(A,q,Q)}this.compile=function(A,q,Q=null){Q===null&&(Q=A),m=ve.get(Q),m.init(),x.push(m),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(_._useLegacyLights);const ee=new Set;return A.traverse(function(Z){const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Ne=Te[Le];ct(Ne,Q,Z),ee.add(Ne)}else ct(Te,Q,Z),ee.add(Te)}),x.pop(),m=null,ee},this.compileAsync=function(A,q,Q=null){const ee=this.compile(A,q,Q);return new Promise(Z=>{function Te(){if(ee.forEach(function(Le){ie.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){Z(A);return}setTimeout(Te,10)}P.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ut=null;function Nt(A){ut&&ut(A)}function Qt(){en.stop()}function ft(){en.start()}const en=new ey;en.setAnimationLoop(Nt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(A){ut=A,Ye.setAnimationLoop(A),A===null?en.stop():en.start()},Ye.addEventListener("sessionstart",Qt),Ye.addEventListener("sessionend",ft),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(q),q=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,q,C),m=ve.get(A,x.length),m.init(),x.push(m),G.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(G),ye=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,ye),v=de.get(A,p.length),v.init(),p.push(v),Kn(A,q,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(z,ne),this.info.render.frame++,fe===!0&&Ae.beginShadows();const Q=m.state.shadowsArray;if(oe.render(Q,A,q),fe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(v,A),m.setupLights(_._useLegacyLights),q.isArrayCamera){const ee=q.cameras;for(let Z=0,Te=ee.length;Z<Te;Z++){const Le=ee[Z];Ld(v,A,Le,Le.viewport)}}else Ld(v,A,q);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,q),Ie.resetDefaultState(),L=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Kn(A,q,Q,ee){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){ee&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);const Le=K.update(A),Ne=A.material;Ne.visible&&v.push(A,Le,Ne,Q,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Le=K.update(A),Ne=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),re.copy(Le.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(G)),Array.isArray(Ne)){const Be=Le.groups;for(let $e=0,Ve=Be.length;$e<Ve;$e++){const ze=Be[$e],bt=Ne[ze.materialIndex];bt&&bt.visible&&v.push(A,Le,bt,Q,re.z,ze)}}else Ne.visible&&v.push(A,Le,Ne,Q,re.z,null)}}const Te=A.children;for(let Le=0,Ne=Te.length;Le<Ne;Le++)Kn(Te[Le],q,Q,ee)}function Ld(A,q,Q,ee){const Z=A.opaque,Te=A.transmissive,Le=A.transparent;m.setupLightsView(Q),fe===!0&&Ae.setGlobalState(_.clippingPlanes,Q),Te.length>0&&gx(Z,Te,q,Q),ee&&X.viewport(M.copy(ee)),Z.length>0&&Ta(Z,q,Q),Te.length>0&&Ta(Te,q,Q),Le.length>0&&Ta(Le,q,Q),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function gx(A,q,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Te=B.isWebGL2;Ee===null&&(Ee=new $s(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?ea:ss,minFilter:Qo,samples:Te?4:0})),_.getDrawingBufferSize(le),Te?Ee.setSize(le.x,le.y):Ee.setSize(uh(le.x),uh(le.y));const Le=_.getRenderTarget();_.setRenderTarget(Ee),_.getClearColor($),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Ne=_.toneMapping;_.toneMapping=is,Ta(A,Q,ee),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee);let Be=!1;for(let $e=0,Ve=q.length;$e<Ve;$e++){const ze=q[$e],bt=ze.object,pn=ze.geometry,Ut=ze.material,ai=ze.group;if(Ut.side===Si&&bt.layers.test(ee.layers)){const _t=Ut.side;Ut.side=hn,Ut.needsUpdate=!0,Id(bt,Q,ee,pn,Ut,ai),Ut.side=_t,Ut.needsUpdate=!0,Be=!0}}Be===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee)),_.setRenderTarget(Le),_.setClearColor($,I),_.toneMapping=Ne}function Ta(A,q,Q){const ee=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Te=A.length;Z<Te;Z++){const Le=A[Z],Ne=Le.object,Be=Le.geometry,$e=ee===null?Le.material:ee,Ve=Le.group;Ne.layers.test(Q.layers)&&Id(Ne,q,Q,Be,$e,Ve)}}function Id(A,q,Q,ee,Z,Te){A.onBeforeRender(_,q,Q,ee,Z,Te),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(_,q,Q,ee,A,Te),Z.transparent===!0&&Z.side===Si&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,_.renderBufferDirect(Q,q,ee,Z,A,Te),Z.side=Ai,Z.needsUpdate=!0,_.renderBufferDirect(Q,q,ee,Z,A,Te),Z.side=Si):_.renderBufferDirect(Q,q,ee,Z,A,Te),A.onAfterRender(_,q,Q,ee,Z,Te)}function wa(A,q,Q){q.isScene!==!0&&(q=ue);const ee=ie.get(A),Z=m.state.lights,Te=m.state.shadowsArray,Le=Z.state.version,Ne=ae.getParameters(A,Z.state,Te,q,Q),Be=ae.getProgramCacheKey(Ne);let $e=ee.programs;ee.environment=A.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(A.isMeshStandardMaterial?D:y).get(A.envMap||ee.environment),$e===void 0&&(A.addEventListener("dispose",Se),$e=new Map,ee.programs=$e);let Ve=$e.get(Be);if(Ve!==void 0){if(ee.currentProgram===Ve&&ee.lightsStateVersion===Le)return Nd(A,Ne),Ve}else Ne.uniforms=ae.getUniforms(A),A.onBuild(Q,Ne,_),A.onBeforeCompile(Ne,_),Ve=ae.acquireProgram(Ne,Be),$e.set(Be,Ve),ee.uniforms=Ne.uniforms;const ze=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),Nd(A,Ne),ee.needsLights=yx(A),ee.lightsStateVersion=Le,ee.needsLights&&(ze.ambientLightColor.value=Z.state.ambient,ze.lightProbe.value=Z.state.probe,ze.directionalLights.value=Z.state.directional,ze.directionalLightShadows.value=Z.state.directionalShadow,ze.spotLights.value=Z.state.spot,ze.spotLightShadows.value=Z.state.spotShadow,ze.rectAreaLights.value=Z.state.rectArea,ze.ltc_1.value=Z.state.rectAreaLTC1,ze.ltc_2.value=Z.state.rectAreaLTC2,ze.pointLights.value=Z.state.point,ze.pointLightShadows.value=Z.state.pointShadow,ze.hemisphereLights.value=Z.state.hemi,ze.directionalShadowMap.value=Z.state.directionalShadowMap,ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ze.spotShadowMap.value=Z.state.spotShadowMap,ze.spotLightMatrix.value=Z.state.spotLightMatrix,ze.spotLightMap.value=Z.state.spotLightMap,ze.pointShadowMap.value=Z.state.pointShadowMap,ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Ve,ee.uniformsList=null,Ve}function Dd(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Sl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Nd(A,q){const Q=ie.get(A);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function _x(A,q,Q,ee,Z){q.isScene!==!0&&(q=ue),b.resetTextureUnits();const Te=q.fog,Le=ee.isMeshStandardMaterial?q.environment:null,Ne=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ci,Be=(ee.isMeshStandardMaterial?D:y).get(ee.envMap||Le),$e=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ve=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ze=!!Q.morphAttributes.position,bt=!!Q.morphAttributes.normal,pn=!!Q.morphAttributes.color;let Ut=is;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=_.toneMapping);const ai=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=ai!==void 0?ai.length:0,Ke=ie.get(ee),Eu=m.state.lights;if(fe===!0&&(ye===!0||A!==S)){const wn=A===S&&ee.id===L;Ae.setState(ee,A,wn)}let vt=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Eu.state.version||Ke.outputColorSpace!==Ne||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Ke.envMap!==Be||ee.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ae.numPlanes||Ke.numIntersection!==Ae.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==Ve||Ke.morphTargets!==ze||Ke.morphNormals!==bt||Ke.morphColors!==pn||Ke.toneMapping!==Ut||B.isWebGL2===!0&&Ke.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Ke.__version=ee.version);let ls=Ke.currentProgram;vt===!0&&(ls=wa(ee,q,Z));let Ud=!1,co=!1,bu=!1;const Gt=ls.getUniforms(),cs=Ke.uniforms;if(X.useProgram(ls.program)&&(Ud=!0,co=!0,bu=!0),ee.id!==L&&(L=ee.id,co=!0),Ud||S!==A){Gt.setValue(W,"projectionMatrix",A.projectionMatrix),Gt.setValue(W,"viewMatrix",A.matrixWorldInverse);const wn=Gt.map.cameraPosition;wn!==void 0&&wn.setValue(W,re.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&Gt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Gt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,co=!0,bu=!0)}if(Z.isSkinnedMesh){Gt.setOptional(W,Z,"bindMatrix"),Gt.setOptional(W,Z,"bindMatrixInverse");const wn=Z.skeleton;wn&&(B.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Gt.setValue(W,"boneTexture",wn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Gt.setOptional(W,Z,"batchingTexture"),Gt.setValue(W,"batchingTexture",Z._matricesTexture,b));const Tu=Q.morphAttributes;if((Tu.position!==void 0||Tu.normal!==void 0||Tu.color!==void 0&&B.isWebGL2===!0)&&ke.update(Z,Q,ls),(co||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Gt.setValue(W,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(cs.envMap.value=Be,cs.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),co&&(Gt.setValue(W,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&vx(cs,bu),Te&&ee.fog===!0&&se.refreshFogUniforms(cs,Te),se.refreshMaterialUniforms(cs,ee,Y,V,Ee),Sl.upload(W,Dd(Ke),cs,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Sl.upload(W,Dd(Ke),cs,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Gt.setValue(W,"center",Z.center),Gt.setValue(W,"modelViewMatrix",Z.modelViewMatrix),Gt.setValue(W,"normalMatrix",Z.normalMatrix),Gt.setValue(W,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const wn=ee.uniformsGroups;for(let wu=0,xx=wn.length;wu<xx;wu++)if(B.isWebGL2){const Od=wn[wu];We.update(Od,ls),We.bind(Od,ls)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ls}function vx(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function yx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,q,Q){ie.get(A.texture).__webglTexture=q,ie.get(A.depthTexture).__webglTexture=Q;const ee=ie.get(A);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,q){const Q=ie.get(A);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,Q=0){C=A,w=q,T=Q;let ee=!0,Z=null,Te=!1,Le=!1;if(A){const Be=ie.get(A);Be.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(W.FRAMEBUFFER,null),ee=!1):Be.__webglFramebuffer===void 0?b.setupRenderTarget(A):Be.__hasExternalTextures&&b.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const Ve=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[q])?Z=Ve[q][Q]:Z=Ve[q],Te=!0):B.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?Z=ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?Z=Ve[Q]:Z=Ve,M.copy(A.viewport),N.copy(A.scissor),O=A.scissorTest}else M.copy(ce).multiplyScalar(Y).floor(),N.copy(he).multiplyScalar(Y).floor(),O=me;if(X.bindFramebuffer(W.FRAMEBUFFER,Z)&&B.drawBuffers&&ee&&X.drawBuffers(A,Z),X.viewport(M),X.scissor(N),X.setScissorTest(O),Te){const Be=ie.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,Q)}else if(Le){const Be=ie.get(A.texture),$e=q||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,$e)}L=-1},this.readRenderTargetPixels=function(A,q,Q,ee,Z,Te,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){X.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const Be=A.texture,$e=Be.format,Ve=Be.type;if($e!==Xn&&Ce.convert($e)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ve===ea&&(P.has("EXT_color_buffer_half_float")||B.isWebGL2&&P.has("EXT_color_buffer_float"));if(Ve!==ss&&Ce.convert(Ve)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Qi&&(B.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ee&&Q>=0&&Q<=A.height-Z&&W.readPixels(q,Q,ee,Z,Ce.convert($e),Ce.convert(Ve),Te)}finally{const Be=C!==null?ie.get(C).__webglFramebuffer:null;X.bindFramebuffer(W.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(A,q,Q=0){const ee=Math.pow(2,-Q),Z=Math.floor(q.image.width*ee),Te=Math.floor(q.image.height*ee);b.setTexture2D(q,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,A.x,A.y,Z,Te),X.unbindTexture()},this.copyTextureToTexture=function(A,q,Q,ee=0){const Z=q.image.width,Te=q.image.height,Le=Ce.convert(Q.format),Ne=Ce.convert(Q.type);b.setTexture2D(Q,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Q.unpackAlignment),q.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ee,A.x,A.y,Z,Te,Le,Ne,q.image.data):q.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ee,A.x,A.y,q.mipmaps[0].width,q.mipmaps[0].height,Le,q.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ee,A.x,A.y,Le,Ne,q.image),ee===0&&Q.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(A,q,Q,ee,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=A.max.x-A.min.x+1,Le=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Be=Ce.convert(ee.format),$e=Ce.convert(ee.type);let Ve;if(ee.isData3DTexture)b.setTexture3D(ee,0),Ve=W.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)b.setTexture2DArray(ee,0),Ve=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ee.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ee.unpackAlignment);const ze=W.getParameter(W.UNPACK_ROW_LENGTH),bt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),pn=W.getParameter(W.UNPACK_SKIP_PIXELS),Ut=W.getParameter(W.UNPACK_SKIP_ROWS),ai=W.getParameter(W.UNPACK_SKIP_IMAGES),_t=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,_t.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,A.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,A.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?W.texSubImage3D(Ve,Z,q.x,q.y,q.z,Te,Le,Ne,Be,$e,_t.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ve,Z,q.x,q.y,q.z,Te,Le,Ne,Be,_t.data)):W.texSubImage3D(Ve,Z,q.x,q.y,q.z,Te,Le,Ne,Be,$e,_t),W.pixelStorei(W.UNPACK_ROW_LENGTH,ze),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,bt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,pn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ut),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ai),Z===0&&ee.generateMipmaps&&W.generateMipmap(Ve),X.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),X.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,X.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===_u?"display-p3":"srgb",n.unpackColorSpace=lt.workingColorSpace===vu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?Hs:Hv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?pt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JP extends ay{}JP.prototype.isWebGL1Renderer=!0;class QP extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ml extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tg=new U,wg=new U,Ag=new Et,xf=new Ed,ul=new Ea;class eL extends Jt{constructor(e=new Fn,n=new Ml){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Tg.fromBufferAttribute(n,s-1),wg.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Tg.distanceTo(wg);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Ag.copy(s).invert(),xf.copy(e.ray).applyMatrix4(Ag);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,f=new U,h=new U,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=p,E=x-1;_<E;_+=d){const w=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,T),xf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,E=x-1;_<E;_+=d){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),xf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Cg=new U,Rg=new U;class Pg extends eL{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Cg.fromBufferAttribute(n,s),Rg.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cg.distanceTo(Rg);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pr extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lg=new Et,hh=new Ed,fl=new Ea,hl=new U;class Oo extends Jt{constructor(e=new Fn,n=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;Lg.copy(s).invert(),hh.copy(e.ray).applyMatrix4(Lg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);hl.fromBufferAttribute(f,m),Ig(hl,m,l,s,e,n,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)hl.fromBufferAttribute(f,g),Ig(hl,g,l,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ig(t,e,n,i,s,r,o){const a=hh.distanceSqToPoint(t);if(a<n){const l=new U;hh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Bt extends rn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Su extends ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ks extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Yl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class tL{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ly=new tL;class lo{constructor(e){this.manager=e!==void 0?e:ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class nL extends Error{constructor(e,n){super(e),this.response=n}}class cy extends lo{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:n,onProgress:i,onError:s});return}mi[e]=[],mi[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){f.read().then(({done:_,value:E})=>{if(_)p.close();else{v+=E.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let T=0,C=u.length;T<C;T++){const L=u[T];L.onProgress&&L.onProgress(w)}p.enqueue(E),x()}})}}});return new Response(m)}else throw new nL(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Yl.add(e,c);const u=mi[e];delete mi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uy extends lo{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Yl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;const a=ta("img");function l(){u(),Yl.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class iL extends lo{constructor(e){super(e)}load(e,n,i,s){const r=new rn,o=new uy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class fy extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Sf=new Et,Dg=new U,Ng=new U;class sL{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Td,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Dg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dg),Ng.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ng),n.updateMatrixWorld(),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ug=new Et,yo=new U,Mf=new U;class rL extends sL{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),Mf.copy(i.position),Mf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Mf),i.updateMatrixWorld(),s.makeTranslation(-yo.x,-yo.y,-yo.z),Ug.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ug)}}class Cd extends fy{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oL extends fy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class aL{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,s=e.length;i<s;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);class Og extends lo{constructor(e){super(e)}load(e,n,i,s){const r=this,o=this.path===""?aL.extractUrlBase(e):this.path,a=new cy(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{n(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,n){const i=e.split(`
`);let s={};const r=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let f=u>=0?c.substring(0,u):c;f=f.toLowerCase();let h=u>=0?c.substring(u+1):"";if(h=h.trim(),f==="newmtl")s={name:h},o[h]=s;else if(f==="ka"||f==="kd"||f==="ks"||f==="ke"){const d=h.split(r,3);s[f]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else s[f]=h}const a=new lL(this.resourcePath||n,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class lL{constructor(e="",n={}){this.baseUrl=e,this.options=n,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Ai,this.wrap=this.options.wrap!==void 0?this.options.wrap:wt}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const n={};for(const i in e){const s=e[i],r={};n[i]=r;for(const o in s){let a=!0,l=s[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(r[c]=l)}}return n}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const n in this.materialsInfo)this.materialsArray[e]=this.create(n),this.nameLookup[n]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const n=this,i=this.materialsInfo[e],s={name:e,side:this.side};function r(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(s[a])return;const c=n.getTextureParams(l,s),u=n.loadTexture(r(n.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=n.wrap,u.wrapT=n.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=pt),s[a]=u}for(const a in i){const l=i[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":s.color=new je().fromArray(l).convertSRGBToLinear();break;case"ks":s.specular=new je().fromArray(l).convertSRGBToLinear();break;case"ke":s.emissive=new je().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break}}return this.materials[e]=new Su(s),this.materials[e]}getTextureParams(e,n){const i={scale:new Je(1,1),offset:new Je(0,0)},s=e.split(/\s+/);let r;return r=s.indexOf("-bm"),r>=0&&(n.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),i.url=s.join(" ").trim(),i}loadTexture(e,n,i,s,r){const o=this.manager!==void 0?this.manager:ly;let a=o.getHandler(e);a===null&&(a=new iL(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,i,s,r);return n!==void 0&&(l.mapping=n),l}}const cL=/^[og]\s*(.+)?/,uL=/^mtllib /,fL=/^usemtl /,hL=/^usemap /,Fg=/\s+/,Bg=new U,Ef=new U,kg=new U,Vg=new U,Rn=new U,dl=new je;function dL(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(e,n){const i=parseInt(e,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(e,n,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,n,i){const s=this.vertices,r=this.object.geometry.normals;Bg.fromArray(s,e),Ef.fromArray(s,n),kg.fromArray(s,i),Rn.subVectors(kg,Ef),Vg.subVectors(Bg,Ef),Rn.cross(Vg),Rn.normalize(),r.push(Rn.x,Rn.y,Rn.z),r.push(Rn.x,Rn.y,Rn.z),r.push(Rn.x,Rn.y,Rn.z)},addColor:function(e,n,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,n,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,i,s,r,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(n,u),d=this.parseVertexIndex(i,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),h=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(s!==void 0&&s!==""){const g=this.uvs.length;f=this.parseUVIndex(s,g),h=this.parseUVIndex(r,g),d=this.parseUVIndex(o,g),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],n);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=n.length;r<o;r++)this.addUVLine(this.parseUVIndex(n[r],s))}};return t.startObject("",!1),t}class pL extends lo{constructor(e){super(e),this.materials=null}load(e,n,i,s){const r=this,o=new cy(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const n=new dL;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(Fg);switch(f[0]){case"v":n.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(dl.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),n.colors.push(dl.r,dl.g,dl.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":n.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(Fg),d=[];for(let v=0,m=h.length;v<m;v++){const p=h[v];if(p.length>0){const x=p.split("/");d.push(x)}}const g=d[0];for(let v=1,m=d.length-1;v<m;v++){const p=d[v],x=d[v+1];n.addFace(g[0],p[0],x[0],g[1],p[1],x[1],g[2],p[2],x[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let h=[];const d=[];if(c.indexOf("/")===-1)h=f;else for(let g=0,v=f.length;g<v;g++){const m=f[g].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&d.push(m[1])}n.addLineGeometry(h,d)}else if(u==="p"){const h=c.slice(1).trim().split(" ");n.addPointGeometry(h)}else if((s=cL.exec(c))!==null){const f=(" "+s[0].slice(1).trim()).slice(1);n.startObject(f)}else if(fL.test(c))n.object.startMaterial(c.substring(7).trim(),n.materialLibraries);else if(uL.test(c))n.materialLibraries.push(c.substring(7).trim());else if(hL.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();n.object.smooth=h!=="0"&&h!=="off"}else n.object.smooth=!0;const f=n.object.currentMaterial();f&&(f.smooth=n.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}n.finalize();const r=new Eo;if(r.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=n.objects.length;a<l;a++){const c=n.objects[a],u=c.geometry,f=c.materials,h=u.type==="Line",d=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const v=new Fn;v.setAttribute("position",new $t(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new $t(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new $t(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new $t(u.uvs,2));const m=[];for(let x=0,_=f.length;x<_;x++){const E=f[x],w=E.name+"_"+E.smooth+"_"+g;let T=n.materials[w];if(this.materials!==null){if(T=this.materials.create(E.name),h&&T&&!(T instanceof Ml)){const C=new Ml;ri.prototype.copy.call(C,T),C.color.copy(T.color),T=C}else if(d&&T&&!(T instanceof Pr)){const C=new Pr({size:10,sizeAttenuation:!1});ri.prototype.copy.call(C,T),C.color.copy(T.color),C.map=T.map,T=C}}T===void 0&&(h?T=new Ml:d?T=new Pr({size:1,sizeAttenuation:!1}):T=new Su,T.name=E.name,T.flatShading=!E.smooth,T.vertexColors=g,n.materials[w]=T),m.push(T)}let p;if(m.length>1){for(let x=0,_=f.length;x<_;x++){const E=f[x];v.addGroup(E.groupStart,E.groupCount,x)}h?p=new Pg(v,m):d?p=new Oo(v,m):p=new Un(v,m)}else h?p=new Pg(v,m[0]):d?p=new Oo(v,m[0]):p=new Un(v,m[0]);p.name=c.name,r.add(p)}else if(n.vertices.length>0){const a=new Pr({size:1,sizeAttenuation:!1}),l=new Fn;l.setAttribute("position",new $t(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(l.setAttribute("color",new $t(n.colors,3)),a.vertexColors=!0);const c=new Oo(l,a);r.add(c)}return r}}const mL="modulepreload",gL=function(t){return"/"+t},Hg={},Mr=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=gL(o),o in Hg)return;Hg[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":mL,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};class _L{constructor(){Me(this,"list");Me(this,"objLoader");this.list={},this.objLoader=new pL}load(e,n,i){if(!e)throw new Error("Please provide a key for the img you are loading");if(!n)throw new Error("Please provide a path for the img you are loading");const s=n.split("/"),r=s.pop()||"";return n=s.join("/"),n+="/",new Promise((o,a)=>{this.objLoader.setPath(n),i&&this.objLoader.setMaterials(i),this.objLoader.load(r,l=>{this.list[e]=l,l.key=e,l.destroy=()=>{delete this.list[l.key]},o(l)},l=>{console.log(l.loaded/l.total*100+"% loaded")},l=>{console.error("An error happened",l),a(l)})})}get(e){if(!this.list[e]){console.warn(`Img with the key of ${e} not found in cache`);return}return this.list[e]}}class vL{constructor(){Me(this,"list");Me(this,"imgLoader");this.list={},this.imgLoader=new uy}load(e,n){if(!e)throw new Error("Please provide a key for the img you are loading");if(!n)throw new Error("Please provide a path for the img you are loading");const i=n.split("/"),s=i.pop()||"";return n=i.join("/"),n+="/",new Promise((r,o)=>{this.imgLoader.setPath(n).setCrossOrigin("*").load(s,a=>{this.list[e]=a,a.key=e,a.destroy=()=>{delete this.list[a.key]},r(a)},a=>{console.log(a.loaded/a.total*100+"% loaded")},a=>{console.error("An error happened",a),o(a)})})}get(e){if(!this.list[e]){console.warn(`Img with the key of ${e} not found in cache`);return}return this.list[e]}}const Zs={UPDATE:{type:"update"},CREATE:{type:"create"}};class ba{constructor(){Me(this,"body");this._opacity=1}set opacity(e){var n;this._opacity=e,(n=this.body)!=null&&n.children[0]&&this.body.children[0].material&&[this.body.children[0].material].flat().forEach(i=>{i.opacity=e})}get opacity(){return this._opacity}}const Rd=()=>{let t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t};var Kl,hy,Zl,dy,Jl,py,ia,dh;class yL extends ba{constructor(n,i){super();Re(this,Kl);Re(this,Zl);Re(this,Jl);Re(this,ia);Me(this,"three");Me(this,"key");Me(this,"pointLight");this.three=n,this.key="sigilObj",pe(this,Kl,hy).call(this),pe(this,ia,dh).call(this)}set visible(n){this.body.visible=n,this.pointLight.visible=n}get visible(){return this.body.visible}}Kl=new WeakSet,hy=function(){pe(this,Zl,dy).call(this),pe(this,Jl,py).call(this),pe(this,ia,dh).call(this)},Zl=new WeakSet,dy=function(){const n=this.three.imgManager.get("grain"),i=this.three.imgManager.get("grain_n"),s=this.three.imgManager.get("grain_s"),r=new Bt(n),o=new Bt(i),a=new Bt(s),l=this.three.renderer.capabilities.getMaxAnisotropy();r.wrapS=wt,r.wrapT=wt,r.anisotropy=1,o.colorSpace=pt,o.wrapS=wt,o.wrapT=wt,o.anisotropy=l,a.wrapS=wt,a.wrapT=wt;const c=1,u=1,f=.5;r.repeat.set(c*f,u*f),o.repeat.set(c*f,u*f),a.repeat.set(c*f,u*f);const h=new Ks({color:16777215,map:r,normalMap:o,specularMap:a,transparent:!0});this.body=this.three.objManager.get(this.key),this.body.traverse(d=>{d instanceof Un&&(d.material=h)}),this.three.scene.add(this.body)},Jl=new WeakSet,py=function(){this.pointLight=new Cd(268435455,10),this.three.scene.add(this.pointLight),this.pointLight.position.set(0,.5,2)},ia=new WeakSet,dh=function(){this.three.emitter.addEventListener(Zs.UPDATE.type,()=>{this.opacity!=0&&(Rd()||(this.pointLight.position.x=this.three.mouse.x,this.pointLight.position.y=this.three.mouse.y))})};var zi=(t=>(t[t.MAC_OS=1]="MAC_OS",t[t.IOS=2]="IOS",t[t.WINDOWS=3]="WINDOWS",t[t.ANDROID=4]="ANDROID",t[t.LINUX=5]="LINUX",t))(zi||{});function xL(){const t=window.navigator.userAgent,e=window.navigator.platform,n=["Macintosh","MacIntel","MacPPC","Mac68K"],i=["Win32","Win64","Windows","WinCE"],s=["iPhone","iPad","iPod"];let r=zi.WINDOWS;return!e&&!t?(console.error("Platform and userAgent not detected, setting platform to windows"),zi.WINDOWS):(n.indexOf(e)!==-1?r=zi.MAC_OS:s.indexOf(e)!==-1?r=zi.IOS:i.indexOf(e)!==-1?r=zi.WINDOWS:/Android/.test(t)?r=zi.ANDROID:!r&&/Linux/.test(e)&&(r=zi.LINUX),r)}class na extends Cd{constructor(n){var i,s,r;super(n.color,n.intensity,n.distance,n.decay);Me(this,"ticks");Me(this,"initialTicks");Me(this,"polarity");this.position.set(((i=n.position)==null?void 0:i.x)||0,((s=n.position)==null?void 0:s.y)||0,((r=n.position)==null?void 0:r.z)||0),this.ticks=5,this.initialTicks=5,this.polarity=n.polarity||1,this.castShadow=!0}resetTicks(){this.ticks=this.initialTicks}}var Gr=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Gr.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Gr.Bounce.In(t*2)*.5:Gr.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),Lr=function(){return performance.now()},my=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=Lr()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!n;r&&r.update(e,o)===!1&&!n&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),As={Linear:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),r=As.Utils.Linear;return e<0?r(t[0],t[1],i):e>1?r(t[n],t[n-1],n-i):r(t[s],t[s+1>n?n:s+1],i-s)},Bezier:function(t,e){for(var n=0,i=t.length-1,s=Math.pow,r=As.Utils.Bernstein,o=0;o<=i;o++)n+=s(1-e,i-o)*s(e,o)*t[o]*r(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),r=As.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(i=n*(1+e))),r(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],i-s)):e<0?t[0]-(r(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(r(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):r(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],i-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=As.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,s){var r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}}},Pd=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),ph=new my,SL=function(){function t(e,n){n===void 0&&(n=ph),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Gr.Linear.None,this._interpolationFunction=As.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Pd.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n<0?0:n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=Lr()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,s,r){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var f=i[o];if(f.length===0)continue;for(var h=[a],d=0,g=f.length;d<g;d+=1){var v=this._handleRelativeValue(a,f[d]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(v)}u&&(i[o]=h)}if((c==="object"||l)&&a&&!u){n[o]=l?[]:{};var m=a;for(var p in m)n[o][p]=m[p];s[o]=l?[]:{};var f=i[o];if(!this._isDynamic){var x={};for(var p in f)x[p]=f[p];i[o]=f=x}this._setupProperties(m,n[o],f,s[o],r)}else(typeof n[o]>"u"||r)&&(n[o]=a),l||(n[o]*=1),u?s[o]=i[o].slice().reverse():s[o]=n[o]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=Lr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=Lr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=ph),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Gr.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=As.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){var i=this,s;if(e===void 0&&(e=Lr()),n===void 0&&(n=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(i._duration===0||a>c)return 1;var m=Math.trunc(a/l),p=a-m*l,x=Math.min(p/i._duration,1);return x===0&&a===i._duration?1:x},f=u(),h=this._easingFunction(f);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,f),this._duration===0||a>=this._duration)if(this._repeat>0){var d=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=d);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*d,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,v=this._chainedTweens.length;g<v;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,s){for(var r in i)if(n[r]!==void 0){var o=n[r]||0,a=i[r],l=Array.isArray(e[r]),c=Array.isArray(a),u=!l&&c;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),ML="23.1.1",EL=Pd.nextId,oi=ph,bL=oi.getAll.bind(oi),TL=oi.removeAll.bind(oi),wL=oi.add.bind(oi),AL=oi.remove.bind(oi),CL=oi.update.bind(oi),Mi={Easing:Gr,Group:my,Interpolation:As,now:Lr,Sequence:Pd,nextId:EL,Tween:SL,VERSION:ML,getAll:bL,removeAll:TL,add:wL,remove:AL,update:CL},Ql,gy,Cs,bo,sa,mh,yi,ys,ec,_y,tc,vy,nc,yy,ic,xy,Rs,To,sc,Sy,rc,My,oc,Ey,ac,by;class RL extends ba{constructor(n){super();Re(this,Ql);Re(this,Cs);Re(this,sa);Re(this,yi);Re(this,ec);Re(this,tc);Re(this,nc);Re(this,ic);Re(this,Rs);Re(this,sc);Re(this,rc);Re(this,oc);Re(this,ac);Me(this,"three");Me(this,"key");Me(this,"lightsArray");Me(this,"concertLight1");Me(this,"concertLight2");Me(this,"concertLight3");Me(this,"concertLight4");Me(this,"strobeLight1");Me(this,"strobeLight2");Me(this,"cameraPosition");Me(this,"cameraPositions");this.three=n,this.key="concertStage",this.lightsArray=[],this.initialPositionTriggered=!0,this.midPositionTriggered=!1,this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,Ql,gy).call(this)}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}set visible(n){this.body.visible=n,this.lightsArray.forEach(i=>i.visible=n)}get visible(){return this.body.visible}setVerticalPosition(n=0){this.body.position.y=n,this.lightsArray.forEach(i=>{i.initialY==null&&(i.initialY=i.position.y),i.position.y=i.initialY+n})}}Ql=new WeakSet,gy=function(){pe(this,nc,yy).call(this),pe(this,ec,_y).call(this),pe(this,ic,xy).call(this)},Cs=new WeakSet,bo=function(n,i=.005){n.position.x+=i*n.polarity,n.position.x>1.5?(n.polarity*=-1,n.position.x=1.49):n.position.x<-1.5&&(n.polarity*=-1,n.position.x=-1.49)},sa=new WeakSet,mh=function(n,i=30){this.body.visible&&(this.three.totalFrames%i==0?(n.visible=!0,n.resetTicks()):n.ticks<=0?(n.visible=!1,n.ticks=-1):n.ticks--)},yi=new WeakSet,ys=function(n=16777215,i=1,s=1){const r=new na({color:n,intensity:i,polarity:s});return this.lightsArray.push(r),this.three.scene.add(r),r},ec=new WeakSet,_y=function(){this.concertLight1=pe(this,yi,ys).call(this,16711680,3,1),this.concertLight2=pe(this,yi,ys).call(this,255,7,1),this.concertLight3=pe(this,yi,ys).call(this,16711680,3,-1),this.concertLight4=pe(this,yi,ys).call(this,255,7,-1),this.strobeLight1=pe(this,yi,ys).call(this,16777215,10,-1),this.strobeLight2=pe(this,yi,ys).call(this,16777215,10,-1),this.concertLight1.position.set(-1.5,-.6,1),this.concertLight2.position.set(-.75,-.6,0),this.concertLight3.position.set(.75,-.6,0),this.concertLight4.position.set(1.5,-.6,1),this.strobeLight1.position.set(-.5,-.4,.5),this.strobeLight2.position.set(.5,-.4,.5)},tc=new WeakSet,vy=function(){const n=this.three.imgManager.get("hardwood"),i=this.three.imgManager.get("hardwood_n"),s=new Bt(n),r=new Bt(i),o=this.three.renderer.capabilities.getMaxAnisotropy();s.colorSpace=pt,s.wrapS=wt,s.wrapT=wt,s.anisotropy=1,r.colorSpace=pt,r.wrapS=wt,r.wrapT=wt,r.anisotropy=o;const a=1,l=1,c=4;s.repeat.set(a*c,l*c),r.repeat.set(a*c,l*c);const u=new Su({color:14342874,transparent:!0,shininess:100}),f=new Ks({color:16777215,map:s,reflectivity:1e4,transparent:!0}),h=new Ks({color:16777215,transparent:!0});this.body.children[0].material[0]=u,this.body.children[0].material[1]=f;for(let d=2;d<this.body.children[0].material.length;d++)this.body.children[0].material[d]=h;this.body.children[0].material[1].color.r=.65,this.body.children[0].material[1].color.g=.4,this.body.children[0].material[1].color.b=.2},nc=new WeakSet,yy=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.2,.2,.2),pe(this,tc,vy).call(this),this.body.children[0].material[2].color.r=.1,this.body.children[0].material[2].color.g=.1,this.body.children[0].material[2].color.b=.1,this.body.children[0].material[5].color.r=.05,this.body.children[0].material[5].color.g=.05,this.body.children[0].material[5].color.b=.05,this.three.scene.add(this.body)},ic=new WeakSet,xy=function(){this.three.emitter.addEventListener(Zs.UPDATE.type,()=>{if(this.opacity==0)return;console.log("updating stage"),pe(this,Cs,bo).call(this,this.concertLight1),pe(this,Cs,bo).call(this,this.concertLight2),pe(this,Cs,bo).call(this,this.concertLight3),pe(this,Cs,bo).call(this,this.concertLight4),pe(this,sa,mh).call(this,this.strobeLight1,50),pe(this,sa,mh).call(this,this.strobeLight2,40);const n=window.scrollY*window.devicePixelRatio;n<=10&&pe(this,sc,Sy).call(this),n>10&&n<1500&&pe(this,rc,My).call(this),n>1500&&n<3e3&&pe(this,oc,Ey).call(this),n>3e3&&n<4500&&pe(this,ac,by).call(this)})},Rs=new WeakSet,To=function(n){var i;this.opacity<1||((i=this.moveTween)==null||i.stop(),this.moveTween=this.three.addTween({elements:this.three.camera,easing:Mi.Easing.Quadratic.InOut,duration:2e3,position:n.position,rotation:n.rotation}))},sc=new WeakSet,Sy=function(){this.isTriggered("initialPosition")||(this.triggerPosition("initialPosition"),pe(this,Rs,To).call(this,{position:new U(0,0,this.three.initialCameraZ),rotation:new U(0,0,0)}))},rc=new WeakSet,My=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),pe(this,Rs,To).call(this,{position:new U(0,3,2),rotation:new U(-1,0,0)}))},oc=new WeakSet,Ey=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),pe(this,Rs,To).call(this,{position:new U(-1,0,2),rotation:new U(0,-1,0)}))},ac=new WeakSet,by=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),pe(this,Rs,To).call(this,{position:new U(2,0,0),rotation:new U(0,1.5,0)}))};class PL{constructor(){Me(this,"list");Me(this,"mtlLoader");this.list={},this.mtlLoader=new Og}load(e,n){if(!e)throw new Error("Please provide a key for the mtl you are loading");if(!n)throw new Error("Please provide a path for the mtl you are loading");const i=n.split("/"),s=i.pop()||"";return n=i.join("/"),n+="/",new Promise((r,o)=>{new Og().setPath(n).load(s,a=>{this.list[e]=a,a.key=e,a.destroy=()=>{delete this.list[a.key]},r(a)},a=>{console.log(a.loaded/a.total*100+"% loaded")},a=>{console.error("An error happened",a),o(a)})})}get(e){if(!this.list[e]){console.warn(`material .mtl with the key of ${e} not found in cache`);return}return this.list[e]}}var lc,Ty,cc,wy,ra,gh,uc,Ay,Ps,wo,fc,Cy,hc,Ry,dc,Py,pc,Ly;class LL extends ba{constructor(n){super();Re(this,lc);Re(this,cc);Re(this,ra);Re(this,uc);Re(this,Ps);Re(this,fc);Re(this,hc);Re(this,dc);Re(this,pc);Me(this,"three");Me(this,"key");Me(this,"cameraPosition");Me(this,"cameraPositions");Me(this,"light1");Me(this,"light2");this.three=n,this.key="shoppingCart",this.lightsArray=[],this.initialPositionTriggered=!0,this.midPositionTriggered=!1,this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,lc,Ty).call(this)}set visible(n){this.body.visible=n,this.light1&&(this.light1.visible=n),this.light2&&(this.light2.visible=n)}get visible(){return this.body.visible}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}setVerticalPosition(n=0){this.body.position.y=n,this.lightsArray.forEach(i=>{i.initialY==null&&(i.initialY=i.position.y),i.position.y=i.initialY+n})}}lc=new WeakSet,Ty=function(){pe(this,cc,wy).call(this),pe(this,uc,Ay).call(this)},cc=new WeakSet,wy=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.02,.02,.02),this.body.position.set(0,0,0);const n=new Ks({color:4456448,transparent:!0}),i=new Su({color:8026746,transparent:!0,reflectivity:100});console.log(this.body),this.body.children[0].material[1]=n,this.body.children[0].material[0]=i,this.three.scene.add(this.body),this.light1=new na({color:16755200,intensity:3,position:new U(-1,.5,2)}),this.light2=new na({color:16777215,intensity:5,position:new U(1,-1,2)}),this.three.scene.add(this.light1),this.three.scene.add(this.light2)},ra=new WeakSet,gh=function(n,i=1,s=100){n.initialIntensity==null&&(n.initialIntensity=n.intensity);const r=this.three.totalFrames/s,o=(Math.sin(r)+1)/2*(n.initialIntensity*i);n.intensity=o},uc=new WeakSet,Ay=function(){this.three.emitter.addEventListener(Zs.UPDATE.type,()=>{if(this.opacity==0)return;pe(this,ra,gh).call(this,this.light1,2,25),pe(this,ra,gh).call(this,this.light2,3,40);const n=window.scrollY*window.devicePixelRatio;n<=200&&pe(this,fc,Cy).call(this),n>200&&n<1500&&pe(this,hc,Ry).call(this),n>1500&&n<3e3&&pe(this,dc,Py).call(this),n>3e3&&n<4500&&pe(this,pc,Ly).call(this)})},Ps=new WeakSet,wo=function(n){var i;this.opacity<1||((i=this.moveTween)==null||i.stop(),this.moveTween=this.three.addTween({elements:this.three.camera,easing:Mi.Easing.Quadratic.InOut,duration:2e3,position:n.position,rotation:n.rotation}))},fc=new WeakSet,Cy=function(){this.isTriggered("initialPosition")||(this.triggerPosition("initialPosition"),pe(this,Ps,wo).call(this,{position:new U(0,0,this.three.initialCameraZ),rotation:new U(0,0,0)}))},hc=new WeakSet,Ry=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),pe(this,Ps,wo).call(this,{position:new U(0,3,2),rotation:new U(-1,0,0)}))},dc=new WeakSet,Py=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),pe(this,Ps,wo).call(this,{position:new U(-1,0,2),rotation:new U(0,-1,0)}))},pc=new WeakSet,Ly=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),pe(this,Ps,wo).call(this,{position:new U(2,0,0),rotation:new U(0,1.5,0)}))};var mc,Iy,gc,Dy,oa,_h,_c,Ny,Ki,wr,vc,Uy,yc,Oy,xc,Fy,Sc,By,Mc,ky;class IL extends ba{constructor(n){super();Re(this,mc);Re(this,gc);Re(this,oa);Re(this,_c);Re(this,Ki);Re(this,vc);Re(this,yc);Re(this,xc);Re(this,Sc);Re(this,Mc);Me(this,"three");Me(this,"key");Me(this,"cameraPosition");Me(this,"cameraPositions");Me(this,"light1");Me(this,"light2");this.three=n,this.key="camera",this.lightsArray=[],this.initialPositionTriggered=!0,this.midPositionTriggered=!1,this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,mc,Iy).call(this)}set visible(n){this.body.visible=n,this.light1&&(this.light1.visible=n),this.light2&&(this.light2.visible=n)}get visible(){return this.body.visible}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}setVerticalPosition(n=0){this.body.position.y=n,this.lightsArray.forEach(i=>{i.initialY==null&&(i.initialY=i.position.y),i.position.y=i.initialY+n})}setParametersForTexture(n,i=1){n.colorSpace=_u,n.anisotropy=i}}mc=new WeakSet,Iy=function(){pe(this,gc,Dy).call(this),pe(this,_c,Ny).call(this)},gc=new WeakSet,Dy=function(){this.body=this.three.objManager.get(this.key),this.body.scale.set(.2,.2,.2),this.body.position.set(0,-1,0),this.body.rotation.set(.3,.4,0);const n=this.three.imgManager.get("camera"),i=this.three.imgManager.get("camera_n"),s=this.three.imgManager.get("camera_s"),r=this.three.imgManager.get("camera_b"),o=new Bt(n),a=new Bt(i),l=new Bt(s),c=new Bt(r),u=this.three.renderer.capabilities.getMaxAnisotropy();this.setParametersForTexture(o,u),this.setParametersForTexture(a,1),this.setParametersForTexture(l,1),this.setParametersForTexture(c,1);const f=this.three.imgManager.get("cameraLens"),h=this.three.imgManager.get("cameraLens_s"),d=this.three.imgManager.get("cameraLens_a"),g=this.three.imgManager.get("cameraLens_b"),v=new Bt(f),m=new Bt(h),p=new Bt(d),x=new Bt(g);this.setParametersForTexture(v,u),this.setParametersForTexture(m,1),this.setParametersForTexture(p,1),this.setParametersForTexture(x,1);const _=new Ks({map:o,normalMap:a,specularMap:l,bumpMap:c,transparent:!0}),E=new Ks({map:v,alphaMap:p,specularMap:m,bumpMap:x,transparent:!0});this.body.children[0].material[0]=_,this.body.children[0].material[1]=E,this.three.scene.add(this.body),this.light1=new na({color:16777215,intensity:1,position:new U(-1,.5,2)}),this.light2=new na({color:16777215,intensity:1,position:new U(1,-.5,2)}),this.three.scene.add(this.light1),this.three.scene.add(this.light2),console.log(this.body)},oa=new WeakSet,_h=function(n,i=1,s=100){n.initialIntensity==null&&(n.initialIntensity=n.intensity);const r=this.three.totalFrames/s,o=(Math.sin(r)+1)/2*(n.initialIntensity*i);n.intensity=o},_c=new WeakSet,Ny=function(){this.three.emitter.addEventListener(Zs.UPDATE.type,()=>{if(this.opacity==0)return;pe(this,oa,_h).call(this,this.light1,6,25),pe(this,oa,_h).call(this,this.light2,8,40);const n=window.scrollY*window.devicePixelRatio;n<=10&&pe(this,vc,Uy).call(this),n>10&&n<1500&&pe(this,yc,Oy).call(this),n>1500&&n<3e3&&pe(this,xc,Fy).call(this),n>3e3&&n<4500&&pe(this,Sc,By).call(this),n>4500&&n<6e3&&pe(this,Mc,ky).call(this)})},Ki=new WeakSet,wr=function(n){var i;this.opacity<1||((i=this.moveTween)==null||i.stop(),this.moveTween=this.three.addTween({elements:this.three.camera,easing:Mi.Easing.Quadratic.InOut,duration:2e3,position:n.position,rotation:n.rotation}))},vc=new WeakSet,Uy=function(){this.isTriggered("initialPosition")||(this.triggerPosition("initialPosition"),pe(this,Ki,wr).call(this,{position:new U(0,0,this.three.initialCameraZ),rotation:new U(0,0,0)}))},yc=new WeakSet,Oy=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),pe(this,Ki,wr).call(this,{position:new U(5,0,5),rotation:new U(.1,.8,.6)}))},xc=new WeakSet,Fy=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),pe(this,Ki,wr).call(this,{position:new U(0,0,3.5),rotation:new U(0,-.1,0)}))},Sc=new WeakSet,By=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),window.camera=this.three.camera,pe(this,Ki,wr).call(this,{position:new U(0,5,0),rotation:new U(-1.6,0,0)}))},Mc=new WeakSet,ky=function(){this.isTriggered("fourthPosition")||(this.triggerPosition("fourthPosition"),window.camera=this.three.camera,pe(this,Ki,wr).call(this,{position:new U(0,5,0),rotation:new U(-1.6,0,2.5)}))};var Ec,Vy,bc,Hy,Tc,zy,aa,vh,Zi,Ar,wc,Gy,Ac,Wy,Cc,Xy,Rc,qy,Pc,jy;class DL extends ba{constructor(n){super();Re(this,Ec);Re(this,bc);Re(this,Tc);Re(this,aa);Re(this,Zi);Re(this,wc);Re(this,Ac);Re(this,Cc);Re(this,Rc);Re(this,Pc);Me(this,"three");Me(this,"key");Me(this,"pointLight");Me(this,"cameraPosition");Me(this,"cameraPositions");Me(this,"moveTween");this.three=n,this.key="logoObj",this.cameraPositions=[{key:"initialPosition",triggered:!0},{key:"firstPosition",triggered:!1},{key:"secondPosition",triggered:!1},{key:"thirdPosition",triggered:!1}],pe(this,Ec,Vy).call(this),pe(this,aa,vh).call(this)}set visible(n){this.body.visible=n,this.pointLight.visible=n}get visible(){return this.body.visible}triggerPosition(n){this.cameraPositions.forEach(i=>{i.key==n?i.triggered=!0:i.triggered=!1})}isTriggered(n){var i;return(i=this.cameraPositions.find(s=>s.key==n))==null?void 0:i.triggered}}Ec=new WeakSet,Vy=function(){pe(this,bc,Hy).call(this),pe(this,Tc,zy).call(this),pe(this,aa,vh).call(this)},bc=new WeakSet,Hy=function(){const n=this.three.imgManager.get("grain"),i=this.three.imgManager.get("grain_n"),s=this.three.imgManager.get("grain_s"),r=new Bt(n),o=new Bt(i),a=new Bt(s),l=this.three.renderer.capabilities.getMaxAnisotropy();r.wrapS=wt,r.wrapT=wt,r.anisotropy=1,o.colorSpace=pt,o.wrapS=wt,o.wrapT=wt,o.anisotropy=l,a.wrapS=wt,a.wrapT=wt;const c=1,u=1,f=.5;r.repeat.set(c*f,u*f),o.repeat.set(c*f,u*f),a.repeat.set(c*f,u*f);const h=new Ks({color:16777215,map:r,normalMap:o,specularMap:a,transparent:!0});this.body=this.three.objManager.get(this.key),this.body.scale.set(.22,.22,.22),this.body.position.set(0,Rd()?.7:0,0),this.body.traverse(d=>{d instanceof Un&&(d.material=h)}),this.three.scene.add(this.body)},Tc=new WeakSet,zy=function(){this.pointLight=new Cd(268435455,10),this.three.scene.add(this.pointLight),this.pointLight.position.set(0,.5,2)},aa=new WeakSet,vh=function(){this.three.emitter.addEventListener(Zs.UPDATE.type,()=>{this.opacity!=0&&(scrollY<=10&&pe(this,wc,Gy).call(this),scrollY>10&&scrollY<1500&&pe(this,Ac,Wy).call(this),scrollY>1500&&scrollY<3e3&&pe(this,Cc,Xy).call(this),scrollY>3e3&&scrollY<4500&&pe(this,Rc,qy).call(this),scrollY>4500&&scrollY<6e3&&pe(this,Pc,jy).call(this))})},Zi=new WeakSet,Ar=function(n){var i;this.opacity<1||((i=this.moveTween)==null||i.stop(),this.moveTween=this.three.addTween({elements:this.three.camera,easing:Mi.Easing.Quadratic.InOut,duration:2e3,position:n.position,rotation:n.rotation}))},wc=new WeakSet,Gy=function(){this.isTriggered("initialPosition")||(this.triggerPosition("initialPosition"),pe(this,Zi,Ar).call(this,{position:new U(0,0,this.three.initialCameraZ),rotation:new U(0,0,0)}))},Ac=new WeakSet,Wy=function(){this.isTriggered("firstPosition")||(this.triggerPosition("firstPosition"),pe(this,Zi,Ar).call(this,{position:new U(0,-1,2),rotation:new U(.5,0,0)}))},Cc=new WeakSet,Xy=function(){this.isTriggered("secondPosition")||(this.triggerPosition("secondPosition"),pe(this,Zi,Ar).call(this,{position:new U(0,0,3.5),rotation:new U(0,-.1,0)}))},Rc=new WeakSet,qy=function(){this.isTriggered("thirdPosition")||(this.triggerPosition("thirdPosition"),window.camera=this.three.camera,pe(this,Zi,Ar).call(this,{position:new U(0,5,0),rotation:new U(-1.6,0,0)}))},Pc=new WeakSet,jy=function(){this.isTriggered("fourthPosition")||(this.triggerPosition("fourthPosition"),window.camera=this.three.camera,pe(this,Zi,Ar).call(this,{position:new U(0,5,0),rotation:new U(-1.6,0,2.5)}))};const Ft="../";var NL=(t=>(t.SIGIL="sigil",t.LOGO="logo",t.PHOTO_CAMERA="photoCamera",t.CONCERT_STAGE="concertStage",t.SHOPPING_CART="shoppingCart",t.AMPLIFIER="amplifier",t))(NL||{}),Lc,$y,Ic,Yy,Dc,Ky,Nc,Zy,Uc,Jy,Oc,Qy,Fc,ex,Bc,tx,kc,nx,Vc,ix,Hc,sx,zc,rx,Gc,ox,Wc,ax,Xc,lx,qc,cx;class UL{constructor(){Re(this,Lc);Re(this,Ic);Re(this,Dc);Re(this,Nc);Re(this,Uc);Re(this,Oc);Re(this,Fc);Re(this,Bc);Re(this,kc);Re(this,Vc);Re(this,Hc);Re(this,zc);Re(this,Gc);Re(this,Wc);Re(this,Xc);Re(this,qc);Me(this,"scene");Me(this,"camera");Me(this,"renderer");Me(this,"geometry");Me(this,"material");Me(this,"sigil");Me(this,"concertStage");Me(this,"pointLight");Me(this,"dirLight");Me(this,"mouse");Me(this,"objManager");Me(this,"imgManager");Me(this,"mtlManager");Me(this,"particleMaterials");Me(this,"emitter");Me(this,"particleParameters");Me(this,"os");Me(this,"object3dArray");Me(this,"totalFrames");Me(this,"innerWidthConstant");Me(this,"yRotationAddFromScroll");Me(this,"previousScrollY");Me(this,"currentScrollY");Me(this,"deltaScrollY");Me(this,"initialCameraZ");Me(this,"amplifier");Me(this,"shoppingCart");Me(this,"photoCamera");this.scene=new QP,this.camera=new xn(this.cameraFov,this.cameraAspect,.1,1e3),this.totalFrames=0,this.innerWidthConstant=1,this.renderer=new ay({antialias:!0,precision:"lowp",powerPreference:"low-power"}),this.emitter=new sr,this.os=xL(),this.geometry=new oo(1,1,1),this.material=new bd({color:65280}),this.objManager=new _L,this.imgManager=new vL,this.mtlManager=new PL,this.object3dArray=[],this.particleMaterials=[],this.particleParameters=[[[]]],this.yRotationAddFromScroll=0,this.currentScrollY=0,this.previousScrollY=0,this.deltaScrollY=0,this.totalRotationAdded=0,this.initialCameraZ=5,this.init()}get isPortrait(){return this.setupHeight>this.setupWidth}get devicePixelRatio(){return window.devicePixelRatio>2?2:window.devicePixelRatio}get cameraAspect(){return this.setupWidth/this.setupHeight}get cameraFov(){let e=105/(this.cameraAspect+.5);return e<50&&(e=50),e>125&&(e=125),e}get setupWidth(){return window.innerWidth*this.devicePixelRatio}get setupHeight(){return window.innerHeight*this.devicePixelRatio}async init(){this.preload()}async preload(){await this.imgManager.load("grain",`${Ft}static/3d/textures/grain.webp`),await this.imgManager.load("grain_n",`${Ft}static/3d/textures/grain_n.webp`),await this.imgManager.load("grain_s",`${Ft}static/3d/textures/grain_s.webp`),await this.imgManager.load("hardwood",`${Ft}static/3d/textures/hardwood.webp`),await this.imgManager.load("hardwood_n",`${Ft}static/3d/textures/hardwood_n.jpg`),this.create()}get allObjectsAreHidden(){return this.object3dArray.every(e=>!e.body.visible)}hide3dObjects(e,n){return new Promise((i,s)=>{let r=!1;if(this.object3dArray.length==0)return i();this.object3dArray.forEach(o=>{var a;if(o==e){console.log("found same item, excluding",e),this.object3dArray.length==1&&i();return}if(n){o.visible=!1,r||(r=!0,i());return}(a=o.opacityTween)==null||a.stop(),o.opacityTween=this.addTween({elements:o,easing:Mi.Easing.Quadratic.Out,duration:300,opacity:0,onComplete:()=>{r||(r=!0,i()),o.visible=!1}})})})}async create(){pe(this,Xc,lx).call(this),pe(this,qc,cx).call(this),pe(this,zc,rx).call(this),pe(this,Wc,ax).call(this),pe(this,Gc,ox).call(this),pe(this,Vc,ix).call(this),pe(this,Bc,tx).call(this),this.emitter.dispatchEvent(Zs.CREATE),this.update()}update(){requestAnimationFrame(()=>{this.update()}),this.renderer.render(this.scene,this.camera),pe(this,Fc,ex).call(this),this.totalFrames++,Mi.update(),pe(this,Oc,Qy).call(this),this.emitter.dispatchEvent(Zs.UPDATE)}async setElementVisible(e,n=!0,i=300){this[e]||(await this.hide3dObjects(),e=="concertStage"?await pe(this,Dc,Ky).call(this):e=="logo"?await pe(this,Uc,Jy).call(this):e=="photoCamera"?await pe(this,Lc,$y).call(this):e=="shoppingCart"?await pe(this,Ic,Yy).call(this):e=="sigil"&&await pe(this,Nc,Zy).call(this)),requestAnimationFrame(()=>{if(!this[e]){if(i==1){console.warn(`Request to set visible for ${e} has gone time out`);return}i--,this.setElementVisible(e,i);return}const s=this[e];if(this.hide3dObjects(s),pe(this,Hc,sx).call(this,s),Rd()&&n){const r=this.setupWidth/this.setupHeight;if(r<.5){const o=.5-r;console.log(o);let a=o*45;console.log("YPOS",a),a>1.4&&(a=1.4);const l=o*5;s.setVerticalPosition?s.setVerticalPosition(a):((s.iniitialY==null||s.initialRotationX==null)&&(s.initialY=s.body.position.x,s.initialRotationX=s.body.rotation.x),s.body.position.y=s.initialY+a,s.body.rotation.x=s.initialRotationX+l)}}})}addTween(e){const{opacity:n,position:i,rotation:s,elements:r,easing:o=Mi.Easing.Linear.None,delay:a=0,duration:l,onStart:c=()=>{},onUpdate:u=()=>{},onComplete:f=()=>{}}=e,h=new Mi.Tween(r).to({opacity:n,position:i,easing:o,rotation:s},l||1e3);return h.easing(o),h.delay(a),h.onStart(c),h.onUpdate(u),h.onComplete(f),h.start(),h}}Lc=new WeakSet,$y=async function(){await this.objManager.load("camera",`${Ft}static/3d/camera/camera.obj`),await this.imgManager.load("camera",`${Ft}static/3d/camera/camera.webp`),await this.imgManager.load("camera_n",`${Ft}static/3d/camera/camera_n.webp`),await this.imgManager.load("camera_s",`${Ft}static/3d/camera/camera_s.png`),await this.imgManager.load("camera_b",`${Ft}static/3d/camera/camera_b.webp`),await this.imgManager.load("cameraLens",`${Ft}static/3d/camera/cameraLens.png`),await this.imgManager.load("cameraLens_a",`${Ft}static/3d/camera/cameraLens_a.png`),await this.imgManager.load("cameraLens_s",`${Ft}static/3d/camera/cameraLens_s.png`),await this.imgManager.load("cameraLens_b",`${Ft}static/3d/camera/cameraLens_b.png`),this.photoCamera=new IL(this),this.photoCamera.opacity=0,this.object3dArray.push(this.photoCamera)},Ic=new WeakSet,Yy=async function(){await this.objManager.load("shoppingCart",`${Ft}static/3d/shoppingCart/shoppingCart.obj`),this.shoppingCart=new LL(this),this.shoppingCart.opacity=0,this.object3dArray.push(this.shoppingCart)},Dc=new WeakSet,Ky=async function(){await this.objManager.load("concertStage",`${Ft}static/3d/concertStage/concertStage.obj`),this.concertStage=new RL(this),this.concertStage.opacity=0,this.object3dArray.push(this.concertStage)},Nc=new WeakSet,Zy=async function(){await this.objManager.load("sigilObj",`${Ft}static/3d/ambroz/sigilObj.obj`),this.sigil=new yL(this),this.sigil.opacity=0,this.object3dArray.push(this.sigil)},Uc=new WeakSet,Jy=async function(){await this.objManager.load("logoObj",`${Ft}static/3d/ambroz/logoObj.obj`),this.logo=new DL(this),this.logo.opacity=0,this.object3dArray.push(this.logo)},Oc=new WeakSet,Qy=function(e=3){this.object3dArray.forEach(n=>{if(n.opacity!=null&&n.opacity==0)return;n.initialRotation||(n.initialRotation=new U(n.body.rotation.x,n.body.rotation.y,n.body.rotation.z));const i=this.totalFrames/200,s=Math.sin(i)/10*e,r=Math.sin(i/1.5)/10*e;n.body.rotation.x=s+n.initialRotation.x,n.body.rotation.y=r+n.initialRotation.y})},Fc=new WeakSet,ex=function(){Math.abs(this.yRotationAddFromScroll)>0&&(this.yRotationAddFromScroll/=1.8);for(let e=0;e<this.scene.children.length;e++){const n=this.scene.children[e];if(n instanceof Oo){const i=this.totalFrames*(e%2==0?e+1:-(e+1))*5e-5;n.rotation.x=i,n.rotation.y=i}}},Bc=new WeakSet,tx=function(){window.addEventListener("resize",()=>pe(this,kc,nx).call(this))},kc=new WeakSet,nx=function(){},Vc=new WeakSet,ix=function(){},Hc=new WeakSet,sx=function(e){var n;if(e){if((n=e.opacityTween)==null||n.stop(),e.opacity==null)throw new Error("Element had no opacity vaule to work with");e.opacityTween=this.addTween({elements:e,delay:this.allObjectsAreHidden?0:300,easing:Mi.Easing.Quadratic.Out,duration:300,onStart:()=>e.visible=!0,opacity:1})}},zc=new WeakSet,rx=function(){this.mouse=new Je,document.addEventListener("mousemove",e=>{e.preventDefault(),this.mouse.x=e.clientX/this.setupWidth*2-1,this.mouse.y=-(e.clientY/this.setupHeight)*2+1},!1)},Gc=new WeakSet,ox=async function(){const e=new Fn,n=[],i=l=>{l.colorSpace=pt},s=await this.imgManager.load("spark","../../static/particles/spark.png"),r=await this.imgManager.load("spark","../../static/particles/snowflake.png"),o=new Bt(s);i(o);const a=new Bt(r);i(a);for(let l=0;l<5e3;l++){const c=Math.random()*2e3-1e3,u=Math.random()*2e3-1e3,f=Math.random()*2e3-1e3;n.push(c,u,f)}e.setAttribute("position",new $t(n,3)),this.particleParameters=[[[.5,.5,.5],a,4],[[.5,.4,.35],o,3.5],[[.5,.5,.45],a,3.2],[[.35,.35,.25],o,3],[[.65,.6,.55],o,2.5]];for(let l=0;l<this.particleParameters.length;l++){const c=this.particleParameters[l][0],u=this.particleParameters[l][1],f=this.particleParameters[l][2];this.particleMaterials[l]=new Pr({size:f,map:u,blending:nh,depthTest:!1,transparent:!0}),this.particleMaterials[l].color.setRGB(c[0],c[1],c[2],pt);const h=new Oo(e,this.particleMaterials[l]);h.rotation.x=Math.random()*6,h.rotation.y=Math.random()*6,h.rotation.z=Math.random()*6,this.scene.add(h)}},Wc=new WeakSet,ax=function(){const e=new oL(16777215,1);this.scene.add(e)},Xc=new WeakSet,lx=function(){this.renderer.setClearColor(0,0),this.renderer.setSize(this.setupWidth,this.setupHeight);const e=document.getElementById("app");if(e){const n=this.renderer.domElement;n.style.position="fixed",n.style.display="inline-block",n.style.zIndex="-1",n.style.top="0",n.style.left="0",n.style.width="100vw",n.style.height="auto",window.threeDomElement=n,window.three=this,e.appendChild(n)}},qc=new WeakSet,cx=function(){this.camera.position.z=this.initialCameraZ};const OL={beforeMount(){window.three=new UL}},Mu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};function FL(t,e,n,i,s,r){return as(),pa("div")}const BL=Mu(OL,[["render",FL]]),kL="/assets/sigil-ambroz-LlSyZkk3.png",ux="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3espotify%20[%23ffffff]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7479.000000)'%20fill='%23ffffff'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M99.915,7327.865%20C96.692,7325.951%2091.375,7325.775%2088.297,7326.709%20C87.803,7326.858%2087.281,7326.58%2087.131,7326.085%20C86.981,7325.591%2087.26,7325.069%2087.754,7324.919%20C91.287,7323.846%2097.159,7324.053%20100.87,7326.256%20C101.314,7326.52%20101.46,7327.094%20101.196,7327.538%20C100.934,7327.982%20100.358,7328.129%2099.915,7327.865%20L99.915,7327.865%20Z%20M99.81,7330.7%20C99.584,7331.067%2099.104,7331.182%2098.737,7330.957%20C96.05,7329.305%2091.952,7328.827%2088.773,7329.792%20C88.36,7329.916%2087.925,7329.684%2087.8,7329.272%20C87.676,7328.86%2087.908,7328.425%2088.32,7328.3%20C91.951,7327.198%2096.466,7327.732%2099.553,7329.629%20C99.92,7329.854%20100.035,7330.334%2099.81,7330.7%20L99.81,7330.7%20Z%20M98.586,7333.423%20C98.406,7333.717%2098.023,7333.81%2097.729,7333.63%20C95.381,7332.195%2092.425,7331.871%2088.944,7332.666%20C88.609,7332.743%2088.274,7332.533%2088.198,7332.197%20C88.121,7331.862%2088.33,7331.528%2088.667,7331.451%20C92.476,7330.58%2095.743,7330.955%2098.379,7332.566%20C98.673,7332.746%2098.766,7333.129%2098.586,7333.423%20L98.586,7333.423%20Z%20M94,7319%20C88.477,7319%2084,7323.477%2084,7329%20C84,7334.523%2088.477,7339%2094,7339%20C99.523,7339%20104,7334.523%20104,7329%20C104,7323.478%2099.523,7319.001%2094,7319.001%20L94,7319%20Z'%20id='spotify-[%23ffffff]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",fx="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='7935ec95c421cee6d86eb22ecd11b7e3'%3e%3cpath%20style='display:%20inline;'%20d='M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379%20c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302%20c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263%20l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",hx="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20169.063%20169.063'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752%20c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z%20M154.063,122.407%20c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752%20c17.455,0,31.656,14.201,31.656,31.655V122.407z'/%3e%3cpath%20d='M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561%20C128.094,60.512,108.552,40.97,84.531,40.97z%20M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561%20c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z'/%3e%3cpath%20d='M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78%20c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78%20C135.661,29.421,132.821,28.251,129.921,28.251z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",dx="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.49614%207.13176C9.18664%206.9549%208.80639%206.95617%208.49807%207.13509C8.18976%207.31401%208%207.64353%208%208V16C8%2016.3565%208.18976%2016.686%208.49807%2016.8649C8.80639%2017.0438%209.18664%2017.0451%209.49614%2016.8682L16.4961%2012.8682C16.8077%2012.6902%2017%2012.3589%2017%2012C17%2011.6411%2016.8077%2011.3098%2016.4961%2011.1318L9.49614%207.13176ZM13.9844%2012L10%2014.2768V9.72318L13.9844%2012Z'%20fill='%23ffffff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2012C0%208.25027%200%206.3754%200.954915%205.06107C1.26331%204.6366%201.6366%204.26331%202.06107%203.95491C3.3754%203%205.25027%203%209%203H15C18.7497%203%2020.6246%203%2021.9389%203.95491C22.3634%204.26331%2022.7367%204.6366%2023.0451%205.06107C24%206.3754%2024%208.25027%2024%2012C24%2015.7497%2024%2017.6246%2023.0451%2018.9389C22.7367%2019.3634%2022.3634%2019.7367%2021.9389%2020.0451C20.6246%2021%2018.7497%2021%2015%2021H9C5.25027%2021%203.3754%2021%202.06107%2020.0451C1.6366%2019.7367%201.26331%2019.3634%200.954915%2018.9389C0%2017.6246%200%2015.7497%200%2012ZM9%205H15C16.9194%205%2018.1983%205.00275%2019.1673%205.10773C20.0989%205.20866%2020.504%205.38448%2020.7634%205.57295C21.018%205.75799%2021.242%205.98196%2021.4271%206.23664C21.6155%206.49605%2021.7913%206.90113%2021.8923%207.83269C21.9973%208.80167%2022%2010.0806%2022%2012C22%2013.9194%2021.9973%2015.1983%2021.8923%2016.1673C21.7913%2017.0989%2021.6155%2017.504%2021.4271%2017.7634C21.242%2018.018%2021.018%2018.242%2020.7634%2018.4271C20.504%2018.6155%2020.0989%2018.7913%2019.1673%2018.8923C18.1983%2018.9973%2016.9194%2019%2015%2019H9C7.08058%2019%205.80167%2018.9973%204.83269%2018.8923C3.90113%2018.7913%203.49605%2018.6155%203.23664%2018.4271C2.98196%2018.242%202.75799%2018.018%202.57295%2017.7634C2.38448%2017.504%202.20866%2017.0989%202.10773%2016.1673C2.00275%2015.1983%202%2013.9194%202%2012C2%2010.0806%202.00275%208.80167%202.10773%207.83269C2.20866%206.90113%202.38448%206.49605%202.57295%206.23664C2.75799%205.98196%202.98196%205.75799%203.23664%205.57295C3.49605%205.38448%203.90113%205.20866%204.83269%205.10773C5.80167%205.00275%207.08058%205%209%205Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",VL=t=>(Uh("data-v-89b831eb"),t=t(),Oh(),t),HL={class:"navbar-section-left"},zL=VL(()=>ni("img",{src:kL,alt:"",height:"110px",class:"sigil-image"},null,-1)),GL={class:"navbar-section-center non-sigil-elements"},WL=jh('<div class="navbar-section-right" data-v-89b831eb><a href="https://open.spotify.com/artist/6qQ9WpaSYq45nO9O4kJrVM" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+ux+'" alt="" class="navbar-icon" data-v-89b831eb></a><a href="https://www.facebook.com/ambrozmkd" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+fx+'" alt="" class="navbar-icon" data-v-89b831eb></a><a href="https://www.instagram.com/ambroz.mkd/" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+hx+'" alt="" class="navbar-icon" data-v-89b831eb></a><a href="https://www.youtube.com/@AmbrozMKDband" target="_blank" class="navbar-element" data-v-89b831eb><img src="'+dx+'" alt="" class="navbar-icon" data-v-89b831eb></a></div>',1),XL={methods:{isRouteActive(t){return this.$route.path==t}}},qL=ro({...XL,__name:"NavbarAmbroz",setup(t){return(e,n)=>(as(),pa("body",null,[ni("nav",null,[ni("div",HL,[tt(Mn(Tr),{to:"/",class:Qn((e.isRouteActive("/")?"navbar-element__active":"navbar-element__inactive")+" sigil-element")},{default:Yi(()=>[zL]),_:1},8,["class"])]),ni("div",GL,[tt(Mn(Tr),{to:"/about",class:Qn((e.isRouteActive("/about")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Yi(()=>[bs(" ABOUT ")]),_:1},8,["class"]),tt(Mn(Tr),{to:"/discography",class:Qn((e.isRouteActive("/discography")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Yi(()=>[bs(" DISCOGRAPHY ")]),_:1},8,["class"]),tt(Mn(Tr),{to:"/gallery",class:Qn((e.isRouteActive("/gallery")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Yi(()=>[bs(" GALLERY")]),_:1},8,["class"]),tt(Mn(Tr),{to:"/store",class:Qn((e.isRouteActive("/store")?"navbar-element__active":"navbar-element__inactive")+" animate-underline")},{default:Yi(()=>[bs(" STORE")]),_:1},8,["class"])]),WL])]))}}),jL=Mu(qL,[["__scopeId","data-v-89b831eb"]]),$L={},YL=jh('<div class="footer-section-top" data-v-7b055fcd><hr data-v-7b055fcd></div><div class="footer-section-center" data-v-7b055fcd><a href="https://open.spotify.com/artist/6qQ9WpaSYq45nO9O4kJrVM" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+ux+'" alt="" class="footer-icon" data-v-7b055fcd></a><a href="https://www.facebook.com/ambrozmkd" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+fx+'" alt="" class="footer-icon" data-v-7b055fcd></a><a href="https://www.instagram.com/ambroz.mkd/" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+hx+'" alt="" class="footer-icon" data-v-7b055fcd></a><a href="https://www.youtube.com/@AmbrozMKDband" target="_blank" class="footer-element" data-v-7b055fcd><img src="'+dx+'" alt="" class="footer-icon" data-v-7b055fcd></a></div><div class="footer-section-bottom" data-v-7b055fcd><p data-v-7b055fcd><small data-v-7b055fcd>Ambroz © 2024. All rights reserved.</small></p></div>',3),KL=[YL];function ZL(t,e){return as(),pa("footer",null,KL)}const JL=Mu($L,[["render",ZL],["__scopeId","data-v-7b055fcd"]]),QL={components:{RouterView:Lv,BackgroundComponent:BL,NavbarAmbroz:jL,FooterAmbroz:JL},mounted(){this.addParallaxToBackground()},methods:{addParallaxToBackground(){document.getElementById("body").onscroll=()=>{const t=document.scrollingElement.scrollTop,e=document.getElementById("backgroundParallax"),n="center",s=t*.5*-.5;e.style.backgroundPosition=`${n} ${s}px`}}}},e3=t=>(Uh("data-v-1da1b644"),t=t(),Oh(),t),t3=e3(()=>ni("body",{id:"body"},[ni("div",{id:"backgroundParallax"})],-1));function n3(t,e,n,i,s,r){const o=xo("BackgroundComponent"),a=xo("NavbarAmbroz"),l=xo("RouterView"),c=xo("FooterAmbroz");return as(),pa(kt,null,[t3,tt(o),ni("div",null,[tt(a),tt(l),tt(c)])],64)}const i3=Mu(QL,[["render",n3],["__scopeId","data-v-1da1b644"]]),px=W1({history:l1("/"),routes:[{path:"/",name:"Home",component:()=>Mr(()=>import("./HomepageView-39pOaUVi.js"),__vite__mapDeps([0,1]))},{path:"/contact",name:"contact",component:()=>Mr(()=>import("./ContactPageView-tqhw8e7V.js"),__vite__mapDeps([2,3]))},{path:"/gallery",name:"Gallery",component:()=>Mr(()=>import("./GalleryAmbrozView-1hxY1J0X.js"),__vite__mapDeps([4,5]))},{path:"/about",name:"About",component:()=>Mr(()=>import("./AboutUsView-2yEB0Rhn.js"),__vite__mapDeps([6,7]))},{path:"/discography",name:"Discography",component:()=>Mr(()=>import("./DiscographyAmbrozView-th3wTp0p.js"),__vite__mapDeps([8,9]))},{path:"/store",name:"Store",component:()=>Mr(()=>import("./StoreAmbrozView-TBKjBup7.js"),__vite__mapDeps([10,11]))}]});px.beforeEach((t,e,n)=>{document.title=`Ambroz · ${t.name}`,n()});const mx=L0(i3);mx.use(px);mx.mount("#app");export{NL as E,kt as F,Mu as _,ni as a,Oh as b,pa as c,ro as d,tt as e,Mr as f,xo as g,qh as h,YM as i,Zs as j,Qn as n,as as o,Uh as p,lM as r,jx as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomepageView-39pOaUVi.js","assets/HomepageView-WmEigz4U.css","assets/ContactPageView-tqhw8e7V.js","assets/ContactPageView-ouw6h9nx.css","assets/GalleryAmbrozView-1hxY1J0X.js","assets/GalleryAmbrozView-UdPtkgK-.css","assets/AboutUsView-2yEB0Rhn.js","assets/AboutUsView-WakwnKRW.css","assets/DiscographyAmbrozView-th3wTp0p.js","assets/DiscographyAmbrozView-8yAuC0r7.css","assets/StoreAmbrozView-TBKjBup7.js","assets/StoreAmbrozView-AURDX3kQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
