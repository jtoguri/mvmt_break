const express = require('express');
const app = express();

const port = 3001;

const { conn } = require('./db/index');


app.get('/api', async (req, res) => {
  const db = await conn();
  const exercises = await db.collection('exercises').find().toArray();
  res.send(exercises);
});

app.get('/api/randomExercise', (req, res) => {
  conn().then(db => {
    return db.collection('exercises').aggregate([{$sample: {size: 1}}])
      .toArray();
  })
  .then(exercise => res.send(exercise));
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
