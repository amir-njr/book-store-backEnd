const { default: mongooes } = require("mongoose");

const dataSchema = mongooes.Schema({
  totalPrice: { type: String },
  bought: { type: [Object], default: [] },
  productionCount: { type: String },
  userId: { type: mongooes.Schema.Types.ObjectId, ref: "user" },
});

const dataModel = mongooes.model("data", dataSchema);

module.exports = dataModel;
