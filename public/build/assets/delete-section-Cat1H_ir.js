import{r as s,j as e,s as i}from"./app-CLpEaRCo.js";import{S as f,A as h}from"./Snackbar-fzQ229_V.js";import{B as l}from"./Button-BicMyakc.js";import{D as x}from"./Delete-CTmiBCxV.js";import{M as j}from"./Modal-BRS9CsBZ.js";import{B as y}from"./Box-XykpxaYB.js";import{T as n}from"./Typography-PKSZ2G4a.js";import{C as b}from"./CircularProgress-Ow3xtzur.js";import"./DefaultPropsProvider-BB_UqKg4.js";import"./useSlot-BPpDouID.js";import"./createSimplePaletteValueFilter-CgEDGJBs.js";import"./createSvgIcon-U9cBbwN0.js";import"./Paper-Bnxt2xcf.js";import"./useTheme-DyWzuE-k.js";import"./IconButton-Cdps9yCk.js";import"./Grow-DBLYxaRF.js";import"./utils-R48jgYa2.js";import"./ownerWindow-CO8Ksk3k.js";import"./index-BBmdbo3U.js";const g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function G({data:d}){const[c,r]=s.useState(!1),t=()=>r(!1),[m,p]=s.useState(!1),[a,o]=s.useState(!1);async function u(v){o(!0),(await i.dispatch(delete_student_thunk(d.id))).status==200&&(await i.dispatch(get_student_thunk()),p(!0)),o(!1)}return e.jsxs("div",{children:[e.jsx(f,{open:m,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:t,children:e.jsx(h,{onClose:t,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Deleted!"})}),e.jsx(l,{size:"small",variant:"contained",color:"error",onClick:()=>r(!0),children:e.jsx(x,{})}),e.jsx(j,{open:c,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(y,{sx:g,children:[e.jsx(n,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Delete student"}),e.jsx(n,{id:"modal-modal-description",sx:{mt:2},children:"Are you sure you want to delete?"}),e.jsx("div",{className:"flex w-full pt-5 items-center justify-end",children:e.jsx(l,{color:"error",onClick:u,disabled:a,variant:"contained",className:" w-full",children:a?e.jsx(b,{size:24,color:"inherit"}):"Delete"})})]})})]})}export{G as default};