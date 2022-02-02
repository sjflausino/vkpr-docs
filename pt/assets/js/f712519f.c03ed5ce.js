"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4572],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2133:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={sidebar_position:2,version:"v1.0.20"},l="VKPR aws eks tfc",c={unversionedId:"commands/aws/eks/vkpr_aws_eks_tfc",id:"commands/aws/eks/vkpr_aws_eks_tfc",isDocsHomePage:!1,title:"VKPR aws eks tfc",description:"Description",source:"@site/docs/commands/aws/eks/vkpr_aws_eks_tfc.mdx",sourceDirName:"commands/aws/eks",slug:"/commands/aws/eks/vkpr_aws_eks_tfc",permalink:"/pt/docs/commands/aws/eks/vkpr_aws_eks_tfc",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/aws/eks/vkpr_aws_eks_tfc.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR aws eks init",permalink:"/pt/docs/commands/aws/eks/vkpr_aws_eks_init"},next:{title:"VKPR aws eks deploy",permalink:"/pt/docs/commands/aws/eks/vkpr_aws_eks_deploy"}},p=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Setting Credentials manually",id:"setting-credentials-manually",children:[]},{value:"Values File Parameters",id:"values-file-parameters",children:[]},{value:"See Also",id:"see-also",children:[]}]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"vkpr-aws-eks-tfc"},"VKPR aws eks tfc"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Fork and setup the ",(0,s.kt)("a",{parentName:"p",href:"https://gitlab.com/vkpr/aws-eks"},"GitOps Repo")," in your Gitlab, using Terraform Cloud as Backend to save the Terraform state."),(0,s.kt)("h2",{id:"commands"},"Commands"),(0,s.kt)("p",null,"Interactive inputs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws eks tfc [flags]\n")),(0,s.kt)("p",null,"Non-interactive without setting values or using ",(0,s.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws eks tfc --default\n")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"  --default                         Set all values with default\n  --terraformcloud_api_token        Specifies your Terraform Cloud Token\n  --terraformcloud_email            Specifies your Terraform Cloud Email\n")),(0,s.kt)("h3",{id:"setting-credentials-manually"},"Setting Credentials manually"),(0,s.kt)("h4",{id:"terraform-cloud"},"Terraform Cloud"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="terraformcloud" --fields="token,email" --values="your-token,your-email"\n')),(0,s.kt)("h3",{id:"values-file-parameters"},"Values File Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr.yaml"',title:'"vkpr.yaml"'},"global:\n  aws:                  <Object>\n    eks:\n      clusterName:      <String>\n      version:          <String>\n      nodes:\n        instaceType:    <String>\n        quantitySize:   <Integer>\n        capacityType:   <String>\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"see-also"},"See Also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/aws/eks/vkpr_aws_eks_deploy"},"VKPR aws eks deploy")," - Execute the pipeline to deploy the EKS Cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/aws/eks/vkpr_aws_eks_destroy"},"VKPR aws eks destroy")," - Execute the pipeline to destroy the EKS Cluster.")))}m.isMDXComponent=!0}}]);