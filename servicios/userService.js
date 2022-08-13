const RepositorioUsuarios = require('../repositorios/users.repository')

const Servicio = {
    getResponse,
    getOneUser
};

function getOneUser(id) {
    return RepositorioUsuarios.getUser(id);
};

function getResponse() {
    return RepositorioUsuarios.getAllUsers();
};

module.exports = Servicio;