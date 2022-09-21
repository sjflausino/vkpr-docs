"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:2,sidebar_label:"VKPR aws rds snapshot",title:"VKPR aws rds snapshot"},o="VKPR aws rds snapshot",i={unversionedId:"commands/aws/rds/snapshot",id:"commands/aws/rds/snapshot",title:"VKPR aws rds snapshot",description:"Description",source:"@site/docs/commands/aws/rds/snapshot.mdx",sourceDirName:"commands/aws/rds",slug:"/commands/aws/rds/snapshot",permalink:"/docs/commands/aws/rds/snapshot",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/aws/rds/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR aws rds snapshot",title:"VKPR aws rds snapshot"},sidebar:"tutorialSidebar",previous:{title:"VKPR aws rds init",permalink:"/docs/commands/aws/rds/init"},next:{title:"VKPR aws rds destroy",permalink:"/docs/commands/aws/rds/destroy"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"Setting Provider credentials",id:"setting-provider-credentials",level:2},{value:"AWS",id:"aws",level:3},{value:"See Also",id:"see-also",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-aws-rds-snapshot"},"VKPR aws rds snapshot"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Create a snapshot from a RDS database."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"Interactive inputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws rds snapshot [flags]\n")),(0,a.kt)("p",null,"Non-interactive without setting values or using ",(0,a.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws rds snapshot --default\n")),(0,a.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,a.kt)("h3",{id:"flags"},"Flags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"  --default         Use to automatically fill inputs with default value provided on config.json\n  --instance_name   Specifies the RDS instance name to create SNAPSHOT.\n")),(0,a.kt)("h2",{id:"setting-provider-credentials"},"Setting Provider credentials"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CAUTION: Setting credentials manually will override the credentials already saved in memory")),(0,a.kt)("h3",{id:"aws"},"AWS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="aws" --fields="accesskeyid,secretaccesskey,region" --values="your-accesskey,your-secretaccess,your-region"\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/aws/rds/destroy"},"VKPR aws rds destroy")," - Execute the pipeline to destroy the rds Cluster.")))}p.isMDXComponent=!0}}]);