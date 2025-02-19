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

const {
  TODO_STORE,
  Selectors,
} = require('relay-runtime/store/__tests__/resolvers/ExampleTodoStore');

import type {Query__todo$normalization as ReturnType} from './__generated__/Query__todo$normalization.graphql';
/**
 * @RelayResolver
 * @onType Query
 * @fieldName todo(todoID: ID!)
 * @outputType Todo
 * @live
 */
function QueryTodo(args: {todoID: string}): LiveState<?ReturnType> {
  return {
    read() {
      const todo = Selectors.getTodo(TODO_STORE.getState(), args.todoID);
      if (todo != null) {
        return {
          todo_id: String(todo.todoID),
        };
      } else {
        return null;
      }
    },
    subscribe(cb) {
      return TODO_STORE.subscribe(args.todoID, cb);
    },
  };
}

module.exports = QueryTodo;
