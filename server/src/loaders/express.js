import express from "express";
import {} from "express-async-errors";
import { MulterError } from "multer";
import cors from "cors";
import moran from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import config from "../config/config.js";
import postRouter from "../routes/post.js";
import userRouter from "../routes/user.js";
import { ValidationError } from "../errors/validationError.js";

export default async ({ app }) => {
  // ----기본세팅----
  const corsOption = {
    origin: config.cors.allowedOrigin,
    optionsSuccessStatus: 200,
    credentials: true, // allow the Access-Control-Allow-Credentials 추가해줌
  };
  app.use(cors(corsOption)); //cors set
  app.use(helmet());
  app.use(cookieParser());
  app.use(express.json()); // REST API의 body를 조회가능하게해줌 (내부미들웨어)
  if (config.env === "development") app.use(moran("dev")); // log set
  else app.use(moran("combined"));

  // ----라우팅----
  app.use("/post", postRouter);
  app.use("/user", userRouter);

  //----잘못 된 경로입력시----
  app.use((req, res, next) => {
    res.status(404).end();
  });

  //----에러케치 (비동기 에러도 잡을 수 있음 )("express-async-errors";)----
  app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
      return res.status(400).json({ message: err });
    } else if (err instanceof MulterError) {
      return res.status(400).json({ message: err.code });
    } else {
      console.error("!!!error!!!", err);
      res.status(500).json({ message: "sorry. something is wrong" });
    }
  });
};
