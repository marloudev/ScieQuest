import{r as m,u as R,j as a,s as y}from"./app-Bsek6FUQ.js";import{C as Q}from"./Close-1O48SXXi.js";import{R as L}from"./quill.snow-xJ9tJrnG.js";import{s as E,g as H}from"./questionaires-thunk-Bovb6Ya9.js";import{s as M}from"./DefaultPropsProvider-BpFXPzzl.js";import{B as l}from"./Button-Dg6EWeDM.js";import{D as O}from"./Dialog-CibI4cMu.js";import{T as h}from"./Toolbar-DgichQ3D.js";import{T as N}from"./Typography-0ayP7eJ3.js";import{I as U}from"./IconButton-BTb1ebXf.js";import{T as r,F as k,I as W,S as G}from"./TextField-BezBu7YJ.js";import{C as c}from"./Check-BnJNfOTO.js";import{C as p}from"./CloudUpload-ZQ5n0Jax.js";import{F as I,a as K}from"./FormLabel-CaMjG3Ev.js";import{R as P,F as u,a as f}from"./RadioGroup-5Gv9Vcvf.js";import{M as T}from"./MenuItem-Bxoihaoq.js";import"./createSvgIcon-D4E3iHe5.js";import"./identifier-D9bY67EP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C_MHlIkh.js";import"./TransitionGroupContext-51S4eQaO.js";import"./useTheme-C7bqR9cI.js";import"./useTheme-C6d_XDKR.js";import"./Modal-BmPTqz4H.js";import"./ownerWindow-CO8Ksk3k.js";import"./resolveComponentProps-BxfK_olB.js";import"./useSlot-BT6cYY9j.js";import"./utils-BONekctI.js";import"./Paper-BkNCQbet.js";import"./useId-1DUcp5LN.js";import"./index-DAvYt3o3.js";import"./extendSxProp-BAVqlm8q.js";import"./utils-h7TmQkq6.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-C7xSoynL.js";import"./Popover-DNCnpuHL.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./Grow-gMP32Zj-.js";import"./useSlotProps-C9jfSRm-.js";import"./useControlled-B0RSdVJJ.js";import"./InputBase-BAOmPJmP.js";import"./isMuiElement-DWThRlsp.js";import"./listItemTextClasses-D0bVpRiD.js";function Le(){var _,v,w,C;const[F,x]=m.useState(!1),[e,n]=m.useState({}),[t,S]=m.useState({}),[q,d]=m.useState(!1),j=window.location.pathname.split("/")[4],{specifications:A}=R(i=>i.questionnaires);console.log("specification",e);const D=()=>{x(!0)},b=()=>{x(!1)};async function B(i){const s=new FormData;s.append("examination_id",j),e.question&&s.append("question",e.question),e.answer_key&&s.append("answer_key",e.answer_key),e.specification&&s.append("specification",e.specification),e.a&&s.append("a",e.a),e.b&&s.append("b",e.b),e.c&&s.append("c",e.c),e.d&&s.append("d",e.d),s.append("e",e.e),s.append("title",e.title),s.append("item_number",e.item_number),s.append("image_a",e.image_a),s.append("image_b",e.image_b),s.append("image_c",e.image_c),s.append("image_d",e.image_d),s.append("image_e",e.image_e),s.append("image_header",e.image_header);try{d(!0);const g=await y.dispatch(E(s));g.status==200?(await y.dispatch(H(j)),n({}),d(!1),x(!1)):(d(!1),S(g.response.data.errors)),console.log("datass",e)}catch{d(!1)}}const o=M("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});return a.jsxs(m.Fragment,{children:[a.jsx(l,{variant:"outlined",onClick:D,children:"Create Questionnaire"}),a.jsxs(O,{fullWidth:!0,open:F,onClose:b,children:[a.jsxs(h,{className:"flex items-center justify-end",children:[a.jsx(N,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Create Questionnaire"}),a.jsx(U,{edge:"start",color:"inherit",onClick:b,"aria-label":"close",children:a.jsx(Q,{})})]}),a.jsxs(h,{className:"flex-col gap-3 flex items-start justify-start w-full",children:[a.jsxs("div",{className:"w-full flex gap-4 flex-col",children:[a.jsx(r,{onChange:i=>n({...e,[i.target.name]:i.target.value}),error:!!(t!=null&&t.item_number),helperText:(t==null?void 0:t.item_number)??"",name:"item_number",type:"number",id:"outlined-basic",label:"Item Number",variant:"outlined",className:"w-full"}),a.jsxs(l,{component:"label",role:void 0,variant:"contained",startIcon:e!=null&&e.image_header?a.jsx(c,{}):a.jsx(p,{}),children:[e!=null&&e.image_header?e==null?void 0:e.image_header.name:"Upload files",a.jsx(o,{name:"image_header",type:"file",onChange:i=>n({...e,[i.target.name]:i.target.files[0]}),accept:"image/*"})]}),a.jsxs("div",{className:"bg-white ",children:[(t==null?void 0:t.question)&&a.jsx("div",{className:"text-red-600",children:t==null?void 0:t.question}),a.jsx("div",{className:"text-black p-3 font-black",children:"Questions"}),a.jsx(L,{theme:"snow",className:"text-black  h-52",onChange:i=>n({...e,question:i})})]})]}),a.jsx("div",{className:"flex items-start justify-start w-full mt-12",children:a.jsxs(I,{error:!!(t!=null&&t.answer_key),children:[a.jsx(K,{id:"demo-row-radio-buttons-group-label",children:"Answer Key"}),a.jsxs(P,{onChange:i=>n({...e,[i.target.name]:i.target.value}),row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"answer_key",children:[a.jsx("div",{children:a.jsx(u,{value:"A",control:a.jsx(f,{}),label:"A"})}),a.jsx(u,{value:"B",control:a.jsx(f,{}),label:"B"}),a.jsx(u,{value:"C",control:a.jsx(f,{}),label:"C"}),a.jsx(u,{value:"D",control:a.jsx(f,{}),label:"D"})]}),(t==null?void 0:t.answer_key)&&a.jsx(k,{children:t.answer_key})]})}),a.jsxs(I,{fullWidth:!0,error:!!(t!=null&&t.specification),children:[a.jsx(W,{id:"demo-simple-select-label",children:"Specification"}),a.jsxs(G,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"specification",label:"Specification",onChange:i=>n({...e,[i.target.name]:i.target.value}),value:e.specification??"",children:[a.jsx(T,{selected:!0,disabled:!0}),A.data.map((i,s)=>a.jsx(T,{value:i.specification,children:i.specification},s))]}),(t==null?void 0:t.specification)&&a.jsx(k,{children:t.specification})]}),((_=e==null?void 0:e.image_a)==null?void 0:_.name)??"",a.jsxs("div",{className:"flex gap-3 w-full",children:[a.jsx(l,{component:"label",role:void 0,variant:"contained",startIcon:e!=null&&e.image_a?a.jsx(c,{}):a.jsx(p,{}),children:a.jsx(o,{name:"image_a",type:"file",onChange:i=>n({...e,[i.target.name]:i.target.files[0]}),accept:"image/*"})}),a.jsx(r,{onChange:i=>n({...e,[i.target.name]:i.target.value}),error:!!(t!=null&&t.a),helperText:(t==null?void 0:t.a)??"",name:"a",type:"text",id:"outlined-basic",label:"Answer A",variant:"outlined",className:"w-full"})]}),((v=e==null?void 0:e.image_b)==null?void 0:v.name)??"",a.jsxs("div",{className:"flex gap-3 w-full",children:[a.jsx(l,{component:"label",role:void 0,variant:"contained",startIcon:e!=null&&e.image_b?a.jsx(c,{}):a.jsx(p,{}),children:a.jsx(o,{name:"image_b",type:"file",onChange:i=>n({...e,[i.target.name]:i.target.files[0]}),accept:"image/*"})}),a.jsx(r,{onChange:i=>n({...e,[i.target.name]:i.target.value}),error:!!(t!=null&&t.b),helperText:(t==null?void 0:t.b)??"",name:"b",type:"text",id:"outlined-basic",label:"Answer B",variant:"outlined",className:"w-full"})]}),((w=e==null?void 0:e.image_c)==null?void 0:w.name)??"",a.jsxs("div",{className:"flex gap-3 w-full",children:[a.jsx(l,{component:"label",role:void 0,variant:"contained",startIcon:e!=null&&e.image_c?a.jsx(c,{}):a.jsx(p,{}),children:a.jsx(o,{name:"image_c",type:"file",onChange:i=>n({...e,[i.target.name]:i.target.files[0]}),accept:"image/*"})}),a.jsx(r,{onChange:i=>n({...e,[i.target.name]:i.target.value}),error:!!(t!=null&&t.c),helperText:(t==null?void 0:t.c)??"",name:"c",type:"text",id:"outlined-basic",label:"Answer C",variant:"outlined",className:"w-full"})]}),((C=e==null?void 0:e.image_d)==null?void 0:C.name)??"",a.jsxs("div",{className:"flex gap-3 w-full",children:[a.jsx(l,{component:"label",role:void 0,variant:"contained",startIcon:e!=null&&e.image_d?a.jsx(c,{}):a.jsx(p,{}),children:a.jsx(o,{name:"image_d",type:"file",onChange:i=>n({...e,[i.target.name]:i.target.files[0]}),accept:"image/*"})}),a.jsx(r,{onChange:i=>n({...e,[i.target.name]:i.target.value}),error:!!(t!=null&&t.d),helperText:(t==null?void 0:t.d)??"",name:"d",type:"text",id:"outlined-basic",label:"Answer D",variant:"outlined",className:"w-full"})]}),a.jsx("div",{className:"mt-6 flex w-full items-end justify-end",children:a.jsxs(h,{children:[a.jsx(N,{sx:{ml:2,flex:1},variant:"h6",component:"div"}),a.jsx(l,{disabled:q,variant:"contained",autoFocus:!0,onClick:B,children:"save"})]})})]})]})]})}export{Le as default};