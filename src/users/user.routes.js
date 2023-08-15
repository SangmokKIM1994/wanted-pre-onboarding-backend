const express = require("express");
const router = express.Router();

const UserController = require("./user.controllers");
const userController = new UserController();

//회원가입
router.post("/signup", userController.signUp);
//로그인
router.post("/login",userController.login)

module.exports = router;
