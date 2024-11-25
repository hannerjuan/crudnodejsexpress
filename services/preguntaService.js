// services/preguntaService.js
const preguntaRepository = require('../repositories/preguntaRepository');

const getAllPreguntas = async () => {
    return await preguntaRepository.getAllPreguntas();
};

const getPreguntaById = async (id) => {
    return await preguntaRepository.getPreguntaById(id);
};

const createPregunta = async (pregunta) => {
    console.log(pregunta);
    
    if (!pregunta.nombre || !pregunta.orden || !pregunta.tipo || !pregunta.estado || !pregunta.temaid || pregunta.tmpid!==null) {
        throw new Error("Datos de pregunta incompletos");
    }
    return await preguntaRepository.createPregunta(pregunta);
};

const updatePregunta = async (id, pregunta) => {
    return await preguntaRepository.updatePregunta(id, pregunta);
};

const deletePregunta = async (id) => {
    return await preguntaRepository.deletePregunta(id);
};

module.exports = {
    getAllPreguntas,
    getPreguntaById,
    createPregunta,
    updatePregunta,
    deletePregunta,
};
