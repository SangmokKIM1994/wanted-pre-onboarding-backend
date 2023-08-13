const { Users } = require("../models");

class UserRepository {
  signUp = async ({ email, password }) => {
    const makeUser = await Users.create({ email, password });
    return makeUser;
  };
}

module.exports = UserRepository;
