const informationService = require("./information.service");
const autoBind = require("auto-bind");

class informationController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = informationService;
  }

  async getInfo(req, res, next) {
    try {
      const result = await this.#service.getInfo();
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new informationController();
