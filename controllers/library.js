'use strict';
const logger = require('../utils/logger');
const uuid = require('uuid');
const libraryManager = require('../models/libraryManager.js');
const accounts = require('./accounts.js');


const library = {
  
  index(request, response) {

    logger.info('library rendering');
    
    const loggedInUser = accounts.getCurrentUser(request);
    const genreId = request.params.id;

    if (loggedInUser) {
      const viewData = {
        title: 'Library organised by genre',
        genres: libraryManager.getUserGenres(loggedInUser.id),
        user: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };
      logger.info('about to render', viewData.genres);
      response.render('library', viewData);
    } 
    else response.redirect('/');
  
  },

  deleteGenre(request, response) {

    const genreId = request.params.id;
    logger.debug(`Deleting Genre ${genreId}`);
    libraryManager.removeGenre(genreId);
    response.redirect('/library');

  },

  addGenre(request, response) {

    const loggedInUser = accounts.getCurrentUser(request);
    const date = new Date();
    const newGenre = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      picture: request.files.picture,
      date: date,
      books:[],
    };

    libraryManager.addGenre(newGenre, function() {
      response.redirect('/library');
    });
    
  
  },

}

module.exports = library;