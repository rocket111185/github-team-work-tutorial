'use strict';

const hello = (callback, name) => {
  callback(`Hello ${name}!`);
}

hello(text => {
  console.log(text, 'World');
});
