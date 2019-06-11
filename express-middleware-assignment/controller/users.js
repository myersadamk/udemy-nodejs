const User = require('../models/user');

const PageOptions = require('./page-options');
const RegisteredUsersOptions = new PageOptions('Registered Users', '/', ['registered-users']);

exports.getRegisteredUsers = res => {
  User.fetchAll((users) => {
    res.render('registered-users.ejs', {
      options: RegisteredUsersOptions,
      model: {
        users: users
      },
    });
  });
};

const RegisterNewUserOptions = new PageOptions('Register New User', '/add-users', ['add-users']);
exports.getUserRegistration = res => {
  res.render('add-users.ejs', {
    options: RegisterNewUserOptions
  })
};

exports.postNewUsers = (req, res) => {
  new User(req.body.username, req.body.tagline || '').save();
  res.redirect('/');
};