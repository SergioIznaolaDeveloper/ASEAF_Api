const mongoose = require('mongoose');

const MemberSchema = require('./members_models');
const AcogidaSchema = require('./acogidas_models');



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
    acogida: {
        type: AcogidaSchema,
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
});

module.exports = mongoose.model('Ticket', TicketSchema);