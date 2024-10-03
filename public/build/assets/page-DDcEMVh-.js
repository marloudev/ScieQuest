import{W as c,j as e}from"./app-BKxzFGBx.js";import{T as l}from"./TextField-CbzqqnJl.js";import{C as p}from"./Checkbox-s5HxP48C.js";import{B as d}from"./Modal-Ds47GXu0.js";import{C as x}from"./CircularProgress-sbhAYwQn.js";import"./DefaultPropsProvider-BdS6nueG.js";import"./useSlot-C_GmNxEW.js";import"./resolveComponentProps-TLKj9-Es.js";import"./ButtonBase-ZZHDPnUv.js";import"./Select-BQcN9112.js";import"./InputBase-4hWtwl0Z.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C0tahnqc.js";import"./useTheme-DJv7-wFq.js";import"./extendSxProp-CK8_dlsf.js";import"./ownerWindow-6z4QwRpV.js";import"./debounce-Be36O1Ab.js";import"./Popover-CP8qj5SC.js";import"./Paper-CF4dgFF6.js";import"./Grow-CaVqfK8Z.js";import"./utils-DyhK9jud.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-Rw4S4E8l.js";import"./useSlotProps-9HqtNA5l.js";import"./useControlled-BII1iCiW.js";import"./useId-COYo1B_Z.js";import"./createSvgIcon-DNHAV2hH.js";function H(){const{data:i,setData:a,post:r,processing:m,errors:t,reset:o}=c({email:"",password:"",remember:!1}),n=s=>{s.preventDefault(),console.log("data",i),r(route("login.auth"),{onFinish:()=>o("password")})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute inset-0 -z-10 items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"}),e.jsx("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ",children:e.jsxs("div",{className:"mt-20 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-5 rounded-md",children:[e.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm flex w-full items-center justify-center",children:e.jsxs("div",{className:"flex items-center justify-center flex-col",children:[e.jsx("img",{alt:"Your Company",src:"/images/logo.png",className:"mx-auto h-32 w-32 "}),e.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight ",children:"Sign in to your account"})]})}),e.jsxs("form",{onSubmit:n,className:"space-y-6",children:[e.jsx(l,{className:"w-full",onChange:s=>a("email",s.target.value),error:!!(t!=null&&t.email),helperText:(t==null?void 0:t.email)??"",name:"email",type:"text",id:"outlined-basic",label:"Email",variant:"outlined"}),e.jsx(l,{className:"w-full",onChange:s=>a("password",s.target.value),error:!!(t!=null&&t.password),helperText:(t==null?void 0:t.password)??"",name:"password",type:"text",id:"outlined-basic",label:"Password",variant:"outlined"}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(p,{name:"remember",checked:i.remember,onChange:s=>a("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsx("div",{children:e.jsx(d,{type:"submit",disabled:m,variant:"contained",className:"w-full",children:m?e.jsx(x,{size:24,color:"inherit"}):" Sign in"})})]})]})})]})}export{H as default};