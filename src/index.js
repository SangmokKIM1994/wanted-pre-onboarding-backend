const express = require("express");
const router = express.Router();

const UserRouter = require("./users/user.routes")
// const PostRouter = require("./posts")

router.use("/user", UserRouter);
// router.use("/post", PostRouter);

router.get("/", (req, res) => {
    res.send("서버 연결이 완료되었습니다.");
  });

module.exports = router;
