"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[5813],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return t?n.createElement(k,i(i({ref:a},c),{},{components:t})):n.createElement(k,i({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},121:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={sidebar_position:1,sidebar_label:"VKPR jaeger install",title:"VKPR jaeger install"},i="VKPR jaeger install",o={unversionedId:"commands/jaeger/install",id:"commands/jaeger/install",title:"VKPR jaeger install",description:"Description",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/jaeger/install.mdx",sourceDirName:"commands/jaeger",slug:"/commands/jaeger/install",permalink:"/pt/docs/commands/jaeger/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/jaeger/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR jaeger install",title:"VKPR jaeger install"},sidebar:"tutorialSidebar",previous:{title:"VKPR Init",permalink:"/pt/docs/commands/init"},next:{title:"VKPR jaeger remove",permalink:"/pt/docs/commands/jaeger/remove"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Arquivo de configura\xe7\xe3o",id:"arquivo-de-configura\xe7\xe3o",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Valores Env",id:"valores-env",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],c={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vkpr-jaeger-install"},"VKPR jaeger install"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Instala o Jaeger no cluster. Para mais informa\xe7\xf5es sobre o Jaeger, clique ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"aqui"),"."),(0,r.kt)("h2",{id:"comando"},"Comando"),(0,r.kt)("p",null,"Comando interativo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr jaeger install [flags]\n")),(0,r.kt)("p",null,"Comando n\xe3o interativo ou utilizando o ",(0,r.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr jaeger install --default\n")),(0,r.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  --default   Use para preencher automaticamente as entradas com valores padr\xf5es\n  --dry_run   Simula uma instala\xe7\xe3o\n  --domain    Define o endere\xe7o da aplica\xe7\xe3o\n  --secure    Utilizar HTTPS na aplica\xe7\xe3o\n  --ssl       Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio\n  --crt_file  Espec\xedfica o caminho do .crt do jaeger\n  --key_file  Espec\xedfica o caminho do .key do jaeger\n")),(0,r.kt)("h3",{id:"arquivo-de-configura\xe7\xe3o"},"Arquivo de configura\xe7\xe3o"),(0,r.kt)("h4",{id:"globals"},"Globals"),(0,r.kt)("p",null,"Os seguintes valores s\xe3o suportados pelo globals:\nValores v\xe1lidos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domain")," - (Obrigat\xf3rio) Define o endere\xe7o da aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secure")," - (Obrigat\xf3rio) Define que a aplica\xe7\xe3o ser\xe1 acessada externamente por HTTPS. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Opcional) Define qual o ingressController que ser\xe1 utilizado para expor a aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"nginx"),".")),(0,r.kt)("h4",{id:"local"},"Local"),(0,r.kt)("p",null,"Os seguintes valores s\xe3o suportados:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Habilita a instala\xe7\xe3o se realizada com o comando ",(0,r.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Opcional) Define qual o ingressController que ser\xe1 utilizado para expor a aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"persistence")," - (Opcional) Espec\xedfica se o dados da aplica\xe7\xe3o ser\xe1 guardado em volumes. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crt")," - Espec\xedfica o caminho do certificado."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - Espec\xedfica o caminho do chave."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secretName")," - (Opcional) Espec\xedfica uma secret TLS a qual conter\xe1 os valores do crt e key descritos."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Opcional) Op\xe7\xe3o utilizada para definir valores pr\xf3prios do chart n\xe3o suportados pelo comando.")),(0,r.kt)("admonition",{title:"Cuidado",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Utilizar o helmArgs pode fazer com que a aplica\xe7\xe3o n\xe3o se comporte como esperado ou ter valores sobrescritos definidos pelo VKPR.\nUse-o quando souber o que est\xe1 fazendo!")),(0,r.kt)("h3",{id:"valores-env"},"Valores Env"),(0,r.kt)("p",null,"As seguintes vari\xe1veis s\xe3o suportadas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_INGRESS_CLASS_NAME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_NAMESPACE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"persistence")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_PERSISTENCE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_METRICS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_SSL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_CERTIFICATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_KEY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_JAEGER_SSL_SECRET"))))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Sobre o comando",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Vers\xe3o do Chart"),": 0.56.5 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Vers\xe3o da aplica\xe7\xe3o"),": v1.30.0 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/jaegertracing/jaeger"},"jaegertracing/jaeger")," ",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/commands/jaeger/remove"},"VKPR jaeger remove")," - Desinstala o jaeger do cluster.")))}d.isMDXComponent=!0}}]);