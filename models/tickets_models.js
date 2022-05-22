const mongoose = require('mongoose');

const MemberSchema = require('./members_models');

const TicketSchema = new mongoose.Schema({
    member1: MemberSchema,
    member2: {
        type: MemberSchema,
        default: null
    },
    salario: {
        type: String
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
    acogida_denegada: {
        type: Boolean,
        default: false
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
        type: String,
        default: null
    },
    fecha_resolucion_acogida: {
        type: String,
        default: null
    },
    fecha_asignacion_acogida: {
        type: String,
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