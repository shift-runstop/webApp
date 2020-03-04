'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/library.js');
const about = require('./controllers/about.js');
const playlist = require('./controllers/genres.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/library', library.index);
router.get('/about', about.index);

router.get('/genres/:id', genres.index);

router.get('/genres/:id/deleteBook/:bookid', genres.deleteBook);
router.get('/library/deletegenre/:id', library.deleteGenre);

// export router module
module.exports = router;

