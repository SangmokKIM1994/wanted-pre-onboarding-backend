const express = require("express");
const router = express.Router();

const validationMiddleWare = require("../middlewares/validation.middleware");

const UserController = require("./user.controllers");
const userController = new UserController();

//회원가입
router.post(
  "/signup",
  validationMiddleWare.signUpAndLoginCheck,
  userController.signUp
);

//로그인
router.post(
  "/login",
  validationMiddleWare.signUpAndLoginCheck,
  userController.login
);

module.exports = router;
