const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger')
const passport = require('./passport/jwt-strategy')

const authRoute = require('./routes/auth');
const publicRoute = require('./routes/publicApi')
const authenticatedRoute = require('./routes/authenticated')

const app = express();

app.use(express.json());

app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('server working');
});

app.use('/auth', authRoute);
app.use('/public', publicRoute)
app.use('/authenticated', authenticatedRoute)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

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
