import{r as e,j as t,s as p}from"./app-BEIpjE_9.js";import{C}from"./Close-DYoWNWMW.js";import{b as v,a as g}from"./questionaires-thunk-BeaA7qkG.js";import{B as c}from"./Button-BZ1BSryQ.js";import{D as S}from"./Dialog-Cmx5nYgu.js";import{T as s}from"./Toolbar-XsfxziAn.js";import{T as f}from"./Typography-DUWTPUtG.js";import{I as b}from"./IconButton-9cJKcSMG.js";import{T as y}from"./TextField-CkGphgMt.js";import"./createSvgIcon-BFeEZG0o.js";import"./identifier-DC8dQNi0.js";import"./DefaultPropsProvider-DDczCt9-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CMaWoWiJ.js";import"./useTheme-OzOyauU5.js";import"./useTheme-D3VjtuXy.js";import"./Modal-Bn7jlowl.js";import"./ownerWindow-CO8Ksk3k.js";import"./resolveComponentProps-TIeonBS9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlot-Bh71XdiA.js";import"./utils-DEtj5R2D.js";import"./Paper-DNXi3EKG.js";import"./useId-Bv66lcxb.js";import"./index-CfQ8uIOv.js";import"./extendSxProp-CAVQEEUm.js";import"./FormControl-VuFYG85F.js";import"./utils-CeLxCNIY.js";import"./isMuiElement-CxafOkj8.js";import"./FormLabel-BJ1ZL7JW.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-CXNu4jGY.js";import"./Popover-AePsHPTf.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./Grow-1xoy9Jwv.js";import"./useSlotProps-CVSHEPsx.js";import"./useControlled-73z9dQZ-.js";import"./InputBase-JpSOrCZu.js";function ct(){const[d,o]=e.useState(!1),[n,u]=e.useState({}),[i,_]=e.useState({}),[x,a]=e.useState(!1),m=window.location.pathname.split("/")[4],h=()=>{o(!0)},l=()=>{o(!1)};async function j(r){a(!0);try{await p.dispatch(v({...n,examination_id:m})),p.dispatch(g(m)),o(!1),a(!1)}catch{a(!1)}}return t.jsxs("div",{children:[t.jsx(c,{variant:"outlined",onClick:h,children:"Create Specification"}),t.jsxs(S,{fullWidth:!0,open:d,onClose:l,children:[t.jsxs(s,{className:"flex items-center justify-end",children:[t.jsx(f,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Create Specification"}),t.jsx(b,{edge:"start",color:"inherit",onClick:l,"aria-label":"close",children:t.jsx(C,{})})]}),t.jsx(s,{className:"flex items-center justify-end",children:t.jsx(y,{onChange:r=>u({...n,[r.target.name]:r.target.value}),error:!!(i!=null&&i.specification),helperText:(i==null?void 0:i.specification)??"",name:"specification",type:"text",id:"outlined-basic",label:"Specification",variant:"outlined",className:"w-full",multiline:!0,rows:2})}),t.jsxs("div",{className:"mt-6 flex w-full flex-col p-5",children:[t.jsx(s,{children:t.jsx(f,{sx:{ml:2,flex:1},variant:"h6",component:"div"})}),t.jsx(c,{disabled:x,variant:"contained",autoFocus:!0,onClick:j,children:"save"})]})]})]})}export{ct as default};