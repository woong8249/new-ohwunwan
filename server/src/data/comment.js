import pool from "../loaders/mysql.js";

// 부모댓글조회
export async function getComments(postType, post_id, number, limit) {
  let query = `
  select
   comment_id,text,ccc.createdAt,updatedAt,userId,nickname,picture,replycount 
  from 
      (select c.id as comment_id,c.user_id,c.text,c.createdAt,c.updatedAt,cc.replyCount 
          from (select * from comments_${postType} where ${postType}_id=? and parent is null) as c
      left join
          (select parent as id,COUNT(parent) as replyCount from comments_${postType} where ${postType}_id=? and parent is not null group by parent) as cc
          on cc.id=c.id) as ccc
   left join 
      users as u
   on 
      ccc.user_id =u.id
   order by createdAt desc`;
  if (postType === "feedback") {
    query = query.replace(
      "picture,replycount",
      `picture,replycount,ccc.selection `
    );
    query = query.replace(
      "c.updatedAt,cc.replyCount",
      `c.updatedAt,cc.replyCount,c.selection `
    );
  }

  if (number && limit) {
    query += ` LIMIT ${number},${limit}`;
  }
  return pool
    .query(query, [post_id, post_id]) //
    .then(comments => comments[0])
    .catch(err => {
      throw err;
    });
}
// to know to exist comment
export async function getCommentById(postType, id) {
  const query = `select * from comments_${postType} where id=?`;
  return pool
    .query(query, [id]) //
    .then(comments => comments[0][0])
    .catch(err => {
      throw err;
    });
}
//
// 댓글 , 대댓글 생성
export async function createComment(postType, post_id, user_id, text, parent) {
  let query = `insert into comments_${postType}(${postType}_id,user_id,text) value(?,?,?) `;
  if (parent)
    query = `insert into comments_${postType}(${postType}_id,user_id,text,parent) value(?,?,?,?) `;
  return pool
    .query(query, [post_id, user_id, text, parent])
    .then(result => {
      const id = result[0].insertId;
      return getCommentById(postType, id);
    })
    .catch(err => {
      throw err;
    });
}
// 대댓글조회
export async function getReComments(postType, comment_id, number, limit) {
  let query = `select c.id as comment_id,text,c.createdAt,updatedAt,u.userId,u.nickname,u.picture from comments_${postType} as c left join users as u  on c.user_id=u.id where c.parent=?  order by createdAt desc `;
  if (number && limit) {
    query += ` LIMIT ${number},${limit}`;
  }
  if (postType === "feedback") {
    query = query.replace("u.picture", `u.picture,c.selection `);
  }
  return pool
    .query(query, [comment_id]) //
    .then(comments => comments[0])
    .catch(err => {
      throw err;
    });
}
// 댓글,대댓글 수정
export async function updateComment(postType, id, text) {
  let query = `update comments_${postType} set text=?, updatedAt=? where id=?`;
  return pool //
    .query(query, [text, new Date(), id])
    .then(() => getCommentById(postType, id))
    .catch(err => {
      throw err;
    });
}

export async function deleteComment(postType, id) {
  let query = `delete from comments_${postType} where id=?`;
  return pool //
    .query(query, [id])
    .catch(err => {
      throw err;
    });
}

// select or unSelect
export async function selectComment(id, selection) {
  let query;
  if (!selection) {
    query = `update comments_feedback set selection=1  where id=?`;
  } else {
    query = `update comments_feedback set selection=null  where id=?`;
  }
  return pool //
    .query(query, [id])
    .catch(err => {
      throw err;
    });
}
