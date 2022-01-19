(self.webpackChunk=self.webpackChunk||[]).push([[5502],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(v,i(i({ref:n},s),{},{components:t})):r.createElement(v,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67142:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>d,toc:()=>s,default:()=>u});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],l={id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},c=void 0,d={unversionedId:"relay-environment",id:"version-v1.7.0/relay-environment",isDocsHomePage:!1,title:"Relay Environment",description:'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.',source:"@site/versioned_docs/version-v1.7.0/Modern-RelayEnvironment.md",sourceDirName:".",slug:"/relay-environment",permalink:"/docs/v1.7.0/relay-environment",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.7.0/Modern-RelayEnvironment.md",version:"v1.7.0",lastUpdatedBy:"Vadim Evseev",lastUpdatedAt:1642621110,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},sidebar:"version-v1.7.0/docs",previous:{title:"GraphQL in Relay",permalink:"/docs/v1.7.0/graphql-in-relay"},next:{title:"Network Layer",permalink:"/docs/v1.7.0/network-layer"}},s=[{value:"A simple example",id:"a-simple-example",children:[]},{value:"Adding a <code>handlerProvider</code>",id:"adding-a-handlerprovider",children:[]}],p={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.'),(0,o.kt)("p",null,"Most applications will create a single Environment instance and use it throughout. In specific situations, however, you may want to create multiple environments for different purposes. For example, you may create a new environment instance whenever the user logs in or out in order to prevent data for different users being cached together. Similarly, a server rendered application may create a new environment instance per request, so that each request gets its own cache and user data does not overlap. Alternatively, you might have multiple products or features within a larger application, and you want each one to have product-specific network-handling or caching."),(0,o.kt)("h2",{id:"a-simple-example"},"A simple example"),(0,o.kt)("p",null,"To create an environment instance in Relay Modern, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} = require('relay-runtime');\n\nconst source = new RecordSource();\nconst store = new Store(source);\nconst network = Network.create(/*...*/); // see note below\nconst handlerProvider = null;\n\nconst environment = new Environment({\n  handlerProvider, // Can omit.\n  network,\n  store,\n});\n")),(0,o.kt)("p",null,"For more details on creating a Network, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.7.0/network-layer"},"NetworkLayer guide"),"."),(0,o.kt)("p",null,"Once you have an environment, you can pass it in to your ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.7.0/query-renderer"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryRenderer"))," instance, or into mutations via the ",(0,o.kt)("inlineCode",{parentName:"p"},"commitUpdate"),' function (see "',(0,o.kt)("a",{parentName:"p",href:"/docs/v1.7.0/mutations"},"Mutations"),'").'),(0,o.kt)("h2",{id:"adding-a-handlerprovider"},"Adding a ",(0,o.kt)("inlineCode",{parentName:"h2"},"handlerProvider")),(0,o.kt)("p",null,"The example above did not configure a ",(0,o.kt)("inlineCode",{parentName:"p"},"handlerProvider"),", which means that a default one will be provided. Relay Modern comes with a couple of built-in handlers that augment the core with special functionality for handling connections (which is not a standard GraphQL feature, but a set of pagination conventions used at Facebook, specified in detail in the ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"Relay Cursor Connections Specification"),", and well-supported by Relay itself) and the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer")," field (again, not a standard GraphQL schema feature, but one which has been conventionally used extensively within Facebook)."),(0,o.kt)("p",null,"If you wish to provide your own ",(0,o.kt)("inlineCode",{parentName:"p"},"handlerProvider"),", you can do so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  ConnectionHandler,\n  ViewerHandler,\n} = require('relay-runtime');\n\nfunction handlerProvider(handle) {\n  switch (handle) {\n    // Augment (or remove from) this list:\n    case 'connection': return ConnectionHandler;\n    case 'viewer': return ViewerHandler;\n  }\n  throw new Error(\n    `handlerProvider: No handler provided for ${handle}`\n  );\n}\n")))}u.isMDXComponent=!0}}]);