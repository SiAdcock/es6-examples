'use strict';

function *oneToThree(){
  let i = 0;
  let max = 3;

  while (i < max) {
    yield ++i;
  }
}

// create an iterator based on the oneToThree generator
const addOne = oneToThree();

console.log('First execution of iterator.next():', addOne.next()); // { value: 1, done: false }
console.log('Second execution of iterator.next():', addOne.next()); // { value: 2, done: false }
console.log('Third execution of iterator.next():', addOne.next()); // { value: 3, done: false }
console.log('Final execution of iterator.next():', addOne.next()); //{ value: undefined, done: true }
