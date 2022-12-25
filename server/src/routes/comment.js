import express from "express";
import * as commentController from "../controllers/comment.js";
import isAuth from "../middlewares/isAuth.js";
import isLogin from "../middlewares/isLogin.js";
import { validateGetComment } from "../validator/comment.js";

const router = express.Router();
router.get("/:postType", validateGetComment, commentController.getComment);
export default router;
