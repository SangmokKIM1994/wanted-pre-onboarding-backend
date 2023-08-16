const UserRepository = require("./user.repositories");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { makeError } = require("../error");

class UserService {
  userRepository = new UserRepository();

  signUp = async ({ email, password }) => {
    const findUser = await this.userRepository.findByEmail({ email });
    if (findUser) {
      throw new makeError({ message: "중복된 email입니다.", code: 400 });
    }
    const hashedPw = await bcrypt.hash(password, Number(process.env.HASHKEY));
    const user = await this.userRepository.signUp({
      email,
      password: hashedPw,
    });
    return user;
  };

  login = async ({ email, password }) => {
    const user = await this.userRepository.findByEmail({ email });
    if (!user) {
      throw new makeError({ message: "로그인에 실패하였습니다.", code: 400 });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new makeError({
        message: "비밀번호가 일치하지 않습니다.",
        code: 400,
      });
    }

    const accessToken = jwt.sign({ userId: user.userId }, process.env.JWTKEY, {
      expiresIn: "1h",
    });

    return {
      email: user.email,
      accessToken,
    };
  };
}

module.exports = UserService;
