"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:1},s="Getting started",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started",description:"Let's launch a local cluster using VKPR in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"VKPR Basics",permalink:"/docs/user-guide/basics"}},p=[{value:"VKPR quick install",id:"vkpr-quick-install",children:[]},{value:"Launch a new local cluster",id:"launch-a-new-local-cluster",children:[]},{value:"Deploy a sample app",id:"deploy-a-sample-app",children:[]},{value:"Discard cluster",id:"discard-cluster",children:[]},{value:"A brief explanation",id:"a-brief-explanation",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"Let's launch a local cluster using VKPR ",(0,l.kt)("strong",{parentName:"p"},"in less than 5 minutes"),". "),(0,l.kt)("p",null,"Note: you need ",(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," for this to work."),(0,l.kt)("h2",{id:"vkpr-quick-install"},"VKPR quick install"),(0,l.kt)("p",null,"You can use our ready-to-use install script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -fsSL https://get.vkpr.net/ | bash\nalias vkpr="rit vkpr"\n')),(0,l.kt)("p",null,"Optionally you can use VKPR internal tools by changing PATH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:~/.vkpr/bin\n")),(0,l.kt)("h2",{id:"launch-a-new-local-cluster"},"Launch a new local cluster"),(0,l.kt)("p",null,"You can now launch a local kubernetes cluster using the quickest shortcut:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vkpr infra up\n")),(0,l.kt)("p",null,"You can peek into it using ",(0,l.kt)("inlineCode",{parentName:"p"},"k9s"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"~/.vkpr/bin/k9s\n")),(0,l.kt)("h2",{id:"deploy-a-sample-app"},"Deploy a sample app"),(0,l.kt)("p",null,"You can deploy an ingress controller and a sample application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vkpr ingress install\nvkpr whoami install --default\n")),(0,l.kt)("p",null,"You can test this sample application with a simple ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," command (use the second form if ",(0,l.kt)("inlineCode",{parentName:"p"},"whoami.localhost")," does not resolve to ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl whoami.localhost:8000\n# OR \ncurl -H "Host: whoami.localhost" localhost:8000\n')),(0,l.kt)("h2",{id:"discard-cluster"},"Discard cluster"),(0,l.kt)("p",null,"You may discard the cluster with a simple command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vkpr infra down\n")),(0,l.kt)("h2",{id:"a-brief-explanation"},"A brief explanation"),(0,l.kt)("p",null,"Each of VKPR's CLI commands is called a formula (implemented using Ritchie)."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"vkpr infra up")," formula starts a local kubernetes cluster using ",(0,l.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"vkpr ingress install")," formula deploys an ingress controller, in this case exposed to localhost in ports 8000 (http) and 8001 (https)."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"vkpr whoami install")," formula deploys a sample application with a valid ingress configuration."))}d.isMDXComponent=!0}}]);