const dotenv = require("dotenv");
const express = require("express");
const router = require("./index");
const app = express();

dotenv.config();

const mysql = require("mysql2");
const pool = mysql.createPool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
});

app.use(express.json());
app.use("/api", router);

app.use((error, req, res, next) => {
  console.log(error);
  return res
    .status(error.code || 500)
    .json({ message: error.message || "서버 에러" });
});

const PORT = process.env.PORT || 3000;

pool.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL 연결 실패", err);
    return;
  }
  console.log("MySQL 연결 성공");
  console.log("현재 커넥션 개수:", pool._allConnections.length);
  connection.release();
});
app.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버가 열렸습니다.`);
});
