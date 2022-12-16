import express from "express";
import * as postController from "../controllers/post.js";
import { isLogin } from "../middlewares/isLogin.js";
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
router.put("/:postType", isLogin, validateUpdate, postController.updatePost);
router.delete("/:postType", isLogin, validateRemove, postController.removePost);

export default router;
