'use strict';

const logger = require('../utils/logger');
const libraryManager = require('../models/libraryManager');
const uuid = require('uuid');

const genres = {

  index(request, response) {

    const genreId = request.params.id;
    logger.debug('Genre id = ' + genreId);

    const viewData = {

      title: 'Books held in the library of this genre',
      genres: libraryManager.getGenre(genreId),

    };

    response.render('book', viewData); //genre
  },

    deleteBook(request, response) {

    const genreId = request.params.id;
    const bookId = request.params.bookId;
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
      ISBN: request.body.ISBN,
      publisher: request.body.publisher
      
    };
    logger.debug(`added new book to ${genreId}`);
    libraryManager.addBook(genreId,newBook);
    response.redirect('/book/' + genreId); //genres

  },

  updateBook(request, response) {
    const genreId = request.params.id; // retrieve genreId 
    const bookId = request.params.bookId; // and bookId 
    logger.debug("updating book " + bookId);

    const updatedBook = {
      title: request.body.title,
      author: request.body.author, 
      ISBN: request.body.ISBN,
      publisher: request.body.publisher // fields to be updated

    }; 

    libraryManager.editBook(genreId, bookId, updatedBook);
    response.redirect('/genre/' + genreId);

  },

}

module.exports = genres;