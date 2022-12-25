import pool from "../loaders/mysql.js";

export async function getComments(postType, post_id) {
  const query = `select * from comments_${postType} where ${postType}_id=?`;
  return pool
    .query(query, [post_id]) //
    .then(comments => comments[0])
    .catch(err => {
      throw err;
    });
}
export async function getCommentById(postType, id) {
  const query = `select * from comments_${postType} where id=?`;
  return pool
    .query(query, [id]) //
    .then(comments => comments[0][0])
    .catch(err => {
      throw err;
    });
}

export async function createComment(postType, post_id, user_id, text) {
  const query = `insert into comments_${postType}(${postType}_id,user_id,text) value(?,?,?) `;
  return pool
    .query(query, [post_id, user_id, text]) //
    .catch(err => {
      throw err;
    });
}
