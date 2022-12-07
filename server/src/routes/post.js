import express from "express";
import * as postController from "../controllers/post.js";
import uploade from "../middlewares/multer.js";
const router = express.Router();

router.get("/:postType", postController.getPost);
router.post("/:postType", uploade, postController.createPost);
router.put("/", postController.updatePost);
router.delete("/", postController.removePost);

export default router;
