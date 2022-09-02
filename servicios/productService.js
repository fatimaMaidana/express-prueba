const RepositorioProductos = require('../repositorios/products.repository')

const Servicio = {
    getAllProducts,
    getOneProduct,
    addProduct,
    deleteProduct
};

function getOneProduct(id) {
    return RepositorioProductos.getProduct(id);
};

function getAllProducts() {
    return RepositorioProductos.getAllProducts();
};

function addProduct(id, nombre) {
    return RepositorioProductos.addProduct(id, nombre)
};

function deleteProduct(id) {
    return RepositorioProductos.deleteProduct(id)
}

module.exports = Servicio;