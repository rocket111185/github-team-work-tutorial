'use strict';

const greet = (callback, name) => {
  callback(`Hello ${name}!`);
};

module.exports = { greet };
