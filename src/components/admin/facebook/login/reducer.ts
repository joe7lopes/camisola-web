import { UPDATE_FB_TOKEN } from './actions';

const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case UPDATE_FB_TOKEN.PENDING:
      return { ...state, loading: true };
    case UPDATE_FB_TOKEN.FULFILLED:
      return { ...state, loading: false, data: true };
    case UPDATE_FB_TOKEN.REJECTED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
