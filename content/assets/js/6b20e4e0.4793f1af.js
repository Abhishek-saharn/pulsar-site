"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"client-libraries-go",title:"Pulsar Go client",sidebar_label:"Go client"},l=void 0,o={unversionedId:"client-libraries-go",id:"version-3.0.x/client-libraries-go",title:"Pulsar Go client",description:"You can use a Pulsar Go client to create Pulsar producers, consumers, and readers in Golang.",source:"@site/versioned_docs/version-3.0.x/client-libraries-go.md",sourceDirName:".",slug:"/client-libraries-go",permalink:"/docs/3.0.x/client-libraries-go",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/client-libraries-go.md",tags:[],version:"3.0.x",frontMatter:{id:"client-libraries-go",title:"Pulsar Go client",sidebar_label:"Go client"},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/3.0.x/client-libraries-cpp-use"},next:{title:"Set up",permalink:"/docs/3.0.x/client-libraries-go-setup"}},s={},c=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-go"},"Go client")," to create Pulsar producers, consumers, and readers in Golang."),(0,n.kt)("h2",{id:"get-started"},"Get started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-go-setup"},"Set up Go client library")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-go-initialize"},"Initialize a Go client")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-go-use"},"Use a Go client"))),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-clients"},"Work with clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-producers"},"Work with producers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-consumers"},"Work with consumers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-readers"},"Work with readers"))),(0,n.kt)("h2",{id:"reference-doc"},"Reference doc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar"},"Go client API docs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ClientOptions"},"Client configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ProducerOptions"},"Producer configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ConsumerOptions"},"Consumer configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ReaderOptions"},"Reader configurations")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///release-notes/client-go"},"Release notes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client feature matrix"))))}u.isMDXComponent=!0}}]);