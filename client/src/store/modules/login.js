// actionTypes
export const ID = "login/ID";
export const PASSWORD = "login/PASSWORD";

// actions
export const id = (value) => {
  return {
    type: ID,
    login: value
  };
};

export const password = (value) => {
  return {
    type: PASSWORD,
    login: value
  };
};

// reducer
const initialState = {id: null, password: null};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ID:
      return {id: action.id, password: state.password};
    case PASSWORD:
      return {id: state.id, password: action.password};
    default:
      return state;
  }
};