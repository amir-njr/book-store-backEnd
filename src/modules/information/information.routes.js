const { Router } = require("express");
const informationController = require("./information.controller");


const router = Router();

router.get("/get-info", informationController.getInfo);

module.exports = {
  infoRouter: router,
};
