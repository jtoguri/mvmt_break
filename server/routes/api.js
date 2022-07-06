const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const userRouter = require('./users');

//Passport code that I couldn't get working, just using jwt's right now
//const passport = require('passport');
//const verify = require('../config/passport.js');

const { createInteraction } = require('../db/db_interactions'); 

const router = express.Router();

router.use(bodyParser.json());

// Following the '/api' path shows all the exercises in the db for now
router.get('/', async (req, res) => {
  const { getAllExercises } = await createInteraction();
  const exercises = await getAllExercises();
  res.send(exercises);
})

// Sends a randomExercise back to the client
router.get('/randomExercise', async (req, res) => {
  const { getRandomExercise } = await createInteraction();
  const exercise = await getRandomExercise();

  res.send(exercise);
})

router.use('/users', userRouter); 

router.post('/history', async (req, res) => {
  const { updateHistory } = await createInteraction();
  //const value = await verify(passport, getUserById);
  //console.log(value);
  const token = req.body.token.slice(6);

  jwt.verify(token, 'secret', async function(err, decoded) {
    if (err) {
      console.log(err);
      return;
    }
    
    const data = {
      user_id: decoded.id,
      date: req.body.date,
      exercise: req.body.exercise
    };

    const newEntry = await updateHistory(data);

    if (!newEntry.acknowledged) {
      console.log("some error happened");
      return;
    }

    res.send(true); 
  });
})

module.exports = router;
