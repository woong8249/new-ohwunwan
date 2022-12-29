import * as data from "../data/index.js";
export async function createPostLike(user, params, body) {
  const { id: user_id } = user;
  const { postType } = params;
  const { post_id } = body;
  return data.like.createPostLike(postType, user_id, post_id);
}
export async function createCommentLike(user, params, body) {
  const { id: user_id } = user;
  const { commentType } = params;
  const { comment_id } = body;
  return data.like.createCommentLike(commentType, user_id, comment_id);
}

export async function deletePostLike(params, like) {
  const { postType } = params;
  const { id } = like;
  return data.like.deletePostLike(postType, id);
}

export async function deleteCommentLike(params, query) {
  const { commentType } = params;
  const { like_id } = query;
  return data.like.deleteCommentLike(commentType, like_id);
}
