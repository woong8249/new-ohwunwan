import bcrypt from "bcrypt";
import config from "../config/config.js";
import { setToken, createToken } from "../utils/token.js";

//  user or admin login
export async function login(res, user, admin) {
  if (user) {
    const userInfo = {
      userId: user.userId,
      nickname: user.nickname,
    };
    const token = await createToken(userInfo);
    userInfo.picture = user.picture;
    setToken(res, token);
    return userInfo;
  } else if (admin) {
    const adminIfo = {
      adminId: admin.adminId,
    };
    const token = await createToken(adminIfo);
    setToken(res, token);
    return adminIfo;
  }
}
export function logout(res) {
  res.clearCookie("token");
}
export function getMe(user, admin) {
  if (user) {
    const userInfo = {
      userId: user.userId,
      nickname: user.nickname,
      picture: user.picture,
    };
    return userInfo;
  } else if (admin) {
    // console.log(admin);
    const adminInfo = {
      adminId: admin.adminId,
    };
    return adminInfo;
  }
}

export async function generateCSRFToken() {
  return bcrypt.hash(config.csrf.plainToken, 1);
}
