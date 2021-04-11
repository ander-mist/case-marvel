const { User } = require('../models');

const registerUser = async (payload) => {
  const newUser = await User.create({
    name: payload.userName,
    email: payload.userEmail,
    password: payload.password,
  });
  return newUser;
};

const getEmail = async (userEmail) => {
  const result = await User.findAll({
    where: {
      email: userEmail,
    },
  });
  return result;
};

const getUserLogin = async (payload) => {
  const userData = await User.findAll({
    where: {
      email: payload.userEmail,
      password: payload.userPass,
    },
  });
  return userData;
};

module.exports = {
  registerUser,
  getEmail,
  getUserLogin,
};
