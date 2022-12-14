import * as authServices from "../services/auth.js";
export function signup(req, res) {
  const { body } = req;
  return authServices //
    .createUser(body)
    .then(result => res.status(201).json({ message: "signup has completed" }));
}

export function signin(req, res) {
  const { userId } = req.body;
  return authServices //
    .login(res, userId)
    .then(result => res.status(200).json({ userId }));
}
