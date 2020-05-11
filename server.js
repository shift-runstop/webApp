// use javascript in strict mode, got it.
'use strict';

// 卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐

// import all required modules, ok on that too..
const express = require("express");
const logger = require('./utils/logger');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// initialise
const app = express();
// session 
app.use(cookieParser());
// use fileUpload
app.use(fileUpload());
// static files output to public folder, sure if you say so.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false, }));

// use handlebars
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
    
  // create own helper methods something other than these two

  helpers: {
    
    uppercase: function(word) {
      return word.toUpperCase();
    },

    formatDate: function(date) {
      let d = new Date(date);
      let dateNum = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();
      let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu", 
        "Fri",
        "Sat"
      ];

      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
        ];
      let monthname = months[month];
      let dayName = days[d.getDay()];
      return dayName + ' ' + monthname + " " + dateNum + ", " + year;
    }
  }//,

/*

should implement

  encrypt: function(password) {
    const adapter = new FileSync('db.json', {
      serialize: (password) => encrypt(JSON.stringify(password)),
      deserialize: (password) => JSON.parse(decrypt(password))
    })
  }

*/

}));
app.set('view engine', '.hbs');

// import routes file and use this for routing, cool get me around the place.
const routes = require('./routes');
app.use('/', routes);

// listenOcarinaoftime.mp3 max port
const listener = app.listen(process.env.PORT || 65535, function () {
  logger.info('listening for clients on port ' + listener.address().port);
});