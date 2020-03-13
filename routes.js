'use strict';
const express = require('express');
const router = express.Router();
const start = require('./controllers/start.js');
const library = require('./controllers/library.js');
const about = require('./controllers/about.js');
const genres = require('./controllers/genres.js');

router.get('/', start.index);
router.get('/library', library.index);
router.get('/about', about.index);
router.get('/book/:id', genres.index);

router.get('/genres/:id/deleteBook/:bookId', genres.deleteBook);
router.get('/library/deletegenre/:id', library.deleteGenre);

router.post('/library/:id/addGenre', library.addGenre);
router.post('/genres/addbook', genres.addBook);
module.exports = router;

