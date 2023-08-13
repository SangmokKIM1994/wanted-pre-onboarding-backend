const jwt = require("jsonwebtoken");
const { Users } = require("../../db/models");
require("dotenv").config();
const { JWTKEY } = process.env;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, token] = (authorization ?? "").split(" ");
  if (tokenType !== "Bearer" || !token) {
    return res.status(401).json({
      message: "토큰 타입이 일치하지 않거나, 토큰이 존재하지 않습니다.",
    });
  }
  try {
    const decodedToken = jwt.verify(token, JWTKEY);
    const userId = decodedToken.userId;
    const user = await Users.findOne({ where: { email: userId } });
    if (!user) {
      return res
        .status(401)
        .json({ message: "토큰에 해당하는 사용자가 존재하지 않습니다." });
    }

    res.locals.user = user;
    next();
  } catch (error) {
    res.clearCookie("authorization"); //인증에 실패 할 경우 쿠키 삭제
    return res.status(401).json({
      message: "유효하지 않은 토큰입니다.",
    });
  }
};
