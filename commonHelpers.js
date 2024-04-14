import{A as v,a as g,S as m,N as y,K as w,P as E,i as L}from"./assets/vendor-56e8282f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const p=document.querySelector(".ac-trigger");new v(".accordion-container",{duration:600,collapse:!0,openOnInit:[0],showMultiple:!0,onOpen:()=>{p.classList.add("rotate")},onClose:()=>{p.classList.remove("rotate")}});const O="https://portfolio-js.b.goit.study/api";async function q(e){const s=`${O}/reviews`;try{return(await g.get(s)).data}catch(o){throw console.error("Error fetching images:",o),o}}const S=document.querySelector(".covers"),N=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.querySelectorAll(".image-box-item").forEach(s=>{s.classList.add("covers-animation")}):t.target.querySelectorAll(".image-box-item").forEach(s=>{s.classList.remove("covers-animation")})})},{threshold:1});N.observe(S);new v(".faq-list",{duration:400,showMultiple:!0});const P=document.querySelectorAll(".faq-list-item");P.forEach(function(e,t){(t+1)%2===0&&(e.style.paddingLeft="20px")});document.getElementById("profile-link").addEventListener("click",function(e){e.preventDefault(),document.getElementById("profile").classList.toggle("active");const t=document.getElementById("dropdown");t.classList.contains("active")?(t.classList.remove("active"),t.style.opacity=0):(t.classList.add("active"),setTimeout(()=>{t.style.opacity=1},10))});const h=document.querySelector(".projects-section > .swiper"),n=document.querySelector(".next-btn"),a=document.querySelector(".prev-btn");console.log(h);new m(h,{modules:[y,w],navigation:{nextEl:n,prevEl:a},direction:"horizontal",centeredSlides:!0,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1});const x=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(n.classList.contains("swiper-button-disabled")?(n.style.opacity="0.5",n.style.cursor="not-allowed"):(n.style.opacity="1",n.style.cursor="pointer"))})});x.observe(n,{attributes:!0});const B=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("swiper-button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});B.observe(a,{attributes:!0});const b=document.querySelector(".reviews-list");function I(e,t,s,o){return`
     <li class="reviews-list-items swiper-slide" data-id="${e}">
     <img class="reviews-image" src="${s}" alt="Photo" 
            width="48"
            height="48"
            loading="lazy" />
          <div class="reviews-text-content">
            <h3 class="reviews-name-header">${t}</h3>
            <p class="reviews-main-text">${o}</p>
          </div>
        </li>
  `}function f(){const e='<p class="end-message">Not found</p>';b.insertAdjacentHTML("afterend",e)}function T(e){return e.map(({_id:t,author:s,avatar_url:o,review:r})=>I(t,s,o,r)).join("")}function A(e){const t=T(e);b.insertAdjacentHTML("beforeend",t)}const M=document.querySelector(".swiper-one"),c=document.querySelector(".button-next-svg"),l=document.querySelector(".button-prev"),R=new m(M,{modules:[y,w,E],navigation:{nextEl:c,prevEl:l},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:"auto",spaceBetween:18},767:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});R.update();async function V(){try{const e=await q();e.length===0?f():A(e)}catch{L.error({color:"red",message:"❌ Sorry, there is an error. Please try again later!",position:"topRight"}),f()}}const j=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});j.observe(c,{attributes:!0});const U=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});U.observe(l,{attributes:!0});V();const u="my-cache-v1",C=["/src/img","/src/js","/src/partials","/src/index.html","/src/main.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(u).then(t=>(console.log("Opened cache"),t.addAll(C))))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.map(s=>{if(s!==u)return caches.delete(s)}))))});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request).then(s=>{if(!s||s.status!==200||s.type!=="basic")return s;const o=s.clone();return caches.open(u).then(r=>{r.put(e.request,o)}),s})))});self.addEventListener("install",e=>{console.log("Service Worker installed")});self.addEventListener("activate",e=>{console.log("Service Worker activated")});self.addEventListener("fetch",e=>{console.log("Fetching:",e.request.url)});
//# sourceMappingURL=commonHelpers.js.map
