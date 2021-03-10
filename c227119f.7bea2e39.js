(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{252:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return m}));var r=t(3),i=t(7),a=(t(0),t(319)),o=t(325),c=t(320),s={id:"rendering-connections",title:"Rendering Connections",slug:"/guided-tour/list-data/rendering-connections/"},l={unversionedId:"guided-tour/list-data/rendering-connections",id:"guided-tour/list-data/rendering-connections",isDocsHomePage:!1,title:"Rendering Connections",description:"In Relay, in order to display a list of data that is backed by a GraphQL connection, first you need to declare a fragment that queries for a connection:",source:"@site/docs/current/guided-tour/list-data/rendering-connections.md",slug:"/guided-tour/list-data/rendering-connections/",permalink:"/docs/next/guided-tour/list-data/rendering-connections/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/current/guided-tour/list-data/rendering-connections.md",version:"current",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1615405157,sidebar:"docs",previous:{title:"Connections",permalink:"/docs/next/guided-tour/list-data/connections/"},next:{title:"Pagination",permalink:"/docs/next/guided-tour/list-data/pagination/"}},u=[],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",n)}},f=d("FbRenderingConnectionsUsingSuspenseList"),p=d("FbSuspenseListAlternative"),b={toc:u};function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In Relay, in order to display a list of data that is backed by a GraphQL connection, first you need to declare a fragment that queries for a connection:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {graphql} = require('RelayModern');\n\nconst userFragment = graphql`\n  fragment UserFragment on User {\n    name\n    friends(after: $cursor, first: $count)\n      @connection(key: \"UserFragment_friends\") {\n      edges {\n        node {\n          ...FriendComponent\n        }\n      }\n    }\n  }\n`;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the example above, we're querying for the ",Object(a.b)("inlineCode",{parentName:"li"},"friends")," field, which is a connection; in other words, it adheres to the connection spec. Specifically, we can query the ",Object(a.b)("inlineCode",{parentName:"li"},"edges")," and ",Object(a.b)("inlineCode",{parentName:"li"},"node"),"s in the connection; the ",Object(a.b)("inlineCode",{parentName:"li"},"edges")," usually contain information about the relationship between the entities, while the ",Object(a.b)("inlineCode",{parentName:"li"},"node"),"s are the actual entities at the other end of the relationship; in this case, the ",Object(a.b)("inlineCode",{parentName:"li"},"node"),"s are objects of type ",Object(a.b)("inlineCode",{parentName:"li"},"User")," representing the user's friends."),Object(a.b)("li",{parentName:"ul"},"In order to indicate to Relay that we want to perform pagination over this connection, we need to mark the field with the ",Object(a.b)("inlineCode",{parentName:"li"},"@connection")," directive. We must also provide a ",Object(a.b)("em",{parentName:"li"},"static")," unique identifier for this connection, known as the ",Object(a.b)("inlineCode",{parentName:"li"},"key"),". We recommend the following naming convention for the connection key: ",Object(a.b)("inlineCode",{parentName:"li"},"<fragment_name>_<field_name>"),"."),Object(a.b)("li",{parentName:"ul"},"We will go into more detail later as to why it is necessary to mark the field as a ",Object(a.b)("inlineCode",{parentName:"li"},"@connection")," and give it a unique ",Object(a.b)("inlineCode",{parentName:"li"},"key")," in our ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../updating-connections/"}),"Updating Connections")," section.")),Object(a.b)("p",null,"In order to render this fragment which queries for a connection, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"usePaginationFragment")," Hook:"),Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(a.b)(f,{mdxType:"FbRenderingConnectionsUsingSuspenseList"})),Object(a.b)(c.OssOnly,{mdxType:"OssOnly"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {data} = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              ...FriendComponent\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n\n  return (\n    <>\n      {data.name != null ? <h1>Friends of {data.name}:</h1> : null}\n\n      <div>\n        {/* Extract each friend from the resulting data */}\n        {(data.friends?.edges ?? []).map(edge => {\n          const node = edge.node;\n          return (\n            <Suspense fallback={<Glimmer />}>\n              <FriendComponent user={node} />\n            </Suspense>\n          );\n        })}\n      </div>\n    </>\n  );\n}\n\nmodule.exports = FriendsListComponent;\n")),Object(a.b)(p,{mdxType:"FbSuspenseListAlternative"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"usePaginationFragment")," behaves the same way as a ",Object(a.b)("inlineCode",{parentName:"li"},"useFragment")," (see the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../../rendering/fragments/"}),"Fragments")," section), so our list of friends is available under ",Object(a.b)("inlineCode",{parentName:"li"},"data.friends.edges.node"),", as declared by the fragment. However, it also has a few additions:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"It expects a fragment that is a connection field annotated with the ",Object(a.b)("inlineCode",{parentName:"li"},"@connection")," directive"),Object(a.b)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",Object(a.b)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that  ",Object(a.b)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',Object(a.b)("inlineCode",{parentName:"li"},"Viewer"),", on ",Object(a.b)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",Object(a.b)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",Object(a.b)("inlineCode",{parentName:"li"},"id")," field), or on a ",Object(a.b)("inlineCode",{parentName:"li"},"@fetchable")," type. ",Object(a.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"}," For more info on ",Object(a.b)("inlineCode",{parentName:"li"},"@fetchable")," types, see ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://fb.workplace.com/groups/graphql.fyi/permalink/1539541276187011/"}),"this post"),". ")))),Object(a.b)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",Object(a.b)("inlineCode",{parentName:"li"},"FriendsListPaginationQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",Object(a.b)("inlineCode",{parentName:"li"},"_"),")."))),Object(a.b)(o.a,{mdxType:"DocsRating"}))}m.isMDXComponent=!0},319:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,b=d["".concat(o,".").concat(p)]||d[p]||f[p]||a;return t?i.a.createElement(b,c(c({ref:n},l),{},{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},320:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=a(t(323));const o=["internal","external"];let c;try{c=t(321).usePluginData}catch(f){c=null}function s(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}n.fbContent=s,n.fbInternalOnly=function(e){return s({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(322))},321:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i})),t.d(n,"useAllPluginInstancesData",(function(){return a})),t.d(n,"usePluginData",(function(){return o}));var r=t(22);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var n=i()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=a(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},322:function(e,n){var t,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,l=[],u=!1,d=-1;function f(){u&&s&&(u=!1,s.length?l=s.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=c(f);u=!0;for(var n=l.length;n;){for(s=l,l=[];++d<n;)s&&s[d].run();d=-1,n=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function b(e,n){this.fun=e,this.array=n}function m(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new b(e,n)),1!==l.length||u||c(p)},b.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},323:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(324);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},324:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let i=!1,a=0;const o={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=a++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),t}))}},325:function(e,n,t){"use strict";t(60);var r=t(320),i=t(0);var a=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),"Thank you for letting us know!"):i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};n.a=function(){return Object(r.fbContent)({internal:i.createElement(o,null),external:i.createElement(a,null)})}}}]);