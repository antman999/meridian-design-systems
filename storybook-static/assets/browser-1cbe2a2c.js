import{a as wt,c as vt}from"./_commonjsHelpers-de833af9.js";import{s as O}from"./index-d475d2ea.js";import{a as It}from"./index-03bbf7d1.js";var U,Z;function _t(){return Z||(Z=1,U=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},a=Symbol("test"),c=Object(a);if(typeof a=="string"||Object.prototype.toString.call(a)!=="[object Symbol]"||Object.prototype.toString.call(c)!=="[object Symbol]")return!1;var i=42;t[a]=i;for(a in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var u=Object.getOwnPropertySymbols(t);if(u.length!==1||u[0]!==a||!Object.prototype.propertyIsEnumerable.call(t,a))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var n=Object.getOwnPropertyDescriptor(t,a);if(n.value!==i||n.enumerable!==!0)return!1}return!0}),U}var tt=typeof Symbol<"u"&&Symbol,jt=_t(),Bt=function(){return typeof tt!="function"||typeof Symbol!="function"||typeof tt("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:jt()},et={foo:{}},Ct=Object,Nt=function(){return{__proto__:et}.foo===et.foo&&!({__proto__:null}instanceof Ct)},Ft="Function.prototype.bind called on incompatible ",x=Array.prototype.slice,Ut=Object.prototype.toString,xt="[object Function]",Dt=function(t){var a=this;if(typeof a!="function"||Ut.call(a)!==xt)throw new TypeError(Ft+a);for(var c=x.call(arguments,1),i,u=function(){if(this instanceof i){var l=a.apply(this,c.concat(x.call(arguments)));return Object(l)===l?l:this}else return a.apply(t,c.concat(x.call(arguments)))},n=Math.max(0,a.length-c.length),o=[],e=0;e<n;e++)o.push("$"+e);if(i=Function("binder","return function ("+o.join(",")+"){ return binder.apply(this,arguments); }")(u),a.prototype){var y=function(){};y.prototype=a.prototype,i.prototype=new y,y.prototype=null}return i},$t=Dt,X=Function.prototype.bind||$t,kt=X,Mt=kt.call(Function.call,Object.prototype.hasOwnProperty),h,j=SyntaxError,Ot=Function,I=TypeError,D=function(r){try{return Ot('"use strict"; return ('+r+").constructor;")()}catch{}},T=Object.getOwnPropertyDescriptor;if(T)try{T({},"")}catch{T=null}var $=function(){throw new I},Gt=T?function(){try{return arguments.callee,$}catch{try{return T(arguments,"callee").get}catch{return $}}}():$,P=Bt(),Lt=Nt(),v=Object.getPrototypeOf||(Lt?function(r){return r.__proto__}:null),w={},qt=typeof Uint8Array>"u"||!v?h:v(Uint8Array),R={"%AggregateError%":typeof AggregateError>"u"?h:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?h:ArrayBuffer,"%ArrayIteratorPrototype%":P&&v?v([][Symbol.iterator]()):h,"%AsyncFromSyncIteratorPrototype%":h,"%AsyncFunction%":w,"%AsyncGenerator%":w,"%AsyncGeneratorFunction%":w,"%AsyncIteratorPrototype%":w,"%Atomics%":typeof Atomics>"u"?h:Atomics,"%BigInt%":typeof BigInt>"u"?h:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?h:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?h:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?h:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?h:Float32Array,"%Float64Array%":typeof Float64Array>"u"?h:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?h:FinalizationRegistry,"%Function%":Ot,"%GeneratorFunction%":w,"%Int8Array%":typeof Int8Array>"u"?h:Int8Array,"%Int16Array%":typeof Int16Array>"u"?h:Int16Array,"%Int32Array%":typeof Int32Array>"u"?h:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":P&&v?v(v([][Symbol.iterator]())):h,"%JSON%":typeof JSON=="object"?JSON:h,"%Map%":typeof Map>"u"?h:Map,"%MapIteratorPrototype%":typeof Map>"u"||!P||!v?h:v(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?h:Promise,"%Proxy%":typeof Proxy>"u"?h:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?h:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?h:Set,"%SetIteratorPrototype%":typeof Set>"u"||!P||!v?h:v(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?h:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":P&&v?v(""[Symbol.iterator]()):h,"%Symbol%":P?Symbol:h,"%SyntaxError%":j,"%ThrowTypeError%":Gt,"%TypedArray%":qt,"%TypeError%":I,"%Uint8Array%":typeof Uint8Array>"u"?h:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?h:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?h:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?h:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?h:WeakMap,"%WeakRef%":typeof WeakRef>"u"?h:WeakRef,"%WeakSet%":typeof WeakSet>"u"?h:WeakSet};if(v)try{null.error}catch(r){var Wt=v(v(r));R["%Error.prototype%"]=Wt}var Yt=function r(t){var a;if(t==="%AsyncFunction%")a=D("async function () {}");else if(t==="%GeneratorFunction%")a=D("function* () {}");else if(t==="%AsyncGeneratorFunction%")a=D("async function* () {}");else if(t==="%AsyncGenerator%"){var c=r("%AsyncGeneratorFunction%");c&&(a=c.prototype)}else if(t==="%AsyncIteratorPrototype%"){var i=r("%AsyncGenerator%");i&&v&&(a=v(i.prototype))}return R[t]=a,a},rt={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},B=X,N=Mt,Vt=B.call(Function.call,Array.prototype.concat),Kt=B.call(Function.apply,Array.prototype.splice),nt=B.call(Function.call,String.prototype.replace),F=B.call(Function.call,String.prototype.slice),zt=B.call(Function.call,RegExp.prototype.exec),Ht=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Jt=/\\(\\)?/g,Xt=function(t){var a=F(t,0,1),c=F(t,-1);if(a==="%"&&c!=="%")throw new j("invalid intrinsic syntax, expected closing `%`");if(c==="%"&&a!=="%")throw new j("invalid intrinsic syntax, expected opening `%`");var i=[];return nt(t,Ht,function(u,n,o,e){i[i.length]=o?nt(e,Jt,"$1"):n||u}),i},Qt=function(t,a){var c=t,i;if(N(rt,c)&&(i=rt[c],c="%"+i[0]+"%"),N(R,c)){var u=R[c];if(u===w&&(u=Yt(c)),typeof u>"u"&&!a)throw new I("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:i,name:c,value:u}}throw new j("intrinsic "+t+" does not exist!")},Q=function(t,a){if(typeof t!="string"||t.length===0)throw new I("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof a!="boolean")throw new I('"allowMissing" argument must be a boolean');if(zt(/^%?[^%]*%?$/,t)===null)throw new j("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var c=Xt(t),i=c.length>0?c[0]:"",u=Qt("%"+i+"%",a),n=u.name,o=u.value,e=!1,y=u.alias;y&&(i=y[0],Kt(c,Vt([0,1],y)));for(var l=1,s=!0;l<c.length;l+=1){var f=c[l],p=F(f,0,1),m=F(f,-1);if((p==='"'||p==="'"||p==="`"||m==='"'||m==="'"||m==="`")&&p!==m)throw new j("property names with quotes must have matching quotes");if((f==="constructor"||!s)&&(e=!0),i+="."+f,n="%"+i+"%",N(R,n))o=R[n];else if(o!=null){if(!(f in o)){if(!a)throw new I("base intrinsic for "+t+" exists, but the property is not available.");return}if(T&&l+1>=c.length){var d=T(o,f);s=!!d,s&&"get"in d&&!("originalValue"in d.get)?o=d.get:o=o[f]}else s=N(o,f),o=o[f];s&&!e&&(R[n]=o)}}return o},k={exports:{}},ot;function Et(){return ot||(ot=1,function(r){var t=X,a=Q,c=a("%Function.prototype.apply%"),i=a("%Function.prototype.call%"),u=a("%Reflect.apply%",!0)||t.call(i,c),n=a("%Object.getOwnPropertyDescriptor%",!0),o=a("%Object.defineProperty%",!0),e=a("%Math.max%");if(o)try{o({},"a",{value:1})}catch{o=null}r.exports=function(s){var f=u(t,i,arguments);if(n&&o){var p=n(f,"length");p.configurable&&o(f,"length",{value:1+e(0,s.length-(arguments.length-1))})}return f};var y=function(){return u(t,c,arguments)};o?o(r.exports,"apply",{value:y}):r.exports.apply=y}(k)),k.exports}var M,at;function Tt(){if(at)return M;at=1;var r=Q,t=Et(),a=t(r("String.prototype.indexOf"));return M=function(i,u){var n=r(i,!!u);return typeof n=="function"&&a(i,".prototype.")>-1?t(n):n},M}var G,it;function Rt(){if(it)return G;it=1;var r=_t();return G=function(){return r()&&!!Symbol.toStringTag},G}var L,st;function Ae(){if(st)return L;st=1;var r=Rt()(),t=Tt(),a=t("Object.prototype.toString"),c=function(o){return r&&o&&typeof o=="object"&&Symbol.toStringTag in o?!1:a(o)==="[object Arguments]"},i=function(o){return c(o)?!0:o!==null&&typeof o=="object"&&typeof o.length=="number"&&o.length>=0&&a(o)!=="[object Array]"&&a(o.callee)==="[object Function]"},u=function(){return c(arguments)}();return c.isLegacyArguments=i,L=u?c:i,L}const Zt={},te=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"})),ve=wt(te);var q,lt;function ee(){if(lt)return q;lt=1;var r=Function.prototype.toString,t=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,a,c;if(typeof t=="function"&&typeof Object.defineProperty=="function")try{a=Object.defineProperty({},"length",{get:function(){throw c}}),c={},t(function(){throw 42},null,a)}catch(A){A!==c&&(t=null)}else t=null;var i=/^\s*class\b/,u=function(b){try{var _=r.call(b);return i.test(_)}catch{return!1}},n=function(b){try{return u(b)?!1:(r.call(b),!0)}catch{return!1}},o=Object.prototype.toString,e="[object Object]",y="[object Function]",l="[object GeneratorFunction]",s="[object HTMLAllCollection]",f="[object HTML document.all class]",p="[object HTMLCollection]",m=typeof Symbol=="function"&&!!Symbol.toStringTag,d=!(0 in[,]),g=function(){return!1};if(typeof document=="object"){var S=document.all;o.call(S)===o.call(document.all)&&(g=function(b){if((d||!b)&&(typeof b>"u"||typeof b=="object"))try{var _=o.call(b);return(_===s||_===f||_===p||_===e)&&b("")==null}catch{}return!1})}return q=t?function(b){if(g(b))return!0;if(!b||typeof b!="function"&&typeof b!="object")return!1;try{t(b,null,a)}catch(_){if(_!==c)return!1}return!u(b)&&n(b)}:function(b){if(g(b))return!0;if(!b||typeof b!="function"&&typeof b!="object")return!1;if(m)return n(b);if(u(b))return!1;var _=o.call(b);return _!==y&&_!==l&&!/^\[object HTML/.test(_)?!1:n(b)},q}var W,ct;function re(){if(ct)return W;ct=1;var r=ee(),t=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c=function(e,y,l){for(var s=0,f=e.length;s<f;s++)a.call(e,s)&&(l==null?y(e[s],s,e):y.call(l,e[s],s,e))},i=function(e,y,l){for(var s=0,f=e.length;s<f;s++)l==null?y(e.charAt(s),s,e):y.call(l,e.charAt(s),s,e)},u=function(e,y,l){for(var s in e)a.call(e,s)&&(l==null?y(e[s],s,e):y.call(l,e[s],s,e))},n=function(e,y,l){if(!r(y))throw new TypeError("iterator must be a function");var s;arguments.length>=3&&(s=l),t.call(e)==="[object Array]"?c(e,y,s):typeof e=="string"?i(e,y,s):u(e,y,s)};return W=n,W}var Y,yt;function ne(){if(yt)return Y;yt=1;var r=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],t=typeof globalThis>"u"?vt:globalThis;return Y=function(){for(var c=[],i=0;i<r.length;i++)typeof t[r[i]]=="function"&&(c[c.length]=r[i]);return c},Y}var V,ut;function oe(){if(ut)return V;ut=1;var r=Q,t=r("%Object.getOwnPropertyDescriptor%",!0);if(t)try{t([],"length")}catch{t=null}return V=t,V}var K,ft;function ae(){if(ft)return K;ft=1;var r=re(),t=ne(),a=Et(),c=Tt(),i=oe(),u=c("Object.prototype.toString"),n=Rt()(),o=typeof globalThis>"u"?vt:globalThis,e=t(),y=c("String.prototype.slice"),l=Object.getPrototypeOf,s=c("Array.prototype.indexOf",!0)||function(g,S){for(var A=0;A<g.length;A+=1)if(g[A]===S)return A;return-1},f={__proto__:null};n&&i&&l?r(e,function(d){var g=new o[d];if(Symbol.toStringTag in g){var S=l(g),A=i(S,Symbol.toStringTag);if(!A){var b=l(S);A=i(b,Symbol.toStringTag)}f["$"+d]=a(A.get)}}):r(e,function(d){var g=new o[d];f["$"+d]=a(g.slice)});var p=function(g){var S=!1;return r(f,function(A,b){if(!S)try{"$"+A(g)===b&&(S=y(b,1))}catch{}}),S},m=function(g){var S=!1;return r(f,function(A,b){if(!S)try{A(g),S=y(b,1)}catch{}}),S};return K=function(g){if(!g||typeof g!="object")return!1;if(!n){var S=y(u(g),8,-1);return s(e,S)>-1?S:S!=="Object"?!1:m(g)}return i?p(g):null},K}var z,pt;function _e(){if(pt)return z;pt=1;var r=ae();return z=function(a){return!!r(a)},z}const{addons:ie}=__STORYBOOK_MODULE_PREVIEW_API__,{once:se,logger:le}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{FORCE_REMOUNT:dt,STORY_RENDER_PHASE_CHANGED:ce,SET_CURRENT_STORY:ye,IGNORED_EXCEPTION:ue}=__STORYBOOK_MODULE_CORE_EVENTS__;var fe=(r=>(r.DONE="done",r.ERROR="error",r.ACTIVE="active",r.WAITING="waiting",r))(fe||{}),E={CALL:"storybook/instrumenter/call",SYNC:"storybook/instrumenter/sync",START:"storybook/instrumenter/start",BACK:"storybook/instrumenter/back",GOTO:"storybook/instrumenter/goto",NEXT:"storybook/instrumenter/next",END:"storybook/instrumenter/end"},ht={start:!1,back:!1,goto:!1,next:!1,end:!1},gt=new Error("This function ran after the play function completed. Did you forget to `await` it?"),bt=r=>Object.prototype.toString.call(r)==="[object Object]",pe=r=>Object.prototype.toString.call(r)==="[object Module]",de=r=>{if(!bt(r)&&!pe(r))return!1;if(r.constructor===void 0)return!0;let t=r.constructor.prototype;return!(!bt(t)||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)},he=r=>{try{return new r.constructor}catch{return{}}},H=()=>({renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,ancestors:[],playUntil:void 0,resolvers:{},syncTimeout:void 0}),mt=(r,t=!1)=>{let a=(t?r.shadowCalls:r.calls).filter(i=>i.retain);if(!a.length)return;let c=new Map(Array.from(r.callRefsByResult.entries()).filter(([,i])=>i.retain));return{cursor:a.length,calls:a,callRefsByResult:c}},ge=class{constructor(){this.initialized=!1,this.channel=ie.getChannel(),this.state=O.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};let r=({storyId:n,isPlaying:o=!0,isDebugging:e=!1})=>{let y=this.getState(n);this.setState(n,{...H(),...mt(y,e),shadowCalls:e?y.shadowCalls:[],chainedCallIds:e?y.chainedCallIds:new Set,playUntil:e?y.playUntil:void 0,isPlaying:o,isDebugging:e}),this.sync(n)};this.channel.on(dt,r),this.channel.on(ce,({storyId:n,newPhase:o})=>{let{isDebugging:e}=this.getState(n);this.setState(n,{renderPhase:o}),o==="preparing"&&e&&r({storyId:n}),o==="playing"&&r({storyId:n,isDebugging:e}),o==="played"&&this.setState(n,{isLocked:!1,isPlaying:!1,isDebugging:!1}),o==="errored"&&this.setState(n,{isLocked:!1,isPlaying:!1})}),this.channel.on(ye,()=>{this.initialized?this.cleanup():this.initialized=!0});let t=({storyId:n,playUntil:o})=>{this.getState(n).isDebugging||this.setState(n,({calls:y})=>({calls:[],shadowCalls:y.map(l=>({...l,status:"waiting"})),isDebugging:!0}));let e=this.getLog(n);this.setState(n,({shadowCalls:y})=>{var s;if(o||!e.length)return{playUntil:o};let l=y.findIndex(f=>f.id===e[0].callId);return{playUntil:(s=y.slice(0,l).filter(f=>f.interceptable&&!f.ancestors.length).slice(-1)[0])==null?void 0:s.id}}),this.channel.emit(dt,{storyId:n,isDebugging:!0})},a=({storyId:n})=>{var y;let o=this.getLog(n).filter(l=>!l.ancestors.length),e=o.reduceRight((l,s,f)=>l>=0||s.status==="waiting"?l:f,-1);t({storyId:n,playUntil:(y=o[e-1])==null?void 0:y.callId})},c=({storyId:n,callId:o})=>{var p;let{calls:e,shadowCalls:y,resolvers:l}=this.getState(n),s=e.find(({id:m})=>m===o),f=y.find(({id:m})=>m===o);if(!s&&f&&Object.values(l).length>0){let m=(p=this.getLog(n).find(d=>d.status==="waiting"))==null?void 0:p.callId;f.id!==m&&this.setState(n,{playUntil:f.id}),Object.values(l).forEach(d=>d())}else t({storyId:n,playUntil:o})},i=({storyId:n})=>{var e;let{resolvers:o}=this.getState(n);if(Object.values(o).length>0)Object.values(o).forEach(y=>y());else{let y=(e=this.getLog(n).find(l=>l.status==="waiting"))==null?void 0:e.callId;y?t({storyId:n,playUntil:y}):u({storyId:n})}},u=({storyId:n})=>{this.setState(n,{playUntil:void 0,isDebugging:!1}),Object.values(this.getState(n).resolvers).forEach(o=>o())};this.channel.on(E.START,t),this.channel.on(E.BACK,a),this.channel.on(E.GOTO,c),this.channel.on(E.NEXT,i),this.channel.on(E.END,u)}getState(r){return this.state[r]||H()}setState(r,t){let a=this.getState(r),c=typeof t=="function"?t(a):t;this.state={...this.state,[r]:{...a,...c}},O.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}cleanup(){this.state=Object.entries(this.state).reduce((t,[a,c])=>{let i=mt(c);return i&&(t[a]=Object.assign(H(),i)),t},{});let r={controlStates:ht,logItems:[]};this.channel.emit(E.SYNC,r),O.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}getLog(r){let{calls:t,shadowCalls:a}=this.getState(r),c=[...a];t.forEach((u,n)=>{c[n]=u});let i=new Set;return c.reduceRight((u,n)=>(n.args.forEach(o=>{o!=null&&o.__callId__&&i.add(o.__callId__)}),n.path.forEach(o=>{o.__callId__&&i.add(o.__callId__)}),(n.interceptable||n.exception)&&!i.has(n.id)&&(u.unshift({callId:n.id,status:n.status,ancestors:n.ancestors}),i.add(n.id)),u),[])}instrument(r,t){if(!de(r))return r;let{mutate:a=!1,path:c=[]}=t;return Object.keys(r).reduce((i,u)=>{let n=r[u];return typeof n!="function"?(i[u]=this.instrument(n,{...t,path:c.concat(u)}),i):typeof n.__originalFn__=="function"?(i[u]=n,i):(i[u]=(...o)=>this.track(u,n,o,t),i[u].__originalFn__=n,Object.defineProperty(i[u],"name",{value:u,writable:!1}),Object.keys(n).length>0&&Object.assign(i[u],this.instrument({...n},{...t,path:c.concat(u)})),i)},a?r:he(r))}track(r,t,a,c){var m,d,g,S;let i=((m=a==null?void 0:a[0])==null?void 0:m.__storyId__)||((S=(g=(d=O.__STORYBOOK_PREVIEW__)==null?void 0:d.selectionStore)==null?void 0:g.selection)==null?void 0:S.storyId),{cursor:u,ancestors:n}=this.getState(i);this.setState(i,{cursor:u+1});let o=`${n.slice(-1)[0]||i} [${u}] ${r}`,{path:e=[],intercept:y=!1,retain:l=!1}=c,s=typeof y=="function"?y(r,e):y,f={id:o,cursor:u,storyId:i,ancestors:n,path:e,method:r,args:a,interceptable:s,retain:l},p=(s&&!n.length?this.intercept:this.invoke).call(this,t,f,c);return this.instrument(p,{...c,mutate:!0,path:[{__callId__:f.id}]})}intercept(r,t,a){let{chainedCallIds:c,isDebugging:i,playUntil:u}=this.getState(t.storyId),n=c.has(t.id);return!i||n||u?(u===t.id&&this.setState(t.storyId,{playUntil:void 0}),this.invoke(r,t,a)):new Promise(o=>{this.setState(t.storyId,({resolvers:e})=>({isLocked:!1,resolvers:{...e,[t.id]:o}}))}).then(()=>(this.setState(t.storyId,o=>{let{[t.id]:e,...y}=o.resolvers;return{isLocked:!0,resolvers:y}}),this.invoke(r,t,a)))}invoke(r,t,a){let{callRefsByResult:c,renderPhase:i}=this.getState(t.storyId),u=e=>{var y,l;if(c.has(e))return c.get(e);if(e instanceof Array)return e.map(u);if(e instanceof Date)return{__date__:{value:e.toISOString()}};if(e instanceof Error){let{name:s,message:f,stack:p}=e;return{__error__:{name:s,message:f,stack:p}}}if(e instanceof RegExp){let{flags:s,source:f}=e;return{__regexp__:{flags:s,source:f}}}if(e instanceof O.window.HTMLElement){let{prefix:s,localName:f,id:p,classList:m,innerText:d}=e,g=Array.from(m);return{__element__:{prefix:s,localName:f,id:p,classNames:g,innerText:d}}}return typeof e=="function"?{__function__:{name:e.name}}:typeof e=="symbol"?{__symbol__:{description:e.description}}:typeof e=="object"&&((y=e==null?void 0:e.constructor)!=null&&y.name)&&((l=e==null?void 0:e.constructor)==null?void 0:l.name)!=="Object"?{__class__:{name:e.constructor.name}}:Object.prototype.toString.call(e)==="[object Object]"?Object.fromEntries(Object.entries(e).map(([s,f])=>[s,u(f)])):e},n={...t,args:t.args.map(u)};t.path.forEach(e=>{e!=null&&e.__callId__&&this.setState(t.storyId,({chainedCallIds:y})=>({chainedCallIds:new Set(Array.from(y).concat(e.__callId__))}))});let o=e=>{if(e instanceof Error){let{name:y,message:l,stack:s,callId:f=t.id}=e,p={name:y,message:l,stack:s,callId:f};if(this.update({...n,status:"error",exception:p}),this.setState(t.storyId,m=>({callRefsByResult:new Map([...Array.from(m.callRefsByResult.entries()),[e,{__callId__:t.id,retain:t.retain}]])})),t.ancestors.length)throw Object.prototype.hasOwnProperty.call(e,"callId")||Object.defineProperty(e,"callId",{value:t.id}),e;if(e!==gt)throw le.warn(e),ue}throw e};try{if(i==="played"&&!t.retain)throw gt;let e=(a.getArgs?a.getArgs(t,this.getState(t.storyId)):t.args).map(l=>typeof l!="function"||Object.keys(l).length?l:(...s)=>{let{cursor:f,ancestors:p}=this.getState(t.storyId);this.setState(t.storyId,{cursor:0,ancestors:[...p,t.id]});let m=()=>this.setState(t.storyId,{cursor:f,ancestors:p}),d=!1;try{let g=l(...s);return g instanceof Promise?(d=!0,g.finally(m)):g}finally{d||m()}}),y=r(...e);return y&&["object","function","symbol"].includes(typeof y)&&this.setState(t.storyId,l=>({callRefsByResult:new Map([...Array.from(l.callRefsByResult.entries()),[y,{__callId__:t.id,retain:t.retain}]])})),this.update({...n,status:y instanceof Promise?"active":"done"}),y instanceof Promise?y.then(l=>(this.update({...n,status:"done"}),l),o):y}catch(e){return o(e)}}update(r){this.channel.emit(E.CALL,r),this.setState(r.storyId,({calls:t})=>{let a=t.concat(r).reduce((c,i)=>Object.assign(c,{[i.id]:i}),{});return{calls:Object.values(a).sort((c,i)=>c.id.localeCompare(i.id,void 0,{numeric:!0}))}}),this.sync(r.storyId)}sync(r){let t=()=>{var y;let{isLocked:a,isPlaying:c}=this.getState(r),i=this.getLog(r),u=(y=i.filter(({ancestors:l})=>!l.length).find(l=>l.status==="waiting"))==null?void 0:y.callId,n=i.some(l=>l.status==="active");if(a||n||i.length===0){let l={controlStates:ht,logItems:i};this.channel.emit(E.SYNC,l);return}let o=i.some(l=>l.status==="done"||l.status==="error"),e={controlStates:{start:o,back:o,goto:!0,next:c,end:c},logItems:i,pausedAt:u};this.channel.emit(E.SYNC,e)};this.setState(r,({syncTimeout:a})=>(clearTimeout(a),{syncTimeout:setTimeout(t,0)}))}};function Oe(r,t={}){var a,c,i,u;try{let n=!1,o=!1;return(c=(a=O.window.location)==null?void 0:a.search)!=null&&c.includes("instrument=true")?n=!0:(u=(i=O.window.location)==null?void 0:i.search)!=null&&u.includes("instrument=false")&&(o=!0),O.window.parent===O.window&&!n||o?r:(O.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(O.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new ge),O.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(r,t))}catch(n){return se.warn(n),r}}var C={exports:{}};C.exports;var St;function Ee(){return St||(St=1,function(r){const t=(l,s)=>(...f)=>`\x1B[${l(...f)+s}m`,a=(l,s)=>(...f)=>{const p=l(...f);return`\x1B[${38+s};5;${p}m`},c=(l,s)=>(...f)=>{const p=l(...f);return`\x1B[${38+s};2;${p[0]};${p[1]};${p[2]}m`},i=l=>l,u=(l,s,f)=>[l,s,f],n=(l,s,f)=>{Object.defineProperty(l,s,{get:()=>{const p=f();return Object.defineProperty(l,s,{value:p,enumerable:!0,configurable:!0}),p},enumerable:!0,configurable:!0})};let o;const e=(l,s,f,p)=>{o===void 0&&(o=It);const m=p?10:0,d={};for(const[g,S]of Object.entries(o)){const A=g==="ansi16"?"ansi":g;g===s?d[A]=l(f,m):typeof S=="object"&&(d[A]=l(S[s],m))}return d};function y(){const l=new Map,s={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};s.color.gray=s.color.blackBright,s.bgColor.bgGray=s.bgColor.bgBlackBright,s.color.grey=s.color.blackBright,s.bgColor.bgGrey=s.bgColor.bgBlackBright;for(const[f,p]of Object.entries(s)){for(const[m,d]of Object.entries(p))s[m]={open:`\x1B[${d[0]}m`,close:`\x1B[${d[1]}m`},p[m]=s[m],l.set(d[0],d[1]);Object.defineProperty(s,f,{value:p,enumerable:!1})}return Object.defineProperty(s,"codes",{value:l,enumerable:!1}),s.color.close="\x1B[39m",s.bgColor.close="\x1B[49m",n(s.color,"ansi",()=>e(t,"ansi16",i,!1)),n(s.color,"ansi256",()=>e(a,"ansi256",i,!1)),n(s.color,"ansi16m",()=>e(c,"rgb",u,!1)),n(s.bgColor,"ansi",()=>e(t,"ansi16",i,!0)),n(s.bgColor,"ansi256",()=>e(a,"ansi256",i,!0)),n(s.bgColor,"ansi16m",()=>e(c,"rgb",u,!0)),s}Object.defineProperty(r,"exports",{enumerable:!0,get:y})}(C)),C.exports}var J,At;function Te(){return At||(At=1,J={stdout:!1,stderr:!1}),J}export{Te as a,ve as b,Rt as c,Ae as d,ae as e,_e as f,Q as g,_t as h,Oe as i,Tt as j,Et as k,Bt as l,Ee as r,Mt as s};
//# sourceMappingURL=browser-1cbe2a2c.js.map
