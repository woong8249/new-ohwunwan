import jwt from "jsonwebtoken";
import config from "../config/config.js";
import * as data from "../data/index.js";

const message = "No Authentication";
export default async function (req, res, next) {
  let token = req.cookies.token;
  // Note for Swagger UI and Swagger Editor users:
  //  Cookie authentication is currently not supported for "try it out" requests due to browser security restrictions.
  // See this issue for more information. SwaggerHub does not have this limitation.
  // https://swagger.io/docs/specification/authentication/cookie-authentication/
  // For apidoc, check also req.headers once
  if (!token) token = req.headers["token"];
  if (!token) {
    return res.status(401).json({ message });
  }
  let decoded;
  try {
    decoded = jwt.verify(token, config.jwt.secretKey);
  } catch (err) {
    return res.status(401).json({ message });
  }
  const user = await data.user.findByUserId(decoded.userId);
  if (!user) {
    return res.status(401).json({ message });
  }
  req.user = user; // req.customData

  next();
}
