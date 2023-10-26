require('dotenv').config()
const axios = require('axios');
const { getEmail } = require('../exercices/4-obtener-el-correo-de-un-usuario/getEmail');

axios.post(
  `${process.env.URL}/exercice4`,
  { getEmail: getEmail.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
