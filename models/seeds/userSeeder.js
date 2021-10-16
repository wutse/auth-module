'use strict';

const db = require('../../config/mongoose');
const sourceDatas = require('./users.json');
const User = require('../user');

db.once('open', () => {
  console.log('db connected!');

  for (let i = 0; i < sourceDatas.results.length; i++) {
    User.create(sourceDatas.results[i]);
  }

  console.log('done');
});
