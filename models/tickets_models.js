const mongoose = require('mongoose');

const MemberSchema = require('./members_models');

const TicketSchema = new mongoose.Schema({
    tipo: {
        type: String
    },
    miembros: {
        type: Number
    },
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
    nombre2: {
        type: String
    },
    apellidos2: {
        type: String
    },
    nacionalidad2: {
        type: String
    },
    telefono2: {
        type: Number
    },
    email2: {
        type: String
    },
    genero2: {
        type: String
    },
    fecha_nacimiento2: {
        type: Date,
        default: null
    },
    estado_civil2: {
        type: String
    },
    situacion_laboral2: {
        type: String
    },
    profesion2: {
        type: String,
        default: null
    },
    fecha_profesion2: {
        type: Date,
        default: null
    },
    salario2: {
        type: Number
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