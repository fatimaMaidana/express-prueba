const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.use(express.json());

app.get('/hola', function (req, res) {
  console.log('SI');
  res.send({ user: 'hola' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
