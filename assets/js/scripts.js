const nav=(e,d,l,o)=>{const s=document.querySelector("body"),t={slideIn:"slide-in",slideOut:"slide-out",hidden:"hidden",block:"block",overflowAuto:"overflow-auto",overflowHidden:"overflow-hidden"};d.classList.add(t.slideOut),o.classList.add("hidden"),s.classList.add("overflow-auto"),e.addEventListener("click",e=>{e.stopPropagation(),d.classList.contains(t.slideOut)?(d.classList.replace(t.slideOut,t.slideIn),s.classList.replace(t.overflowAuto,t.overflowHidden),o.classList.replace(t.hidden,t.block)):(d.classList.replace(t.slideIn,t.slideOut),o.classList.replace(t.block,t.hidden),s.classList.replace(t.overflowHidden,t.overflowAuto))}),o.addEventListener("click",e=>{e.stopPropagation(),d.classList.replace(t.slideIn,t.slideOut),o.classList.replace(t.block,t.hidden),s.classList.replace(t.overflowHidden,t.overflowAuto)}),l.forEach(e=>{e.addEventListener("click",e=>{d.classList.replace(t.slideIn,t.slideOut),o.classList.replace(t.block,t.hidden),s.classList.replace(t.overflowHidden,t.overflowAuto)})})};document.addEventListener("DOMContentLoaded",()=>{nav(document.querySelector("#dd-link"),document.querySelector("#dd-menu"),document.querySelectorAll("#dd-menu a"),document.querySelector("#dd-backdrop"))});