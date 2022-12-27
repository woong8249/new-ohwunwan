import express from "express";
import * as commentController from "../controllers/comment.js";
import isAuth from "../middlewares/isAuth.js";
import isLogin from "../middlewares/isLogin.js";
import {
  validateCreateReComment_OR_UpdateComment,
  validateGetReComment_OR_DeleteComment,
  validateGetComment,
  validateCreateComment,
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
  validateGetReComment_OR_DeleteComment,
  commentController.getReComment
);

// create reply comment
router.post(
  "/reply/:postType",
  isLogin,
  validateCreateReComment_OR_UpdateComment,
  commentController.createReComment
);

// updated comment (include reply comment)
router.put(
  "/:postType",
  isLogin,
  validateCreateReComment_OR_UpdateComment,
  isAuth,
  commentController.updateComment
);

// delete comment(include reply commnet)
router.delete(
  "/:postType",
  isLogin,
  validateGetReComment_OR_DeleteComment,
  isAuth,
  commentController.deleteComment
);
export default router;
