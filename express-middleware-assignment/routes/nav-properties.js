module.exports =
  /**
   * Class is possibly useless. The thought here is that this breaks down a discrete object that perhaps more cleanly
   * explains the data being passed to render() and why it's being used.
   */
  class NavProperties {
    constructor(target) {
      this.target = target;
    }
  };