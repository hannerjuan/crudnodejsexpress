// routes/encuestaRoutes.js
const express = require('express');
const router = express.Router();
const encuestaService = require('../services/encuestaService');

// Obtener todas las encuestas
router.get('/', async (req, res) => {
    try {
        const encuestas = await encuestaService.getAllEncuestas();
        res.json(encuestas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener una encuesta por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const encuesta = await encuestaService.getEncuestaById(id);
        res.json(encuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear una nueva encuesta
router.post('/', async (req, res) => {
    console.log(req.body);
    
    try {
        const nuevaEncuesta = await encuestaService.createEncuesta(req.body);
        res.json(nuevaEncuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar una encuesta
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const encuestaActualizada = await encuestaService.updateEncuesta(id, req.body);
        res.json(encuestaActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar una encuesta
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await encuestaService.deleteEncuesta(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
