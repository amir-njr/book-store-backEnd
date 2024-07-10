const { default: mongooes } = require("mongoose");

const shoppingCardSchema = mongooes.Schema({
  cardNumber: { type: String },
});

const shoppingCardModel = mongooes.model("card", shoppingCardSchema);

module.exports = shoppingCardModel;
