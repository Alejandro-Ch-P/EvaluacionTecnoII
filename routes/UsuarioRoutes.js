const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = new Usuario({
            nombre: req.body.nombre,
            edad: req.body.edad,
            ocupacion: req.body.ocupacion
        });

        await nuevoUsuario.save();
        res.status(201).send(nuevoUsuario);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.status(200).send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.status(200).send('Usuario eliminado');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
