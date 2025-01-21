<<<<<<<< HEAD:public/build/assets/teachers-thunk-AfsbN82L.js
import{i as s,t as a}from"./app-CoIZFD8A.js";async function n(){try{return await s.get("/api/teachers")}catch(t){return t}}async function c(t){try{return await s.put(`/api/teachers/${t.id}`,t)}catch(e){return e}}function o(){return async function(t,e){const r=await n();return t(a.actions.setTeachers(r.data.response)),r}}function h(t){return async function(e,r){return c(t)}}export{o as g,h as u};
========
import{i as s,t as a}from"./app-BY4jbcUP.js";async function n(){try{return await s.get("/api/teachers")}catch(t){return t}}async function c(t){try{return await s.put(`/api/teachers/${t.id}`,t)}catch(e){return e}}function o(){return async function(t,e){const r=await n();return t(a.actions.setTeachers(r.data.response)),r}}function h(t){return async function(e,r){return c(t)}}export{o as g,h as u};
>>>>>>>> e12ed24a27fa52dcafd3e59f399857fa02a25b68:public/build/assets/teachers-thunk-DaOBhXn3.js
