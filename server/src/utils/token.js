import jwt from "jsonwebtoken";
import config from "../config/config.js";

export async function createToken(useinfo) {
  return jwt.sign(
    {
      ...useinfo,
    },
    config.jwt.secretKey,
    {
      expiresIn: config.jwt.expires,
    }
  );
}

export function setToken(res, token) {
  const option = {
    maxAge: config.jwt.expires * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
    // 배포시에 다시수정해야할수도 있음
  };
  res.cookie("token", token, option);
}
