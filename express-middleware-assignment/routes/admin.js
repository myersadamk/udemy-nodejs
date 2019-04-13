const adminRoutes = require('express').Router();

adminRoutes.get('/add-users', (req, res) => {
  res.render('add-users.ejs');
});

adminRoutes.post('/add-users', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = adminRoutes;