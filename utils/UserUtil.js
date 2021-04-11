const validateEmailFormat = (email) => {
  const regex = /^[a-zA-Z0-9]+@[a-z]+\.com$/;
  const isValid = regex.test(email);
  return isValid;
};

const validatePasswordLength = (password) => {
  const validatePass = password.length > 5;
  return validatePass;
};

module.exports = {
  validateEmailFormat,
  validatePasswordLength,
};
