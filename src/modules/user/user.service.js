const autoBind = require("auto-bind");
const jwt = require("jsonwebtoken");
const { hashPassword, compairePassword } = require("../../common/utils/hash");
const UserModel = require("./user.model");
require("dotenv").config();

class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async signUp(fullName, email, password) {
    const user = await this.#model.findOne({ email });
    if (user)
      throw {
        status: 400,
        message: "شما قبلا ثبت نام کرده اید ...",
      };
    else {
      const newUser = await this.#model.create({
        fullName,
        email,
        password: hashPassword(password),
      });
      return {
        message: "ثبت نام با موفقیت انجام شد ...",
        status: 201,
        data: newUser,
      };
    }
  }
  async signIn(email, password) {
    const user = await this.#model.findOne({ email });
    if (!user) {
      throw {
        status: 400,
        message: "شما ثبت نام نکرده اید ...",
      };
    }
    if (compairePassword(password, user.password)) {
      return this.signToken({ email, userId: user._id });
    } else {
      throw {
        status: 400,
        message: "نام کاربری یا رمز تان اشتباه می باشد ...",
      };
    }
  }
  signToken(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1y" });
  }
  async allUsers() {
    return await this.#model.find();
  }
  async update(id, fullName, email) {
    const updateUser = {
      fullName,
      email,
    };
    await this.#model.updateOne(
      { _id: id },
      {
        $set: updateUser,
      }
    );
    throw {
      status: 202,
      message: "کاربر مورد نظر با موفقیت بروزرسانی شد ...",
    };
  }
  async deleteById(id) {
    await this.#model.deleteOne({ _id: id });
    throw {
      status: 202,
      message: "کاربر مورد نظر با موفقیت حذف شد ...",
    };
  }
  async whoIs(req) {
    const [, token] = req?.headers?.authorization?.split(" ");
    const userData = this.verifyToken(token);
    const user = await this.#model.findOne({ _id: userData.userId });
    return user
  }
  verifyToken(token) {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    return data;
  }
}

module.exports = new UserService();
