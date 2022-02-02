"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[470],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4630:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={sidebar_position:3,version:"v1.0.20"},c="VKPR postgres remove",p={unversionedId:"commands/postgresql/vkpr_postgres_remove",id:"commands/postgresql/vkpr_postgres_remove",isDocsHomePage:!1,title:"VKPR postgres remove",description:"Description",source:"@site/docs/commands/postgresql/vkpr_postgres_remove.mdx",sourceDirName:"commands/postgresql",slug:"/commands/postgresql/vkpr_postgres_remove",permalink:"/pt/docs/commands/postgresql/vkpr_postgres_remove",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/postgresql/vkpr_postgres_remove.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR postgres createdb",permalink:"/pt/docs/commands/postgresql/vkpr_postgres_createdb"},next:{title:"VKPR prometheus-stack install",permalink:"/pt/docs/commands/prometheus-stack/vkpr_prometheus-stack_install"}},l=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"See Also",id:"see-also",children:[]}]}],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"vkpr-postgres-remove"},"VKPR postgres remove"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Uninstall all the content of Postgresql from the cluster."),(0,s.kt)("h2",{id:"commands"},"Commands"),(0,s.kt)("p",null,"Non-interactive inputs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr postgres remove\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"see-also"},"See Also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/postgresql/vkpr_postgres_install"},"VKPR postgres install")," - Install Postgresql in the cluster.")))}m.isMDXComponent=!0}}]);