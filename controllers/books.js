'use strict';

const logger = require('../utils/logger');
const libraryManager = require('../models/libraryManager');

const genres = {
  index(request, response) {
    const Id = request.params.id;
    logger.debug('Genre id = ' + genreId);
    const viewData = {
      title: 'Genre',
      genre: libraryManager.getGenre(genreId),
    };
    response.render('genre', viewData);
  },
    deleteBook(request, response) {
    const genreId = request.params.id;
    const bookId = request.params.bookid;
    logger.debug(`Deleting Book ${bookId} from Genre ${genreId}`);
    libraryManager.removeBook(genreId, bookId);
    response.redirect('/genre/' + genreId);
  },
};

module.exports = genres;