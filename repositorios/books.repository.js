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

function getAllBooks() {
  return database("books");
}

function getBook(id) {
  return database("books").where("id", id);
}

async function addBook(title) {
  const unId = await database("books").insert({ title: title, author: author });
  const id = unId[0];
  return getBook(id);
}

function deleteBook(id) {
  return database("books").where("id", id).del();
}

const RepositorioLibros = {
  getAllBooks,
  getBook,
  addBook,
  deleteBook,
};

module.exports = RepositorioLibros;
