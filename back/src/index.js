// index.js

const express = require('express');
const app = express();
const cors = require('cors');

//Cors config
app.use(cors());


// Middlewares
app.use(express.json());



// Importa el enrutador desde api/routes/index.js
const router = require("./api/routes/index");

// Asigna el enrutador a las rutas
app.use(router);

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});