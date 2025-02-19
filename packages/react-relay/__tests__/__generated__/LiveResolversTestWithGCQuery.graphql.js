/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<1f2d716bb6ac54d0072e2a18893d8d75>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import type { LiveCounterWithPossibleMissingFragmentDataResolverFragment$key } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/LiveCounterWithPossibleMissingFragmentDataResolverFragment.graphql";
import queryLiveCounterWithPossibleMissingFragmentDataResolver from "../../../relay-runtime/store/__tests__/resolvers/LiveCounterWithPossibleMissingFragmentDataResolver.js";
// Type assertion validating that `queryLiveCounterWithPossibleMissingFragmentDataResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryLiveCounterWithPossibleMissingFragmentDataResolver: (
  rootKey: LiveCounterWithPossibleMissingFragmentDataResolverFragment$key, 
) => LiveState<any>);
export type LiveResolversTestWithGCQuery$variables = {||};
export type LiveResolversTestWithGCQuery$data = {|
  +live_counter_with_possible_missing_fragment_data: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof queryLiveCounterWithPossibleMissingFragmentDataResolver>["read"]>,
|};
export type LiveResolversTestWithGCQuery = {|
  response: LiveResolversTestWithGCQuery$data,
  variables: LiveResolversTestWithGCQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LiveResolversTestWithGCQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LiveCounterWithPossibleMissingFragmentDataResolverFragment"
        },
        "kind": "RelayLiveResolver",
        "name": "live_counter_with_possible_missing_fragment_data",
        "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/LiveCounterWithPossibleMissingFragmentDataResolver'),
        "path": "live_counter_with_possible_missing_fragment_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LiveResolversTestWithGCQuery",
    "selections": [
      {
        "name": "live_counter_with_possible_missing_fragment_data",
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
    "cacheID": "ee93be3ff70212f4339f103e293dab73",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTestWithGCQuery",
    "operationKind": "query",
    "text": "query LiveResolversTestWithGCQuery {\n  ...LiveCounterWithPossibleMissingFragmentDataResolverFragment\n}\n\nfragment LiveCounterWithPossibleMissingFragmentDataResolverFragment on Query {\n  me {\n    id\n  }\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "e0069f7ccf8ba4baa2b3bfeaa62199fa";
}

module.exports = ((node/*: any*/)/*: Query<
  LiveResolversTestWithGCQuery$variables,
  LiveResolversTestWithGCQuery$data,
>*/);
