const express = require('express');
const getHtmlFile = require('./html-file-path');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.sendFile(getHtmlFile('index.html'));
});

routes.use((req, res) => {
  res.status(404);
  res.sendFile(getHtmlFile('page-not-found.html'))
});

module.exports = routes;