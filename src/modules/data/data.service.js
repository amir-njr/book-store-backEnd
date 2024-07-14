const autoBind = require("auto-bind");
const dataModel = require("./data.model");
const { Types } = require("mongoose");

class dataService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = dataModel;
  }
  async giveData(totalPrice, bought, productionCount, userId) {
    await this.#model.create({
      totalPrice,
      bought,
      productionCount,
      userId: new Types.ObjectId(userId),
    });
    throw {
      status: 201,
      message: "خرید با موفقیت انجام شد ...",
    };
  }
}

module.exports = new dataService();
