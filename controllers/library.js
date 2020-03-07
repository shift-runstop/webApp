'use strict';

// import all required modules
const logger = require('../utils/logger');
const libraryManager = require('../models/libraryManager.js');

// create dashboard object
const library = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('library rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'book App library',
      genres: libraryManager.getAllGenres(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.genres);
    response.render('Library', viewData);
  },
  
  deleteGenre(request, response) {
    const genreId = request.params.id;
    logger.debug(`Deleting Genre ${genreId}`);
    libraryManager.removeGenre(genreId);
    response.redirect('/library');
  },
};

// export the dashboard module
module.exports = library;
