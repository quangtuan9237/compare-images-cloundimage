var N=Object.defineProperty,O=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&j(e,r,t[r]);if(b)for(var r of b(t))L.call(t,r)&&j(e,r,t[r]);return e},w=(e,t)=>O(e,X(t));var P=(e,t)=>{var r={};for(var n in e)k.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&b)for(var n of b(e))t.indexOf(n)<0&&L.call(e,n)&&(r[n]=e[n]);return r};import{W as K,s as a,j as R,R as l,r as S,a as M}from"./vendor.f675963a.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};Q();const B=K`
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
`,I="--slide-value",V="--x-value",Y=a.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: 2px solid black;
`,A=a.figure`
  position: relative;
  overflow: hidden;
`,D=a.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,J=a.img`
  visibility: 'hidden';
  max-width: '100%';
  max-height: '100%';
`,T=a(D)`
  clip-path: polygon(0 0, var(${I}) 0, var(${I}) 100%, 0 100%);
`,G=a.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 2px dashed ${e=>e.color||"white"};
  transform: translate(var(${V}), 0px);
`,i=R.exports.jsx,p=R.exports.jsxs;function H(d){var u=d,{leftSrc:e,rightSrc:t,separatorColor:r,height:n,width:o}=u,s=P(u,["leftSrc","rightSrc","separatorColor","height","width"]);const[f,g]=l.useState(0),h=l.useRef(null),m=h.current?f/h.current.offsetWidth:0,c=Math.round(m*1e4)/100;function U(_){if(!h.current)return;const z=_.pageX-h.current.offsetLeft;g(z)}return i(Y,w(x({},s),{children:p(A,{ref:h,onMouseMove:U,children:[i(J,{src:e,style:{height:n,width:o}}),i(D,{src:t}),i(T,{src:e,style:{[I]:c+"%"}}),i(G,{color:r,style:{[V]:f+"px"}})]})}))}function Z(e,t){const[r,n]=S.exports.useState(e);return S.exports.useEffect(()=>{const o=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(o)}},[e,t]),r}let W=0;function C(e="id"){return W++,`${e}${W}`}const ee=a.div`
  position: relative;
`,F=a.label`
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
`,te=a.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${F} {
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
`;function oe(e){const[t]=l.useState(()=>C("switch"));return p(ee,{children:[i(te,w(x({},e),{type:"checkbox",id:t})),i(F,{htmlFor:t})]})}const re=a.div`
  width: 250px;
`,v=a.div`
  display: flex;
  gap: 10px;
`;var y=(e=>(e.jpeg="jpeg",e.png="png",e.webp="webp",e.original="original",e))(y||{});const ne={jpeg:"JPEG",png:"PNG",webp:"WebP",original:"Original"};function $({onChange:e,value:t}){const[r]=l.useState(()=>C("select")),[n]=l.useState(()=>C("input")),[o,s]=l.useState((t==null?void 0:t.format)||"jpeg"),[d,u]=l.useState((t==null?void 0:t.quality)||"50"),f=Z(d,200),[g,h]=l.useState((t==null?void 0:t.showInfo)||!1);S.exports.useEffect(()=>{e&&e({format:o,quality:f,showInfo:g})},[o,f,g]);const m=o==="original";return p(re,{children:[p(v,{children:[i("label",{htmlFor:r,children:"Format:"}),i("select",{id:r,value:o,onChange:c=>{s(c.target.value)},children:Object.keys(y).map(c=>i("option",{value:c,children:ne[c]||""},c))})]}),p(v,{children:[i("label",{htmlFor:n,children:"Quality:"}),i("input",{id:n,type:"range",min:"1",max:"100",value:d,onChange:c=>{u(c.target.value)},disabled:m})]}),p(v,{children:[i("label",{children:"Show Info:"}),i(oe,{checked:g,onChange:c=>{h(c.target.checked)},disabled:m})]})]})}const ie=a.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin: auto;
`;function se(e){return e?new URLSearchParams(x({force_format:e.format},e.format!=y.original&&{q:e.quality,ci_info:e.showInfo?"1":"0"})).toString():""}function q(e,t){return t?e+"?"+se(t):""}const E={format:y.jpeg,quality:"50",showInfo:!1};function ae({src:e}){const[t,r]=l.useState(E),[n,o]=l.useState(E),s=q(e,t),d=q(e,n);return p("section",{children:[p(ie,{children:[i($,{value:t,onChange:u=>r(u)}),i($,{value:n,onChange:u=>o(u)})]}),i(H,{leftSrc:s,rightSrc:d,width:"50vw",separatorColor:"white"})]})}const ce=a.div`
  padding: 30px;
`;function le(){return p(ce,{children:[i(ae,{src:"https://doc.cloudimg.io/sample.li/paris.jpg"}),i(B,{})]})}M.render(i(l.StrictMode,{children:i(le,{})}),document.getElementById("root"));
