const express = require('express');
const app = express();

const port = 3001;

const { dbconnect } = require('./db/index');


app.get('/api', (req, res) => {
  dbconnect().then(db => {
    return db.collection('exercises').find().toArray();
  })
  .then(exercises => res.send(exercises));
});

app.get('/api/randomExercise', (req, res) => {
  dbconnect().then(db => {
    return db.collection('exercises').aggregate([{$sample: {size: 1}}])
      .toArray();
  })
  .then(exercise => res.send(exercise));
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
