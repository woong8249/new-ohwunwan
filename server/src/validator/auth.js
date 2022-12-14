import { body } from "express-validator";
import validator from "../middlewares/validator.js";
import data from "../data/index.js";

export const validateSignup = [
  body("userId", "Please provide at least 5 characters").isLength({ min: 5 }),
  body("userId", "already exists").custom(value => {
    return data.userReop.findByUserId(value).then(result => {
      if (result) return new Promise((res, rej) => rej());
      else return new Promise((res, rej) => res());
    });
  }),
  body("password", "Please provide at least 5 characters").isLength({ min: 5 }),
  validator,
];
