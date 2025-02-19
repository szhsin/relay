/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<69c5a4a6ead6517e1512d31d03c9142b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import type { LiveCounterResolver$key } from "./../resolvers/__generated__/LiveCounterResolver.graphql";
import queryCounterResolver from "../resolvers/LiveCounterResolver.js";
// Type assertion validating that `queryCounterResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryCounterResolver: (
  rootKey: LiveCounterResolver$key, 
) => LiveState<any>);
export type RelayReferenceMarkerTestResolverWithFragmentDependencyQuery$variables = {||};
export type RelayReferenceMarkerTestResolverWithFragmentDependencyQuery$data = {|
  +counter: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof queryCounterResolver>["read"]>,
|};
export type RelayReferenceMarkerTestResolverWithFragmentDependencyQuery = {|
  response: RelayReferenceMarkerTestResolverWithFragmentDependencyQuery$data,
  variables: RelayReferenceMarkerTestResolverWithFragmentDependencyQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReferenceMarkerTestResolverWithFragmentDependencyQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LiveCounterResolver"
        },
        "kind": "RelayLiveResolver",
        "name": "counter",
        "resolverModule": require('./../resolvers/LiveCounterResolver'),
        "path": "counter"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayReferenceMarkerTestResolverWithFragmentDependencyQuery",
    "selections": [
      {
        "name": "counter",
        "args": null,
        "fragment": {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "me",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "kind": "ClientExtension",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__id",
                      "storageKey": null
                    }
                  ]
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Query",
          "abstractKey": null
        },
        "kind": "RelayResolver",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "84afc78e18bb67a57072603b0993c2cc",
    "id": null,
    "metadata": {},
    "name": "RelayReferenceMarkerTestResolverWithFragmentDependencyQuery",
    "operationKind": "query",
    "text": "query RelayReferenceMarkerTestResolverWithFragmentDependencyQuery {\n  ...LiveCounterResolver\n}\n\nfragment LiveCounterResolver on Query {\n  me {\n    id\n  }\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "7767fab563f2411651b1b4bf2273b512";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReferenceMarkerTestResolverWithFragmentDependencyQuery$variables,
  RelayReferenceMarkerTestResolverWithFragmentDependencyQuery$data,
>*/);
