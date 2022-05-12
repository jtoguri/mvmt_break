const express = require('express');
const app = express();

const port = 3001;

const apiRouter = require('./routes/api');

//const { conn } = require('./db/index');

app.use('/api', apiRouter);

/*app.get('/api', async (req, res) => {
  //const connection = await conn;
  const db =  await conn();
  console.log(db);
  const exercises = await db.collection('exercises').find().toArray();
  res.send(exercises);
});*/

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
