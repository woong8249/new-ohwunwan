import express from "express";
import {
  validateCreatePostLike,
  validateCreateCommentLike,
  validateDeletePostLike,
} from "../validator/like.js";
import * as likeController from "../controllers/like.js";
import isAuth from "../middlewares/isAuth.js";
import isLogin from "../middlewares/isLogin.js";

const router = express.Router();
// 게시물 좋아요 생성
router.post(
  "/post/:postType",
  isLogin,
  validateCreatePostLike,
  likeController.createPostLike
);

// 게시물 좋아요 삭제
router.delete(
  "/post/:postType",
  isLogin,
  validateDeletePostLike,
  isAuth,
  likeController.deletePostLike
);

// 댓글 좋아요 생성
router.post(
  "/comment/:commentType",
  isLogin,
  validateCreateCommentLike,
  likeController.createCommentLike
);

// 댓글 좋아요 삭제
router.delete("/comment/:commentType");

export default router;
