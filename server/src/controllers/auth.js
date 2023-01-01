import * as authServices from "../services/auth.js";
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
  const { user, admin } = req;
  const result = authServices.getMe(user, admin);
  res.status(200).json(result);
}
export function csrfToken(req, res) {
  return authServices
    .generateCSRFToken()
    .then(csrfToken => res.status(200).json({ csrfToken }));
}
