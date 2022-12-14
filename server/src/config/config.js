import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: path.join(__dirname, "../../.env.production") });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, "../../.env.development") });
} else {
  throw new Error("process.env.NODE_ENV를 설정하지 않았습니다!");
}

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == undefined) throw new Error(`config ${key} is  undefined`);
  return value;
}

const config = {
  env: required("NODE_ENV"),
  node: {
    port: parseInt(required("HOST_PORT")),
  },
  db: {
    host: required("DB_HOST"),
    database: required("DB_DATABASE"),
    user: required("DB_USER"),
    password: required("DB_PASSWORD"),
    connectionLimit: parseInt(required("DB_CONNETCION_POOL_LIMITE")),
  },
  aws: {
    accessKeyId: required("S3_ACCESS_KEY_ID"),
    secretAccessKey: required("S3_SECRET_ACCESS_KEY"),
    region: required("REGION"),
    bucket: required("BUCKET"),
  },
  jwt: {
    secretKey: required("JWT_KEY"),
    expires: parseInt(required("JWT_EXPIRES")),
  },
  bcrypt: {
    saltRound: parseInt(required("BCRYPT_SALT_ROUNDS")),
  },
};
export default config;
