import express from "express";
import * as authController from "../controllers/auth.js";
import isLogin from "../middlewares/isLogin.js";
import { validateSignup, validateLogin } from "../validator/auth.js";

const router = express.Router();

router.post("/signup", validateSignup, authController.signup);
router.post("/signin", validateLogin, authController.signin);
router.get("/me", isLogin, authController.me);
router.post("/signout", isLogin, authController.signout);

export default router;
