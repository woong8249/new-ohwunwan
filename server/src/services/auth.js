import data from "../data/index.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";

export async function createUser(body) {
  const { userId, password } = body;
  const hashed_password = await bcrypt
    .hash(password, config.bcrypt.saltRound)
    .catch(err => {
      throw err;
    });
  await data.userReop.createUser(userId, hashed_password);
}

// 유효성검사
// 1.모두 바디에서 (userId,password,nickname)
// 2. bycripting후 회원가입시켜주고
// 3.

// 생각해보아야할것
// 회원가입하고나서 로그인 바로시켜줄지 아니면
// 본이다시 로그인해야하는지?
