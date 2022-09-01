const products = [
    {
        id: 1,
        nombre: "Olla Essen"
    },
    {
        id: 2,
        nombre: "Espatula Madera"
    }
]

function getAllProducts() {
    return products
}

function getProduct(id) {
    return products.find(product => id == product.id)
}

function addProduct(id, nombre) {
    products.push(id, nombre)
}

const RepositorioProductos = {
    getAllProducts,
    getProduct,
    addProduct
}

module.exports = RepositorioProductos