"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?l.createElement(k,r(r({ref:t},u),{},{components:a})):l.createElement(k,r({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1,sidebar_label:"VKPR vault install",title:"VKPR vault install"},r="VKPR vault install",o={unversionedId:"commands/vault/install",id:"commands/vault/install",title:"VKPR vault install",description:"Description",source:"@site/docs/commands/vault/install.mdx",sourceDirName:"commands/vault",slug:"/commands/vault/install",permalink:"/docs/commands/vault/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/vault/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR vault install",title:"VKPR vault install"},sidebar:"tutorialSidebar",previous:{title:"VKPR Upgrade",permalink:"/docs/commands/upgrade"},next:{title:"VKPR vault remove",permalink:"/docs/commands/vault/remove"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"Values File",id:"values-file",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Environment values",id:"environment-values",level:3},{value:"Setting Provider credentials",id:"setting-provider-credentials",level:2},{value:"AWS",id:"aws",level:3},{value:"Azure",id:"azure",level:3},{value:"See Also",id:"see-also",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vkpr-vault-install"},"VKPR vault install"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Install Vault into cluster. For more information about Vault, click ",(0,n.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"here"),"."),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("p",null,"Interactive inputs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr vault install [flags]\n")),(0,n.kt)("p",null,"Non-interactive without setting values or using ",(0,n.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr vault install --default\n")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Vault will always be installed in HA (High Availability), it is recommended that the cluster has at least 3 Nodes.")),(0,n.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,n.kt)("h3",{id:"flags"},"Flags"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"  --default       Use to automatically fill inputs with default values\n  --dry_run       Simulate an install\n  --domain        Set the application address\n  --secure        Using HTTPS in the application\n  --mode          Specifies the Vault storage mode\n  --auto_unseal   Enable to Auto Unseal the Vault with a Cloud provider\n  --ssl           Defines that the application will use its own certificate\n  --crt_file      Specifies the vault .crt file path\n  --key_file      Specifies the vault .key file path\n")),(0,n.kt)("h3",{id:"values-file"},"Values File"),(0,n.kt)("h4",{id:"globals"},"Globals"),(0,n.kt)("p",null,"The following arguments are supported by the globals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domain")," - (Required) Define the domain used by the application. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secure")," - (Required) Specifies if the services from the application will expose HTTPS ports inside the cluster. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Optional) Define which ingress controller will expose the application. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"nginx"),".")),(0,n.kt)("h4",{id:"local"},"Local"),(0,n.kt)("p",null,"The following arguments are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"enabled")," - (Optional) Enables the installation if performed with the command ",(0,n.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Optional) Define which ingress controller will expose the application. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"metrics")," - (Optional) Specifies if the application will expose your metrics. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"storageMode")," - (Required) Specifies the Vault storage mode. Allowed Values: ",(0,n.kt)("inlineCode",{parentName:"li"},"raft"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"consul"),". The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"raft"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"autoUnseal")," - (Required) Enable to Auto Unseal the Vault with a Cloud provider. Allowed Values: ",(0,n.kt)("inlineCode",{parentName:"li"},"aws"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"azure"),". The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ssl"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"enabled")," - (Optional) Enable the manual certificate into ingress. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"crt")," - Specify the certificate path."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key")," - Specify the key path."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secretName")," - (Optional) Specifies if the content from the application will be storage in a volume."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing")),(0,n.kt)("h3",{id:"environment-values"},"Environment values"),(0,n.kt)("p",null,"The following variables are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_NAMESPACE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_INGRESS_CLASS_NAME")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"storageMode")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_STORAGE_MODE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"autoUnseal")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_AUTO_UNSEAL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"metrics")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_METRICS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ssl"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_SSL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_CERTIFICATE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_KEY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,n.kt)("strong",{parentName:"li"},"VKPR_ENV_VAULT_SSL_SECRET"))))),(0,n.kt)("h2",{id:"setting-provider-credentials"},"Setting Provider credentials"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CAUTION: Setting credentials manually will override the credentials already saved in memory")),(0,n.kt)("h3",{id:"aws"},"AWS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="aws" --fields="accesskeyid,secretaccesskey,region,kmskeyid,kmsendpoint" --values="your-accesskey,your-secretaccess,your-region,your-kmskeyid,your-kmsendpoint"\n')),(0,n.kt)("h3",{id:"azure"},"Azure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="azure" --fields="azuretenantid,azureclientid,azureclientsecret,vaultazurekeyvaultvaultname,vaultazurekeyvaultkeyname" --values="your-azuretenantid,your-azureclientid,your-azureclientsecret,your-vaultazurekeyvaultvaultname,your-vaultazurekeyvaultkeyname,"\n')),(0,n.kt)("hr",null),(0,n.kt)("admonition",{title:"About the Formula",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 0.19.0 ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"Application Version"),": v1.9.2 ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/hashicorp/vault"},"hashicorp/vault")," ",(0,n.kt)("br",null))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/commands/vault/remove"},"VKPR vault remove")," - Uninstall vault from the cluster.")))}m.isMDXComponent=!0}}]);