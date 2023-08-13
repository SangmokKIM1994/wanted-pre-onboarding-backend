const UserRepository = require("./user.repositories");

class UserService {
  UserRepository = new UserRepository();

  signUp = async ({ id, password }) => {
    const user = await this.UserRepository.signUp({ email, password });
    return user;
  };
}

module.exporst = UserService;
