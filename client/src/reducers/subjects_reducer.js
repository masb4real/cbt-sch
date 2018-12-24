import {
  FETCH_SUBJECTS
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return [ ...state, ...action.payload ];
    default:
      return state;
  }
}