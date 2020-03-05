import { SIGN_IN_FULFILLED } from '../actions';
import { IAuthState } from '../types';

interface IProps {
    type: string,
    payload: IAuthState
}

export default (state = {}, { type, payload }: IProps) => {
  switch (type) {
    case SIGN_IN_FULFILLED:
      return { ...state, authToken: payload };
    default:
      return state;
  }
};
