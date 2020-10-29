import { PUT_GENRE, PUT_YEAR, PUT_FORMAT, PUT_SEASON, SEARCH_QUERY, SEARCH_STATUS, CLEAR_SEARCH } from '../actions/types';

const initalState = {
  searchingStatus: 'notSearching',
};

export default function (state = initalState, action) {
  switch (action.type) {
    case PUT_GENRE:
      return {
        ...state,
        'genre': action.payload
      };
    case PUT_YEAR:
      return {
        ...state,
        'year': action.payload
      };
    case PUT_SEASON:
      return {
        ...state,
        'season': action.payload
      };
    case PUT_FORMAT:
      return {
        ...state,
        'format': action.payload
      };
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