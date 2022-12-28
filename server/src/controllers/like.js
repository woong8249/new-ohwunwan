import * as likeServices from "../services/like.js";

export async function createPostLike(req, res) {
  const { user, params, body } = req;
  likeServices
    .createPostLike(user, params, body)
    .then(like => res.status(201).json(like));
}

export function createCommentLike(req, res) {
  const { user, params, body } = req;
  likeServices
    .createCommentLike(user, params, body)
    .then(like => res.status(201).json(like));
}

export function deletePostLike(req, res) {
  const { params, query } = req;
  likeServices
    .deletePostLike(params, query)
    .then(() => res.status(200).json({ message: "ok" }));
}
