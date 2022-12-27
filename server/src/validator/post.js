import { body, check, param, query } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";

export const validateGet = [
  param(
    "postType",
    "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
  ).isIn(["ohwunwan", "feedback", "1rm"]),
  query("kind1rm", "'kind1rm' can provide when postType is 1rm")
    .if(query("kind1rm").exists())
    .custom((value, { req }) => req.params.postType === "1rm"),
  query("kind1rm", "There are only 3kind in 'kind1rm': bench, dead, squat")
    .if(query("kind1rm").exists())
    .isIn(["bench", "dead", "squat"]),
  validator,
];

export const validateCreateBefore = [
  param(
    "postType",
    "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
  ).isIn(["ohwunwan", "feedback", "1rm"]),
  query("text", "Please enter the text").notEmpty(),
  param(
    "postType",
    "If you selected 1rm as the post type, you have to provide kind1rm,kg, and there are only 3kind: bench, dead, squat "
  )
    .if(value => value === "1rm")
    .custom((value, { req }) => {
      const { kind1rm, kg } = req.query;
      if (!(kind1rm && kg)) return false;
      if (kind1rm === "bench" || kind1rm === "squat" || kind1rm === "dead") {
        return true;
      } else return false;
    }),
  validator,
];

export const validateCreateAfter = [
  check("files", "No content").custom((value, { req }) => {
    if (req?.files?.length) return true;
    else return false;
  }),
  validator,
];

const isPost = async (value, { req }) => {
  const id = value;
  const { postType } = req.params;
  return data.post
    .getpostById(postType, id) //
    .then(post => {
      if (!post) return new Promise((res, rej) => rej());
      req.post = post;
      return new Promise((res, rej) => res());
    });
};

export const validateUpdate = [
  param(
    "postType",
    "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
  ).isIn(["ohwunwan", "feedback", "1rm"]),
  body("id", "Please provide post_id").notEmpty(),
  body("id", "No content") //
    .custom(isPost),
  body("kg", "No data to change")
    .if((value, { req }) => req.params.postType === "1rm")
    .custom((value, { req }) => {
      const { text, kg } = req.body;
      if (text || kg) return true;
      else return false;
    }),
  body("text", "No data to change")
    .if((value, { req }) => req.params.postType !== "1rm")
    .custom((value, { req }) => {
      const { text } = req.body;
      if (!text) return false;
      else return true;
    }),
  validator,
];

export const validateRemove = [
  param(
    "postType",
    "There are only 3Type in postType: ohwunwan, feedback, 1rm . Please provide one of the following"
  ).isIn(["ohwunwan", "feedback", "1rm"]),
  query("id", "please provide post_id").notEmpty(),
  query("id", "No content") //
    .custom(isPost),
  validator,
];
