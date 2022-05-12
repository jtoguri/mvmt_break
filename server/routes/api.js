const express = require('express');

const { createInteraction } = require('../db/db_interactions'); 

//const { getRandomExercise } = createInteraction();

//const {conn} = require('../db/index')

const router = express.Router();

router.get('/', async (req, res) => {
  console.log(getAllExercises);
  const exercises = await getAllExercises();
  res.send(exercises);
})

router.get('/randomExercise', async (req, res) => {
  const { getRandomExercise } = await createInteraction();
  const exercise = await getRandomExercise();

  res.send(exercise);
})

module.exports = router;
