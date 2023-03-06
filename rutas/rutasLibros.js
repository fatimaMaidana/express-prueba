var express = require("express");
var router = express.Router();
const bookService = require("../servicios/bookService");

router.get("/book", async function (req, res) {
  const response = await bookService.getAllBooks();
  res.send(response);
});

router.get("/book/:id", async function (req, res) {
  const response = await bookService.getOneBook(req.params.id);
  res.send(response);
});

router.post("/book", async function (req, res) {
  const response = await bookService.addBook(req.body.title, req.body.author);
  res.send(response);
});

router.delete("/book/:id", async function (req, res) {
  const response = await bookService.deleteBook(req.params.id);
  res.send(response);
});

module.exports = router;
