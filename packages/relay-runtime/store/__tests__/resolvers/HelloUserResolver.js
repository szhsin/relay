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

import type {DataID} from '../../../util/RelayRuntimeTypes';

/**
 * @RelayResolver
 * @fieldName hello_user(id: ID!)
 * @edgeTo User
 * @onType Query
 *
 * This should return the User
 */
function helloUserResolver(args: {id: string}): DataID {
  return args.id;
}

module.exports = helloUserResolver;
