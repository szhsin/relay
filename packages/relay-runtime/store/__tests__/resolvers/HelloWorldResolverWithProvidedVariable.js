/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall relay
 */

'use strict';

const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

import type {HelloWorldResolverWithProvidedVariable$key} from './__generated__/HelloWorldResolverWithProvidedVariable.graphql';

/**
 * @RelayResolver
 * @fieldName hello_world_with_provided_variable
 * @onType Query
 * @rootFragment HelloWorldResolverWithProvidedVariable
 *
 * Say `Hello ${world}!`
 */
function HelloWorldResolverWithProvidedVariableResolver(
  fragmentKey: HelloWorldResolverWithProvidedVariable$key,
): string {
  const data = readFragment(
    graphql`
      fragment HelloWorldResolverWithProvidedVariable on Query
      @argumentDefinitions(
        provided_variable: {
          type: "String!"
          provider: "./HelloWorldProvider.js"
        }
      ) {
        hello(world: $provided_variable)
      }
    `,
    fragmentKey,
  );
  return `Hello, ${data?.hello ?? 'unknown'}`;
}

module.exports = HelloWorldResolverWithProvidedVariableResolver;
