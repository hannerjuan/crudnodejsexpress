const paginaRepository = require("../repositories/paginaRepository");

const paginaService = {
  getAll: async () => {
    return await paginaRepository.getAll();
  },

  getById: async (id) => {
    const pagina = await paginaRepository.getById(id);
    if (!pagina) throw new Error("Página no encontrada");
    return pagina;
  },

  create: async (paginaData) => {
    if (!paginaData.pagina || !paginaData.pagina_orden || !paginaData.encuesta_id || !paginaData.tmp_id) {
      throw new Error("Faltan datos de la página");
    }
    return await paginaRepository.create(paginaData);
  },

  update: async (id, paginaData) => {
    const pagina = await paginaRepository.getById(id);
    if (!pagina) throw new Error("Página no encontrada");
    return await paginaRepository.update(id, paginaData);
  },

  delete: async (id) => {
    const pagina = await paginaRepository.getById(id);
    if (!pagina) throw new Error("Página no encontrada");
    return await paginaRepository.delete(id);
  },
};

module.exports = paginaService;
