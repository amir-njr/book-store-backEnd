const { genSaltSync, hashSync, compareSync } = require("bcrypt");

function hashPassword(password) {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}

function compairePassword(password, hashed) {
  return compareSync(password, hashed);
}

module.exports = {
  hashPassword,
  compairePassword,
};
