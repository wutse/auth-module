'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', { userName: req.query.name });
});

module.exports = router;
