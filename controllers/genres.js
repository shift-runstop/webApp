'use strict';

const logger = require('../utils/logger');
const libraryManager = require('../models/libraryManager');
const uuid = require('uuid');

const genres = {
  index(request, response) {
    const genreId = request.params.id;
    logger.debug('Genre id = ' + genreId);
    const viewData = {
      title: 'Genre',
      genres: libraryManager.getGenre(genreId),
    };
    response.render('book', viewData); //genre
  },
    deleteBook(request, response) {
    const genreId = request.params.id;
    const bookId = request.params.bookid;
    logger.debug(`Deleting Book ${bookId} from Genre ${genreId}`);
    libraryManager.removeBook(genreId, bookId);
    response.redirect('/book/' + genreId); //genres
  },
  addBook(request,response) {
    const genreId = request.params.id;
    const genre = libraryManager.getGenre(genreId);
    const newBook = {
      id : uuid(),
      title: request.body.title,
      author: request.body.author,
    };
    libraryManager.addBook(genreId,newBook);
    response.redirect('/book/' + genreId); //genres
  },
};

module.exports = genres;