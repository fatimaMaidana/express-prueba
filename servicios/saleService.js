const RepositorioVentas = require("../repositorios/sales.repository");

const Servicio = {
  getAllSales,
  getOneSale,
};

function getOneSale(id) {
  return RepositorioVentas.getSale(id);
}

function getAllSales() {
  return RepositorioVentas.getAllSales();
}

module.exports = Servicio;
