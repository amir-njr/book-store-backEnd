const { default: mongooes } = require("mongoose");

const bookSchema = mongooes.Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BookModel = mongooes.model("book", bookSchema);

module.exports = BookModel;
