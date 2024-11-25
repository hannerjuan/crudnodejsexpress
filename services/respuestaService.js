const respuestaRepository = require("../repositories/respuestaRepository");

const respuestaService = {
  getAll: async () => {
    return await respuestaRepository.getAll();
  },

  getById: async (id) => {
    const respuesta = await respuestaRepository.getById(id);
    if (!respuesta) throw new Error("Respuesta no encontrada");
    return respuesta;
  },

  create: async (respuestaData) => {
    const {
      pregunta_id,
      muestra_id,
      item_id,
      respuesta_texto,
      respuesta_string,
      respuesta_fecha,
      respuesta_numero
    } = respuestaData;

    if (!muestra_id || !pregunta_id) {
      throw new Error("Faltan datos obligatorios para la respuesta");
    }

    return await respuestaRepository.create(respuestaData);
  },

  update: async (id, respuestaData) => {
    const respuesta = await respuestaRepository.getById(id);
    if (!respuesta) throw new Error("Respuesta no encontrada");

    return await respuestaRepository.update(id, respuestaData);
  },

  delete: async (id) => {
    const respuesta = await respuestaRepository.getById(id);
    if (!respuesta) throw new Error("Respuesta no encontrada");
    return await respuestaRepository.delete(id);
  },
};

module.exports = respuestaService;
