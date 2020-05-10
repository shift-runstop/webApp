'use strict';
const userstore = require('../models/user-store');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {

  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('start', viewData);
  },

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },

  logout(request, response) {
    response.cookie('', '');
    response.redirect('/');
  },

  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {

    const user = request.body;
    user.id = uuid(); // TypeError: Cannot set property'id' of undefined
    userstore.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  
  },

  authenticate(request, response) {

    const user = userstore.getUserByEmail(request.body.email); // TypeError: Cannot read property 'email' of undefined
    
    if (user && user.password === request.body.password) { 
      response.cookie('genre', user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect('/library');
    } else {
      response.redirect('/login');
    }
  
  },

  getCurrentUser (request) {
    const userEmail = request.cookies.library;
    return userstore.getUserByEmail(userEmail);
  }
  
}

module.exports = accounts;
