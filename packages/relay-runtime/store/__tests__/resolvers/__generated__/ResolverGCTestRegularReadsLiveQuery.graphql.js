/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<19a8796ce96f640a4edce32ca4be2dfc>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { CounterPlusOneResolver$key } from "./CounterPlusOneResolver.graphql";
import queryCounterPlusOneResolver from "../CounterPlusOneResolver.js";
// Type assertion validating that `queryCounterPlusOneResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryCounterPlusOneResolver: (
  rootKey: CounterPlusOneResolver$key, 
) => mixed);
export type ResolverGCTestRegularReadsLiveQuery$variables = {||};
export type ResolverGCTestRegularReadsLiveQuery$data = {|
  +counter_plus_one: ?$Call<<R>((...empty[]) => R) => R, typeof queryCounterPlusOneResolver>,
|};
export type ResolverGCTestRegularReadsLiveQuery = {|
  response: ResolverGCTestRegularReadsLiveQuery$data,
  variables: ResolverGCTestRegularReadsLiveQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResolverGCTestRegularReadsLiveQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CounterPlusOneResolver"
        },
        "kind": "RelayResolver",
        "name": "counter_plus_one",
        "resolverModule": require('./../CounterPlusOneResolver'),
        "path": "counter_plus_one"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ResolverGCTestRegularReadsLiveQuery",
    "selections": [
      {
        "name": "counter_plus_one",
        "args": null,
        "fragment": {
          "kind": "InlineFragment",
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
    "cacheID": "4c84cb98fb26736f61b61a32981f4d35",
    "id": null,
    "metadata": {},
    "name": "ResolverGCTestRegularReadsLiveQuery",
    "operationKind": "query",
    "text": "query ResolverGCTestRegularReadsLiveQuery {\n  ...CounterPlusOneResolver\n}\n\nfragment CounterPlusOneResolver on Query {\n  ...LiveCounterResolver\n}\n\nfragment LiveCounterResolver on Query {\n  me {\n    id\n  }\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "03c4b937281951c3316bbc36159a1273";
}

module.exports = ((node/*: any*/)/*: Query<
  ResolverGCTestRegularReadsLiveQuery$variables,
  ResolverGCTestRegularReadsLiveQuery$data,
>*/);
