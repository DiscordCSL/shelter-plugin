(()=>{var a=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var p=(e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})},h=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of g(t))!v.call(e,r)&&r!==n&&a(e,r,{get:()=>t[r],enumerable:!(s=m(t,r))||s.enumerable});return e};var b=e=>h(a({},"__esModule",{value:!0}),e);var w={};p(w,{onLoad:()=>x,onUnload:()=>L});var i="container-1NXEtd",c="name-3Uvkvr",d="4.0.0",l=function(e,t,n){var s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType=e,s.onload=function(){var r=s.status;r==200?n(null,s.response):n(r,s.response)},s.send()};function o(e,t){let n;e=="log"?n="#7289da":e=="info"?n="#43b581":e=="warn"?n="#faa61a":e=="error"&&(n="#f04747"),console.log(`%cDiscord CSL v${d}%c ${t}`,`color: ${n}; border-right: 2px solid ${n}; padding-right: 5px; font-weight: bold`,"font-style: italic;","")}function y(){let e=document.createElement("style");e.textContent=`
 [csl-server] div.guildIconContainer-3QvE6w {
     transform: translate(-6%, 6%)
 }
 [csl-server] .${c} {
     display: flex;
     justify-content: center;
     position: relative;
 }
 
 /* == Shrink server banners to header instead of disappearing == */
 [csl-server] [class*="animatedContainer-"] {
     opacity: 1 !important;
     transition: opacity .5s, blur .5s;
 }
 [csl-server] [class*="animatedContainer-"] > [class*="bannerImage-"] {
     transition: margin .5s;
 }
 [csl-server] :not([class*="bannerVisible-"]) > [class*="animatedContainer-"] {
     opacity: .35 !important;
     filter: blur(2px);
     height: 138px;
 }
 [csl-server] :not([class*="bannerVisible-"]) > [class*="animatedContainer-"] > [class*="bannerImage-"] {
     margin-top: -12px;
 }`,e.id="DiscordCSL-style",document.head.append(e)}function C(){var e=document.getElementById("DiscordCSL-style");e.parentNode.removeChild(e)}var u=()=>{l("json","https://raw.githubusercontent.com/DiscordCSL/database/main/db.json",function(e,t){if(e!==null)o("error","Failed to fetch database json!");else for(var n=t.servers.length,s;n--;)window.location.pathname.split("/")[2]==t.servers[n].id&&(document.getElementsByClassName(i)[0].hasAttribute("csl-server")?Error&&!document.getElementsByClassName(i)[0].hasAttribute("csl-server")&&o("error","No server header found. Try restarting the app and reinstalling the plugin, before reporting any issues."):(document.getElementsByClassName(i)[0].setAttribute("csl-server",""),s=t.servers[n],l("text",s.logoURL,function(r,f){r!==null?o("error",`Failed to fetch server logo vector data! | ${s.id}`):document.getElementsByClassName(c)[0].innerHTML=f})))})};window.addEventListener("load",function(){});function x(){y(),setInterval(u,0),o("log","Thanks for installing Custom Server Logos!"),l("json","https://raw.githubusercontent.com/DiscordCSL/database/main/db.json",function(e,t){e!==null?o("error","Failed to fetch database json!"):t.latestVersion>d?o("error",`You're running an older version of this plugin, please update to the latest version, ${t.latestVersion}.`):o("info","You're running the latest and greatest.")})}function L(){C(),clearInterval(u),o("log","See ya next time!")}return b(w);})();
