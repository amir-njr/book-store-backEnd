const autoBind = require("auto-bind");
const bookService = require("./book.service");

class BookController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = bookService;
  }
  async create(req, res, next) {
    try {
      const { title, price, description } = req.body;
      const book = await this.#service.create(title, price, description);
      res.send(book);
    } catch (error) {
      next(error);
    }
  }
  async allBooks(req, res, next) {
    try {
      const books = await this.#service.allBooks();
      res.status(200).json({
        count: books.length,
        books,
      });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, price, description } = req.body;
      await this.#service.update(id, title, price, description);
    } catch (error) {
      next(error);
    }
  }
  async deleteById(req, res, next) {
    try {
      const { id } = req.params;
      await this.#service.deleteById(id);
    } catch (error) {
      next(error);
    }
  }
  // async allUsers(req, res, next) {
  //   try {
  //     const users = await this.#service.allUsers();
  //     res.status(200).json({ count: users.length, users });
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // async deleteById(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     await this.#service.deleteById(id);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // async update(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const { fullName, email } = req.body;
  //     await this.#service.update(id, fullName, email);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

module.exports = new BookController();
