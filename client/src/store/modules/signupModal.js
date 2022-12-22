// actionTypes
export const SIGNUP_MODAL = "signupModal/SIGNUP_MODAL";

// actions
export const signupModal = (value) => {
  return {
    type: SIGNUP_MODAL,
    signupModal: value
  };
};

// reducer
const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_MODAL:
      return action.signupModal;
    default:
      return state;
  }
};