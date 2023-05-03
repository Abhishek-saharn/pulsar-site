"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70232],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,o(o({ref:e},l),{},{components:n})):r.createElement(d,o({ref:e},l))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=f;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[p]="string"==typeof t?t:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32586:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"functions-debug-unit-test",title:"Debug with unit test",sidebar_label:"Debug with unit test"},o=void 0,u={unversionedId:"functions-debug-unit-test",id:"version-3.0.x/functions-debug-unit-test",title:"Debug with unit test",description:"Like any function with inputs and outputs, you can test Pulsar Functions in a similar way as you test any other function.",source:"@site/versioned_docs/version-3.0.x/functions-debug-unit-test.md",sourceDirName:".",slug:"/functions-debug-unit-test",permalink:"/docs/3.0.x/functions-debug-unit-test",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-debug-unit-test.md",tags:[],version:"3.0.x",frontMatter:{id:"functions-debug-unit-test",title:"Debug with unit test",sidebar_label:"Debug with unit test"},sidebar:"docsSidebar",previous:{title:"Debug with captured stderr",permalink:"/docs/3.0.x/functions-debug-stderr"},next:{title:"Debug with localrun mode",permalink:"/docs/3.0.x/functions-debug-localrun"}},s={},c=[],l={toc:c};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Like any function with inputs and outputs, you can test Pulsar Functions in a similar way as you test any other function."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Pulsar uses TestNG for testing.")),(0,i.kt)("p",null,"For example, if you have the following function written through the language-native interface for Java:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.function.Function;\n\npublic class JavaNativeExclamationFunction implements Function<String, String> {\n   @Override\n   public String apply(String input) {\n       return String.format("%s!", input);\n   }\n}\n')),(0,i.kt)("p",null,"You can write a simple unit test to test the function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testJavaNativeExclamationFunction() {\n   JavaNativeExclamationFunction exclamation = new JavaNativeExclamationFunction();\n   String output = exclamation.apply("foo");\n   Assert.assertEquals(output, "foo!");\n}\n')),(0,i.kt)("p",null,"The following example is written through the Java SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n   @Override\n   public String process(String input, Context context) {\n       return String.format("%s!", input);\n   }\n}\n')),(0,i.kt)("p",null,"You can write a unit test to test this function and mock the ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," parameter as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testExclamationFunction() {\n   ExclamationFunction exclamation = new ExclamationFunction();\n   String output = exclamation.process("foo", mock(Context.class));\n   Assert.assertEquals(output, "foo!");\n}\n')))}p.isMDXComponent=!0}}]);