const shoppingCardService = require("./peyment.service");
const autoBind = require("auto-bind");

class shoppingCardController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = shoppingCardService;
  }

  async isCardNumber(req, res, next) {
    try {
      const { cardNumber } = req.body;
      await this.#service.isCardNumber(cardNumber);
    } catch (error) {
      next(error);
    }
  }
  async createShoppingCard(req, res, next) {
    try {
      const { cardNumber } = req.body;
      await this.#service.createShoppingCard(cardNumber);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new shoppingCardController();
