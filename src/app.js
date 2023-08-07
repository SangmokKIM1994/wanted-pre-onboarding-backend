const dotenv = require("dotenv");
const express = require("express");
const router = require("./index")
const app = express();

dotenv.config();

app.use(express.json());
app.use("/api", router);

app.use((error, req, res, next) => {
  console.log(error);
  return res
    .status(error.code || 500)
    .json({ message: error.message || "서버 에러" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버가 열렸습니다.`);
});