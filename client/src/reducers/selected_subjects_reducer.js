import { 
  ADD_SELECTED_SUBJECTS 
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_SELECTED_SUBJECTS:
      return [ ...state, ...action.payload ];
    default:
      return state;
  }
}