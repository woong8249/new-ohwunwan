import mysql from "mysql2";
import config from "../config/config.js";

const pool = await mysql.createPool({ ...config.db });

export default pool.promise();
