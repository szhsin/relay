/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<7e1639025882961a6cb827aab1f601ce>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import type { RelayResolversWithOutputTypeTestFragment$fragmentType } from "./RelayResolversWithOutputTypeTestFragment.graphql";
import queryTodoResolver from "../../../relay-runtime/store/__tests__/resolvers/QueryTodo.js";
// Type assertion validating that `queryTodoResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryTodoResolver: (
  args: {|
    todoID: string,
  |}, 
) => LiveState<?Query__todo$normalization>);
import type { Query__todo$normalization } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/Query__todo$normalization.graphql";
export type RelayResolversWithOutputTypeTestTodoQuery$variables = {|
  id: string,
|};
export type RelayResolversWithOutputTypeTestTodoQuery$data = {|
  +todo: ?{|
    +$fragmentSpreads: RelayResolversWithOutputTypeTestFragment$fragmentType,
  |},
|};
export type RelayResolversWithOutputTypeTestTodoQuery = {|
  response: RelayResolversWithOutputTypeTestTodoQuery$data,
  variables: RelayResolversWithOutputTypeTestTodoQuery$variables,
|};
*/

var node/*: ClientRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "todoID",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "RelayResolversWithOutputTypeTestTodoQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "Todo",
        "backingField": {
          "alias": null,
          "args": (v1/*: any*/),
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "todo",
          "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/QueryTodo'),
          "path": "todo",
          "normalizationInfo": {
            "concreteType": "Todo",
            "plural": false,
            "normalizationNode": require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/Query__todo$normalization.graphql')
          }
        },
        "linkedField": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Todo",
          "kind": "LinkedField",
          "name": "todo",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RelayResolversWithOutputTypeTestFragment"
            }
          ],
          "storageKey": null
        }
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayResolversWithOutputTypeTestTodoQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "todo",
            "args": (v1/*: any*/),
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "fe781161d380b635dc891a75236faebd",
    "id": null,
    "metadata": {},
    "name": "RelayResolversWithOutputTypeTestTodoQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "936ff6efc3de794eed3131908296dcb9";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  RelayResolversWithOutputTypeTestTodoQuery$variables,
  RelayResolversWithOutputTypeTestTodoQuery$data,
>*/);
