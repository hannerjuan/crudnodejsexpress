const express = require("express");
const router = express.Router();
const respuestaService = require("../services/respuestaService");

router.get("/", async (req, res) => {
  try {
    const respuestas = await respuestaService.getAll();
    res.status(200).json(respuestas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const respuesta = await respuestaService.getById(req.params.id);
    res.status(200).json(respuesta);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevaRespuesta = await respuestaService.create(req.body);
    res.status(201).json(nuevaRespuesta);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const respuestaActualizada = await respuestaService.update(req.params.id, req.body);
    res.status(200).json(respuestaActualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const respuestaEliminada = await respuestaService.delete(req.params.id);
    res.status(200).json(respuestaEliminada);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
