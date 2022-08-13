var express = require('express');
const userService = require('../servicios/userService');

var router = express.Router();

router.get('/user', function (req, res) {
    const response = userService.getResponse()
    res.send(response);
});

router.get('/user/:id', function (req, res) {
    const response = userService.getOneUser(req.params.id)
    res.send(response);
});

module.exports = router;