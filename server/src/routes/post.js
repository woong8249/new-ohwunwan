import express from "express";
import * as postReop from "../controllers/post.js";
const router = express.Router();

router.get("/:postType", postReop.getposts);
export default router;
