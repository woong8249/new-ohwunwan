import multer, { MulterError } from "multer";
import multerS3 from "multer-s3";
import config from "../config/config.js";
import path from "path";
import s3 from "../utils/s3.js";

//* AWS S3 multer 설정
const multerS3_opts = {
  s3: s3,
  bucket: config.aws.bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  cacheControl: "max-age=31536000",
  key: function (req, file, cb) {
    const { postType } = req.params;
    const { path: userpath } = req;
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
    else if (userpath === "/me/picture")
      return cb(
        null,
        `user-profile-picture/${Date.now()}_${path.basename(file.originalname)}`
      );
  },
};

const postFileFilterOpt = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "video/mov" ||
    file.mimetype == "video/quicktime"
  ) {
    cb(null, true);
  } else {
    cb(new MulterError("The file type is only png, jpg, jpeg, mov"), false);
  }
};

// 게시물 업로드용
export const upload_array = multer({
  // s3에 저장
  storage: multerS3({ ...multerS3_opts }),
  //* 용량 제한
  limits: { fileSize: 100 * 1024 * 1024 },
  fileFilter: postFileFilterOpt,
}).array("content", 12);

const userFileFilterOpt = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new MulterError("The file type is only png, jpg, jpeg"), false);
  }
};

// 프로필사진 업로드용
export const upload_single = multer({
  // s3에 저장
  storage: multerS3({ ...multerS3_opts }),
  //* 용량 제한
  limits: { fileSize: 100 * 1024 * 1024 },
  fileFilter: userFileFilterOpt,
}).single("picture");
