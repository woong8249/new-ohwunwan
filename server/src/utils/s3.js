import AWS from "aws-sdk";
import config from "../config/config.js";

AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
});
const s3 = new AWS.S3();
export const s3Remove = (bucket, key) => {
  try {
    s3.deleteObject(
      {
        Bucket: bucket,
        Key: key,
      },
      function (err, data) {
        if (err) throw err;
      }
    );
  } catch (err) {
    throw err;
  }
};

export default s3;
