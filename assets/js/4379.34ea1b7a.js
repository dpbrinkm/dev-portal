(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[4379],{53042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var o=n(87462),r=n(67294),a=n(51048),c=n(86010),s=n(4779),l=n(23702),i=n(82940);const u={codeBlockContainer:"codeBlockContainer_Ckt0"};function d(e){let{as:t,...n}=e;const a=(0,s.p)(),d=(0,i.QC)(a);return r.createElement(t,(0,o.Z)({},n,{style:d,className:(0,c.default)(n.className,u.codeBlockContainer,l.k.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function m(e){let{children:t,className:n}=e;return r.createElement(d,{as:"pre",tabIndex:0,className:(0,c.default)(p.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:p.codeBlockLines},t))}var h=n(20107),f=n(52144),g=n(23746);const y={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function b(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,c.default)(n,a&&y.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:y.codeLineNumber}),r.createElement("span",{className:y.codeLineContent},u)):u,r.createElement("br",null))}var k=n(94358),v=n(97325);function E(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function N(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const B={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function C(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{(0,k.Z)(t),a(!0),s.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.default)("clean-btn",n,B.copyButton,o&&B.copyButtonCopied),onClick:l},r.createElement("span",{className:B.copyButtonIcons,"aria-hidden":"true"},r.createElement(E,{className:B.copyButtonIcon}),r.createElement(N,{className:B.copyButtonSuccessIcon})))}function L(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const w={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function j(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,v.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,c.default)("clean-btn",t,o&&w.wordWrapButtonEnabled),"aria-label":a,title:a},r.createElement(L,{className:w.wordWrapButtonIcon,"aria-hidden":"true"}))}function S(e){let{children:t,className:n="",metastring:a,title:l,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:y,magicComments:k}}=(0,h.L)(),v=m??(0,i.Vo)(n)??y,E=(0,s.p)(),N=(0,f.F)(),B=(0,i.bc)(a)||l,{lineClassNames:L,code:w}=(0,i.nZ)(t,{metastring:a,language:v,magicComments:k}),S=u??(0,i.nt)(a);return r.createElement(d,{as:"div",className:(0,c.default)(n,v&&!n.includes(`language-${v}`)&&`language-${v}`)},B&&r.createElement("div",{className:p.codeBlockTitle},B),r.createElement("div",{className:p.codeBlockContent},r.createElement(g.ZP,(0,o.Z)({},g.lG,{theme:E,code:w,language:v??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,c.default)(t,p.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,c.default)(p.codeBlockLines,S&&p.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(b,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:L[t],showLineNumbers:S})))))})),r.createElement("div",{className:p.buttonGroup},(N.isEnabled||N.isCodeScrollable)&&r.createElement(j,{className:p.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),r.createElement(C,{className:p.codeButton,code:w}))))}function T(e){let{children:t,...n}=e;const c=(0,a.default)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof s?S:m;return r.createElement(l,(0,o.Z)({key:String(c)},n),s)}},13899:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(87462),r=n(67294),a=n(86010),c=n(97325),s=n(20107),l=n(83699);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();if("h1"===t||!n)return r.createElement(t,(0,o.Z)({},u,{id:void 0}));const p=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return r.createElement(t,(0,o.Z)({},u,{className:(0,a.default)("anchor",d?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,u.className),id:n}),u.children,r.createElement(l.default,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},52144:(e,t,n)=>{"use strict";n.d(t,{F:()=>s});var o=n(67294),r=n(43768);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[n,c]=(0,o.useState)(),s=(0,o.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,o.useEffect)((()=>{s()}),[s]),function(e,t,n){void 0===n&&(n=a);const c=(0,r.zX)(t),s=(0,r.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,s),()=>t.disconnect()}),[e,c,s])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function s(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),s=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return c(a,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:s}}},82940:(e,t,n)=>{"use strict";n.d(t,{QC:()=>m,Vo:()=>d,bc:()=>i,nZ:()=>p,nt:()=>u});var o=n(87594),r=n.n(o);const a=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,s={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:o}=s[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){return e?.match(a)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:i}=t;if(i&&c.test(i)){const e=i.match(c).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(s),t)}}(o,a),d=n.split("\n"),p=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),h=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),f=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<d.length;){const e=d[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?p[m[t]].range+=`${r},`:h[t]?p[h[t]].start=r:f[t]&&(p[f[t]].range+=`${p[f[t]].start}-${r-1},`),d.splice(r,1)}n=d.join("\n");const g={};return Object.entries(p).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{g[e]??=[],g[e].push(t)}))})),{lineClassNames:g,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},23746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>h,lG:()=>c});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),c={Prism:o.Z,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function p(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var m=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=l({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=l({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?l({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=l({},p(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?l({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=o[c]++)<r[c];){var p=void 0,m=t[c],h=n[c][a];if("string"==typeof h?(m=c>0?m:["plain"],p=h):(m=d(m,h.type),h.alias&&(m=d(m,h.alias)),p=h.content),"string"==typeof p){var f=p.split(i),g=f.length;s.push({types:m,content:f[0]});for(var y=1;y<g;y++)u(s),l.push(s=[]),s.push({types:m,content:f[y]})}else c++,t.push(m),n.push(p),o.push(0),r.push(p.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return u(s),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const h=m},94358:(e,t,n)=>{"use strict";function o(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}return o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),r&&r.focus(),s}n.d(t,{Z:()=>o})}}]);