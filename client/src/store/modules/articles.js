// actionTypes
export const ADD_ARTICLES = "articles/ADD_ARTICLES";

// actions
export const articles = (value) => {
  return {
    type: ADD_ARTICLES,
    articles: value
  };
};

// reducer
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};