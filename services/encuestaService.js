// services/encuestaService.js
const encuestaRepository = require('../repositories/encuestaRepository');

const getAllEncuestas = async () => {
    return await encuestaRepository.getAllEncuestas();
};

const getEncuestaById = async (id) => {
    return await encuestaRepository.getEncuestaById(id);
};

const createEncuesta = async (encuesta) => {

    console.log(encuesta);
    

    return await encuestaRepository.createEncuesta(encuesta);
};

const updateEncuesta = async (id, encuesta) => {
    return await encuestaRepository.updateEncuesta(id, encuesta);
};

const deleteEncuesta = async (id) => {
    return await encuestaRepository.deleteEncuesta(id);
};

module.exports = {
    getAllEncuestas,
    getEncuestaById,
    createEncuesta,
    updateEncuesta,
    deleteEncuesta,
};
