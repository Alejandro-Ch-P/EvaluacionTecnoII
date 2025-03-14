const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    ocupacion: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
