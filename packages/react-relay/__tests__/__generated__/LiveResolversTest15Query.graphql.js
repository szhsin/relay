/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<98ebc2b474850f75a7c2691ab00dbe59>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import queryLiveUserResolverAlwaysSuspendResolver from "../../../relay-runtime/store/__tests__/resolvers/LiveUserAlwaysSuspendResolver.js";
// Type assertion validating that `queryLiveUserResolverAlwaysSuspendResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryLiveUserResolverAlwaysSuspendResolver: () => LiveState<any>);
export type LiveResolversTest15Query$variables = {||};
export type LiveResolversTest15Query$data = {|
  +live_user_resolver_always_suspend: ?{|
    +name: ?string,
  |},
|};
export type LiveResolversTest15Query = {|
  response: LiveResolversTest15Query$data,
  variables: LiveResolversTest15Query$variables,
|};
*/

var node/*: ClientRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "LiveResolversTest15Query",
    "selections": [
      {
        "kind": "ClientEdgeToServerObject",
        "operation": require('./ClientEdgeQuery_LiveResolversTest15Query_live_user_resolver_always_suspend.graphql'),
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "live_user_resolver_always_suspend",
          "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/LiveUserAlwaysSuspendResolver'),
          "path": "live_user_resolver_always_suspend"
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "live_user_resolver_always_suspend",
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
    "name": "LiveResolversTest15Query",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "live_user_resolver_always_suspend",
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
    "cacheID": "076de4b480b18d953185941a880543b3",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest15Query",
    "operationKind": "query",
    "text": null
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "649fcb31c6138f80ad0ebb97c80d9ae6";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  LiveResolversTest15Query$variables,
  LiveResolversTest15Query$data,
>*/);
