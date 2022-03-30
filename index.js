const inquirer = require('inquirer');
const fsPromises = require('fs/promises');

const { getExercise, printInstructions, createIdentifier } = require('./helpers.js');
const { exercises } = require('./data.js');

// Function to check if the user coompleted an exercise
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

// The interaction with user prompts them with a random exercise infinitely until one is completed or the process is escaped
const interaction = function() {
  const exercise = getExercise(exercises);
  printInstructions(exercise);

  confirmCompletion().then(res => {
    if (res) {
      console.log('Complete!, you did: ', exercise);
      
      const date = createIdentifier();
      
      // Once the user completes an exercise the history is updated, if there is no history yet it is created
      fsPromises.readFile('./history.json')
      .then(data => {
        const history = (JSON.parse(data));
        if (history[date]) {
          history[date].push(exercise);
        } else {
          history[date] = [exercise];
        }
        fsPromises.writeFile('./history.json', JSON.stringify(history, null, 2));
      })
      .catch(err => {
        const data = {};
        data[date] = [exercise]
        fsPromises.writeFile('./history.json', JSON.stringify(data, null, 2))
      });
      // fsPromises.appendFile('./history.json', JSON.stringify(exercise, null, 2))
      // .then(data => console.log(data))
      // .catch(err => console.log(err));
    } else {
      interaction();
    }
  });
}

interaction();