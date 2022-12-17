import jwt from "jsonwebtoken";
import config from "../config/config.js";
import * as data from "../data/index.js";
import { ValidationError } from "../errors/validationError.js";

export default async function (req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    throw new ValidationError("No authorization", "No authorization", 401);
  }
  let decoded;
  try {
    decoded = jwt.verify(token, config.jwt.secretKey);
  } catch (err) {
    console.warn("!!!!!!!suspicious req!!!!!!!!", req);
    throw new ValidationError("No authorization", "No authorization", 401);
  }
  const user = await data.user.findByUserId(decoded.userId);
  if (!user) {
    console.warn("!!!!!!!suspicious req!!!!!!!!", req);
    throw new ValidationError("No authorization", "No authorization", 401);
  }
  req.user = user; // req.customData

  next();
}
