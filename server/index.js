const express = require('express');
const app = express();

const port = 3001;

app.get('/api', (req, res) => {
  res.send('connected to the api');
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
