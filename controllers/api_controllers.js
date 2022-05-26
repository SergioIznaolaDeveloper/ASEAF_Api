const { getAll, createTicket, filterTickets } = require('../middlewares/tickets_middlewares');

const getAllTickets = async (req, res, next) => {
    try {
        const tickets = await getAll();
        res.status(200).json({ response: true, authenticated: true, data: tickets })
    } 
    catch (error) {
        return next(error)
    }
}

const createNewTicket = async (req, res, next) => {
    try {
        
        const ticket = await createTicket(req.body);
        res.status(201).json({ response: true, authenticated: true, data: ticket })
    } catch (error) {
        return next(error)
    }
}

const getFilteredTickets = async (req, res, next) => {
    try {
        const tickets = await filterTickets(req.body);
        res.status(200).json({ response: true, authenticated: true, data: tickets })
    }
    catch (error) {
        return next(error)
    }
}

module.exports = {
    getAllTickets,
    createNewTicket,
    getFilteredTickets
}