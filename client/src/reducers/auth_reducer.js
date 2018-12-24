import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  AUTH_ADMIN
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true, data: action.payload };
    case AUTH_ADMIN:
      return { ...state, error: '', authenticated: true, data: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case FETCH_MESSAGE :
      return { ...state, message: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}