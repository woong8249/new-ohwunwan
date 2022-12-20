// actionTypes
export const LOGIN_STATE = "login/LOGIN_STATE";

// actions
export const loginState = (value) => {
  return {
    type: LOGIN_STATE,
    loginState: value
  };
};

// reducer
const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STATE:
      return action.loginState;
    default:
      return state;
  }
};