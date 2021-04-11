const { status, message } = require('./statusCode');
const UserUtils = require('../utils/UserUtil');
const UserService = require('../services/UserSevice');

const validateFiels = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(status.Bad_Request).json(message.registerFields);
  }
  const validateEmail = UserUtils.validateEmailFormat(email);
  if (!validateEmail) {
    return res.status(status.Bad_Request).json(message.wrongEmailFormat);
  }
  const validetePass = UserUtils.validatePasswordLength(password);
  if (!validetePass) {
    return res.status(status.Bad_Request).json(message.invalidPassLength);
  }
  const validateRepeatedEmail = await UserService.getEmail(email);
  if (validateRepeatedEmail.length > 0) {
    return res.status(status.Conflict).json(message.repeatedEmail);
  }
  return next();
};

const validateLoginFields = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(status.Bad_Request).json(message.emailField);
  }
  if (!password) {
    return res.status(status.Bad_Request).json(message.passwordField);
  }
  return next();
};

module.exports = {
  validateFiels,
  validateLoginFields,
};
