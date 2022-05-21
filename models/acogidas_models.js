const mongoose = require('mongoose');

const AcogidaSchema = new mongoose.Schema({
    numero_acogida: {
        type: Number,
        default: null
    },
    tiempo_acogida: {
        type: Number,
        default: null
    },
    tipo_acogida: {
        type: String,
        default: null
    }
});

module.exports = AcogidaSchema;