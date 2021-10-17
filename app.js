'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const routers = require('./routes/index');
const session = require('express-session');

require('./config/mongoose');

const app = express();
const port = 3000;

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(session({
  secret: 'ac exercise',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(routers);

app.listen(port, () => {
  console.log(`auth module start at ${(new Date()).toLocaleString()}.`);
});