import * as data from "../data/index.js";
// import { s3Remove } from "../utils/s3.js";
import { usersEmitter } from "../subscribers/users.js";
export default class UsersService {
  static async removePost(params, query) {
    const { postType } = params;
    const { id } = query;
    const infoS3 = (await data.post.getinfoS3(postType, id)).infoS3;
    const parsedInfoS3 = JSON.parse(infoS3);

    await data.post.removePost(postType, id);
    usersEmitter.emit("removePost", parsedInfoS3);
  }
}
