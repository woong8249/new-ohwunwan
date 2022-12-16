import { ValidationError } from "../errors/validationError.js";
// when update or delete  comment,like,post
export default function isAuth(req, res, next) {
  //   useifo를 수정하는경우  자기자신의 정보를 수정하게끔 설계되어있기떄문에
  //   해당미들웨어를 거칠 필요가 없다
  const { user, post /*comment,like*/ } = req;
  const { postType } = req.params;
  if (post[0]) {
    if (post[0].userId === user.userId) next();
    else throw new ValidationError("no authorization", "no authorization");
  }
}
