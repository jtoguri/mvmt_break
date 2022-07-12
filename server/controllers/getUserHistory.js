const { verifyToken, getHistoryByUserId } = require('../services');

module.exports = async (req, res) => {
  const token = req.params.token.slice(6);

  const decoded = await verifyToken(token);

  if (decoded.error) {
    return res.status(400).send(decoded.error);
  }

  const userId = decoded.id;
  
  const history = await getHistoryByUserId(userId);

  return res.send(history);
}
