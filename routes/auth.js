const express = require('express');
const passport = require('../passport/jwt-strategy')
const { register, login, profile } = require('../controllers/auth');

const router = express.Router()

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for the user.
 *     responses:
 *       200:
 *         description: Registration successful. Returns a JWT token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the registered user.
 *       401:
 *         description: Registration failed due to invalid credentials or server error.
 */
router.post('/register', register)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticate and log in a user with the provided email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user. Must be a valid email format.
 *               password:
 *                 type: string
 *                 description: The password for the user. Required.
 *     responses:
 *       200:
 *         description: Login successful. Returns a JWT token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the logged-in user.
 *       401:
 *         description: Login failed due to invalid credentials or server error.
 */
router.post('/login', login);

// Route to fetch user profile (requires authentication)
router.get('/profile', passport.authenticate('jwt', { session: false }), profile);

module.exports = router
