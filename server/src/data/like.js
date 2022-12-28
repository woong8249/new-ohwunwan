import pool from "../loaders/mysql.js";

export function findPostLikebyId(postType, id) {
  const query = `select * from likes_${postType} where id=?`;
  pool
    .query(query, [id])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}

export async function createPostLike(postType, user_id, post_id) {
  const query = `insert into likes_${postType} (user_id,${postType}_id) values(?,?)`;
  pool
    .query(query, [user_id, post_id])
    .then(result => {
      const id = result[0].insertId;
      return findPostLikebyId(postType, id);
    })
    .catch(err => {
      throw err;
    });
}

export function createCommentLike(commentType, user_id, comment_id) {
  const query = `insert into likes_comment_${commentType} (user_id,comment_id) values(?,?)`;
  pool
    .query(query, [user_id, comment_id])
    .then(result => {
      const id = result[0].insertId;
      return findPostLikebyId(postType, id);
    })
    .catch(err => {
      throw err;
    });
}

export function deletePostLike(postType, like_id) {
  const query = `delete from likes_${postType} where id=?`;
  pool
    .query(query, [like_id]) //
    .catch(err => {
      throw err;
    });
}
