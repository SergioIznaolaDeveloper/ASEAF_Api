const Ticket = require('../models/tickets_models');

const { parseCreateBody, parseFilterBody } = require('../services/tickets_services');

const createTicket = async (data) => {
    try {
        const query = parseCreateBody(data);
        const ticket = await Ticket.create(query);
        return ticket
    } 
    catch (error) {
        return error
    }
}

const getTickets = async (data) => {
    try {
        const filter = parseFilterBody(data);
        const tickets = await Ticket.find(filter);
        return tickets
    } 
    catch (error) {
        return error
    }
}

module.exports = {
    createTicket,
    getTickets
}