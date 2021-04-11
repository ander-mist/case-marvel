const jwt = require('jsonwebtoken');

const secret = 'secret-case-marvel';

const validateToken = (token) => {
  try {
    const checkToken = jwt.verify(token, secret);
    return checkToken;
  } catch (_err) {
    return null;
  }
};

module.exports = validateToken;
