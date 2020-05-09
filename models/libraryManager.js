'use strict';
const _ = require('lodash');
const logger = require('../utils/logger')
const JsonStore = require('./JsonStore');
//const accounts = require ('./accounts.js');
const cloudinary = require('cloudinary');

try {
  const env = require('../.data/.env.json');
  cloudinary.config(env.cloudinary);
}
catch(e) {
  logger.info('You must provide a Cloudinary credentials file - see README.md');
  process.exit(1);
}

const libraryManager = {                                                        
  
  store: new JsonStore('./models/library.json', { allInLibrary: [] }),           
  collection: 'allInLibrary',                                                   
  
//const libraryManager = {

//  allInLibrary: require('./library.json').allInLibrary,

  getAllGenres() {
    return this.store.findAll(this.collection); // allInLibrary;
  },
/*
  getUserGenres() {
    index(request, response) {
      const loggedInUser = accounts.getCurrentUser(request);
      if (loggedInUser) {
        return this.store.findByIds(this.collection);
      }
      else response.redirect('/');

    }
    
  },
*/
  getGenre(id) {
    return this.store.findOneBy(this.collection, {id:id}); //_.find(this.allInLibrary, { id: id });
  },

  addGenre(genre, response) {

    genre.picture.mv('tempimage', err => {
      if (!err) {
        cloudinary.uploader.upload('tempimage', result => {
          console.log(result);
          genre.picture = result.url;
          response();
        });
      }
    });

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

  removeBook(id, bookId) {
  const genre = this.getGenre(id);
  const books = genre.books;
  _.remove(books, { id: bookId });
  logger.debug(`${genre}, ${books}`)
  },

  editBook(id, bookId, updatedBook) {
    const genre = this.getGenre(id);
    const book = genre.book;
    const index = book.findIndex(book => book.id === bookId);
    book[index].title = updatedBook.title;
    book[index].author = updatedBook.author;
    book[index].ISBN = updatedBook.ISBN;
    book[index].publisher = updatedBook.publisher;
  }

};
module.exports = libraryManager;