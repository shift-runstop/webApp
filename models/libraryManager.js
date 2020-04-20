'use strict';
const _ = require('lodash');
const logger = require('../utils/logger')
const JsonStore = require('./JsonStore');
const libraryManager = {                                                        
  store: new JsonStore('./models/library.json', { allInLibrary: []}),           
  collection: 'allInLibrary',                                                   
  
//const libraryManager = {

//  allInLibrary: require('./library.json').allInLibrary,

  getAllGenres() {
    return this.store.findAll(this.collection); // allInLibrary;
  },
  getGenre(id) {
    return this.store.findOneBy(this.collection, {id:id}); //_.find(this.allInLibrary, { id: id });
  },
  addGenre(genre) {
    this.store.add(this.collection, genre); //allInLibrary.push(genre);
  },
  removeGenre(id) {
  // _.remove(this.allInLibrary, { id: id });
    const genre = this.getGenre(id);
    this.store.remove(this.collection, genre);
  },
  removeAllGenres() {
    this.store.removeAll(this.collection);
  },
  addBook(id, book) {
    const genres = this.getGenre(id);
    genres.book.push(book);
    logger.debug(`book`)
  },
  updateBook(request, response) {
    const genreId = request.params.id;
    const bookId = request.params.bookId;
    logger.debug("updating book " + bookId);
    const updatedBook = {
      title: request.body.title,
      artist: request.body.author,
      ISBN: request.body.ISBN,
      publisher: request.body.publisher
    };
    playlistStore.editSong(playlistId, songId, updatedSong);
    response.redirect('/playlist/' + playlistId);
  },
  removeBook(id, bookId) {
  const genre = this.getGenre(id);
  const books = genre.books;
  _.remove(books, { id: bookId });
  logger.debug(`${genre}, ${books}`)
  },
};
module.exports = libraryManager;