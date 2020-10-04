import { GET_TOP } from '../actions/types';

const initialState = {
  top: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOP:
      return {
        ...state,
        top: action.payload
      };
    default:
      return state;
  };
};