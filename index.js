const rutasUsuarios = require("./rutas/rutasUsuarios");
const rutasProductos = require("./rutas/rutasProductos");
const rutasLibros = require("./rutas/rutasLibros");
const rutasVentas = require("./rutas/rutasVentas");
const knex = require("knex");
const express = require("express");
const app = express();
const port = 3010;
const path = require("path");

const database = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "my-secret-pw",
    database: "cosas",
  },
});

database.schema.hasTable("users").then(function (exists) {
  if (!exists) {
    return database.schema.createTable("users", function (t) {
      t.increments("id").primary();
      t.string("name", 100);
      t.string("lastname", 100);
    });
  }
});

database.schema.hasTable("products").then(function (exists) {
  if (!exists) {
    return database.schema.createTable("products", function (t) {
      t.increments("id").primary();
      t.string("name", 100);
    });
  }
});

database.schema.hasTable("books").then(function (exists) {
  if (!exists) {
    return database.schema.createTable("books", function (t) {
      t.increments("id").primary();
      t.string("title", 100);
      t.string("author", 100);
    });
  }
});

database.schema.hasTable("sales").then(function (exists) {
  if (!exists) {
    return database.schema.createTable("sales", function (t) {
      t.increments("id").primary();
      t.integer("user_id").references("id").inTable("users");
      t.integer("book_id").references("id").inTable("books");
    });
  }
});

app.use(express.static("static"));

app.use(express.json());

app.use(rutasUsuarios);
app.use(rutasProductos);
app.use(rutasLibros);
app.use(rutasVentas);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
