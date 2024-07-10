const autoBind = require("auto-bind");
const BookModel = require("./book.model");

class BookService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = BookModel;
  }
  async create(title, price, discount, description) {
    let newPrice;
    if (discount) {
      const result = (price * discount) / 100;
      newPrice = price - result;
    }
    const newBook = await this.#model.create({
      title,
      orginalPrice: price,
      price: newPrice || price,
      discount,
      description,
    });
    return {
      message: " کتاب جدید با موفقیت ایجاد شد ...",
      status: 201,
      data: newBook,
    };
  }
  async allBooks() {
    return await this.#model.find();
  }

  async update(id, title, price, description) {
    const updateBook = {
      title,
      price,
      description,
    };
    await this.#model.updateOne(
      { _id: id },
      {
        $set: updateBook,
      }
    );
    throw {
      status: 202,
      message: "کتاب مورد نظر با موفقیت بروزرسانی شد ...",
    };
  }
  async deleteById(id) {
    await this.#model.deleteOne({ _id: id });
    throw {
      status: 200,
      message: " کتاب مورد نظر با موفقیت حذف شد ...",
    };
  }
}

module.exports = new BookService();
