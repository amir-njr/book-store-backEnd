const dataService = require("./data.service");
const autoBind = require("auto-bind");

class dataController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = dataService;
  }

  async giveData(req, res, next) {
    try {
      const { totalPrice, bought, productionCount, userId } = req.body;
      const result = await this.#service.giveData(
        totalPrice,
        bought,
        productionCount,
        userId
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new dataController();
