import * as data from "../data/index.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";
import { setToken, createToken } from "../utils/token.js";
import s3 from "../utils/s3.js";

//
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

export async function updatePicture(user, file) {
  const { userId, s3key } = user;
  if (s3key) {
    await s3.deleteObject(
      {
        Bucket: "project-ohwunwan",
        Key: s3key,
      },
      function (err, data) {
        throw err;
      }
    );
  }
  const { location, key } = file;
  return data.user.updatePicture(userId, location, key);
}
