var express = require('express');
var router = express.Router();
const productService = require('../servicios/productService');

router.get('/product', function (req, res) {
    const response = productService.getAllProducts()
    res.send(response);
});

router.get('/product/:id', function (req, res) {
    const response = productService.getOneProduct(req.params.id)
    res.send(response);
});

router.post('/product', function (req, res) {
    let id = req.body.id;
    let nombre = req.body.nombre;
    const response = productService.addProduct(id, nombre)
    res.send(response);
});

module.exports = router;