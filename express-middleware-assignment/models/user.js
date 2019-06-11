const fileSystem = require('fs');
const paths = require('../app-paths');

const usersFilePath = paths.fromData('users.json');

const readUsersFile = callback => {
  fileSystem.readFile(usersFilePath, (error, contents) => {
    if (error) {
      callback([]);
    } else {
      callback(JSON.parse(contents));
    }
  })
};

module.exports = class User {

  constructor(name, tagline) {
    this.name = name;
    this.tagline = tagline;
  }

  static fetchAll(callback) {
    return readUsersFile(callback);
  }

  save() {
    readUsersFile((users) => {
      users.push(this);
      fileSystem.writeFile(usersFilePath, JSON.stringify(users), error => {
        console.log(error);
      })
    })
  }
};