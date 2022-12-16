import jwt from "jsonwebtoken";
import config from "../config/config.js";
import * as data from "../data/index.js";

export const isLogin = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  jwt.verify(token, config.jwt.secretKey, async (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Authentication Error" });
    }
    const user = await data.user.findByUserId(decoded.userId);
    if (!user) {
      console.warn("suspicious req", req);
      return res.status(401).json({ message: "Authentication Error" });
    }
    req.user = user; // req.customData

    next();
  });
};
