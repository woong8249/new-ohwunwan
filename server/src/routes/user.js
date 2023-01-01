import express from "express";
import * as userController from "../controllers/user.js";
import isLogin from "../middlewares/isLogin.js";
import { upload_single } from "../middlewares/multer.js";
import {
  validateSignup,
  validateUpdatePicture,
  validateDeletePicture,
  validateUpdateProfile,
  validateUpdatePassword,
} from "../validator/user.js";

const router = express.Router();

router.post("/signup", validateSignup, userController.signup);
router.put(
  "/me/picture",
  isLogin,
  upload_single,
  validateUpdatePicture,
  userController.updatePicture
);
router.delete(
  "/me/picture",
  isLogin,
  validateDeletePicture,
  userController.deletePicture
);
router.put(
  "/me/profile",
  isLogin,
  validateUpdateProfile,
  userController.updateProfile
);
router.put(
  "/me/password",
  isLogin,
  validateUpdatePassword,
  userController.updatePassword
);
router.delete("/withdrawal", isLogin, userController.withdrawal);

export default router;
