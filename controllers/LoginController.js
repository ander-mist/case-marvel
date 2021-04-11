const { Router } = require('express');
const UserMiddleware = require('../middlewares/UserVerification');
const UserService = require('../services/UserSevice');
const createToken = require('../authentication/createToken');
const { status, message } = require('../middlewares/statusCode');

const LoginController = Router();

LoginController.post('/', UserMiddleware.validateLoginFields, async (req, res) => {
  const { email: userEmail, password: userPass } = req.body;
  const [login] = await UserService.getUserLogin({ userEmail, userPass });
  if (!login) return res.status(status.Unauthorized).json(message.errorLogin);
  const { id, name, email } = login;
  const newToken = createToken({ id, name, email });
  return res.status(status.Created).json({ token: newToken });
});

module.exports = LoginController;
