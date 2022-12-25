import pool from "../loaders/mysql.js";

export function getComments(postType, post_id) {
  const query = `select * from comments_${postType} where ${postType}_id=?`;
  return pool
    .query(query, [post_id]) //
    .then(comments => comments[0])
    .catch(err => {
      throw err;
    });
}
