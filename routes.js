'use strict';
const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const library = require('./controllers/library.js');
const about = require('./controllers/about.js');
const genres = require('./controllers/genres.js');
const accounts = require('./controllers/accounts.js');

// Session management
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

// Book and Genre list
router.get('/start', start.index);
router.get('/library', library.index);
router.get('/about', about.index);
router.get('/book/:id', genres.index);

// Genre control
router.get('/genres/:id/deleteBook/:bookId', genres.deleteBook);
router.get('/library/deletegenre/:id', library.deleteGenre);
router.post('/library/addGenre', library.addGenre);

//Book list control
router.post('/genres/addbook', genres.addBook);
router.post('/genres/:id/updateBook/:bookId', genres.updateBook);

module.exports = router;

