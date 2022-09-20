const knex = require('knex');
const database = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3307,
        user: 'root',
        password: 'my-secret-pw',
        database: 'cosas'
    }
});

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

function addProduct(nombre) {
    database('products').insert({ nombre: nombre })
        .then()

    return products
}

function deleteProduct(id) {
    database('products')
        .where('id', id)
        .del()
        .then()
    return products
}

const RepositorioProductos = {
    getAllProducts,
    getProduct,
    addProduct,
    deleteProduct
}

module.exports = RepositorioProductos