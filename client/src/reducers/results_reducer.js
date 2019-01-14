import { FETCH_ALL_EXAMS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ALL_EXAMS:
      return [ ...state, ...action.payload ];
    default:
      return state;
  }
}