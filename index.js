const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const passport = require('./passport/jwt-strategy')
const authRoute = require('./routes/auth');

const app = express();

app.use(express.json());

app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('server working');
});

app.use('/auth', authRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => {
      console.log('server started');
    });
  })
  .catch((err) => {
    console.log(err);
  });
