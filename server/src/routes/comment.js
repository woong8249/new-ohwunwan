import express from "express";
import * as commentController from "../controllers/comment.js";
import isAuth from "../middlewares/isAuth.js";
import isLogin from "../middlewares/isLogin.js";
import {
  validateGetComment,
  validateCreateComment,
  validateCreateReComment,
  validateGetReComment,
  validateUpdateComment,
} from "../validator/comment.js";

const router = express.Router();
// get comment
router.get("/:postType", validateGetComment, commentController.getComment);

// create comment
router.post(
  "/:postType",
  isLogin,
  validateCreateComment,
  commentController.createComment
);

// get reply comment
router.get(
  "/reply/:postType",
  validateGetReComment,
  commentController.getReComment
);

// create reply comment
router.post(
  "/reply/:postType",
  isLogin,
  validateCreateReComment,
  commentController.createReComment
);

router.put(
  "/:postType",
  isLogin,
  validateUpdateComment,
  isAuth,
  commentController.updateComment
);
export default router;
