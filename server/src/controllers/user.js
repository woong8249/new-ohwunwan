import * as userServices from "../services/user.js";
export function signup(req, res) {
  const { body } = req;
  return userServices //
    .createUser(body)
    .then(result => res.status(201).json({ message: "Signup has completed" }));
}

export function signin(req, res) {
  const { user } = req;
  return userServices //
    .login(res, user)
    .then(userinfo => res.status(200).json(userinfo));
}

export function signout(req, res) {
  res.clearCookie("token");
  res.status(200).json({ message: "You are logged out" });
}

export function getMe(req, res) {
  const userinfo = {
    userId: req.user.userId,
    nickname: req.user.nickname,
    picture: req.user.picture,
  };
  res.json(userinfo);
}

export function updateMe(req, res) {}

export function deleteMe(req, res) {}
