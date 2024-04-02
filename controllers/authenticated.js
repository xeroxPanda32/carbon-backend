const authenticatedRoute = (req, res) => {
  res.send('Welcome authorised user. This wont be visible to unauthenticated users')
}

module.exports = authenticatedRoute
