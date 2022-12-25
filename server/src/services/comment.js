import * as data from "../data/index.js";

export async function getComments(query, params) {
  const { post_id } = query;
  const { postType } = params;
  return data.comment.getComments(postType, post_id);
}
