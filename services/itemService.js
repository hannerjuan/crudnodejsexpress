const itemRepository = require("../repositories/itemRepository");

const itemService = {
  getAll: async () => {
    return await itemRepository.getAll();
  },

  getById: async (id) => {
    const item = await itemRepository.getById(id);
    if (!item) throw new Error("item no encontrada");
    return item;
  },

  create: async (itemData) => {
    const { item_nombre, item_orden, item_codigo, pregunta_id, tmp_id } = itemData;

    if (!item_nombre || !item_orden || !item_codigo || !pregunta_id || !tmp_id) {
      throw new Error("Faltan datos de la item");
    }

    return await itemRepository.create(itemData);
  },

  update: async (id, itemData) => {
    const item = await itemRepository.getById(id);
    if (!item) throw new Error("item no encontrada");

    const { item_fecha, item_estado, encuesta_id, item_usuario, usuario_id} = itemData;

    if (!item_fecha || !item_estado || !encuesta_id || !item_usuario || !usuario_id) {
      throw new Error("Faltan datos de la item");
    }

    return await itemRepository.update(id, itemData);
  },

  delete: async (id) => {
    const item = await itemRepository.getById(id);
    if (!item) throw new Error("item no encontrada");
    return await itemRepository.delete(id);
  },
};

module.exports = itemService;
