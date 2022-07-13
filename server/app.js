require('dotenv').config()

const express = require('express');
const apiRouter = require('./routes/api');

const port = process.env.PORT;

const app = express();

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.redirect('/api');
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
