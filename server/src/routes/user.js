import express from "express";
import * as userController from "../controllers/user.js";
import isLogin from "../middlewares/isLogin.js";
import { validateSignup, validateLogin } from "../validator/user.js";

const router = express.Router();

router.post("/signup", validateSignup, userController.signup);
router.post("/signin", validateLogin, userController.signin);
router.post("/signout", isLogin, userController.signout);
router.get("/me", isLogin, userController.getMe);
router.put("/me", isLogin, userController.updateMe);
router.delete("/me", isLogin, userController.deleteMe);
export default router;
