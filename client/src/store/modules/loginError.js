// actionTypes
export const ADD_LOGINERROR = "articles/ADD_loginError";

// actions
export const loginError = (value) => {
  return {
    type: ADD_LOGINERROR,
    loginError: value
  };
};

// reducer
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOGINERROR:
      return action.loginError;
    default:
      return state;
  }
};