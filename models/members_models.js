const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    nacionalidad: {
        type: String
    },
    telefono: {
        type: Number
    },
    email: {
        type: String
    },
    genero: {
        type: String
    },
    fecha_nacimiento: {
        type: Date,
        default: null
    },
    estado_civil: {
        type: String
    },
    situacion_laboral: {
        type: String
    },
    profesion: {
        type: String,
        default: null
    },
    fecha_profesion: {
        type: Date,
        default: null
    },
    salario: {
        type: Number
    },
});

module.exports = MemberSchema;