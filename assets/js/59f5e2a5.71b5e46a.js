"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[6255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),v=o,d=p["".concat(c,".").concat(v)]||p[v]||m[v]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,sidebar_label:"VKPR vault remove",title:"VKPR vault remove"},l="VKPR vault remove",i={unversionedId:"commands/vault/remove",id:"commands/vault/remove",title:"VKPR vault remove",description:"Description",source:"@site/docs/commands/vault/remove.mdx",sourceDirName:"commands/vault",slug:"/commands/vault/remove",permalink:"/docs/commands/vault/remove",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/vault/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR vault remove",title:"VKPR vault remove"},sidebar:"tutorialSidebar",previous:{title:"VKPR vault install",permalink:"/docs/commands/vault/install"},next:{title:"VKPR whoami install",permalink:"/docs/commands/whoami/install"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-vault-remove"},"VKPR vault remove"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Uninstall all the content of Vault from the cluster."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Non-interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr vault remove\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/vault/install"},"VKPR vault install")," - Install vault in the cluster.")))}m.isMDXComponent=!0}}]);