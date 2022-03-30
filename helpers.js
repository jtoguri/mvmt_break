// Helper functions

// Generate a random exercise from a given list
const getExercise = function(exercises) {
  const id = Math.floor(Math.random() * exercises.length);
  return exercises[id];
};

// Print out an exercise in human-readable format
const printInstructions = function(exercise) {
  const quantity = exercise.duration ? `${exercise.duration} min` : `${exercise.repCount} reps`;
  console.log(`\n${exercise.name} for ${quantity}`);
};

// Exercises in the history are identified by the date
const createIdentifier = function() {
  const date = new Date();
  const today = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  return today;
}

module.exports = {
  getExercise,
  printInstructions,
  createIdentifier
}