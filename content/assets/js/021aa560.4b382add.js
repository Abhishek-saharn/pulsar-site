"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[24888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(h,o(o({ref:t},l),{},{components:a})):r.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={Id:"tutorials-topic",title:"How to create a topic",sidebar_label:"Create a topic"},o=void 0,s={unversionedId:"tutorials-topic",id:"version-3.0.x/tutorials-topic",title:"How to create a topic",description:"Apache Pulsar is a distributed messaging system that supports high performance and low latency. Topics are the primary way to structure data in Apache Pulsar. A Pulsar topic is a unit of storage that organizes messages into a stream. Each message in a topic has an offset, which uniquely identifies the message within the topic.",source:"@site/versioned_docs/version-3.0.x/tutorials-topic.md",sourceDirName:".",slug:"/tutorials-topic",permalink:"/docs/3.0.x/tutorials-topic",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/tutorials-topic.md",tags:[],version:"3.0.x",frontMatter:{Id:"tutorials-topic",title:"How to create a topic",sidebar_label:"Create a topic"},sidebar:"docsSidebar",previous:{title:"Create a namespace",permalink:"/docs/3.0.x/tutorials-namespace"},next:{title:"Produce and consume messages",permalink:"/docs/3.0.x/tutorials-produce-consume"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a topic",id:"create-a-topic",level:2},{value:"Related Topics",id:"related-topics",level:4}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Pulsar is a distributed messaging system that supports high performance and low latency. Topics are the primary way to structure data in Apache Pulsar. A Pulsar topic is a unit of storage that organizes messages into a stream. Each message in a topic has an offset, which uniquely identifies the message within the topic. "),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/3.0.x/admin-api-topics#publish-to-partitioned-topics"},"Publish to partitioned topics")),(0,i.kt)("h2",{id:"create-a-topic"},"Create a topic"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"test-topic")," with 4 partitions in the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"apache/pulsar"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics create-partitioned-topic apache/pulsar/test-topic -p 4\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"List all the partitioned topics in the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"apache/pulsar"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics list-partitioned-topics apache/pulsar\n")))),(0,i.kt)("h4",{id:"related-topics"},"Related Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.0.x/tutorials-tenant"},"Set up a tenant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.0.x/tutorials-namespace"},"Create a namespace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.0.x/tutorials-produce-consume"},"Produce and consume messages"))))}u.isMDXComponent=!0}}]);