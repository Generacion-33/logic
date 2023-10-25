require('dotenv').config()
const axios = require('axios');
const { findSecondWord } = require('../exercices/3-encuentre-la-segunda-palabra/findSecondWord');

axios.post(
  `${process.env.URL}/exercice3`,
  { findSecondWord: findSecondWord.toString() })
  .then(response => {
    const { message } = response.data;
    console.log(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
