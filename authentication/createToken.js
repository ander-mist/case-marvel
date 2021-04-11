const jwt = require('jsonwebtoken');

const secret = 'secret-case-marvel';

const headers = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, headers);
  return token;
};

module.exports = createToken;
