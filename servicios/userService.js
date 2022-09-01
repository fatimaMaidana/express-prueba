const RepositorioUsuarios = require('../repositorios/users.repository')

const Servicio = {
    getAllUsers,
    getOneUser
};

function getOneUser(id) {
    return RepositorioUsuarios.getUser(id);
};

function getAllUsers() {
    return RepositorioUsuarios.getAllUsers();
};

module.exports = Servicio;