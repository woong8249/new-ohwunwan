import * as data from "../data/index.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";
import { setToken, createToken } from "../utils/jwt.js";
export async function createUser(body) {
  const { userId, password } = body;
  const hashed_password = await bcrypt.hash(password, config.bcrypt.saltRound);
  await data.user.createUser(userId, hashed_password);
}

export async function login(res, user) {
  const userinfo = {
    userId: user.userId,
    nickname: user.nickname,
    picture: user.picture,
  };
  const token = await createToken(userinfo);
  setToken(res, token);
  return userinfo;
}
