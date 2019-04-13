const adminRoutes = require('express').Router();

adminRoutes.get('/add-users', (req, res) => {
  res.render('add-users.ejs', {
    target: '/admin/add-users'
  });
});

adminRoutes.post('/add-users', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = adminRoutes;