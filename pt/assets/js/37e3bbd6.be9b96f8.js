"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[1818],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,k=l["".concat(i,".").concat(d)]||l[d]||u[d]||a;return r?n.createElement(k,s(s({ref:t},m),{},{components:r})):n.createElement(k,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8847:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={sidebar_position:2,version:"v1.0.20"},i="VKPR prometheus-stack import",p={unversionedId:"commands/prometheus-stack/vkpr_prometheus-stack_import",id:"commands/prometheus-stack/vkpr_prometheus-stack_import",isDocsHomePage:!1,title:"VKPR prometheus-stack import",description:"Description",source:"@site/docs/commands/prometheus-stack/vkpr_prometheus-stack_import.mdx",sourceDirName:"commands/prometheus-stack",slug:"/commands/prometheus-stack/vkpr_prometheus-stack_import",permalink:"/pt/docs/commands/prometheus-stack/vkpr_prometheus-stack_import",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/prometheus-stack/vkpr_prometheus-stack_import.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR prometheus-stack install",permalink:"/pt/docs/commands/prometheus-stack/vkpr_prometheus-stack_install"},next:{title:"VKPR prometheus-stack remove",permalink:"/pt/docs/commands/prometheus-stack/vkpr_prometheus-stack_remove"}},m=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Parameters",id:"parameters",children:[]},{value:"See Also",id:"see-also",children:[]}]}],u={toc:m};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-prometheus-stack-import"},"VKPR prometheus-stack import"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Import a new Dashboard local file to Grafana"),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"Interactive inputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr prometheus-stack import [flags]\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"  --dashboard_name     Specifies the name of the Dashboard to be imported.\n  --dashboard_path     Specifies the path from dashboard file.\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/prometheus-stack/vkpr_prometheus-stack_install"},"VKPR prometheus-stack install")," - Install prometheus-stack in the cluster.")))}l.isMDXComponent=!0}}]);