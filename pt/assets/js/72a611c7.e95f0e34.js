"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4245],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,k=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return t?r.createElement(k,c(c({ref:n},s),{},{components:t})):r.createElement(k,c({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,c[1]=d;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1,sidebar_label:"VKPR kong deck dump",title:"VKPR kong deck dump"},c="VKPR kong deck dump",d={unversionedId:"commands/kong/deck/dump",id:"commands/kong/deck/dump",title:"VKPR kong deck dump",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/kong/deck/dump.mdx",sourceDirName:"commands/kong/deck",slug:"/commands/kong/deck/dump",permalink:"/pt/docs/commands/kong/deck/dump",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/kong/deck/dump.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR kong deck dump",title:"VKPR kong deck dump"},sidebar:"tutorialSidebar",previous:{title:"VKPR kong install",permalink:"/pt/docs/commands/kong/install"},next:{title:"VKPR kong deck sync",permalink:"/pt/docs/commands/kong/deck/sync"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],s={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-kong-deck-dump"},"VKPR kong deck dump"),(0,o.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,o.kt)("p",null,"Exporta conte\xfado do Kong Workspace."),(0,o.kt)("h2",{id:"comando"},"Comando"),(0,o.kt)("p",null,"Comando interativo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr kong deck dump [flags]\n")),(0,o.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,o.kt)("h3",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"  --default           Use para preencher automaticamente as entradas com valores padr\xf5es\n  --kong_addr         Espec\xedfica a URL do Kong admin\n  --kong_admin_token  Espec\xedfica a senha do admin\n  --kong_workspace    Espec\xedfica o Workspace do Kong a ser exportado\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/kong/deck/sync"},"VKPR kong deck sync")," - Importa conte\xfado dentro do Kong Workspace.")))}p.isMDXComponent=!0}}]);