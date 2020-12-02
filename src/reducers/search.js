import { SEARCH_QUERY, SEARCH_STATUS, CLEAR_SEARCH } from '../actions/types';

const initalState = {
  searchingStatus: 'notSearching',
  searchConstraints: '',
};

export default function (state = initalState, action) {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        'searchResults': action.payload
      };
    case SEARCH_STATUS:
      return {
        ...state,
        'searchingStatus': action.payload
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        'searchingStatus': 'notSearching',
      }
    default:
      return state;
  };
};