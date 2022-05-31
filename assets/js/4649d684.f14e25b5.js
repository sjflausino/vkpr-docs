"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9122],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9775:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:2,version:"v1.0.20"},s="VKPR cert-manager install digitalocean",c={unversionedId:"commands/cert-manager/install/digitalocean",id:"commands/cert-manager/install/digitalocean",isDocsHomePage:!1,title:"VKPR cert-manager install digitalocean",description:"Description",source:"@site/docs/commands/cert-manager/install/digitalocean.mdx",sourceDirName:"commands/cert-manager/install",slug:"/commands/cert-manager/install/digitalocean",permalink:"/docs/commands/cert-manager/install/digitalocean",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/cert-manager/install/digitalocean.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR cert-manager install aws",permalink:"/docs/commands/cert-manager/install/aws"},next:{title:"VKPR cert-manager remove",permalink:"/docs/commands/cert-manager/remove"}},m=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Example Usage",id:"example-usage",children:[]}]},{value:"Argument Reference",id:"argument-reference",children:[{value:"Flags",id:"flags",children:[]},{value:"Values File",id:"values-file",children:[]},{value:"Setting Provider credentials",id:"setting-provider-credentials",children:[]}]},{value:"See Also",id:"see-also",children:[]}],p={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-cert-manager-install-digitalocean"},"VKPR cert-manager install digitalocean"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Install cert-manager into cluster. For more information about cert-manager, click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cert-manager"},"here"),"."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr cert-manager install digitalocean [flags]\n")),(0,i.kt)("p",null,"Non-interactive without setting values or using ",(0,i.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr cert-manager install digitalocean --default\n")),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr cert-manager install aws --default"',title:'"vkpr',"cert-manager":!0,install:!0,aws:!0,'--default"':!0},'# vkpr.yaml\n---\ncert-manager:\n  enabled: true\n  email: "test@test.com"\n  issuer:\n    type: "production"\n    solver: "DNS01"\n    ingress: "nginx"\n  helmArgs:\n    ...\n')),(0,i.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,i.kt)("h3",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  --default=false: Use to automatically fill inputs with default values.\n  --dry_run=false: Specifies if output the values from the application.\n  --email='default@vkpr.com': Specifies your email to issue the certificate.\n  --issuer='staging': Specifies what will be used to issue certificates.\n  --issuer_solver='DNS01': Specifies the type of challenge you will use to issue the certificate.\n")),(0,i.kt)("h3",{id:"values-file"},"Values File"),(0,i.kt)("h4",{id:"globals"},"Globals"),(0,i.kt)("p",null,"The following arguments are supported by the globals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"namespace"))," - (Optional) Define where the application will be provisioned. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"cert-manager"),".")),(0,i.kt)("h4",{id:"local"},"Local"),(0,i.kt)("p",null,"The following arguments are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"enabled"))," - (Required unless using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),") Enable the auto install from the application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"email"))," - Specifies the email to use with Let's encrypt to generate the certificate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"issuer")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"type"))," - Specifies the envirmoment to cert-manager. Allowed Values: ",(0,i.kt)("inlineCode",{parentName:"li"},"staging"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"production"),". The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"production"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"solver"))," - Specifies the method of the certificate issuer. Allowed Values: ",(0,i.kt)("inlineCode",{parentName:"li"},"DNS01"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP01"),". The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"DNS01"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"ingress"))," - (Required unless using the HTTP01 method) Specifies the ingress controller used by the applications. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"namespace"))," - (Optional) Define where the application will be provisioned. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"cert-manager"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"helmArgs"))," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing"))),(0,i.kt)("h3",{id:"setting-provider-credentials"},"Setting Provider credentials"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CAUTION: Setting credentials manually will override the credentials already saved in memory")),(0,i.kt)("h4",{id:"digital-ocean"},"Digital Ocean"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="digitalocean" --fields="token" --values="your-api-token"\n')),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About the Formula")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 0.1.20 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Application Version"),": v1.5.3 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/bitnami/cert-manager"},"bitnami/cert-manager")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Install CRDS"),": true ",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/cert-manager/remove"},"VKPR cert-manager remove")," - Uninstall cert-manager from the cluster.")))}u.isMDXComponent=!0}}]);