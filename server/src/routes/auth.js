import express from "express";
import * as authController from "../controllers/auth.js";
import { validateSignup } from "../validator/auth.js";

const router = express.Router();

router.post("/signup", validateSignup, authController.signup);

export default router;
