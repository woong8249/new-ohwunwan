import expressLoader from "./express.js";
import mysqlDB from "./mysql.js";

export default async ({ expressApp }) => {
  //mysql connection check
  await mysqlDB.getConnection().then(() => {
    console.log("Mysql Intialized ");
  });
  //express check
  await expressLoader({ app: expressApp });
  console.log("Express Intialized");
};
