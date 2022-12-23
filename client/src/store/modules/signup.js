// actionTypes
export const ID = "signup/ID";
export const PASSWORD = "signup/PASSWORD";
export const PASSWORD2 = "signup/PASSWORD2"

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

export const password2 = (value) => {
  return {
    type: PASSWORD2,
    login: value
  };
};

// reducer
const initialState = {id: null, password: null, password2: null};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ID:
      return {id: action.id, password: state.password, password2: state.password2};
    case PASSWORD:
      return {id: state.id, password: action.password, password2: state.password2};
    case PASSWORD2:
      return {id: state.id, password: state.password, password2: action.password2};
    default:
      return state;
  }
};