import express from "express";
import * as postController from "../controllers/post.js";
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
  validateCreateBefore,
  upload_array,
  validateCreateAfter,
  postController.createPost
);
router.put("/:postType", validateUpdate, postController.updatePost);
router.delete("/:postType", validateRemove, postController.removePost);

export default router;
