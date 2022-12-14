import express from "express";
import * as authController from "../controllers/auth.js";
import { validateSignup, validateLogin } from "../validator/auth.js";

const router = express.Router();

router.post("/signup", validateSignup, authController.signup);
router.post("/signin", validateLogin, authController.signin);

export default router;
