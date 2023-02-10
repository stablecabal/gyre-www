"use strict";(self.webpackChunkgyre_www=self.webpackChunkgyre_www||[]).push([[745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="Docker",i={unversionedId:"install/docker",id:"install/docker",title:"Docker",description:"Gyre can be run in Docker, either locally or on a cloud host like vast.ai. This",source:"@site/docs/install/01-docker.md",sourceDirName:"install",slug:"/install/docker",permalink:"/docs/install/docker",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gyre installer",permalink:"/docs/install/gyre-installer"},next:{title:"Manual install",permalink:"/docs/install/manual"}},u={},c=[{value:"Localtunnel",id:"localtunnel",level:4},{value:"Volume mounts",id:"volume-mounts",level:4},{value:"Building Cuda 11.8 support",id:"building-cuda-118-support",level:4},{value:"Building on default pytorch",id:"building-on-default-pytorch",level:4}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Gyre can be run in Docker, either locally or on a cloud host like vast.ai. This\nallows us to easily manage Gyre's dependancies."),(0,a.kt)("p",null,"The default Docker images come compiled with Cuda 11.8, giving better\nperformance on RTX4080 & 4090 cards than using the manual installation."),(0,a.kt)("p",null,"The basic command to run Gyre in Docker looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --gpus all -it -p 5000:5000 -p 50051:50051 \\\n  -e HF_API_TOKEN={your huggingface token} \\\n  -e SD_LISTEN_TO_ALL=1 \\\n  -v $HOME/.cache/huggingface:/huggingface \\\n  -v `pwd`/weights:/weights \\\n  hafriedlander/gyre:cuda118-xformers-latest\n")),(0,a.kt)("h4",{id:"localtunnel"},"Localtunnel"),(0,a.kt)("p",null,"The docker image has built-in support for localtunnel, which\nwill expose the GRPC-WEB endpoint on an https domain. It will\nautomatically set an access token key if you don't provide one.\nCheck your Docker log for the values to use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -e SD_LOCALTUNNEL=1 \\\n")),(0,a.kt)("h4",{id:"volume-mounts"},"Volume mounts"),(0,a.kt)("p",null,"This will share the weights and huggingface cache, but you can\nmount other folders into the volume to do other things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can check out the latest version of the server code and then\nmount it into the Docker image to run the very latest code (including\nany local edits you make)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  -v `pwd`/gyre:/gyre \\\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Or override the engines.yaml config by making a config directory,\nputting the engines.yaml in there, and mounting it to the image"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," -v `pwd`/config:/config \\\n")))),(0,a.kt)("p",null,"All the server arguments can be provided as environment variables, starting\nwith SD:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SD_ENGINECFG"),(0,a.kt)("li",{parentName:"ul"},"SD_GRPC_PORT"),(0,a.kt)("li",{parentName:"ul"},"SD_HTTP_PORT"),(0,a.kt)("li",{parentName:"ul"},"SD_VRAM_OPTIMISATION_LEVEL"),(0,a.kt)("li",{parentName:"ul"},"SD_NSFW_BEHAVIOUR"),(0,a.kt)("li",{parentName:"ul"},"SD_WEIGHT_ROOT"),(0,a.kt)("li",{parentName:"ul"},"SD_HTTP_FILE_ROOT"),(0,a.kt)("li",{parentName:"ul"},"SD_ACCESS_TOKEN"),(0,a.kt)("li",{parentName:"ul"},"SD_LISTEN_TO_ALL"),(0,a.kt)("li",{parentName:"ul"},"SD_ENABLE_MPS"),(0,a.kt)("li",{parentName:"ul"},"SD_RELOAD"),(0,a.kt)("li",{parentName:"ul"},"SD_LOCALTUNNEL")),(0,a.kt)("h4",{id:"building-cuda-118-support"},"Building Cuda 11.8 support"),(0,a.kt)("p",null,"For RTX 40xx performance, we want to use Cuda 11.8. Pytorch 1.12.1 only comes with Cuda 11.6\nbinaries. So there is also a Dockerfile that builds a Pytorch from source to support Cuda 11.8."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build . -f Dockerfile.cuda118 --target xformers \\\n    --build-arg XFORMERS_REPO=https://github.com/hafriedlander/xformers.git \\\n    --build-arg XFORMERS_REF=53b7454 \\\n    --build-arg TRITON_REF=8650b4d \\\n    --tag hafriedlander/gyre:cuda118-xformers-1.0.0\n")),(0,a.kt)("h4",{id:"building-on-default-pytorch"},"Building on default pytorch"),(0,a.kt)("p",null,"Building pytorch takes a long time, so you can build on the default pytorch (which uses Cuda 11.6)\nif you prefer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build --target main .\n")),(0,a.kt)("p",null,"Or to build (slowly) with xformers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build --target xformers .\n")))}s.isMDXComponent=!0}}]);