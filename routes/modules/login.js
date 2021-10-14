'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(`get /login`);
  res.render('login');
});

router.post('/', (req, res) => {
  console.log(`post /login`);
  res.redirect(`/?name=Fox`);
});

module.exports = router;