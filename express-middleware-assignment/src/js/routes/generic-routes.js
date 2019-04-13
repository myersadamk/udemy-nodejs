const express = require('express');
const getHtmlFile = require('./html-file-path');

const baseRoutes = express.Router();

baseRoutes.get('/', (req, res) => {
  res.sendFile(getHtmlFile('index.html'));
});

baseRoutes.use((req, res) => {
  res.status(404);
  res.sendFile(getHtmlFile('page-not-found.html'))
});

module.exports = baseRoutes;