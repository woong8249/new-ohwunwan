// actionTypes
export const ADD_COMMENT = "comment/ADD_COMMENT";

// actions
export const comment = (value) => {
  return {
    type: ADD_COMMENT,
    comment: value
  };
};

// reducer
const initialState = '';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return action.comment;
    default:
      return state;
  }
};