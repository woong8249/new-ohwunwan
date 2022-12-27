// actionTypes
export const GET_CSRF_TOKEN = "csrfToken/ADD_ARTICLES";

// actions
export const csrfToken = (value) => {
  return {
    type: GET_CSRF_TOKEN,
    csrfToken: value
  };
};

// reducer
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CSRF_TOKEN:
      return action.csrfToken;
    default:
      return state;
  }
};