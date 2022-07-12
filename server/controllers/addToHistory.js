const { createInteraction } = require('../db/db_interactions');

const { verifyToken } = require('../services');

module.exports = async (req, res) => {
  
  const token = req.body.token.slice(6);

  const decoded = await verifyToken(token);

  if (decoded.error) {
    return res.status(400).send(decoded.error);
  }

  const data = {
    user_id: decoded.id,
    date: req.body.date,
    exercise: req.body.exercise
  };

  const { updateHistory } = await createInteraction();

  const newEntry = await updateHistory(data);

  if (!newEntry.acknowledged) {
    console.log("some error happened");
    return;
  }

  res.send(true); 
}
