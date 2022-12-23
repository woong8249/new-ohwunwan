// module/index.js
import { combineReducers } from "redux";

// redux
import login  from "./login"
import loginState from "./loginState";
import loginModal from "./loginModal";
import loginError from "./loginError";
import signup  from "./signup";
import signupModal from "./signupModal";
import signupError from "./signupError";
import comment from "./comment";
import articles from "./articles";
import user from "./user";

export default combineReducers({
  comment,
  loginState,
  login,
  loginModal,
  signup,
  signupModal,
  articles,
  user,
  loginError,
  signupError
});