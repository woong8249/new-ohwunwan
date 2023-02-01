import { s3Remove } from "../utils/s3.js";
import EventEmitter from "events";

export const usersEmitter = new EventEmitter();
usersEmitter.on("removePost", parsedInfoS3 => {
  parsedInfoS3.forEach(item => {
    s3Remove(item.bucket, item.key);
  });
});
