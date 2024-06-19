import{u as w,d as j,r as S,a as R,o as E,b as I,c as T,e as U,f as V,h as P,g as N,p as D,n as H,i as v,j as q,k as F,l as O,m as $,w as M,q as G,_ as Q,s as W,t as J,v as K,x as _,y as k,z as X,A as Y,B as Z,C as ee,D as te}from"./Dxp139-a.js";async function z(t,n=w()){const{path:i,matched:d}=n.resolve(t);if(!d.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(i)))return;const e=n._preloadPromises=n._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>z(t,n));n._routePreloaded.add(i);const r=d.map(s=>{var a;return(a=s.components)==null?void 0:a.default}).filter(s=>typeof s=="function");for(const s of r){const a=Promise.resolve(s()).catch(()=>{}).finally(()=>e.splice(e.indexOf(a)));e.push(a)}await Promise.all(e)}const ae=(...t)=>t.find(n=>n!==void 0);function ne(t){const n=t.componentName||"NuxtLink";function i(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return A(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:r(e).path;return{...e,name:void 0,path:A(s,t.trailingSlash)}}function d(e){const r=w(),s=$(),a=v(()=>{const m=e.to||e.href||"";return i(m,r.resolve)}),l=v(()=>typeof a.value=="string"&&q(a.value,{acceptRelative:!0})),p=v(()=>{var m;return typeof a.value=="object"?((m=r.resolve(a.value))==null?void 0:m.href)??null:a.value&&!e.external&&!l.value?i(F(s.app.baseURL,a.value),r.resolve):a.value}),f=N("RouterLink"),x=f&&typeof f!="string"?f.useLink:void 0,u=x==null?void 0:x({...e,to:a.value}),y=v(()=>e.target&&e.target!=="_self"),h=v(()=>e.external||y.value?!0:typeof a.value=="object"?!1:a.value===""||l.value);return{to:a,hasTarget:y,isAbsoluteUrl:l,isExternal:h,href:p,isActive:(u==null?void 0:u.isActive)??v(()=>a.value===r.currentRoute.value.path),isExactActive:(u==null?void 0:u.isExactActive)??v(()=>a.value===r.currentRoute.value.path),route:(u==null?void 0:u.route)??v(()=>r.resolve(a.value)),async navigate(){await O(p.value,{replace:e.replace,external:e.external})}}}return j({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:d,setup(e,{slots:r}){const s=w(),{to:a,href:l,navigate:p,isExternal:f,hasTarget:x,isAbsoluteUrl:u}=d(e),y=S(!1),h=S(null),m=c=>{var g;h.value=e.custom?(g=c==null?void 0:c.$el)==null?void 0:g.nextElementSibling:c==null?void 0:c.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!se()){const g=R();let b,o=null;E(()=>{const L=oe();I(()=>{b=T(()=>{var C;(C=h==null?void 0:h.value)!=null&&C.tagName&&(o=L.observe(h.value,async()=>{o==null||o(),o=null;const B=typeof a.value=="string"?a.value:s.resolve(a.value).fullPath;await Promise.all([g.hooks.callHook("link:prefetch",B).catch(()=>{}),!f.value&&z(a.value,s).catch(()=>{})]),y.value=!0}))})})}),U(()=>{b&&V(b),o==null||o(),o=null})}return()=>{var b;if(!f.value){const o={ref:m,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(y.value&&(o.class=e.prefetchedClass||t.prefetchedClass),o.rel=e.rel||void 0),P(N("RouterLink"),o,r.default)}const c=e.target||null,g=ae(e.noRel?"":e.rel,t.externalRelAttribute,u.value||x.value?"noopener noreferrer":"")||null;return e.custom?r.default?r.default({href:l.value,navigate:p,get route(){if(!l.value)return;const o=new URL(l.value,window.location.href);return{path:o.pathname,fullPath:o.pathname,get query(){return D(o.search)},hash:o.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:g,target:c,isExternal:f.value,isActive:!1,isExactActive:!1}):null:P("a",{ref:h,href:l.value||null,rel:g,target:c},(b=r.default)==null?void 0:b.call(r))}}})}const re=ne(H);function A(t,n){const i=n==="append"?M:G;return q(t)&&!t.startsWith("http")?t:i(t,!0)}function oe(){const t=R();if(t._observer)return t._observer;let n=null;const i=new Map,d=(r,s)=>(n||(n=new IntersectionObserver(a=>{for(const l of a){const p=i.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&p&&p()}})),i.set(r,s),n.observe(r),()=>{i.delete(r),n.unobserve(r),i.size===0&&(n.disconnect(),n=null)});return t._observer={observe:d}}function se(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const ie=t=>(ee("data-v-922baad2"),t=t(),te(),t),le={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ue=ie(()=>_("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ce={class:"max-w-520px text-center z-20"},de=["textContent"],fe=["textContent"],he={class:"w-full flex items-center justify-center"},ve={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const n=t;return W({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[],style:[{children:'*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(i,d)=>{const e=re;return J(),K("div",le,[ue,_("div",ce,[_("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:k(t.statusCode)},null,8,de),_("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:k(t.description)},null,8,fe),_("div",he,[X(e,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:Y(()=>[Z(k(t.backHome),1)]),_:1})])])])}}},ge=Q(ve,[["__scopeId","data-v-922baad2"]]);export{ge as default};
