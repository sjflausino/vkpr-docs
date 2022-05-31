"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[58],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?n.createElement(f,c(c({ref:r},m),{},{components:t})):n.createElement(f,c({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6727:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:2,version:"v1.0.20"},l="VKPR cert-manager remove",s={unversionedId:"commands/cert-manager/remove",id:"commands/cert-manager/remove",isDocsHomePage:!1,title:"VKPR cert-manager remove",description:"Description",source:"@site/docs/commands/cert-manager/remove.mdx",sourceDirName:"commands/cert-manager",slug:"/commands/cert-manager/remove",permalink:"/pt/docs/commands/cert-manager/remove",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/cert-manager/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR cert-manager install digitalocean",permalink:"/pt/docs/commands/cert-manager/install/digitalocean"},next:{title:"VKPR consul install",permalink:"/pt/docs/commands/consul/install"}},m=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:m};function p(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-cert-manager-remove"},"VKPR cert-manager remove"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Uninstall all the content of cert-manager from the cluster."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Non-interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr cert-manager remove\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/cert-manager/install/aws"},"VKPR cert-manager install aws")," - Install cert-manager AWS in the cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/cert-manager/install/digitalocean"},"VKPR cert-manager install digitalocean")," - Install cert-manager DO in the cluster.")))}p.isMDXComponent=!0}}]);