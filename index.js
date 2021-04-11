const express = require('express');
const Controller = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/login', Controller.LoginController);

app.use('/register', Controller.RegisterController);

app.listen(PORT, () => console.log(`Listen at Port: ${PORT}`));
