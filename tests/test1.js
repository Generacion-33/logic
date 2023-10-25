require('dotenv').config()
const axios = require('axios');

const { findLastLetter } = require('../exercices/1-encuentre-la-ultima-letra/findLastLetter');

axios.post(
  `${process.env.URL}/exercice1`,
  { findLastLetter: findLastLetter.toString() })
  .then(response => {
    const { message } = response.data;
    console.log(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
