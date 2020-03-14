// use javascript in strict mode, got it.
'use strict';

// import all required modules, ok on that too..
const express = require("express");
const logger = require('./utils/logger');
const exphbs = require('express-handlebars');

// initialise project, absolutely fine.
const app = express();

// static files output to public folder, sure if you say so.
app.use(express.static("public"));

// use handlebars as view engine, ok if I must.
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

// import routes file and use this for routing, cool get me around the place.
const routes = require('./routes');
app.use('/', routes);

// for parsing bodies??
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false, }));

// spying on people
const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});