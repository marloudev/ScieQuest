import{u as m,j as s,y as l}from"./app-BEIpjE_9.js";import{P as u}from"./Pagination-C9cvy5lo.js";import"./identifier-DC8dQNi0.js";import"./DefaultPropsProvider-DDczCt9-.js";import"./useControlled-73z9dQZ-.js";import"./index-CXNu4jGY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BFeEZG0o.js";import"./useSlot-Bh71XdiA.js";import"./resolveComponentProps-TIeonBS9.js";import"./ButtonBase-CMaWoWiJ.js";function R(){const{teachers:e}=m(t=>t.teachers);console.log("teachers",e);const r=window.location.pathname,i=r+window.location.search,o=((t,a)=>new URLSearchParams(t.split("?")[1]).get(a))(i,"page"),c=o?parseInt(o,10):1;function p(t,a){const n=r+"?page="+a;l.visit(n)}return s.jsx("div",{className:"flex w-full items-center justify-end",children:s.jsx(u,{onChange:p,count:e.last_page,defaultPage:c,color:"primary",shape:"rounded"})})}export{R as default};