// when update or delete  comment,like,post
export default function isAuth(req, res, next) {
  //  post,comment,like를 수정 삭제하는경우만 권한검사
  //  user의정보수정의 경우 1대1매칭이기때문에 권한검사 하지않겠음
  // admin의경우 권한검사가 없음(만약 usertoken인경우 할수있는 기능이 제한됨)
  const { user, post, comment, like, admin } = req;
  if (user) {
    if (post?.user_id === user.id) return next();
    if (comment?.user_id === user.id) return next();
    if (like?.user_id === user.id) return next();
  }
  if (admin) return next();
  return res.status(403).json({ message: "No Authorization" });
}
