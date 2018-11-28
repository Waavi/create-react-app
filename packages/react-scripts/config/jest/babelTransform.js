// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  // TODO: WAAVI CUSTOM
  plugins: [
    require.resolve('babel-plugin-jsx-classnames'),
    require.resolve('babel-plugin-transform-decorators-legacy'),
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          "@": ['./src']
        }
      },
    ],
  ],
  babelrc: false,
});
