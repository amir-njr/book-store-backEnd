const { default: mongooes } = require("mongoose");

const userSchema = mongooes.Schema(
  {
    fullName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "USER" },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongooes.model("user", userSchema);

module.exports = UserModel;
