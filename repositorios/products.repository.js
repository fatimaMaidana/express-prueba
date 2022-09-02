var products = [
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
    products.push({ id, nombre })
    return products
}

function deleteProduct(id) {
    products = products.filter(product => product.id != id)
    return products
}

const RepositorioProductos = {
    getAllProducts,
    getProduct,
    addProduct,
    deleteProduct
}

module.exports = RepositorioProductos