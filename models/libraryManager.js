'use strict';
const _ = require('lodash');
const libraryManager = {
  allInLibrary: require('./library.json').allInLibrary,
  getAllGenres() {
    return this.allInLibrary;
  },
  getGenre(id) {
    return _.find(this.allInLibrary, { id: id });
  },
  removeBook(id, bookId) {
    const genre = this.getGenre(id);
    _.remove(genre.books, { id: bookId });
  },
  removeGenre(id) {
  _.remove(this.allInLibrary, { id: id });
  },
  addBook(id, book) {
    
  }
};
module.exports = libraryManager;