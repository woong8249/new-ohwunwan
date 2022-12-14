import { ValidationError } from "../errors/validationError.js";
import { MulterError } from "multer";
import {} from "express-async-errors";
import express from "express";
import cors from "cors";
import moran from "morgan";
import helmet from "helmet";
import config from "../config/config.js";
import postRouter from "../routes/post.js";

export default async ({ app }) => {
  app.use(cors()); //cors set
  app.use(helmet());
  app.use(express.json()); // REST API의 body를 조회가능하게해줌 (내부미들웨어)
  if (config.env === "development") app.use(moran("dev")); // log set
  else app.use(moran("combined"));

  app.use("/post", postRouter);

  //잘못 된 경로입력시
  app.use((req, res, next) => {
    res.status(404).end();
  });

  //비동기 에러도 잡을 수 있음 ("express-async-errors";)
  app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
      return res.status(400).json({ message: err });
    } else if (err instanceof MulterError) {
      return res.status(400).json({ message: err.code });
    } else {
      console.error("!!!error!!!", err);
      res.status(500).json({ message: err.message });
    }
  });
};
