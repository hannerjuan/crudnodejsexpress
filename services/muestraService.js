const muestraRepository = require("../repositories/muestraRepository");

const muestraService = {
  getAll: async () => {
    return await muestraRepository.getAll();
  },

  getById: async (id) => {
    const muestra = await muestraRepository.getById(id);
    if (!muestra) throw new Error("Muestra no encontrada");
    return muestra;
  },

  create: async (muestraData) => {
    const { muestra_fecha, muestra_estado, encuesta_id, muestra_usuario, usuario_id } = muestraData;

    if (!muestra_fecha || !muestra_estado || !encuesta_id || !muestra_usuario || !usuario_id) {
      throw new Error("Faltan datos de la muestra");
    }

    return await muestraRepository.create(muestraData);
  },

  update: async (id, muestraData) => {
    const muestra = await muestraRepository.getById(id);
    if (!muestra) throw new Error("Muestra no encontrada");

    const { muestra_fecha, muestra_estado, encuesta_id, muestra_usuario, usuario_id} = muestraData;

    if (!muestra_fecha || !muestra_estado || !encuesta_id || !muestra_usuario || !usuario_id) {
      throw new Error("Faltan datos de la muestra");
    }

    return await muestraRepository.update(id, muestraData);
  },

  delete: async (id) => {
    const muestra = await muestraRepository.getById(id);
    if (!muestra) throw new Error("Muestra no encontrada");
    return await muestraRepository.delete(id);
  },
};

module.exports = muestraService;
