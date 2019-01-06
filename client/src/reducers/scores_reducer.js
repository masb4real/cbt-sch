import { 
  SAVE_SCORES,
  GET_SCORES
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_SCORES:
      return [ ...state, ...action.payload ];
    case GET_SCORES:
      return [ ...state, ...action.payload ];
    default:
      return state;
  }
}