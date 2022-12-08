import AWS from "aws-sdk";
import config from "../config/config.js";

AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
});
export default new AWS.S3();
