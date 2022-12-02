import {} from "express-async-errors";
import express from "express";
import cors from "cors";
import moran from "morgan";
import helmet from "helmet";
import config from "../config/config.js";

export default async ({ app }) => {
  app.use(express.json()); // REST API의 body를 조회가능하게해줌 (내부미들웨어)
  app.use(cors()); //cors set
  app.use(helmet()); //
  if (config.env === "development") app.use(moran("dev")); // log set
  else app.use(moran("combined"));

  //잘못 된 경로입력시
  app.use((req, res, next) => {
    res.status(404).json("not found");
  });

  //비동기 에러도 잡을 수 있음 ("express-async-errors";)
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
  });
};
