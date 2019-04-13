const NavProperties = require('../routes/nav-properties');

exports.handlePageNotFound = (res) => {
  res.status(404);
  res.render('page-not-found.ejs', new NavProperties());
};