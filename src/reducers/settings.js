import { FETCH_SETTINGS, _FULFILLED } from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_SETTINGS + _FULFILLED: {
      return { ...state, sizes: payload };
    }
    default:
      return state;
  }
};
