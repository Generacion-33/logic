require('dotenv').config()
const axios = require('axios');
const { sumValues } = require('../exercices/5-suma-los-elementos-de-un-arreglo/sumValues');

axios.post(
  `${process.env.URL}/exercice5`,
  { sumValues: sumValues.toString() })
  .then(response => {
    const { message } = response.data;
    console.log(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
