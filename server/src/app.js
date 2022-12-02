import loaders from "./loaders/index.js";
import config from "./config/config.js";
import express from "express";
async function startServer() {
  const app = express();
  await loaders({ expressApp: app });
  app.listen(config.node.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready !`);
  });
}

startServer();
