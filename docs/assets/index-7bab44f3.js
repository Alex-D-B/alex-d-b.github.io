var Io=Object.defineProperty;var No=(i,e,t)=>e in i?Io(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ys=(i,e,t)=>(No(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function me(){}function Wa(i){return i()}function yr(){return Object.create(null)}function Ni(i){i.forEach(Wa)}function Xa(i){return typeof i=="function"}function rt(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let Gi;function $a(i,e){return i===e?!0:(Gi||(Gi=document.createElement("a")),Gi.href=e,i===Gi.href)}function Fo(i){return Object.keys(i).length===0}function ie(i,e){i.appendChild(e)}function D(i,e,t){i.insertBefore(e,t||null)}function U(i){i.parentNode&&i.parentNode.removeChild(i)}function Mi(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function q(i){return document.createElement(i)}function tr(i){return document.createTextNode(i)}function J(){return tr(" ")}function B(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Oo(i){return Array.from(i.childNodes)}function Bo(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function br(i,e){return new i(e)}let hr;function Ci(i){hr=i}const oi=[],Tr=[];let ui=[];const Ar=[],zo=Promise.resolve();let nr=!1;function Ho(){nr||(nr=!0,zo.then(qa))}function ir(i){ui.push(i)}const bs=new Set;let Wn=0;function qa(){if(Wn!==0)return;const i=hr;do{try{for(;Wn<oi.length;){const e=oi[Wn];Wn++,Ci(e),Go(e.$$)}}catch(e){throw oi.length=0,Wn=0,e}for(Ci(null),oi.length=0,Wn=0;Tr.length;)Tr.pop()();for(let e=0;e<ui.length;e+=1){const t=ui[e];bs.has(t)||(bs.add(t),t())}ui.length=0}while(oi.length);for(;Ar.length;)Ar.pop()();nr=!1,bs.clear(),Ci(i)}function Go(i){if(i.fragment!==null){i.update(),Ni(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(ir)}}function Vo(i){const e=[],t=[];ui.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),ui=e}const us=new Set;let On;function ko(){On={r:0,c:[],p:On}}function Wo(){On.r||Ni(On.c),On=On.p}function et(i,e){i&&i.i&&(us.delete(i),i.i(e))}function it(i,e,t,n){if(i&&i.o){if(us.has(i))return;us.add(i),On.c.push(()=>{us.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Si(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function st(i){i&&i.c()}function tt(i,e,t){const{fragment:n,after_update:s}=i.$$;n&&n.m(e,t),ir(()=>{const r=i.$$.on_mount.map(Wa).filter(Xa);i.$$.on_destroy?i.$$.on_destroy.push(...r):Ni(r),i.$$.on_mount=[]}),s.forEach(ir)}function nt(i,e){const t=i.$$;t.fragment!==null&&(Vo(t.after_update),Ni(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Xo(i,e){i.$$.dirty[0]===-1&&(oi.push(i),Ho(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function at(i,e,t,n,s,r,o,a=[-1]){const u=hr;Ci(i);const c=i.$$={fragment:null,ctx:[],props:r,update:me,not_equal:s,bound:yr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:yr(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let l=!1;if(c.ctx=t?t(i,e.props||{},(d,h,...m)=>{const g=m.length?m[0]:h;return c.ctx&&s(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),l&&Xo(i,d)),h}):[],c.update(),l=!0,Ni(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const d=Oo(e.target);c.fragment&&c.fragment.l(d),d.forEach(U)}else c.fragment&&c.fragment.c();e.intro&&et(i.$$.fragment),tt(i,e.target,e.anchor),qa()}Ci(u)}class ot{constructor(){ys(this,"$$");ys(this,"$$set")}$destroy(){nt(this,1),this.$destroy=me}$on(e,t){if(!Xa(t))return me;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Fo(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $o="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($o);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pr="154",qo=0,wr=1,Yo=2,Ya=1,jo=2,dn=3,An=0,It=1,fn=2,bn=0,di=1,Rr=2,Cr=3,Lr=4,Ko=5,li=100,Zo=101,Jo=102,Pr=103,Ur=104,Qo=200,el=201,tl=202,nl=203,ja=204,Ka=205,il=206,sl=207,rl=208,al=209,ol=210,ll=0,cl=1,ul=2,sr=3,dl=4,fl=5,hl=6,pl=7,Za=0,ml=1,gl=2,pn=0,_l=1,xl=2,vl=3,Ml=4,Sl=5,Ja=300,hi=301,pi=302,rr=303,ar=304,ps=306,or=1e3,Kt=1001,lr=1002,Ut=1003,Dr=1004,Ts=1005,Vt=1006,El=1007,Di=1008,Tn=1009,yl=1010,bl=1011,mr=1012,Qa=1013,En=1014,yn=1015,Ii=1016,eo=1017,to=1018,Bn=1020,Tl=1021,Zt=1023,Al=1024,wl=1025,zn=1026,mi=1027,Rl=1028,no=1029,Cl=1030,io=1031,so=1033,As=33776,ws=33777,Rs=33778,Cs=33779,Ir=35840,Nr=35841,Fr=35842,Or=35843,Ll=36196,Br=37492,zr=37496,Hr=37808,Gr=37809,Vr=37810,kr=37811,Wr=37812,Xr=37813,$r=37814,qr=37815,Yr=37816,jr=37817,Kr=37818,Zr=37819,Jr=37820,Qr=37821,Ls=36492,Pl=36283,ea=36284,ta=36285,na=36286,ro=3e3,Hn=3001,Ul=3200,Dl=3201,Il=0,Nl=1,Gn="",ze="srgb",nn="srgb-linear",ao="display-p3",Ps=7680,Fl=519,Ol=512,Bl=513,zl=514,Hl=515,Gl=516,Vl=517,kl=518,Wl=519,ia=35044,sa="300 es",cr=1035,hn=2e3,fs=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,ur=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function Xl(i,e){return(i%e+e)%e}function Ds(i,e,t){return(1-t)*i+t*e}function ra(i){return(i&i-1)===0&&i!==0}function dr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,o,a,u,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,u,c)}set(e,t,n,s,r,o,a,u,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=r,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],l=n[4],d=n[7],h=n[2],m=n[5],g=n[8],v=s[0],p=s[3],f=s[6],T=s[1],M=s[4],b=s[7],A=s[2],C=s[5],w=s[8];return r[0]=o*v+a*T+u*A,r[3]=o*p+a*M+u*C,r[6]=o*f+a*b+u*w,r[1]=c*v+l*T+d*A,r[4]=c*p+l*M+d*C,r[7]=c*f+l*b+d*w,r[2]=h*v+m*T+g*A,r[5]=h*p+m*M+g*C,r[8]=h*f+m*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*r*l+n*a*u+s*r*c-s*o*u}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],d=l*o-a*c,h=a*u-l*r,m=c*r-o*u,g=t*d+n*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-l*n)*v,e[2]=(a*n-s*o)*v,e[3]=h*v,e[4]=(l*t-s*u)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(n*u-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const u=Math.cos(r),c=Math.sin(r);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-s*c,s*u,-s*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Ge;function oo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const aa={};function Li(i){i in aa||(aa[i]=!0,console.warn(i))}function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $l=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ql=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Yl(i){return i.convertSRGBToLinear().applyMatrix3(ql)}function jl(i){return i.applyMatrix3($l).convertLinearToSRGB()}const Kl={[nn]:i=>i,[ze]:i=>i.convertSRGBToLinear(),[ao]:Yl},Zl={[nn]:i=>i,[ze]:i=>i.convertLinearToSRGB(),[ao]:jl},Xt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return nn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Kl[e],s=Zl[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Xn;class lo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=hs("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jl=0;class co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fs(s[o].image)):r.push(Fs(s[o]))}else r=Fs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ql=0;class zt extends _i{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Kt,s=Kt,r=Vt,o=Di,a=Zt,u=Tn,c=zt.DEFAULT_ANISOTROPY,l=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Fi(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Hn?ze:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ja)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Hn:ro}set encoding(e){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hn?ze:Gn}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Ja;zt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const u=e.elements,c=u[0],l=u[4],d=u[8],h=u[1],m=u[5],g=u[9],v=u[2],p=u[6],f=u[10];if(Math.abs(l-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(m+1)/2,A=(f+1)/2,C=(l+h)/4,w=(d+v)/4,V=(g+p)/4;return M>b&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=w/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=V/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=V/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-l)*(h-l));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-v)/T,this.z=(h-l)/T,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends _i{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hn?ze:Gn),this.texture=new zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let u=n[s+0],c=n[s+1],l=n[s+2],d=n[s+3];const h=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||u!==h||c!==m||l!==g){let p=1-a;const f=u*h+c*m+l*g+d*v,T=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),C=Math.atan2(A,f*T);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const b=a*T;if(u=u*p+h*b,c=c*p+m*b,l=l*p+g*b,d=d*p+v*b,p===1-a){const A=1/Math.sqrt(u*u+c*c+l*l+d*d);u*=A,c*=A,l*=A,d*=A}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],u=n[s+1],c=n[s+2],l=n[s+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+l*d+u*m-c*h,e[t+1]=u*g+l*h+c*d-a*m,e[t+2]=c*g+l*m+a*h-u*d,e[t+3]=l*g-a*d-u*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(s/2),d=a(r/2),h=u(n/2),m=u(s/2),g=u(r/2);switch(o){case"XYZ":this._x=h*l*d+c*m*g,this._y=c*m*d-h*l*g,this._z=c*l*g+h*m*d,this._w=c*l*d-h*m*g;break;case"YXZ":this._x=h*l*d+c*m*g,this._y=c*m*d-h*l*g,this._z=c*l*g-h*m*d,this._w=c*l*d+h*m*g;break;case"ZXY":this._x=h*l*d-c*m*g,this._y=c*m*d+h*l*g,this._z=c*l*g+h*m*d,this._w=c*l*d-h*m*g;break;case"ZYX":this._x=h*l*d-c*m*g,this._y=c*m*d+h*l*g,this._z=c*l*g-h*m*d,this._w=c*l*d+h*m*g;break;case"YZX":this._x=h*l*d+c*m*g,this._y=c*m*d+h*l*g,this._z=c*l*g-h*m*d,this._w=c*l*d-h*m*g;break;case"XZY":this._x=h*l*d-c*m*g,this._y=c*m*d-h*l*g,this._z=c*l*g+h*m*d,this._w=c*l*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],u=t[9],c=t[2],l=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(l-u)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(l-u)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(u+l)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(u+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,u=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+s*c-r*u,this._y=s*l+o*u+r*a-n*c,this._z=r*l+o*c+n*u-s*a,this._w=o*l-n*a-s*u-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),d=Math.sin((1-t)*l)/c,h=Math.sin(t*l)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,u=e.w,c=u*t+o*s-a*n,l=u*n+a*t-r*s,d=u*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=c*u+h*-r+l*-a-d*-o,this.y=l*u+h*-o+d*-r-c*-a,this.z=d*u+h*-a+c*-o-l*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,u=t.z;return this.x=s*u-r*a,this.y=r*o-n*u,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Os.copy(this).projectOnVector(e),this.sub(Os)}reflect(e){return this.sub(Os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new k,oa=new Oi;class Bi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox),$n.applyMatrix4(e.matrixWorld),this.union($n);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)an.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(an)}else s.boundingBox===null&&s.computeBoundingBox(),$n.copy(s.boundingBox),$n.applyMatrix4(e.matrixWorld),this.union($n)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),ki.subVectors(this.max,Ei),qn.subVectors(e.a,Ei),Yn.subVectors(e.b,Ei),jn.subVectors(e.c,Ei),gn.subVectors(Yn,qn),_n.subVectors(jn,Yn),Ln.subVectors(qn,jn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Ln.y,Ln.x,0];return!Bs(t,qn,Yn,jn,ki)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,qn,Yn,jn,ki))?!1:(Wi.crossVectors(gn,_n),t=[Wi.x,Wi.y,Wi.z],Bs(t,qn,Yn,jn,ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new k,new k,new k,new k,new k,new k,new k,new k],an=new k,$n=new Bi,qn=new k,Yn=new k,jn=new k,gn=new k,_n=new k,Ln=new k,Ei=new k,ki=new k,Wi=new k,Pn=new k;function Bs(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pn.fromArray(i,r);const a=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),u=e.dot(Pn),c=t.dot(Pn),l=n.dot(Pn);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const tc=new Bi,yi=new k,zs=new k;class gr{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(zs)),this.expandByPoint(yi.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new k,Hs=new k,Xi=new k,xn=new k,Gs=new k,$i=new k,Vs=new k;class nc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hs.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Hs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xi),a=xn.dot(this.direction),u=-xn.dot(Xi),c=xn.lengthSq(),l=Math.abs(1-o*o);let d,h,m,g;if(l>0)if(d=o*u-a,h=o*a-u,g=r*l,d>=0)if(h>=-g)if(h<=g){const v=1/l;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*u)+c}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*u)+c;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*u)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-u),r),m=-d*d+h*(h+2*u)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-u),r),m=h*(h+2*u)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-u),r),m=-d*d+h*(h+2*u)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hs).addScaledVector(Xi,h),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),s=on.dot(on)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,u;const c=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),l>=0?(r=(e.min.y-h.y)*l,o=(e.max.y-h.y)*l):(r=(e.max.y-h.y)*l,o=(e.min.y-h.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,u=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,u=(e.min.z-h.z)*d),n>u||a>s)||((a>n||n!==n)&&(n=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,s,r){Gs.subVectors(t,e),$i.subVectors(n,e),Vs.crossVectors(Gs,$i);let o=this.direction.dot(Vs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const u=a*this.direction.dot($i.crossVectors(xn,$i));if(u<0)return null;const c=a*this.direction.dot(Gs.cross(xn));if(c<0||u+c>o)return null;const l=-a*xn.dot(Vs);return l<0?null:this.at(l/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,s,r,o,a,u,c,l,d,h,m,g,v,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,u,c,l,d,h,m,g,v,p)}set(e,t,n,s,r,o,a,u,c,l,d,h,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=u,f[2]=c,f[6]=l,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Kn.setFromMatrixColumn(e,0).length(),r=1/Kn.setFromMatrixColumn(e,1).length(),o=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(s),c=Math.sin(s),l=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*l,m=o*d,g=a*l,v=a*d;t[0]=u*l,t[4]=-u*d,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-a*u,t[2]=v-h*c,t[6]=g+m*c,t[10]=o*u}else if(e.order==="YXZ"){const h=u*l,m=u*d,g=c*l,v=c*d;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*l,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*u}else if(e.order==="ZXY"){const h=u*l,m=u*d,g=c*l,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*l,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const h=o*l,m=o*d,g=a*l,v=a*d;t[0]=u*l,t[4]=g*c-m,t[8]=h*c+v,t[1]=u*d,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const h=o*u,m=o*c,g=a*u,v=a*c;t[0]=u*l,t[4]=v-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=m*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*u,m=o*c,g=a*u,v=a*c;t[0]=u*l,t[4]=-d,t[8]=c*l,t[1]=h*d+v,t[5]=o*l,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*l,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ic,e,sc)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),vn.crossVectors(n,Ot),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),vn.crossVectors(n,Ot)),vn.normalize(),qi.crossVectors(Ot,vn),s[0]=vn.x,s[4]=qi.x,s[8]=Ot.x,s[1]=vn.y,s[5]=qi.y,s[9]=Ot.y,s[2]=vn.z,s[6]=qi.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],u=n[8],c=n[12],l=n[1],d=n[5],h=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],T=n[3],M=n[7],b=n[11],A=n[15],C=s[0],w=s[4],V=s[8],_=s[12],E=s[1],Q=s[5],ne=s[9],N=s[13],H=s[2],G=s[6],te=s[10],W=s[14],z=s[3],j=s[7],L=s[11],P=s[15];return r[0]=o*C+a*E+u*H+c*z,r[4]=o*w+a*Q+u*G+c*j,r[8]=o*V+a*ne+u*te+c*L,r[12]=o*_+a*N+u*W+c*P,r[1]=l*C+d*E+h*H+m*z,r[5]=l*w+d*Q+h*G+m*j,r[9]=l*V+d*ne+h*te+m*L,r[13]=l*_+d*N+h*W+m*P,r[2]=g*C+v*E+p*H+f*z,r[6]=g*w+v*Q+p*G+f*j,r[10]=g*V+v*ne+p*te+f*L,r[14]=g*_+v*N+p*W+f*P,r[3]=T*C+M*E+b*H+A*z,r[7]=T*w+M*Q+b*G+A*j,r[11]=T*V+M*ne+b*te+A*L,r[15]=T*_+M*N+b*W+A*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],u=e[9],c=e[13],l=e[2],d=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*u*d-s*c*d-r*a*h+n*c*h+s*a*m-n*u*m)+v*(+t*u*m-t*c*h+r*o*h-s*o*m+s*c*l-r*u*l)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*l-n*c*l)+f*(-s*a*l-t*u*d+t*a*h+s*o*d-n*o*h+n*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],d=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],T=d*p*c-v*h*c+v*u*m-a*p*m-d*u*f+a*h*f,M=g*h*c-l*p*c-g*u*m+o*p*m+l*u*f-o*h*f,b=l*v*c-g*d*c+g*a*m-o*v*m-l*a*f+o*d*f,A=g*d*u-l*v*u-g*a*h+o*v*h+l*a*p-o*d*p,C=t*T+n*M+s*b+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=T*w,e[1]=(v*h*r-d*p*r-v*s*m+n*p*m+d*s*f-n*h*f)*w,e[2]=(a*p*r-v*u*r+v*s*c-n*p*c-a*s*f+n*u*f)*w,e[3]=(d*u*r-a*h*r-d*s*c+n*h*c+a*s*m-n*u*m)*w,e[4]=M*w,e[5]=(l*p*r-g*h*r+g*s*m-t*p*m-l*s*f+t*h*f)*w,e[6]=(g*u*r-o*p*r-g*s*c+t*p*c+o*s*f-t*u*f)*w,e[7]=(o*h*r-l*u*r+l*s*c-t*h*c-o*s*m+t*u*m)*w,e[8]=b*w,e[9]=(g*d*r-l*v*r-g*n*m+t*v*m+l*n*f-t*d*f)*w,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*f+t*a*f)*w,e[11]=(l*a*r-o*d*r-l*n*c+t*d*c+o*n*m-t*a*m)*w,e[12]=A*w,e[13]=(l*v*s-g*d*s+g*n*h-t*v*h-l*n*p+t*d*p)*w,e[14]=(g*a*s-o*v*s-g*n*u+t*v*u+o*n*p-t*a*p)*w,e[15]=(o*d*s-l*a*s+l*n*u-t*d*u-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,u=e.z,c=r*o,l=r*a;return this.set(c*o+n,c*a-s*u,c*u+s*a,0,c*a+s*u,l*a+n,l*u-s*o,0,c*u-s*a,l*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,u=t._w,c=r+r,l=o+o,d=a+a,h=r*c,m=r*l,g=r*d,v=o*l,p=o*d,f=a*d,T=u*c,M=u*l,b=u*d,A=n.x,C=n.y,w=n.z;return s[0]=(1-(v+f))*A,s[1]=(m+b)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(m-b)*C,s[5]=(1-(h+f))*C,s[6]=(p+T)*C,s[7]=0,s[8]=(g+M)*w,s[9]=(p-T)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const o=Kn.set(s[4],s[5],s[6]).length(),a=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);const c=1/r,l=1/o,d=1/a;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=l,$t.elements[5]*=l,$t.elements[6]*=l,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hn){const u=this.elements,c=2*r/(t-e),l=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let m,g;if(a===hn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=l,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hn){const u=this.elements,c=1/(t-e),l=1/(n-s),d=1/(o-r),h=(t+e)*c,m=(n+s)*l;let g,v;if(a===hn)g=(o+r)*d,v=-2*d;else if(a===fs)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-h,u[1]=0,u[5]=2*l,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=v,u[14]=-g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new k,$t=new Tt,ic=new k(0,0,0),sc=new k(1,1,1),vn=new k,qi=new k,Ot=new k,la=new Tt,ca=new Oi;class ms{constructor(e=0,t=0,n=0,s=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],u=s[1],c=s[5],l=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return la.makeRotationFromQuaternion(e),this.setFromRotationMatrix(la,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ca.setFromEuler(this),this.setFromQuaternion(ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rc=0;const ua=new k,Zn=new Oi,ln=new Tt,Yi=new k,bi=new k,ac=new k,oc=new Oi,da=new k(1,0,0),fa=new k(0,1,0),ha=new k(0,0,1),lc={type:"added"},pa={type:"removed"};class Ht extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new k,t=new ms,n=new Oi,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ge}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(da,e)}rotateY(e){return this.rotateOnAxis(fa,e)}rotateZ(e){return this.rotateOnAxis(ha,e)}translateOnAxis(e,t){return ua.copy(e).applyQuaternion(this.quaternion),this.position.add(ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(da,e)}translateY(e){return this.translateOnAxis(fa,e)}translateZ(e){return this.translateOnAxis(ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(bi,Yi,this.up):ln.lookAt(Yi,bi,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(ln),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,ac),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const d=u[c];r(e.shapes,d)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(r(e.materials,this.material[u]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];s.animations.push(r(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),l=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new k(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new k,cn=new k,ks=new k,un=new k,Jn=new k,Qn=new k,ma=new k,Ws=new k,Xs=new k,$s=new k;let ji=!1;class jt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qt.subVectors(s,t),cn.subVectors(n,t),ks.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(cn),u=qt.dot(ks),c=cn.dot(cn),l=cn.dot(ks),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const h=1/d,m=(c*u-a*l)*h,g=(o*l-a*u)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,n,s,r,o,a,u){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),this.getInterpolation(e,t,n,s,r,o,a,u)}static getInterpolation(e,t,n,s,r,o,a,u){return this.getBarycoord(e,t,n,s,un),u.setScalar(0),u.addScaledVector(r,un.x),u.addScaledVector(o,un.y),u.addScaledVector(a,un.z),u}static isFrontFacing(e,t,n,s){return qt.subVectors(n,t),cn.subVectors(e,t),qt.cross(cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),qt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Jn.subVectors(s,n),Qn.subVectors(r,n),Ws.subVectors(e,n);const u=Jn.dot(Ws),c=Qn.dot(Ws);if(u<=0&&c<=0)return t.copy(n);Xs.subVectors(e,s);const l=Jn.dot(Xs),d=Qn.dot(Xs);if(l>=0&&d<=l)return t.copy(s);const h=u*d-l*c;if(h<=0&&u>=0&&l<=0)return o=u/(u-l),t.copy(n).addScaledVector(Jn,o);$s.subVectors(e,r);const m=Jn.dot($s),g=Qn.dot($s);if(g>=0&&m<=g)return t.copy(r);const v=m*c-u*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qn,a);const p=l*g-m*d;if(p<=0&&d-l>=0&&m-g>=0)return ma.subVectors(r,s),a=(d-l)/(d-l+(m-g)),t.copy(s).addScaledVector(ma,a);const f=1/(p+v+h);return o=v*f,a=h*f,t.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cc=0;class gs extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=di,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ka,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const u=r[a];delete u.metadata,o.push(u)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function qs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Xt.workingColorSpace){if(e=Xl(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qs(o,r,e+1/3),this.g=qs(o,r,e),this.b=qs(o,r,e-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(e,t=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){const n=ho[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Xt.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Dt(Ct.r*255,0,255))*65536+Math.round(Dt(Ct.g*255,0,255))*256+Math.round(Dt(Ct.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,s=Ct.g,r=Ct.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let u,c;const l=(a+o)/2;if(a===o)u=0,c=0;else{const d=o-a;switch(c=l<=.5?d/(o+a):d/(2-o-a),o){case n:u=(s-r)/d+(s<r?6:0);break;case s:u=(r-n)/d+2;break;case r:u=(n-s)/d+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ze){Xt.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,s=Ct.b;return e!==ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Ki);const n=Ds(Yt.h,Ki.h,t),s=Ds(Yt.s,Ki.s,t),r=Ds(Yt.l,Ki.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Je;Je.NAMES=ho;class Pi extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new k,Zi=new Ze;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this.updateRange={offset:0,count:-1},this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class po extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mo extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uc=0;const Gt=new Tt,Ys=new Ht,ei=new k,Bt=new Bi,Ti=new Bi,Mt=new k;class wn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oo(e)?mo:po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Ys.lookAt(e),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Bt.min,Ti.min),Bt.expandByPoint(Mt),Mt.addVectors(Bt.max,Ti.max),Bt.expandByPoint(Mt)):(Bt.expandByPoint(Ti.min),Bt.expandByPoint(Ti.max))}Bt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Mt.fromBufferAttribute(a,c),u&&(ei.fromBufferAttribute(e,c),Mt.add(ei)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],l=[];for(let E=0;E<a;E++)c[E]=new k,l[E]=new k;const d=new k,h=new k,m=new k,g=new Ze,v=new Ze,p=new Ze,f=new k,T=new k;function M(E,Q,ne){d.fromArray(s,E*3),h.fromArray(s,Q*3),m.fromArray(s,ne*3),g.fromArray(o,E*2),v.fromArray(o,Q*2),p.fromArray(o,ne*2),h.sub(d),m.sub(d),v.sub(g),p.sub(g);const N=1/(v.x*p.y-p.x*v.y);isFinite(N)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(N),T.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(N),c[E].add(f),c[Q].add(f),c[ne].add(f),l[E].add(T),l[Q].add(T),l[ne].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,Q=b.length;E<Q;++E){const ne=b[E],N=ne.start,H=ne.count;for(let G=N,te=N+H;G<te;G+=3)M(n[G+0],n[G+1],n[G+2])}const A=new k,C=new k,w=new k,V=new k;function _(E){w.fromArray(r,E*3),V.copy(w);const Q=c[E];A.copy(Q),A.sub(w.multiplyScalar(w.dot(Q))).normalize(),C.crossVectors(V,Q);const N=C.dot(l[E])<0?-1:1;u[E*4]=A.x,u[E*4+1]=A.y,u[E*4+2]=A.z,u[E*4+3]=N}for(let E=0,Q=b.length;E<Q;++E){const ne=b[E],N=ne.start,H=ne.count;for(let G=N,te=N+H;G<te;G+=3)_(n[G+0]),_(n[G+1]),_(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new k,r=new k,o=new k,a=new k,u=new k,c=new k,l=new k,d=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),l.subVectors(o,r),d.subVectors(s,r),l.cross(d),a.fromBufferAttribute(n,g),u.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(l),u.add(l),c.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),l.subVectors(o,r),d.subVectors(s,r),l.cross(d),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,u){const c=a.array,l=a.itemSize,d=a.normalized,h=new c.constructor(u.length*l);let m=0,g=0;for(let v=0,p=u.length;v<p;v++){a.isInterleavedBufferAttribute?m=u[v]*a.data.stride+a.offset:m=u[v]*l;for(let f=0;f<l;f++)h[g++]=c[m++]}return new en(h,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,s=this.attributes;for(const a in s){const u=s[a],c=e(u,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const u=[],c=r[a];for(let l=0,d=c.length;l<d;l++){const h=c[l],m=e(h,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const s={};let r=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];l.push(m.toJSON(e.data))}l.length>0&&(s[u]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const l=s[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],d=r[c];for(let h=0,m=d.length;h<m;h++)l.push(d[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,l=o.length;c<l;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ga=new Tt,Un=new nc,Ji=new gr,_a=new k,ti=new k,ni=new k,ii=new k,js=new k,Qi=new k,es=new Ze,ts=new Ze,ns=new Ze,xa=new k,va=new k,Ma=new k,is=new k,ss=new k;class Jt extends Ht{constructor(e=new wn,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qi.set(0,0,0);for(let u=0,c=r.length;u<c;u++){const l=a[u],d=r[u];l!==0&&(js.fromBufferAttribute(d,e),o?Qi.addScaledVector(js,l):Qi.addScaledVector(js.sub(t),l))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(Ji.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Ji,_a)===null||Un.origin.distanceToSquared(_a)>(e.far-e.near)**2))&&(ga.copy(r).invert(),Un.copy(e.ray).applyMatrix4(ga),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,u=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=o[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,A=M;b<A;b+=3){const C=a.getX(b),w=a.getX(b+1),V=a.getX(b+2);s=rs(this,f,e,n,c,l,d,C,w,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const T=a.getX(p),M=a.getX(p+1),b=a.getX(p+2);s=rs(this,o,e,n,c,l,d,T,M,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=o[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(u.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,A=M;b<A;b+=3){const C=b,w=b+1,V=b+2;s=rs(this,f,e,n,c,l,d,C,w,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(u.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const T=p,M=p+1,b=p+2;s=rs(this,o,e,n,c,l,d,T,M,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function dc(i,e,t,n,s,r,o,a){let u;if(e.side===It?u=n.intersectTriangle(o,r,s,!0,a):u=n.intersectTriangle(s,r,o,e.side===An,a),u===null)return null;ss.copy(a),ss.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:i}}function rs(i,e,t,n,s,r,o,a,u,c){i.getVertexPosition(a,ti),i.getVertexPosition(u,ni),i.getVertexPosition(c,ii);const l=dc(i,e,t,n,ti,ni,ii,is);if(l){s&&(es.fromBufferAttribute(s,a),ts.fromBufferAttribute(s,u),ns.fromBufferAttribute(s,c),l.uv=jt.getInterpolation(is,ti,ni,ii,es,ts,ns,new Ze)),r&&(es.fromBufferAttribute(r,a),ts.fromBufferAttribute(r,u),ns.fromBufferAttribute(r,c),l.uv1=jt.getInterpolation(is,ti,ni,ii,es,ts,ns,new Ze),l.uv2=l.uv1),o&&(xa.fromBufferAttribute(o,a),va.fromBufferAttribute(o,u),Ma.fromBufferAttribute(o,c),l.normal=jt.getInterpolation(is,ti,ni,ii,xa,va,Ma,new k),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a,b:u,c,normal:new k,materialIndex:0};jt.getNormal(ti,ni,ii,d.normal),l.face=d}return l}class zi extends wn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const u=[],c=[],l=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(d,2));function g(v,p,f,T,M,b,A,C,w,V,_){const E=b/w,Q=A/V,ne=b/2,N=A/2,H=C/2,G=w+1,te=V+1;let W=0,z=0;const j=new k;for(let L=0;L<te;L++){const P=L*Q-N;for(let $=0;$<G;$++){const oe=$*E-ne;j[v]=oe*T,j[p]=P*M,j[f]=H,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[f]=C>0?1:-1,l.push(j.x,j.y,j.z),d.push($/w),d.push(1-L/V),W+=1}}for(let L=0;L<V;L++)for(let P=0;P<w;P++){const $=h+P+G*L,oe=h+P+G*(L+1),he=h+(P+1)+G*(L+1),pe=h+(P+1)+G*L;u.push($,oe,pe),u.push(oe,he,pe),z+=6}a.addGroup(m,z,_),m+=z,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=gi(i[t]);for(const s in n)e[s]=n[s]}return e}function fc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function go(i){return i.getRenderTarget()===null?i.outputColorSpace:nn}const hc={clone:gi,merge:Pt};var pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pc,this.fragmentShader=mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _o extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends _o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/u,t-=o.offsetY*n/c,s*=o.width/u,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class gc extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new kt(si,ri,e,t);s.layers=this.layers,this.add(s);const r=new kt(si,ri,e,t);r.layers=this.layers,this.add(r);const o=new kt(si,ri,e,t);o.layers=this.layers,this.add(o);const a=new kt(si,ri,e,t);a.layers=this.layers,this.add(a);const u=new kt(si,ri,e,t);u.layers=this.layers,this.add(u);const c=new kt(si,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,u]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,u,c]=this.children,l=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=pn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(l),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class xo extends zt{constructor(e,t,n,s,r,o,a,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,n,s,r,o,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _c extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hn?ze:Gn),this.texture=new xo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zi(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:bn});r.uniforms.tEquirect.value=t;const o=new Jt(s,r),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Vt),new gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ks=new k,xc=new k,vc=new Ge;class In{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ks.subVectors(n,t).cross(xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ks),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vc.getNormalMatrix(e),s=this.coplanarPoint(Ks).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new gr,as=new k;class vo{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],u=s[3],c=s[4],l=s[5],d=s[6],h=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],T=s[13],M=s[14],b=s[15];if(n[0].setComponents(u-r,h-c,p-m,b-f).normalize(),n[1].setComponents(u+r,h+c,p+m,b+f).normalize(),n[2].setComponents(u+o,h+l,p+g,b+T).normalize(),n[3].setComponents(u-o,h-l,p-g,b-T).normalize(),n[4].setComponents(u-a,h-d,p-v,b-M).normalize(),t===hn)n[5].setComponents(u+a,h+d,p+v,b+M).normalize();else if(t===fs)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(as.x=s.normal.x>0?e.max.x:e.min.x,as.y=s.normal.y>0?e.max.y:e.min.y,as.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mo(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,l){const d=c.array,h=c.usage,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,l,d){const h=l.array,m=l.updateRange;i.bindBuffer(d,c),m.count===-1?i.bufferSubData(d,0,h):(t?i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(i.deleteBuffer(l.buffer),n.delete(c))}function u(c,l){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,s(c,l)):d.version<c.version&&(r(d.buffer,c,l),d.version=c.version)}return{get:o,remove:a,update:u}}class _r extends wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),u=Math.floor(s),c=a+1,l=u+1,d=e/a,h=t/u,m=[],g=[],v=[],p=[];for(let f=0;f<l;f++){const T=f*h-o;for(let M=0;M<c;M++){const b=M*d-r;g.push(b,-T,0),v.push(0,0,1),p.push(M/a),p.push(1-f/u)}}for(let f=0;f<u;f++)for(let T=0;T<a;T++){const M=T+c*f,b=T+c*(f+1),A=T+1+c*(f+1),C=T+1+c*f;m.push(M,b,C),m.push(b,A,C)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ec=`#ifdef USE_ALPHAHASH
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
#endif`,yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ac=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Dc=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vc=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,kc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wc=`vec3 transformedNormal = objectNormal;
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
#endif`,Xc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zc=`#ifdef USE_ENVMAP
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
#endif`,Jc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qc=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,au=`#ifdef USE_GRADIENTMAP
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
}`,ou=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,du=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,xu=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,vu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Au=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cu=`#if defined( USE_POINTS_UV )
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
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Du=`#ifdef USE_MORPHNORMALS
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
#endif`,Iu=`#ifdef USE_MORPHTARGETS
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
#endif`,Nu=`#ifdef USE_MORPHTARGETS
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
#endif`,Fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ou=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
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
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,id=`float getShadowMask() {
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
}`,sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rd=`#ifdef USE_SKINNING
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
#endif`,ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,od=`#ifdef USE_SKINNING
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
#endif`,ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fd=`#ifdef USE_TRANSMISSION
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
#endif`,hd=`#ifdef USE_TRANSMISSION
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`#include <common>
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
}`,Td=`#if DEPTH_PACKING == 3200
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
}`,Ad=`#define DISTANCE
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
}`,wd=`#define DISTANCE
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`uniform float scale;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ud=`#include <common>
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
}`,Dd=`uniform vec3 diffuse;
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
}`,Id=`#define LAMBERT
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
}`,Nd=`#define LAMBERT
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
}`,Fd=`#define MATCAP
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
}`,Od=`#define MATCAP
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
}`,Bd=`#define NORMAL
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
}`,zd=`#define NORMAL
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
}`,Hd=`#define PHONG
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
}`,Gd=`#define PHONG
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
}`,Vd=`#define STANDARD
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
}`,kd=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define TOON
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
}`,Xd=`#define TOON
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
}`,$d=`uniform float size;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,jd=`uniform vec3 color;
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
}`,Kd=`uniform float rotation;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Sc,alphahash_pars_fragment:Ec,alphamap_fragment:yc,alphamap_pars_fragment:bc,alphatest_fragment:Tc,alphatest_pars_fragment:Ac,aomap_fragment:wc,aomap_pars_fragment:Rc,begin_vertex:Cc,beginnormal_vertex:Lc,bsdfs:Pc,iridescence_fragment:Uc,bumpmap_pars_fragment:Dc,clipping_planes_fragment:Ic,clipping_planes_pars_fragment:Nc,clipping_planes_pars_vertex:Fc,clipping_planes_vertex:Oc,color_fragment:Bc,color_pars_fragment:zc,color_pars_vertex:Hc,color_vertex:Gc,common:Vc,cube_uv_reflection_fragment:kc,defaultnormal_vertex:Wc,displacementmap_pars_vertex:Xc,displacementmap_vertex:$c,emissivemap_fragment:qc,emissivemap_pars_fragment:Yc,colorspace_fragment:jc,colorspace_pars_fragment:Kc,envmap_fragment:Zc,envmap_common_pars_fragment:Jc,envmap_pars_fragment:Qc,envmap_pars_vertex:eu,envmap_physical_pars_fragment:fu,envmap_vertex:tu,fog_vertex:nu,fog_pars_vertex:iu,fog_fragment:su,fog_pars_fragment:ru,gradientmap_pars_fragment:au,lightmap_fragment:ou,lightmap_pars_fragment:lu,lights_lambert_fragment:cu,lights_lambert_pars_fragment:uu,lights_pars_begin:du,lights_toon_fragment:hu,lights_toon_pars_fragment:pu,lights_phong_fragment:mu,lights_phong_pars_fragment:gu,lights_physical_fragment:_u,lights_physical_pars_fragment:xu,lights_fragment_begin:vu,lights_fragment_maps:Mu,lights_fragment_end:Su,logdepthbuf_fragment:Eu,logdepthbuf_pars_fragment:yu,logdepthbuf_pars_vertex:bu,logdepthbuf_vertex:Tu,map_fragment:Au,map_pars_fragment:wu,map_particle_fragment:Ru,map_particle_pars_fragment:Cu,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Pu,morphcolor_vertex:Uu,morphnormal_vertex:Du,morphtarget_pars_vertex:Iu,morphtarget_vertex:Nu,normal_fragment_begin:Fu,normal_fragment_maps:Ou,normal_pars_fragment:Bu,normal_pars_vertex:zu,normal_vertex:Hu,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Wu,iridescence_pars_fragment:Xu,opaque_fragment:$u,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:ju,dithering_fragment:Ku,dithering_pars_fragment:Zu,roughnessmap_fragment:Ju,roughnessmap_pars_fragment:Qu,shadowmap_pars_fragment:ed,shadowmap_pars_vertex:td,shadowmap_vertex:nd,shadowmask_pars_fragment:id,skinbase_vertex:sd,skinning_pars_vertex:rd,skinning_vertex:ad,skinnormal_vertex:od,specularmap_fragment:ld,specularmap_pars_fragment:cd,tonemapping_fragment:ud,tonemapping_pars_fragment:dd,transmission_fragment:fd,transmission_pars_fragment:hd,uv_pars_fragment:pd,uv_pars_vertex:md,uv_vertex:gd,worldpos_vertex:_d,background_vert:xd,background_frag:vd,backgroundCube_vert:Md,backgroundCube_frag:Sd,cube_vert:Ed,cube_frag:yd,depth_vert:bd,depth_frag:Td,distanceRGBA_vert:Ad,distanceRGBA_frag:wd,equirect_vert:Rd,equirect_frag:Cd,linedashed_vert:Ld,linedashed_frag:Pd,meshbasic_vert:Ud,meshbasic_frag:Dd,meshlambert_vert:Id,meshlambert_frag:Nd,meshmatcap_vert:Fd,meshmatcap_frag:Od,meshnormal_vert:Bd,meshnormal_frag:zd,meshphong_vert:Hd,meshphong_frag:Gd,meshphysical_vert:Vd,meshphysical_frag:kd,meshtoon_vert:Wd,meshtoon_frag:Xd,points_vert:$d,points_frag:qd,shadow_vert:Yd,shadow_frag:jd,sprite_vert:Kd,sprite_frag:Zd},ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Qt={basic:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Pt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Pt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Pt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Pt([ce.common,ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Pt([ce.lights,ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Qt.physical={uniforms:Pt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const os={r:0,b:0,g:0};function Jd(i,e,t,n,s,r,o){const a=new Je(0);let u=r===!0?0:1,c,l,d=null,h=0,m=null;function g(p,f){let T=!1,M=f.isScene===!0?f.background:null;switch(M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,u):M&&M.isColor&&(v(M,1),T=!0),i.xr.getEnvironmentBlendMode()){case"opaque":T=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),T=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),T=!0;break}(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ps)?(l===void 0&&(l=new Jt(new zi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:gi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,w,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=M.colorSpace!==ze,(d!==M||h!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Jt(new _r(2,2),new kn({name:"BackgroundMaterial",uniforms:gi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=M.colorSpace!==ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(os,go(i)),n.buffers.color.setClear(os.r,os.g,os.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),u=f,v(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(p){u=p,v(a,u)},render:g}}function Qd(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},u=p(null);let c=u,l=!1;function d(H,G,te,W,z){let j=!1;if(o){const L=v(W,te,G);c!==L&&(c=L,m(c.object)),j=f(H,W,te,z),j&&T(H,W,te,z)}else{const L=G.wireframe===!0;(c.geometry!==W.id||c.program!==te.id||c.wireframe!==L)&&(c.geometry=W.id,c.program=te.id,c.wireframe=L,j=!0)}z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(j||l)&&(l=!1,V(H,G,te,W),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(H){return n.isWebGL2?i.bindVertexArray(H):r.bindVertexArrayOES(H)}function g(H){return n.isWebGL2?i.deleteVertexArray(H):r.deleteVertexArrayOES(H)}function v(H,G,te){const W=te.wireframe===!0;let z=a[H.id];z===void 0&&(z={},a[H.id]=z);let j=z[G.id];j===void 0&&(j={},z[G.id]=j);let L=j[W];return L===void 0&&(L=p(h()),j[W]=L),L}function p(H){const G=[],te=[],W=[];for(let z=0;z<s;z++)G[z]=0,te[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:te,attributeDivisors:W,object:H,attributes:{},index:null}}function f(H,G,te,W){const z=c.attributes,j=G.attributes;let L=0;const P=te.getAttributes();for(const $ in P)if(P[$].location>=0){const he=z[$];let pe=j[$];if(pe===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(pe=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(pe=H.instanceColor)),he===void 0||he.attribute!==pe||pe&&he.data!==pe.data)return!0;L++}return c.attributesNum!==L||c.index!==W}function T(H,G,te,W){const z={},j=G.attributes;let L=0;const P=te.getAttributes();for(const $ in P)if(P[$].location>=0){let he=j[$];he===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(he=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(he=H.instanceColor));const pe={};pe.attribute=he,he&&he.data&&(pe.data=he.data),z[$]=pe,L++}c.attributes=z,c.attributesNum=L,c.index=W}function M(){const H=c.newAttributes;for(let G=0,te=H.length;G<te;G++)H[G]=0}function b(H){A(H,0)}function A(H,G){const te=c.newAttributes,W=c.enabledAttributes,z=c.attributeDivisors;te[H]=1,W[H]===0&&(i.enableVertexAttribArray(H),W[H]=1),z[H]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,G),z[H]=G)}function C(){const H=c.newAttributes,G=c.enabledAttributes;for(let te=0,W=G.length;te<W;te++)G[te]!==H[te]&&(i.disableVertexAttribArray(te),G[te]=0)}function w(H,G,te,W,z,j,L){L===!0?i.vertexAttribIPointer(H,G,te,z,j):i.vertexAttribPointer(H,G,te,W,z,j)}function V(H,G,te,W){if(n.isWebGL2===!1&&(H.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const z=W.attributes,j=te.getAttributes(),L=G.defaultAttributeValues;for(const P in j){const $=j[P];if($.location>=0){let oe=z[P];if(oe===void 0&&(P==="instanceMatrix"&&H.instanceMatrix&&(oe=H.instanceMatrix),P==="instanceColor"&&H.instanceColor&&(oe=H.instanceColor)),oe!==void 0){const he=oe.normalized,pe=oe.itemSize,ye=t.get(oe);if(ye===void 0)continue;const Ce=ye.buffer,Te=ye.type,ke=ye.bytesPerElement,St=n.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||oe.gpuType===Qa);if(oe.isInterleavedBufferAttribute){const Fe=oe.data,F=Fe.stride,ut=oe.offset;if(Fe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<$.locationSize;Ae++)A($.location+Ae,Fe.meshPerAttribute);H.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Ae=0;Ae<$.locationSize;Ae++)b($.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<$.locationSize;Ae++)w($.location+Ae,pe/$.locationSize,Te,he,F*ke,(ut+pe/$.locationSize*Ae)*ke,St)}else{if(oe.isInstancedBufferAttribute){for(let Fe=0;Fe<$.locationSize;Fe++)A($.location+Fe,oe.meshPerAttribute);H.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Fe=0;Fe<$.locationSize;Fe++)b($.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Fe=0;Fe<$.locationSize;Fe++)w($.location+Fe,pe/$.locationSize,Te,he,pe*ke,pe/$.locationSize*Fe*ke,St)}}else if(L!==void 0){const he=L[P];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv($.location,he);break;case 3:i.vertexAttrib3fv($.location,he);break;case 4:i.vertexAttrib4fv($.location,he);break;default:i.vertexAttrib1fv($.location,he)}}}}C()}function _(){ne();for(const H in a){const G=a[H];for(const te in G){const W=G[te];for(const z in W)g(W[z].object),delete W[z];delete G[te]}delete a[H]}}function E(H){if(a[H.id]===void 0)return;const G=a[H.id];for(const te in G){const W=G[te];for(const z in W)g(W[z].object),delete W[z];delete G[te]}delete a[H.id]}function Q(H){for(const G in a){const te=a[G];if(te[H.id]===void 0)continue;const W=te[H.id];for(const z in W)g(W[z].object),delete W[z];delete te[H.id]}}function ne(){N(),l=!0,c!==u&&(c=u,m(c.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:N,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:Q,initAttributes:M,enableAttribute:b,disableUnusedAttributes:C}}function ef(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,l){i.drawArrays(r,c,l),t.update(l,r,1)}function u(c,l,d){if(d===0)return;let h,m;if(s)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,l,d),t.update(l,r,d)}this.setMode=o,this.render=a,this.renderInstances=u}function tf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const u=r(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,b=o||e.has("OES_texture_float"),A=M&&b,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:C}}function nf(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new In,a=new Ge,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=l(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?l(null):c();else{const T=r?0:n,M=T*4;let b=f.clippingState||null;u.value=b,b=l(g,h,M,m);for(let A=0;A!==M;++A)b[A]=t[A];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(d,h,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=u.value,g!==!0||p===null){const f=m+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,b=m;M!==v;++M,b+=4)o.copy(d[M]).applyMatrix4(T,a),o.normal.toArray(p,b),p[b+3]=o.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function sf(i){let e=new WeakMap;function t(o,a){return a===rr?o.mapping=hi:a===ar&&(o.mapping=pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===rr||a===ar)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new _c(u.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class rf extends _o{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,u=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,Sa=[.125,.215,.35,.446,.526,.582],Fn=20,Zs=new rf,Ea=new Je;let Js=null;const Nn=(1+Math.sqrt(5))/2,ai=1/Nn,ya=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Nn,ai),new k(0,Nn,-ai),new k(ai,0,Nn),new k(-ai,0,Nn),new k(Nn,ai,0),new k(-Nn,ai,0)];class ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Js=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Js),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Ii,format:Zt,colorSpace:nn,depthBuffer:!1},s=Ta(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ta(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=af(r)),this._blurMaterial=of(r,e,t)}return s}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,n,s){const a=new kt(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,h=l.toneMapping;l.getClearColor(Ea),l.toneMapping=pn,l.autoClear=!1;const m=new Pi({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new Jt(new zi,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Ea),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,u[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,u[f]),a.lookAt(0,c[f],0)):(a.up.set(0,u[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;ls(s,T*M,f>2?M:0,M,M),l.setRenderTarget(s),v&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=h,l.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hi||e.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Aa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const u=this._cubeSize;ls(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ya[(s-1)%ya.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Jt(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),v=r/g,p=isFinite(r)?1+Math.floor(l*v):Fn;p>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const f=[];let T=0;for(let w=0;w<Fn;++w){const V=w/v,_=Math.exp(-V*V/2);f.push(_),w===0?T+=_:w<p&&(T+=2*_)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const b=this._sizeLods[s],A=3*b*(s>M-ci?s-M+ci:0),C=4*(this._cubeSize-b);ls(t,A,C,3*b,2*b),u.setRenderTarget(t),u.render(d,Zs)}}function af(i){const e=[],t=[],n=[];let s=i;const r=i-ci+1+Sa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let u=1/a;o>i-ci?u=Sa[o-i+ci-1]:o===0&&(u=0),n.push(u);const c=1/(a-2),l=-c,d=1+c,h=[l,l,d,l,d,d,l,l,d,d,l,d],m=6,g=6,v=3,p=2,f=1,T=new Float32Array(v*g*m),M=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,V=C>2?0:-1,_=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];T.set(_,v*g*C),M.set(h,p*g*C);const E=[C,C,C,C,C,C];b.set(E,f*g*C)}const A=new wn;A.setAttribute("position",new en(T,v)),A.setAttribute("uv",new en(M,p)),A.setAttribute("faceIndex",new en(b,f)),e.push(A),s>ci&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ta(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function of(i,e,t){const n=new Float32Array(Fn),s=new k(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Aa(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function wa(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function xr(){return`

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
	`}function lf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===rr||u===ar,l=u===hi||u===pi;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ba(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||l&&d&&s(d)){t===null&&(t=new ba(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function r(a){const u=a.target;u.removeEventListener("dispose",r);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function uf(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function u(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let M=0,b=T.length;M<b;M+=3){const A=T[M+0],C=T[M+1],w=T[M+2];h.push(A,C,C,w,w,A)}}else{const T=g.array;v=g.version;for(let M=0,b=T.length/3-1;M<b;M+=3){const A=M+0,C=M+1,w=M+2;h.push(A,C,C,w,w,A)}}const p=new(oo(h)?mo:po)(h,1);p.version=v;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function l(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:u,getWireframeAttribute:l}}function df(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,u;function c(h){a=h.type,u=h.bytesPerElement}function l(h,m){i.drawElements(r,m,a,h*u),t.update(m,r,1)}function d(h,m,g){if(g===0)return;let v,p;if(s)v=i,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](r,m,a,h*u,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=d}function ff(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hf(i,e){return i[0]-e[0]}function pf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function mf(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,l,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=g!==void 0?g.length:0;let p=r.get(l);if(p===void 0||p.count!==v){let G=function(){N.dispose(),r.delete(l),l.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const M=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,A=l.morphAttributes.color!==void 0,C=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],V=l.morphAttributes.color||[];let _=0;M===!0&&(_=1),b===!0&&(_=2),A===!0&&(_=3);let E=l.attributes.position.count*_,Q=1;E>e.maxTextureSize&&(Q=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const ne=new Float32Array(E*Q*4*v),N=new uo(ne,E,Q,v);N.type=yn,N.needsUpdate=!0;const H=_*4;for(let te=0;te<v;te++){const W=C[te],z=w[te],j=V[te],L=E*Q*4*te;for(let P=0;P<W.count;P++){const $=P*H;M===!0&&(o.fromBufferAttribute(W,P),ne[L+$+0]=o.x,ne[L+$+1]=o.y,ne[L+$+2]=o.z,ne[L+$+3]=0),b===!0&&(o.fromBufferAttribute(z,P),ne[L+$+4]=o.x,ne[L+$+5]=o.y,ne[L+$+6]=o.z,ne[L+$+7]=0),A===!0&&(o.fromBufferAttribute(j,P),ne[L+$+8]=o.x,ne[L+$+9]=o.y,ne[L+$+10]=o.z,ne[L+$+11]=j.itemSize===4?o.w:1)}}p={count:v,texture:N,size:new Ze(E,Q)},r.set(l,p),l.addEventListener("dispose",G)}let f=0;for(let M=0;M<h.length;M++)f+=h[M];const T=l.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let v=n[l.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];n[l.id]=v}for(let b=0;b<g;b++){const A=v[b];A[0]=b,A[1]=h[b]}v.sort(pf);for(let b=0;b<8;b++)b<g&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(hf);const p=l.morphAttributes.position,f=l.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const A=a[b],C=A[0],w=A[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&l.getAttribute("morphTarget"+b)!==p[C]&&l.setAttribute("morphTarget"+b,p[C]),f&&l.getAttribute("morphNormal"+b)!==f[C]&&l.setAttribute("morphNormal"+b,f[C]),s[b]=w,T+=w):(p&&l.hasAttribute("morphTarget"+b)===!0&&l.deleteAttribute("morphTarget"+b),f&&l.hasAttribute("morphNormal"+b)===!0&&l.deleteAttribute("morphNormal"+b),s[b]=0)}const M=l.morphTargetsRelative?1:1-T;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:u}}function gf(i,e,t,n){let s=new WeakMap;function r(u){const c=n.render.frame,l=u.geometry,d=e.get(u,l);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),s.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const So=new zt,Eo=new uo,yo=new ec,bo=new xo,Ra=[],Ca=[],La=new Float32Array(16),Pa=new Float32Array(9),Ua=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ra[s];if(r===void 0&&(r=new Float32Array(s),Ra[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _s(i,e){let t=Ca[e];t===void 0&&(t=new Int32Array(e),Ca[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Ua.set(n),i.uniformMatrix2fv(this.addr,!1,Ua),xt(t,n)}}function Ef(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Pa.set(n),i.uniformMatrix3fv(this.addr,!1,Pa),xt(t,n)}}function yf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;La.set(n),i.uniformMatrix4fv(this.addr,!1,La),xt(t,n)}}function bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Rf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Uf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||So,s)}function Df(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yo,s)}function If(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bo,s)}function Nf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eo,s)}function Ff(i){switch(i){case 5126:return _f;case 35664:return xf;case 35665:return vf;case 35666:return Mf;case 35674:return Sf;case 35675:return Ef;case 35676:return yf;case 5124:case 35670:return bf;case 35667:case 35671:return Tf;case 35668:case 35672:return Af;case 35669:case 35673:return wf;case 5125:return Rf;case 36294:return Cf;case 36295:return Lf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Nf}}function Of(i,e){i.uniform1fv(this.addr,e)}function Bf(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function zf(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Hf(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function Gf(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vf(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kf(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wf(i,e){i.uniform1iv(this.addr,e)}function Xf(i,e){i.uniform2iv(this.addr,e)}function $f(i,e){i.uniform3iv(this.addr,e)}function qf(i,e){i.uniform4iv(this.addr,e)}function Yf(i,e){i.uniform1uiv(this.addr,e)}function jf(i,e){i.uniform2uiv(this.addr,e)}function Kf(i,e){i.uniform3uiv(this.addr,e)}function Zf(i,e){i.uniform4uiv(this.addr,e)}function Jf(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||So,r[o])}function Qf(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yo,r[o])}function eh(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bo,r[o])}function th(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Eo,r[o])}function nh(i){switch(i){case 5126:return Of;case 35664:return Bf;case 35665:return zf;case 35666:return Hf;case 35674:return Gf;case 35675:return Vf;case 35676:return kf;case 5124:case 35670:return Wf;case 35667:case 35671:return Xf;case 35668:case 35672:return $f;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return jf;case 36295:return Kf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return eh;case 36289:case 36303:case 36311:case 36292:return th}}class ih{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ff(t.type)}}class sh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=nh(t.type)}}class rh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Da(i,e){i.seq.push(e),i.map[e.id]=e}function ah(i,e,t){const n=i.name,s=n.length;for(Qs.lastIndex=0;;){const r=Qs.exec(n),o=Qs.lastIndex;let a=r[1];const u=r[2]==="]",c=r[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===s){Da(t,c===void 0?new ih(a,i,e):new sh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new rh(a),Da(t,d)),t=d}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ah(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ia(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let oh=0;function lh(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ch(i){switch(i){case nn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Na(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lh(i.getShaderSource(e),o)}else return s}function uh(i,e){const t=ch(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dh(i,e){let t;switch(e){case _l:t="Linear";break;case xl:t="Reinhard";break;case vl:t="OptimizedCineon";break;case Ml:t="ACESFilmic";break;case Sl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fh(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function hh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ph(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ai(i){return i!==""}function Fa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mh=/^[ \t]*#include +<([\w\d./]+)>/gm;function fr(i){return i.replace(mh,_h)}const gh=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _h(i,e){let t=Be[e];if(t===void 0){const n=gh.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fr(t)}const xh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(i){return i.replace(xh,vh)}function vh(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function za(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sh(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case pi:e="ENVMAP_TYPE_CUBE";break;case ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eh(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function yh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Za:e="ENVMAP_BLENDING_MULTIPLY";break;case ml:e="ENVMAP_BLENDING_MIX";break;case gl:e="ENVMAP_BLENDING_ADD";break}return e}function bh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Th(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=Mh(t),c=Sh(t),l=Eh(t),d=yh(t),h=bh(t),m=t.isWebGL2?"":fh(t),g=hh(r),v=s.createProgram();let p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ai).join(`
`),f.length>0&&(f+=`
`)):(p=[za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),f=[m,za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Be.tonemapping_pars_fragment:"",t.toneMapping!==pn?dh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,uh("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),o=fr(o),o=Fa(o,t),o=Oa(o,t),a=fr(a),a=Fa(a,t),a=Oa(a,t),o=Ba(o),a=Ba(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=T+p+o,b=T+f+a,A=Ia(s,s.VERTEX_SHADER,M),C=Ia(s,s.FRAGMENT_SHADER,b);if(s.attachShader(v,A),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v),i.debug.checkShaderErrors){const _=s.getProgramInfoLog(v).trim(),E=s.getShaderInfoLog(A).trim(),Q=s.getShaderInfoLog(C).trim();let ne=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,C);else{const H=Na(s,A,"vertex"),G=Na(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Program Info Log: `+_+`
`+H+`
`+G)}else _!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_):(E===""||Q==="")&&(N=!1);N&&(this.diagnostics={runnable:ne,programLog:_,vertexShader:{log:E,prefix:p},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(A),s.deleteShader(C);let w;this.getUniforms=function(){return w===void 0&&(w=new ds(s,v)),w};let V;return this.getAttributes=function(){return V===void 0&&(V=ph(s,v)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oh++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let Ah=0;class wh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}}class Rh{constructor(e){this.id=Ah++,this.code=e,this.usedTimes=0}}function Ch(i,e,t,n,s,r,o){const a=new fo,u=new wh,c=[],l=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return _===0?"uv":`uv${_}`}function p(_,E,Q,ne,N){const H=ne.fog,G=N.geometry,te=_.isMeshStandardMaterial?ne.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||te),z=W&&W.mapping===ps?W.image.height:null,j=g[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const L=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,P=L!==void 0?L.length:0;let $=0;G.morphAttributes.position!==void 0&&($=1),G.morphAttributes.normal!==void 0&&($=2),G.morphAttributes.color!==void 0&&($=3);let oe,he,pe,ye;if(j){const At=Qt[j];oe=At.vertexShader,he=At.fragmentShader}else oe=_.vertexShader,he=_.fragmentShader,u.update(_),pe=u.getVertexShaderID(_),ye=u.getFragmentShaderID(_);const Ce=i.getRenderTarget(),Te=N.isInstancedMesh===!0,ke=!!_.map,St=!!_.matcap,Fe=!!W,F=!!_.aoMap,ut=!!_.lightMap,Ae=!!_.bumpMap,Le=!!_.normalMap,Re=!!_.displacementMap,Ke=!!_.emissiveMap,He=!!_.metalnessMap,De=!!_.roughnessMap,$e=_.anisotropy>0,lt=_.clearcoat>0,mt=_.iridescence>0,y=_.sheen>0,x=_.transmission>0,Y=$e&&!!_.anisotropyMap,re=lt&&!!_.clearcoatMap,se=lt&&!!_.clearcoatNormalMap,de=lt&&!!_.clearcoatRoughnessMap,ve=mt&&!!_.iridescenceMap,fe=mt&&!!_.iridescenceThicknessMap,Z=y&&!!_.sheenColorMap,Ee=y&&!!_.sheenRoughnessMap,Se=!!_.specularMap,be=!!_.specularColorMap,ge=!!_.specularIntensityMap,_e=x&&!!_.transmissionMap,Ie=x&&!!_.thicknessMap,qe=!!_.gradientMap,R=!!_.alphaMap,ue=_.alphaTest>0,X=!!_.alphaHash,ae=!!_.extensions,le=!!G.attributes.uv1,We=!!G.attributes.uv2,Ye=!!G.attributes.uv3;return{isWebGL2:l,shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:oe,fragmentShader:he,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:Te,instancingColor:Te&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:nn,map:ke,matcap:St,envMap:Fe,envMapMode:Fe&&W.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:ut,bumpMap:Ae,normalMap:Le,displacementMap:h&&Re,emissiveMap:Ke,normalMapObjectSpace:Le&&_.normalMapType===Nl,normalMapTangentSpace:Le&&_.normalMapType===Il,metalnessMap:He,roughnessMap:De,anisotropy:$e,anisotropyMap:Y,clearcoat:lt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:de,iridescence:mt,iridescenceMap:ve,iridescenceThicknessMap:fe,sheen:y,sheenColorMap:Z,sheenRoughnessMap:Ee,specularMap:Se,specularColorMap:be,specularIntensityMap:ge,transmission:x,transmissionMap:_e,thicknessMap:Ie,gradientMap:qe,opaque:_.transparent===!1&&_.blending===di,alphaMap:R,alphaTest:ue,alphaHash:X,combine:_.combine,mapUv:ke&&v(_.map.channel),aoMapUv:F&&v(_.aoMap.channel),lightMapUv:ut&&v(_.lightMap.channel),bumpMapUv:Ae&&v(_.bumpMap.channel),normalMapUv:Le&&v(_.normalMap.channel),displacementMapUv:Re&&v(_.displacementMap.channel),emissiveMapUv:Ke&&v(_.emissiveMap.channel),metalnessMapUv:He&&v(_.metalnessMap.channel),roughnessMapUv:De&&v(_.roughnessMap.channel),anisotropyMapUv:Y&&v(_.anisotropyMap.channel),clearcoatMapUv:re&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(_.sheenRoughnessMap.channel),specularMapUv:Se&&v(_.specularMap.channel),specularColorMapUv:be&&v(_.specularColorMap.channel),specularIntensityMapUv:ge&&v(_.specularIntensityMap.channel),transmissionMapUv:_e&&v(_.transmissionMap.channel),thicknessMapUv:Ie&&v(_.thicknessMap.channel),alphaMapUv:R&&v(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||$e),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:We,vertexUv3s:Ye,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(ke||R),fog:!!H,useFog:_.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:$,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:pn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===It,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ae&&_.extensions.derivatives===!0,extensionFragDepth:ae&&_.extensions.fragDepth===!0,extensionDrawBuffers:ae&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const Q in _.defines)E.push(Q),E.push(_.defines[Q]);return _.isRawShaderMaterial===!1&&(T(E,_),M(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function T(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),_.push(a.mask)}function b(_){const E=g[_.type];let Q;if(E){const ne=Qt[E];Q=hc.clone(ne.uniforms)}else Q=_.uniforms;return Q}function A(_,E){let Q;for(let ne=0,N=c.length;ne<N;ne++){const H=c[ne];if(H.cacheKey===E){Q=H,++Q.usedTimes;break}}return Q===void 0&&(Q=new Th(i,E,_,r),c.push(Q)),Q}function C(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function w(_){u.remove(_)}function V(){u.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:V}}function Lh(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ha(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ga(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,m,g,v,p){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=p),e++,f}function a(d,h,m,g,v,p){const f=o(d,h,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function u(d,h,m,g,v,p){const f=o(d,h,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Ph),n.length>1&&n.sort(h||Ha),s.length>1&&s.sort(h||Ha)}function l(){for(let d=e,h=i.length;d<h;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:l,sort:c}}function Uh(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ga,i.set(n,[o])):s>=r.length?(o=new Ga,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Je};break;case"SpotLight":t={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Ih(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Nh=0;function Fh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Oh(i,e){const t=new Dh,n=Ih(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)s.probe.push(new k);const r=new k,o=new Tt,a=new Tt;function u(l,d){let h=0,m=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let v=0,p=0,f=0,T=0,M=0,b=0,A=0,C=0,w=0,V=0;l.sort(Fh);const _=d===!0?Math.PI:1;for(let Q=0,ne=l.length;Q<ne;Q++){const N=l[Q],H=N.color,G=N.intensity,te=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=H.r*G*_,m+=H.g*G*_,g+=H.b*G*_;else if(N.isLightProbe)for(let z=0;z<9;z++)s.probe[z].addScaledVector(N.sh.coefficients[z],G);else if(N.isDirectionalLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity*_),N.castShadow){const j=N.shadow,L=n.get(N);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,s.directionalShadow[v]=L,s.directionalShadowMap[v]=W,s.directionalShadowMatrix[v]=N.shadow.matrix,b++}s.directional[v]=z,v++}else if(N.isSpotLight){const z=t.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(H).multiplyScalar(G*_),z.distance=te,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,s.spot[f]=z;const j=N.shadow;if(N.map&&(s.spotLightMap[w]=N.map,w++,j.updateMatrices(N),N.castShadow&&V++),s.spotLightMatrix[f]=j.matrix,N.castShadow){const L=n.get(N);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,s.spotShadow[f]=L,s.spotShadowMap[f]=W,C++}f++}else if(N.isRectAreaLight){const z=t.get(N);z.color.copy(H).multiplyScalar(G),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),s.rectArea[T]=z,T++}else if(N.isPointLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity*_),z.distance=N.distance,z.decay=N.decay,N.castShadow){const j=N.shadow,L=n.get(N);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,L.shadowCameraNear=j.camera.near,L.shadowCameraFar=j.camera.far,s.pointShadow[p]=L,s.pointShadowMap[p]=W,s.pointShadowMatrix[p]=N.shadow.matrix,A++}s.point[p]=z,p++}else if(N.isHemisphereLight){const z=t.get(N);z.skyColor.copy(N.color).multiplyScalar(G*_),z.groundColor.copy(N.groundColor).multiplyScalar(G*_),s.hemi[M]=z,M++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==v||E.pointLength!==p||E.spotLength!==f||E.rectAreaLength!==T||E.hemiLength!==M||E.numDirectionalShadows!==b||E.numPointShadows!==A||E.numSpotShadows!==C||E.numSpotMaps!==w)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=T,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=C+w-V,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=V,E.directionalLength=v,E.pointLength=p,E.spotLength=f,E.rectAreaLength=T,E.hemiLength=M,E.numDirectionalShadows=b,E.numPointShadows=A,E.numSpotShadows=C,E.numSpotMaps=w,s.version=Nh++)}function c(l,d){let h=0,m=0,g=0,v=0,p=0;const f=d.matrixWorldInverse;for(let T=0,M=l.length;T<M;T++){const b=l[T];if(b.isDirectionalLight){const A=s.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),h++}else if(b.isSpotLight){const A=s.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const A=s.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const A=s.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const A=s.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:u,setupView:c,state:s}}function Va(i,e){const t=new Oh(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function u(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a}}function Bh(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let u;return a===void 0?(u=new Va(i,e),t.set(r,[u])):o>=a.length?(u=new Va(i,e),a.push(u)):u=a[o],u}function s(){t=new WeakMap}return{get:n,dispose:s}}class zh extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hh extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vh=`uniform sampler2D shadow_pass;
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
}`;function kh(i,e,t){let n=new vo;const s=new Ze,r=new Ze,o=new bt,a=new zh({depthPacking:Dl}),u=new Hh,c={},l=t.maxTextureSize,d={[An]:It,[It]:An,[fn]:fn},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Gh,fragmentShader:Vh}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let f=this.type;this.render=function(A,C,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const V=i.getRenderTarget(),_=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(bn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ne=f!==dn&&this.type===dn,N=f===dn&&this.type!==dn;for(let H=0,G=A.length;H<G;H++){const te=A[H],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const z=W.getFrameExtents();if(s.multiply(z),r.copy(W.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/z.x),s.x=r.x*z.x,W.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/z.y),s.y=r.y*z.y,W.mapSize.y=r.y)),W.map===null||ne===!0||N===!0){const L=this.type!==dn?{minFilter:Ut,magFilter:Ut}:{};W.map!==null&&W.map.dispose(),W.map=new Vn(s.x,s.y,L),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const j=W.getViewportCount();for(let L=0;L<j;L++){const P=W.getViewport(L);o.set(r.x*P.x,r.y*P.y,r.x*P.z,r.y*P.w),Q.viewport(o),W.updateMatrices(te,L),n=W.getFrustum(),b(C,w,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===dn&&T(W,w),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(V,_,E)};function T(A,C){const w=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,w,h,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,w,m,v,null)}function M(A,C,w,V){let _=null;const E=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)_=E;else if(_=w.isPointLight===!0?u:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Q=_.uuid,ne=C.uuid;let N=c[Q];N===void 0&&(N={},c[Q]=N);let H=N[ne];H===void 0&&(H=_.clone(),N[ne]=H),_=H}if(_.visible=C.visible,_.wireframe=C.wireframe,V===dn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:d[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const Q=i.properties.get(_);Q.light=w}return _}function b(A,C,w,V,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const ne=e.update(A),N=A.material;if(Array.isArray(N)){const H=ne.groups;for(let G=0,te=H.length;G<te;G++){const W=H[G],z=N[W.materialIndex];if(z&&z.visible){const j=M(A,z,V,_);i.renderBufferDirect(w,null,ne,j,A,W)}}}else if(N.visible){const H=M(A,N,V,_);i.renderBufferDirect(w,null,ne,H,A,null)}}const Q=A.children;for(let ne=0,N=Q.length;ne<N;ne++)b(Q[ne],C,w,V,_)}}function Wh(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const ue=new bt;let X=null;const ae=new bt(0,0,0,0);return{setMask:function(le){X!==le&&!R&&(i.colorMask(le,le,le,le),X=le)},setLocked:function(le){R=le},setClear:function(le,We,Ye,ft,At){At===!0&&(le*=ft,We*=ft,Ye*=ft),ue.set(le,We,Ye,ft),ae.equals(ue)===!1&&(i.clearColor(le,We,Ye,ft),ae.copy(ue))},reset:function(){R=!1,X=null,ae.set(-1,0,0,0)}}}function r(){let R=!1,ue=null,X=null,ae=null;return{setTest:function(le){le?Ce(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(le){ue!==le&&!R&&(i.depthMask(le),ue=le)},setFunc:function(le){if(X!==le){switch(le){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case ul:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case fl:i.depthFunc(i.GEQUAL);break;case hl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=le}},setLocked:function(le){R=le},setClear:function(le){ae!==le&&(i.clearDepth(le),ae=le)},reset:function(){R=!1,ue=null,X=null,ae=null}}}function o(){let R=!1,ue=null,X=null,ae=null,le=null,We=null,Ye=null,ft=null,At=null;return{setTest:function(Qe){R||(Qe?Ce(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!R&&(i.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,wt,Et){(X!==Qe||ae!==wt||le!==Et)&&(i.stencilFunc(Qe,wt,Et),X=Qe,ae=wt,le=Et)},setOp:function(Qe,wt,Et){(We!==Qe||Ye!==wt||ft!==Et)&&(i.stencilOp(Qe,wt,Et),We=Qe,Ye=wt,ft=Et)},setLocked:function(Qe){R=Qe},setClear:function(Qe){At!==Qe&&(i.clearStencil(Qe),At=Qe)},reset:function(){R=!1,ue=null,X=null,ae=null,le=null,We=null,Ye=null,ft=null,At=null}}}const a=new s,u=new r,c=new o,l=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,v=[],p=null,f=!1,T=null,M=null,b=null,A=null,C=null,w=null,V=null,_=!1,E=null,Q=null,ne=null,N=null,H=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,W=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),te=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),te=W>=2);let j=null,L={};const P=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),oe=new bt().fromArray(P),he=new bt().fromArray($);function pe(R,ue,X,ae){const le=new Uint8Array(4),We=i.createTexture();i.bindTexture(R,We),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<X;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ue,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ue+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return We}const ye={};ye[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Ce(i.DEPTH_TEST),u.setFunc(sr),Re(!1),Ke(wr),Ce(i.CULL_FACE),Ae(bn);function Ce(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Te(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function ke(R,ue){return m[R]!==ue?(i.bindFramebuffer(R,ue),m[R]=ue,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ue),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ue)),!0):!1}function St(R,ue){let X=v,ae=!1;if(R)if(X=g.get(ue),X===void 0&&(X=[],g.set(ue,X)),R.isWebGLMultipleRenderTargets){const le=R.texture;if(X.length!==le.length||X[0]!==i.COLOR_ATTACHMENT0){for(let We=0,Ye=le.length;We<Ye;We++)X[We]=i.COLOR_ATTACHMENT0+We;X.length=le.length,ae=!0}}else X[0]!==i.COLOR_ATTACHMENT0&&(X[0]=i.COLOR_ATTACHMENT0,ae=!0);else X[0]!==i.BACK&&(X[0]=i.BACK,ae=!0);ae&&(t.isWebGL2?i.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Fe(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const F={[li]:i.FUNC_ADD,[Zo]:i.FUNC_SUBTRACT,[Jo]:i.FUNC_REVERSE_SUBTRACT};if(n)F[Pr]=i.MIN,F[Ur]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(F[Pr]=R.MIN_EXT,F[Ur]=R.MAX_EXT)}const ut={[Qo]:i.ZERO,[el]:i.ONE,[tl]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[ol]:i.SRC_ALPHA_SATURATE,[rl]:i.DST_COLOR,[il]:i.DST_ALPHA,[nl]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[al]:i.ONE_MINUS_DST_COLOR,[sl]:i.ONE_MINUS_DST_ALPHA};function Ae(R,ue,X,ae,le,We,Ye,ft){if(R===bn){f===!0&&(Te(i.BLEND),f=!1);return}if(f===!1&&(Ce(i.BLEND),f=!0),R!==Ko){if(R!==T||ft!==_){if((M!==li||C!==li)&&(i.blendEquation(i.FUNC_ADD),M=li,C=li),ft)switch(R){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rr:i.blendFunc(i.ONE,i.ONE);break;case Cr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,A=null,w=null,V=null,T=R,_=ft}return}le=le||ue,We=We||X,Ye=Ye||ae,(ue!==M||le!==C)&&(i.blendEquationSeparate(F[ue],F[le]),M=ue,C=le),(X!==b||ae!==A||We!==w||Ye!==V)&&(i.blendFuncSeparate(ut[X],ut[ae],ut[We],ut[Ye]),b=X,A=ae,w=We,V=Ye),T=R,_=!1}function Le(R,ue){R.side===fn?Te(i.CULL_FACE):Ce(i.CULL_FACE);let X=R.side===It;ue&&(X=!X),Re(X),R.blending===di&&R.transparent===!1?Ae(bn):Ae(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),u.setFunc(R.depthFunc),u.setTest(R.depthTest),u.setMask(R.depthWrite),a.setMask(R.colorWrite);const ae=R.stencilWrite;c.setTest(ae),ae&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),De(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(R){E!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),E=R)}function Ke(R){R!==qo?(Ce(i.CULL_FACE),R!==Q&&(R===wr?i.cullFace(i.BACK):R===Yo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),Q=R}function He(R){R!==ne&&(te&&i.lineWidth(R),ne=R)}function De(R,ue,X){R?(Ce(i.POLYGON_OFFSET_FILL),(N!==ue||H!==X)&&(i.polygonOffset(ue,X),N=ue,H=X)):Te(i.POLYGON_OFFSET_FILL)}function $e(R){R?Ce(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function lt(R){R===void 0&&(R=i.TEXTURE0+G-1),j!==R&&(i.activeTexture(R),j=R)}function mt(R,ue,X){X===void 0&&(j===null?X=i.TEXTURE0+G-1:X=j);let ae=L[X];ae===void 0&&(ae={type:void 0,texture:void 0},L[X]=ae),(ae.type!==R||ae.texture!==ue)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(R,ue||ye[R]),ae.type=R,ae.texture=ue)}function y(){const R=L[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function x(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(R){oe.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),oe.copy(R))}function ge(R){he.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),he.copy(R))}function _e(R,ue){let X=d.get(ue);X===void 0&&(X=new WeakMap,d.set(ue,X));let ae=X.get(R);ae===void 0&&(ae=i.getUniformBlockIndex(ue,R.name),X.set(R,ae))}function Ie(R,ue){const ae=d.get(ue).get(R);l.get(ue)!==ae&&(i.uniformBlockBinding(ue,ae,R.__bindingPointIndex),l.set(ue,ae))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,L={},m={},g=new WeakMap,v=[],p=null,f=!1,T=null,M=null,b=null,A=null,C=null,w=null,V=null,_=!1,E=null,Q=null,ne=null,N=null,H=null,oe.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Ce,disable:Te,bindFramebuffer:ke,drawBuffers:St,useProgram:Fe,setBlending:Ae,setMaterial:Le,setFlipSided:Re,setCullFace:Ke,setLineWidth:He,setPolygonOffset:De,setScissorTest:$e,activeTexture:lt,bindTexture:mt,unbindTexture:y,compressedTexImage2D:x,compressedTexImage3D:Y,texImage2D:Ee,texImage3D:Se,updateUBOMapping:_e,uniformBlockBinding:Ie,texStorage2D:fe,texStorage3D:Z,texSubImage2D:re,texSubImage3D:se,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:be,viewport:ge,reset:qe}}function Xh(i,e,t,n,s,r,o){const a=s.isWebGL2,u=s.maxTextures,c=s.maxCubemapSize,l=s.maxTextureSize,d=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(y,x){return f?new OffscreenCanvas(y,x):hs("canvas")}function M(y,x,Y,re){let se=1;if((y.width>re||y.height>re)&&(se=re/Math.max(y.width,y.height)),se<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const de=x?dr:Math.floor,ve=de(se*y.width),fe=de(se*y.height);v===void 0&&(v=T(ve,fe));const Z=Y?T(ve,fe):v;return Z.width=ve,Z.height=fe,Z.getContext("2d").drawImage(y,0,0,ve,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+ve+"x"+fe+")."),Z}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function b(y){return ra(y.width)&&ra(y.height)}function A(y){return a?!1:y.wrapS!==Kt||y.wrapT!==Kt||y.minFilter!==Ut&&y.minFilter!==Vt}function C(y,x){return y.generateMipmaps&&x&&y.minFilter!==Ut&&y.minFilter!==Vt}function w(y){i.generateMipmap(y)}function V(y,x,Y,re,se=!1){if(a===!1)return x;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let de=x;return x===i.RED&&(Y===i.FLOAT&&(de=i.R32F),Y===i.HALF_FLOAT&&(de=i.R16F),Y===i.UNSIGNED_BYTE&&(de=i.R8)),x===i.RG&&(Y===i.FLOAT&&(de=i.RG32F),Y===i.HALF_FLOAT&&(de=i.RG16F),Y===i.UNSIGNED_BYTE&&(de=i.RG8)),x===i.RGBA&&(Y===i.FLOAT&&(de=i.RGBA32F),Y===i.HALF_FLOAT&&(de=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(de=re===ze&&se===!1?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)),(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function _(y,x,Y){return C(y,Y)===!0||y.isFramebufferTexture&&y.minFilter!==Ut&&y.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function E(y){return y===Ut||y===Dr||y===Ts?i.NEAREST:i.LINEAR}function Q(y){const x=y.target;x.removeEventListener("dispose",Q),N(x),x.isVideoTexture&&g.delete(x)}function ne(y){const x=y.target;x.removeEventListener("dispose",ne),G(x)}function N(y){const x=n.get(y);if(x.__webglInit===void 0)return;const Y=y.source,re=p.get(Y);if(re){const se=re[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&H(y),Object.keys(re).length===0&&p.delete(Y)}n.remove(y)}function H(y){const x=n.get(y);i.deleteTexture(x.__webglTexture);const Y=y.source,re=p.get(Y);delete re[x.__cacheKey],o.memory.textures--}function G(y){const x=y.texture,Y=n.get(y),re=n.get(x);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)i.deleteFramebuffer(Y.__webglFramebuffer[se]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[se]);else{if(i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let se=0;se<Y.__webglColorRenderbuffer.length;se++)Y.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[se]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let se=0,de=x.length;se<de;se++){const ve=n.get(x[se]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(x[se])}n.remove(x),n.remove(y)}let te=0;function W(){te=0}function z(){const y=te;return y>=u&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+u),te+=1,y}function j(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function L(y,x){const Y=n.get(y);if(y.isVideoTexture&&lt(y),y.isRenderTargetTexture===!1&&y.version>0&&Y.__version!==y.version){const re=y.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,y,x);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+x)}function P(y,x){const Y=n.get(y);if(y.version>0&&Y.__version!==y.version){ke(Y,y,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+x)}function $(y,x){const Y=n.get(y);if(y.version>0&&Y.__version!==y.version){ke(Y,y,x);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+x)}function oe(y,x){const Y=n.get(y);if(y.version>0&&Y.__version!==y.version){St(Y,y,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+x)}const he={[or]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},pe={[Ut]:i.NEAREST,[Dr]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[El]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},ye={[Ol]:i.NEVER,[Wl]:i.ALWAYS,[Bl]:i.LESS,[Hl]:i.LEQUAL,[zl]:i.EQUAL,[kl]:i.GEQUAL,[Gl]:i.GREATER,[Vl]:i.NOTEQUAL};function Ce(y,x,Y){if(Y?(i.texParameteri(y,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,he[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,pe[x.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Kt||x.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,E(x.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,E(x.minFilter)),x.minFilter!==Ut&&x.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ut||x.minFilter!==Ts&&x.minFilter!==Di||x.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ii&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(y,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Te(y,x){let Y=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",Q));const re=x.source;let se=p.get(re);se===void 0&&(se={},p.set(re,se));const de=j(x);if(de!==y.__cacheKey){se[de]===void 0&&(se[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[de].usedTimes++;const ve=se[y.__cacheKey];ve!==void 0&&(se[y.__cacheKey].usedTimes--,ve.usedTimes===0&&H(x)),y.__cacheKey=de,y.__webglTexture=se[de].texture}return Y}function ke(y,x,Y){let re=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=i.TEXTURE_3D);const se=Te(y,x),de=x.source;t.bindTexture(re,y.__webglTexture,i.TEXTURE0+Y);const ve=n.get(de);if(de.version!==ve.__version||se===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=A(x)&&b(x.image)===!1;let Z=M(x.image,fe,!1,l);Z=mt(x,Z);const Ee=b(Z)||a,Se=r.convert(x.format,x.colorSpace);let be=r.convert(x.type),ge=V(x.internalFormat,Se,be,x.colorSpace);Ce(re,x,Ee);let _e;const Ie=x.mipmaps,qe=a&&x.isVideoTexture!==!0,R=ve.__version===void 0||se===!0,ue=_(x,Z,Ee);if(x.isDepthTexture)ge=i.DEPTH_COMPONENT,a?x.type===yn?ge=i.DEPTH_COMPONENT32F:x.type===En?ge=i.DEPTH_COMPONENT24:x.type===Bn?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:x.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===zn&&ge===i.DEPTH_COMPONENT&&x.type!==mr&&x.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=En,be=r.convert(x.type)),x.format===mi&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,x.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Bn,be=r.convert(x.type))),R&&(qe?t.texStorage2D(i.TEXTURE_2D,1,ge,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ge,Z.width,Z.height,0,Se,be,null));else if(x.isDataTexture)if(Ie.length>0&&Ee){qe&&R&&t.texStorage2D(i.TEXTURE_2D,ue,ge,Ie[0].width,Ie[0].height);for(let X=0,ae=Ie.length;X<ae;X++)_e=Ie[X],qe?t.texSubImage2D(i.TEXTURE_2D,X,0,0,_e.width,_e.height,Se,be,_e.data):t.texImage2D(i.TEXTURE_2D,X,ge,_e.width,_e.height,0,Se,be,_e.data);x.generateMipmaps=!1}else qe?(R&&t.texStorage2D(i.TEXTURE_2D,ue,ge,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,Se,be,Z.data)):t.texImage2D(i.TEXTURE_2D,0,ge,Z.width,Z.height,0,Se,be,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qe&&R&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ge,Ie[0].width,Ie[0].height,Z.depth);for(let X=0,ae=Ie.length;X<ae;X++)_e=Ie[X],x.format!==Zt?Se!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,Z.depth,Se,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ge,_e.width,_e.height,Z.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,Z.depth,Se,be,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ge,_e.width,_e.height,Z.depth,0,Se,be,_e.data)}else{qe&&R&&t.texStorage2D(i.TEXTURE_2D,ue,ge,Ie[0].width,Ie[0].height);for(let X=0,ae=Ie.length;X<ae;X++)_e=Ie[X],x.format!==Zt?Se!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ge,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,X,0,0,_e.width,_e.height,Se,be,_e.data):t.texImage2D(i.TEXTURE_2D,X,ge,_e.width,_e.height,0,Se,be,_e.data)}else if(x.isDataArrayTexture)qe?(R&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Se,be,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,Z.width,Z.height,Z.depth,0,Se,be,Z.data);else if(x.isData3DTexture)qe?(R&&t.texStorage3D(i.TEXTURE_3D,ue,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Se,be,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ge,Z.width,Z.height,Z.depth,0,Se,be,Z.data);else if(x.isFramebufferTexture){if(R)if(qe)t.texStorage2D(i.TEXTURE_2D,ue,ge,Z.width,Z.height);else{let X=Z.width,ae=Z.height;for(let le=0;le<ue;le++)t.texImage2D(i.TEXTURE_2D,le,ge,X,ae,0,Se,be,null),X>>=1,ae>>=1}}else if(Ie.length>0&&Ee){qe&&R&&t.texStorage2D(i.TEXTURE_2D,ue,ge,Ie[0].width,Ie[0].height);for(let X=0,ae=Ie.length;X<ae;X++)_e=Ie[X],qe?t.texSubImage2D(i.TEXTURE_2D,X,0,0,Se,be,_e):t.texImage2D(i.TEXTURE_2D,X,ge,Se,be,_e);x.generateMipmaps=!1}else qe?(R&&t.texStorage2D(i.TEXTURE_2D,ue,ge,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,be,Z)):t.texImage2D(i.TEXTURE_2D,0,ge,Se,be,Z);C(x,Ee)&&w(re),ve.__version=de.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function St(y,x,Y){if(x.image.length!==6)return;const re=Te(y,x),se=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+Y);const de=n.get(se);if(se.version!==de.__version||re===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let X=0;X<6;X++)!ve&&!fe?Z[X]=M(x.image[X],!1,!0,c):Z[X]=fe?x.image[X].image:x.image[X],Z[X]=mt(x,Z[X]);const Ee=Z[0],Se=b(Ee)||a,be=r.convert(x.format,x.colorSpace),ge=r.convert(x.type),_e=V(x.internalFormat,be,ge,x.colorSpace),Ie=a&&x.isVideoTexture!==!0,qe=de.__version===void 0||re===!0;let R=_(x,Ee,Se);Ce(i.TEXTURE_CUBE_MAP,x,Se);let ue;if(ve){Ie&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,R,_e,Ee.width,Ee.height);for(let X=0;X<6;X++){ue=Z[X].mipmaps;for(let ae=0;ae<ue.length;ae++){const le=ue[ae];x.format!==Zt?be!==null?Ie?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,le.width,le.height,be,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,le.width,le.height,be,ge,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,_e,le.width,le.height,0,be,ge,le.data)}}}else{ue=x.mipmaps,Ie&&qe&&(ue.length>0&&R++,t.texStorage2D(i.TEXTURE_CUBE_MAP,R,_e,Z[0].width,Z[0].height));for(let X=0;X<6;X++)if(fe){Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Z[X].width,Z[X].height,be,ge,Z[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,_e,Z[X].width,Z[X].height,0,be,ge,Z[X].data);for(let ae=0;ae<ue.length;ae++){const We=ue[ae].image[X].image;Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,We.width,We.height,be,ge,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,_e,We.width,We.height,0,be,ge,We.data)}}else{Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,be,ge,Z[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,_e,be,ge,Z[X]);for(let ae=0;ae<ue.length;ae++){const le=ue[ae];Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,be,ge,le.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,_e,be,ge,le.image[X])}}}C(x,Se)&&w(i.TEXTURE_CUBE_MAP),de.__version=se.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Fe(y,x,Y,re,se){const de=r.convert(Y.format,Y.colorSpace),ve=r.convert(Y.type),fe=V(Y.internalFormat,de,ve,Y.colorSpace);n.get(x).__hasExternalTextures||(se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,0,fe,x.width,x.height,x.depth,0,de,ve,null):t.texImage2D(se,0,fe,x.width,x.height,0,de,ve,null)),t.bindFramebuffer(i.FRAMEBUFFER,y),$e(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,se,n.get(Y).__webglTexture,0,De(x)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,se,n.get(Y).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(y,x,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(Y||$e(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===yn?re=i.DEPTH_COMPONENT32F:se.type===En&&(re=i.DEPTH_COMPONENT24));const de=De(x);$e(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,re,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,re,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const re=De(x);Y&&$e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,x.width,x.height):$e(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const re=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let se=0;se<re.length;se++){const de=re[se],ve=r.convert(de.format,de.colorSpace),fe=r.convert(de.type),Z=V(de.internalFormat,ve,fe,de.colorSpace),Ee=De(x);Y&&$e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Z,x.width,x.height):$e(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),L(x.depthTexture,0);const re=n.get(x.depthTexture).__webglTexture,se=De(x);if(x.depthTexture.format===zn)$e(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(x.depthTexture.format===mi)$e(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ae(y){const x=n.get(y),Y=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ut(x.__webglFramebuffer,y)}else if(Y){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]=i.createRenderbuffer(),F(x.__webglDepthbuffer[re],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),F(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(y,x,Y){const re=n.get(y);x!==void 0&&Fe(re.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),Y!==void 0&&Ae(y)}function Re(y){const x=y.texture,Y=n.get(y),re=n.get(x);y.addEventListener("dispose",ne),y.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=x.version,o.memory.textures++);const se=y.isWebGLCubeRenderTarget===!0,de=y.isWebGLMultipleRenderTargets===!0,ve=b(y)||a;if(se){Y.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)Y.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(Y.__webglFramebuffer=i.createFramebuffer(),de)if(s.drawBuffers){const fe=y.texture;for(let Z=0,Ee=fe.length;Z<Ee;Z++){const Se=n.get(fe[Z]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&$e(y)===!1){const fe=de?x:[x];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<fe.length;Z++){const Ee=fe[Z];Y.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Z]);const Se=r.convert(Ee.format,Ee.colorSpace),be=r.convert(Ee.type),ge=V(Ee.internalFormat,Se,be,Ee.colorSpace,y.isXRRenderTarget===!0),_e=De(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ge,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),F(Y.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,x,ve);for(let fe=0;fe<6;fe++)Fe(Y.__webglFramebuffer[fe],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe);C(x,ve)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const fe=y.texture;for(let Z=0,Ee=fe.length;Z<Ee;Z++){const Se=fe[Z],be=n.get(Se);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),Ce(i.TEXTURE_2D,Se,ve),Fe(Y.__webglFramebuffer,y,Se,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D),C(Se,ve)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?fe=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,re.__webglTexture),Ce(fe,x,ve),Fe(Y.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,fe),C(x,ve)&&w(fe),t.unbindTexture()}y.depthBuffer&&Ae(y)}function Ke(y){const x=b(y)||a,Y=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0,se=Y.length;re<se;re++){const de=Y[re];if(C(de,x)){const ve=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(de).__webglTexture;t.bindTexture(ve,fe),w(ve),t.unbindTexture()}}}function He(y){if(a&&y.samples>0&&$e(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],Y=y.width,re=y.height;let se=i.COLOR_BUFFER_BIT;const de=[],ve=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(y),Z=y.isWebGLMultipleRenderTargets===!0;if(Z)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){de.push(i.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&de.push(ve);const Se=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Se===!1&&(y.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ee]),Se===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),Z){const be=n.get(x[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,Y,re,0,0,Y,re,se,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ee]);const Se=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function De(y){return Math.min(d,y.samples)}function $e(y){const x=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(y){const x=o.render.frame;g.get(y)!==x&&(g.set(y,x),y.update())}function mt(y,x){const Y=y.colorSpace,re=y.format,se=y.type;return y.isCompressedTexture===!0||y.format===cr||Y!==nn&&Y!==Gn&&(Y===ze?a===!1?e.has("EXT_sRGB")===!0&&re===Zt?(y.format=cr,y.minFilter=Vt,y.generateMipmaps=!1):x=lo.sRGBToLinear(x):(re!==Zt||se!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),x}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.setTexture2D=L,this.setTexture2DArray=P,this.setTexture3D=$,this.setTextureCube=oe,this.rebindTextures=Le,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=$e}function $h(i,e,t){const n=t.isWebGL2;function s(r,o=Gn){let a;if(r===Tn)return i.UNSIGNED_BYTE;if(r===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===to)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yl)return i.BYTE;if(r===bl)return i.SHORT;if(r===mr)return i.UNSIGNED_SHORT;if(r===Qa)return i.INT;if(r===En)return i.UNSIGNED_INT;if(r===yn)return i.FLOAT;if(r===Ii)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Tl)return i.ALPHA;if(r===Zt)return i.RGBA;if(r===Al)return i.LUMINANCE;if(r===wl)return i.LUMINANCE_ALPHA;if(r===zn)return i.DEPTH_COMPONENT;if(r===mi)return i.DEPTH_STENCIL;if(r===cr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Rl)return i.RED;if(r===no)return i.RED_INTEGER;if(r===Cl)return i.RG;if(r===io)return i.RG_INTEGER;if(r===so)return i.RGBA_INTEGER;if(r===As||r===ws||r===Rs||r===Cs)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ir||r===Nr||r===Fr||r===Or)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ir)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Or)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ll)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Br||r===zr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Br)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hr||r===Gr||r===Vr||r===kr||r===Wr||r===Xr||r===$r||r===qr||r===Yr||r===jr||r===Kr||r===Zr||r===Jr||r===Qr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Hr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$r)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ls)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ls)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Pl||r===ea||r===ta||r===na)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ea)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===na)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class qh extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cs extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yh={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const l=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=l.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yh)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jh extends zt{constructor(e,t,n,s,r,o,a,u,c,l){if(l=l!==void 0?l:zn,l!==zn&&l!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===zn&&(n=En),n===void 0&&l===mi&&(n=Bn),super(null,s,r,o,a,u,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=u!==void 0?u:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kh extends _i{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",u=1,c=null,l=null,d=null,h=null,m=null,g=null;const v=t.getContextAttributes();let p=null,f=null;const T=[],M=[],b=new kt;b.layers.enable(1),b.viewport=new bt;const A=new kt;A.layers.enable(2),A.viewport=new bt;const C=[b,A],w=new qh;w.layers.enable(1),w.layers.enable(2);let V=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let $=T[P];return $===void 0&&($=new er,T[P]=$),$.getTargetRaySpace()},this.getControllerGrip=function(P){let $=T[P];return $===void 0&&($=new er,T[P]=$),$.getGripSpace()},this.getHand=function(P){let $=T[P];return $===void 0&&($=new er,T[P]=$),$.getHandSpace()};function E(P){const $=M.indexOf(P.inputSource);if($===-1)return;const oe=T[$];oe!==void 0&&(oe.update(P.inputSource,P.frame,c||o),oe.dispatchEvent({type:P.type,data:P.inputSource}))}function Q(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ne);for(let P=0;P<T.length;P++){const $=M[P];$!==null&&(M[P]=null,T[P].disconnect($))}V=null,_=null,e.setRenderTarget(p),m=null,h=null,d=null,s=null,f=null,L.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),f=new Vn(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,oe=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?mi:zn,oe=v.stencil?Bn:En);const pe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(pe),s.updateRenderState({layers:[h]}),f=new Vn(h.textureWidth,h.textureHeight,{format:Zt,type:Tn,depthTexture:new jh(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ye=e.properties.get(f);ye.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await s.requestReferenceSpace(a),L.setContext(s),L.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ne(P){for(let $=0;$<P.removed.length;$++){const oe=P.removed[$],he=M.indexOf(oe);he>=0&&(M[he]=null,T[he].disconnect(oe))}for(let $=0;$<P.added.length;$++){const oe=P.added[$];let he=M.indexOf(oe);if(he===-1){for(let ye=0;ye<T.length;ye++)if(ye>=M.length){M.push(oe),he=ye;break}else if(M[ye]===null){M[ye]=oe,he=ye;break}if(he===-1)break}const pe=T[he];pe&&pe.connect(oe)}}const N=new k,H=new k;function G(P,$,oe){N.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const he=N.distanceTo(H),pe=$.projectionMatrix.elements,ye=oe.projectionMatrix.elements,Ce=pe[14]/(pe[10]-1),Te=pe[14]/(pe[10]+1),ke=(pe[9]+1)/pe[5],St=(pe[9]-1)/pe[5],Fe=(pe[8]-1)/pe[0],F=(ye[8]+1)/ye[0],ut=Ce*Fe,Ae=Ce*F,Le=he/(-Fe+F),Re=Le*-Fe;$.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Re),P.translateZ(Le),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const Ke=Ce+Le,He=Te+Le,De=ut-Re,$e=Ae+(he-Re),lt=ke*Te/He*Ke,mt=St*Te/He*Ke;P.projectionMatrix.makePerspective(De,$e,lt,mt,Ke,He),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function te(P,$){$===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices($.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;w.near=A.near=b.near=P.near,w.far=A.far=b.far=P.far,(V!==w.near||_!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,_=w.far);const $=P.parent,oe=w.cameras;te(w,$);for(let he=0;he<oe.length;he++)te(oe[he],$);oe.length===2?G(w,b,A):w.projectionMatrix.copy(b.projectionMatrix),W(P,w,$)};function W(P,$,oe){oe===null?P.matrix.copy($.matrixWorld):(P.matrix.copy(oe.matrixWorld),P.matrix.invert(),P.matrix.multiply($.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0);const he=P.children;for(let pe=0,ye=he.length;pe<ye;pe++)he[pe].updateMatrixWorld(!0);P.projectionMatrix.copy($.projectionMatrix),P.projectionMatrixInverse.copy($.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=ur*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return u},this.setFoveation=function(P){u=P,h!==null&&(h.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)};let z=null;function j(P,$){if(l=$.getViewerPose(c||o),g=$,l!==null){const oe=l.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let he=!1;oe.length!==w.cameras.length&&(w.cameras.length=0,he=!0);for(let pe=0;pe<oe.length;pe++){const ye=oe[pe];let Ce=null;if(m!==null)Ce=m.getViewport(ye);else{const ke=d.getViewSubImage(h,ye);Ce=ke.viewport,pe===0&&(e.setRenderTargetTextures(f,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let Te=C[pe];Te===void 0&&(Te=new kt,Te.layers.enable(pe),Te.viewport=new bt,C[pe]=Te),Te.matrix.fromArray(ye.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ye.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),pe===0&&(w.matrix.copy(Te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),he===!0&&w.cameras.push(Te)}}for(let oe=0;oe<T.length;oe++){const he=M[oe],pe=T[oe];he!==null&&pe!==void 0&&pe.update(he,$,c||o)}z&&z(P,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const L=new Mo;L.setAnimationLoop(j),this.setAnimationLoop=function(P){z=P},this.dispose=function(){}}}function Zh(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,go(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),l(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?u(p,f,T,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===It&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===It&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*M,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function u(p,f,T,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jh(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(T,M){const b=M.program;n.uniformBlockBinding(T,b)}function c(T,M){let b=s[T.id];b===void 0&&(g(T),b=l(T),s[T.id]=b,T.addEventListener("dispose",p));const A=M.program;n.updateUBOMapping(T,A);const C=e.render.frame;r[T.id]!==C&&(h(T),r[T.id]=C)}function l(T){const M=d();T.__bindingPointIndex=M;const b=i.createBuffer(),A=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=s[T.id],b=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,w=b.length;C<w;C++){const V=b[C];if(m(V,C,A)===!0){const _=V.__offset,E=Array.isArray(V.value)?V.value:[V.value];let Q=0;for(let ne=0;ne<E.length;ne++){const N=E[ne],H=v(N);typeof N=="number"?(V.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,_+Q,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=N.elements[0],V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=N.elements[0],V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=N.elements[0]):(N.toArray(V.__data,Q),Q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,_,V.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,M,b){const A=T.value;if(b[M]===void 0){if(typeof A=="number")b[M]=A;else{const C=Array.isArray(A)?A:[A],w=[];for(let V=0;V<C.length;V++)w.push(C[V].clone());b[M]=w}return!0}else if(typeof A=="number"){if(b[M]!==A)return b[M]=A,!0}else{const C=Array.isArray(b[M])?b[M]:[b[M]],w=Array.isArray(A)?A:[A];for(let V=0;V<C.length;V++){const _=C[V];if(_.equals(w[V])===!1)return _.copy(w[V]),!0}}return!1}function g(T){const M=T.uniforms;let b=0;const A=16;let C=0;for(let w=0,V=M.length;w<V;w++){const _=M[w],E={boundary:0,storage:0},Q=Array.isArray(_.value)?_.value:[_.value];for(let ne=0,N=Q.length;ne<N;ne++){const H=Q[ne],G=v(H);E.boundary+=G.boundary,E.storage+=G.storage}if(_.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=b,w>0){C=b%A;const ne=A-C;C!==0&&ne-E.boundary<0&&(b+=A-C,_.__offset=b)}b+=E.storage}return C=b%A,C>0&&(b+=A-C),T.__size=b,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:u,update:c,dispose:f}}function Qh(){const i=hs("canvas");return i.style.display="block",i}class To{constructor(e={}){const{canvas:t=Qh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=pn,this.toneMappingExposure=1;const M=this;let b=!1,A=0,C=0,w=null,V=-1,_=null;const E=new bt,Q=new bt;let ne=null;const N=new Je(0);let H=0,G=t.width,te=t.height,W=1,z=null,j=null;const L=new bt(0,0,G,te),P=new bt(0,0,G,te);let $=!1;const oe=new vo;let he=!1,pe=!1,ye=null;const Ce=new Tt,Te=new Ze,ke=new k,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return w===null?W:1}let F=n;function ut(S,O){for(let K=0;K<S.length;K++){const I=S[K],ee=t.getContext(I,O);if(ee!==null)return ee}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pr}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&O.shift(),F=ut(O,S),F===null)throw ut(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ae,Le,Re,Ke,He,De,$e,lt,mt,y,x,Y,re,se,de,ve,fe,Z,Ee,Se,be,ge,_e,Ie;function qe(){Ae=new cf(F),Le=new tf(F,Ae,e),Ae.init(Le),ge=new $h(F,Ae,Le),Re=new Wh(F,Ae,Le),Ke=new ff(F),He=new Lh,De=new Xh(F,Ae,Re,He,Le,ge,Ke),$e=new sf(M),lt=new lf(M),mt=new Mc(F,Le),_e=new Qd(F,Ae,mt,Le),y=new uf(F,mt,Ke,_e),x=new gf(F,y,mt,Ke),Ee=new mf(F,Le,De),ve=new nf(He),Y=new Ch(M,$e,lt,Ae,Le,_e,ve),re=new Zh(M,He),se=new Uh,de=new Bh(Ae,Le),Z=new Jd(M,$e,lt,Re,x,h,u),fe=new kh(M,x,Le),Ie=new Jh(F,Ke,Le,Re),Se=new ef(F,Ae,Ke,Le),be=new df(F,Ae,Ke,Le),Ke.programs=Y.programs,M.capabilities=Le,M.extensions=Ae,M.properties=He,M.renderLists=se,M.shadowMap=fe,M.state=Re,M.info=Ke}qe();const R=new Kh(M,F);this.xr=R,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(G,te,!1))},this.getSize=function(S){return S.set(G,te)},this.setSize=function(S,O,K=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,te=O,t.width=Math.floor(S*W),t.height=Math.floor(O*W),K===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(G*W,te*W).floor()},this.setDrawingBufferSize=function(S,O,K){G=S,te=O,W=K,t.width=Math.floor(S*K),t.height=Math.floor(O*K),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(L)},this.setViewport=function(S,O,K,I){S.isVector4?L.set(S.x,S.y,S.z,S.w):L.set(S,O,K,I),Re.viewport(E.copy(L).multiplyScalar(W).floor())},this.getScissor=function(S){return S.copy(P)},this.setScissor=function(S,O,K,I){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,O,K,I),Re.scissor(Q.copy(P).multiplyScalar(W).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(S){Re.setScissorTest($=S)},this.setOpaqueSort=function(S){z=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(S=!0,O=!0,K=!0){let I=0;if(S){let ee=!1;if(w!==null){const xe=w.texture.format;ee=xe===so||xe===io||xe===no}if(ee){const xe=w.texture.type,we=xe===Tn||xe===En||xe===mr||xe===Bn||xe===eo||xe===to,Pe=Z.getClearColor(),Ue=Z.getClearAlpha(),Ve=Pe.r,Ne=Pe.g,Oe=Pe.b;we?(m[0]=Ve,m[1]=Ne,m[2]=Oe,m[3]=Ue,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=Ve,g[1]=Ne,g[2]=Oe,g[3]=Ue,F.clearBufferiv(F.COLOR,0,g))}else I|=F.COLOR_BUFFER_BIT}O&&(I|=F.DEPTH_BUFFER_BIT),K&&(I|=F.STENCIL_BUFFER_BIT),F.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),se.dispose(),de.dispose(),He.dispose(),$e.dispose(),lt.dispose(),x.dispose(),_e.dispose(),Ie.dispose(),Y.dispose(),R.dispose(),R.removeEventListener("sessionstart",Qe),R.removeEventListener("sessionend",wt),ye&&(ye.dispose(),ye=null),Et.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=Ke.autoReset,O=fe.enabled,K=fe.autoUpdate,I=fe.needsUpdate,ee=fe.type;qe(),Ke.autoReset=S,fe.enabled=O,fe.autoUpdate=K,fe.needsUpdate=I,fe.type=ee}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){const O=S.target;O.removeEventListener("dispose",le),We(O)}function We(S){Ye(S),He.remove(S)}function Ye(S){const O=He.get(S).programs;O!==void 0&&(O.forEach(function(K){Y.releaseProgram(K)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,K,I,ee,xe){O===null&&(O=St);const we=ee.isMesh&&ee.matrixWorld.determinant()<0,Pe=Lo(S,O,K,I,ee);Re.setMaterial(I,we);let Ue=K.index,Ve=1;I.wireframe===!0&&(Ue=y.getWireframeAttribute(K),Ve=2);const Ne=K.drawRange,Oe=K.attributes.position;let ct=Ne.start*Ve,dt=(Ne.start+Ne.count)*Ve;xe!==null&&(ct=Math.max(ct,xe.start*Ve),dt=Math.min(dt,(xe.start+xe.count)*Ve)),Ue!==null?(ct=Math.max(ct,0),dt=Math.min(dt,Ue.count)):Oe!=null&&(ct=Math.max(ct,0),dt=Math.min(dt,Oe.count));const Wt=dt-ct;if(Wt<0||Wt===1/0)return;_e.setup(ee,I,Pe,K,Ue);let sn,ht=Se;if(Ue!==null&&(sn=mt.get(Ue),ht=be,ht.setIndex(sn)),ee.isMesh)I.wireframe===!0?(Re.setLineWidth(I.wireframeLinewidth*Fe()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(ee.isLine){let Xe=I.linewidth;Xe===void 0&&(Xe=1),Re.setLineWidth(Xe*Fe()),ee.isLineSegments?ht.setMode(F.LINES):ee.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else ee.isPoints?ht.setMode(F.POINTS):ee.isSprite&&ht.setMode(F.TRIANGLES);if(ee.isInstancedMesh)ht.renderInstances(ct,Wt,ee.count);else if(K.isInstancedBufferGeometry){const Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vs=Math.min(K.instanceCount,Xe);ht.renderInstances(ct,Wt,vs)}else ht.render(ct,Wt)},this.compile=function(S,O){function K(I,ee,xe){I.transparent===!0&&I.side===fn&&I.forceSinglePass===!1?(I.side=It,I.needsUpdate=!0,Hi(I,ee,xe),I.side=An,I.needsUpdate=!0,Hi(I,ee,xe),I.side=fn):Hi(I,ee,xe)}p=de.get(S),p.init(),T.push(p),S.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(M.useLegacyLights),S.traverse(function(I){const ee=I.material;if(ee)if(Array.isArray(ee))for(let xe=0;xe<ee.length;xe++){const we=ee[xe];K(we,S,I)}else K(ee,S,I)}),T.pop(),p=null};let ft=null;function At(S){ft&&ft(S)}function Qe(){Et.stop()}function wt(){Et.start()}const Et=new Mo;Et.setAnimationLoop(At),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(S){ft=S,R.setAnimationLoop(S),S===null?Et.stop():Et.start()},R.addEventListener("sessionstart",Qe),R.addEventListener("sessionend",wt),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(O),O=R.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,O,w),p=de.get(S,T.length),p.init(),T.push(p),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),oe.setFromProjectionMatrix(Ce),pe=this.localClippingEnabled,he=ve.init(this.clippingPlanes,pe),v=se.get(S,f.length),v.init(),f.push(v),mn(S,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(z,j),this.info.render.frame++,he===!0&&ve.beginShadows();const K=p.state.shadowsArray;if(fe.render(K,S,O),he===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(v,S),p.setupLights(M.useLegacyLights),O.isArrayCamera){const I=O.cameras;for(let ee=0,xe=I.length;ee<xe;ee++){const we=I[ee];Me(v,S,we,we.viewport)}}else Me(v,S,O);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(M,S,O),_e.resetDefaultState(),V=-1,_=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function mn(S,O,K,I){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||oe.intersectsSprite(S)){I&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ce);const we=x.update(S),Pe=S.material;Pe.visible&&v.push(S,we,Pe,K,ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||oe.intersectsObject(S))){const we=x.update(S),Pe=S.material;if(I&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ke.copy(we.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(Ce)),Array.isArray(Pe)){const Ue=we.groups;for(let Ve=0,Ne=Ue.length;Ve<Ne;Ve++){const Oe=Ue[Ve],ct=Pe[Oe.materialIndex];ct&&ct.visible&&v.push(S,we,ct,K,ke.z,Oe)}}else Pe.visible&&v.push(S,we,Pe,K,ke.z,null)}}const xe=S.children;for(let we=0,Pe=xe.length;we<Pe;we++)mn(xe[we],O,K,I)}function Me(S,O,K,I){const ee=S.opaque,xe=S.transmissive,we=S.transparent;p.setupLightsView(K),he===!0&&ve.setGlobalState(M.clippingPlanes,K),xe.length>0&&xs(ee,xe,O,K),I&&Re.viewport(E.copy(I)),ee.length>0&&je(ee,O,K),xe.length>0&&je(xe,O,K),we.length>0&&je(we,O,K),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function xs(S,O,K,I){const ee=Le.isWebGL2;ye===null&&(ye=new Vn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Ii:Tn,minFilter:Di,samples:ee?4:0})),M.getDrawingBufferSize(Te),ee?ye.setSize(Te.x,Te.y):ye.setSize(dr(Te.x),dr(Te.y));const xe=M.getRenderTarget();M.setRenderTarget(ye),M.getClearColor(N),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const we=M.toneMapping;M.toneMapping=pn,je(S,K,I),De.updateMultisampleRenderTarget(ye),De.updateRenderTargetMipmap(ye);let Pe=!1;for(let Ue=0,Ve=O.length;Ue<Ve;Ue++){const Ne=O[Ue],Oe=Ne.object,ct=Ne.geometry,dt=Ne.material,Wt=Ne.group;if(dt.side===fn&&Oe.layers.test(I.layers)){const sn=dt.side;dt.side=It,dt.needsUpdate=!0,vr(Oe,K,I,ct,dt,Wt),dt.side=sn,dt.needsUpdate=!0,Pe=!0}}Pe===!0&&(De.updateMultisampleRenderTarget(ye),De.updateRenderTargetMipmap(ye)),M.setRenderTarget(xe),M.setClearColor(N,H),M.toneMapping=we}function je(S,O,K){const I=O.isScene===!0?O.overrideMaterial:null;for(let ee=0,xe=S.length;ee<xe;ee++){const we=S[ee],Pe=we.object,Ue=we.geometry,Ve=I===null?we.material:I,Ne=we.group;Pe.layers.test(K.layers)&&vr(Pe,O,K,Ue,Ve,Ne)}}function vr(S,O,K,I,ee,xe){S.onBeforeRender(M,O,K,I,ee,xe),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ee.onBeforeRender(M,O,K,I,S,xe),ee.transparent===!0&&ee.side===fn&&ee.forceSinglePass===!1?(ee.side=It,ee.needsUpdate=!0,M.renderBufferDirect(K,O,I,ee,S,xe),ee.side=An,ee.needsUpdate=!0,M.renderBufferDirect(K,O,I,ee,S,xe),ee.side=fn):M.renderBufferDirect(K,O,I,ee,S,xe),S.onAfterRender(M,O,K,I,ee,xe)}function Hi(S,O,K){O.isScene!==!0&&(O=St);const I=He.get(S),ee=p.state.lights,xe=p.state.shadowsArray,we=ee.state.version,Pe=Y.getParameters(S,ee.state,xe,O,K),Ue=Y.getProgramCacheKey(Pe);let Ve=I.programs;I.environment=S.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(S.isMeshStandardMaterial?lt:$e).get(S.envMap||I.environment),Ve===void 0&&(S.addEventListener("dispose",le),Ve=new Map,I.programs=Ve);let Ne=Ve.get(Ue);if(Ne!==void 0){if(I.currentProgram===Ne&&I.lightsStateVersion===we)return Mr(S,Pe),Ne}else Pe.uniforms=Y.getUniforms(S),S.onBuild(K,Pe,M),S.onBeforeCompile(Pe,M),Ne=Y.acquireProgram(Pe,Ue),Ve.set(Ue,Ne),I.uniforms=Pe.uniforms;const Oe=I.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=ve.uniform),Mr(S,Pe),I.needsLights=Uo(S),I.lightsStateVersion=we,I.needsLights&&(Oe.ambientLightColor.value=ee.state.ambient,Oe.lightProbe.value=ee.state.probe,Oe.directionalLights.value=ee.state.directional,Oe.directionalLightShadows.value=ee.state.directionalShadow,Oe.spotLights.value=ee.state.spot,Oe.spotLightShadows.value=ee.state.spotShadow,Oe.rectAreaLights.value=ee.state.rectArea,Oe.ltc_1.value=ee.state.rectAreaLTC1,Oe.ltc_2.value=ee.state.rectAreaLTC2,Oe.pointLights.value=ee.state.point,Oe.pointLightShadows.value=ee.state.pointShadow,Oe.hemisphereLights.value=ee.state.hemi,Oe.directionalShadowMap.value=ee.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Oe.spotShadowMap.value=ee.state.spotShadowMap,Oe.spotLightMatrix.value=ee.state.spotLightMatrix,Oe.spotLightMap.value=ee.state.spotLightMap,Oe.pointShadowMap.value=ee.state.pointShadowMap,Oe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ct=Ne.getUniforms(),dt=ds.seqWithValue(ct.seq,Oe);return I.currentProgram=Ne,I.uniformsList=dt,Ne}function Mr(S,O){const K=He.get(S);K.outputColorSpace=O.outputColorSpace,K.instancing=O.instancing,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Lo(S,O,K,I,ee){O.isScene!==!0&&(O=St),De.resetTextureUnits();const xe=O.fog,we=I.isMeshStandardMaterial?O.environment:null,Pe=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:nn,Ue=(I.isMeshStandardMaterial?lt:$e).get(I.envMap||we),Ve=I.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!K.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Oe=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,dt=!!K.morphAttributes.color,Wt=I.toneMapped?M.toneMapping:pn,sn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=sn!==void 0?sn.length:0,Xe=He.get(I),vs=p.state.lights;if(he===!0&&(pe===!0||S!==_)){const Nt=S===_&&I.id===V;ve.setState(I,S,Nt)}let vt=!1;I.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==vs.state.version||Xe.outputColorSpace!==Pe||ee.isInstancedMesh&&Xe.instancing===!1||!ee.isInstancedMesh&&Xe.instancing===!0||ee.isSkinnedMesh&&Xe.skinning===!1||!ee.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ue||I.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ve.numPlanes||Xe.numIntersection!==ve.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==Ne||Xe.morphTargets!==Oe||Xe.morphNormals!==ct||Xe.morphColors!==dt||Xe.toneMapping!==Wt||Le.isWebGL2===!0&&Xe.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,Xe.__version=I.version);let Rn=Xe.currentProgram;vt===!0&&(Rn=Hi(I,O,ee));let Sr=!1,vi=!1,Ms=!1;const Lt=Rn.getUniforms(),Cn=Xe.uniforms;if(Re.useProgram(Rn.program)&&(Sr=!0,vi=!0,Ms=!0),I.id!==V&&(V=I.id,vi=!0),Sr||_!==S){if(Lt.setValue(F,"projectionMatrix",S.projectionMatrix),Le.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),_!==S&&(_=S,vi=!0,Ms=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Nt=Lt.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,ke.setFromMatrixPosition(S.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||ee.isSkinnedMesh)&&Lt.setValue(F,"viewMatrix",S.matrixWorldInverse)}if(ee.isSkinnedMesh){Lt.setOptional(F,ee,"bindMatrix"),Lt.setOptional(F,ee,"bindMatrixInverse");const Nt=ee.skeleton;Nt&&(Le.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Lt.setValue(F,"boneTexture",Nt.boneTexture,De),Lt.setValue(F,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ss=K.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0&&Le.isWebGL2===!0)&&Ee.update(ee,K,Rn),(vi||Xe.receiveShadow!==ee.receiveShadow)&&(Xe.receiveShadow=ee.receiveShadow,Lt.setValue(F,"receiveShadow",ee.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Cn.envMap.value=Ue,Cn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),vi&&(Lt.setValue(F,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&Po(Cn,Ms),xe&&I.fog===!0&&re.refreshFogUniforms(Cn,xe),re.refreshMaterialUniforms(Cn,I,W,te,ye),ds.upload(F,Xe.uniformsList,Cn,De)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ds.upload(F,Xe.uniformsList,Cn,De),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Lt.setValue(F,"center",ee.center),Lt.setValue(F,"modelViewMatrix",ee.modelViewMatrix),Lt.setValue(F,"normalMatrix",ee.normalMatrix),Lt.setValue(F,"modelMatrix",ee.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Nt=I.uniformsGroups;for(let Es=0,Do=Nt.length;Es<Do;Es++)if(Le.isWebGL2){const Er=Nt[Es];Ie.update(Er,Rn),Ie.bind(Er,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function Po(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Uo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,O,K){He.get(S.texture).__webglTexture=O,He.get(S.depthTexture).__webglTexture=K;const I=He.get(S);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=K===void 0,I.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const K=He.get(S);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,K=0){w=S,A=O,C=K;let I=!0,ee=null,xe=!1,we=!1;if(S){const Ue=He.get(S);Ue.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(F.FRAMEBUFFER,null),I=!1):Ue.__webglFramebuffer===void 0?De.setupRenderTarget(S):Ue.__hasExternalTextures&&De.rebindTextures(S,He.get(S.texture).__webglTexture,He.get(S.depthTexture).__webglTexture);const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Ne=He.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(ee=Ne[O],xe=!0):Le.isWebGL2&&S.samples>0&&De.useMultisampledRTT(S)===!1?ee=He.get(S).__webglMultisampledFramebuffer:ee=Ne,E.copy(S.viewport),Q.copy(S.scissor),ne=S.scissorTest}else E.copy(L).multiplyScalar(W).floor(),Q.copy(P).multiplyScalar(W).floor(),ne=$;if(Re.bindFramebuffer(F.FRAMEBUFFER,ee)&&Le.drawBuffers&&I&&Re.drawBuffers(S,ee),Re.viewport(E),Re.scissor(Q),Re.setScissorTest(ne),xe){const Ue=He.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,K)}else if(we){const Ue=He.get(S.texture),Ve=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.__webglTexture,K||0,Ve)}V=-1},this.readRenderTargetPixels=function(S,O,K,I,ee,xe,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=He.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Re.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Ue=S.texture,Ve=Ue.format,Ne=Ue.type;if(Ve!==Zt&&ge.convert(Ve)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===Ii&&(Ae.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ne!==Tn&&ge.convert(Ne)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===yn&&(Le.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-I&&K>=0&&K<=S.height-ee&&F.readPixels(O,K,I,ee,ge.convert(Ve),ge.convert(Ne),xe)}finally{const Ue=w!==null?He.get(w).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(S,O,K=0){const I=Math.pow(2,-K),ee=Math.floor(O.image.width*I),xe=Math.floor(O.image.height*I);De.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,S.x,S.y,ee,xe),Re.unbindTexture()},this.copyTextureToTexture=function(S,O,K,I=0){const ee=O.image.width,xe=O.image.height,we=ge.convert(K.format),Pe=ge.convert(K.type);De.setTexture2D(K,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,I,S.x,S.y,ee,xe,we,Pe,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,I,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,I,S.x,S.y,we,Pe,O.image),I===0&&K.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(S,O,K,I,ee=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,Pe=S.max.z-S.min.z+1,Ue=ge.convert(I.format),Ve=ge.convert(I.type);let Ne;if(I.isData3DTexture)De.setTexture3D(I,0),Ne=F.TEXTURE_3D;else if(I.isDataArrayTexture)De.setTexture2DArray(I,0),Ne=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Oe=F.getParameter(F.UNPACK_ROW_LENGTH),ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),dt=F.getParameter(F.UNPACK_SKIP_PIXELS),Wt=F.getParameter(F.UNPACK_SKIP_ROWS),sn=F.getParameter(F.UNPACK_SKIP_IMAGES),ht=K.isCompressedTexture?K.mipmaps[0]:K.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,S.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,S.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S.min.z),K.isDataTexture||K.isData3DTexture?F.texSubImage3D(Ne,ee,O.x,O.y,O.z,xe,we,Pe,Ue,Ve,ht.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ne,ee,O.x,O.y,O.z,xe,we,Pe,Ue,ht.data)):F.texSubImage3D(Ne,ee,O.x,O.y,O.z,xe,we,Pe,Ue,Ve,ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,dt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,sn),ee===0&&I.generateMipmaps&&F.generateMipmap(Ne),Re.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?De.setTextureCube(S,0):S.isData3DTexture?De.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?De.setTexture2DArray(S,0):De.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){A=0,C=0,w=null,Re.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Hn:ro}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hn?ze:nn}}class ep extends To{}ep.prototype.isWebGL1Renderer=!0;class tp extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ui extends wn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let c=0;const l=[],d=new k,h=new k,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){const T=[],M=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&u===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){const C=A/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(C+b,1-M),T.push(c++)}l.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const M=l[f][T+1],b=l[f][T],A=l[f+1][T],C=l[f+1][T+1];(f!==0||o>0)&&m.push(M,b,C),(f!==n-1||u<Math.PI)&&m.push(b,A,C)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pr);let gt;const Ao=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Ao.decode();let wi=null;function wo(){return(wi===null||wi.byteLength===0)&&(wi=new Uint8Array(gt.memory.buffer)),wi}function np(i,e){return i=i>>>0,Ao.decode(wo().subarray(i,i+e))}function ip(i,e){return i=i>>>0,wo().subarray(i/1,i/1+e)}function sp(i,e,t,n,s){gt.add_particle(i,e,t,n,s)}function ka(i,e,t,n,s,r,o){gt.add_orbiting_particle(i,e,t,n,s,r,o)}function rp(i,e,t,n,s,r,o,a){gt.add_elliptic_orbiting_particle(i,e,t,n,s,r,o,a)}function Mn(i,e,t){gt.set_initial_velocity(i,e,t)}function Sn(i,e){gt.make_relative_to(i,e)}function ap(i,e){gt.receive_gravtiy_from(i,e)}let Ri=null;function op(){return(Ri===null||Ri.byteLength===0)&&(Ri=new Float64Array(gt.memory.buffer)),Ri}let Ro=0;function lp(i,e){const t=e(i.length*8,8)>>>0;return op().set(i,t/8),Ro=i.length,t}function cp(i,e){var t=lp(e,gt.__wbindgen_malloc),n=Ro;gt.get_particle(i,t,n,e)}function up(){gt.save_snapshot()}function dp(){gt.restore_from_snapshot()}function fp(i){gt.update(i)}async function hp(i,e){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,e)}catch(n){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const t=await i.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(i,e);return t instanceof WebAssembly.Instance?{instance:t,module:i}:t}}function pp(){const i={};return i.wbg={},i.wbg.__wbg_alert_93908643b373ed4d=function(e,t){alert(np(e,t))},i.wbg.__wbindgen_copy_to_typed_array=function(e,t,n){new Uint8Array(n.buffer,n.byteOffset,n.byteLength).set(ip(e,t))},i.wbg.__wbindgen_init_externref_table=function(){const e=gt.__wbindgen_export_0,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)},i}function mp(i,e){return gt=i.exports,Co.__wbindgen_wasm_module=e,Ri=null,wi=null,gt.__wbindgen_start(),gt}async function Co(i){if(gt!==void 0)return gt;typeof i<"u"&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof i>"u"&&(i=new URL("/assets/physics_bg-50fe15e9.wasm",self.location));const e=pp();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:t,module:n}=await hp(await i,e);return mp(t,n)}function gp(i){let e,t;return{c(){e=q("div"),t=q("progress"),B(t,"class","min-w-full max-h-2 bg-red-500"),t.value=i[0],B(t,"max",1),B(e,"class","fixed left-0 top-0 z-10 min-w-full bg-slate-200")},m(n,s){D(n,e,s),ie(e,t)},p(n,[s]){s&1&&(t.value=n[0])},i:me,o:me,d(n){n&&U(e)}}}function _p(i,e,t){let n=0;const s=()=>{const r=document.body.getBoundingClientRect(),o=window.scrollY/(r.bottom-r.top-window.innerHeight);isNaN(o)||t(0,n=o)};return s(),document.addEventListener("scroll",s),[n,s]}class xp extends ot{constructor(e){super(),at(this,e,_p,gp,rt,{onscroll:1})}get onscroll(){return this.$$.ctx[1]}}function vp(i){let e,t,n,s;return e=new xp({}),{c(){st(e.$$.fragment),t=J(),n=q("canvas"),B(n,"id","canvas"),B(n,"class","fixed left-0 top-0 -z-10")},m(r,o){tt(e,r,o),D(r,t,o),D(r,n,o),s=!0},p:me,i(r){s||(et(e.$$.fragment,r),s=!0)},o(r){it(e.$$.fragment,r),s=!1},d(r){r&&(U(t),U(n)),nt(e,r)}}}function Mp(i){return Co().then(()=>{const e=new tp,t=new kt(75,window.innerWidth/window.innerHeight,.1,1e3),n=new To({canvas:document.getElementById("canvas")});n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight);let s=window.innerWidth/2,r=window.innerHeight/2;window.onresize=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),s=window.innerWidth/2,r=window.innerHeight/2};const o=(w,V)=>{let _=new k(-1+w/s,1-V/r).unproject(t).sub(t.position).normalize(),E=-t.position.z/_.z;return new k().copy(t.position).add(_.multiplyScalar(E))},a=[];let u=0,c=0,l=0;const d=new Map;let h=0;function m(w,V,_,E,Q=!1,ne){ne&&d.set(ne,h),++h;const N=new Ui(E),H=new Pi({color:16737095,wireframe:!0}),G=new Jt(N,H);G.position.x=w,G.position.y=V,sp(w,V,_,E,Q?1:0),a.push({mesh:G}),e.add(G)}function g(w,V,_,E,Q,ne,N,H){H&&d.set(H,h),++h;let G=d.get(w);if(G===void 0){console.error(`Target ${w} not found`);return}const te=new Ui(Q),W=new Pi({color:16737095,wireframe:!0}),z=new Jt(te,W);z.position.x=V,z.position.y=_,ka(G,V,_,E,Q,ne?1:0,N),a.push({mesh:z}),e.add(z)}function v(w,V,_,E,Q,ne,N,H,G){G&&d.set(G,h),++h;let te=d.get(w);if(te===void 0){console.error(`Target ${w} not found`);return}const W=new Ui(Q),z=new Pi({color:16737095,wireframe:!0}),j=new Jt(W,z);j.position.x=V,j.position.y=_,rp(te,V,_,E,Q,ne,N?1:0,H),a.push({mesh:j}),e.add(j)}function p(w,V,_,E,Q,ne){ne&&d.set(ne,h),++h;let N=d.get(w);if(N===void 0){console.error(`Target ${w} not found`);return}ka(N,V,_,E,0,0,Q),a.push(null)}m(0,0,1e4,10,!1,"sun"),p("sun",25,0,100,!1,"physics"),g("physics",22,0,100,2,!0,!0,"physics container 1"),g("physics",28,0,100,2,!0,!0,"physics container 2"),m(21,0,1,.5),Mn(4,2,-2),Sn(4,2),m(23,0,1,.5),Mn(5,-3,-1),Sn(5,2),m(22,-1,1,.5),Mn(6,0,3.5),Sn(6,2),m(22,1,1,.5),Mn(7,1,-.5),Sn(7,2),m(27,0,1,.5),Mn(8,2,2),Sn(8,3),m(29,0,1,.5),Mn(9,1,-3),Sn(9,3),m(28,-1,1,.5),Mn(10,-3.5,0),Sn(10,3),m(28,1,1,.5),Mn(11,.5,1),Sn(11,3),g("sun",0,40,200,4,!1,!1,"news brief"),g("news brief",-7,40,10,1,!1,!0),p("sun",0,-60,1e3,!1,"rust connect 4"),g("rust connect 4",3.5,-60,100,3,!1,!1),g("rust connect 4",-3.5,-60,100,2,!1,!1),g("sun",-75,0,400,6,!1,!1,"robotics codebase");const f=90,T=h;for(let w=0;w<150;++w){if(T+w===34||T+w===47||T+w===88||T+w===151)continue;const V=f+7*w%5;g("sun",V*Math.cos(.5*w),V*Math.sin(.5*w),1,.5,!1,!1)}const M=h-T;g("sun",120*Math.cos(1.75),120*Math.sin(1.75),20,3,!1,!1,"db scraper"),v("sun",0,130,20,2,115,!1,!1,"maze"),v("sun",200,50,11,1.5,110,!1,!1,"comet"),up();const b=()=>{var z,j;const w=document.getElementById("about me").getBoundingClientRect(),V=document.getElementById("bus trips").getBoundingClientRect(),_=(z=document.getElementById("site"))==null?void 0:z.getBoundingClientRect(),E=document.getElementById("news client").getBoundingClientRect(),Q=document.getElementById("news server").getBoundingClientRect(),ne=document.getElementById("connect four client").getBoundingClientRect(),N=document.getElementById("connect four server").getBoundingClientRect(),H=document.getElementById("robotics").getBoundingClientRect(),G=document.getElementById("db scraper").getBoundingClientRect(),te=document.getElementById("maze").getBoundingClientRect(),W=(j=document.getElementById("asteroids"))==null?void 0:j.getBoundingClientRect();if(c=0,V.top>=2*r){const P=o(0,0).y;u=0,l=0,t.position.setZ(180),a.forEach(oe=>{oe!==null&&(oe.forcedPos=void 0)});const $=2*(P+140)/(V.top-w.bottom-r);c=P+140-$*(V.top-2*r)}else if(W.bottom+W.top>2*r){u=0,l=500,t.position.setZ(15),t.updateMatrixWorld();let L=d.get("physics"),P=o(s*3/2,(_.bottom+_.top)/2);for(let $=L+1;$<L+11;++$)a[$].forcedPos=P;L=d.get("news brief"),P=o(s,(E.bottom+Q.top)/2),a[L].forcedPos=P,a[L+1].forcedPos=P,L=d.get("rust connect 4"),P=o(s,(ne.bottom+N.top)/2),a[L+1].forcedPos=P,a[L+2].forcedPos=P,L=d.get("robotics codebase"),P=o(s*3/2,(2*H.bottom+H.top)/3),a[L].forcedPos=P,P=o(s*4/3,(W.bottom+W.top)/2);for(let $=L+1;$<=L+M;++$){const oe=a[$];oe.forcedPos=P}L=d.get("db scraper"),P=o(s/2,(2*G.bottom+G.top)/3),a[L].forcedPos=P,L=d.get("maze"),P=o(s*8/5,(te.bottom+2*te.top)/3),a[L].forcedPos=P}else if(W.bottom>0){const L=W.bottom/(r+(W.bottom-W.top)/2);u=(o(s*4/3,r).x-f)*L,l=-1250*L,t.position.setZ(180-165*L),a.forEach(P=>{P!==null&&(P.forcedPos=void 0)})}else u=0,l=0,t.position.setZ(180),a.forEach(L=>{L!==null&&(L.forcedPos=void 0)})};let A=0;function C(w){requestAnimationFrame(C);let V=0;const _=240,E=1/60;if(A===9e3){const z=d.get("robotics codebase");for(let j=z+1;j<=z+M;++j)ap(j,z)}else A>11e3&&(A<11e3+_?V=-1250*(A-11e3)/_:A>11e3+_?(V=-1250*(11e3+2*_-A)/_,A==11e3+2*_&&(A-=11e3)):(V=-1250,dp()));++A,fp(E);let Q=new Float64Array(2),ne=0,N=0;const H=d.get("physics"),G=d.get("news brief"),te=d.get("rust connect 4"),W=d.get("robotics codebase");a.forEach((z,j)=>{cp(j,Q),(j===H||j==G||j===te)&&(ne=Q[0],N=Q[1]),z!==null&&(z.forcedPos?(z.mesh.position.x=z.forcedPos.x,z.mesh.position.y=z.forcedPos.y,z.mesh.position.z=0,j>=H+1&&j<H+11||j===G+1||j>=te+1&&j<te+3?(z.mesh.position.x+=Q[0]-ne,z.mesh.position.y+=Q[1]-N):j>W&&j<=W+M&&(z.mesh.position.x+=Q[0]-f,z.mesh.position.y+=Q[1])):(z.mesh.position.x=Q[0]+u,z.mesh.position.y=Q[1]+c,z.mesh.position.z=(j>W&&j<=W+M?0:l)+(j!==0?V:0)))}),n.render(e,t)}b(),C(),document.onscroll=b}),[]}class Sp extends ot{constructor(e){super(),at(this,e,Mp,vp,rt,{})}}function Ep(i){let e,t,n,s,r,o,a;var u=i[0];function c(l){return{}}return u&&(t=br(u,c())),{c(){e=q("div"),t&&st(t.$$.fragment),s=J(),r=q("div"),B(e,"id",i[5]),B(e,"style",n=`transform: scale(${i[1]}); margin-top: ${i[3]}px; grid-column: ${i[2]+1} / ${i[2]+i[4]+1};`),B(e,"class","bg-gray-400 rounded p-4 text-left relative"),B(r,"style",o=`grid-column: ${5-i[2]};`)},m(l,d){D(l,e,d),t&&tt(t,e,null),D(l,s,d),D(l,r,d),a=!0},p(l,[d]){if(d&1&&u!==(u=l[0])){if(t){ko();const h=t;it(h.$$.fragment,1,0,()=>{nt(h,1)}),Wo()}u?(t=br(u,c()),st(t.$$.fragment),et(t.$$.fragment,1),tt(t,e,null)):t=null}(!a||d&32)&&B(e,"id",l[5]),(!a||d&30&&n!==(n=`transform: scale(${l[1]}); margin-top: ${l[3]}px; grid-column: ${l[2]+1} / ${l[2]+l[4]+1};`))&&B(e,"style",n),(!a||d&4&&o!==(o=`grid-column: ${5-l[2]};`))&&B(r,"style",o)},i(l){a||(t&&et(t.$$.fragment,l),a=!0)},o(l){t&&it(t.$$.fragment,l),a=!1},d(l){l&&(U(e),U(s),U(r)),t&&nt(t)}}}function yp(i,e,t){let{description:n}=e,{scale:s}=e,{xAlign:r}=e,{yOffset:o}=e,{width:a=2}=e,{id:u=""}=e;return i.$$set=c=>{"description"in c&&t(0,n=c.description),"scale"in c&&t(1,s=c.scale),"xAlign"in c&&t(2,r=c.xAlign),"yOffset"in c&&t(3,o=c.yOffset),"width"in c&&t(4,a=c.width),"id"in c&&t(5,u=c.id)},[n,s,r,o,a,u]}class yt extends ot{constructor(e){super(),at(this,e,yp,Ep,rt,{description:0,scale:1,xAlign:2,yOffset:3,width:4,id:5})}}function bp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Large Compiler",t=J(),n=q("ul"),n.innerHTML="<li>Created a compiler to machine code in <b>OCaml</b> to implement a statically typed Algol like language</li> <li>Utilized various graph algorithms to accomplish tasks and optimizations such as efficient register allocation</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">OCaml</li>',u=J(),c=q("p"),c.textContent="May 2024 — Present",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Tp extends ot{constructor(e){super(),at(this,e,null,bp,rt,{})}}function Ap(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Docker Clone",t=J(),n=q("ul"),n.innerHTML="<li>Constructed a lightweight version of <b>Docker</b> using <b>Go</b> to containerize and isolate processes run on <b>Linux</b> machines</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">Go</li>',u=J(),c=q("p"),c.textContent="June 2024",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class wp extends ot{constructor(e){super(),at(this,e,null,Ap,rt,{})}}function Rp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Resume Parser + Personal Website Content Generator",t=J(),n=q("ul"),n.innerHTML="<li>Automated updating my personal website by constructing a parser in <b>OCaml</b> to use my resume to generate and update content on my website</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">OCaml</li>',u=J(),c=q("p"),c.textContent="June 2024",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Cp extends ot{constructor(e){super(),at(this,e,null,Rp,rt,{})}}function Lp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Spear Text Editor",t=J(),n=q("ul"),n.innerHTML="<li>Created a terminal based text editor leveraging <b>NCurses</b> in <b>C++</b> for the display</li> <li>Efficiently managed file data using a Piece Table data structure for reduced memory usage and faster editing speed</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">C++</li>',u=J(),c=q("p"),c.textContent="January 2024 — April 2024",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Pp extends ot{constructor(e){super(),at(this,e,null,Lp,rt,{})}}function Up(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Small Compiler and Interpreter",t=J(),n=q("ul"),n.innerHTML="<li>Created a stack-based bytecode compiler and interpreter in <b>C</b> to implement an imperative object-oriented language</li> <li>Implemented bytecode optimizations to speed up common use cases for method calls (7x speedup)</li> <li>Designed around single pass compilation to ensure performance and enable use as a <b>REPL</b> interpreter</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">C</li>',u=J(),c=q("p"),c.textContent="December 2023 — January 2024",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Dp extends ot{constructor(e){super(),at(this,e,null,Up,rt,{})}}function Ip(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Bus Trip Planner",t=J(),n=q("ul"),n.innerHTML="<li>Allowed users to create, share, and rate updatable trips through <b>Next.js</b> front-end</li> <li>Crafted a <b>Django API</b> back-end to interface with a <b>GCP</b> hosted <b>MySQL</b> instance, efficiently retrieved bus route data</li> <li>Leveraged <b>Google Maps API</b> to render routes on an interactive map, providing an intuitive user interface</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">Python</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">Django</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">TypeScript</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">React</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">Next.js</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">MySQL</li>',u=J(),c=q("p"),c.textContent="November 2023 — December 2023",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Np extends ot{constructor(e){super(),at(this,e,null,Ip,rt,{})}}const Fp="/assets/svelte-a39f39b7.svg";function Op(i){let e,t,n,s,r,o,a,u,c,l,d,h;return{c(){e=q("p"),e.textContent="Personal Website",t=J(),n=q("img"),r=J(),o=q("p"),o.textContent="The very thing this is. I have wanted to have a personal site for a while, in the off chance it helps me in any way for job recruitment, and saw this as the perfect chance to learn Svelte as well.",a=J(),u=q("ul"),u.innerHTML="<li>Svelte frontend</li> <li>Implemented a <b>CI/CD</b> pipeline using <b>GitHub Actions</b> to automatically build and deploy the website</li> <li>For a later project I autogenerated the experience and project descriptions on this site using my resume</li>",c=J(),l=q("ul"),l.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">TypeScript</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">Svelte</li>',d=J(),h=q("p"),h.textContent="July 2023 — August 2023",B(e,"class","font-bold text-center"),$a(n.src,s=Fp)||B(n,"src",s),B(n,"alt","svelte logo"),B(n,"class","ml-auto mr-auto h-20"),B(u,"class","list-disc list-inside"),B(l,"class","flex space-x-2 my-2"),B(h,"class","text-right text-gray-700 text-sm font-semibold")},m(m,g){D(m,e,g),D(m,t,g),D(m,n,g),D(m,r,g),D(m,o,g),D(m,a,g),D(m,u,g),D(m,c,g),D(m,l,g),D(m,d,g),D(m,h,g)},p:me,i:me,o:me,d(m){m&&(U(e),U(t),U(n),U(r),U(o),U(a),U(u),U(c),U(l),U(d),U(h))}}}class Bp extends ot{constructor(e){super(),at(this,e,null,Op,rt,{})}}function zp(i){let e,t,n,s,r,o,a;return{c(){e=q("p"),e.textContent="Mini Physics Engine",t=J(),n=q("p"),n.textContent="The thing running on this website.",s=J(),r=q("ul"),r.innerHTML="<li>Created a physics engine to power a unique background display for a personal website</li> <li>Ensured the physics engine remained performant by compiling <b>Rust</b> code to <b>web assembly</b></li> <li>Implemented a <b>CI/CD</b> pipeline using <b>GitHub Actions</b> to automatically build and deploy the website</li>",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">Rust</li>',B(e,"class","font-bold text-center"),B(r,"class","list-disc list-inside"),B(a,"class","flex space-x-2 my-2")},m(u,c){D(u,e,c),D(u,t,c),D(u,n,c),D(u,s,c),D(u,r,c),D(u,o,c),D(u,a,c)},p:me,i:me,o:me,d(u){u&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a))}}}class Hp extends ot{constructor(e){super(),at(this,e,null,zp,rt,{})}}function Gp(i){let e,t,n,s,r,o,a;return{c(){e=q("p"),e.textContent="News Aggregator Client",t=J(),n=q("ul"),n.innerHTML="<li>Implemented a data scraper in <b>Python</b> with <b>Parsel</b> to automatically gather and store current news information</li> <li>Leveraged <b>OpenAI API</b> to AI generate a daily welcome message based on gathered data of current events</li> <li>Allowed users to view daily news briefings, store preferences, and search for articles through front-end <b>Next.js</b> app</li> <li>Utilized <b>Google Cloud</b> as an identity provider to implement secure authentication</li>",s=J(),r=q("ul"),r.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">TypeScript</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">React</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">Next.js</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">MongoDB</li>',o=J(),a=q("p"),a.textContent="May 2023 — July 2023",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","flex space-x-2 my-2"),B(a,"class","text-right text-gray-700 text-sm font-semibold")},m(u,c){D(u,e,c),D(u,t,c),D(u,n,c),D(u,s,c),D(u,r,c),D(u,o,c),D(u,a,c)},p:me,i:me,o:me,d(u){u&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a))}}}class Vp extends ot{constructor(e){super(),at(this,e,null,Gp,rt,{})}}function kp(i){let e,t,n,s,r,o,a;return{c(){e=q("p"),e.textContent="News Aggregator Server",t=J(),n=q("ul"),n.innerHTML="<li>Implemented a data scraper in <b>Python</b> with <b>Parsel</b> to automatically gather and store current news information</li> <li>Leveraged <b>OpenAI API</b> to AI generate a daily welcome message based on gathered data of current events</li> <li>Allowed users to view daily news briefings, store preferences, and search for articles through front-end <b>Next.js</b> app</li> <li>Utilized <b>Google Cloud</b> as an identity provider to implement secure authentication</li>",s=J(),r=q("ul"),r.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">Python</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">MongoDB</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">Parsel</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">OpenAI</li>',o=J(),a=q("p"),a.textContent="May 2023 — July 2023",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","flex space-x-2 my-2"),B(a,"class","text-right text-gray-700 text-sm font-semibold")},m(u,c){D(u,e,c),D(u,t,c),D(u,n,c),D(u,s,c),D(u,r,c),D(u,o,c),D(u,a,c)},p:me,i:me,o:me,d(u){u&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a))}}}class Wp extends ot{constructor(e){super(),at(this,e,null,kp,rt,{})}}function Xp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="SPIMbot",t=J(),n=q("ul"),n.innerHTML="<li>Wrote <b>assembly</b> code for SPIM MIPS Simulator to move a virtual bot and complete various collaborative tasks</li> <li>Leveraged <b>memory mapped IO</b> to move and read sensor data, allowing the bot to respond to environmental changes</li> <li>Implemented coroutines in <b>MIPS assembly</b> to speed up solve queens algorithm by 15x</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">MIPS ASM</li>',u=J(),c=q("p"),c.textContent="April 2023",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class $p extends ot{constructor(e){super(),at(this,e,null,Xp,rt,{})}}function qp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Multiplayer Connect Four Client",t=J(),n=q("ul"),n.innerHTML="<li>Implemented a front-end web app with <b>Yew</b> framework, providing a variety of game modes and AI opponents</li> <li>Leveraged an asynchronous back-end runtime using <b>Tokio</b> to concurrently manage numerous multiplayer lobbies</li> <li>Included optional integration for existing <b>C++</b> code to bolster the back-end server with cheat detection</li> <li>Used <b>GitHub Actions</b> to automatically build and deploy the web app when code is pushed to GitHub</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">Rust</li>',u=J(),c=q("p"),c.textContent="November 2022 — December 2022",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Yp extends ot{constructor(e){super(),at(this,e,null,qp,rt,{})}}function jp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Multiplayer Connect Four Server",t=J(),n=q("ul"),n.innerHTML="<li>Implemented a front-end web app with <b>Yew</b> framework, providing a variety of game modes and AI opponents</li> <li>Leveraged an asynchronous back-end runtime using <b>Tokio</b> to concurrently manage numerous multiplayer lobbies</li> <li>Included optional integration for existing <b>C++</b> code to bolster the back-end server with cheat detection</li> <li>Used <b>GitHub Actions</b> to automatically build and deploy the web app when code is pushed to GitHub</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">Rust</li>',u=J(),c=q("p"),c.textContent="November 2022 — December 2022",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Kp extends ot{constructor(e){super(),at(this,e,null,jp,rt,{})}}function Zp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="VEX Robotics Competition Robot Control Codebase",t=J(),n=q("ul"),n.innerHTML="<li>Designed a <b>JavaScript</b> simulation to test autonomous robot motion algorithms, saving 10+ hours</li> <li>Developed then iterated upon the structure and API of a multithreaded, object-oriented <b>C++</b> codebase, allowing teammates to quickly specify advanced, accurate autonomous movement</li> <li>Documented the codebase in the team&#39;s engineering notebook and through numerous comments in the code</li> <li>Achieved the highest programming skills score at the state competition for Illinois in 2022 with 36.25% more points than second place</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">C++</li>',u=J(),c=q("p"),c.textContent="February 2021 — May 2022",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class Jp extends ot{constructor(e){super(),at(this,e,null,Zp,rt,{})}}function Qp(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Database Relevant Link Finder",t=J(),n=q("ul"),n.innerHTML="<li>Created a script to receive numerous command line arguments including with desired keywords and optional flags</li> <li>Parsed HTML to extract links and find relevant keywords on the pages they linked to</li> <li>Improved performance and reduced HTML requests by caching data for future use</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">Python</li>',u=J(),c=q("p"),c.textContent="October 2021",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class em extends ot{constructor(e){super(),at(this,e,null,Qp,rt,{})}}function tm(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="3D Maze Generation Algorithm",t=J(),n=q("ul"),n.innerHTML="<li>Created a randomly generating maze in 3D space utilizing a custom algorithm</li> <li>Debugged maze generation by leveraging preprocessor macros to compile additional components to alter maze generation</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">C#</li> <li class="text-xs px-2 py-1 rounded bg-blue-500">Unity</li>',u=J(),c=q("p"),c.textContent="April 2021 — May 2021",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class nm extends ot{constructor(e){super(),at(this,e,null,tm,rt,{})}}function im(i){let e,t,n,s,r,o,a,u,c;return{c(){e=q("p"),e.textContent="Asteroids Game",t=J(),n=q("ul"),n.innerHTML="<li>Guided project before adding additional functionality</li> <li>Added a menu system that allowed vast customization of gameplay features, appearances, and difficulty</li> <li>Implemented an AI to autonomously fly around and accurately shoot asteroids on the menu screen</li>",s=J(),r=q("p"),r.textContent="Languages and Frameworks Used:",o=J(),a=q("ul"),a.innerHTML='<li class="text-xs px-2 py-1 rounded bg-blue-500">JavaScript</li>',u=J(),c=q("p"),c.textContent="September 2020 — December 2020",B(e,"class","font-bold text-center"),B(n,"class","list-disc list-inside"),B(r,"class","mt-4 text-sm font-bold"),B(a,"class","flex space-x-2 my-2"),B(c,"class","text-right text-gray-700 text-sm font-semibold")},m(l,d){D(l,e,d),D(l,t,d),D(l,n,d),D(l,s,d),D(l,r,d),D(l,o,d),D(l,a,d),D(l,u,d),D(l,c,d)},p:me,i:me,o:me,d(l){l&&(U(e),U(t),U(n),U(s),U(r),U(o),U(a),U(u),U(c))}}}class sm extends ot{constructor(e){super(),at(this,e,null,im,rt,{})}}function rm(i){let e,t,n,s,r,o,a,u,c,l,d,h,m,g,v,p,f,T,M,b,A,C,w,V,_,E,Q,ne,N,H,G,te,W,z,j;return t=new yt({props:{description:Tp,scale:1,xAlign:1,yOffset:100}}),s=new yt({props:{description:wp,scale:1,xAlign:0,yOffset:100}}),o=new yt({props:{description:Cp,scale:1,xAlign:3,yOffset:-50}}),u=new yt({props:{description:Pp,scale:1,xAlign:2,yOffset:100}}),l=new yt({props:{description:Dp,scale:1,xAlign:1,yOffset:100}}),h=new yt({props:{description:Np,scale:1,xAlign:3,yOffset:100,id:"bus trips"}}),g=new yt({props:{description:Bp,scale:1,xAlign:0,yOffset:0,id:"site"}}),p=new yt({props:{description:Hp,scale:1,xAlign:3,yOffset:0}}),T=new yt({props:{description:Vp,scale:1,xAlign:0,yOffset:0,id:"news client"}}),b=new yt({props:{description:Wp,scale:1,xAlign:3,yOffset:-50,id:"news server"}}),C=new yt({props:{description:$p,scale:1,xAlign:1,yOffset:100,id:"spimbot"}}),V=new yt({props:{description:Kp,scale:1,xAlign:3,yOffset:100,id:"connect four server"}}),E=new yt({props:{description:Yp,scale:1,xAlign:0,yOffset:-100,id:"connect four client"}}),ne=new yt({props:{description:Jp,scale:1,xAlign:1,yOffset:100,id:"robotics"}}),H=new yt({props:{description:em,scale:1,xAlign:2,yOffset:100,id:"db scraper"}}),te=new yt({props:{description:nm,scale:1,xAlign:1,yOffset:100,id:"maze"}}),z=new yt({props:{description:sm,scale:1,xAlign:0,yOffset:100,id:"asteroids"}}),{c(){e=q("div"),st(t.$$.fragment),n=J(),st(s.$$.fragment),r=J(),st(o.$$.fragment),a=J(),st(u.$$.fragment),c=J(),st(l.$$.fragment),d=J(),st(h.$$.fragment),m=J(),st(g.$$.fragment),v=J(),st(p.$$.fragment),f=J(),st(T.$$.fragment),M=J(),st(b.$$.fragment),A=J(),st(C.$$.fragment),w=J(),st(V.$$.fragment),_=J(),st(E.$$.fragment),Q=J(),st(ne.$$.fragment),N=J(),st(H.$$.fragment),G=J(),st(te.$$.fragment),W=J(),st(z.$$.fragment),B(e,"style",`margin-bottom: ${window.innerHeight}px;`),B(e,"class","grid grid-cols-5 p-8")},m(L,P){D(L,e,P),tt(t,e,null),ie(e,n),tt(s,e,null),ie(e,r),tt(o,e,null),ie(e,a),tt(u,e,null),ie(e,c),tt(l,e,null),ie(e,d),tt(h,e,null),ie(e,m),tt(g,e,null),ie(e,v),tt(p,e,null),ie(e,f),tt(T,e,null),ie(e,M),tt(b,e,null),ie(e,A),tt(C,e,null),ie(e,w),tt(V,e,null),ie(e,_),tt(E,e,null),ie(e,Q),tt(ne,e,null),ie(e,N),tt(H,e,null),ie(e,G),tt(te,e,null),ie(e,W),tt(z,e,null),j=!0},p:me,i(L){j||(et(t.$$.fragment,L),et(s.$$.fragment,L),et(o.$$.fragment,L),et(u.$$.fragment,L),et(l.$$.fragment,L),et(h.$$.fragment,L),et(g.$$.fragment,L),et(p.$$.fragment,L),et(T.$$.fragment,L),et(b.$$.fragment,L),et(C.$$.fragment,L),et(V.$$.fragment,L),et(E.$$.fragment,L),et(ne.$$.fragment,L),et(H.$$.fragment,L),et(te.$$.fragment,L),et(z.$$.fragment,L),j=!0)},o(L){it(t.$$.fragment,L),it(s.$$.fragment,L),it(o.$$.fragment,L),it(u.$$.fragment,L),it(l.$$.fragment,L),it(h.$$.fragment,L),it(g.$$.fragment,L),it(p.$$.fragment,L),it(T.$$.fragment,L),it(b.$$.fragment,L),it(C.$$.fragment,L),it(V.$$.fragment,L),it(E.$$.fragment,L),it(ne.$$.fragment,L),it(H.$$.fragment,L),it(te.$$.fragment,L),it(z.$$.fragment,L),j=!1},d(L){L&&U(e),nt(t),nt(s),nt(o),nt(u),nt(l),nt(h),nt(g),nt(p),nt(T),nt(b),nt(C),nt(V),nt(E),nt(ne),nt(H),nt(te),nt(z)}}}class am extends ot{constructor(e){super(),at(this,e,null,rm,rt,{})}}const om="/assets/self-7908c2e3.jpg",lm="/assets/resume-d8bef0af.pdf",cm="/assets/resume-extended-12a6231d.pdf";function um(i,e,t){const n=i.slice();return n[0]=e[t],n}function dm(i,e,t){const n=i.slice();return n[0]=e[t],n}function fm(i,e,t){const n=i.slice();return n[0]=e[t],n}function hm(i,e,t){const n=i.slice();return n[0]=e[t],n}function pm(i,e,t){const n=i.slice();return n[0]=e[t],n}function mm(i){let e;return{c(){e=q("p"),e.textContent=`${i[0]}`,B(e,"class","text-left px-2 svelte-glg1bw")},m(t,n){D(t,e,n)},p:me,d(t){t&&U(e)}}}function gm(i){let e;return{c(){e=q("p"),e.textContent=`${i[0]}`,B(e,"class","text-left px-2 svelte-glg1bw")},m(t,n){D(t,e,n)},p:me,d(t){t&&U(e)}}}function _m(i){let e;return{c(){e=q("p"),e.textContent=`${i[0]}`,B(e,"class","text-left px-2 svelte-glg1bw")},m(t,n){D(t,e,n)},p:me,d(t){t&&U(e)}}}function xm(i){let e;return{c(){e=q("p"),e.textContent=`${i[0]}`,B(e,"class","text-left px-2 svelte-glg1bw")},m(t,n){D(t,e,n)},p:me,d(t){t&&U(e)}}}function vm(i){let e;return{c(){e=q("p"),e.textContent=`${i[0]}`,B(e,"class","text-left px-2 svelte-glg1bw")},m(t,n){D(t,e,n)},p:me,d(t){t&&U(e)}}}function Mm(i){let e,t,n,s,r,o,a,u,c,l,d,h,m,g,v,p,f,T,M,b,A,C,w,V,_,E,Q,ne,N,H,G,te,W,z,j,L,P,$,oe,he,pe,ye,Ce,Te,ke,St,Fe,F,ut,Ae,Le,Re,Ke,He,De,$e,lt,mt,y,x,Y,re,se,de,ve,fe,Z,Ee,Se,be,ge,_e,Ie,qe,R,ue,X,ae=Si(["Data Structures","Algorithms","Computer Architecture","Database Systems"]),le=[];for(let Me=0;Me<4;Me+=1)le[Me]=mm(pm(i,ae,Me));let We=Si(["System Programming","Operating Systems","Distributed Systems","Computer Networking"]),Ye=[];for(let Me=0;Me<4;Me+=1)Ye[Me]=gm(hm(i,We,Me));let ft=Si(["Programming Languages and Compilers","Advanced Compiler Construction","Numerical Methods","Software Design Lab"]),At=[];for(let Me=0;Me<4;Me+=1)At[Me]=_m(fm(i,ft,Me));let Qe=Si(["Abstract Algebra","Abstract Linear Algebra","Real Analysis","Complex Variables","Nonlinear Programming"]),wt=[];for(let Me=0;Me<5;Me+=1)wt[Me]=xm(dm(i,Qe,Me));let Et=Si(["Differential Equations","Data Science Discovery","Statistics and Probability II","Statistical Modeling II","Stochastic Processes"]),mn=[];for(let Me=0;Me<5;Me+=1)mn[Me]=vm(um(i,Et,Me));return{c(){e=q("div"),t=q("div"),n=q("img"),r=J(),o=q("p"),o.innerHTML='  Hey there, I&#39;m Alex Broihier, currently a Math, Stats, and Computer Science major at UIUC. I am especially interested in compilers, systems programming, and CS theory. I will be a software engineering intern at Citadel Securities and then Google this summer and fall; over the past summer I interned at Box. Currently, I am a lead course assistant (undergraduate TA) for the <i class="svelte-glg1bw">Data Structures</i> course at UIUC, have previously been on the course staff for the <i class="svelte-glg1bw">Algorithms</i> and <i class="svelte-glg1bw">Intro to CS II Honors</i> courses, and am involved in compilers research. Outside of all of this, I like to run, tinker with Linux, solve all sorts of puzzles, and learn something new every day.',a=J(),u=q("p"),u.textContent="  This site is meant to highlight some of my work and was originally planned to be much bigger in scale (each project would be its own planet in a solar system). I did not end up getting that far, especially because I keep on making new projects, but remnants of the original vision remain (especially as you get further down the page).",c=J(),l=q("div"),d=q("a"),h=tr("Resume (main resume, one page)"),m=J(),g=q("a"),v=tr("Extended Resume (a little messier, multiple pages)"),p=J(),f=q("p"),f.textContent="Education:",T=J(),M=q("p"),M.textContent="University of Illinois at Urbana Champaign",b=J(),A=q("div"),A.innerHTML='<p class="italic svelte-glg1bw">Bachelor of Science in Statistics and Computer Science</p> <p class="svelte-glg1bw">Expected May 2026</p>',C=J(),w=q("p"),w.textContent="Bachelor of Science in Mathematics",V=J(),_=q("p"),_.textContent="James Scholar",E=J(),Q=q("p"),Q.textContent="Relevant Coursework:",ne=J(),N=q("div");for(let Me=0;Me<4;Me+=1)le[Me].c();H=J(),G=q("div");for(let Me=0;Me<4;Me+=1)Ye[Me].c();te=J(),W=q("div");for(let Me=0;Me<4;Me+=1)At[Me].c();z=J(),j=q("p"),j.textContent="Other (Math and Stats) Coursework:",L=J(),P=q("div");for(let Me=0;Me<5;Me+=1)wt[Me].c();$=J(),oe=q("div");for(let Me=0;Me<5;Me+=1)mn[Me].c();he=J(),pe=q("p"),pe.textContent="Work Experience:",ye=J(),Ce=q("div"),Ce.innerHTML='<p class="svelte-glg1bw"><b class="svelte-glg1bw">Google</b> — <i class="svelte-glg1bw">Incoming Software Engineering Intern</i></p> <p class="svelte-glg1bw">August 2025 — November 2025</p>',Te=J(),ke=q("div"),ke.innerHTML='<p class="svelte-glg1bw"><b class="svelte-glg1bw">Citadel Securities</b> — <i class="svelte-glg1bw">Incoming Software Engineering Intern</i></p> <p class="svelte-glg1bw">June 2025 — August 2025</p>',St=J(),Fe=q("div"),Fe.innerHTML='<p class="svelte-glg1bw"><b class="svelte-glg1bw">Box</b> — <i class="svelte-glg1bw">Software Engineering Intern</i></p> <p class="svelte-glg1bw">May 2024 — August 2025</p>',F=J(),ut=q("ul"),ut.innerHTML='<li class="svelte-glg1bw">Implementing distributed event processing using <b class="svelte-glg1bw">Apache Helix</b> and <b class="svelte-glg1bw">Zookeeper</b> to split work over 10+ processes</li> <li class="svelte-glg1bw">Engineering a configurable framework in <b class="svelte-glg1bw">Java</b> and <b class="svelte-glg1bw">Redis</b> to concurrently process 100,000+ events per second</li> <li class="svelte-glg1bw">Providing an internal events API and service with <b class="svelte-glg1bw">OpenAPI</b> and <b class="svelte-glg1bw">Spring Boot</b> deployed with <b class="svelte-glg1bw">Kubernetes</b></li> <li class="svelte-glg1bw">Adding 8 tracked metrics along with unit and integration tests for 9 classes, uncovering 3 bugs in existing code</li>',Ae=J(),Le=q("div"),Le.innerHTML='<p class="font-bold svelte-glg1bw">Undergraduate Course Assistant</p> <p class="svelte-glg1bw">January 2023 — Present</p>',Re=J(),Ke=q("ul"),Ke.innerHTML='<li class="svelte-glg1bw">Currently working on the <i class="svelte-glg1bw">Data Structures</i> course, previously worked on the <i class="svelte-glg1bw">Algorithms</i> and <i class="svelte-glg1bw">Into to CS II Honors</i> courses</li> <li class="svelte-glg1bw">Create and maintain online <b class="svelte-glg1bw">C++</b> problems in <b class="svelte-glg1bw">Docker</b> application to assess course knowledge of 800+ students</li> <li class="svelte-glg1bw">Run lab sections and office hours to help students learn course concepts and use <b class="svelte-glg1bw">GDB</b> and <b class="svelte-glg1bw">Valgrind</b> to debug</li>',He=J(),De=q("div"),De.innerHTML='<p class="font-bold svelte-glg1bw">iD Tech Instructor</p> <p class="svelte-glg1bw">June 2023 — August 2023</p>',$e=J(),lt=q("ul"),lt.innerHTML='<li class="svelte-glg1bw">Taught robotics engineering and <b class="svelte-glg1bw">C++</b> programming through a course partnership with BattleBots</li> <li class="svelte-glg1bw">Managed classes of 10+ students along with weekly logistics</li>',mt=J(),y=q("p"),y.textContent="Extracurricular Activities:",x=J(),Y=q("div"),Y.innerHTML='<p class="svelte-glg1bw"><b class="svelte-glg1bw">IBM</b> — <i class="svelte-glg1bw">Accelerate Program: Software Development Track</i></p> <p class="svelte-glg1bw">June 2024 — July 2024</p>',re=J(),se=q("ul"),se.innerHTML='<li class="svelte-glg1bw">Studying software design topic such as full stack development and application security with IBM leaders</li> <li class="svelte-glg1bw">Collaborating in groups of 10+ participants to progress through weekly coding projects</li>',de=J(),ve=q("div"),ve.innerHTML='<p class="font-bold svelte-glg1bw">Compilers Research</p> <p class="svelte-glg1bw">January 2024 — Present</p>',fe=J(),Z=q("ul"),Z.innerHTML='<li class="svelte-glg1bw">Apply compiler methodologies to data science to increase performance</li> <li class="svelte-glg1bw">Construct novel benchmarks for dataframes, uncovering over 600x performance differences between libraries</li> <li class="svelte-glg1bw">Future Work: leverage LLMs to dynamically generate pattern matching rules</li>',Ee=J(),Se=q("div"),Se.innerHTML='<p class="font-bold svelte-glg1bw">PeopleWeave Research Project</p> <p class="svelte-glg1bw">April 2023 — January 2024</p>',be=J(),ge=q("ul"),ge.innerHTML='<li class="svelte-glg1bw">Automate collection of authorship data in <b class="svelte-glg1bw">Python</b> with <b class="svelte-glg1bw">Parsel</b> to power models developed by other teams</li> <li class="svelte-glg1bw">Utilize AWS and multithreading to bolster development workflow and data scraper performance (5x speedup)</li>',_e=J(),Ie=q("div"),Ie.innerHTML='<p class="font-bold svelte-glg1bw">VEX Robotics Competition Lead Designer, Builder, and Programmer</p> <p class="svelte-glg1bw">August 2018 — May 2022</p>',qe=J(),R=q("ul"),R.innerHTML='<li class="svelte-glg1bw">Leveraged <b class="svelte-glg1bw">CAD</b> in <b class="svelte-glg1bw">Autodesk Inventor</b> to speed up the design process, getting robots in the field 3+ weeks faster</li> <li class="svelte-glg1bw">Ensured deadlines were met so the robot would be competition ready</li> <li class="svelte-glg1bw">Introduced teammates to version control using <b class="svelte-glg1bw">Git</b>, collectively saving 6+ hours</li> <li class="svelte-glg1bw">Guided other teams so they could succeed as well</li>',ue=J(),X=q("p"),X.textContent="Continue scrolling to look at some of my projects:",$a(n.src,s=om)||B(n,"src",s),B(n,"alt","Portrait"),Bo(n,"width","25%"),B(n,"class","rounded-md ml-auto mr-auto mb-4 svelte-glg1bw"),B(o,"class","svelte-glg1bw"),B(u,"class","svelte-glg1bw"),B(t,"class","text-left mt-[15%] svelte-glg1bw"),B(d,"href",lm),B(d,"class","bg-blue-400 p-2 rounded-md svelte-glg1bw"),B(g,"href",cm),B(g,"class","bg-blue-400 p-2 rounded-md svelte-glg1bw"),B(l,"class","flex justify-between my-4 svelte-glg1bw"),B(f,"class","font-bold text-lg mt-8 svelte-glg1bw"),B(M,"class","font-bold text-left svelte-glg1bw"),B(A,"class","flex justify-between svelte-glg1bw"),B(w,"class","italic text-left svelte-glg1bw"),B(_,"class","italic text-left svelte-glg1bw"),B(Q,"class","font-bold mt-8 text-left svelte-glg1bw"),B(N,"class","flex flex-wrap justify-evenly svelte-glg1bw"),B(G,"class","flex flex-wrap justify-evenly svelte-glg1bw"),B(W,"class","flex flex-wrap justify-evenly svelte-glg1bw"),B(j,"class","font-bold mt-8 text-left svelte-glg1bw"),B(P,"class","flex flex-wrap justify-evenly svelte-glg1bw"),B(oe,"class","flex flex-wrap justify-evenly svelte-glg1bw"),B(pe,"class","font-bold text-lg mt-8 svelte-glg1bw"),B(Ce,"class","flex justify-between svelte-glg1bw"),B(ke,"class","flex justify-between svelte-glg1bw"),B(Fe,"class","flex justify-between svelte-glg1bw"),B(ut,"class","list-disc list-inside text-left svelte-glg1bw"),B(Le,"class","flex justify-between svelte-glg1bw"),B(Ke,"class","list-disc list-inside text-left svelte-glg1bw"),B(De,"class","flex justify-between svelte-glg1bw"),B(lt,"class","list-disc list-inside text-left svelte-glg1bw"),B(y,"class","font-bold text-lg mt-8 svelte-glg1bw"),B(Y,"class","flex justify-between svelte-glg1bw"),B(se,"class","list-disc list-inside text-left svelte-glg1bw"),B(ve,"class","flex justify-between svelte-glg1bw"),B(Z,"class","list-disc list-inside text-left svelte-glg1bw"),B(Se,"class","flex justify-between svelte-glg1bw"),B(ge,"class","list-disc list-inside text-left svelte-glg1bw"),B(Ie,"class","flex justify-between svelte-glg1bw"),B(R,"class","list-disc list-inside text-left svelte-glg1bw"),B(X,"class","font-bold mt-8 svelte-glg1bw"),B(e,"class","text-black bg-slate-100 py-8 grid grid-flow-row svelte-glg1bw"),B(e,"id","about me")},m(Me,xs){D(Me,e,xs),ie(e,t),ie(t,n),ie(t,r),ie(t,o),ie(t,a),ie(t,u),ie(e,c),ie(e,l),ie(l,d),ie(d,h),ie(l,m),ie(l,g),ie(g,v),ie(e,p),ie(e,f),ie(e,T),ie(e,M),ie(e,b),ie(e,A),ie(e,C),ie(e,w),ie(e,V),ie(e,_),ie(e,E),ie(e,Q),ie(e,ne),ie(e,N);for(let je=0;je<4;je+=1)le[je]&&le[je].m(N,null);ie(e,H),ie(e,G);for(let je=0;je<4;je+=1)Ye[je]&&Ye[je].m(G,null);ie(e,te),ie(e,W);for(let je=0;je<4;je+=1)At[je]&&At[je].m(W,null);ie(e,z),ie(e,j),ie(e,L),ie(e,P);for(let je=0;je<5;je+=1)wt[je]&&wt[je].m(P,null);ie(e,$),ie(e,oe);for(let je=0;je<5;je+=1)mn[je]&&mn[je].m(oe,null);ie(e,he),ie(e,pe),ie(e,ye),ie(e,Ce),ie(e,Te),ie(e,ke),ie(e,St),ie(e,Fe),ie(e,F),ie(e,ut),ie(e,Ae),ie(e,Le),ie(e,Re),ie(e,Ke),ie(e,He),ie(e,De),ie(e,$e),ie(e,lt),ie(e,mt),ie(e,y),ie(e,x),ie(e,Y),ie(e,re),ie(e,se),ie(e,de),ie(e,ve),ie(e,fe),ie(e,Z),ie(e,Ee),ie(e,Se),ie(e,be),ie(e,ge),ie(e,_e),ie(e,Ie),ie(e,qe),ie(e,R),ie(e,ue),ie(e,X)},p:me,i:me,o:me,d(Me){Me&&U(e),Mi(le,Me),Mi(Ye,Me),Mi(At,Me),Mi(wt,Me),Mi(mn,Me)}}}class Sm extends ot{constructor(e){super(),at(this,e,null,Mm,rt,{})}}function Em(i){let e,t,n,s,r,o,a;return t=new Sp({}),s=new Sm({}),o=new am({}),{c(){e=q("main"),st(t.$$.fragment),n=J(),st(s.$$.fragment),r=J(),st(o.$$.fragment),B(e,"class","min-w-full")},m(u,c){D(u,e,c),tt(t,e,null),ie(e,n),tt(s,e,null),ie(e,r),tt(o,e,null),a=!0},p:me,i(u){a||(et(t.$$.fragment,u),et(s.$$.fragment,u),et(o.$$.fragment,u),a=!0)},o(u){it(t.$$.fragment,u),it(s.$$.fragment,u),it(o.$$.fragment,u),a=!1},d(u){u&&U(e),nt(t),nt(s),nt(o)}}}class ym extends ot{constructor(e){super(),at(this,e,null,Em,rt,{})}}new ym({target:document.getElementById("app")});
