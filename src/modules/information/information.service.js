const autoBind = require("auto-bind");
const UserModel = require("../user/user.model");
const BookModel = require("../book/book.model");
const dataModel = require("../data/data.model");

class informationService {
  #userModel;
  #bookModel;
  #dataModel;

  constructor() {
    autoBind(this);
    this.#userModel = UserModel;
    this.#bookModel = BookModel;
    this.#dataModel = dataModel;
  }

  async getInfo() {
    const userCount = await this.#userModel.find();
    const bookCount = await this.#bookModel.find();
    const production = await this.#dataModel.find();
    const [product] = production
    const saleCount = this.sale(product);
    const profit = (saleCount * 30) / 100


    return {
      userCount: userCount.length,
      bookCount: bookCount.length,
      saleCount,
      profit
    };
  }
  sale(product) {
    const totalPrice = product?.bought?.reduce(
      (acc, cur) => acc + cur.price * cur.qty,
      0
    );
    return totalPrice;
  }
}

module.exports = new informationService();
