const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys');
const userRoutes = require('./routes/user');

mongoose
  .connect(db.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

  .then(() => console.log('Successfully connected to MongoDB Atlas! '))

  .catch((error) => console.log(error));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);

module.exports = app;
