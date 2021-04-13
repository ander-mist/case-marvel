const status = {
  Ok: 200,
  Created: 201,
  No_Content: 204,
  Bad_Request: 400,
  Unauthorized: 401,
  Not_Found: 404,
  Conflict: 409,
};

const message = {
  registerFields: 'All fields must be filled',
  wrongEmailFormat: 'email must have the following format: "email@email.com"',
  invalidPassLength: 'password must have at least 6 chacteres',
  repeatedEmail: 'Email already exist',
  emailField: 'Email must not be empty',
  passwordField: 'Password must not be empty',
  errorLogin: 'Invalid Email or Password',
  tokenNotFound: 'Token not Found',
  invalidToken: 'Your Token is not valid or has expired',
};

module.exports = {
  status,
  message,
};
