const Joi = require("joi");
const { makeError } = require("../error");

const validation = {
  //회원가입 로그인
  signUpAndLoginCheck: async (req, res, next) => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .regex(/.*@.*/)
        .required()
        .error(
          new makeError({
            message: "email형식이 아닙니다.",
            code: 400,
          })
        ),
      password: Joi.string()
        .min(8)
        .required()
        .error(
          new makeError({
            message: "비밀번호는 8자리 이상입니다.",
            code: 400,
          })
        ),
    });
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = validation;
