import * as types from './types';

const initialState = {
  data: [],
  loading: false,
  error: ''
};

const articles = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_ARTICLE_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    case types.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };

    case types.GET_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default articles;