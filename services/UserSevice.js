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

const editUser = async (payload) => {
  const edited = await User.update({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  }, {
    where: {
      id: payload.id,
    },
  });
  return edited;
};

module.exports = {
  registerUser,
  getEmail,
  getUserLogin,
  editUser,
};
