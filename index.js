import{a as p,S as m,i as s}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="52337291-0776378263373b49cfa64027e",h="https://pixabay.com/api/";function y(i){const o={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50};return p.get(h,{params:o}).then(t=>t.data).catch(t=>{throw console.log("Error fetching data from Pixabay:",t),t})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const o=i.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:a,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${t}" alt="${e}" />
        </a>
        <div class="info">
          <p>❤️ ${r}</p>
          <p>👁️ ${a}</p>
          <p>💬 ${f}</p>
          <p>⬇️ ${d}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),L.refresh()}function w(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const c=document.querySelector(".form"),v=c.querySelector("input[name='search-text']");c.addEventListener("submit",i=>{i.preventDefault();const o=v.value.trim();if(c.reset(),!o){s.warning({message:"Please enter a search query!",position:"topRight",backgroundColor:"#ff7fa0",messageColor:"#2e2f42",width:280,timeout:4e3});return}w(),S(),y(o).then(t=>{if(!t.hits.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ff7fa0",messageColor:"#2e2f42",width:280,timeout:4e3});return}b(t.hits)}).catch(t=>{s.error({title:"Error",message:"Something went wrong. Try again later!",position:"topRight",backgroundColor:"#ff7fa0",titleColor:"#2e2f42",messageColor:"#2e2f42",width:280,timeout:4e3}),console.log(t)}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
