import { 
  ADD_SELECTED_SUBJECTS,
  CLEAR_SELECTED_SUBJECTS
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_SELECTED_SUBJECTS:
      return [ ...state, ...action.payload ];
    case CLEAR_SELECTED_SUBJECTS:
      return [];
    default:
      return state;
  }
}