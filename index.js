const express = require('express');
const cors = require('cors');
const Controller = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.use('/login', Controller.LoginController);

app.use('/register', Controller.RegisterController);

app.use('/user', Controller.UserController);

app.use('/marvel', Controller.MarvelController);

app.listen(PORT, () => console.log(`Listen at Port: ${PORT}`));
