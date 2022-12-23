// actionTypes
export const ADD_SIGNUPERROR = "signupError/ADD_SIGNUPERROR";

// actions
export const signupError = (value) => {
  return {
    type: ADD_SIGNUPERROR,
    signupError: value
  };
};

// reducer
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SIGNUPERROR:
      return action.signupError;
    default:
      return state;
  }
};