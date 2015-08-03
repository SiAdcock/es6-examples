'use strict';

function *foo(){
  let i = yield 'Old value';
  console.log(i);
}

// create an iterator based on the generator
const iter = foo();

// first call to next() will yield at line 4, returning yielded value
console.log(iter.next().value);

// value passed into the second next() call will be
// returned as the result of the yield statement when
// the generator continues
iter.next('New Value');
