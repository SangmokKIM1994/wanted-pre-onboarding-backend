const { Users } = require("../models");

class UserRepository {
  signUp = async ({ email, password }) => {
    const makeUser = await Users.create({ email, password });
    return makeUser;
  };

  findByEmail = async ({ email }) => {
    const user = await Users.findOne({ where: { email } });
    return user;
  };
}

module.exports = UserRepository;
