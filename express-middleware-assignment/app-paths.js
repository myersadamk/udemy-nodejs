const path = require('path');

const fromBase = (...files) => {
  return path.join(__dirname, ...files);
};

module.exports.fromBase = fromBase;

module.exports.fromView = (...files) => {
  return fromBase('views', ...files);
};

module.exports.fromModel = (...files) => {
  return fromBase('model', ...files);
};

module.exports.fromRoutes = (...files) => {
  return fromBase('routes', ...files);
};

module.exports.fromData = (...files) => {
  return fromBase('data', ...files);
};