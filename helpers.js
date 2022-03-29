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

module.exports = {
  getExercise,
  printInstructions
}