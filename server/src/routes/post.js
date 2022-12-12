import express from "express";
import * as postController from "../controllers/post.js";
import uploadeContent from "../middlewares/multer.js";
import {
  validateGet,
  validateCreateBefore,
  validateCreateAfter,
  validateUpdate,
} from "../validator/post.js";

const router = express.Router();
router.get("/:postType", validateGet, postController.getPost);
router.post(
  "/:postType",
  validateCreateBefore,
  uploadeContent,
  validateCreateAfter,
  postController.createPost
);
router.put("/:postType", validateUpdate, postController.updatePost);
router.delete("/:postType", postController.removePost);

export default router;
