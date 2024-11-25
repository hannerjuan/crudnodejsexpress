// routes/preguntaRoutes.js
const express = require('express');
const router = express.Router();
const preguntaService = require('../services/preguntaService');

// Obtener todas las preguntas
router.get('/', async (req, res) => {
    try {
        const preguntas = await preguntaService.getAllPreguntas();
        res.json(preguntas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener una pregunta por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pregunta = await preguntaService.getPreguntaById(id);
        res.json(pregunta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear una nueva pregunta
router.post('/', async (req, res) => {
    try {
        const nuevaPregunta = await preguntaService.createPregunta(req.body);
        res.json(nuevaPregunta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar una pregunta
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const preguntaActualizada = await preguntaService.updatePregunta(id, req.body);
        res.json(preguntaActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar una pregunta
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await preguntaService.deletePregunta(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
