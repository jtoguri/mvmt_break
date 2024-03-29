const { createInteraction } = require('../db/db_interactions');

module.exports = async (req, res) => {
  const { getRandomExercise } = await createInteraction();

  const exercise = await getRandomExercise();

  console.log(exercise);
  
  return res.send(exercise);
};
