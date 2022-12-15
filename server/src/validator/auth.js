import { body } from "express-validator";
import validator from "../middlewares/validator.js";
import * as data from "../data/index.js";
import bcrypt from "bcrypt";

export const validateSignup = [
  body("userId", "Please provide at least 5 characters").isLength({ min: 5 }),
  body("userId", "already exists").custom(value => {
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
