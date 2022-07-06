const { verifyToken, getHistoryByUserId } = require('../services');

module.exports = async (req, res) => {
  const token = req.params.token.slice(6);

  const userId = await verifyToken(token);
  console.log(userId);

  if (userId.error) {
    return res.status(400).send(userId.error);
  }
  
  const history = await getHistoryByUserId(userId);

  return res.send(history);
}
