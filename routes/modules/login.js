'use strict';

const router = require('express').Router();
const User = require('../../models/user');

router.get('/', (req, res) => {
  console.log(`get /login`);
  res.render('login');
});

router.post('/', async (req, res) => {
  console.log(`post /login`);
  try {
    console.log('start query');
    let result = await User.findOne({ "mail": req.body.mail });
    console.log('end query');

    if (result) {
      if (result.password === req.body.password) {
        res.redirect(`/?name=${result.name}`);
      }
      else {
        console.log('pwd error.');
        res.render('login', { userMail: req.body.mail, errMsg: 'Password Error.' });
      }
    }
    else {
      console.log('acc not found.');
      res.render('login', { userMail: req.body.mail, errMsg: 'Account Error.' });
    }

  } catch (error) {
    console.log(error);
  }

});

module.exports = router;