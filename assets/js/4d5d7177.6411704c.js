"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[2219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:3,sidebar_label:"VKPR vault create external-secret",title:"VKPR vault create external-secret"},c="VKPR vault create external-secret",o={unversionedId:"commands/vault/create-external-secret",id:"commands/vault/create-external-secret",title:"VKPR vault create external-secret",description:"Description",source:"@site/docs/commands/vault/create-external-secret.mdx",sourceDirName:"commands/vault",slug:"/commands/vault/create-external-secret",permalink:"/docs/commands/vault/create-external-secret",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/vault/create-external-secret.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"VKPR vault create external-secret",title:"VKPR vault create external-secret"},sidebar:"tutorialSidebar",previous:{title:"VKPR vault remove",permalink:"/docs/commands/vault/remove"},next:{title:"VKPR otel install",permalink:"/docs/commands/opentelemetry/install"}},s={},i=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-vault-create-external-secret"},"VKPR vault create external-secret"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This command will create an External Secret that syncs with vault secrets through SecretStore."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vkpr vault create external-secret\n\nFormula was successfully built!\n? ExternalSecret name: vkpr-vault\n? ExternalSecret namespace: vkpr\n? SecretStore reference: vkpr-vault-backend\n? Secret store namespace: (leave empty for ClusterSecretStore reference) [? for ? Secret store namespace: (leave empty for ClusterSecretStore reference) \n? Secret path: kv/path\n? Secret key: key\n...\n")),(0,a.kt)("p",null,"After the execution, a secret and an ExternalSecret will be created that will be responsible for synchronizing the created secret with a remote secret in the previously selected provider."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/vault/install"},"VKPR vault install")," - Install vault in the cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/external-secrets/create-secret-store"},"VKPR external-secrets create secret-store ")," - Create a secretStore to retrieve secrets external to the cluster.")))}p.isMDXComponent=!0}}]);