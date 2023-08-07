"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38084],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},52823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"concepts-broker-load-balancing-benefits",title:"Benefits",sidebar_label:"Benefits"},l=void 0,o={unversionedId:"concepts-broker-load-balancing-benefits",id:"concepts-broker-load-balancing-benefits",title:"Benefits",description:"The broker load balancer plays a key role in preventing downtime and lost productivity. It not only ensures efficient use of all resources, but it also optimizes cluster performance, reliability, and capacity with lower latency. It delivers a number of benefits, including but not limited to the following.",source:"@site/docs/concepts-broker-load-balancing-benefits.md",sourceDirName:".",slug:"/concepts-broker-load-balancing-benefits",permalink:"/docs/next/concepts-broker-load-balancing-benefits",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/concepts-broker-load-balancing-benefits.md",tags:[],version:"current",frontMatter:{id:"concepts-broker-load-balancing-benefits",title:"Benefits",sidebar_label:"Benefits"},sidebar:"docsSidebar",previous:{title:"Features",permalink:"/docs/next/concepts-broker-load-balancing-features"},next:{title:"Concepts",permalink:"/docs/next/concepts-broker-load-balancing-concepts"}},c={},s=[{value:"Efficiency",id:"efficiency",level:2},{value:"Performance",id:"performance",level:2},{value:"Availability",id:"availability",level:2},{value:"Scalability",id:"scalability",level:2},{value:"Related topics",id:"related-topics",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The broker load balancer plays a key role in preventing downtime and lost productivity. It not only ensures efficient use of all resources, but it also optimizes cluster performance, reliability, and capacity with lower latency. It delivers a number of benefits, including but not limited to the following."),(0,r.kt)("h2",{id:"efficiency"},"Efficiency"),(0,r.kt)("p",null,"It efficiently distributes the load to maximize broker resources since it allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reduce idle brokers and save cluster resources.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Distribute data loads evenly and efficiently.  "))),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"It improves performance since it allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reduce hot spots and maintain message pub/sub latency.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minimize the likelihood of Pulsar cluster downtime, scale clusters to meet constantly data-changing needs, and ensure that no broker is overworked. Without it, Pulsar clusters would likely have performance degradation (e.g., slow down, drop requests, or even fail) when topics are suddenly overloaded. "))),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"It increases the availability and fault tolerance since it allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minimize topic unavailable time by shifting pub/sub sessions from unavailable brokers to available brokers. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Perform cluster maintenance without causing service disruption since pub/sub connections get rerouted to other brokers during maintenance."))),(0,r.kt)("h2",{id:"scalability"},"Scalability"),(0,r.kt)("p",null,"It helps seamlessly scale up or down broker clusters since it allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unload topic loads automatically to new brokers when scaling up.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Detect orphan topics and automatically and reassign them to available brokers when scaling down."))),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To get a comprehensive understanding and discover the key insights, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-overview"},"Broker load balancing | Overview"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To discover different usage scenarios, see ",(0,r.kt)("a",{parentName:"p",href:"./concepts-broker-load-balancing-use-cases.md"},"Broker load balancing | Use cases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To explore functionalities, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-features"},"Broker load balancing | Features"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn essential fundamentals, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-concepts"},"Broker load balancing | Concepts"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To review various versions of broker load balancers, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-types"},"Broker load balancing | Types"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To get up quickly, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-quick-start"},"Broker load balancing | Quick start"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To migrate one broker load balancer type to another, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-migration"},"Broker load balancing | Migration"),"."))))}d.isMDXComponent=!0}}]);