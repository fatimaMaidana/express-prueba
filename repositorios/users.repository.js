const users = [
    {
        id: 1,
        nombre: "Martin"
    },
    {
        id: 2,
        nombre: "Fatima"
    }
]

function getAllUsers() {
    return users
}

function getUser(id) {
    return users.find(user => id == user.id)
}

const RepositorioUsuarios = {
    getAllUsers,
    getUser
}

module.exports = RepositorioUsuarios