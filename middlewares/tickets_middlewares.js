const Ticket = require('../models/tickets_models');

const createTicket = async (data) => {
    try {
        const ticket = await Ticket.create( data);
        return ticket  
    } 
    catch (error) {
        return error
    }
}

module.exports = {
    createTicket
}