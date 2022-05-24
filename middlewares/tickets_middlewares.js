const Ticket = require('../models/tickets_models');

const { parseCreateBody, parseBody } = require('../services/tickets_services');

const createTicket = async (data) => {
    try {
        const query = parseCreateBody(data)
        const ticket = await Ticket.create(query);
        return ticket  
    } 
    catch (error) {
        return error
    }
}

const getTickets = async (data) => {
    try {
        const filter = parseBody(data);
        console.log(filter);
        const tickets = await Ticket.aggregate([{ $match: filter }]);
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