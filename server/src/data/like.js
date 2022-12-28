import pool from "../loaders/mysql.js";

// postLike  중복검사
export async function findPostLikeByUser_id(postType, user_id, post_id) {
  const query = `select * from likes_${postType} where user_id=? and ${postType}_id=?`;
  return pool
    .query(query, [user_id, post_id])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}
// postLike 유무검사
export async function findPostLikebyId(postType, id) {
  const query = `select * from likes_${postType} where id=?`;
  return pool
    .query(query, [id])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}

// commentLike 중복검사
export async function findCommentLikeByuser_id(
  commentType,
  user_id,
  comment_id
) {
  const query = `select * from likes_comment_${commentType} where user_id=? and comment_${commentType}_id=?`;
  console.log(query);
  return pool
    .query(query, [user_id, comment_id])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}
// commentLike 유무검사
export async function findCommentLikebyId(commentType, id) {
  const query = `select * from likes_comment_${commentType} where id=?`;
  return pool
    .query(query, [id])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}
// postLike 생성
export async function createPostLike(postType, user_id, post_id) {
  const query = `insert into likes_${postType} (user_id,${postType}_id) values(?,?)`;
  return pool
    .query(query, [user_id, post_id])
    .then(result => {
      const id = result[0].insertId;
      return findPostLikebyId(postType, id);
    })
    .catch(err => {
      throw err;
    });
}
// postLike 제거
export async function deletePostLike(postType, like_id) {
  const query = `delete from likes_${postType} where id=?`;
  return pool
    .query(query, [like_id]) //
    .catch(err => {
      throw err;
    });
}

// commentLike 생성
export async function createCommentLike(commentType, user_id, comment_id) {
  const query = `insert into likes_comment_${commentType} (user_id,comment_${commentType}_id) values(?,?)`;
  return pool
    .query(query, [user_id, comment_id])
    .then(result => {
      const id = result[0].insertId;
      return findCommentLikebyId(commentType, id);
    })
    .catch(err => {
      throw err;
    });
}
// commentLike 제거
export async function deleteCommentLike(postType, like_id) {
  const query = `delete from likes_comment_${postType} where id=?`;
  return pool
    .query(query, [like_id]) //
    .catch(err => {
      throw err;
    });
}
