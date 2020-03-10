'use strict';
const _ = require('lodash');
const JsonStore = require('./JsonStore');
const libraryManager = {                                                        // comment out these three lines to  //
  store: new JsonStore('./models/library.json', { allInLibrary: []}),           // bring functional listgenres and   //
  collection: 'allInLibrary',                                                   // list books partials back up       //
  
//const libraryManager = {                                                      // uncomment these                   //

//  allInLibrary: require('./library.json').allInLibrary,                       //************************************//
  
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
  },
  removeBook(id, bookId) {
  const genre = this.getGenre(id);
  _.remove(genre.books, { id: bookId });
  },
};
module.exports = libraryManager;