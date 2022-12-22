import * as userServices from "../services/user.js";
export function signup(req, res) {
  const { body } = req;
  return userServices //
    .createUser(body)
    .then(() => res.status(201).json({ message: "Signup has completed" }));
}

export function signin(req, res) {
  const { user } = req;
  return userServices //
    .login(res, user)
    .then(userInfo => res.status(200).json(userInfo));
}

export function signout(req, res) {
  res.clearCookie("token");
  res.status(200).json({ message: "You are logged out" });
}

export function getMe(req, res) {
  const userInfo = {
    userId: req.user.userId,
    nickname: req.user.nickname,
    picture: req.user.picture,
  };
  res.status(200).json(userInfo);
}

export function updatePicture(req, res) {
  const { user, file } = req;
  return userServices
    .updatePicture(user, file)
    .then(picture => res.status(200).json({ picture }));
}

export function deletePicture(req, res) {
  const { user } = req;
  return userServices
    .updatePicture(user)
    .then(result =>
      res.status(200).json({ message: "picture has been deleted" })
    );
}
export function updateProfile(req, res) {
  const { user, body } = req;
  return userServices
    .updateProfile(res, body, user)
    .then(userInfo => res.status(200).json(userInfo));
}
export function updatePassword(req, res) {
  const { user, body } = req;
  return userServices
    .updatePassword(body, user)
    .then(() =>
      res.status(200).json({ massage: "Your password has been changed" })
    );
}
