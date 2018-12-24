import { FETCH_ALL_STUDENTS, ADD_STUDENT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return [ ...state, ...action.payload ];
    case ADD_STUDENT:
      return [ ...state, action.payload]
    default:
      return state;
  }
}