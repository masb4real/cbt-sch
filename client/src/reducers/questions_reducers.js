import { FETCH_QUESTIONS, CLEAR_QUESTIONS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, all: action.payload };
    case CLEAR_QUESTIONS:
      return {};
    default:
      return state;
  }
}