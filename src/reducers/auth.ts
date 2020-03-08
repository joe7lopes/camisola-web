import {
  RESET_PASSWORD_FULFILLED,
  RESET_PASSWORD_REJECTED,
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED, SIGN_OUT_FULFILLED,
  SIGN_UP_REJECTED,
} from '../actions';
import { IAuthState } from '../types';

const INITIAL_STATE: IAuthState = {};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case SIGN_IN_FULFILLED:
      return { ...state, user: payload.user };
    case SIGN_IN_REJECTED:
      return { ...state, signInError: payload };
    case SIGN_OUT_FULFILLED:
      return { ...state, user: undefined };
    case SIGN_UP_REJECTED:
      return { ...state, signUpError: payload };
    case RESET_PASSWORD_FULFILLED:
      return state;
    case RESET_PASSWORD_REJECTED:
      return { ...state, resetPasswordError: payload };
    default:
      return state;
  }
};
