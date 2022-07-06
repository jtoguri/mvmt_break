const jwt = require('jsonwebtoken');

const { createInteraction } = require('../db/db_interactions');

module.exports = async (username, password) => {
  const { getUser } = await createInteraction();
  const user = await getUser(username, password);
  
  if (!user) return null;

  const payload = {
    id: user._id,
    username: user.username
  };

  const token = jwt.sign(payload, "secret");

  return {
    success: true,
    token: "Bearer" + token
  };
}
