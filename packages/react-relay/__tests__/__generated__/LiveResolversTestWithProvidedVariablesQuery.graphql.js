/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<58949bc803273e85b255320545d25a2c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { HelloWorldResolverWithProvidedVariable$key } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/HelloWorldResolverWithProvidedVariable.graphql";
import queryHelloWorldWithProvidedVariableResolver from "../../../relay-runtime/store/__tests__/resolvers/HelloWorldResolverWithProvidedVariable.js";
// Type assertion validating that `queryHelloWorldWithProvidedVariableResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryHelloWorldWithProvidedVariableResolver: (
  rootKey: HelloWorldResolverWithProvidedVariable$key, 
) => mixed);
export type LiveResolversTestWithProvidedVariablesQuery$variables = {||};
export type LiveResolversTestWithProvidedVariablesQuery$data = {|
  +hello_world_with_provided_variable: ?$Call<<R>((...empty[]) => R) => R, typeof queryHelloWorldWithProvidedVariableResolver>,
|};
export type LiveResolversTestWithProvidedVariablesQuery = {|
  response: LiveResolversTestWithProvidedVariablesQuery$data,
  variables: LiveResolversTestWithProvidedVariablesQuery$variables,
|};
type ProvidedVariablesType = {|
  +__relay_internal__pv__HelloWorldProviderjs: {|
    +get: () => string,
  |},
|};
*/

var providedVariablesDefinition/*: ProvidedVariablesType*/ = {
  "__relay_internal__pv__HelloWorldProviderjs": require('./../../../relay-runtime/store/__tests__/resolvers/HelloWorldProvider')
};

var node/*: ClientRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LiveResolversTestWithProvidedVariablesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HelloWorldResolverWithProvidedVariable"
        },
        "kind": "RelayResolver",
        "name": "hello_world_with_provided_variable",
        "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/HelloWorldResolverWithProvidedVariable'),
        "path": "hello_world_with_provided_variable"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "__relay_internal__pv__HelloWorldProviderjs"
      }
    ],
    "kind": "Operation",
    "name": "LiveResolversTestWithProvidedVariablesQuery",
    "selections": [
      {
        "name": "hello_world_with_provided_variable",
        "args": null,
        "fragment": {
          "kind": "InlineFragment",
          "selections": [
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "name": "hello",
                  "args": [
                    {
                      "kind": "Variable",
                      "name": "world",
                      "variableName": "__relay_internal__pv__HelloWorldProviderjs"
                    }
                  ],
                  "fragment": null,
                  "kind": "RelayResolver",
                  "storageKey": null
                }
              ]
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
    "cacheID": "351a1b4fbe95e1fe129fc4df1e8e8e56",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTestWithProvidedVariablesQuery",
    "operationKind": "query",
    "text": null,
    "providedVariables": providedVariablesDefinition
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "bcbd826ff5ff5e5c44b99ce303ce6686";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  LiveResolversTestWithProvidedVariablesQuery$variables,
  LiveResolversTestWithProvidedVariablesQuery$data,
>*/);
