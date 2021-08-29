const md5 = require('md5');

// for authorization server-side

const privatekey = '8b5f9a408f0053da2bcbc7ef7c44b3721e489eff';
const publicKey = '14857aa6a1bbef2fe500fcbb63ef8976';
const timestamp = new Date().getTime().toString();
const hash = md5(timestamp + privatekey + publicKey);

module.exports = {
  hash,
  timestamp,
  publicKey,
};

// 'https://gateway.marvel.com/'
// 'http://gateway.marvel.com/'
