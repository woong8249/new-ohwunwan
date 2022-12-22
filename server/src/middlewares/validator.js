import { validationResult } from "express-validator";
import { ValidationError } from "../errors/validationError.js";

export default function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msg = errors.array()[0].msg;
    let status = 400;
    if (msg === "Already exists") status = 409;
    else if (msg === "No content") status = 404;
    else if (msg === "No authorization") status = 401;
    throw new ValidationError(msg, status);
  }
  next();
}
