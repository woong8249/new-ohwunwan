import multer from "multer";
import AWS from "aws-sdk";
import multerS3 from "multer-s3";
import config from "../config/config.js";
import path from "path";

AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
});

//* AWS S3 multer 설정
const multerS3_opts = {
  s3: new AWS.S3(),
  bucket: config.aws.bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  cacheControl: "max-age=31536000",
  key: function (req, file, cb) {
    const { postType } = req.params;
    if (postType === "ohwunwan")
      return cb(
        null,
        `post-ohwunwan/${Date.now()}_${path.basename(file.originalname)}`
      );
    else if (postType === "feedback")
      return cb(
        null,
        `post-feedback/${Date.now()}_${path.basename(file.originalname)}`
      );
    else if (postType === "1rm")
      return cb(
        null,
        `post-1rm/${Date.now()}_${path.basename(file.originalname)}`
      );
  },
};

// 이미지나 동영상을 s3로 저장하기위해 사용 (single,array)
const upload = multer({
  // s3에 저장
  storage: multerS3({ ...multerS3_opts }),
  //* 용량 제한
  limits: { fileSize: 30 * 1024 * 1024 },
}).array("content", 12);

export default async function uploadeContent(req, res, next) {
  await upload(req, res, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: err });
    }
    next();
  });
}
