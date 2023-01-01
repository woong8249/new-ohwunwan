import * as authServices from "../services/auth.js";
export function signin(req, res) {
  const { user, admin } = req;
  return authServices //
    .login(res, user, admin)
    .then(result => res.status(200).json(result));
}

export function signout(req, res) {
  authServices.logout(res);
  res.status(200).json({ message: "You are logged out" });
}

export function getMe(req, res) {
  const { user, admin } = req;
  const result = authServices.getMe(user, admin);
  console.log(result);
  res.status(200).json(result);
}
export function csrfToken(req, res) {
  return authServices
    .generateCSRFToken()
    .then(csrfToken => res.status(200).json({ csrfToken }));
}
