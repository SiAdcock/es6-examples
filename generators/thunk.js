'use strict';

/**
 * a thunk converts a function that expects a callback:
 *
 * var file = readFile(fileName, callback);
 *
 * into a function that returns a function that expects a callback:
 *
 * var file = readFile(filename)(callback);
 */
var thunkify = require('thunkify');
var fs = require('fs');

// create a thunk out of fs.readFile
var read = thunkify(fs.readFile);

function *safeRead() {
  try {
    var content = yield read('./data/input.txt');
  }
  catch (e) {
    throw e;
  }
  console.log(content);
}

var iter = safeRead();

// iterator first yields a reference to a function that, when executed, will
// read the input file and execute a passed callback.
var readInputAndThen = iter.next().value;

// so let's execute that function and pass in a callback:
readInputAndThen(function(err, data) {

  // error will be caught inside the generator
  if (err) {
    iter.throw(err);
  }

  // call next, passing in the contents of the read file
  iter.next(data.toString());
});
