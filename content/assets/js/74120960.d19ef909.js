"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[43567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"functions-deploy",title:"Deploy Pulsar Functions",sidebar_label:"How to deploy"},i=void 0,l={unversionedId:"functions-deploy",id:"version-3.0.x/functions-deploy",title:"Deploy Pulsar Functions",description:"Pulsar provides two modes to deploy a function:",source:"@site/versioned_docs/version-3.0.x/functions-deploy.md",sourceDirName:".",slug:"/functions-deploy",permalink:"/docs/3.0.x/functions-deploy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-deploy.md",tags:[],version:"3.0.x",frontMatter:{id:"functions-deploy",title:"Deploy Pulsar Functions",sidebar_label:"How to deploy"},sidebar:"docsSidebar",previous:{title:"Customize Java runtime options",permalink:"/docs/3.0.x/functions-runtime-java-options"},next:{title:"Default arguments of CLI",permalink:"/docs/3.0.x/functions-deploy-arguments"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar provides two modes to deploy a function:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3.0.x/functions-deploy-cluster"},"cluster mode (for production)")," - you can submit a function to a Pulsar cluster and the cluster will take charge of running the function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3.0.x/functions-deploy-localrun"},"localrun mode")," - you can determine where a function runs, for example, on your local machine.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before deploying a function, you need to have a Pulsar cluster running first. You have the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run a ",(0,o.kt)("a",{parentName:"li",href:"/docs/3.0.x/getting-started-standalone"},"standalone cluster")," locally on your own machine."),(0,o.kt)("li",{parentName:"ul"},"Run a Pulsar cluster on ",(0,o.kt)("a",{parentName:"li",href:"/docs/3.0.x/deploy-kubernetes"},"Kubernetes"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/3.0.x/deploy-aws"},"Amazon Web Services"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/3.0.x/deploy-bare-metal"},"bare metal"),", and so on.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you want to deploy user-defined functions in Python, you need to install the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0.x/client-libraries-python"},"python client")," on all the machines running ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0.x/functions-concepts#function-worker"},"function workers"),".")))}p.isMDXComponent=!0}}]);