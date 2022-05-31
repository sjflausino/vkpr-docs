"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[511],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7078:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1,version:"v1.0.20"},s="VKPR okteto init",p={unversionedId:"commands/okteto/init",id:"commands/okteto/init",isDocsHomePage:!1,title:"VKPR okteto init",description:"Description",source:"@site/docs/commands/okteto/init.mdx",sourceDirName:"commands/okteto",slug:"/commands/okteto/init",permalink:"/pt/docs/commands/okteto/init",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/okteto/init.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR loki remove",permalink:"/pt/docs/commands/loki/remove"},next:{title:"VKPR postgres install",permalink:"/pt/docs/commands/postgresql/install"}},u=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-okteto-init"},"VKPR okteto init"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Create a cluster in Okteto cloud. For more information about Okteto, click ",(0,i.kt)("a",{parentName:"p",href:"https://www.okteto.com/"},"here"),"."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr okteto init [flags]\n")),(0,i.kt)("p",null,"Non-interactive without setting values or using ",(0,i.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr okteto init --default\n")))}m.isMDXComponent=!0}}]);