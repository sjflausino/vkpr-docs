"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9971],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(k,l(l({ref:r},p),{},{components:t})):n.createElement(k,l({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6988:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],a={sidebar_position:2,version:"v1.0.20"},c="VKPR loki remove",s={unversionedId:"commands/loki/vkpr_loki_remove",id:"commands/loki/vkpr_loki_remove",isDocsHomePage:!1,title:"VKPR loki remove",description:"Description",source:"@site/docs/commands/loki/vkpr_loki_remove.mdx",sourceDirName:"commands/loki",slug:"/commands/loki/vkpr_loki_remove",permalink:"/pt/docs/commands/loki/vkpr_loki_remove",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/loki/vkpr_loki_remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"vkpr_loki_install",permalink:"/pt/docs/commands/loki/vkpr_loki_install"},next:{title:"VKPR postgres install",permalink:"/pt/docs/commands/postgresql/vkpr_postgres_install"}},p=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"See Also",id:"see-also",children:[]}]}],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-loki-remove"},"VKPR loki remove"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Uninstall all the content of loki from the cluster."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Non-interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr loki remove\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/loki/vkpr_loki_install"},"VKPR loki install")," - Install loki in the cluster.")))}m.isMDXComponent=!0}}]);