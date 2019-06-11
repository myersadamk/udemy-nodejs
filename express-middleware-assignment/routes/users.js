const routes = require('express').Router();
const usersController = require('../controller/users');

routes.get('/', (req, res) => {
  usersController.getRegisteredUsers(res);
});

routes.get('/registration/add-users', (req, res) => {
  usersController.getUserRegistration(res);
});

routes.post('/registration/add-users', (req, res) => {
  usersController.postNewUsers(req, res);
});

module.exports.registerRoutes = (app) => {
  app.use(routes);
};
