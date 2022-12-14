import * as authServices from "../services/auth.js";
export async function signup(req, res) {
  const { body } = req;
  await authServices.createUser(body);
  return res.status(201).json("signup has completed");
}
