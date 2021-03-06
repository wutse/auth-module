'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://172.26.128.1/authModule', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => console.log(err));

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('db error!');
  console.log(err);
});

db.once('open', () => {
  console.log('db connected');
});

module.exports = db;