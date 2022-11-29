import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: path.join(__dirname, ".env.production") });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, ".env.development") });
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
  host: {
    port: parseInt(required("HOST_PORT")),
  },
};
export default config;
