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


function getAllProducts() {
    return database('products')

}

function getProduct(id) {
    return database('products')
        .where('id', id)

}

async function addProduct(nombre) {
    const unId = await database('products').insert({ nombre: nombre })
    const id = unId[0]
    return getProduct(id)
}

function deleteProduct(id) {
    return database('products')
        .where('id', id)
        .del()


}

const RepositorioProductos = {
    getAllProducts,
    getProduct,
    addProduct,
    deleteProduct
}

module.exports = RepositorioProductos