import{r as n,u as C,j as a,s as x}from"./app-CB4Xp2J3.js";import{a as w,g as y}from"./instructor-thunk-CAmUEDkR.js";import{S,A as _}from"./Snackbar-QkYyS9mK.js";import{B as h}from"./Modal-1OmCapNc.js";import{D}from"./Drawer-7R78Os0g.js";import{B as N}from"./Box-BfjfVhZy.js";import{T as r}from"./TextField-D0wYY-fx.js";import{F as k,I as T,S as I}from"./Select-BWcEEZ37.js";import{M as E}from"./MenuItem-BgCaGtxL.js";import{C as F}from"./CircularProgress-dNnjAym0.js";import"./user-service-CwVNGMdG.js";import"./DefaultPropsProvider-BPyW3-4X.js";import"./useSlot-BT9FRa30.js";import"./resolveComponentProps-lWwltuXh.js";import"./ButtonBase-DER0a6QF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-yak5rwkc.js";import"./Paper-Df2NE_pW.js";import"./useTheme-DNxFxZkl.js";import"./IconButton-EGnHbTpu.js";import"./useSlotProps-D-Z-dHxw.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-d8ovLU9m.js";import"./utils-DHS7U2dH.js";import"./index-CXdS6Qlj.js";import"./Slide-asHxzpp1.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-DhUrNJf4.js";import"./useId-C7NdTQ3H.js";import"./InputBase-BhbmT0Kd.js";import"./isHostComponent-DVu5iVWx.js";import"./index-QvFU3MX5.js";import"./Popover-uNPRY9U-.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BBo9fFeG.js";import"./listItemTextClasses-Bb3NbCwW.js";function xe(){const[g,m]=n.useState(!1),[p,o]=n.useState(!1),[s,i]=n.useState({}),[e,c]=n.useState({}),[j,d]=n.useState(!1),{departments:v}=C(t=>t.department),u=t=>()=>{m(t)};async function b(t){o(!0);const l=await x.dispatch(w({...s,user_type:2}));l.status==200?(await x.dispatch(y()),d(!0),c({}),o(!1)):(o(!1),c(l.response.data.errors))}const f=(t,l)=>{l!=="clickaway"&&(d(!1),m(!1))};return a.jsxs("div",{children:[a.jsx(S,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:a.jsx(_,{onClose:f,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),a.jsx(h,{variant:"contained",onClick:u(!0),children:"Create Instructor"}),a.jsx(D,{anchor:"right",open:g,onClose:u(!1),children:a.jsx(N,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Create Instructor"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.user_id),helperText:(e==null?void 0:e.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.fname),helperText:(e==null?void 0:e.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.lname),helperText:(e==null?void 0:e.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.email),helperText:(e==null?void 0:e.email)??"",name:"email",type:"email",id:"outlined-basic",label:"Email",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.password),helperText:(e==null?void 0:e.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(k,{fullWidth:!0,children:[a.jsx(T,{id:"demo-simple-select-label",children:"Department"}),a.jsx(I,{id:"demo-simple-select",name:"department_id",label:"Department",onChange:t=>i({...s,[t.target.name]:t.target.value}),children:v.data.map((t,l)=>a.jsx(E,{value:t.id,children:t.name},l))})]})]}),a.jsx(h,{onClick:b,disabled:p,variant:"contained",className:" w-full",children:p?a.jsx(F,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{xe as default};