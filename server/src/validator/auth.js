import { body, check, oneOf } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";
import bcrypt from "bcrypt";

const isUser = async (value, { req }) => {
  const { password } = req.body;
  let userId = req?.user?.userId || value;
  const user = await data.user.findByUserId(userId);
  if (!user) {
    return new Promise((res, rej) => rej());
  } else {
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return new Promise((res, rej) => rej());
    req.user = user;
  }
};

export const validateLogin = [
  body("userId") //
    .isLength({ min: 4, max: 16 })
    .withMessage("The userId must be 4 ~ 16 chars long"),
  body("password") //
    .isLength({ min: 4, max: 16 })
    .withMessage("The password must be 4 ~ 16 chars long"),
  body("userId") //
    .custom(isUser)
    .withMessage("Does not exist or the password is incorrect"),
  validator,
];
