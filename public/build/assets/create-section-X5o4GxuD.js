import{r,u as C,j as t,s as u}from"./app-CB4Xp2J3.js";import{s as v,g as S}from"./sections-thunk-BMFtUPt-.js";import{S as w,A as b}from"./Snackbar-QkYyS9mK.js";import{B as d}from"./Modal-1OmCapNc.js";import{D as y}from"./Drawer-7R78Os0g.js";import{B as k}from"./Box-BfjfVhZy.js";import{T as N}from"./TextField-D0wYY-fx.js";import{C as D}from"./CircularProgress-dNnjAym0.js";import"./DefaultPropsProvider-BPyW3-4X.js";import"./useSlot-BT9FRa30.js";import"./resolveComponentProps-lWwltuXh.js";import"./ButtonBase-DER0a6QF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-yak5rwkc.js";import"./Paper-Df2NE_pW.js";import"./useTheme-DNxFxZkl.js";import"./IconButton-EGnHbTpu.js";import"./useSlotProps-D-Z-dHxw.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-d8ovLU9m.js";import"./utils-DHS7U2dH.js";import"./index-CXdS6Qlj.js";import"./Slide-asHxzpp1.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-DhUrNJf4.js";import"./Select-BWcEEZ37.js";import"./InputBase-BhbmT0Kd.js";import"./isHostComponent-DVu5iVWx.js";import"./index-QvFU3MX5.js";import"./Popover-uNPRY9U-.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BBo9fFeG.js";import"./useId-C7NdTQ3H.js";function nt(){const[x,i]=r.useState(!1),[n,a]=r.useState(!1),[l,h]=r.useState({semester:"1st Semester"}),[s,m]=r.useState({}),[j,c]=r.useState(!1);C(e=>e.sections);const p=e=>()=>{i(e)};async function g(e){a(!0);const o=await u.dispatch(v(l));o.status==200?(await u.dispatch(S()),c(!0),m({}),a(!1)):(a(!1),m(o.response.data.errors))}const f=(e,o)=>{o!=="clickaway"&&(c(!1),i(!1))};return t.jsxs("div",{children:[t.jsx(w,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:t.jsx(b,{onClose:f,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(d,{variant:"contained",onClick:p(!0),children:"Create sections"}),t.jsx(y,{anchor:"right",open:x,onClose:p(!1),children:t.jsx(k,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Create sections"}),t.jsx(N,{onChange:e=>h({...l,[e.target.name]:e.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"text",id:"outlined-basic",label:"Name of sections",variant:"outlined"})]}),t.jsx(d,{onClick:g,disabled:n,variant:"contained",className:" w-full",children:n?t.jsx(D,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{nt as default};