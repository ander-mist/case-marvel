const { Router } = require('express');
// const validateToken = require('../authentication/validateToken');
const UserMiddleware = require('../middlewares/UserVerification');
const UserService = require('../services/UserSevice');
const { status } = require('../middlewares/statusCode');

const UserController = Router();

UserController.get('/:id', UserMiddleware.validateAuth, async (req, res) => {
  const { id } = req.params;
  const userInfo = await UserService.getUserInfo(id);
  return res.status(status.Ok).json(userInfo);
});

UserController.post('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;
  await UserService.editUser({
    id, name, email, password,
  });
  return res.status(status.Ok).json({ name, email });
});

module.exports = UserController;
