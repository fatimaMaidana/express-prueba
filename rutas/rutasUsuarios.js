var express = require('express');
var router = express.Router();
const userService = require('../servicios/userService');

router.get('/user', async function (req, res) {
    const response = await userService.getAllUsers()
    res.send(response);
});

router.get('/user/:id', async function (req, res) {
    const response = await userService.getOneUser(req.params.id)
    res.send(response);
});

module.exports = router;