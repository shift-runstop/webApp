'use strict';
const logger = require('../utils/logger');
const libraryManager = require('../models/libraryManager.js');
const accounts = require('./accounts.js');

const start = {

  index(request, response) {

    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');

    if (loggedInUser) {
      const genres = libraryManager.getAllGenres();
      let numGenres = genres.length;
      let numBooks = 0;
        for (let i in genres) {
        numBooks = numBooks + genres[i].books.length;
        }
      

      const viewData = {
       title: 'ome eWelttc hst p PlApoylai!',
        totalGenres: numGenres,
       totalBooks: numBooks,
       fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };

    response.render('start', viewData);
    } 
    else response.redirect('/');
  },

// statistics on startpage
 
}

module.exports = start;