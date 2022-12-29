import { param, query, body, check, validationResult } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";

// 게시물 유무체크 by post_id
const isPost = async (value, { req }) => {
  const { postType } = req.params;
  const post_id = value;
  const post = await data.post.getpostById(postType, post_id);
  if (post) {
    req.post = post;
    return new Promise((res, rej) => res());
  } else return new Promise((res, rej) => rej());
};
//  댓글 유뮤체크  by comment_ id
const isComment = async (value, { req }) => {
  const { commentType } = req.params;
  const comment_id = value;
  const comment = await data.comment.getCommentById(commentType, comment_id);
  if (comment) {
    req.comment = comment;
    return Promise.resolve();
  } else return new Promise((res, rej) => rej());
};

// 게시물좋아요 유뮤체크 by like_id,user_id
const isPostLike = async (value, { req }) => {
  const { postType } = req.params;
  const { id: user_id } = req.user;
  const post_id = value;
  const like = await data.like.findPostLikeByUser_id(
    postType,
    user_id,
    post_id
  );
  if (like) {
    req.like = like;
    return new Promise((res, rej) => res());
  } else return new Promise((res, rej) => rej());
};

// 게시물좋아요 중복체크 by user_id
const existPostLike = async (value, { req }) => {
  const { postType } = req.params;
  const { id: user_id } = req.user;
  const { post_id } = req.body;
  const like = await data.like.findPostLikeByUser_id(
    postType,
    user_id,
    post_id
  );
  if (like) {
    return new Promise((res, rej) => rej());
  } else return new Promise((res, rej) => res());
};

// 댓글좋아요 유뮤체크 by user_id,comment_id
const isCommentLike = async (value, { req }) => {
  const { commentType } = req.params;
  const { id: user_id } = req.user;
  const comment_id = value;
  const like = await data.like.findCommentLikeByuser_id(
    commentType,
    user_id,
    comment_id
  );
  if (like) {
    req.like = like;
    return new Promise((res, rej) => res());
  } else return new Promise((res, rej) => rej());
};
// 댓글좋아요 중복체크 by user_id
const existCommentLike = async (value, { req }) => {
  const { commentType } = req.params;
  const { id: user_id } = req.user;
  const { comment_id } = req.body;
  const like = await data.like.findCommentLikeByuser_id(
    commentType,
    user_id,
    comment_id
  );
  if (like) return new Promise((res, rej) => rej());
  else return new Promise((res, rej) => res());
};

export const validateCreatePostLike = [
  param("postType")
    .isIn(["ohwunwan", "feedback", "1rm"])
    .withMessage(
      "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
    ),
  body("post_id")
    .custom((value, { req }) => !isNaN(value))
    .withMessage("Please, provide post_id as a number"),
  body("post_id") //
    .custom(isPost)
    .withMessage("No content"),
  check("user_id")
    .custom(existPostLike)
    .withMessage("You can only once like in a post"),
  validator,
];

export const validateCreateCommentLike = [
  param("commentType")
    .isIn(["ohwunwan", "feedback", "1rm"])
    .withMessage(
      "There are only 3Type in commentType: ohwunwan, feedback, 1rm . Please provide one of the following"
    ),
  body("comment_id")
    .custom((value, { req }) => !isNaN(value))
    .withMessage("Please, provide comment_id as a number"),
  body("comment_id") //
    .custom(isComment)
    .withMessage("No content"),
  check("user_id")
    .custom(existCommentLike)
    .withMessage("You can only once like in a comment"),
  validator,
];

export const validateDeletePostLike = [
  param("postType")
    .isIn(["ohwunwan", "feedback", "1rm"])
    .withMessage(
      "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
    ),
  query("post_id")
    .custom((value, { req }) => !isNaN(value))
    .withMessage("Please, provide post_id as a number"),
  query("post_id") //
    .custom(isPostLike)
    .withMessage("No content"),
  validator,
];

export const validateDeleteCommentLike = [
  param("commentType")
    .isIn(["ohwunwan", "feedback", "1rm"])
    .withMessage(
      "There are only 3Type in commentType: ohwunwan, feedback, 1rm . Please provide one of the following"
    ),
  query("comment_id")
    .custom((value, { req }) => !isNaN(value))
    .withMessage("Please, provide comment_id as a number"),
  query("comment_id") //
    .custom(isCommentLike)
    .withMessage("No content"),
  validator,
];
