const { Router } = require("express");
const bookController = require("./book.controller");

const router = Router();

router.post("/create-book", bookController.create);
router.get("/books", bookController.allBooks);
router.patch("/update-book/:id", bookController.update);
router.delete("/delete-book/:id", bookController.deleteById);

module.exports = {
  BookRouter: router,
};
