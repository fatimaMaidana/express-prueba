const rutasUsuarios = require('./rutas/rutasUsuarios');
const rutasProductos = require('./rutas/rutasProductos');
const knex = require('knex');
const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

const database = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'my-secret-pw',
    database: 'cosas'
  }
});

database.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    return database.schema.createTable('users', function (t) {
      t.increments('id').primary();
      t.string('first_name', 100);
      t.string('last_name', 100);
      t.text('bio');
    });
  }
});

database.schema.hasTable('products').then(function (exists) {
  if (!exists) {
    return database.schema.createTable('products', function (t) {
      t.increments('id').primary();
      t.string('nombre', 100);
    });
  }
});


app.use(express.static('static'));

app.use(express.json());

app.use(rutasUsuarios);
app.use(rutasProductos);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
