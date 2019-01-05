import { FETCH_SUBJECTS, ADD_SUBJECT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return [ ...state, ...action.payload ];
    case ADD_SUBJECT:
      return [ ...state, action.payload.subject ];
    default:
      return state;
  }
}