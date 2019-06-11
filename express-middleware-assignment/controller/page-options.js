module.exports = class PageOptions {
  constructor(title, target, additionalStyles) {
    this.title = title;
    this.target = target;
    this.additionalStyles = additionalStyles || [];
  }
};