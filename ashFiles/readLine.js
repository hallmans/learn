//write a promise that gives you a prompt
// Day 15

const { resolve } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var name = [];

function promisedPrompt(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, function (answer) {
      resolve(answer);
      rl.close();
    });
  });
}

// Consumer Side of Promise /////
promisedPrompt('What is your first name?')
  .then((answer) => {
    name.push(answer);
    return promisedPrompt('What is your last name?');
  })
  .then((answer) => {
    name.push(answer);
    console.log('Hello', name);
  })
  .catch((error) => {
    console.log('  >>>> ERROR!!!', error);
  });
