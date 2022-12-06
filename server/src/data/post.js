import pool from "../loaders/mysql.js";

const makePostQuery = (postType, kind1rm, userId, number, limit) => {
  let query = `SELECT
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
    query = query.replace("p.text,", "p.text,p.kind,p.ranking,p.kg,");
  }
  if (kind1rm) {
    query = query.replace(
      "order by p_u.createdAt desc",
      `WHERE kind='${kind1rm}' order by p_u.createdAt desc`
    );
  }
  if (userId) {
    query = query.replace(
      "ON p.user_id =u.id",
      `ON p.user_id =u.id WHERE userId='${userId}'`
    );
  }
  if (number && limit) {
    query += ` LIMIT ${number},${limit}`;
  }

  console.log(query);
  return query;
};

export async function getPosts(postType, kind1rm, userId, number, limit) {
  return pool
    .query(makePostQuery(postType, kind1rm, userId, number, limit))
    .then(result => result[0])
    .catch(err => console.error(err));
}
