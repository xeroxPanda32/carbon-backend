const { default: axios } = require('axios');

require('dotenv').config();

const { PUBLIC_API_BASE_URL } = process.env

const getCategories = async (req, res) => {
  try {
    const response = await axios.get(`${PUBLIC_API_BASE_URL}/categories`)
    if (response.data) {
      res.json(response.data)
    } else {
      res.status(500).send('unknow error occured')
    }
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

const getEntries = async (req, res) => {
  const { category } = req.query
  if (!category) {
    return res.status(404).send('Please provide category')
  }
  const limit = req.query.limit || 100 // return a maximum of 100 entries
  try {
    const response = await axios.get(`${PUBLIC_API_BASE_URL}/entries?category=${category}`)
    if (response.data) {
      if (response.data.entries !== null) {
        const entries = response.data.entries.slice(0, limit)
        const count = entries.length
        res.json({ count, entries })
      } else res.json(response.data)
    } else {
      res.status(500).send('error in fetching data')
    }
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

module.exports = { getEntries, getCategories }
