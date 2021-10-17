'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req.session);
  console.log(req.sessionID);
  res.render('home', { userName: req.query.name });
});

module.exports = router;
