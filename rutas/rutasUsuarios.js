var express = require('express');
var router = express.Router();
const userService = require('../servicios/userService');

router.get('/user', function (req, res) {
    const response = userService.getAllUsers()
    res.send(response);
});

router.get('/user/:id', function (req, res) {
    const response = userService.getOneUser(req.params.id)
    res.send(response);
});

module.exports = router;