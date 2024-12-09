const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../connection'); // Conexión a la base de datos
const SECRET_KEY = 'tu_clave_secreta'; // Clave para el token

exports.login = async (req, res) => {
    const { login, password } = req.body;

    if (!login || !password) {
        return res.status(400).json({ message: 'Campos faltantes' });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM tblusuario WHERE fldusuario_login = $1 LIMIT 1',
            [login]
        );

        console.log('Resultado de la consulta:', result);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const user = result.rows[0];
        console.log('Usuario encontrado:', user);

        if (!user.fldusuario_password) {
            return res.status(500).json({ message: 'Error: Contraseña no encontrada para el usuario.' });
        }

        console.log('Hash de la base de datos:', user.fldusuario_password);
        console.log('Contraseña enviada:', password);

        // Compara las contraseñas
        const isPasswordValid = await bcrypt.compare(password, user.fldusuario_password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Genera un token JWT
        const token = jwt.sign({ userId: user.fldusuario_id }, SECRET_KEY, { expiresIn: '1h' });

        res.json({
            token,
            user: { id: user.fldusuario_id, nombre: user.fldusuario_nombre },
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
