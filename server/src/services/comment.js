import * as data from "../data/index.js";

export async function getComments(query, params) {
  const { post_id } = query;
  const { postType } = params;
  return data.comment.getComments(postType, post_id);
}

export async function createComment(body, params, user) {
  const { post_id, text } = body;
  const { postType } = params;
  const { id: user_id } = user;
  await data.comment.createComment(postType, post_id, user_id, text);
}
