import * as data from "../data/index.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";
import { setToken, createToken } from "../utils/token.js";

export async function login(res, user) {
  const userInfo = {
    userId: user.userId,
    nickname: user.nickname,
  };
  const token = await createToken(userInfo);
  userInfo.picture = user.picture;
  setToken(res, token);
  return userInfo;
}

export async function getMe(user, admin) {
  if (user) {
    const userInfo = {
      userId: req.user.userId,
      nickname: req.user.nickname,
      picture: req.user.picture,
    };
    return userInfo;
  } else if (admin) {
    const adminInfo = {};
    return adminInfo;
  }
}

export async function generateCSRFToken() {
  return bcrypt.hash(config.csrf.plainToken, 1);
}
