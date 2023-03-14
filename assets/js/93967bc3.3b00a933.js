"use strict";(self.webpackChunkgyre_www=self.webpackChunkgyre_www||[]).push([[498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1772:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="Features",l={type:"mdx",permalink:"/features",source:"@site/src/pages/features.md",title:"Features",description:"Server",frontMatter:{}},u=[{value:"Server",id:"server",level:2},{value:"Model manager",id:"model-manager",level:2},{value:"Generation",id:"generation",level:2},{value:"Performance",id:"performance",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full-featured GRPC and GRPC-WEB interface based on api.stability.ai standard, but with additional fields for extra features"),(0,a.kt)("li",{parentName:"ul"},"Full-featured HTTP REST interface which uses the JSON-encoded form of the GRPC messages for use in situations where you can't use GRPC"),(0,a.kt)("li",{parentName:"ul"},"Simple HTTP REST interface based on api.stability.ai for quick integrations when you don't need total control over the generation process"),(0,a.kt)("li",{parentName:"ul"},"Both syncronous and asyncronous generation methods"),(0,a.kt)("li",{parentName:"ul"},"Supports multiple GPUs"),(0,a.kt)("li",{parentName:"ul"},"Supports queueing request across available GPUs to allow multiple simultaneous users"),(0,a.kt)("li",{parentName:"ul"},"Rapidly switch between all the configured models "),(0,a.kt)("li",{parentName:"ul"},"Requests can be aborted immediately via any API")),(0,a.kt)("h2",{id:"model-manager"},"Model manager"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load Diffusers models and Stable Diffusion Checkpoint models"),(0,a.kt)("li",{parentName:"ul"},"Mix models to produce blends or add inpaint support"),(0,a.kt)("li",{parentName:"ul"},"Load from HuggingFace, locally, or custom URL"),(0,a.kt)("li",{parentName:"ul"},"Load and export safetensor versions of models"),(0,a.kt)("li",{parentName:"ul"},"Custom VRAM and RAM manager to load large numbers of models in limited GPU")),(0,a.kt)("h2",{id:"generation"},"Generation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stable Diffusion V1.x and V2.x support"),(0,a.kt)("li",{parentName:"ul"},"Text to image, image to image, depth to image and image inpainting support"),(0,a.kt)("li",{parentName:"ul"},"CLIP guidance to improve image coherence to the prompt"),(0,a.kt)("li",{parentName:"ul"},"Prompt component weighting and long prompt support"),(0,a.kt)("li",{parentName:"ul"},"A unique grafting mode that provides:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ability to use depth to image and inpaint modes with any model"),(0,a.kt)("li",{parentName:"ul"},"A unique hires fix that reduces artifcats when producing hi-resolution images"))),(0,a.kt)("li",{parentName:"ul"},"A full set of samplers (supporting k_diffusion and Diffusers samplers)"),(0,a.kt)("li",{parentName:"ul"},"LORA support for use custom concepts"),(0,a.kt)("li",{parentName:"ul"},"Batch stable (except for some slight variance with CLIP guidance)")),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FP16, attention slicing and module management allow useage on cards with 4GB VRAM"),(0,a.kt)("li",{parentName:"ul"},"Heavily optimised CLIP guidance to minimise memory and performance impact (but it's still a lot slower)"),(0,a.kt)("li",{parentName:"ul"},"Enables xformers, even on cards where backwards mode isn't supported")))}p.isMDXComponent=!0}}]);