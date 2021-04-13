const { Router } = require('express');
const validateToken = require('../authentication/validateToken');
const UserMiddleware = require('../middlewares/UserVerification');
const UserService = require('../services/UserSevice');
const { status } = require('../middlewares/statusCode');

const UserController = Router();

UserController.get('/', UserMiddleware.validateAuth, async (req, res) => {
  const { authorization } = req.headers;
  const userInfo = validateToken(authorization);
  return res.status(status.Ok).json(userInfo);
});

UserController.put('/:id', UserMiddleware.validateAuth, async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;
  await UserService.editUser({
    id, name, email, password,
  });
  return res.status(status.Ok).json({ name, email });
});

module.exports = UserController;
