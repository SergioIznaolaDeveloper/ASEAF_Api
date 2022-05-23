const express = require('express');
const router = express.Router();
const { initSignUp, closeSignUp, initSignIn, closeSignIn, logOut } = require('../controllers/auth_controllers');
const { createNewTicket, getFilteredTickets } = require('../controllers/api_controllers');
const { createAccessToken, createRefreshToken, authenticateToken } = require('../middlewares/auth_middlewares');

// Sign Up and Log In routes:
router.post('/signup', initSignUp, createAccessToken, createRefreshToken, closeSignUp);
router.post('/login', initSignIn, createAccessToken, createRefreshToken, closeSignIn);

// API routes:
router.get('/tickets', getFilteredTickets);
router.post('/create', createNewTicket);

module.exports = router;