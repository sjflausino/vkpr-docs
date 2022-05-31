"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4363],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4236:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={sidebar_position:2,version:"v1.0.20"},l="VKPR consul remove",s={unversionedId:"commands/consul/remove",id:"commands/consul/remove",isDocsHomePage:!1,title:"VKPR consul remove",description:"Description",source:"@site/docs/commands/consul/remove.mdx",sourceDirName:"commands/consul",slug:"/commands/consul/remove",permalink:"/docs/commands/consul/remove",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/consul/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR consul install",permalink:"/docs/commands/consul/install"},next:{title:"VKPR Create Formula",permalink:"/docs/commands/create"}},u=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]},{value:"See Also",id:"see-also",children:[]}],m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"vkpr-consul-remove"},"VKPR consul remove"),(0,c.kt)("h2",{id:"description"},"Description"),(0,c.kt)("p",null,"Uninstall all the content of Consul from the cluster."),(0,c.kt)("h2",{id:"commands"},"Commands"),(0,c.kt)("p",null,"Non-interactive inputs:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr consul remove\n")),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"see-also"},"See Also"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/commands/consul/install"},"VKPR consul install")," - Install consul in the cluster.")))}p.isMDXComponent=!0}}]);