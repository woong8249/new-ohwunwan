// actionTypes
export const USERINFO = "user/USERINFO";

// actions
export const user = (value) => {
  return {
    type: USERINFO,
    user: value
  };
};

// reducer
const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERINFO:
      return action.user;
    default:
      return state;
  }
};