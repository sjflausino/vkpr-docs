"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[1112],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=p(e.components);return n.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?n.createElement(k,i(i({ref:o},c),{},{components:t})):n.createElement(k,i({ref:o},c))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1178:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const r={sidebar_position:2,sidebar_label:"Okteto",title:"Okteto",slug:"/provisioning/dev/cloud/okteto"},i=void 0,s={unversionedId:"provisioning-guide/cloud-dev/okteto",id:"provisioning-guide/cloud-dev/okteto",title:"Okteto",description:"Instalando Kong no Okteto com VKPR",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/provisioning-guide/cloud-dev/okteto.md",sourceDirName:"provisioning-guide/cloud-dev",slug:"/provisioning/dev/cloud/okteto",permalink:"/pt/docs/provisioning/dev/cloud/okteto",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/provisioning-guide/cloud-dev/okteto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Okteto",title:"Okteto",slug:"/provisioning/dev/cloud/okteto"},sidebar:"tutorialSidebar",previous:{title:"AWS EKS",permalink:"/pt/docs/provisioning/dev/cloud/aws"},next:{title:"Ingress",permalink:"/pt/docs/category/ingress"}},l={},p=[{value:"Instalando Kong no Okteto com VKPR",id:"instalando-kong-no-okteto-com-vkpr",level:2},{value:"Usando o contexto do Okteto",id:"usando-o-contexto-do-okteto",level:3},{value:"Instalando Kong",id:"instalando-kong",level:3}],c={toc:p};function d(e){let{components:o,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instalando-kong-no-okteto-com-vkpr"},"Instalando Kong no Okteto com VKPR"),(0,a.kt)("p",null,"O VKPR tamb\xe9m possui um ambiente de desenvolvimento em nuvem para teste de provisionamento, esse ambiente \xe9 o ",(0,a.kt)("a",{parentName:"p",href:"https://www.okteto.com/"},"Okteto"),". "),(0,a.kt)("p",null,"O Okteto \xe9 um projeto de c\xf3digo aberto que fornece uma experi\xeancia de desenvolvimento em nuvem para aplica\xe7\xf5es em execu\xe7\xe3o no Kubernetes de forma gratuita. O VKPR usa o Okteto para mudar o contexto kubernetes local para o contexto do Cloud Okteto e assim simular o provisionamento em n\xfavem. O Okteto possui algumas restri\xe7\xf5es em seu uso e por essa raz\xe3o n\xe3o \xe9 recomendado o seu uso em produ\xe7\xe3o."),(0,a.kt)("h3",{id:"usando-o-contexto-do-okteto"},"Usando o contexto do Okteto"),(0,a.kt)("p",null,"Precisaremos mudar nosso provider padr\xe3o para o Okteto, para isso insira no ",(0,a.kt)("inlineCode",{parentName:"p"},"vkpr.yaml")," o provider okteto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# vkpr.yaml\n---\nglobal:\n  provider: okteto\n")),(0,a.kt)("p",null,"Para para conseguirmos fazer a instala\xe7\xe3o do Kong na namespace do contexto do Okteto, executaremos o ",(0,a.kt)("inlineCode",{parentName:"p"},"vkpr okteto init"),", esse comando ser\xe1 respons\xe1vel pela mudan\xe7a de contexto e namespace de nosso kubectl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ vkpr okteto init\nFormula was successfully built!\n \u2713  Using context your-namespace @ cloud.okteto.com\n \u2713  Namespace 'your-namespace' selected\n \u2713  Using context your-namespace @ cloud.okteto.com\n \u2713  Updated kubernetes context 'cloud_okteto_com/your-namespace' in '[/home/user/.kube/config]'\n")),(0,a.kt)("h3",{id:"instalando-kong"},"Instalando Kong"),(0,a.kt)("p",null,"Para efetuar a instala\xe7\xe3o da API Gatway ",(0,a.kt)("inlineCode",{parentName:"p"},"Kong")," utilizaremos o ",(0,a.kt)("inlineCode",{parentName:"p"},"vkpr kong install"),", a execu\xe7\xe3o deste comando iniciar\xe1 a \xe1rvore de decis\xf5es que nos questionar\xe1 sobre algumas especifica\xe7\xf5es, para instalar o Kong no okteto cloud precisaremos utilizar o dom\xednio ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud.okteto.net")," tal como no exemplo abaixo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vkpr kong install\nFormula was successfully built!\n? Type the Kong domain:  cloud.okteto.net\n? Secure ?  false\n? Kong Mode: (Hybrid only available in Kong Enterprise)  standard\n? Type the full path to the license:  (empty for free mode)\n? Type the RBAC Admin Password. Has no effect on hybrid data plane installations:  vkpr123\n? HA ?  false\n? Dry-run ?  false\n")),(0,a.kt)("admonition",{title:"Tip",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Voc\xea tamb\xe9m pode utilizar a flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--default"))),(0,a.kt)("p",null,"Os seguintes endpoints ser\xe3o gerados no Okteto Cloud:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://kong-kong-admin-your-namespace.cloud.okteto.net/\nhttps://kong-kong-manager-your-namespace.cloud.okteto.net/\nhttps://kong-kong-portal-your-namespacecloud.okteto.net/\nhttps://kong-kong-portalapi-your-namespace.cloud.okteto.net/\nhttps://kong-kong-proxy-your-namespace.cloud.okteto.net/\n")),(0,a.kt)("p",null,"Voc\xea pode consultar esses endpoints visitando o ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.okteto.com/"},"Cloud Okteto!")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Okteto Cloud UI",src:t(1294).Z,width:"1921",height:"877"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," Para saber mais sobre a instala\xe7\xe3o do Kong, clique ",(0,a.kt)("a",{parentName:"p",href:"/docs/commands/kong/install"},"aqui"),".")))}d.isMDXComponent=!0},1294:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/okteto-56d7e50bdf4a850cc29a82b0cf766b6d.png"}}]);