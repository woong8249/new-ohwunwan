import { param, query, body } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";

const isPost = async (value, { req }) => {
  const { postType } = req.params;
  const post_id = value;
  const post = await data.post.getpostById(postType, post_id);
  if (post) return new Promise((res, rej) => res());
  else return new Promise((res, rej) => rej());
};

export const validateGetComment = [
  param("postType")
    .isIn(["ohwunwan", "feedback", "1rm"])
    .withMessage(
      "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
    ),
  query("post_id")
    .custom((value, { req }) => !isNaN(value))
    .withMessage("Please, provide post_id as a number"),
  query("post_id") //
    .custom(isPost)
    .withMessage("No content"),
  validator,
];

export const validateCreateComment = [
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
  body("text") //
    .notEmpty()
    .withMessage("Please, provide the text"),
  validator,
];
