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

function getAllUsers() {
    return database('users')
}

function getUser(id) {
    return database('users')
        .where("id", id)
}

const RepositorioUsuarios = {
    getAllUsers,
    getUser
}

module.exports = RepositorioUsuarios