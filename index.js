const { exercises } = require("./data.js");

const getExercise = function() {
  const id = Math.floor(Math.random() * exercises.length);
  return exercises[id];
}

console.log(getExercise());