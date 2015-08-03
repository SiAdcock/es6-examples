'use strict';

function *oneToThree(){
  let i = 0;
  let max = 3;

  while (i < max) {
    yield ++i;
  }
}

// no need to explicitly create an iterator, for...of will do this for us
for (let value of oneToThree()) {

  // logs the value property of the returned state object
  console.log(value);
}

// the loop will exit when done === true
