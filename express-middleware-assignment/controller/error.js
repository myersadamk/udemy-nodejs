
const PageOptions = require('./page-options');
const NotFoundPageOptions = new PageOptions('Page Not Found');

exports.handlePageNotFound = (res) => {
  res.status(404);
  res.render('page-not-found.ejs', {
    options: NotFoundPageOptions
  });
};