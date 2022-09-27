var express = require('express');
var router = express.Router();
const productService = require('../servicios/productService');

router.get('/product', async function (req, res) {
    const response = await productService.getAllProducts()
    res.send(response);
});

router.get('/product/:id', async function (req, res) {
    const response = await productService.getOneProduct(req.params.id)
    res.send(response);
});

router.post('/product', async function (req, res) {
    const response = await productService.addProduct(req.body.nombre)
    res.send(response);
});

router.delete('/product/:id', async function (req, res) {
    const response = await productService.deleteProduct(req.params.id)
    res.send(response);
});

module.exports = router;