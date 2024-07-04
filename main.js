const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const swaggerConfig = require("./src/config/swagger.config");
const NotFound = require("./src/common/excption/notFoundHandler");
const allExceptionHandler = require("./src/common/excption/allExceptionHandler");
const mainRouter = require("./src/app.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

async function main() {
  const app = express();
  const port = process.env.PORT;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PATCH"],
    })
  );
  app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
  require("./src/config/mongooes.config");
  app.use(mainRouter);
  swaggerConfig(app);
  NotFound(app);
  allExceptionHandler(app);
  app.listen(port, () => {
    console.log("server is run on port 3000 => http://localhost:3000");
  });
}

main();
