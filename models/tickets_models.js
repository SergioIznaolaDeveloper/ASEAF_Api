const mongoose = require('mongoose');

const MemberSchema = require('./members_models');

const TicketSchema = new mongoose.Schema({
    tipo: {
        type: String
    },
    miembros: {
        type: Number
    },
    miembro1: MemberSchema,
    miembro2: {
        type: MemberSchema,
        default: null
    },
    
    numero_hijos: {
        type: Number,
        default: 0
    },
    fecha_hijos: {
        type: Array,
        of: String,
        default: null
    },
    comunidad_autonoma: {
        type: String
    },
    provincia: {
        type: String
    },
    metros_vivienda: {
        type: Number
    },
    acogida: {
        type: Boolean,
        default: false
    },
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
    },
    fecha_inicio_acogida: {
        type: Date,
        default: null
    },
    fecha_resolucion_acogida: {
        type: Date,
        default: null
    },
    fecha_asignacion_acogida: {
        type: Date,
        default: null
    },
    asociado: {
        type: Boolean,
        default: false
    },
    asociacion: {
        type: String,
        default: null
    },
    quiere_asociado: {
        type: Boolean,
        default: false
    },
    quiere_asociacion: {
        type: String,
        default: null
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Ticket', TicketSchema);