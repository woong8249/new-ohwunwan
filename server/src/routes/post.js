import express from "express";
import { body, param, query } from "express-validator";
import * as postController from "../controllers/post.js";
import uploadeContent from "../middlewares/multer.js";
import validator from "../middlewares/validator.js";

const validateGet = [
  param(
    "postType",
    "There are only 3Type: ohwunwan, feedback, 1rm . Please provide one of the following"
  ).isIn(["ohwunwan", "feedback", "1rm"]),
  query("kind1rm", "It can provide when postType is 1rm")
    .if(query("kind1rm").exists())
    .custom((value, { req }) => req.params.postType === "1rm"),
  query("kind1rm", "There are only 3kind: bench, dead, squat ")
    .if(query("kind1rm").exists())
    .isIn(["bench", "dead", "squat"]),
  validator,
];

const validateCreateBefore = [
  param(
    "postType",
    "There are only 3Type: ohwunwan, feedback, 1rm . Please provide one of the following"
  ).isIn(["ohwunwan", "feedback", "1rm"]),
  validator,
];
const validateCreateAfter = [
  param(
    "postType",
    "If you selected 1rm as the post type, you have to provide kind1rm,kg, and there are only 3kind: bench, dead, squat "
  )
    .if(value => value === "1rm")
    .custom((value, { req }) => {
      const { kind1rm, kg } = req.body;
      if (kind1rm || kg) return false;
      if (kind1rm === "bench" || kind1rm === "squat" || kind1rm === "dead") {
        return true;
      } else return false;
    }),
  body("text", "please enter the text").notEmpty(),
  body("userId", "please enter the userId").notEmpty(),
  validator,
];

const router = express.Router();
router.get("/:postType", validateGet, postController.getPost);
router.post(
  "/:postType",
  validateCreateBefore,
  uploadeContent,
  validateCreateAfter,
  postController.createPost
);
router.put("/:postType", postController.updatePost);
router.delete("/:postType", postController.removePost);

export default router;
