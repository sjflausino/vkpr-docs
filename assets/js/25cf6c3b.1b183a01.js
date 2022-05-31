"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[1208],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},913:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,version:"v1.0.20"},s="VKPR kong install",p={unversionedId:"commands/kong/install",id:"commands/kong/install",isDocsHomePage:!1,title:"VKPR kong install",description:"Description",source:"@site/docs/commands/kong/install.mdx",sourceDirName:"commands/kong",slug:"/commands/kong/install",permalink:"/docs/commands/kong/install",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/kong/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR keycloak export clients",permalink:"/docs/commands/keycloak/export/clients"},next:{title:"VKPR kong remove",permalink:"/docs/commands/kong/remove"}},m=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Example Usage",id:"example-usage",children:[]}]},{value:"Argument Reference",id:"argument-reference",children:[{value:"Flags",id:"flags",children:[]},{value:"Values File",id:"values-file",children:[]}]},{value:"See Also",id:"see-also",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vkpr-kong-install"},"VKPR kong install"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Install Kong Gateway into cluster. For more information about Kong, click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.konghq.com/gateway/"},"here"),"."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Interactive inputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr kong install [flags]\n")),(0,r.kt)("p",null,"Non-interactive without setting values or using ",(0,r.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr kong install --default\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the VKPR dont identify any postgresql installed in the cluster, he will ",(0,r.kt)("a",{parentName:"p",href:"/docs/commands/postgresql/install"},"install")," to use with kong."))),(0,r.kt)("h3",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr kong install --default"',title:'"vkpr',kong:!0,install:!0,'--default"':!0},'# vkpr.yaml\n---\nkong:\n  enabled: true\n  namespace: "foo"\n  HA: false\n  mode: "standalone"\n  metrics: false\n  rbac:\n    adminPassword: "kong1234"\n  vitals:\n    prometheusStrategy: false\n  helmArgs:\n    ...\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you want to use the Prometheus Strategy for Kong Vitals (vitals.prometheusStrategy: true),\nalong with metrics being set to true, you must first install the prometheus-stack (vkpr prometheus-stack install),\notherwise you wont have the needed CRDs installed on your environment."))),(0,r.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  --HA=false: Specifies if the application will have High Availability.\n  --default=false: Use to automatically fill inputs with default values.\n  --domain='localhost': Specifies the domain to use in the application.\n  --dry_run=false: Specifies if output the values from the application.\n  --enterprise=false: Specifies if the Kong will be using Enterprise License.\n  --kong_mode='dbless': Specifies the type of Kong Deployment.\n  --license=' ': Specifies the Kong Enterprise License path.\n  --rbac_password='vkpr123': Specifies the RBAC Super Admin Password.\n  --secure=false: Specifies if the application will have HTTPS.\n")),(0,r.kt)("h3",{id:"values-file"},"Values File"),(0,r.kt)("h4",{id:"globals"},"Globals"),(0,r.kt)("p",null,"The following arguments are supported by the globals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"domain"))," - (Required) Define the domain used by the application. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"secure"))," - (Required) Specifies if the services from the application will expose HTTPS ports inside the cluster. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"namespace"))," - (Optional) Define where the application will be provisioned. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,r.kt)("h4",{id:"local"},"Local"),(0,r.kt)("p",null,"The following arguments are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"enabled"))," - (Required unless using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),") Enable the auto install from the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"namespace"))," - (Optional) Define where the application will be provisioned. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"HA"))," - (Optional) Specifies if the application will have High Availability. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"mode"))," - (Required) Specifies the type of Kong Deployment. Allowed Values: ",(0,r.kt)("inlineCode",{parentName:"li"},"dbless"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"standalone"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hybrid")," The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"dbless"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"metrics"))," - (Optional) Specifies if the application will expose your metrics. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"enterprise"))," - (Required) Specifies if the Kong will be using Enterprise License. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"license"))," - (Optional) Specifies the Kong Enterprise License path."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"rbac")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"adminPassword"))," - (Required) Specify the kong admin password. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr123"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#argument-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"helmArgs"))," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing"))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About the Formula")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 2.6.4 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Application Version"),": v2.7.0 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/kong/kong/"},"kong/kong")," ",(0,r.kt)("br",null)))),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/commands/kong/remove"},"VKPR kong remove")," - Uninstall kong from the cluster.")))}c.isMDXComponent=!0}}]);