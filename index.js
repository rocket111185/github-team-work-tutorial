'use strict';

const { greet } = require('./lib/greet.js');

greet(text => {
  console.log(text);
}, 'World');
