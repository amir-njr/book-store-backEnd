const { Router } = require("express");
const dataController = require("./data.controller");

const router = Router();

router.post("/give-data", dataController.giveData);

module.exports = {
  dataRouter: router,
};
