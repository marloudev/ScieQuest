import{u as j,j as t,h as d,y as u}from"./app-DjFcGzue.js";import b from"./update-section-BkyQbH25.js";import f from"./delete-section-C0bp_mJA.js";import{T,a as S,b as y,c as s,d as o,e as Y}from"./TableRow-8noL_pPl.js";import{P as C}from"./Paper-BVD3gHgL.js";import{B as D}from"./Modal-CjI9xz99.js";import{V as v}from"./Visibility-CP40Giqa.js";import"./enrollment-thunk-mxYkm5et.js";import"./academic-year-CqMfJfo8.js";import"./Snackbar-Dpy0bth8.js";import"./DefaultPropsProvider-1pyXb5Fq.js";import"./useSlot-BezX3Jkn.js";import"./resolveComponentProps-pMHD0120.js";import"./ButtonBase-CLW2KMML.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BvUVRHNe.js";import"./IconButton-CYJn8CRk.js";import"./useTheme-wO9HKpI1.js";import"./useSlotProps-3KYhbf-a.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-1-yvqwcq.js";import"./utils-Cl0TNYYY.js";import"./Edit-M-VFM-08.js";import"./Drawer-DPa79b5E.js";import"./index-D4QQdhO8.js";import"./Slide-BQYniE93.js";import"./debounce-Be36O1Ab.js";import"./Box-DP9glA3W.js";import"./extendSxProp-B9XFxa56.js";import"./TextField-lbC3McbU.js";import"./Select-DTl_YNUV.js";import"./InputBase-7z__NaQp.js";import"./isHostComponent-DVu5iVWx.js";import"./index-VXNobOzv.js";import"./Popover-Cj6jGZw6.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-DqeMGfXS.js";import"./useId-Chno6rbm.js";import"./MenuItem-RhQbn2IP.js";import"./listItemTextClasses-CGJKfIx1.js";import"./CircularProgress-Caau4XPd.js";import"./Delete-Cg7sA4f5.js";import"./Typography-CA3qYb0t.js";function ji(){const{enrollments:m}=j(i=>i.enrollments);return t.jsx(T,{component:C,children:t.jsxs(S,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(y,{children:t.jsxs(s,{children:[t.jsx(o,{children:"Student ID"}),t.jsx(o,{children:"Firstname"}),t.jsx(o,{children:"Lastname"}),t.jsx(o,{children:"Semester"}),t.jsx(o,{children:"Section"}),t.jsx(o,{children:"Course"}),t.jsx(o,{children:"Year"}),t.jsx(o,{children:"Action"})]})}),t.jsx(Y,{children:m==null?void 0:m.data.map((i,x)=>{var n,r,a,l,p,c;const h=d((n=i==null?void 0:i.user)==null?void 0:n.dob,"YYYY-MM-DD");return d().diff(h,"years"),console.log("res",i),t.jsxs(s,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(o,{component:"th",scope:"row",children:(r=i==null?void 0:i.user)==null?void 0:r.user_id}),t.jsx(o,{children:(a=i==null?void 0:i.user)==null?void 0:a.fname}),t.jsx(o,{children:(l=i==null?void 0:i.user)==null?void 0:l.lname}),t.jsx(o,{children:i==null?void 0:i.semester}),t.jsx(o,{children:((p=i==null?void 0:i.section)==null?void 0:p.name)??""}),t.jsx(o,{children:((c=i==null?void 0:i.course)==null?void 0:c.name)??""}),t.jsx(o,{children:(i==null?void 0:i.year)??""}),t.jsx(o,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(b,{data:i}),t.jsx(f,{data:i}),t.jsx(D,{onClick:()=>{var e;return u.visit(`/administrator/students/enrollment/${(e=i==null?void 0:i.user)==null?void 0:e.user_id}`)},size:"small",variant:"contained",color:"success",children:t.jsx(v,{})})]})})]},x)})})]})})}export{ji as default};