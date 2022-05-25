const Ticket = require('../models/tickets_models');

const { parseCreateBody, parseFilterBody } = require('../services/tickets_services');

const getAll = async () => {
    try {
        const tickets = await Ticket.find({});
        return tickets
    }
    catch (error) {
        return error
    }
}

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

const filterTickets = async (data) => {
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
    getAll,
    createTicket,
    filterTickets
}