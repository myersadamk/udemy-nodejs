const path = require('path');

const getHtmlFile = (filename) => {
  return path.join(__dirname, '..', '..', 'view', filename);
};

module.exports = getHtmlFile;


