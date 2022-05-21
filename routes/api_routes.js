const express = require('express');
const router = express.Router();
const { initSignUp, closeSignUp, initSignIn, closeSignIn, logOut } = require('../controllers/auth_controllers');
const { createAccessToken, createRefreshToken, authenticateToken } = require('../middlewares/auth_middlewares');

router.get('/database', authenticateToken, (req, res) => {
    res.status(200).json({ response: true, message: 'Successful API call' })
});

router.post('/signup', initSignUp, createAccessToken, createRefreshToken, closeSignUp);
router.post('/login', initSignIn, createAccessToken, createRefreshToken, closeSignIn);

module.exports = router;