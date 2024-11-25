// repositories/preguntaRepository.js
const client = require('../lib/connection');

const getAllPreguntas = async () => {
    const result = await client.query('SELECT * FROM tblpregunta');
    return result.rows;
};

const getPreguntaById = async (id) => {
    const result = await client.query('SELECT * FROM tblpregunta WHERE fldpregunta_id = $1', [id]);
    return result.rows[0];
};

const createPregunta = async (pregunta) => {
    const { nombre, orden, tipo, estado, temaid, tmpid } = pregunta;
    const result = await client.query(
        'INSERT INTO tblpregunta (fldpregunta_nombre, fldpregunta_orden, fldpregunta_tipo, fldpregunta_estado, fldtema_id, tmp_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nombre, orden, tipo, estado, temaid, tmpid]
    );
    return result.rows[0];
};

const updatePregunta = async (id, pregunta) => {
    const { nombre, orden, tipo, estado, temaid, tmpid } = pregunta;
    const result = await client.query(
        'UPDATE tblpregunta SET fldpregunta_nombre = $1, fldpregunta_orden = $2, fldpregunta_tipo = $3, fldpregunta_estado = $4, fldtema_id = $5, tmp_id = $6 WHERE fldpregunta_id = $7 RETURNING *',
        [nombre, orden, tipo, estado, temaid, tmpid, id]
    );
    return result.rows[0];
};

const deletePregunta = async (id) => {
    await client.query('DELETE FROM tblpregunta WHERE fldpregunta_id = $1', [id]);
    return { message: 'Pregunta eliminada exitosamente' };
};

module.exports = {
    getAllPreguntas,
    getPreguntaById,
    createPregunta,
    updatePregunta,
    deletePregunta,
};
