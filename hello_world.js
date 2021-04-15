'use strict';

const hello = callback => {
  callback('Hello World!');
}

hello(text => {
  console.log(text);
});
