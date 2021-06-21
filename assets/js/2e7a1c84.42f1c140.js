(self.webpackChunk=self.webpackChunk||[]).push([[41561],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>p});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"local-state-management",title:"Local State Management",original_id:"local-state-management"},s={unversionedId:"local-state-management",id:"version-v10.1.0/local-state-management",isDocsHomePage:!1,title:"Local State Management",description:"Relay can be used to read and write local data, and act as a single source of truth for all data in your client application.",source:"@site/versioned_docs/version-v10.1.0/Modern-LocalStateManagement.md",sourceDirName:".",slug:"/local-state-management",permalink:"/docs/v10.1.0/local-state-management",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.0/Modern-LocalStateManagement.md",version:"v10.1.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1624311966,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"local-state-management",title:"Local State Management",original_id:"local-state-management"},sidebar:"version-v10.1.0/docs",previous:{title:"Testing Relay Components",permalink:"/docs/v10.1.0/testing-relay-components"},next:{title:"Thinking in GraphQL",permalink:"/docs/v10.1.0/thinking-in-graphql"}},c=[{value:"Extending the server schema",id:"extending-the-server-schema",children:[]},{value:"Querying local state",id:"querying-local-state",children:[]},{value:"Mutating local state",id:"mutating-local-state",children:[{value:"Create",id:"create",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]}]},{value:"Initial local state",id:"initial-local-state",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Relay can be used to read and write local data, and act as a single source of truth for ",(0,o.kt)("em",{parentName:"p"},"all")," data in your client application.\nThe Relay Compiler fully supports client-side extensions of the schema, which allows you to define local fields and types."),(0,o.kt)("p",null,"Table of Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#extending-the-server-schema"},"Extending the server schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#querying-local-state"},"Querying local state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mutating-local-state"},"Mutating local state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#initial-local-state"},"Initial local state"))),(0,o.kt)("h2",{id:"extending-the-server-schema"},"Extending the server schema"),(0,o.kt)("p",null,"To extend the server schema, create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".graphql")," file inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"--src")," directory.\nLet's call it ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql"),"."),(0,o.kt)("p",null,"This schema describes what local data can be queried on the client.\nIt can even be used to extend an existing server schema."),(0,o.kt)("p",null,"For example, we can create a new type called ",(0,o.kt)("inlineCode",{parentName:"p"},"Note"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Note {\n  id: ID!\n  title: String\n  body: String\n}\n")),(0,o.kt)("p",null,"And then extend the server schema type ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),", with a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Note"),", called ",(0,o.kt)("inlineCode",{parentName:"p"},"notes"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"extend type User {\n  notes: [Note]\n}\n")),(0,o.kt)("h2",{id:"querying-local-state"},"Querying local state"),(0,o.kt)("p",null,"Accessing local data is no different from querying your GraphQL server, although you are required to include atleast one server field in the query.\nThe field can be from the server schema, or it can be schema agnostic, like an introspection field (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename"),")."),(0,o.kt)("p",null,"Here, we use a ",(0,o.kt)("a",{parentName:"p",href:"./query-renderer"},"QueryRenderer")," to get the current ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer")," field, along with their id, name and the local list of notes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Example.js\nimport React from 'react';\nimport { QueryRenderer, graphql } from 'react-relay';\n\nconst renderQuery = ({error, props}) => {\n  if (error) {\n    return <div>{error.message}</div>;\n  } else if (props) {\n    return (\n      <div>\n        {props.viewer.notes.map(({id, title, body}) => (\n          <div key={id}>\n            {title}\n          </div>\n          <div key={id}>\n            {body}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <div>Loading</div>;\n}\n\nconst Example = (props) => {\n  return (\n    <QueryRenderer\n      render={renderQuery}\n      environment={environment}\n      query={graphql`\n        query ExampleQuery {\n          viewer {\n            id\n            name\n            notes {\n              id\n              title\n              body\n            }\n          }\n        }\n      `}\n    />\n  );\n}\n")),(0,o.kt)("h2",{id:"mutating-local-state"},"Mutating local state"),(0,o.kt)("p",null,"All local data lives in the ",(0,o.kt)("a",{parentName:"p",href:"./relay-store"},"Relay Store"),".\nUpdating local state can be done with any ",(0,o.kt)("inlineCode",{parentName:"p"},"updater")," function.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"commitLocalUpdate")," function is especially ideal for this, because writes to local state are usually executed outside of a mutation."),(0,o.kt)("p",null,"To build upon the previous example, let's try creating, updating and deleting a ",(0,o.kt)("inlineCode",{parentName:"p"},"Note")," from the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"notes")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nlet tempID = 0;\n\nfunction createUserNote() {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes') || [];\n\n    // Create a unique ID.\n    const dataID = `client:Note:${tempID++}`;\n\n    //Create a new note record.\n    const newNoteRecord = store.create(dataID, 'Note');\n\n    // Add the record to the user's list of notes.\n    user.setLinkedRecords([...userNoteRecords, newNoteRecord], 'notes');\n  });\n}\n")),(0,o.kt)("p",null,"Note that since this record will be rendered by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleQuery")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),", the QueryRenderer will automatically retain this data so it isn't garbage collected."),(0,o.kt)("p",null,"If no component is rendering the local data and you want to manually retain it, you can do so by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.retain()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {createOperationDescriptor, getRequest} from 'relay-runtime';\n\n// Create a query that references that record\nconst localDataQuery = graphql`\n  query LocalDataQuery {\n    viewer {\n      notes {\n        __typename\n      }\n    }\n  }\n`;\n\n// Create an operation descriptor for the query\nconst request = getRequest(localDataQuery);\nconst operation = createOperationDescriptor(request, {} /* variables */);\n\n\n// Tell Relay to retain this operation so any data referenced by it isn't garbage collected\n// In this case, all the notes linked to the `viewer` will be retained\nconst disposable = environment.retain(operation);\n\n\n// Whenever you don't need that data anymore and it's okay for Relay to garbage collect it,\n// you can dispose of the retain\ndisposable.dispose();\n")),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction updateUserNote(dataID, body, title) {\n  commitLocalUpdate(environment, store => {\n    const note = store.get(dataID);\n\n    note.setValue(body, 'body');\n    note.setValue(title, 'title')\n  });\n}\n")),(0,o.kt)("h3",{id:"delete"},"Delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction deleteUserNote(dataID) {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes');\n\n    // Remove the note from the list of user notes.\n    const newUserNoteRecords = userNoteRecords.filter(x => x.getDataID() !== dataID);\n\n    // Delete the note from the store.\n    store.delete(dataID);\n\n    // Set the new list of notes.\n    user.setLinkedRecords(newUserNoteRecords, 'notes');\n  });\n}\n")),(0,o.kt)("h2",{id:"initial-local-state"},"Initial local state"),(0,o.kt)("p",null,"All new client-side schema fields default to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," value. Often however, you will want to set the initial state before querying local data.\nYou can use an updater function via ",(0,o.kt)("inlineCode",{parentName:"p"},"commitLocalUpdate")," to prime local state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\ncommitLocalUpdate(environment, store => {\n  const user = store.getRoot().getLinkedRecord('viewer');\n\n  // initialize user notes to an empty array.\n  user.setLinkedRecords([], 'notes');\n});\n")))}p.isMDXComponent=!0}}]);