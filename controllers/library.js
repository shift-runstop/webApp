'use strict';
const logger = require('../utils/logger');
const uuid = require('uuid');
const libraryManager = require('../models/libraryManager.js');
const library = {
  index(request, response) {
    logger.info('library rendering');
    const viewData = {
      title: 'book App library',
      genres: libraryManager.getAllGenres(),
    };
    logger.info('about to render', viewData.genres);
    response.render('library', viewData);
  },
  addGenre(request, response) {
    const newGenre = {
      id: uuid(),
      title: request.body.title,
      book:[],
    }
    libraryManager.addGenre(newGenre);
    response.redirect('/library');
  },
  deleteGenre(request, response) {
    const genreId = request.params.id;
    logger.debug(`Deleting Genre ${genreId}`);
    libraryManager.removeGenre(genreId);
    response.redirect('/library');
  },
};
module.exports = library;