// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioService = require('../services/usuarioService');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.getUsuarioById(id);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.createUsuario(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioActualizado = await usuarioService.updateUsuario(id, req.body);
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await usuarioService.deleteUsuario(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
