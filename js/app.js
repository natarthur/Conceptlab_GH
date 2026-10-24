const views=document.querySelectorAll(".view");
function showView(id){views.forEach(v=>v.classList.toggle("hidden",v.id!==id));window.scrollTo(0,0);}
document.addEventListener("click",e=>{
 const card=e.target.closest("[data-view]"); if(card){showView(card.dataset.view);}
 if(e.target.closest("[data-home]")){showView("home");document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));}
});
document.querySelectorAll("[data-view]").forEach(x=>x.addEventListener("click",()=>{}));

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{
 e.preventDefault();deferredPrompt=e;document.getElementById("installBtn").classList.remove("hidden");
});
document.getElementById("installBtn").addEventListener("click",async()=>{
 if(!deferredPrompt)return;
 deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null;
 document.getElementById("installBtn").classList.add("hidden");
});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js"));
updateFraction();
renderQuestion();
