import {SIGN_IN_ADMIN, SIGN_OUT_ADMIN} from './actions';

export interface IAdminAuth {
  loading: boolean,
  token?: string,
  error?: string
}

const INITIAL_STATE : IAdminAuth = {
  loading: false,
  token: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case SIGN_IN_ADMIN.PENDING:
      return { ...state, loading: true };
    case SIGN_IN_ADMIN.FULFILLED:
      return { ...state, loading: false, token: payload.token };
    case SIGN_IN_ADMIN.REJECTED:
      return { ...state, loading: false, ...payload };
    case SIGN_OUT_ADMIN.REQUESTED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
