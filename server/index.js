const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const app = express();

app.use(bodyParser.json());


app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log('App is running!');
  console.log(PORT);
});
