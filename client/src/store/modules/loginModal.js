// actionTypes
export const LOGIN_MODAL = "loginModal/LOGIN_MODAL";

// actions
export const loginModal = (value) => {
  return {
    type: LOGIN_MODAL,
    loginModal: value
  };
};

// reducer
const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_MODAL:
      return action.loginModal;
    default:
      return state;
  }
};