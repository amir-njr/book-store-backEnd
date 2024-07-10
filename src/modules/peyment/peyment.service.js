const autoBind = require("auto-bind");
const shoppingCardModel = require("./peyment.model");

class shoppingCardService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = shoppingCardModel;
  }
  async isCardNumber(cardNumber) {
    const card = await this.#model.findOne({ cardNumber });
    if (!card)
      throw {
        status: 404,
      };
    else
      throw {
        status: 200,
      };
  }

  async createShoppingCard(cardNumber) {
    await this.#model.create({ cardNumber });
    throw {
      status: 200,
    };
  }
}

module.exports = new shoppingCardService();
