const express = require('express');
const bodyParser = require('body-parser');

const { randomExercise } = require('../controllers');

const router = express.Router();

router.use(bodyParser.json());

router.get('/randomExercise', randomExercise);

module.exports = router;
