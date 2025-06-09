import{S as u,a as i,i as y}from"./assets/vendor-B3Lscd_h.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();let n=document.querySelector(".gallery");const f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const a=s.map(t=>`<li class="gallery-element">
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
        `).join("");n.insertAdjacentHTML("beforeend",a),f.refresh()}function d(){n.innerHTML=""}function m(){document.querySelector(".loader").style.display="block"}function g(){document.querySelector(".loader").style.display="none"}i.defaults.baseURL="https://pixabay.com/api";function h(s){return i.get("/",{params:{key:"50763024-dac579c8a6c32124d9f634148",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}let c=document.querySelector(".form");c.addEventListener("submit",L);function L(s){s.preventDefault();let t=new FormData(c).get("search-text").trim();if(t==""){alert("NONONO");return}m(),d(),h(t).then(r=>r.data.hits).then(r=>{g(),r.length==0?y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):p(r)}).catch(r=>console.log(r))}
//# sourceMappingURL=index.js.map
