const express = require('express')
const { getCategories, getEntries } = require('../controllers/publicApi')

const router = express.Router()

router.get('/entries', getEntries)

router.get('/categories', getCategories)

module.exports = router
