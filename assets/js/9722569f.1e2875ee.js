"use strict";(self.webpackChunkgyre_www=self.webpackChunkgyre_www||[]).push([[275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),a=r(7294),l=r(3905);function o(e){const[t,r]=(0,a.useState)("");return(0,a.useEffect)((async function(){const t=await fetch("https://api.github.com/repos/stablecabal/gyre-installer/releases"),n=await t.json();for(let a of n)if(!a.prerelease&&a.target_commitish==e.target_commitish)return void r("https://github.com/stablecabal/gyre-installer/archive/refs/tags/"+a.tag_name+".zip")}),[e.target_commitish]),t?a.createElement("a",{href:t},e.title):a.createElement("span",null,"[Getting latest release...]")}const i={},s="Gyre installer",u={unversionedId:"install/gyre-installer",id:"install/gyre-installer",title:"Gyre installer",description:"The easy, one click installer for Gyre",source:"@site/docs/install/00-gyre-installer.mdx",sourceDirName:"install",slug:"/install/gyre-installer",permalink:"/server/docs/install/gyre-installer",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command line arguments",permalink:"/server/docs/cli-arguments"},next:{title:"Docker",permalink:"/server/docs/install/docker"}},p={},c=[{value:"1 | Download",id:"1--download",level:2},{value:"Bundle - for people who just want to start making art",id:"bundle---for-people-who-just-want-to-start-making-art",level:3},{value:"Server-only - for people who want to BYO client",id:"server-only---for-people-who-want-to-byo-client",level:3},{value:"2 | Install",id:"2--install",level:2},{value:"3 | Upgrade",id:"3--upgrade",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gyre-installer"},"Gyre installer"),(0,l.kt)("p",null,"The easy, one click installer for Gyre"),(0,l.kt)("h2",{id:"1--download"},"1 | Download"),(0,l.kt)("h3",{id:"bundle---for-people-who-just-want-to-start-making-art"},"Bundle - for people who just want to start making art"),(0,l.kt)("p",null,"The bundle includes a web interface, thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://www.flyingdog.de/sd/"},"flying dog software"),".\nThis is the one you want if you just want to start making art"),(0,l.kt)("p",null,"Download ",(0,l.kt)(o,{title:"the bundle installer",target_commitish:"bundle",mdxType:"GithubRelease"})),(0,l.kt)("h3",{id:"server-only---for-people-who-want-to-byo-client"},"Server-only - for people who want to BYO client"),(0,l.kt)("p",null,"The server-only is just the server, without a client. This is the one you want if\nyou want to use or develop your own client."),(0,l.kt)("p",null,"Download ",(0,l.kt)(o,{title:"the server-only installer",target_commitish:"main",mdxType:"GithubRelease"})),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can check ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stablecabal/gyre-installer/releases/"},"the releases page")," for\nnewer releases.")),(0,l.kt)("h2",{id:"2--install"},"2 | Install"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unpack the zip somewhere"),(0,l.kt)("li",{parentName:"ul"},"Run install_or_update.cmd at least once"),(0,l.kt)("li",{parentName:"ul"},"Run run.cmd to start ")),(0,l.kt)("p",null,"Here is a video tutorial showing the installation process on Windows from ",(0,l.kt)("a",{parentName:"p",href:"https://www.flyingdog.de/sd/"},"flying dog software")),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5jT85C3Mk44",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,l.kt)("p",null),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"run.cmd is created after a succesfull install - if it doesn't exist, check the result of running install_or_update.cmd)")),(0,l.kt)("h2",{id:"3--upgrade"},"3 | Upgrade"),(0,l.kt)("p",null,"Just run install_or_update.cmd (when the server isn't running) to update to the latest stable version."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If you are running any version for gyre-installer before v1.1.0, before upgrading to Gyre 2 please make sure to download the newest version of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stablecabal/gyre-installer/archive/refs/tags/v2.0.1.zip"},"the installer")," and unpack the contained files over top of your existing installation (overwriting the existing files). "),(0,l.kt)("p",{parentName:"admonition"},"You can then run install_or_update.cmd as normal")))}m.isMDXComponent=!0}}]);