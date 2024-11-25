const express = require("express");
const router = express.Router();
const paginaService = require("../services/paginaService");

router.get("/", async (req, res) => {
  try {
    const paginas = await paginaService.getAll();
    res.status(200).json(paginas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pagina = await paginaService.getById(req.params.id);
    res.status(200).json(pagina);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevaPagina = await paginaService.create(req.body);
    res.status(201).json(nuevaPagina);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const paginaActualizada = await paginaService.update(req.params.id, req.body);
    res.status(200).json(paginaActualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const paginaEliminada = await paginaService.delete(req.params.id);
    res.status(200).json(paginaEliminada);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
