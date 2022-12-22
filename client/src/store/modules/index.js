// module/index.js
import { combineReducers } from "redux";
import comment from "./comment";
import loginState from "./loginState";
import login from "./login"
import loginModal from "./loginModal";
import signup from "./signup";
import signupModal from "./signupModal";


export default combineReducers({
  comment,
  loginState,
  login,
  loginModal,
  signup,
  signupModal
});