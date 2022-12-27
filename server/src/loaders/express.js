import express from "express";
import {} from "express-async-errors";
import { MulterError } from "multer";
import cors from "cors";
import moran from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import swaggerUI from "swagger-ui-express";
import yaml from "yamljs";

import userRouter from "../routes/user.js";
import commentRouter from "../routes/comment.js";
import postRouter from "../routes/post.js";
import config from "../config/config.js";
import { csrfCheck } from "../middlewares/csrf.js";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async ({ app }) => {
  const corsOption = {
    origin: config.cors.allowedOrigin,
    optionsSuccessStatus: 200,
    credentials: true, // allow the Access-Control-Allow-Credentials 추가해줌
  };

  const openApiDoc = yaml.load(path.join(__dirname, "../api/openapi.yaml"));

  app.use(cors(corsOption)); //cors set
  app.use(helmet());
  app.use(cookieParser());
  app.use(express.json());
  if (config.env === "development") app.use(moran("dev")); // log set
  else app.use(moran("combined"));

  // ----라우팅----
  app.use(csrfCheck); //for react dev
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openApiDoc));
  app.use("/comment", commentRouter);
  app.use("/post", postRouter);
  app.use("/user", userRouter);

  //----잘못 된 경로입력시----
  app.use((req, res, next) => {
    res.status(404).end();
  });

  //----에러케치 (비동기 에러도 잡을 수 있음 )("express-async-errors";)----
  app.use((err, req, res, next) => {
    if (err instanceof MulterError) {
      return res.status(400).json({ message: err.code });
    } else if (err.status < 500) {
      return res.status(err.status).json({ message: err.message });
    } else if (err.message === "Multipart: Boundary not found") {
      return res.status(406).json({ message: err.message });
    } else {
      console.error("!!!error!!!", err);
      res.status(500).json({ message: "sorry. something is wrong" });
    }
  });
};
