'use strict';
const userstore = require('../models/user-store');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {

  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
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
      title: 'signup for the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {

    const user = request.body;
    user.id = uuid(); 
    userstore.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  
  },

  authenticate(request, response) {

    const user = userstore.getUserByEmail(request.body.email); 
    
    if (user && user.password === request.body.password) { 
      response.cookie('library', user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect('/start');
    } else {
      response.redirect('/');
    }
  
  },

  getCurrentUser (request) {
    const userEmail = request.cookies.library;
    return userstore.getUserByEmail(userEmail);
  }
  
}

module.exports = accounts;
