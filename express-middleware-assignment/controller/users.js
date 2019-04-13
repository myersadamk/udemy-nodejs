const NavProperties = require('../routes/nav-properties');

exports.getUserRegistration = (res) => {
  res.render('add-users.ejs', new NavProperties('/admin/add-users'));
};

exports.postNewUsers = (req, res) => {
  console.log(req.body);
  res.redirect('/');
};