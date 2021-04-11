const { Router } = require('express');
const RegisterService = require('../services/UserSevice');
const UserMiddlewares = require('../middlewares/UserVerification');
const createToken = require('../authentication/createToken');

const RegisterController = Router();

RegisterController.post('/', UserMiddlewares.validateFiels, async (req, res) => {
  const { name: userName, email: userEmail, password } = req.body;
  const newUser = await RegisterService.registerUser({ userName, userEmail, password });
  const { id, name, email } = newUser;
  const getToken = createToken({ id, name, email });
  return res.status(201).json({ token: getToken });
});

module.exports = RegisterController;
