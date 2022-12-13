import { validationResult } from "express-validator";
import ValidationError from "../errors/validationError.js";

export default function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(`${errors.array()[0].msg}`, errors.array());
  }
  next();
}
