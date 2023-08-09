"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68420],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>k});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=t.createContext({}),l=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},c=function(e){var r=l(e.components);return t.createElement(o.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?t.createElement(k,s(s({ref:r},c),{},{components:a})):t.createElement(k,s({ref:r},c))}));function k(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<i;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22578:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=a(87462),n=(a(67294),a(3905));const i={id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",sidebar_label:"Apache Spark"},s=void 0,p={unversionedId:"adaptors-spark",id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",description:"Spark Streaming receiver",source:"@site/docs/adaptors-spark.md",sourceDirName:".",slug:"/adaptors-spark",permalink:"/docs/next/adaptors-spark",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/adaptors-spark.md",tags:[],version:"current",frontMatter:{id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",sidebar_label:"Apache Spark"},sidebar:"docsSidebar",previous:{title:"Kafka client wrapper",permalink:"/docs/next/adaptors-kafka"},next:{title:"Apache Storm",permalink:"/docs/next/adaptors-storm"}},o={},l=[{value:"Spark Streaming receiver",id:"spark-streaming-receiver",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Maven",id:"maven",level:4},{value:"Gradle",id:"gradle",level:4},{value:"Usage",id:"usage",level:3}],c={toc:l},u="wrapper";function d(e){let{components:r,...a}=e;return(0,n.kt)(u,(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"spark-streaming-receiver"},"Spark Streaming receiver"),(0,n.kt)("p",null,"The Spark Streaming receiver for Pulsar is a custom receiver that enables Apache ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/streaming/"},"Spark Streaming")," to receive raw data from Pulsar."),(0,n.kt)("p",null,"An application can receive data in ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/programming-guide.html#resilient-distributed-datasets-rdds"},"Resilient Distributed Dataset")," (RDD) format via the Spark Streaming receiver and can process it in a variety of ways."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To use the receiver, include a dependency for the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-spark")," library in your Java configuration."),(0,n.kt)("h4",{id:"maven"},"Maven"),(0,n.kt)("p",null,"If you're using Maven, add this to your ",(0,n.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- in your <properties> block --\x3e\n<pulsar.version>3.0.1</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-spark</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n")),(0,n.kt)("h4",{id:"gradle"},"Gradle"),(0,n.kt)("p",null,"If you're using Gradle, add this to your ",(0,n.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"def pulsarVersion = \"3.0.1\"\n\ndependencies {\n    compile group: 'org.apache.pulsar', name: 'pulsar-spark', version: pulsarVersion\n}\n")),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Pass an instance of ",(0,n.kt)("inlineCode",{parentName:"p"},"SparkStreamingPulsarReceiver")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"receiverStream")," method in ",(0,n.kt)("inlineCode",{parentName:"p"},"JavaStreamingContext"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'    String serviceUrl = "pulsar://localhost:6650/";\n    String topic = "persistent://public/default/test_src";\n    String subs = "test_sub";\n\n    SparkConf sparkConf = new SparkConf().setMaster("local[*]").setAppName("Pulsar Spark Example");\n\n    JavaStreamingContext jsc = new JavaStreamingContext(sparkConf, Durations.seconds(60));\n\n    ConsumerConfigurationData<byte[]> pulsarConf = new ConsumerConfigurationData();\n\n    Set<String> set = new HashSet();\n    set.add(topic);\n    pulsarConf.setTopicNames(set);\n    pulsarConf.setSubscriptionName(subs);\n\n    SparkStreamingPulsarReceiver pulsarReceiver = new SparkStreamingPulsarReceiver(\n        serviceUrl,\n        pulsarConf,\n        new AuthenticationDisabled());\n\n    JavaReceiverInputDStream<byte[]> lineDStream = jsc.receiverStream(pulsarReceiver);\n')),(0,n.kt)("p",null,"For a complete example, click ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-adapters/blob/master/examples/spark/src/main/java/org/apache/spark/streaming/receiver/example/SparkStreamingPulsarReceiverExample.java"},"here"),'. In this example, the number of messages that contain the string "Pulsar" in received messages is counted.'),(0,n.kt)("p",null,"Note that if needed, other Pulsar authentication classes can be used. For example, to use a token during authentication the following parameters for the ",(0,n.kt)("inlineCode",{parentName:"p"},"SparkStreamingPulsarReceiver")," constructor can be set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'SparkStreamingPulsarReceiver pulsarReceiver = new SparkStreamingPulsarReceiver(\n        serviceUrl,\n        pulsarConf,\n        new AuthenticationToken("token:<secret-JWT-token>"));\n')))}d.isMDXComponent=!0}}]);