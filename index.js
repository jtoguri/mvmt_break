const { exercises } = require('./data.js');
const inquirer = require('inquirer');

const getExercise = function() {
  const id = Math.floor(Math.random() * exercises.length);
  return exercises[id];
}

const confirmCompletion = function() {
  const questions = [{
    type: 'confirm',
    name: 'complete',
    message: 'Did you complete this exercise?'
  }];

  return inquirer.prompt(questions).then(answers => {
    return answers.complete;
  });
}

let exercise = undefined;
let today = [];

const interaction = function() {
  let complete = false;
  let promiseState = 'new';

  let intervalHandler = setInterval(() => {
    if (promiseState === 'pending') {
      return;
    } else if (complete) {
      today.push(exercise);
      console.log(today);
      return clearInterval(intervalHandler);
    }

    exercise = getExercise();
    console.log(exercise);

    promiseState = 'pending';

    confirmCompletion().then(res => {
      complete = res;
      promiseState = 'complete';
    });
  }, 1);
}

interaction();