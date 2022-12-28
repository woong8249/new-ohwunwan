import express from "express";
import * as userController from "../controllers/user.js";
import isLogin from "../middlewares/isLogin.js";
import { upload_single } from "../middlewares/multer.js";
import {
  validateSignup,
  validateLogin,
  validateUpdatePicture,
  validateDeletePicture,
  validateUpdateProfile,
  validateUpdatePassword,
} from "../validator/user.js";

const router = express.Router();

router.post("/signup", validateSignup, userController.signup);
router.post("/signin", validateLogin, userController.signin);
router.post("/signout", isLogin, userController.signout);
router.get("/me", isLogin, userController.getMe);
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
router.get("/csrf", userController.csrfToken);
export default router;
