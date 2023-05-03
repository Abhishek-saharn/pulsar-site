"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[72817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),i=a(67294),r=a(86010),l=a(72389),o=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function h(e){const{lazy:t,block:a,defaultValue:l,values:h,groupId:d,className:m}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[N,C]=(0,i.useState)(b),A=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==N&&v.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,a=A.indexOf(t),n=v[a].value;n!==N&&(O(t),C(n),null!=d&&y(d,String(n)))},_=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;t=A[a]??A[0];break}case"ArrowLeft":{const a=A.indexOf(e.currentTarget)-1;t=A[a]??A[A.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>A.push(e),onKeyDown:_,onClick:T},l,{className:(0,r.Z)("tabs__item",p,l?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,i.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return i.createElement(h,(0,n.Z)({key:String(t)},e))}},37638:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(65488),l=a(85162);const o={id:"security-oauth2",title:"Authentication using OAuth 2.0 access tokens",sidebar_label:"Authentication using OAuth 2.0 access tokens"},s=void 0,u={unversionedId:"security-oauth2",id:"version-3.0.x/security-oauth2",title:"Authentication using OAuth 2.0 access tokens",description:'Pulsar supports authenticating clients using OAuth 2.0 access tokens. Using an access token obtained from an OAuth 2.0 authorization service (acts as a token issuer), you can identify a Pulsar client and associate it with a "principal" (or "role") that is permitted to do some actions, such as publishing messages to a topic or consuming messages from a topic.',source:"@site/versioned_docs/version-3.0.x/security-oauth2.md",sourceDirName:".",slug:"/security-oauth2",permalink:"/docs/3.0.x/security-oauth2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-oauth2.md",tags:[],version:"3.0.x",frontMatter:{id:"security-oauth2",title:"Authentication using OAuth 2.0 access tokens",sidebar_label:"Authentication using OAuth 2.0 access tokens"},sidebar:"docsSidebar",previous:{title:"Authentication using Kerberos",permalink:"/docs/3.0.x/security-kerberos"},next:{title:"Authentication using HTTP basic",permalink:"/docs/3.0.x/security-basic-auth"}},c={},p=[{value:"Enable OAuth2 authentication on brokers/proxies",id:"enable-oauth2-authentication-on-brokersproxies",level:2},{value:"Configure OAuth2 authentication in Pulsar clients",id:"configure-oauth2-authentication-in-pulsar-clients",level:2},{value:"Configure OAuth2 authentication in CLI tools",id:"configure-oauth2-authentication-in-cli-tools",level:2},{value:"Authentication types",id:"authentication-types",level:4}],h={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Pulsar supports authenticating clients using OAuth 2.0 access tokens. Using an access token obtained from an OAuth 2.0 authorization service (acts as a token issuer), you can identify a Pulsar client and associate it with a "principal" (or "role") that is permitted to do some actions, such as publishing messages to a topic or consuming messages from a topic.'),(0,i.kt)("p",null,"After communicating with the OAuth 2.0 server, the Pulsar client gets an access token from the server and passes this access token to brokers for authentication. By default, brokers can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProviderToken"),". Alternatively, you can customize the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationProvider"),"."),(0,i.kt)("h2",{id:"enable-oauth2-authentication-on-brokersproxies"},"Enable OAuth2 authentication on brokers/proxies"),(0,i.kt)("p",null,"To configure brokers/proxies to authenticate clients using OAuth2, add the following parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2\nbrokerClientAuthenticationParameters={"privateKey":"file:///path/to/privateKey","audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/","issuerUrl":"https://dev-kt-aa9ne.us.auth0.com"}\n# brokerClientAuthenticationParameters={"privateKey":"data:application/json;base64,privateKey-body-to-base64","audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/","issuerUrl":"https://dev-kt-aa9ne.us.auth0.com"}\n\n# If using secret key (Note: key files must be DER-encoded)\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private (Note: key files must be DER-encoded)\n# tokenPublicKey=file:///path/to/public.key\n')),(0,i.kt)("h2",{id:"configure-oauth2-authentication-in-pulsar-clients"},"Configure OAuth2 authentication in Pulsar clients"),(0,i.kt)("p",null,"You can use the OAuth2 authentication provider with the following Pulsar clients."),(0,i.kt)(r.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.impl.auth.oauth2.AuthenticationFactoryOAuth2;\n\nURL issuerUrl = new URL("https://dev-kt-aa9ne.us.auth0.com");\nURL credentialsUrl = new URL("file:///path/to/KeyFile.json");\nString audience = "https://dev-kt-aa9ne.us.auth0.com/api/v2/";\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactoryOAuth2.clientCredentials(issuerUrl, credentialsUrl, audience))\n    .build();\n')),(0,i.kt)("p",null,"In addition, you can also use the encoded parameters to configure authentication for Pulsar Java client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Authentication auth = AuthenticationFactory\n    .create(AuthenticationOAuth2.class.getName(), "{"type":"client_credentials","privateKey":"./key/path/..","issuerUrl":"...","audience":"..."}");\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(auth)\n    .build();\n'))),(0,i.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, AuthenticationOauth2\n\nparams = \'\'\'\n{\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "/path/to/privateKey",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"\n}\n\'\'\'\n\nclient = Client("pulsar://my-cluster:6650", authentication=AuthenticationOauth2(params))\n'))),(0,i.kt)(l.Z,{value:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nstd::string params = R"({\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "../../pulsar-broker/src/test/resources/authentication/token/cpp_credentials_file.json",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"})";\n\nconfig.setAuth(pulsar::AuthOauth2::create(params));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n'))),(0,i.kt)(l.Z,{value:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    const Pulsar = require('pulsar-client');\n    const issuer_url = process.env.ISSUER_URL;\n    const private_key = process.env.PRIVATE_KEY;\n    const audience = process.env.AUDIENCE;\n    const scope = process.env.SCOPE;\n    const service_url = process.env.SERVICE_URL;\n    const client_id = process.env.CLIENT_ID;\n    const client_secret = process.env.CLIENT_SECRET;\n    (async () => {\n      const params = {\n        issuer_url: issuer_url\n      }\n      if (private_key.length > 0) {\n        params['private_key'] = private_key\n      } else {\n        params['client_id'] = client_id\n        params['client_secret'] = client_secret\n      }\n      if (audience.length > 0) {\n        params['audience'] = audience\n      }\n      if (scope.length > 0) {\n        params['scope'] = scope\n      }\n      const auth = new Pulsar.AuthenticationOauth2(params);\n      // Create a client\n      const client = new Pulsar.Client({\n        serviceUrl: service_url,\n        tlsAllowInsecureConnection: true,\n        authentication: auth,\n      });\n      await client.close();\n    })();\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The support for OAuth2 authentication is only available in Node.js client 1.6.2 and later versions."))),(0,i.kt)(l.Z,{value:"Go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'oauth := pulsar.NewAuthenticationOAuth2(map[string]string{\n        "type":       "client_credentials",\n        "issuerUrl":  "https://dev-kt-aa9ne.us.auth0.com",\n        "audience":   "https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n        "privateKey": "/path/to/privateKey",\n        "clientId":   "0Xx...Yyxeny",\n    })\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL:              "pulsar://my-cluster:6650",\n        Authentication:   oauth,\n})\n')))),(0,i.kt)("h2",{id:"configure-oauth2-authentication-in-cli-tools"},"Configure OAuth2 authentication in CLI tools"),(0,i.kt)("p",null,"This section describes how to use Pulsar CLI tools to connect a cluster through OAuth2 authentication plugin."),(0,i.kt)(r.Z,{groupId:"lang-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"pulsar-client",value:"pulsar-client"},{label:"pulsar-perf",value:"pulsar-perf"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-admin --admin-url https://streamnative.cloud:443 \\\n    --auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n    --auth-params \'{"privateKey":"file:///path/to/key/file.json",\n        "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n        "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n    tenants list\n'))),(0,i.kt)(l.Z,{value:"pulsar-client",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-client \\\n    --url SERVICE_URL \\\n    --auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n    --auth-params \'{"privateKey":"file:///path/to/key/file.json",\n        "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n        "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n    produce test-topic -m "test-message" -n 10\n'))),(0,i.kt)(l.Z,{value:"pulsar-perf",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-perf produce --service-url pulsar+ssl://streamnative.cloud:6651 \\\n    --auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n    --auth-params \'{"privateKey":"file:///path/to/key/file.json",\n        "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n        "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n    -r 1000 -s 1024 test-topic\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"admin-url")," parameter to the Web service URL. A Web service URL is a combination of the protocol, hostname and port ID, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"pulsar://localhost:6650"),"."),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"privateKey"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issuerUrl"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"audience")," parameters to the values based on the configuration in the key file. For details, see ",(0,i.kt)("a",{parentName:"li",href:"#authentication-types"},"authentication types"),".")),(0,i.kt)("h4",{id:"authentication-types"},"Authentication types"),(0,i.kt)("p",null,"Currently, Pulsar clients only support the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_credentials")," authentication type. The authentication type determines how to obtain an access token through an OAuth 2.0 authorization service."),(0,i.kt)("p",null,"The following table outlines the parameters of the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_credentials")," authentication type."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Required or not"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 authentication type."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_credentials")," (default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"issuerUrl")),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of the authentication provider which allows the Pulsar client to obtain an access token."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://accounts.google.com")),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"privateKey")),(0,i.kt)("td",{parentName:"tr",align:null},"The URL to the JSON credentials file."),(0,i.kt)("td",{parentName:"tr",align:null},"Support the following pattern formats: ",(0,i.kt)("br",null)," ",(0,i.kt)("li",null," ",(0,i.kt)("inlineCode",{parentName:"td"},"file:///path/to/file")," "),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"file:/path/to/file")," "),(0,i.kt)("li",null," ",(0,i.kt)("inlineCode",{parentName:"td"},"data:application/json;base64,<base64-encoded value>")," ")),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"audience")),(0,i.kt)("td",{parentName:"tr",align:null},'The OAuth 2.0 "resource server" identifier for a Pulsar cluster.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://broker.example.com")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scope")),(0,i.kt)("td",{parentName:"tr",align:null},"The scope of an access request. ",(0,i.kt)("br",null),"For more information, see ",(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-3.3"},"access token scope"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"api://pulsar-cluster-1/.default"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,i.kt)("p",null,"The credentials file ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials_file.json")," contains the service account credentials used with the client authentication type. The following is an example of the credentials file. The authentication type is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"client_credentials"),' by default. And the fields "client_id" and "client_secret" are required.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "client_credentials",\n  "client_id": "d9ZyX97q1ef8Cr81WHVC4hFQ64vSlDK3",\n  "client_secret": "on1uJ...k6F6R",\n  "client_email": "1234567890-abcdefghijklmnopqrstuvwxyz@developer.gserviceaccount.com",\n  "issuer_url": "https://accounts.google.com"\n}\n')),(0,i.kt)("p",null,"The following is an example of a typical original OAuth2 request, which is used to obtain an access token from the OAuth2 server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n  --url https://dev-kt-aa9ne.us.auth0.com/oauth/token \\\n  --header \'content-type: application/json\' \\\n  --data \'{\n  "client_id":"Xd23RHsUnvUlP7wchjNYOaIfazgeHd9x",\n  "client_secret":"rT7ps7WY8uhdVuBTKWZkttwLdQotmdEliaM5rLfmgNibvqziZ-g07ZH52N_poGAb",\n  "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n  "grant_type":"client_credentials"}\'\n')),(0,i.kt)("p",null,"In the above example, the mapping relationship is shown below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"issuerUrl")," parameter is mapped to ",(0,i.kt)("inlineCode",{parentName:"li"},"--url https://dev-kt-aa9ne.us.auth0.com"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"privateKey")," parameter should contain the ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," fields at least."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"audience")," parameter is mapped to  ",(0,i.kt)("inlineCode",{parentName:"li"},'"audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"'),". This field is only used by some identity providers.")))}d.isMDXComponent=!0}}]);