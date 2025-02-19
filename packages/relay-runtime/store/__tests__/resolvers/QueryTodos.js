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

import type {Query__todos$normalization as ReturnType} from './__generated__/Query__todos$normalization.graphql';

/**
 * @RelayResolver
 * @onType Query
 * @fieldName todos(first: Int, last: Int)
 * @outputType TodoConnection
 * @live
 */
function QueryTodos(args: {
  first: ?number,
  last: ?number,
}): LiveState<?ReturnType> {
  return {
    read() {
      const todoIDs = Selectors.getTodoIDs(TODO_STORE.getState());
      return {
        edges: todoIDs.map(id => {
          return {
            cursor: null,
            node: {
              todo_id: String(id),
            },
          };
        }),
        pageInfo: {
          endCursor: null,
          startCursor: null,
          hasNextPage: false,
          hasPreviousPage: false,
        },
        count: todoIDs.length,
      };
    },
    subscribe(cb) {
      return TODO_STORE.subscribe(null, cb);
    },
  };
}

module.exports = QueryTodos;
