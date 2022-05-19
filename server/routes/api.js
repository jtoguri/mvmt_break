const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

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

module.exports = router;
