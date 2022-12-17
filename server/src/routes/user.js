import express from "express";
import * as userController from "../controllers/user.js";
import isLogin from "../middlewares/isLogin.js";
import { upload_array, upload_single } from "../middlewares/multer.js";
import {
  validateSignup,
  validateLogin,
  validateUpdatePicture,
  validateDeletePicture,
} from "../validator/user.js";

const router = express.Router();

router.post("/signup", validateSignup, userController.signup);
router.post("/signin", validateLogin, userController.signin);
router.post("/signout", isLogin, userController.signout);
router.get("/me", isLogin, userController.getMe);
router.post(
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
// router.put("/me/profile", isLogin, userController.updateProfile);
// router.put("/me/password", isLogin, userController.updatePasswrd);
// router.delete("/me", isLogin, userController.deleteMe);
export default router;
