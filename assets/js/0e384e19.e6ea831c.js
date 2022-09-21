"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,sidebar_label:"Getting started",title:"Getting started",slug:"/intro"},i="Getting started",o={unversionedId:"intro",id:"intro",title:"Getting started",description:"Let's launch a local cluster using VKPR in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting started",title:"Getting started",slug:"/intro"},sidebar:"tutorialSidebar",next:{title:"Basics",permalink:"/docs/basics"}},s={},p=[{value:"Get VKPR",id:"get-vkpr",level:2},{value:"Usage",id:"usage",level:2},{value:"Create a cluster",id:"create-a-cluster",level:3},{value:"Deploy a sample app",id:"deploy-a-sample-app",level:3},{value:"Discard cluster",id:"discard-cluster",level:3},{value:"A brief explanation",id:"a-brief-explanation",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Let's launch a local cluster using VKPR ",(0,r.kt)("strong",{parentName:"p"},"in less than 5 minutes"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Note"),": You need ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," installed for this to work."),(0,r.kt)("h2",{id:"get-vkpr"},"Get VKPR"),(0,r.kt)("p",null,"The VKPR CLI tool will do its best to hide its internals (including Ritchie)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Install the VKPR\ncurl -fsSL https://get.vkpr.net/ | bash\n# Create alias\nalias vkpr="rit vkpr"\n')),(0,r.kt)("admonition",{title:"Info",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Optionally you can use VKPR internal tools by changing PATH:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:~/.vkpr/bin\n"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Try yourself to use VKPR following the next steps:"),(0,r.kt)("h3",{id:"create-a-cluster"},"Create a cluster"),(0,r.kt)("p",null,"After installing VKPR, you may be creating the Kubernetes Cluster in your environment for testing as a production environment."),(0,r.kt)("p",null,"To do that, you can run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vkpr infra up\n")),(0,r.kt)("h3",{id:"deploy-a-sample-app"},"Deploy a sample app"),(0,r.kt)("p",null,"To test some application using VKPR, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"whoami")," as an example."),(0,r.kt)("p",null,"For this, we will implement an ingress controller and the whoami itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vkpr ingress install --default\nvkpr whoami install --default\n")),(0,r.kt)("p",null,"Now you can test this sample application with a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl whoami.localhost:8000\n# OR \ncurl -H "Host: whoami.localhost" localhost:8000\n')),(0,r.kt)("admonition",{title:"Warn",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use the second form if ",(0,r.kt)("inlineCode",{parentName:"p"},"whoami.localhost")," does not resolve to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),".")),(0,r.kt)("h3",{id:"discard-cluster"},"Discard cluster"),(0,r.kt)("p",null,"After all tests, if you want to destroy the created cluster, you may discard his with a single command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vkpr infra down\n")),(0,r.kt)("h2",{id:"a-brief-explanation"},"A brief explanation"),(0,r.kt)("p",null,"Each of VKPR's CLI commands is called a formula (implemented using Ritchie)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vkpr infra up")," formula starts a local kubernetes cluster using ",(0,r.kt)("a",{parentName:"li",href:"https://k3d.io/"},"k3d"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vkpr ingress install")," formula deploys an ingress controller nginx, in this case exposed to localhost in ports 8000 (http) and 8001 (https)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vkpr whoami install")," formula deploys a sample application with a valid ingress configuration.")))}u.isMDXComponent=!0}}]);