"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[1208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=l,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"VKPR kong install",title:"VKPR kong install"},r="VKPR kong install",o={unversionedId:"commands/kong/install",id:"commands/kong/install",title:"VKPR kong install",description:"Description",source:"@site/docs/commands/kong/install.mdx",sourceDirName:"commands/kong",slug:"/commands/kong/install",permalink:"/docs/commands/kong/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/kong/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR kong install",title:"VKPR kong install"},sidebar:"tutorialSidebar",previous:{title:"VKPR keycloak realm idp",permalink:"/docs/commands/keycloak/realm/idp"},next:{title:"VKPR kong deck dump",permalink:"/docs/commands/kong/deck/dump"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"Values File",id:"values-file",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Environment values",id:"environment-values",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vkpr-kong-install"},"VKPR kong install"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Install Kong Gateway into cluster. For more information about Kong, click ",(0,l.kt)("a",{parentName:"p",href:"https://docs.konghq.com/gateway/"},"here"),"."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"Interactive inputs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr kong install [flags]\n")),(0,l.kt)("p",null,"Non-interactive without setting values or using ",(0,l.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr kong install --default\n")),(0,l.kt)("admonition",{title:"Info",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If the VKPR dont identify any postgresql installed in the cluster, he will ",(0,l.kt)("a",{parentName:"p",href:"/docs/commands/postgresql/install"},"install")," to use with kong.")),(0,l.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"  --default         Use to automatically fill inputs with default values\n  --dry_run         Simulate an install\n  --domain          Set the application address\n  --secure          Using HTTPS in the application\n  --HA              Specifies if the application will have High Availability\n  --mode            Specifies the type of Kong Deployment\n  --license         Specifies the Kong Enterprise License path\n  --rbac_password   Specifies the RBAC Super Admin Password Has no effect on hybrid data plane installatio\n  --plane           If mode is set do hybrid, specifies which plane to install\n  --cp_url          Specifies which kong CP endpoint\n  --telemetry_url   Specifies which kong CP telemetry endpoint\n")),(0,l.kt)("h3",{id:"values-file"},"Values File"),(0,l.kt)("h4",{id:"globals"},"Globals"),(0,l.kt)("p",null,"The following arguments are supported by the globals:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"domain")," - (Required) Define the domain used by the application. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secure")," - (Required) Specifies if the services from the application will expose HTTPS ports inside the cluster. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,l.kt)("h4",{id:"local"},"Local"),(0,l.kt)("p",null,"The following arguments are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," - (Optional) Enables the installation if performed with the command ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HA")," - (Optional) Specifies if the application will have High Availability. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics")," - (Optional) Specifies if the application will expose your metrics. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mode")," - (Required) Specifies the type of Kong Deployment. Allowed Values: ",(0,l.kt)("inlineCode",{parentName:"li"},"dbless"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"standalone")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"hybrid"),". The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"dbless"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enterprise"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"license")," - (Optional) Specifies the Kong Enterprise License path."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rbac"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"adminPassword")," - (Required) Specify the kong admin password. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"vkpr123"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"openid"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," - (Optional) Enable Kong Manager OpenID Connect with Keycloak."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret")," - Specifies the Client Secret used by Keycloak."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vitals"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prometheusStrategy")," - (Optional) Use prometheus to collect the vital's metrics from Kong."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hybrid"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"plane")," - (Optional) Specifies the Kong Plane to be installed. Allowed Values: ",(0,l.kt)("inlineCode",{parentName:"li"},"control")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"data"),". The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"control"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dataPlane"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"controlPlaneEndpoint")," - (Required with DataPlane) Specifies the Kong Control Plane endpoint to communicate between the planes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"telemetryEndpoint")," - (Required with DataPlane) Specifies the Kong Telemetry enpoint to communicate between the planes."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it if you know what you're doing.")),(0,l.kt)("h3",{id:"environment-values"},"Environment values"),(0,l.kt)("p",null,"The following variables are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_NAMESPACE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HA")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_HA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mode")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_MODE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_METRICS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"license")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_ENTERPRISE_LICENSE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prometheusStrategy")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_VITALS_STRATEGY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"adminPassword")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_RBAC_ADMIN_PASSWORD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"openid"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_KEYCLOAK_OPENID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_KEYCLOAK_OPENID_CLIENTSECRET")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"plane")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_PLANE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"controlPlaneEndpoint")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_CP_ENDPOINT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"telemetryEndpoint")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_KONG_TELEMETRY_URL"))),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"About the Formula",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 2.9.1 ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Application Version"),": v2.8.1.2 ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/kong/kong/"},"kong/kong")," ",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/commands/kong/remove"},"VKPR kong remove")," - Uninstall kong from the cluster.")))}d.isMDXComponent=!0}}]);