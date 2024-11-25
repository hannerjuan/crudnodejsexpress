const express = require("express");
const router = express.Router();
const temaService = require("../services/temaService");

router.get("/", async (req, res) => {
  try {
    const temas = await temaService.getAll();
    res.status(200).json(temas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tema = await temaService.getById(req.params.id);
    res.status(200).json(tema);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoTema = await temaService.create(req.body);
    res.status(201).json(nuevoTema);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const temaActualizado = await temaService.update(req.params.id, req.body);
    res.status(200).json(temaActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const temaEliminado = await temaService.delete(req.params.id);
    res.status(200).json(temaEliminado);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
