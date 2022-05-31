"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[1071],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(f,l(l({ref:n},m),{},{components:t})):a.createElement(f,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1892:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],s={sidebar_position:1,version:"v1.0.20"},o="VKPR ingress install",p={unversionedId:"commands/ingress/install",id:"commands/ingress/install",isDocsHomePage:!1,title:"VKPR ingress install",description:"Description",source:"@site/docs/commands/ingress/install.mdx",sourceDirName:"commands/ingress",slug:"/commands/ingress/install",permalink:"/docs/commands/ingress/install",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/ingress/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR infra stop",permalink:"/docs/commands/infra/stop"},next:{title:"VKPR ingress remove",permalink:"/docs/commands/ingress/remove"}},m=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Example Usage",id:"example-usage",children:[]}]},{value:"Argument Reference",id:"argument-reference",children:[{value:"Flags",id:"flags",children:[]},{value:"Values File",id:"values-file",children:[]}]},{value:"See Also",id:"see-also",children:[]}],c={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-ingress-install"},"VKPR ingress install"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Install nginx-ingress controller into cluster. For more information about nginx-ingress controller, click ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"here"),"."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr ingress install [flags]\n")),(0,i.kt)("p",null,"Non-interactive without setting values or using ",(0,i.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr ingress install --default\n")),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr ingress install --default"',title:'"vkpr',ingress:!0,install:!0,'--default"':!0},'# vkpr.yaml\n---\ningress:\n  enabled: true\n  namespace: "foo"\n  loadBalancerType: "NLB"\n  ssl:\n    enabled: false\n  metrics: true\n  helmArgs:\n    ...\n')),(0,i.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,i.kt)("h3",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  --default=false: Use to automatically fill inputs with default values.\n  --dry_run=false: Specifies if output the values from the application.\n  --lb_type='Classic': Define the Loadbalancer type in AWS.\n")),(0,i.kt)("h3",{id:"values-file"},"Values File"),(0,i.kt)("h4",{id:"globals"},"Globals"),(0,i.kt)("p",null,"The following arguments are supported by the globals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"namespace"))," - (Optional) Define where the application will be provisioned. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,i.kt)("h4",{id:"local"},"Local"),(0,i.kt)("p",null,"The following arguments are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"enabled"))," - (Required unless using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),") Enable the auto install from the application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"loadBalancerType"))," - (Required) Define the Loadbalancer type in AWS. Allowed values: ",(0,i.kt)("inlineCode",{parentName:"li"},"Classic"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"NLB"),". The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"Classic"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"ssl")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"enabled"))," - (Optional) Enable the certificate inside the ingressController. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"crt"))," - (Required) Specify the certificate path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"key"))," - (Required) Specify the key path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"secretName"))," - (Optional) Specifies if the content from the application will be storage in a volume."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"metrics"))," - (Optional) Specifies if the application will expose your metrics. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"namespace"))," - (Optional) Define where the application will be provisioned. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#argument-reference"},(0,i.kt)("inlineCode",{parentName:"a"},"helmArgs"))," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About the Formula")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 4.0.13 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Application Version"),": v1.1.0 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/ingress-nginx/ingress-nginx"},"helm/nginx-ingress")," ",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/ingress/remove"},"VKPR ingress remove")," - Uninstall ingress from the cluster.")))}u.isMDXComponent=!0}}]);