"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:d,className:k}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,s.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,i.U)(),[N,w]=(0,n.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,a=x.indexOf(t),r=f[a].value;r!==N&&(O(t),w(r),null!=d&&y(d,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:P},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},56733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const l={id:"admin-api-features",title:"Pulsar admin interfaces - Features",sidebar_label:"Features"},o=void 0,s={unversionedId:"admin-api-features",id:"admin-api-features",title:"Pulsar admin interfaces - Features",description:"Below are the most common tasks you may want to do. For the exhaustive lists of tasks and the method to perform these tasks, see Tools.",source:"@site/docs/admin-api-features.md",sourceDirName:".",slug:"/admin-api-features",permalink:"/docs/next/admin-api-features",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/admin-api-features.md",tags:[],version:"current",frontMatter:{id:"admin-api-features",title:"Pulsar admin interfaces - Features",sidebar_label:"Features"},sidebar:"docsSidebar",previous:{title:"Use cases",permalink:"/docs/next/admin-api-use-cases"},next:{title:"Brokers",permalink:"/docs/next/admin-api-brokers"}},i={},u=[{value:"Related topics",id:"related-topics",level:3}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Below are the most common tasks you may want to do. For the exhaustive lists of tasks and the method to perform these tasks, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/admin-api-tools"},"Tools"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pulsar admin APIs - features",src:a(79918).Z,width:"878",height:"811"})),(0,n.kt)("p",null,"These administrative tasks are categorized based on Pulsar components."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Components"),(0,n.kt)("th",{parentName:"tr",align:null},"What do you want to do?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Server"),(0,n.kt)("td",{parentName:"tr",align:null},"Broker"),(0,n.kt)("td",{parentName:"tr",align:null},"Operations on brokers.",(0,n.kt)("br",null),(0,n.kt)("br",null),"For example, ",(0,n.kt)("br",null),"- Set dynamic configurations on brokers",(0,n.kt)("br",null)," - Run health checks against brokers",(0,n.kt)("br",null)," - Shutdown brokers",(0,n.kt)("br",null)," - Get broker-level stats metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Bookie"),(0,n.kt)("td",{parentName:"tr",align:null},"Operations on bookie placement policy. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"For example, ",(0,n.kt)("br",null)," - Get or set bookie replacement policy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Entities"),(0,n.kt)("td",{parentName:"tr",align:null},"- Topic ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Schema ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Namespace  ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Tenant ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Cluster"),(0,n.kt)("td",{parentName:"tr",align:null},"Operations on topics, schemas, namespaces, tenants, or clusters.",(0,n.kt)("br",null),(0,n.kt)("br",null)," For example, ",(0,n.kt)("br",null)," - Create, update or delete topics, tenants, namespaces, or clusters ",(0,n.kt)("br",null)," - Set isolation policies, configure offload thresholds, or set permissions for namespaces ",(0,n.kt)("br",null)," - Upload, extract, or delete schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Stream processing"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("br",null),(0,n.kt)("br",null)," - Function ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Connector ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Transaction ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Package"),(0,n.kt)("td",{parentName:"tr",align:null},"Operations on functions, function workers, or connectors. ",(0,n.kt)("br",null)," For example, ",(0,n.kt)("br",null)," - Create, update, and delete functions or connectors ",(0,n.kt)("br",null)," - Get stats of function workers, trigger rebalance of functions to workers ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Operations on transactions. ",(0,n.kt)("br",null)," For example, ",(0,n.kt)("br",null)," - Get stats of transactions ",(0,n.kt)("br",null)," - Update the scale of transaction coordinators ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Operations on packages. ",(0,n.kt)("br",null)," For example, ",(0,n.kt)("br",null)," - Upload, download, and delete packages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Others"),(0,n.kt)("td",{parentName:"tr",align:null},"- Proxy ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Resource groups ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Resource quotas"),(0,n.kt)("td",{parentName:"tr",align:null},"Operations on proxy stats. ",(0,n.kt)("br",null)," For example, ",(0,n.kt)("br",null)," - Get various monitoring metrics for proxy stats ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Operations on resource groups.",(0,n.kt)("br",null),"For example, ",(0,n.kt)("br",null)," - Create, update, and delete resource groups ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Operations on resource quotas.",(0,n.kt)("br",null),"For example, ",(0,n.kt)("br",null)," - Set resource quota for namespace bundles")))),(0,n.kt)("h3",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To understand the basics, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/admin-api-overview"},"Pulsar admin API - Overview"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To learn usage scenarios, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/admin-api-use-cases"},"Pulsar admin API - Use cases"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To perform administrative operations, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/admin-api-tools"},"Pulsar admin API - Tools"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To get up quickly, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/admin-api-get-started"},"Pulsar admin API - Get started"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To check the detailed usage, see the API references below."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.0.x/"},"Java admin API"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-rest-api-overview"},"REST API")))))))}c.isMDXComponent=!0},79918:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/admin-api-features-b87d54fb509db0ac389dfc00d9ea748d.svg"}}]);