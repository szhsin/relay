/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<80e0297ca8e0ad47aca13fe8fbed11b1>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import queryLiveConstantClientEdgeResolver from "../../../relay-runtime/store/__tests__/resolvers/LiveConstantClientEdgeResolver.js";
// Type assertion validating that `queryLiveConstantClientEdgeResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryLiveConstantClientEdgeResolver: () => LiveState<any>);
export type LiveResolversTest13Query$variables = {||};
export type LiveResolversTest13Query$data = {|
  +live_constant_client_edge: ?{|
    +name: ?string,
  |},
|};
export type LiveResolversTest13Query = {|
  response: LiveResolversTest13Query$data,
  variables: LiveResolversTest13Query$variables,
|};
*/

var node/*: ClientRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "LiveResolversTest13Query",
    "selections": [
      {
        "kind": "ClientEdgeToServerObject",
        "operation": require('./ClientEdgeQuery_LiveResolversTest13Query_live_constant_client_edge.graphql'),
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "live_constant_client_edge",
          "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/LiveConstantClientEdgeResolver'),
          "path": "live_constant_client_edge"
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "live_constant_client_edge",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LiveResolversTest13Query",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "live_constant_client_edge",
            "args": null,
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "b72940324ef479a8046c2a2023b7d081",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest13Query",
    "operationKind": "query",
    "text": null
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "5e0a692af3d1acd9f3fbcb5fe00b0e77";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  LiveResolversTest13Query$variables,
  LiveResolversTest13Query$data,
>*/);
