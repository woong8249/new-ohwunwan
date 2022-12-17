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

export async function createUser(userId, password) {
  const query = `insert into users(userId,password) values(?,?)`;
  return pool
    .execute(query, [userId, password])
    .then(result => result)
    .catch(err => {
      throw err;
    });
}

export async function updatePicture(userId, location, key) {
  const query = `update users set s3key=?,picture=? where userId=?`;
  return pool
    .execute(query, [key, location, userId])
    .then(result => location)
    .catch(err => {
      throw err;
    });
}
