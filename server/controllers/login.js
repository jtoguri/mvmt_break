const verifyUser = require('../services/verifyUser');

module.exports = async (req, res) => {
  const { username , password } = req.body;
  const token = await verifyUser(username, password);
  
  return token ? res.json(token) :
    res.status(400).send("Invalid username or password"); 
}
