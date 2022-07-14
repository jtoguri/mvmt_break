require('dotenv').config()

const express = require('express');
const cors = require('cors');

const apiRouter = require('./routes/api');

const port = process.env.PORT;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
