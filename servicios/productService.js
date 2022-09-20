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

function addProduct(nombre) {
    return RepositorioProductos.addProduct(nombre)
};

function deleteProduct(id) {
    return RepositorioProductos.deleteProduct(id)
}

module.exports = Servicio;