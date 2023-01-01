import express from "express";
import isLogin from "../middlewares/isLogin.js";
import * as authController from "../controllers/auth.js";
import { validateLogin } from "../validator/auth.js";
const router = express.Router();

router.post("/signin", validateLogin, authController.signin);
router.post("/signout", isLogin, authController.signout);
router.get("/me", isLogin, authController.getMe);
router.get("/csrf", authController.csrfToken);
export default router;
