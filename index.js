const { exercises } = require('./data.js');
const inquirer = require('inquirer');

const { getExercise, printInstructions } = require('./helpers.js')

const confirmCompletion = function() {
  const questions = [{
    type: 'confirm',
    name: 'complete',
    message: 'Did you complete this exercise?',
    default: false
  }];

  return inquirer.prompt(questions).then(answers => {
    return answers.complete;
  });
}

let exercise = undefined;
let today = [];

// const interaction = function() {
//   let complete = false;
//   let promiseState = 'new';

//   let intervalHandler = setInterval(() => {
//     if (promiseState === 'pending') {
//       return;
//     } else if (complete) {
//       today.push(exercise);
//       console.log(today);
//       return clearInterval(intervalHandler);
//     }

//     exercise = getExercise(exercises);
//     printInstructions(exercise);

//     promiseState = 'pending';

//     confirmCompletion().then(res => {
//       complete = res;
//       promiseState = 'complete';
//     });
//   }, 1);
// }

const interaction = function() {
  exercise = getExercise(exercises);
  printInstructions(exercise);

  confirmCompletion().then(res => {
    if (res) {
      console.log('Complete!, you did: ', exercise);
    } else {
      interaction();
    }
  });
}

interaction();