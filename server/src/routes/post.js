import express from "express";
import * as postController from "../controllers/post.js";
import isAuth from "../middlewares/isAuth.js";
import isLogin from "../middlewares/isLogin.js";
import { upload_array } from "../middlewares/multer.js";
import {
  validateGet,
  validateCreateBefore,
  validateCreateAfter,
  validateUpdate,
  validateRemove,
} from "../validator/post.js";

const router = express.Router();
router.get("/:postType", validateGet, postController.getPost);
router.post(
  "/:postType",
  isLogin,
  validateCreateBefore,
  upload_array,
  validateCreateAfter,
  postController.createPost
);
router.put(
  "/:postType",
  isLogin,
  validateUpdate,
  isAuth,
  postController.updatePost
);
router.delete(
  "/:postType",
  isLogin,
  validateRemove,
  isAuth,
  postController.removePost
);

export default router;
