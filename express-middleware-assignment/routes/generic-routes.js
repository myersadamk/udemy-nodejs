const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index.ejs');
});

routes.use((req, res) => {
  res.status(404);
  res.render('page-not-found.ejs');
});

module.exports = routes;