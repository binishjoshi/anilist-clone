import { GET_SEASON, GET_NEXT, GET_POPULAR } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEASON:
      return {
        ...state,
        seasonTrending: action.payload
      };
    case GET_NEXT:
      return {
        ...state,
        nextSeason: action.payload
      };
    case GET_POPULAR:
      return {
        ...state,
        popular: action.payload
      }
    default:
      return state;
  };
};