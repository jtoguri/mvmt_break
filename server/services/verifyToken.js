const jwt = require('jsonwebtoken');

module.exports = async (token) => {
  try {
    var decoded = jwt.verify(token, 'secret');
    
    return decoded.id;

  } catch(err) {
    console.log(err); 

    return { error: err };
  }
}
