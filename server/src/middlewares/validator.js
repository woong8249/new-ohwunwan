import { validationResult } from "express-validator";

export default function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msg = errors.array()[0].msg;
    let status = 400;
    if (msg.includes("already exists")) status = 409;
    else if (msg === "No content") status = 404;
    return res.status(status).json({ message: msg });
  }
  next();
}
