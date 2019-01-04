import { SAVE_OPTIONS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_OPTIONS:
      if(state.length <= 0) {
        return [ ...state, action.payload];
      } else {
        let found = state.find(data => data.id === action.payload.id);

        if(found !== undefined) {
          return state.map(item => {

            if(item.id !== action.payload.id) {
              return item;
            }

            return {
              ...item,
              ...action.payload
            }
          })
        } else {
          return [...state, action.payload];
        }
      }
    default: 
      return state; 
  }
}