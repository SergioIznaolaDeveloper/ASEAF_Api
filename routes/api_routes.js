const express = require('express');
const router = express.Router();
const { initSignUp,  closeSignUp, initSignIn, closeSignIn, logOut } = require('../controllers/auth_controllers');

router.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

router.post('/signup', initSignUp, closeSignUp);
router.post('/login', initSignIn, closeSignIn);

module.exports = router;