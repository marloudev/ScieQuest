import{r as c,j as w,b as xe}from"./app-Bsek6FUQ.js";import{g as ce,a as le,c as G}from"./identifier-D9bY67EP.js";import{s as X,u as ue,c as de,m as ye}from"./DefaultPropsProvider-BpFXPzzl.js";import{o as Y,a as j}from"./ownerWindow-CO8Ksk3k.js";import{u as W,s as te}from"./TransitionGroupContext-51S4eQaO.js";import{u as ne,a as oe}from"./ButtonBase-C_MHlIkh.js";import{e as Re}from"./resolveComponentProps-BxfK_olB.js";import{u as q}from"./useSlot-BT6cYY9j.js";import{u as Te}from"./useTheme-C7bqR9cI.js";import{T as ve,r as Pe,g as re}from"./utils-BONekctI.js";function se(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function ke(e=window){const t=e.document.documentElement.clientWidth;return e.innerWidth-t}function J(e){var t;return parseInt(c.version,10)>=19?((t=e==null?void 0:e.props)==null?void 0:t.ref)||null:(e==null?void 0:e.ref)||null}function Se(e){const t=j(e);return t.body===e?Y(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ie(e){return parseInt(Y(e).getComputedStyle(e).paddingRight,10)||0}function Ce(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function ae(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const a=!r.includes(i),f=!Ce(i);a&&f&&K(i,s)})}function V(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ie(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Se(n)){const i=ke(Y(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ie(n)+i}px`;const a=j(n).querySelectorAll(".mui-fixed");[].forEach.call(a,f=>{o.push({value:f.style.paddingRight,property:"padding-right",el:f}),f.style.paddingRight=`${ie(f)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=j(n).body;else{const i=n.parentElement,a=Y(n);r=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:a})=>{r?i.style.setProperty(a,r):i.style.removeProperty(a)})}}function we(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Ne{constructor(){this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=we(o);ae(o,t.mount,t.modalRef,s,!0);const r=V(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=V(this.containers,r=>r.modals.includes(t)),s=this.containers[n];s.restore||(s.restore=Ie(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=V(this.containers,i=>i.modals.includes(t)),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&K(t.modalRef,o),ae(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Me=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Fe(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ae(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Oe(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ae(e))}function Be(e){const t=[],o=[];return Array.from(e.querySelectorAll(Me)).forEach((n,s)=>{const r=Fe(n);r===-1||!Oe(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function De(){return!0}function Le(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Be,isEnabled:i=De,open:a}=e,f=c.useRef(!1),g=c.useRef(null),P=c.useRef(null),E=c.useRef(null),T=c.useRef(null),h=c.useRef(!1),p=c.useRef(null),N=W(J(t),p),x=c.useRef(null);c.useEffect(()=>{!a||!p.current||(h.current=!o)},[o,a]),c.useEffect(()=>{if(!a||!p.current)return;const u=j(p.current);return p.current.contains(u.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),h.current&&p.current.focus()),()=>{s||(E.current&&E.current.focus&&(f.current=!0,E.current.focus()),E.current=null)}},[a]),c.useEffect(()=>{if(!a||!p.current)return;const u=j(p.current),m=R=>{x.current=R,!(n||!i()||R.key!=="Tab")&&u.activeElement===p.current&&R.shiftKey&&(f.current=!0,P.current&&P.current.focus())},S=()=>{var C,F;const R=p.current;if(R===null)return;if(!u.hasFocus()||!i()||f.current){f.current=!1;return}if(R.contains(u.activeElement)||n&&u.activeElement!==g.current&&u.activeElement!==P.current)return;if(u.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!h.current)return;let I=[];if((u.activeElement===g.current||u.activeElement===P.current)&&(I=r(p.current)),I.length>0){const O=!!((C=x.current)!=null&&C.shiftKey&&((F=x.current)==null?void 0:F.key)==="Tab"),B=I[0],L=I[I.length-1];typeof B!="string"&&typeof L!="string"&&(O?L.focus():B.focus())}else R.focus()};u.addEventListener("focusin",S),u.addEventListener("keydown",m,!0);const y=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&S()},50);return()=>{clearInterval(y),u.removeEventListener("focusin",S),u.removeEventListener("keydown",m,!0)}},[o,n,s,i,a,r]);const v=u=>{E.current===null&&(E.current=u.relatedTarget),h.current=!0,T.current=u.target;const m=t.props.onFocus;m&&m(u)},k=u=>{E.current===null&&(E.current=u.relatedTarget),h.current=!0};return w.jsxs(c.Fragment,{children:[w.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:g,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:N,onFocus:v}),w.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:P,"data-testid":"sentinelEnd"})]})}function je(e){return typeof e=="function"?e():e}const Ue=c.forwardRef(function(t,o){const{children:n,container:s,disablePortal:r=!1}=t,[i,a]=c.useState(null),f=W(c.isValidElement(n)?J(n):null,o);if(ne(()=>{r||a(je(s)||document.body)},[s,r]),ne(()=>{if(i&&!r)return te(o,i),()=>{te(o,null)}},[o,i,r]),r){if(c.isValidElement(n)){const g={ref:f};return c.cloneElement(n,g)}return w.jsx(c.Fragment,{children:n})}return w.jsx(c.Fragment,{children:i&&xe.createPortal(n,i)})}),Ke={entering:{opacity:1},entered:{opacity:1}},We=c.forwardRef(function(t,o){const n=Te(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:a,easing:f,in:g,onEnter:P,onEntered:E,onEntering:T,onExit:h,onExited:p,onExiting:N,style:x,timeout:v=s,TransitionComponent:k=ve,...u}=t,m=c.useRef(null),S=W(m,J(a),o),y=b=>l=>{if(b){const d=m.current;l===void 0?b(d):b(d,l)}},R=y(T),I=y((b,l)=>{Pe(b);const d=re({style:x,timeout:v,easing:f},{mode:"enter"});b.style.webkitTransition=n.transitions.create("opacity",d),b.style.transition=n.transitions.create("opacity",d),P&&P(b,l)}),C=y(E),F=y(N),O=y(b=>{const l=re({style:x,timeout:v,easing:f},{mode:"exit"});b.style.webkitTransition=n.transitions.create("opacity",l),b.style.transition=n.transitions.create("opacity",l),h&&h(b)}),B=y(p),L=b=>{r&&r(m.current,b)};return w.jsx(k,{appear:i,in:g,nodeRef:m,onEnter:I,onEntered:C,onEntering:R,onExit:O,onExited:B,onExiting:F,addEndListener:L,timeout:v,...u,children:(b,l)=>c.cloneElement(a,{style:{opacity:0,visibility:b==="exited"&&!g?"hidden":void 0,...Ke[b],...x,...a.props.style},ref:S,...l})})});function $e(e){return le("MuiBackdrop",e)}ce("MuiBackdrop",["root","invisible"]);const ze=e=>{const{ownerState:t,...o}=e;return o},He=e=>{const{classes:t,invisible:o}=e;return de({root:["root",o&&"invisible"]},$e,t)},Ye=X("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),qe=c.forwardRef(function(t,o){const n=ue({props:t,name:"MuiBackdrop"}),{children:s,className:r,component:i="div",invisible:a=!1,open:f,components:g={},componentsProps:P={},slotProps:E={},slots:T={},TransitionComponent:h,transitionDuration:p,...N}=n,x={...n,component:i,invisible:a},v=He(x),k={transition:h,root:g.Root,...T},u={...P,...E},m={slots:k,slotProps:u},[S,y]=q("root",{elementType:Ye,externalForwardedProps:m,className:G(v.root,r),ownerState:x}),[R,I]=q("transition",{elementType:We,externalForwardedProps:m,ownerState:x}),C=ze(I);return w.jsx(R,{in:f,timeout:p,...N,...C,children:w.jsx(S,{"aria-hidden":!0,...y,classes:v,ref:o,children:s})})});function Ve(e){return typeof e=="function"?e():e}function Ge(e){return e?e.props.hasOwnProperty("in"):!1}const H=new Ne;function Xe(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,closeAfterTransition:s=!1,onTransitionEnter:r,onTransitionExited:i,children:a,onClose:f,open:g,rootRef:P}=e,E=c.useRef({}),T=c.useRef(null),h=c.useRef(null),p=W(h,P),[N,x]=c.useState(!g),v=Ge(a);let k=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(k=!1);const u=()=>j(T.current),m=()=>(E.current.modalRef=h.current,E.current.mount=T.current,E.current),S=()=>{H.mount(m(),{disableScrollLock:n}),h.current&&(h.current.scrollTop=0)},y=oe(()=>{const l=Ve(t)||u().body;H.add(m(),l),h.current&&S()}),R=()=>H.isTopModal(m()),I=oe(l=>{T.current=l,l&&(g&&R()?S():h.current&&K(h.current,k))}),C=c.useCallback(()=>{H.remove(m(),k)},[k]);c.useEffect(()=>()=>{C()},[C]),c.useEffect(()=>{g?y():(!v||!s)&&C()},[g,C,v,s,y]);const F=l=>d=>{var M;(M=l.onKeyDown)==null||M.call(l,d),!(d.key!=="Escape"||d.which===229||!R())&&(o||(d.stopPropagation(),f&&f(d,"escapeKeyDown")))},O=l=>d=>{var M;(M=l.onClick)==null||M.call(l,d),d.target===d.currentTarget&&f&&f(d,"backdropClick")};return{getRootProps:(l={})=>{const d=Re(e);delete d.onTransitionEnter,delete d.onTransitionExited;const M={...d,...l};return{role:"presentation",...M,onKeyDown:F(M),ref:p}},getBackdropProps:(l={})=>{const d=l;return{"aria-hidden":!0,...d,onClick:O(d),open:g}},getTransitionProps:()=>{const l=()=>{x(!1),r&&r()},d=()=>{x(!0),i&&i(),s&&C()};return{onEnter:se(l,a==null?void 0:a.props.onEnter),onExited:se(d,a==null?void 0:a.props.onExited)}},rootRef:p,portalRef:I,isTopModal:R,exited:N,hasTransition:v}}function Je(e){return le("MuiModal",e)}ce("MuiModal",["root","hidden","backdrop"]);const Qe=e=>{const{open:t,exited:o,classes:n}=e;return de({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Je,n)},Ze=X("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(ye(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),_e=X(qe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ut=c.forwardRef(function(t,o){const n=ue({name:"MuiModal",props:t}),{BackdropComponent:s=_e,BackdropProps:r,classes:i,className:a,closeAfterTransition:f=!1,children:g,container:P,component:E,components:T={},componentsProps:h={},disableAutoFocus:p=!1,disableEnforceFocus:N=!1,disableEscapeKeyDown:x=!1,disablePortal:v=!1,disableRestoreFocus:k=!1,disableScrollLock:u=!1,hideBackdrop:m=!1,keepMounted:S=!1,onBackdropClick:y,onClose:R,onTransitionEnter:I,onTransitionExited:C,open:F,slotProps:O={},slots:B={},theme:L,...b}=n,l={...n,closeAfterTransition:f,disableAutoFocus:p,disableEnforceFocus:N,disableEscapeKeyDown:x,disablePortal:v,disableRestoreFocus:k,disableScrollLock:u,hideBackdrop:m,keepMounted:S},{getRootProps:d,getBackdropProps:M,getTransitionProps:fe,portalRef:pe,isTopModal:me,exited:Q,hasTransition:Z}=Xe({...l,rootRef:o}),U={...l,exited:Q},A=Qe(U),$={};if(g.props.tabIndex===void 0&&($.tabIndex="-1"),Z){const{onEnter:D,onExited:z}=fe();$.onEnter=D,$.onExited=z}const _={...b,slots:{root:T.Root,backdrop:T.Backdrop,...B},slotProps:{...h,...O}},[he,be]=q("root",{elementType:Ze,externalForwardedProps:_,getSlotProps:d,additionalProps:{ref:o,as:E},ownerState:U,className:G(a,A==null?void 0:A.root,!U.open&&U.exited&&(A==null?void 0:A.hidden))}),[ge,ee]=q("backdrop",{elementType:s,externalForwardedProps:_,additionalProps:r,getSlotProps:D=>M({...D,onClick:z=>{y&&y(z),D!=null&&D.onClick&&D.onClick(z)}}),className:G(r==null?void 0:r.className,A==null?void 0:A.backdrop),ownerState:U}),Ee=W(r==null?void 0:r.ref,ee.ref);return!S&&!F&&(!Z||Q)?null:w.jsx(Ue,{ref:pe,container:P,disablePortal:v,children:w.jsxs(he,{...be,children:[!m&&s?w.jsx(ge,{...ee,ref:Ee}):null,w.jsx(Le,{disableEnforceFocus:N,disableAutoFocus:p,disableRestoreFocus:k,isEnabled:me,open:F,children:c.cloneElement(g,$)})]})})});export{qe as B,We as F,ut as M,Ue as P,ke as a,se as c,J as g};