/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<ae7d18dcda913649f64fbdf9f9b0d36b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { UserAnotherClientEdgeResolver$key } from "./UserAnotherClientEdgeResolver.graphql";
import type { FragmentType } from "relay-runtime";
import userAnotherClientEdgeResolver from "../UserAnotherClientEdgeResolver.js";
// Type assertion validating that `userAnotherClientEdgeResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userAnotherClientEdgeResolver: (
  rootKey: UserAnotherClientEdgeResolver$key, 
) => mixed);
declare export opaque type RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$fragmentType: FragmentType;
type ClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$variables = any;
export type RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$data = {|
  +another_client_edge: ?{|
    +id: string,
    +name: ?string,
  |},
  +id: string,
  +name: ?string,
  +$fragmentType: RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$fragmentType,
|};
export type RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$key = {
  +$data?: RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$data,
  +$fragmentSpreads: RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true,
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge.graphql'),
      "identifierField": "id"
    }
  },
  "name": "RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "ClientEdgeToServerObject",
      "operation": require('./ClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge__another_client_edge.graphql'),
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UserAnotherClientEdgeResolver"
        },
        "kind": "RelayResolver",
        "name": "another_client_edge",
        "resolverModule": require('./../UserAnotherClientEdgeResolver'),
        "path": "another_client_edge"
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "another_client_edge",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "e84993737b8022e99659ef3064e0aeea";
}

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$fragmentType,
  RefetchableClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$data,
  ClientEdgeQuery_ResolverGCTestResolverClientEdgeToServerRecursiveQuery_me__client_edge$variables,
>*/);
