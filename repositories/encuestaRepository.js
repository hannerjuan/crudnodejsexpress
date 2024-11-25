// repositories/encuestaRepository.js
const client = require('../lib/connection');

const getAllEncuestas = async () => {
    const result = await client.query('SELECT * FROM tblencuesta');
    return result.rows;
};

const getEncuestaById = async (id) => {
    const result = await client.query('SELECT * FROM tblencuesta WHERE fldencuesta_id = $1', [id]);
    return result.rows[0];
};

const createEncuesta = async (encuesta) => {
    const { nombre, estado, codigo, apikey } = encuesta;
    
    const result = await client.query(
        'INSERT INTO tblencuesta (fldencuesta_nombre, fldencuesta_estado, fldencuesta_codigo, fldencuesta_apikey) VALUES ($1, $2, $3, $4) RETURNING *',
        [nombre, estado, codigo, apikey]
    );
    console.log(result);
    
    return result.rows[0];
};

const updateEncuesta = async (id, encuesta) => {
    const { nombre, estado, codigo, apikey } = encuesta;
    const result = await client.query(
        'UPDATE tblencuesta SET fldencuesta_nombre = $1, fldencuesta_estado = $2, fldencuesta_codigo = $3, fldencuesta_apikey = $4 WHERE fldencuesta_id = $5 RETURNING *',
        [nombre, estado, codigo, apikey, id]
    );
    return result.rows[0];
};

const deleteEncuesta = async (id) => {
    await client.query('DELETE FROM tblencuesta WHERE fldencuesta_id = $1', [id]);
    return { message: 'Encuesta eliminada exitosamente' };
};

module.exports = {
    getAllEncuestas,
    getEncuestaById,
    createEncuesta,
    updateEncuesta,
    deleteEncuesta,
};
