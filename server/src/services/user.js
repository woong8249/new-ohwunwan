import * as data from "../data/index.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";
import { setToken, createToken } from "../utils/token.js";
import { s3Remove } from "../utils/s3.js";

//
export async function createUser(body) {
  const { userId, password } = body;
  const hashed_password = await bcrypt.hash(password, config.bcrypt.saltRound);
  await data.user.createUser(userId, hashed_password);
}

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

export async function updatePicture(user, file = undefined) {
  const { userId, s3key } = user;
  if (s3key) {
    s3Remove("project-ohwunwan", s3key);
  }
  if (file) {
    const { location, key } = file;
    // to update
    return data.user.updatePicture(userId, location, key);
  } else {
    // to delete
    return data.user.updatePicture(userId);
  }
}

export async function updateProfile(res, body, user) {
  let { newUserId, newNickname } = body;
  if (!newUserId) newUserId = user.userId;
  if (!newNickname) newNickname = user.nickname;
  // update user profile info
  const updatedUser = await data.user.updateProfile(
    newUserId,
    newNickname,
    user.id
  );
  // update token
  const userInfo = {
    userId: updatedUser.userId,
    nickname: updatedUser.nickname,
    picture: updatedUser.picture,
  };
  const token = await createToken(userInfo);
  userInfo.picture = user.picture;
  setToken(res, token);
  return userInfo;
}

export async function updatePassword(body, user) {
  const { newPassword } = body;
  const { id } = user;
  const hashed_password = await bcrypt.hash(
    newPassword,
    config.bcrypt.saltRound
  );
  return data.user.updatePassword(hashed_password, id);
}

export async function withdrawal(user) {
  // user picture 삭제 in s3
  if (user.picture) s3Remove("project-ohwunwan", user.s3key);
  // 유저의 모든 포스트 사진 삭제 in s3
  const ohwunwan = await data.user.getPost_idByuser_id("ohwunwan", user.id);
  const _1rm = await data.user.getPost_idByuser_id("1rm", user.id);
  const feedback = await data.user.getPost_idByuser_id("feedback", user.id);
  const result = [...ohwunwan, ..._1rm, ...feedback];
  const parsed = result.map(item => JSON.parse(item.infoS3));
  for (let i = 0; i < parsed.length; i++) {
    for (let j = 0; j < parsed[i]?.length; j++) {
      s3Remove(parsed[i][j].bucket, parsed[i][j].key);
    }
  }
  // 유저 삭제
  await data.user.deleteUser(user.id);
}

export async function generateCSRFToken() {
  return bcrypt.hash(config.csrf.plainToken, 1);
}
