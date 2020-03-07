'use strict';
const _ = require('lodash');
const JsonStore = require('./json-store');
const libraryManager = {
  store: new JsonStore('./models/library.json', { allInLibrary: []}),
  collection: 'allInLibrary',
  
  getAllGenres() {
    return this.allInLibrary;
  },
  getGenre(id) {
    return _.find(this.allInLibrary, { id: id });
  },
  addGenre(genre) {
    this.allInLibrary.push(genre);
  },
  removeGenre(id) {
  _.remove(this.allInLibrary, { id: id });
  },
  addBook(id, book) {
    const genres = this.getGenre(id);
    genres.book.push(book);
  },
  removeBook(id, bookId) {
  const genre = this.getGenre(id);
  _.remove(genre.books, { id: bookId });
  },
};
module.exports = libraryManager;