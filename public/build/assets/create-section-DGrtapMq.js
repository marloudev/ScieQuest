import{r,u as C,j as t,s as u}from"./app-4zaeLUIG.js";import{s as v,g as S}from"./sections-thunk-cj2qJ8fM.js";import{S as w,A as b}from"./Snackbar-BiRA8y8c.js";import{B as d}from"./Modal-BEimG7iS.js";import{D as y}from"./Drawer-DGze2q5f.js";import{B as k}from"./Box-DtzXDXe-.js";import{T as N}from"./TextField-BOC8-Ijy.js";import{C as D}from"./CircularProgress-C34daSCh.js";import"./DefaultPropsProvider-KEunUbnd.js";import"./useSlot-DCW9KenC.js";import"./resolveComponentProps-66Eu5LAc.js";import"./ButtonBase-DLXIb26o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BA_QHjjU.js";import"./Paper-Dg8SvZFW.js";import"./useTheme-pStYO19w.js";import"./IconButton-Ck6aPjQ-.js";import"./useSlotProps-Dr7-rmYK.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-BENwxKdU.js";import"./utils-Cxt2Du0-.js";import"./index-CQObzbwy.js";import"./Slide-DMVtGXjE.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CCFeVLg-.js";import"./Select-nmPnboQC.js";import"./InputBase-Dbncs1Sn.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DfeEFFw8.js";import"./Popover-D_v2rG0t.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-DjFGmbVV.js";import"./useId-BL6g8VD4.js";function nt(){const[x,i]=r.useState(!1),[n,a]=r.useState(!1),[l,h]=r.useState({semester:"1st Semester"}),[s,m]=r.useState({}),[j,c]=r.useState(!1);C(e=>e.sections);const p=e=>()=>{i(e)};async function g(e){a(!0);const o=await u.dispatch(v(l));o.status==200?(await u.dispatch(S()),c(!0),m({}),a(!1)):(a(!1),m(o.response.data.errors))}const f=(e,o)=>{o!=="clickaway"&&(c(!1),i(!1))};return t.jsxs("div",{children:[t.jsx(w,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:t.jsx(b,{onClose:f,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(d,{variant:"contained",onClick:p(!0),children:"Create sections"}),t.jsx(y,{anchor:"right",open:x,onClose:p(!1),children:t.jsx(k,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Create sections"}),t.jsx(N,{onChange:e=>h({...l,[e.target.name]:e.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"text",id:"outlined-basic",label:"Name of sections",variant:"outlined"})]}),t.jsx(d,{onClick:g,disabled:n,variant:"contained",className:" w-full",children:n?t.jsx(D,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{nt as default};