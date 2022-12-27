// when update or delete  comment,like,post
export default function isAuth(req, res, next) {
  //  post,comment,like를 수정 삭제하는경우만 권한검사
  //  user의정보수정의 경우 1대1매칭이기때문에 권한검사 하지않겠음
  const { user, post, comment /*like*/ } = req;
  console.log(comment);
  if (post?.user_id === user.id) return next();
  else if (comment?.user_id === user.id) return next();
  else return res.status(403).json({ message: "No Authorization" });
}
