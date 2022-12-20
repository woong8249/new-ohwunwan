// actionTypes
export const LOGIN = "login/LOGIN";

// actions
export const login = (value) => {
  return {
    type: LOGIN,
    login: value
  };
};

// reducer
const initialState = {id: '', password: ''};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.login;
    default:
      return state;
  }
};