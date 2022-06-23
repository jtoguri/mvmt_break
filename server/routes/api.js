const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const verify = require('../config/passport.js');

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

  const payload = {
    id: user._id,
    username: user.username
  }

  jwt.sign(payload, "secret", { expiresIn: "10d" }, function(err, token)
  {
    res.json({
      success: true,
      token: "Bearer" + token
    });  
  });
})

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

router.get('/history/:token', async (req, res) => {
  const token = req.params.token.slice(6);

  jwt.verify(token, 'secret', async function(err, decoded) {
    if (err) {
      console.log(err);
      return;
    }

    const { getHistory } = await createInteraction();

    console.log(decoded.id);

    const history = await getHistory(decoded.id);
    console.log(history);
    history ? res.send(history) : res.send("didnt work");
  });
})

module.exports = router;
