const RepositorioLibros = require("../repositorios/books.repository");

const Servicio = {
  getAllBooks,
  getOneBook,
  addBook,
  deleteBook,
};

function getOneBook(id) {
  return RepositorioLibros.getBook(id);
}

function getAllBooks() {
  return RepositorioLibros.getAllBooks();
}

function addBook(nombre, autor) {
  return RepositorioLibros.addBook(title, author);
}

function deleteBook(id) {
  return RepositorioLibros.deleteBook(id);
}

module.exports = Servicio;
