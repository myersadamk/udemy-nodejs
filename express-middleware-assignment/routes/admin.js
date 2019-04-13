const routes = require('express').Router();
const usersController = require('../controller/users');

routes.get('/add-users', (req, res) => {
  usersController.getUserRegistration(res);
});

routes.post('/add-users', (req, res) => {
  usersController.postNewUsers(req, res);
});

module.exports.registerRoutes = (app) => {
  app.use('/admin', routes);
};
