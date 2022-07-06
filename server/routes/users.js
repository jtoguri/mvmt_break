const express = require('express');
const bodyParser = require('body-parser');

const { login, getUserHistory } = require('../controllers');

const router = express.Router();

router.use(bodyParser.json());

router.post('/login', login);

router.get('/history/:token', getUserHistory);
/*
router.post('/history', addToHistory);
*/

//router.post('/', registerUser);

module.exports = router;
