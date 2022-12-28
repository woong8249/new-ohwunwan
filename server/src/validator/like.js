import { param, query, body } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";

const isPost = async (value, { req }) => {
  const { postType } = req.params;
  const post_id = value;
  const post = await data.post.getpostById(postType, post_id);
  if (post) {
    req.post = post;
    return new Promise((res, rej) => res());
  } else return new Promise((res, rej) => rej());
};
const isComment = async (value, { req }) => {
  const { commentType } = req.params;
  const comment_id = value;
  const comment = await data.comment.getCommentById(commentType, comment_id);
  if (comment) {
    req.comment = comment;
    return new Promise((res, rej) => res());
  } else return new Promise((res, rej) => rej());
};

const isPostLike = async (value, { req }) => {
  const { postType } = req.params;
  const like_id = value;
  const like = await data.like.findPostLikebyId(postType, like_id);
  if (like) {
    req.like = like;
    return new Promise((res, rej) => res());
  } else return new Promise((res, rej) => rej());
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
  validator,
];

export const validateDeletePostLike = [
  param("postType")
    .isIn(["ohwunwan", "feedback", "1rm"])
    .withMessage(
      "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
    ),
  query("like_id")
    .custom((value, { req }) => !isNaN(value))
    .withMessage("Please, provide like_id as a number"),
  query("like_id") //
    .custom(isPostLike)
    .withMessage("No content"),
  validator,
];
