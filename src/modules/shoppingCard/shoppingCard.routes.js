const { Router } = require("express");
const shoppingCardController = require("./shoppingCard.controller");

const router = Router();

router.post("/is-card", shoppingCardController.isCardNumber);
router.post("/create", shoppingCardController.createShoppingCard);

module.exports = {
  shoppingCardRouter: router,
};
