const routes = require('express').Router();
const errorController = require('../controller/error');

const NavProperties = require('../routes/nav-properties');

routes.get('/', (req, res) => {
  res.render('index.ejs', new NavProperties('/'));
});

routes.use((req, res) => {
  errorController.handlePageNotFound(res);
});

module.exports.registerRoutes = (app) => {
  app.use(routes);
};
