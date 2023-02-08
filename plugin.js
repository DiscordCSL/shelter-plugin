(()=>{var i=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var f=(e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})},v=(e,t,n,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of g(t))!u.call(e,s)&&s!==n&&i(e,s,{get:()=>t[s],enumerable:!(l=p(t,s))||l.enumerable});return e};var h=e=>v(i({},"__esModule",{value:!0}),e);var S={};f(S,{onLoad:()=>E,onUnload:()=>N});var r="container-1NXEtd",c="name-3Uvkvr",b="container-2RRFHK",d="5.0.0";function a(e,t){let n;t=="info"?n="#43b581":t=="warn"?n="#faa61a":t=="error"?n="#f04747":n="#7289da",console.log(`%cDiscord CSL v${d}%c ${e}`,`color: ${n}; padding: 3px; border-radius: 4px; background: ${n}22; border-right: 2px solid ${n}; padding-right: 5px; padding-left: 6px; font-weight: bold`,"font-style: italic;","")}function y(){let e=document.createElement("style");e.textContent=`
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
}`,e.id="DiscordCSL-style",document.head.append(e)}function C(){var e=document.getElementById("DiscordCSL-style");e.parentNode.removeChild(e)}var o,x=async()=>{let t=await(await fetch("https://raw.githubusercontent.com/DiscordCSL/database/main/db.json")).json();o=t,a("Thanks for installing Custom Server Logos!"),t.latestVersion>d?a(`You're running an older version of this plugin. Update to v${t.latestVersion}`,"error"):a("You're running the latest and greatest!","info")},w=()=>{if(!document.getElementsByClassName(b)[0]&&window.location.pathname.split("/")[1]=="channels"&&window.location.pathname.split("/")[2]!="@me")if(document.getElementsByClassName(r)[0].hasAttribute("csl-server"))Error&&!document.getElementsByClassName(r)[0].hasAttribute("csl-server")&&a("No server header found. Try restarting the app and reinstalling the plugin, before reporting any issues.","error");else for(var e=0;e<o.servers.length;e++)o.servers[e].id==window.location.pathname.split("/")[2]&&(document.getElementsByClassName(r)[0].hasAttribute("csl-server")||document.getElementsByClassName(r)[0].setAttribute("csl-server",""),fetch(o.servers[e].logoURL).then(t=>t.text()).then(t=>{document.getElementsByClassName(c)[0].innerHTML=t}))},m;function E(){y(),setTimeout(function(){x()},3e3),m=setInterval(w,0)}function N(){C(),clearInterval(m),a("See ya next time!")}return h(S);})();
