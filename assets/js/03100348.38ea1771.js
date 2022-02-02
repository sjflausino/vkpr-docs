"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9315],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,version:"v1.0.20"},s=void 0,c={unversionedId:"commands/loki/vkpr_loki_install",id:"commands/loki/vkpr_loki_install",isDocsHomePage:!1,title:"vkpr_loki_install",description:"VKPR loki install",source:"@site/docs/commands/loki/vkpr_loki_install.mdx",sourceDirName:"commands/loki",slug:"/commands/loki/vkpr_loki_install",permalink:"/docs/commands/loki/vkpr_loki_install",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/loki/vkpr_loki_install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR kong remove",permalink:"/docs/commands/kong/vkpr_kong_remove"},next:{title:"VKPR loki remove",permalink:"/docs/commands/loki/vkpr_loki_remove"}},p=[{value:"VKPR loki install",id:"vkpr-loki-install",children:[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Values File Parameters",id:"values-file-parameters",children:[]},{value:"See Also",id:"see-also",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vkpr-loki-install"},"VKPR loki install"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Install Loki into cluster. For more information about Loki, click ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"here"),"."),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr loki install [flags]\n")),(0,o.kt)("p",null,"Non-interactive without setting values or using ",(0,o.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr loki install --default\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"  --default        Set all values with default.\n")),(0,o.kt)("h3",{id:"values-file-parameters"},"Values File Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr.yaml"',title:'"vkpr.yaml"'},"global:\n  loki:\n    metrics:            <Boolean>\n    helmArgs:           <Object>\n")),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About the Formula")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 2.5.0 ",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Application Version"),": v2.1.0 ",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/grafana/loki-stack"},"grafana/loki-stack")," ",(0,o.kt)("br",null)))),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/loki/vkpr_loki_remove"},"VKPR loki remove")," - Uninstall loki from the cluster.")))}u.isMDXComponent=!0}}]);