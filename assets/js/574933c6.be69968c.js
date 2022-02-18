"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[7596],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||k[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4330:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={sidebar_position:3,version:"v1.0.20"},l="VKPR keycloak export clients",s={unversionedId:"commands/keycloak/export/vkpr_keycloak_export_clients",id:"commands/keycloak/export/vkpr_keycloak_export_clients",isDocsHomePage:!1,title:"VKPR keycloak export clients",description:"Description",source:"@site/docs/commands/keycloak/export/vkpr_keycloak_export_clients.mdx",sourceDirName:"commands/keycloak/export",slug:"/commands/keycloak/export/vkpr_keycloak_export_clients",permalink:"/docs/commands/keycloak/export/vkpr_keycloak_export_clients",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/keycloak/export/vkpr_keycloak_export_clients.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR keycloak export users",permalink:"/docs/commands/keycloak/export/vkpr_keycloak_export_users"},next:{title:"VKPR kong install",permalink:"/docs/commands/kong/vkpr_kong_install"}},p=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Parameters",id:"parameters",children:[]},{value:"See Also",id:"see-also",children:[]}]}],k={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-keycloak-export-clients"},"VKPR keycloak export clients"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Export all clients from the realm specified in Keycloak database."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"Interactive inputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr keycloak export clients [flags]\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"  --keycloak_password       Specifies the Keycloak Super admin password\n  --realm_name              Specifies the realm name to be exported\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/keycloak/import/vkpr_keycloak_import_clients"},"VKPR keycloak import clients")," - Import clients into keycloak database")))}u.isMDXComponent=!0}}]);