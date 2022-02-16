var Q=Object.defineProperty,B=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var W=(e,t,o)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))q.call(t,o)&&W(e,o,t[o]);if(v)for(var o of v(t))z.call(t,o)&&W(e,o,t[o]);return e},y=(e,t)=>B(e,J(t));var C=(e,t)=>{var o={};for(var s in e)q.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&v)for(var s of v(e))t.indexOf(s)<0&&z.call(e,s)&&(o[s]=e[s]);return o};import{W as Y,U as A,s as l,j as V,R as a,r as P,a as G}from"./vendor.4888ac4f.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};Z();const H=Y`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;let R=0;function I(e="id"){return R++,`${e}${R}`}const ee=A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,te=l.div`
  animation: ${ee} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid lightgray;
  border-right: 4px solid lightgray;
  border-bottom: 4px solid lightgray;
  border-left: 4px solid transparent;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
`,$="--slide-value",F="--x-value",oe=l.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: 2px solid black;
`,ie=l.figure`
  min-height: 200px;
  position: relative;
  overflow: hidden;
`,N=l.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,re=l.img`
  visibility: 'hidden';
  max-width: '100%';
  max-height: '100%';
`,ne=l(N)`
  clip-path: polygon(0 0, var(${$}) 0, var(${$}) 100%, 0 100%);
`,se=l.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 2px dashed ${e=>e.color||"white"};
  transform: translate(var(${F}), 0px);
`,n=V.exports.jsx,h=V.exports.jsxs;function ae(d){var u=d,{leftSrc:e,rightSrc:t,separatorColor:o,height:s,width:r}=u,i=C(u,["leftSrc","rightSrc","separatorColor","height","width"]);const[g,m]=a.useState(!0),[c,w]=a.useState(!0),[x,p]=a.useState(0),b=a.useRef(null),D=b.current?x/b.current.offsetWidth:0,M=Math.round(D*1e4)/100,j=g||c;a.useEffect(()=>{m(!0)},[e]),a.useEffect(()=>{w(!0)},[t]);function T(X){if(!b.current)return;const K=X.pageX-b.current.offsetLeft;p(K)}return n(oe,y(f({},i),{children:h(ie,{ref:b,onMouseMove:T,children:[n(re,{src:e,style:{height:s,width:r}}),n(N,{src:t,onLoad:()=>w(!1),style:f({},j&&{visibility:"hidden"})}),n(ne,{src:e,onLoad:()=>m(!1),hidden:!c&&!g,style:f({[$]:M+"%"},j&&{visibility:"hidden"})}),n(se,{color:o,style:{[F]:x+"px"}}),j&&n(te,{})]})}))}function ce(e,t){const[o,s]=P.exports.useState(e);return P.exports.useEffect(()=>{const r=setTimeout(()=>{s(e)},t);return()=>{clearTimeout(r)}},[e,t]),o}const le=l.div`
  position: relative;
`,E=l.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`,de=l.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:disabled + ${E} {
    background: #cccccc !important;
    cursor: not-allowed;
  }

  &:checked + ${E} {
    background: #3297fd;

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;function ue(e){const[t]=a.useState(()=>I("switch"));return h(le,{children:[n(de,y(f({},e),{type:"checkbox",id:t})),n(E,{htmlFor:t})]})}const pe=l.div`
  width: 250px;
`,k=l.div`
  display: flex;
  gap: 10px;
`;var L=(e=>(e.jpeg="jpeg",e.png="png",e.webp="webp",e.original="original",e))(L||{});const he={jpeg:"JPEG",png:"PNG",webp:"WebP",original:"Original"};function _({onChange:e,value:t,title:o}){const[s]=a.useState(()=>I("select")),[r]=a.useState(()=>I("input")),[i,d]=a.useState((t==null?void 0:t.format)||"jpeg"),[u,g]=a.useState((t==null?void 0:t.quality)||"50"),m=ce(u,200),[c,w]=a.useState((t==null?void 0:t.showInfo)||!1);P.exports.useEffect(()=>{e&&e({format:i,quality:m,showInfo:c})},[i,m,c]);const x=i==="original";return h(pe,{children:[n("h3",{children:o||""}),h(k,{children:[n("label",{htmlFor:s,children:"Format:"}),n("select",{id:s,value:i,onChange:p=>{d(p.target.value)},children:Object.keys(L).map(p=>n("option",{value:p,children:he[p]||""},p))})]}),h(k,{children:[n("label",{htmlFor:r,children:"Quality:"}),n("input",{id:r,type:"range",min:"1",max:"100",value:u,onChange:p=>{g(p.target.value)},disabled:x})]}),h(k,{children:[n("label",{children:"Show Info:"}),n(ue,{checked:c,onChange:p=>{w(p.target.checked)},disabled:x})]})]})}const fe=l.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin: auto;
`,ge=l.div`
  display: flex;
  gap: 10px;
  margin: auto;
  width: fit-content;
  padding: 20px;
`;function me(e){return e?new URLSearchParams(f({force_format:e.format},e.format!=L.original&&{q:e.quality,ci_info:e.showInfo?"1":"0"})).toString():""}function O(e,t){return t?e+"?"+me(t):""}const U={format:L.jpeg,quality:"50",showInfo:!1},S={x0_3:{title:"1/3",value:"20vw"},x0_5:{title:"1/2",value:"35vw"},x1:{title:"Normal",value:"50vw"},x2:{title:"2x",value:"75vw"},x3:{title:"3x",value:"100vw"}};function xe({src:e}){const[t]=a.useState(()=>I("select")),[o,s]=a.useState(S.x1.value),[r,i]=a.useState(U),[d,u]=a.useState(U),g=O(e,r),m=O(e,d);return h("section",{children:[h(fe,{children:[n(_,{title:"Left Image",value:r,onChange:c=>i(c)}),n(_,{title:"Right Image",value:d,onChange:c=>u(c)})]}),n(ae,{leftSrc:g,rightSrc:m,width:o,separatorColor:"white"}),h(ge,{children:[n("label",{htmlFor:t,children:"Image Size:"}),n("select",{id:t,value:o,onChange:c=>{s(c.target.value)},children:Object.keys(S).map(c=>n("option",{value:S[c].value,children:S[c].title||""},c))})]})]})}function be(e,s={}){var r=s,{body:t}=r,o=C(r,["body"]);const i={"Content-Type":"application/json"},d=y(f({method:t?"POST":"GET"},o),{headers:f(f({},i),o.headers)});return t&&(d.body=JSON.stringify(t)),window.fetch(`${e}`,d).then(async u=>{if(u.ok)return await u.json();{const g=await u.text();return Promise.reject(new Error(g))}})}const we=l.div`
  padding-top: 30px;
`,ve=l.select`
  display: block;
  margin: auto;
`;function ye(){const[e,t]=a.useState([]),[o,s]=a.useState("");a.useEffect(()=>{be("https://scaleflex.cloudimg.io/v7/01_test/sara_sample.json?vh=631222&func=proxy").then(i=>{t(i),s(i[4].src)})},[]);const r="https://doc.cloudimg.io/"+o;return h(we,{children:[n(ve,{value:o,onChange:i=>{s(i.target.value)},children:Object.keys(e).map(i=>n("option",{value:e[i].src,children:e[i].title||""},i))}),n(xe,{src:r}),n(H,{})]})}G.render(n(a.StrictMode,{children:n(ye,{})}),document.getElementById("root"));
