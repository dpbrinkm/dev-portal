"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[3607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"chat-quickstart",title:"Quick Start with Python",sidebar_label:"Quick Start",sidebar_position:2},s="Quick Start with Python",i={unversionedId:"prem-app/usage/text-to-audio/chat-quickstart",id:"prem-app/usage/text-to-audio/chat-quickstart",title:"Quick Start with Python",description:"Install and Import all the necessary dependencies",source:"@site/docs/prem-app/usage/text-to-audio/python.md",sourceDirName:"prem-app/usage/text-to-audio",slug:"/prem-app/usage/text-to-audio/chat-quickstart",permalink:"/docs/prem-app/usage/text-to-audio/chat-quickstart",draft:!1,editUrl:"https://github.com/premAI-io/dev-portal/blob/main/docs/prem-app/usage/text-to-audio/python.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"chat-quickstart",title:"Quick Start with Python",sidebar_label:"Quick Start",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Health",permalink:"/docs/prem-app/usage/text-to-audio/api/health-v-1-get"},next:{title:"Diffuser",permalink:"/docs/category/diffuser"}},p={},c=[{value:"Install and Import all the necessary dependencies",id:"install-and-import-all-the-necessary-dependencies",level:3},{value:"Use requests library to send the http request to the Prem service",id:"use-requests-library-to-send-the-http-request-to-the-prem-service",level:3}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start-with-python"},"Quick Start with Python"),(0,a.kt)("h3",{id:"install-and-import-all-the-necessary-dependencies"},"Install and Import all the necessary dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\n!pip install requests\n\nimport requests\n\n")),(0,a.kt)("h3",{id:"use-requests-library-to-send-the-http-request-to-the-prem-service"},"Use requests library to send the http request to the Prem service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nprompt = """\nHello, my name is Suno. And, uh \u2014 and I like pizza. [laughs] \nBut I also have other interests such as playing tic tac toe.\n"""\n\nresponse = requests.post("http://localhost:10111/v1/audio/generation",\n                         json={"prompt": prompt})\nresponse_content = requests.get(\n    f"http://localhost:10111/files/{response.json()[\'url\']}")\n\nwith open("output_file.wav", "wb") as f:\n    f.write(response_content.content)\n\n')))}d.isMDXComponent=!0}}]);