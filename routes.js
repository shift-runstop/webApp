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
router.get('/genres/:id', genres.index);
router.get('/genres/:id/deleteBook/:bookid', genres.deleteBook);
router.get('/library/deletegenre/:id', library.deleteGenre);
module.exports = router;

