// services/usuarioService.js
const usuarioRepository = require('../repositories/usuarioRepository');

const getAllUsuarios = async () => {
    return await usuarioRepository.getAllUsuarios();
};

const getUsuarioById = async (id) => {
    return await usuarioRepository.getUsuarioById(id);
};

// const createUsuario = async (usuario) => {
//     if (!usuario.nombre || !usuario.login || !usuario.email || !usuario.password) {
//         throw new Error("Datos de usuario incompletos");
//     }
//     return await usuarioRepository.createUsuario(usuario);
// };

const createUsuario = async (usuario) => {
    const { nombre, login, email, password } = usuario;
    if (!nombre || !login || !email || !password) {
        throw new Error("Datos de usuario incompletos");
    }
    return await usuarioRepository.createUsuario(nombre, login, email, password);
};


const updateUsuario = async (id, usuario) => {
    return await usuarioRepository.updateUsuario(id, usuario);
};

const deleteUsuario = async (id) => {
    return await usuarioRepository.deleteUsuario(id);
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
};
