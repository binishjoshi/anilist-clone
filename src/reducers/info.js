import { GET_INFO } from '../actions/types';

const initalState = {
  infoList: []
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        infoList: action.payload
      };
    default:
      return state;
  };
};