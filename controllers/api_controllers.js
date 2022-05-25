const { createTicket, getTickets } = require('../middlewares/tickets_middlewares');

const { CustomError } = require('../utils/errors');

const createNewTicket = async (req, res, next) => {
    try {
        const ticket = await createTicket(req.body.formulario);
        if (!ticket) {
            const error = new CustomError(500, 'Unable to create ticket in DB. Please, try later');
            return next(error)
        }
        res.status(201).json({ response: true, authenticated: true, data: ticket })
    } catch (error) {
        return next(error)
    }
}

const getFilteredTickets = async (req, res, next) => {
    try {
        const tickets = await getTickets(req.body);
        if (!tickets || tickets.length < 1) {
            return res.status(400).json({ response: false, message: 'No tickets found' });
        }
        res.status(200).json({ response: true, authenticated: true, data: tickets })
    }
    catch (error) {
        return next(error)
    }
}

module.exports = {
    createNewTicket,
    getFilteredTickets
}