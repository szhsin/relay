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

import type {LiveState} from '../../experimental-live-resolvers/LiveResolverStore';
import type {TodoSelfResolverFragment$key} from './__generated__/TodoSelfResolverFragment.graphql';

const {
  TODO_STORE,
  Selectors,
} = require('relay-runtime/store/__tests__/resolvers/ExampleTodoStore');

const {readFragment} = require('relay-runtime/store/ResolverFragments');
const {graphql} = require('relay-runtime');

import type {TodoItem} from 'relay-runtime/store/__tests__/resolvers/ExampleTodoStore';

/**
 * @RelayResolver
 * @onType Todo
 * @rootFragment TodoSelfResolverFragment
 * @fieldName self
 * @live
 */
function TodoSelfResolver(
  rootKey: TodoSelfResolverFragment$key,
): LiveState<?TodoItem> {
  const data = readFragment(
    graphql`
      fragment TodoSelfResolverFragment on Todo {
        todo_id
      }
    `,
    rootKey,
  );
  return {
    read() {
      if (data.todo_id == null) {
        return null;
      }
      return Selectors.getTodo(TODO_STORE.getState(), data.todo_id);
    },
    subscribe(cb) {
      return TODO_STORE.subscribe(data.todo_id, cb);
    },
  };
}

module.exports = TodoSelfResolver;
