"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=o,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),o=r(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),o=r(67294),a=r(86010),i=r(72389),s=r(67392),l=r(7094),u=r(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:i,values:d,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=d??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(m,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!m.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,l.U)(),[N,T]=(0,o.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&m.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,r=S.indexOf(t),n=m[r].value;n!==N&&(x(t),T(n),null!=h&&v(h,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;t=S[r]??S[0];break}case"ArrowLeft":{const r=S.indexOf(e.currentTarget)-1;t=S[r]??S[S.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},g)},m.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:I,onClick:w},i,{className:(0,a.Z)("tabs__item",c,i?.className,{"tabs__item--active":N===t})}),r??t)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,i.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},12545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(65488),i=r(85162);const s={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing"},l=void 0,u={unversionedId:"concepts-proxy-sni-routing",id:"version-3.0.x/concepts-proxy-sni-routing",title:"Proxy support with SNI routing",description:'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.',source:"@site/versioned_docs/version-3.0.x/concepts-proxy-sni-routing.md",sourceDirName:".",slug:"/concepts-proxy-sni-routing",permalink:"/docs/3.0.x/concepts-proxy-sni-routing",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/concepts-proxy-sni-routing.md",tags:[],version:"3.0.x",frontMatter:{id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing"},sidebar:"docsSidebar",previous:{title:"Message throttling",permalink:"/docs/3.0.x/concepts-throttling"},next:{title:"Multiple advertised listeners",permalink:"/docs/3.0.x/concepts-multiple-advertised-listeners"}},p={},c=[{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",level:2},{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",level:3},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",level:3},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",level:3}],d={toc:c};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'),(0,o.kt)("p",null,"The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,o.kt)("strong",{parentName:"p"},"SNI routing"),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."),(0,o.kt)("p",null,"Pulsar clients (Java, C++, Python) support ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing"},"SNI routing protocol"),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."),(0,o.kt)("h2",{id:"ats-sni-routing-in-pulsar"},"ATS-SNI Routing in Pulsar"),(0,o.kt)("p",null,"To support ",(0,o.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html"},"layer-4 SNI routing")," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."),(0,o.kt)("p",null,"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."),(0,o.kt)("p",null,"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection."),(0,o.kt)("h3",{id:"set-up-ats-proxy-for-layer-4-sni-routing"},"Set up ATS Proxy for layer-4 SNI routing"),(0,o.kt)("p",null,"To support layer 4 SNI routing, you need to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"records.conf")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl_server_name.conf")," files."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pulsar client SNI",src:r(53719).Z,width:"1518",height:"974"})),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html"},"records.config")," file is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/trafficserver/")," directory by default. The file lists configurable variables used by the ATS."),(0,o.kt)("p",null,"To configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"records.config")," files, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update TLS port (",(0,o.kt)("inlineCode",{parentName:"li"},"http.server_ports"),") on which proxy listens, and update proxy certs (",(0,o.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.path")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.filename"),") to secure TLS tunneling."),(0,o.kt)("li",{parentName:"ol"},"Configure server ports (",(0,o.kt)("inlineCode",{parentName:"li"},"http.connect_ports"),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,o.kt)("inlineCode",{parentName:"li"},"4443")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"6651")," ports, add the brokers service port in the ",(0,o.kt)("inlineCode",{parentName:"li"},"http.connect_ports")," configuration.")),(0,o.kt)("p",null,"The following is an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl_server_name")," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,o.kt)("inlineCode",{parentName:"p"},"fqdn"),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values."),(0,o.kt)("p",null,"The following example shows the mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where requests should be redirected. For example, if the client sends the SNI header ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker1"),", the proxy creates a TLS tunnel by redirecting the request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker1:6651")," service URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"server_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n")),(0,o.kt)("p",null,"After you configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl_server_name.config")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"records.config")," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."),(0,o.kt)("h3",{id:"configure-pulsar-client-with-sni-routing"},"Configure Pulsar-client with SNI routing"),(0,o.kt)("p",null,"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."),(0,o.kt)(a.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String brokerServiceUrl = "pulsar+ssl://pulsar-broker-vip:6651/";\nString proxyUrl = "pulsar+ssl://ats-proxy:443";\nClientBuilder clientBuilder = PulsarClient.builder()\n        .serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n'))),(0,o.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'ClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://ats-proxy:443", config);\n'))),(0,o.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://ats-proxy:443",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n')))),(0,o.kt)("h3",{id:"pulsar-geo-replication-with-sni-routing"},"Pulsar geo-replication with SNI routing"),(0,o.kt)("p",null,"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pulsar client SNI",src:r(41373).Z,width:"1494",height:"598"})),(0,o.kt)("p",null,"In this example, a Pulsar cluster is deployed into two separate regions, ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east"),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy."),(0,o.kt)("p",null,"(a) Configure the cluster metadata for ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east")," broker service URL and ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east")," ATS proxy URL with SNI proxy-protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./pulsar-admin clusters update \\\n    --broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n    --url http://east-broker-vip:8080 \\\n    --proxy-protocol SNI \\\n    --proxy-url pulsar+ssl://east-ats-proxy:443\n")),(0,o.kt)("p",null,"(b) Configure the cluster metadata for ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," broker service URL and ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," ATS proxy URL with SNI proxy-protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./pulsar-admin clusters update \\\n    --broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n    --url http://west-broker-vip:8080 \\\n    --proxy-protocol SNI \\\n    --proxy-url pulsar+ssl://west-ats-proxy:443\n")))}h.isMDXComponent=!0},53719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},41373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"}}]);