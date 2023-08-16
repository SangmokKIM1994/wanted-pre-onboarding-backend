const UserService = require("./user.services");

class UserController {
  userService = new UserService();

  signUp = async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await this.userService.signUp({ email, password });
      res.status(201).json({
        message: "회원가입 성공",
        nickname: user.nickname,
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await this.userService.login({ email, password });
      const { accessToken } = user;

      res.status(200).json({
        message: "로그인에 성공하였습니다.",
        accessToken,
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
