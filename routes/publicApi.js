const express = require('express')
const { getCategories, getEntries } = require('../controllers/publicApi')

const router = express.Router()

/**
 * @swagger
 * /public/categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve all categories from the API.
 *     responses:
 *       200:
 *         description: A list of categories.
 *       500:
 *         description: An internal server error occurred.
 */
router.get('/categories', getCategories)

/**
 * @swagger
 * /public/entries:
 *   get:
 *     summary: Get entries by category
 *     description: Retrieve entries based on the specified category and limit.
 *     parameters:
 *       - in: query
 *         name: category
 *         description: The category for which entries are requested.
 *                      [call /public/categories api to get list of categories]
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         description: The maximum number of entries to return (default is 100).
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of entries based on the specified category and limit.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   description: The number of entries returned.
 *                 entries:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Entry'
 *       500:
 *         description: An internal server error occurred.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Entry:
 *       type: object
 *       properties:
 *         API:
 *           type: string
 *           description: API name.
 *         Description:
 *           type: string
 *           description: The Description of the API.
 *         Auth:
 *           type: string
 *           description: Whether the API supports Auth.
 *         HTTPS:
 *           type: string
 *           description: entries that support HTTPS or not
 *         CORS:
 *           type: string
 *           description: CORS support for entry ("yes", "no", or "unknown")
 *         Link:
 *           type: string
 *           description: API endpoint base url
 *         Category:
 *           type: string
 *           description: Category from which entries are returned
 */
router.get('/entries', getEntries)

module.exports = router
