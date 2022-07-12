const jwt = require('jsonwebtoken');

module.exports = async (token) => {
  try {
    const decoded = jwt.verify(token, 'secret');
    
    return decoded; 

  } catch(err) {
    console.log(err); 

    return { error: err };
  }
}
