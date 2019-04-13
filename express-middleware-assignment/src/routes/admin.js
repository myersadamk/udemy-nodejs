const express = require('express');
const getHtmlFile = require('./html-file-path');

const adminRoutes = express.Router();

adminRoutes.get('/add-users', (req, res) => {
  res.sendFile(getHtmlFile('add-users.html'));
});

adminRoutes.post('/add-users', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = adminRoutes;