const { createTicket } = require('../middlewares/tickets_middlewares');

const createNewTicket = async (req, res, next) => {
    try {
        const ticket = await createTicket(req.body);
        res.json({ticket})
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    createNewTicket
}