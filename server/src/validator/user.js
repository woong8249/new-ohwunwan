import { body, check, oneOf } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";
import bcrypt from "bcrypt";

export const validateSignup = [
  body("userId", "Please provide userId at least 5 characters").isLength({
    min: 5,
  }),
  body("userId", "Already exists").custom(value => {
    return data.user
      .findByUserId(value) //
      .then(result => {
        if (result) return new Promise((res, rej) => rej());
        else return new Promise((res, rej) => res());
      });
  }),
  body("password", "Please provide password at least 5 characters").isLength({
    min: 5,
  }),
  body(
    "passwordConfirmation",
    "Please provide passwordConfirmation at least 5 characters"
  ) //
    .isLength({ min: 5 }),
  body(
    "passwordConfirmation",
    "passwordConfirmation field must have the same value as the password field"
  ) //
    .custom((value, { req }) => value === req.body.password),
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
  body("userId", "Please provide userId at least 5 characters").isLength({
    min: 5,
  }),
  body("password", "Please provide password at least 5 characters").isLength({
    min: 5,
  }),
  body("userId", "Does not exist or the password is incorrect") //
    .custom(isUser),
  validator,
];

export const validateUpdatePicture = [
  check("file", "please provide picture").custom((value, { req }) => {
    const file = req.file;
    if (file === undefined) return false;
    else return true;
  }),
  validator,
];

export const validateDeletePicture = [
  check("file", "No content").custom((value, { req }) => {
    const file = req.user.picture;
    if (file === null) return false;
    else return true;
  }),
  validator,
];

export const validateUpdateProfile = [
  oneOf([
    body("newUserId", "Please provide newUserId at least 5 characters") //
      .isLength({ min: 5 }),
    body("newNickname", "Please provide newNickname at least 5 characters") //
      .isLength({ min: 5 }),
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
  body("password", "Please provide at least 5 characters") //
    .isLength({ min: 5 }),
  body("newPassword", "Please provide at least 5 characters") //
    .isLength({ min: 5 }),
  body("passwordConfirmation", "Please provide at least 5 characters") //
    .isLength({ min: 5 }),
  check(
    "passwordConfirmation",
    "passwordConfirmation field must have the same value as the password field"
  ) //
    .custom((value, { req }) => value === req.body.newPassword),
  body("password", "password is incorrect") //
    .custom(isUser),
  validator,
];
