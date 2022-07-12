const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const userRouter = require('./users');
const exerciseRouter = require('./exercises');

//Passport code that I couldn't get working, just using jwt's right now
//const passport = require('passport');
//const verify = require('../config/passport.js');

const { createInteraction } = require('../db/db_interactions'); 

const router = express.Router();

router.use(bodyParser.json());

// Following the '/api' path shows all the exercises
/*router.get('/', async (req, res) => {
  const { getAllExercises } = await createInteraction();
  const exercises = await getAllExercises();
  res.send(exercises);
})*/

router.use('/exercises', exerciseRouter);

router.use('/users', userRouter); 

module.exports = router;
