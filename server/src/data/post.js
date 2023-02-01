import pool from "../loaders/mysql.js";

const makeGetQuery = (postType, kind1rm, userId, number, limit, id) => {
  let query = `
  SELECT
    p_u.*,
    p_c_l.comments_count,
    p_c_l.likes_count
  FROM
    (SELECT
        p.id AS ${postType}_id,
        u.userId,
        u.nickname,
        u.picture,
        p.content,
        p.text,
        p.createdAt,
        p.updatedAt
    FROM
       posts_${postType} AS p
    LEFT JOIN
        users AS u
    ON p.user_id =u.id
    ) AS p_u
  LEFT JOIN
    (SELECT
          p_c.${postType}_id,
          p_c.comments_count,
          COUNT(l.${postType}_id) AS likes_count
    FROM
        (SELECT
              p.id AS ${postType}_id,
              COUNT(${postType}_id) AS comments_count
        FROM
              posts_${postType} AS p
        LEFT JOIN
              comments_${postType} AS c
        ON
              p.id=c.${postType}_id
        GROUP BY
            p.id
    )AS p_c
    LEFT JOIN
        likes_${postType} AS l
    ON
        l.${postType}_id=p_c.${postType}_id
    GROUP BY
        p_c.${postType}_id
    ) AS p_c_l
ON  p_c_l.${postType}_id=p_u.${postType}_id
order by p_u.createdAt desc `;

  if (postType === "1rm") {
    query = query.replace(
      "p.text,",
      "p.text,p.kind1rm,p.kg,rank()over (order by kg desc) as ranking,"
    );
    query = query.replace(
      "ON p.user_id =u.id",
      `ON p.user_id =u.id where kind1rm='${kind1rm}' and ranking=1`
    );
  }

  if (id) {
    query = query.replace(
      "order by p_u.createdAt desc",
      `where p_u.${postType}_id=${id} order by p_u.createdAt desc`
    );
  }

  if (userId) {
    query = query.replace(
      "order by p_u.createdAt desc",
      `where p_u.userId='${userId}' order by p_u.createdAt desc`
    );
  }

  if (number && limit) {
    query += ` LIMIT ${number},${limit}`;
  }

  // console.log(query);
  return query;
};
export async function updateRanking(id, value) {
  const query = `update posts_1rm set ranking=? where id=?`;
  return pool //
    .query(query, [value, id])
    .catch(err => {
      throw err;
    });
}

export async function getRanking(whether, kind1rm, number, limit) {
  let query = `select id,kind1rm,kg,content,text,createdAt from posts_1rm where kind1rm=? and ranking=?`;
  if (number && limit) query += ` LIMIT ${number},${limit}`;

  return pool
    .query(query, [kind1rm, whether])
    .then(result => result[0])
    .catch(err => {
      throw err;
    });
}

// To get Posts with user, comment, and like information.
// And if you provide  only 'postTye,id', It can find that post.
export async function getPost(postType, kind1rm, userId, number, limit, id) {
  return pool
    .query(makeGetQuery(postType, kind1rm, userId, number, limit, id))
    .then(result => result[0])
    .catch(err => {
      throw err;
    });
}
export async function getpostById(postType, id) {
  const query = `select * from posts_${postType} where id=?`;
  return pool
    .query(query, [id])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}

//To create ohwunwan,feedback post.
export async function createPost(postType, user_id, text, content, infoS3) {
  const query = `insert into posts_${postType}(user_id,content,text,infoS3) values(?,?,?,?)`;
  return pool
    .query(query, [user_id, content, text, infoS3])
    .then(result => {
      const id = result[0].insertId;
      return getPost(postType, null, null, null, null, id);
    })
    .catch(err => {
      throw err;
    });
}

//To create 1rm post.
export async function createPost1rm(
  postType,
  user_id,
  text,
  content,
  kg,
  kind1rm,
  infoS3
) {
  const query = `insert into posts_${postType}(user_id,kind1rm,content,text,kg,infoS3) values(?,?,?,?,?,?)`;
  return pool
    .query(query, [user_id, kind1rm, content, text, kg, infoS3])
    .then(result => {
      const id = result[0].insertId;
      return getPost(postType, null, null, null, null, id);
    })
    .catch(err => {
      throw err;
    });
}

export async function updatePost(postType, id, text) {
  const query = `update posts_${postType} set text=?,updatedAt=? where id=?`;
  return pool
    .query(query, [text, new Date(), id])
    .then(data => {
      return getPost(postType, null, null, null, null, id);
    })
    .catch(err => {
      throw err;
    });
}

export async function updatePost1rm(postType, id, text, kg) {
  const query = `update posts_${postType} set text=?,kg=? where id=?`;
  return pool
    .query(query, [text, kg, id])
    .then(data => {
      return getPost(postType, null, null, null, null, id);
    })
    .catch(err => {
      throw err;
    });
}

export async function removePost(postType, id) {
  const query = `delete from posts_${postType} where id=?`;
  await pool.query(query, [id]).catch(err => {
    throw err;
  });
}

export async function getinfoS3(postType, id) {
  const query = `select infoS3 from posts_${postType} where id=?`;
  return pool
    .query(query, [id])
    .then(result => result[0][0])
    .catch(err => {
      throw err;
    });
}
