const express = require('express')
const passport = require('../passport/jwt-strategy')
const authenticatedRoute = require('../controllers/authenticated')

const router = express.Router()

router.get('/', passport.authenticate('jwt', { session: false }), authenticatedRoute)

module.exports = router
