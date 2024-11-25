const temaRepository = require("../repositories/temaRepository");

const temaService = {
  getAll: async () => {
    return await temaRepository.getAll();
  },

  getById: async (id) => {
    const tema = await temaRepository.getById(id);
    if (!tema) throw new Error("Tema no encontrado");
    return tema;
  },

  create: async (temaData) => {
    const { fldtema_nombre, fldtema_orden, fldpagina_id, tmp_id } = temaData;

    if (!fldtema_nombre || !fldtema_orden || !fldpagina_id || !tmp_id) {
      throw new Error("Faltan datos del tema");
    }

    return await temaRepository.create(temaData);
  },

  update: async (id, temaData) => {
    const tema = await temaRepository.getById(id);
    if (!tema) throw new Error("Tema no encontrado");

    const { fldtema_nombre, fldtema_orden, fldpagina_id, tmp_id } = temaData;

    if (!fldtema_nombre || !fldtema_orden || !fldpagina_id || !tmp_id) {
      throw new Error("Faltan datos del tema");
    }

    return await temaRepository.update(id, temaData);
  },

  delete: async (id) => {
    const tema = await temaRepository.getById(id);
    if (!tema) throw new Error("Tema no encontrado");
    return await temaRepository.delete(id);
  },
};

module.exports = temaService;
