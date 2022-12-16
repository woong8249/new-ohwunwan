import * as authServices from "../services/auth.js";
export function signup(req, res) {
  const { body } = req;
  return authServices //
    .createUser(body)
    .then(result => res.status(201).json({ message: "Signup has completed" }));
}

export function signin(req, res) {
  const { user } = req;
  return authServices //
    .login(res, user)
    .then(userinfo => res.status(200).json(userinfo));
}

export function me(req, res) {
  const userinfo = {
    userId: req.user.userId,
    nickname: req.user.nickname,
    picture: req.user.picture,
  };
  res.json(userinfo);
}
