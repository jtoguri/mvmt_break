const express = require('express');
const bodyParser = require('body-parser');

const { createInteraction } = require('../db/db_interactions'); 

//const { getRandomExercise } = createInteraction();

//const {conn} = require('../db/index')

const router = express.Router();

router.use(bodyParser.json());

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

router.post('/login', async (req, res) => {
  const { username , password } = req.body;
  const { getUser } = await createInteraction();
  const user = await getUser(username);
  
  if (!user) {
    return res.status(400).send("Invalid username or password");
  }
  //console.log(user);
  res.send("db query");  
})

module.exports = router;
