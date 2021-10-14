'use strict';

const router = require('express').Router();

const home = require('./modules/home');
router.use('/', home);

const login = require('./modules/login');
router.use('/login', login);

module.exports = router;