
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bryanaragundi025:bryanjosue25@cluster0.nac6jyo.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch((error) => console.error('Error de conexión a la base de datos:', error));

