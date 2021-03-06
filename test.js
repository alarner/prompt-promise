/**
 * prompt-promise <https://github.com/tunnckoCore/prompt-promise>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var promptPromise = require('./index');

// describe('prompt-promise', function() {
//   // body
// });

var res = [];

promptPromise('username: ')
.then(function username(val) {
  res.push(val);
  return promptPromise.password('password: ');
})
.then(function pasword(val) {
  res.push(val);
  console.log(res);
})