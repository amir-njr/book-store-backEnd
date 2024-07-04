const NodeEnv = require("../../common/constant/env.enum");
const userService = require("./user.service");
const autoBind = require("auto-bind");

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = userService;
  }
  async signUp(req, res, next) {
    try {
      const { fullName, email, password } = req.body;
      const user = await this.#service.signUp(fullName, email, password);
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
  async signIn(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await this.#service.signIn(email, password);
      return res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === NodeEnv.Production,
        })
        .status(200)
        .json({
          message: "با موفقیت وارد شدید ...",
          accessToken: token,
        });
    } catch (error) {
      next(error);
    }
  }
  async allUsers(req, res, next) {
    try {
      const users = await this.#service.allUsers();
      res.status(200).json({ count: users.length, users });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { fullName, email } = req.body;
      await this.#service.update(id, fullName, email);
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
}

module.exports = new UserController();
