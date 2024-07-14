const { Router } = require("express");
const userController = require("./user.controller");


const router = Router();

router.post("/sign-up", userController.signUp);
router.post("/sign-in", userController.signIn);
router.get("/users", userController.allUsers);
router.delete("/delete-one/:id", userController.deleteById);
router.patch("/update/:id", userController.update);
router.get("/who-is", userController.whoIs);
router.post("/get-peyment", userController.getPeymentData);

module.exports = {
  UserRouter: router,
};
