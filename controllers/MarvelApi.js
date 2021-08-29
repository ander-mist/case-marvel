const { Router } = require('express');
const axios = require('axios');
const hash = require('../hash/createHash');

const MarvelController = Router();

MarvelController.get('/', async (req, res) => {
  const getResponseApi = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?ts=${hash.timestamp}&apikey=${hash.publicKey}&hash=${hash.hash}`,
  ).then((response) => response.data.data.results).catch((error) => error);
  res.status(200).json(getResponseApi);
});

module.exports = MarvelController;

'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150'

'https://gateway.marvel.com:443/v1/public/characters?apikey=14857aa6a1bbef2fe500fcbb63ef8976'

'https://gateway.marvel.com/v1/public/characters?apikey=14857aa6a1bbef2fe500fcbb63ef8976'
