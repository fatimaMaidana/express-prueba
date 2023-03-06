var express = require("express");
var router = express.Router();
const saleService = require("../servicios/saleService");

router.get("/sale", async function (req, res) {
  const response = await saleService.getAllSales();
  res.send(response);
});

router.get("/sale/:id", async function (req, res) {
  const response = await saleService.getOneSale(req.params.id);
  res.send(response);
});

module.exports = router;
