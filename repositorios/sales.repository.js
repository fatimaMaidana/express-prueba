const knex = require("knex");
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

function getAllSales() {
  return database("sales");
}

function getSale(id) {
  return database("sales").where("id", id);
}

const RepositorioVentas = {
  getAllSales,
  getSale,
};

module.exports = RepositorioVentas;
