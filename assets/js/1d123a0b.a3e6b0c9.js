(self.webpackChunk=self.webpackChunk||[]).push([[80546],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>h,mdx:()=>p,useMDXComponents:()=>d,withMDXComponents:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){return function(t){var n=d(t.components);return a.createElement(e,i({},t,{components:n}))}},d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,f=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var a=n(79973),r=n(67294),i=n(73727),o=n(52263),l=n(13919),s=n(10412),c=(0,r.createContext)({collectLink:function(){}}),u=n(44996),d=n(18780),h=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,n,m=e.isNavLink,f=e.to,p=e.href,g=e.activeClassName,v=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,x=(0,a.Z)(e,h),k=(0,o.default)().siteConfig,C=k.trailingSlash,N=k.baseUrl,O=(0,u.useBaseUrlUtils)().withBaseUrl,R=(0,r.useContext)(c),E=f||p,q=(0,l.Z)(E),P=null==E?void 0:E.replace("pathname://",""),S=void 0!==P?(n=P,w&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;S&&q&&(S=(0,d.applyTrailingSlash)(S,{trailingSlash:C,baseUrl:N}));var j=(0,r.useRef)(!1),D=m?i.OL:i.rU,B=s.default.canUseIntersectionObserver,M=(0,r.useRef)();(0,r.useEffect)((function(){return!B&&q&&null!=S&&window.docusaurus.prefetch(S),function(){B&&M.current&&M.current.disconnect()}}),[M,S,B,q]);var T=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,U=!S||!q||T;return S&&q&&!T&&!y&&R.collectLink(S),U?r.createElement("a",Object.assign({href:S},E&&!q&&{target:"_blank",rel:"noopener noreferrer"},x)):r.createElement(D,Object.assign({},x,{onMouseEnter:function(){j.current||null==S||(window.docusaurus.preload(S),j.current=!0)},innerRef:function(e){var t,n;B&&e&&q&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:S||""},m&&{isActive:v,activeClassName:g}))}},13919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},44996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var a=n(52263),r=n(13919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],o="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,o)}},18780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(36742),r=n(44256),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var s=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return i.createElement(l,null,i.createElement(c,null),i.createElement(s,null),i.createElement(u,null))},h=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(u,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(d,null),external:i.createElement(h,null)})}},33114:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>d,toc:()=>h,default:()=>p});var a,r=n(74034),i=n(79973),o=(n(67294),n(3905)),l=n(68629),s=(n(44256),["components"]),c={id:"presence-of-data",title:"Presence of Data",slug:"/guided-tour/reusing-cached-data/presence-of-data/"},u=void 0,d={unversionedId:"guided-tour/reusing-cached-data/presence-of-data",id:"version-v11.0.0/guided-tour/reusing-cached-data/presence-of-data",isDocsHomePage:!1,title:"Presence of Data",description:"An important thing to keep in mind when attempting to reuse data that is cached in the Relay store is to understand the lifetime of that data; that is, if it is present in the store, and for how long it will be.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/reusing-cached-data/presence-of-data.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/presence-of-data/",permalink:"/docs/v11.0.0/guided-tour/reusing-cached-data/presence-of-data/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/reusing-cached-data/presence-of-data.md",tags:[],version:"v11.0.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649283556,formattedLastUpdatedAt:"4/6/2022",frontMatter:{id:"presence-of-data",title:"Presence of Data",slug:"/guided-tour/reusing-cached-data/presence-of-data/"},sidebar:"version-v11.0.0/docs",previous:{title:"Availability of Data",permalink:"/docs/v11.0.0/guided-tour/reusing-cached-data/availability-of-data/"},next:{title:"Staleness of Data",permalink:"/docs/v11.0.0/guided-tour/reusing-cached-data/staleness-of-data/"}},h=[{value:"Garbage Collection in Relay",id:"garbage-collection-in-relay",children:[],level:2},{value:"Query Retention",id:"query-retention",children:[],level:2},{value:"Controlling Relay&#39;s Garbage Collection Policy",id:"controlling-relays-garbage-collection-policy",children:[{value:"GC Scheduler",id:"gc-scheduler",children:[],level:3},{value:"GC Release Buffer Size",id:"gc-release-buffer-size",children:[],level:3}],level:2}],m=(a="FbGarbageCollection",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),f={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"An important thing to keep in mind when attempting to reuse data that is cached in the Relay store is to understand the lifetime of that data; that is, if it is present in the store, and for how long it will be."),(0,o.mdx)("p",null,"Data in the Relay store for a given query will generally be present after the query has been fetched for the first time, as long as that query is being rendered on the screen. If we've never fetched data for a specific query, then it will be missing from the store."),(0,o.mdx)("p",null,"However, even after we've fetched data for different queries, we can't keep all of the data that we've fetched indefinitely in memory, since over time it would grow to be too large and too stale. In order to mitigate this, Relay runs a process called ",(0,o.mdx)("em",{parentName:"p"},"Garbage Collection"),", in order to delete data that we're no longer using:"),(0,o.mdx)("h2",{id:"garbage-collection-in-relay"},"Garbage Collection in Relay"),(0,o.mdx)("p",null,"Specifically, Relay runs garbage collection on the local in-memory store by deleting any data that is no longer being referenced by any component in the app."),(0,o.mdx)("p",null,"However, this can be at odds with reusing cached data; if the data is deleted too soon, before we try to reuse it again later, that will prevent us from reusing that data to render a screen without having to wait on a network request. To address this, this section will cover what you need to do in order to ensure that the data you want to reuse is kept cached for as long as you need it."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Usually, you shouldn't need to worry about configuring garbage collection and data retention, as this should be configured by the app infrastructure at the RelayEnvironment level; however, we will cover it here for reference."))),(0,o.mdx)(m,{mdxType:"FbGarbageCollection"}),(0,o.mdx)("h2",{id:"query-retention"},"Query Retention"),(0,o.mdx)("p",null,"Retaining a query indicates to Relay that the data for that query and variables shouldn't be deleted (i.e. garbage collected). Multiple callers might retain a single query, and as long as there is at least one caller retaining a query, it won't be deleted from the store."),(0,o.mdx)("p",null,"By default, any query components using ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," / ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," or our other APIs will retain the query for as long as they are mounted. After they unmount, they will release the query, which means that the query might be deleted at any point in the future after that occurs."),(0,o.mdx)("p",null,"If you need to retain a specific query outside of the components lifecycle, you can use the ",(0,o.mdx)("a",{parentName:"p",href:"../../accessing-data-without-react/retaining-queries/"},(0,o.mdx)("inlineCode",{parentName:"a"},"retain"))," operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// Retain query; this will prevent the data for this query and\n// variables from being garbage collected by Relay\nconst disposable = environment.retain(queryDescriptor);\n\n// Disposing of the disposable will release the data for this query\n// and variables, meaning that it can be deleted at any moment\n// by Relay's garbage collection if it hasn't been retained elsewhere\ndisposable.dispose();\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"As mentioned, this will allow you to retain the query even after a query component has unmounted, allowing other components, or future instances of the same component, to reuse the retained data.")),(0,o.mdx)("h2",{id:"controlling-relays-garbage-collection-policy"},"Controlling Relay's Garbage Collection Policy"),(0,o.mdx)("p",null,"There are currently 2 options you can provide to your Relay Store in to control the behavior of garbage collection:"),(0,o.mdx)("h3",{id:"gc-scheduler"},"GC Scheduler"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"gcScheduler")," is a function you can provide to the Relay Store which will determine when a GC execution should be scheduled to run:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// Sample scheduler function\n// Accepts a callback and schedules it to run at some future time.\nfunction gcScheduler(run: () => void) {\n  resolveImmediate(run);\n}\n\nconst store = new Store(source, {gcScheduler});\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"By default, if a ",(0,o.mdx)("inlineCode",{parentName:"li"},"gcScheduler")," option is not provided, Relay will schedule garbage collection using the ",(0,o.mdx)("inlineCode",{parentName:"li"},"resolveImmediate")," function."),(0,o.mdx)("li",{parentName:"ul"},"You can provide a scheduler function to make GC scheduling less aggressive than the default, for example based on time or ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/react/tree/main/packages/scheduler"},"scheduler")," priorities, or any other heuristic. By convention, implementations should not execute the callback immediately.")),(0,o.mdx)("h3",{id:"gc-release-buffer-size"},"GC Release Buffer Size"),(0,o.mdx)("p",null,"The Relay Store internally holds a release buffer to keep a specific (configurable) number of queries temporarily retained even ",(0,o.mdx)("em",{parentName:"p"},"after")," they have been released by their original owner  (which will happen by default when a component rendering that query unmounts). This makes it possible (and more likely) to be able to reuse data when navigating back to a page, tab or piece of content that has been visited before."),(0,o.mdx)("p",null,"In order to configure the size of the release buffer, we can specify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"gcReleaseBufferSize")," option to the Relay Store:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const store = new Store(source, {gcReleaseBufferSize: 10});\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Note that having a buffer size of 0 is equivalent to not having the release buffer, which means that queries will be immediately released and collected."),(0,o.mdx)("li",{parentName:"ul"},"By default, environments have a release buffer size of 10.")),(0,o.mdx)(l.Z,{mdxType:"DocsRating"}))}p.isMDXComponent=!0}}]);