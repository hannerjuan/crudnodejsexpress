const express = require("express");
const router = express.Router();
const muestraService = require("../services/muestraService");

router.get("/", async (req, res) => {
  try {
    const muestras = await muestraService.getAll();
    res.status(200).json(muestras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const muestra = await muestraService.getById(req.params.id);
    res.status(200).json(muestra);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevaMuestra = await muestraService.create(req.body);
    res.status(201).json(nuevaMuestra);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const muestraActualizada = await muestraService.update(req.params.id, req.body);
    res.status(200).json(muestraActualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const muestraEliminada = await muestraService.delete(req.params.id);
    res.status(200).json(muestraEliminada);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
