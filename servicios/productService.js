const RepositorioProductos = require('../repositorios/products.repository')

const Servicio = {
    getAllProducts,
    getOneProduct,
    addProduct
};

function getOneProduct(id) {
    return RepositorioProductos.getProduct(id);
};

function getAllProducts() {
    return RepositorioProductos.getAllProducts();
};

function addProduct(id, nombre) {
    return RepositorioProductos.addProduct(id, nombre)
}

module.exports = Servicio;