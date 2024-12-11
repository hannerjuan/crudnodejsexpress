const express = require("express");
const router = express.Router();
const itemService = require("../services/itemService");

router.get("/", async (req, res) => {
  try {
    const items = await itemService.getAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await itemService.getById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoitem = await itemService.create(req.body);
    res.status(201).json(nuevoitem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const itemActualizado = await itemService.updateItems(req.params.id, req.body);
    res.status(200).json(itemActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const itemEliminado = await itemService.delete(req.params.id);
    res.status(200).json(itemEliminado);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
