import { 
  SAVE_SCORES,
  GET_SCORES
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_SCORES:
      return [ ...action.payload ];
    case GET_SCORES:
      return [ ...action.payload ];
    default:
      return state;
  }
}