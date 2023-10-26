require('dotenv').config()
const axios = require('axios');
const { countNumbers } = require('../exercices/6-contar-los-numeros/countNumbers');

axios.post(
  `${process.env.URL}/exercice6`,
  { countNumbers: countNumbers.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
