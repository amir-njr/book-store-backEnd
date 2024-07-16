const { Router } = require("express");
const { UserRouter } = require("./modules/user/user.routes");
const { BookRouter } = require("./modules/book/book.routes");
const { shoppingCardRouter } = require("./modules/shoppingCard/shoppingCard.routes");
const { dataRouter } = require("./modules/data/data.routes");
const { infoRouter } = require("./modules/information/information.routes");



const mainRouter = Router();
mainRouter.use("/user", UserRouter);
mainRouter.use("/book", BookRouter);
mainRouter.use("/card", shoppingCardRouter);
mainRouter.use("/data", dataRouter);
mainRouter.use("/info", infoRouter);

module.exports = mainRouter;
