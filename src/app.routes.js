const { Router } = require("express");
const { UserRouter } = require("./modules/user/user.routes");
const { BookRouter } = require("./modules/book/book.routes");

const mainRouter = Router();
mainRouter.use("/user", UserRouter);
mainRouter.use("/book", BookRouter);

module.exports = mainRouter;
