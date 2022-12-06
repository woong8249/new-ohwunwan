import * as postReop from "../data/post.js";
export async function getPosts(postType, kind1rm, userId, number, limit) {
  return await postReop.getPosts(postType, kind1rm, userId, number, limit);
}
