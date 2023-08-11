const express = require("express")
const router = express.Router()

const UserController = require("./user.controllers")
const userController = new UserController()

router.post("/signup")

module.exports = router