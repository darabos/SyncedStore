"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,sidebar_label:"Yjs integration"},i="Yjs integration (advanced)",s={unversionedId:"advanced/yjs",id:"advanced/yjs",title:"Yjs integration (advanced)",description:"SyncedStore uses Yjs as underlying CRDT. Yjs is a CRDT implementation with a focus on performance and collaborative text editing. It does have a fairly steep learning curve, which is why SyncedStore hides as many of the Yjs internals as possible.",source:"@site/docs/advanced/yjs.md",sourceDirName:"advanced",slug:"/advanced/yjs",permalink:"/docs/advanced/yjs",draft:!1,editUrl:"https://github.com/yousefed/SyncedStore/edit/main/docs/docs/advanced/yjs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Yjs integration"},sidebar:"tutorialSidebar",previous:{title:"MobX integration",permalink:"/docs/advanced/mobx"},next:{title:"Sync providers",permalink:"/docs/sync-providers"}},l={},c=[{value:"Accessing Yjs objects",id:"accessing-yjs-objects",level:2},{value:"<code>getYjsValue(object: any)</code>",id:"getyjsvalueobject-any",level:4},{value:"Understanding the SyncedStore internals",id:"understanding-the-syncedstore-internals",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yjs-integration-advanced"},"Yjs integration (advanced)"),(0,a.kt)("p",null,"SyncedStore uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/yjs/yjs"},"Yjs")," as underlying CRDT. Yjs is a CRDT implementation with a focus on performance and collaborative text editing. It does have a fairly steep learning curve, which is why SyncedStore hides as many of the Yjs internals as possible."),(0,a.kt)("p",null,"However, should you want to access the underlying Yjs objects of your store, that's definitely possible."),(0,a.kt)("h2",{id:"accessing-yjs-objects"},"Accessing Yjs objects"),(0,a.kt)("h4",{id:"getyjsvalueobject-any"},(0,a.kt)("inlineCode",{parentName:"h4"},"getYjsValue(object: any)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," is a value from the SyncedStore store. The return type of ",(0,a.kt)("inlineCode",{parentName:"p"},"getYjsValue")," depends on the type passed in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," is the store itself, the return value is a ",(0,a.kt)("inlineCode",{parentName:"li"},"Y.Doc")),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," is an array, the return value is a ",(0,a.kt)("inlineCode",{parentName:"li"},"Y.Array")),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," is an object, the return value is a ",(0,a.kt)("inlineCode",{parentName:"li"},"Y.Map"))),(0,a.kt)("p",null,"Check out the demo of ",(0,a.kt)("inlineCode",{parentName:"p"},"getYjsValue")," below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"live",live:!0},'import React from "react";\nimport { useSyncedStore } from "@syncedstore/react";\nimport { boxed, getYjsValue } from "@syncedstore/core";\nimport { store } from "./store"; // the store we defined above\nimport { ObjectInspector } from "react-inspector";\n\nexport default function App() {\n  const state = useSyncedStore(store);\n\n  const doc = getYjsValue(state);\n  const array = getYjsValue(state.todos);\n  const map = state.todos.length ? getYjsValue(state.todos[0]) : undefined;\n\n  return (\n    <div>\n      <p>Todo items:</p>\n      <p>{JSON.stringify(state)}</p>\n\n      <ObjectInspector data={{ doc, array, map }} />\n      <br />\n      <div>\n        <button\n          onClick={() => {\n            state.todos.push({ title: "This is a todo", completed: false });\n          }}\n        >\n          Add a todo\n        </button>\n      </div>\n    </div>\n  );\n}\n')),(0,a.kt)("h2",{id:"understanding-the-syncedstore-internals"},"Understanding the SyncedStore internals"),(0,a.kt)("p",null,"If you're familiar with Yjs, you might be interested in how SyncedStore works. There are two important abstractions SyncedStore introduces on top of Yjs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instead of data types like Y.Map, and Y.Array, use plain Javascript objects and array",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g.: ",(0,a.kt)("inlineCode",{parentName:"li"},"store.outer.inner.property = value")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},'doc.getMap("outer").get("inner").set("property", "value")')))),(0,a.kt)("li",{parentName:"ul"},"Instead of having to call ",(0,a.kt)("inlineCode",{parentName:"li"},".observe")," manually, we integrate with a Reactive Functional Programming library to react to changes automatically",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g.: wrap your code in ",(0,a.kt)("inlineCode",{parentName:"li"},"autorun")," or use ",(0,a.kt)("inlineCode",{parentName:"li"},"useSyncedStore")," (React), Mobx, or Vue's reactive model and automatically observe all used values from the store.")))))}p.isMDXComponent=!0}}]);