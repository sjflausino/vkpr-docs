"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[8685],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?n.createElement(f,l(l({ref:a},c),{},{components:t})):n.createElement(f,l({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7385:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={sidebar_position:1,version:"v1.0.29"},s="VKPR argocd install",p={unversionedId:"commands/argocd/install",id:"commands/argocd/install",isDocsHomePage:!1,title:"VKPR argocd install",description:"Description",source:"@site/docs/commands/argocd/install.mdx",sourceDirName:"commands/argocd",slug:"/commands/argocd/install",permalink:"/docs/commands/argocd/install",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/argocd/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.29"},sidebar:"tutorialSidebar",previous:{title:"VKPR Apply",permalink:"/docs/commands/apply"},next:{title:"VKPR argocd remove",permalink:"/docs/commands/argocd/remove"}},c=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Example Usage",id:"example-usage",children:[]}]},{value:"Argument Reference",id:"argument-reference",children:[{value:"Flags",id:"flags",children:[]},{value:"Values File",id:"values-file",children:[]}]},{value:"See Also",id:"see-also",children:[]}],m={toc:c};function d(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-argocd-install"},"VKPR argocd install"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Install ArgoCD into cluster. For more information about ArgoCD, click ",(0,i.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/"},"here"),"."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr argocd install [flags]\n")),(0,i.kt)("p",null,"Non-interactive without setting values or using ",(0,i.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr argocd install --default\n")),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr argocd install --default"',title:'"vkpr',argocd:!0,install:!0,'--default"':!0},'# vkpr.yaml\n---\nargocd:\n  enabled: true\n  namespace: "foo"\n  ingressClassName: "bar"\n  HA: false\n  addons:\n    applicationset: false\n  metrics: false\n  helmArgs:\n    ...\n')),(0,i.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,i.kt)("h3",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  --HA=false: Specifies if the application will have High Availability.\n  --default=false: Use to automatically fill inputs with default values.\n  --domain='localhost': Specifies the domain to use in the application.\n  --dry_run=false: Specifies if output the values from the application.\n  --secure=false: Specifies if the application will have HTTPS.\n")),(0,i.kt)("h3",{id:"values-file"},"Values File"),(0,i.kt)("h4",{id:"globals"},"Globals"),(0,i.kt)("p",null,"The following arguments are supported by the globals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"domain"))," - (Required) Define the domain used by the application. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"secure"))," - (Required) Specifies if the services from the application will expose HTTPS ports inside the cluster. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"ingressClassName"))," - (Optional) Define which ingress controller will expose the application. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx"),".")),(0,i.kt)("h4",{id:"local"},"Local"),(0,i.kt)("p",null,"The following arguments are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"enabled"))," - (Required unless using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),") Enable the auto install from the application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"ingressClassName"))," - (Optional) Define which ingress controller will expose the application. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"namespace"))," - (Optional) Define where the application will be provisioned. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"argocd"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"HA"))," - (Optional) Specifies if the application will have High Availability. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"addons")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"applicationSet"))," - (Optional) Enable to install the addon applicationSet with the ArgoCD. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"metrics"))," - (Optional) Specifies if the application will expose your metrics. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"helmArgs"))," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About the Formula")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 3.29.4 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Application Version"),": v2.2.1 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/argo/argo-cd"},"argo/argo-cd")," ",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/argocd/remove"},"VKPR argocd remove")," - Uninstall ArgoCD from the cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/argocd/set/repository"},"VKPR argocd set repository")," - Sync a repository with the ArgoCD."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/argocd/set/applicationset"},"VKPR argocd set applicationset")," - Apply an Applicationset manifest in the cluster.")))}d.isMDXComponent=!0}}]);