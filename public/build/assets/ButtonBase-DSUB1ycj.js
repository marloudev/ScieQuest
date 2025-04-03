var Pe=Object.defineProperty;var Ve=(t,e,n)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>Ve(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as H,j as N}from"./app-B0NZlZ0g.js";import{_ as Be,b as x,a as ae,s as Q,u as le,g as Se,d as we}from"./DefaultPropsProvider-Bj-MDBn1.js";import{k as Z,u as _}from"./emotion-react.browser.esm-uu_N7sll.js";import{a as De,_ as Le,b as je,T as ie,c as ke,u as se}from"./TransitionGroupContext-Bz6M7j_I.js";function re(t){try{return t.matches(":focus-visible")}catch{}return!1}class G{constructor(){oe(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=De(G.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Ne(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function ve(){return G.use()}function Ne(){let t,e;const n=new Promise((a,o)=>{t=a,e=o});return n.resolve=t,n.reject=e,n}function $e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var n=function(i){return e&&l.isValidElement(i)?e(i):i},a=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function Fe(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var a=Object.create(null),o=[];for(var i in t)i in e?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var f=a[u][s];p[a[u][s]]=n(f)}p[u]=n(u)}for(s=0;s<o.length;s++)p[o[s]]=n(o[s]);return p}function v(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ie(t,e){return ee(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:v(n,"appear",t),enter:v(n,"enter",t),exit:v(n,"exit",t)})})}function Ue(t,e,n){var a=ee(t.children),o=Fe(e,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in e,u=i in a,f=e[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:v(s,"exit",t),enter:v(s,"enter",t)}):!u&&p&&!d?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:v(s,"exit",t),enter:v(s,"enter",t)}))}}),o}var ze=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Oe={component:"div",childFactory:function(e){return e}},te=function(t){Le(e,t);function e(a,o){var i;i=t.call(this,a,o)||this;var s=i.handleExited.bind($e(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?Ie(o,p):Ue(o,s,p),firstRender:!1}},n.handleExited=function(o,i){var s=ee(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=Be({},p.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=je(o,["component","childFactory"]),u=this.state.contextValue,f=ze(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(ie.Provider,{value:u},f):H.createElement(ie.Provider,{value:u},H.createElement(i,p,f))},e}(H.Component);te.propTypes={};te.defaultProps=Oe;function Ae(t){const{className:e,classes:n,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=t,[d,h]=l.useState(!1),M=x(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},b=x(n.child,d&&n.childLeaving,a&&n.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:b})})}const g=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xe=80,Ye=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ke=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,We=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,He=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_e=Q(Ae,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ye};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Ke};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${We};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ge=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=ke(),b=l.useRef(null),D=l.useRef(null),C=l.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:I,rippleSize:L,cb:U}=c;f(E=>[...E,N.jsx(_e,{classes:{ripple:x(i.ripple,g.ripple),rippleVisible:x(i.rippleVisible,g.rippleVisible),ripplePulsate:x(i.ripplePulsate,g.ripplePulsate),child:x(i.child,g.child),childLeaving:x(i.childLeaving,g.childLeaving),childPulsate:x(i.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:I,rippleSize:L},d.current)]),d.current+=1,h.current=U},[i]),$=l.useCallback((c={},y={},R=()=>{})=>{const{pulsate:I=!1,center:L=o||y.pulsate,fakeElement:U=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=U?null:D.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,w;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),T=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),T=Math.round(j-B.top)}if(L)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(z**2+j**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},V.start(Xe,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},[o,C,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((c,y)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{F(c,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(He,{className:x(g.root,i.root,s),ref:D,...p,children:N.jsx(te,{component:null,exit:!0,children:u})})});function qe(t){return Se("MuiButtonBase",t)}const Je=ae("MuiButtonBase",["root","disabled","focusVisible"]),Qe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:o}=t,s=we({root:["root",e&&"disabled",n&&"focusVisible"]},qe,o);return n&&a&&(s.root+=` ${a}`),s},Ze=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Je.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),st=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:D,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:E,onTouchMove:B,onTouchStart:S,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),m=ve(),ue=se(m.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ce=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const pe=P(m,"start",I,h),fe=P(m,"stop",$,h),de=P(m,"stop",Y,h),he=P(m,"stop",U,h),me=P(m,"stop",r=>{k&&r.preventDefault(),L&&L(r)},h),be=P(m,"start",S,h),ge=P(m,"stop",E,h),Me=P(m,"stop",B,h),Re=P(m,"stop",r=>{re(r.target)||K(!1),D&&D(r)},!1),ye=_(r=>{A.current||(A.current=r.currentTarget),re(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ee=_(r=>{M&&!r.repeat&&k&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),y&&y(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),C&&C(r))}),xe=_(r=>{M&&r.key===" "&&k&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=b);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Ce=se(n,A),ne={...a,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Te=Qe(ne);return N.jsxs(Ze,{as:W,className:x(Te.root,p),ownerState:ne,onBlur:Re,onClick:C,onContextMenu:fe,onFocus:ye,onKeyDown:Ee,onKeyUp:xe,onMouseDown:pe,onMouseLeave:me,onMouseUp:he,onDragLeave:de,onTouchEnd:ge,onTouchMove:Me,onTouchStart:be,ref:Ce,tabIndex:f?-1:T,type:j,...X,...O,children:[s,ce?N.jsx(Ge,{ref:ue,center:i,...w}):null]})});function P(t,e,n,a=!1){return _(o=>(n&&n(o),a||t[e](o),!0))}export{st as B,re as i};
