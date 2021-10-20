"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[6815],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7812:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:1},s="VKPR Infra",p={unversionedId:"commands/vkpr_infra",id:"commands/vkpr_infra",isDocsHomePage:!1,title:"VKPR Infra",description:"VKPR infra up",source:"@site/docs/commands/vkpr_infra.mdx",sourceDirName:"commands",slug:"/commands/vkpr_infra",permalink:"/pt/docs/commands/vkpr_infra",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/vkpr_infra.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Security |WIP|",permalink:"/pt/docs/components-guide/security"},next:{title:"VKPR AWS",permalink:"/pt/docs/commands/vkpr_aws"}},u=[{value:"VKPR infra up",id:"vkpr-infra-up",children:[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]}]},{value:"VKPR infra start",id:"vkpr-infra-start",children:[{value:"Description",id:"description-1",children:[]},{value:"Commands",id:"commands-1",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Values File Parameters",id:"values-file-parameters",children:[]}]},{value:"VKPR infra down",id:"vkpr-infra-down",children:[{value:"Description",id:"description-2",children:[]},{value:"Commands",id:"commands-2",children:[]},{value:"Parameters",id:"parameters-1",children:[]}]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-infra"},"VKPR Infra"),(0,i.kt)("h2",{id:"vkpr-infra-up"},"VKPR infra up"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Create a k3d cluster using ",(0,i.kt)("a",{parentName:"p",href:"#vkpr-infra-start"},"VKPR infra start")," defaults."),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Non-Interactive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra up\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"vkpr-infra-start"},"VKPR infra start"),(0,i.kt)("h3",{id:"description-1"},"Description"),(0,i.kt)("p",null,"Create a k3d cluster to test the applications."),(0,i.kt)("h3",{id:"commands-1"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra start\n")),(0,i.kt)("p",null,"Non-interactive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra start --http_port=8000 \\\n                   --https_port=8001 \\\n                   --enable_traefik=false\n")),(0,i.kt)("p",null,"Non-interactive without setting values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra start --default\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  --http_port         Define HTTP port used by k3d.           Default: 8000\n  --https_port        Define HTTPS port used by k3d.          Default: 8001\n  --enable_traefik    Set traefik as the default ingress.     Default: false\n  --default           Set all values with default.\n")),(0,i.kt)("h3",{id:"values-file-parameters"},"Values File Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr-values.yaml"',title:'"vkpr-values.yaml"'},"global:\n  infra:\n    http_port:  <Number>\n    https_port: <Number>\n    traefik:\n      enabled:  <Boolean>\n    resources:\n      servers:  <Number>\n      agents:   <Number>\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"vkpr-infra-down"},"VKPR infra down"),(0,i.kt)("h3",{id:"description-2"},"Description"),(0,i.kt)("p",null,"Destroy the k3d cluster."),(0,i.kt)("h3",{id:"commands-2"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra down\n")),(0,i.kt)("p",null,"Non-interactive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra down --delete_registry=false\n")),(0,i.kt)("p",null,"Non-interactive without setting values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra down --default\n")),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  --delete_registry   Delete Registry and Mirror Registry.   Default: false\n  --default           Set all values with default.\n")))}d.isMDXComponent=!0}}]);