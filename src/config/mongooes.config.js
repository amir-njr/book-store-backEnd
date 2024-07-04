const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connect To DB");
  })
  .catch((err) => {
    console.log(err?.message ?? "Failed DB Connection");
  });
