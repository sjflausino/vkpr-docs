"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3070],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3375:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:1,version:"v1.0.20"},c="VKPR aws eks tfc",l={unversionedId:"commands/aws/rds/init",id:"commands/aws/rds/init",isDocsHomePage:!1,title:"VKPR aws eks tfc",description:"Description",source:"@site/docs/commands/aws/rds/init.mdx",sourceDirName:"commands/aws/rds",slug:"/commands/aws/rds/init",permalink:"/docs/commands/aws/rds/init",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/aws/rds/init.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR aws eks destroy",permalink:"/docs/commands/aws/eks/destroy"},next:{title:"VKPR aws eks tfc",permalink:"/docs/commands/aws/rds/snapshot"}},d=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Setting Provider credentials",id:"setting-provider-credentials",children:[]}]},{value:"See Also",id:"see-also",children:[]}],u={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-aws-eks-tfc"},"VKPR aws eks tfc"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Fork and setup the ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/vkpr/aws-eks"},"GitOps Repo")," in your Gitlab, using Terraform Cloud as Backend to save the Terraform state."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws eks tfc [flags]\n")),(0,o.kt)("p",null,"Non-interactive without setting values or using ",(0,o.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws eks tfc --default\n")),(0,o.kt)("h3",{id:"setting-provider-credentials"},"Setting Provider credentials"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CAUTION: Setting credentials manually will override the credentials already saved in memory")),(0,o.kt)("h4",{id:"terraform-cloud"},"Terraform Cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="terraformcloud" --fields="token,email" --values="your-token,your-email"\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/aws/eks/deploy"},"VKPR aws eks deploy")," - Execute the pipeline to deploy the EKS Cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/aws/eks/destroy"},"VKPR aws eks destroy")," - Execute the pipeline to destroy the EKS Cluster.")))}p.isMDXComponent=!0}}]);