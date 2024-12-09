// repositories/usuarioRepository.js
const client = require('../lib/connection');
const bcrypt = require('bcryptjs');

const getAllUsuarios = async () => {
    const result = await client.query('SELECT * FROM tblusuario');
    return result.rows;
};

const getUsuarioById = async (id) => {
    const result = await client.query('SELECT * FROM tblusuario WHERE fldusuario_id = $1', [id]);
    return result.rows[0];
};

// const createUsuario = async (usuario) => {
//     const {nombre, login, email, password } = usuario;
//     const result = await client.query(
//         'INSERT INTO tblusuario (fldusuario_nombre, fldusuario_login, fldusuario_email, fldusuario_password) VALUES ($1, $2, $3, $4) RETURNING *',
//         [nombre, login, email, password]
//     );
//     return result.rows[0];
// };

// const createUsuario = async (nombre, login, email, password) => {
// console.log('Nombre:', nombre);
// console.log('Login:', login);
// console.log('Email:', email);
// console.log('Password:', password);

//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     console.log('dddddd',hashedPassword);
    

//     const result = await client.query(
//         `INSERT INTO tblusuario (fldusuario_nombre,fldusuario_login,fldusuario_email, fldusuario_password)
//         VALUES ($1, $2, $3, $4) RETURNING *`,
//         [nombre, login, email, hashedPassword]
//     );

//     return result.rows[0]; // Retorna el usuario creado (opcional)
// };

const createUsuario = async (nombre, login, email, password) => {
    try {
        console.log('Nombre:', nombre);
        console.log('Login:', login);
        console.log('Email:', email);
        console.log('Password:', password);

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        console.log('Password Hasheado:', hashedPassword);

        const result = await client.query(
            `INSERT INTO tblusuario (fldusuario_nombre, fldusuario_login, fldusuario_email, fldusuario_password)
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [nombre, login, email, hashedPassword]
        );

        return result.rows[0]; // Retorna el usuario creado
    } catch (error) {
        console.error('Error al crear usuario:', error.message);
        throw error;
    }
};



const updateUsuario = async (id, usuario) => {
    const { nombre, login, email, password } = usuario;
    const result = await client.query(
        'UPDATE tblusuario SET fldusuario_nombre = $1, fldusuario_login = $2, fldusuario_email = $3, fldusuario_password = $4 WHERE fldusuario_id = $5 RETURNING *',
        [nombre, login, email, password, id]
    );
    return result.rows[0];
};

const deleteUsuario = async (id) => {
    await client.query('DELETE FROM tblusuario WHERE fldusuario_id = $1', [id]);
    return { message: 'Usuario eliminado exitosamente' };
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
};
