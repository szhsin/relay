/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<47acba37fd424ff8ed0434ec89e52395>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import queryLiveResolverReturnUndefinedResolver from "../../../relay-runtime/store/__tests__/resolvers/QueryLiveResolverReturnsUndefined.js";
// Type assertion validating that `queryLiveResolverReturnUndefinedResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryLiveResolverReturnUndefinedResolver: () => LiveState<any>);
export type LiveResolversTest19Query$variables = {||};
export type LiveResolversTest19Query$data = {|
  +live_resolver_return_undefined: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof queryLiveResolverReturnUndefinedResolver>["read"]>,
|};
export type LiveResolversTest19Query = {|
  response: LiveResolversTest19Query$data,
  variables: LiveResolversTest19Query$variables,
|};
*/

var node/*: ClientRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LiveResolversTest19Query",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": null,
            "kind": "RelayLiveResolver",
            "name": "live_resolver_return_undefined",
            "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/QueryLiveResolverReturnsUndefined'),
            "path": "live_resolver_return_undefined"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LiveResolversTest19Query",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "live_resolver_return_undefined",
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
    "cacheID": "89350d921d4f69ed6e25f320c93d01cc",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest19Query",
    "operationKind": "query",
    "text": null
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "a826f5308e33432b1204c11b9f224675";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  LiveResolversTest19Query$variables,
  LiveResolversTest19Query$data,
>*/);
