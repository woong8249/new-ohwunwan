import { body, check, oneOf } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";
import bcrypt from "bcrypt";

export const validateSignup = [
  body("userId") //
    .isLength({ min: 4, max: 16 })
    .withMessage("The userId must be 4 ~ 16 chars long")
    .isAlphanumeric()
    .withMessage("The userId must be consist of alphanum strings"),
  body("userId") //
    .custom(value => {
      return data.user
        .findByUserId(value) //
        .then(result => {
          if (result) return new Promise((res, rej) => rej());
          else return new Promise((res, rej) => res());
        });
    })
    .withMessage("This userId already exists"),
  body("password") //
    .isLength({ min: 4, max: 16 })
    .withMessage("Tne password must be 4 ~ 16 chars long"),
  body("passwordConfirmation") //
    .custom((value, { req }) => value === req.body.password)
    .withMessage(
      "The passwordConfirmation field must have the same value as the password field"
    ),
  validator,
];

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

export const validateUpdatePicture = [
  check("file") //
    .custom((value, { req }) => {
      const file = req.file;
      if (file === undefined) return false;
      else return true;
    })
    .withMessage("Please provide picture"),
  validator,
];

export const validateDeletePicture = [
  check("file") //
    .custom((value, { req }) => {
      const file = req.user.picture;
      if (file === null) return false;
      else return true;
    })
    .withMessage("No content"),
  validator,
];

export const validateUpdateProfile = [
  oneOf([
    body("newUserId") //
      .isLength({ min: 4, max: 16 })
      .withMessage("The userId must be 4 ~ 16 chars long")
      .isAlphanumeric()
      .withMessage("The userId must be consist of alphanum strings"),
    body("newNickname") //
      .isLength({ min: 4, max: 16 })
      .withMessage("The nicnkname must be 4 ~ 16 chars long"),
  ]),
  body("newUserId", "This userId already exists")
    .if(body("newUserId").exists())
    .custom(value => {
      return data.user
        .findByUserId(value) //
        .then(result => {
          if (result) return new Promise((res, rej) => rej());
          else return new Promise((res, rej) => res());
        });
    }),
  body("newNickname", "This nickname already exists")
    .if(body("newNickname").exists())
    .custom(value => {
      return data.user
        .findByNickname(value) //
        .then(result => {
          if (result) return new Promise((res, rej) => rej());
          else return new Promise((res, rej) => res());
        });
    }),
  validator,
];

export const validateUpdatePassword = [
  body("password") //
    .isLength({ min: 4, max: 16 })
    .withMessage("The password must be 4 ~ 16 chars long"),
  body("newPassword") //
    .isLength({ min: 4, max: 16 })
    .withMessage("The password must be 4 ~ 16 chars long"),
  check("passwordConfirmation") //
    .custom((value, { req }) => value === req.body.newPassword)
    .withMessage(
      "The passwordConfirmation field must have the same value as the password field"
    ),
  body("password", "This password is incorrect") //
    .custom(isUser),
  validator,
];
