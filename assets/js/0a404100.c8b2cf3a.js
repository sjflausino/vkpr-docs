"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4055],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return k}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),k=n,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||a;return t?o.createElement(d,i(i({ref:r},l),{},{components:t})):o.createElement(d,i({ref:r},l))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2246:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:2,version:"v1.0.20"},s="VKPR keycloak import users",p={unversionedId:"commands/keycloak/import/vkpr_keycloak_import_users",id:"commands/keycloak/import/vkpr_keycloak_import_users",isDocsHomePage:!1,title:"VKPR keycloak import users",description:"Description",source:"@site/docs/commands/keycloak/import/vkpr_keycloak_import_users.mdx",sourceDirName:"commands/keycloak/import",slug:"/commands/keycloak/import/vkpr_keycloak_import_users",permalink:"/docs/commands/keycloak/import/vkpr_keycloak_import_users",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/keycloak/import/vkpr_keycloak_import_users.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR keycloak import realm",permalink:"/docs/commands/keycloak/import/vkpr_keycloak_import_realm"},next:{title:"VKPR keycloak export realm",permalink:"/docs/commands/keycloak/export/vkpr_keycloak_export_realm"}},l=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Parameters",id:"parameters",children:[]},{value:"See Also",id:"see-also",children:[]}]}],m={toc:l};function u(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-keycloak-import-users"},"VKPR keycloak import users"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Import users from a specifed file in Keycloak database."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"Interactive inputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr keycloak import users [flags]\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"  --keycloak_password       Specifies the Keycloak Super admin password\n  --realm_name              Specifies the realm name to be imported\n  --realm_path              Specifies the path to file\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/keycloak/export/vkpr_keycloak_export_users"},"VKPR keycloak export users")," - Export users into keycloak database")))}u.isMDXComponent=!0}}]);