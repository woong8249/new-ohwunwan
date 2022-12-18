import { body, check, oneOf } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";
import bcrypt from "bcrypt";

export const validateSignup = [
  body("userId", "Please provide at least 5 characters").isLength({ min: 5 }),
  body("userId", "Already exists").custom(value => {
    return data.user
      .findByUserId(value) //
      .then(result => {
        if (result) return new Promise((res, rej) => rej());
        else return new Promise((res, rej) => res());
      });
  }),
  body("password", "Please provide at least 5 characters").isLength({ min: 5 }),
  validator,
];
const isUser = async (value, { req }) => {
  const { password } = req.body;
  const user = await data.user.findByUserId(value);
  if (!user) {
    return new Promise((res, rej) => rej());
  } else {
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return new Promise((res, rej) => rej());
    req.user = user;
  }
};

export const validateLogin = [
  body("userId", "Please provide at least 5 characters").isLength({ min: 5 }),
  body("password", "Please provide at least 5 characters").isLength({ min: 5 }),
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
    body("newUserId", "Please provide at least 5 characters") //
      .isLength({ min: 5 }),
    body("newNickname", "Please provide at least 5 characters") //
      .isLength({ min: 5 }),
  ]),
  body("newUserId", "Already exists")
    .if(body("newUserId").exists())
    .custom(value => {
      return data.user
        .findByUserId(value) //
        .then(result => {
          if (result) return new Promise((res, rej) => rej());
          else return new Promise((res, rej) => res());
        });
    }),
  body("newNickname", "Already exists")
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
