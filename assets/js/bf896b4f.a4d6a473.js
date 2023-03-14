"use strict";(self.webpackChunkgyre_www=self.webpackChunkgyre_www||[]).push([[745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||g[p]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l="Docker",o={unversionedId:"install/docker",id:"install/docker",title:"Docker",description:"Gyre can be run in Docker, either locally or on a cloud host like vast.ai. This",source:"@site/docs/install/01-docker.md",sourceDirName:"install",slug:"/install/docker",permalink:"/docs/install/docker",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gyre installer",permalink:"/docs/install/gyre-installer"},next:{title:"Manual install",permalink:"/docs/install/manual"}},s={},u=[{value:"Images &amp; Tags",id:"images--tags",level:2},{value:"basic",id:"basic",level:4},{value:"xformers",id:"xformers",level:4},{value:"xformers-training",id:"xformers-training",level:4},{value:"Volume mounts",id:"volume-mounts",level:2},{value:"/huggingface",id:"huggingface",level:4},{value:"/weights",id:"weights",level:4},{value:"/config",id:"config",level:4},{value:"/gyre",id:"gyre",level:4},{value:"Environment variables",id:"environment-variables",level:2},{value:"Localtunnel",id:"localtunnel",level:4},{value:"Server arguments",id:"server-arguments",level:4},{value:"Building",id:"building",level:2},{value:"Building gyre-devbase",id:"building-gyre-devbase",level:4},{value:"Building gyre",id:"building-gyre",level:4}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Gyre can be run in Docker, either locally or on a cloud host like vast.ai. This\nallows us to easily manage Gyre's dependancies."),(0,a.kt)("p",null,"The basic command to run Gyre in Docker looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --gpus all -it -p 5000:5000 -p 50051:50051 \\\n  -e HF_API_TOKEN={your huggingface token} \\\n  -e SD_LISTEN_TO_ALL=1 \\\n  -v $HOME/.cache/huggingface:/huggingface \\\n  -v `pwd`/weights:/weights \\\n  ghcr.io/stablecabal/gyre:cuda118-xformers-latest\n")),(0,a.kt)("h2",{id:"images--tags"},"Images & Tags"),(0,a.kt)("p",null,"Pre-built docker images are available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stablecabal/gyre/pkgs/container/gyre"},"Github Container Registry")," or ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/hafriedlander/gyre"},"Docker Hub")),(0,a.kt)("p",null,"Docker images are provided as Cuda ",(0,a.kt)("inlineCode",{parentName:"p"},"11.6"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"11.7")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"11.8")," based versions,\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"basic"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"xformers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"xformers-training")," options"),(0,a.kt)("p",null,"Unless you have a specific reason to use another, cuda118-xformers is the recommended option."),(0,a.kt)("h4",{id:"basic"},"basic"),(0,a.kt)("p",null,"Just gyre on top of the nvidia runtime image for the selected cuda version. These are the fastest to build, so will be available very quickly after any release."),(0,a.kt)("h4",{id:"xformers"},"xformers"),(0,a.kt)("p",null,"Basic + xformers. Faster and less vram used, but bigger docker image and slightly longer delay to be available."),(0,a.kt)("h4",{id:"xformers-training"},"xformers-training"),(0,a.kt)("p",null,"Xformers + Bits & Bytes (for 8Bit Adam) + Deepspeed. Useful extras for running training via a shell into the image. Much bigger docker image."),(0,a.kt)("h2",{id:"volume-mounts"},"Volume mounts"),(0,a.kt)("p",null,"This will share the weights and huggingface cache, but you can\nmount other folders into the volume to do other things:"),(0,a.kt)("h4",{id:"huggingface"},"/huggingface"),(0,a.kt)("p",null,"The huggingface cache, usually mapped to ~/.cache/huggingface in guest"),(0,a.kt)("h4",{id:"weights"},"/weights"),(0,a.kt)("p",null,"Any local weights can be mapped to here"),(0,a.kt)("h4",{id:"config"},"/config"),(0,a.kt)("p",null,"Override the config by making a config directory,\nputting the engines.yaml and other yaml in it,\nand mounting it to the image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," -v `pwd`/config:/config \\\n")),(0,a.kt)("h4",{id:"gyre"},"/gyre"),(0,a.kt)("p",null,"You can check out the latest version of the server code and then\nmount it into the Docker image to run the very latest code (including\nany local edits you make)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -v `pwd`/gyre:/gyre \\\n")),(0,a.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,a.kt)("h4",{id:"localtunnel"},"Localtunnel"),(0,a.kt)("p",null,"The docker image has built-in support for localtunnel, which\nwill expose the GRPC-WEB endpoint on an https domain. It will\nautomatically set an access token key if you don't provide one.\nCheck your Docker log for the values to use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -e SD_LOCALTUNNEL=1 \\\n")),(0,a.kt)("h4",{id:"server-arguments"},"Server arguments"),(0,a.kt)("p",null,"All the server arguments can be provided as environment variables, starting\nwith SD:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SD_ENGINECFG"),(0,a.kt)("li",{parentName:"ul"},"SD_GRPC_PORT"),(0,a.kt)("li",{parentName:"ul"},"SD_HTTP_PORT"),(0,a.kt)("li",{parentName:"ul"},"SD_VRAM_OPTIMISATION_LEVEL"),(0,a.kt)("li",{parentName:"ul"},"SD_NSFW_BEHAVIOUR"),(0,a.kt)("li",{parentName:"ul"},"SD_WEIGHT_ROOT"),(0,a.kt)("li",{parentName:"ul"},"SD_HTTP_FILE_ROOT"),(0,a.kt)("li",{parentName:"ul"},"SD_ACCESS_TOKEN"),(0,a.kt)("li",{parentName:"ul"},"SD_LISTEN_TO_ALL"),(0,a.kt)("li",{parentName:"ul"},"SD_ENABLE_MPS"),(0,a.kt)("li",{parentName:"ul"},"SD_RELOAD"),(0,a.kt)("li",{parentName:"ul"},"SD_LOCALTUNNEL")),(0,a.kt)("h2",{id:"building"},"Building"),(0,a.kt)("p",null,"Pytorch does not distribute official binaries that use Cuda 11.8. Therefore Gyre uses a two-step\nbuild process"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dockerfile.devbase, pytorch + torchvision built from source on top of the selected CUDA version and installed into a micromamba environment"),(0,a.kt)("li",{parentName:"ul"},"Dockerfile, the server images themselves")),(0,a.kt)("h4",{id:"building-gyre-devbase"},"Building gyre-devbase"),(0,a.kt)("p",null,"You can pass in a short CUDA ver (116, 117, 118) and a full CUDA ver (11.6.2, 11.7.1, 11.8.0) to target.\nDefault is Cuda 11.8.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build . -f Dockerfile.devbase \\\n  --target devbase \\\n  --build-arg CUDA_VER=118 --build-arg CUDA_FULLVER=11.8.0 \\\n  --tag ghcr.io/stablecabal/gyre-dev:pytorch112-cuda118-latest\n")),(0,a.kt)("h4",{id:"building-gyre"},"Building gyre"),(0,a.kt)("p",null,"You can pass in github references to specific the exact version of dependancies to build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build . -f Dockerfile --target xformers \\\n  --build-arg XFORMERS_REPO=https://github.com/hafriedlander/xformers.git \\\n  --build-arg XFORMERS_REF=53b7454 \\\n  --build-arg TRITON_REF=8650b4d \\\n  --tag ghcr.io/stablecabal/gyre:cuda118-xformers-latest\n")))}d.isMDXComponent=!0}}]);