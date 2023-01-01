import { body, check, oneOf, param } from "express-validator";
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
const isAdmin = async (value, { req }) => {
  const { password } = req.body;
  let adminId = req?.admin?.adminId || value;
  const admin = await data.admin.findByAdminId(adminId);
  if (!admin) {
    return new Promise((res, rej) => rej());
  } else {
    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword) return new Promise((res, rej) => rej());
    req.admin = admin;
  }
};

export const validateLogin = [
  param("who")
    .isIn(["user", "admin"])
    .withMessage(
      "There are only 2Type in Type: user of admin. Please provide one of the following"
    ),
  oneOf(
    [
      body("userId") //
        .notEmpty(),
      body("adminId") //
        .notEmpty(),
    ],
    "Please provide userId or adminId"
  ),
  body("password") //
    .isLength({ min: 4, max: 16 })
    .withMessage("The password must be 4 ~ 16 chars long"),
  body("userId") //
    .if(body("userId").exists())
    .isLength({ min: 4, max: 16 })
    .withMessage("The userId must be 4 ~ 16 chars long")
    .isAlphanumeric()
    .withMessage("The userId must be consist of alphanum strings")
    .custom(isUser)
    .withMessage("Does not exist or the password is incorrect"),
  body("adminId") //
    .if(body("adminId").exists())
    .isLength({ min: 4, max: 16 })
    .withMessage("The adminId must be 4 ~ 16 chars long")
    .isAlphanumeric()
    .withMessage("The adminId must be consist of alphanum strings")
    .custom(isAdmin)
    .withMessage("Does not exist or the password is incorrect"),
  validator,
];
