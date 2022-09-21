"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4726],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,v=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return t?n.createElement(v,l(l({ref:r},m),{},{components:t})):n.createElement(v,l({ref:r},m))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3803:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2,sidebar_label:"VKPR jaeger remove",title:"VKPR jaeger remove"},l="VKPR jaeger remove",i={unversionedId:"commands/jaeger/remove",id:"commands/jaeger/remove",title:"VKPR jaeger remove",description:"Description",source:"@site/docs/commands/jaeger/remove.mdx",sourceDirName:"commands/jaeger",slug:"/commands/jaeger/remove",permalink:"/docs/commands/jaeger/remove",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/jaeger/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR jaeger remove",title:"VKPR jaeger remove"},sidebar:"tutorialSidebar",previous:{title:"VKPR jaeger install",permalink:"/docs/commands/jaeger/install"},next:{title:"VKPR keycloak install",permalink:"/docs/commands/keycloak/install"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:s};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-jaeger-remove"},"VKPR jaeger remove"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Uninstall all the content of jaeger from the cluster."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Non-interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr jaeger remove\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/jaeger/install"},"VKPR jaeger install")," - Install jaeger in the cluster.")))}p.isMDXComponent=!0}}]);