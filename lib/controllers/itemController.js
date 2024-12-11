const itemService = require('../services/itemService');

const itemController = {
  getAll: async (req, res) => {
    try {
      const items = await itemService.getAll();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await itemService.getById(id);
      if (!item) {
        return res.status(404).json({ error: 'Item no encontrado' });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const item = req.body;
      const newItem = await itemService.create(item);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const item = req.body;
      const updatedItem = await itemService.update(id, item);
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedItem = await itemService.delete(id);
      res.status(200).json(deletedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = itemController;
