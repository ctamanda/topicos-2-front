import{$ as Od,$n as ln$3,$r as wd,A as IH,At as Wl,B as Kg,Bn as iv,Bt as Zp,C as Gt$4,Cn as fo$1,Cr as qg,Ct as VN,Dn as gm,Dr as rc,Dt as Vv,En as ga,Er as qw,Et as Vt$3,F as Iv,Fr as tE,Ft as Xg,Gn as ke$2,Gr as vC,Gt as _n$1,H as Lt$3,Ir as tM,It as Xn$1,J as Na,Jn as lD,Jr as vr,Jt as ah,K as Mt$2,L as Je$1,Ln as iD,Lr as tn$4,Lt as Xt$4,M as I_,Mn as hb,Mr as sh,Mt as Wr$1,N as Ie$1,Nn as he$3,Nr as sv,Nt as Xa,On as go$1,Or as rr$1,Ot as W$1,P as In$1,Pn as hf,Pt as Xe$1,Q as Ob,Qn as li$2,Qt as aw,Rn as ip,Rr as to$1,Rt as Yb,S as Gr,Sn as fn$2,Sr as po$1,St as VG,T as H,Tn as gN,Tr as qr,Tt as Vg,U as M,Ut as Zy,V as Kn$1,Vn as jG,Vt as Zr$1,W as MS,Wn as k$1,Wr as uo$1,Xn as le$1,Xr as wD,Xt as ao$1,Y as Nc,Yn as lS,Yr as vt$2,Yt as ai$1,Z as O,Zr as wS,Zt as av,_ as EH,_n as et$2,_t as TS,a as BN,ai as y$1,ar as n3,at as Q$1,bn as fD,br as pD,bt as Uv,ci as yd,cn as ci$2,cr as ne$1,ct as Qg,di as zU,dr as nt$3,dt as Ra,ei as wi$2,en as bH,er as lo$1,et as Oe$1,fi as ze$3,fn as dD,fr as oD,ft as Rl,gn as eo$1,gr as ov,gt as T3,h as Dn$1,hr as ot$2,ht as Si$2,i as A$1,ii as xt$1,jn as ha,jt as Wn$1,k as I$2,kn as h,kr as rv,kt as Wg,l as Cc,li as yt$2,ln as cv,lr as ni$1,lt as Qv,m as De$3,mn as dn$2,mr as or$1,mt as Sc,n as $n$1,ni as xa,nn as bn$1,nr as mN,nt as PG,o as Bg,oi as yG,on as ce$2,or as nb,ot as QS,p as Dd,pn as dS,pr as oM,q as NS,qr as vb,qt as ae$1,r as $s,ri as xc,rn as bs,rr as mf,s as Br,si as yS,sn as cf,sr as nc,t as $T,ti as xS,tn as bT,tr as mC,tt as P$3,u as DH,ui as yv,ur as nr$1,ut as R$1,v as EN,vr as p8,vt as Tc,wn as g$1,wr as qp,xn as fS,xr as pf,xt as V3,yn as fC,yr as pC,yt as Tr,z as K$2,zn as it$3,zr as tv,zt as Zg}from"./chunk-DWrB_E-l.js";import{C as ve$2,E as yt$3,T as ye$2,_ as j$1,c as Ot$2,d as W$2,h as bt$2,i as H$1,l as Pt$2,n as Dt$1,o as I$3,r as Et$3,u as T$2,y as kt$3}from"./chunk-DrDN1XcZ.js";var f=`primary`;var $e$1=Symbol(`RouteTitle`);var Ht$2=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ie$1(t){return new Ht$2(t)}function $t$2(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function Xr(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let a={},u=t.slice(0,r.length);return $t$2(r,u,a)?{consumed:u,posParams:a}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!$t$2(o,t.slice(0,o.length),c)||!$t$2(s,t.slice(t.length-s.length),c)?null:{consumed:t,posParams:c}}function st$1(t){return new Promise((n,e)=>{t.pipe(lD()).subscribe({next:r=>n(r),error:r=>e(r)})})}function Gn(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!F$1(t[e],n[e]))return!1;return!0}function F$1(t,n){let e=t?Bt$3(t):void 0,r=n?Bt$3(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!en$2(t[i],n[i]))return!1;return!0}function Bt$3(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function en$2(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function Wn(t){return t.length>0?t[t.length-1]:null}function ae(t){return Yb(t)?t:Na(t)?ot$2(Promise.resolve(t)):ze$3(t)}function tn$3(t){return Yb(t)?st$1(t):Promise.resolve(t)}var Qn={exact:nn$3,subset:on$3};var rn$2={exact:Kn,subset:Yn,ignored:()=>!0};var or={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var fe$2={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function sr(t,n,e){let r=t instanceof I$1?t:n.parseUrl(t);return mC(()=>Vt$2(n.lastSuccessfulNavigation()?.finalUrl??new I$1,r,A$1(A$1({},fe$2),e)))}function Vt$2(t,n,e){return Qn[e.paths](t.root,n.root,e.matrixParams)&&rn$2[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment===`exact`&&t.fragment!==n.fragment)}function Kn(t,n){return F$1(t,n)}function nn$3(t,n,e){if(!ne(t.segments,n.segments)||!nt$2(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!nn$3(t.children[r],n.children[r],e))return!1;return!0}function Yn(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>en$2(t[e],n[e]))}function on$3(t,n,e){return sn$2(t,n,n.segments,e)}function sn$2(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ne(i,e)||n.hasChildren()||!nt$2(i,e,r))}else if(t.segments.length===e.length){if(!ne(t.segments,e)||!nt$2(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!on$3(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ne(t.segments,i)||!nt$2(t.segments,i,r)||!t.children[f]?!1:sn$2(t.children[f],n,o,r)}}function nt$2(t,n,e){return n.every((r,i)=>rn$2[e](t[i].parameters,r.parameters))}var I$1=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=ie$1(this.queryParams),this._queryParamMap}toString(){return Xn.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return it$2(this)}};var K$1=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=ie$1(this.parameters),this._parameterMap}toString(){return cn$1(this)}};function Zn(t,n){return ne(t,n)&&t.every((e,r)=>F$1(e.parameters,n[r].parameters))}function ne(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function Jn(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===f&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==f&&(e=e.concat(n(i,r)))}),e}var Re$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:()=>new Y$1})}return t})();var Y$1=class{parse(n){let e=new Wt$3(n);return new I$1(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){return`${`/${Ae$1(n.root,!0)}`}${ri$1(n.queryParams)}${typeof n.fragment==`string`?`#${ei(n.fragment)}`:``}`}};var Xn=new Y$1;function it$2(t){return t.segments.map(n=>cn$1(n)).join(`/`)}function Ae$1(t,n){if(!t.hasChildren())return it$2(t);if(n){let e=t.children[f]?Ae$1(t.children[f],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==f&&r.push(`${i}:${Ae$1(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=Jn(t,(r,i)=>i===f?[Ae$1(t.children[f],!1)]:[`${i}:${Ae$1(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[f]!=null?`${it$2(t)}/${e[0]}`:`${it$2(t)}/(${e.join(`//`)})`}}function an$3(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function tt$1(t){return an$3(t).replace(/%3B/gi,`;`)}function ei(t){return encodeURI(t)}function Gt$3(t){return an$3(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function ot$1(t){return decodeURIComponent(t)}function Wr(t){return ot$1(t.replace(/\+/g,`%20`))}function cn$1(t){return`${Gt$3(t.path)}${ti(t.parameters)}`}function ti(t){return Object.entries(t).map(([n,e])=>`;${Gt$3(n)}=${Gt$3(e)}`).join(``)}function ri$1(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${tt$1(e)}=${tt$1(i)}`).join(`&`):`${tt$1(e)}=${tt$1(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var ni=/^[^\/()?;#]+/;function zt$2(t){let n=t.match(ni);return n?n[0]:``}var ii=/^[^\/()?;=#]+/;function oi$1(t){let n=t.match(ii);return n?n[0]:``}var si$1=/^[^=?&#]+/;function ai(t){let n=t.match(si$1);return n?n[0]:``}var ci$1=/^[^&#]+/;function ui$1(t){let n=t.match(ci$1);return n?n[0]:``}var Wt$3=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new g$1(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[f]=new m(e,r)),i}parseSegment(){let n=zt$2(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new g$1(4009,!1);return this.capture(n),new K$1(ot$1(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=oi$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=zt$2(this.remaining);i&&(r=i,this.capture(r))}n[ot$1(e)]=ot$1(r)}parseQueryParam(n){let e=ai(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let s=ui$1(this.remaining);s&&(r=s,this.capture(r))}let i=Wr(e),o=Wr(r);if(Object.hasOwn(n,i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=zt$2(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new g$1(4010,!1);let s;i.indexOf(`:`)>-1?(s=i.slice(0,i.indexOf(`:`)),this.capture(s),this.capture(`:`)):n&&(s=f);let c=this.parseChildren(e+1);r[s??f]=Object.keys(c).length===1&&c[f]?c[f]:new m([],c),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new g$1(4011,!1)}};function un$1(t){return t.segments.length>0?new m([],{[f]:t}):t}function ln$2(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=ln$2(i);if(r===f&&o.segments.length===0&&o.hasChildren())for(let[s,c]of Object.entries(o.children))n[s]=c;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}return li$1(new m(t.segments,n))}function li$1(t){if(t.numberOfChildren===1&&t.children[f]){let n=t.children[f];return new m(t.segments.concat(n.segments),n.children)}return t}function Z$1(t){return t instanceof I$1}function dn$1(t,n,e=null,r=null,i=new Y$1){return fn$1(hn(t),n,e,r,i)}function hn(t){let n;function e(o){let s={};for(let a of o.children){let u=e(a);s[a.outlet]=u}let c=new m(o.url,s);return o===t&&(n=c),c}let i=un$1(e(t.root));return n??i}function fn$1(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return qt$3(o,o,o,e,r,i);let s=di$1(n);if(s.toRoot())return qt$3(o,o,new m([],{}),e,r,i);let c=hi$1(s,o,t),a=c.processChildren?Ne(c.segmentGroup,c.index,s.commands):gn(c.segmentGroup,c.index,s.commands);return qt$3(o,c.segmentGroup,a,e,r,i)}function at$2(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function De$2(t){return typeof t==`object`&&t!=null&&t.outlets}function Qr(t,n,e){t||=`ɵ`;let r=new I$1;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function qt$3(t,n,e,r,i,o){let s={};for(let[u,d]of Object.entries(r??{}))s[u]=Array.isArray(d)?d.map(v=>Qr(u,v,o)):Qr(u,d,o);let c;t===n?c=e:c=pn(t,n,e);return new I$1(un$1(ln$2(c)),s,i)}function pn(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=pn(o,n,e)}),new m(t.segments,r)}var ct$2=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&at$2(r[0]))throw new g$1(4003,!1);let i=r.find(De$2);if(i&&i!==Wn(r))throw new g$1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function di$1(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new ct$2(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,s)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([a,u])=>{c[a]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:s===0?(o.split(`/`).forEach((c,a)=>{a==0&&c===`.`||(a==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new ct$2(e,n,r)}var de$1=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function hi$1(t,n,e){if(t.isAbsolute)return new de$1(n,!0,0);if(!e)return new de$1(n,!1,NaN);if(e.parent===null)return new de$1(e,!0,0);let r=at$2(t.commands[0])?0:1;return fi$1(e,e.segments.length-1+r,t.numberOfDoubleDots)}function fi$1(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new g$1(4005,!1);i=r.segments.length}return new de$1(r,!1,i-o)}function pi$1(t){return De$2(t[0])?t[0].outlets:{[f]:t}}function gn(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return Ne(t,n,e);let r=gi$1(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[f]=new m(t.segments.slice(r.pathIndex),t.children),Ne(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?Qt$3(t,n,e):r.match?Ne(t,0,i):Qt$3(t,n,e)}function Ne(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=pi$1(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==f)&&t.children[f]&&t.numberOfChildren===1&&t.children[f].segments.length===0){let o=Ne(t.children[f],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s==`string`&&(s=[s]),s!==null&&(i[o]=gn(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new m(t.segments,i)}}function gi$1(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let s=t.segments[i],c=e[r];if(De$2(c))break;let a=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&a===void 0)break;if(a&&u&&typeof u==`object`&&u.outlets===void 0){if(!Yr(a,u,s))return o;r+=2}else{if(!Yr(a,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Qt$3(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(De$2(o))return new m(r,vi$1(o.outlets));if(i===0&&at$2(e[0])){let a=t.segments[n];r.push(new K$1(a.path,Kr(e[0]))),i++;continue}let s=De$2(o)?o.outlets[f]:`${o}`,c=i<e.length-1?e[i+1]:null;s&&c&&at$2(c)?(r.push(new K$1(s,Kr(c))),i+=2):(r.push(new K$1(s,{})),i++)}return new m(r,{})}function vi$1(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=Qt$3(new m([],{}),0,r))}),n}function Kr(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function Yr(t,n,e){return t==e.path&&F$1(n,e.parameters)}var Te$2=`imperative`;var S$2=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(S$2||{});var U$1=class{id;url;constructor(n,e){this.id=n,this.url=e}};var oe=class extends U$1{type=S$2.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var z$1=class extends U$1{urlAfterRedirects;type=S$2.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var w$2=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(w$2||{});var Ue$1=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(Ue$1||{});var L$1=class extends U$1{reason;code;type=S$2.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function vn(t){return t instanceof L$1&&(t.code===w$2.Redirect||t.code===w$2.SupersededByNewNavigation)}var V=class extends U$1{reason;code;type=S$2.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var se=class extends U$1{error;target;type=S$2.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var Oe=class extends U$1{urlAfterRedirects;state;type=S$2.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ut$1=class extends U$1{urlAfterRedirects;state;type=S$2.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var lt$2=class extends U$1{urlAfterRedirects;state;shouldActivate;type=S$2.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var dt$2=class extends U$1{urlAfterRedirects;state;type=S$2.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ht$2=class extends U$1{urlAfterRedirects;state;type=S$2.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ft$1=class{route;type=S$2.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var pt$2=class{route;type=S$2.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var gt$1=class{snapshot;type=S$2.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var vt$1=class{snapshot;type=S$2.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var mt$2=class{snapshot;type=S$2.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var yt$1=class{snapshot;type=S$2.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var pe$2=class{};var Pe$1=class{};var ge$2=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function mi$1(t){return!(t instanceof pe$2)&&!(t instanceof ge$2)&&!(t instanceof Pe$1)}var Rt$3=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Se(this.rootInjector)}};var Se=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Rt$3(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(I$2(ae$1))};static ɵprov=R$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var St$1=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Kt$3(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Kt$3(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Yt$2(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return Yt$2(n,this._root).map(e=>e.value)}};function Kt$3(t,n){if(t===n.value)return n;for(let e of n.children){let r=Kt$3(t,e);if(r)return r}return null}function Yt$2(t,n){if(t===n.value)return[n];for(let e of n.children){let r=Yt$2(t,e);if(r.length)return r.unshift(n),r}return[]}var D=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function le(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Le$2=class extends St$1{snapshot;constructor(n,e){super(n),this.snapshot=e,cr(this,n)}toString(){return this.snapshot.toString()}};function mn$1(t,n){let e=yi$1(t,n),r=new bn$1([new K$1(``,{})]),i=new bn$1({}),o=new bn$1({}),a=new G$2(r,i,new bn$1({}),new bn$1(``),o,f,t,e.root);return a.snapshot=e.root,new Le$2(new D(a,[]),e)}function yi$1(t,n){return new je$1(``,new D(new ve$1([],{},{},``,{},f,t,null,{},n),[]))}var G$2=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,s,c,a){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(K$2(u=>u[$e$1]))??ze$3(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(K$2(n=>ie$1(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(K$2(n=>ie$1(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var Ri$1=`always`;function ar(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:A$1(A$1({},n.params),t.params),data:A$1(A$1({},n.data),t.data),resolve:A$1(A$1(A$1(A$1({},t.data),n.data),i?.data),t._resolvedData)}:r={params:A$1({},t.params),data:A$1({},t.data),resolve:A$1(A$1({},t.data),t._resolvedData??{})},i&&Rn$1(i)&&(r.resolve[$e$1]=i.title),r}var ve$1=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[$e$1]}constructor(n,e,r,i,o,s,c,a,u,d){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=c,this.routeConfig=a,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ie$1(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ie$1(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var je$1=class extends St$1{url;constructor(n,e){super(e),this.url=n,cr(this,e)}toString(){return yn(this._root)}};function cr(t,n){n.value._routerState=t,n.children.forEach(e=>cr(t,e))}function yn(t){let n=t.children.length>0?` { ${t.children.map(yn).join(`, `)} } `:``;return`${t.value}${n}`}function Ft$2(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,F$1(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),F$1(n.params,e.params)||t.paramsSubject.next(e.params),Gn(n.url,e.url)||t.urlSubject.next(e.url),F$1(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Zt$2(t,n){let e=F$1(t.params,n.params)&&Zn(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||Zt$2(t.parent,n.parent))}function Rn$1(t){return typeof t.title==`string`||t.title===null}var Sn$1=new y$1(``);var ur=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new ke$2;deactivateEvents=new ke$2;attachEvents=new ke$2;detachEvents=new ke$2;routerOutletData=Vv();parentContexts=h(Se);location=h(Gr);changeDetector=h(Uv);inputBinder=h(It$2,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new g$1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new g$1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new g$1(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new g$1(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new Jt$2(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:a,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=Je$1({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[ga]})}return t})();var Jt$2=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===G$2?this.route:n===Se?this.childContexts:n===Sn$1?this.outletData:this.parent.get(n,e)}};var It$2=new y$1(``);var lr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=Oe$1({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Xg(0,`router-outlet`)},dependencies:[ur],encapsulation:2,changeDetection:1})}return t})();function dr(t){let n=t.children&&t.children.map(dr),e=n?ne$1(A$1({},t),{children:n}):A$1({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f&&(e.component=lr),e}function Si$1(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new Le$2(xe(t,n._root,e?e._root:void 0,r),n)}}function xe(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new D(i,Ci$1(t,n,e,r))}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let c=s.route;return c.value._setPending(n.value),c.children=n.children.map(a=>xe(t,a,void 0,r)),c}}let i=wi$1(n.value);i._setPending(n.value),r.add(i);return new D(i,n.children.map(s=>xe(t,s,void 0,r)))}}function Ci$1(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return xe(t,i,o,r);return xe(t,i,void 0,r)})}function wi$1(t){return new G$2(new bn$1(t.url),new bn$1(t.params),new bn$1(t.queryParams),new bn$1(t.fragment),new bn$1(t.data),t.outlet,t.component,t)}var me$1=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}};var Cn=`ngNavigationCancelingError`;function Ct$1(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=Z$1(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=wn$1(!1,w$2.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function wn$1(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[Cn]=!0,e.cancellationCode=n,e}function bi$1(t){return bn(t)&&Z$1(t.url)}function bn(t){return!!t&&t[Cn]}var Xt$3=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Ft$2(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=le(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=le(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=le(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=le(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new yt$1(o.value.snapshot))}),n.children.length&&this.forwardEvent(new vt$1(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Ft$2(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),Ft$2(c.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}};var wt$1=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var he$2=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Ii$1(t,n,e){let r=t._root;return Me(r,n?n._root:null,e,[r.value])}function Ei$1(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ce$1(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!wD(t)?t:n.get(t):r}function Me(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=le(n);return t.children.forEach(s=>{Ai$1(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,c])=>_e$2(c,e.getContext(s),e,i)),i}function Ai$1(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=Mi$1(s,o,o.routeConfig.runGuardsAndResolvers);a?i.canActivateChecks.push(new wt$1(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Me(t,n,c?c.children:null,r,i):Me(t,n,e,r,i),a&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new he$2(c.outlet.component,s))}else s&&_e$2(n,c,e,i),i.canActivateChecks.push(new wt$1(r)),o.component?Me(t,null,c?c.children:null,r,i):Me(t,null,e,r,i);return i}function Mi$1(t,n,e){if(typeof e==`function`)return Tr(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ne(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ne(t.url,n.url)||!F$1(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Zt$2(t,n)||!F$1(t.queryParams,n.queryParams);default:return!Zt$2(t,n)}}function _e$2(t,n,e,r){let i=le(t),o=t.value;Object.entries(i).forEach(([s,c])=>{o.component?n?_e$2(c,n.children.getContext(s),n.children,r):_e$2(c,null,null,r):_e$2(c,e?e.getContext(s):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new he$2(n.outlet.component,o)):r.canDeactivateChecks.push(new he$2(null,o)):r.canDeactivateChecks.push(new he$2(null,o))}function ze$2(t){return typeof t==`function`}function Ni$1(t){return typeof t==`boolean`}function Ti$1(t){return t&&ze$2(t.canLoad)}function _i$1(t){return t&&ze$2(t.canActivate)}function Di$1(t){return t&&ze$2(t.canActivateChild)}function Ui$1(t){return t&&ze$2(t.canDeactivate)}function Oi$1(t){return t&&ze$2(t.canMatch)}function In(t){return t instanceof uo$1||t?.name===`EmptyError`}var rt$2=Symbol(`INITIAL_VALUE`);function ye$1(){return ip(t=>Cc(t.map(n=>n.pipe(In$1(1),xc(rt$2)))).pipe(K$2(n=>{for(let e of n)if(e!==!0){if(e===rt$2)return rt$2;if(e===!1||Pi$1(e))return e}return!0}),it$3(n=>n!==rt$2),In$1(1)))}function Pi$1(t){return Z$1(t)||t instanceof me$1}function En(t){return t.aborted?ze$3(void 0).pipe(In$1(1)):new M(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function An(t){return go$1(En(t))}function Li$1(t){return _n$1(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?ze$3(ne$1(A$1({},n),{guardsResult:!0})):ji(o,e,r).pipe(_n$1(s=>s&&Ni$1(s)?xi$1(e,i,t):ze$3(s)),K$2(s=>ne$1(A$1({},n),{guardsResult:s})))})}function ji(t,n,e){return ot$2(t).pipe(_n$1(r=>Fi$1(r.component,r.route,e,n)),lD(r=>r!==!0,!0))}function xi$1(t,n,e){return ot$2(n).pipe(Nc(r=>vr($i$1(r.route.parent,e),ki$1(r.route,e),qi(t,r.path),zi$1(t,r.route))),lD(r=>r!==!0,!0))}function ki$1(t,n){return t!==null&&n&&n(new mt$2(t)),ze$3(!0)}function $i$1(t,n){return t!==null&&n&&n(new gt$1(t)),ze$3(!0)}function zi$1(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return ze$3(!0);return ze$3(e.map(i=>oD(()=>{let o=n._environmentInjector,s=Ce$1(i,o);return ae(_i$1(s)?s.canActivate(n,t):Tr(o,()=>s(n,t))).pipe(lD())}))).pipe(ye$1())}function qi(t,n){let e=n[n.length-1];return ze$3(n.slice(0,n.length-1).reverse().map(o=>Ei$1(o)).filter(o=>o!==null).map(o=>oD(()=>{return ze$3(o.guards.map(c=>{let a=o.node._environmentInjector,u=Ce$1(c,a);return ae(Di$1(u)?u.canActivateChild(e,t):Tr(a,()=>u(e,t))).pipe(lD())})).pipe(ye$1())}))).pipe(ye$1())}function Fi$1(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return ze$3(!0);return ze$3(i.map(s=>{let c=n._environmentInjector,a=Ce$1(s,c);return ae(Ui$1(a)?a.canDeactivate(t,n,e,r):Tr(c,()=>a(t,n,e,r))).pipe(lD())})).pipe(ye$1())}function Hi(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return ze$3(!0);return ze$3(o.map(c=>{let a=Ce$1(c,t),d=ae(Ti$1(a)?a.canLoad(n,e):Tr(t,()=>a(n,e)));return i?d.pipe(An(i)):d})).pipe(ye$1(),Mn(r))}function Mn(t){return Ob(Gt$4(n=>{if(typeof n!=`boolean`)throw Ct$1(t,n)}),K$2(n=>n===!0))}function Bi(t,n,e,r,i,o){let s=n.canMatch;if(!s||s.length===0)return ze$3(!0);return ze$3(s.map(a=>{let u=Ce$1(a,t);return ae(Oi$1(u)?u.canMatch(n,e,i):Tr(t,()=>u(n,e,i))).pipe(An(o))})).pipe(ye$1(),Mn(r))}var B$1=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var ke$1=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Vi$1(t){throw new g$1(4e3,!1)}function Gi$1(t){throw wn$1(!1,w$2.GuardRejected)}var er=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[f])throw Vi$1(`${n.redirectTo}`);i=i.children[f]}}async applyRedirectCommands(n,e,r,i,o){let s=await Wi$1(e,i,o);if(s instanceof I$1)throw new ke$1(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]===`/`)throw new ke$1(c);return c}applyRedirectCreateUrlTree(n,e,r,i){return new I$1(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),s=Object.create(null);return Object.entries(e.children).forEach(([c,a])=>{s[c]=this.createSegmentGroup(n,a,r,i)}),new m(o,s)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new g$1(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function Wi$1(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return st$1(ae(Tr(e,()=>r(n))))}function Qi$1(t,n){return t.providers&&!t._injector&&(t._injector=Vg(t.providers,n,`Route: ${t.path}`)),t._injector??n}function $$2(t){return t.outlet||f}function Ki$1(t,n){let e=t.filter(r=>$$2(r)===n);return e.push(...t.filter(r=>$$2(r)!==n)),e}var tr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Nn$1(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Yi$1(t,n,e,r,i,o,s){let c=Tn(t,n,e);if(!c.matched)return ze$3(c);let a=Nn$1(o(c));return r=Qi$1(n,r),Bi(r,n,e,i,a,s).pipe(K$2(u=>u===!0?c:A$1({},tr)))}function Tn(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?A$1({},tr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||Xr)(e,t,n);if(!i)return A$1({},tr);let o={};Object.entries(i.posParams??{}).forEach(([c,a])=>{o[c]=a.path});let s=i.consumed.length>0?A$1(A$1({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Zr(t,n,e,r,i){return e.length>0&&Xi$1(t,e,r,i)?{segmentGroup:new m(n,Ji$1(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&eo(t,e,r)?{segmentGroup:new m(t.segments,Zi$1(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function Zi$1(t,n,e,r){let i={};for(let o of e)if(Et$2(t,n,o)&&!r[$$2(o)]){let s=new m([],{});i[$$2(o)]=s}return A$1(A$1({},r),i)}function Ji$1(t,n){let e={};e[f]=n;for(let r of t)if(r.path===``&&$$2(r)!==f){let i=new m([],{});e[$$2(r)]=i}return e}function Xi$1(t,n,e,r){return e.some(i=>!Et$2(t,n,i)||!($$2(i)!==f)?!1:!(r!==void 0&&$$2(i)===r))}function eo(t,n,e){return e.some(r=>Et$2(t,n,r))}function Et$2(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function to(t,n,e){return n.length===0&&!t.children[e]}var rr=class{};async function ro(t,n,e,r,i,o,s,c){return new nr(t,n,e,r,i,s,o,c).recognize()}var no=31;var nr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,s,c,a){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=a,this.applyRedirects=new er(this.urlSerializer,this.urlTree)}noMatchError(n){return new g$1(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Zr(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),o=new je$1(``,new D(r,e)),s=dn$1(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new ve$1([],Object.freeze({}),Object.freeze(A$1({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,f,e),rootSnapshot:e}}catch(r){if(r instanceof ke$1)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof B$1?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let s=await this.processSegment(n,e,r,r.segments,i,!0,o);return s instanceof D?[s]:[]}async processChildren(n,e,r,i){let o=[];for(let a of Object.keys(r.children))a===`primary`?o.unshift(a):o.push(a);let s=[];for(let a of o){let u=r.children[a],d=Ki$1(e,a),v=await this.processSegmentGroup(n,d,u,a,i);s.push(...v)}let c=_n(s);return io(c),c}async processSegment(n,e,r,i,o,s,c){for(let a of e)try{return await this.processSegmentAgainstRoute(a._injector??n,e,a,r,i,o,s,c)}catch(u){if(u instanceof B$1||In(u))continue;throw u}if(to(r,i,o))return new rr;throw new B$1(r)}async processSegmentAgainstRoute(n,e,r,i,o,s,c,a){if($$2(r)!==s&&(s===f||!Et$2(i,o,r)))throw new B$1(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,a);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s,a);throw new B$1(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,s,c){let{matched:a,parameters:u,consumedSegments:d,positionalParamSegments:v,remainingSegments:g}=Tn(e,i,o);if(!a)throw new B$1(e);typeof i.redirectTo==`string`&&i.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>no&&(this.allowRedirects=!1));let E=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let j=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,v,Nn$1(E),n),J=await this.applyRedirects.lineralizeSegments(i,j);return this.processSegment(n,r,e,J.concat(g),s,!1,c)}createSnapshot(n,e,r,i,o){let s=new ve$1(r,i,Object.freeze(A$1({},this.urlTree.queryParams)),this.urlTree.fragment,so(e),$$2(e),e.component??e._loadedComponent??null,e,ao(e),n),c=ar(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}async matchSegmentAgainstRoute(n,e,r,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=X=>this.createSnapshot(n,r,X.consumedSegments,X.parameters,s),a=await st$1(Yi$1(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!a?.matched)throw new B$1(e);n=r._injector??n;let{routes:u}=await this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:v,consumedSegments:g,remainingSegments:E}=a,j=this.createSnapshot(n,r,g,v,s),{segmentGroup:J,slicedSegments:be}=Zr(e,g,E,u,o);if(be.length===0&&J.hasChildren())return new D(j,await this.processChildren(d,u,J,j));if(u.length===0&&be.length===0)return new D(j,[]);let Tt=$$2(r)===o,Fe=await this.processSegment(d,u,J,be,Tt?f:o,!0,j);return new D(j,Fe instanceof D?[Fe]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await st$1(Hi(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Gi$1(e)}return{routes:[],injector:n}}};function io(t){t.sort((n,e)=>n.value.outlet===f?-1:e.value.outlet===f?1:n.value.outlet.localeCompare(e.value.outlet))}function oo(t){let n=t.value.routeConfig;return n&&n.path===``}function _n(t){let n=[],e=new Set;for(let r of t){if(!oo(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=_n(r.children);n.push(new D(r.value,i))}return n.filter(r=>!e.has(r))}function so(t){return t.data||{}}function ao(t){return t.resolve||{}}function co(t,n,e,r,i,o,s){return _n$1(async c=>{let{state:a,tree:u}=await ro(t,n,e,r,c.extractedUrl,i,o,s);return ne$1(A$1({},c),{targetSnapshot:a,urlAfterRedirects:u})})}function uo(t){return _n$1(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return ze$3(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let a of Dn(c))o.add(a);let s=0;return ot$2(o).pipe(Nc(c=>i.has(c)?lo(c,e,t):(c.data=ar(c,c.parent,t).resolve,ze$3(void 0))),Gt$4(()=>s++),dD(1),_n$1(c=>s===o.size?ze$3(n):Dn$1))})}function Dn(t){return[t,...t.children.map(e=>Dn(e)).flat()]}function lo(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!Rn$1(r)&&(i[$e$1]=r.title),oD(()=>(t.data=ar(t,t.parent,e).resolve,ho(i,t,n).pipe(K$2(o=>(t._resolvedData=o,t.data=A$1(A$1({},t.data),o),null)))))}function ho(t,n,e){let r=Bt$3(t);if(r.length===0)return ze$3({});let i={};return ot$2(r).pipe(_n$1(o=>fo(t[o],n,e).pipe(lD(),Gt$4(s=>{if(s instanceof me$1)throw Ct$1(new Y$1,s);i[o]=s}))),dD(1),K$2(()=>i),fo$1(o=>In(o)?Dn$1:Sc(o)))}function fo(t,n,e){let r=n._environmentInjector,i=Ce$1(t,r);return ae(i.resolve?i.resolve(n,e):Tr(r,()=>i(n,e)))}var Un=new y$1(``);function ir(t){return ip(n=>{let e=t(n);return e?ot$2(e).pipe(K$2(()=>n)):ze$3(n)})}var hr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===f);return r}getResolvedTitleForRoute(e){return e.data[$e$1]}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:()=>h(On$1)})}return t})();var On$1=(()=>{class t extends hr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(I$2(p8))};static ɵprov=R$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var we=new y$1(``,{factory:()=>({})});var qe$1=new y$1(``);var Pn$1=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=h(pC);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let s=await jn(bH(await tn$3(Tr(e,()=>r.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await Ln(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:t.ɵfac})}return t})();async function Ln(t,n,e,r){let o=await jn(bH(await tn$3(Tr(e,()=>t.loadChildren())))),s;o instanceof Bg||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),r&&r(t);let c,a,d;return Array.isArray(s)?a=s:(c=s.create(e).injector,d=s,a=c.get(qe$1,[],{optional:!0,self:!0}).flat()),{routes:a.map(dr),injector:c,factory:d}}async function jn(t){return t}var At$3=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:()=>h(po)})}return t})();var po=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:t.ɵfac})}return t})();var xn$1=new y$1(``);var go=()=>{};var kn=new y$1(``);var $n=(()=>{class t{currentNavigation=xt$1(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=xt$1(null);events=new H;transitionAbortWithErrorSubject=new H;configLoader=h(Pn$1);environmentInjector=h(ae$1);destroyRef=h(Ie$1);urlSerializer=h(Re$1);rootContexts=h(Se);location=h(Qv);inputBindingEnabled=h(It$2,{optional:!0})!==null;titleStrategy=h(hr);options=h(we,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ri$1;urlHandlingStrategy=h(At$3);createViewTransition=h(xn$1,{optional:!0});navigationErrorHandler=h(kn,{optional:!0});routerResourcesFeature=h(Un,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>ze$3(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new ft$1(i)),r=i=>this.events.next(new pt$2(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;Zr$1(()=>{this.transitions?.next(ne$1(A$1({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new bn$1(null),this.transitions.pipe(it$3(r=>r!==null),ip(r=>{let i=!0,o=!1,s=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return ze$3(r).pipe(ip(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,w$2.SupersededByNewNavigation),Dn$1;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl==`string`?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:u?ne$1(A$1({},u),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&v!==`reload`)return this.events.next(new V(a.id,this.urlSerializer.serialize(a.rawUrl),``,Ue$1.IgnoredSameUrlNavigation)),a.resolve(!1),Dn$1;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return ze$3(a).pipe(ip(g=>(this.events.next(new oe(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Dn$1:Promise.resolve(g))),co(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),Gt$4(g=>{r.targetSnapshot=g.targetSnapshot,r.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=g.urlAfterRedirects,E)),this.events.next(new Pe$1)}),ip(g=>ot$2(r.routesRecognizeHandler.deferredHandle??ze$3(void 0)).pipe(K$2(()=>g))),Gt$4(()=>{let g=new Oe(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:g,extractedUrl:E,source:j,restoredState:J,extras:be}=a,Tt=new oe(g,this.urlSerializer.serialize(E),j,J);this.events.next(Tt);let Fe=mn$1(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=ne$1(A$1({},a),{targetSnapshot:Fe,urlAfterRedirects:E,extras:ne$1(A$1({},be),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(X=>(X.finalUrl=E,X)),ze$3(r)}else return this.events.next(new V(a.id,this.urlSerializer.serialize(a.extractedUrl),``,Ue$1.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Dn$1}),K$2(a=>{let u=new ut$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(u),this.currentTransition=r=ne$1(A$1({},a),{guards:Ii$1(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),Li$1(a=>this.events.next(a)),ip(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!=`boolean`)throw Ct$1(this.urlSerializer,a.guardsResult);let u=new lt$2(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(u),!c())return Dn$1;if(!a.guardsResult)return this.cancelNavigationTransition(a,``,w$2.GuardRejected),Dn$1;if(a.guards.canActivateChecks.length===0)return ze$3(a);let d=new dt$2(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(d),!c())return Dn$1;let v=!1;return ze$3(a).pipe(uo(this.paramsInheritanceStrategy),Gt$4({next:()=>{v=!0;let g=new ht$2(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)},complete:()=>{v||this.cancelNavigationTransition(a,``,w$2.NoDataFromResolver)}}))}),ir(a=>{let u=v=>{let g=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let E=v._environmentInjector;g.push(this.configLoader.loadComponent(E,v.routeConfig).then(j=>{v.component=j}))}for(let E of v.children)g.push(...u(E));return g},d=u(a.targetSnapshot.root);return d.length===0?ze$3(a):ot$2(Promise.all(d).then(()=>a))}),ip(a=>{let{newlyCreatedRoutes:u,state:d}=Si$1(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=r=a=ne$1(A$1({},a),{targetRouterState:d,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=d,v)),ze$3(a)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(a=>a),ir(()=>this.afterPreactivation()),ip(()=>{let{currentSnapshot:a,targetSnapshot:u}=r,d=this.createViewTransition?.(this.environmentInjector,a.root,u.root);return d?ot$2(d).pipe(K$2(()=>r)):ze$3(r)}),In$1(1),ip(a=>{i=!1,this.events.next(new pe$2);let u=r.beforeActivateHandler.deferredHandle;return u?ot$2(u.then(()=>a)):ze$3(a)}),Gt$4(a=>{new Xt$3(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),a.newlyCreatedRoutes?.clear(),c()&&(zn(a.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=go,u)),this.lastSuccessfulNavigation.set(Zr$1(this.currentNavigation)),this.events.next(new z$1(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),go$1(En(s.signal).pipe(it$3(()=>!o&&i),Gt$4(()=>{this.cancelNavigationTransition(r,s.signal.reason+``,w$2.Aborted)}))),Gt$4({complete:()=>{o=!0}}),go$1(this.transitionAbortWithErrorSubject.pipe(Gt$4(a=>{throw a}))),po$1(()=>{s.abort(),o||this.cancelNavigationTransition(r,``,w$2.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),fo$1(a=>{if(o=!0,Jr(r),this.destroyed)return r.resolve(!1),Dn$1;if(bn(a))this.events.next(new L$1(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),bi$1(a)?this.events.next(new ge$2(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let u=new se(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let d=Tr(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(d instanceof me$1){let{message:v,cancellationCode:g}=Ct$1(this.urlSerializer,d);this.events.next(new L$1(r.id,this.urlSerializer.serialize(r.extractedUrl),v,g)),this.events.next(new ge$2(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(u),a}catch(d){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(d)}}return Dn$1}))}))}cancelNavigationTransition(e,r,i){Jr(e);let o=new L$1(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=Zr$1(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:t.ɵfac})}return t})();function vo(t){return t!==Te$2}function Jr(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;zn(t.targetRouterState)}function zn(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var qn=new y$1(``);var Fn=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:()=>h(mo)})}return t})();var bt$1=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var mo=(()=>{class t extends bt$1{static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:t.ɵfac})}return t})();var Mt$1=(()=>{class t{urlSerializer=h(Re$1);options=h(we,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=h(Qv);urlHandlingStrategy=h(At$3);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new I$1;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=i??o;return s instanceof I$1?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=mn$1(null,h(ae$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:()=>h(yo)})}return t})();var yo=(()=>{class t extends Mt$1{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof oe?this.updateStateMemento():e instanceof V?this.commitTransition(r):e instanceof Oe?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof pe$2?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof L$1&&!vn(e)?this.restoreHistory(r):e instanceof se?this.restoreHistory(r,!0):e instanceof z$1&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:s,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,u=A$1(A$1({},c),this.generateNgRouterState(o,a,r));this.location.replaceState(e,``,u)}else{let a=A$1(A$1({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,a)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?A$1({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):A$1({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:t.ɵfac})}return t})();function fr(t,n){t.events.pipe(it$3(e=>e instanceof z$1||e instanceof L$1||e instanceof se||e instanceof V),K$2(e=>e instanceof z$1||e instanceof V?0:(e instanceof L$1?e.code===w$2.Redirect||e.code===w$2.SupersededByNewNavigation:!1)?2:1),it$3(e=>e!==2),In$1(1)).subscribe(()=>{n()})}var ce$1=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=h(Zg);stateManager=h(Mt$1);options=h(we,{optional:!0})||{};pendingTasks=h($n$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=h($n);urlSerializer=h(Re$1);location=h(Qv);urlHandlingStrategy=h(At$3);injector=h(ae$1);_events=new H;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=h(Fn);injectorCleanup=h(qn,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=h(qe$1,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!h(It$2,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new W$1;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=Zr$1(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof L$1&&r.code!==w$2.Redirect&&r.code!==w$2.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof z$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof ge$2){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),a=A$1({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||vo(i.source)},s);this.scheduleNavigation(c,Te$2,null,a,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}mi$1(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Te$2,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let s=i?.navigationId?i:null,c=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=ne$1(A$1({},o),{browserUrl:e})),i){let u=A$1({},i);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(o.state=u)}let a=this.parseUrl(c);this.scheduleNavigation(a,r,s,o).catch(u=>{this.disposed||this.injector.get(Mt$2)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Zr$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(dr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:c,preserveFragment:a}=r,u=a?this.currentUrlTree.fragment:s,d=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:d=A$1(A$1({},this.currentUrlTree.queryParams),o);break;case`preserve`:d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let v;try{v=hn(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return fn$1(v,e,d,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Z$1(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Te$2,null,r)}navigate(e,r={skipLocationChange:!1}){return Ro(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Xt$4(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=A$1({},or):r===!1?i=A$1({},fe$2):i=A$1(A$1({},fe$2),r),Z$1(e))return Vt$2(this.currentUrlTree,e,i);let o=this.parseUrl(e);return Vt$2(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let c,a,u;s?(c=s.resolve,a=s.reject,u=s.promise):u=new Promise((v,g)=>{c=v,a=g});let d=this.pendingTasks.add();return fr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:a,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:t.ɵfac})}return t})();function Ro(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new g$1(4008,!1)}var Co=(()=>{class t{router=h(ce$1);stateManager=h(Mt$1);fragment=xt$1(``);queryParams=xt$1({});path=xt$1(``);serializer=h(Re$1);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof z$1&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new I$1(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=k$1({token:t,factory:t.ɵfac})}return t})();var Nt$2=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=h(new xa(`href`),{optional:!0});reactiveHref=vC(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Zr$1(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Zr$1(this._target)}_target=xt$1(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Zr$1(this._queryParams)}_queryParams=xt$1(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Zr$1(this._fragment)}_fragment=xt$1(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Zr$1(this._queryParamsHandling)}_queryParamsHandling=xt$1(void 0);set state(e){this._state.set(e)}get state(){return Zr$1(this._state)}_state=xt$1(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Zr$1(this._info)}_info=xt$1(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Zr$1(this._relativeTo)}_relativeTo=xt$1(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Zr$1(this._preserveFragment)}_preserveFragment=xt$1(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Zr$1(this._skipLocationChange)}_skipLocationChange=xt$1(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Zr$1(this._replaceUrl)}_replaceUrl=xt$1(!1);browserUrl=Vv(void 0);isAnchorElement;onChanges=new H;applicationErrorHandler=h(Mt$2);options=h(we,{optional:!0});reactiveRouterState=h(Co);constructor(e,r,i,o,s,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=s,this.locationStrategy=c;let a=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a===`a`||a===`area`||!!(typeof customElements==`object`&&customElements.get(a)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=xt$1(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Z$1(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,s){let c=this._urlTree();if(c===null||this.isAnchorElement&&(e!==0||r||i||o||s||typeof this.target==`string`&&this.target!=`_self`))return!0;let a=this.browserUrl(),u=A$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},a!==void 0&&{browserUrl:a});return this.router.navigateByUrl(c,u)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}_urlTree=mC(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i===`preserve`||i===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let r=this.routerLinkInput();return r===null||!this.router.createUrlTree?null:Z$1(r)?r:this.router.createUrlTree(r,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,r)=>this.computeHref(e)===this.computeHref(r)});get urlTree(){return Zr$1(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(Xe$1(ce$1),Xe$1(G$2),Rl(`tabindex`),Xe$1(Xn$1),Xe$1(le$1),Xe$1(Ra))};static ɵdir=Je$1({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&rv(`click`,function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&rr$1(`href`,i.reactiveHref(),I_)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,yt$2],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,yt$2],replaceUrl:[2,`replaceUrl`,`replaceUrl`,yt$2],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[ga]})}return t})();var wo=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new ke$2;link=h(Nt$2,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(s=>{s instanceof z$1&&this.update()})}ngAfterContentInit(){ze$3(this.links.changes,ze$3(null)).pipe(lo$1()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=ot$2(e).pipe(lo$1()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let r=Array.isArray(e)?e:e.split(` `);this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=A$1({},fe$2):bo(r)?i=r:r.exact??!1?i=A$1({},or):i=A$1({},fe$2),o=>{let s=o.urlTree;return s?Zr$1(sr(s,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(Xe$1(ce$1),Xe$1(le$1),Xe$1(Xn$1),Xe$1(Uv))};static ɵdir=Je$1({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&iv(o,Nt$2,5),r&2){let s;TS(s=NS())&&(i.links=s)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[ga]})}return t})();function bo(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Io=new y$1(``);function Eo(t,...n){return tn$4([{provide:qe$1,multi:!0,useValue:t},{provide:G$2,useFactory:Ao},{provide:yd,multi:!0,useFactory:Mo},n.map(e=>e.ɵproviders)])}function Ao(){return h(ce$1).routerState.root}function Mo(){let t=h(Q$1);return n=>{let e=t.get(nr$1);if(n!==e.components[0])return;let r=t.get(ce$1),i=t.get(No);t.get(To)===1&&r.initialNavigation(),t.get(_o,null,{optional:!0})?.setUpPreloading(),t.get(Io,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var No=new y$1(``,{factory:()=>new H});var To=new y$1(``,{factory:()=>1});var _o=new y$1(``);var g=`fincontrol_token`;var x$1=class o{http=h(Xa);router=h(ce$1);tokenAtual=xt$1(localStorage.getItem(g));token=this.tokenAtual.asReadonly();claims=mC(()=>P$2(this.tokenAtual()));email=mC(()=>this.claims()?.upn??``);isAdmin=mC(()=>this.claims()?.groups?.includes(`ADMIN`)??!1);isLoggedIn(){let e=this.claims();return e?e.exp*1e3<=Date.now()?(this.limpar(),!1):!0:!1}login(e){return this.http.post(`${VG}/auth/login`,e).pipe(Gt$4(t=>this.salvar(t.token)))}register(e){return this.http.post(`${VG}/auth/register`,e)}logout(e){this.limpar(),this.router.navigate([`/login`],{queryParams:e?{motivo:e}:{}})}rotaInicial(){return this.isAdmin()?`/admin/painel`:`/dashboard`}salvar(e){localStorage.setItem(g,e),this.tokenAtual.set(e)}limpar(){localStorage.removeItem(g),this.tokenAtual.set(null)}static ɵfac=function(t){return new(t||o)};static ɵprov=R$1({token:o,factory:o.ɵfac,providedIn:`root`})};function P$2(o){if(!o)return null;try{let e=o.split(`.`)[1].replace(/-/g,`+`).replace(/_/g,`/`),t=decodeURIComponent(atob(e).split(``).map(n=>`%`+n.charCodeAt(0).toString(16).padStart(2,`0`)).join(``));return JSON.parse(t)}catch{return null}}var A=class o{pequeno=Vv(!1);fundoClaro=Vv(!1);cor(){return this.fundoClaro()?`#3B1478`:`#FFFFFF`}static ɵfac=function(t){return new(t||o)};static ɵcmp=Oe$1({type:o,selectors:[[`app-logo`]],inputs:{pequeno:[1,`pequeno`],fundoClaro:[1,`fundoClaro`]},decls:14,vars:9,consts:[[1,`logo`],[`viewBox`,`0 0 120 120`,`aria-hidden`,`true`],[`cx`,`60`,`cy`,`60`,`r`,`40`,`fill`,`none`,`stroke-width`,`16`,`stroke-dasharray`,`76.8 174.5`,`transform`,`rotate(45 60 60)`],[`cx`,`60`,`cy`,`60`,`r`,`40`,`fill`,`none`,`stroke-opacity`,`0.72`,`stroke-width`,`16`,`stroke-dasharray`,`60 191.3`,`transform`,`rotate(163 60 60)`],[`cx`,`60`,`cy`,`60`,`r`,`40`,`fill`,`none`,`stroke-opacity`,`0.45`,`stroke-width`,`16`,`stroke-dasharray`,`40.5 210.8`,`transform`,`rotate(257 60 60)`],[`x`,`64`,`y`,`68`,`width`,`9`,`height`,`10`,`rx`,`1.5`,`fill`,`#FACC15`],[`x`,`77`,`y`,`60`,`width`,`9`,`height`,`18`,`rx`,`1.5`,`fill`,`#FACC15`],[`x`,`90`,`y`,`52`,`width`,`9`,`height`,`26`,`rx`,`1.5`,`fill`,`#FACC15`],[`points`,`58,58 74,51 87,42 100.3,26.2`,`fill`,`none`,`stroke-width`,`5`,`stroke-linecap`,`round`,`stroke-linejoin`,`round`],[`points`,`106,18 105.2,29.6 95.4,22.8`],[1,`nome`]],template:function(t,n){t&1&&(ln$3(0,`span`,0),sh(),ln$3(1,`svg`,1),fn$2(2,`circle`,2)(3,`circle`,3)(4,`circle`,4)(5,`rect`,5)(6,`rect`,6)(7,`rect`,7)(8,`polyline`,8)(9,`polygon`,9),dn$2(),ah(),ln$3(10,`span`,10),QS(11,`Fin`),ln$3(12,`strong`),QS(13,`Control`),dn$2()()()),t&2&&(vt$2(`pequeno`,n.pequeno())(`claro`,n.fundoClaro()),ni$1(2),rr$1(`stroke`,n.cor()),ni$1(),rr$1(`stroke`,n.cor()),ni$1(),rr$1(`stroke`,n.cor()),ni$1(4),rr$1(`stroke`,n.cor()),ni$1(),rr$1(`fill`,n.cor()))},styles:[`.logo[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:10px;color:#fff;font-size:28px;letter-spacing:-.01em;line-height:1}.logo.claro[_ngcontent-%COMP%]{color:#3b1478}svg[_ngcontent-%COMP%]{width:1.45em;height:1.45em}.nome[_ngcontent-%COMP%]{font-weight:400}.nome[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:600;color:#facc15}.claro[_ngcontent-%COMP%]   .nome[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:inherit}.pequeno[_ngcontent-%COMP%]{font-size:18px;gap:8px}`]})};var n=class t{http=h(Xa);apiUrl=`${VG}/usuarios/me`;perfil=xt$1(null);carregarPerfil(){return this.http.get(this.apiUrl).pipe(Gt$4(r=>this.perfil.set(r)))}atualizarPerfil(r){return this.http.put(this.apiUrl,r).pipe(Gt$4(e=>this.perfil.set(e)))}static ɵfac=function(e){return new(e||t)};static ɵprov=R$1({token:t,factory:t.ɵfac,providedIn:`root`})};var u=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new H;bulk={select:e=>this._select(e),deselect:e=>this._deselect(e),setSelection:e=>this._setSelection(e)};constructor(e=!1,t,o=!0,n){this._multiple=e,this._emitChanges=o,this.compareWith=n,t&&t.length&&(e?t.forEach(s=>this._markSelected(s)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){return this._select(e)}deselect(...e){return this._deselect(e)}setSelection(...e){return this._setSelection(e)}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_select(e){this._verifyValueAssignment(e),e.forEach(o=>this._markSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(e){this._verifyValueAssignment(e),e.forEach(o=>this._unmarkSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(e){this._verifyValueAssignment(e);let t=this.selected,o=new Set(e.map(s=>this._getConcreteValue(s)));e.forEach(s=>this._markSelected(s)),t.filter(s=>!o.has(this._getConcreteValue(s,o))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let o of t)if(this.compareWith(e,o))return o;return e}else return e}};var x=class{applyChanges(e,t,o,n,s){e.forEachOperation((l,d,h)=>{let i,a;if(l.previousIndex==null){let m=o(l,d,h);i=t.createEmbeddedView(m.templateRef,m.context,m.index),a=I$3.INSERTED}else h==null?(t.remove(d),a=I$3.REMOVED):(i=t.get(d),t.move(i,h),a=I$3.MOVED);s&&s({context:i?.context,operation:a,record:l})})}detach(){}};var w$1=(()=>{class c{_animationsDisabled=eo$1();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(o){return new(o||c)};static ɵcmp=Oe$1({type:c,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(o,n){o&2&&vt$2(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(o,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return c})();var $e=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(i){return new(i||n)(Xe$1(Xn$1),Xe$1(le$1))};static ɵdir=Je$1({type:n})}return n})();var Q=(()=>{class n extends $e{static ɵfac=(()=>{let e;return function(r){return(e||(e=gm(n)))(r||n)}})();static ɵdir=Je$1({type:n,features:[Wr$1]})}return n})();var G$1=new y$1(``);var mt$1={provide:G$1,useExisting:bs(()=>qe),multi:!0};function vt(){let n=Lt$3()?Lt$3().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var _t$1=new y$1(``);var qe=(()=>{class n extends $e{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode??=!vt()}writeValue(e){let i=e??``;this.setProperty(`value`,i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(i){return new(i||n)(Xe$1(Xn$1),Xe$1(le$1),Xe$1(_t$1,8))};static ɵdir=Je$1({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&rv(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Iv([mt$1]),Wr$1]})}return n})();function ge$1(n){return n==null||pe$1(n)===0}function pe$1(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var B=new y$1(``);var me=new y$1(``);var yt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var ue=class{static min(t){return ze$1(t)}static max(t){return Ct(t)}static required(t){return Ze(t)}static requiredTrue(t){return Vt$1(t)}static email(t){return Dt(t)}static minLength(t){return bt(t)}static maxLength(t){return At$2(t)}static pattern(t){return Mt(t)}static nullValidator(t){return $$1()}static compose(t){return et$1(t)}static composeAsync(t){return tt(t)}};function ze$1(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Ct(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Ze(n){return ge$1(n.value)?{required:!0}:null}function Vt$1(n){return n.value===!0?null:{required:!0}}function Dt(n){return ge$1(n.value)||yt.test(n.value)?null:{email:!0}}function bt(n){return t=>{let e=t.value?.length??pe$1(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function At$2(n){return t=>{let e=t.value?.length??pe$1(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Mt(n){if(!n)return $$1;let t,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(ge$1(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function $$1(n){return null}function Xe(n){return n!=null}function Ye(n){return Na(n)?ot$2(n):n}function Ke(n){let t={};return n.forEach(e=>{t=e!=null?A$1(A$1({},t),e):t}),Object.keys(t).length===0?null:t}function Je(n,t){return t.map(e=>e(n))}function Et$1(n){return!n.validate}function Qe(n){return n.map(t=>Et$1(t)?t:e=>t.validate(e))}function et$1(n){if(!n)return null;let t=n.filter(Xe);return t.length==0?null:function(e){return Ke(Je(e,t))}}function ve(n){return n!=null?et$1(Qe(n)):null}function tt(n){if(!n)return null;let t=n.filter(Xe);return t.length==0?null:function(e){return Tc(Je(e,t).map(Ye)).pipe(K$2(Ke))}}function _e$1(n){return n!=null?tt(Qe(n)):null}function je(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function nt$1(n){return n._rawValidators}function it$1(n){return n._rawAsyncValidators}function de(n){return n?Array.isArray(n)?n:[n]:[]}function q(n,t){return Array.isArray(n)?n.includes(t):n===t}function Te$1(n,t){let e=de(t);return de(n).forEach(r=>{q(e,r)||e.push(r)}),e}function Ge(n,t){return de(t).filter(e=>!q(n,e))}var z=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ve(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=_e$1(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var _=class extends z{name;get formDirective(){return null}get path(){return null}};var R=`VALID`;var L=`INVALID`;var F=`PENDING`;var P$1=`DISABLED`;var y=class{};var Z=class extends y{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var j=class extends y{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var T$1=class extends y{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var w=class extends y{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var X=class extends y{source;constructor(t){super(),this.source=t}};var b=class extends y{source;constructor(t){super(),this.source=t}};function ye(n){return(ee(n)?n.validators:n)||null}function Ft$1(n){return Array.isArray(n)?ve(n):n||null}function Ce(n,t){return(ee(t)?t.asyncValidators:n)||null}function wt(n){return Array.isArray(n)?_e$1(n):n||null}function ee(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function rt$1(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new g$1(1e3,``);if(!st(i,e))throw new g$1(1001,``)}function ot(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new g$1(-1002,``)})}var N=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=xt$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Zr$1(this.statusReactive)}set status(t){Zr$1(()=>this.statusReactive.set(t))}_status=mC(()=>this.statusReactive());statusReactive=xt$1(void 0);get valid(){return this.status===R}get invalid(){return this.status===L}get pending(){return this.status===F}get disabled(){return this.status===P$1}get enabled(){return this.status!==P$1}errors;get pristine(){return Zr$1(this.pristineReactive)}set pristine(t){Zr$1(()=>this.pristineReactive.set(t))}_pristine=mC(()=>this.pristineReactive());pristineReactive=xt$1(!0);get dirty(){return!this.pristine}get touched(){return Zr$1(this.touchedReactive)}set touched(t){Zr$1(()=>this.touchedReactive.set(t))}_touched=mC(()=>this.touchedReactive());touchedReactive=xt$1(!1);get untouched(){return!this.touched}_events=new H;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Te$1(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Te$1(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ge(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ge(t,this._rawAsyncValidators))}hasValidator(t){return q(this._rawValidators,t)}hasAsyncValidator(t){return q(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(ne$1(A$1({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new T$1(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new T$1(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(ne$1(A$1({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new j(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new j(!0,i))}markAsPending(t={}){this.status=F;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new w(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(ne$1(A$1({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=P$1,this.errors=null,this._forEachChild(r=>{r.disable(ne$1(A$1({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Z(this.value,i)),this._events.next(new w(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ne$1(A$1({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=R,this._forEachChild(i=>{i.enable(ne$1(A$1({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(ne$1(A$1({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===R||this.status===F)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Z(this.value,e)),this._events.next(new w(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(ne$1(A$1({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P$1:R}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Ye(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new w(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new ke$2,this.statusChanges=new ke$2}_calculateStatus(){return this._allControlsDisabled()?P$1:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(L)?L:R}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new j(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new T$1(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ee(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Ft$1(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=wt(this._rawAsyncValidators)}_updateHasRequiredValidator(){Zr$1(()=>this._hasRequired.set(this.hasValidator(ue.required)))}};function st(n,t){return Object.hasOwn(n,t)}function Nt$1(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function It$1(n,t,e,i){switch(e){case`name`:n.setAttribute(t,e,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(t,e,``):n.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(t,e,i.toString()):n.removeAttribute(t,e);break}}var ce=class{kind;context;control;message;constructor({kind:t,context:e,control:i}){this.kind=t,this.context=e,this.control=i}};function St(n){return typeof n==`number`?n:parseFloat(n)}var at$1=(()=>{class n{_validator=$$1;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):$$1,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=Je$1({type:n,features:[ga]})}return n})();var Ot$1={provide:B,useExisting:bs(()=>xt),multi:!0};var xt=(()=>{class n extends at$1{min;inputName=`min`;normalizeInput=e=>St(e);createValidator=e=>ze$1(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=gm(n)))(r||n)}})();static ɵdir=Je$1({type:n,selectors:[[`input`,`type`,`number`,`min`,``,`formControlName`,``],[`input`,`type`,`number`,`min`,``,`formControl`,``],[`input`,`type`,`number`,`min`,``,`ngModel`,``]],hostVars:1,hostBindings:function(i,r){i&2&&rr$1(`min`,r._enabled?r.min:null)},inputs:{min:`min`},standalone:!1,features:[Iv([Ot$1]),Wr$1]})}return n})();var Rt$2={provide:B,useExisting:bs(()=>lt$1),multi:!0};var lt$1=(()=>{class n extends at$1{required;inputName=`required`;normalizeInput=yt$2;createValidator=e=>Ze;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=gm(n)))(r||n)}})();static ɵdir=Je$1({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&rr$1(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Iv([Rt$2]),Wr$1]})}return n})();var Pt$1=new y$1(``);var Ve=new y$1(``,{factory:()=>De$1});var De$1=`always`;function kt$2(n,t){return[...t.path,n]}function jt$1(n,t,e=De$1){be$1(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(n.disabled),Gt$2(n,t),Ut$2(n,t),Bt$2(n,t),Tt$2(n,t)}function Be(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),K(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Y(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Tt$2(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function be$1(n,t){let e=nt$1(n);t.validator!==null?n.setValidators(je(e,t.validator)):typeof e==`function`&&n.setValidators([e]);let i=it$1(n);t.asyncValidator!==null?n.setAsyncValidators(je(i,t.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Y(t._rawValidators,r),Y(t._rawAsyncValidators,r)}function K(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=nt$1(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=it$1(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Y(t._rawValidators,i),Y(t._rawAsyncValidators,i),e}function Gt$2(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&ut(n,t)})}function Bt$2(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&ut(n,t),n.updateOn!==`submit`&&n.markAsTouched()})}function ut(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ut$2(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function dt$1(n,t){be$1(n,t)}function Ht$1(n,t){return K(n,t)}function Lt$2(n,t){if(!Object.hasOwn(n,`model`))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Wt$2(n){return Object.getPrototypeOf(n.constructor)===Q}function ct$1(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn===`submit`&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $t$1(n,t){if(!t)return null;let e,i,r;return t.forEach(o=>{o.constructor===qe?e=o:Wt$2(o)?i=o:r=o}),r||i||e||null}function qt$2(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var zt$1={provide:Pt$1,useFactory:()=>{let n=h(I,{self:!0});return{setParseErrors:t=>{n.setParseErrorSource(t)},set onReset(t){n.onReset=t}}}};var I=class extends z{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof b&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=$t$1(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,i){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(Ie$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(Uv);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new W$1,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof b&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Nt$1(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof lt$1))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,t.setCustomControlModelInput(i.value)),this.bindControlProperty(t,r,`touched`,i.touched),this.bindControlProperty(t,r,`dirty`,i.dirty),this.bindControlProperty(t,r,`valid`,i.valid),this.bindControlProperty(t,r,`invalid`,i.invalid),this.bindControlProperty(t,r,`pending`,i.pending),this.bindControlProperty(t,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(t,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);t.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,i,r){if(e[i]===r)return;e[i]=r;let o=t.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&It$1(this.renderer,t.nativeElement,i,r)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([i,r])=>new ce({context:r,kind:i,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,i=mC(()=>{let r=t();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),$s(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var J=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wn=(()=>{class n extends J{constructor(e){super(e)}static ɵfac=function(i){return new(i||n)(Xe$1(I,2))};static ɵdir=Je$1({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&vt$2(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[Wr$1]})}return n})();var Nn=(()=>{class n extends J{constructor(e){super(e)}static ɵfac=function(i){return new(i||n)(Xe$1(_,10))};static ɵdir=Je$1({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,r){i&2&&vt$2(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[Wr$1]})}return n})();var S$1=class extends N{constructor(t,e,i){super(ye(e),Ce(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){Zr$1(()=>{ot(this,!0,t),Object.keys(t).forEach(i=>{rt$1(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this._find(i);r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,ne$1(A$1({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new b(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return st(this.controls,t)?this.controls[t]:null}};var he$1=class extends S$1{};var Zt$1={provide:_,useExisting:bs(()=>Xt$2)};var k=Promise.resolve();var Xt$2=(()=>{class n extends _{callSetDisabledState;get submitted(){return Zr$1(this.submittedReactive)}_submitted=mC(()=>this.submittedReactive());submittedReactive=xt$1(!1);_directives=new Set;form;ngSubmit=new ke$2;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new S$1({},ve(e),_e$1(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){k.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){k.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){k.then(()=>{let i=this._findContainer(e.path),r=new S$1({});dt$1(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){k.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){k.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ct$1(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new X(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(i){return new(i||n)(Xe$1(B,10),Xe$1(me,10),Xe$1(Ve,8))};static ɵdir=Je$1({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&rv(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Iv([Zt$1]),Wr$1]})}return n})();function Ue(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function He(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var W=class extends N{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(ye(e),Ce(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(e)&&(e.nonNullable||e.initialValueIsDefault)&&(He(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){Zr$1(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new b(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ue(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ue(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){He(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Yt$1=n=>n instanceof W;var Kt$2=(()=>{class n extends _{callSetDisabledState;get submitted(){return Zr$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=mC(()=>this._submittedReactive());_submittedReactive=xt$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(K(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Be(e.control||null,e,!1),qt$2(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ct$1(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new X(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Be(i||null,e),Yt$1(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);dt$1(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Ht$1(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){be$1(this.form,this),this._oldForm&&K(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||n)(Xe$1(B,10),Xe$1(me,10),Xe$1(Ve,8))};static ɵdir=Je$1({type:n,features:[Wr$1,ga]})}return n})();var Jt$1={provide:_,useExisting:bs(()=>Qt$2)};var Qt$2=(()=>{class n extends Kt$2{form=null;ngSubmit=new ke$2;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=gm(n)))(r||n)}})();static ɵdir=Je$1({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&rv(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Iv([Jt$1]),Wr$1]})}return n})();var Sn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Je$1({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var en$1={provide:G$1,useExisting:bs(()=>tn$2),multi:!0};var tn$2=(()=>{class n extends Q{writeValue(e){let i=e??``;this.setProperty(`value`,i)}registerOnChange(e){this.onChange=i=>{e(i==``?null:parseFloat(i))}}static ɵfac=(()=>{let e;return function(r){return(e||(e=gm(n)))(r||n)}})();static ɵdir=Je$1({type:n,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&rv(`input`,function(s){return r.onChange(s.target.value)})(`blur`,function(){return r.onTouched()})},standalone:!1,features:[Iv([en$1]),Wr$1]})}return n})();var fe$1=class extends N{constructor(t,e,i){super(ye(e),Ce(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,i={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(t,e={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,i={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Zr$1(()=>{ot(this,!1,t),t.forEach((i,r)=>{rt$1(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(t.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((i,r)=>{i.reset(t[r],ne$1(A$1({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new b(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,i)=>{t(e,i)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var ht$1=new y$1(``);var nn$2={provide:I,useExisting:bs(()=>rn$1)};var rn$1=(()=>{class n extends I{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new ke$2;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,p,A){super(A,p,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,jt$1(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),Lt$2(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return kt$2(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(i){return new(i||n)(Xe$1(_,13),Xe$1(B,10),Xe$1(me,10),Xe$1(G$1,10),Xe$1(ht$1,8),Xe$1(Xn$1,8),Xe$1(Q$1,8))};static ɵdir=Je$1({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[Iv([nn$2,zt$1]),Wr$1,ga,qw(null)]})}return n})();var on$2={provide:G$1,useExisting:bs(()=>gt),multi:!0};function ft(n,t){return n==null?`${t}`:(t&&typeof t==`object`&&(t=`Object`),`${n}: ${t}`.slice(0,50))}function sn$1(n){return n.split(`:`)[0]}var gt=(()=>{class n extends Q{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=h(nr$1).injector;destroyRef=h(Ie$1);cdr=h(Uv);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,Wl({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let r=ft(this._getOptionId(e),e);this.setProperty(`value`,r)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){let i=sn$1(e);return this._optionMap.has(i)?this._optionMap.get(i):e}static ɵfac=(()=>{let e;return function(r){return(e||(e=gm(n)))(r||n)}})();static ɵdir=Je$1({type:n,selectors:[[`select`,`formControlName`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`formControl`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`ngModel`,``,3,`multiple`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&rv(`change`,function(s){return r.onChange(s.target.value)})(`blur`,function(){return r.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[Iv([on$2]),Wr$1]})}return n})();var On=(()=>{class n{_element;_renderer;_select;id;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(ft(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select?._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,`value`,e)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static ɵfac=function(i){return new(i||n)(Xe$1(le$1),Xe$1(Xn$1),Xe$1(gt,9))};static ɵdir=Je$1({type:n,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return n})();var an$2={provide:G$1,useExisting:bs(()=>pt$1),multi:!0};function Le$1(n,t){return n==null?`${t}`:(typeof t==`string`&&(t=`'${t}'`),t&&typeof t==`object`&&(t=`Object`),`${n}: ${t}`.slice(0,50))}function ln$1(n){return n.split(`:`)[0]}var pt$1=(()=>{class n extends Q{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i;if(Array.isArray(e)){let r=e.map(o=>this._getOptionId(o));i=(o,s)=>{o._setSelected(r.indexOf(s)>-1)}}else i=r=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let s=o;for(let p=0;p<s.length;p++){let A=s[p],te=this._getOptionValue(A.value);r.push(te)}}else{let s=i.options;for(let p=0;p<s.length;p++){let A=s[p];if(A.selected){let te=this._getOptionValue(A.value);r.push(te)}}}this.value=r,e(r)}}_registerOption(e){let i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){let i=ln$1(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}static ɵfac=(()=>{let e;return function(r){return(e||(e=gm(n)))(r||n)}})();static ɵdir=Je$1({type:n,selectors:[[`select`,`multiple`,``,`formControlName`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`formControl`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&rv(`change`,function(s){return r.onChange(s.target)})(`blur`,function(){return r.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[Iv([an$2]),Wr$1]})}return n})();var xn=(()=>{class n{_element;_renderer;_select;id;_value;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Le$1(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Le$1(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,`value`,e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,`selected`,e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static ɵfac=function(i){return new(i||n)(Xe$1(le$1),Xe$1(Xn$1),Xe$1(pt$1,9))};static ɵdir=Je$1({type:n,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return n})();var un=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({})}return n})();function We(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Rn=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return We(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new S$1(r,o)}record(e,i=null){return new he$1(this._reduceControls(e),i)}control(e,i,r){let o={};return this.useNonNullable?(We(i)?o=i:(o.validators=i,o.asyncValidators=r),new W(e,ne$1(A$1({},o),{nonNullable:!0}))):new W(e,i,r)}array(e,i,r){return new fe$1(e.map(s=>this._createControl(s)),i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof W)return e;if(e instanceof N)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static ɵfac=function(i){return new(i||n)};static ɵprov=k$1({token:n,factory:n.ɵfac})}return n})();var Pn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ht$1,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:Ve,useValue:e.callSetDisabledState??De$1}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[un]})}return n})();var nt=[`tooltip`];var at=20;var rt=new y$1(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(Q$1);return()=>Ot$2(n,{scrollThrottle:at})}});var lt=new y$1(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var et=`tooltip-panel`;var ht={passive:!0};var dt=8;var ct=8;var pt=24;var _t=200;var mt=(()=>{class n{_elementRef=h(le$1);_ngZone=h(P$3);_platform=h(De$3);_ariaDescriber=h(n3);_focusMonitor=h(cf);_dir=h(oM);_injector=h(Q$1);_viewContainerRef=h(Gr);_mediaMatcher=h(rc);_document=h(O);_renderer=h(Xn$1);_animationsDisabled=eo$1();_defaultOptions=h(lt,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=it;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=T3(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=T3(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=EN(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=EN(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new H;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=dt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(go$1(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new bt$2(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(go$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof le$1)return this._overlayRef;this._detach()}let e=this._injector.get(W$2).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${et}`,o=Et$3(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(go$1(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Dt$1(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(rt)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(go$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(go$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(go$1(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(go$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(A$1(A$1({},i.main),o.main)),this._addOffset(A$1(A$1({},i.fallback),o.fallback))])}_addOffset(t){let e=ct,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Wl(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,s;if(e===`center`?this._dir&&this._dir.value===`rtl`?s=i===`end`?`left`:`right`:s=i===`start`?`left`:`right`:s=e===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let d=this._overlayRef;if(d){let b=`${this._cssClassPrefix}-${et}-`;d.removePanelClass(b+this._currentPosition),d.addPanelClass(b+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,ht))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Wl({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!nb(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=Je$1({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&vt$2(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var it=(()=>{class n{_changeDetectorRef=h(Uv);_elementRef=h(le$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=eo$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new H;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=_t}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(e);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Oe$1({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(e,i){if(e&1&&sv(nt,7),e&2){let o;TS(o=NS())&&(i._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(e,i){e&1&&rv(`mouseleave`,function(s){return i._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(e,i){e&1&&(ln$3(0,`div`,1,0),ov(`animationend`,function(s){return i._handleAnimationEnd(s)}),ln$3(2,`div`,2),QS(3),dn$2()()),e&2&&(li$2(i.tooltipClass),vt$2(`mdc-tooltip--multiline`,i._isMultiline),ni$1(3),yv(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var Yt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[VN,ye$2,to$1,yt$3]})}return n})();var Ee=class{_box;_destroyed=new H;_resizeSubject=new H;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new M(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),t.unsubscribe(),this._elementObservables.delete(r)}}).pipe(it$3(e=>e.some(t=>t.target===r)),pD({bufferSize:1,refCount:!0}),go$1(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Tt$1=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=h(P$3);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||`content-box`;return this._observers.has(i)||this._observers.set(i,new Ee(i)),this._observers.get(i).observe(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=k$1({token:n,factory:n.ɵfac})}return n})();var ri=[`notch`];var oi=[`*`];var kt$1=[`iconPrefixContainer`];var Rt$1=[`textPrefixContainer`];var It=[`iconSuffixContainer`];var At$1=[`textSuffixContainer`];var li=[`textField`];var si=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var di=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function ci(n,r){n&1&&Xg(0,`span`,21)}function mi(n,r){if(n&1&&(ha(0,`label`,20),et$2(1,1),ai$1(2,ci,1,0,`span`,21),Dd()),n&2){let e=wS(2);Qg(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),rr$1(`for`,e._control.disableAutomaticLabeling?null:e._control.id),ni$1(2),ci$2(!e.hideRequiredMarker&&e._control.required?2:-1)}}function fi(n,r){if(n&1&&ai$1(0,mi,3,5,`label`,20),n&2)ci$2(wS()._hasFloatingLabel()?0:-1)}function ui(n,r){n&1&&Xg(0,`div`,7)}function pi(n,r){}function hi(n,r){if(n&1&&Wg(0,pi,0,0,`ng-template`,13),n&2){wS(2);Qg(`ngTemplateOutlet`,xS(1))}}function gi(n,r){if(n&1&&(ha(0,`div`,9),ai$1(1,hi,1,1,null,13),Dd()),n&2){let e=wS();Qg(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),ni$1(),ci$2(e._forceDisplayInfixLabel()?-1:1)}}function _i(n,r){n&1&&(ha(0,`div`,10,2),et$2(2,2),Dd())}function bi(n,r){n&1&&(ha(0,`div`,11,3),et$2(2,3),Dd())}function vi(n,r){}function xi(n,r){if(n&1&&Wg(0,vi,0,0,`ng-template`,13),n&2){wS();Qg(`ngTemplateOutlet`,xS(1))}}function yi(n,r){n&1&&(ha(0,`div`,14,4),et$2(2,4),Dd())}function Si(n,r){n&1&&(ha(0,`div`,15,5),et$2(2,5),Dd())}function Ni(n,r){n&1&&Xg(0,`div`,16)}function Ci(n,r){n&1&&(ha(0,`div`,18),et$2(1,6),Dd())}function wi(n,r){if(n&1&&(ha(0,`mat-hint`,22),QS(1),Dd()),n&2){let e=wS(2);Qg(`id`,e._hintLabelId),ni$1(),yv(e.hintLabel)}}function Mi(n,r){if(n&1&&(ha(0,`div`,19),ai$1(1,wi,2,2,`mat-hint`,22),et$2(2,7),Xg(3,`div`,23),et$2(4,8),Dd()),n&2){let e=wS();ni$1(),ci$2(e.hintLabel?1:-1)}}var De=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=Je$1({type:n,selectors:[[`mat-label`]]})}return n})();var Fi=new y$1(`MatError`);var Te=(()=>{class n{align=`start`;id=h(mf).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||n)};static ɵdir=Je$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,i){t&2&&(tv(`id`,i.id),rr$1(`align`,null),vt$2(`mat-mdc-form-field-hint-end`,i.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Oi=new y$1(`MatPrefix`);var Ei=new y$1(`MatSuffix`);var qt$1=new y$1(`FloatingLabelParent`);var Pt=(()=>{class n{_elementRef=h(le$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=h(Tt$1);_ngZone=h(P$3);_parent=h(qt$1);_resizeSubscription=new W$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Di(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||n)};static ɵdir=Je$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,i){t&2&&vt$2(`mdc-floating-label--float-above`,i.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function Di(n){let r=n;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var zt=`mdc-line-ripple--active`;var pe=`mdc-line-ripple--deactivating`;var Lt$1=(()=>{class n{_elementRef=h(le$1);_cleanupTransitionEnd;constructor(){let e=h(P$3),t=h(Xn$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(pe),e.add(zt)}deactivate(){this._elementRef.nativeElement.classList.add(pe)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(pe);e.propertyName===`opacity`&&i&&t.remove(zt,pe)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||n)};static ɵdir=Je$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Vt=(()=>{class n{_elementRef=h(le$1);_ngZone=h(P$3);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe$1({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,i){if(t&1&&sv(ri,5),t&2){let a;TS(a=NS())&&(i._notch=a.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,i){t&2&&vt$2(`mdc-notched-outline--notched`,i.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:oi,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,i){t&1&&(or$1(),fn$2(0,`div`,1),ln$3(1,`div`,2,0),et$2(3),dn$2(),fn$2(4,`div`,3))},encapsulation:2})}return n})();var ke=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||n)};static ɵdir=Je$1({type:n})}return n})();var Re=new y$1(`MatFormField`);var Ti=new y$1(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Bt$1=`fill`;var ki=`auto`;var jt=`fixed`;var Ri=`translateY(-50%)`;var he=(()=>{class n{_elementRef=h(le$1);_changeDetectorRef=h(Uv);_platform=h(De$3);_idGenerator=h(mf);_ngZone=h(P$3);_defaults=h(Ti,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=DH(`iconPrefixContainer`);_textPrefixContainerSignal=DH(`textPrefixContainer`);_iconSuffixContainerSignal=DH(`iconSuffixContainer`);_textSuffixContainerSignal=DH(`textSuffixContainer`);_prefixSuffixContainers=mC(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=EH(De);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=T3(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ki}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Bt$1;this._appearanceSignal.set(t)}_appearanceSignal=xt$1(Bt$1);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||jt}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||jt}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new H;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=eo$1();constructor(){let e=this._defaults,t=h(oM);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),$s(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=mC(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,i=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(xc([void 0,void 0]),K$2(()=>[t.errorState,t.userAriaDescribedBy]),fD(),it$3(([[a,o],[_,N]])=>a!==_||o!==N)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(go$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),iD(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){IH({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=mC(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let a=this._hintChildren?this._hintChildren.find(_=>_.align===`start`):null,o=this._hintChildren?this._hintChildren.find(_=>_.align===`end`):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,i;if(t){let a=this._describedByIds||e;i=e.concat(t.filter(o=>o&&!a.includes(o)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,_=t?.getBoundingClientRect().width??0,N=i?.getBoundingClientRect().width??0,Jt=a?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Ri} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${o+_}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,o+_+N+Jt]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe$1({type:n,selectors:[[`mat-form-field`]],contentQueries:function(t,i,a){if(t&1&&(av(a,i._labelChild,De,5),iv(a,ke,5)(a,Oi,5)(a,Ei,5)(a,Fi,5)(a,Te,5)),t&2){MS();let o;TS(o=NS())&&(i._formFieldControl=o.first),TS(o=NS())&&(i._prefixChildren=o),TS(o=NS())&&(i._suffixChildren=o),TS(o=NS())&&(i._errorChildren=o),TS(o=NS())&&(i._hintChildren=o)}},viewQuery:function(t,i){if(t&1&&(cv(i._iconPrefixContainerSignal,kt$1,5)(i._textPrefixContainerSignal,Rt$1,5)(i._iconSuffixContainerSignal,It,5)(i._textSuffixContainerSignal,At$1,5),sv(li,5)(kt$1,5)(Rt$1,5)(It,5)(At$1,5)(Pt,5)(Vt,5)(Lt$1,5)),t&2){MS(4);let a;TS(a=NS())&&(i._textField=a.first),TS(a=NS())&&(i._iconPrefixContainer=a.first),TS(a=NS())&&(i._textPrefixContainer=a.first),TS(a=NS())&&(i._iconSuffixContainer=a.first),TS(a=NS())&&(i._textSuffixContainer=a.first),TS(a=NS())&&(i._floatingLabel=a.first),TS(a=NS())&&(i._notchedOutline=a.first),TS(a=NS())&&(i._lineRipple=a.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,i){t&2&&vt$2(`mat-mdc-form-field-label-always-float`,i._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,i._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,i._hasIconSuffix)(`mat-form-field-invalid`,i._control.errorState)(`mat-form-field-disabled`,i._control.disabled)(`mat-form-field-autofilled`,i._control.autofilled)(`mat-form-field-appearance-fill`,i.appearance==`fill`)(`mat-form-field-appearance-outline`,i.appearance==`outline`)(`mat-form-field-hide-placeholder`,i._hasFloatingLabel()&&!i._shouldLabelFloat())(`mat-primary`,i.color!==`accent`&&i.color!==`warn`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`ng-untouched`,i._shouldForward(`untouched`))(`ng-touched`,i._shouldForward(`touched`))(`ng-pristine`,i._shouldForward(`pristine`))(`ng-dirty`,i._shouldForward(`dirty`))(`ng-valid`,i._shouldForward(`valid`))(`ng-invalid`,i._shouldForward(`invalid`))(`ng-pending`,i._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Iv([{provide:Re,useExisting:n},{provide:qt$1,useExisting:n}])],ngContentSelectors:di,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,i){if(t&1&&(or$1(si),Wg(0,fi,1,1,`ng-template`,null,0,fC),ha(2,`div`,6,1),rv(`click`,function(o){return i._control.onContainerClick(o)}),ai$1(4,ui,1,0,`div`,7),ha(5,`div`,8),ai$1(6,gi,2,2,`div`,9),ai$1(7,_i,3,0,`div`,10),ai$1(8,bi,3,0,`div`,11),ha(9,`div`,12),ai$1(10,xi,1,1,null,13),et$2(11),Dd(),ai$1(12,yi,3,0,`div`,14),ai$1(13,Si,3,0,`div`,15),Dd(),ai$1(14,Ni,1,0,`div`,16),Dd(),ha(15,`div`,17),ai$1(16,Ci,2,0,`div`,18)(17,Mi,5,1,`div`,19),Dd()),t&2){let a;ni$1(2),vt$2(`mdc-text-field--filled`,!i._hasOutline())(`mdc-text-field--outlined`,i._hasOutline())(`mdc-text-field--no-label`,!i._hasFloatingLabel())(`mdc-text-field--disabled`,i._control.disabled)(`mdc-text-field--invalid`,i._control.errorState),ni$1(2),ci$2(!i._hasOutline()&&!i._control.disabled?4:-1),ni$1(2),ci$2(i._hasOutline()?6:-1),ni$1(),ci$2(i._hasIconPrefix?7:-1),ni$1(),ci$2(i._hasTextPrefix?8:-1),ni$1(2),ci$2(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),ni$1(2),ci$2(i._hasTextSuffix?12:-1),ni$1(),ci$2(i._hasIconSuffix?13:-1),ni$1(),ci$2(i._hasOutline()?-1:14),ni$1(),vt$2(`mat-mdc-form-field-subscript-dynamic-size`,i.subscriptSizing===`dynamic`);let o=i._getSubscriptMessageType();ni$1(),ci$2((a=o)===`error`?16:a===`hint`?17:-1)}},dependencies:[Pt,Vt,bT,Lt$1,Te],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var Ht=new y$1(``);var Ii=[`text`];var Ai=[[[`mat-icon`]],`*`];var Pi=[`mat-icon`,`*`];function zi(n,r){if(n&1&&Xg(0,`mat-pseudo-checkbox`,1),n&2){let e=wS();Qg(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function Li(n,r){if(n&1&&Xg(0,`mat-pseudo-checkbox`,3),n&2)Qg(`disabled`,wS().disabled)}function Vi(n,r){if(n&1&&(ha(0,`span`,4),QS(1),Dd()),n&2){let e=wS();ni$1(),wd(`(`,e.group.label,`)`)}}var Ae=new y$1(`MAT_OPTION_PARENT_COMPONENT`);var Pe=new y$1(`MatOptgroup`);var Ie=class{source;isUserInput;constructor(r,e=!1){this.source=r,this.isUserInput=e}};var ie=(()=>{class n{_element=h(le$1);_changeDetectorRef=h(Uv);_parent=h(Ae,{optional:!0});group=h(Pe,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=h(mf).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=xt$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ke$2;_text;_stateChanges=new H;constructor(){let e=h(Vt$3);e.load(hb),e.load(nc),this._signalDisableRipple=!!this._parent&&Wn$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!nb(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ie(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe$1({type:n,selectors:[[`mat-option`]],viewQuery:function(t,i){if(t&1&&sv(Ii,7),t&2){let a;TS(a=NS())&&(i._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,i){t&1&&rv(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(o){return i._handleKeydown(o)}),t&2&&(tv(`id`,i.id),rr$1(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),vt$2(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,yt$2]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:Pi,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,i){t&1&&(or$1(Ai),ai$1(0,zi,1,2,`mat-pseudo-checkbox`,1),et$2(1),ha(2,`span`,2,0),et$2(4,1),Dd(),ai$1(5,Li,1,1,`mat-pseudo-checkbox`,3),ai$1(6,Vi,2,1,`span`,4),Xg(7,`div`,5)),t&2&&(ci$2(i.multiple?0:-1),ni$1(5),ci$2(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),ni$1(),ci$2(i.group&&i.group._inert?6:-1),ni$1(),Qg(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[w$1,V3],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function Gt$1(n,r,e){if(e.length){let t=r.toArray(),i=e.toArray(),a=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===i[a]&&a++;return a}return 0}function Wt$1(n,r,e,t){return n<e?n:n+r>e+t?Math.max(0,n-t+r):e}var Ut$1=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),i=e().touched();return t&&i}static ɵfac=function(t){return new(t||n)};static ɵprov=k$1({token:n,factory:n.ɵfac})}return n})();var be=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(r,e,t,i,a){this._defaultMatcher=r,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=a,e?Wn$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let r=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==r&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(r){if(this.formField&&r?.isSignalErrorState)return r.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return r?.isErrorState(t,e)??!1}};var Qt$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[Zy,he,to$1]})}return n})();var Kt$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[to$1]})}return n})();var ze=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[vb,Kt$1,ie,to$1]})}return n})();var Gi=[`trigger`];var Wi=[`panel`];var Ui=[[[`mat-select-trigger`]],`*`];var Qi=[`mat-select-trigger`,`*`];function Ki(n,r){if(n&1&&(ha(0,`span`,4),QS(1),Dd()),n&2){let e=wS();ni$1(),yv(e.placeholder)}}function $i(n,r){n&1&&et$2(0)}function Yi(n,r){if(n&1&&(ha(0,`span`,11),QS(1),Dd()),n&2){let e=wS(2);ni$1(),yv(e.triggerValue)}}function Xi(n,r){if(n&1&&(ha(0,`span`,5),ai$1(1,$i,1,0)(2,Yi,2,1,`span`,11),Dd()),n&2){let e=wS();ni$1(),ci$2(e.customTrigger?1:2)}}function Zi(n,r){if(n&1){let e=yS();ha(0,`div`,12,1),rv(`keydown`,function(i){qp(e);return Zp(wS()._handleKeydown(i))}),et$2(2,1),Dd()}if(n&2){let e=wS();li$2(e.panelClass),vt$2(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),rr$1(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Ji=new y$1(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(Q$1);return()=>Ot$2(n)}});var en=new y$1(`MAT_SELECT_CONFIG`);var tn$1=new y$1(`MatSelectTrigger`);var Le=class{source;value;constructor(r,e){this.source=r,this.value=e}};var Xt$1=(()=>{class n{_viewportRuler=h(T$2);_changeDetectorRef=h(Uv);_elementRef=h(le$1);_dir=h(oM,{optional:!0});_idGenerator=h(mf);_renderer=h(Xn$1);_parentFormField=h(Re,{optional:!0});ngControl=h(I,{self:!0,optional:!0});_liveAnnouncer=h(BN);_defaultOptions=h(en,{optional:!0});_animationsDisabled=eo$1();_popoverLocation;_initialized=new H;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Gt$1(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Wt$1(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Le(this,e)}_scrollStrategyFactory=h(Ji);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new H;_errorStateTracker;stateChanges=new H;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=xt$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ue.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=oD(()=>{let e=this.options;return e?e.changes.pipe(xc(e),ip(()=>iD(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ip(()=>this.optionSelectionChanges))});openedChange=new ke$2;_openedStream=this.openedChange.pipe(it$3(e=>e),K$2(()=>{}));_closedStream=this.openedChange.pipe(it$3(e=>!e),K$2(()=>{}));selectionChange=new ke$2;valueChange=new ke$2;constructor(){let e=h(Ut$1),t=h(Xt$2,{optional:!0}),i=h(Qt$2,{optional:!0}),a=h(new xa(`tabindex`),{optional:!0}),o=h(Pt$2,{optional:!0}),_=h(Ht,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new be(e,_||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new u(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(go$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(go$1(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(xc(null),go$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(In$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!nb(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let _=this.selected;o.onKeydown(e);let N=this.selected;N&&_!==N&&this._liveAnnouncer.announce(N.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!nb(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let _=this.options.some(N=>!N.disabled&&!N.selected);this.options.forEach(N=>{N.disabled||(_?N.select():N.deselect())})}else{let _=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==_&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!nb(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof kt$3?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new pf(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=iD(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(go$1(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),iD(...this.options.map(t=>t._stateChanges)).pipe(go$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=nt$3(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe$1({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&iv(a,tn$1,5)(a,ie,5)(a,Pe,5),t&2){let o;TS(o=NS())&&(i.customTrigger=o.first),TS(o=NS())&&(i.options=o),TS(o=NS())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&sv(Gi,5)(Wi,5)(ve$2,5),t&2){let a;TS(a=NS())&&(i.trigger=a.first),TS(a=NS())&&(i.panel=a.first),TS(a=NS())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&rv(`keydown`,function(o){return i._handleKeydown(o)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(rr$1(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),vt$2(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,yt$2],disableRipple:[2,`disableRipple`,`disableRipple`,yt$2],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Od(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,yt$2],placeholder:`placeholder`,required:[2,`required`,`required`,yt$2],multiple:[2,`multiple`,`multiple`,yt$2],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,yt$2],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Od],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,yt$2]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Iv([{provide:ke,useExisting:n},{provide:Ae,useExisting:n}]),ga],ngContentSelectors:Qi,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(or$1(Ui),ha(0,`div`,2,0),rv(`click`,function(){return i.open()}),ha(3,`div`,3),ai$1(4,Ki,2,1,`span`,4)(5,Xi,3,1,`span`,5),Dd(),ha(6,`div`,6)(7,`div`,7),sh(),ha(8,`svg`,8),Xg(9,`path`,9),Dd()()()(),Wg(10,Zi,3,16,`ng-template`,10),rv(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(o){return i._handleOverlayKeydown(o)})),t&2){let a=xS(1);ni$1(3),rr$1(`id`,i._valueId),ni$1(),ci$2(i.empty?4:5),ni$1(6),Qg(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[kt$3,ve$2],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var Zt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[ye$2,ze,to$1,yt$3,Qt$1,ze]})}return n})();function nn$1(n,r){if(n&1&&(ha(0,`mat-option`,17),QS(1),Dd()),n&2){let e=r.$implicit;Qg(`value`,e),ni$1(),wd(` `,e,` `)}}function an$1(n,r){if(n&1){let e=yS();ha(0,`mat-form-field`,14)(1,`mat-select`,16,0),rv(`selectionChange`,function(i){qp(e);return Zp(wS(2)._changePageSize(i.value))}),dS(3,nn$1,2,2,`mat-option`,17,lS),Dd(),ha(5,`div`,18),rv(`click`,function(){qp(e);return Zp(xS(2).open())}),Dd()()}if(n&2){let e=wS(2);Qg(`appearance`,e._formFieldAppearance)(`color`,e.color),ni$1(),Qg(`value`,e.pageSize)(`disabled`,e.disabled),Kg(`aria-labelledby`,e._pageSizeLabelId),Qg(`panelClass`,e.selectConfig.panelClass||``)(`disableOptionCentering`,e.selectConfig.disableOptionCentering),ni$1(2),fS(e._displayedPageSizeOptions)}}function rn(n,r){if(n&1&&(ha(0,`div`,15),QS(1),Dd()),n&2){let e=wS(2);ni$1(),yv(e.pageSize)}}function on$1(n,r){if(n&1&&(ha(0,`div`,3)(1,`div`,13),QS(2),Dd(),ai$1(3,an$1,6,7,`mat-form-field`,14),ai$1(4,rn,2,1,`div`,15),Dd()),n&2){let e=wS();ni$1(),rr$1(`id`,e._pageSizeLabelId),ni$1(),wd(` `,e._intl.itemsPerPageLabel,` `),ni$1(),ci$2(e._displayedPageSizeOptions.length>1?3:-1),ni$1(),ci$2(e._displayedPageSizeOptions.length<=1?4:-1)}}function ln(n,r){if(n&1){let e=yS();ha(0,`button`,19),rv(`click`,function(){qp(e);let i=wS();return Zp(i._buttonClicked(0,i._previousButtonsDisabled()))}),sh(),ha(1,`svg`,8),Xg(2,`path`,20),Dd()()}if(n&2){let e=wS();Qg(`matTooltip`,e._intl.firstPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),rr$1(`aria-label`,e._intl.firstPageLabel)}}function sn(n,r){if(n&1){let e=yS();ha(0,`button`,21),rv(`click`,function(){qp(e);let i=wS();return Zp(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),sh(),ha(1,`svg`,8),Xg(2,`path`,22),Dd()()}if(n&2){let e=wS();Qg(`matTooltip`,e._intl.lastPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),rr$1(`aria-label`,e._intl.lastPageLabel)}}var dn=(()=>{class n{changes=new H;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let a=e*t,o=a<i?Math.min(a+t,i):a+t;return`${a+1} \u2013 ${o} of ${i}`};static ɵfac=function(t){return new(t||n)};static ɵprov=k$1({token:n,factory:n.ɵfac})}return n})();var cn=50;var mn=new y$1(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var fn=(()=>{class n{_intl=h(dn);_changeDetectorRef=h(Uv);_formFieldAppearance;_pageSizeLabelId=h(mf).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new ao$1(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Od(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new ke$2;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=h(mn,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:a,hidePageSize:o,showFirstLastButtons:_}=t;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),o!=null&&(this.hidePageSize=o),_!=null&&(this.showFirstLastButtons=_)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:cn),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe$1({type:n,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,Od],length:[2,`length`,`length`,Od],pageSize:[2,`pageSize`,`pageSize`,Od],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,yt$2],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,yt$2],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,yt$2]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(t,i){t&1&&(ha(0,`div`,1)(1,`div`,2),ai$1(2,on$1,5,4,`div`,3),ha(3,`div`,4)(4,`div`,5),QS(5),Dd(),ai$1(6,ln,3,5,`button`,6),ha(7,`button`,7),rv(`click`,function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),sh(),ha(8,`svg`,8),Xg(9,`path`,9),Dd()(),ah(),ha(10,`button`,10),rv(`click`,function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),sh(),ha(11,`svg`,8),Xg(12,`path`,11),Dd()(),ai$1(13,sn,3,5,`button`,12),Dd()()()),t&2&&(ni$1(2),ci$2(i.hidePageSize?-1:2),ni$1(3),wd(` `,i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length),` `),ni$1(),ci$2(i.showFirstLastButtons?6:-1),ni$1(),Qg(`matTooltip`,i._intl.previousPageLabel)(`matTooltipDisabled`,i._previousButtonsDisabled())(`disabled`,i._previousButtonsDisabled())(`tabindex`,i._previousButtonsDisabled()?-1:null),rr$1(`aria-label`,i._intl.previousPageLabel),ni$1(3),Qg(`matTooltip`,i._intl.nextPageLabel)(`matTooltipDisabled`,i._nextButtonsDisabled())(`disabled`,i._nextButtonsDisabled())(`tabindex`,i._nextButtonsDisabled()?-1:null),rr$1(`aria-label`,i._intl.nextPageLabel),ni$1(3),ci$2(i.showFirstLastButtons?13:-1))},dependencies:[he,Xt$1,ie,tM,mt],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return n})();var Or=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[yG,Zt,Yt,fn]})}return n})();function U(n){n||(n=h(Ie$1));let e=new M(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(go$1(e))}function T(n,e){let d=!e?.manualCleanup?e?.injector?.get(Ie$1)??h(Ie$1):null,l=p(e?.equal),o;e?.requireSync?o=xt$1({kind:0},{equal:l}):o=xt$1({kind:1,value:e?.initialValue},{equal:l});let i,b=n.subscribe({next:r=>o.set({kind:1,value:r}),error:r=>{o.set({kind:2,error:r}),i?.()},complete:()=>{i?.()}});if(e?.requireSync&&o().kind===0)throw new g$1(601,!1);return i=d?.onDestroy(b.unsubscribe.bind(b)),mC(()=>{let r=o();switch(r.kind){case 1:return r.value;case 2:throw r.error;case 0:throw new g$1(601,!1)}},{equal:e?.equal})}function p(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}function Bt(n){let e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,``).length,i=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,`$2`))||0;return e===Math.floor(e)&&e>=0&&e<=1?1:i===0&&e!==0&&e%1e6===0&&t===0||!(i>=0&&i<=5)?4:5}var kt=[`pt`,[[`AM`,`PM`]],void 0,[[`D`,`S`,`T`,`Q`,`Q`,`S`,`S`],[`dom.`,`seg.`,`ter.`,`qua.`,`qui.`,`sex.`,`sáb.`],[`domingo`,`segunda-feira`,`terça-feira`,`quarta-feira`,`quinta-feira`,`sexta-feira`,`sábado`],[`dom.`,`seg.`,`ter.`,`qua.`,`qui.`,`sex.`,`sáb.`]],void 0,[[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],[`jan.`,`fev.`,`mar.`,`abr.`,`mai.`,`jun.`,`jul.`,`ago.`,`set.`,`out.`,`nov.`,`dez.`],[`janeiro`,`fevereiro`,`março`,`abril`,`maio`,`junho`,`julho`,`agosto`,`setembro`,`outubro`,`novembro`,`dezembro`]],void 0,[[`a.C.`,`d.C.`],void 0,[`antes de Cristo`,`depois de Cristo`]],0,[6,0],[`dd/MM/y`,`d 'de' MMM 'de' y`,`d 'de' MMMM 'de' y`,`EEEE, d 'de' MMMM 'de' y`],[`HH:mm`,`HH:mm:ss`,`HH:mm:ss z`,`HH:mm:ss zzzz`],[`{1} {0}`,void 0,void 0,void 0],[`,`,`.`,`;`,`%`,`+`,`-`,`E`,`×`,`‰`,`∞`,`NaN`,`:`],[`#,##0.###`,`#,##0%`,`¤\xA0#,##0.00`,`#E0`],`BRL`,`R$`,`Real brasileiro`,{AUD:[`AU$`,`$`],BYN:[void 0,`р.`],JPY:[`JP¥`,`¥`],PHP:[void 0,`₱`],PTE:[`Esc.`],RON:[void 0,`L`],SYP:[void 0,`S£`],THB:[`฿`],TWD:[`NT$`],USD:[`US$`,`$`]},`ltr`,Bt];var Ut=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var Xt=[`mat-icon, [matMenuItemIcon]`,`*`];function Wt(n,r){n&1&&(sh(),ha(0,`svg`,2),Xg(1,`polygon`,3),Dd())}var $t=[`*`];function Gt(n,r){if(n&1){let e=yS();ln$3(0,`div`,0),ov(`click`,function(){qp(e);return Zp(wS().closed.emit(`click`))})(`animationstart`,function(i){qp(e);return Zp(wS()._onAnimationStart(i.animationName))})(`animationend`,function(i){qp(e);return Zp(wS()._onAnimationDone(i.animationName))})(`animationcancel`,function(i){qp(e);return Zp(wS()._onAnimationDone(i.animationName))}),ln$3(1,`div`,1),et$2(2),dn$2()()}if(n&2){let e=wS();li$2(e._classList),vt$2(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),tv(`id`,e.panelId),rr$1(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var fe=new y$1(`MAT_MENU_PANEL`);var E=(()=>{class n{_elementRef=h(le$1);_document=h(O);_focusMonitor=h(cf);_parentMenu=h(fe,{optional:!0});_changeDetectorRef=h(Uv);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new H;_focused=new H;_highlighted=!1;_triggersSubmenu=!1;constructor(){h(Vt$3).load(hb),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe$1({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,i){t&1&&rv(`click`,function(s){return i._checkDisabled(s)})(`mouseenter`,function(){return i._handleMouseEnter()}),t&2&&(rr$1(`role`,i.role)(`tabindex`,i._getTabIndex())(`aria-disabled`,i.disabled)(`disabled`,i.disabled||null),vt$2(`mat-mdc-menu-item-highlighted`,i._highlighted)(`mat-mdc-menu-item-submenu-trigger`,i._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,yt$2],disableRipple:[2,`disableRipple`,`disableRipple`,yt$2]},exportAs:[`matMenuItem`],ngContentSelectors:Xt,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,i){t&1&&(or$1(Ut),et$2(0),ha(1,`span`,0),et$2(2,1),Dd(),Xg(3,`div`,1),ai$1(4,Wt,2,0,`:svg:svg`,2)),t&2&&(ni$1(3),Qg(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleTrigger`,i._getHostElement()),ni$1(),ci$2(i._triggersSubmenu?4:-1))},dependencies:[V3],encapsulation:2})}return n})();var Qt=new y$1(`MatMenuContent`);var qt=new y$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ge=`_mat-menu-enter`;var $=`_mat-menu-exit`;var P=(()=>{class n{_elementRef=h(le$1);_changeDetectorRef=h(Uv);_injector=h(Q$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=eo$1();_allItems;_directDescendantItems=new Kn$1;_classList={};_panelAnimationState=`void`;_animationDone=new H;_isAnimating=xt$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=A$1({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ke$2;close=this.closed;panelId=h(mf).getId(`mat-menu-panel-`);constructor(){let e=h(qt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new hf(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(xc(this._directDescendantItems),ip(e=>iD(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(xc(this._directDescendantItems),ip(t=>iD(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:nb(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Wl(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ne$1(A$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===$;(t||e===ge)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ge||e===$)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone($),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ge:$)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(xc(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=Oe$1({type:n,selectors:[[`mat-menu`]],contentQueries:function(t,i,o){if(t&1&&iv(o,Qt,5)(o,E,5)(o,E,4),t&2){let s;TS(s=NS())&&(i.lazyContent=s.first),TS(s=NS())&&(i._allItems=s),TS(s=NS())&&(i.items=s)}},viewQuery:function(t,i){if(t&1&&sv(Br,5),t&2){let o;TS(o=NS())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(t,i){t&2&&rr$1(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,yt$2],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:yt$2(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Iv([{provide:fe,useExisting:n}])],ngContentSelectors:$t,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,i){t&1&&(or$1(),qg(0,Gt,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return n})();var Kt=new y$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(Q$1);return()=>Ot$2(n)}});var S=new WeakMap;var Jt=(()=>{class n{_canHaveBackdrop;_element=h(le$1);_viewContainerRef=h(Gr);_menuItemInstance=h(E,{optional:!0,self:!0});_dir=h(oM,{optional:!0});_focusMonitor=h(cf);_ngZone=h(P$3);_injector=h(Q$1);_scrollStrategy=h(Kt);_changeDetectorRef=h(Uv);_animationsDisabled=eo$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=W$1.EMPTY;_menuCloseSubscription=W$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=h(fe,{optional:!0});this._parentMaterialMenu=t instanceof P?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&S.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=S.get(t);S.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),s=o.getConfig(),d=s.positionStrategy;this._setPosition(t,d),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof P&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(go$1(t.close)).subscribe(()=>{d.withLockedPosition(!1).reapplyLastPosition(),d.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof P&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(In$1(1)).subscribe(()=>{t.detach(),S.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&S.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Dt$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof P&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new j$1({positionStrategy:Et$3(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX===`start`?`after`:`before`,s=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,s)})})}_setPosition(e,t){let[i,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,d]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[q,K]=[s,d],[J,Z]=[i,o],k=0;if(this._triggersSubmenu()){if(Z=i=e.xPosition===`before`?`start`:`end`,o=J=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let be=this._parentMaterialMenu.items.first;this._parentInnerPadding=be?be._getHostElement().offsetTop:0}k=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(q=s===`top`?`bottom`:`top`,K=d===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:q,overlayX:J,overlayY:s,offsetY:k},{originX:o,originY:q,overlayX:Z,overlayY:s,offsetY:k},{originX:i,originY:K,overlayX:J,overlayY:d,offsetY:-k},{originX:o,originY:K,overlayX:Z,overlayY:d,offsetY:-k}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return iD(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:ze$3(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(it$3(s=>this._menuOpen&&s!==this._menuItemInstance)):ze$3(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new H$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return S.get(e)===this}_triggerIsAriaDisabled(){return yt$2(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){aw()};static ɵdir=Je$1({type:n})}return n})();var Tt=(()=>{class n extends Jt{_cleanupTouchstart;_hoverSubscription=W$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ke$2;onMenuOpen=this.menuOpened;menuClosed=new ke$2;onMenuClose=this.menuClosed;constructor(){super(!0);let e=h(Xn$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Si$2(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){wi$2(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=Je$1({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&rv(`click`,function(s){return i._handleClick(s)})(`mousedown`,function(s){return i._handleMousedown(s)})(`keydown`,function(s){return i._handleKeydown(s)}),t&2&&rr$1(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Wr$1]})}return n})();var At=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=he$3({type:n});static ɵinj=ce$2({imports:[vb,ye$2,to$1,yt$3]})}return n})();var Rt=(n,r)=>r.rota;function tn(n,r){if(n&1&&(ha(0,`a`,8)(1,`mat-icon`),QS(2),Dd(),QS(3),Dd()),n&2){let e=r.$implicit;Qg(`routerLink`,e.rota),ni$1(2),yv(e.icone),ni$1(),wd(``,e.rotulo,` `)}}function nn(n,r){if(n&1&&(ha(0,`button`,23)(1,`mat-icon`),QS(2,`admin_panel_settings`),Dd(),QS(3,`Administração`),ha(4,`mat-icon`,24),QS(5,`expand_more`),Dd()()),n&2){let e=wS(),t=xS(20);vt$2(`ativo`,e.naAreaAdmin()),Qg(`matMenuTriggerFor`,t)}}function on(n,r){if(n&1&&(ha(0,`a`,12)(1,`mat-icon`),QS(2),Dd(),ha(3,`span`),QS(4),Dd()()),n&2){let e=r.$implicit;Qg(`routerLink`,e.rota),ni$1(2),yv(e.icone),ni$1(2),yv(e.rotulo)}}var G=class n$1{auth=h(x$1);usuarioService=h(n);router=h(ce$1);destroyRef=h(Ie$1);menuAberto=xt$1(!1);titulo=xt$1(``);naAreaAdmin=xt$1(!1);perfil=this.usuarioService.perfil;nome=mC(()=>this.perfil()?.nome||this.auth.email());iniciais=mC(()=>this.nome().split(/[\s@.]+/).filter(Boolean).slice(0,2).map(r=>r[0].toUpperCase()).join(``));menuPrincipal=[{rota:`/dashboard`,icone:`home`,rotulo:`Visão geral`},{rota:`/transacoes`,icone:`swap_vert`,rotulo:`Financeiro`},{rota:`/categorias`,icone:`sell`,rotulo:`Cadastros`}];menuAdmin=[{rota:`/admin/painel`,icone:`monitoring`,rotulo:`Painel administrativo`},{rota:`/admin/parametros`,icone:`tune`,rotulo:`Parâmetros fiscais`}];ngOnInit(){this.usuarioService.carregarPerfil().subscribe({error:()=>{}}),this.atualizarTitulo(),this.router.events.pipe(it$3(r=>r instanceof z$1),U(this.destroyRef)).subscribe(()=>{this.menuAberto.set(!1),this.atualizarTitulo()})}sair(){this.usuarioService.perfil.set(null),this.auth.logout()}atualizarTitulo(){let r=this.router.routerState.snapshot.root;for(;r.firstChild;)r=r.firstChild;this.titulo.set(String(r.title??``).split(` · `)[0]),this.naAreaAdmin.set(this.router.url.startsWith(`/admin`))}static ɵfac=function(e){return new(e||n$1)};static ɵcmp=Oe$1({type:n$1,selectors:[[`app-shell`]],decls:54,vars:17,consts:[[`menuAdminRef`,`matMenu`],[`menuUsuario`,`matMenu`],[1,`barra`],[1,`interno`],[`type`,`button`,`aria-label`,`Abrir menu`,1,`btn-menu`,3,`click`],[1,`marca`,3,`routerLink`],[3,`pequeno`],[1,`menu`],[`routerLinkActive`,`ativo`,1,`item`,3,`routerLink`],[`type`,`button`,1,`item`,3,`ativo`,`matMenuTriggerFor`],[`routerLink`,`/perfil`,`routerLinkActive`,`ativo`,1,`item`,`so-celular`],[`type`,`button`,1,`item`,`so-celular`,3,`click`],[`mat-menu-item`,``,3,`routerLink`],[`type`,`button`,`aria-label`,`Menu do usuário`,1,`usuario`,3,`matMenuTriggerFor`],[1,`avatar`],[1,`usuario-nome`],[`xPosition`,`before`],[1,`menu-cabecalho`],[1,`chip`],[`mat-menu-item`,``,`routerLink`,`/perfil`],[`mat-menu-item`,``,3,`click`],[1,`subbarra`],[1,`pagina`],[`type`,`button`,1,`item`,3,`matMenuTriggerFor`],[1,`seta`]],template:function(e,t){if(e&1&&(ha(0,`header`,2)(1,`div`,3)(2,`button`,4),rv(`click`,function(){return t.menuAberto.set(!t.menuAberto())}),ha(3,`mat-icon`),QS(4),Dd()(),ha(5,`a`,5),Xg(6,`app-logo`,6),Dd(),ha(7,`nav`,7),dS(8,tn,4,3,`a`,8,Rt),ai$1(10,nn,6,3,`button`,9),ha(11,`a`,10)(12,`mat-icon`),QS(13,`person_outline`),Dd(),QS(14,`Meu perfil `),Dd(),ha(15,`button`,11),rv(`click`,function(){return t.sair()}),ha(16,`mat-icon`),QS(17,`logout`),Dd(),QS(18,`Sair `),Dd()(),ha(19,`mat-menu`,null,0),dS(21,on,5,3,`a`,12,Rt),Dd(),ha(23,`button`,13)(24,`span`,14),QS(25),Dd(),ha(26,`span`,15),QS(27),Dd(),ha(28,`mat-icon`),QS(29,`expand_more`),Dd()(),ha(30,`mat-menu`,16,1)(32,`div`,17)(33,`strong`),QS(34),Dd(),ha(35,`span`),QS(36),Dd(),ha(37,`span`,18),QS(38),Dd()(),ha(39,`a`,19)(40,`mat-icon`),QS(41,`person_outline`),Dd(),ha(42,`span`),QS(43,`Meu perfil`),Dd()(),ha(44,`button`,20),rv(`click`,function(){return t.sair()}),ha(45,`mat-icon`),QS(46,`logout`),Dd(),ha(47,`span`),QS(48,`Sair`),Dd()()()()(),ha(49,`div`,21)(50,`div`,3),QS(51),Dd()(),ha(52,`main`,22),Xg(53,`router-outlet`),Dd()),e&2){let i=xS(31);ni$1(4),yv(t.menuAberto()?`close`:`menu`),ni$1(),Qg(`routerLink`,t.auth.rotaInicial()),ni$1(),Qg(`pequeno`,!0),ni$1(),vt$2(`aberto`,t.menuAberto()),ni$1(),fS(t.menuPrincipal),ni$1(2),ci$2(t.auth.isAdmin()?10:-1),ni$1(11),fS(t.menuAdmin),ni$1(2),Qg(`matMenuTriggerFor`,i),ni$1(2),yv(t.iniciais()),ni$1(2),yv(t.nome()),ni$1(7),yv(t.nome()),ni$1(2),yv(t.auth.email()),ni$1(),vt$2(`purple`,t.auth.isAdmin())(`green`,!t.auth.isAdmin()),ni$1(),wd(` `,t.auth.isAdmin()?`Administrador`:`Usuário`,` `),ni$1(13),yv(t.titulo())}},dependencies:[ur,Nt$2,wo,jG,PG,yG,At,P,E,Tt,A],styles:[`[_nghost-%COMP%]{display:block;min-height:100vh;background:var(--%NS%fc-bg)}.interno[_ngcontent-%COMP%]{max-width:1320px;margin:0 auto;padding:0 28px;display:flex;align-items:center}.barra[_ngcontent-%COMP%]{background:var(--%NS%fc-roxo);color:#fff;position:sticky;top:0;z-index:20}.barra[_ngcontent-%COMP%]   .interno[_ngcontent-%COMP%]{height:60px;gap:8px}.marca[_ngcontent-%COMP%]{text-decoration:none;margin-right:28px;display:inline-flex}.menu[_ngcontent-%COMP%]{display:flex;align-items:stretch;height:100%;flex:1;gap:4px}.item[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:0 12px;color:#d8ccf0;text-decoration:none;font:inherit;font-size:14px;background:none;border:none;border-bottom:3px solid transparent;border-top:3px solid transparent;cursor:pointer;white-space:nowrap}.item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.item[_ngcontent-%COMP%]   .seta[_ngcontent-%COMP%]{margin-left:-4px}.item[_ngcontent-%COMP%]:hover{color:#fff}.item.ativo[_ngcontent-%COMP%]{color:#fff;border-bottom-color:var(--%NS%fc-amarelo)}.so-celular[_ngcontent-%COMP%]{display:none}.usuario[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:none;border:none;font:inherit;cursor:pointer;color:#fff;padding:6px 8px;border-radius:6px}.usuario[_ngcontent-%COMP%]:hover{background:#ffffff14}.avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;background:var(--%NS%fc-amarelo);color:var(--%NS%fc-roxo-escuro);display:grid;place-items:center;font-weight:600;font-size:13px}.usuario-nome[_ngcontent-%COMP%]{font-size:14px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.menu-cabecalho[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;padding:10px 16px 12px;border-bottom:1px solid var(--%NS%fc-border);margin-bottom:4px;font-size:13px}.menu-cabecalho[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--%NS%fc-muted);font-size:12px}.menu-cabecalho[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]{align-self:flex-start;margin-top:6px}.btn-menu[_ngcontent-%COMP%]{display:none;background:none;border:none;color:#fff;cursor:pointer;padding:6px}.subbarra[_ngcontent-%COMP%]{background:#fff;border-bottom:1px solid var(--%NS%fc-border)}.subbarra[_ngcontent-%COMP%]   .interno[_ngcontent-%COMP%]{height:40px;font-size:13px;font-weight:500;color:var(--%NS%fc-text)}.pagina[_ngcontent-%COMP%]{max-width:1320px;margin:0 auto;padding:26px 28px 48px}@media(max-width:900px){.interno[_ngcontent-%COMP%]{padding:0 12px}.btn-menu[_ngcontent-%COMP%]{display:inline-flex}.marca[_ngcontent-%COMP%]{margin-right:auto}.menu[_ngcontent-%COMP%]{display:none;position:absolute;top:60px;left:0;right:0;height:auto;flex-direction:column;background:var(--%NS%fc-roxo-escuro);padding:8px 0 12px;box-shadow:0 8px 20px #0003}.menu.aberto[_ngcontent-%COMP%]{display:flex}.item[_ngcontent-%COMP%]{padding:12px 20px;border:none;border-left:3px solid transparent}.item.ativo[_ngcontent-%COMP%]{border-left-color:var(--%NS%fc-amarelo)}.so-celular[_ngcontent-%COMP%]{display:inline-flex}.usuario-nome[_ngcontent-%COMP%]{display:none}.pagina[_ngcontent-%COMP%]{padding:20px 16px 32px}}`]})};var Et=(n,r)=>{let e=h(x$1),t=h(ce$1);return e.isLoggedIn()?!0:t.createUrlTree([`/login`],{queryParams:{voltar:r.url}})};var Ot=()=>{let n=h(x$1),r=h(ce$1);return n.isLoggedIn()?n.isAdmin()?!0:r.createUrlTree([`/dashboard`]):r.createUrlTree([`/login`])};var _e=()=>{let n=h(x$1),r=h(ce$1);return n.isLoggedIn()?r.createUrlTree([n.rotaInicial()]):!0};var Nt=[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-D7oyieeJ.js`).then(n=>n.Landing),title:`FinControl · Controle financeiro para você e sua empresa`},{path:`login`,loadComponent:()=>import(`./chunk-DpMkCMiH.js`).then(n=>n.Login),title:`Entrar · FinControl`,canActivate:[_e]},{path:`cadastro`,loadComponent:()=>import(`./chunk-BnLVmnNr.js`).then(n=>n.Register),title:`Criar conta · FinControl`,canActivate:[_e]},{path:``,component:G,canActivate:[Et],children:[{path:`dashboard`,loadComponent:()=>import(`./chunk-CklOhXex.js`).then(n=>n.Dashboard),title:`Visão geral · FinControl`},{path:`transacoes`,loadComponent:()=>import(`./chunk-Do92EPPP.js`).then(n=>n.TransacaoList),title:`Transações · FinControl`},{path:`transacoes/nova`,loadComponent:()=>import(`./chunk-ByqdzS0W.js`).then(n=>n.TransacaoForm),title:`Nova transação · FinControl`},{path:`transacoes/:id`,loadComponent:()=>import(`./chunk-ByqdzS0W.js`).then(n=>n.TransacaoForm),title:`Editar transação · FinControl`},{path:`categorias`,loadComponent:()=>import(`./chunk-9PEctHrk.js`).then(n=>n.CategoriaList),title:`Categorias · FinControl`},{path:`categorias/nova`,loadComponent:()=>import(`./chunk-BqeqKnqB.js`).then(n=>n.CategoriaForm),title:`Nova categoria · FinControl`},{path:`categorias/:id`,loadComponent:()=>import(`./chunk-BqeqKnqB.js`).then(n=>n.CategoriaForm),title:`Editar categoria · FinControl`},{path:`perfil`,loadComponent:()=>import(`./chunk-DOUStZcT.js`).then(n=>n.Perfil),title:`Meu perfil · FinControl`},{path:`admin`,canActivate:[Ot],children:[{path:``,pathMatch:`full`,redirectTo:`painel`},{path:`painel`,loadComponent:()=>import(`./chunk-D6HzWy15.js`).then(n=>n.AdminPainel),title:`Painel administrativo · FinControl`},{path:`parametros`,loadComponent:()=>import(`./chunk-Dyqx19sP.js`).then(n=>n.ParametroList),title:`Parâmetros fiscais · FinControl`},{path:`parametros/novo`,loadComponent:()=>import(`./chunk-agxfqy2Y.js`).then(n=>n.ParametroForm),title:`Novo parâmetro · FinControl`},{path:`parametros/:id`,loadComponent:()=>import(`./chunk-agxfqy2Y.js`).then(n=>n.ParametroForm),title:`Editar parâmetro · FinControl`}]}]},{path:`**`,redirectTo:``}];var Ft=(n,r)=>{let e=h(x$1),t=e.token(),i=n.url.startsWith(VG),o=n.url.startsWith(`${VG}/auth/`);return r(t&&i&&!o?n.clone({setHeaders:{Authorization:`Bearer ${t}`}}):n).pipe(fo$1(d=>(d.status===401&&i&&!o&&e.logout(`expirou`),Sc(()=>d))))};zU(kt);function an(){let n=new dn;return n.itemsPerPageLabel=`Itens por página:`,n.nextPageLabel=`Próxima página`,n.previousPageLabel=`Página anterior`,n.firstPageLabel=`Primeira página`,n.lastPageLabel=`Última página`,n.getRangeLabel=(r,e,t)=>{if(t===0||e===0)return`0 de ${t}`;let i=r*e,o=Math.min(i+e,t);return`${i+1} - ${o} de ${t}`},n}var Lt={providers:[tE(),Eo(Nt),mN(gN([Ft])),{provide:qr,useValue:`pt-BR`},{provide:dn,useFactory:an}]};$T(class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Oe$1({type:n,selectors:[[`app-root`]],decls:1,vars:0,template:function(e,t){e&1&&Xg(0,`router-outlet`)},dependencies:[ur],encapsulation:2})},Lt).catch(n=>console.error(n));export{x as C,G$2 as D,x$1 as E,Nt$2 as O,w$1 as S,A as T,ue as _,mt as a,xt as b,On as c,Rn as d,Sn as f,tn$2 as g,rn$1 as h,Yt as i,ce$1 as k,Pn as l,qe as m,Or as n,G$1 as o,gt as p,fn as r,Nn as s,T as t,Qt$2 as u,wn as v,n as w,u as x,xn as y};