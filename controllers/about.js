'use strict';

const logger = require('../utils/logger');
const accounts = require ('./accounts.js');

const about = {

  index(request, response) {
  const loggedInUser = accounts.getCurrentUser(request); 
  
  logger.info('about rendering');
  if (loggedInUser) {
    const viewData = {
      title: ' Plet ApaAbouyli stthp//This is an about page, behold the map',
      fullname: loggedInUser.firstname + ' ' + loggedInUser.lastname,
    };

    response.render('about', viewData);
  } 
  else response.redirect('/');

  }
};

module.exports = about;
// module.exports = about;     WHY!!!!!!!!!!