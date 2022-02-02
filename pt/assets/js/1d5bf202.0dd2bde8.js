"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[7445],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(v,l(l({ref:n},u),{},{components:t})):a.createElement(v,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5242:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:1,version:"v1.0.20"},s=void 0,c={unversionedId:"commands/consul/vkpr_consul_install",id:"commands/consul/vkpr_consul_install",isDocsHomePage:!1,title:"vkpr_consul_install",description:"VKPR consul install",source:"@site/docs/commands/consul/vkpr_consul_install.mdx",sourceDirName:"commands/consul",slug:"/commands/consul/vkpr_consul_install",permalink:"/pt/docs/commands/consul/vkpr_consul_install",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/consul/vkpr_consul_install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR cert-manager remove",permalink:"/pt/docs/commands/cert-manager/vkpr_cert-manager_remove"},next:{title:"VKPR consul remove",permalink:"/pt/docs/commands/consul/vkpr_consul_remove"}},u=[{value:"VKPR consul install",id:"vkpr-consul-install",children:[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Values File Parameters",id:"values-file-parameters",children:[]},{value:"See Also",id:"see-also",children:[]}]}],m={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vkpr-consul-install"},"VKPR consul install"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Install Consul into cluster. For more information about Consul, click ",(0,o.kt)("a",{parentName:"p",href:"https://www.consul.io/"},"here"),"."),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr consul install [flags]\n")),(0,o.kt)("p",null,"Non-interactive without setting values or using ",(0,o.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr consul install --default\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Consul will always be installed in HA (High Availability), it is recommended that the cluster has at least 3 Nodes."))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"  --default           Set all values with default.\n  --domain            Define the domain used by the Consul UI.   Default: localhost\n  --secure            Specifies if the application will have HTTPS.    Default: false\n")),(0,o.kt)("h3",{id:"values-file-parameters"},"Values File Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr.yaml"',title:'"vkpr.yaml"'},"global:\n  domain:               <String>\n  secure:               <Boolean>\n  consul:\n    ingressClassName:   <String>\n    metrics:            <Boolean>\n    helmArgs:           <Object>\n")),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About the Formula")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 0.38.0 ",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Application Version"),": v1.10.4 ",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/hashicorp/consul"},"hashicorp/consul")," ",(0,o.kt)("br",null)))),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/consul/vkpr_consul_remove"},"VKPR consul remove")," - Uninstall consul from the cluster.")))}p.isMDXComponent=!0}}]);