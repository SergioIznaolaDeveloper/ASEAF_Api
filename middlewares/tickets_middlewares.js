const Ticket = require('../models/tickets_models');

const { parseBody } = require('../services/tickets_services');

const createTicket = async (data) => {
    try {
        const ticket = await Ticket.create( data);
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