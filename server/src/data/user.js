import pool from "../loaders/mysql.js";

export async function findByUserId(userId) {
  const query = `select id from users where userId=?`;
  return pool
    .execute(query, [userId])
    .then(result => result[0][0])
    .catch(err => console.error(err));
}
