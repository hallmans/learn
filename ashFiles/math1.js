//

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promisedPrompt(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, (answer) => {
      resolve(answer);
    });
  });
}
function prompt() {
  return promisedPrompt('Enter your number: ').then((arg) => {
    var max = Number(arg);
    var result = addEm(max);
    console.log(max, ':', result);
    prompt();
  });
}

function addEm(a) {
  var result = 0;
  while (a > 0) {
    result = result + a;
    a = a - 1;
  }
  return result;
}
prompt();
