require('dotenv').config()
const axios = require('axios');
const { findLastWord } = require('../exercices/2-encuentre-la-ultima-palabra/findLastWord');

axios.post(
  `${process.env.URL}/exercice2`,
  { findLastWord: findLastWord.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
