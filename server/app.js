import express from "express";
import cors from "cors";
import moran from "morgan";
import helmet from "helmet";
import config from "./config/config.js";

const app = express();

app.use(express.json()); // REST API의 body를 조회가능하게해줌 (내부미들웨어)
app.use(cors());
app.use(helmet());
if (config.env === "development") app.use(moran("dev"));
else app.use(moran("combined"));
app.use((req, res, next) => {
  res.json("new ohwunwan start");
});
app.listen(config.host.port);
