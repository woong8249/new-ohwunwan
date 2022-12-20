// module/index.js
import { combineReducers } from "redux";
import comment from "./comment";
import loginState from "./loginState";
import login from "./login"

export default combineReducers({
  comment,
  loginState,
  login
});