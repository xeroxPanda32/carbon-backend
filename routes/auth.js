const express = require('express');
const passport = require('../passport/jwt-strategy')
const { register, login, profile } = require('../controllers/auth');

const router = express.Router()

// Route to handle user registration
router.post('/register', register)

// Route to handle user login
router.post('/login', login);

// Route to fetch user profile (requires authentication)
router.get('/profile', passport.authenticate('jwt', { session: false }), profile);

module.exports = router
