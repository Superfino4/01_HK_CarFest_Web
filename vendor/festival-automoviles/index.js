// index.js (Backend)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost/hkfestweb', { useNewUrlParser: true, useUnifiedTopology: true });

// Configurar body-parser
app.use(bodyParser.json());

// Definir rutas y lógica de la aplicación aquí

app.listen(PORT, () => {
    console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
