const rutasUsuarios = require('./rutas/rutasUsuarios');
const rutasProductos = require('./rutas/rutasProductos');
const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.use(express.json());

app.use(rutasUsuarios);
app.use(rutasProductos);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
