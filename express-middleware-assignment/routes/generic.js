const routes = require('express').Router();
const errorController = require('../controller/error');

routes.use((req, res) => {
  errorController.handlePageNotFound(res);
});

module.exports.registerRoutes = (app) => {
  app.use(routes);
};
