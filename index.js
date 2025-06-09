import{S as y,a as n,i}from"./assets/vendor-B3Lscd_h.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();let c=document.querySelector(".gallery");const f=new y(".gallery a",{captionsData:"alt",captionDelay:250});function m(a){const l=a.map(t=>`<li class="gallery-element">
                    <a href="${t.largeImageURL}">
                        <img src=${t.webformatURL} class="gallery-img" alt=${t.tags}>
                    </a>
                    <ul class="gallery-list">
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Likes</p>
                            <p class="gallery-list-counter">${t.likes}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Views</p>
                            <p class="gallery-list-counter">${t.views}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Comments</p>
                            <p class="gallery-list-counter">${t.comments}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Downloads</p>
                            <p class="gallery-list-counter">${t.downloads}</p>
                        </li>
                    </ul>
                </li>
        `).join("");c.insertAdjacentHTML("beforeend",l),f.refresh()}function p(){c.innerHTML=""}function d(){document.querySelector(".loader").style.display="block"}function g(){document.querySelector(".loader").style.display="none"}n.defaults.baseURL="https://pixabay.com/api";function h(a){return n.get("/",{params:{key:"50763024-dac579c8a6c32124d9f634148",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(l=>l.data.hits)}let u=document.querySelector(".form");u.addEventListener("submit",L);function L(a){a.preventDefault();let t=new FormData(u).get("search-text").trim();if(t==""){i.error({title:"Error",message:"request can`t be empty"});return}d(),p(),h(t).then(s=>{s.length==0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):m(s)}).catch(s=>i.error({title:"Error",message:`${s}`})).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
