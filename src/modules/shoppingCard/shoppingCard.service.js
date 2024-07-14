const autoBind = require("auto-bind");
const shoppingCardModel = require("./shoppingCard.model");

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
        message: "Not Found",
      };
    else
      throw {
        status: 200,
        message: "Found",
      };
  }

  async createShoppingCard(cardNumber) {
    await this.#model.create({ cardNumber });
    throw {
      status: 200,
      message: "Create Card SuccessFull",
    };
  }
}

module.exports = new shoppingCardService();
