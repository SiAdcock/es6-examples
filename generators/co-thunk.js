'use strict';

/**
 * co wraps a generator and automatically executes it. It also creates the callback
 * of a yielded thunk. It handles any error and throws internally.
 */
var thunkify = require('thunkify');
var fs = require('fs');
var co = require('co');

// create a thunk out of fs.readFile
var read = thunkify(fs.readFile);

co(function *safeRead() {
  try {
    var content = yield read('./data/input.txt');
  }
  catch (e) {
    throw e;
  }
  console.log(content.toString());
}());
