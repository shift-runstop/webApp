'use strict';
const logger = require('../utils/logger');
const developerStore = require('../models/developer-store.js');
const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About the Playlist App',
      developers: developerStore.getAllDevelopers(),
    };
    response.render('about', viewData);
  },
};
module.exports = about;