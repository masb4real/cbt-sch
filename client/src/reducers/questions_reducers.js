import { FETCH_QUESTIONS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return [ ...state, ...action.payload ];
    default:
      return state;
  }
}