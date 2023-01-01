import pool from "../loaders/mysql.js";

export function findByAdminId(adminId) {
  const query = `select * from admins where adminId=?`;
  return pool
    .query(query, [adminId]) //
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}
