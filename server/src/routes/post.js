import express from "express";
import * as postController from "../controllers/post.js";
import uploadeContent from "../middlewares/multer.js";
const router = express.Router();

router.get("/:postType", postController.getPost);
router.post("/:postType", uploadeContent, postController.createPost);
router.put("/:postType", postController.updatePost);
router.delete("/:postType", postController.removePost);

export default router;
