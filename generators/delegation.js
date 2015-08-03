'use strict';

function *foo(){
  yield 1;
  // delegate to another generator
  yield *bar();
  yield 3;
}

function *bar() {
  yield 2;
}

for (let value of foo()) {
  console.log(value);
}
