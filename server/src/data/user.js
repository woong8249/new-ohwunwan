import pool from "../loaders/mysql.js";

export async function findByUserId(userId) {
  const query = `select * from users where userId=?`;
  return pool
    .execute(query, [userId])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}
export async function findByNickname(nickname) {
  const query = `select * from users where nickname=?`;
  return pool
    .execute(query, [nickname])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}

export async function createUser(userId, password) {
  const query = `insert into users(userId,password) values(?,?)`;
  return pool
    .execute(query, [userId, password])
    .then(result => result)
    .catch(err => {
      throw err;
    });
}

export async function updatePicture(userId, location = null, key = null) {
  const query = `update users set s3key=?,picture=? where userId=?`;
  return pool
    .execute(query, [key, location, userId])
    .then(result => location)
    .catch(err => {
      throw err;
    });
}

export async function updateProfile(newUserId, newNickname, id) {
  const query = `update users set userId=?,nickname=? where id=?`;
  return pool
    .execute(query, [newUserId, newNickname, id])
    .then(result => findByUserId(newUserId))
    .catch(err => {
      throw err;
    });
}
