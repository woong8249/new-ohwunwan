import express from "express";
import * as commentController from "../controllers/comment.js";
import isAuth from "../middlewares/isAuth.js";
import isLogin from "../middlewares/isLogin.js";
import {
  validateGetComment,
  validateCreateComment,
} from "../validator/comment.js";

const router = express.Router();
router.get("/:postType", validateGetComment, commentController.getComment);
router.post(
  "/:postType",
  isLogin,
  validateCreateComment,
  commentController.createComment
);
export default router;
