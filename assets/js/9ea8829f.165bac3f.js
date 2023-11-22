"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[1802],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},70666:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(87462),o=(r(67294),r(3905));const a={id:"service-download-hanging",title:"Service Download Hanging",sidebar_label:"Service Download Hanging",sidebar_position:1},i="Service Download Hanging",l={unversionedId:"prem-app/troubleshooting/service-download-hanging",id:"prem-app/troubleshooting/service-download-hanging",title:"Service Download Hanging",description:"Prem is currently heavily based on Docker. Each service is a Docker container that is downloaded and run on your machine. Sometimes, the download of the container can hang. This is usually due to a network issue or the dimension of the container itself that could reach several GBs.",source:"@site/docs/prem-app/troubleshooting/service-download-hanging.md",sourceDirName:"prem-app/troubleshooting",slug:"/prem-app/troubleshooting/service-download-hanging",permalink:"/docs/prem-app/troubleshooting/service-download-hanging",draft:!1,editUrl:"https://github.com/premAI-io/dev-portal/blob/main/docs/prem-app/troubleshooting/service-download-hanging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"service-download-hanging",title:"Service Download Hanging",sidebar_label:"Service Download Hanging",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"},next:{title:"Examples",permalink:"/docs/category/examples"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(d,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service-download-hanging"},"Service Download Hanging"),(0,o.kt)("p",null,"Prem is currently heavily based on Docker. Each service is a Docker container that is downloaded and run on your machine. Sometimes, the download of the container can hang. This is usually due to a network issue or the dimension of the container itself that could reach several GBs."),(0,o.kt)("p",null,"In order to fix that, what you can do is to pull the image manually."),(0,o.kt)("p",null,"Each service page has some general information. Among this information you can find the docker image used by the service. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Prem Banner",src:r(55683).Z,width:"3670",height:"1436"})),(0,o.kt)("p",null,"In the example above, the docker image is ",(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io/premai-io/chat-llama-2-7b-gpu:1.0.1"),". You can ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," in your server where Prem is installed and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/premai-io/chat-llama-2-7b-gpu:1.0.1\n")),(0,o.kt)("p",null,"When the download is completed, you will be able to check the service again and it will be ready to be run from Prem user interface."))}u.isMDXComponent=!0},55683:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/troubleshooting-7aa3f46765a324d58840b04623099d94.png"}}]);